export const id = 242;
export const ids = [242];
export const modules = {
  42468: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => PW,
      f: () => NW
    });
    var mW = OW(2300),
      EW = OW(1052);

    function NW(WW, iW) {
      return null !== WW.gameSource && (0, mW.m)(iW, WW.gameSource)
    }

    function PW(WW, iW) {
      if (null === WW.gameSource || "" === WW.gameSource || null === iW) return !0;
      const OW = (0, EW.i)(iW) ? (0, EW.n)(iW) : null;
      return null !== OW && NW(WW, OW)
    }
  },
  42452: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => LW
    });
    var mW = OW(632),
      EW = OW(42455),
      NW = OW(42348);
    async function PW(WW) {
      const iW = await (0, EW.h)({
        Helmet: OW(39154),
        Chestplate: OW(39156),
        Gauntlets: OW(39176),
        Leggings: OW(39163),
        Boots: OW(39167)
      } [mW.d[WW]]);
      try {
        return (0, NW.m)(iW)
      } finally {
        iW.close()
      }
    }
    const LW = new class {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PW,
          iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : EW.l;
        this.decode = WW, this.register = iW, this.decoded = new Map
      }
      warm() {
        for (let WW = 0; WW < mW.d.length; WW++) this.part(WW).catch((iW => {
          console.warn(`The grayscale armour ${mW.d[WW]} image didn't decode ahead of use`, iW)
        }))
      }
      async load(WW, iW) {
        const {
          width: OW,
          height: NW,
          pixels: PW
        } = await this.part(WW), LW = new ImageData(function(WW, iW) {
          const OW = new Uint8ClampedArray(WW.length);
          for (let mW = 0; mW < WW.length; mW += 4) OW[mW] = Math.round(WW[mW] * iW[0] / 255), OW[mW + 1] = Math.round(WW[mW + 1] * iW[1] / 255), OW[mW + 2] = Math.round(WW[mW + 2] * iW[2] / 255), OW[mW + 3] = WW[mW + 3];
          return OW
        }(PW, function(WW) {
          return [WW >>> 16 & 255, WW >>> 8 & 255, 255 & WW]
        }(iW)), OW, NW);
        let cW;
        try {
          cW = await createImageBitmap(LW, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          })
        } catch (wW) {
          throw new EW.c("decode", `grayscale armour ${mW.d[WW]}`, {
            cause: wW
          })
        }
        return {
          id: this.register(cW),
          width: OW,
          height: NW
        }
      }
      part(WW) {
        const iW = this.decoded.get(WW);
        if (void 0 !== iW) return iW;
        const OW = this.decode(WW).catch((iW => {
          throw this.decoded.delete(WW), iW instanceof EW.c ? iW : new EW.c("decode", `grayscale armour ${mW.d[WW]}`, {
            cause: iW
          })
        }));
        return this.decoded.set(WW, OW), OW
      }
    }
  },
  42448: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => PW,
      g: () => jW,
      k: () => tW,
      m: () => ZW,
      q: () => bW
    });
    var mW = OW(42339),
      EW = OW(42452),
      NW = OW(42455);
    const PW = 396,
      LW = 1,
      cW = 2,
      wW = 3,
      tW = {
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
      ZW = {
        File: 0,
        Item: 1
      },
      xW = 0,
      lW = 1,
      AW = 2;

    function bW(WW) {
      const iW = (0, mW.l)();
      iW.catch((() => {}));
      let EW = null;
      return {
        glbUrl: WW,
        lifeformAtlasUrl: async WW => (await iW).lifeformAtlasUrl(WW),
        armourAtlasUrl: async () => (await OW.e(234).then((() => OW(35332)))).armourAtlasUrl,
        capeUrl: async WW => (await iW).capeUrl(WW),
        attachmentImageUrl: async WW => (await iW).attachmentImageUrl(WW),
        blockImageUrl: async WW => (await iW).blockImageUrl(WW),
        groupAtlasUrl: async WW => (await iW).groupAtlasUrl(WW),
        particleTextureUrl: async WW => (await iW).particleTextureUrl(WW),
        particleItemUrl: async WW => (EW ??= OW.e(45).then((() => OW(54865))).catch((WW => {
          throw EW = null, WW
        })), (await EW).particleItemUrl(WW))
      }
    }
    class jW {
      constructor(WW, iW) {
        var OW, PW, LW, cW;
        let wW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.sources = WW, this.onFailure = iW, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.greyscaleArmour = void 0, this.JA = !1, this.load = null !== (OW = wW.load) && void 0 !== OW ? OW : (WW, iW, OW) => (0, NW.i)(WW, wW.fetchImage, iW, OW), this.release = null !== (PW = wW.release) && void 0 !== PW ? PW : NW.o, this.fetchFile = null !== (LW = wW.fetchFile) && void 0 !== LW ? LW : WW => (0, mW.h)(WW), this.greyscaleArmour = null !== (cW = wW.greyscaleArmour) && void 0 !== cW ? cW : EW.c
      }
      get waiting() {
        return this.ready.length
      }
      get inFlight() {
        return this.loading.size
      }
      glbWritten(WW, iW) {
        this.glbWrittenImages.set(WW, YW(iW))
      }
      glbTaken(WW, iW) {
        const OW = this.glbWrittenImages.get(WW);
        this.glbWrittenImages.delete(WW), iW && this.setGlbImages(WW, void 0 !== OW && OW.length > 0 ? OW : void 0)
      }
      setGlbImages(WW, iW) {
        var OW;
        this.glbTakenCount.set(WW, (null !== (OW = this.glbTakenCount.get(WW)) && void 0 !== OW ? OW : 0) + 1), void 0 === iW ? this.glbImages.delete(WW) : this.glbImages.set(WW, iW);
        const mW = [];
        for (const {
            key: EW
          }
          of this.loading.values()) EW.kind === tW.Glb && EW.word === WW && mW.push(EW);
        for (let EW = this.ready.length - 1; EW >= 0; EW--) {
          const {
            key: iW,
            id: OW
          } = this.ready[EW];
          iW.kind === tW.Glb && iW.word === WW && (this.ready.splice(EW, 1), null !== OW && (this.answered.delete(OW), this.release(OW)), mW.push(iW))
        }
        this.loadAgain(mW)
      }
      onEvent(WW) {
        if (this.JA) return;
        const iW = new DataView(WW.buffer, WW.byteOffset, WW.byteLength);
        for (let OW = 0; OW + 8 <= WW.byteLength; OW += 8) {
          const WW = iW.getUint8(OW),
            mW = iW.getUint32(OW + 4, !0);
          if (WW === wW) {
            this.answered.delete(mW), this.release(mW);
            continue
          }
          const EW = {
            kind: iW.getUint8(OW + 1),
            index: iW.getUint8(OW + 2),
            word: mW
          };
          WW === LW ? this.want(EW) : WW === cW && this.loading.delete(UW(EW))
        }
      }
      reload(WW, iW) {
        const OW = OW => WW.includes(OW.kind) && (void 0 === iW || iW(OW)),
          mW = new Map;
        for (const EW of this.answered.values()) OW(EW) && mW.set(UW(EW), EW);
        for (const [EW, {
            key: NW
          }] of this.loading) OW(NW) && mW.set(EW, NW);
        this.loadAgain(mW.values())
      }
      loadAgain(WW) {
        for (const iW of WW) this.loading.delete(UW(iW)), this.want(iW)
      }
      drain(WW) {
        if (null !== WW)
          for (; this.ready.length > 0;) {
            if (!WW(PW, 0, this.ready[0].record)) return;
            this.ready.shift()
          }
      }
      dispose() {
        this.JA = !0, this.loading.clear(), this.ready.length = 0;
        for (const WW of this.answered.keys()) this.release(WW);
        this.answered.clear()
      }
      want(WW) {
        const iW = UW(WW);
        if (this.loading.has(iW)) return;
        const OW = {
          key: WW
        };
        this.loading.set(iW, OW), this.loadKey(WW).then((mW => {
          this.JA || this.loading.get(iW) !== OW ? this.release(mW.id) : (this.loading.delete(iW), this.answered.set(mW.id, WW), this.ready.push({
            record: sW(WW, xW, mW),
            key: WW,
            id: mW.id
          }))
        }), (mW => {
          if (this.JA || this.loading.get(iW) !== OW) return;
          this.loading.delete(iW), this.onFailure({
            key: WW,
            error: mW
          });
          const EW = mW instanceof NW.c && "decode" === mW.stage ? lW : AW;
          this.ready.push({
            record: sW(WW, EW, null),
            key: WW,
            id: null
          })
        }))
      }
      async loadKey(WW) {
        switch (WW.kind) {
          case tW.Glb:
            return this.load(await this.glbImage(WW), "none");
          case tW.LifeformAtlas:
            return this.load(kW(await this.sources.lifeformAtlasUrl(WW.word), WW), "none", !0);
          case tW.ArmourAtlas:
            return this.load(kW(await this.sources.armourAtlasUrl(), WW), "none");
          case tW.Cape:
            return this.load(kW(await this.sources.capeUrl(WW.word), WW), "none");
          case tW.AttachmentImage:
            return this.load(kW(await this.sources.attachmentImageUrl(WW.word), WW), "none");
          case tW.GroupAtlas:
            return this.load(kW(await this.sources.groupAtlasUrl(WW.word), WW), "none");
          case tW.BlockImage:
            return this.load(kW(await this.sources.blockImageUrl(WW.word), WW), "none");
          case tW.Particle: {
            const iW = await (WW.index === ZW.Item ? this.sources.particleItemUrl(WW.word) : this.sources.particleTextureUrl(WW.word));
            return this.load(kW(iW, WW), "flipY")
          }
          case tW.GreyscaleArmour:
            return this.greyscaleArmour.load(WW.index, WW.word);
          default:
            throw new NW.c("fetch", `image kind ${WW.kind}`, {
              cause: null
            })
        }
      }
      async glbImage(WW) {
        var iW;
        let OW = this.glbImages.get(WW.word);
        if (void 0 === OW) {
          const iW = this.glbTakenCount.get(WW.word),
            mW = kW(await this.sources.glbUrl(WW.word), WW);
          try {
            OW = YW(await this.fetchFile(mW))
          } catch (EW) {
            throw new NW.c("fetch", mW, {
              cause: EW
            })
          }
          this.glbTakenCount.get(WW.word) === iW && this.glbImages.set(WW.word, OW)
        }
        const mW = null === (iW = OW) || void 0 === iW ? void 0 : iW[WW.index];
        if (!mW) throw new NW.c("decode", `image ${WW.index} of file ${2147483647&WW.word}`, {
          cause: null
        });
        return mW
      }
    }

    function UW(WW) {
      let {
        kind: iW,
        index: OW,
        word: mW
      } = WW;
      return `${iW}:${OW}:${mW}`
    }

    function kW(WW, iW) {
      if (null === WW) throw new NW.c("fetch", `no URL for image ${UW(iW)}`, {
        cause: null
      });
      return WW
    }

    function sW(WW, iW, OW) {
      var mW, EW, NW;
      const PW = new Uint8Array(16),
        LW = new DataView(PW.buffer);
      return LW.setUint8(0, WW.kind), LW.setUint8(1, WW.index), LW.setUint8(2, iW), LW.setUint32(4, WW.word, !0), LW.setUint32(8, null !== (mW = null === OW || void 0 === OW ? void 0 : OW.id) && void 0 !== mW ? mW : 0, !0), LW.setUint16(12, Math.min(null !== (EW = null === OW || void 0 === OW ? void 0 : OW.width) && void 0 !== EW ? EW : 0, 65535), !0), LW.setUint16(14, Math.min(null !== (NW = null === OW || void 0 === OW ? void 0 : OW.height) && void 0 !== NW ? NW : 0, 65535), !0), PW
    }
    const MW = 1179937895,
      KW = 1313821514,
      SW = 5130562;

    function YW(WW) {
      var iW;
      const OW = new DataView(WW.buffer, WW.byteOffset, WW.byteLength);
      if (WW.byteLength < 20 || OW.getUint32(0, !0) !== MW || OW.getUint32(16, !0) !== KW) return [];
      let mW, EW = 20 + OW.getUint32(12, !0);
      try {
        mW = JSON.parse((new TextDecoder).decode(WW.subarray(20, EW)))
      } catch {
        return []
      }
      for (; EW + 8 <= WW.byteLength && OW.getUint32(EW + 4, !0) !== SW;) EW += 8 + OW.getUint32(EW, !0);
      const NW = null !== (iW = mW.images) && void 0 !== iW ? iW : [];
      if (0 === NW.length || EW + 8 > WW.byteLength) return NW.map((() => null));
      const PW = WW.subarray(EW + 8, Math.min(WW.byteLength, EW + 8 + OW.getUint32(EW, !0)));
      return NW.map((WW => {
        var iW, OW, EW;
        const NW = void 0 === WW.bufferView || null === (iW = mW.bufferViews) || void 0 === iW ? void 0 : iW[WW.bufferView];
        if (!NW || 0 !== (null !== (OW = NW.buffer) && void 0 !== OW ? OW : 0) || void 0 === NW.byteLength) return null;
        const LW = null !== (EW = NW.byteOffset) && void 0 !== EW ? EW : 0,
          cW = LW + NW.byteLength;
        return cW <= PW.byteLength ? PW.slice(LW, cW) : null
      }))
    }
  },
  42461: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => tW,
      h: () => NW,
      i: () => ZW,
      m: () => PW
    });
    var mW = OW(42448),
      EW = OW(42339);
    const NW = new class {
      constructor() {
        this.page = null, this.session = void 0, this.follower = null, this.isWanted = !1, this.listeners = new Set, this.pageListeners = new Set, this.wantedListeners = new Set
      }
      get current() {
        return void 0 === this.session ? this.page : this.session
      }
      setPageFiles(WW) {
        this.change((() => {
          this.page = WW
        }))
      }
      setSessionFiles(WW) {
        const iW = void 0 !== this.session && void 0 === WW;
        if (this.change((() => {
            this.session = WW
          })), iW)
          for (const OW of [...this.pageListeners]) OW()
      }
      showsPage() {
        return void 0 === this.session
      }
      onPageShown(WW) {
        return this.pageListeners.add(WW), () => {
          this.pageListeners.delete(WW)
        }
      }
      setFollower(WW) {
        this.follower = WW, this.startFollower()
      }
      wanted() {
        this.isWanted = !0;
        for (const WW of [...this.wantedListeners]) WW();
        this.startFollower()
      }
      onWanted(WW) {
        return this.wantedListeners.add(WW), () => {
          this.wantedListeners.delete(WW)
        }
      }
      onChange(WW) {
        return this.listeners.add(WW), () => {
          this.listeners.delete(WW)
        }
      }
      startFollower() {
        const WW = this.follower;
        this.isWanted && null !== WW && (this.follower = null, WW((() => {
          this.follower = WW
        })))
      }
      change(WW) {
        const iW = this.current;
        if (WW(), this.current !== iW)
          for (const OW of this.listeners) OW()
      }
    };

    function PW(WW, iW) {
      return {
        ...WW,
        armourAtlasUrl: () => {
          var OW, mW;
          return null !== (OW = null === (mW = iW()) || void 0 === mW ? void 0 : mW.armourAtlasUrl()) && void 0 !== OW ? OW : WW.armourAtlasUrl()
        },
        lifeformAtlasUrl: OW => cW(iW(), (WW => WW.LIFEFORM_ATLAS_PATHS[OW]), (() => WW.lifeformAtlasUrl(OW))),
        groupAtlasUrl: OW => cW(iW(), (WW => WW.GROUP_ATLAS_PATHS[OW]), (() => WW.groupAtlasUrl(OW))),
        particleItemUrl: mW => wW(iW(), (async () => {
          const WW = await OW.e(45).then((() => OW(54865))).catch((() => null));
          return (null === WW || void 0 === WW ? void 0 : WW.particleItemSprite(mW)) || null
        }), (() => WW.particleItemUrl(mW))),
        blockImageUrl: OW => wW(iW(), (async () => {
          var WW, iW;
          return null !== (WW = null === (iW = await LW()) || void 0 === iW ? void 0 : iW.blockImageName(OW)) && void 0 !== WW ? WW : null
        }), (() => WW.blockImageUrl(OW)))
      }
    }

    function LW() {
      return (0, EW.l)().catch((() => null))
    }

    function cW(WW, iW, OW) {
      return wW(WW, (async () => {
        var WW;
        const OW = await LW(),
          mW = null === OW ? null : iW(OW),
          EW = null !== (WW = null === mW || void 0 === mW ? void 0 : mW.slice(mW.lastIndexOf("/") + 1)) && void 0 !== WW ? WW : null;
        return "Player_Atlas" === EW ? null : EW
      }), OW)
    }
    async function wW(WW, iW, OW) {
      if (null !== WW) {
        const OW = await iW(),
          mW = null === OW ? null : WW.textureUrl(OW);
        if (null !== mW) return mW
      }
      return OW()
    }
    const tW = 0;

    function ZW(WW) {
      const iW = [mW.k.ArmourAtlas, mW.k.LifeformAtlas, mW.k.GroupAtlas, mW.k.BlockImage, mW.k.Particle];
      WW.reload(iW, (WW => {
        switch (WW.kind) {
          case mW.k.Particle:
            return WW.index === mW.m.Item;
          case mW.k.LifeformAtlas:
            return WW.word !== tW;
          default:
            return !0
        }
      }))
    }
  },
  42388: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => mW,
      f: () => LW,
      j: () => EW,
      l: () => NW
    });
    const mW = 1e3;

    function EW() {
      cW((() => {
        window.location.reload()
      }))
    }

    function NW() {
      return new Promise((() => {}))
    }

    function PW(WW) {
      cW((() => {
        window.location.replace(WW(window.location.href))
      }))
    }

    function LW(WW) {
      Promise.resolve().then((() => OW(109))).then((iW => {
        let {
          currentUrl: OW
        } = iW;
        PW((() => OW.mergeSearchParamsInto(WW)))
      }), (() => {
        PW((() => WW))
      }))
    }

    function cW(WW) {
      null !== window.onbeforeunload ? Promise.resolve().then((() => OW(1856))).then((iW => {
        let {
          prepareForUnloadWithoutConfirmation: OW
        } = iW;
        try {
          OW()
        } catch (mW) {
          console.warn("[bloxd-wasm-client] prepareForUnloadWithoutConfirmation threw: leaving plainly", mW), window.onbeforeunload = null
        }
        WW()
      }), (() => {
        window.onbeforeunload = null, WW()
      })) : WW()
    }
  },
  37325: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => jW,
      d: () => tW,
      g: () => lW,
      j: () => ZW,
      l: () => UW,
      o: () => AW,
      r: () => bW,
      t: () => xW
    });
    const mW = 30,
      EW = 4;
    let NW = 0,
      PW = !1,
      LW = !1,
      cW = Number.NEGATIVE_INFINITY,
      wW = [];

    function tW() {
      0 === NW && (PW = !1, LW = !1), NW++;
      let WW = !1;
      return () => {
        WW || (WW = !0, NW--)
      }
    }

    function ZW(WW) {
      WW && (LW = !0)
    }

    function xW() {
      return LW
    }

    function lW(WW) {
      PW = WW
    }

    function AW() {
      return NW > 0
    }

    function bW(WW) {
      return !(NW > 0 && (PW || WW - cW < 1e3 / mW - EW)) && (cW = WW, !0)
    }

    function jW(WW) {
      return wW.push(WW), () => {
        wW = wW.filter((iW => iW !== WW))
      }
    }

    function UW() {
      if (0 === wW.length) return;
      const WW = wW;
      wW = [];
      for (const OW of WW) try {
        OW()
      } catch (iW) {
        console.warn("[bloxd-previews] an after-draw callback threw", iW)
      }
    }
  },
  42402: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => SW,
      e: () => xW,
      g: () => sW,
      k: () => KW,
      o: () => MW,
      q: () => YW
    });
    var mW = OW(167),
      EW = OW(25),
      NW = OW(27),
      PW = OW(3941),
      LW = OW(1301),
      cW = OW(35159),
      wW = OW(281),
      tW = OW(100),
      ZW = OW(163);

    function xW() {
      var WW;
      const iW = (0, PW.F)(),
        OW = function(WW, iW) {
          return {
            sampleCount: WW.antiAliasing ? 4 : 1,
            n: (0, PW.A)(WW.pixelScale, iW),
            pixelated: (0, PW.x)(WW.pixelSmoothing)
          }
        }(EW.d.get("clientEscMenuOptions"), iW);
      return OW.sampleCount > 1 && (0, cW.b)() && (OW.sampleCount = 1), OW.n = null !== (WW = (0, cW.m)()) && void 0 !== WW ? WW : OW.n, mW.h.includes((0, tW.getSoftwareRenderer)()) && (OW.sampleCount = 1, OW.n = Math.max(OW.n, (0, PW.A)(ZW.w.pixelScale, iW))), OW
    }
    let lW = null,
      AW = null;
    const bW = new Set;
    let jW = null;

    function UW() {
      for (const WW of bW) WW()
    }

    function kW() {
      if (null === lW) {
        const WW = document.createElement("div");
        WW.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", WW.setAttribute("aria-hidden", "true"), document.body.append(WW), AW = WW, lW = new PW.d(WW, UW)
      }
      return lW
    }

    function sW(WW) {
      const iW = (0, PW.p)(),
        [OW, mW] = kW().size(iW);
      return (0, PW.i)(OW, mW, iW, WW.n)
    }

    function MW(WW) {
      var iW, OW, mW, EW;
      const NW = (0, PW.p)(),
        [cW, wW] = kW().size(NW);
      if (cW <= 0 || wW <= 0) return null;
      const tW = (0, PW.i)(cW, wW, NW, xW().n);
      return (0, PW.g)(WW, tW), WW.style.left = `${null!==(iW=null===(OW=jW)||void 0===OW?void 0:OW.rect.left)&&void 0!==iW?iW:0}px`, WW.style.top = `${null!==(mW=null===(EW=jW)||void 0===EW?void 0:EW.rect.top)&&void 0!==mW?mW:0}px`, (0, LW.L)(WW.style, jW), tW
    }

    function KW(WW) {
      jW = WW, kW(), (0, LW.B)(AW.style, WW, ""), UW()
    }

    function SW(WW, iW) {
      WW.style.imageRendering = (0, PW.G)(iW.pixelated)
    }

    function YW(WW, iW) {
      const OW = (0, NW.n)("appManagerUpdated|clientEscMenuOptions", (() => {
          SW(WW, xW()), iW()
        })),
        mW = (0, cW.C)(iW),
        EW = (0, wW.o)(iW);
      return kW(), bW.add(iW), () => {
        OW(), mW(), EW(), bW.delete(iW)
      }
    }
  },
  42463: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => NW
    });
    var mW = OW(42468),
      EW = OW(42461);
    const NW = new class {
      constructor(WW) {
        this.pack = WW, this.game = void 0, this.settle = null, this.hold = null, this.endedWhileHeld = !1, this.gameListeners = new Set, WW.onWanted((() => {
          this.release()
        }))
      }
      setGame(WW) {
        if (void 0 === WW && null !== this.hold) return void(this.endedWhileHeld = !0);
        this.hold = null, this.endedWhileHeld = !1;
        const iW = this.inGame();
        if (this.game = WW, this.update(), this.inGame() !== iW)
          for (const OW of this.gameListeners) OW()
      }
      inGame() {
        return void 0 !== this.game
      }
      onGameChange(WW) {
        return this.gameListeners.add(WW), () => {
          this.gameListeners.delete(WW)
        }
      }
      unwantedLeave(WW) {
        WW && void 0 !== this.game ? this.hold = {
          game: this.game
        } : this.release()
      }
      rejoinHold() {
        return this.hold
      }
      releaseHold(WW) {
        null !== WW && WW === this.hold && this.release()
      }
      release() {
        if (null === this.hold) return;
        const WW = this.endedWhileHeld;
        this.hold = null, this.endedWhileHeld = !1, WW && this.setGame(void 0)
      }
      setSettled(WW) {
        this.settle = WW, this.update()
      }
      update() {
        void 0 === this.game ? this.pack.setSessionFiles(void 0) : null !== this.settle && (0, mW.d)(this.settle.state, this.game) && this.pack.setSessionFiles(this.settle.files)
      }
    }(EW.h)
  },
  42455: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => LW,
      d: () => bW,
      h: () => cW,
      i: () => MW,
      l: () => sW,
      o: () => KW
    });
    var mW = OW(2388);
    const EW = 8388608,
      NW = 1e3,
      PW = 3e4;
    class LW extends Error {
      constructor(WW, iW, OW) {
        super(`${"fetch"===WW?"fetching":"decoding"} ${iW} failed`, OW), this.stage = WW, this.source = iW, this.name = "ShellImageError"
      }
    }
    async function cW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mW.C,
        OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      return tW(await wW(WW, iW), "string" === typeof WW ? WW : null, OW)
    }
    async function wW(WW, iW) {
      if ("string" !== typeof WW) return WW;
      try {
        return await iW(WW)
      } catch (OW) {
        throw new LW("fetch", WW, {
          cause: OW
        })
      }
    }
    async function tW(WW, iW, OW) {
      try {
        const iW = new Blob([WW.slice()], {
          type: "image/png"
        });
        return await createImageBitmap(iW, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: OW
        })
      } catch (mW) {
        throw new LW("decode", null !== iW && void 0 !== iW ? iW : `${WW.byteLength} bytes`, {
          cause: mW
        })
      }
    }
    let ZW = null;
    const xW = new Map;
    let lW = 1;
    const AW = new Map;

    function bW(WW) {
      var iW;
      if (ZW = WW, null !== WW) {
        null === (iW = WW.PEW) || void 0 === iW || iW.call(WW, kW);
        for (const [iW, OW] of xW) jW(WW, iW, OW);
        xW.clear()
      }
    }

    function jW(WW, iW, OW) {
      AW.has(iW) && void 0 !== WW.EEW ? WW.EEW(iW, OW) : WW.OEW(iW, OW)
    }

    function UW(WW, iW) {
      ZW ? jW(ZW, WW, iW) : xW.set(WW, iW)
    }

    function kW(WW) {
      const iW = AW.get(WW);
      void 0 === iW || iW.decoding || (iW.decoding = !0, tW(iW.bytes, iW.url, iW.orientation).then((OW => {
        iW.decoding = !1, AW.get(WW) === iW ? (iW.failures = 0, UW(WW, OW)) : OW.close()
      }), (OW => {
        iW.decoding = !1, iW.failures++, 1 === iW.failures && console.warn(`shellImages: decoding image ${WW} again failed; trying again until it decodes`, OW), setTimeout((() => {
          kW(WW)
        }), Math.min(NW * 2 ** (iW.failures - 1), PW))
      })))
    }

    function sW(WW) {
      const iW = lW++;
      return UW(iW, WW), iW
    }
    async function MW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mW.C,
        OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none",
        NW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const PW = "string" === typeof WW ? WW : null,
        LW = await wW(WW, iW),
        cW = await tW(LW, PW, OW),
        {
          width: ZW,
          height: xW
        } = cW,
        bW = lW++;
      return NW && ZW * xW * 4 >= EW && AW.set(bW, {
        bytes: LW.slice(),
        url: PW,
        orientation: OW,
        decoding: !1,
        failures: 0
      }), UW(bW, cW), {
        id: bW,
        width: ZW,
        height: xW
      }
    }

    function KW(WW) {
      var iW;
      AW.delete(WW);
      const OW = xW.get(WW);
      if (OW) return OW.close(), void xW.delete(WW);
      null === (iW = ZW) || void 0 === iW || iW.mEW(WW)
    }
  },
  39167: WW => {
    WW.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v+LFy8yvH//noGXl/ccuq8A/vQKd00yOdIAAAAASUVORK5CYII="
  },
  39156: WW => {
    WW.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAALUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMnBzczN8/PjxHLLPAORwCnfkvOdNAAAAAElFTkSuQmCC"
  },
  39176: WW => {
    WW.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  39154: WW => {
    WW.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAANUlEQVQYGWM8CwQMeAATHjmw1JBQAHLp/wMHDvy/ePHi/4CAgP937tz5Ly6u+5/P3uw/KAgAgjwWhHm22JoAAAAASUVORK5CYII="
  },
  39163: WW => {
    WW.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);