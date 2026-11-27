export const id = 266;
export const ids = [266];
export const modules = {
  38279: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => qR,
      d: () => ZR,
      g: () => tR
    });
    const yR = 1024,
      tR = 16,
      uR = 36e4;
    class ZR {
      constructor(RR) {
        this.boneCount = RR, this.rotation = void 0, this.position = void 0, this.scale = void 0, this.touched = void 0, this.rotation = new Float64Array(3 * RR), this.position = new Float64Array(3 * RR), this.scale = new Float64Array(3 * RR).fill(1), this.touched = new Uint8Array(RR)
      }
      clampToLimits() {
        for (let RR = 0; RR < this.boneCount; RR++)
          if (0 !== this.touched[RR])
            for (let JR = 3 * RR; JR < 3 * RR + 3; JR++) {
              const RR = this.rotation[JR],
                GR = this.position[JR],
                ZR = this.scale[JR];
              RR >= -36e4 && RR <= uR || (this.rotation[JR] = iR(RR, uR)), GR >= -1024 && GR <= yR || (this.position[JR] = iR(GR, yR)), ZR >= -tR && ZR <= tR || (this.scale[JR] = iR(ZR, tR, 1))
            }
      }
      reset() {
        for (let RR = 0; RR < this.boneCount; RR++)
          if (0 !== this.touched[RR]) {
            this.touched[RR] = 0;
            for (let JR = 3 * RR; JR < 3 * RR + 3; JR++) this.rotation[JR] = 0, this.position[JR] = 0, this.scale[JR] = 1
          }
      }
    }
    class qR {
      constructor(RR) {
        this.rotation = void 0, this.position = void 0, this.scaleDelta = void 0, this.boneWeight = void 0, this.touched = void 0, this.overrides = void 0, this.touchedBones = void 0, this.touchedCount = 0, this.rotation = new Float64Array(3 * RR), this.position = new Float64Array(3 * RR), this.scaleDelta = new Float64Array(3 * RR), this.boneWeight = new Float64Array(RR), this.touched = new Uint8Array(RR), this.overrides = new Uint8Array(RR), this.touchedBones = new Int32Array(RR)
      }
      touch(RR, JR, GR) {
        0 === this.touched[RR] && (this.touched[RR] = 1, this.touchedBones[this.touchedCount++] = RR), this.boneWeight[RR] += JR, GR && (this.overrides[RR] = 1)
      }
      applyTo(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        for (let tR = 0; tR < this.touchedCount; tR++) {
          const uR = this.touchedBones[tR],
            ZR = this.boneWeight[uR];
          if (GR || 1 === this.overrides[uR]) {
            const GR = JR * Math.min(1, ZR);
            for (let JR = 3 * uR; JR < 3 * uR + 3; JR++) RR.rotation[JR] += (this.rotation[JR] / ZR - RR.rotation[JR]) * GR, RR.position[JR] += (this.position[JR] / ZR - RR.position[JR]) * GR, RR.scale[JR] += (1 + this.scaleDelta[JR] / ZR - RR.scale[JR]) * GR
          } else {
            const GR = yR && ZR > 1 ? JR / ZR : JR;
            for (let JR = 3 * uR; JR < 3 * uR + 3; JR++) RR.rotation[JR] += this.rotation[JR] * GR, RR.position[JR] += this.position[JR] * GR, RR.scale[JR] *= 1 + this.scaleDelta[JR] * GR
          }
          RR.touched[uR] = 1
        }
      }
      clear() {
        for (let RR = 0; RR < this.touchedCount; RR++) {
          const JR = this.touchedBones[RR];
          this.touched[JR] = 0, this.overrides[JR] = 0, this.boneWeight[JR] = 0;
          for (let RR = 3 * JR; RR < 3 * JR + 3; RR++) this.rotation[RR] = 0, this.position[RR] = 0, this.scaleDelta[RR] = 0
        }
        this.touchedCount = 0
      }
    }

    function iR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      return Number.isNaN(RR) ? GR : Math.min(JR, Math.max(-JR, RR))
    }
  },
  38275: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => iR,
      h: () => qR
    });
    var yR = GR(38265),
      tR = GR(377),
      uR = GR(2102),
      ZR = GR(38279);

    function qR(RR) {
      if ("LG" in RR) return lR.createAnimationScript(RR);
      return new VR(RR).createAnimationScript()
    }

    function iR(RR, JR, GR, tR) {
      const uR = RR.LG <= 0 ? 1 : JR + GR * Math.max(0, tR) / RR.LG;
      return RR.nG === yR.o.LoopOnLastFrame ? uR % 1 : RR.nG === yR.o.NoLoop && uR >= 1 ? null : Math.min(1, uR)
    }
    class fR {
      createAnimationScript(RR) {
        const {
          LG: JR,
          loop: GR,
          UG: yR
        } = RR;
        return {
          LG: Math.round(JR),
          nG: this.createLoopMode(null !== GR && void 0 !== GR && GR),
          UG: this.createNodeSkeletonAnimationScript(null !== yR && void 0 !== yR ? yR : null)
        }
      }
      createLoopMode(RR) {
        switch (RR) {
          case !1:
            return yR.o.NoLoop;
          case !0:
            return yR.o.LoopOnLastFrame;
          case "hold-on-last-frame":
            return yR.o.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${RR}`)
      }
      createNodeSkeletonAnimationScript(RR) {
        if (null === RR) return null;
        const JR = {};
        for (const GR in RR) {
          const yR = RR[GR];
          JR[GR] = this.createNodeAnimationScript(yR)
        }
        return JR
      }
      createNodeAnimationScript(RR) {
        const {
          timeline: JR
        } = RR, GR = JR.filter((RR => Number.isFinite(RR.timeFraction)));
        return GR.sort(((RR, JR) => RR.timeFraction - JR.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(GR, "rotation", rR),
          position: this.createTimelineFromKeyframes(GR, "position", aR),
          scale: this.createTimelineFromKeyframes(GR, "scale", aR, nR)
        }
      }
      createTimelineFromKeyframes(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : RR => RR;
        const tR = [];
        for (const fR of RR) {
          const RR = fR[JR];
          if (RR) {
            const JR = this.createAnimationFrameWithoutPrecomputes(fR.timeFraction, RR, yR);
            KR(JR) && tR.push(JR)
          }
        }
        const uR = [];
        for (let fR = 0; fR < tR.length; fR++) {
          var ZR, qR, iR;
          const RR = tR[fR],
            JR = null !== (ZR = tR[fR - 1]) && void 0 !== ZR ? ZR : RR,
            yR = null !== (qR = tR[fR + 1]) && void 0 !== qR ? qR : RR,
            VR = null !== (iR = tR[fR + 2]) && void 0 !== iR ? iR : yR;
          uR.push({
            ...RR,
            ...GR(JR.post, JR.timeFraction, RR.post, RR.timeFraction, yR.pre, yR.timeFraction, VR.pre, VR.timeFraction)
          })
        }
        return uR
      }
      createAnimationFrameWithoutPrecomputes(RR, JR, GR) {
        let yR, tR, uR = null;
        var ZR;
        if ("object" === typeof JR && "point" in JR) uR = null !== (ZR = JR.CG) && void 0 !== ZR ? ZR : null, yR = JR.point, tR = JR.point;
        else if ("object" === typeof JR && "pre" in JR) {
          var qR;
          uR = null !== (qR = JR.CG) && void 0 !== qR ? qR : null, yR = JR.pre, tR = JR.post
        } else yR = JR, tR = JR;
        return {
          timeFraction: RR,
          CG: this.createLerpMode(uR),
          pre: GR(yR),
          post: GR(tR)
        }
      }
      createLerpMode(RR) {
        return null === RR ? yR.l.Linear : fR.LERP_MODE_SCHEMA_MAPPING[RR]
      }
    }
    fR.LERP_MODE_SCHEMA_MAPPING = {
      linear: yR.l.Linear,
      "catmull-rom-spline": yR.l.CatmullRomSpline
    };
    class VR {
      constructor(RR) {
        this.animationSchema = RR
      }
      createAnimationScript() {
        const {
          animation_length: RR,
          loop: JR,
          bones: GR
        } = this.animationSchema;
        return {
          LG: Math.round(1e3 * RR),
          nG: this.createLoopMode(null !== JR && void 0 !== JR && JR),
          UG: this.createNodeSkeletonAnimationScript(null !== GR && void 0 !== GR ? GR : null)
        }
      }
      createLoopMode(RR) {
        switch (RR) {
          case !1:
            return yR.o.NoLoop;
          case !0:
            return yR.o.LoopOnLastFrame;
          case "hold_on_last_frame":
            return yR.o.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${RR}`)
      }
      createNodeSkeletonAnimationScript(RR) {
        if (null === RR) return null;
        const JR = {};
        for (const GR in RR) {
          const yR = RR[GR];
          JR[GR] = this.createNodeAnimationScript(yR)
        }
        return JR
      }
      createNodeAnimationScript(RR) {
        const {
          rotation: JR,
          position: GR,
          scale: yR
        } = RR;
        return {
          rotation: this.createAnimationTimeline(null !== JR && void 0 !== JR ? JR : null, WR, rR, !0),
          position: this.createAnimationTimeline(null !== GR && void 0 !== GR ? GR : null, CR, aR, !1),
          scale: this.createAnimationTimeline(null !== yR && void 0 !== yR ? yR : null, LR, aR, !1)
        }
      }
      createAnimationTimeline(RR, JR, GR, yR) {
        if (null === RR) return [];
        (Array.isArray(RR) || "number" === typeof RR) && (RR = {
          "0.0": RR
        });
        const tR = Object.entries(RR).map((RR => {
          let [GR, yR] = RR;
          const tR = Number(GR) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(tR, yR, JR)
        })).filter(KR);
        tR.sort(((RR, JR) => RR.timeFraction - JR.timeFraction)), yR && function(RR) {
          for (let JR = 1; JR < RR.length; JR++) {
            const GR = RR[JR - 1].post,
              yR = RR[JR],
              tR = XR(yR.pre),
              uR = XR(yR.post),
              ZR = BR(GR, yR.pre);
            BR(GR, tR) < ZR && (RR[JR] = {
              ...yR,
              pre: tR,
              post: uR
            })
          }
        }(tR);
        const uR = [];
        for (let fR = 0; fR < tR.length; fR++) {
          var ZR, qR, iR;
          const RR = tR[fR],
            JR = null !== (ZR = tR[fR - 1]) && void 0 !== ZR ? ZR : RR,
            yR = null !== (qR = tR[fR + 1]) && void 0 !== qR ? qR : RR,
            VR = null !== (iR = tR[fR + 2]) && void 0 !== iR ? iR : yR;
          uR.push({
            ...RR,
            ...GR(JR.post, JR.timeFraction, RR.post, RR.timeFraction, yR.pre, yR.timeFraction, VR.pre, VR.timeFraction)
          })
        }
        return uR
      }
      createAnimationFrameWithoutPrecomputes(RR, JR, GR) {
        let yR, tR, uR = null;
        if ("object" === typeof JR && "post" in JR) {
          var ZR;
          uR = null !== (ZR = JR.lerp_mode) && void 0 !== ZR ? ZR : null, tR = GR(JR.post), yR = void 0 !== JR.pre ? GR(JR.pre) : tR
        } else {
          const RR = GR(JR);
          tR = RR, yR = RR
        }
        return {
          timeFraction: RR,
          CG: this.createLerpMode(uR),
          pre: yR,
          post: tR
        }
      }
      createLerpMode(RR) {
        return null === RR ? yR.l.Linear : VR.LERP_MODE_SCHEMA_MAPPING[RR]
      }
    }

    function KR(RR) {
      return Number.isFinite(RR.timeFraction) && wR(RR.pre) && wR(RR.post)
    }

    function wR(RR) {
      return Number.isFinite(RR[0]) && Number.isFinite(RR[1]) && Number.isFinite(RR[2])
    }

    function rR(RR, JR, GR, yR, tR, uR, ZR, qR) {
      const iR = uR - JR,
        fR = uR - yR,
        VR = qR - yR,
        KR = [null, null, null];
      for (let wR = 0; wR < KR.length; wR++) KR[wR] = eR(RR[wR], GR[wR], tR[wR], ZR[wR], iR, VR);
      return {
        XG: fR,
        MG: KR
      }
    }

    function eR(RR, JR, GR, yR, uR, ZR) {
      return {
        pG: tR.e.computeShortestRotation(RR, GR) / uR,
        gG: tR.e.computeShortestRotation(JR, yR) / ZR,
        delta: tR.e.computeShortestRotation(JR, GR)
      }
    }

    function aR(RR, JR, GR, yR, tR, uR, ZR, qR) {
      const iR = uR - JR,
        fR = uR - yR,
        VR = qR - yR,
        KR = [null, null, null];
      for (let wR = 0; wR < KR.length; wR++) KR[wR] = {
        pG: (tR[wR] - RR[wR]) / iR,
        gG: (ZR[wR] - GR[wR]) / VR,
        delta: tR[wR] - GR[wR]
      };
      return {
        XG: fR,
        MG: KR
      }
    }

    function LR(RR) {
      return nR("number" === typeof RR ? [RR, RR, RR] : RR)
    }

    function nR(RR) {
      return [UR(RR[0]), UR(RR[1]), UR(RR[2])]
    }

    function UR(RR) {
      return Number.isFinite(RR) ? Math.min(ZR.g, Math.max(-ZR.g, RR)) : RR
    }

    function WR(RR) {
      const [JR, GR, yR] = RR, ZR = -(0, uR.g)(JR), qR = -(0, uR.g)(GR), iR = (0, uR.g)(yR), fR = tR.e.quaternionFromEulerZYX(ZR, qR, iR);
      return tR.e.eulerYXZFromQuaternion(fR)
    }
    VR.LERP_MODE_SCHEMA_MAPPING = {
      linear: yR.l.Linear,
      catmullrom: yR.l.CatmullRomSpline
    };
    const AR = 1 / 16;

    function CR(RR) {
      return [-RR[0] * AR, RR[1] * AR, RR[2] * AR]
    }

    function XR(RR) {
      const [JR, GR, yR] = RR;
      return [JR >= 0 ? Math.PI - JR : -Math.PI - JR, MR(GR + Math.PI), MR(yR + Math.PI)]
    }

    function MR(RR) {
      return tR.e.mod(RR + Math.PI, 2 * Math.PI) - Math.PI
    }

    function BR(RR, JR) {
      return Math.abs(tR.e.computeShortestRotation(RR[0], JR[0])) + Math.abs(tR.e.computeShortestRotation(RR[1], JR[1])) + Math.abs(tR.e.computeShortestRotation(RR[2], JR[2]))
    }
    const lR = new fR
  },
  38265: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => ZR,
      h: () => uR,
      l: () => yR,
      o: () => tR
    });
    let yR = function(RR) {
        return RR[RR.Linear = 0] = "Linear", RR[RR.CatmullRomSpline = 1] = "CatmullRomSpline", RR
      }({}),
      tR = function(RR) {
        return RR[RR.NoLoop = 0] = "NoLoop", RR[RR.LoopOnLastFrame = 1] = "LoopOnLastFrame", RR[RR.HoldOnLastFrame = 2] = "HoldOnLastFrame", RR
      }({}),
      uR = function(RR) {
        return RR[RR.Movement = 0] = "Movement", RR[RR.Action = 1] = "Action", RR[RR.Emote = 2] = "Emote", RR[RR.Custom = 3] = "Custom", RR
      }({}),
      ZR = function(RR) {
        return RR[RR.Start = 0] = "Start", RR[RR.Stop = 1] = "Stop", RR
      }({})
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);