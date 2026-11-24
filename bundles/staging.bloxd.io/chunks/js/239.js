export const id = 239;
export const ids = [239];
export const modules = {
  37268: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => nT,
      g: () => gT,
      h: () => zT
    });
    const WT = 1024,
      zT = 16,
      MT = 36e4;
    class gT {
      constructor(TT) {
        this.boneCount = TT, this.rotation = void 0, this.position = void 0, this.scale = void 0, this.touched = void 0, this.rotation = new Float64Array(3 * TT), this.position = new Float64Array(3 * TT), this.scale = new Float64Array(3 * TT).fill(1), this.touched = new Uint8Array(TT)
      }
      clampToLimits() {
        for (let TT = 0; TT < this.boneCount; TT++)
          if (0 !== this.touched[TT])
            for (let UT = 3 * TT; UT < 3 * TT + 3; UT++) {
              const TT = this.rotation[UT],
                mT = this.position[UT],
                gT = this.scale[UT];
              TT >= -36e4 && TT <= MT || (this.rotation[UT] = HT(TT, MT)), mT >= -1024 && mT <= WT || (this.position[UT] = HT(mT, WT)), gT >= -zT && gT <= zT || (this.scale[UT] = HT(gT, zT, 1))
            }
      }
      reset() {
        for (let TT = 0; TT < this.boneCount; TT++)
          if (0 !== this.touched[TT]) {
            this.touched[TT] = 0;
            for (let UT = 3 * TT; UT < 3 * TT + 3; UT++) this.rotation[UT] = 0, this.position[UT] = 0, this.scale[UT] = 1
          }
      }
    }
    class nT {
      constructor(TT) {
        this.rotation = void 0, this.position = void 0, this.scaleDelta = void 0, this.boneWeight = void 0, this.touched = void 0, this.overrides = void 0, this.touchedBones = void 0, this.touchedCount = 0, this.rotation = new Float64Array(3 * TT), this.position = new Float64Array(3 * TT), this.scaleDelta = new Float64Array(3 * TT), this.boneWeight = new Float64Array(TT), this.touched = new Uint8Array(TT), this.overrides = new Uint8Array(TT), this.touchedBones = new Int32Array(TT)
      }
      touch(TT, UT, mT) {
        0 === this.touched[TT] && (this.touched[TT] = 1, this.touchedBones[this.touchedCount++] = TT), this.boneWeight[TT] += UT, mT && (this.overrides[TT] = 1)
      }
      applyTo(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        for (let zT = 0; zT < this.touchedCount; zT++) {
          const MT = this.touchedBones[zT],
            gT = this.boneWeight[MT];
          if (mT || 1 === this.overrides[MT]) {
            const mT = UT * Math.min(1, gT);
            for (let UT = 3 * MT; UT < 3 * MT + 3; UT++) TT.rotation[UT] += (this.rotation[UT] / gT - TT.rotation[UT]) * mT, TT.position[UT] += (this.position[UT] / gT - TT.position[UT]) * mT, TT.scale[UT] += (1 + this.scaleDelta[UT] / gT - TT.scale[UT]) * mT
          } else {
            const mT = WT && gT > 1 ? UT / gT : UT;
            for (let UT = 3 * MT; UT < 3 * MT + 3; UT++) TT.rotation[UT] += this.rotation[UT] * mT, TT.position[UT] += this.position[UT] * mT, TT.scale[UT] *= 1 + this.scaleDelta[UT] * mT
          }
          TT.touched[MT] = 1
        }
      }
      clear() {
        for (let TT = 0; TT < this.touchedCount; TT++) {
          const UT = this.touchedBones[TT];
          this.touched[UT] = 0, this.overrides[UT] = 0, this.boneWeight[UT] = 0;
          for (let TT = 3 * UT; TT < 3 * UT + 3; TT++) this.rotation[TT] = 0, this.position[TT] = 0, this.scaleDelta[TT] = 0
        }
        this.touchedCount = 0
      }
    }

    function HT(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      return Number.isNaN(TT) ? mT : Math.min(UT, Math.max(-UT, TT))
    }
  },
  37266: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => HT,
      f: () => nT
    });
    var WT = mT(37253),
      zT = mT(366),
      MT = mT(2014),
      gT = mT(37268);

    function nT(TT) {
      if ("GW" in TT) return JT.createAnimationScript(TT);
      return new jT(TT).createAnimationScript()
    }

    function HT(TT, UT, mT, zT) {
      const MT = TT.GW <= 0 ? 1 : UT + mT * Math.max(0, zT) / TT.GW;
      return TT.NW === WT.k.LoopOnLastFrame ? MT % 1 : TT.NW === WT.k.NoLoop && MT >= 1 ? null : Math.min(1, MT)
    }
    class kT {
      createAnimationScript(TT) {
        const {
          GW: UT,
          loop: mT,
          EW: WT
        } = TT;
        return {
          GW: Math.round(UT),
          NW: this.createLoopMode(null !== mT && void 0 !== mT && mT),
          EW: this.createNodeSkeletonAnimationScript(null !== WT && void 0 !== WT ? WT : null)
        }
      }
      createLoopMode(TT) {
        switch (TT) {
          case !1:
            return WT.k.NoLoop;
          case !0:
            return WT.k.LoopOnLastFrame;
          case "hold-on-last-frame":
            return WT.k.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${TT}`)
      }
      createNodeSkeletonAnimationScript(TT) {
        if (null === TT) return null;
        const UT = {};
        for (const mT in TT) {
          const WT = TT[mT];
          UT[mT] = this.createNodeAnimationScript(WT)
        }
        return UT
      }
      createNodeAnimationScript(TT) {
        const {
          timeline: UT
        } = TT, mT = UT.filter((TT => Number.isFinite(TT.timeFraction)));
        return mT.sort(((TT, UT) => TT.timeFraction - UT.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(mT, "rotation", pT),
          position: this.createTimelineFromKeyframes(mT, "position", ZT),
          scale: this.createTimelineFromKeyframes(mT, "scale", ZT, vT)
        }
      }
      createTimelineFromKeyframes(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : TT => TT;
        const zT = [];
        for (const kT of TT) {
          const TT = kT[UT];
          if (TT) {
            const UT = this.createAnimationFrameWithoutPrecomputes(kT.timeFraction, TT, WT);
            lT(UT) && zT.push(UT)
          }
        }
        const MT = [];
        for (let kT = 0; kT < zT.length; kT++) {
          var gT, nT, HT;
          const TT = zT[kT],
            UT = null !== (gT = zT[kT - 1]) && void 0 !== gT ? gT : TT,
            WT = null !== (nT = zT[kT + 1]) && void 0 !== nT ? nT : TT,
            jT = null !== (HT = zT[kT + 2]) && void 0 !== HT ? HT : WT;
          MT.push({
            ...TT,
            ...mT(UT.post, UT.timeFraction, TT.post, TT.timeFraction, WT.pre, WT.timeFraction, jT.pre, jT.timeFraction)
          })
        }
        return MT
      }
      createAnimationFrameWithoutPrecomputes(TT, UT, mT) {
        let WT, zT, MT = null;
        var gT;
        if ("object" === typeof UT && "point" in UT) MT = null !== (gT = UT.oW) && void 0 !== gT ? gT : null, WT = UT.point, zT = UT.point;
        else if ("object" === typeof UT && "pre" in UT) {
          var nT;
          MT = null !== (nT = UT.oW) && void 0 !== nT ? nT : null, WT = UT.pre, zT = UT.post
        } else WT = UT, zT = UT;
        return {
          timeFraction: TT,
          oW: this.createLerpMode(MT),
          pre: mT(WT),
          post: mT(zT)
        }
      }
      createLerpMode(TT) {
        return null === TT ? WT.j.Linear : kT.LERP_MODE_SCHEMA_MAPPING[TT]
      }
    }
    kT.LERP_MODE_SCHEMA_MAPPING = {
      linear: WT.j.Linear,
      "catmull-rom-spline": WT.j.CatmullRomSpline
    };
    class jT {
      constructor(TT) {
        this.animationSchema = TT
      }
      createAnimationScript() {
        const {
          animation_length: TT,
          loop: UT,
          bones: mT
        } = this.animationSchema;
        return {
          GW: Math.round(1e3 * TT),
          NW: this.createLoopMode(null !== UT && void 0 !== UT && UT),
          EW: this.createNodeSkeletonAnimationScript(null !== mT && void 0 !== mT ? mT : null)
        }
      }
      createLoopMode(TT) {
        switch (TT) {
          case !1:
            return WT.k.NoLoop;
          case !0:
            return WT.k.LoopOnLastFrame;
          case "hold_on_last_frame":
            return WT.k.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${TT}`)
      }
      createNodeSkeletonAnimationScript(TT) {
        if (null === TT) return null;
        const UT = {};
        for (const mT in TT) {
          const WT = TT[mT];
          UT[mT] = this.createNodeAnimationScript(WT)
        }
        return UT
      }
      createNodeAnimationScript(TT) {
        const {
          rotation: UT,
          position: mT,
          scale: WT
        } = TT;
        return {
          rotation: this.createAnimationTimeline(null !== UT && void 0 !== UT ? UT : null, qT, pT, !0),
          position: this.createAnimationTimeline(null !== mT && void 0 !== mT ? mT : null, bT, ZT, !1),
          scale: this.createAnimationTimeline(null !== WT && void 0 !== WT ? WT : null, cT, ZT, !1)
        }
      }
      createAnimationTimeline(TT, UT, mT, WT) {
        if (null === TT) return [];
        (Array.isArray(TT) || "number" === typeof TT) && (TT = {
          "0.0": TT
        });
        const zT = Object.entries(TT).map((TT => {
          let [mT, WT] = TT;
          const zT = Number(mT) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(zT, WT, UT)
        })).filter(lT);
        zT.sort(((TT, UT) => TT.timeFraction - UT.timeFraction)), WT && function(TT) {
          for (let UT = 1; UT < TT.length; UT++) {
            const mT = TT[UT - 1].post,
              WT = TT[UT],
              zT = OT(WT.pre),
              MT = OT(WT.post),
              gT = YT(mT, WT.pre);
            YT(mT, zT) < gT && (TT[UT] = {
              ...WT,
              pre: zT,
              post: MT
            })
          }
        }(zT);
        const MT = [];
        for (let kT = 0; kT < zT.length; kT++) {
          var gT, nT, HT;
          const TT = zT[kT],
            UT = null !== (gT = zT[kT - 1]) && void 0 !== gT ? gT : TT,
            WT = null !== (nT = zT[kT + 1]) && void 0 !== nT ? nT : TT,
            jT = null !== (HT = zT[kT + 2]) && void 0 !== HT ? HT : WT;
          MT.push({
            ...TT,
            ...mT(UT.post, UT.timeFraction, TT.post, TT.timeFraction, WT.pre, WT.timeFraction, jT.pre, jT.timeFraction)
          })
        }
        return MT
      }
      createAnimationFrameWithoutPrecomputes(TT, UT, mT) {
        let WT, zT, MT = null;
        if ("object" === typeof UT && "post" in UT) {
          var gT;
          MT = null !== (gT = UT.lerp_mode) && void 0 !== gT ? gT : null, zT = mT(UT.post), WT = void 0 !== UT.pre ? mT(UT.pre) : zT
        } else {
          const TT = mT(UT);
          zT = TT, WT = TT
        }
        return {
          timeFraction: TT,
          oW: this.createLerpMode(MT),
          pre: WT,
          post: zT
        }
      }
      createLerpMode(TT) {
        return null === TT ? WT.j.Linear : jT.LERP_MODE_SCHEMA_MAPPING[TT]
      }
    }

    function lT(TT) {
      return Number.isFinite(TT.timeFraction) && LT(TT.pre) && LT(TT.post)
    }

    function LT(TT) {
      return Number.isFinite(TT[0]) && Number.isFinite(TT[1]) && Number.isFinite(TT[2])
    }

    function pT(TT, UT, mT, WT, zT, MT, gT, nT) {
      const HT = MT - UT,
        kT = MT - WT,
        jT = nT - WT,
        lT = [null, null, null];
      for (let LT = 0; LT < lT.length; LT++) lT[LT] = BT(TT[LT], mT[LT], zT[LT], gT[LT], HT, jT);
      return {
        AW: kT,
        RW: lT
      }
    }

    function BT(TT, UT, mT, WT, MT, gT) {
      return {
        Uz: zT.e.computeShortestRotation(TT, mT) / MT,
        mz: zT.e.computeShortestRotation(UT, WT) / gT,
        delta: zT.e.computeShortestRotation(UT, mT)
      }
    }

    function ZT(TT, UT, mT, WT, zT, MT, gT, nT) {
      const HT = MT - UT,
        kT = MT - WT,
        jT = nT - WT,
        lT = [null, null, null];
      for (let LT = 0; LT < lT.length; LT++) lT[LT] = {
        Uz: (zT[LT] - TT[LT]) / HT,
        mz: (gT[LT] - mT[LT]) / jT,
        delta: zT[LT] - mT[LT]
      };
      return {
        AW: kT,
        RW: lT
      }
    }

    function cT(TT) {
      return vT("number" === typeof TT ? [TT, TT, TT] : TT)
    }

    function vT(TT) {
      return [fT(TT[0]), fT(TT[1]), fT(TT[2])]
    }

    function fT(TT) {
      return Number.isFinite(TT) ? Math.min(gT.h, Math.max(-gT.h, TT)) : TT
    }

    function qT(TT) {
      const [UT, mT, WT] = TT, gT = -(0, MT.m)(UT), nT = -(0, MT.m)(mT), HT = (0, MT.m)(WT), kT = zT.e.quaternionFromEulerZYX(gT, nT, HT);
      return zT.e.eulerYXZFromQuaternion(kT)
    }
    jT.LERP_MODE_SCHEMA_MAPPING = {
      linear: WT.j.Linear,
      catmullrom: WT.j.CatmullRomSpline
    };
    const iT = 1 / 16;

    function bT(TT) {
      return [-TT[0] * iT, TT[1] * iT, TT[2] * iT]
    }

    function OT(TT) {
      const [UT, mT, WT] = TT;
      return [UT >= 0 ? Math.PI - UT : -Math.PI - UT, eT(mT + Math.PI), eT(WT + Math.PI)]
    }

    function eT(TT) {
      return zT.e.mod(TT + Math.PI, 2 * Math.PI) - Math.PI
    }

    function YT(TT, UT) {
      return Math.abs(zT.e.computeShortestRotation(TT[0], UT[0])) + Math.abs(zT.e.computeShortestRotation(TT[1], UT[1])) + Math.abs(zT.e.computeShortestRotation(TT[2], UT[2]))
    }
    const JT = new kT
  },
  37253: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => gT,
      g: () => MT,
      j: () => WT,
      k: () => zT
    });
    let WT = function(TT) {
        return TT[TT.Linear = 0] = "Linear", TT[TT.CatmullRomSpline = 1] = "CatmullRomSpline", TT
      }({}),
      zT = function(TT) {
        return TT[TT.NoLoop = 0] = "NoLoop", TT[TT.LoopOnLastFrame = 1] = "LoopOnLastFrame", TT[TT.HoldOnLastFrame = 2] = "HoldOnLastFrame", TT
      }({}),
      MT = function(TT) {
        return TT[TT.Movement = 0] = "Movement", TT[TT.Action = 1] = "Action", TT[TT.Emote = 2] = "Emote", TT[TT.Custom = 3] = "Custom", TT
      }({}),
      gT = function(TT) {
        return TT[TT.Start = 0] = "Start", TT[TT.Stop = 1] = "Stop", TT
      }({})
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);