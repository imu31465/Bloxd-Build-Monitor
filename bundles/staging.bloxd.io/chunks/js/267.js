export const id = 267;
export const ids = [267];
export const modules = {
  38643: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Ir,
      f: () => jr,
      h: () => Wr
    });
    const Zr = 1024,
      Wr = 16,
      ar = 36e4;
    class jr {
      constructor(rr) {
        this.boneCount = rr, this.rotation = void 0, this.position = void 0, this.scale = void 0, this.touched = void 0, this.rotation = new Float64Array(3 * rr), this.position = new Float64Array(3 * rr), this.scale = new Float64Array(3 * rr).fill(1), this.touched = new Uint8Array(rr)
      }
      clampToLimits() {
        for (let rr = 0; rr < this.boneCount; rr++)
          if (0 !== this.touched[rr])
            for (let Sr = 3 * rr; Sr < 3 * rr + 3; Sr++) {
              const rr = this.rotation[Sr],
                Qr = this.position[Sr],
                jr = this.scale[Sr];
              rr >= -36e4 && rr <= ar || (this.rotation[Sr] = fr(rr, ar)), Qr >= -1024 && Qr <= Zr || (this.position[Sr] = fr(Qr, Zr)), jr >= -Wr && jr <= Wr || (this.scale[Sr] = fr(jr, Wr, 1))
            }
      }
      reset() {
        for (let rr = 0; rr < this.boneCount; rr++)
          if (0 !== this.touched[rr]) {
            this.touched[rr] = 0;
            for (let Sr = 3 * rr; Sr < 3 * rr + 3; Sr++) this.rotation[Sr] = 0, this.position[Sr] = 0, this.scale[Sr] = 1
          }
      }
    }
    class Ir {
      constructor(rr) {
        this.rotation = void 0, this.position = void 0, this.scaleDelta = void 0, this.boneWeight = void 0, this.touched = void 0, this.overrides = void 0, this.touchedBones = void 0, this.touchedCount = 0, this.rotation = new Float64Array(3 * rr), this.position = new Float64Array(3 * rr), this.scaleDelta = new Float64Array(3 * rr), this.boneWeight = new Float64Array(rr), this.touched = new Uint8Array(rr), this.overrides = new Uint8Array(rr), this.touchedBones = new Int32Array(rr)
      }
      touch(rr, Sr, Qr) {
        0 === this.touched[rr] && (this.touched[rr] = 1, this.touchedBones[this.touchedCount++] = rr), this.boneWeight[rr] += Sr, Qr && (this.overrides[rr] = 1)
      }
      applyTo(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        for (let Wr = 0; Wr < this.touchedCount; Wr++) {
          const ar = this.touchedBones[Wr],
            jr = this.boneWeight[ar];
          if (Qr || 1 === this.overrides[ar]) {
            const Qr = Sr * Math.min(1, jr);
            for (let Sr = 3 * ar; Sr < 3 * ar + 3; Sr++) rr.rotation[Sr] += (this.rotation[Sr] / jr - rr.rotation[Sr]) * Qr, rr.position[Sr] += (this.position[Sr] / jr - rr.position[Sr]) * Qr, rr.scale[Sr] += (1 + this.scaleDelta[Sr] / jr - rr.scale[Sr]) * Qr
          } else {
            const Qr = Zr && jr > 1 ? Sr / jr : Sr;
            for (let Sr = 3 * ar; Sr < 3 * ar + 3; Sr++) rr.rotation[Sr] += this.rotation[Sr] * Qr, rr.position[Sr] += this.position[Sr] * Qr, rr.scale[Sr] *= 1 + this.scaleDelta[Sr] * Qr
          }
          rr.touched[ar] = 1
        }
      }
      clear() {
        for (let rr = 0; rr < this.touchedCount; rr++) {
          const Sr = this.touchedBones[rr];
          this.touched[Sr] = 0, this.overrides[Sr] = 0, this.boneWeight[Sr] = 0;
          for (let rr = 3 * Sr; rr < 3 * Sr + 3; rr++) this.rotation[rr] = 0, this.position[rr] = 0, this.scaleDelta[rr] = 0
        }
        this.touchedCount = 0
      }
    }

    function fr(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      return Number.isNaN(rr) ? Qr : Math.min(Sr, Math.max(-Sr, rr))
    }
  },
  38638: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => fr,
      d: () => Ir
    });
    var Zr = Qr(38625),
      Wr = Qr(379),
      ar = Qr(2049),
      jr = Qr(38643);

    function Ir(rr) {
      if ("BQ" in rr) return vr.createAnimationScript(rr);
      return new pr(rr).createAnimationScript()
    }

    function fr(rr, Sr, Qr, Wr) {
      const ar = rr.BQ <= 0 ? 1 : Sr + Qr * Math.max(0, Wr) / rr.BQ;
      return rr.TQ === Zr.l.LoopOnLastFrame ? ar % 1 : rr.TQ === Zr.l.NoLoop && ar >= 1 ? null : Math.min(1, ar)
    }
    class Er {
      createAnimationScript(rr) {
        const {
          BQ: Sr,
          loop: Qr,
          vQ: Zr
        } = rr;
        return {
          BQ: Math.round(Sr),
          TQ: this.createLoopMode(null !== Qr && void 0 !== Qr && Qr),
          vQ: this.createNodeSkeletonAnimationScript(null !== Zr && void 0 !== Zr ? Zr : null)
        }
      }
      createLoopMode(rr) {
        switch (rr) {
          case !1:
            return Zr.l.NoLoop;
          case !0:
            return Zr.l.LoopOnLastFrame;
          case "hold-on-last-frame":
            return Zr.l.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${rr}`)
      }
      createNodeSkeletonAnimationScript(rr) {
        if (null === rr) return null;
        const Sr = {};
        for (const Qr in rr) {
          const Zr = rr[Qr];
          Sr[Qr] = this.createNodeAnimationScript(Zr)
        }
        return Sr
      }
      createNodeAnimationScript(rr) {
        const {
          timeline: Sr
        } = rr, Qr = Sr.filter((rr => Number.isFinite(rr.timeFraction)));
        return Qr.sort(((rr, Sr) => rr.timeFraction - Sr.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(Qr, "rotation", Nr),
          position: this.createTimelineFromKeyframes(Qr, "position", tr),
          scale: this.createTimelineFromKeyframes(Qr, "scale", tr, zr)
        }
      }
      createTimelineFromKeyframes(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : rr => rr;
        const Wr = [];
        for (const Er of rr) {
          const rr = Er[Sr];
          if (rr) {
            const Sr = this.createAnimationFrameWithoutPrecomputes(Er.timeFraction, rr, Zr);
            xr(Sr) && Wr.push(Sr)
          }
        }
        const ar = [];
        for (let Er = 0; Er < Wr.length; Er++) {
          var jr, Ir, fr;
          const rr = Wr[Er],
            Sr = null !== (jr = Wr[Er - 1]) && void 0 !== jr ? jr : rr,
            Zr = null !== (Ir = Wr[Er + 1]) && void 0 !== Ir ? Ir : rr,
            pr = null !== (fr = Wr[Er + 2]) && void 0 !== fr ? fr : Zr;
          ar.push({
            ...rr,
            ...Qr(Sr.post, Sr.timeFraction, rr.post, rr.timeFraction, Zr.pre, Zr.timeFraction, pr.pre, pr.timeFraction)
          })
        }
        return ar
      }
      createAnimationFrameWithoutPrecomputes(rr, Sr, Qr) {
        let Zr, Wr, ar = null;
        var jr;
        if ("object" === typeof Sr && "point" in Sr) ar = null !== (jr = Sr.lQ) && void 0 !== jr ? jr : null, Zr = Sr.point, Wr = Sr.point;
        else if ("object" === typeof Sr && "pre" in Sr) {
          var Ir;
          ar = null !== (Ir = Sr.lQ) && void 0 !== Ir ? Ir : null, Zr = Sr.pre, Wr = Sr.post
        } else Zr = Sr, Wr = Sr;
        return {
          timeFraction: rr,
          lQ: this.createLerpMode(ar),
          pre: Qr(Zr),
          post: Qr(Wr)
        }
      }
      createLerpMode(rr) {
        return null === rr ? Zr.k.Linear : Er.LERP_MODE_SCHEMA_MAPPING[rr]
      }
    }
    Er.LERP_MODE_SCHEMA_MAPPING = {
      linear: Zr.k.Linear,
      "catmull-rom-spline": Zr.k.CatmullRomSpline
    };
    class pr {
      constructor(rr) {
        this.animationSchema = rr
      }
      createAnimationScript() {
        const {
          animation_length: rr,
          loop: Sr,
          bones: Qr
        } = this.animationSchema;
        return {
          BQ: Math.round(1e3 * rr),
          TQ: this.createLoopMode(null !== Sr && void 0 !== Sr && Sr),
          vQ: this.createNodeSkeletonAnimationScript(null !== Qr && void 0 !== Qr ? Qr : null)
        }
      }
      createLoopMode(rr) {
        switch (rr) {
          case !1:
            return Zr.l.NoLoop;
          case !0:
            return Zr.l.LoopOnLastFrame;
          case "hold_on_last_frame":
            return Zr.l.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${rr}`)
      }
      createNodeSkeletonAnimationScript(rr) {
        if (null === rr) return null;
        const Sr = {};
        for (const Qr in rr) {
          const Zr = rr[Qr];
          Sr[Qr] = this.createNodeAnimationScript(Zr)
        }
        return Sr
      }
      createNodeAnimationScript(rr) {
        const {
          rotation: Sr,
          position: Qr,
          scale: Zr
        } = rr;
        return {
          rotation: this.createAnimationTimeline(null !== Sr && void 0 !== Sr ? Sr : null, nr, Nr, !0),
          position: this.createAnimationTimeline(null !== Qr && void 0 !== Qr ? Qr : null, Kr, tr, !1),
          scale: this.createAnimationTimeline(null !== Zr && void 0 !== Zr ? Zr : null, hr, tr, !1)
        }
      }
      createAnimationTimeline(rr, Sr, Qr, Zr) {
        if (null === rr) return [];
        (Array.isArray(rr) || "number" === typeof rr) && (rr = {
          "0.0": rr
        });
        const Wr = Object.entries(rr).map((rr => {
          let [Qr, Zr] = rr;
          const Wr = Number(Qr) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(Wr, Zr, Sr)
        })).filter(xr);
        Wr.sort(((rr, Sr) => rr.timeFraction - Sr.timeFraction)), Zr && function(rr) {
          for (let Sr = 1; Sr < rr.length; Sr++) {
            const Qr = rr[Sr - 1].post,
              Zr = rr[Sr],
              Wr = yr(Zr.pre),
              ar = yr(Zr.post),
              jr = Tr(Qr, Zr.pre);
            Tr(Qr, Wr) < jr && (rr[Sr] = {
              ...Zr,
              pre: Wr,
              post: ar
            })
          }
        }(Wr);
        const ar = [];
        for (let Er = 0; Er < Wr.length; Er++) {
          var jr, Ir, fr;
          const rr = Wr[Er],
            Sr = null !== (jr = Wr[Er - 1]) && void 0 !== jr ? jr : rr,
            Zr = null !== (Ir = Wr[Er + 1]) && void 0 !== Ir ? Ir : rr,
            pr = null !== (fr = Wr[Er + 2]) && void 0 !== fr ? fr : Zr;
          ar.push({
            ...rr,
            ...Qr(Sr.post, Sr.timeFraction, rr.post, rr.timeFraction, Zr.pre, Zr.timeFraction, pr.pre, pr.timeFraction)
          })
        }
        return ar
      }
      createAnimationFrameWithoutPrecomputes(rr, Sr, Qr) {
        let Zr, Wr, ar = null;
        if ("object" === typeof Sr && "post" in Sr) {
          var jr;
          ar = null !== (jr = Sr.lerp_mode) && void 0 !== jr ? jr : null, Wr = Qr(Sr.post), Zr = void 0 !== Sr.pre ? Qr(Sr.pre) : Wr
        } else {
          const rr = Qr(Sr);
          Wr = rr, Zr = rr
        }
        return {
          timeFraction: rr,
          lQ: this.createLerpMode(ar),
          pre: Zr,
          post: Wr
        }
      }
      createLerpMode(rr) {
        return null === rr ? Zr.k.Linear : pr.LERP_MODE_SCHEMA_MAPPING[rr]
      }
    }

    function xr(rr) {
      return Number.isFinite(rr.timeFraction) && mr(rr.pre) && mr(rr.post)
    }

    function mr(rr) {
      return Number.isFinite(rr[0]) && Number.isFinite(rr[1]) && Number.isFinite(rr[2])
    }

    function Nr(rr, Sr, Qr, Zr, Wr, ar, jr, Ir) {
      const fr = ar - Sr,
        Er = ar - Zr,
        pr = Ir - Zr,
        xr = [null, null, null];
      for (let mr = 0; mr < xr.length; mr++) xr[mr] = Ur(rr[mr], Qr[mr], Wr[mr], jr[mr], fr, pr);
      return {
        qQ: Er,
        RQ: xr
      }
    }

    function Ur(rr, Sr, Qr, Zr, ar, jr) {
      return {
        CQ: Wr.b.computeShortestRotation(rr, Qr) / ar,
        MQ: Wr.b.computeShortestRotation(Sr, Zr) / jr,
        delta: Wr.b.computeShortestRotation(Sr, Qr)
      }
    }

    function tr(rr, Sr, Qr, Zr, Wr, ar, jr, Ir) {
      const fr = ar - Sr,
        Er = ar - Zr,
        pr = Ir - Zr,
        xr = [null, null, null];
      for (let mr = 0; mr < xr.length; mr++) xr[mr] = {
        CQ: (Wr[mr] - rr[mr]) / fr,
        MQ: (jr[mr] - Qr[mr]) / pr,
        delta: Wr[mr] - Qr[mr]
      };
      return {
        qQ: Er,
        RQ: xr
      }
    }

    function hr(rr) {
      return zr("number" === typeof rr ? [rr, rr, rr] : rr)
    }

    function zr(rr) {
      return [Yr(rr[0]), Yr(rr[1]), Yr(rr[2])]
    }

    function Yr(rr) {
      return Number.isFinite(rr) ? Math.min(jr.h, Math.max(-jr.h, rr)) : rr
    }

    function nr(rr) {
      const [Sr, Qr, Zr] = rr, jr = -(0, ar.k)(Sr), Ir = -(0, ar.k)(Qr), fr = (0, ar.k)(Zr), Er = Wr.b.quaternionFromEulerZYX(jr, Ir, fr);
      return Wr.b.eulerYXZFromQuaternion(Er)
    }
    pr.LERP_MODE_SCHEMA_MAPPING = {
      linear: Zr.k.Linear,
      catmullrom: Zr.k.CatmullRomSpline
    };
    const er = 1 / 16;

    function Kr(rr) {
      return [-rr[0] * er, rr[1] * er, rr[2] * er]
    }

    function yr(rr) {
      const [Sr, Qr, Zr] = rr;
      return [Sr >= 0 ? Math.PI - Sr : -Math.PI - Sr, Br(Qr + Math.PI), Br(Zr + Math.PI)]
    }

    function Br(rr) {
      return Wr.b.mod(rr + Math.PI, 2 * Math.PI) - Math.PI
    }

    function Tr(rr, Sr) {
      return Math.abs(Wr.b.computeShortestRotation(rr[0], Sr[0])) + Math.abs(Wr.b.computeShortestRotation(rr[1], Sr[1])) + Math.abs(Wr.b.computeShortestRotation(rr[2], Sr[2]))
    }
    const vr = new Er
  },
  38625: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => jr,
      i: () => ar,
      k: () => Zr,
      l: () => Wr
    });
    let Zr = function(rr) {
        return rr[rr.Linear = 0] = "Linear", rr[rr.CatmullRomSpline = 1] = "CatmullRomSpline", rr
      }({}),
      Wr = function(rr) {
        return rr[rr.NoLoop = 0] = "NoLoop", rr[rr.LoopOnLastFrame = 1] = "LoopOnLastFrame", rr[rr.HoldOnLastFrame = 2] = "HoldOnLastFrame", rr
      }({}),
      ar = function(rr) {
        return rr[rr.Movement = 0] = "Movement", rr[rr.Action = 1] = "Action", rr[rr.Emote = 2] = "Emote", rr[rr.Custom = 3] = "Custom", rr
      }({}),
      jr = function(rr) {
        return rr[rr.Start = 0] = "Start", rr[rr.Stop = 1] = "Stop", rr
      }({})
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);