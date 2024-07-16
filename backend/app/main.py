from fastapi import FastAPI
from strawberry.fastapi import GraphQLRouter
from app.schemas import schema

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


graphql_app = GraphQLRouter(schema)
app.include_router(graphql_app, prefix="/graphql")
