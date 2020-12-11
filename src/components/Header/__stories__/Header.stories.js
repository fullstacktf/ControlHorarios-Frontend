import Header from '../Header'
import '../../../styles/tailwind.css'

export default {
  title: 'Header',
  component: Header
}

const Template = () => ({
  components: { Header },
  template: '<Header></Header>'
})

export const HeaderDefault = Template.bind({})

HeaderDefault.args = {}
