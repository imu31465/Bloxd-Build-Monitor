export const id = 242;
export const ids = [242];
export const modules = {
  42509: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => ZR,
      h: () => uR
    });
    var yR = GR(2374),
      tR = GR(1127);

    function uR(RR, JR) {
      return null !== RR.gameSource && (0, yR.o)(JR, RR.gameSource)
    }

    function ZR(RR, JR) {
      if (null === RR.gameSource || "" === RR.gameSource || null === JR) return !0;
      const GR = (0, tR.n)(JR) ? (0, tR.s)(JR) : null;
      return null !== GR && uR(RR, GR)
    }
  },
  42479: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => qR
    });
    var yR = GR(664),
      tR = GR(42488),
      uR = GR(42364);
    async function ZR(RR) {
      const JR = await (0, tR.g)({
        Helmet: GR(39127),
        Chestplate: GR(39129),
        Gauntlets: GR(39145),
        Leggings: GR(39133),
        Boots: GR(39140)
      } [yR.c[RR]]);
      try {
        return (0, uR.w)(JR)
      } finally {
        JR.close()
      }
    }
    const qR = new class {
      constructor() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ZR,
          JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tR.l;
        this.decode = RR, this.register = JR, this.decoded = new Map
      }
      warm() {
        for (let RR = 0; RR < yR.c.length; RR++) this.part(RR).catch((JR => {
          console.warn(`The grayscale armour ${yR.c[RR]} image didn't decode ahead of use`, JR)
        }))
      }
      async load(RR, JR) {
        const {
          width: GR,
          height: uR,
          pixels: ZR
        } = await this.part(RR), qR = new ImageData(function(RR, JR) {
          const GR = new Uint8ClampedArray(RR.length);
          for (let yR = 0; yR < RR.length; yR += 4) GR[yR] = Math.round(RR[yR] * JR[0] / 255), GR[yR + 1] = Math.round(RR[yR + 1] * JR[1] / 255), GR[yR + 2] = Math.round(RR[yR + 2] * JR[2] / 255), GR[yR + 3] = RR[yR + 3];
          return GR
        }(ZR, function(RR) {
          return [RR >>> 16 & 255, RR >>> 8 & 255, 255 & RR]
        }(JR)), GR, uR);
        let iR;
        try {
          iR = await createImageBitmap(qR, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          })
        } catch (fR) {
          throw new tR.d("decode", `grayscale armour ${yR.c[RR]}`, {
            cause: fR
          })
        }
        return {
          id: this.register(iR),
          width: GR,
          height: uR
        }
      }
      part(RR) {
        const JR = this.decoded.get(RR);
        if (void 0 !== JR) return JR;
        const GR = this.decode(RR).catch((JR => {
          throw this.decoded.delete(RR), JR instanceof tR.d ? JR : new tR.d("decode", `grayscale armour ${yR.c[RR]}`, {
            cause: JR
          })
        }));
        return this.decoded.set(RR, GR), GR
      }
    }
  },
  42475: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => ZR,
      f: () => LR,
      j: () => VR,
      k: () => KR,
      l: () => aR
    });
    var yR = GR(42352),
      tR = GR(42479),
      uR = GR(42488);
    const ZR = 396,
      qR = 1,
      iR = 2,
      fR = 3,
      VR = {
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
      KR = {
        File: 0,
        Item: 1
      },
      wR = 0,
      rR = 1,
      eR = 2;

    function aR(RR) {
      const JR = (0, yR.j)();
      JR.catch((() => {}));
      let tR = null;
      return {
        glbUrl: RR,
        lifeformAtlasUrl: async RR => (await JR).lifeformAtlasUrl(RR),
        armourAtlasUrl: async () => (await GR.e(234).then((() => GR(35257)))).armourAtlasUrl,
        capeUrl: async RR => (await JR).capeUrl(RR),
        attachmentImageUrl: async RR => (await JR).attachmentImageUrl(RR),
        blockImageUrl: async RR => (await JR).blockImageUrl(RR),
        groupAtlasUrl: async RR => (await JR).groupAtlasUrl(RR),
        particleTextureUrl: async RR => (await JR).particleTextureUrl(RR),
        particleItemUrl: async RR => (tR ??= GR.e(45).then((() => GR(54718))).catch((RR => {
          throw tR = null, RR
        })), (await tR).particleItemUrl(RR))
      }
    }
    class LR {
      constructor(RR, JR) {
        var GR, ZR, qR, iR;
        let fR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.sources = RR, this.onFailure = JR, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.greyscaleArmour = void 0, this.He = !1, this.load = null !== (GR = fR.load) && void 0 !== GR ? GR : (RR, JR, GR) => (0, uR.h)(RR, fR.fetchImage, JR, GR), this.release = null !== (ZR = fR.release) && void 0 !== ZR ? ZR : uR.m, this.fetchFile = null !== (qR = fR.fetchFile) && void 0 !== qR ? qR : RR => (0, yR.f)(RR), this.greyscaleArmour = null !== (iR = fR.greyscaleArmour) && void 0 !== iR ? iR : tR.b
      }
      get waiting() {
        return this.ready.length
      }
      get inFlight() {
        return this.loading.size
      }
      glbWritten(RR, JR) {
        this.glbWrittenImages.set(RR, MR(JR))
      }
      glbTaken(RR, JR) {
        const GR = this.glbWrittenImages.get(RR);
        this.glbWrittenImages.delete(RR), JR && this.setGlbImages(RR, void 0 !== GR && GR.length > 0 ? GR : void 0)
      }
      setGlbImages(RR, JR) {
        var GR;
        this.glbTakenCount.set(RR, (null !== (GR = this.glbTakenCount.get(RR)) && void 0 !== GR ? GR : 0) + 1), void 0 === JR ? this.glbImages.delete(RR) : this.glbImages.set(RR, JR);
        const yR = [];
        for (const {
            key: tR
          }
          of this.loading.values()) tR.kind === VR.Glb && tR.word === RR && yR.push(tR);
        for (let tR = this.ready.length - 1; tR >= 0; tR--) {
          const {
            key: JR,
            id: GR
          } = this.ready[tR];
          JR.kind === VR.Glb && JR.word === RR && (this.ready.splice(tR, 1), null !== GR && (this.answered.delete(GR), this.release(GR)), yR.push(JR))
        }
        this.loadAgain(yR)
      }
      onEvent(RR) {
        if (this.He) return;
        const JR = new DataView(RR.buffer, RR.byteOffset, RR.byteLength);
        for (let GR = 0; GR + 8 <= RR.byteLength; GR += 8) {
          const RR = JR.getUint8(GR),
            yR = JR.getUint32(GR + 4, !0);
          if (RR === fR) {
            this.answered.delete(yR), this.release(yR);
            continue
          }
          const tR = {
            kind: JR.getUint8(GR + 1),
            index: JR.getUint8(GR + 2),
            word: yR
          };
          RR === qR ? this.want(tR) : RR === iR && this.loading.delete(nR(tR))
        }
      }
      reload(RR, JR) {
        const GR = GR => RR.includes(GR.kind) && (void 0 === JR || JR(GR)),
          yR = new Map;
        for (const tR of this.answered.values()) GR(tR) && yR.set(nR(tR), tR);
        for (const [tR, {
            key: uR
          }] of this.loading) GR(uR) && yR.set(tR, uR);
        this.loadAgain(yR.values())
      }
      loadAgain(RR) {
        for (const JR of RR) this.loading.delete(nR(JR)), this.want(JR)
      }
      drain(RR) {
        if (null !== RR)
          for (; this.ready.length > 0;) {
            if (!RR(ZR, 0, this.ready[0].record)) return;
            this.ready.shift()
          }
      }
      dispose() {
        this.He = !0, this.loading.clear(), this.ready.length = 0;
        for (const RR of this.answered.keys()) this.release(RR);
        this.answered.clear()
      }
      want(RR) {
        const JR = nR(RR);
        if (this.loading.has(JR)) return;
        const GR = {
          key: RR
        };
        this.loading.set(JR, GR), this.loadKey(RR).then((yR => {
          this.He || this.loading.get(JR) !== GR ? this.release(yR.id) : (this.loading.delete(JR), this.answered.set(yR.id, RR), this.ready.push({
            record: WR(RR, wR, yR),
            key: RR,
            id: yR.id
          }))
        }), (yR => {
          if (this.He || this.loading.get(JR) !== GR) return;
          this.loading.delete(JR), this.onFailure({
            key: RR,
            error: yR
          });
          const tR = yR instanceof uR.d && "decode" === yR.stage ? rR : eR;
          this.ready.push({
            record: WR(RR, tR, null),
            key: RR,
            id: null
          })
        }))
      }
      async loadKey(RR) {
        switch (RR.kind) {
          case VR.Glb:
            return this.load(await this.glbImage(RR), "none");
          case VR.LifeformAtlas:
            return this.load(UR(await this.sources.lifeformAtlasUrl(RR.word), RR), "none", !0);
          case VR.ArmourAtlas:
            return this.load(UR(await this.sources.armourAtlasUrl(), RR), "none");
          case VR.Cape:
            return this.load(UR(await this.sources.capeUrl(RR.word), RR), "none");
          case VR.AttachmentImage:
            return this.load(UR(await this.sources.attachmentImageUrl(RR.word), RR), "none");
          case VR.GroupAtlas:
            return this.load(UR(await this.sources.groupAtlasUrl(RR.word), RR), "none");
          case VR.BlockImage:
            return this.load(UR(await this.sources.blockImageUrl(RR.word), RR), "none");
          case VR.Particle: {
            const JR = await (RR.index === KR.Item ? this.sources.particleItemUrl(RR.word) : this.sources.particleTextureUrl(RR.word));
            return this.load(UR(JR, RR), "flipY")
          }
          case VR.GreyscaleArmour:
            return this.greyscaleArmour.load(RR.index, RR.word);
          default:
            throw new uR.d("fetch", `image kind ${RR.kind}`, {
              cause: null
            })
        }
      }
      async glbImage(RR) {
        var JR;
        let GR = this.glbImages.get(RR.word);
        if (void 0 === GR) {
          const JR = this.glbTakenCount.get(RR.word),
            yR = UR(await this.sources.glbUrl(RR.word), RR);
          try {
            GR = MR(await this.fetchFile(yR))
          } catch (tR) {
            throw new uR.d("fetch", yR, {
              cause: tR
            })
          }
          this.glbTakenCount.get(RR.word) === JR && this.glbImages.set(RR.word, GR)
        }
        const yR = null === (JR = GR) || void 0 === JR ? void 0 : JR[RR.index];
        if (!yR) throw new uR.d("decode", `image ${RR.index} of file ${2147483647&RR.word}`, {
          cause: null
        });
        return yR
      }
    }

    function nR(RR) {
      let {
        kind: JR,
        index: GR,
        word: yR
      } = RR;
      return `${JR}:${GR}:${yR}`
    }

    function UR(RR, JR) {
      if (null === RR) throw new uR.d("fetch", `no URL for image ${nR(JR)}`, {
        cause: null
      });
      return RR
    }

    function WR(RR, JR, GR) {
      var yR, tR, uR;
      const ZR = new Uint8Array(16),
        qR = new DataView(ZR.buffer);
      return qR.setUint8(0, RR.kind), qR.setUint8(1, RR.index), qR.setUint8(2, JR), qR.setUint32(4, RR.word, !0), qR.setUint32(8, null !== (yR = null === GR || void 0 === GR ? void 0 : GR.id) && void 0 !== yR ? yR : 0, !0), qR.setUint16(12, Math.min(null !== (tR = null === GR || void 0 === GR ? void 0 : GR.width) && void 0 !== tR ? tR : 0, 65535), !0), qR.setUint16(14, Math.min(null !== (uR = null === GR || void 0 === GR ? void 0 : GR.height) && void 0 !== uR ? uR : 0, 65535), !0), ZR
    }
    const AR = 1179937895,
      CR = 1313821514,
      XR = 5130562;

    function MR(RR) {
      var JR;
      const GR = new DataView(RR.buffer, RR.byteOffset, RR.byteLength);
      if (RR.byteLength < 20 || GR.getUint32(0, !0) !== AR || GR.getUint32(16, !0) !== CR) return [];
      let yR, tR = 20 + GR.getUint32(12, !0);
      try {
        yR = JSON.parse((new TextDecoder).decode(RR.subarray(20, tR)))
      } catch {
        return []
      }
      for (; tR + 8 <= RR.byteLength && GR.getUint32(tR + 4, !0) !== XR;) tR += 8 + GR.getUint32(tR, !0);
      const uR = null !== (JR = yR.images) && void 0 !== JR ? JR : [];
      if (0 === uR.length || tR + 8 > RR.byteLength) return uR.map((() => null));
      const ZR = RR.subarray(tR + 8, Math.min(RR.byteLength, tR + 8 + GR.getUint32(tR, !0)));
      return uR.map((RR => {
        var JR, GR, tR;
        const uR = void 0 === RR.bufferView || null === (JR = yR.bufferViews) || void 0 === JR ? void 0 : JR[RR.bufferView];
        if (!uR || 0 !== (null !== (GR = uR.buffer) && void 0 !== GR ? GR : 0) || void 0 === uR.byteLength) return null;
        const qR = null !== (tR = uR.byteOffset) && void 0 !== tR ? tR : 0,
          iR = qR + uR.byteLength;
        return iR <= ZR.byteLength ? ZR.slice(qR, iR) : null
      }))
    }
  },
  42494: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => VR,
      e: () => uR,
      f: () => KR,
      j: () => ZR
    });
    var yR = GR(42475),
      tR = GR(42352);
    const uR = new class {
      constructor() {
        this.page = null, this.session = void 0, this.follower = null, this.isWanted = !1, this.listeners = new Set, this.pageListeners = new Set, this.wantedListeners = new Set
      }
      get current() {
        return void 0 === this.session ? this.page : this.session
      }
      setPageFiles(RR) {
        this.change((() => {
          this.page = RR
        }))
      }
      setSessionFiles(RR) {
        const JR = void 0 !== this.session && void 0 === RR;
        if (this.change((() => {
            this.session = RR
          })), JR)
          for (const GR of [...this.pageListeners]) GR()
      }
      showsPage() {
        return void 0 === this.session
      }
      onPageShown(RR) {
        return this.pageListeners.add(RR), () => {
          this.pageListeners.delete(RR)
        }
      }
      setFollower(RR) {
        this.follower = RR, this.startFollower()
      }
      wanted() {
        this.isWanted = !0;
        for (const RR of [...this.wantedListeners]) RR();
        this.startFollower()
      }
      onWanted(RR) {
        return this.wantedListeners.add(RR), () => {
          this.wantedListeners.delete(RR)
        }
      }
      onChange(RR) {
        return this.listeners.add(RR), () => {
          this.listeners.delete(RR)
        }
      }
      startFollower() {
        const RR = this.follower;
        this.isWanted && null !== RR && (this.follower = null, RR((() => {
          this.follower = RR
        })))
      }
      change(RR) {
        const JR = this.current;
        if (RR(), this.current !== JR)
          for (const GR of this.listeners) GR()
      }
    };

    function ZR(RR, JR) {
      return {
        ...RR,
        armourAtlasUrl: () => {
          var GR, yR;
          return null !== (GR = null === (yR = JR()) || void 0 === yR ? void 0 : yR.armourAtlasUrl()) && void 0 !== GR ? GR : RR.armourAtlasUrl()
        },
        lifeformAtlasUrl: GR => iR(JR(), (RR => RR.LIFEFORM_ATLAS_PATHS[GR]), (() => RR.lifeformAtlasUrl(GR))),
        groupAtlasUrl: GR => iR(JR(), (RR => RR.GROUP_ATLAS_PATHS[GR]), (() => RR.groupAtlasUrl(GR))),
        particleItemUrl: yR => fR(JR(), (async () => {
          const RR = await GR.e(45).then((() => GR(54718))).catch((() => null));
          return (null === RR || void 0 === RR ? void 0 : RR.particleItemSprite(yR)) || null
        }), (() => RR.particleItemUrl(yR))),
        blockImageUrl: GR => fR(JR(), (async () => {
          var RR, JR;
          return null !== (RR = null === (JR = await qR()) || void 0 === JR ? void 0 : JR.blockImageName(GR)) && void 0 !== RR ? RR : null
        }), (() => RR.blockImageUrl(GR)))
      }
    }

    function qR() {
      return (0, tR.j)().catch((() => null))
    }

    function iR(RR, JR, GR) {
      return fR(RR, (async () => {
        var RR;
        const GR = await qR(),
          yR = null === GR ? null : JR(GR),
          tR = null !== (RR = null === yR || void 0 === yR ? void 0 : yR.slice(yR.lastIndexOf("/") + 1)) && void 0 !== RR ? RR : null;
        return "Player_Atlas" === tR ? null : tR
      }), GR)
    }
    async function fR(RR, JR, GR) {
      if (null !== RR) {
        const GR = await JR(),
          yR = null === GR ? null : RR.textureUrl(GR);
        if (null !== yR) return yR
      }
      return GR()
    }
    const VR = 0;

    function KR(RR) {
      const JR = [yR.j.ArmourAtlas, yR.j.LifeformAtlas, yR.j.GroupAtlas, yR.j.BlockImage, yR.j.Particle];
      RR.reload(JR, (RR => {
        switch (RR.kind) {
          case yR.j.Particle:
            return RR.index === yR.k.Item;
          case yR.j.LifeformAtlas:
            return RR.word !== VR;
          default:
            return !0
        }
      }))
    }
  },
  42420: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => yR,
      f: () => qR,
      j: () => tR,
      m: () => uR
    });
    const yR = 1e3;

    function tR() {
      iR((() => {
        window.location.reload()
      }))
    }

    function uR() {
      return new Promise((() => {}))
    }

    function ZR(RR) {
      iR((() => {
        window.location.replace(RR(window.location.href))
      }))
    }

    function qR(RR) {
      Promise.resolve().then((() => GR(112))).then((JR => {
        let {
          currentUrl: GR
        } = JR;
        ZR((() => GR.mergeSearchParamsInto(RR)))
      }), (() => {
        ZR((() => RR))
      }))
    }

    function iR(RR) {
      null !== window.onbeforeunload ? Promise.resolve().then((() => GR(1943))).then((JR => {
        let {
          prepareForUnloadWithoutConfirmation: GR
        } = JR;
        try {
          GR()
        } catch (yR) {
          console.warn("[bloxd-wasm-client] prepareForUnloadWithoutConfirmation threw: leaving plainly", yR), window.onbeforeunload = null
        }
        RR()
      }), (() => {
        window.onbeforeunload = null, RR()
      })) : RR()
    }
  },
  37232: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => LR,
      i: () => VR,
      m: () => rR,
      o: () => KR,
      q: () => nR,
      r: () => eR,
      s: () => aR,
      u: () => wR
    });
    const yR = 30,
      tR = 4;
    let uR = 0,
      ZR = !1,
      qR = !1,
      iR = Number.NEGATIVE_INFINITY,
      fR = [];

    function VR() {
      0 === uR && (ZR = !1, qR = !1), uR++;
      let RR = !1;
      return () => {
        RR || (RR = !0, uR--)
      }
    }

    function KR(RR) {
      RR && (qR = !0)
    }

    function wR() {
      return qR
    }

    function rR(RR) {
      ZR = RR
    }

    function eR() {
      return uR > 0
    }

    function aR(RR) {
      return !(uR > 0 && (ZR || RR - iR < 1e3 / yR - tR)) && (iR = RR, !0)
    }

    function LR(RR) {
      return fR.push(RR), () => {
        fR = fR.filter((JR => JR !== RR))
      }
    }

    function nR() {
      if (0 === fR.length) return;
      const RR = fR;
      fR = [];
      for (const GR of RR) try {
        GR()
      } catch (JR) {
        console.warn("[bloxd-previews] an after-draw callback threw", JR)
      }
    }
  },
  42430: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => XR,
      g: () => wR,
      j: () => WR,
      m: () => CR,
      q: () => AR,
      s: () => MR
    });
    var yR = GR(177),
      tR = GR(25),
      uR = GR(32),
      ZR = GR(4044),
      qR = GR(1397),
      iR = GR(35072),
      fR = GR(310),
      VR = GR(103),
      KR = GR(173);

    function wR() {
      var RR;
      const JR = (0, ZR.E)(),
        GR = function(RR, JR) {
          return {
            sampleCount: RR.antiAliasing ? 4 : 1,
            n: (0, ZR.v)(RR.pixelScale, JR),
            pixelated: (0, ZR.s)(RR.pixelSmoothing)
          }
        }(tR.d.get("clientEscMenuOptions"), JR);
      return GR.sampleCount > 1 && (0, iR.b)() && (GR.sampleCount = 1), GR.n = null !== (RR = (0, iR.k)()) && void 0 !== RR ? RR : GR.n, yR.i.includes((0, VR.getSoftwareRenderer)()) && (GR.sampleCount = 1, GR.n = Math.max(GR.n, (0, ZR.v)(KR.u.pixelScale, JR))), GR
    }
    let rR = null,
      eR = null;
    const aR = new Set;
    let LR = null;

    function nR() {
      for (const RR of aR) RR()
    }

    function UR() {
      if (null === rR) {
        const RR = document.createElement("div");
        RR.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", RR.setAttribute("aria-hidden", "true"), document.body.append(RR), eR = RR, rR = new ZR.d(RR, nR)
      }
      return rR
    }

    function WR(RR) {
      const JR = (0, ZR.l)(),
        [GR, yR] = UR().size(JR);
      return (0, ZR.i)(GR, yR, JR, RR.n)
    }

    function AR(RR) {
      var JR, GR, yR, tR;
      const uR = (0, ZR.l)(),
        [iR, fR] = UR().size(uR);
      if (iR <= 0 || fR <= 0) return null;
      const VR = (0, ZR.i)(iR, fR, uR, wR().n);
      return (0, ZR.e)(RR, VR), RR.style.left = `${null!==(JR=null===(GR=LR)||void 0===GR?void 0:GR.rect.left)&&void 0!==JR?JR:0}px`, RR.style.top = `${null!==(yR=null===(tR=LR)||void 0===tR?void 0:tR.rect.top)&&void 0!==yR?yR:0}px`, (0, qR.T)(RR.style, LR), VR
    }

    function CR(RR) {
      LR = RR, UR(), (0, qR.M)(eR.style, RR, ""), nR()
    }

    function XR(RR, JR) {
      RR.style.imageRendering = (0, ZR.F)(JR.pixelated)
    }

    function MR(RR, JR) {
      const GR = (0, uR.q)("appManagerUpdated|clientEscMenuOptions", (() => {
          XR(RR, wR()), JR()
        })),
        yR = (0, iR.v)(JR),
        tR = (0, fR.l)(JR);
      return UR(), aR.add(JR), () => {
        GR(), yR(), tR(), aR.delete(JR)
      }
    }
  },
  42503: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => uR
    });
    var yR = GR(42509),
      tR = GR(42494);
    const uR = new class {
      constructor(RR) {
        this.pack = RR, this.game = void 0, this.settle = null, this.hold = null, this.endedWhileHeld = !1, this.gameListeners = new Set, RR.onWanted((() => {
          this.release()
        }))
      }
      setGame(RR) {
        if (void 0 === RR && null !== this.hold) return void(this.endedWhileHeld = !0);
        this.hold = null, this.endedWhileHeld = !1;
        const JR = this.inGame();
        if (this.game = RR, this.update(), this.inGame() !== JR)
          for (const GR of this.gameListeners) GR()
      }
      inGame() {
        return void 0 !== this.game
      }
      onGameChange(RR) {
        return this.gameListeners.add(RR), () => {
          this.gameListeners.delete(RR)
        }
      }
      unwantedLeave(RR) {
        RR && void 0 !== this.game ? this.hold = {
          game: this.game
        } : this.release()
      }
      rejoinHold() {
        return this.hold
      }
      releaseHold(RR) {
        null !== RR && RR === this.hold && this.release()
      }
      release() {
        if (null === this.hold) return;
        const RR = this.endedWhileHeld;
        this.hold = null, this.endedWhileHeld = !1, RR && this.setGame(void 0)
      }
      setSettled(RR) {
        this.settle = RR, this.update()
      }
      update() {
        void 0 === this.game ? this.pack.setSessionFiles(void 0) : null !== this.settle && (0, yR.e)(this.settle.state, this.game) && this.pack.setSessionFiles(this.settle.files)
      }
    }(tR.e)
  },
  42488: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => qR,
      f: () => aR,
      g: () => iR,
      h: () => AR,
      l: () => WR,
      m: () => CR
    });
    var yR = GR(2457);
    const tR = 8388608,
      uR = 1e3,
      ZR = 3e4;
    class qR extends Error {
      constructor(RR, JR, GR) {
        super(`${"fetch"===RR?"fetching":"decoding"} ${JR} failed`, GR), this.stage = RR, this.source = JR, this.name = "ShellImageError"
      }
    }
    async function iR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yR.B,
        GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      return VR(await fR(RR, JR), "string" === typeof RR ? RR : null, GR)
    }
    async function fR(RR, JR) {
      if ("string" !== typeof RR) return RR;
      try {
        return await JR(RR)
      } catch (GR) {
        throw new qR("fetch", RR, {
          cause: GR
        })
      }
    }
    async function VR(RR, JR, GR) {
      try {
        const JR = new Blob([RR.slice()], {
          type: "image/png"
        });
        return await createImageBitmap(JR, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: GR
        })
      } catch (yR) {
        throw new qR("decode", null !== JR && void 0 !== JR ? JR : `${RR.byteLength} bytes`, {
          cause: yR
        })
      }
    }
    let KR = null;
    const wR = new Map;
    let rR = 1;
    const eR = new Map;

    function aR(RR) {
      var JR;
      if (KR = RR, null !== RR) {
        null === (JR = RR.EtR) || void 0 === JR || JR.call(RR, UR);
        for (const [JR, GR] of wR) LR(RR, JR, GR);
        wR.clear()
      }
    }

    function LR(RR, JR, GR) {
      eR.has(JR) && void 0 !== RR.dtR ? RR.dtR(JR, GR) : RR.StR(JR, GR)
    }

    function nR(RR, JR) {
      KR ? LR(KR, RR, JR) : wR.set(RR, JR)
    }

    function UR(RR) {
      const JR = eR.get(RR);
      void 0 === JR || JR.decoding || (JR.decoding = !0, VR(JR.bytes, JR.url, JR.orientation).then((GR => {
        JR.decoding = !1, eR.get(RR) === JR ? (JR.failures = 0, nR(RR, GR)) : GR.close()
      }), (GR => {
        JR.decoding = !1, JR.failures++, 1 === JR.failures && console.warn(`shellImages: decoding image ${RR} again failed; trying again until it decodes`, GR), setTimeout((() => {
          UR(RR)
        }), Math.min(uR * 2 ** (JR.failures - 1), ZR))
      })))
    }

    function WR(RR) {
      const JR = rR++;
      return nR(JR, RR), JR
    }
    async function AR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yR.B,
        GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none",
        uR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const ZR = "string" === typeof RR ? RR : null,
        qR = await fR(RR, JR),
        iR = await VR(qR, ZR, GR),
        {
          width: KR,
          height: wR
        } = iR,
        aR = rR++;
      return uR && KR * wR * 4 >= tR && eR.set(aR, {
        bytes: qR.slice(),
        url: ZR,
        orientation: GR,
        decoding: !1,
        failures: 0
      }), nR(aR, iR), {
        id: aR,
        width: KR,
        height: wR
      }
    }

    function CR(RR) {
      var JR;
      eR.delete(RR);
      const GR = wR.get(RR);
      if (GR) return GR.close(), void wR.delete(RR);
      null === (JR = KR) || void 0 === JR || JR.jtR(RR)
    }
  },
  39140: RR => {
    RR.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v+LFy8yvH//noGXl/ccuq8A/vQKd00yOdIAAAAASUVORK5CYII="
  },
  39129: RR => {
    RR.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAALUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMnBzczN8/PjxHLLPAORwCnfkvOdNAAAAAElFTkSuQmCC"
  },
  39145: RR => {
    RR.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  39127: RR => {
    RR.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAANUlEQVQYGWM8CwQMeAATHjmw1JBQAHLp/wMHDvy/ePHi/4CAgP937tz5Ly6u+5/P3uw/KAgAgjwWhHm22JoAAAAASUVORK5CYII="
  },
  39133: RR => {
    RR.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);