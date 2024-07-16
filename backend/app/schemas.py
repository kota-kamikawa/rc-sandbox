from typing import List
import strawberry


@strawberry.type
class Todo:
    id: int
    title: str
    completed: bool


# ダミーデータ
todos = [
    Todo(id=1, title="Buy milk", completed=False),
    Todo(id=2, title="Clean the house", completed=True),
]


@strawberry.type
class Query:
    @strawberry.field
    def hello(self) -> str:
        return "Hello World"

    @strawberry.field
    def get_todos(self) -> List[Todo]:
        return todos


@strawberry.type
class Mutation:
    @strawberry.mutation
    def add_todo(self, id: int, title: str, completed: bool) -> Todo:
        print(f"Adding {title} by {completed}")

        return Todo(id=id, title=title, completed=completed)


schema = strawberry.Schema(query=Query, mutation=Mutation)
