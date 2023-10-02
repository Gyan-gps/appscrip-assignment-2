// import React from 'react'
import styles from '../../styles/Section2.module.css'
import star from '../../assets/star.png'
const img = "https://s3-alpha-sig.figma.com/img/d048/80aa/1a56a5d5bb0213a58b8af8f1258a5a4d?Expires=1696809600&Signature=pMRmX6ZZ9VXU1Ei9CZZci-dOS8YxYKPPaRAKkY7pPfB49h8HVt2U3RzV4S9TnY40MeQYtIsEjKMse4IaxLPYadGUJcEv1xGwi3AcVCCM~q9hONspwNG0OC8YGp8FfiTR25~Pvd9PCMfA8oFjqT8U9236WsvWmizImB9X38C~8PwPdLUodJbxxJgzJCv0-Jg1QT7WOIC6mfiwpfUk-hhyXC0JED-0pZ0oi97yEx6OWRMS9bc9GZxkGW44nu4RkuNNxOqznhF93dHd-NVL~feG1-Rp23~SG9Q0BlxDuEI6WQUU1UqWLAYNE4e-XgzqUpkk6KG1B7kk~z~UOiUE61-WQQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
const bagimg = "https://s3-alpha-sig.figma.com/img/7fee/d622/59108073a7d5a4b4b1fbdc85903206e3?Expires=1696809600&Signature=pb5kru72SkNLixndhW2U0aGN9e3s~qAq1Ai4cJe-itBWw6-Y5j9nyPAZAxsIKqwAuWEGnLeXzGgqXMyuJEECzORftF3bxeVsTkb6fkwMrMautm3qazMVQRL1jkrIe11GPsQat3AKwDj1aRut-StaT3KVq9zkv1MXoHu4e8-CTcNJHZmQoG5oyP0qiOtEA3CWIZAcGkN~tt3ge3niFSZWfncs5R8arPiKhn7CcQkO0laY901OAtD3cKIvjDVYbZGDQNIXRUh~66s7z8FDnVFKcGh3k~wGwJlTsk9HrWwxX9iG~Uphd~WtrWFIeAdaFNRyATaRDTavv2cNNERHGpF5eA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
const mobileimg = "https://s3-alpha-sig.figma.com/img/168c/3487/d359b10d5a6ac1ddac7f79cf81ac4162?Expires=1696809600&Signature=U5eSRlo6FaWwrkxySAInvqQKaK7elxJJ889J4~zdShUyubV0Jfg-tSMYREg2JDEbz6ftJVep-uCaX57g3DmjoFD2xLFmoP5R9nGbN-XkZEumU6xKzOFZALCWwg9kLzYW94zLdpvNMh8kHs6wGCchtcPjMsDZ3ljz1rYyfp1f7rXwvcvMvDBkGrdRc26m0gGmeX6V-YZov-8O0x-3WA9t-BR7KFVErdDqjuNO3um3hlBYia8xVm-bz5hZZ3ItkrkuVFSyCvDVSsgIc~P7jDNZ1if5uqhTcWofrYD5DHKaWmV-9bIRtnpzYgqN~wCoH-UyyNVekn09inBgSnRZUP3Ciw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
const dollerimg = "https://s3-alpha-sig.figma.com/img/782c/ad6f/551912c0a37afcbea0ec870b5f9f144e?Expires=1696809600&Signature=iwwga1JhIJeLhGu0EpdIVCw~rtYyCX90klf05Umjpor9OyPB8MxrVRPoRpYv~zsqBMfke7I9GV86BUA~40e4iwjAZhLqGr0q31Xskzc2e~mT3l3pQ7mktB0hGR4d6v5Ry8mPNXYqUP6K66QWH1xdbJVCcNycanblMSsE9RXqOSOdbls1dGsJhubFe4ZbjndSi9cj0WSGNi0CjJF73RiWPvM6ySOWM-z1nk9CVb5AAxm8ep-RdKugx6-e0bGB8-l-rW1oRgE8hu-nsus4SYglAViEDK5HGP6aHe~CKT3ALINge897zUYD-y0CPaNambBeDxMAeOzxyp9C4eyx~G1JYg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
const bottomimg = [
  "https://s3-alpha-sig.figma.com/img/6983/4ff5/07c90e05fc472295e14d8c091bca17ea?Expires=1696809600&Signature=oLA2estt8766QfD4R7VYKanib-9kHqBB362KG3UMW-K4pv6kqT8NZzvkMu40DJgxANcANiTixMzut-ZvH~3AECKer0ocTV4qOeoauocvVRYuXCSWjOjeIh62iqUiQit6ZoqJgGyGIHzPeqT3IC7Gdiew0vDosoRV6rGhgvIqKC~xvPBhZmZBSzheU1CsrfomMzmwshnOzRX4GWGsdsKB6tlD07~q8MyTifXCAvAl0ETQcOtu0J3i6~Wkdu6ZR3rQWs9N~76rdDtrj0RS406jB4Hklm~wHau3hqrgbizZTruwXfEKWKYzCxLBBZuLvbi2m7groLDzJMh~Ao~PVeWUsA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/556c/6225/b4a33a4eaf587c8a7684a9ad2780eb4d?Expires=1696809600&Signature=OuhUN1yaculTYUWKI~1A4tEnaz4qzdgmIEm8fFXThivLddNusAvQIb6xQr7Lptuke2r9QSuRht32ANWttP6J1Ys~pwMnDW1S6mwgrWvddG5DwGJAVp1-KsBtqiLu9vpg0ryXkkWhldRsEKQBov05SE-0C6vg1V6Tu4swsNpusjexT~LOOtVv0iZxu8bBcfdrQjhy5MBHKEp1NiQ~dElnVFbZstwpNh8mYVk2ydmufZnoG8LqsyN9FdChGUZqZU0GvLvG462zTc01Zv-2Dajdfyh7Rz1eMupg7SEtrN3ndiAqAMACvRustly3gC0fX4jKC-u2~a~MSSAmXx6rpXKWEg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/71bf/30af/78cfb4b415731466c9ce8a1c38ad5d50?Expires=1696809600&Signature=OZIFnKHqC~6UqdBCBVryoyEts-XzoCDJPS-AMgkBEN9snS9GavP8Psy-PGKrsh4BxK-J8Inj~Sj0LJzx9yw49b~3q0lZuXoD719z0kmCxBQiIu7q35XYUFUliJb5IoEBDxn59dx~7R0JrJEZLNholUM0csy4mtoSriIbt-EVNBp-xC5z2lQq82ndFAKbxcVhzMnjg52uoNWjOW6LH8CKKBQ7s3Ol0gjdyVf3bmAX2snVAXng18FihxF8zx-Y3TPBU8~0Ll30Mu5sfnAUzpLFfNES-YY1NMgVU006zh9TXQkkOc-EWty7Am5C9T7~kHugYiy0mrPKSCGiqGvvuemA5A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
]
const Section2 = () => {
  return (
    <section className={styles.section2}>
      <div className={styles.header}>Elevate Your Craft</div>
      <div >
        <div className={styles.top}>
          <div className={styles.topcard}>
            <div className={styles.shadow}></div>
            <div className={styles.div}>Unlock Your ABC Earning Potential</div>
            <p className={styles.p}>Are you ready to take your earning potential to the next level? With ABC, you have multiple avenues to monetize your content seamlessly. From subscriptions and tips to merchandise sales and NFTS, ABC helps you diversify your revenue streams and maximize your income.</p>
            <div className={styles.mobile} 
            style={{
            }}>
              <img src={mobileimg} alt='mobileimg' loading='lazy' />
              <div className={styles.doller} style={{
              }}>

              <img src={dollerimg} alt='dollerimg' loading='lazy' />
              </div>
            </div>
          </div>
          <div className={styles.topcard}>
            <div className={styles.shadow}></div>
            <div className={styles.div}>Boost Your Sales with Built-in E-commerce</div>
            <p className={styles.p}>Take control of your brand and boost your sales with ABC&apos;s built-in e-commerce functionality. Showcase and sell your exclusive products, whether it&apos;s merchandise, digital downloads, or personalized experiences. Integrate your store effortlessly and turn your creative ideas into profitable ventures.</p>
            <div className={styles.topcardflex}>
              <div className={styles.card} >
                <div><img className={styles.img} src={bagimg} alt='img' loading='lazy' /></div>
              </div>
              {
                [1, 2, 3, 4, 5].map((ele) => (
                  <div key={ele} className={styles.card} >
                    <div><img className={styles.img} src={img} alt='img' loading='lazy' /></div>
                    <div className={styles.desc}>
                      <div className={styles.title}>Green modern bikini</div>
                      <div className={styles.price}>
                        <div className={styles.value}>$100</div>
                        <div className={styles.star}><img src={star} alt='star' loading='lazy' /> 4.3</div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          {
            [1, 2, 3].map((ele) => (
              <div key={ele} className={styles.card}>
                <div className={styles.shadow} ></div>
                <div className={styles.img}><img src={bottomimg[ele - 1]} alt={ele} loading='lazy' /></div>
                <div>Save Time with Automation and Efficiency</div>
                <p>Supercharge your content creation with ABC&apos;s automation tools. Streamline scheduling, multi-platform management, and more. Save time on repetitive tasks, focus on exceptional content.</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Section2
