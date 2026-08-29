export default function PerceivedGradePage() {
  return (
    <div className="w-full px-4 py-8">
      <h2 className="text-xl font-bold text-amber-700">グレード(体感)</h2>
      <div className="mt-2 text-base text-amber-600">
        ジムのグレードは、そのジムによってほんとうに様々。グレード評価が辛いところもあれば甘いところもある。中にはジム独自グレードを使うところも。私自身は今まで20軒以上のジムに訪問させていただいた経験からおおよそのグレード体感をまとめました。あくまでもわたしの感想です(笑)
      </div>
      <div className="mt-6 w-full overflow-hidden rounded-lg border border-zinc-200">
        <div className="truncate bg-yellow-100 px-4 py-2 font-semibold text-zinc-900">
          8級
        </div>
        <div className="line-clamp-3 bg-blue-100 px-4 py-3 text-sm text-zinc-800">
          まずはここから！<br/>
          はしごを登るよりも簡単かも！
        </div>
      </div>
      <div className="mt-6 w-full overflow-hidden rounded-lg border border-zinc-200">
        <div className="truncate bg-yellow-100 px-4 py-2 font-semibold text-zinc-900">
          7級
        </div>
        <div className="line-clamp-3 bg-blue-100 px-4 py-3 text-sm text-zinc-800">
          足に体重をしっかりのせよう。<br/>
          クライミング初日でも余裕？!
        </div>
      </div>
      <div className="mt-6 w-full overflow-hidden rounded-lg border border-zinc-200">
        <div className="truncate bg-yellow-100 px-4 py-2 font-semibold text-zinc-900">
          6級
        </div>
        <div className="line-clamp-3 bg-blue-100 px-4 py-3 text-sm text-zinc-800">
          ちょっとクライミングらしい動きが出てくる。クライミング初日では登れない人も出てくる難易度。<br/>
          同じジムに2,3回行けば登れるようになります！
        </div>
      </div>
      <div className="mt-6 w-full overflow-hidden rounded-lg border border-zinc-200">
        <div className="truncate bg-yellow-100 px-4 py-2 font-semibold text-zinc-900">
          5級
        </div>
        <div className="line-clamp-3 bg-blue-100 px-4 py-3 text-sm text-zinc-800">
          少しづつムーブが必要になってくる。腕だけで登るのが辛くなってくる難易度です。<br/>
          初心者はまずはここを目標にしましょう!
        </div>
      </div>
      <div className="mt-6 w-full overflow-hidden rounded-lg border border-zinc-200">
        <div className="truncate bg-yellow-100 px-4 py-2 font-semibold text-zinc-900">
          4級
        </div>
        <div className="line-clamp-3 bg-blue-100 px-4 py-3 text-sm text-zinc-800">
          クライミングらしい動きができないと登れない。クライミングを始めた人が最初にぶつかる壁かもしれません。<br/>
          ここをクリアして、中級者クライマーの仲間入りをしよう!!
        </div>
      </div>
      <div className="mt-6 w-full overflow-hidden rounded-lg border border-zinc-200">
        <div className="truncate bg-yellow-100 px-4 py-2 font-semibold text-zinc-900">
          3級
        </div>
        <div className="line-clamp-3 bg-blue-100 px-4 py-3 text-sm text-zinc-800">
          いよいろ本格的なクライミングに必要な技術が出てきます。ムーブができないとまず登れません。<br/>
          3級が登れるようになるのはかなりの時間がかかります。でも3級が登れるようになると、クライミングの楽しさがさらにわかりますよ!
        </div>
      </div>
      <div className="mt-6 w-full overflow-hidden rounded-lg border border-zinc-200">
        <div className="truncate bg-yellow-100 px-4 py-2 font-semibold text-zinc-900">
          2級
        </div>
        <div className="line-clamp-3 bg-blue-100 px-4 py-3 text-sm text-zinc-800">
          ここからフィジカルの強さも必要になってきます。人によってダイエットや筋トレが必要になっています。<br/>
          ここまでくるとあなたはもう日常生活にクライミングが取り込まれていることでしょう！
        </div>
      </div>
      <div className="mt-6 w-full overflow-hidden rounded-lg border border-zinc-200">
        <div className="truncate bg-yellow-100 px-4 py-2 font-semibold text-zinc-900">
          1級
        </div>
        <div className="line-clamp-3 bg-blue-100 px-4 py-3 text-sm text-zinc-800">
          クライミングを始めると憧れる1級。強度の強いムーブとフィジカルが求められます。<br/>
          食生活や筋トレなど日々の生活から意識しないと登れないかも？
        </div>
      </div>
      <div className="mt-6 w-full overflow-hidden rounded-lg border border-zinc-200">
        <div className="truncate bg-yellow-100 px-4 py-2 font-semibold text-zinc-900">
          初段
        </div>
        <div className="line-clamp-3 bg-blue-100 px-4 py-3 text-sm text-zinc-800">
          私はまだ登れません。<br/>
          果てしないクライミングの旅の途中です！
        </div>
      </div>
    </div>
  );
}
