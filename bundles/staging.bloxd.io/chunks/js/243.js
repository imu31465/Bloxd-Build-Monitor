export const id = 243;
export const ids = [243];
export const modules = {
  42649: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Vb,
      e: () => pb
    });
    var eb = Mb(2380),
      Hb = Mb(1126);

    function pb(bb, wb) {
      return null !== bb.gameSource && (0, eb.p)(wb, bb.gameSource)
    }

    function Vb(bb, wb) {
      if (null === bb.gameSource || "" === bb.gameSource || null === wb) return !0;
      const Mb = (0, Hb.j)(wb) ? (0, Hb.o)(wb) : null;
      return null !== Mb && pb(bb, Mb)
    }
  },
  42631: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => gb
    });
    var eb = Mb(648),
      Hb = Mb(42633),
      pb = Mb(42515);
    async function Vb(bb) {
      const wb = await (0, Hb.j)({
        Helmet: Mb(39209),
        Chestplate: Mb(39213),
        Gauntlets: Mb(39227),
        Leggings: Mb(39217),
        Boots: Mb(39221)
      } [eb.c[bb]]);
      try {
        return (0, pb.m)(wb)
      } finally {
        wb.close()
      }
    }
    const gb = new class {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vb,
          wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Hb.o;
        this.decode = bb, this.register = wb, this.decoded = new Map
      }
      warm() {
        for (let bb = 0; bb < eb.c.length; bb++) this.part(bb).catch((wb => {
          console.warn(`The grayscale armour ${eb.c[bb]} image didn't decode ahead of use`, wb)
        }))
      }
      async load(bb, wb) {
        const {
          width: Mb,
          height: pb,
          pixels: Vb
        } = await this.part(bb), gb = new ImageData(function(bb, wb) {
          const Mb = new Uint8ClampedArray(bb.length);
          for (let eb = 0; eb < bb.length; eb += 4) Mb[eb] = Math.round(bb[eb] * wb[0] / 255), Mb[eb + 1] = Math.round(bb[eb + 1] * wb[1] / 255), Mb[eb + 2] = Math.round(bb[eb + 2] * wb[2] / 255), Mb[eb + 3] = bb[eb + 3];
          return Mb
        }(Vb, function(bb) {
          return [bb >>> 16 & 255, bb >>> 8 & 255, 255 & bb]
        }(wb)), Mb, pb);
        let lb;
        try {
          lb = await createImageBitmap(gb, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          })
        } catch (Lb) {
          throw new Hb.c("decode", `grayscale armour ${eb.c[bb]}`, {
            cause: Lb
          })
        }
        return {
          id: this.register(lb),
          width: Mb,
          height: pb
        }
      }
      part(bb) {
        const wb = this.decoded.get(bb);
        if (void 0 !== wb) return wb;
        const Mb = this.decode(bb).catch((wb => {
          throw this.decoded.delete(bb), wb instanceof Hb.c ? wb : new Hb.c("decode", `grayscale armour ${eb.c[bb]}`, {
            cause: wb
          })
        }));
        return this.decoded.set(bb, Mb), Mb
      }
    }
  },
  42622: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Vb,
      g: () => Fb,
      h: () => Ib,
      k: () => Ob,
      n: () => Eb
    });
    var eb = Mb(42502),
      Hb = Mb(42631),
      pb = Mb(42633);
    const Vb = 396,
      gb = 1,
      lb = 2,
      Lb = 3,
      Ib = {
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
      Ob = {
        File: 0,
        Item: 1
      },
      Ub = 0,
      tb = 1,
      Cb = 2;

    function Eb(bb) {
      const wb = (0, eb.j)();
      wb.catch((() => {}));
      let Hb = null;
      return {
        glbUrl: bb,
        lifeformAtlasUrl: async bb => (await wb).lifeformAtlasUrl(bb),
        armourAtlasUrl: async () => (await Mb.e(235).then((() => Mb(35425)))).armourAtlasUrl,
        capeUrl: async bb => (await wb).capeUrl(bb),
        attachmentImageUrl: async bb => (await wb).attachmentImageUrl(bb),
        blockImageUrl: async bb => (await wb).blockImageUrl(bb),
        groupAtlasUrl: async bb => (await wb).groupAtlasUrl(bb),
        particleTextureUrl: async bb => (await wb).particleTextureUrl(bb),
        particleItemUrl: async bb => (Hb ??= Mb.e(45).then((() => Mb(54948))).catch((bb => {
          throw Hb = null, bb
        })), (await Hb).particleItemUrl(bb))
      }
    }
    class Fb {
      constructor(bb, wb) {
        var Mb, Vb, gb, lb;
        let Lb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.sources = bb, this.onFailure = wb, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.greyscaleArmour = void 0, this.BC = !1, this.load = null !== (Mb = Lb.load) && void 0 !== Mb ? Mb : (bb, wb, Mb) => (0, pb.l)(bb, Lb.fetchImage, wb, Mb), this.release = null !== (Vb = Lb.release) && void 0 !== Vb ? Vb : pb.p, this.fetchFile = null !== (gb = Lb.fetchFile) && void 0 !== gb ? gb : bb => (0, eb.g)(bb), this.greyscaleArmour = null !== (lb = Lb.greyscaleArmour) && void 0 !== lb ? lb : Hb.b
      }
      get waiting() {
        return this.ready.length
      }
      get inFlight() {
        return this.loading.size
      }
      glbWritten(bb, wb) {
        this.glbWrittenImages.set(bb, xb(wb))
      }
      glbTaken(bb, wb) {
        const Mb = this.glbWrittenImages.get(bb);
        this.glbWrittenImages.delete(bb), wb && this.setGlbImages(bb, void 0 !== Mb && Mb.length > 0 ? Mb : void 0)
      }
      setGlbImages(bb, wb) {
        var Mb;
        this.glbTakenCount.set(bb, (null !== (Mb = this.glbTakenCount.get(bb)) && void 0 !== Mb ? Mb : 0) + 1), void 0 === wb ? this.glbImages.delete(bb) : this.glbImages.set(bb, wb);
        const eb = [];
        for (const {
            key: Hb
          }
          of this.loading.values()) Hb.kind === Ib.Glb && Hb.word === bb && eb.push(Hb);
        for (let Hb = this.ready.length - 1; Hb >= 0; Hb--) {
          const {
            key: wb,
            id: Mb
          } = this.ready[Hb];
          wb.kind === Ib.Glb && wb.word === bb && (this.ready.splice(Hb, 1), null !== Mb && (this.answered.delete(Mb), this.release(Mb)), eb.push(wb))
        }
        this.loadAgain(eb)
      }
      onEvent(bb) {
        if (this.BC) return;
        const wb = new DataView(bb.buffer, bb.byteOffset, bb.byteLength);
        for (let Mb = 0; Mb + 8 <= bb.byteLength; Mb += 8) {
          const bb = wb.getUint8(Mb),
            eb = wb.getUint32(Mb + 4, !0);
          if (bb === Lb) {
            this.answered.delete(eb), this.release(eb);
            continue
          }
          const Hb = {
            kind: wb.getUint8(Mb + 1),
            index: wb.getUint8(Mb + 2),
            word: eb
          };
          bb === gb ? this.want(Hb) : bb === lb && this.loading.delete(Bb(Hb))
        }
      }
      reload(bb, wb) {
        const Mb = Mb => bb.includes(Mb.kind) && (void 0 === wb || wb(Mb)),
          eb = new Map;
        for (const Hb of this.answered.values()) Mb(Hb) && eb.set(Bb(Hb), Hb);
        for (const [Hb, {
            key: pb
          }] of this.loading) Mb(pb) && eb.set(Hb, pb);
        this.loadAgain(eb.values())
      }
      loadAgain(bb) {
        for (const wb of bb) this.loading.delete(Bb(wb)), this.want(wb)
      }
      drain(bb) {
        if (null !== bb)
          for (; this.ready.length > 0;) {
            if (!bb(Vb, 0, this.ready[0].record)) return;
            this.ready.shift()
          }
      }
      dispose() {
        this.BC = !0, this.loading.clear(), this.ready.length = 0;
        for (const bb of this.answered.keys()) this.release(bb);
        this.answered.clear()
      }
      want(bb) {
        const wb = Bb(bb);
        if (this.loading.has(wb)) return;
        const Mb = {
          key: bb
        };
        this.loading.set(wb, Mb), this.loadKey(bb).then((eb => {
          this.BC || this.loading.get(wb) !== Mb ? this.release(eb.id) : (this.loading.delete(wb), this.answered.set(eb.id, bb), this.ready.push({
            record: mb(bb, Ub, eb),
            key: bb,
            id: eb.id
          }))
        }), (eb => {
          if (this.BC || this.loading.get(wb) !== Mb) return;
          this.loading.delete(wb), this.onFailure({
            key: bb,
            error: eb
          });
          const Hb = eb instanceof pb.c && "decode" === eb.stage ? tb : Cb;
          this.ready.push({
            record: mb(bb, Hb, null),
            key: bb,
            id: null
          })
        }))
      }
      async loadKey(bb) {
        switch (bb.kind) {
          case Ib.Glb:
            return this.load(await this.glbImage(bb), "none");
          case Ib.LifeformAtlas:
            return this.load(sb(await this.sources.lifeformAtlasUrl(bb.word), bb), "none", !0);
          case Ib.ArmourAtlas:
            return this.load(sb(await this.sources.armourAtlasUrl(), bb), "none");
          case Ib.Cape:
            return this.load(sb(await this.sources.capeUrl(bb.word), bb), "none");
          case Ib.AttachmentImage:
            return this.load(sb(await this.sources.attachmentImageUrl(bb.word), bb), "none");
          case Ib.GroupAtlas:
            return this.load(sb(await this.sources.groupAtlasUrl(bb.word), bb), "none");
          case Ib.BlockImage:
            return this.load(sb(await this.sources.blockImageUrl(bb.word), bb), "none");
          case Ib.Particle: {
            const wb = await (bb.index === Ob.Item ? this.sources.particleItemUrl(bb.word) : this.sources.particleTextureUrl(bb.word));
            return this.load(sb(wb, bb), "flipY")
          }
          case Ib.GreyscaleArmour:
            return this.greyscaleArmour.load(bb.index, bb.word);
          default:
            throw new pb.c("fetch", `image kind ${bb.kind}`, {
              cause: null
            })
        }
      }
      async glbImage(bb) {
        var wb;
        let Mb = this.glbImages.get(bb.word);
        if (void 0 === Mb) {
          const wb = this.glbTakenCount.get(bb.word),
            eb = sb(await this.sources.glbUrl(bb.word), bb);
          try {
            Mb = xb(await this.fetchFile(eb))
          } catch (Hb) {
            throw new pb.c("fetch", eb, {
              cause: Hb
            })
          }
          this.glbTakenCount.get(bb.word) === wb && this.glbImages.set(bb.word, Mb)
        }
        const eb = null === (wb = Mb) || void 0 === wb ? void 0 : wb[bb.index];
        if (!eb) throw new pb.c("decode", `image ${bb.index} of file ${2147483647&bb.word}`, {
          cause: null
        });
        return eb
      }
    }

    function Bb(bb) {
      let {
        kind: wb,
        index: Mb,
        word: eb
      } = bb;
      return `${wb}:${Mb}:${eb}`
    }

    function sb(bb, wb) {
      if (null === bb) throw new pb.c("fetch", `no URL for image ${Bb(wb)}`, {
        cause: null
      });
      return bb
    }

    function mb(bb, wb, Mb) {
      var eb, Hb, pb;
      const Vb = new Uint8Array(16),
        gb = new DataView(Vb.buffer);
      return gb.setUint8(0, bb.kind), gb.setUint8(1, bb.index), gb.setUint8(2, wb), gb.setUint32(4, bb.word, !0), gb.setUint32(8, null !== (eb = null === Mb || void 0 === Mb ? void 0 : Mb.id) && void 0 !== eb ? eb : 0, !0), gb.setUint16(12, Math.min(null !== (Hb = null === Mb || void 0 === Mb ? void 0 : Mb.width) && void 0 !== Hb ? Hb : 0, 65535), !0), gb.setUint16(14, Math.min(null !== (pb = null === Mb || void 0 === Mb ? void 0 : Mb.height) && void 0 !== pb ? pb : 0, 65535), !0), Vb
    }
    const hb = 1179937895,
      zb = 1313821514,
      Xb = 5130562;

    function xb(bb) {
      var wb;
      const Mb = new DataView(bb.buffer, bb.byteOffset, bb.byteLength);
      if (bb.byteLength < 20 || Mb.getUint32(0, !0) !== hb || Mb.getUint32(16, !0) !== zb) return [];
      let eb, Hb = 20 + Mb.getUint32(12, !0);
      try {
        eb = JSON.parse((new TextDecoder).decode(bb.subarray(20, Hb)))
      } catch {
        return []
      }
      for (; Hb + 8 <= bb.byteLength && Mb.getUint32(Hb + 4, !0) !== Xb;) Hb += 8 + Mb.getUint32(Hb, !0);
      const pb = null !== (wb = eb.images) && void 0 !== wb ? wb : [];
      if (0 === pb.length || Hb + 8 > bb.byteLength) return pb.map((() => null));
      const Vb = bb.subarray(Hb + 8, Math.min(bb.byteLength, Hb + 8 + Mb.getUint32(Hb, !0)));
      return pb.map((bb => {
        var wb, Mb, Hb;
        const pb = void 0 === bb.bufferView || null === (wb = eb.bufferViews) || void 0 === wb ? void 0 : wb[bb.bufferView];
        if (!pb || 0 !== (null !== (Mb = pb.buffer) && void 0 !== Mb ? Mb : 0) || void 0 === pb.byteLength) return null;
        const gb = null !== (Hb = pb.byteOffset) && void 0 !== Hb ? Hb : 0,
          lb = gb + pb.byteLength;
        return lb <= Vb.byteLength ? Vb.slice(gb, lb) : null
      }))
    }
  },
  42635: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Ib,
      i: () => pb,
      j: () => Ob,
      n: () => Vb
    });
    var eb = Mb(42622),
      Hb = Mb(42502);
    const pb = new class {
      constructor() {
        this.page = null, this.session = void 0, this.follower = null, this.isWanted = !1, this.listeners = new Set, this.pageListeners = new Set, this.wantedListeners = new Set
      }
      get current() {
        return void 0 === this.session ? this.page : this.session
      }
      setPageFiles(bb) {
        this.change((() => {
          this.page = bb
        }))
      }
      setSessionFiles(bb) {
        const wb = void 0 !== this.session && void 0 === bb;
        if (this.change((() => {
            this.session = bb
          })), wb)
          for (const Mb of [...this.pageListeners]) Mb()
      }
      showsPage() {
        return void 0 === this.session
      }
      onPageShown(bb) {
        return this.pageListeners.add(bb), () => {
          this.pageListeners.delete(bb)
        }
      }
      setFollower(bb) {
        this.follower = bb, this.startFollower()
      }
      wanted() {
        this.isWanted = !0;
        for (const bb of [...this.wantedListeners]) bb();
        this.startFollower()
      }
      onWanted(bb) {
        return this.wantedListeners.add(bb), () => {
          this.wantedListeners.delete(bb)
        }
      }
      onChange(bb) {
        return this.listeners.add(bb), () => {
          this.listeners.delete(bb)
        }
      }
      startFollower() {
        const bb = this.follower;
        this.isWanted && null !== bb && (this.follower = null, bb((() => {
          this.follower = bb
        })))
      }
      change(bb) {
        const wb = this.current;
        if (bb(), this.current !== wb)
          for (const Mb of this.listeners) Mb()
      }
    };

    function Vb(bb, wb) {
      return {
        ...bb,
        armourAtlasUrl: () => {
          var Mb, eb;
          return null !== (Mb = null === (eb = wb()) || void 0 === eb ? void 0 : eb.armourAtlasUrl()) && void 0 !== Mb ? Mb : bb.armourAtlasUrl()
        },
        lifeformAtlasUrl: Mb => lb(wb(), (bb => bb.LIFEFORM_ATLAS_PATHS[Mb]), (() => bb.lifeformAtlasUrl(Mb))),
        groupAtlasUrl: Mb => lb(wb(), (bb => bb.GROUP_ATLAS_PATHS[Mb]), (() => bb.groupAtlasUrl(Mb))),
        particleItemUrl: eb => Lb(wb(), (async () => {
          const bb = await Mb.e(45).then((() => Mb(54948))).catch((() => null));
          return (null === bb || void 0 === bb ? void 0 : bb.particleItemSprite(eb)) || null
        }), (() => bb.particleItemUrl(eb))),
        blockImageUrl: Mb => Lb(wb(), (async () => {
          var bb, wb;
          return null !== (bb = null === (wb = await gb()) || void 0 === wb ? void 0 : wb.blockImageName(Mb)) && void 0 !== bb ? bb : null
        }), (() => bb.blockImageUrl(Mb)))
      }
    }

    function gb() {
      return (0, Hb.j)().catch((() => null))
    }

    function lb(bb, wb, Mb) {
      return Lb(bb, (async () => {
        var bb;
        const Mb = await gb(),
          eb = null === Mb ? null : wb(Mb),
          Hb = null !== (bb = null === eb || void 0 === eb ? void 0 : eb.slice(eb.lastIndexOf("/") + 1)) && void 0 !== bb ? bb : null;
        return "Player_Atlas" === Hb ? null : Hb
      }), Mb)
    }
    async function Lb(bb, wb, Mb) {
      if (null !== bb) {
        const Mb = await wb(),
          eb = null === Mb ? null : bb.textureUrl(Mb);
        if (null !== eb) return eb
      }
      return Mb()
    }
    const Ib = 0;

    function Ob(bb) {
      const wb = [eb.h.ArmourAtlas, eb.h.LifeformAtlas, eb.h.GroupAtlas, eb.h.BlockImage, eb.h.Particle];
      bb.reload(wb, (bb => {
        switch (bb.kind) {
          case eb.h.Particle:
            return bb.index === eb.k.Item;
          case eb.h.LifeformAtlas:
            return bb.word !== Ib;
          default:
            return !0
        }
      }))
    }
  },
  42554: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => eb,
      f: () => gb,
      g: () => Hb,
      k: () => pb
    });
    const eb = 1e3;

    function Hb() {
      lb((() => {
        window.location.reload()
      }))
    }

    function pb() {
      return new Promise((() => {}))
    }

    function Vb(bb) {
      lb((() => {
        window.location.replace(bb(window.location.href))
      }))
    }

    function gb(bb) {
      Promise.resolve().then((() => Mb(122))).then((wb => {
        let {
          currentUrl: Mb
        } = wb;
        Vb((() => Mb.mergeSearchParamsInto(bb)))
      }), (() => {
        Vb((() => bb))
      }))
    }

    function lb(bb) {
      null !== window.onbeforeunload ? Promise.resolve().then((() => Mb(1965))).then((wb => {
        let {
          prepareForUnloadWithoutConfirmation: Mb
        } = wb;
        try {
          Mb()
        } catch (eb) {
          console.warn("[bloxd-wasm-client] prepareForUnloadWithoutConfirmation threw: leaving plainly", eb), window.onbeforeunload = null
        }
        bb()
      }), (() => {
        window.onbeforeunload = null, bb()
      })) : bb()
    }
  },
  37446: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Fb,
      g: () => Ib,
      h: () => tb,
      j: () => Ob,
      n: () => Bb,
      o: () => Cb,
      r: () => Eb,
      v: () => Ub
    });
    const eb = 30,
      Hb = 4;
    let pb = 0,
      Vb = !1,
      gb = !1,
      lb = Number.NEGATIVE_INFINITY,
      Lb = [];

    function Ib() {
      0 === pb && (Vb = !1, gb = !1), pb++;
      let bb = !1;
      return () => {
        bb || (bb = !0, pb--)
      }
    }

    function Ob(bb) {
      bb && (gb = !0)
    }

    function Ub() {
      return gb
    }

    function tb(bb) {
      Vb = bb
    }

    function Cb() {
      return pb > 0
    }

    function Eb(bb) {
      return !(pb > 0 && (Vb || bb - lb < 1e3 / eb - Hb)) && (lb = bb, !0)
    }

    function Fb(bb) {
      return Lb.push(bb), () => {
        Lb = Lb.filter((wb => wb !== bb))
      }
    }

    function Bb() {
      if (0 === Lb.length) return;
      const bb = Lb;
      Lb = [];
      for (const Mb of bb) try {
        Mb()
      } catch (wb) {
        console.warn("[bloxd-previews] an after-draw callback threw", wb)
      }
    }
  },
  42567: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Xb,
      e: () => Ub,
      g: () => mb,
      j: () => zb,
      m: () => hb,
      o: () => xb
    });
    var eb = Mb(205),
      Hb = Mb(26),
      pb = Mb(29),
      Vb = Mb(4139),
      gb = Mb(1391),
      lb = Mb(35270),
      Lb = Mb(332),
      Ib = Mb(110),
      Ob = Mb(200);

    function Ub() {
      var bb;
      const wb = (0, Vb.J)(),
        Mb = function(bb, wb) {
          return {
            sampleCount: bb.antiAliasing ? 4 : 1,
            n: (0, Vb.x)(bb.pixelScale, wb),
            pixelated: (0, Vb.t)(bb.pixelSmoothing)
          }
        }(Hb.c.get("clientEscMenuOptions"), wb);
      return Mb.sampleCount > 1 && (0, lb.c)() && (Mb.sampleCount = 1), Mb.n = null !== (bb = (0, lb.n)()) && void 0 !== bb ? bb : Mb.n, eb.i.includes((0, Ib.getSoftwareRenderer)()) && (Mb.sampleCount = 1, Mb.n = Math.max(Mb.n, (0, Vb.x)(Ob.r.pixelScale, wb))), Mb
    }
    let tb = null,
      Cb = null;
    const Eb = new Set;
    let Fb = null;

    function Bb() {
      for (const bb of Eb) bb()
    }

    function sb() {
      if (null === tb) {
        const bb = document.createElement("div");
        bb.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", bb.setAttribute("aria-hidden", "true"), document.body.append(bb), Cb = bb, tb = new Vb.b(bb, Bb)
      }
      return tb
    }

    function mb(bb) {
      const wb = (0, Vb.k)(),
        [Mb, eb] = sb().size(wb);
      return (0, Vb.f)(Mb, eb, wb, bb.n)
    }

    function hb(bb) {
      var wb, Mb, eb, Hb;
      const pb = (0, Vb.k)(),
        [lb, Lb] = sb().size(pb);
      if (lb <= 0 || Lb <= 0) return null;
      const Ib = (0, Vb.f)(lb, Lb, pb, Ub().n);
      return (0, Vb.d)(bb, Ib), bb.style.left = `${null!==(wb=null===(Mb=Fb)||void 0===Mb?void 0:Mb.rect.left)&&void 0!==wb?wb:0}px`, bb.style.top = `${null!==(eb=null===(Hb=Fb)||void 0===Hb?void 0:Hb.rect.top)&&void 0!==eb?eb:0}px`, (0, gb.V)(bb.style, Fb), Ib
    }

    function zb(bb) {
      Fb = bb, sb(), (0, gb.M)(Cb.style, bb, ""), Bb()
    }

    function Xb(bb, wb) {
      bb.style.imageRendering = (0, Vb.L)(wb.pixelated)
    }

    function xb(bb, wb) {
      const Mb = (0, pb.o)("appManagerUpdated|clientEscMenuOptions", (() => {
          Xb(bb, Ub()), wb()
        })),
        eb = (0, lb.z)(wb),
        Hb = (0, Lb.r)(wb);
      return sb(), Eb.add(wb), () => {
        Mb(), eb(), Hb(), Eb.delete(wb)
      }
    }
  },
  42640: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => pb
    });
    var eb = Mb(42649),
      Hb = Mb(42635);
    const pb = new class {
      constructor(bb) {
        this.pack = bb, this.game = void 0, this.settle = null, this.hold = null, this.endedWhileHeld = !1, this.gameListeners = new Set, bb.onWanted((() => {
          this.release()
        }))
      }
      setGame(bb) {
        if (void 0 === bb && null !== this.hold) return void(this.endedWhileHeld = !0);
        this.hold = null, this.endedWhileHeld = !1;
        const wb = this.inGame();
        if (this.game = bb, this.update(), this.inGame() !== wb)
          for (const Mb of this.gameListeners) Mb()
      }
      inGame() {
        return void 0 !== this.game
      }
      onGameChange(bb) {
        return this.gameListeners.add(bb), () => {
          this.gameListeners.delete(bb)
        }
      }
      unwantedLeave(bb) {
        bb && void 0 !== this.game ? this.hold = {
          game: this.game
        } : this.release()
      }
      rejoinHold() {
        return this.hold
      }
      releaseHold(bb) {
        null !== bb && bb === this.hold && this.release()
      }
      release() {
        if (null === this.hold) return;
        const bb = this.endedWhileHeld;
        this.hold = null, this.endedWhileHeld = !1, bb && this.setGame(void 0)
      }
      setSettled(bb) {
        this.settle = bb, this.update()
      }
      update() {
        void 0 === this.game ? this.pack.setSessionFiles(void 0) : null !== this.settle && (0, eb.d)(this.settle.state, this.game) && this.pack.setSessionFiles(this.settle.files)
      }
    }(Hb.i)
  },
  42633: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => gb,
      g: () => Eb,
      j: () => lb,
      l: () => hb,
      o: () => mb,
      p: () => zb
    });
    var eb = Mb(2471);
    const Hb = 8388608,
      pb = 1e3,
      Vb = 3e4;
    class gb extends Error {
      constructor(bb, wb, Mb) {
        super(`${"fetch"===bb?"fetching":"decoding"} ${wb} failed`, Mb), this.stage = bb, this.source = wb, this.name = "ShellImageError"
      }
    }
    async function lb(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eb.C,
        Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      return Ib(await Lb(bb, wb), "string" === typeof bb ? bb : null, Mb)
    }
    async function Lb(bb, wb) {
      if ("string" !== typeof bb) return bb;
      try {
        return await wb(bb)
      } catch (Mb) {
        throw new gb("fetch", bb, {
          cause: Mb
        })
      }
    }
    async function Ib(bb, wb, Mb) {
      try {
        const wb = new Blob([bb.slice()], {
          type: "image/png"
        });
        return await createImageBitmap(wb, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: Mb
        })
      } catch (eb) {
        throw new gb("decode", null !== wb && void 0 !== wb ? wb : `${bb.byteLength} bytes`, {
          cause: eb
        })
      }
    }
    let Ob = null;
    const Ub = new Map;
    let tb = 1;
    const Cb = new Map;

    function Eb(bb) {
      var wb;
      if (Ob = bb, null !== bb) {
        null === (wb = bb.Mpb) || void 0 === wb || wb.call(bb, sb);
        for (const [wb, Mb] of Ub) Fb(bb, wb, Mb);
        Ub.clear()
      }
    }

    function Fb(bb, wb, Mb) {
      Cb.has(wb) && void 0 !== bb.wpb ? bb.wpb(wb, Mb) : bb.kHb(wb, Mb)
    }

    function Bb(bb, wb) {
      Ob ? Fb(Ob, bb, wb) : Ub.set(bb, wb)
    }

    function sb(bb) {
      const wb = Cb.get(bb);
      void 0 === wb || wb.decoding || (wb.decoding = !0, Ib(wb.bytes, wb.url, wb.orientation).then((Mb => {
        wb.decoding = !1, Cb.get(bb) === wb ? (wb.failures = 0, Bb(bb, Mb)) : Mb.close()
      }), (Mb => {
        wb.decoding = !1, wb.failures++, 1 === wb.failures && console.warn(`shellImages: decoding image ${bb} again failed; trying again until it decodes`, Mb), setTimeout((() => {
          sb(bb)
        }), Math.min(pb * 2 ** (wb.failures - 1), Vb))
      })))
    }

    function mb(bb) {
      const wb = tb++;
      return Bb(wb, bb), wb
    }
    async function hb(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eb.C,
        Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none",
        pb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const Vb = "string" === typeof bb ? bb : null,
        gb = await Lb(bb, wb),
        lb = await Ib(gb, Vb, Mb),
        {
          width: Ob,
          height: Ub
        } = lb,
        Eb = tb++;
      return pb && Ob * Ub * 4 >= Hb && Cb.set(Eb, {
        bytes: gb.slice(),
        url: Vb,
        orientation: Mb,
        decoding: !1,
        failures: 0
      }), Bb(Eb, lb), {
        id: Eb,
        width: Ob,
        height: Ub
      }
    }

    function zb(bb) {
      var wb;
      Cb.delete(bb);
      const Mb = Ub.get(bb);
      if (Mb) return Mb.close(), void Ub.delete(bb);
      null === (wb = Ob) || void 0 === wb || wb.bpb(bb)
    }
  },
  39221: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v+LFy8yvH//noGXl/ccuq8A/vQKd00yOdIAAAAASUVORK5CYII="
  },
  39213: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAALUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMnBzczN8/PjxHLLPAORwCnfkvOdNAAAAAElFTkSuQmCC"
  },
  39227: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  39209: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAANUlEQVQYGWM8CwQMeAATHjmw1JBQAHLp/wMHDvy/ePHi/4CAgP937tz5Ly6u+5/P3uw/KAgAgjwWhHm22JoAAAAASUVORK5CYII="
  },
  39217: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);