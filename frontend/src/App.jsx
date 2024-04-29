import { Button, Affix, Row, Col, Divider } from 'antd'
import { PlusOutlined, SearchOutlined } from '@ant-design/icons'
import { useSetState } from 'ahooks'

import ModalUpdate from './components/modalUpdate'
import imgLogo from './assets/images/logo.png'
import './styles/App.less'

function App() {
  const [state, setState] = useSetState({
    isModalUpdate: false,
  })

  return (
    <div className='rss-app'>
      <Affix offsetTop={0}>
        <header>
          <div className='left'>
            <img src={imgLogo} className='logo' />
            ails-rss
          </div>
          <div className='right'></div>
        </header>
      </Affix>

      <main>
        <Row>
          <Col span={6}>
            <Affix offsetTop={50}>
              <div className='menu'>
                <div className='take'>
                  <div>订阅源</div>
                  <div>
                    <Button
                      icon={<PlusOutlined />}
                      onClick={() => {
                        setState({
                          isModalUpdate: true,
                        })
                      }}
                    />
                    <Button icon={<SearchOutlined />} />
                  </div>
                </div>
                <Divider />
                <div className='config'>
                  <Button type='primary'>Button</Button>
                </div>
              </div>
            </Affix>
          </Col>
          <Col span={18}>
            <div className='intter'>1234</div>
          </Col>
        </Row>
      </main>
      {state.isModalUpdate && (
        <ModalUpdate
          onCancel={() => {
            setState({
              isModalUpdate: false,
            })
          }}
          onOk={(e) => {
            console.log({ e })
            setState({
              isModalUpdate: false,
            })
          }}
        />
      )}
    </div>
  )
}

export default App
