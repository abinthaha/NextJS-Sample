import { useRouter } from 'next/router';

function ListDetailsPage () {

    const routerObj = useRouter();

    console.log(routerObj.query.listid);
    const listId = routerObj.query.listid;

    return (
        <div>List details page {listId}</div>
    )
}

export default ListDetailsPage