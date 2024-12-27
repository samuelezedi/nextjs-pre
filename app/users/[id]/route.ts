import { users } from "../route";

export async function GET(_request: Request, { params }: {params: { id: string }}) {
    const { id } = await params;
    const user = users.find((usr) => usr.id === parseInt(id));
    console.log(user);
    return Response.json(user);
}