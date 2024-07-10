from fastapi import FastAPI
from starlette_graphene3 import GraphQLApp
import graphene


class Query(graphene.ObjectType):
    hello = graphene.String(name=graphene.String(default_value="stranger"))

    def resolve_hello(self, info, name):
        return f'Hello {name}!'


schema = graphene.Schema(query=Query)

app = FastAPI()


@app.get("/")
async def read_root():
    return {"message": "Welcome to the FastAPI GraphQL server"}

app.add_route("/graphql", GraphQLApp(schema=schema))
