import style from './ContactList.module.css';

export const ContactList = ({ contactsArr, deleteContact }) => {
  return (
    <div>
      <ul>
        {contactsArr.length > 0 &&
          contactsArr.map(({ name, number, id }) => {
            return (
              <li className={style.list_item} key={id}>
                <p>
                  {name}: {number}
                </p>
                <button
                  className={style.button}
                  onClick={() => {
                    deleteContact(id);
                  }}
                  type="button"
                >
                  Delete
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
