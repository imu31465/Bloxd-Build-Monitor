export const id = 239;
export const ids = [239];
export const modules = {
  37509: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => kG,
      f: () => yG,
      i: () => SG
    });
    const wG = 1024,
      SG = 16,
      LG = 36e4;
    class yG {
      constructor(GG) {
        this.boneCount = GG, this.rotation = void 0, this.position = void 0, this.scale = void 0, this.touched = void 0, this.rotation = new Float64Array(3 * GG), this.position = new Float64Array(3 * GG), this.scale = new Float64Array(3 * GG).fill(1), this.touched = new Uint8Array(GG)
      }
      clampToLimits() {
        for (let GG = 0; GG < this.boneCount; GG++)
          if (0 !== this.touched[GG])
            for (let bG = 3 * GG; bG < 3 * GG + 3; bG++) {
              const GG = this.rotation[bG],
                ZG = this.position[bG],
                yG = this.scale[bG];
              GG >= -36e4 && GG <= LG || (this.rotation[bG] = UG(GG, LG)), ZG >= -1024 && ZG <= wG || (this.position[bG] = UG(ZG, wG)), yG >= -SG && yG <= SG || (this.scale[bG] = UG(yG, SG, 1))
            }
      }
      reset() {
        for (let GG = 0; GG < this.boneCount; GG++)
          if (0 !== this.touched[GG]) {
            this.touched[GG] = 0;
            for (let bG = 3 * GG; bG < 3 * GG + 3; bG++) this.rotation[bG] = 0, this.position[bG] = 0, this.scale[bG] = 1
          }
      }
    }
    class kG {
      constructor(GG) {
        this.rotation = void 0, this.position = void 0, this.scaleDelta = void 0, this.boneWeight = void 0, this.touched = void 0, this.overrides = void 0, this.touchedBones = void 0, this.touchedCount = 0, this.rotation = new Float64Array(3 * GG), this.position = new Float64Array(3 * GG), this.scaleDelta = new Float64Array(3 * GG), this.boneWeight = new Float64Array(GG), this.touched = new Uint8Array(GG), this.overrides = new Uint8Array(GG), this.touchedBones = new Int32Array(GG)
      }
      touch(GG, bG, ZG) {
        0 === this.touched[GG] && (this.touched[GG] = 1, this.touchedBones[this.touchedCount++] = GG), this.boneWeight[GG] += bG, ZG && (this.overrides[GG] = 1)
      }
      applyTo(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        for (let SG = 0; SG < this.touchedCount; SG++) {
          const LG = this.touchedBones[SG],
            yG = this.boneWeight[LG];
          if (ZG || 1 === this.overrides[LG]) {
            const ZG = bG * Math.min(1, yG);
            for (let bG = 3 * LG; bG < 3 * LG + 3; bG++) GG.rotation[bG] += (this.rotation[bG] / yG - GG.rotation[bG]) * ZG, GG.position[bG] += (this.position[bG] / yG - GG.position[bG]) * ZG, GG.scale[bG] += (1 + this.scaleDelta[bG] / yG - GG.scale[bG]) * ZG
          } else {
            const ZG = wG && yG > 1 ? bG / yG : bG;
            for (let bG = 3 * LG; bG < 3 * LG + 3; bG++) GG.rotation[bG] += this.rotation[bG] * ZG, GG.position[bG] += this.position[bG] * ZG, GG.scale[bG] *= 1 + this.scaleDelta[bG] * ZG
          }
          GG.touched[LG] = 1
        }
      }
      clear() {
        for (let GG = 0; GG < this.touchedCount; GG++) {
          const bG = this.touchedBones[GG];
          this.touched[bG] = 0, this.overrides[bG] = 0, this.boneWeight[bG] = 0;
          for (let GG = 3 * bG; GG < 3 * bG + 3; GG++) this.rotation[GG] = 0, this.position[GG] = 0, this.scaleDelta[GG] = 0
        }
        this.touchedCount = 0
      }
    }

    function UG(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      return Number.isNaN(GG) ? ZG : Math.min(bG, Math.max(-bG, GG))
    }
  },
  37503: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => UG,
      i: () => kG
    });
    var wG = ZG(37491),
      SG = ZG(352),
      LG = ZG(1873),
      yG = ZG(37509);

    function kG(GG) {
      if ("tw" in GG) return CG.createAnimationScript(GG);
      return new VG(GG).createAnimationScript()
    }

    function UG(GG, bG, ZG, SG) {
      const LG = GG.tw <= 0 ? 1 : bG + ZG * Math.max(0, SG) / GG.tw;
      return GG.Dw === wG.n.LoopOnLastFrame ? LG % 1 : GG.Dw === wG.n.NoLoop && LG >= 1 ? null : Math.min(1, LG)
    }
    class YG {
      createAnimationScript(GG) {
        const {
          tw: bG,
          loop: ZG,
          Nw: wG
        } = GG;
        return {
          tw: Math.round(bG),
          Dw: this.createLoopMode(null !== ZG && void 0 !== ZG && ZG),
          Nw: this.createNodeSkeletonAnimationScript(null !== wG && void 0 !== wG ? wG : null)
        }
      }
      createLoopMode(GG) {
        switch (GG) {
          case !1:
            return wG.n.NoLoop;
          case !0:
            return wG.n.LoopOnLastFrame;
          case "hold-on-last-frame":
            return wG.n.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${GG}`)
      }
      createNodeSkeletonAnimationScript(GG) {
        if (null === GG) return null;
        const bG = {};
        for (const ZG in GG) {
          const wG = GG[ZG];
          bG[ZG] = this.createNodeAnimationScript(wG)
        }
        return bG
      }
      createNodeAnimationScript(GG) {
        const {
          timeline: bG
        } = GG, ZG = bG.filter((GG => Number.isFinite(GG.timeFraction)));
        return ZG.sort(((GG, bG) => GG.timeFraction - bG.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(ZG, "rotation", QG),
          position: this.createTimelineFromKeyframes(ZG, "position", hG),
          scale: this.createTimelineFromKeyframes(ZG, "scale", hG, JG)
        }
      }
      createTimelineFromKeyframes(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : GG => GG;
        const SG = [];
        for (const YG of GG) {
          const GG = YG[bG];
          if (GG) {
            const bG = this.createAnimationFrameWithoutPrecomputes(YG.timeFraction, GG, wG);
            pG(bG) && SG.push(bG)
          }
        }
        const LG = [];
        for (let YG = 0; YG < SG.length; YG++) {
          var yG, kG, UG;
          const GG = SG[YG],
            bG = null !== (yG = SG[YG - 1]) && void 0 !== yG ? yG : GG,
            wG = null !== (kG = SG[YG + 1]) && void 0 !== kG ? kG : GG,
            VG = null !== (UG = SG[YG + 2]) && void 0 !== UG ? UG : wG;
          LG.push({
            ...GG,
            ...ZG(bG.post, bG.timeFraction, GG.post, GG.timeFraction, wG.pre, wG.timeFraction, VG.pre, VG.timeFraction)
          })
        }
        return LG
      }
      createAnimationFrameWithoutPrecomputes(GG, bG, ZG) {
        let wG, SG, LG = null;
        var yG;
        if ("object" === typeof bG && "point" in bG) LG = null !== (yG = bG.Bw) && void 0 !== yG ? yG : null, wG = bG.point, SG = bG.point;
        else if ("object" === typeof bG && "pre" in bG) {
          var kG;
          LG = null !== (kG = bG.Bw) && void 0 !== kG ? kG : null, wG = bG.pre, SG = bG.post
        } else wG = bG, SG = bG;
        return {
          timeFraction: GG,
          Bw: this.createLerpMode(LG),
          pre: ZG(wG),
          post: ZG(SG)
        }
      }
      createLerpMode(GG) {
        return null === GG ? wG.l.Linear : YG.LERP_MODE_SCHEMA_MAPPING[GG]
      }
    }
    YG.LERP_MODE_SCHEMA_MAPPING = {
      linear: wG.l.Linear,
      "catmull-rom-spline": wG.l.CatmullRomSpline
    };
    class VG {
      constructor(GG) {
        this.animationSchema = GG
      }
      createAnimationScript() {
        const {
          animation_length: GG,
          loop: bG,
          bones: ZG
        } = this.animationSchema;
        return {
          tw: Math.round(1e3 * GG),
          Dw: this.createLoopMode(null !== bG && void 0 !== bG && bG),
          Nw: this.createNodeSkeletonAnimationScript(null !== ZG && void 0 !== ZG ? ZG : null)
        }
      }
      createLoopMode(GG) {
        switch (GG) {
          case !1:
            return wG.n.NoLoop;
          case !0:
            return wG.n.LoopOnLastFrame;
          case "hold_on_last_frame":
            return wG.n.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${GG}`)
      }
      createNodeSkeletonAnimationScript(GG) {
        if (null === GG) return null;
        const bG = {};
        for (const ZG in GG) {
          const wG = GG[ZG];
          bG[ZG] = this.createNodeAnimationScript(wG)
        }
        return bG
      }
      createNodeAnimationScript(GG) {
        const {
          rotation: bG,
          position: ZG,
          scale: wG
        } = GG;
        return {
          rotation: this.createAnimationTimeline(null !== bG && void 0 !== bG ? bG : null, zG, QG, !0),
          position: this.createAnimationTimeline(null !== ZG && void 0 !== ZG ? ZG : null, oG, hG, !1),
          scale: this.createAnimationTimeline(null !== wG && void 0 !== wG ? wG : null, dG, hG, !1)
        }
      }
      createAnimationTimeline(GG, bG, ZG, wG) {
        if (null === GG) return [];
        (Array.isArray(GG) || "number" === typeof GG) && (GG = {
          "0.0": GG
        });
        const SG = Object.entries(GG).map((GG => {
          let [ZG, wG] = GG;
          const SG = Number(ZG) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(SG, wG, bG)
        })).filter(pG);
        SG.sort(((GG, bG) => GG.timeFraction - bG.timeFraction)), wG && function(GG) {
          for (let bG = 1; bG < GG.length; bG++) {
            const ZG = GG[bG - 1].post,
              wG = GG[bG],
              SG = XG(wG.pre),
              LG = XG(wG.post),
              yG = iG(ZG, wG.pre);
            iG(ZG, SG) < yG && (GG[bG] = {
              ...wG,
              pre: SG,
              post: LG
            })
          }
        }(SG);
        const LG = [];
        for (let YG = 0; YG < SG.length; YG++) {
          var yG, kG, UG;
          const GG = SG[YG],
            bG = null !== (yG = SG[YG - 1]) && void 0 !== yG ? yG : GG,
            wG = null !== (kG = SG[YG + 1]) && void 0 !== kG ? kG : GG,
            VG = null !== (UG = SG[YG + 2]) && void 0 !== UG ? UG : wG;
          LG.push({
            ...GG,
            ...ZG(bG.post, bG.timeFraction, GG.post, GG.timeFraction, wG.pre, wG.timeFraction, VG.pre, VG.timeFraction)
          })
        }
        return LG
      }
      createAnimationFrameWithoutPrecomputes(GG, bG, ZG) {
        let wG, SG, LG = null;
        if ("object" === typeof bG && "post" in bG) {
          var yG;
          LG = null !== (yG = bG.lerp_mode) && void 0 !== yG ? yG : null, SG = ZG(bG.post), wG = void 0 !== bG.pre ? ZG(bG.pre) : SG
        } else {
          const GG = ZG(bG);
          SG = GG, wG = GG
        }
        return {
          timeFraction: GG,
          Bw: this.createLerpMode(LG),
          pre: wG,
          post: SG
        }
      }
      createLerpMode(GG) {
        return null === GG ? wG.l.Linear : VG.LERP_MODE_SCHEMA_MAPPING[GG]
      }
    }

    function pG(GG) {
      return Number.isFinite(GG.timeFraction) && fG(GG.pre) && fG(GG.post)
    }

    function fG(GG) {
      return Number.isFinite(GG[0]) && Number.isFinite(GG[1]) && Number.isFinite(GG[2])
    }

    function QG(GG, bG, ZG, wG, SG, LG, yG, kG) {
      const UG = LG - bG,
        YG = LG - wG,
        VG = kG - wG,
        pG = [null, null, null];
      for (let fG = 0; fG < pG.length; fG++) pG[fG] = KG(GG[fG], ZG[fG], SG[fG], yG[fG], UG, VG);
      return {
        GS: YG,
        bS: pG
      }
    }

    function KG(GG, bG, ZG, wG, LG, yG) {
      return {
        wS: SG.c.computeShortestRotation(GG, ZG) / LG,
        SS: SG.c.computeShortestRotation(bG, wG) / yG,
        delta: SG.c.computeShortestRotation(bG, ZG)
      }
    }

    function hG(GG, bG, ZG, wG, SG, LG, yG, kG) {
      const UG = LG - bG,
        YG = LG - wG,
        VG = kG - wG,
        pG = [null, null, null];
      for (let fG = 0; fG < pG.length; fG++) pG[fG] = {
        wS: (SG[fG] - GG[fG]) / UG,
        SS: (yG[fG] - ZG[fG]) / VG,
        delta: SG[fG] - ZG[fG]
      };
      return {
        GS: YG,
        bS: pG
      }
    }

    function dG(GG) {
      return JG("number" === typeof GG ? [GG, GG, GG] : GG)
    }

    function JG(GG) {
      return [rG(GG[0]), rG(GG[1]), rG(GG[2])]
    }

    function rG(GG) {
      return Number.isFinite(GG) ? Math.min(yG.i, Math.max(-yG.i, GG)) : GG
    }

    function zG(GG) {
      const [bG, ZG, wG] = GG, yG = -(0, LG.j)(bG), kG = -(0, LG.j)(ZG), UG = (0, LG.j)(wG), YG = SG.c.quaternionFromEulerZYX(yG, kG, UG);
      return SG.c.eulerYXZFromQuaternion(YG)
    }
    VG.LERP_MODE_SCHEMA_MAPPING = {
      linear: wG.l.Linear,
      catmullrom: wG.l.CatmullRomSpline
    };
    const EG = 1 / 16;

    function oG(GG) {
      return [-GG[0] * EG, GG[1] * EG, GG[2] * EG]
    }

    function XG(GG) {
      const [bG, ZG, wG] = GG;
      return [bG >= 0 ? Math.PI - bG : -Math.PI - bG, uG(ZG + Math.PI), uG(wG + Math.PI)]
    }

    function uG(GG) {
      return SG.c.mod(GG + Math.PI, 2 * Math.PI) - Math.PI
    }

    function iG(GG, bG) {
      return Math.abs(SG.c.computeShortestRotation(GG[0], bG[0])) + Math.abs(SG.c.computeShortestRotation(GG[1], bG[1])) + Math.abs(SG.c.computeShortestRotation(GG[2], bG[2]))
    }
    const CG = new YG
  },
  37491: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => yG,
      h: () => LG,
      l: () => wG,
      n: () => SG
    });
    let wG = function(GG) {
        return GG[GG.Linear = 0] = "Linear", GG[GG.CatmullRomSpline = 1] = "CatmullRomSpline", GG
      }({}),
      SG = function(GG) {
        return GG[GG.NoLoop = 0] = "NoLoop", GG[GG.LoopOnLastFrame = 1] = "LoopOnLastFrame", GG[GG.HoldOnLastFrame = 2] = "HoldOnLastFrame", GG
      }({}),
      LG = function(GG) {
        return GG[GG.Movement = 0] = "Movement", GG[GG.Action = 1] = "Action", GG[GG.Emote = 2] = "Emote", GG[GG.Custom = 3] = "Custom", GG
      }({}),
      yG = function(GG) {
        return GG[GG.Start = 0] = "Start", GG[GG.Stop = 1] = "Stop", GG
      }({})
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);