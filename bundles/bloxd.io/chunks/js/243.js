export const id = 243;
export const ids = [243];
export const modules = {
  42952: (dd, Od, md) => {
    md.d(Od, {
      b: () => Xd,
      c: () => Rd
    });
    var Wd = md(2337),
      Fd = md(1122);

    function Rd(dd, Od) {
      return null !== dd.gameSource && (0, Wd.k)(Od, dd.gameSource)
    }

    function Xd(dd, Od) {
      if (null === dd.gameSource || "" === dd.gameSource || null === Od) return !0;
      const md = (0, Fd.k)(Od) ? (0, Fd.p)(Od) : null;
      return null !== md && Rd(dd, md)
    }
  },
  42926: (dd, Od, md) => {
    md.d(Od, {
      d: () => Kd
    });
    var Wd = md(693),
      Fd = md(42929),
      Rd = md(42797);
    async function Xd(dd) {
      const Od = await (0, Fd.g)({
        Helmet: md(39520),
        Chestplate: md(39524),
        Gauntlets: md(39538),
        Leggings: md(39526),
        Boots: md(39534)
      } [Wd.b[dd]]);
      try {
        return (0, Rd.n)(Od)
      } finally {
        Od.close()
      }
    }
    const Kd = new class {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xd,
          Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Fd.n;
        this.decode = dd, this.register = Od, this.decoded = new Map
      }
      warm() {
        for (let dd = 0; dd < Wd.b.length; dd++) this.part(dd).catch((Od => {
          console.warn(`The grayscale armour ${Wd.b[dd]} image didn't decode ahead of use`, Od)
        }))
      }
      async load(dd, Od) {
        const {
          width: md,
          height: Rd,
          pixels: Xd
        } = await this.part(dd), Kd = new ImageData(function(dd, Od) {
          const md = new Uint8ClampedArray(dd.length);
          for (let Wd = 0; Wd < dd.length; Wd += 4) md[Wd] = Math.round(dd[Wd] * Od[0] / 255), md[Wd + 1] = Math.round(dd[Wd + 1] * Od[1] / 255), md[Wd + 2] = Math.round(dd[Wd + 2] * Od[2] / 255), md[Wd + 3] = dd[Wd + 3];
          return md
        }(Xd, function(dd) {
          return [dd >>> 16 & 255, dd >>> 8 & 255, 255 & dd]
        }(Od)), md, Rd);
        let hd;
        try {
          hd = await createImageBitmap(Kd, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          })
        } catch (vd) {
          throw new Fd.e("decode", `grayscale armour ${Wd.b[dd]}`, {
            cause: vd
          })
        }
        return {
          id: this.register(hd),
          width: md,
          height: Rd
        }
      }
      part(dd) {
        const Od = this.decoded.get(dd);
        if (void 0 !== Od) return Od;
        const md = this.decode(dd).catch((Od => {
          throw this.decoded.delete(dd), Od instanceof Fd.e ? Od : new Fd.e("decode", `grayscale armour ${Wd.b[dd]}`, {
            cause: Od
          })
        }));
        return this.decoded.set(dd, md), md
      }
    }
  },
  42923: (dd, Od, md) => {
    md.d(Od, {
      b: () => Xd,
      e: () => yd,
      h: () => Qd,
      l: () => td,
      n: () => Hd
    });
    var Wd = md(42779),
      Fd = md(42926),
      Rd = md(42929);
    const Xd = 396,
      Kd = 1,
      hd = 2,
      vd = 3,
      Qd = {
        Glb: 1,
        LifeformAtlas: 2,
        ArmourAtlas: 3,
        Cape: 4,
        GroupAtlas: 5,
        Particle: 6,
        AttachmentImage: 7,
        BlockImage: 8,
        GreyscaleArmour: 9
      },
      td = {
        File: 0,
        Item: 1
      },
      od = 0,
      Nd = 1,
      qd = 2;

    function Hd(dd) {
      const Od = (0, Wd.n)();
      Od.catch((() => {}));
      let Fd = null;
      return {
        glbUrl: dd,
        lifeformAtlasUrl: async dd => (await Od).lifeformAtlasUrl(dd),
        armourAtlasUrl: async () => (await md.e(235).then((() => md(35669)))).armourAtlasUrl,
        capeUrl: async dd => (await Od).capeUrl(dd),
        attachmentImageUrl: async dd => (await Od).attachmentImageUrl(dd),
        blockImageUrl: async dd => (await Od).blockImageUrl(dd),
        groupAtlasUrl: async dd => (await Od).groupAtlasUrl(dd),
        particleTextureUrl: async dd => (await Od).particleTextureUrl(dd),
        particleItemUrl: async dd => (Fd ??= md.e(45).then((() => md(55140))).catch((dd => {
          throw Fd = null, dd
        })), (await Fd).particleItemUrl(dd))
      }
    }
    class yd {
      constructor(dd, Od) {
        var md, Xd, Kd, hd;
        let vd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.sources = dd, this.onFailure = Od, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.greyscaleArmour = void 0, this.Aq = !1, this.load = null !== (md = vd.load) && void 0 !== md ? md : (dd, Od, md) => (0, Rd.j)(dd, vd.fetchImage, Od, md), this.release = null !== (Xd = vd.release) && void 0 !== Xd ? Xd : Rd.q, this.fetchFile = null !== (Kd = vd.fetchFile) && void 0 !== Kd ? Kd : dd => (0, Wd.i)(dd), this.greyscaleArmour = null !== (hd = vd.greyscaleArmour) && void 0 !== hd ? hd : Fd.d
      }
      get waiting() {
        return this.ready.length
      }
      get inFlight() {
        return this.loading.size
      }
      glbWritten(dd, Od) {
        this.glbWrittenImages.set(dd, Ed(Od))
      }
      glbTaken(dd, Od) {
        const md = this.glbWrittenImages.get(dd);
        this.glbWrittenImages.delete(dd), Od && this.setGlbImages(dd, void 0 !== md && md.length > 0 ? md : void 0)
      }
      setGlbImages(dd, Od) {
        var md;
        this.glbTakenCount.set(dd, (null !== (md = this.glbTakenCount.get(dd)) && void 0 !== md ? md : 0) + 1), void 0 === Od ? this.glbImages.delete(dd) : this.glbImages.set(dd, Od);
        const Wd = [];
        for (const {
            key: Fd
          }
          of this.loading.values()) Fd.kind === Qd.Glb && Fd.word === dd && Wd.push(Fd);
        for (let Fd = this.ready.length - 1; Fd >= 0; Fd--) {
          const {
            key: Od,
            id: md
          } = this.ready[Fd];
          Od.kind === Qd.Glb && Od.word === dd && (this.ready.splice(Fd, 1), null !== md && (this.answered.delete(md), this.release(md)), Wd.push(Od))
        }
        this.loadAgain(Wd)
      }
      onEvent(dd) {
        if (this.Aq) return;
        const Od = new DataView(dd.buffer, dd.byteOffset, dd.byteLength);
        for (let md = 0; md + 8 <= dd.byteLength; md += 8) {
          const dd = Od.getUint8(md),
            Wd = Od.getUint32(md + 4, !0);
          if (dd === vd) {
            this.answered.delete(Wd), this.release(Wd);
            continue
          }
          const Fd = {
            kind: Od.getUint8(md + 1),
            index: Od.getUint8(md + 2),
            word: Wd
          };
          dd === Kd ? this.want(Fd) : dd === hd && this.loading.delete(bd(Fd))
        }
      }
      reload(dd, Od) {
        const md = md => dd.includes(md.kind) && (void 0 === Od || Od(md)),
          Wd = new Map;
        for (const Fd of this.answered.values()) md(Fd) && Wd.set(bd(Fd), Fd);
        for (const [Fd, {
            key: Rd
          }] of this.loading) md(Rd) && Wd.set(Fd, Rd);
        this.loadAgain(Wd.values())
      }
      loadAgain(dd) {
        for (const Od of dd) this.loading.delete(bd(Od)), this.want(Od)
      }
      drain(dd) {
        if (null !== dd)
          for (; this.ready.length > 0;) {
            if (!dd(Xd, 0, this.ready[0].record)) return;
            this.ready.shift()
          }
      }
      dispose() {
        this.Aq = !0, this.loading.clear(), this.ready.length = 0;
        for (const dd of this.answered.keys()) this.release(dd);
        this.answered.clear()
      }
      want(dd) {
        const Od = bd(dd);
        if (this.loading.has(Od)) return;
        const md = {
          key: dd
        };
        this.loading.set(Od, md), this.loadKey(dd).then((Wd => {
          this.Aq || this.loading.get(Od) !== md ? this.release(Wd.id) : (this.loading.delete(Od), this.answered.set(Wd.id, dd), this.ready.push({
            record: pd(dd, od, Wd),
            key: dd,
            id: Wd.id
          }))
        }), (Wd => {
          if (this.Aq || this.loading.get(Od) !== md) return;
          this.loading.delete(Od), this.onFailure({
            key: dd,
            error: Wd
          });
          const Fd = Wd instanceof Rd.e && "decode" === Wd.stage ? Nd : qd;
          this.ready.push({
            record: pd(dd, Fd, null),
            key: dd,
            id: null
          })
        }))
      }
      async loadKey(dd) {
        switch (dd.kind) {
          case Qd.Glb:
            return this.load(await this.glbImage(dd), "none");
          case Qd.LifeformAtlas:
            return this.load(Td(await this.sources.lifeformAtlasUrl(dd.word), dd), "none", !0);
          case Qd.ArmourAtlas:
            return this.load(Td(await this.sources.armourAtlasUrl(), dd), "none");
          case Qd.Cape:
            return this.load(Td(await this.sources.capeUrl(dd.word), dd), "none");
          case Qd.AttachmentImage:
            return this.load(Td(await this.sources.attachmentImageUrl(dd.word), dd), "none");
          case Qd.GroupAtlas:
            return this.load(Td(await this.sources.groupAtlasUrl(dd.word), dd), "none");
          case Qd.BlockImage:
            return this.load(Td(await this.sources.blockImageUrl(dd.word), dd), "none");
          case Qd.Particle: {
            const Od = await (dd.index === td.Item ? this.sources.particleItemUrl(dd.word) : this.sources.particleTextureUrl(dd.word));
            return this.load(Td(Od, dd), "flipY")
          }
          case Qd.GreyscaleArmour:
            return this.greyscaleArmour.load(dd.index, dd.word);
          default:
            throw new Rd.e("fetch", `image kind ${dd.kind}`, {
              cause: null
            })
        }
      }
      async glbImage(dd) {
        var Od;
        let md = this.glbImages.get(dd.word);
        if (void 0 === md) {
          const Od = this.glbTakenCount.get(dd.word),
            Wd = Td(await this.sources.glbUrl(dd.word), dd);
          try {
            md = Ed(await this.fetchFile(Wd))
          } catch (Fd) {
            throw new Rd.e("fetch", Wd, {
              cause: Fd
            })
          }
          this.glbTakenCount.get(dd.word) === Od && this.glbImages.set(dd.word, md)
        }
        const Wd = null === (Od = md) || void 0 === Od ? void 0 : Od[dd.index];
        if (!Wd) throw new Rd.e("decode", `image ${dd.index} of file ${2147483647&dd.word}`, {
          cause: null
        });
        return Wd
      }
    }

    function bd(dd) {
      let {
        kind: Od,
        index: md,
        word: Wd
      } = dd;
      return `${Od}:${md}:${Wd}`
    }

    function Td(dd, Od) {
      if (null === dd) throw new Rd.e("fetch", `no URL for image ${bd(Od)}`, {
        cause: null
      });
      return dd
    }

    function pd(dd, Od, md) {
      var Wd, Fd, Rd;
      const Xd = new Uint8Array(16),
        Kd = new DataView(Xd.buffer);
      return Kd.setUint8(0, dd.kind), Kd.setUint8(1, dd.index), Kd.setUint8(2, Od), Kd.setUint32(4, dd.word, !0), Kd.setUint32(8, null !== (Wd = null === md || void 0 === md ? void 0 : md.id) && void 0 !== Wd ? Wd : 0, !0), Kd.setUint16(12, Math.min(null !== (Fd = null === md || void 0 === md ? void 0 : md.width) && void 0 !== Fd ? Fd : 0, 65535), !0), Kd.setUint16(14, Math.min(null !== (Rd = null === md || void 0 === md ? void 0 : md.height) && void 0 !== Rd ? Rd : 0, 65535), !0), Xd
    }
    const Yd = 1179937895,
      gd = 1313821514,
      wd = 5130562;

    function Ed(dd) {
      var Od;
      const md = new DataView(dd.buffer, dd.byteOffset, dd.byteLength);
      if (dd.byteLength < 20 || md.getUint32(0, !0) !== Yd || md.getUint32(16, !0) !== gd) return [];
      let Wd, Fd = 20 + md.getUint32(12, !0);
      try {
        Wd = JSON.parse((new TextDecoder).decode(dd.subarray(20, Fd)))
      } catch {
        return []
      }
      for (; Fd + 8 <= dd.byteLength && md.getUint32(Fd + 4, !0) !== wd;) Fd += 8 + md.getUint32(Fd, !0);
      const Rd = null !== (Od = Wd.images) && void 0 !== Od ? Od : [];
      if (0 === Rd.length || Fd + 8 > dd.byteLength) return Rd.map((() => null));
      const Xd = dd.subarray(Fd + 8, Math.min(dd.byteLength, Fd + 8 + md.getUint32(Fd, !0)));
      return Rd.map((dd => {
        var Od, md, Fd;
        const Rd = void 0 === dd.bufferView || null === (Od = Wd.bufferViews) || void 0 === Od ? void 0 : Od[dd.bufferView];
        if (!Rd || 0 !== (null !== (md = Rd.buffer) && void 0 !== md ? md : 0) || void 0 === Rd.byteLength) return null;
        const Kd = null !== (Fd = Rd.byteOffset) && void 0 !== Fd ? Fd : 0,
          hd = Kd + Rd.byteLength;
        return hd <= Xd.byteLength ? Xd.slice(Kd, hd) : null
      }))
    }
  },
  42938: (dd, Od, md) => {
    md.d(Od, {
      e: () => Qd,
      g: () => Rd,
      j: () => td,
      l: () => Xd
    });
    var Wd = md(42923),
      Fd = md(42779);
    const Rd = new class {
      constructor() {
        this.page = null, this.session = void 0, this.follower = null, this.isWanted = !1, this.listeners = new Set, this.pageListeners = new Set, this.wantedListeners = new Set
      }
      get current() {
        return void 0 === this.session ? this.page : this.session
      }
      setPageFiles(dd) {
        this.change((() => {
          this.page = dd
        }))
      }
      setSessionFiles(dd) {
        const Od = void 0 !== this.session && void 0 === dd;
        if (this.change((() => {
            this.session = dd
          })), Od)
          for (const md of [...this.pageListeners]) md()
      }
      showsPage() {
        return void 0 === this.session
      }
      onPageShown(dd) {
        return this.pageListeners.add(dd), () => {
          this.pageListeners.delete(dd)
        }
      }
      setFollower(dd) {
        this.follower = dd, this.startFollower()
      }
      wanted() {
        this.isWanted = !0;
        for (const dd of [...this.wantedListeners]) dd();
        this.startFollower()
      }
      onWanted(dd) {
        return this.wantedListeners.add(dd), () => {
          this.wantedListeners.delete(dd)
        }
      }
      onChange(dd) {
        return this.listeners.add(dd), () => {
          this.listeners.delete(dd)
        }
      }
      startFollower() {
        const dd = this.follower;
        this.isWanted && null !== dd && (this.follower = null, dd((() => {
          this.follower = dd
        })))
      }
      change(dd) {
        const Od = this.current;
        if (dd(), this.current !== Od)
          for (const md of this.listeners) md()
      }
    };

    function Xd(dd, Od) {
      return {
        ...dd,
        armourAtlasUrl: () => {
          var md, Wd;
          return null !== (md = null === (Wd = Od()) || void 0 === Wd ? void 0 : Wd.armourAtlasUrl()) && void 0 !== md ? md : dd.armourAtlasUrl()
        },
        lifeformAtlasUrl: md => hd(Od(), (dd => dd.LIFEFORM_ATLAS_PATHS[md]), (() => dd.lifeformAtlasUrl(md))),
        groupAtlasUrl: md => hd(Od(), (dd => dd.GROUP_ATLAS_PATHS[md]), (() => dd.groupAtlasUrl(md))),
        particleItemUrl: Wd => vd(Od(), (async () => {
          const dd = await md.e(45).then((() => md(55140))).catch((() => null));
          return (null === dd || void 0 === dd ? void 0 : dd.particleItemSprite(Wd)) || null
        }), (() => dd.particleItemUrl(Wd))),
        blockImageUrl: md => vd(Od(), (async () => {
          var dd, Od;
          return null !== (dd = null === (Od = await Kd()) || void 0 === Od ? void 0 : Od.blockImageName(md)) && void 0 !== dd ? dd : null
        }), (() => dd.blockImageUrl(md)))
      }
    }

    function Kd() {
      return (0, Fd.n)().catch((() => null))
    }

    function hd(dd, Od, md) {
      return vd(dd, (async () => {
        var dd;
        const md = await Kd(),
          Wd = null === md ? null : Od(md),
          Fd = null !== (dd = null === Wd || void 0 === Wd ? void 0 : Wd.slice(Wd.lastIndexOf("/") + 1)) && void 0 !== dd ? dd : null;
        return "Player_Atlas" === Fd ? null : Fd
      }), md)
    }
    async function vd(dd, Od, md) {
      if (null !== dd) {
        const md = await Od(),
          Wd = null === md ? null : dd.textureUrl(md);
        if (null !== Wd) return Wd
      }
      return md()
    }
    const Qd = 0;

    function td(dd) {
      const Od = [Wd.h.ArmourAtlas, Wd.h.LifeformAtlas, Wd.h.GroupAtlas, Wd.h.BlockImage, Wd.h.Particle];
      dd.reload(Od, (dd => {
        switch (dd.kind) {
          case Wd.h.Particle:
            return dd.index === Wd.l.Item;
          case Wd.h.LifeformAtlas:
            return dd.word !== Qd;
          default:
            return !0
        }
      }))
    }
  },
  42849: (dd, Od, md) => {
    md.d(Od, {
      e: () => Wd,
      i: () => Kd,
      k: () => Fd,
      m: () => Rd
    });
    const Wd = 1e3;

    function Fd() {
      hd((() => {
        window.location.reload()
      }))
    }

    function Rd() {
      return new Promise((() => {}))
    }

    function Xd(dd) {
      hd((() => {
        window.location.replace(dd(window.location.href))
      }))
    }

    function Kd(dd) {
      Promise.resolve().then((() => md(118))).then((Od => {
        let {
          currentUrl: md
        } = Od;
        Xd((() => md.mergeSearchParamsInto(dd)))
      }), (() => {
        Xd((() => dd))
      }))
    }

    function hd(dd) {
      null !== window.onbeforeunload ? Promise.resolve().then((() => md(1890))).then((Od => {
        let {
          prepareForUnloadWithoutConfirmation: md
        } = Od;
        try {
          md()
        } catch (Wd) {
          console.warn("[bloxd-wasm-client] prepareForUnloadWithoutConfirmation threw: leaving plainly", Wd), window.onbeforeunload = null
        }
        dd()
      }), (() => {
        window.onbeforeunload = null, dd()
      })) : dd()
    }
  },
  37709: (dd, Od, md) => {
    md.d(Od, {
      c: () => yd,
      d: () => Qd,
      g: () => Nd,
      h: () => td,
      l: () => bd,
      p: () => qd,
      r: () => Hd,
      s: () => od
    });
    const Wd = 30,
      Fd = 4;
    let Rd = 0,
      Xd = !1,
      Kd = !1,
      hd = Number.NEGATIVE_INFINITY,
      vd = [];

    function Qd() {
      0 === Rd && (Xd = !1, Kd = !1), Rd++;
      let dd = !1;
      return () => {
        dd || (dd = !0, Rd--)
      }
    }

    function td(dd) {
      dd && (Kd = !0)
    }

    function od() {
      return Kd
    }

    function Nd(dd) {
      Xd = dd
    }

    function qd() {
      return Rd > 0
    }

    function Hd(dd) {
      return !(Rd > 0 && (Xd || dd - hd < 1e3 / Wd - Fd)) && (hd = dd, !0)
    }

    function yd(dd) {
      return vd.push(dd), () => {
        vd = vd.filter((Od => Od !== dd))
      }
    }

    function bd() {
      if (0 === vd.length) return;
      const dd = vd;
      vd = [];
      for (const md of dd) try {
        md()
      } catch (Od) {
        console.warn("[bloxd-previews] an after-draw callback threw", Od)
      }
    }
  },
  42861: (dd, Od, md) => {
    md.d(Od, {
      e: () => wd,
      f: () => od,
      h: () => pd,
      l: () => gd,
      n: () => Yd,
      o: () => Ed
    });
    var Wd = md(200),
      Fd = md(29),
      Rd = md(32),
      Xd = md(3973),
      Kd = md(1361),
      hd = md(35471),
      vd = md(339),
      Qd = md(107),
      td = md(191);

    function od() {
      var dd;
      const Od = (0, Xd.K)(),
        md = function(dd, Od) {
          return {
            sampleCount: dd.antiAliasing ? 4 : 1,
            n: (0, Xd.y)(dd.pixelScale, Od),
            pixelated: (0, Xd.u)(dd.pixelSmoothing)
          }
        }(Fd.e.get("clientEscMenuOptions"), Od);
      return md.sampleCount > 1 && (0, hd.d)() && (md.sampleCount = 1), md.n = null !== (dd = (0, hd.m)()) && void 0 !== dd ? dd : md.n, Wd.l.includes((0, Qd.getSoftwareRenderer)()) && (md.sampleCount = 1, md.n = Math.max(md.n, (0, Xd.y)(td.r.pixelScale, Od))), md
    }
    let Nd = null,
      qd = null;
    const Hd = new Set;
    let yd = null;

    function bd() {
      for (const dd of Hd) dd()
    }

    function Td() {
      if (null === Nd) {
        const dd = document.createElement("div");
        dd.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", dd.setAttribute("aria-hidden", "true"), document.body.append(dd), qd = dd, Nd = new Xd.b(dd, bd)
      }
      return Nd
    }

    function pd(dd) {
      const Od = (0, Xd.m)(),
        [md, Wd] = Td().size(Od);
      return (0, Xd.i)(md, Wd, Od, dd.n)
    }

    function Yd(dd) {
      var Od, md, Wd, Fd;
      const Rd = (0, Xd.m)(),
        [hd, vd] = Td().size(Rd);
      if (hd <= 0 || vd <= 0) return null;
      const Qd = (0, Xd.i)(hd, vd, Rd, od().n);
      return (0, Xd.e)(dd, Qd), dd.style.left = `${null!==(Od=null===(md=yd)||void 0===md?void 0:md.rect.left)&&void 0!==Od?Od:0}px`, dd.style.top = `${null!==(Wd=null===(Fd=yd)||void 0===Fd?void 0:Fd.rect.top)&&void 0!==Wd?Wd:0}px`, (0, Kd.cb)(dd.style, yd), Qd
    }

    function gd(dd) {
      yd = dd, Td(), (0, Kd.Z)(qd.style, dd, ""), bd()
    }

    function wd(dd, Od) {
      dd.style.imageRendering = (0, Xd.O)(Od.pixelated)
    }

    function Ed(dd, Od) {
      const md = (0, Rd.l)("appManagerUpdated|clientEscMenuOptions", (() => {
          wd(dd, od()), Od()
        })),
        Wd = (0, hd.A)(Od),
        Fd = (0, vd.m)(Od);
      return Td(), Hd.add(Od), () => {
        md(), Wd(), Fd(), Hd.delete(Od)
      }
    }
  },
  42946: (dd, Od, md) => {
    md.d(Od, {
      e: () => Rd
    });
    var Wd = md(42952),
      Fd = md(42938);
    const Rd = new class {
      constructor(dd) {
        this.pack = dd, this.game = void 0, this.settle = null, this.hold = null, this.endedWhileHeld = !1, this.gameListeners = new Set, dd.onWanted((() => {
          this.release()
        }))
      }
      setGame(dd) {
        if (void 0 === dd && null !== this.hold) return void(this.endedWhileHeld = !0);
        this.hold = null, this.endedWhileHeld = !1;
        const Od = this.inGame();
        if (this.game = dd, this.update(), this.inGame() !== Od)
          for (const md of this.gameListeners) md()
      }
      inGame() {
        return void 0 !== this.game
      }
      onGameChange(dd) {
        return this.gameListeners.add(dd), () => {
          this.gameListeners.delete(dd)
        }
      }
      unwantedLeave(dd) {
        dd && void 0 !== this.game ? this.hold = {
          game: this.game
        } : this.release()
      }
      rejoinHold() {
        return this.hold
      }
      releaseHold(dd) {
        null !== dd && dd === this.hold && this.release()
      }
      release() {
        if (null === this.hold) return;
        const dd = this.endedWhileHeld;
        this.hold = null, this.endedWhileHeld = !1, dd && this.setGame(void 0)
      }
      setSettled(dd) {
        this.settle = dd, this.update()
      }
      update() {
        void 0 === this.game ? this.pack.setSessionFiles(void 0) : null !== this.settle && (0, Wd.b)(this.settle.state, this.game) && this.pack.setSessionFiles(this.settle.files)
      }
    }(Fd.g)
  },
  42929: (dd, Od, md) => {
    md.d(Od, {
      e: () => Kd,
      f: () => Hd,
      g: () => hd,
      j: () => Yd,
      n: () => pd,
      q: () => gd
    });
    var Wd = md(2425);
    const Fd = 8388608,
      Rd = 1e3,
      Xd = 3e4;
    class Kd extends Error {
      constructor(dd, Od, md) {
        super(`${"fetch"===dd?"fetching":"decoding"} ${Od} failed`, md), this.stage = dd, this.source = Od, this.name = "ShellImageError"
      }
    }
    async function hd(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wd.J,
        md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      return Qd(await vd(dd, Od), "string" === typeof dd ? dd : null, md)
    }
    async function vd(dd, Od) {
      if ("string" !== typeof dd) return dd;
      try {
        return await Od(dd)
      } catch (md) {
        throw new Kd("fetch", dd, {
          cause: md
        })
      }
    }
    async function Qd(dd, Od, md) {
      try {
        const Od = new Blob([dd.slice()], {
          type: "image/png"
        });
        return await createImageBitmap(Od, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: md
        })
      } catch (Wd) {
        throw new Kd("decode", null !== Od && void 0 !== Od ? Od : `${dd.byteLength} bytes`, {
          cause: Wd
        })
      }
    }
    let td = null;
    const od = new Map;
    let Nd = 1;
    const qd = new Map;

    function Hd(dd) {
      var Od;
      if (td = dd, null !== dd) {
        null === (Od = dd.ORd) || void 0 === Od || Od.call(dd, Td);
        for (const [Od, md] of od) yd(dd, Od, md);
        od.clear()
      }
    }

    function yd(dd, Od, md) {
      qd.has(Od) && void 0 !== dd.dRd ? dd.dRd(Od, md) : dd.fFd(Od, md)
    }

    function bd(dd, Od) {
      td ? yd(td, dd, Od) : od.set(dd, Od)
    }

    function Td(dd) {
      const Od = qd.get(dd);
      void 0 === Od || Od.decoding || (Od.decoding = !0, Qd(Od.bytes, Od.url, Od.orientation).then((md => {
        Od.decoding = !1, qd.get(dd) === Od ? (Od.failures = 0, bd(dd, md)) : md.close()
      }), (md => {
        Od.decoding = !1, Od.failures++, 1 === Od.failures && console.warn(`shellImages: decoding image ${dd} again failed; trying again until it decodes`, md), setTimeout((() => {
          Td(dd)
        }), Math.min(Rd * 2 ** (Od.failures - 1), Xd))
      })))
    }

    function pd(dd) {
      const Od = Nd++;
      return bd(Od, dd), Od
    }
    async function Yd(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wd.J,
        md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none",
        Rd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const Xd = "string" === typeof dd ? dd : null,
        Kd = await vd(dd, Od),
        hd = await Qd(Kd, Xd, md),
        {
          width: td,
          height: od
        } = hd,
        Hd = Nd++;
      return Rd && td * od * 4 >= Fd && qd.set(Hd, {
        bytes: Kd.slice(),
        url: Xd,
        orientation: md,
        decoding: !1,
        failures: 0
      }), bd(Hd, hd), {
        id: Hd,
        width: td,
        height: od
      }
    }

    function gd(dd) {
      var Od;
      qd.delete(dd);
      const md = od.get(dd);
      if (md) return md.close(), void od.delete(dd);
      null === (Od = td) || void 0 === Od || Od.MFd(dd)
    }
  },
  39534: dd => {
    dd.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v+LFy8yvH//noGXl/ccuq8A/vQKd00yOdIAAAAASUVORK5CYII="
  },
  39524: dd => {
    dd.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAALUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMnBzczN8/PjxHLLPAORwCnfkvOdNAAAAAElFTkSuQmCC"
  },
  39538: dd => {
    dd.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  39520: dd => {
    dd.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAANUlEQVQYGWM8CwQMeAATHjmw1JBQAHLp/wMHDvy/ePHi/4CAgP937tz5Ly6u+5/P3uw/KAgAgjwWhHm22JoAAAAASUVORK5CYII="
  },
  39526: dd => {
    dd.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);