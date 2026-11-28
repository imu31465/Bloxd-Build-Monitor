export const id = 267;
export const ids = [267];
export const modules = {
  38362: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => gb,
      f: () => Vb,
      j: () => Hb
    });
    const eb = 1024,
      Hb = 16,
      pb = 36e4;
    class Vb {
      constructor(bb) {
        this.boneCount = bb, this.rotation = void 0, this.position = void 0, this.scale = void 0, this.touched = void 0, this.rotation = new Float64Array(3 * bb), this.position = new Float64Array(3 * bb), this.scale = new Float64Array(3 * bb).fill(1), this.touched = new Uint8Array(bb)
      }
      clampToLimits() {
        for (let bb = 0; bb < this.boneCount; bb++)
          if (0 !== this.touched[bb])
            for (let wb = 3 * bb; wb < 3 * bb + 3; wb++) {
              const bb = this.rotation[wb],
                Mb = this.position[wb],
                Vb = this.scale[wb];
              bb >= -36e4 && bb <= pb || (this.rotation[wb] = lb(bb, pb)), Mb >= -1024 && Mb <= eb || (this.position[wb] = lb(Mb, eb)), Vb >= -Hb && Vb <= Hb || (this.scale[wb] = lb(Vb, Hb, 1))
            }
      }
      reset() {
        for (let bb = 0; bb < this.boneCount; bb++)
          if (0 !== this.touched[bb]) {
            this.touched[bb] = 0;
            for (let wb = 3 * bb; wb < 3 * bb + 3; wb++) this.rotation[wb] = 0, this.position[wb] = 0, this.scale[wb] = 1
          }
      }
    }
    class gb {
      constructor(bb) {
        this.rotation = void 0, this.position = void 0, this.scaleDelta = void 0, this.boneWeight = void 0, this.touched = void 0, this.overrides = void 0, this.touchedBones = void 0, this.touchedCount = 0, this.rotation = new Float64Array(3 * bb), this.position = new Float64Array(3 * bb), this.scaleDelta = new Float64Array(3 * bb), this.boneWeight = new Float64Array(bb), this.touched = new Uint8Array(bb), this.overrides = new Uint8Array(bb), this.touchedBones = new Int32Array(bb)
      }
      touch(bb, wb, Mb) {
        0 === this.touched[bb] && (this.touched[bb] = 1, this.touchedBones[this.touchedCount++] = bb), this.boneWeight[bb] += wb, Mb && (this.overrides[bb] = 1)
      }
      applyTo(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        for (let Hb = 0; Hb < this.touchedCount; Hb++) {
          const pb = this.touchedBones[Hb],
            Vb = this.boneWeight[pb];
          if (Mb || 1 === this.overrides[pb]) {
            const Mb = wb * Math.min(1, Vb);
            for (let wb = 3 * pb; wb < 3 * pb + 3; wb++) bb.rotation[wb] += (this.rotation[wb] / Vb - bb.rotation[wb]) * Mb, bb.position[wb] += (this.position[wb] / Vb - bb.position[wb]) * Mb, bb.scale[wb] += (1 + this.scaleDelta[wb] / Vb - bb.scale[wb]) * Mb
          } else {
            const Mb = eb && Vb > 1 ? wb / Vb : wb;
            for (let wb = 3 * pb; wb < 3 * pb + 3; wb++) bb.rotation[wb] += this.rotation[wb] * Mb, bb.position[wb] += this.position[wb] * Mb, bb.scale[wb] *= 1 + this.scaleDelta[wb] * Mb
          }
          bb.touched[pb] = 1
        }
      }
      clear() {
        for (let bb = 0; bb < this.touchedCount; bb++) {
          const wb = this.touchedBones[bb];
          this.touched[wb] = 0, this.overrides[wb] = 0, this.boneWeight[wb] = 0;
          for (let bb = 3 * wb; bb < 3 * wb + 3; bb++) this.rotation[bb] = 0, this.position[bb] = 0, this.scaleDelta[bb] = 0
        }
        this.touchedCount = 0
      }
    }

    function lb(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      return Number.isNaN(bb) ? Mb : Math.min(wb, Math.max(-wb, bb))
    }
  },
  38356: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => lb,
      h: () => gb
    });
    var eb = Mb(38343),
      Hb = Mb(382),
      pb = Mb(2107),
      Vb = Mb(38362);

    function gb(bb) {
      if ("BM" in bb) return Kb.createAnimationScript(bb);
      return new Ib(bb).createAnimationScript()
    }

    function lb(bb, wb, Mb, Hb) {
      const pb = bb.BM <= 0 ? 1 : wb + Mb * Math.max(0, Hb) / bb.BM;
      return bb.sM === eb.j.LoopOnLastFrame ? pb % 1 : bb.sM === eb.j.NoLoop && pb >= 1 ? null : Math.min(1, pb)
    }
    class Lb {
      createAnimationScript(bb) {
        const {
          BM: wb,
          loop: Mb,
          mM: eb
        } = bb;
        return {
          BM: Math.round(wb),
          sM: this.createLoopMode(null !== Mb && void 0 !== Mb && Mb),
          mM: this.createNodeSkeletonAnimationScript(null !== eb && void 0 !== eb ? eb : null)
        }
      }
      createLoopMode(bb) {
        switch (bb) {
          case !1:
            return eb.j.NoLoop;
          case !0:
            return eb.j.LoopOnLastFrame;
          case "hold-on-last-frame":
            return eb.j.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${bb}`)
      }
      createNodeSkeletonAnimationScript(bb) {
        if (null === bb) return null;
        const wb = {};
        for (const Mb in bb) {
          const eb = bb[Mb];
          wb[Mb] = this.createNodeAnimationScript(eb)
        }
        return wb
      }
      createNodeAnimationScript(bb) {
        const {
          timeline: wb
        } = bb, Mb = wb.filter((bb => Number.isFinite(bb.timeFraction)));
        return Mb.sort(((bb, wb) => bb.timeFraction - wb.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(Mb, "rotation", tb),
          position: this.createTimelineFromKeyframes(Mb, "position", Eb),
          scale: this.createTimelineFromKeyframes(Mb, "scale", Eb, Bb)
        }
      }
      createTimelineFromKeyframes(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bb => bb;
        const Hb = [];
        for (const Lb of bb) {
          const bb = Lb[wb];
          if (bb) {
            const wb = this.createAnimationFrameWithoutPrecomputes(Lb.timeFraction, bb, eb);
            Ob(wb) && Hb.push(wb)
          }
        }
        const pb = [];
        for (let Lb = 0; Lb < Hb.length; Lb++) {
          var Vb, gb, lb;
          const bb = Hb[Lb],
            wb = null !== (Vb = Hb[Lb - 1]) && void 0 !== Vb ? Vb : bb,
            eb = null !== (gb = Hb[Lb + 1]) && void 0 !== gb ? gb : bb,
            Ib = null !== (lb = Hb[Lb + 2]) && void 0 !== lb ? lb : eb;
          pb.push({
            ...bb,
            ...Mb(wb.post, wb.timeFraction, bb.post, bb.timeFraction, eb.pre, eb.timeFraction, Ib.pre, Ib.timeFraction)
          })
        }
        return pb
      }
      createAnimationFrameWithoutPrecomputes(bb, wb, Mb) {
        let eb, Hb, pb = null;
        var Vb;
        if ("object" === typeof wb && "point" in wb) pb = null !== (Vb = wb.XM) && void 0 !== Vb ? Vb : null, eb = wb.point, Hb = wb.point;
        else if ("object" === typeof wb && "pre" in wb) {
          var gb;
          pb = null !== (gb = wb.XM) && void 0 !== gb ? gb : null, eb = wb.pre, Hb = wb.post
        } else eb = wb, Hb = wb;
        return {
          timeFraction: bb,
          XM: this.createLerpMode(pb),
          pre: Mb(eb),
          post: Mb(Hb)
        }
      }
      createLerpMode(bb) {
        return null === bb ? eb.i.Linear : Lb.LERP_MODE_SCHEMA_MAPPING[bb]
      }
    }
    Lb.LERP_MODE_SCHEMA_MAPPING = {
      linear: eb.i.Linear,
      "catmull-rom-spline": eb.i.CatmullRomSpline
    };
    class Ib {
      constructor(bb) {
        this.animationSchema = bb
      }
      createAnimationScript() {
        const {
          animation_length: bb,
          loop: wb,
          bones: Mb
        } = this.animationSchema;
        return {
          BM: Math.round(1e3 * bb),
          sM: this.createLoopMode(null !== wb && void 0 !== wb && wb),
          mM: this.createNodeSkeletonAnimationScript(null !== Mb && void 0 !== Mb ? Mb : null)
        }
      }
      createLoopMode(bb) {
        switch (bb) {
          case !1:
            return eb.j.NoLoop;
          case !0:
            return eb.j.LoopOnLastFrame;
          case "hold_on_last_frame":
            return eb.j.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${bb}`)
      }
      createNodeSkeletonAnimationScript(bb) {
        if (null === bb) return null;
        const wb = {};
        for (const Mb in bb) {
          const eb = bb[Mb];
          wb[Mb] = this.createNodeAnimationScript(eb)
        }
        return wb
      }
      createNodeAnimationScript(bb) {
        const {
          rotation: wb,
          position: Mb,
          scale: eb
        } = bb;
        return {
          rotation: this.createAnimationTimeline(null !== wb && void 0 !== wb ? wb : null, mb, tb, !0),
          position: this.createAnimationTimeline(null !== Mb && void 0 !== Mb ? Mb : null, zb, Eb, !1),
          scale: this.createAnimationTimeline(null !== eb && void 0 !== eb ? eb : null, Fb, Eb, !1)
        }
      }
      createAnimationTimeline(bb, wb, Mb, eb) {
        if (null === bb) return [];
        (Array.isArray(bb) || "number" === typeof bb) && (bb = {
          "0.0": bb
        });
        const Hb = Object.entries(bb).map((bb => {
          let [Mb, eb] = bb;
          const Hb = Number(Mb) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(Hb, eb, wb)
        })).filter(Ob);
        Hb.sort(((bb, wb) => bb.timeFraction - wb.timeFraction)), eb && function(bb) {
          for (let wb = 1; wb < bb.length; wb++) {
            const Mb = bb[wb - 1].post,
              eb = bb[wb],
              Hb = Xb(eb.pre),
              pb = Xb(eb.post),
              Vb = jb(Mb, eb.pre);
            jb(Mb, Hb) < Vb && (bb[wb] = {
              ...eb,
              pre: Hb,
              post: pb
            })
          }
        }(Hb);
        const pb = [];
        for (let Lb = 0; Lb < Hb.length; Lb++) {
          var Vb, gb, lb;
          const bb = Hb[Lb],
            wb = null !== (Vb = Hb[Lb - 1]) && void 0 !== Vb ? Vb : bb,
            eb = null !== (gb = Hb[Lb + 1]) && void 0 !== gb ? gb : bb,
            Ib = null !== (lb = Hb[Lb + 2]) && void 0 !== lb ? lb : eb;
          pb.push({
            ...bb,
            ...Mb(wb.post, wb.timeFraction, bb.post, bb.timeFraction, eb.pre, eb.timeFraction, Ib.pre, Ib.timeFraction)
          })
        }
        return pb
      }
      createAnimationFrameWithoutPrecomputes(bb, wb, Mb) {
        let eb, Hb, pb = null;
        if ("object" === typeof wb && "post" in wb) {
          var Vb;
          pb = null !== (Vb = wb.lerp_mode) && void 0 !== Vb ? Vb : null, Hb = Mb(wb.post), eb = void 0 !== wb.pre ? Mb(wb.pre) : Hb
        } else {
          const bb = Mb(wb);
          Hb = bb, eb = bb
        }
        return {
          timeFraction: bb,
          XM: this.createLerpMode(pb),
          pre: eb,
          post: Hb
        }
      }
      createLerpMode(bb) {
        return null === bb ? eb.i.Linear : Ib.LERP_MODE_SCHEMA_MAPPING[bb]
      }
    }

    function Ob(bb) {
      return Number.isFinite(bb.timeFraction) && Ub(bb.pre) && Ub(bb.post)
    }

    function Ub(bb) {
      return Number.isFinite(bb[0]) && Number.isFinite(bb[1]) && Number.isFinite(bb[2])
    }

    function tb(bb, wb, Mb, eb, Hb, pb, Vb, gb) {
      const lb = pb - wb,
        Lb = pb - eb,
        Ib = gb - eb,
        Ob = [null, null, null];
      for (let Ub = 0; Ub < Ob.length; Ub++) Ob[Ub] = Cb(bb[Ub], Mb[Ub], Hb[Ub], Vb[Ub], lb, Ib);
      return {
        xM: Lb,
        jM: Ob
      }
    }

    function Cb(bb, wb, Mb, eb, pb, Vb) {
      return {
        rM: Hb.e.computeShortestRotation(bb, Mb) / pb,
        RM: Hb.e.computeShortestRotation(wb, eb) / Vb,
        delta: Hb.e.computeShortestRotation(wb, Mb)
      }
    }

    function Eb(bb, wb, Mb, eb, Hb, pb, Vb, gb) {
      const lb = pb - wb,
        Lb = pb - eb,
        Ib = gb - eb,
        Ob = [null, null, null];
      for (let Ub = 0; Ub < Ob.length; Ub++) Ob[Ub] = {
        rM: (Hb[Ub] - bb[Ub]) / lb,
        RM: (Vb[Ub] - Mb[Ub]) / Ib,
        delta: Hb[Ub] - Mb[Ub]
      };
      return {
        xM: Lb,
        jM: Ob
      }
    }

    function Fb(bb) {
      return Bb("number" === typeof bb ? [bb, bb, bb] : bb)
    }

    function Bb(bb) {
      return [sb(bb[0]), sb(bb[1]), sb(bb[2])]
    }

    function sb(bb) {
      return Number.isFinite(bb) ? Math.min(Vb.j, Math.max(-Vb.j, bb)) : bb
    }

    function mb(bb) {
      const [wb, Mb, eb] = bb, Vb = -(0, pb.o)(wb), gb = -(0, pb.o)(Mb), lb = (0, pb.o)(eb), Lb = Hb.e.quaternionFromEulerZYX(Vb, gb, lb);
      return Hb.e.eulerYXZFromQuaternion(Lb)
    }
    Ib.LERP_MODE_SCHEMA_MAPPING = {
      linear: eb.i.Linear,
      catmullrom: eb.i.CatmullRomSpline
    };
    const hb = 1 / 16;

    function zb(bb) {
      return [-bb[0] * hb, bb[1] * hb, bb[2] * hb]
    }

    function Xb(bb) {
      const [wb, Mb, eb] = bb;
      return [wb >= 0 ? Math.PI - wb : -Math.PI - wb, xb(Mb + Math.PI), xb(eb + Math.PI)]
    }

    function xb(bb) {
      return Hb.e.mod(bb + Math.PI, 2 * Math.PI) - Math.PI
    }

    function jb(bb, wb) {
      return Math.abs(Hb.e.computeShortestRotation(bb[0], wb[0])) + Math.abs(Hb.e.computeShortestRotation(bb[1], wb[1])) + Math.abs(Hb.e.computeShortestRotation(bb[2], wb[2]))
    }
    const Kb = new Lb
  },
  38343: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Vb,
      e: () => pb,
      i: () => eb,
      j: () => Hb
    });
    let eb = function(bb) {
        return bb[bb.Linear = 0] = "Linear", bb[bb.CatmullRomSpline = 1] = "CatmullRomSpline", bb
      }({}),
      Hb = function(bb) {
        return bb[bb.NoLoop = 0] = "NoLoop", bb[bb.LoopOnLastFrame = 1] = "LoopOnLastFrame", bb[bb.HoldOnLastFrame = 2] = "HoldOnLastFrame", bb
      }({}),
      pb = function(bb) {
        return bb[bb.Movement = 0] = "Movement", bb[bb.Action = 1] = "Action", bb[bb.Emote = 2] = "Emote", bb[bb.Custom = 3] = "Custom", bb
      }({}),
      Vb = function(bb) {
        return bb[bb.Start = 0] = "Start", bb[bb.Stop = 1] = "Stop", bb
      }({})
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);