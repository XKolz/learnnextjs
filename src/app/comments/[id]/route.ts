import { redirect } from "next/navigation";
import { comments } from '../data';

export async function GET(
    _request: Request,
    { params }: { params: { id: string } }
) {
  if (parseInt(params.id) > comments.length) {
    redirect("/comments");
  }
    const comment = comments.find(
        (comment) => comment.id === parseInt(params.id, 10)
    );

    if (!comment) {
        return new Response('Comment not found', { status: 404 });
    }

    return new Response(JSON.stringify(comment), {
        headers: { 'Content-Type': 'application/json' },
    });
}

export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
) {
    const newCommentData = await request.json();

    const index = comments.findIndex(
        (comment) => comment.id === parseInt(params.id, 10)
    );

    if (index === -1) {
        return new Response('Comment not found', { status: 404 });
    }

    comments[index] = { ...comments[index], ...newCommentData };

    return new Response(JSON.stringify(comments[index]), {
        headers: { 'Content-Type': 'application/json' },
    });
}

export async function PATCH(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    const body = await request.json();
    const { text } = body;
  
    const index = comments.findIndex(
      (comment) => comment.id === parseInt(params.id)
    );
    comments[index].text = text;
    return Response.json(comments[index]);
  }
  
  export async function DELETE(
    _request: Request,
    { params }: { params: { id: string } }
  ) {
    const index = comments.findIndex(
      (comment) => comment.id === parseInt(params.id)
    );
    const deletedComment = comments[index];
    comments.splice(index, 1);
    return Response.json(deletedComment);
  }