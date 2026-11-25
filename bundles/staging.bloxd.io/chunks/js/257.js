export const id = 257;
export const ids = [257];
export const modules = {
  38116: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => PM,
      g: () => aM,
      i: () => SM
    });
    const OM = 1024,
      SM = 16,
      jM = 36e4;
    class aM {
      constructor(MM) {
        this.boneCount = MM, this.rotation = void 0, this.position = void 0, this.scale = void 0, this.touched = void 0, this.rotation = new Float64Array(3 * MM), this.position = new Float64Array(3 * MM), this.scale = new Float64Array(3 * MM).fill(1), this.touched = new Uint8Array(MM)
      }
      clampToLimits() {
        for (let MM = 0; MM < this.boneCount; MM++)
          if (0 !== this.touched[MM])
            for (let rM = 3 * MM; rM < 3 * MM + 3; rM++) {
              const MM = this.rotation[rM],
                iM = this.position[rM],
                aM = this.scale[rM];
              MM >= -36e4 && MM <= jM || (this.rotation[rM] = nM(MM, jM)), iM >= -1024 && iM <= OM || (this.position[rM] = nM(iM, OM)), aM >= -SM && aM <= SM || (this.scale[rM] = nM(aM, SM, 1))
            }
      }
      reset() {
        for (let MM = 0; MM < this.boneCount; MM++)
          if (0 !== this.touched[MM]) {
            this.touched[MM] = 0;
            for (let rM = 3 * MM; rM < 3 * MM + 3; rM++) this.rotation[rM] = 0, this.position[rM] = 0, this.scale[rM] = 1
          }
      }
    }
    class PM {
      constructor(MM) {
        this.rotation = void 0, this.position = void 0, this.scaleDelta = void 0, this.boneWeight = void 0, this.touched = void 0, this.overrides = void 0, this.touchedBones = void 0, this.touchedCount = 0, this.rotation = new Float64Array(3 * MM), this.position = new Float64Array(3 * MM), this.scaleDelta = new Float64Array(3 * MM), this.boneWeight = new Float64Array(MM), this.touched = new Uint8Array(MM), this.overrides = new Uint8Array(MM), this.touchedBones = new Int32Array(MM)
      }
      touch(MM, rM, iM) {
        0 === this.touched[MM] && (this.touched[MM] = 1, this.touchedBones[this.touchedCount++] = MM), this.boneWeight[MM] += rM, iM && (this.overrides[MM] = 1)
      }
      applyTo(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        for (let SM = 0; SM < this.touchedCount; SM++) {
          const jM = this.touchedBones[SM],
            aM = this.boneWeight[jM];
          if (iM || 1 === this.overrides[jM]) {
            const iM = rM * Math.min(1, aM);
            for (let rM = 3 * jM; rM < 3 * jM + 3; rM++) MM.rotation[rM] += (this.rotation[rM] / aM - MM.rotation[rM]) * iM, MM.position[rM] += (this.position[rM] / aM - MM.position[rM]) * iM, MM.scale[rM] += (1 + this.scaleDelta[rM] / aM - MM.scale[rM]) * iM
          } else {
            const iM = OM && aM > 1 ? rM / aM : rM;
            for (let rM = 3 * jM; rM < 3 * jM + 3; rM++) MM.rotation[rM] += this.rotation[rM] * iM, MM.position[rM] += this.position[rM] * iM, MM.scale[rM] *= 1 + this.scaleDelta[rM] * iM
          }
          MM.touched[jM] = 1
        }
      }
      clear() {
        for (let MM = 0; MM < this.touchedCount; MM++) {
          const rM = this.touchedBones[MM];
          this.touched[rM] = 0, this.overrides[rM] = 0, this.boneWeight[rM] = 0;
          for (let MM = 3 * rM; MM < 3 * rM + 3; MM++) this.rotation[MM] = 0, this.position[MM] = 0, this.scaleDelta[MM] = 0
        }
        this.touchedCount = 0
      }
    }

    function nM(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      return Number.isNaN(MM) ? iM : Math.min(rM, Math.max(-rM, MM))
    }
  },
  38111: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => nM,
      f: () => PM
    });
    var OM = iM(38097),
      SM = iM(332),
      jM = iM(2e3),
      aM = iM(38116);

    function PM(MM) {
      if ("yS" in MM) return wM.createAnimationScript(MM);
      return new zM(MM).createAnimationScript()
    }

    function nM(MM, rM, iM, SM) {
      const jM = MM.yS <= 0 ? 1 : rM + iM * Math.max(0, SM) / MM.yS;
      return MM.lS === OM.h.LoopOnLastFrame ? jM % 1 : MM.lS === OM.h.NoLoop && jM >= 1 ? null : Math.min(1, jM)
    }
    class QM {
      createAnimationScript(MM) {
        const {
          yS: rM,
          loop: iM,
          GS: OM
        } = MM;
        return {
          yS: Math.round(rM),
          lS: this.createLoopMode(null !== iM && void 0 !== iM && iM),
          GS: this.createNodeSkeletonAnimationScript(null !== OM && void 0 !== OM ? OM : null)
        }
      }
      createLoopMode(MM) {
        switch (MM) {
          case !1:
            return OM.h.NoLoop;
          case !0:
            return OM.h.LoopOnLastFrame;
          case "hold-on-last-frame":
            return OM.h.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${MM}`)
      }
      createNodeSkeletonAnimationScript(MM) {
        if (null === MM) return null;
        const rM = {};
        for (const iM in MM) {
          const OM = MM[iM];
          rM[iM] = this.createNodeAnimationScript(OM)
        }
        return rM
      }
      createNodeAnimationScript(MM) {
        const {
          timeline: rM
        } = MM, iM = rM.filter((MM => Number.isFinite(MM.timeFraction)));
        return iM.sort(((MM, rM) => MM.timeFraction - rM.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(iM, "rotation", HM),
          position: this.createTimelineFromKeyframes(iM, "position", JM),
          scale: this.createTimelineFromKeyframes(iM, "scale", JM, yM)
        }
      }
      createTimelineFromKeyframes(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : MM => MM;
        const SM = [];
        for (const QM of MM) {
          const MM = QM[rM];
          if (MM) {
            const rM = this.createAnimationFrameWithoutPrecomputes(QM.timeFraction, MM, OM);
            LM(rM) && SM.push(rM)
          }
        }
        const jM = [];
        for (let QM = 0; QM < SM.length; QM++) {
          var aM, PM, nM;
          const MM = SM[QM],
            rM = null !== (aM = SM[QM - 1]) && void 0 !== aM ? aM : MM,
            OM = null !== (PM = SM[QM + 1]) && void 0 !== PM ? PM : MM,
            zM = null !== (nM = SM[QM + 2]) && void 0 !== nM ? nM : OM;
          jM.push({
            ...MM,
            ...iM(rM.post, rM.timeFraction, MM.post, MM.timeFraction, OM.pre, OM.timeFraction, zM.pre, zM.timeFraction)
          })
        }
        return jM
      }
      createAnimationFrameWithoutPrecomputes(MM, rM, iM) {
        let OM, SM, jM = null;
        var aM;
        if ("object" === typeof rM && "point" in rM) jM = null !== (aM = rM.bS) && void 0 !== aM ? aM : null, OM = rM.point, SM = rM.point;
        else if ("object" === typeof rM && "pre" in rM) {
          var PM;
          jM = null !== (PM = rM.bS) && void 0 !== PM ? PM : null, OM = rM.pre, SM = rM.post
        } else OM = rM, SM = rM;
        return {
          timeFraction: MM,
          bS: this.createLerpMode(jM),
          pre: iM(OM),
          post: iM(SM)
        }
      }
      createLerpMode(MM) {
        return null === MM ? OM.f.Linear : QM.LERP_MODE_SCHEMA_MAPPING[MM]
      }
    }
    QM.LERP_MODE_SCHEMA_MAPPING = {
      linear: OM.f.Linear,
      "catmull-rom-spline": OM.f.CatmullRomSpline
    };
    class zM {
      constructor(MM) {
        this.animationSchema = MM
      }
      createAnimationScript() {
        const {
          animation_length: MM,
          loop: rM,
          bones: iM
        } = this.animationSchema;
        return {
          yS: Math.round(1e3 * MM),
          lS: this.createLoopMode(null !== rM && void 0 !== rM && rM),
          GS: this.createNodeSkeletonAnimationScript(null !== iM && void 0 !== iM ? iM : null)
        }
      }
      createLoopMode(MM) {
        switch (MM) {
          case !1:
            return OM.h.NoLoop;
          case !0:
            return OM.h.LoopOnLastFrame;
          case "hold_on_last_frame":
            return OM.h.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${MM}`)
      }
      createNodeSkeletonAnimationScript(MM) {
        if (null === MM) return null;
        const rM = {};
        for (const iM in MM) {
          const OM = MM[iM];
          rM[iM] = this.createNodeAnimationScript(OM)
        }
        return rM
      }
      createNodeAnimationScript(MM) {
        const {
          rotation: rM,
          position: iM,
          scale: OM
        } = MM;
        return {
          rotation: this.createAnimationTimeline(null !== rM && void 0 !== rM ? rM : null, EM, HM, !0),
          position: this.createAnimationTimeline(null !== iM && void 0 !== iM ? iM : null, GM, JM, !1),
          scale: this.createAnimationTimeline(null !== OM && void 0 !== OM ? OM : null, dM, JM, !1)
        }
      }
      createAnimationTimeline(MM, rM, iM, OM) {
        if (null === MM) return [];
        (Array.isArray(MM) || "number" === typeof MM) && (MM = {
          "0.0": MM
        });
        const SM = Object.entries(MM).map((MM => {
          let [iM, OM] = MM;
          const SM = Number(iM) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(SM, OM, rM)
        })).filter(LM);
        SM.sort(((MM, rM) => MM.timeFraction - rM.timeFraction)), OM && function(MM) {
          for (let rM = 1; rM < MM.length; rM++) {
            const iM = MM[rM - 1].post,
              OM = MM[rM],
              SM = CM(OM.pre),
              jM = CM(OM.post),
              aM = bM(iM, OM.pre);
            bM(iM, SM) < aM && (MM[rM] = {
              ...OM,
              pre: SM,
              post: jM
            })
          }
        }(SM);
        const jM = [];
        for (let QM = 0; QM < SM.length; QM++) {
          var aM, PM, nM;
          const MM = SM[QM],
            rM = null !== (aM = SM[QM - 1]) && void 0 !== aM ? aM : MM,
            OM = null !== (PM = SM[QM + 1]) && void 0 !== PM ? PM : MM,
            zM = null !== (nM = SM[QM + 2]) && void 0 !== nM ? nM : OM;
          jM.push({
            ...MM,
            ...iM(rM.post, rM.timeFraction, MM.post, MM.timeFraction, OM.pre, OM.timeFraction, zM.pre, zM.timeFraction)
          })
        }
        return jM
      }
      createAnimationFrameWithoutPrecomputes(MM, rM, iM) {
        let OM, SM, jM = null;
        if ("object" === typeof rM && "post" in rM) {
          var aM;
          jM = null !== (aM = rM.lerp_mode) && void 0 !== aM ? aM : null, SM = iM(rM.post), OM = void 0 !== rM.pre ? iM(rM.pre) : SM
        } else {
          const MM = iM(rM);
          SM = MM, OM = MM
        }
        return {
          timeFraction: MM,
          bS: this.createLerpMode(jM),
          pre: OM,
          post: SM
        }
      }
      createLerpMode(MM) {
        return null === MM ? OM.f.Linear : zM.LERP_MODE_SCHEMA_MAPPING[MM]
      }
    }

    function LM(MM) {
      return Number.isFinite(MM.timeFraction) && mM(MM.pre) && mM(MM.post)
    }

    function mM(MM) {
      return Number.isFinite(MM[0]) && Number.isFinite(MM[1]) && Number.isFinite(MM[2])
    }

    function HM(MM, rM, iM, OM, SM, jM, aM, PM) {
      const nM = jM - rM,
        QM = jM - OM,
        zM = PM - OM,
        LM = [null, null, null];
      for (let mM = 0; mM < LM.length; mM++) LM[mM] = hM(MM[mM], iM[mM], SM[mM], aM[mM], nM, zM);
      return {
        wS: QM,
        tS: LM
      }
    }

    function hM(MM, rM, iM, OM, jM, aM) {
      return {
        uS: SM.d.computeShortestRotation(MM, iM) / jM,
        RS: SM.d.computeShortestRotation(rM, OM) / aM,
        delta: SM.d.computeShortestRotation(rM, iM)
      }
    }

    function JM(MM, rM, iM, OM, SM, jM, aM, PM) {
      const nM = jM - rM,
        QM = jM - OM,
        zM = PM - OM,
        LM = [null, null, null];
      for (let mM = 0; mM < LM.length; mM++) LM[mM] = {
        uS: (SM[mM] - MM[mM]) / nM,
        RS: (aM[mM] - iM[mM]) / zM,
        delta: SM[mM] - iM[mM]
      };
      return {
        wS: QM,
        tS: LM
      }
    }

    function dM(MM) {
      return yM("number" === typeof MM ? [MM, MM, MM] : MM)
    }

    function yM(MM) {
      return [lM(MM[0]), lM(MM[1]), lM(MM[2])]
    }

    function lM(MM) {
      return Number.isFinite(MM) ? Math.min(aM.i, Math.max(-aM.i, MM)) : MM
    }

    function EM(MM) {
      const [rM, iM, OM] = MM, aM = -(0, jM.l)(rM), PM = -(0, jM.l)(iM), nM = (0, jM.l)(OM), QM = SM.d.quaternionFromEulerZYX(aM, PM, nM);
      return SM.d.eulerYXZFromQuaternion(QM)
    }
    zM.LERP_MODE_SCHEMA_MAPPING = {
      linear: OM.f.Linear,
      catmullrom: OM.f.CatmullRomSpline
    };
    const UM = 1 / 16;

    function GM(MM) {
      return [-MM[0] * UM, MM[1] * UM, MM[2] * UM]
    }

    function CM(MM) {
      const [rM, iM, OM] = MM;
      return [rM >= 0 ? Math.PI - rM : -Math.PI - rM, eM(iM + Math.PI), eM(OM + Math.PI)]
    }

    function eM(MM) {
      return SM.d.mod(MM + Math.PI, 2 * Math.PI) - Math.PI
    }

    function bM(MM, rM) {
      return Math.abs(SM.d.computeShortestRotation(MM[0], rM[0])) + Math.abs(SM.d.computeShortestRotation(MM[1], rM[1])) + Math.abs(SM.d.computeShortestRotation(MM[2], rM[2]))
    }
    const wM = new QM
  },
  38097: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => aM,
      e: () => jM,
      f: () => OM,
      h: () => SM
    });
    let OM = function(MM) {
        return MM[MM.Linear = 0] = "Linear", MM[MM.CatmullRomSpline = 1] = "CatmullRomSpline", MM
      }({}),
      SM = function(MM) {
        return MM[MM.NoLoop = 0] = "NoLoop", MM[MM.LoopOnLastFrame = 1] = "LoopOnLastFrame", MM[MM.HoldOnLastFrame = 2] = "HoldOnLastFrame", MM
      }({}),
      jM = function(MM) {
        return MM[MM.Movement = 0] = "Movement", MM[MM.Action = 1] = "Action", MM[MM.Emote = 2] = "Emote", MM[MM.Custom = 3] = "Custom", MM
      }({}),
      aM = function(MM) {
        return MM[MM.Start = 0] = "Start", MM[MM.Stop = 1] = "Stop", MM
      }({})
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);