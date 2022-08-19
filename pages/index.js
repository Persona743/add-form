import AddForm from '../components/AddForm';
import Form from '../components/Form';

export default function Home({ form }) {
    return (
        <div>
            <AddForm form={form} />
        </div>
    );
}
