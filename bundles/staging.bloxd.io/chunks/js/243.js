export const id = 243;
export const ids = [243];
export const modules = {
  42831: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => jr,
      g: () => ar
    });
    var Zr = Qr(2325),
      Wr = Qr(1127);

    function ar(rr, Sr) {
      return null !== rr.gameSource && (0, Zr.n)(Sr, rr.gameSource)
    }

    function jr(rr, Sr) {
      if (null === rr.gameSource || "" === rr.gameSource || null === Sr) return !0;
      const Qr = (0, Wr.l)(Sr) ? (0, Wr.q)(Sr) : null;
      return null !== Qr && ar(rr, Qr)
    }
  },
  42810: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Ir
    });
    var Zr = Qr(679),
      Wr = Qr(42816),
      ar = Qr(42694);
    async function jr(rr) {
      const Sr = await (0, Wr.i)({
        Helmet: Qr(39465),
        Chestplate: Qr(39470),
        Gauntlets: Qr(39483),
        Leggings: Qr(39477),
        Boots: Qr(39479)
      } [Zr.e[rr]]);
      try {
        return (0, ar.v)(Sr)
      } finally {
        Sr.close()
      }
    }
    const Ir = new class {
      constructor() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jr,
          Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wr.k;
        this.decode = rr, this.register = Sr, this.decoded = new Map
      }
      warm() {
        for (let rr = 0; rr < Zr.e.length; rr++) this.part(rr).catch((Sr => {
          console.warn(`The grayscale armour ${Zr.e[rr]} image didn't decode ahead of use`, Sr)
        }))
      }
      async load(rr, Sr) {
        const {
          width: Qr,
          height: ar,
          pixels: jr
        } = await this.part(rr), Ir = new ImageData(function(rr, Sr) {
          const Qr = new Uint8ClampedArray(rr.length);
          for (let Zr = 0; Zr < rr.length; Zr += 4) Qr[Zr] = Math.round(rr[Zr] * Sr[0] / 255), Qr[Zr + 1] = Math.round(rr[Zr + 1] * Sr[1] / 255), Qr[Zr + 2] = Math.round(rr[Zr + 2] * Sr[2] / 255), Qr[Zr + 3] = rr[Zr + 3];
          return Qr
        }(jr, function(rr) {
          return [rr >>> 16 & 255, rr >>> 8 & 255, 255 & rr]
        }(Sr)), Qr, ar);
        let fr;
        try {
          fr = await createImageBitmap(Ir, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          })
        } catch (Er) {
          throw new Wr.e("decode", `grayscale armour ${Zr.e[rr]}`, {
            cause: Er
          })
        }
        return {
          id: this.register(fr),
          width: Qr,
          height: ar
        }
      }
      part(rr) {
        const Sr = this.decoded.get(rr);
        if (void 0 !== Sr) return Sr;
        const Qr = this.decode(rr).catch((Sr => {
          throw this.decoded.delete(rr), Sr instanceof Wr.e ? Sr : new Wr.e("decode", `grayscale armour ${Zr.e[rr]}`, {
            cause: Sr
          })
        }));
        return this.decoded.set(rr, Qr), Qr
      }
    }
  },
  42805: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => jr,
      g: () => hr,
      i: () => pr,
      l: () => xr,
      o: () => tr
    });
    var Zr = Qr(42684),
      Wr = Qr(42810),
      ar = Qr(42816);
    const jr = 396,
      Ir = 1,
      fr = 2,
      Er = 3,
      pr = {
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
      xr = {
        File: 0,
        Item: 1
      },
      mr = 0,
      Nr = 1,
      Ur = 2;

    function tr(rr) {
      const Sr = (0, Zr.o)();
      Sr.catch((() => {}));
      let Wr = null;
      return {
        glbUrl: rr,
        lifeformAtlasUrl: async rr => (await Sr).lifeformAtlasUrl(rr),
        armourAtlasUrl: async () => (await Qr.e(235).then((() => Qr(35587)))).armourAtlasUrl,
        capeUrl: async rr => (await Sr).capeUrl(rr),
        attachmentImageUrl: async rr => (await Sr).attachmentImageUrl(rr),
        blockImageUrl: async rr => (await Sr).blockImageUrl(rr),
        groupAtlasUrl: async rr => (await Sr).groupAtlasUrl(rr),
        particleTextureUrl: async rr => (await Sr).particleTextureUrl(rr),
        particleItemUrl: async rr => (Wr ??= Qr.e(45).then((() => Qr(55213))).catch((rr => {
          throw Wr = null, rr
        })), (await Wr).particleItemUrl(rr))
      }
    }
    class hr {
      constructor(rr, Sr) {
        var Qr, jr, Ir, fr;
        let Er = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.sources = rr, this.onFailure = Sr, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.greyscaleArmour = void 0, this.vU = !1, this.load = null !== (Qr = Er.load) && void 0 !== Qr ? Qr : (rr, Sr, Qr) => (0, ar.j)(rr, Er.fetchImage, Sr, Qr), this.release = null !== (jr = Er.release) && void 0 !== jr ? jr : ar.m, this.fetchFile = null !== (Ir = Er.fetchFile) && void 0 !== Ir ? Ir : rr => (0, Zr.j)(rr), this.greyscaleArmour = null !== (fr = Er.greyscaleArmour) && void 0 !== fr ? fr : Wr.c
      }
      get waiting() {
        return this.ready.length
      }
      get inFlight() {
        return this.loading.size
      }
      glbWritten(rr, Sr) {
        this.glbWrittenImages.set(rr, Br(Sr))
      }
      glbTaken(rr, Sr) {
        const Qr = this.glbWrittenImages.get(rr);
        this.glbWrittenImages.delete(rr), Sr && this.setGlbImages(rr, void 0 !== Qr && Qr.length > 0 ? Qr : void 0)
      }
      setGlbImages(rr, Sr) {
        var Qr;
        this.glbTakenCount.set(rr, (null !== (Qr = this.glbTakenCount.get(rr)) && void 0 !== Qr ? Qr : 0) + 1), void 0 === Sr ? this.glbImages.delete(rr) : this.glbImages.set(rr, Sr);
        const Zr = [];
        for (const {
            key: Wr
          }
          of this.loading.values()) Wr.kind === pr.Glb && Wr.word === rr && Zr.push(Wr);
        for (let Wr = this.ready.length - 1; Wr >= 0; Wr--) {
          const {
            key: Sr,
            id: Qr
          } = this.ready[Wr];
          Sr.kind === pr.Glb && Sr.word === rr && (this.ready.splice(Wr, 1), null !== Qr && (this.answered.delete(Qr), this.release(Qr)), Zr.push(Sr))
        }
        this.loadAgain(Zr)
      }
      onEvent(rr) {
        if (this.vU) return;
        const Sr = new DataView(rr.buffer, rr.byteOffset, rr.byteLength);
        for (let Qr = 0; Qr + 8 <= rr.byteLength; Qr += 8) {
          const rr = Sr.getUint8(Qr),
            Zr = Sr.getUint32(Qr + 4, !0);
          if (rr === Er) {
            this.answered.delete(Zr), this.release(Zr);
            continue
          }
          const Wr = {
            kind: Sr.getUint8(Qr + 1),
            index: Sr.getUint8(Qr + 2),
            word: Zr
          };
          rr === Ir ? this.want(Wr) : rr === fr && this.loading.delete(zr(Wr))
        }
      }
      reload(rr, Sr) {
        const Qr = Qr => rr.includes(Qr.kind) && (void 0 === Sr || Sr(Qr)),
          Zr = new Map;
        for (const Wr of this.answered.values()) Qr(Wr) && Zr.set(zr(Wr), Wr);
        for (const [Wr, {
            key: ar
          }] of this.loading) Qr(ar) && Zr.set(Wr, ar);
        this.loadAgain(Zr.values())
      }
      loadAgain(rr) {
        for (const Sr of rr) this.loading.delete(zr(Sr)), this.want(Sr)
      }
      drain(rr) {
        if (null !== rr)
          for (; this.ready.length > 0;) {
            if (!rr(jr, 0, this.ready[0].record)) return;
            this.ready.shift()
          }
      }
      dispose() {
        this.vU = !0, this.loading.clear(), this.ready.length = 0;
        for (const rr of this.answered.keys()) this.release(rr);
        this.answered.clear()
      }
      want(rr) {
        const Sr = zr(rr);
        if (this.loading.has(Sr)) return;
        const Qr = {
          key: rr
        };
        this.loading.set(Sr, Qr), this.loadKey(rr).then((Zr => {
          this.vU || this.loading.get(Sr) !== Qr ? this.release(Zr.id) : (this.loading.delete(Sr), this.answered.set(Zr.id, rr), this.ready.push({
            record: nr(rr, mr, Zr),
            key: rr,
            id: Zr.id
          }))
        }), (Zr => {
          if (this.vU || this.loading.get(Sr) !== Qr) return;
          this.loading.delete(Sr), this.onFailure({
            key: rr,
            error: Zr
          });
          const Wr = Zr instanceof ar.e && "decode" === Zr.stage ? Nr : Ur;
          this.ready.push({
            record: nr(rr, Wr, null),
            key: rr,
            id: null
          })
        }))
      }
      async loadKey(rr) {
        switch (rr.kind) {
          case pr.Glb:
            return this.load(await this.glbImage(rr), "none");
          case pr.LifeformAtlas:
            return this.load(Yr(await this.sources.lifeformAtlasUrl(rr.word), rr), "none", !0);
          case pr.ArmourAtlas:
            return this.load(Yr(await this.sources.armourAtlasUrl(), rr), "none");
          case pr.Cape:
            return this.load(Yr(await this.sources.capeUrl(rr.word), rr), "none");
          case pr.AttachmentImage:
            return this.load(Yr(await this.sources.attachmentImageUrl(rr.word), rr), "none");
          case pr.GroupAtlas:
            return this.load(Yr(await this.sources.groupAtlasUrl(rr.word), rr), "none");
          case pr.BlockImage:
            return this.load(Yr(await this.sources.blockImageUrl(rr.word), rr), "none");
          case pr.Particle: {
            const Sr = await (rr.index === xr.Item ? this.sources.particleItemUrl(rr.word) : this.sources.particleTextureUrl(rr.word));
            return this.load(Yr(Sr, rr), "flipY")
          }
          case pr.GreyscaleArmour:
            return this.greyscaleArmour.load(rr.index, rr.word);
          default:
            throw new ar.e("fetch", `image kind ${rr.kind}`, {
              cause: null
            })
        }
      }
      async glbImage(rr) {
        var Sr;
        let Qr = this.glbImages.get(rr.word);
        if (void 0 === Qr) {
          const Sr = this.glbTakenCount.get(rr.word),
            Zr = Yr(await this.sources.glbUrl(rr.word), rr);
          try {
            Qr = Br(await this.fetchFile(Zr))
          } catch (Wr) {
            throw new ar.e("fetch", Zr, {
              cause: Wr
            })
          }
          this.glbTakenCount.get(rr.word) === Sr && this.glbImages.set(rr.word, Qr)
        }
        const Zr = null === (Sr = Qr) || void 0 === Sr ? void 0 : Sr[rr.index];
        if (!Zr) throw new ar.e("decode", `image ${rr.index} of file ${2147483647&rr.word}`, {
          cause: null
        });
        return Zr
      }
    }

    function zr(rr) {
      let {
        kind: Sr,
        index: Qr,
        word: Zr
      } = rr;
      return `${Sr}:${Qr}:${Zr}`
    }

    function Yr(rr, Sr) {
      if (null === rr) throw new ar.e("fetch", `no URL for image ${zr(Sr)}`, {
        cause: null
      });
      return rr
    }

    function nr(rr, Sr, Qr) {
      var Zr, Wr, ar;
      const jr = new Uint8Array(16),
        Ir = new DataView(jr.buffer);
      return Ir.setUint8(0, rr.kind), Ir.setUint8(1, rr.index), Ir.setUint8(2, Sr), Ir.setUint32(4, rr.word, !0), Ir.setUint32(8, null !== (Zr = null === Qr || void 0 === Qr ? void 0 : Qr.id) && void 0 !== Zr ? Zr : 0, !0), Ir.setUint16(12, Math.min(null !== (Wr = null === Qr || void 0 === Qr ? void 0 : Qr.width) && void 0 !== Wr ? Wr : 0, 65535), !0), Ir.setUint16(14, Math.min(null !== (ar = null === Qr || void 0 === Qr ? void 0 : Qr.height) && void 0 !== ar ? ar : 0, 65535), !0), jr
    }
    const er = 1179937895,
      Kr = 1313821514,
      yr = 5130562;

    function Br(rr) {
      var Sr;
      const Qr = new DataView(rr.buffer, rr.byteOffset, rr.byteLength);
      if (rr.byteLength < 20 || Qr.getUint32(0, !0) !== er || Qr.getUint32(16, !0) !== Kr) return [];
      let Zr, Wr = 20 + Qr.getUint32(12, !0);
      try {
        Zr = JSON.parse((new TextDecoder).decode(rr.subarray(20, Wr)))
      } catch {
        return []
      }
      for (; Wr + 8 <= rr.byteLength && Qr.getUint32(Wr + 4, !0) !== yr;) Wr += 8 + Qr.getUint32(Wr, !0);
      const ar = null !== (Sr = Zr.images) && void 0 !== Sr ? Sr : [];
      if (0 === ar.length || Wr + 8 > rr.byteLength) return ar.map((() => null));
      const jr = rr.subarray(Wr + 8, Math.min(rr.byteLength, Wr + 8 + Qr.getUint32(Wr, !0)));
      return ar.map((rr => {
        var Sr, Qr, Wr;
        const ar = void 0 === rr.bufferView || null === (Sr = Zr.bufferViews) || void 0 === Sr ? void 0 : Sr[rr.bufferView];
        if (!ar || 0 !== (null !== (Qr = ar.buffer) && void 0 !== Qr ? Qr : 0) || void 0 === ar.byteLength) return null;
        const Ir = null !== (Wr = ar.byteOffset) && void 0 !== Wr ? Wr : 0,
          fr = Ir + ar.byteLength;
        return fr <= jr.byteLength ? jr.slice(Ir, fr) : null
      }))
    }
  },
  42820: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => pr,
      e: () => ar,
      h: () => xr,
      i: () => jr
    });
    var Zr = Qr(42805),
      Wr = Qr(42684);
    const ar = new class {
      constructor() {
        this.page = null, this.session = void 0, this.follower = null, this.isWanted = !1, this.listeners = new Set, this.pageListeners = new Set, this.wantedListeners = new Set
      }
      get current() {
        return void 0 === this.session ? this.page : this.session
      }
      setPageFiles(rr) {
        this.change((() => {
          this.page = rr
        }))
      }
      setSessionFiles(rr) {
        const Sr = void 0 !== this.session && void 0 === rr;
        if (this.change((() => {
            this.session = rr
          })), Sr)
          for (const Qr of [...this.pageListeners]) Qr()
      }
      showsPage() {
        return void 0 === this.session
      }
      onPageShown(rr) {
        return this.pageListeners.add(rr), () => {
          this.pageListeners.delete(rr)
        }
      }
      setFollower(rr) {
        this.follower = rr, this.startFollower()
      }
      wanted() {
        this.isWanted = !0;
        for (const rr of [...this.wantedListeners]) rr();
        this.startFollower()
      }
      onWanted(rr) {
        return this.wantedListeners.add(rr), () => {
          this.wantedListeners.delete(rr)
        }
      }
      onChange(rr) {
        return this.listeners.add(rr), () => {
          this.listeners.delete(rr)
        }
      }
      startFollower() {
        const rr = this.follower;
        this.isWanted && null !== rr && (this.follower = null, rr((() => {
          this.follower = rr
        })))
      }
      change(rr) {
        const Sr = this.current;
        if (rr(), this.current !== Sr)
          for (const Qr of this.listeners) Qr()
      }
    };

    function jr(rr, Sr) {
      return {
        ...rr,
        armourAtlasUrl: () => {
          var Qr, Zr;
          return null !== (Qr = null === (Zr = Sr()) || void 0 === Zr ? void 0 : Zr.armourAtlasUrl()) && void 0 !== Qr ? Qr : rr.armourAtlasUrl()
        },
        lifeformAtlasUrl: Qr => fr(Sr(), (rr => rr.LIFEFORM_ATLAS_PATHS[Qr]), (() => rr.lifeformAtlasUrl(Qr))),
        groupAtlasUrl: Qr => fr(Sr(), (rr => rr.GROUP_ATLAS_PATHS[Qr]), (() => rr.groupAtlasUrl(Qr))),
        particleItemUrl: Zr => Er(Sr(), (async () => {
          const rr = await Qr.e(45).then((() => Qr(55213))).catch((() => null));
          return (null === rr || void 0 === rr ? void 0 : rr.particleItemSprite(Zr)) || null
        }), (() => rr.particleItemUrl(Zr))),
        blockImageUrl: Qr => Er(Sr(), (async () => {
          var rr, Sr;
          return null !== (rr = null === (Sr = await Ir()) || void 0 === Sr ? void 0 : Sr.blockImageName(Qr)) && void 0 !== rr ? rr : null
        }), (() => rr.blockImageUrl(Qr)))
      }
    }

    function Ir() {
      return (0, Wr.o)().catch((() => null))
    }

    function fr(rr, Sr, Qr) {
      return Er(rr, (async () => {
        var rr;
        const Qr = await Ir(),
          Zr = null === Qr ? null : Sr(Qr),
          Wr = null !== (rr = null === Zr || void 0 === Zr ? void 0 : Zr.slice(Zr.lastIndexOf("/") + 1)) && void 0 !== rr ? rr : null;
        return "Player_Atlas" === Wr ? null : Wr
      }), Qr)
    }
    async function Er(rr, Sr, Qr) {
      if (null !== rr) {
        const Qr = await Sr(),
          Zr = null === Qr ? null : rr.textureUrl(Qr);
        if (null !== Zr) return Zr
      }
      return Qr()
    }
    const pr = 0;

    function xr(rr) {
      const Sr = [Zr.i.ArmourAtlas, Zr.i.LifeformAtlas, Zr.i.GroupAtlas, Zr.i.BlockImage, Zr.i.Particle];
      rr.reload(Sr, (rr => {
        switch (rr.kind) {
          case Zr.i.Particle:
            return rr.index === Zr.l.Item;
          case Zr.i.LifeformAtlas:
            return rr.word !== pr;
          default:
            return !0
        }
      }))
    }
  },
  42746: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Zr,
      f: () => Ir,
      h: () => Wr,
      i: () => ar
    });
    const Zr = 1e3;

    function Wr() {
      fr((() => {
        window.location.reload()
      }))
    }

    function ar() {
      return new Promise((() => {}))
    }

    function jr(rr) {
      fr((() => {
        window.location.replace(rr(window.location.href))
      }))
    }

    function Ir(rr) {
      Promise.resolve().then((() => Qr(120))).then((Sr => {
        let {
          currentUrl: Qr
        } = Sr;
        jr((() => Qr.mergeSearchParamsInto(rr)))
      }), (() => {
        jr((() => rr))
      }))
    }

    function fr(rr) {
      null !== window.onbeforeunload ? Promise.resolve().then((() => Qr(1885))).then((Sr => {
        let {
          prepareForUnloadWithoutConfirmation: Qr
        } = Sr;
        try {
          Qr()
        } catch (Zr) {
          console.warn("[bloxd-wasm-client] prepareForUnloadWithoutConfirmation threw: leaving plainly", Zr), window.onbeforeunload = null
        }
        rr()
      }), (() => {
        window.onbeforeunload = null, rr()
      })) : rr()
    }
  },
  37587: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => hr,
      d: () => pr,
      f: () => Nr,
      i: () => xr,
      k: () => zr,
      l: () => Ur,
      p: () => tr,
      s: () => mr
    });
    const Zr = 30,
      Wr = 4;
    let ar = 0,
      jr = !1,
      Ir = !1,
      fr = Number.NEGATIVE_INFINITY,
      Er = [];

    function pr() {
      0 === ar && (jr = !1, Ir = !1), ar++;
      let rr = !1;
      return () => {
        rr || (rr = !0, ar--)
      }
    }

    function xr(rr) {
      rr && (Ir = !0)
    }

    function mr() {
      return Ir
    }

    function Nr(rr) {
      jr = rr
    }

    function Ur() {
      return ar > 0
    }

    function tr(rr) {
      return !(ar > 0 && (jr || rr - fr < 1e3 / Zr - Wr)) && (fr = rr, !0)
    }

    function hr(rr) {
      return Er.push(rr), () => {
        Er = Er.filter((Sr => Sr !== rr))
      }
    }

    function zr() {
      if (0 === Er.length) return;
      const rr = Er;
      Er = [];
      for (const Qr of rr) try {
        Qr()
      } catch (Sr) {
        console.warn("[bloxd-previews] an after-draw callback threw", Sr)
      }
    }
  },
  42753: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => yr,
      g: () => mr,
      k: () => nr,
      n: () => Kr,
      q: () => er,
      s: () => Br
    });
    var Zr = Qr(181),
      Wr = Qr(26),
      ar = Qr(34),
      jr = Qr(3995),
      Ir = Qr(1364),
      fr = Qr(35386),
      Er = Qr(319),
      pr = Qr(109),
      xr = Qr(174);

    function mr() {
      var rr;
      const Sr = (0, jr.J)(),
        Qr = function(rr, Sr) {
          return {
            sampleCount: rr.antiAliasing ? 4 : 1,
            n: (0, jr.y)(rr.pixelScale, Sr),
            pixelated: (0, jr.v)(rr.pixelSmoothing)
          }
        }(Wr.c.get("clientEscMenuOptions"), Sr);
      return Qr.sampleCount > 1 && (0, fr.c)() && (Qr.sampleCount = 1), Qr.n = null !== (rr = (0, fr.n)()) && void 0 !== rr ? rr : Qr.n, Zr.i.includes((0, pr.getSoftwareRenderer)()) && (Qr.sampleCount = 1, Qr.n = Math.max(Qr.n, (0, jr.y)(xr.l.pixelScale, Sr))), Qr
    }
    let Nr = null,
      Ur = null;
    const tr = new Set;
    let hr = null;

    function zr() {
      for (const rr of tr) rr()
    }

    function Yr() {
      if (null === Nr) {
        const rr = document.createElement("div");
        rr.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", rr.setAttribute("aria-hidden", "true"), document.body.append(rr), Ur = rr, Nr = new jr.d(rr, zr)
      }
      return Nr
    }

    function nr(rr) {
      const Sr = (0, jr.m)(),
        [Qr, Zr] = Yr().size(Sr);
      return (0, jr.i)(Qr, Zr, Sr, rr.n)
    }

    function er(rr) {
      var Sr, Qr, Zr, Wr;
      const ar = (0, jr.m)(),
        [fr, Er] = Yr().size(ar);
      if (fr <= 0 || Er <= 0) return null;
      const pr = (0, jr.i)(fr, Er, ar, mr().n);
      return (0, jr.g)(rr, pr), rr.style.left = `${null!==(Sr=null===(Qr=hr)||void 0===Qr?void 0:Qr.rect.left)&&void 0!==Sr?Sr:0}px`, rr.style.top = `${null!==(Zr=null===(Wr=hr)||void 0===Wr?void 0:Wr.rect.top)&&void 0!==Zr?Zr:0}px`, (0, Ir.cb)(rr.style, hr), pr
    }

    function Kr(rr) {
      hr = rr, Yr(), (0, Ir.X)(Ur.style, rr, ""), zr()
    }

    function yr(rr, Sr) {
      rr.style.imageRendering = (0, jr.K)(Sr.pixelated)
    }

    function Br(rr, Sr) {
      const Qr = (0, ar.j)("appManagerUpdated|clientEscMenuOptions", (() => {
          yr(rr, mr()), Sr()
        })),
        Zr = (0, fr.A)(Sr),
        Wr = (0, Er.q)(Sr);
      return Yr(), tr.add(Sr), () => {
        Qr(), Zr(), Wr(), tr.delete(Sr)
      }
    }
  },
  42827: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => ar
    });
    var Zr = Qr(42831),
      Wr = Qr(42820);
    const ar = new class {
      constructor(rr) {
        this.pack = rr, this.game = void 0, this.settle = null, this.hold = null, this.endedWhileHeld = !1, this.gameListeners = new Set, rr.onWanted((() => {
          this.release()
        }))
      }
      setGame(rr) {
        if (void 0 === rr && null !== this.hold) return void(this.endedWhileHeld = !0);
        this.hold = null, this.endedWhileHeld = !1;
        const Sr = this.inGame();
        if (this.game = rr, this.update(), this.inGame() !== Sr)
          for (const Qr of this.gameListeners) Qr()
      }
      inGame() {
        return void 0 !== this.game
      }
      onGameChange(rr) {
        return this.gameListeners.add(rr), () => {
          this.gameListeners.delete(rr)
        }
      }
      unwantedLeave(rr) {
        rr && void 0 !== this.game ? this.hold = {
          game: this.game
        } : this.release()
      }
      rejoinHold() {
        return this.hold
      }
      releaseHold(rr) {
        null !== rr && rr === this.hold && this.release()
      }
      release() {
        if (null === this.hold) return;
        const rr = this.endedWhileHeld;
        this.hold = null, this.endedWhileHeld = !1, rr && this.setGame(void 0)
      }
      setSettled(rr) {
        this.settle = rr, this.update()
      }
      update() {
        void 0 === this.game ? this.pack.setSessionFiles(void 0) : null !== this.settle && (0, Zr.d)(this.settle.state, this.game) && this.pack.setSessionFiles(this.settle.files)
      }
    }(Wr.e)
  },
  42816: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Ir,
      g: () => tr,
      i: () => fr,
      j: () => er,
      k: () => nr,
      m: () => Kr
    });
    var Zr = Qr(2398);
    const Wr = 8388608,
      ar = 1e3,
      jr = 3e4;
    class Ir extends Error {
      constructor(rr, Sr, Qr) {
        super(`${"fetch"===rr?"fetching":"decoding"} ${Sr} failed`, Qr), this.stage = rr, this.source = Sr, this.name = "ShellImageError"
      }
    }
    async function fr(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Zr.K,
        Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      return pr(await Er(rr, Sr), "string" === typeof rr ? rr : null, Qr)
    }
    async function Er(rr, Sr) {
      if ("string" !== typeof rr) return rr;
      try {
        return await Sr(rr)
      } catch (Qr) {
        throw new Ir("fetch", rr, {
          cause: Qr
        })
      }
    }
    async function pr(rr, Sr, Qr) {
      try {
        const Sr = new Blob([rr.slice()], {
          type: "image/png"
        });
        return await createImageBitmap(Sr, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: Qr
        })
      } catch (Zr) {
        throw new Ir("decode", null !== Sr && void 0 !== Sr ? Sr : `${rr.byteLength} bytes`, {
          cause: Zr
        })
      }
    }
    let xr = null;
    const mr = new Map;
    let Nr = 1;
    const Ur = new Map;

    function tr(rr) {
      var Sr;
      if (xr = rr, null !== rr) {
        null === (Sr = rr.BWr) || void 0 === Sr || Sr.call(rr, Yr);
        for (const [Sr, Qr] of mr) hr(rr, Sr, Qr);
        mr.clear()
      }
    }

    function hr(rr, Sr, Qr) {
      Ur.has(Sr) && void 0 !== rr.yWr ? rr.yWr(Sr, Qr) : rr.eWr(Sr, Qr)
    }

    function zr(rr, Sr) {
      xr ? hr(xr, rr, Sr) : mr.set(rr, Sr)
    }

    function Yr(rr) {
      const Sr = Ur.get(rr);
      void 0 === Sr || Sr.decoding || (Sr.decoding = !0, pr(Sr.bytes, Sr.url, Sr.orientation).then((Qr => {
        Sr.decoding = !1, Ur.get(rr) === Sr ? (Sr.failures = 0, zr(rr, Qr)) : Qr.close()
      }), (Qr => {
        Sr.decoding = !1, Sr.failures++, 1 === Sr.failures && console.warn(`shellImages: decoding image ${rr} again failed; trying again until it decodes`, Qr), setTimeout((() => {
          Yr(rr)
        }), Math.min(ar * 2 ** (Sr.failures - 1), jr))
      })))
    }

    function nr(rr) {
      const Sr = Nr++;
      return zr(Sr, rr), Sr
    }
    async function er(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Zr.K,
        Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none",
        ar = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const jr = "string" === typeof rr ? rr : null,
        Ir = await Er(rr, Sr),
        fr = await pr(Ir, jr, Qr),
        {
          width: xr,
          height: mr
        } = fr,
        tr = Nr++;
      return ar && xr * mr * 4 >= Wr && Ur.set(tr, {
        bytes: Ir.slice(),
        url: jr,
        orientation: Qr,
        decoding: !1,
        failures: 0
      }), zr(tr, fr), {
        id: tr,
        width: xr,
        height: mr
      }
    }

    function Kr(rr) {
      var Sr;
      Ur.delete(rr);
      const Qr = mr.get(rr);
      if (Qr) return Qr.close(), void mr.delete(rr);
      null === (Sr = xr) || void 0 === Sr || Sr.KWr(rr)
    }
  },
  39479: rr => {
    rr.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v+LFy8yvH//noGXl/ccuq8A/vQKd00yOdIAAAAASUVORK5CYII="
  },
  39470: rr => {
    rr.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAALUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMnBzczN8/PjxHLLPAORwCnfkvOdNAAAAAElFTkSuQmCC"
  },
  39483: rr => {
    rr.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  39465: rr => {
    rr.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAANUlEQVQYGWM8CwQMeAATHjmw1JBQAHLp/wMHDvy/ePHi/4CAgP937tz5Ly6u+5/P3uw/KAgAgjwWhHm22JoAAAAASUVORK5CYII="
  },
  39477: rr => {
    rr.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);