import Layout from '../components/layout';
import { useForm } from 'react-hook-form';


export default function ContactForm() {

  const { register, handleSubmit } = useForm();

  const handleOnSubmit=data => {
    // e.preventDefault();
    console.log(data);
  };

  return (
    <Layout>
      <form
        onSubmit={handleSubmit(handleOnSubmit)}
        className="grid grid-cols-4 gap-4 w-full ">
        <div className="flex col-span-2 items-center border-b border-teal-500 py-2">
          <input
            ref={register}
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
  );
}