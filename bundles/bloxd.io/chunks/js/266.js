export const id = 266;
export const ids = [266];
export const modules = {
  38323: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => LW,
      g: () => PW,
      i: () => EW
    });
    const mW = 1024,
      EW = 16,
      NW = 36e4;
    class PW {
      constructor(WW) {
        this.boneCount = WW, this.rotation = void 0, this.position = void 0, this.scale = void 0, this.touched = void 0, this.rotation = new Float64Array(3 * WW), this.position = new Float64Array(3 * WW), this.scale = new Float64Array(3 * WW).fill(1), this.touched = new Uint8Array(WW)
      }
      clampToLimits() {
        for (let WW = 0; WW < this.boneCount; WW++)
          if (0 !== this.touched[WW])
            for (let iW = 3 * WW; iW < 3 * WW + 3; iW++) {
              const WW = this.rotation[iW],
                OW = this.position[iW],
                PW = this.scale[iW];
              WW >= -36e4 && WW <= NW || (this.rotation[iW] = cW(WW, NW)), OW >= -1024 && OW <= mW || (this.position[iW] = cW(OW, mW)), PW >= -EW && PW <= EW || (this.scale[iW] = cW(PW, EW, 1))
            }
      }
      reset() {
        for (let WW = 0; WW < this.boneCount; WW++)
          if (0 !== this.touched[WW]) {
            this.touched[WW] = 0;
            for (let iW = 3 * WW; iW < 3 * WW + 3; iW++) this.rotation[iW] = 0, this.position[iW] = 0, this.scale[iW] = 1
          }
      }
    }
    class LW {
      constructor(WW) {
        this.rotation = void 0, this.position = void 0, this.scaleDelta = void 0, this.boneWeight = void 0, this.touched = void 0, this.overrides = void 0, this.touchedBones = void 0, this.touchedCount = 0, this.rotation = new Float64Array(3 * WW), this.position = new Float64Array(3 * WW), this.scaleDelta = new Float64Array(3 * WW), this.boneWeight = new Float64Array(WW), this.touched = new Uint8Array(WW), this.overrides = new Uint8Array(WW), this.touchedBones = new Int32Array(WW)
      }
      touch(WW, iW, OW) {
        0 === this.touched[WW] && (this.touched[WW] = 1, this.touchedBones[this.touchedCount++] = WW), this.boneWeight[WW] += iW, OW && (this.overrides[WW] = 1)
      }
      applyTo(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        for (let EW = 0; EW < this.touchedCount; EW++) {
          const NW = this.touchedBones[EW],
            PW = this.boneWeight[NW];
          if (OW || 1 === this.overrides[NW]) {
            const OW = iW * Math.min(1, PW);
            for (let iW = 3 * NW; iW < 3 * NW + 3; iW++) WW.rotation[iW] += (this.rotation[iW] / PW - WW.rotation[iW]) * OW, WW.position[iW] += (this.position[iW] / PW - WW.position[iW]) * OW, WW.scale[iW] += (1 + this.scaleDelta[iW] / PW - WW.scale[iW]) * OW
          } else {
            const OW = mW && PW > 1 ? iW / PW : iW;
            for (let iW = 3 * NW; iW < 3 * NW + 3; iW++) WW.rotation[iW] += this.rotation[iW] * OW, WW.position[iW] += this.position[iW] * OW, WW.scale[iW] *= 1 + this.scaleDelta[iW] * OW
          }
          WW.touched[NW] = 1
        }
      }
      clear() {
        for (let WW = 0; WW < this.touchedCount; WW++) {
          const iW = this.touchedBones[WW];
          this.touched[iW] = 0, this.overrides[iW] = 0, this.boneWeight[iW] = 0;
          for (let WW = 3 * iW; WW < 3 * iW + 3; WW++) this.rotation[WW] = 0, this.position[WW] = 0, this.scaleDelta[WW] = 0
        }
        this.touchedCount = 0
      }
    }

    function cW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      return Number.isNaN(WW) ? OW : Math.min(iW, Math.max(-iW, WW))
    }
  },
  38320: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => cW,
      h: () => LW
    });
    var mW = OW(38307),
      EW = OW(344),
      NW = OW(2012),
      PW = OW(38323);

    function LW(WW) {
      if ("kO" in WW) return TW.createAnimationScript(WW);
      return new tW(WW).createAnimationScript()
    }

    function cW(WW, iW, OW, EW) {
      const NW = WW.kO <= 0 ? 1 : iW + OW * Math.max(0, EW) / WW.kO;
      return WW.sO === mW.i.LoopOnLastFrame ? NW % 1 : WW.sO === mW.i.NoLoop && NW >= 1 ? null : Math.min(1, NW)
    }
    class wW {
      createAnimationScript(WW) {
        const {
          kO: iW,
          loop: OW,
          MO: mW
        } = WW;
        return {
          kO: Math.round(iW),
          sO: this.createLoopMode(null !== OW && void 0 !== OW && OW),
          MO: this.createNodeSkeletonAnimationScript(null !== mW && void 0 !== mW ? mW : null)
        }
      }
      createLoopMode(WW) {
        switch (WW) {
          case !1:
            return mW.i.NoLoop;
          case !0:
            return mW.i.LoopOnLastFrame;
          case "hold-on-last-frame":
            return mW.i.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${WW}`)
      }
      createNodeSkeletonAnimationScript(WW) {
        if (null === WW) return null;
        const iW = {};
        for (const OW in WW) {
          const mW = WW[OW];
          iW[OW] = this.createNodeAnimationScript(mW)
        }
        return iW
      }
      createNodeAnimationScript(WW) {
        const {
          timeline: iW
        } = WW, OW = iW.filter((WW => Number.isFinite(WW.timeFraction)));
        return OW.sort(((WW, iW) => WW.timeFraction - iW.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(OW, "rotation", lW),
          position: this.createTimelineFromKeyframes(OW, "position", bW),
          scale: this.createTimelineFromKeyframes(OW, "scale", bW, UW)
        }
      }
      createTimelineFromKeyframes(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : WW => WW;
        const EW = [];
        for (const wW of WW) {
          const WW = wW[iW];
          if (WW) {
            const iW = this.createAnimationFrameWithoutPrecomputes(wW.timeFraction, WW, mW);
            ZW(iW) && EW.push(iW)
          }
        }
        const NW = [];
        for (let wW = 0; wW < EW.length; wW++) {
          var PW, LW, cW;
          const WW = EW[wW],
            iW = null !== (PW = EW[wW - 1]) && void 0 !== PW ? PW : WW,
            mW = null !== (LW = EW[wW + 1]) && void 0 !== LW ? LW : WW,
            tW = null !== (cW = EW[wW + 2]) && void 0 !== cW ? cW : mW;
          NW.push({
            ...WW,
            ...OW(iW.post, iW.timeFraction, WW.post, WW.timeFraction, mW.pre, mW.timeFraction, tW.pre, tW.timeFraction)
          })
        }
        return NW
      }
      createAnimationFrameWithoutPrecomputes(WW, iW, OW) {
        let mW, EW, NW = null;
        var PW;
        if ("object" === typeof iW && "point" in iW) NW = null !== (PW = iW.YO) && void 0 !== PW ? PW : null, mW = iW.point, EW = iW.point;
        else if ("object" === typeof iW && "pre" in iW) {
          var LW;
          NW = null !== (LW = iW.YO) && void 0 !== LW ? LW : null, mW = iW.pre, EW = iW.post
        } else mW = iW, EW = iW;
        return {
          timeFraction: WW,
          YO: this.createLerpMode(NW),
          pre: OW(mW),
          post: OW(EW)
        }
      }
      createLerpMode(WW) {
        return null === WW ? mW.f.Linear : wW.LERP_MODE_SCHEMA_MAPPING[WW]
      }
    }
    wW.LERP_MODE_SCHEMA_MAPPING = {
      linear: mW.f.Linear,
      "catmull-rom-spline": mW.f.CatmullRomSpline
    };
    class tW {
      constructor(WW) {
        this.animationSchema = WW
      }
      createAnimationScript() {
        const {
          animation_length: WW,
          loop: iW,
          bones: OW
        } = this.animationSchema;
        return {
          kO: Math.round(1e3 * WW),
          sO: this.createLoopMode(null !== iW && void 0 !== iW && iW),
          MO: this.createNodeSkeletonAnimationScript(null !== OW && void 0 !== OW ? OW : null)
        }
      }
      createLoopMode(WW) {
        switch (WW) {
          case !1:
            return mW.i.NoLoop;
          case !0:
            return mW.i.LoopOnLastFrame;
          case "hold_on_last_frame":
            return mW.i.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${WW}`)
      }
      createNodeSkeletonAnimationScript(WW) {
        if (null === WW) return null;
        const iW = {};
        for (const OW in WW) {
          const mW = WW[OW];
          iW[OW] = this.createNodeAnimationScript(mW)
        }
        return iW
      }
      createNodeAnimationScript(WW) {
        const {
          rotation: iW,
          position: OW,
          scale: mW
        } = WW;
        return {
          rotation: this.createAnimationTimeline(null !== iW && void 0 !== iW ? iW : null, sW, lW, !0),
          position: this.createAnimationTimeline(null !== OW && void 0 !== OW ? OW : null, KW, bW, !1),
          scale: this.createAnimationTimeline(null !== mW && void 0 !== mW ? mW : null, jW, bW, !1)
        }
      }
      createAnimationTimeline(WW, iW, OW, mW) {
        if (null === WW) return [];
        (Array.isArray(WW) || "number" === typeof WW) && (WW = {
          "0.0": WW
        });
        const EW = Object.entries(WW).map((WW => {
          let [OW, mW] = WW;
          const EW = Number(OW) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(EW, mW, iW)
        })).filter(ZW);
        EW.sort(((WW, iW) => WW.timeFraction - iW.timeFraction)), mW && function(WW) {
          for (let iW = 1; iW < WW.length; iW++) {
            const OW = WW[iW - 1].post,
              mW = WW[iW],
              EW = SW(mW.pre),
              NW = SW(mW.post),
              PW = yW(OW, mW.pre);
            yW(OW, EW) < PW && (WW[iW] = {
              ...mW,
              pre: EW,
              post: NW
            })
          }
        }(EW);
        const NW = [];
        for (let wW = 0; wW < EW.length; wW++) {
          var PW, LW, cW;
          const WW = EW[wW],
            iW = null !== (PW = EW[wW - 1]) && void 0 !== PW ? PW : WW,
            mW = null !== (LW = EW[wW + 1]) && void 0 !== LW ? LW : WW,
            tW = null !== (cW = EW[wW + 2]) && void 0 !== cW ? cW : mW;
          NW.push({
            ...WW,
            ...OW(iW.post, iW.timeFraction, WW.post, WW.timeFraction, mW.pre, mW.timeFraction, tW.pre, tW.timeFraction)
          })
        }
        return NW
      }
      createAnimationFrameWithoutPrecomputes(WW, iW, OW) {
        let mW, EW, NW = null;
        if ("object" === typeof iW && "post" in iW) {
          var PW;
          NW = null !== (PW = iW.lerp_mode) && void 0 !== PW ? PW : null, EW = OW(iW.post), mW = void 0 !== iW.pre ? OW(iW.pre) : EW
        } else {
          const WW = OW(iW);
          EW = WW, mW = WW
        }
        return {
          timeFraction: WW,
          YO: this.createLerpMode(NW),
          pre: mW,
          post: EW
        }
      }
      createLerpMode(WW) {
        return null === WW ? mW.f.Linear : tW.LERP_MODE_SCHEMA_MAPPING[WW]
      }
    }

    function ZW(WW) {
      return Number.isFinite(WW.timeFraction) && xW(WW.pre) && xW(WW.post)
    }

    function xW(WW) {
      return Number.isFinite(WW[0]) && Number.isFinite(WW[1]) && Number.isFinite(WW[2])
    }

    function lW(WW, iW, OW, mW, EW, NW, PW, LW) {
      const cW = NW - iW,
        wW = NW - mW,
        tW = LW - mW,
        ZW = [null, null, null];
      for (let xW = 0; xW < ZW.length; xW++) ZW[xW] = AW(WW[xW], OW[xW], EW[xW], PW[xW], cW, tW);
      return {
        yO: wW,
        JO: ZW
      }
    }

    function AW(WW, iW, OW, mW, NW, PW) {
      return {
        HO: EW.e.computeShortestRotation(WW, OW) / NW,
        nO: EW.e.computeShortestRotation(iW, mW) / PW,
        delta: EW.e.computeShortestRotation(iW, OW)
      }
    }

    function bW(WW, iW, OW, mW, EW, NW, PW, LW) {
      const cW = NW - iW,
        wW = NW - mW,
        tW = LW - mW,
        ZW = [null, null, null];
      for (let xW = 0; xW < ZW.length; xW++) ZW[xW] = {
        HO: (EW[xW] - WW[xW]) / cW,
        nO: (PW[xW] - OW[xW]) / tW,
        delta: EW[xW] - OW[xW]
      };
      return {
        yO: wW,
        JO: ZW
      }
    }

    function jW(WW) {
      return UW("number" === typeof WW ? [WW, WW, WW] : WW)
    }

    function UW(WW) {
      return [kW(WW[0]), kW(WW[1]), kW(WW[2])]
    }

    function kW(WW) {
      return Number.isFinite(WW) ? Math.min(PW.i, Math.max(-PW.i, WW)) : WW
    }

    function sW(WW) {
      const [iW, OW, mW] = WW, PW = -(0, NW.i)(iW), LW = -(0, NW.i)(OW), cW = (0, NW.i)(mW), wW = EW.e.quaternionFromEulerZYX(PW, LW, cW);
      return EW.e.eulerYXZFromQuaternion(wW)
    }
    tW.LERP_MODE_SCHEMA_MAPPING = {
      linear: mW.f.Linear,
      catmullrom: mW.f.CatmullRomSpline
    };
    const MW = 1 / 16;

    function KW(WW) {
      return [-WW[0] * MW, WW[1] * MW, WW[2] * MW]
    }

    function SW(WW) {
      const [iW, OW, mW] = WW;
      return [iW >= 0 ? Math.PI - iW : -Math.PI - iW, YW(OW + Math.PI), YW(mW + Math.PI)]
    }

    function YW(WW) {
      return EW.e.mod(WW + Math.PI, 2 * Math.PI) - Math.PI
    }

    function yW(WW, iW) {
      return Math.abs(EW.e.computeShortestRotation(WW[0], iW[0])) + Math.abs(EW.e.computeShortestRotation(WW[1], iW[1])) + Math.abs(EW.e.computeShortestRotation(WW[2], iW[2]))
    }
    const TW = new wW
  },
  38307: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => PW,
      d: () => NW,
      f: () => mW,
      i: () => EW
    });
    let mW = function(WW) {
        return WW[WW.Linear = 0] = "Linear", WW[WW.CatmullRomSpline = 1] = "CatmullRomSpline", WW
      }({}),
      EW = function(WW) {
        return WW[WW.NoLoop = 0] = "NoLoop", WW[WW.LoopOnLastFrame = 1] = "LoopOnLastFrame", WW[WW.HoldOnLastFrame = 2] = "HoldOnLastFrame", WW
      }({}),
      NW = function(WW) {
        return WW[WW.Movement = 0] = "Movement", WW[WW.Action = 1] = "Action", WW[WW.Emote = 2] = "Emote", WW[WW.Custom = 3] = "Custom", WW
      }({}),
      PW = function(WW) {
        return WW[WW.Start = 0] = "Start", WW[WW.Stop = 1] = "Stop", WW
      }({})
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);