import  throttle  from "lodash.throttle";


const STORAGE_KEY = 'message';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('textarea')
};

const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
refs.form.addEventListener('input', e => {
  // console.log(e.target.name);
  // console.log(e.target.value);

  formData[e.target.name] = e.target.value;
  console.log(formData);
})

delayedMessage();

function onFormSubmit(evt){
  evt.preventDefault();

  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
};

function onTextareaInput(evt){
  const message = evt.target.value;

  localStorage.setItem(STORAGE_KEY, message);
};

function delayedMessage(){
  const saveMessage = localStorage.getItem(STORAGE_KEY);

  if(saveMessage){
    refs.textarea.value = saveMessage;
  }
}
