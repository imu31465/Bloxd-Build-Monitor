export const id = 49;
export const ids = [49];
export const modules = {
  4842: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Xt
    });
    var Ot = Vt(26),
      qt = Vt(31),
      Dt = Vt(1387),
      mt = Vt(2902);
    const dt = 3e4,
      jt = 1e3;

    function Ht() {
      return "visible" === document.visibilityState && "inGame" === Ot.b.get("gameState") && (0, Dt.r)()
    }

    function Xt(tt, et) {
      (0, mt.x)() || function(tt, et, Vt) {
        let Ot = 0;
        const qt = setInterval((() => {
          et() && (Ot += jt, Ot >= tt && (clearInterval(qt), Vt()))
        }), jt)
      }(dt, Ht, (() => {
        et().then((() => {
          tt(`saved for the player after ${dt/1e3} s of play`), (0, mt.J)(), qt.j.sw("chat", {
            content: [{
              str: "Saved a debug file to your downloads: please send it to us with a screenshot of the game.",
              style: {
                color: "#ffd84a"
              }
            }]
          })
        }))
      }))
    }
  },
  4833: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      installRenderDebug: () => lV,
      renderDebugPlayable: () => fV,
      startRenderDebug: () => EV,
      waitForDraw: () => wV
    });
    var Ot = Vt(1908),
      qt = Vt(4842),
      Dt = Vt(2902);
    const mt = ["+x", "-x", "+y", "-y", "+z", "-z", "dir6", "dir7"];

    function dt(tt) {
      return 7 & tt
    }

    function jt(tt) {
      return tt >>> 11 & 1
    }

    function Ht(tt) {
      return [1 + (tt >>> 18 & 63), 1 + (tt >>> 24 & 63)]
    }

    function Xt(tt, et) {
      const [Vt, , Ot] = tt, qt = dt(Ot), Dt = function(tt, et, Vt) {
        return et + (1 === (22 >>> tt & 1) ? 4 - Vt : Vt) & 3
      }(qt, jt(Ot), et), mt = qt >>> 1, [Xt, Qt] = Ht(Vt), lt = 1 === Dt || 2 === Dt ? Xt : 0, Et = Dt >= 2 ? Qt : 0, ft = [63 & Vt, Vt >>> 6 & 63, Vt >>> 12 & 63];
      return ft[2 === mt ? 0 : 2] += lt, ft[1 === mt ? 0 : 1] += Et, ft
    }

    function Qt(tt) {
      const et = Math.max(...Ht(tt[0]));
      return 1 === et ? "1" : et <= 4 ? "2-4" : et <= 16 ? "5-16" : "17-64"
    }
    const lt = 16;

    function Et(tt) {
      let et = 2166136261;
      for (let Vt = 0; Vt < tt.length; Vt++) et = Math.imul(et ^ tt[Vt], 16777619);
      return et >>> 0
    }

    function ft(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12;
      const Ot = Math.max(0, et - Vt),
        qt = Math.min(tt.length, et + Vt),
        Dt = [];
      for (let mt = Ot; mt < qt; mt++) {
        const Vt = tt[mt].toString(16).padStart(2, "0");
        Dt.push(mt === et ? `[${Vt}]` : Vt)
      }
      return Dt.join(" ")
    }
    const wt = {
        NO_ERROR: 0,
        POINTS: 0,
        ARRAY_BUFFER: 34962,
        ELEMENT_ARRAY_BUFFER: 34963,
        ARRAY_BUFFER_BINDING: 34964,
        ELEMENT_ARRAY_BUFFER_BINDING: 34965,
        COPY_READ_BUFFER: 36662,
        COPY_WRITE_BUFFER: 36663,
        COPY_READ_BUFFER_BINDING: 36662,
        COPY_WRITE_BUFFER_BINDING: 36663,
        UNIFORM_BUFFER: 35345,
        UNIFORM_BUFFER_BINDING: 35368,
        PIXEL_UNPACK_BUFFER: 35052,
        PIXEL_UNPACK_BUFFER_BINDING: 35055,
        TRANSFORM_FEEDBACK_BUFFER: 35982,
        TRANSFORM_FEEDBACK_BUFFER_BINDING: 35983,
        TRANSFORM_FEEDBACK: 36386,
        TRANSFORM_FEEDBACK_BINDING: 36389,
        INTERLEAVED_ATTRIBS: 35980,
        RASTERIZER_DISCARD: 35977,
        STREAM_READ: 35041,
        CURRENT_PROGRAM: 35725,
        LINK_STATUS: 35714,
        VERTEX_SHADER: 35633,
        FRAGMENT_SHADER: 35632,
        DEPTH_FUNC: 2932,
        DEPTH_CLEAR_VALUE: 2931,
        SAMPLES: 32937,
        DRAW_FRAMEBUFFER: 36009,
        DEPTH_ATTACHMENT: 36096,
        FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 36048,
        FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: 33302,
        FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: 33297,
        DRAW_FRAMEBUFFER_BINDING: 36006,
        ACTIVE_UNIFORMS: 35718,
        ACTIVE_UNIFORM_BLOCKS: 35382,
        UNIFORM_BLOCK_BINDING: 35391,
        UNIFORM_BLOCK_INDEX: 35386,
        INVALID_INDEX: 4294967295,
        MAX_VERTEX_ATTRIBS: 34921,
        VERTEX_ATTRIB_ARRAY_ENABLED: 34338,
        VERTEX_ATTRIB_ARRAY_SIZE: 34339,
        VERTEX_ATTRIB_ARRAY_STRIDE: 34340,
        VERTEX_ATTRIB_ARRAY_TYPE: 34341,
        VERTEX_ATTRIB_ARRAY_POINTER: 34373,
        VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 34975,
        VERTEX_ATTRIB_ARRAY_INTEGER: 35069,
        VERTEX_ATTRIB_ARRAY_DIVISOR: 35070,
        CURRENT_VERTEX_ATTRIB: 34342,
        TEXTURE_2D: 3553,
        TEXTURE0: 33984,
        ACTIVE_TEXTURE: 34016,
        TEXTURE_BINDING_2D: 32873,
        READ_FRAMEBUFFER: 36008,
        READ_FRAMEBUFFER_BINDING: 36010,
        COLOR_ATTACHMENT0: 36064,
        RGBA_INTEGER: 36249,
        UNSIGNED_INT: 5125,
        RGBA32UI: 36208,
        RGBA16UI: 36214,
        UNSIGNED_INT_SAMPLER_2D: 36306,
        UNPACK_ROW_LENGTH: 3314,
        UNPACK_SKIP_ROWS: 3315,
        UNPACK_SKIP_PIXELS: 3316,
        FLOAT: 5126,
        FLOAT_VEC2: 35664,
        FLOAT_VEC3: 35665,
        FLOAT_VEC4: 35666,
        INT_VEC2: 35667,
        INT_VEC3: 35668,
        INT_VEC4: 35669,
        UNSIGNED_INT_VEC2: 36294,
        UNSIGNED_INT_VEC3: 36295,
        UNSIGNED_INT_VEC4: 36296,
        FLOAT_MAT3: 35675,
        FLOAT_MAT4: 35676
      },
      yt = "_vs2fs_location0";
    const Nt = 0,
      Mt = 4,
      bt = 6,
      Jt = [0, 1, 2, 0, 2, 3],
      Ct = 2048,
      ut = 4,
      Kt = 256,
      ht = 64,
      vt = 268435456,
      Wt = 65536,
      St = /^#version [^\n]*\/\/ program (\S+)$/m;

    function ct(tt) {
      return null === tt.name ? `#${tt.id}` : `#${tt.id} ${tt.name}`
    }
    const Rt = [],
      It = new WeakMap,
      Pt = new WeakMap,
      Zt = {
        context: null,
        inProbe: !1,
        pendingCheck: null,
        shadowBytes: 0,
        uncopied: 0
      };
    let Lt = 1;
    const Ft = new WeakMap;

    function kt(tt) {
      if (null === tt) return 0;
      let et = Ft.get(tt);
      return void 0 === et && (et = Lt++, Ft.set(tt, et)), et
    }
    class Gt {
      constructor(tt, et) {
        this.print = tt, this.now = et, this.shown = 0, this.Pd = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.hE = [], this.dropped = 0
      }
      line(tt) {
        const et = this.now();
        if (et - this.second >= 1e3 && (this.second = et, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.Pd++, void this.store(tt);
        this.shown++, this.inSecond++, this.print(400 === this.shown ? `${tt} (the last line here: the rest go to bloxdDebug.save())` : tt)
      }
      keep(tt) {
        this.sections++, this.store(tt)
      }
      store(tt) {
        this.hE.push(`${new Date(Date.now()).toISOString()} ${tt}`), this.hE.length > 2e4 && (this.hE.shift(), this.dropped++)
      }
      dump() {
        return [`${this.shown} lines logged (above); kept here: ${this.Pd} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.hE].join("\n")
      }
    }
    let zt = null;

    function ot() {
      if (null === zt) {
        const tt = new Gt((tt => {
          (0, Dt.n)("render", tt)
        }), (() => performance.now()));
        (0, Dt.j)("render", (() => tt.dump())), zt = tt
      }
      return zt
    }

    function rt(tt) {
      ot().line(tt)
    }

    function Ut(tt) {
      ot().keep(tt)
    }

    function At(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4096;
      return tt.length <= et ? tt : `${tt.slice(0,et)}... (${tt.length-et} more characters)`
    }

    function it(tt, et, Vt, Ot, qt, Dt) {
      const mt = Zt.pendingCheck;
      if (null === mt) return;
      const dt = "undefined" !== typeof WebGL2RenderingContext && tt instanceof WebGL2RenderingContext,
        jt = {
          gl: tt,
          program: Vt,
          call: Ot,
          nw: qt,
          instances: Dt,
          attributes: [],
          group: -1,
          chunk: "",
          pages: []
        };
      if (mt.draws.push(jt), dt) try {
        const Ot = function(tt) {
          const et = [],
            Vt = new Map,
            Ot = Math.min(16, tt.getParameter(wt.MAX_VERTEX_ATTRIBS));
          for (let qt = 0; qt < Ot; qt++) {
            if (!tt.getVertexAttrib(qt, wt.VERTEX_ATTRIB_ARRAY_ENABLED)) continue;
            const Ot = tt.getVertexAttrib(qt, wt.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING),
              Dt = tt.getVertexAttribOffset(qt, wt.VERTEX_ATTRIB_ARRAY_POINTER),
              mt = tt.getVertexAttrib(qt, wt.VERTEX_ATTRIB_ARRAY_STRIDE),
              dt = tt.getVertexAttrib(qt, wt.VERTEX_ATTRIB_ARRAY_SIZE),
              jt = tt.getVertexAttrib(qt, wt.VERTEX_ATTRIB_ARRAY_TYPE),
              Ht = "VERTEX_ATTRIB_ARRAY_INTEGER" in tt && tt.getVertexAttrib(qt, wt.VERTEX_ATTRIB_ARRAY_INTEGER),
              Xt = "VERTEX_ATTRIB_ARRAY_DIVISOR" in tt ? tt.getVertexAttrib(qt, wt.VERTEX_ATTRIB_ARRAY_DIVISOR) : 0;
            Vt.set(qt, {
              buffer: Ot,
              offset: Dt,
              stride: mt
            }), et.push(`@${qt} buf#${kt(Ot)} +${Dt} stride ${mt} ${dt}x0x${jt.toString(16)}${Ht?" int":""} div ${Xt}`)
          }
          return {
            lines: et,
            byLocation: Vt
          }
        }(tt);
        if (jt.attributes = Ot.lines, "inst" === Vt.terrain) {
          const {
            group: qt,
            chunk: dt
          } = function(tt, et, Vt) {
            const Ot = et.get(bt),
              qt = tt.getVertexAttrib(bt, wt.CURRENT_VERTEX_ATTRIB),
              Dt = Ot ? `+${Ot.offset}` : qt ? Array.from(qt).slice(0, 3).join(",") : "?";
            let mt = Vt.groups.get(Dt);
            return void 0 === mt && (mt = Vt.groups.size, Vt.groups.set(Dt, mt)), {
              group: mt,
              chunk: Dt
            }
          }(tt, Ot.byLocation, mt);
          jt.group = qt, jt.chunk = dt;
          for (const tt of [Nt, Mt]) {
            var Ht;
            const et = null === (Ht = Ot.byLocation.get(tt)) || void 0 === Ht ? void 0 : Ht.buffer;
            et && jt.pages.push({
              kind: "buf",
              buffer: et
            })
          }! function(tt, et, Vt, Ot, qt, Dt, mt) {
            const dt = Ot.get(Nt),
              jt = mt.parts.get(Dt);
            if (void 0 === jt && mt.parts.size >= ut) return;
            const Ht = Math.min(qt, ht, Kt - (null !== jt && void 0 !== jt ? jt : 0));
            if (null === dt || void 0 === dt || !dt.buffer || Ht <= 0) return;
            const Xt = Yt(tt, et, Vt);
            if (!Xt) return;
            const Qt = dt.stride || 12,
              lt = gt(tt, dt.buffer, dt.offset, (Ht - 1) * Qt + 12),
              Et = new DataView(lt.buffer),
              ft = function(tt, et) {
                const Vt = function(tt) {
                    const et = te.get(tt);
                    if (void 0 !== et && (null === et || tt.isProgram(et))) return et;
                    Zt.inProbe = !0;
                    let Vt = null;
                    try {
                      Vt = Bt(tt, st, nt, "fed", "the record feed")
                    } finally {
                      Zt.inProbe = !1
                    }
                    return te.set(tt, Vt), Vt
                  }(tt),
                  Ot = Vt ? Tt(tt, Vt, et, (() => {
                    tt.drawArraysInstanced(wt.POINTS, 0, 1, et)
                  }), "decode probe input (the record feed)") : null;
                return Ot ? new Uint32Array(Ot.buffer) : null
              }(tt, Ht);
            ft || mt.fed.failed++;
            const yt = Tt(tt, Xt, 4 * Ht, (() => {
              tt.drawArraysInstanced(wt.POINTS, 0, 4, Ht)
            }));
            if (!yt) return;
            mt.parts.set(Dt, (null !== jt && void 0 !== jt ? jt : 0) + Ht);
            for (let wt = 0; wt < Ht; wt++) {
              const tt = wt * Qt,
                et = [Et.getUint32(tt, !0), Et.getUint32(tt + 4, !0), Et.getUint32(tt + 8, !0)],
                Vt = ft ? [ft[3 * wt], ft[3 * wt + 1], ft[3 * wt + 2]] : et;
              ft && (mt.fed.records++, Vt.some(((tt, Vt) => tt !== et[Vt])) && (mt.fed.differing++, mt.fed.first.length < 8 && mt.fed.first.push(`part ${Dt} instance ${wt}: fed ${Vt.map(De).join(" ")} buffer ${et.map(De).join(" ")}`)));
              for (let Ot = 0; Ot < 4; Ot++) {
                const tt = 3 * (4 * wt + Ot);
                mt.vertices.push({
                  record: Vt,
                  slot: Ot,
                  group: Dt,
                  gpu: [yt[tt], yt[tt + 1], yt[tt + 2]]
                })
              }
            }
          }(tt, et, Vt, Ot.byLocation, Dt, qt, mt)
        } else {
          const Ot = ee(tt, et, 16),
            Dt = ee(tt, et, 8);
          for (const tt of [Ot, Dt]) tt && jt.pages.push({
            kind: "tex",
            texture: tt
          });
          Ot && function(tt, et, Vt, Ot, qt, Dt) {
            if (Dt.parts.size >= ut) return;
            const mt = Yt(tt, et, Vt);
            if (!mt) return;
            let dt = 6 * Kt;
            const jt = [];
            for (const [Et, ft] of qt) {
              const tt = Math.min(ft, dt, Math.max(6, 6 * Math.floor(Kt / qt.length)));
              tt > 0 && (jt.push([Et, tt]), dt -= tt)
            }
            const Ht = jt.reduce(((tt, et) => {
                let [, Vt] = et;
                return tt + Vt
              }), 0),
              Xt = Tt(tt, mt, Ht, (() => {
                for (const [et, Vt] of jt) tt.drawArrays(wt.POINTS, et, Vt)
              }));
            if (!Xt) return;
            let Qt = 0;
            for (const [Et, ft] of jt) {
              const et = Math.floor(Et / 6),
                Vt = Math.floor((Et + ft - 1) / 6) - et + 1,
                qt = Ve(tt, Ot, Ct, et, Vt);
              for (let tt = Et; tt < Et + ft; tt++, Qt++) {
                var lt;
                const Vt = 4 * (Math.floor(tt / 6) - et),
                  Ot = [qt[Vt], qt[Vt + 1], qt[Vt + 2]];
                Dt.parts.set(qt[Vt + 3], (null !== (lt = Dt.parts.get(qt[Vt + 3])) && void 0 !== lt ? lt : 0) + (tt % 6 === 0 ? 1 : 0)), Dt.vertices.push({
                  record: Ot,
                  slot: Jt[tt % 6],
                  group: qt[Vt + 3],
                  gpu: [Xt[3 * Qt], Xt[3 * Qt + 1], Xt[3 * Qt + 2]]
                })
              }
            }
          }(tt, et, Vt, Ot, qt, mt)
        }
      } catch (Xt) {
        rt(`decode probe failed on program ${ct(Vt)}: ${String(Xt)}`)
      }
    }

    function Yt(tt, et, Vt) {
      if (void 0 !== Vt.probe) return Vt.probe && pt(tt, et, Vt.probe), Vt.probe;
      Vt.probe = null, Zt.inProbe = !0;
      try {
        Vt.probe = function(tt, et) {
          return Bt(tt, (Vt = et.vertex, Vt.replace(`\nvec3 ${yt} = vec3(0);\n`, `\nout vec3 ${yt};\n`)), et.fragment, yt, `program ${ct(et)}'s twin`);
          var Vt
        }(tt, Vt)
      } finally {
        Zt.inProbe = !1
      }
      return Vt.probe && pt(tt, et, Vt.probe), Vt.probe
    }

    function Bt(tt, et, Vt, Ot, qt) {
      const Dt = [tt.createShader(wt.VERTEX_SHADER), tt.createShader(wt.FRAGMENT_SHADER)],
        mt = tt.createProgram();
      if (!mt || !Dt[0] || !Dt[1]) return null;
      tt.shaderSource(Dt[0], et), tt.shaderSource(Dt[1], Vt);
      for (const jt of Dt) tt.compileShader(jt), tt.attachShader(mt, jt);
      tt.transformFeedbackVaryings(mt, [Ot], wt.INTERLEAVED_ATTRIBS), tt.linkProgram(mt);
      for (const jt of Dt) tt.deleteShader(jt);
      var dt;
      return tt.getProgramParameter(mt, wt.LINK_STATUS) ? mt : (rt(`decode probe: ${qt} failed to link: ${At(null!==(dt=tt.getProgramInfoLog(mt))&&void 0!==dt?dt:"",300)}`), tt.deleteProgram(mt), null)
    }

    function pt(tt, et, Vt) {
      const Ot = tt.getProgramParameter(et, wt.ACTIVE_UNIFORM_BLOCKS);
      for (let dt = 0; dt < Ot; dt++) {
        const Ot = tt.getActiveUniformBlockName(et, dt),
          qt = null === Ot ? wt.INVALID_INDEX : tt.getUniformBlockIndex(Vt, Ot);
        qt !== wt.INVALID_INDEX && tt.uniformBlockBinding(Vt, qt, tt.getActiveUniformBlockParameter(et, dt, wt.UNIFORM_BLOCK_BINDING))
      }
      const qt = tt.getParameter(wt.CURRENT_PROGRAM);
      tt.useProgram(Vt);
      const Dt = tt.getProgramParameter(et, wt.ACTIVE_UNIFORMS),
        mt = tt.getActiveUniforms(et, [...Array(Dt).keys()], wt.UNIFORM_BLOCK_INDEX);
      for (let dt = 0; dt < Dt; dt++) {
        const Ot = tt.getActiveUniform(et, dt);
        if (!Ot || -1 !== mt[dt]) continue;
        const qt = Ot.name.replace(/\[0\]$/, "");
        for (let Dt = 0; Dt < Ot.size; Dt++) {
          const mt = Ot.size > 1 ? `${qt}[${Dt}]` : Ot.name,
            dt = tt.getUniformLocation(et, mt),
            jt = tt.getUniformLocation(Vt, mt);
          dt && jt && xt(tt, jt, Ot.type, tt.getUniform(et, dt))
        }
      }
      tt.useProgram(qt)
    }

    function xt(tt, et, Vt, Ot) {
      const qt = ArrayBuffer.isView(Ot) ? Array.from(Ot) : [Number(Ot)];
      switch (Vt) {
        case wt.FLOAT:
          return void tt.uniform1f(et, qt[0]);
        case wt.FLOAT_VEC2:
          return void tt.uniform2fv(et, qt);
        case wt.FLOAT_VEC3:
          return void tt.uniform3fv(et, qt);
        case wt.FLOAT_VEC4:
          return void tt.uniform4fv(et, qt);
        case wt.FLOAT_MAT3:
          return void tt.uniformMatrix3fv(et, !1, qt);
        case wt.FLOAT_MAT4:
          return void tt.uniformMatrix4fv(et, !1, qt);
        case wt.UNSIGNED_INT:
          return void tt.uniform1ui(et, qt[0]);
        case wt.UNSIGNED_INT_VEC2:
          return void tt.uniform2uiv(et, qt);
        case wt.UNSIGNED_INT_VEC3:
          return void tt.uniform3uiv(et, qt);
        case wt.UNSIGNED_INT_VEC4:
          return void tt.uniform4uiv(et, qt);
        case wt.INT_VEC2:
          return void tt.uniform2iv(et, qt);
        case wt.INT_VEC3:
          return void tt.uniform3iv(et, qt);
        case wt.INT_VEC4:
          return void tt.uniform4iv(et, qt);
        default:
          tt.uniform1i(et, qt[0])
      }
    }

    function Tt(tt, et, Vt, Ot) {
      let qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "decode probe";
      const Dt = tt.getParameter(wt.CURRENT_PROGRAM),
        mt = tt.getParameter(wt.TRANSFORM_FEEDBACK_BINDING),
        dt = tt.getParameter(wt.TRANSFORM_FEEDBACK_BUFFER_BINDING),
        jt = tt.getParameter(wt.COPY_READ_BUFFER_BINDING),
        Ht = tt.isEnabled(wt.RASTERIZER_DISCARD),
        Xt = tt.createTransformFeedback(),
        Qt = tt.createBuffer();
      Zt.inProbe = !0;
      try {
        const Dt = tt.getError();
        Dt !== wt.NO_ERROR && rt(`GL error 0x${Dt.toString(16)} pending before the decode probe (the renderer's)`), tt.useProgram(et), tt.bindTransformFeedback(wt.TRANSFORM_FEEDBACK, Xt), tt.bindBuffer(wt.TRANSFORM_FEEDBACK_BUFFER, Qt), tt.bufferData(wt.TRANSFORM_FEEDBACK_BUFFER, 12 * Vt, wt.STREAM_READ), tt.bindBufferBase(wt.TRANSFORM_FEEDBACK_BUFFER, 0, Qt), tt.enable(wt.RASTERIZER_DISCARD), tt.beginTransformFeedback(wt.POINTS), Ot(), tt.endTransformFeedback(), tt.bindBufferBase(wt.TRANSFORM_FEEDBACK_BUFFER, 0, null);
        const mt = tt.getError();
        if (mt !== wt.NO_ERROR) return rt(`${qt}: GL error 0x${mt.toString(16)} on the feedback draw`), null;
        const dt = new Float32Array(3 * Vt);
        return tt.bindBuffer(wt.COPY_READ_BUFFER, Qt), tt.getBufferSubData(wt.COPY_READ_BUFFER, 0, dt), dt
      } finally {
        Ht || tt.disable(wt.RASTERIZER_DISCARD), tt.bindTransformFeedback(wt.TRANSFORM_FEEDBACK, mt), tt.bindBuffer(wt.TRANSFORM_FEEDBACK_BUFFER, dt), tt.bindBuffer(wt.COPY_READ_BUFFER, jt), tt.deleteTransformFeedback(Xt), tt.deleteBuffer(Qt), tt.useProgram(Dt), Zt.inProbe = !1
      }
    }

    function gt(tt, et, Vt, Ot) {
      const qt = tt.getParameter(wt.COPY_READ_BUFFER_BINDING),
        Dt = new Uint8Array(Ot);
      return tt.bindBuffer(wt.COPY_READ_BUFFER, et), tt.getBufferSubData(wt.COPY_READ_BUFFER, Vt, Dt), tt.bindBuffer(wt.COPY_READ_BUFFER, qt), Dt
    }
    const st = `#version 300 es\nlayout(location = ${Nt}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
      nt = "#version 300 es\nprecision highp float;\nout vec4 color;\nvoid main() {\n\tcolor = vec4(0.0);\n}\n",
      te = new WeakMap;

    function ee(tt, et, Vt) {
      const Ot = tt.getProgramParameter(et, wt.ACTIVE_UNIFORMS),
        qt = tt.getParameter(wt.ACTIVE_TEXTURE);
      try {
        for (let qt = 0; qt < Ot; qt++) {
          const Ot = tt.getActiveUniform(et, qt);
          if ((null === Ot || void 0 === Ot ? void 0 : Ot.type) !== wt.UNSIGNED_INT_SAMPLER_2D) continue;
          const Dt = tt.getUniformLocation(et, Ot.name),
            mt = Dt ? tt.getUniform(et, Dt) : -1;
          if (mt < 0) continue;
          tt.activeTexture(wt.TEXTURE0 + mt);
          const dt = tt.getParameter(wt.TEXTURE_BINDING_2D);
          if (dt && Pt.get(dt) === Vt) return dt
        }
        return null
      } finally {
        tt.activeTexture(qt)
      }
    }

    function Ve(tt, et, Vt, Ot, qt) {
      const Dt = new Uint32Array(4 * qt),
        mt = tt.getParameter(wt.READ_FRAMEBUFFER_BINDING),
        dt = tt.createFramebuffer();
      tt.bindFramebuffer(wt.READ_FRAMEBUFFER, dt), tt.framebufferTexture2D(wt.READ_FRAMEBUFFER, wt.COLOR_ATTACHMENT0, wt.TEXTURE_2D, et, 0);
      try {
        let et = 0;
        for (; et < qt;) {
          const mt = Ot + et,
            dt = mt % Vt,
            jt = Math.min(qt - et, Vt - dt);
          tt.readPixels(dt, Math.floor(mt / Vt), jt, 1, wt.RGBA_INTEGER, wt.UNSIGNED_INT, Dt.subarray(4 * et, 4 * (et + jt))), et += jt
        }
      } finally {
        tt.bindFramebuffer(wt.READ_FRAMEBUFFER, mt), tt.deleteFramebuffer(dt)
      }
      return Dt
    }

    function Oe(tt, et, Vt) {
      let Ot = 0,
        qt = 0;
      for (let jt = 0; jt < et.bytes.length; jt += Wt) {
        Ot++;
        const tt = Math.min(jt + Wt, et.bytes.length);
        Et(et.bytes.subarray(jt, tt)) !== Et(Vt.subarray(jt, tt)) && qt++
      }
      const Dt = `${tt} ${et.bytes.length} B cpu ${Et(et.bytes).toString(16)} gpu ${Et(Vt).toString(16)}, ${qt}/${Ot} blocks differ${et.missed?`, ${et.missed} GPU-side writes uncopied`:""}`;
      if (0 === qt) return Dt;
      const {
        count: mt,
        offsets: dt
      } = function(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8;
        const Ot = Math.min(tt.length, et.length);
        let qt = Math.abs(tt.length - et.length);
        const Dt = [];
        for (let mt = 0; mt < Ot; mt++) tt[mt] !== et[mt] && (qt++, Dt.length < Vt && Dt.push(mt));
        return {
          count: qt,
          offsets: Dt
        }
      }(et.bytes, Vt);
      return Ut([`${Dt}: ${mt} bytes differ`, ...dt.map((tt => `  +${tt}: cpu ${ft(et.bytes,tt)} | gpu ${ft(Vt,tt)}`))].join("\n")), `${Dt}: ${mt} bytes differ, first at ${dt.join(", ")} (context in the saved file)`
    }

    function qe(tt) {
      if (0 === tt.vertices.length) return void rt(`decode probe (${tt.reason}): no terrain draw probed (${tt.draws.length} seen)`);
      const et = function(tt) {
          const et = new Map;
          for (const Ot of tt) {
            const tt = et.get(Ot.group);
            tt ? tt.push(Ot) : et.set(Ot.group, [Ot])
          }
          const Vt = {
            vertices: tt.length,
            mismatches: 0,
            byDirection: new Array(8).fill(0),
            byDiagonal: [0, 0],
            byBand: {},
            translations: new Map,
            first: []
          };
          for (const [Ot, qt] of et) {
            const tt = new Map,
              et = qt.map((et => {
                const Vt = Xt(et.record, et.slot),
                  Ot = [et.gpu[0] - Vt[0], et.gpu[1] - Vt[1], et.gpu[2] - Vt[2]],
                  qt = Ot.map((tt => Math.round(64 * tt))).join(","),
                  Dt = tt.get(qt);
                return Dt ? Dt.count++ : tt.set(qt, {
                  count: 1,
                  offset: Ot
                }), Vt
              }));
            let Dt = [0, 0, 0],
              mt = 0;
            for (const Vt of tt.values()) Vt.count > mt && (mt = Vt.count, Dt = Vt.offset);
            Vt.translations.set(Ot, Dt), qt.forEach(((tt, Ot) => {
              var qt;
              const mt = [et[Ot][0] + Dt[0], et[Ot][1] + Dt[1], et[Ot][2] + Dt[2]];
              if (mt.every(((et, Vt) => {
                  return Ot = tt.gpu[Vt], qt = et, Math.abs(Ot - qt) <= Math.max(.001, 1e-6 * Math.abs(qt));
                  var Ot, qt
                }))) return;
              Vt.mismatches++, Vt.byDirection[dt(tt.record[2])]++, Vt.byDiagonal[jt(tt.record[2])]++;
              const Ht = Qt(tt.record);
              Vt.byBand[Ht] = (null !== (qt = Vt.byBand[Ht]) && void 0 !== qt ? qt : 0) + 1, Vt.first.length < lt && Vt.first.push({
                ...tt,
                expected: mt
              })
            }))
          }
          return Vt
        }(tt.vertices),
        Vt = et.byDirection.map(((tt, et) => tt ? `${mt[et]} ${tt}` : "")).filter(Boolean).join(" "),
        Ot = Object.entries(et.byBand).map((tt => {
          let [et, Vt] = tt;
          return `${et}: ${Vt}`
        })).join(" ");
      if (rt(`decode probe (${tt.reason}): ${et.mismatches}/${et.vertices} vertices differ from the CPU decode over ${tt.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (et.mismatches ? ` by direction [${Vt}] diagonal [0: ${et.byDiagonal[0]} 1: ${et.byDiagonal[1]}] extent [${Ot}]` : "")), tt.fed.records > 0 || tt.fed.failed > 0) {
        rt(`decode probe input: ${tt.fed.differing}/${tt.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (tt.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (tt.fed.failed ? `; the feed failed on ${tt.fed.failed} draws, whose decode is held to the buffer's readback` : ""));
        for (const et of tt.fed.first) rt(`  ${et}`)
      }
      for (const qt of et.first) {
        const [tt, et, Vt] = qt.record;
        rt(`  mismatch part ${qt.group} r0 ${tt.toString(16)} r1 ${et.toString(16)} r2 ${Vt.toString(16)} slot ${qt.slot} (${mt[dt(Vt)]}): expected ${qt.expected.map(me).join(",")} gpu ${qt.gpu.map(me).join(",")}`)
      }
      Ut(`decode probe translations: ${[...et.translations].map((tt=>{let[et,Vt]=tt;return`${et}: ${Vt.map(me).join(",")}`})).join("; ")}`)
    }

    function De(tt) {
      return tt.toString(16)
    }

    function me(tt) {
      return Number.isInteger(tt) ? String(tt) : tt.toFixed(3)
    }

    function de(tt) {
      return null !== Zt.pendingCheck ? Promise.resolve() : new Promise((et => {
        let Vt = !1;
        const Ot = {
          reason: tt,
          terrainDraws: 0,
          draws: [],
          vertices: [],
          parts: new Map,
          groups: new Map,
          fed: {
            records: 0,
            differing: 0,
            first: [],
            failed: 0
          }
        };
        Zt.pendingCheck = Ot;
        const qt = () => {
            Zt.pendingCheck = null;
            try {
              ! function(tt) {
                rt(`draw ranges (${tt.reason}): ${tt.terrainDraws} terrain draws in the frame, the first ${tt.draws.length} here`);
                for (const et of tt.draws) {
                  const tt = et.nw.slice(0, 8).map((tt => {
                      let [et, Vt] = tt;
                      return `${et}+${Vt}`
                    })).join(" "),
                    Vt = et.nw.length > 8 ? ` (+${et.nw.length-8} ranges)` : "";
                  rt(`  ${ct(et.program)} ${et.program.terrain} ${et.call} ${tt}${Vt} x${et.instances}${et.group>=0?` part ${et.group} chunk ${et.chunk}`:""} | ${et.attributes.join(" | ")}`)
                }
              }(Ot), qe(Ot);
              Ot.draws.some((tt => "undefined" !== typeof WebGL2RenderingContext && tt.gl instanceof WebGL2RenderingContext)) || 0 === Ot.draws.length ? function(tt) {
                const et = [],
                  Vt = new Map;
                for (const Ot of tt)
                  if ("undefined" !== typeof WebGL2RenderingContext && Ot.gl instanceof WebGL2RenderingContext)
                    for (const tt of Ot.pages) Vt.set("buf" === tt.kind ? tt.buffer : tt.texture, {
                      page: tt,
                      gl: Ot.gl
                    });
                for (const [Ot, {
                    page: qt,
                    gl: Dt
                  }] of Vt) {
                  const tt = It.get(Ot);
                  if (!tt) {
                    et.push(`${qt.kind}#${kt(Ot)}: no CPU copy (${Zt.uncopied} pages over the copy budget)`);
                    continue
                  }
                  if ("buf" === qt.kind) {
                    et.push(Oe(`buf#${tt.id}`, tt, gt(Dt, qt.buffer, 0, tt.bytes.length)));
                    continue
                  }
                  const Vt = Ve(Dt, qt.texture, tt.width, 0, tt.width * tt.height),
                    mt = 16 === tt.texelBytes ? new Uint8Array(Vt.buffer) : new Uint8Array(new Uint16Array(Vt).buffer);
                  et.push(Oe(`tex#${tt.id} (${16===tt.texelBytes?"records":"light"})`, tt, mt))
                }
                for (const Ot of et) rt(`page readback ${Ot}`)
              }(Ot.draws) : rt("page readback: none on WebGL1 (no buffer readback)")
            } catch (tt) {
              rt(`check failed: ${String(tt)}`)
            }
            et()
          },
          Dt = () => {
            if (Ot.draws.length > 0 && !Vt) return Vt = !0, void setTimeout(qt, 0);
            Vt || requestAnimationFrame(Dt)
          };
        requestAnimationFrame(Dt), setTimeout((() => {
          Vt || (Vt = !0, qt())
        }), 5e3)
      }))
    }
    var je = Vt(4851);
    const He = 20,
      Xe = 24,
      Qe = Reflect.apply;

    function le(tt, et, Vt) {
      if (!tt) return;
      const Ot = tt[et];
      if ("function" === typeof Ot) {
        const qt = Vt(Ot);
        tt[et] = qt, (0, je.v)(qt, Ot)
      }
    }
    let Ee = !1;
    const fe = new WeakMap,
      we = new WeakMap,
      ye = new WeakMap,
      Ne = {
        gl: 0,
        lost: 0
      };
    let ae = {
        inst: {
          draws: 0,
          faces: 0
        },
        tex: {
          draws: 0,
          faces: 0
        },
        other: {
          draws: 0,
          faces: 0
        }
      },
      Me = {
        buffer: 0,
        texture: 0
      },
      be = 0;

    function Je(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      if (tt instanceof ArrayBuffer) return new Uint8Array(tt, et, Vt || void 0);
      if (!ArrayBuffer.isView(tt)) return null;
      const Ot = "BYTES_PER_ELEMENT" in tt ? tt.BYTES_PER_ELEMENT : 1,
        qt = tt.byteOffset + et * Ot,
        Dt = Vt ? Vt * Ot : tt.byteLength - et * Ot;
      return new Uint8Array(tt.buffer, qt, Math.max(0, Dt))
    }

    function Ce(tt, et) {
      const Vt = function(tt) {
        switch (tt) {
          case wt.ARRAY_BUFFER:
            return wt.ARRAY_BUFFER_BINDING;
          case wt.ELEMENT_ARRAY_BUFFER:
            return wt.ELEMENT_ARRAY_BUFFER_BINDING;
          case wt.COPY_READ_BUFFER:
            return wt.COPY_READ_BUFFER_BINDING;
          case wt.COPY_WRITE_BUFFER:
            return wt.COPY_WRITE_BUFFER_BINDING;
          case wt.UNIFORM_BUFFER:
            return wt.UNIFORM_BUFFER_BINDING;
          case wt.PIXEL_UNPACK_BUFFER:
            return wt.PIXEL_UNPACK_BUFFER_BINDING;
          case wt.TRANSFORM_FEEDBACK_BUFFER:
            return wt.TRANSFORM_FEEDBACK_BUFFER_BINDING;
          default:
            return 0
        }
      }(et);
      return Vt ? tt.getParameter(Vt) : null
    }

    function ue(tt) {
      const et = It.get(tt);
      et && (Zt.shadowBytes -= et.bytes.length, It.delete(tt))
    }

    function Ke(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      ue(tt), Zt.shadowBytes + et > vt ? Zt.uncopied++ : (Zt.shadowBytes += et, It.set(tt, {
        id: kt(tt),
        bytes: new Uint8Array(et),
        width: Vt,
        height: Ot,
        texelBytes: qt,
        missed: 0
      }))
    }

    function he(tt, et) {
      for (const Vt of ["deleteBuffer", "deleteTexture"]) le(tt, Vt, (tt => function() {
        for (var et = arguments.length, Vt = new Array(et), Ot = 0; Ot < et; Ot++) Vt[Ot] = arguments[Ot];
        return Vt[0] && ue(Vt[0]), Qe(tt, this, Vt)
      }));
      le(tt, "shaderSource", (tt => function() {
        for (var et = arguments.length, Vt = new Array(et), Ot = 0; Ot < et; Ot++) Vt[Ot] = arguments[Ot];
        return Vt[0] && "string" === typeof Vt[1] && fe.set(Vt[0], Vt[1]), Qe(tt, this, Vt)
      })), le(tt, "attachShader", (tt => function() {
        for (var et, Vt = arguments.length, Ot = new Array(Vt), qt = 0; qt < Vt; qt++) Ot[qt] = arguments[qt];
        const Dt = Ot[0],
          mt = null !== (et = we.get(Dt)) && void 0 !== et ? et : [];
        return mt.push(Ot[1]), we.set(Dt, mt), Qe(tt, this, Ot)
      })), le(tt, "linkProgram", (tt => function() {
        for (var et = arguments.length, Vt = new Array(et), Ot = 0; Ot < et; Ot++) Vt[Ot] = arguments[Ot];
        const qt = Qe(tt, this, Vt);
        return Zt.inProbe || function(tt, et) {
          var Vt, Ot, qt;
          "undefined" !== typeof HTMLCanvasElement && tt.canvas instanceof HTMLCanvasElement && function(tt) {
            if (Ie.has(tt)) return;
            Ie.add(tt);
            for (const et of ["webglcontextlost", "webglcontextrestored", "webglcontextcreationerror"]) tt.addEventListener(et, (tt => {
              Ne.lost < He && (Ne.lost++, rt(`${et}${"statusMessage"in tt?`: ${String(tt.statusMessage)}`:""}`))
            }))
          }(tt.canvas);
          Zt.context ??= tt;
          const Dt = null !== (Vt = we.get(et)) && void 0 !== Vt ? Vt : [];
          let mt = "",
            dt = "";
          for (const Xt of Dt) {
            var jt;
            const tt = null !== (jt = fe.get(Xt)) && void 0 !== jt ? jt : "";
            /\bgl_Position\b/.test(tt) ? mt = tt : dt = tt
          }
          const Ht = {
            id: kt(et),
            name: null !== (Ot = null === (qt = St.exec(mt)) || void 0 === qt ? void 0 : qt[1]) && void 0 !== Ot ? Ot : null,
            gl: tt,
            vertex: mt,
            fragment: dt,
            terrain: We(mt),
            checked: !1,
            firstDraw: !1
          };
          if (ye.set(et, Ht), Rt.push([et, Ht]), null !== Ht.terrain) {
            const et = Dt.map((et => {
              var Vt;
              return null !== (Vt = tt.getShaderInfoLog(et)) && void 0 !== Vt ? Vt : ""
            })).filter((tt => "" !== tt.trim()));
            et.length > 0 && Ut(`program ${ct(Ht)} (${Ht.terrain}) shader logs:\n${At(et.join("\n"))}`)
          }
        }(this, Vt[0]), qt
      })), le(tt, "bufferData", (tt => function() {
        for (var et = arguments.length, Vt = new Array(et), Ot = 0; Ot < et; Ot++) Vt[Ot] = arguments[Ot];
        const qt = Qe(tt, this, Vt);
        if (!Zt.inProbe) {
          const tt = Ce(this, Vt[0]);
          if (tt) {
            var Dt, mt, dt;
            const et = "number" === typeof Vt[1] ? null : Je(Vt[1], null !== (Dt = Vt[3]) && void 0 !== Dt ? Dt : 0, null !== (mt = Vt[4]) && void 0 !== mt ? mt : 0);
            var jt;
            if (Ke(tt, "number" === typeof Vt[1] ? Vt[1] : null !== (dt = null === et || void 0 === et ? void 0 : et.length) && void 0 !== dt ? dt : 0), et) null === (jt = It.get(tt)) || void 0 === jt || jt.bytes.set(et)
          }
        }
        return qt
      })), le(tt, "bufferSubData", (tt => function() {
        for (var et = arguments.length, Vt = new Array(et), Ot = 0; Ot < et; Ot++) Vt[Ot] = arguments[Ot];
        const qt = Qe(tt, this, Vt);
        if (!Zt.inProbe) {
          var Dt, mt;
          const tt = Ce(this, Vt[0]),
            et = tt ? It.get(tt) : void 0,
            Ot = Je(Vt[2], null !== (Dt = Vt[3]) && void 0 !== Dt ? Dt : 0, null !== (mt = Vt[4]) && void 0 !== mt ? mt : 0);
          if (et && Ot) {
            const tt = Vt[1];
            et.bytes.set(Ot.subarray(0, Math.max(0, et.bytes.length - tt)), tt), ve("buffer", et, tt, Ot.length)
          }
        }
        return qt
      })), et && (le(tt, "copyBufferSubData", (tt => function() {
        for (var et = arguments.length, Vt = new Array(et), Ot = 0; Ot < et; Ot++) Vt[Ot] = arguments[Ot];
        const qt = Qe(tt, this, Vt);
        if (!Zt.inProbe) {
          const [tt, et, Ot, qt, Dt] = Vt, mt = Ce(this, tt), dt = Ce(this, et), jt = mt ? It.get(mt) : void 0, Ht = dt ? It.get(dt) : void 0;
          Ht && (jt ? Ht.bytes.set(jt.bytes.slice(Ot, Ot + Dt), qt) : Ht.missed++)
        }
        return qt
      })), le(tt, "texStorage2D", (tt => function() {
        for (var et = arguments.length, Vt = new Array(et), Ot = 0; Ot < et; Ot++) Vt[Ot] = arguments[Ot];
        const qt = Qe(tt, this, Vt),
          [, , Dt, mt, dt] = Vt;
        if (!Zt.inProbe && (Dt === wt.RGBA32UI || Dt === wt.RGBA16UI)) {
          const tt = this.getParameter(wt.TEXTURE_BINDING_2D),
            et = Dt === wt.RGBA32UI ? 16 : 8;
          tt && (Pt.set(tt, et), Ke(tt, mt * dt * et, mt, dt, et))
        }
        return qt
      })), le(tt, "texSubImage2D", (tt => function() {
        for (var et = arguments.length, Vt = new Array(et), Ot = 0; Ot < et; Ot++) Vt[Ot] = arguments[Ot];
        const qt = Qe(tt, this, Vt);
        return !Zt.inProbe && Vt.length >= 9 && Vt[0] === wt.TEXTURE_2D && 0 === Vt[1] && function(tt, et) {
          var Vt;
          const Ot = tt.getParameter(wt.TEXTURE_BINDING_2D),
            qt = Ot ? It.get(Ot) : void 0;
          if (!qt) return;
          const [, , Dt, mt, dt, jt] = et;
          let Ht = Je(et[8], null !== (Vt = et[9]) && void 0 !== Vt ? Vt : 0);
          if (null === Ht && "number" === typeof et[8]) {
            const Vt = Ce(tt, wt.PIXEL_UNPACK_BUFFER),
              Ot = Vt ? It.get(Vt) : void 0;
            Ht = Ot ? Ot.bytes.subarray(et[8]) : null
          }
          if (null === Ht) return void qt.missed++;
          const Xt = tt.getParameter(wt.UNPACK_ROW_LENGTH) || dt,
            Qt = tt.getParameter(wt.UNPACK_SKIP_ROWS),
            lt = tt.getParameter(wt.UNPACK_SKIP_PIXELS),
            Et = qt.texelBytes;
          for (let ft = 0; ft < jt; ft++) {
            const tt = ((Qt + ft) * Xt + lt) * Et,
              et = ((mt + ft) * qt.width + Dt) * Et;
            qt.bytes.set(Ht.subarray(tt, tt + dt * Et), et)
          }
          ve("texture", qt, (mt * qt.width + Dt) * Et, dt * jt * Et)
        }(this, Vt), qt
      })), le(tt, "copyTexSubImage2D", (tt => function() {
        for (var et = arguments.length, Vt = new Array(et), Ot = 0; Ot < et; Ot++) Vt[Ot] = arguments[Ot];
        const qt = Vt[0] === wt.TEXTURE_2D ? this.getParameter(wt.TEXTURE_BINDING_2D) : null,
          Dt = qt ? It.get(qt) : void 0;
        return Dt && Dt.missed++, Qe(tt, this, Vt)
      })));
      for (const Vt of ["drawArrays", "drawElements", "drawArraysInstanced", "drawElementsInstanced"]) le(tt, Vt, (tt => function() {
        for (var et = arguments.length, Ot = new Array(et), qt = 0; qt < et; qt++) Ot[qt] = arguments[qt];
        const Dt = Qe(tt, this, Ot);
        return Zt.inProbe || ce(this, Vt, Ot), Dt
      }));
      le(tt, "getExtension", (tt => function() {
        for (var et = arguments.length, Vt = new Array(et), Ot = 0; Ot < et; Ot++) Vt[Ot] = arguments[Ot];
        const qt = Qe(tt, this, Vt);
        return qt && "object" === typeof qt && function(tt, et, Vt) {
          const Ot = {
            WEBGL_multi_draw: ["multiDrawArraysWEBGL", "multiDrawElementsWEBGL", "multiDrawArraysInstancedWEBGL", "multiDrawElementsInstancedWEBGL"],
            ANGLE_instanced_arrays: ["drawArraysInstancedANGLE", "drawElementsInstancedANGLE"]
          };
          if (!(et in Ot) || Vt.bloxdRenderDebug) return;
          Vt.bloxdRenderDebug = !0;
          for (const qt of Ot[et]) {
            const et = Vt[qt];
            "function" === typeof et && (Vt[qt] = function() {
              for (var Ot = arguments.length, Dt = new Array(Ot), mt = 0; mt < Ot; mt++) Dt[mt] = arguments[mt];
              const dt = Qe(et, Vt, Dt);
              return Zt.inProbe || ce(tt, qt, Dt), dt
            })
          }
        }(this, Vt[0], qt), qt
      }))
    }

    function ve(tt, et, Vt, Ot) {
      Me[tt] += Ot, be < 32 && et.bytes.length >= 1 << 20 && (be++, Ut(`upload ${tt} #${et.id} +${Vt} ${Ot} B`))
    }

    function We(tt) {
      if (!tt.includes("decodeQuad")) return null;
      return !/^\s*#version 300 es/.test(tt) || /in uvec3 _p2vs_location0\b/.test(tt) ? "inst" : "tex"
    }

    function Se(tt, et, Vt) {
      var Ot;
      if (Vt.checked) return;
      Vt.checked = !0;
      const qt = tt.getProgramParameter(et, wt.LINK_STATUS),
        Dt = (null !== (Ot = tt.getProgramInfoLog(et)) && void 0 !== Ot ? Ot : "").trim();
      var mt;
      null === Vt.terrain && qt || (rt(`program ${ct(Vt)} ${null!==(mt=Vt.terrain)&&void 0!==mt?mt:"other"} link ${qt?"ok":"FAILED"}${Dt?`: ${At(Dt,300)}`:""}`), Dt && Ut(`program ${ct(Vt)} link log:\n${At(Dt)}`))
    }

    function ce(tt, et, Vt) {
      var Ot;
      const qt = tt.getParameter(wt.CURRENT_PROGRAM),
        Dt = qt ? ye.get(qt) : void 0;
      if (!qt || !Dt) return;
      const mt = null !== (Ot = Dt.terrain) && void 0 !== Ot ? Ot : "other",
        {
          nw: dt,
          instances: jt
        } = function(tt, et) {
          switch (tt) {
            case "drawArrays":
              return {
                nw: [
                  [et[1], et[2]]
                ], instances: 1
              };
            case "drawArraysInstanced":
            case "drawArraysInstancedANGLE":
              return {
                nw: [
                  [et[1], et[2]]
                ], instances: et[3]
              };
            case "drawElements":
              return {
                nw: [
                  [0, et[1]]
                ], instances: 1
              };
            case "drawElementsInstanced":
            case "drawElementsInstancedANGLE":
              return {
                nw: [
                  [0, et[1]]
                ], instances: et[4]
              };
            case "multiDrawArraysWEBGL": {
              const tt = et[1],
                Vt = et[3],
                Ot = et[2],
                qt = et[4],
                Dt = [];
              for (let mt = 0; mt < et[5]; mt++) Dt.push([tt[Ot + mt], Vt[qt + mt]]);
              return {
                nw: Dt,
                instances: 1
              }
            }
            default:
              return {
                nw: [], instances: 0
              }
          }
        }(et, Vt),
        Ht = "inst" === Dt.terrain ? jt : dt.reduce(((tt, et) => {
          let [, Vt] = et;
          return tt + Vt
        }), 0) / 6;
      if (ae[mt].draws++, ae[mt].faces += Ht, null === Dt.terrain) return;
      if (Zt.context = tt, !Dt.firstDraw) {
        Dt.firstDraw = !0, Se(tt, qt, Dt), Re || (Re = !0, rt(function(tt) {
          var et;
          const Vt = tt.getParameter(wt.DEPTH_FUNC),
            Ot = {
              513: "less",
              514: "equal",
              515: "lequal",
              516: "greater",
              518: "gequal",
              519: "always"
            };
          let qt = "default framebuffer";
          if ("DRAW_FRAMEBUFFER" in tt && tt.getParameter(wt.DRAW_FRAMEBUFFER_BINDING)) {
            const et = tt;
            qt = et.getFramebufferAttachmentParameter(wt.DRAW_FRAMEBUFFER, wt.DEPTH_ATTACHMENT, wt.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(et.getFramebufferAttachmentParameter(wt.DRAW_FRAMEBUFFER,wt.DEPTH_ATTACHMENT,wt.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type 0x${Number(et.getFramebufferAttachmentParameter(wt.DRAW_FRAMEBUFFER,wt.DEPTH_ATTACHMENT,wt.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE)).toString(16)}` : "no depth attachment"
          }
          const Dt = tt.getParameter(wt.DEPTH_CLEAR_VALUE);
          return `depth ${null!==(et=Ot[Vt])&&void 0!==et?et:`0x${Vt.toString(16)}`} clear ${Dt}${516===Vt||518===Vt?" (reverse-Z)":""}, samples ${String(tt.getParameter(wt.SAMPLES))}, ${qt}`
        }(tt)));
        const Vt = tt.getError();
        Vt !== wt.NO_ERROR && Ne.gl < He && (Ne.gl++, rt(`GL error 0x${Vt.toString(16)} after program ${ct(Dt)}'s first terrain draw (${et})`))
      }
      const Xt = Zt.pendingCheck;
      null !== Xt && (Xt.terrainDraws++, Xt.draws.length < Xe && it(tt, qt, Dt, et, dt, jt))
    }
    let Re = !1;
    const Ie = new WeakSet;
    var Pe = Vt(4646),
      Ze = Vt(4859);
    const Le = ["maxStorageBuffersPerShaderStage", "maxStorageBufferBindingSize", "maxBufferSize", "maxUniformBufferBindingSize", "minUniformBufferOffsetAlignment", "maxTextureDimension2D", "maxTextureArrayLayers", "maxVertexBuffers", "maxVertexAttributes", "maxVertexBufferArrayStride", "maxBindGroups", "maxColorAttachmentBytesPerSample"];
    let Fe = !1;
    const ke = new WeakSet,
      Ge = new WeakMap,
      ze = new WeakMap,
      oe = {
        uncaptured: 0,
        compile: 0,
        rejected: 0
      };
    let re = 0,
      Ue = !1,
      Ae = null,
      ie = {
        draws: 0,
        faces: 0
      };

    function Ye(tt) {
      const et = globalThis[tt];
      return null === et || void 0 === et ? void 0 : et.prototype
    }

    function Be(tt) {
      return tt && "function" === typeof tt[Symbol.iterator] ? [...tt].sort().join(" ") : ""
    }

    function pe(tt, et) {
      const Vt = null !== tt && void 0 !== tt ? tt : {},
        Ot = null !== et && void 0 !== et ? et : Object.keys(Object.getPrototypeOf(Vt)).concat(Object.keys(Vt));
      return [...new Set(Ot)].filter((tt => "number" === typeof Vt[tt])).map((tt => `${tt} ${String(Vt[tt])}`)).join(", ")
    }

    function xe(tt, et) {
      var Vt;
      const Ot = null !== (Vt = et.vertex) && void 0 !== Vt ? Vt : {};
      if (Ot.module && ke.has(Ot.module)) {
        var qt;
        const Vt = String(null !== (qt = Ot.entryPoint) && void 0 !== qt ? qt : "");
        if (Vt.startsWith("vs_packed") && Ge.set(tt, Vt), !Ue) {
          var Dt, mt, dt, jt, Ht;
          Ue = !0;
          const tt = null !== (Dt = et.depthStencil) && void 0 !== Dt ? Dt : {},
            Ot = null !== (mt = et.multisample) && void 0 !== mt ? mt : {},
            qt = String(null !== (dt = tt.depthCompare) && void 0 !== dt ? dt : "");
          rt(`WebGPU terrain pipeline ${Vt}: depth ${String(null!==(jt=tt.format)&&void 0!==jt?jt:"none")} ${qt}${qt.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(Ht=Ot.count)&&void 0!==Ht?Ht:1)}`)
        }
      }
    }

    function Te(tt) {
      le(tt, "setPipeline", (tt => function() {
        for (var et = arguments.length, Vt = new Array(et), Ot = 0; Ot < et; Ot++) Vt[Ot] = arguments[Ot];
        return ze.set(this, Vt[0]), Qe(tt, this, Vt)
      }));
      for (const et of ["draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect"]) le(tt, et, (tt => function() {
        const Vt = ze.get(this),
          Ot = Vt ? Ge.get(Vt) : void 0;
        for (var qt = arguments.length, Dt = new Array(qt), mt = 0; mt < qt; mt++) Dt[mt] = arguments[mt];
        return void 0 !== Ot && ge(et, Ot, Dt), Qe(tt, this, Dt)
      }))
    }

    function ge(tt, et, Vt) {
      var Ot;
      (ie.draws++, "draw" === tt || "drawIndexed" === tt) && (ie.faces += Vt[0] * (null !== (Ot = Vt[1]) && void 0 !== Ot ? Ot : 1) / 6);
      if (null !== Ae && Ae.length < Xe) {
        const Ot = ("draw" === tt ? ["vertices", "instances", "firstVertex", "firstInstance"] : "drawIndexed" === tt ? ["indices", "instances", "firstIndex", "baseVertex", "firstInstance"] : ["indirectOffset"]).map(((et, Ot) => {
          const qt = tt.endsWith("Indirect") ? Vt[1] : Vt[Ot];
          return `${et} ${String(null!==qt&&void 0!==qt?qt:"instances"===et?1:0)}`
        }));
        Ae.push(`  ${et} ${tt} ${Ot.join(" ")}`)
      }
    }

    function se() {
      if (Fe || "undefined" === typeof navigator || !("gpu" in navigator)) return;
      Fe = !0, le(Ye("GPU"), "requestAdapter", (tt => function() {
        for (var et = arguments.length, Vt = new Array(et), Ot = 0; Ot < et; Ot++) Vt[Ot] = arguments[Ot];
        return Qe(tt, this, Vt).then((tt => {
          var et;
          tt ? function(tt) {
            var et;
            const Vt = null !== (et = tt.info) && void 0 !== et ? et : {};
            rt(`WebGPU adapter ${["vendor","architecture","device","description"].map((tt=>{var et;return`${tt} "${String(null!==(et=Vt[tt])&&void 0!==et?et:"")}"`})).join(" ")}${tt.isFallbackAdapter?" (fallback)":""}`), rt(`WebGPU adapter features ${Be(tt.features)}`), rt(`WebGPU adapter limits ${pe(tt.limits,Le)}`), Ut(`WebGPU adapter all limits ${pe(tt.limits,null)}`)
          }(tt) : rt(`WebGPU requestAdapter(${JSON.stringify(null!==(et=Vt[0])&&void 0!==et?et:{})}) gave none`);
          return tt
        }))
      })), le(Ye("GPUAdapter"), "requestDevice", (tt => function() {
        for (var et = arguments.length, Vt = new Array(et), Ot = 0; Ot < et; Ot++) Vt[Ot] = arguments[Ot];
        return Qe(tt, this, Vt).then((tt => (function(tt) {
          rt(`WebGPU device features ${Be(tt.features)}`), rt(`WebGPU device limits ${pe(tt.limits,Le)}`), tt.addEventListener("uncapturederror", (tt => {
            if (oe.uncaptured < He) {
              var et, Vt, Ot;
              oe.uncaptured++;
              const qt = tt.error;
              rt(`WebGPU uncaptured ${null!==(et=null===qt||void 0===qt||null===(Vt=qt.constructor)||void 0===Vt?void 0:Vt.name)&&void 0!==et?et:"error"}: ${At(String(null!==(Ot=null===qt||void 0===qt?void 0:qt.message)&&void 0!==Ot?Ot:""),600)}`)
            }
          }));
          const et = tt.lost;
          null === et || void 0 === et || et.then((tt => {
            var et;
            rt(`WebGPU device lost (${String(tt.reason)}): ${At(String(null!==(et=tt.message)&&void 0!==et?et:""),600)}`)
          }))
        }(tt), tt)), (tt => {
          throw rt(`WebGPU requestDevice failed: ${String(tt)}`), tt
        }))
      }));
      const tt = Ye("GPUDevice");
      le(tt, "createShaderModule", (tt => function() {
        for (var et, Vt, Ot = arguments.length, qt = new Array(Ot), Dt = 0; Dt < Ot; Dt++) qt[Dt] = arguments[Dt];
        const mt = Qe(tt, this, qt);
        return function(tt, et) {
          const Vt = et.includes("decodeQuad");
          Vt && ke.add(tt);
          const Ot = tt.getCompilationInfo;
          null === Ot || void 0 === Ot || Ot.call(tt).then((tt => {
            if (0 === tt.messages.length && !Vt) return;
            const et = {};
            for (const Vt of tt.messages) {
              var Ot;
              et[String(Vt.type)] = (null !== (Ot = et[String(Vt.type)]) && void 0 !== Ot ? Ot : 0) + 1
            }
            const qt = tt.messages.map((tt => `${String(tt.type)} ${String(tt.lineNum)}:${String(tt.linePos)} ${String(tt.message)}`)).join("\n");
            oe.compile < He && (oe.compile++, rt(`WebGPU ${Vt?"terrain ":""}shader module compiled: ${JSON.stringify(et)}${qt?` first: ${At(qt.split("\n")[0],300)}`:""}`)), qt && Ut(`WebGPU shader module messages:\n${At(qt)}`)
          }))
        }(mt, String(null !== (et = (null !== (Vt = qt[0]) && void 0 !== Vt ? Vt : {}).code) && void 0 !== et ? et : "")), mt
      })), le(tt, "createRenderPipeline", (tt => function() {
        for (var et, Vt = arguments.length, Ot = new Array(Vt), qt = 0; qt < Vt; qt++) Ot[qt] = arguments[qt];
        const Dt = Qe(tt, this, Ot);
        return xe(Dt, null !== (et = Ot[0]) && void 0 !== et ? et : {}), Dt
      })), le(tt, "createRenderPipelineAsync", (tt => function() {
        for (var et = arguments.length, Vt = new Array(et), Ot = 0; Ot < et; Ot++) Vt[Ot] = arguments[Ot];
        return Qe(tt, this, Vt).then((tt => {
          var et;
          return xe(tt, null !== (et = Vt[0]) && void 0 !== et ? et : {}), tt
        }), (tt => {
          var et;
          throw function(tt, et) {
            var Vt, Ot, qt;
            if (oe.rejected >= He) return;
            oe.rejected++;
            const {
              reason: Dt,
              message: mt
            } = null !== et && void 0 !== et ? et : {}, dt = String(null !== (Vt = (null !== (Ot = tt.vertex) && void 0 !== Ot ? Ot : {}).entryPoint) && void 0 !== Vt ? Vt : "");
            rt(`WebGPU pipeline "${String(null!==(qt=tt.label)&&void 0!==qt?qt:"")}" ${dt} rejected (${String(null!==Dt&&void 0!==Dt?Dt:"no reason")}): ${At(String(null!==mt&&void 0!==mt?mt:et),600)}`)
          }(null !== (et = Vt[0]) && void 0 !== et ? et : {}, tt), tt
        }))
      })), le(Ye("GPUCanvasContext"), "configure", (tt => function() {
        for (var et, Vt = arguments.length, Ot = new Array(Vt), qt = 0; qt < Vt; qt++) Ot[qt] = arguments[qt];
        const Dt = null !== (et = Ot[0]) && void 0 !== et ? et : {};
        var mt, dt;
        re++ < 3 && rt(`WebGPU canvas ${String(Dt.format)} ${String(null!==(mt=Dt.colorSpace)&&void 0!==mt?mt:"srgb")} alpha ${String(null!==(dt=Dt.alphaMode)&&void 0!==dt?dt:"opaque")}`);
        return Qe(tt, this, Ot)
      })), Te(Ye("GPURenderPassEncoder")), Te(Ye("GPURenderBundleEncoder"))
    }
    const ne = 1e4,
      tV = 6e4,
      eV = 5e3,
      VV = 3e3,
      OV = 100;
    let qV = null,
      DV = !1,
      mV = {
        ...Pe.b
      },
      dV = !1,
      jV = null,
      HV = 0,
      XV = () => {};
    const QV = new Promise((tt => {
      XV = tt
    }));

    function lV() {
      var tt;
      DV || (DV = !0, mV = Object.assign(window.bloxdRenderDebug ??= {
        ...Pe.b
      }, {
        faceCull: "0" === (0, Dt.r)("faceCull") ? "0" : "1",
        adrenoProbe: null !== (tt = (0, Dt.r)("adrenoProbe")) && void 0 !== tt ? tt : ""
      }), rt("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), Ee || "undefined" === typeof window || (Ee = !0, "undefined" !== typeof WebGL2RenderingContext && he(WebGL2RenderingContext.prototype, !0), "undefined" !== typeof WebGLRenderingContext && he(WebGLRenderingContext.prototype, !1)), se(), (0, Dt.c)("renderProbe", (() => {
        aV("console")
      })), yV(), setInterval(bV, eV))
    }

    function EV(tt) {
      var et, Vt;
      lV(), qV = null !== (et = null === tt || void 0 === tt ? void 0 : tt.backend) && void 0 !== et ? et : null;
      const Ot = `, renderer param ${null!==(Vt=(0,Dt.r)("renderer"))&&void 0!==Vt?Vt:"none"}, faceCull ${"0"===mV.faceCull?"off (whole parts)":"on"}, adrenoProbe ${mV.adrenoProbe||"none"}`;
      rt(`${(0,Ze.d)(tt)}${null===tt?"":Ot}`)
    }

    function fV() {
      const tt = performance.now(),
        et = wV(QV, ne, tV).then((et => aV(`${Math.round((performance.now()-tt)/1e3)} s after playable${et?"":", no terrain drawn yet"}`)));
      (0, qt.c)(rt, (async () => {
        await et, await jV
      }))
    }
    async function wV(tt, et, Vt) {
      const qt = (0, Ot.d)(Vt).then((() => !1));
      return await (0, Ot.d)(et), Promise.race([tt.then((() => !0)), qt])
    }

    function yV() {
      requestAnimationFrame((() => {
        HV++, yV()
      }))
    }

    function NV() {
      var tt, et, Vt;
      if (dV) return;
      (dV = !0, rt(`renderer caps ${null!==(tt=mV.caps)&&void 0!==tt?tt:"(not noted)"}; terrain fetch ${null!==(et=mV.fetch)&&void 0!==et?et:"(not noted)"}`), mV.adrenoProbe) && rt(`adrenoProbe ${mV.adrenoProbe} asked; in force (storage fetch only): ${null!==(Vt=mV.probe)&&void 0!==Vt?Vt:"(not noted)"}`);
      const Ot = Zt.context;
      if (Ot) {
        for (const tt of function(tt) {
            var et;
            const Vt = [],
              Ot = tt.getExtension("WEBGL_debug_renderer_info"),
              qt = Ot ? tt.getParameter(Ot.UNMASKED_VENDOR_WEBGL) : "(masked)",
              Dt = Ot ? tt.getParameter(Ot.UNMASKED_RENDERER_WEBGL) : "(masked)";
            Vt.push(`GL ${String(tt.getParameter(tt.VERSION))} | ${String(tt.getParameter(tt.SHADING_LANGUAGE_VERSION))} | ${String(tt.getParameter(tt.VENDOR))} / ${String(tt.getParameter(tt.RENDERER))}`), Vt.push(`GL unmasked ${qt} / ${Dt}`);
            const mt = [
              ["MAX_TEXTURE_SIZE", tt.MAX_TEXTURE_SIZE],
              ["MAX_VERTEX_ATTRIBS", tt.MAX_VERTEX_ATTRIBS],
              ["MAX_VERTEX_UNIFORM_VECTORS", tt.MAX_VERTEX_UNIFORM_VECTORS],
              ["MAX_VERTEX_TEXTURE_IMAGE_UNITS", tt.MAX_VERTEX_TEXTURE_IMAGE_UNITS],
              ["MAX_COMBINED_TEXTURE_IMAGE_UNITS", tt.MAX_COMBINED_TEXTURE_IMAGE_UNITS],
              ["MAX_VARYING_VECTORS", tt.MAX_VARYING_VECTORS],
              ["MAX_RENDERBUFFER_SIZE", tt.MAX_RENDERBUFFER_SIZE]
            ];
            "MAX_UNIFORM_BLOCK_SIZE" in tt && mt.push(["MAX_UNIFORM_BLOCK_SIZE", tt.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", tt.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", tt.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", tt.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS]), Vt.push(`GL limits ${mt.map((et=>{let[Vt,Ot]=et;return`${Vt} ${String(tt.getParameter(Ot))}`})).join(", ")}`);
            const dt = (et, Vt) => {
              const Ot = tt.getShaderPrecisionFormat(et, tt.HIGH_FLOAT),
                qt = tt.getShaderPrecisionFormat(et, tt.HIGH_INT);
              return `${Vt} highp float ${Ot?`${Ot.rangeMin}/${Ot.rangeMax}/${Ot.precision}`:"?"} int ${qt?`${qt.rangeMin}/${qt.rangeMax}/${qt.precision}`:"?"}`
            };
            Vt.push(`GL precision ${dt(tt.VERTEX_SHADER,"VS")}, ${dt(tt.FRAGMENT_SHADER,"FS")}`);
            const jt = tt.getContextAttributes();
            return Vt.push(`GL context ${JSON.stringify(jt)} drawingBuffer ${tt.drawingBufferWidth}x${tt.drawingBufferHeight}${"drawingBufferFormat"in tt?` format 0x${Number(tt.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in tt?` ${String(tt.drawingBufferColorSpace)}`:""}`), Vt.push(`GL extensions ${(null!==(et=tt.getSupportedExtensions())&&void 0!==et?et:[]).join(" ")}`), Vt
          }(Ot)) rt(tt);
        ! function() {
          if (!Zt.context) return;
          let tt = 0,
            et = 0;
          for (const [Vt, Ot] of Rt) !Ot.gl.isContextLost() && Ot.gl.isProgram(Vt) && (et++, Se(Ot.gl, Vt, Ot), null !== Ot.terrain && tt++);
          rt(`programs: ${et} live of ${Rt.length} linked, ${tt} packed terrain; CPU page copies ${Math.round(Zt.shadowBytes/1048576)} MiB (${Zt.uncopied} over budget)`)
        }()
      }
    }

    function aV(tt) {
      return jV ??= async function(tt) {
        NV(), "webgpu" === qV ? (MV(), "1" === mV.slotCheck && rt("slot check: the last request is still unanswered, so the next answer reads the slots as they were then"), mV.slotCheck = "1", await
          function(tt) {
            if (null !== Ae) return Promise.resolve();
            const et = [];
            return Ae = et, new Promise((Vt => {
              setTimeout((() => {
                Ae = null, rt(`WebGPU draw ranges (${tt}): ${et.length} terrain draws recorded in a second (first ${Xe}; bundles replay without new ones)`);
                for (const tt of et) rt(tt);
                Vt()
              }), 1e3)
            }))
          }(tt), await async function() {
            if (await (0, Pe.i)(mV, "slotCheck", ["1"], VV, OV), "1" === mV.slotCheck) return void rt(`slot check: no answer in ${VV} ms (only the storage fetch has one; a later answer logs on its own)`);
            MV()
          }()) : await de(tt);
        rt(`check (${tt}) done: bloxdDebug.save() downloads it all`)
      }(tt).catch((et => {
        rt(`check (${tt}) failed: ${String(et)}`)
      })).finally((() => {
        jV = null
      })), jV
    }

    function MV() {
      void 0 !== mV.slotCheck && "1" !== mV.slotCheck && (rt(mV.slotCheck), delete mV.slotCheck)
    }

    function bV() {
      const tt = tt => HV ? (tt / HV).toFixed(1) : "0",
        et = function() {
          const tt = ie;
          return ie = {
            draws: 0,
            faces: 0
          }, tt
        }(),
        Vt = function() {
          const tt = ae;
          return ae = {
            inst: {
              draws: 0,
              faces: 0
            },
            tex: {
              draws: 0,
              faces: 0
            },
            other: {
              draws: 0,
              faces: 0
            }
          }, tt
        }(),
        Ot = function() {
          const tt = Me;
          return Me = {
            buffer: 0,
            texture: 0
          }, tt
        }();
      MV(), ("webgpu" === qV ? et.draws : Vt.inst.draws + Vt.tex.draws) > 0 && XV();
      const qt = "webgpu" === qV ? [`terrain ${tt(et.draws)} draws ${tt(et.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((tt => Vt[tt].draws > 0)).map((et => `${et} ${tt(Vt[et].draws)} draws ${tt(Vt[et].faces)} faces a frame`));
      rt(`${HV} frames: ${qt.join(", ")||"no draws"}; uploaded ${Math.round(Ot.buffer/1024)} KiB to buffers, ${Math.round(Ot.texture/1024)} KiB to data textures`), HV = 0
    }
  },
  4859: (tt, et, Vt) => {
    function Ot(tt) {
      if (null === tt) return "backend: none picked (no renderer build)";
      const et = tt.adapter ? `${tt.adapter.vendor}/${tt.adapter.architecture}` : "none";
      return `backend ${tt.backend}: reason ${tt.reason}, source ${tt.source}, adapter ${et}`
    }
    Vt.d(et, {
      d: () => Ot
    })
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);