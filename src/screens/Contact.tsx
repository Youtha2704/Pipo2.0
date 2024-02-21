import { useForm, SubmitHandler } from 'react-hook-form'

type FormInput = {
    subject: string,
    email: string,
    message: string

}

export const Contact = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormInput>()

    const onSubmit: SubmitHandler<FormInput> = data => {
        console.log(data.email)
    }

    return (
        <div>
            <h1 className="font-extrabold text-3xl">Contact</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="block mt-5" htmlFor="subject">Sujet</label>
                <input {...register('subject')} className="border" type="text" placeholder="Entrez le Sujet" name="subject" id="subject" />

                <label className="block mt-5" htmlFor="email">Email</label>
                <input {...register('email', { required: true })} className="border" type="email" placeholder="Entrez Votre e-mail" name="email" id="email" />
                {errors.email && <p className='text-[red]'>Email Obligatoire</p>}
                <label className="block mt-5" htmlFor="message">Message</label>
                <textarea {...register('message')} className="border resize-none" rows={5} placeholder="Entrez votre message" name="message" id="message" />

                <input type="submit" className="block bg-[blue] text-[white] py-3 px-3 hover:bg-[gray]" />

            </form>
        </div>
    )
}
