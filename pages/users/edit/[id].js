import { AddForm } from './../../../components/AddForm';
// import { userService } from 'services';


export async function getServerSideProps({ params }) {
    const user = await userService.getById(params.id);
    
    return {
        props: { user },
    };
}

export default AddForm;