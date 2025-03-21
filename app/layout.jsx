import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

import localFont from 'next/font/local'

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
}
 
const banner = <Banner storageKey="some-key">Nextra 4.0 is released 🎉</Banner>
const navbar = (
  <Navbar
    logo={<b>اپ‌ادیتور</b>}
    align='left'
    // ... Your additional navbar options
  />
)
// const footer = <Footer>{new Date().getFullYear()} © تمامی حقوق محفوظ است.</Footer>
const search = (
  <Search
  emptyResult='نتیجه‌ای یافت نشد.'
  loading='در حال جست‌وجو...'
  errorText='خطا در جست‌وجو!'
  placeholder='جست‌وجو...'
    // ... Your additional navbar options
  />
)

const myFont = localFont({
  src: './public/Estedad-FD[KSHD,wght].ttf',
})


export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="fa" className={myFont.className}
      // Required to be set
      dir="rtl"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          // footer={footer}
          search={search}
          themeSwitch={{
            dark: 'تاریک',
            light: 'روشن',
            system: 'خودکار'
          }}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}