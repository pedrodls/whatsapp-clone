import './App.css';
import ButtonFilterComponent from './components/button-filter/ButtonFilterComponent';
import InputFilterComponent from './components/button-filter/ButtonFilterComponent';
import IconTranslateComponent from './components/IconTranslate/IconTranslateComponent';
import InputSearchComponent from './components/Input-search/InputSearchComponent';
import HomeLayout from './components/Layout/HomeLayout';

function App() {
  return (
    <>
     <HomeLayout>
        <div className='container-fluid content'>
          <div className='content-body'>
            <div className='content-message-box'>
              <div className='content-message-box-header'>
                Header
              </div>
              
              <div className='search-content'>
                <div className='search-box'>
                  <IconTranslateComponent />
                  <InputSearchComponent />
                </div>
                <div className='search-filter'>
                  <InputFilterComponent />
                </div>
              </div>

              <div>caixa de mensagens</div>
            </div>
            <div className='content-message-reader'>
              <div className='content-message-reader-header'>Header</div>
              <div>Ler mensagens</div>
            </div>
          </div>
          </div>
     </HomeLayout>
    </>
  );
}

export default App;
