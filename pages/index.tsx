import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-gray-50 flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Hey, I'm Richie! I'm a Software Engineer 👨‍💻 Frenchie Dad 🐶 Evertonian 😢" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" key="twcard" />
        <meta name="twitter:image" content="https://mcilroy.co/og.png"/>

        {/* Open Graph */}
        <meta property="og:url" content="https://mcilroy.co" key="ogurl" />
        <meta property="og:image" content="https://mcilroy.co/og.png" key="ogimage" />
        <meta property="og:site_name" content="Richie McIlroy" key="ogsitename" />
        <meta property="og:title" content="👋 Richie McIlroy" key="ogtitle" />
        <meta property="og:description" content="Hey, I'm Richie! I'm a Software Engineer 👨‍💻 Frenchie Dad 🐶 Evertonian 😢" key="ogdesc" />
        <title>👋 Richie McIlroy</title>

        <script defer data-domain="mcilroy.co" src="https://plausible.io/js/plausible.js"></script>
      </Head>

      <main className="px-4">
        <div className="text-center">
          <img className="w-36 h-auto mx-auto mb-3 border-4 border-gray-200 rounded-full hover:rotate-6 transition-all" src="/me.png" alt="Richie McIlroy"/>
          <h1 className="text-3xl md:text-5xl font-bold mb-2 text-gray-800">Hey, I'm Richie!</h1>
          <h2 className="text-xl md:text-2xl font-medium text-gray-500">Software Engineer 👨‍💻 Frenchie Dad 🐶 Evertonian 😢</h2>
          <div className="flex items-center justify-center mt-7">
            <a 
              href="https://twitter.com/richiemcilroy"
              className="px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-lg font-semibold mx-2 hover:rotate-2 transition-all"
            >
              Twitter
            </a>
            <a 
              href="https://github.com/richiemcilroy"
              className="px-3 py-2 bg-gray-800 hover:bg-gray-900 text-white text-sm rounded-lg font-semibold mx-2 hover:-rotate-2 transition-all"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/richiemcilroy/"
              className="px-3 py-2 bg-blue-900 hover:bg-blue-800 text-white text-sm rounded-lg font-semibold mx-2 hover:rotate-2 transition-all"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
