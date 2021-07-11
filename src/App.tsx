import { useState } from 'react';
import MyRadioGroup from './ArticleTab';
import MyEditor from './MyEditor';
import { Article } from './ArticleContext';
import { ContentState } from 'draft-js';
import SearchBar from './components/SearchBar';

export type RichContent = { title: string; body: ContentState };

const App = () => {
  const contents = [
    {
      title: '第一夜',
      body: '　こんな夢を見た。	\n　腕組をして枕元に坐っていると、仰向に寝た女が、静かな声でもう死にますと云う。女は長い髪を枕に敷いて、輪郭の柔らかな瓜実顔をその中に横たえている。真白な頬の底に温かい血の色がほどよく差して、唇の色は無論赤い。とうてい死にそうには見えない。しかし女は静かな声で、もう死にますと判然云った。自分も確にこれは死ぬなと思った。そこで、そうかね、もう死ぬのかね、と上から覗き込むようにして聞いて見た。死にますとも、と云いながら、女はぱっちりと眼を開けた。大きな潤のある眼で、長い睫に包まれた中は、ただ一面に真黒であった。その真黒な眸の奥に、自分の姿が鮮に浮かんでいる。\n　自分は透き徹るほど深く見えるこの黒眼の色沢を眺めて、これでも死ぬのかと思った。それで、ねんごろに枕の傍へ口を付けて、死ぬんじゃなかろうね、大丈夫だろうね、とまた聞き返した。すると女は黒い眼を眠そうにみはったまま、やっぱり静かな声で、でも、死ぬんですもの、仕方がないわと云った。	\n　じゃ、私の顔が見えるかいと一心に聞くと、見えるかいって、そら、そこに、写ってるじゃありませんかと、にこりと笑って見せた。自分は黙って、顔を枕から離した。腕組をしながら、どうしても死ぬのかなと思った。	\n　しばらくして、女がまたこう云った。\n「死んだら、埋めて下さい。大きな真珠貝で穴を掘って。そうして天から落ちて来る星の破片を墓標に置いて下さい。そうして墓の傍に待っていて下さい。また逢いに来ますから」	\n　自分は、いつ逢いに来るかねと聞いた。\n「日が出るでしょう。それから日が沈むでしょう。それからまた出るでしょう、そうしてまた沈むでしょう。――赤い日が東から西へ、東から西へと落ちて行くうちに、――あなた、待っていられますか」	\n　自分は黙って首肯いた。女は静かな調子を一段張り上げて、\n「百年待っていて下さい」と思い切った声で云った。\n「百年、私の墓の傍に坐って待っていて下さい。きっと逢いに来ますから」\n　自分はただ待っていると答えた。すると、黒い眸のなかに鮮に見えた自分の姿が、ぼうっと崩れて来た。静かな水が動いて写る影を乱したように、流れ出したと思ったら、女の眼がぱちりと閉じた。長い睫の間から涙が頬へ垂れた。――もう死んでいた。	\n　自分はそれから庭へ下りて、真珠貝で穴を掘った。真珠貝は大きな滑かな縁の鋭どい貝であった。土をすくうたびに、貝の裏に月の光が差してきらきらした。湿った土の匂もした。穴はしばらくして掘れた。女をその中に入れた。そうして柔らかい土を、上からそっと掛けた。掛けるたびに真珠貝の裏に月の光が差した。	\n　それから星の破片の落ちたのを拾って来て、かろく土の上へ乗せた。星の破片は丸かった。長い間大空を落ちている間に、角が取れて滑かになったんだろうと思った。抱き上げて土の上へ置くうちに、自分の胸と手が少し暖くなった。	\n　自分は苔の上に坐った。これから百年の間こうして待っているんだなと考えながら、腕組をして、丸い墓石を眺めていた。そのうちに、女の云った通り日が東から出た。大きな赤い日であった。それがまた女の云った通り、やがて西へ落ちた。赤いまんまでのっと落ちて行った。一つと自分は勘定した。	\n　しばらくするとまた唐紅の天道がのそりと上って来た。そうして黙って沈んでしまった。二つとまた勘定した。	\n　自分はこう云う風に一つ二つと勘定して行くうちに、赤い日をいくつ見たか分らない。勘定しても、勘定しても、しつくせないほど赤い日が頭の上を通り越して行った。それでも百年がまだ来ない。しまいには、苔の生えた丸い石を眺めて、自分は女に欺されたのではなかろうかと思い出した。\n　すると石の下から斜に自分の方へ向いて青い茎が伸びて来た。見る間に長くなってちょうど自分の胸のあたりまで来て留まった。と思うと、すらりと揺ぐ茎の頂に、心持首を傾けていた細長い一輪の蕾が、ふっくらと弁を開いた。真白な百合が鼻の先で骨に徹えるほど匂った。そこへ遥の上から、ぽたりと露が落ちたので、花は自分の重みでふらふらと動いた。自分は首を前へ出して冷たい露の滴る、白い花弁に接吻した。自分が百合から顔を離す拍子に思わず、遠い空を見たら、暁の星がたった一つ瞬いていた。	\n「百年はもう来ていたんだな」とこの時始めて気がついた。',
    },
    {
      title: '第二夜',
      body: '　こんな夢を見た。\n　和尚の室を退がって、廊下伝いに自分の部屋へ帰ると行灯がぼんやり点っている。片膝を座蒲団の上に突いて、灯心を掻き立てたとき、花のような丁子がぱたりと朱塗の台に落ちた。同時に部屋がぱっと明かるくなった。\n　襖の画は蕪村の筆である。黒い柳を濃く薄く、遠近とかいて、寒むそうな漁夫が笠を傾けて土手の上を通る。床には海中文殊の軸が懸っている。焚き残した線香が暗い方でいまだに臭っている。広い寺だから森閑として、人気がない。黒い天井に差す丸行灯の丸い影が、仰向く途端に生きてるように見えた。\n　立膝をしたまま、左の手で座蒲団を捲って、右を差し込んで見ると、思った所に、ちゃんとあった。あれば安心だから、蒲団をもとのごとく直して、その上にどっかり坐った。\n　お前は侍である。侍なら悟れぬはずはなかろうと和尚が云った。そういつまでも悟れぬところをもって見ると、御前は侍ではあるまいと言った。人間の屑じゃと言った。ははあ怒ったなと云って笑った。口惜しければ悟った証拠を持って来いと云ってぷいと向をむいた。怪しからん。\n　隣の広間の床に据えてある置時計が次の刻を打つまでには、きっと悟って見せる。悟った上で、今夜また入室する。そうして和尚の首と悟りと引替にしてやる。悟らなければ、和尚の命が取れない。どうしても悟らなければならない。自分は侍である。\n　もし悟れなければ自刃する。侍が辱しめられて、生きている訳には行かない。綺麗に死んでしまう。\n　こう考えた時、自分の手はまた思わず布団の下へ這入った。そうして朱鞘の短刀を引き摺り出した。ぐっと束を握って、赤い鞘を向へ払ったら、冷たい刃が一度に暗い部屋で光った。凄いものが手元から、すうすうと逃げて行くように思われる。そうして、ことごとく切先へ集まって、殺気を一点に籠めている。自分はこの鋭い刃が、無念にも針の頭のように縮められて、九寸五分の先へ来てやむをえず尖ってるのを見て、たちまちぐさりとやりたくなった。身体の血が右の手首の方へ流れて来て、握っている束がにちゃにちゃする。唇が顫えた。\n　短刀を鞘へ収めて右脇へ引きつけておいて、それから全伽を組んだ。――趙州曰く無と。無とは何だ。糞坊主めとはがみをした。\n　奥歯を強く咬み締めたので、鼻から熱い息が荒く出る。こめかみが釣って痛い。眼は普通の倍も大きく開けてやった。\n　懸物が見える。行灯が見える。畳が見える。和尚の薬缶頭がありありと見える。鰐口を開いて嘲笑った声まで聞える。怪しからん坊主だ。どうしてもあの薬缶を首にしなくてはならん。悟ってやる。無だ、無だと舌の根で念じた。無だと云うのにやっぱり線香の香がした。何だ線香のくせに。\n　自分はいきなり拳骨を固めて自分の頭をいやと云うほど擲った。そうして奥歯をぎりぎりと噛んだ。両腋から汗が出る。背中が棒のようになった。膝の接目が急に痛くなった。膝が折れたってどうあるものかと思った。けれども痛い。苦しい。無はなかなか出て来ない。出て来ると思うとすぐ痛くなる。腹が立つ。無念になる。非常に口惜しくなる。涙がほろほろ出る。ひと思に身を巨巌の上にぶつけて、骨も肉もめちゃめちゃに砕いてしまいたくなる。\n　それでも我慢してじっと坐っていた。堪えがたいほど切ないものを胸に盛れて忍んでいた。その切ないものが身体中の筋肉を下から持上げて、毛穴から外へ吹き出よう吹き出ようと焦るけれども、どこも一面に塞がって、まるで出口がないような残刻極まる状態であった。\n　そのうちに頭が変になった。行灯も蕪村の画も、畳も、違棚も有って無いような、無くって有るように見えた。と云って無はちっとも現前しない。ただ好加減に坐っていたようである。ところへ忽然隣座敷の時計がチーンと鳴り始めた。\n　はっと思った。右の手をすぐ短刀にかけた。時計が二つ目をチーンと打った。',
    },
    {
      title: '第三夜',
      body: '　こんな夢を見た。\n　六つになる子供を負ってる。たしかに自分の子である。ただ不思議な事にはいつの間にか眼が潰れて、青坊主になっている。自分が御前の眼はいつ潰れたのかいと聞くと、なに昔からさと答えた。声は子供の声に相違ないが、言葉つきはまるで大人である。しかも対等だ。\n　左右は青田である。路は細い。鷺の影が時々闇に差す。\n「田圃へかかったね」と背中で云った。\n「どうして解る」と顔を後ろへ振り向けるようにして聞いたら、\n「だって鷺が鳴くじゃないか」と答えた。\n　すると鷺がはたして二声ほど鳴いた。\n　自分は我子ながら少し怖くなった。こんなものを背負っていては、この先どうなるか分らない。どこか打遣ゃる所はなかろうかと向うを見ると闇の中に大きな森が見えた。あすこならばと考え出す途端に、背中で、\n「ふふん」と云う声がした。\n「何を笑うんだ」\n　子供は返事をしなかった。ただ\n「御父さん、重いかい」と聞いた。\n「重かあない」と答えると\n「今に重くなるよ」と云った。\n　自分は黙って森を目標にあるいて行った。田の中の路が不規則にうねってなかなか思うように出られない。しばらくすると二股になった。自分は股の根に立って、ちょっと休んだ。\n「石が立ってるはずだがな」と小僧が云った。\n　なるほど八寸角の石が腰ほどの高さに立っている。表には左り日ヶ｜窪、右｜堀田原とある。闇だのに赤い字が明かに見えた。赤い字は井守の腹のような色であった。\n「左が好いだろう」と小僧が命令した。左を見るとさっきの森が闇の影を、高い空から自分らの頭の上へ抛げかけていた。自分はちょっと躊躇した。\n「遠慮しないでもいい」と小僧がまた云った。自分は仕方なしに森の方へ歩き出した。腹の中では、よく盲目のくせに何でも知ってるなと考えながら一筋道を森へ近づいてくると、背中で、「どうも盲目は不自由でいけないね」と云った。\n「だから負ってやるからいいじゃないか」\n「負ぶって貰ってすまないが、どうも人に馬鹿にされていけない。親にまで馬鹿にされるからいけない」\n　何だか厭になった。早く森へ行って捨ててしまおうと思って急いだ。\n「もう少し行くと解る。――ちょうどこんな晩だったな」と背中で独言のように云っている。\n「何が」と際どい声を出して聞いた。\n「何がって、知ってるじゃないか」と子供は嘲けるように答えた。すると何だか知ってるような気がし出した。けれども判然とは分らない。ただこんな晩であったように思える。そうしてもう少し行けば分るように思える。分っては大変だから、分らないうちに早く捨ててしまって、安心しなくってはならないように思える。自分はますます足を早めた。\n　雨はさっきから降っている。路はだんだん暗くなる。ほとんど夢中である。ただ背中に小さい小僧がくっついていて、その小僧が自分の過去、現在、未来をことごとく照して、寸分の事実も洩らさない鏡のように光っている。しかもそれが自分の子である。そうして盲目である。自分はたまらなくなった。\n「ここだ、ここだ。ちょうどその杉の根の処だ」\n　雨の中で小僧の声は判然聞えた。自分は覚えず留った。いつしか森の中へ這入っていた。一間ばかり先にある黒いものはたしかに小僧の云う通り杉の木と見えた。\n「御父さん、その杉の根の処だったね」\n「うん、そうだ」と思わず答えてしまった。\n「文化五年｜辰年だろう」\n　なるほど文化五年辰年らしく思われた。\n「御前がおれを殺したのは今からちょうど百年前だね」\n　自分はこの言葉を聞くや否や、今から百年前文化五年の辰年のこんな闇の晩に、この杉の根で、一人の盲目を殺したと云う自覚が、忽然として頭の中に起った。おれは人殺であったんだなと始めて気がついた途端に、背中の子が急に石地蔵のように重くなった。',
    },
    {
      title: '第四夜',
      body: '　広い土間の真中に涼み台のようなものを据えて、その周囲に小さい床几が並べてある。台は黒光りに光っている。片隅には四角な膳を前に置いて爺さんが一人で酒を飲んでいる。肴は煮しめらしい。\n　爺さんは酒の加減でなかなか赤くなっている。その上顔中つやつやして皺と云うほどのものはどこにも見当らない。ただ白い髯をありたけ生やしているから年寄と云う事だけはわかる。自分は子供ながら、この爺さんの年はいくつなんだろうと思った。ところへ裏の筧から手桶に水を汲んで来た神さんが、前垂で手を拭きながら、\n「御爺さんはいくつかね」と聞いた。爺さんは頬張った｜煮〆を呑み込んで、\n「いくつか忘れたよ」と澄ましていた。神さんは拭いた手を、細い帯の間に挟んで横から爺さんの顔を見て立っていた。爺さんは茶碗のような大きなもので酒をぐいと飲んで、そうして、ふうと長い息を白い髯の間から吹き出した。すると神さんが、\n「御爺さんの家はどこかね」と聞いた。爺さんは長い息を途中で切って、\n「臍の奥だよ」と云った。神さんは手を細い帯の間に突込んだまま、\n「どこへ行くかね」とまた聞いた。すると爺さんが、また茶碗のような大きなもので熱い酒をぐいと飲んで前のような息をふうと吹いて、\n「あっちへ行くよ」と云った。\n「真直かい」と神さんが聞いた時、ふうと吹いた息が、障子を通り越して柳の下を抜けて、河原の方へ真直に行った。\n　爺さんが表へ出た。自分も後から出た。爺さんの腰に小さい瓢箪がぶら下がっている。肩から四角な箱を腋の下へ釣るしている。浅黄の股引を穿いて、浅黄の袖無しを着ている。足袋だけが黄色い。何だか皮で作った足袋のように見えた。\n　爺さんが真直に柳の下まで来た。柳の下に子供が三四人いた。爺さんは笑いながら腰から浅黄の手拭を出した。それを肝心綯のように細長く綯った。そうして地面の真中に置いた。それから手拭の周囲に、大きな丸い輪を描いた。しまいに肩にかけた箱の中から真鍮で製らえた飴屋の笛を出した。\n「今にその手拭が蛇になるから、見ておろう。見ておろう」と繰返して云った。\n　子供は一生懸命に手拭を見ていた。自分も見ていた。\n「見ておろう、見ておろう、好いか」と云いながら爺さんが笛を吹いて、輪の上をぐるぐる廻り出した。自分は手拭ばかり見ていた。けれども手拭はいっこう動かなかった。\n　爺さんは笛をぴいぴい吹いた。そうして輪の上を何遍も廻った。草鞋を爪立てるように、抜足をするように、手拭に遠慮をするように、廻った。怖そうにも見えた。面白そうにもあった。\n　やがて爺さんは笛をぴたりとやめた。そうして、肩に掛けた箱の口を開けて、手拭の首を、ちょいと撮んで、ぽっと放り込んだ。\n「こうしておくと、箱の中で蛇になる。今に見せてやる。今に見せてやる」と云いながら、爺さんが真直に歩き出した。柳の下を抜けて、細い路を真直に下りて行った。自分は蛇が見たいから、細い道をどこまでも追いて行った。爺さんは時々「今になる」と云ったり、「蛇になる」と云ったりして歩いて行く。しまいには、\n　「今になる、蛇になる、\n　　きっとなる、笛が鳴る、」\nと唄いながら、とうとう河の岸へ出た。橋も舟もないから、ここで休んで箱の中の蛇を見せるだろうと思っていると、爺さんはざぶざぶ河の中へ這入り出した。始めは膝くらいの深さであったが、だんだん腰から、胸の方まで水に浸って見えなくなる。それでも爺さんは\n　「深くなる、夜になる、\n　　真直になる」\nと唄いながら、どこまでも真直に歩いて行った。そうして髯も顔も頭も頭巾もまるで見えなくなってしまった。\n　自分は爺さんが向岸へ上がった時に、蛇を見せるだろうと思って、蘆の鳴る所に立って、たった一人いつまでも待っていた。けれども爺さんは、とうとう上がって来なかった。',
    },
    {
      title: '第五夜',
      body: '　こんな夢を見た。\n　何でもよほど古い事で、神代に近い昔と思われるが、自分が軍をして運悪く敗北たために、生擒になって、敵の大将の前に引き据えられた。\n　その頃の人はみんな背が高かった。そうして、みんな長い髯を生やしていた。革の帯を締めて、それへ棒のような剣を釣るしていた。弓は藤蔓の太いのをそのまま用いたように見えた。漆も塗ってなければ磨きもかけてない。極めて素樸なものであった。\n　敵の大将は、弓の真中を右の手で握って、その弓を草の上へ突いて、酒甕を伏せたようなものの上に腰をかけていた。その顔を見ると、鼻の上で、左右の眉が太く接続っている。その頃｜髪剃と云うものは無論なかった。\n　自分は虜だから、腰をかける訳に行かない。草の上に胡坐をかいていた。足には大きな藁沓を穿いていた。この時代の藁沓は深いものであった。立つと膝頭まで来た。その端の所は藁を少し編残して、房のように下げて、歩くとばらばら動くようにして、飾りとしていた。\n　大将は篝火で自分の顔を見て、死ぬか生きるかと聞いた。これはその頃の習慣で、捕虜にはだれでも一応はこう聞いたものである。生きると答えると降参した意味で、死ぬと云うと屈服しないと云う事になる。自分は一言死ぬと答えた。大将は草の上に突いていた弓を向うへ抛げて、腰に釣るした棒のような剣をするりと抜きかけた。それへ風に靡いた篝火が横から吹きつけた。自分は右の手を楓のように開いて、掌を大将の方へ向けて、眼の上へ差し上げた。待てと云う相図である。大将は太い剣をかちゃりと鞘に収めた。\n　その頃でも恋はあった。自分は死ぬ前に一目思う女に逢いたいと云った。大将は夜が開けて鶏が鳴くまでなら待つと云った。鶏が鳴くまでに女をここへ呼ばなければならない。鶏が鳴いても女が来なければ、自分は逢わずに殺されてしまう。\n　大将は腰をかけたまま、篝火を眺めている。自分は大きな藁沓を組み合わしたまま、草の上で女を待っている。夜はだんだん更ける。\n　時々篝火が崩れる音がする。崩れるたびに狼狽えたように焔が大将になだれかかる。真黒な眉の下で、大将の眼がぴかぴかと光っている。すると誰やら来て、新しい枝をたくさん火の中へ抛げ込んで行く。しばらくすると、火がぱちぱちと鳴る。暗闇を弾き返すような勇ましい音であった。\n　この時女は、裏の楢の木に繋いである、白い馬を引き出した。鬣を三度｜撫でて高い背にひらりと飛び乗った。鞍もない鐙もない裸馬であった。長く白い足で、太腹を蹴ると、馬はいっさんに駆け出した。誰かが篝りを継ぎ足したので、遠くの空が薄明るく見える。馬はこの明るいものを目懸けて闇の中を飛んで来る。鼻から火の柱のような息を二本出して飛んで来る。それでも女は細い足でしきりなしに馬の腹を蹴っている。馬は蹄の音が宙で鳴るほど早く飛んで来る。女の髪は吹流しのように闇の中に尾を曳いた。それでもまだ篝のある所まで来られない。\n　すると真闇な道の傍で、たちまちこけこっこうという鶏の声がした。女は身を空様に、両手に握った手綱をうんと控えた。馬は前足の蹄を堅い岩の上に発矢と刻み込んだ。\n　こけこっこうと鶏がまた一声鳴いた。\n　女はあっと云って、緊めた手綱を一度に緩めた。馬は諸膝を折る。乗った人と共に真向へ前へのめった。岩の下は深い淵であった。\n　蹄の跡はいまだに岩の上に残っている。鶏の鳴く真似をしたものは天探女である。この蹄の痕の岩に刻みつけられている間、天探女は自分の敵である。',
    },
    {
      title: '第六夜',
      body: '　運慶が護国寺の山門で仁王を刻んでいると云う評判だから、散歩ながら行って見ると、自分より先にもう大勢集まって、しきりに下馬評をやっていた。\n　山門の前五六間の所には、大きな赤松があって、その幹が斜めに山門の甍を隠して、遠い青空まで伸びている。松の緑と朱塗の門が互いに照り合ってみごとに見える。その上松の位地が好い。門の左の端を眼障にならないように、斜に切って行って、上になるほど幅を広く屋根まで突出しているのが何となく古風である。鎌倉時代とも思われる。\n　ところが見ているものは、みんな自分と同じく、明治の人間である。その中でも車夫が一番多い。辻待をして退屈だから立っているに相違ない。\n「大きなもんだなあ」と云っている。\n「人間を拵えるよりもよっぽど骨が折れるだろう」とも云っている。\n　そうかと思うと、「へえ仁王だね。今でも仁王を彫るのかね。へえそうかね。私ゃまた仁王はみんな古いのばかりかと思ってた」と云った男がある。\n「どうも強そうですね。なんだってえますぜ。昔から誰が強いって、仁王ほど強い人あ無いって云いますぜ。何でも日本武尊よりも強いんだってえからね」と話しかけた男もある。この男は尻を端折って、帽子を被らずにいた。よほど無教育な男と見える。\n　運慶は見物人の評判には委細｜頓着なく鑿と槌を動かしている。いっこう振り向きもしない。高い所に乗って、仁王の顔の辺をしきりに彫り抜いて行く。\n　運慶は頭に小さい烏帽子のようなものを乗せて、素袍だか何だかわからない大きな袖を背中で括っている。その様子がいかにも古くさい。わいわい云ってる見物人とはまるで釣り合が取れないようである。自分はどうして今時分まで運慶が生きているのかなと思った。どうも不思議な事があるものだと考えながら、やはり立って見ていた。\n　しかし運慶の方では不思議とも奇体ともとんと感じ得ない様子で一生懸命に彫っている。仰向いてこの態度を眺めていた一人の若い男が、自分の方を振り向いて、\n「さすがは運慶だな。眼中に我々なしだ。天下の英雄はただ仁王と我れとあるのみと云う態度だ。天晴れだ」と云って賞め出した。\n　自分はこの言葉を面白いと思った。それでちょっと若い男の方を見ると、若い男は、すかさず、\n「あの鑿と槌の使い方を見たまえ。大自在の妙境に達している」と云った。\n　運慶は今太い眉を一寸の高さに横へ彫り抜いて、鑿の歯を竪に返すや否や斜すに、上から槌を打ち下した。堅い木を一と刻みに削って、厚い木屑が槌の声に応じて飛んだと思ったら、小鼻のおっ開いた怒り鼻の側面がたちまち浮き上がって来た。その刀の入れ方がいかにも無遠慮であった。そうして少しも疑念を挾んでおらんように見えた。\n「よくああ無造作に鑿を使って、思うような眉や鼻ができるものだな」と自分はあんまり感心したから独言のように言った。するとさっきの若い男が、\n「なに、あれは眉や鼻を鑿で作るんじゃない。あの通りの眉や鼻が木の中に埋っているのを、鑿と槌の力で掘り出すまでだ。まるで土の中から石を掘り出すようなものだからけっして間違うはずはない」と云った。\n　自分はこの時始めて彫刻とはそんなものかと思い出した。はたしてそうなら誰にでもできる事だと思い出した。それで急に自分も仁王が彫ってみたくなったから見物をやめてさっそく家へ帰った。\n　道具箱から鑿と金槌を持ち出して、裏へ出て見ると、せんだっての暴風で倒れた樫を、薪にするつもりで、木挽に挽かせた手頃な奴が、たくさん積んであった。\n　自分は一番大きいのを選んで、勢いよく彫り始めて見たが、不幸にして、仁王は見当らなかった。その次のにも運悪く掘り当てる事ができなかった。三番目のにも仁王はいなかった。自分は積んである薪を片っ端から彫って見たが、どれもこれも仁王を蔵しているのはなかった。ついに明治の木にはとうてい仁王は埋っていないものだと悟った。それで運慶が今日まで生きている理由もほぼ解った。',
    },
    {
      title: '第七夜',
      body: '　何でも大きな船に乗っている。\n　この船が毎日毎夜すこしの絶間なく黒い煙を吐いて浪を切って進んで行く。凄じい音である。けれどもどこへ行くんだか分らない。ただ波の底から焼火箸のような太陽が出る。それが高い帆柱の真上まで来てしばらく挂っているかと思うと、いつの間にか大きな船を追い越して、先へ行ってしまう。そうして、しまいには焼火箸のようにじゅっといってまた波の底に沈んで行く。そのたんびに蒼い波が遠くの向うで、蘇枋の色に沸き返る。すると船は凄じい音を立ててその跡を追かけて行く。けれども決して追つかない。\n　ある時自分は、船の男を捕まえて聞いて見た。\n「この船は西へ行くんですか」\n　船の男は怪訝な顔をして、しばらく自分を見ていたが、やがて、\n「なぜ」と問い返した。\n「落ちて行く日を追かけるようだから」\n　船の男はからからと笑った。そうして向うの方へ行ってしまった。\n「西へ行く日の、果は東か。それは本真か。東出る日の、御里は西か。それも本真か。身は波の上。かじ枕。流せ流せ」と囃している。舳へ行って見たら、水夫が大勢寄って、太い帆綱を手繰っていた。\n　自分は大変心細くなった。いつ陸へ上がれる事か分らない。そうしてどこへ行くのだか知れない。ただ黒い煙を吐いて波を切って行く事だけはたしかである。その波はすこぶる広いものであった。際限もなく蒼く見える。時には紫にもなった。ただ船の動く周囲だけはいつでも真白に泡を吹いていた。自分は大変心細かった。こんな船にいるよりいっそ身を投げて死んでしまおうかと思った。\n　乗合はたくさんいた。たいていは異人のようであった。しかしいろいろな顔をしていた。空が曇って船が揺れた時、一人の女が欄に倚りかかって、しきりに泣いていた。眼を拭く手巾《ハンケチ》の色が白く見えた。しかし身体には更紗のような洋服を着ていた。この女を見た時に、悲しいのは自分ばかりではないのだと気がついた。\n　ある晩｜甲板の上に出て、一人で星を眺めていたら、一人の異人が来て、天文学を知ってるかと尋ねた。自分はつまらないから死のうとさえ思っている。天文学などを知る必要がない。黙っていた。するとその異人が金牛宮の頂にある七星の話をして聞かせた。そうして星も海もみんな神の作ったものだと云った。最後に自分に神を信仰するかと尋ねた。自分は空を見て黙っていた。\n　或時サローンに這入ったら派手な衣裳を着た若い女が向うむきになって、洋琴《ピアノ》を弾いていた。その傍に背の高い立派な男が立って、唱歌を唄っている。その口が大変大きく見えた。けれども二人は二人以外の事にはまるで頓着していない様子であった。船に乗っている事さえ忘れているようであった。\n　自分はますますつまらなくなった。とうとう死ぬ事に決心した。それである晩、あたりに人のいない時分、思い切って海の中へ飛び込んだ。ところが――自分の足が甲板を離れて、船と縁が切れたその刹那に、急に命が惜しくなった。心の底からよせばよかったと思った。けれども、もう遅い。自分は厭でも応でも海の中へ這入らなければならない。ただ大変高くできていた船と見えて、身体は船を離れたけれども、足は容易に水に着かない。しかし捕まえるものがないから、しだいしだいに水に近づいて来る。いくら足を縮めても近づいて来る。水の色は黒かった。\n　そのうち船は例の通り黒い煙を吐いて、通り過ぎてしまった。自分はどこへ行くんだか判らない船でも、やっぱり乗っている方がよかったと始めて悟りながら、しかもその悟りを利用する事ができずに、無限の後悔と恐怖とを抱いて黒い波の方へ静かに落ちて行った。',
    },
    {
      title: '第八夜',
      body: '　床屋の敷居を跨いだら、白い着物を着てかたまっていた三四人が、一度にいらっしゃいと云った。\n　真中に立って見廻すと、四角な部屋である。窓が二方に開いて、残る二方に鏡が懸っている。鏡の数を勘定したら六つあった。\n　自分はその一つの前へ来て腰をおろした。すると御尻がぶくりと云った。よほど坐り心地が好くできた椅子である。鏡には自分の顔が立派に映った。顔の後には窓が見えた。それから帳場格子が斜に見えた。格子の中には人がいなかった。窓の外を通る往来の人の腰から上がよく見えた。\n　庄太郎が女を連れて通る。庄太郎はいつの間にかパナマの帽子を買って被っている。女もいつの間に拵らえたものやら。ちょっと解らない。双方とも得意のようであった。よく女の顔を見ようと思ううちに通り過ぎてしまった。\n　豆腐屋が喇叭を吹いて通った。喇叭を口へあてがっているんで、頬ぺたが蜂に螫されたように膨れていた。膨れたまんまで通り越したものだから、気がかりでたまらない。生涯蜂に螫されているように思う。\n　芸者が出た。まだ御化粧をしていない。島田の根が緩んで、何だか頭に締りがない。顔も寝ぼけている。色沢が気の毒なほど悪い。それで御辞儀をして、どうも何とかですと云ったが、相手はどうしても鏡の中へ出て来ない。\n　すると白い着物を着た大きな男が、自分の後ろへ来て、鋏と櫛を持って自分の頭を眺め出した。自分は薄い髭を捩って、どうだろう物になるだろうかと尋ねた。白い男は、何にも云わずに、手に持った琥珀色の櫛で軽く自分の頭を叩いた。\n「さあ、頭もだが、どうだろう、物になるだろうか」と自分は白い男に聞いた。白い男はやはり何も答えずに、ちゃきちゃきと鋏を鳴らし始めた。\n　鏡に映る影を一つ残らず見るつもりで眼をみはっていたが、鋏の鳴るたんびに黒い毛が飛んで来るので、恐ろしくなって、やがて眼を閉じた。すると白い男が、こう云った。\n「旦那は表の金魚売を御覧なすったか」\n　自分は見ないと云った。白い男はそれぎりで、しきりと鋏を鳴らしていた。すると突然大きな声で危険と云ったものがある。はっと眼を開けると、白い男の袖の下に自転車の輪が見えた。人力の梶棒が見えた。と思うと、白い男が両手で自分の頭を押えてうんと横へ向けた。自転車と人力車はまるで見えなくなった。鋏の音がちゃきちゃきする。\n　やがて、白い男は自分の横へ廻って、耳の所を刈り始めた。毛が前の方へ飛ばなくなったから、安心して眼を開けた。粟餅や、餅やあ、餅や、と云う声がすぐ、そこでする。小さい杵をわざと臼へあてて、拍子を取って餅を搗いている。粟餅屋は子供の時に見たばかりだから、ちょっと様子が見たい。けれども粟餅屋はけっして鏡の中に出て来ない。ただ餅を搗く音だけする。\n　自分はあるたけの視力で鏡の角を覗き込むようにして見た。すると帳場格子のうちに、いつの間にか一人の女が坐っている。色の浅黒い眉毛の濃い大柄な女で、髪を銀杏返しに結って、黒繻子の半襟のかかった素袷で、立膝のまま、札の勘定をしている。札は十円札らしい。女は長い睫を伏せて薄い唇を結んで一生懸命に、札の数を読んでいるが、その読み方がいかにも早い。しかも札の数はどこまで行っても尽きる様子がない。膝の上に乗っているのはたかだか百枚ぐらいだが、その百枚がいつまで勘定しても百枚である。\n　自分は茫然としてこの女の顔と十円札を見つめていた。すると耳の元で白い男が大きな声で「洗いましょう」と云った。ちょうどうまい折だから、椅子から立ち上がるや否や、帳場格子の方をふり返って見た。けれども格子のうちには女も札も何にも見えなかった。\n　代を払って表へ出ると、門口の左側に、小判なりの桶が五つばかり並べてあって、その中に赤い金魚や、斑入の金魚や、痩せた金魚や、肥った金魚がたくさん入れてあった。そうして金魚売がその後にいた。金魚売は自分の前に並べた金魚を見つめたまま、頬杖を突いて、じっとしている。騒がしい往来の活動にはほとんど心を留めていない。自分はしばらく立ってこの金魚売を眺めていた。けれども自分が眺めている間、金魚売はちっとも動かなかった。',
    },
    {
      title: '第九夜',
      body: '　世の中が何となくざわつき始めた。今にも戦争が起りそうに見える。焼け出された裸馬が、夜昼となく、屋敷の周囲を暴れ廻ると、それを夜昼となく足軽共が犇きながら追かけているような心持がする。それでいて家のうちは森として静かである。\n　家には若い母と三つになる子供がいる。父はどこかへ行った。父がどこかへ行ったのは、月の出ていない夜中であった。床の上で草鞋を穿いて、黒い頭巾を被って、勝手口から出て行った。その時母の持っていた雪洞の灯が暗い闇に細長く射して、生垣の手前にある古い檜を照らした。\n　父はそれきり帰って来なかった。母は毎日三つになる子供に「御父様は」と聞いている。子供は何とも云わなかった。しばらくしてから「あっち」と答えるようになった。母が「いつ御帰り」と聞いてもやはり「あっち」と答えて笑っていた。その時は母も笑った。そうして「今に御帰り」と云う言葉を何遍となく繰返して教えた。けれども子供は「今に」だけを覚えたのみである。時々は「御父様はどこ」と聞かれて「今に」と答える事もあった。\n　夜になって、四隣が静まると、母は帯を締め直して、鮫鞘の短刀を帯の間へ差して、子供を細帯で背中へ背負って、そっと潜りから出て行く。母はいつでも草履を穿いていた。子供はこの草履の音を聞きながら母の背中で寝てしまう事もあった。\n　土塀の続いている屋敷町を西へ下って、だらだら坂を降り尽くすと、大きな銀杏がある。この銀杏を目標に右に切れると、一丁ばかり奥に石の鳥居がある。片側は田圃で、片側は熊笹ばかりの中を鳥居まで来て、それを潜り抜けると、暗い杉の木立になる。それから二十間ばかり敷石伝いに突き当ると、古い拝殿の階段の下に出る。鼠色に洗い出された賽銭箱の上に、大きな鈴の紐がぶら下がって昼間見ると、その鈴の傍に八幡宮と云う額が懸っている。八の字が、鳩が二羽向いあったような書体にできているのが面白い。そのほかにもいろいろの額がある。たいていは家中のものの射抜いた金的を、射抜いたものの名前に添えたのが多い。たまには太刀を納めたのもある。\n　鳥居を潜ると杉の梢でいつでも梟が鳴いている。そうして、冷飯草履の音がぴちゃぴちゃする。それが拝殿の前でやむと、母はまず鈴を鳴らしておいて、すぐにしゃがんで柏手を打つ。たいていはこの時梟が急に鳴かなくなる。それから母は一心不乱に夫の無事を祈る。母の考えでは、夫が侍であるから、弓矢の神の八幡へ、こうやって是非ない願をかけたら、よもや聴かれぬ道理はなかろうと一図に思いつめている。\n　子供はよくこの鈴の音で眼を覚まして、四辺を見ると真暗だものだから、急に背中で泣き出す事がある。その時母は口の内で何か祈りながら、背を振ってあやそうとする。すると旨く泣きやむ事もある。またますます烈しく泣き立てる事もある。いずれにしても母は容易に立たない。\n　一通り夫の身の上を祈ってしまうと、今度は細帯を解いて、背中の子を摺りおろすように、背中から前へ廻して、両手に抱きながら拝殿を上って行って、「好い子だから、少しの間、待っておいでよ」ときっと自分の頬を子供の頬へ擦りつける。そうして細帯を長くして、子供を縛っておいて、その片端を拝殿の欄干に括りつける。それから段々を下りて来て二十間の敷石を往ったり来たり御百度を踏む。\n　拝殿に括りつけられた子は、暗闇の中で、細帯の丈のゆるす限り、広縁の上を這い廻っている。そう云う時は母にとって、はなはだ楽な夜である。けれども縛った子にひいひい泣かれると、母は気が気でない。御百度の足が非常に早くなる。大変息が切れる。仕方のない時は、中途で拝殿へ上って来て、いろいろすかしておいて、また御百度を踏み直す事もある。\n　こう云う風に、幾晩となく母が気を揉んで、夜の目も寝ずに心配していた父は、とくの昔に浪士のために殺されていたのである。\n　こんな悲い話を、夢の中で母から聞いた。 ',
    },
    {
      title: '第十夜',
      body: '　庄太郎が女に攫われてから七日目の晩にふらりと帰って来て、急に熱が出てどっと、床に就いていると云って健さんが知らせに来た。\n　庄太郎は町内一の好男子で、至極善良な正直者である。ただ一つの道楽がある。パナマの帽子を被って、夕方になると水菓子屋の店先へ腰をかけて、往来の女の顔を眺めている。そうしてしきりに感心している。そのほかにはこれと云うほどの特色もない。\n　あまり女が通らない時は、往来を見ないで水菓子を見ている。水菓子にはいろいろある。水蜜桃や、林檎や、枇杷や、バナナを綺麗に籠に盛って、すぐ見舞物に持って行けるように二列に並べてある。庄太郎はこの籠を見ては綺麗だと云っている。商売をするなら水菓子屋に限ると云っている。そのくせ自分はパナマの帽子を被ってぶらぶら遊んでいる。\n　この色がいいと云って、夏蜜柑などを品評する事もある。けれども、かつて銭を出して水菓子を買った事がない。ただでは無論食わない。色ばかり賞めている。\n　ある夕方一人の女が、不意に店先に立った。身分のある人と見えて立派な服装をしている。その着物の色がひどく庄太郎の気に入った。その上庄太郎は大変女の顔に感心してしまった。そこで大事なパナマの帽子を脱って丁寧に挨拶をしたら、女は籠詰の一番大きいのを指して、これを下さいと云うんで、庄太郎はすぐその籠を取って渡した。すると女はそれをちょっと提げて見て、大変重い事と云った。\n　庄太郎は元来｜閑人の上に、すこぶる気作な男だから、ではお宅まで持って参りましょうと云って、女といっしょに水菓子屋を出た。それぎり帰って来なかった。\n　いかな庄太郎でも、あんまり呑気過ぎる。只事じゃ無かろうと云って、親類や友達が騒ぎ出していると、七日目の晩になって、ふらりと帰って来た。そこで大勢寄ってたかって、庄さんどこへ行っていたんだいと聞くと、庄太郎は電車へ乗って山へ行ったんだと答えた。\n　何でもよほど長い電車に違いない。庄太郎の云うところによると、電車を下りるとすぐと原へ出たそうである。非常に広い原で、どこを見廻しても青い草ばかり生えていた。女といっしょに草の上を歩いて行くと、急に絶壁の天辺へ出た。その時女が庄太郎に、ここから飛び込んで御覧なさいと云った。底を覗いて見ると、切岸は見えるが底は見えない。庄太郎はまたパナマの帽子を脱いで再三辞退した。すると女が、もし思い切って飛び込まなければ、豚に舐められますが好うござんすかと聞いた。庄太郎は豚と雲右衛門が大嫌だった。けれども命には易えられないと思って、やっぱり飛び込むのを見合せていた。ところへ豚が一匹鼻を鳴らして来た。庄太郎は仕方なしに、持っていた細い檳榔樹の洋杖《ステッキ》で、豚の鼻頭を打った。豚はぐうと云いながら、ころりと引っ繰り返って、絶壁の下へ落ちて行った。庄太郎はほっと一と息接いでいるとまた一匹の豚が大きな鼻を庄太郎に擦りつけに来た。庄太郎はやむをえずまた洋杖を振り上げた。豚はぐうと鳴いてまた真逆様に穴の底へ転げ込んだ。するとまた一匹あらわれた。この時庄太郎はふと気がついて、向うを見ると、遥の青草原の尽きる辺から幾万匹か数え切れぬ豚が、群をなして一直線に、この絶壁の上に立っている庄太郎を目懸けて鼻を鳴らしてくる。庄太郎は心から恐縮した。けれども仕方がないから、近寄ってくる豚の鼻頭を、一つ一つ丁寧に檳榔樹の洋杖で打っていた。不思議な事に洋杖が鼻へ触りさえすれば豚はころりと谷の底へ落ちて行く。覗いて見ると底の見えない絶壁を、逆さになった豚が行列して落ちて行く。自分がこのくらい多くの豚を谷へ落したかと思うと、庄太郎は我ながら怖くなった。けれども豚は続々くる。黒雲に足が生えて、青草を踏み分けるような勢いで無尽蔵に鼻を鳴らしてくる。\n　庄太郎は必死の勇をふるって、豚の鼻頭を七日六晩叩いた。けれども、とうとう精根が尽きて、手が蒟蒻のように弱って、しまいに豚に舐められてしまった。そうして絶壁の上へ倒れた。\n　健さんは、庄太郎の話をここまでして、だからあんまり女を見るのは善くないよと云った。自分ももっともだと思った。けれども健さんは庄太郎のパナマの帽子が貰いたいと云っていた。\n　庄太郎は助かるまい。パナマは健さんのものだろう。',
    },
    {
      title: '第十一夜',
      body: '',
    },
  ];

  // To initialize Content with plain text, We should use createFromText with text.
  // That will convert text into rich text. To reconvert, use getPlainText().
  const richContents = contents.map((content) => ({
    title: content.title,
    body: ContentState.createFromText(content.body),
  }));

  const [articles, setArticles] = useState<RichContent[]>(richContents);
  const [selectedArticle, setSelectedArticle] = useState<Article>({
    title: articles[0].title,
    body: articles[0].body,
  });

  return (
    <div className="opacity-80text-xl bg-gradient-to-r from-blue-200 to-blue-500">
      {/* Header */}
      <div className="flex flex-wrap items-center pb-6 pt-10">
        <div className="w-4/12">
          <div className="px-4 py-2 w-full">
            <div className="mx-auto w-full max-w-md">
              <SearchBar contents={articles} />
            </div>
          </div>
        </div>
        <h1 className="w-7/12 text-center text-gray-800 font-serif text-4xl motion-safe:animate-bounce">
          夢十夜 <span className="text-white text-5xl">+ 1</span>
        </h1>
      </div>
      {/* Header */}

      {/* Body */}
      <div className="flex flex-row">
        {/* Radio Buttons in Left */}
        <div className="w-4/12 min-h-screen">
          <MyRadioGroup
            contents={articles}
            handleSelect={setSelectedArticle}
            selected={selectedArticle}
          />
        </div>

        {/* Editor and Control Buttons in Right */}
        <div className="w-7/12">
          <MyEditor
            title={selectedArticle.title}
            content={selectedArticle.body}
            setArticles={setArticles}
          />
        </div>
      </div>
      {/* Body */}
    </div>
  );
};

export default App;
