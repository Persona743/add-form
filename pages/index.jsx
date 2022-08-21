import AddForm from '../components/users/AddForm.jsx';

export default function Home({ form }) {
    return (
        <div>
            <AddForm form={form} />
        </div>
    );
}
