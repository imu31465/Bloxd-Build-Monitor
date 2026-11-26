export const id = 261;
export const ids = [261];
export const modules = {
  38032: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => tH,
      g: () => hH,
      h: () => rH
    });
    const AH = 1024,
      rH = 16,
      SH = 36e4;
    class hH {
      constructor(HH) {
        this.boneCount = HH, this.rotation = void 0, this.position = void 0, this.scale = void 0, this.touched = void 0, this.rotation = new Float64Array(3 * HH), this.position = new Float64Array(3 * HH), this.scale = new Float64Array(3 * HH).fill(1), this.touched = new Uint8Array(HH)
      }
      clampToLimits() {
        for (let HH = 0; HH < this.boneCount; HH++)
          if (0 !== this.touched[HH])
            for (let BH = 3 * HH; BH < 3 * HH + 3; BH++) {
              const HH = this.rotation[BH],
                LH = this.position[BH],
                hH = this.scale[BH];
              HH >= -36e4 && HH <= SH || (this.rotation[BH] = zH(HH, SH)), LH >= -1024 && LH <= AH || (this.position[BH] = zH(LH, AH)), hH >= -rH && hH <= rH || (this.scale[BH] = zH(hH, rH, 1))
            }
      }
      reset() {
        for (let HH = 0; HH < this.boneCount; HH++)
          if (0 !== this.touched[HH]) {
            this.touched[HH] = 0;
            for (let BH = 3 * HH; BH < 3 * HH + 3; BH++) this.rotation[BH] = 0, this.position[BH] = 0, this.scale[BH] = 1
          }
      }
    }
    class tH {
      constructor(HH) {
        this.rotation = void 0, this.position = void 0, this.scaleDelta = void 0, this.boneWeight = void 0, this.touched = void 0, this.overrides = void 0, this.touchedBones = void 0, this.touchedCount = 0, this.rotation = new Float64Array(3 * HH), this.position = new Float64Array(3 * HH), this.scaleDelta = new Float64Array(3 * HH), this.boneWeight = new Float64Array(HH), this.touched = new Uint8Array(HH), this.overrides = new Uint8Array(HH), this.touchedBones = new Int32Array(HH)
      }
      touch(HH, BH, LH) {
        0 === this.touched[HH] && (this.touched[HH] = 1, this.touchedBones[this.touchedCount++] = HH), this.boneWeight[HH] += BH, LH && (this.overrides[HH] = 1)
      }
      applyTo(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        for (let rH = 0; rH < this.touchedCount; rH++) {
          const SH = this.touchedBones[rH],
            hH = this.boneWeight[SH];
          if (LH || 1 === this.overrides[SH]) {
            const LH = BH * Math.min(1, hH);
            for (let BH = 3 * SH; BH < 3 * SH + 3; BH++) HH.rotation[BH] += (this.rotation[BH] / hH - HH.rotation[BH]) * LH, HH.position[BH] += (this.position[BH] / hH - HH.position[BH]) * LH, HH.scale[BH] += (1 + this.scaleDelta[BH] / hH - HH.scale[BH]) * LH
          } else {
            const LH = AH && hH > 1 ? BH / hH : BH;
            for (let BH = 3 * SH; BH < 3 * SH + 3; BH++) HH.rotation[BH] += this.rotation[BH] * LH, HH.position[BH] += this.position[BH] * LH, HH.scale[BH] *= 1 + this.scaleDelta[BH] * LH
          }
          HH.touched[SH] = 1
        }
      }
      clear() {
        for (let HH = 0; HH < this.touchedCount; HH++) {
          const BH = this.touchedBones[HH];
          this.touched[BH] = 0, this.overrides[BH] = 0, this.boneWeight[BH] = 0;
          for (let HH = 3 * BH; HH < 3 * BH + 3; HH++) this.rotation[HH] = 0, this.position[HH] = 0, this.scaleDelta[HH] = 0
        }
        this.touchedCount = 0
      }
    }

    function zH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      return Number.isNaN(HH) ? LH : Math.min(BH, Math.max(-BH, HH))
    }
  },
  38029: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => zH,
      h: () => tH
    });
    var AH = LH(38020),
      rH = LH(317),
      SH = LH(1962),
      hH = LH(38032);

    function tH(HH) {
      if ("kB" in HH) return bH.createAnimationScript(HH);
      return new EH(HH).createAnimationScript()
    }

    function zH(HH, BH, LH, rH) {
      const SH = HH.kB <= 0 ? 1 : BH + LH * Math.max(0, rH) / HH.kB;
      return HH.mB === AH.m.LoopOnLastFrame ? SH % 1 : HH.mB === AH.m.NoLoop && SH >= 1 ? null : Math.min(1, SH)
    }
    class CH {
      createAnimationScript(HH) {
        const {
          kB: BH,
          loop: LH,
          oB: AH
        } = HH;
        return {
          kB: Math.round(BH),
          mB: this.createLoopMode(null !== LH && void 0 !== LH && LH),
          oB: this.createNodeSkeletonAnimationScript(null !== AH && void 0 !== AH ? AH : null)
        }
      }
      createLoopMode(HH) {
        switch (HH) {
          case !1:
            return AH.m.NoLoop;
          case !0:
            return AH.m.LoopOnLastFrame;
          case "hold-on-last-frame":
            return AH.m.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${HH}`)
      }
      createNodeSkeletonAnimationScript(HH) {
        if (null === HH) return null;
        const BH = {};
        for (const LH in HH) {
          const AH = HH[LH];
          BH[LH] = this.createNodeAnimationScript(AH)
        }
        return BH
      }
      createNodeAnimationScript(HH) {
        const {
          timeline: BH
        } = HH, LH = BH.filter((HH => Number.isFinite(HH.timeFraction)));
        return LH.sort(((HH, BH) => HH.timeFraction - BH.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(LH, "rotation", YH),
          position: this.createTimelineFromKeyframes(LH, "position", QH),
          scale: this.createTimelineFromKeyframes(LH, "scale", QH, MH)
        }
      }
      createTimelineFromKeyframes(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : HH => HH;
        const rH = [];
        for (const CH of HH) {
          const HH = CH[BH];
          if (HH) {
            const BH = this.createAnimationFrameWithoutPrecomputes(CH.timeFraction, HH, AH);
            XH(BH) && rH.push(BH)
          }
        }
        const SH = [];
        for (let CH = 0; CH < rH.length; CH++) {
          var hH, tH, zH;
          const HH = rH[CH],
            BH = null !== (hH = rH[CH - 1]) && void 0 !== hH ? hH : HH,
            AH = null !== (tH = rH[CH + 1]) && void 0 !== tH ? tH : HH,
            EH = null !== (zH = rH[CH + 2]) && void 0 !== zH ? zH : AH;
          SH.push({
            ...HH,
            ...LH(BH.post, BH.timeFraction, HH.post, HH.timeFraction, AH.pre, AH.timeFraction, EH.pre, EH.timeFraction)
          })
        }
        return SH
      }
      createAnimationFrameWithoutPrecomputes(HH, BH, LH) {
        let AH, rH, SH = null;
        var hH;
        if ("object" === typeof BH && "point" in BH) SH = null !== (hH = BH.lB) && void 0 !== hH ? hH : null, AH = BH.point, rH = BH.point;
        else if ("object" === typeof BH && "pre" in BH) {
          var tH;
          SH = null !== (tH = BH.lB) && void 0 !== tH ? tH : null, AH = BH.pre, rH = BH.post
        } else AH = BH, rH = BH;
        return {
          timeFraction: HH,
          lB: this.createLerpMode(SH),
          pre: LH(AH),
          post: LH(rH)
        }
      }
      createLerpMode(HH) {
        return null === HH ? AH.j.Linear : CH.LERP_MODE_SCHEMA_MAPPING[HH]
      }
    }
    CH.LERP_MODE_SCHEMA_MAPPING = {
      linear: AH.j.Linear,
      "catmull-rom-spline": AH.j.CatmullRomSpline
    };
    class EH {
      constructor(HH) {
        this.animationSchema = HH
      }
      createAnimationScript() {
        const {
          animation_length: HH,
          loop: BH,
          bones: LH
        } = this.animationSchema;
        return {
          kB: Math.round(1e3 * HH),
          mB: this.createLoopMode(null !== BH && void 0 !== BH && BH),
          oB: this.createNodeSkeletonAnimationScript(null !== LH && void 0 !== LH ? LH : null)
        }
      }
      createLoopMode(HH) {
        switch (HH) {
          case !1:
            return AH.m.NoLoop;
          case !0:
            return AH.m.LoopOnLastFrame;
          case "hold_on_last_frame":
            return AH.m.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${HH}`)
      }
      createNodeSkeletonAnimationScript(HH) {
        if (null === HH) return null;
        const BH = {};
        for (const LH in HH) {
          const AH = HH[LH];
          BH[LH] = this.createNodeAnimationScript(AH)
        }
        return BH
      }
      createNodeAnimationScript(HH) {
        const {
          rotation: BH,
          position: LH,
          scale: AH
        } = HH;
        return {
          rotation: this.createAnimationTimeline(null !== BH && void 0 !== BH ? BH : null, vH, YH, !0),
          position: this.createAnimationTimeline(null !== LH && void 0 !== LH ? LH : null, TH, QH, !1),
          scale: this.createAnimationTimeline(null !== AH && void 0 !== AH ? AH : null, WH, QH, !1)
        }
      }
      createAnimationTimeline(HH, BH, LH, AH) {
        if (null === HH) return [];
        (Array.isArray(HH) || "number" === typeof HH) && (HH = {
          "0.0": HH
        });
        const rH = Object.entries(HH).map((HH => {
          let [LH, AH] = HH;
          const rH = Number(LH) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(rH, AH, BH)
        })).filter(XH);
        rH.sort(((HH, BH) => HH.timeFraction - BH.timeFraction)), AH && function(HH) {
          for (let BH = 1; BH < HH.length; BH++) {
            const LH = HH[BH - 1].post,
              AH = HH[BH],
              rH = UH(AH.pre),
              SH = UH(AH.post),
              hH = OH(LH, AH.pre);
            OH(LH, rH) < hH && (HH[BH] = {
              ...AH,
              pre: rH,
              post: SH
            })
          }
        }(rH);
        const SH = [];
        for (let CH = 0; CH < rH.length; CH++) {
          var hH, tH, zH;
          const HH = rH[CH],
            BH = null !== (hH = rH[CH - 1]) && void 0 !== hH ? hH : HH,
            AH = null !== (tH = rH[CH + 1]) && void 0 !== tH ? tH : HH,
            EH = null !== (zH = rH[CH + 2]) && void 0 !== zH ? zH : AH;
          SH.push({
            ...HH,
            ...LH(BH.post, BH.timeFraction, HH.post, HH.timeFraction, AH.pre, AH.timeFraction, EH.pre, EH.timeFraction)
          })
        }
        return SH
      }
      createAnimationFrameWithoutPrecomputes(HH, BH, LH) {
        let AH, rH, SH = null;
        if ("object" === typeof BH && "post" in BH) {
          var hH;
          SH = null !== (hH = BH.lerp_mode) && void 0 !== hH ? hH : null, rH = LH(BH.post), AH = void 0 !== BH.pre ? LH(BH.pre) : rH
        } else {
          const HH = LH(BH);
          rH = HH, AH = HH
        }
        return {
          timeFraction: HH,
          lB: this.createLerpMode(SH),
          pre: AH,
          post: rH
        }
      }
      createLerpMode(HH) {
        return null === HH ? AH.j.Linear : EH.LERP_MODE_SCHEMA_MAPPING[HH]
      }
    }

    function XH(HH) {
      return Number.isFinite(HH.timeFraction) && GH(HH.pre) && GH(HH.post)
    }

    function GH(HH) {
      return Number.isFinite(HH[0]) && Number.isFinite(HH[1]) && Number.isFinite(HH[2])
    }

    function YH(HH, BH, LH, AH, rH, SH, hH, tH) {
      const zH = SH - BH,
        CH = SH - AH,
        EH = tH - AH,
        XH = [null, null, null];
      for (let GH = 0; GH < XH.length; GH++) XH[GH] = uH(HH[GH], LH[GH], rH[GH], hH[GH], zH, EH);
      return {
        cB: CH,
        eB: XH
      }
    }

    function uH(HH, BH, LH, AH, SH, hH) {
      return {
        gB: rH.d.computeShortestRotation(HH, LH) / SH,
        NB: rH.d.computeShortestRotation(BH, AH) / hH,
        delta: rH.d.computeShortestRotation(BH, LH)
      }
    }

    function QH(HH, BH, LH, AH, rH, SH, hH, tH) {
      const zH = SH - BH,
        CH = SH - AH,
        EH = tH - AH,
        XH = [null, null, null];
      for (let GH = 0; GH < XH.length; GH++) XH[GH] = {
        gB: (rH[GH] - HH[GH]) / zH,
        NB: (hH[GH] - LH[GH]) / EH,
        delta: rH[GH] - LH[GH]
      };
      return {
        cB: CH,
        eB: XH
      }
    }

    function WH(HH) {
      return MH("number" === typeof HH ? [HH, HH, HH] : HH)
    }

    function MH(HH) {
      return [xH(HH[0]), xH(HH[1]), xH(HH[2])]
    }

    function xH(HH) {
      return Number.isFinite(HH) ? Math.min(hH.h, Math.max(-hH.h, HH)) : HH
    }

    function vH(HH) {
      const [BH, LH, AH] = HH, hH = -(0, SH.h)(BH), tH = -(0, SH.h)(LH), zH = (0, SH.h)(AH), CH = rH.d.quaternionFromEulerZYX(hH, tH, zH);
      return rH.d.eulerYXZFromQuaternion(CH)
    }
    EH.LERP_MODE_SCHEMA_MAPPING = {
      linear: AH.j.Linear,
      catmullrom: AH.j.CatmullRomSpline
    };
    const PH = 1 / 16;

    function TH(HH) {
      return [-HH[0] * PH, HH[1] * PH, HH[2] * PH]
    }

    function UH(HH) {
      const [BH, LH, AH] = HH;
      return [BH >= 0 ? Math.PI - BH : -Math.PI - BH, VH(LH + Math.PI), VH(AH + Math.PI)]
    }

    function VH(HH) {
      return rH.d.mod(HH + Math.PI, 2 * Math.PI) - Math.PI
    }

    function OH(HH, BH) {
      return Math.abs(rH.d.computeShortestRotation(HH[0], BH[0])) + Math.abs(rH.d.computeShortestRotation(HH[1], BH[1])) + Math.abs(rH.d.computeShortestRotation(HH[2], BH[2]))
    }
    const bH = new CH
  },
  38020: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => hH,
      g: () => SH,
      j: () => AH,
      m: () => rH
    });
    let AH = function(HH) {
        return HH[HH.Linear = 0] = "Linear", HH[HH.CatmullRomSpline = 1] = "CatmullRomSpline", HH
      }({}),
      rH = function(HH) {
        return HH[HH.NoLoop = 0] = "NoLoop", HH[HH.LoopOnLastFrame = 1] = "LoopOnLastFrame", HH[HH.HoldOnLastFrame = 2] = "HoldOnLastFrame", HH
      }({}),
      SH = function(HH) {
        return HH[HH.Movement = 0] = "Movement", HH[HH.Action = 1] = "Action", HH[HH.Emote = 2] = "Emote", HH[HH.Custom = 3] = "Custom", HH
      }({}),
      hH = function(HH) {
        return HH[HH.Start = 0] = "Start", HH[HH.Stop = 1] = "Stop", HH
      }({})
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);