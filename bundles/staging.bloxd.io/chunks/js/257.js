export const id = 257;
export const ids = [257];
export const modules = {
  38349: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => pV,
      f: () => yV,
      j: () => YV
    });
    const JV = 1024,
      YV = 16,
      UV = 36e4;
    class yV {
      constructor(VV) {
        this.boneCount = VV, this.rotation = void 0, this.position = void 0, this.scale = void 0, this.touched = void 0, this.rotation = new Float64Array(3 * VV), this.position = new Float64Array(3 * VV), this.scale = new Float64Array(3 * VV).fill(1), this.touched = new Uint8Array(VV)
      }
      clampToLimits() {
        for (let VV = 0; VV < this.boneCount; VV++)
          if (0 !== this.touched[VV])
            for (let eV = 3 * VV; eV < 3 * VV + 3; eV++) {
              const VV = this.rotation[eV],
                xV = this.position[eV],
                yV = this.scale[eV];
              VV >= -36e4 && VV <= UV || (this.rotation[eV] = QV(VV, UV)), xV >= -1024 && xV <= JV || (this.position[eV] = QV(xV, JV)), yV >= -YV && yV <= YV || (this.scale[eV] = QV(yV, YV, 1))
            }
      }
      reset() {
        for (let VV = 0; VV < this.boneCount; VV++)
          if (0 !== this.touched[VV]) {
            this.touched[VV] = 0;
            for (let eV = 3 * VV; eV < 3 * VV + 3; eV++) this.rotation[eV] = 0, this.position[eV] = 0, this.scale[eV] = 1
          }
      }
    }
    class pV {
      constructor(VV) {
        this.rotation = void 0, this.position = void 0, this.scaleDelta = void 0, this.boneWeight = void 0, this.touched = void 0, this.overrides = void 0, this.touchedBones = void 0, this.touchedCount = 0, this.rotation = new Float64Array(3 * VV), this.position = new Float64Array(3 * VV), this.scaleDelta = new Float64Array(3 * VV), this.boneWeight = new Float64Array(VV), this.touched = new Uint8Array(VV), this.overrides = new Uint8Array(VV), this.touchedBones = new Int32Array(VV)
      }
      touch(VV, eV, xV) {
        0 === this.touched[VV] && (this.touched[VV] = 1, this.touchedBones[this.touchedCount++] = VV), this.boneWeight[VV] += eV, xV && (this.overrides[VV] = 1)
      }
      applyTo(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        for (let YV = 0; YV < this.touchedCount; YV++) {
          const UV = this.touchedBones[YV],
            yV = this.boneWeight[UV];
          if (xV || 1 === this.overrides[UV]) {
            const xV = eV * Math.min(1, yV);
            for (let eV = 3 * UV; eV < 3 * UV + 3; eV++) VV.rotation[eV] += (this.rotation[eV] / yV - VV.rotation[eV]) * xV, VV.position[eV] += (this.position[eV] / yV - VV.position[eV]) * xV, VV.scale[eV] += (1 + this.scaleDelta[eV] / yV - VV.scale[eV]) * xV
          } else {
            const xV = JV && yV > 1 ? eV / yV : eV;
            for (let eV = 3 * UV; eV < 3 * UV + 3; eV++) VV.rotation[eV] += this.rotation[eV] * xV, VV.position[eV] += this.position[eV] * xV, VV.scale[eV] *= 1 + this.scaleDelta[eV] * xV
          }
          VV.touched[UV] = 1
        }
      }
      clear() {
        for (let VV = 0; VV < this.touchedCount; VV++) {
          const eV = this.touchedBones[VV];
          this.touched[eV] = 0, this.overrides[eV] = 0, this.boneWeight[eV] = 0;
          for (let VV = 3 * eV; VV < 3 * eV + 3; VV++) this.rotation[VV] = 0, this.position[VV] = 0, this.scaleDelta[VV] = 0
        }
        this.touchedCount = 0
      }
    }

    function QV(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      return Number.isNaN(VV) ? xV : Math.min(eV, Math.max(-eV, VV))
    }
  },
  38340: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => QV,
      e: () => pV
    });
    var JV = xV(38328),
      YV = xV(375),
      UV = xV(2014),
      yV = xV(38349);

    function pV(VV) {
      if ("PY" in VV) return NV.createAnimationScript(VV);
      return new wV(VV).createAnimationScript()
    }

    function QV(VV, eV, xV, YV) {
      const UV = VV.PY <= 0 ? 1 : eV + xV * Math.max(0, YV) / VV.PY;
      return VV.AY === JV.n.LoopOnLastFrame ? UV % 1 : VV.AY === JV.n.NoLoop && UV >= 1 ? null : Math.min(1, UV)
    }
    class nV {
      createAnimationScript(VV) {
        const {
          PY: eV,
          loop: xV,
          NY: JV
        } = VV;
        return {
          PY: Math.round(eV),
          AY: this.createLoopMode(null !== xV && void 0 !== xV && xV),
          NY: this.createNodeSkeletonAnimationScript(null !== JV && void 0 !== JV ? JV : null)
        }
      }
      createLoopMode(VV) {
        switch (VV) {
          case !1:
            return JV.n.NoLoop;
          case !0:
            return JV.n.LoopOnLastFrame;
          case "hold-on-last-frame":
            return JV.n.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${VV}`)
      }
      createNodeSkeletonAnimationScript(VV) {
        if (null === VV) return null;
        const eV = {};
        for (const xV in VV) {
          const JV = VV[xV];
          eV[xV] = this.createNodeAnimationScript(JV)
        }
        return eV
      }
      createNodeAnimationScript(VV) {
        const {
          timeline: eV
        } = VV, xV = eV.filter((VV => Number.isFinite(VV.timeFraction)));
        return xV.sort(((VV, eV) => VV.timeFraction - eV.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(xV, "rotation", rV),
          position: this.createTimelineFromKeyframes(xV, "position", bV),
          scale: this.createTimelineFromKeyframes(xV, "scale", bV, BV)
        }
      }
      createTimelineFromKeyframes(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : VV => VV;
        const YV = [];
        for (const nV of VV) {
          const VV = nV[eV];
          if (VV) {
            const eV = this.createAnimationFrameWithoutPrecomputes(nV.timeFraction, VV, JV);
            ZV(eV) && YV.push(eV)
          }
        }
        const UV = [];
        for (let nV = 0; nV < YV.length; nV++) {
          var yV, pV, QV;
          const VV = YV[nV],
            eV = null !== (yV = YV[nV - 1]) && void 0 !== yV ? yV : VV,
            JV = null !== (pV = YV[nV + 1]) && void 0 !== pV ? pV : VV,
            wV = null !== (QV = YV[nV + 2]) && void 0 !== QV ? QV : JV;
          UV.push({
            ...VV,
            ...xV(eV.post, eV.timeFraction, VV.post, VV.timeFraction, JV.pre, JV.timeFraction, wV.pre, wV.timeFraction)
          })
        }
        return UV
      }
      createAnimationFrameWithoutPrecomputes(VV, eV, xV) {
        let JV, YV, UV = null;
        var yV;
        if ("object" === typeof eV && "point" in eV) UV = null !== (yV = eV.zY) && void 0 !== yV ? yV : null, JV = eV.point, YV = eV.point;
        else if ("object" === typeof eV && "pre" in eV) {
          var pV;
          UV = null !== (pV = eV.zY) && void 0 !== pV ? pV : null, JV = eV.pre, YV = eV.post
        } else JV = eV, YV = eV;
        return {
          timeFraction: VV,
          zY: this.createLerpMode(UV),
          pre: xV(JV),
          post: xV(YV)
        }
      }
      createLerpMode(VV) {
        return null === VV ? JV.k.Linear : nV.LERP_MODE_SCHEMA_MAPPING[VV]
      }
    }
    nV.LERP_MODE_SCHEMA_MAPPING = {
      linear: JV.k.Linear,
      "catmull-rom-spline": JV.k.CatmullRomSpline
    };
    class wV {
      constructor(VV) {
        this.animationSchema = VV
      }
      createAnimationScript() {
        const {
          animation_length: VV,
          loop: eV,
          bones: xV
        } = this.animationSchema;
        return {
          PY: Math.round(1e3 * VV),
          AY: this.createLoopMode(null !== eV && void 0 !== eV && eV),
          NY: this.createNodeSkeletonAnimationScript(null !== xV && void 0 !== xV ? xV : null)
        }
      }
      createLoopMode(VV) {
        switch (VV) {
          case !1:
            return JV.n.NoLoop;
          case !0:
            return JV.n.LoopOnLastFrame;
          case "hold_on_last_frame":
            return JV.n.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${VV}`)
      }
      createNodeSkeletonAnimationScript(VV) {
        if (null === VV) return null;
        const eV = {};
        for (const xV in VV) {
          const JV = VV[xV];
          eV[xV] = this.createNodeAnimationScript(JV)
        }
        return eV
      }
      createNodeAnimationScript(VV) {
        const {
          rotation: eV,
          position: xV,
          scale: JV
        } = VV;
        return {
          rotation: this.createAnimationTimeline(null !== eV && void 0 !== eV ? eV : null, qV, rV, !0),
          position: this.createAnimationTimeline(null !== xV && void 0 !== xV ? xV : null, FV, bV, !1),
          scale: this.createAnimationTimeline(null !== JV && void 0 !== JV ? JV : null, EV, bV, !1)
        }
      }
      createAnimationTimeline(VV, eV, xV, JV) {
        if (null === VV) return [];
        (Array.isArray(VV) || "number" === typeof VV) && (VV = {
          "0.0": VV
        });
        const YV = Object.entries(VV).map((VV => {
          let [xV, JV] = VV;
          const YV = Number(xV) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(YV, JV, eV)
        })).filter(ZV);
        YV.sort(((VV, eV) => VV.timeFraction - eV.timeFraction)), JV && function(VV) {
          for (let eV = 1; eV < VV.length; eV++) {
            const xV = VV[eV - 1].post,
              JV = VV[eV],
              YV = TV(JV.pre),
              UV = TV(JV.post),
              yV = AV(xV, JV.pre);
            AV(xV, YV) < yV && (VV[eV] = {
              ...JV,
              pre: YV,
              post: UV
            })
          }
        }(YV);
        const UV = [];
        for (let nV = 0; nV < YV.length; nV++) {
          var yV, pV, QV;
          const VV = YV[nV],
            eV = null !== (yV = YV[nV - 1]) && void 0 !== yV ? yV : VV,
            JV = null !== (pV = YV[nV + 1]) && void 0 !== pV ? pV : VV,
            wV = null !== (QV = YV[nV + 2]) && void 0 !== QV ? QV : JV;
          UV.push({
            ...VV,
            ...xV(eV.post, eV.timeFraction, VV.post, VV.timeFraction, JV.pre, JV.timeFraction, wV.pre, wV.timeFraction)
          })
        }
        return UV
      }
      createAnimationFrameWithoutPrecomputes(VV, eV, xV) {
        let JV, YV, UV = null;
        if ("object" === typeof eV && "post" in eV) {
          var yV;
          UV = null !== (yV = eV.lerp_mode) && void 0 !== yV ? yV : null, YV = xV(eV.post), JV = void 0 !== eV.pre ? xV(eV.pre) : YV
        } else {
          const VV = xV(eV);
          YV = VV, JV = VV
        }
        return {
          timeFraction: VV,
          zY: this.createLerpMode(UV),
          pre: JV,
          post: YV
        }
      }
      createLerpMode(VV) {
        return null === VV ? JV.k.Linear : wV.LERP_MODE_SCHEMA_MAPPING[VV]
      }
    }

    function ZV(VV) {
      return Number.isFinite(VV.timeFraction) && vV(VV.pre) && vV(VV.post)
    }

    function vV(VV) {
      return Number.isFinite(VV[0]) && Number.isFinite(VV[1]) && Number.isFinite(VV[2])
    }

    function rV(VV, eV, xV, JV, YV, UV, yV, pV) {
      const QV = UV - eV,
        nV = UV - JV,
        wV = pV - JV,
        ZV = [null, null, null];
      for (let vV = 0; vV < ZV.length; vV++) ZV[vV] = kV(VV[vV], xV[vV], YV[vV], yV[vV], QV, wV);
      return {
        GY: nV,
        WY: ZV
      }
    }

    function kV(VV, eV, xV, JV, UV, yV) {
      return {
        gY: YV.b.computeShortestRotation(VV, xV) / UV,
        DY: YV.b.computeShortestRotation(eV, JV) / yV,
        delta: YV.b.computeShortestRotation(eV, xV)
      }
    }

    function bV(VV, eV, xV, JV, YV, UV, yV, pV) {
      const QV = UV - eV,
        nV = UV - JV,
        wV = pV - JV,
        ZV = [null, null, null];
      for (let vV = 0; vV < ZV.length; vV++) ZV[vV] = {
        gY: (YV[vV] - VV[vV]) / QV,
        DY: (yV[vV] - xV[vV]) / wV,
        delta: YV[vV] - xV[vV]
      };
      return {
        GY: nV,
        WY: ZV
      }
    }

    function EV(VV) {
      return BV("number" === typeof VV ? [VV, VV, VV] : VV)
    }

    function BV(VV) {
      return [jV(VV[0]), jV(VV[1]), jV(VV[2])]
    }

    function jV(VV) {
      return Number.isFinite(VV) ? Math.min(yV.j, Math.max(-yV.j, VV)) : VV
    }

    function qV(VV) {
      const [eV, xV, JV] = VV, yV = -(0, UV.k)(eV), pV = -(0, UV.k)(xV), QV = (0, UV.k)(JV), nV = YV.b.quaternionFromEulerZYX(yV, pV, QV);
      return YV.b.eulerYXZFromQuaternion(nV)
    }
    wV.LERP_MODE_SCHEMA_MAPPING = {
      linear: JV.k.Linear,
      catmullrom: JV.k.CatmullRomSpline
    };
    const tV = 1 / 16;

    function FV(VV) {
      return [-VV[0] * tV, VV[1] * tV, VV[2] * tV]
    }

    function TV(VV) {
      const [eV, xV, JV] = VV;
      return [eV >= 0 ? Math.PI - eV : -Math.PI - eV, PV(xV + Math.PI), PV(JV + Math.PI)]
    }

    function PV(VV) {
      return YV.b.mod(VV + Math.PI, 2 * Math.PI) - Math.PI
    }

    function AV(VV, eV) {
      return Math.abs(YV.b.computeShortestRotation(VV[0], eV[0])) + Math.abs(YV.b.computeShortestRotation(VV[1], eV[1])) + Math.abs(YV.b.computeShortestRotation(VV[2], eV[2]))
    }
    const NV = new nV
  },
  38328: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => yV,
      h: () => UV,
      k: () => JV,
      n: () => YV
    });
    let JV = function(VV) {
        return VV[VV.Linear = 0] = "Linear", VV[VV.CatmullRomSpline = 1] = "CatmullRomSpline", VV
      }({}),
      YV = function(VV) {
        return VV[VV.NoLoop = 0] = "NoLoop", VV[VV.LoopOnLastFrame = 1] = "LoopOnLastFrame", VV[VV.HoldOnLastFrame = 2] = "HoldOnLastFrame", VV
      }({}),
      UV = function(VV) {
        return VV[VV.Movement = 0] = "Movement", VV[VV.Action = 1] = "Action", VV[VV.Emote = 2] = "Emote", VV[VV.Custom = 3] = "Custom", VV
      }({}),
      yV = function(VV) {
        return VV[VV.Start = 0] = "Start", VV[VV.Stop = 1] = "Stop", VV
      }({})
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);