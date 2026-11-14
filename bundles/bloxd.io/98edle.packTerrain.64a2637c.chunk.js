export const id = 39;
export const ids = [39];
export const modules = {
  40762: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      MAX_LAYER_WIDTH: () => yR,
      PackTextures: () => IW,
      layerWidthFor: () => BW,
      packFileUrl: () => iR,
      packFilesOf: () => PW,
      packTerrainSources: () => YW,
      resheet: () => tR,
      webgl1GridColumns: () => NW,
      webgl1LayerWidth: () => eW
    });
    var wW = MW(38301),
      CW = MW(38455),
      zR = MW(40767),
      AW = MW(38443),
      bR = MW(40769);
    const yR = {
      webgpu: 128,
      webgl: 128,
      webgl1: 64
    };

    function NW(WW) {
      const RW = Math.ceil(Math.log2(Math.max(1, WW)));
      return 2 ** Math.ceil(RW / 2)
    }

    function eW(WW, RW, MW) {
      const CW = null !== MW && MW > 0 ? MW : wW.b.limits.MAX_TEXTURE_SIZE;
      return BW(Math.max(1, Math.floor(CW / NW(RW))), WW)
    }

    function BW(WW, RW) {
      let MW = 1;
      for (; 2 * MW <= Math.min(WW, RW);) MW *= 2;
      return MW
    }
    async function tR(WW, RW, MW, wW) {
      const CW = BW(RW, wW),
        zR = [];
      for (const BW of WW) zR.push(CW === RW ? BW : await gR(BW, RW, CW));
      const AW = CW * CW * 4,
        bR = CW * Math.max(0, ...MW),
        yR = MW.map((() => ({
          width: CW,
          height: bR,
          pixels: new Uint8Array(CW * bR * 4)
        })));
      let NW = 0,
        eW = 0;
      for (const BW of zR) {
        let WW = 0;
        const RW = Math.floor(BW.byteLength / AW);
        for (; WW < RW && NW < yR.length;) {
          const wW = Math.min(MW[NW] - eW, RW - WW);
          yR[NW].pixels.set(BW.subarray(WW * AW, (WW + wW) * AW), eW * AW), WW += wW, eW += wW, eW === MW[NW] && (NW++, eW = 0)
        }
      }
      return yR
    }
    const TW = 16;
    async function gR(WW, RW, MW) {
      const wW = Math.floor(WW.byteLength / (RW * RW * 4)),
        CW = new Uint8Array(MW * MW * 4 * wW),
        zR = [0, 0, 0, 0];
      for (let AW = 0; AW < wW; AW++) {
        AW > 0 && AW % TW === 0 && await new Promise((WW => {
          setTimeout(WW, 0)
        }));
        const wW = AW * RW;
        for (let bR = 0; bR < MW; bR++) {
          const yR = Math.floor(bR * RW / MW),
            NW = Math.max(yR + 1, Math.floor((bR + 1) * RW / MW));
          for (let eW = 0; eW < MW; eW++) {
            const BW = Math.floor(eW * RW / MW),
              tR = Math.max(BW + 1, Math.floor((eW + 1) * RW / MW));
            zR.fill(0);
            for (let MW = yR; MW < NW; MW++) {
              const CW = (wW + MW) * RW * 4;
              for (let RW = BW; RW < tR; RW++)
                for (let MW = 0; MW < 4; MW++) zR[MW] += WW[CW + 4 * RW + MW]
            }
            const TW = (NW - yR) * (tR - BW),
              gR = 4 * ((AW * MW + bR) * MW + eW);
            for (let WW = 0; WW < 4; WW++) CW[gR + WW] = Math.round(zR[WW] / TW)
          }
        }
      }
      return CW
    }

    function iR(WW, RW) {
      return "string" !== typeof WW || "" === WW ? null : "player" === RW || (0, zR.e)(WW) ? WW : null
    }
    async function YW(WW, RW, wW) {
      const zR = await MW.e(182).then((() => MW(32670)));
      let bR = null;
      return {
        atlasSheets: [],
        texture: RW => {
          var MW, AW, bR;
          return null !== (MW = null !== (AW = null !== (bR = iR(WW.terrain.texture(RW), wW)) && void 0 !== bR ? bR : zR.animatedBlockTextures[RW]) && void 0 !== AW ? AW : zR.rotatedBlockTextures[RW]) && void 0 !== MW ? MW : function(WW, RW, MW) {
            var wW, zR;
            const AW = null !== (wW = CW.d[WW]) && void 0 !== wW ? wW : null;
            return null === AW ? null : null !== (zR = iR(RW.texture(WW), MW)) && void 0 !== zR ? zR : AW
          }(RW, WW, wW)
        },
        decoded: MW => {
          const CW = (0, AW.i)(MW);
          return null === CW ? null : (bR ??= (async () => {
            const MW = await Promise.all(WW.terrain.atlasSheets.map((async (RW, MW) => {
              const CW = WW.sheetPixels[MW];
              if (CW) return new Uint8Array(CW.buffer, CW.byteOffset, CW.byteLength);
              const zR = iR(RW, wW);
              if (null === zR) throw new Error(`the pack's atlas sheet ${MW} isn't a pack file`);
              return (await (0, AW.q)(zR)).pixels
            })));
            return WW.sheetPixels.fill(null), tR(MW, WW.sheetWidth, zR.imagesPerAtlas, RW)
          })(), bR).then((WW => {
            const RW = WW.at(CW);
            if (void 0 === RW) throw new Error(`the built atlas has no sheet ${CW}`);
            return RW
          }))
        }
      }
    }
    const JW = new WeakMap;

    function PW(WW, RW) {
      if (null === WW) return null;
      let MW = JW.get(WW);
      void 0 === MW && (MW = {}, JW.set(WW, MW));
      const wW = MW[RW];
      if (void 0 !== wW) return wW;
      const {
        armourAtlasUrl: CW,
        texture: zR,
        model: AW
      } = WW, bR = {
        armourAtlasUrl: () => iR(CW, RW),
        textureUrl: WW => iR(zR(WW), RW),
        modelUrl: WW => iR(AW(WW), RW)
      };
      return MW[RW] = bR, bR
    }
    class IW {
      constructor(WW) {
        this.host = WW, this.assets = null, this.owner = "player", this.latest = 0, this.swapping = 0, this.ended = !1, this.maxWidth = null
      }
      maxLayerWidth() {
        return this.maxWidth ??= (async (WW, RW, wW) => {
          const {
            backend: CW
          } = this.host, zR = yR[CW];
          if ("webgl1" !== CW) return zR;
          const [AW, bR] = await Promise.all([MW.e(182).then((() => MW(32670))), null !== (WW = null === (RW = (wW = this.host).maxTextureSize) || void 0 === RW ? void 0 : RW.call(wW)) && void 0 !== WW ? WW : null]);
          return eW(zR, AW.imagesPerAtlas.length * Math.max(0, ...AW.imagesPerAtlas), bR)
        })().catch((WW => {
          throw this.maxWidth = null, WW
        })), this.maxWidth
      }
      files() {
        return PW(this.assets, this.owner)
      }
      iconOverrides() {
        const WW = this.files();
        return null === WW ? null : {
          itemSprite: WW.textureUrl,
          blockTexture: WW.textureUrl,
          model: WW.modelUrl
        }
      }
      start() {
        var WW;
        const RW = null !== (WW = this.host.assetsOf) && void 0 !== WW ? WW : bR.m,
          MW = this.host.feed.subscribe((WW => {
            const MW = ++this.latest;
            this.host.settling(), this.maxLayerWidth().then((MW => RW(WW, MW))).then((RW => this.apply(MW, RW, WW).catch((WW => {
              this.host.warn("the texture pack landed, but reloading what it overrides failed", WW)
            }))), (RW => {
              this.host.warn("the texture pack's atlas couldn't be generated: the textures in stay", RW), this.settled(MW, WW, null, !0)
            }))
          }));
        return () => {
          MW(), this.latest++, this.ended = !0
        }
      }
      async apply(WW, RW, MW) {
        const {
          host: wW
        } = this;
        if (WW !== this.latest || wW.stopped()) return;
        const CW = (0, zR.l)(MW);
        if (RW === this.assets && (null === RW || CW === this.owner) && 0 === this.swapping) return void this.settled(WW, MW, PW(RW, CW));
        let bR;
        this.swapping++;
        try {
          bR = await wW.terrain.swap((WW => {
            var RW;
            wW.warn(`texture pack texture ${null!==(RW=WW.name)&&void 0!==RW?RW:"(all)"} failed`, WW.error)
          }), (async () => wW.sourcesOf ? wW.sourcesOf(RW) : null === RW ? (0, AW.m)() : YW(RW, await this.maxLayerWidth(), CW)), {
            wholeAtlas: null !== RW,
            wanted: () => WW === this.latest
          })
        } catch (yR) {
          return wW.warn("the texture pack's swap failed: the textures in stay", yR), void this.settled(WW, MW, null, !0)
        } finally {
          this.swapping--
        }
        if (!0 !== bR || this.ended) this.settled(WW, MW, null, !0);
        else {
          wW.landed(), this.assets = RW, this.owner = CW;
          try {
            wW.packSwapped()
          } finally {
            this.settled(WW, MW, this.files())
          }
        }
      }
      settled(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        WW !== this.latest || this.ended || this.host.stopped() || this.host.settled(RW, MW, wW)
      }
    }
  },
  40778: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      followPagePackFiles: () => zR
    });
    var wW = MW(40762),
      CW = MW(40769);

    function zR(WW, RW, MW, zR, AW) {
      let bR, yR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : WW => (0, CW.m)(WW, wW.MAX_LAYER_WIDTH[MW]),
        NW = 0,
        eW = null;
      const BW = () => {
          if (null === eW || null !== eW.gameSource && !RW.showsPage()) return;
          const MW = null === eW.gameSource ? eW : WW.playerState();
          if (MW.pack === bR) return;
          bR = MW.pack;
          const CW = ++NW;
          yR(MW).then((WW => {
            CW === NW && zR((0, wW.packFilesOf)(WW, "player"))
          }), (WW => {
            CW === NW && (bR = void 0), AW("the texture pack's files couldn't be had for the previews: the files in stay", WW)
          }))
        },
        tR = WW.subscribe((WW => {
          eW = WW, BW()
        })),
        TW = WW.onPlayerPackChange(BW),
        gR = RW.onPageShown(BW);
      return () => {
        tR(), TW(), gR(), NW++
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);