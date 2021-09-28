import React from 'react';
import TaskCondition from '../../../../components/TaskCondition';

const PHPProject2 = () => {
    return (
        <div className="project-task">
            <TaskCondition repo="url.com">
                <p>На <b>диске</b> лежит файл image.png, размер 20000 на 20000. Вывести картинку как баннер размером 200 на 100 пикселей. Обратите внимание на размер и пропорции, и подумайте о <b>времени</b> загрузки.</p>
                <p><b>Важно</b>: решение требует использования PHP, сжатие картинки средствами HTML/CSS является некорректным решением. </p>
            </TaskCondition >

            <p><em>index.php</em></p>
            <code>{`
                <!-- Подгрузили файл ресайзер с необходимыми функциями -->`} <br />{`
                <? require_once('resizeImages.php'); ?>`} <br />{`
                `} <br />{`
                <!DOCTYPE html>`} <br />{`
                <html lang="ru">`} <br />{`
                `} <br />{`
                <head>`} <br />{`
                    <meta charset="UTF-8">`} <br />{`
                    <title>тестовое задание ИНТЕРВОЛГА</title>`} <br />{`
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">`} <br />{`
                </head>`} <br />{`
                `} <br />{`
                <body>`} <br />{`
                    <div class='img-block'>`} <br />{`
                        <!-- Выводим картинки специальной функцией которая проверит есть ли обрезаная картинка. Если нет создаст обрезаную -->`} <br />{`
                        <img src="<? outImage('/images/img1.jpg', 200, 100); ?>">`} <br />{`
                        <img src="<? outImage('/images/img2.png', 200, 100); ?>">`} <br />{`
                    </div>`} <br />{`
                </body>`} <br />{`
                `} <br />{`
                </html>`} <br />{`
            `}</code>

            <p><em>resizeImages.php</em></p>
            <code>{`
            <?`} <br />{`
            //Основная функция вывода картинки`} <br />{`
            function outImage($path_image, $WIDTH, $HEIGHT){`} <br />{`
                $path_parts = pathinfo($path_image);`} <br />{`
                `} <br />{`
                //Если уже есть сжатая картинка тогда выдать ее`} <br />{`
                $thumb_path = $path_parts['dirname'] . '/thumbs/' . $path_parts['basename'];`} <br />{`
                if (file_exists($_SERVER['DOCUMENT_ROOT'] . $thumb_path)) {`} <br />{`
                    echo $thumb_path;`} <br />{`
                    return;`} <br />{`
                }`} <br />{`
                `} <br />{`
                //Если сжатой картинки нет создать ее и выдать сжатую`} <br />{`
                $full_path = $path_parts['dirname'] . '/' . $path_parts['basename'];`} <br />{`
                `} <br />{`
                $image = new SimpleImage();`} <br />{`
                $image->load($_SERVER['DOCUMENT_ROOT'] . $full_path);`} <br />{`
                $image->resize(0, 0, $WIDTH, $HEIGHT, $_SERVER['DOCUMENT_ROOT'] . $full_path);`} <br />{`
                $image->save($_SERVER['DOCUMENT_ROOT'] . $thumb_path);`} <br />{`
                `} <br />{`
                echo $thumb_path;`} <br />{`
            }`} <br />{`
            `} <br />{`
            
            //Клас для получения оригинала изображения и создания сжатой копии`} <br />{`
            class SimpleImage{`} <br />{`
                function load($filename)`} <br />{`
                {`} <br />{`
                    $image_info = getimagesize($filename);`} <br />{`
                    `} <br />{`
                    $this->image_type = $image_info[2];`} <br />{`
                    if ($this->image_type == IMAGETYPE_JPEG) {`} <br />{`
                        $this->image = imagecreatefromjpeg($filename);`} <br />{`
                    } elseif ($this->image_type == IMAGETYPE_GIF) {`} <br />{`
                        $this->image = imagecreatefromgif($filename);`} <br />{`
                    } elseif ($this->image_type == IMAGETYPE_PNG) {`} <br />{`
                        $this->image = imagecreatefrompng($filename);`} <br />{`
                    }`} <br />{`
                }`} <br />{`
                function save($filename, $image_type = IMAGETYPE_JPEG, $compression = 90, $permissions = null)`} <br />{`
                {`} <br />{`
                    if ($image_type == IMAGETYPE_JPEG) {`} <br />{`
                        imagejpeg($this->image, $filename, $compression);`} <br />{`
                    } elseif ($image_type == IMAGETYPE_GIF) {`} <br />{`
                        imagegif($this->image, $filename);`} <br />{`
                    } elseif ($image_type == IMAGETYPE_PNG) {`} <br />{`
                        imagepng($this->image, $filename);`} <br />{`
                    }`} <br />{`
                    if ($permissions != null) {`} <br />{`
                        chmod($filename, $permissions);`} <br />{`
                    }`} <br />{`
                }`} <br />{`
                function getWidth()`} <br />{`
                {`} <br />{`
                    return imagesx($this->image);`} <br />{`
                }`} <br />{`
                function getHeight()`} <br />{`
                {`} <br />{`
                    return imagesy($this->image);`} <br />{`
                }`} <br />{`
                function resize($x, $y, $THUMB_WIDTH, $THUMB_HEIGHT, $filename)`} <br />{`
                {`} <br />{`
                `} <br />{`
                    $image_info = getimagesize($filename);`} <br />{`
                    `} <br />{`
                    $full_image_width = $image_info[0];`} <br />{`
                    $full_image_height = $image_info[1];`} <br />{`
                    `} <br />{`
                    $original_aspect = $full_image_width / $full_image_height;`} <br />{`
                    $thumb_aspect = $THUMB_WIDTH / $THUMB_HEIGHT;`} <br />{`
            `} <br />{`
                    if ($original_aspect >= $thumb_aspect) {`} <br />{`
                        $new_height = $THUMB_HEIGHT;`} <br />{`
                        $new_width = $full_image_width / ($full_image_height / $THUMB_HEIGHT);`} <br />{`
                    } else {`} <br />{`
                        $new_width = $THUMB_WIDTH;`} <br />{`
                        $new_height = $full_image_height / ($full_image_width / $THUMB_WIDTH);`} <br />{`
                    }`} <br />{`
            `} <br />{`
                    $new_image = imagecreatetruecolor($THUMB_WIDTH, $THUMB_HEIGHT);`} <br />{`
                    `} <br />{`
                    imagecopyresampled($new_image, $this->image, 0 - ($new_width - $THUMB_WIDTH) / 2, 0 - ($new_height - $THUMB_HEIGHT) / 2, $x, $y, $new_width, $new_height, $full_image_width, $full_image_height);`} <br />{`
                    `} <br />{`
                    $this->image = $new_image;`} <br />{`
                }`} <br />{`
            }`} <br />{`
            
            `}</code>

        </div >
    );
};

export default PHPProject2;