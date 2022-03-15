import Sidebar from '../SIdebar/Sidebar'

export default function Layout({ children }: any) {
  return (
    <>
      <Sidebar>{children}</Sidebar>
     
    </>
  )
}