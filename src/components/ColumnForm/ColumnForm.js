import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from  './../Button/Button';

const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: title, icon: icon});
        setTitle('');
        setIcon('');
    };

	return (
        <form onSubmit={handleSubmit} className={styles.columnForm}>
           <label>Title: </label><input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <label>Icon:</label> <input type="text" value={icon} onChange={e => setIcon(e.target.value)} />
            <Button>Add column</Button>
        </form>
	);
};

export default ColumnForm;