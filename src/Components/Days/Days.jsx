import React from 'react'
import "./days.css"
import moment from 'moment'

export default function Days({ data }) {
    console.log(data);
    let newDate = new Date();
    console.log(newDate);
    const Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    // console.log(Days[0]);
    const d = Days[newDate.getDay()]
    console.log(newDate.getDay());
    console.log(d);
  
    return (
        <div>

            <div className='boxdiv'>
                {data.map((datas) =>
                    <>



                        <div class="card" className='boxes1'>
                            <div class="card-body">
                                <h5 class="card-title">{moment(datas.dt_txt).format('dddd')}</h5> <br />
                                <h6 class="card-subtitle mb-2 text-muted">{moment(datas.dt_txt).format('MMMM Do, h:mm a')}</h6><br />
                                <h5 class="card-text">{datas.main.temp}°F</h5><br />
                                <p>{moment(datas.dt_txt).format('D-MM-YYYY')}</p>
                                <p>{datas.weather[0].description}</p>
                            </div>
                        </div>
                        {/* <div className='boxes1'>
                            <h4>{moment(datas.dt_txt).format('dddd')}</h4>
                            <p>{moment(datas.dt_txt).format('MMMM Do, h:mm a')}</p>
                            <h4>{datas.main.temp}°C</h4>
                            <p>{moment(datas.dt_txt).format('D-MM-YYYY')}</p>
                            <p>{datas.weather[0].description}</p>

                        </div> */}


                    </>

                )}

                {/* <div className='boxes1'>
                    <h4>{data.day}</h4>
                    <p>{data.mdt}</p>
                    <h4>{data.weather}</h4>
                    <p>{data.date}</p>
                    <p>{data.rain}</p>
                </div> */}

            </div>

            <hr className='line' />



        </div>
    )
}


