import Layout from '../components/layout';
import { useForm } from 'react-hook-form';
import { gql, useMutation, useQuery } from '@apollo/client';



const CREATE_NEW_MESSAGE = gql`
mutation createNewMessage($inputname:name!,$email: String!, $message: String!) {
  insert_email_message_one(object: {name:$inputname, email:$email, message:$message}){
    name
    email
    message
  }
}`;

const FETCH_DATA= gql`
query MyQuery {
  email_message {
    email
    message
    name
  }
}
`;

const ContactForm:React.FC =  () => {


  const result = useQuery({ FETCH_DATA });




  // if (result.loading)  {
  //   console.log('loading');
  // }else{
  //   console.log(result);
  // }



  const { register, handleSubmit } = useForm();

  // const [createNewMessage] = useMutation(CREATE_NEW_MESSAGE);

  const handleOnSubmit=data => {
    // e.preventDefault();
    console.log(data);
    // void createNewMessage({ variables:{ data } });
  };

  return(
  // <ApolloProvider client={client}>

    <Layout>
      <form
        onSubmit={handleSubmit(handleOnSubmit)}
        className="grid grid-cols-4 gap-4 w-full ">
        <div className="flex col-span-2 items-center border-b border-teal-500 py-2">
          <input
            ref={register({ required: true })}
            type="text"
            placeholder="name, please"
            name='name'
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"  ></input>
        </div>

        <div className="flex col-span-2 items-center border-b border-teal-500 py-2">
          <input
            ref={register}
            type="email"
            placeholder="email address"
            name="email"
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"  ></input>
        </div>

        <div className="flex col-span-4 items-center border-b border-teal-500 py-2">
          <textarea
            ref={register}
            placeholder="please leave your message here"
            name='message'
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"  />
        </div>
        <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
              send
        </button>
      </form>
    </Layout>
    // </ApolloProvider>
  );
};

export default ContactForm;