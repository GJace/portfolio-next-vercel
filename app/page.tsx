import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Sw4g P€n$
      </h1>
      <p className="mb-4">
        {`I'm the most ordinary developer, but a funny one. After 5+ years of coding I still do not have a prefernce between
          Light and Dark mode (Crazy, right?).`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
