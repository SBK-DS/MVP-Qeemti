import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listBloodStore } from '../actions/bloodStoreActions'

import Message from '../components/Message'
import Loader from '../components/Loader'

const ReportScreen = () => {
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()
  const bloodStoreList = useSelector((state) => state.bloodStoreList)
  const { bloodStores, error, loading } = bloodStoreList

  useEffect(() => {
    dispatch(listBloodStore())
  }, [dispatch])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (from > to) {
      setMessage('The End date must be greater than the Start date.')
    }
  }

  const filteredBloodStore = (e) =>
    bloodStores &&
    bloodStores.filter(
      ({ blood_component, blood_group, createdAt }) =>
        createdAt >= from &&
        createdAt <= to &&
        blood_component === e.blood_component &&
        blood_group === e.blood_group
    )

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className='row'>
          <div className='col-md-5'>
            <div className='mb-3'>
              <label htmlFor='from' className='form-label text-danger'>
                From
              </label>
              <input
                type='date'
                className='form-control'
                id='from'
                placeholder='name@example.com'
                onChange={(e) => setFrom(e.target.value)}
                value={from}
              />
            </div>
          </div>
          <div className='col-md-5'>
            <div className='mb-3'>
              <label htmlFor='to' className='form-label text-danger'>
                To
              </label>
              <input
                type='date'
                className='form-control'
                id='to'
                placeholder='name@example.com'
                onChange={(e) => setTo(e.target.value)}
                value={to}
              />
            </div>
          </div>
          <div className='col-md-2 p-1'>
            <div className='mb-3 pt-4'>
              <button className='btn btn-info '>
                <i className='fa fa-search'></i> Search
              </button>
            </div>
          </div>
        </div>
      </form>
      {message !== null && <Message variant='danger'>{message}</Message>}

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <div className=''>
          <div className='row mt-3'>
            {/* <h3 className='text-center summary'>CURRENT SUMMARY BLOOD STORE</h3> */}
            <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
              <div className='card text-center'>
                <div className='card-header bg-info text-white'>Plasma</div>
                <div className='card-body '>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                      <strong>A + </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            blood_component: 'Plasma',
                            blood_group: 'A+',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>B + </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            blood_component: 'Plasma',
                            blood_group: 'B+',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>AB + </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            blood_component: 'Plasma',
                            blood_group: 'AB+',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>O + </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            blood_component: 'Plasma',
                            blood_group: 'O+',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>A - </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            blood_component: 'Plasma',
                            blood_group: 'A-',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>B - </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            blood_component: 'Plasma',
                            blood_group: 'B-',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>AB - </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            blood_component: 'Plasma',
                            blood_group: 'AB-',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>O - </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            blood_component: 'Plasma',
                            blood_group: 'O-',
                          }).length}
                      </strong>
                    </li>
                  </ul>
                </div>
                <div className='card-footer text-info'>Today</div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
              <div className='card text-center'>
                <div className='card-header bg-info text-white'>Platelet</div>
                <div className='card-body '>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                      <strong>A + </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            blood_component: 'Platelet',
                            blood_group: 'A+',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>B + </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            blood_component: 'Platelet',
                            blood_group: 'B+',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>AB + </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            blood_component: 'Platelet',
                            blood_group: 'AB+',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>O + </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            blood_component: 'Platelet',
                            blood_group: 'O+',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>A - </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            blood_component: 'Platelet',
                            blood_group: 'A-',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>B - </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            blood_component: 'Platelet',
                            blood_group: 'B-',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>AB - </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            blood_component: 'Platelet',
                            blood_group: 'AB-',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>O - </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            blood_component: 'Platelet',
                            blood_group: 'O-',
                          }).length}
                      </strong>
                    </li>
                  </ul>
                </div>
                <div className='card-footer text-info'>Today</div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
              <div className='card text-center'>
                <div className='card-header bg-info text-white'>RBC</div>
                <div className='card-body '>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                      <strong>A + </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            blood_component: 'RBC',
                            blood_group: 'A+',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>B + </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            blood_component: 'RBC',
                            blood_group: 'B+',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>AB + </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            blood_component: 'RBC',
                            blood_group: 'AB+',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>O + </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            blood_component: 'RBC',
                            blood_group: 'O+',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>A - </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            blood_component: 'RBC',
                            blood_group: 'A-',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>B - </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            blood_component: 'RBC',
                            blood_group: 'B-',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>AB - </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            blood_component: 'RBC',
                            blood_group: 'AB-',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>O - </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            blood_component: 'RBC',
                            blood_group: 'O-',
                          }).length}
                      </strong>
                    </li>
                  </ul>
                </div>
                <div className='card-footer text-info'>Today</div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
              <div className='card text-center'>
                <div className='card-header bg-info text-white'>Whole Blood</div>
                <div className='card-body '>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                      <strong>A + </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            blood_component: 'Whole Blood',
                            blood_group: 'A+',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>B + </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            blood_component: 'Whole Blood',
                            blood_group: 'B+',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>AB + </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            blood_component: 'Whole Blood',
                            blood_group: 'AB+',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>O + </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            blood_component: 'Whole Blood',
                            blood_group: 'O+',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>A - </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            blood_component: 'Whole Blood',
                            blood_group: 'A-',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>B - </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            blood_component: 'Whole Blood',
                            blood_group: 'B-',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>AB - </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            blood_component: 'Whole Blood',
                            blood_group: 'AB-',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>O - </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            blood_component: 'Whole Blood',
                            blood_group: 'O-',
                          }).length}
                      </strong>
                    </li>
                  </ul>
                </div>
                <div className='card-footer text-info'>Today</div>
              </div>
            </div>
          </div>
        </div>
      )}
      {}
    </>
  )
}

export default ReportScreen
