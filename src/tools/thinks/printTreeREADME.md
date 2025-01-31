管理用のシステムはどんな仕組みにしますか?

Listでの管理を考えます
Json方式で

"main":{

枝の支店は木の中心なのでxは固定なので
"start_high":24,
"end_position":[60,86],
"commmit":35323

pullRequestは枝
""


}


必要関数
    bowSetPostion
        角度,長さ
        開始座標,終了座標を返す
    */

    /*
    視点をランダムに補正として初期値に追加する
    
    Start_pos = [centerX,centerY + getRandomint(1,20)];
    end_pos = [centerX + getRandom(20,41) * RandomSetPM(), centerY + getRandomint(1,20)];

    まず分岐をする
    2つ右と左に角度を指定して
    適当に長さを指定して
    直線を設置する
    ２つの直線をランダムに指定する
    
    長さと角度をランダム値を補正として追加する