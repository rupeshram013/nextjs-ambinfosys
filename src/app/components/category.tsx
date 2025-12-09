import React from 'react'

import laptop from '../assets/images/logos/laptops.png'
import desktop from '../assets/images/logos/desktops.png'
import monitor from '../assets/images/logos/monitors.png'
import cable from '../assets/images/logos/cables.png'
import camera from '../assets/images/logos/camera.png'
import headphone from '../assets/images/logos/headphones.png'
import hub from '../assets/images/logos/switch.png'
import telephone from '../assets/images/logos/telephone.png'
import ssd from '../assets/images/logos/ssd.png'
import ups from '../assets/images/logos/ups.png'
import speaker from '../assets/images/logos/speakers.png'
import router from '../assets/images/logos/router.png'
import keyboard from '../assets/images/logos/keyboards.png'

const category_names = [
    'Laptop', 'Desktop', 'Monitor', 'Cable', 'Camera', 'Headphone', 
    'Hub', 'Telephone', 'SSD', 'UPS', 'Speaker', 'Router', 'Keyboard'
];


function Category() {
  
    const category_images = [
        laptop,
        desktop,
        monitor,
        cable,
        camera,
        headphone,
        hub,
        telephone,
        ssd,
        ups,
        speaker,
        router,
        keyboard
    ]

    return (
        <div id='category'>

            <h1 id="title">Category</h1>

            <div id="images">

                {
                    category_images.map((imagePath, index) => (
                        <div key={index} className="category-item"> 
                            <img 
                                src={imagePath} 
                                alt={category_names[index]} 
                                className="category-image"
                            />
                            <p>{category_names[index]}</p>
                        </div>
                    ))  
                }
            </div>
        </div>
    )
}

export default Category