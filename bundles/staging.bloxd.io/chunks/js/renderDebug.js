export const id = 47;
export const ids = [47];
export const modules = {
  4448: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => lv
    });
    var hv = Pv(22),
      Sv = Pv(26),
      ev = Pv(1272),
      gv = Pv(2682);
    const pv = 3e4,
      dv = 1e3;

    function Nv() {
      return "visible" === document.visibilityState && "inGame" === hv.c.get("gameState") && (0, ev.u)()
    }

    function lv(vv, zv) {
      (0, gv.s)() || function(vv, zv, Pv) {
        let hv = 0;
        const Sv = setInterval((() => {
          zv() && (hv += dv, hv >= vv && (clearInterval(Sv), Pv()))
        }), dv)
      }(pv, Nv, (() => {
        zv().then((() => {
          vv(`saved for the player after ${pv/1e3} s of play`), (0, gv.x)(), Sv.j.zC("chat", {
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
  4446: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      installRenderDebug: () => TP,
      renderDebugPlayable: () => wP,
      startRenderDebug: () => WP,
      waitForDraw: () => aP
    });
    var hv = Pv(1773),
      Sv = Pv(4448),
      ev = Pv(2682);
    const gv = ["+x", "-x", "+y", "-y", "+z", "-z", "dir6", "dir7"];

    function pv(vv) {
      return 7 & vv
    }

    function dv(vv) {
      return vv >>> 11 & 1
    }

    function Nv(vv) {
      return [1 + (vv >>> 18 & 63), 1 + (vv >>> 24 & 63)]
    }

    function lv(vv, zv) {
      const [Pv, , hv] = vv, Sv = pv(hv), ev = function(vv, zv, Pv) {
        return zv + (1 === (22 >>> vv & 1) ? 4 - Pv : Pv) & 3
      }(Sv, dv(hv), zv), gv = Sv >>> 1, [lv, Tv] = Nv(Pv), Wv = 1 === ev || 2 === ev ? lv : 0, wv = ev >= 2 ? Tv : 0, av = [63 & Pv, Pv >>> 6 & 63, Pv >>> 12 & 63];
      return av[2 === gv ? 0 : 2] += Wv, av[1 === gv ? 0 : 1] += wv, av
    }

    function Tv(vv) {
      const zv = Math.max(...Nv(vv[0]));
      return 1 === zv ? "1" : zv <= 4 ? "2-4" : zv <= 16 ? "5-16" : "17-64"
    }
    const Wv = 16;

    function wv(vv) {
      let zv = 2166136261;
      for (let Pv = 0; Pv < vv.length; Pv++) zv = Math.imul(zv ^ vv[Pv], 16777619);
      return zv >>> 0
    }

    function av(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12;
      const hv = Math.max(0, zv - Pv),
        Sv = Math.min(vv.length, zv + Pv),
        ev = [];
      for (let gv = hv; gv < Sv; gv++) {
        const Pv = vv[gv].toString(16).padStart(2, "0");
        ev.push(gv === zv ? `[${Pv}]` : Pv)
      }
      return ev.join(" ")
    }
    const sv = {
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
      Cv = "_vs2fs_location0",
      iv = 0,
      cv = 4,
      Gv = 6,
      mv = [0, 1, 2, 0, 2, 3],
      jv = 2048,
      fv = 4,
      Fv = 256,
      Yv = 64,
      nv = 268435456,
      Ov = 65536,
      Dv = /^#version [^\n]*\/\/ program (\S+)$/m;

    function Kv(vv) {
      return null === vv.name ? `#${vv.id}` : `#${vv.id} ${vv.name}`
    }
    const Vv = [],
      Uv = new WeakMap,
      Rv = new WeakMap,
      xv = {
        context: null,
        inProbe: !1,
        pendingCheck: null,
        shadowBytes: 0,
        uncopied: 0
      };
    let tv = 1;
    const qv = new WeakMap;

    function Iv(vv) {
      if (null === vv) return 0;
      let zv = qv.get(vv);
      return void 0 === zv && (zv = tv++, qv.set(vv, zv)), zv
    }
    class Qv {
      constructor(vv, zv) {
        this.print = vv, this.now = zv, this.shown = 0, this.Vp = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.Yw = [], this.dropped = 0
      }
      line(vv) {
        const zv = this.now();
        if (zv - this.second >= 1e3 && (this.second = zv, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.Vp++, void this.store(vv);
        this.shown++, this.inSecond++, this.print(400 === this.shown ? `${vv} (the last line here: the rest go to bloxdDebug.save())` : vv)
      }
      keep(vv) {
        this.sections++, this.store(vv)
      }
      store(vv) {
        this.Yw.push(`${new Date(Date.now()).toISOString()} ${vv}`), this.Yw.length > 2e4 && (this.Yw.shift(), this.dropped++)
      }
      dump() {
        return [`${this.shown} lines logged (above); kept here: ${this.Vp} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.Yw].join("\n")
      }
    }
    let Zv = null;

    function Av() {
      if (null === Zv) {
        const vv = new Qv((vv => {
          (0, ev.i)("render", vv)
        }), (() => performance.now()));
        (0, ev.f)("render", (() => vv.dump())), Zv = vv
      }
      return Zv
    }

    function Lv(vv) {
      Av().line(vv)
    }

    function Hv(vv) {
      Av().keep(vv)
    }

    function Mv(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4096;
      return vv.length <= zv ? vv : `${vv.slice(0,zv)}... (${vv.length-zv} more characters)`
    }

    function yv(vv, zv, Pv, hv, Sv, ev) {
      const gv = xv.pendingCheck;
      if (null === gv) return;
      const pv = "undefined" !== typeof WebGL2RenderingContext && vv instanceof WebGL2RenderingContext,
        dv = {
          gl: vv,
          program: Pv,
          call: hv,
          PC: Sv,
          instances: ev,
          attributes: [],
          group: -1,
          chunk: "",
          pages: []
        };
      if (gv.draws.push(dv), pv) try {
        const hv = function(vv) {
          const zv = [],
            Pv = new Map,
            hv = Math.min(16, vv.getParameter(sv.MAX_VERTEX_ATTRIBS));
          for (let Sv = 0; Sv < hv; Sv++) {
            if (!vv.getVertexAttrib(Sv, sv.VERTEX_ATTRIB_ARRAY_ENABLED)) continue;
            const hv = vv.getVertexAttrib(Sv, sv.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING),
              ev = vv.getVertexAttribOffset(Sv, sv.VERTEX_ATTRIB_ARRAY_POINTER),
              gv = vv.getVertexAttrib(Sv, sv.VERTEX_ATTRIB_ARRAY_STRIDE),
              pv = vv.getVertexAttrib(Sv, sv.VERTEX_ATTRIB_ARRAY_SIZE),
              dv = vv.getVertexAttrib(Sv, sv.VERTEX_ATTRIB_ARRAY_TYPE),
              Nv = "VERTEX_ATTRIB_ARRAY_INTEGER" in vv && vv.getVertexAttrib(Sv, sv.VERTEX_ATTRIB_ARRAY_INTEGER),
              lv = "VERTEX_ATTRIB_ARRAY_DIVISOR" in vv ? vv.getVertexAttrib(Sv, sv.VERTEX_ATTRIB_ARRAY_DIVISOR) : 0;
            Pv.set(Sv, {
              buffer: hv,
              offset: ev,
              stride: gv
            }), zv.push(`@${Sv} buf#${Iv(hv)} +${ev} stride ${gv} ${pv}x0x${dv.toString(16)}${Nv?" int":""} div ${lv}`)
          }
          return {
            lines: zv,
            byLocation: Pv
          }
        }(vv);
        if (dv.attributes = hv.lines, "inst" === Pv.terrain) {
          const {
            group: Sv,
            chunk: pv
          } = function(vv, zv, Pv) {
            const hv = zv.get(Gv),
              Sv = vv.getVertexAttrib(Gv, sv.CURRENT_VERTEX_ATTRIB),
              ev = hv ? `+${hv.offset}` : Sv ? Array.from(Sv).slice(0, 3).join(",") : "?";
            let gv = Pv.groups.get(ev);
            return void 0 === gv && (gv = Pv.groups.size, Pv.groups.set(ev, gv)), {
              group: gv,
              chunk: ev
            }
          }(vv, hv.byLocation, gv);
          dv.group = Sv, dv.chunk = pv;
          for (const vv of [iv, cv]) {
            var Nv;
            const zv = null === (Nv = hv.byLocation.get(vv)) || void 0 === Nv ? void 0 : Nv.buffer;
            zv && dv.pages.push({
              kind: "buf",
              buffer: zv
            })
          }! function(vv, zv, Pv, hv, Sv, ev, gv) {
            const pv = hv.get(iv),
              dv = gv.parts.get(ev);
            if (void 0 === dv && gv.parts.size >= fv) return;
            const Nv = Math.min(Sv, Yv, Fv - (null !== dv && void 0 !== dv ? dv : 0));
            if (null === pv || void 0 === pv || !pv.buffer || Nv <= 0) return;
            const lv = Bv(vv, zv, Pv);
            if (!lv) return;
            const Tv = pv.stride || 12,
              Wv = rv(vv, pv.buffer, pv.offset, (Nv - 1) * Tv + 12),
              wv = new DataView(Wv.buffer),
              av = function(vv, zv) {
                const Pv = function(vv) {
                    const zv = uv.get(vv);
                    if (void 0 !== zv && (null === zv || vv.isProgram(zv))) return zv;
                    xv.inProbe = !0;
                    let Pv = null;
                    try {
                      Pv = Jv(vv, kv, Xv, "fed", "the record feed")
                    } finally {
                      xv.inProbe = !1
                    }
                    return uv.set(vv, Pv), Pv
                  }(vv),
                  hv = Pv ? bv(vv, Pv, zv, (() => {
                    vv.drawArraysInstanced(sv.POINTS, 0, 1, zv)
                  }), "decode probe input (the record feed)") : null;
                return hv ? new Uint32Array(hv.buffer) : null
              }(vv, Nv);
            av || gv.fed.failed++;
            const Cv = bv(vv, lv, 4 * Nv, (() => {
              vv.drawArraysInstanced(sv.POINTS, 0, 4, Nv)
            }));
            if (!Cv) return;
            gv.parts.set(ev, (null !== dv && void 0 !== dv ? dv : 0) + Nv);
            for (let sv = 0; sv < Nv; sv++) {
              const vv = sv * Tv,
                zv = [wv.getUint32(vv, !0), wv.getUint32(vv + 4, !0), wv.getUint32(vv + 8, !0)],
                Pv = av ? [av[3 * sv], av[3 * sv + 1], av[3 * sv + 2]] : zv;
              av && (gv.fed.records++, Pv.some(((vv, Pv) => vv !== zv[Pv])) && (gv.fed.differing++, gv.fed.first.length < 8 && gv.fed.first.push(`part ${ev} instance ${sv}: fed ${Pv.map(Sz).join(" ")} buffer ${zv.map(Sz).join(" ")}`)));
              for (let hv = 0; hv < 4; hv++) {
                const vv = 3 * (4 * sv + hv);
                gv.vertices.push({
                  record: Pv,
                  slot: hv,
                  group: ev,
                  gpu: [Cv[vv], Cv[vv + 1], Cv[vv + 2]]
                })
              }
            }
          }(vv, zv, Pv, hv.byLocation, ev, Sv, gv)
        } else {
          const hv = vz(vv, zv, 16),
            ev = vz(vv, zv, 8);
          for (const vv of [hv, ev]) vv && dv.pages.push({
            kind: "tex",
            texture: vv
          });
          hv && function(vv, zv, Pv, hv, Sv, ev) {
            if (ev.parts.size >= fv) return;
            const gv = Bv(vv, zv, Pv);
            if (!gv) return;
            let pv = 6 * Fv;
            const dv = [];
            for (const [wv, av] of Sv) {
              const vv = Math.min(av, pv, Math.max(6, 6 * Math.floor(Fv / Sv.length)));
              vv > 0 && (dv.push([wv, vv]), pv -= vv)
            }
            const Nv = dv.reduce(((vv, zv) => {
                let [, Pv] = zv;
                return vv + Pv
              }), 0),
              lv = bv(vv, gv, Nv, (() => {
                for (const [zv, Pv] of dv) vv.drawArrays(sv.POINTS, zv, Pv)
              }));
            if (!lv) return;
            let Tv = 0;
            for (const [wv, av] of dv) {
              const zv = Math.floor(wv / 6),
                Pv = Math.floor((wv + av - 1) / 6) - zv + 1,
                Sv = zz(vv, hv, jv, zv, Pv);
              for (let vv = wv; vv < wv + av; vv++, Tv++) {
                var Wv;
                const Pv = 4 * (Math.floor(vv / 6) - zv),
                  hv = [Sv[Pv], Sv[Pv + 1], Sv[Pv + 2]];
                ev.parts.set(Sv[Pv + 3], (null !== (Wv = ev.parts.get(Sv[Pv + 3])) && void 0 !== Wv ? Wv : 0) + (vv % 6 === 0 ? 1 : 0)), ev.vertices.push({
                  record: hv,
                  slot: mv[vv % 6],
                  group: Sv[Pv + 3],
                  gpu: [lv[3 * Tv], lv[3 * Tv + 1], lv[3 * Tv + 2]]
                })
              }
            }
          }(vv, zv, Pv, hv, Sv, gv)
        }
      } catch (lv) {
        Lv(`decode probe failed on program ${Kv(Pv)}: ${String(lv)}`)
      }
    }

    function Bv(vv, zv, Pv) {
      if (void 0 !== Pv.probe) return Pv.probe && Ev(vv, zv, Pv.probe), Pv.probe;
      Pv.probe = null, xv.inProbe = !0;
      try {
        Pv.probe = function(vv, zv) {
          return Jv(vv, zv.vertex, zv.fragment, Cv, `program ${Kv(zv)}'s twin`)
        }(vv, Pv)
      } finally {
        xv.inProbe = !1
      }
      return Pv.probe && Ev(vv, zv, Pv.probe), Pv.probe
    }

    function Jv(vv, zv, Pv, hv, Sv) {
      const ev = [vv.createShader(sv.VERTEX_SHADER), vv.createShader(sv.FRAGMENT_SHADER)],
        gv = vv.createProgram();
      if (!gv || !ev[0] || !ev[1]) return null;
      vv.shaderSource(ev[0], zv), vv.shaderSource(ev[1], Pv);
      for (const dv of ev) vv.compileShader(dv), vv.attachShader(gv, dv);
      vv.transformFeedbackVaryings(gv, [hv], sv.INTERLEAVED_ATTRIBS), vv.linkProgram(gv);
      for (const dv of ev) vv.deleteShader(dv);
      var pv;
      return vv.getProgramParameter(gv, sv.LINK_STATUS) ? gv : (Lv(`decode probe: ${Sv} failed to link: ${Mv(null!==(pv=vv.getProgramInfoLog(gv))&&void 0!==pv?pv:"",300)}`), vv.deleteProgram(gv), null)
    }

    function Ev(vv, zv, Pv) {
      const hv = vv.getProgramParameter(zv, sv.ACTIVE_UNIFORM_BLOCKS);
      for (let pv = 0; pv < hv; pv++) {
        const hv = vv.getActiveUniformBlockName(zv, pv),
          Sv = null === hv ? sv.INVALID_INDEX : vv.getUniformBlockIndex(Pv, hv);
        Sv !== sv.INVALID_INDEX && vv.uniformBlockBinding(Pv, Sv, vv.getActiveUniformBlockParameter(zv, pv, sv.UNIFORM_BLOCK_BINDING))
      }
      const Sv = vv.getParameter(sv.CURRENT_PROGRAM);
      vv.useProgram(Pv);
      const ev = vv.getProgramParameter(zv, sv.ACTIVE_UNIFORMS),
        gv = vv.getActiveUniforms(zv, [...Array(ev).keys()], sv.UNIFORM_BLOCK_INDEX);
      for (let pv = 0; pv < ev; pv++) {
        const hv = vv.getActiveUniform(zv, pv);
        if (!hv || -1 !== gv[pv]) continue;
        const Sv = hv.name.replace(/\[0\]$/, "");
        for (let ev = 0; ev < hv.size; ev++) {
          const gv = hv.size > 1 ? `${Sv}[${ev}]` : hv.name,
            pv = vv.getUniformLocation(zv, gv),
            dv = vv.getUniformLocation(Pv, gv);
          pv && dv && ov(vv, dv, hv.type, vv.getUniform(zv, pv))
        }
      }
      vv.useProgram(Sv)
    }

    function ov(vv, zv, Pv, hv) {
      const Sv = ArrayBuffer.isView(hv) ? Array.from(hv) : [Number(hv)];
      switch (Pv) {
        case sv.FLOAT:
          return void vv.uniform1f(zv, Sv[0]);
        case sv.FLOAT_VEC2:
          return void vv.uniform2fv(zv, Sv);
        case sv.FLOAT_VEC3:
          return void vv.uniform3fv(zv, Sv);
        case sv.FLOAT_VEC4:
          return void vv.uniform4fv(zv, Sv);
        case sv.FLOAT_MAT3:
          return void vv.uniformMatrix3fv(zv, !1, Sv);
        case sv.FLOAT_MAT4:
          return void vv.uniformMatrix4fv(zv, !1, Sv);
        case sv.UNSIGNED_INT:
          return void vv.uniform1ui(zv, Sv[0]);
        case sv.UNSIGNED_INT_VEC2:
          return void vv.uniform2uiv(zv, Sv);
        case sv.UNSIGNED_INT_VEC3:
          return void vv.uniform3uiv(zv, Sv);
        case sv.UNSIGNED_INT_VEC4:
          return void vv.uniform4uiv(zv, Sv);
        case sv.INT_VEC2:
          return void vv.uniform2iv(zv, Sv);
        case sv.INT_VEC3:
          return void vv.uniform3iv(zv, Sv);
        case sv.INT_VEC4:
          return void vv.uniform4iv(zv, Sv);
        default:
          vv.uniform1i(zv, Sv[0])
      }
    }

    function bv(vv, zv, Pv, hv) {
      let Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "decode probe";
      const ev = vv.getParameter(sv.CURRENT_PROGRAM),
        gv = vv.getParameter(sv.TRANSFORM_FEEDBACK_BINDING),
        pv = vv.getParameter(sv.TRANSFORM_FEEDBACK_BUFFER_BINDING),
        dv = vv.getParameter(sv.COPY_READ_BUFFER_BINDING),
        Nv = vv.isEnabled(sv.RASTERIZER_DISCARD),
        lv = vv.createTransformFeedback(),
        Tv = vv.createBuffer();
      xv.inProbe = !0;
      try {
        const ev = vv.getError();
        ev !== sv.NO_ERROR && Lv(`GL error 0x${ev.toString(16)} pending before the decode probe (the renderer's)`), vv.useProgram(zv), vv.bindTransformFeedback(sv.TRANSFORM_FEEDBACK, lv), vv.bindBuffer(sv.TRANSFORM_FEEDBACK_BUFFER, Tv), vv.bufferData(sv.TRANSFORM_FEEDBACK_BUFFER, 12 * Pv, sv.STREAM_READ), vv.bindBufferBase(sv.TRANSFORM_FEEDBACK_BUFFER, 0, Tv), vv.enable(sv.RASTERIZER_DISCARD), vv.beginTransformFeedback(sv.POINTS), hv(), vv.endTransformFeedback(), vv.bindBufferBase(sv.TRANSFORM_FEEDBACK_BUFFER, 0, null);
        const gv = vv.getError();
        if (gv !== sv.NO_ERROR) return Lv(`${Sv}: GL error 0x${gv.toString(16)} on the feedback draw`), null;
        const pv = new Float32Array(3 * Pv);
        return vv.bindBuffer(sv.COPY_READ_BUFFER, Tv), vv.getBufferSubData(sv.COPY_READ_BUFFER, 0, pv), pv
      } finally {
        Nv || vv.disable(sv.RASTERIZER_DISCARD), vv.bindTransformFeedback(sv.TRANSFORM_FEEDBACK, gv), vv.bindBuffer(sv.TRANSFORM_FEEDBACK_BUFFER, pv), vv.bindBuffer(sv.COPY_READ_BUFFER, dv), vv.deleteTransformFeedback(lv), vv.deleteBuffer(Tv), vv.useProgram(ev), xv.inProbe = !1
      }
    }

    function rv(vv, zv, Pv, hv) {
      const Sv = vv.getParameter(sv.COPY_READ_BUFFER_BINDING),
        ev = new Uint8Array(hv);
      return vv.bindBuffer(sv.COPY_READ_BUFFER, zv), vv.getBufferSubData(sv.COPY_READ_BUFFER, Pv, ev), vv.bindBuffer(sv.COPY_READ_BUFFER, Sv), ev
    }
    const kv = `#version 300 es\nlayout(location = ${iv}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
      Xv = "#version 300 es\nprecision highp float;\nout vec4 color;\nvoid main() {\n\tcolor = vec4(0.0);\n}\n",
      uv = new WeakMap;

    function vz(vv, zv, Pv) {
      const hv = vv.getProgramParameter(zv, sv.ACTIVE_UNIFORMS),
        Sv = vv.getParameter(sv.ACTIVE_TEXTURE);
      try {
        for (let Sv = 0; Sv < hv; Sv++) {
          const hv = vv.getActiveUniform(zv, Sv);
          if ((null === hv || void 0 === hv ? void 0 : hv.type) !== sv.UNSIGNED_INT_SAMPLER_2D) continue;
          const ev = vv.getUniformLocation(zv, hv.name),
            gv = ev ? vv.getUniform(zv, ev) : -1;
          if (gv < 0) continue;
          vv.activeTexture(sv.TEXTURE0 + gv);
          const pv = vv.getParameter(sv.TEXTURE_BINDING_2D);
          if (pv && Rv.get(pv) === Pv) return pv
        }
        return null
      } finally {
        vv.activeTexture(Sv)
      }
    }

    function zz(vv, zv, Pv, hv, Sv) {
      const ev = new Uint32Array(4 * Sv),
        gv = vv.getParameter(sv.READ_FRAMEBUFFER_BINDING),
        pv = vv.createFramebuffer();
      vv.bindFramebuffer(sv.READ_FRAMEBUFFER, pv), vv.framebufferTexture2D(sv.READ_FRAMEBUFFER, sv.COLOR_ATTACHMENT0, sv.TEXTURE_2D, zv, 0);
      try {
        let zv = 0;
        for (; zv < Sv;) {
          const gv = hv + zv,
            pv = gv % Pv,
            dv = Math.min(Sv - zv, Pv - pv);
          vv.readPixels(pv, Math.floor(gv / Pv), dv, 1, sv.RGBA_INTEGER, sv.UNSIGNED_INT, ev.subarray(4 * zv, 4 * (zv + dv))), zv += dv
        }
      } finally {
        vv.bindFramebuffer(sv.READ_FRAMEBUFFER, gv), vv.deleteFramebuffer(pv)
      }
      return ev
    }

    function Pz(vv, zv, Pv) {
      let hv = 0,
        Sv = 0;
      for (let dv = 0; dv < zv.bytes.length; dv += Ov) {
        hv++;
        const vv = Math.min(dv + Ov, zv.bytes.length);
        wv(zv.bytes.subarray(dv, vv)) !== wv(Pv.subarray(dv, vv)) && Sv++
      }
      const ev = `${vv} ${zv.bytes.length} B cpu ${wv(zv.bytes).toString(16)} gpu ${wv(Pv).toString(16)}, ${Sv}/${hv} blocks differ${zv.missed?`, ${zv.missed} GPU-side writes uncopied`:""}`;
      if (0 === Sv) return ev;
      const {
        count: gv,
        offsets: pv
      } = function(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8;
        const hv = Math.min(vv.length, zv.length);
        let Sv = Math.abs(vv.length - zv.length);
        const ev = [];
        for (let gv = 0; gv < hv; gv++) vv[gv] !== zv[gv] && (Sv++, ev.length < Pv && ev.push(gv));
        return {
          count: Sv,
          offsets: ev
        }
      }(zv.bytes, Pv);
      return Hv([`${ev}: ${gv} bytes differ`, ...pv.map((vv => `  +${vv}: cpu ${av(zv.bytes,vv)} | gpu ${av(Pv,vv)}`))].join("\n")), `${ev}: ${gv} bytes differ, first at ${pv.join(", ")} (context in the saved file)`
    }

    function hz(vv) {
      if (0 === vv.vertices.length) return void Lv(`decode probe (${vv.reason}): no terrain draw probed (${vv.draws.length} seen)`);
      const zv = function(vv) {
          const zv = new Map;
          for (const hv of vv) {
            const vv = zv.get(hv.group);
            vv ? vv.push(hv) : zv.set(hv.group, [hv])
          }
          const Pv = {
            vertices: vv.length,
            mismatches: 0,
            byDirection: new Array(8).fill(0),
            byDiagonal: [0, 0],
            byBand: {},
            translations: new Map,
            first: []
          };
          for (const [hv, Sv] of zv) {
            const vv = new Map,
              zv = Sv.map((zv => {
                const Pv = lv(zv.record, zv.slot),
                  hv = [zv.gpu[0] - Pv[0], zv.gpu[1] - Pv[1], zv.gpu[2] - Pv[2]],
                  Sv = hv.map((vv => Math.round(64 * vv))).join(","),
                  ev = vv.get(Sv);
                return ev ? ev.count++ : vv.set(Sv, {
                  count: 1,
                  offset: hv
                }), Pv
              }));
            let ev = [0, 0, 0],
              gv = 0;
            for (const Pv of vv.values()) Pv.count > gv && (gv = Pv.count, ev = Pv.offset);
            Pv.translations.set(hv, ev), Sv.forEach(((vv, hv) => {
              var Sv;
              const gv = [zv[hv][0] + ev[0], zv[hv][1] + ev[1], zv[hv][2] + ev[2]];
              if (gv.every(((zv, Pv) => {
                  return hv = vv.gpu[Pv], Sv = zv, Math.abs(hv - Sv) <= Math.max(.001, 1e-6 * Math.abs(Sv));
                  var hv, Sv
                }))) return;
              Pv.mismatches++, Pv.byDirection[pv(vv.record[2])]++, Pv.byDiagonal[dv(vv.record[2])]++;
              const Nv = Tv(vv.record);
              Pv.byBand[Nv] = (null !== (Sv = Pv.byBand[Nv]) && void 0 !== Sv ? Sv : 0) + 1, Pv.first.length < Wv && Pv.first.push({
                ...vv,
                expected: gv
              })
            }))
          }
          return Pv
        }(vv.vertices),
        Pv = zv.byDirection.map(((vv, zv) => vv ? `${gv[zv]} ${vv}` : "")).filter(Boolean).join(" "),
        hv = Object.entries(zv.byBand).map((vv => {
          let [zv, Pv] = vv;
          return `${zv}: ${Pv}`
        })).join(" ");
      if (Lv(`decode probe (${vv.reason}): ${zv.mismatches}/${zv.vertices} vertices differ from the CPU decode over ${vv.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (zv.mismatches ? ` by direction [${Pv}] diagonal [0: ${zv.byDiagonal[0]} 1: ${zv.byDiagonal[1]}] extent [${hv}]` : "")), vv.fed.records > 0 || vv.fed.failed > 0) {
        Lv(`decode probe input: ${vv.fed.differing}/${vv.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (vv.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (vv.fed.failed ? `; the feed failed on ${vv.fed.failed} draws, whose decode is held to the buffer's readback` : ""));
        for (const zv of vv.fed.first) Lv(`  ${zv}`)
      }
      for (const Sv of zv.first) {
        const [vv, zv, Pv] = Sv.record;
        Lv(`  mismatch part ${Sv.group} r0 ${vv.toString(16)} r1 ${zv.toString(16)} r2 ${Pv.toString(16)} slot ${Sv.slot} (${gv[pv(Pv)]}): expected ${Sv.expected.map(ez).join(",")} gpu ${Sv.gpu.map(ez).join(",")}`)
      }
      Hv(`decode probe translations: ${[...zv.translations].map((vv=>{let[zv,Pv]=vv;return`${zv}: ${Pv.map(ez).join(",")}`})).join("; ")}`)
    }

    function Sz(vv) {
      return vv.toString(16)
    }

    function ez(vv) {
      return Number.isInteger(vv) ? String(vv) : vv.toFixed(3)
    }

    function gz(vv) {
      return null !== xv.pendingCheck ? Promise.resolve() : new Promise((zv => {
        let Pv = !1;
        const hv = {
          reason: vv,
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
        xv.pendingCheck = hv;
        const Sv = () => {
            xv.pendingCheck = null;
            try {
              ! function(vv) {
                Lv(`draw ranges (${vv.reason}): ${vv.terrainDraws} terrain draws in the frame, the first ${vv.draws.length} here`);
                for (const zv of vv.draws) {
                  const vv = zv.PC.slice(0, 8).map((vv => {
                      let [zv, Pv] = vv;
                      return `${zv}+${Pv}`
                    })).join(" "),
                    Pv = zv.PC.length > 8 ? ` (+${zv.PC.length-8} ranges)` : "";
                  Lv(`  ${Kv(zv.program)} ${zv.program.terrain} ${zv.call} ${vv}${Pv} x${zv.instances}${zv.group>=0?` part ${zv.group} chunk ${zv.chunk}`:""} | ${zv.attributes.join(" | ")}`)
                }
              }(hv), hz(hv);
              hv.draws.some((vv => "undefined" !== typeof WebGL2RenderingContext && vv.gl instanceof WebGL2RenderingContext)) || 0 === hv.draws.length ? function(vv) {
                const zv = [],
                  Pv = new Map;
                for (const hv of vv)
                  if ("undefined" !== typeof WebGL2RenderingContext && hv.gl instanceof WebGL2RenderingContext)
                    for (const vv of hv.pages) Pv.set("buf" === vv.kind ? vv.buffer : vv.texture, {
                      page: vv,
                      gl: hv.gl
                    });
                for (const [hv, {
                    page: Sv,
                    gl: ev
                  }] of Pv) {
                  const vv = Uv.get(hv);
                  if (!vv) {
                    zv.push(`${Sv.kind}#${Iv(hv)}: no CPU copy (${xv.uncopied} pages over the copy budget)`);
                    continue
                  }
                  if ("buf" === Sv.kind) {
                    zv.push(Pz(`buf#${vv.id}`, vv, rv(ev, Sv.buffer, 0, vv.bytes.length)));
                    continue
                  }
                  const Pv = zz(ev, Sv.texture, vv.width, 0, vv.width * vv.height),
                    gv = 16 === vv.texelBytes ? new Uint8Array(Pv.buffer) : new Uint8Array(new Uint16Array(Pv).buffer);
                  zv.push(Pz(`tex#${vv.id} (${16===vv.texelBytes?"records":"light"})`, vv, gv))
                }
                for (const hv of zv) Lv(`page readback ${hv}`)
              }(hv.draws) : Lv("page readback: none on WebGL1 (no buffer readback)")
            } catch (vv) {
              Lv(`check failed: ${String(vv)}`)
            }
            zv()
          },
          ev = () => {
            if (hv.draws.length > 0 && !Pv) return Pv = !0, void setTimeout(Sv, 0);
            Pv || requestAnimationFrame(ev)
          };
        requestAnimationFrame(ev), setTimeout((() => {
          Pv || (Pv = !0, Sv())
        }), 5e3)
      }))
    }
    var pz = Pv(4451);
    const dz = 20,
      Nz = 24,
      lz = Reflect.apply;

    function Tz(vv, zv, Pv) {
      if (!vv) return;
      const hv = vv[zv];
      if ("function" === typeof hv) {
        const Sv = Pv(hv);
        vv[zv] = Sv, (0, pz.x)(Sv, hv)
      }
    }
    let Wz = !1;
    const wz = new WeakMap,
      az = new WeakMap,
      sz = new WeakMap,
      Cz = {
        gl: 0,
        lost: 0
      };
    let iz = {
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
      cz = {
        buffer: 0,
        texture: 0
      },
      Gz = 0;

    function mz(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      if (vv instanceof ArrayBuffer) return new Uint8Array(vv, zv, Pv || void 0);
      if (!ArrayBuffer.isView(vv)) return null;
      const hv = "BYTES_PER_ELEMENT" in vv ? vv.BYTES_PER_ELEMENT : 1,
        Sv = vv.byteOffset + zv * hv,
        ev = Pv ? Pv * hv : vv.byteLength - zv * hv;
      return new Uint8Array(vv.buffer, Sv, Math.max(0, ev))
    }

    function jz(vv, zv) {
      const Pv = function(vv) {
        switch (vv) {
          case sv.ARRAY_BUFFER:
            return sv.ARRAY_BUFFER_BINDING;
          case sv.ELEMENT_ARRAY_BUFFER:
            return sv.ELEMENT_ARRAY_BUFFER_BINDING;
          case sv.COPY_READ_BUFFER:
            return sv.COPY_READ_BUFFER_BINDING;
          case sv.COPY_WRITE_BUFFER:
            return sv.COPY_WRITE_BUFFER_BINDING;
          case sv.UNIFORM_BUFFER:
            return sv.UNIFORM_BUFFER_BINDING;
          case sv.PIXEL_UNPACK_BUFFER:
            return sv.PIXEL_UNPACK_BUFFER_BINDING;
          case sv.TRANSFORM_FEEDBACK_BUFFER:
            return sv.TRANSFORM_FEEDBACK_BUFFER_BINDING;
          default:
            return 0
        }
      }(zv);
      return Pv ? vv.getParameter(Pv) : null
    }

    function fz(vv) {
      const zv = Uv.get(vv);
      zv && (xv.shadowBytes -= zv.bytes.length, Uv.delete(vv))
    }

    function Fz(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      fz(vv), xv.shadowBytes + zv > nv ? xv.uncopied++ : (xv.shadowBytes += zv, Uv.set(vv, {
        id: Iv(vv),
        bytes: new Uint8Array(zv),
        width: Pv,
        height: hv,
        texelBytes: Sv,
        missed: 0
      }))
    }

    function Yz(vv, zv) {
      for (const Pv of ["deleteBuffer", "deleteTexture"]) Tz(vv, Pv, (vv => function() {
        for (var zv = arguments.length, Pv = new Array(zv), hv = 0; hv < zv; hv++) Pv[hv] = arguments[hv];
        return Pv[0] && fz(Pv[0]), lz(vv, this, Pv)
      }));
      Tz(vv, "shaderSource", (vv => function() {
        for (var zv = arguments.length, Pv = new Array(zv), hv = 0; hv < zv; hv++) Pv[hv] = arguments[hv];
        return Pv[0] && "string" === typeof Pv[1] && wz.set(Pv[0], Pv[1]), lz(vv, this, Pv)
      })), Tz(vv, "attachShader", (vv => function() {
        for (var zv, Pv = arguments.length, hv = new Array(Pv), Sv = 0; Sv < Pv; Sv++) hv[Sv] = arguments[Sv];
        const ev = hv[0],
          gv = null !== (zv = az.get(ev)) && void 0 !== zv ? zv : [];
        return gv.push(hv[1]), az.set(ev, gv), lz(vv, this, hv)
      })), Tz(vv, "linkProgram", (vv => function() {
        for (var zv = arguments.length, Pv = new Array(zv), hv = 0; hv < zv; hv++) Pv[hv] = arguments[hv];
        const Sv = lz(vv, this, Pv);
        return xv.inProbe || function(vv, zv) {
          var Pv, hv, Sv;
          "undefined" !== typeof HTMLCanvasElement && vv.canvas instanceof HTMLCanvasElement && function(vv) {
            if (Uz.has(vv)) return;
            Uz.add(vv);
            for (const zv of ["webglcontextlost", "webglcontextrestored", "webglcontextcreationerror"]) vv.addEventListener(zv, (vv => {
              Cz.lost < dz && (Cz.lost++, Lv(`${zv}${"statusMessage"in vv?`: ${String(vv.statusMessage)}`:""}`))
            }))
          }(vv.canvas);
          xv.context ??= vv;
          const ev = null !== (Pv = az.get(zv)) && void 0 !== Pv ? Pv : [];
          let gv = "",
            pv = "";
          for (const lv of ev) {
            var dv;
            const vv = null !== (dv = wz.get(lv)) && void 0 !== dv ? dv : "";
            /\bgl_Position\b/.test(vv) ? gv = vv : pv = vv
          }
          const Nv = {
            id: Iv(zv),
            name: null !== (hv = null === (Sv = Dv.exec(gv)) || void 0 === Sv ? void 0 : Sv[1]) && void 0 !== hv ? hv : null,
            gl: vv,
            vertex: gv,
            fragment: pv,
            terrain: Oz(gv),
            checked: !1,
            firstDraw: !1
          };
          if (sz.set(zv, Nv), Vv.push([zv, Nv]), null !== Nv.terrain) {
            const zv = ev.map((zv => {
              var Pv;
              return null !== (Pv = vv.getShaderInfoLog(zv)) && void 0 !== Pv ? Pv : ""
            })).filter((vv => "" !== vv.trim()));
            zv.length > 0 && Hv(`program ${Kv(Nv)} (${Nv.terrain}) shader logs:\n${Mv(zv.join("\n"))}`)
          }
        }(this, Pv[0]), Sv
      })), Tz(vv, "bufferData", (vv => function() {
        for (var zv = arguments.length, Pv = new Array(zv), hv = 0; hv < zv; hv++) Pv[hv] = arguments[hv];
        const Sv = lz(vv, this, Pv);
        if (!xv.inProbe) {
          const vv = jz(this, Pv[0]);
          if (vv) {
            var ev, gv, pv;
            const zv = "number" === typeof Pv[1] ? null : mz(Pv[1], null !== (ev = Pv[3]) && void 0 !== ev ? ev : 0, null !== (gv = Pv[4]) && void 0 !== gv ? gv : 0);
            var dv;
            if (Fz(vv, "number" === typeof Pv[1] ? Pv[1] : null !== (pv = null === zv || void 0 === zv ? void 0 : zv.length) && void 0 !== pv ? pv : 0), zv) null === (dv = Uv.get(vv)) || void 0 === dv || dv.bytes.set(zv)
          }
        }
        return Sv
      })), Tz(vv, "bufferSubData", (vv => function() {
        for (var zv = arguments.length, Pv = new Array(zv), hv = 0; hv < zv; hv++) Pv[hv] = arguments[hv];
        const Sv = lz(vv, this, Pv);
        if (!xv.inProbe) {
          var ev, gv;
          const vv = jz(this, Pv[0]),
            zv = vv ? Uv.get(vv) : void 0,
            hv = mz(Pv[2], null !== (ev = Pv[3]) && void 0 !== ev ? ev : 0, null !== (gv = Pv[4]) && void 0 !== gv ? gv : 0);
          if (zv && hv) {
            const vv = Pv[1];
            zv.bytes.set(hv.subarray(0, Math.max(0, zv.bytes.length - vv)), vv), nz("buffer", zv, vv, hv.length)
          }
        }
        return Sv
      })), zv && (Tz(vv, "copyBufferSubData", (vv => function() {
        for (var zv = arguments.length, Pv = new Array(zv), hv = 0; hv < zv; hv++) Pv[hv] = arguments[hv];
        const Sv = lz(vv, this, Pv);
        if (!xv.inProbe) {
          const [vv, zv, hv, Sv, ev] = Pv, gv = jz(this, vv), pv = jz(this, zv), dv = gv ? Uv.get(gv) : void 0, Nv = pv ? Uv.get(pv) : void 0;
          Nv && (dv ? Nv.bytes.set(dv.bytes.slice(hv, hv + ev), Sv) : Nv.missed++)
        }
        return Sv
      })), Tz(vv, "texStorage2D", (vv => function() {
        for (var zv = arguments.length, Pv = new Array(zv), hv = 0; hv < zv; hv++) Pv[hv] = arguments[hv];
        const Sv = lz(vv, this, Pv),
          [, , ev, gv, pv] = Pv;
        if (!xv.inProbe && (ev === sv.RGBA32UI || ev === sv.RGBA16UI)) {
          const vv = this.getParameter(sv.TEXTURE_BINDING_2D),
            zv = ev === sv.RGBA32UI ? 16 : 8;
          vv && (Rv.set(vv, zv), Fz(vv, gv * pv * zv, gv, pv, zv))
        }
        return Sv
      })), Tz(vv, "texSubImage2D", (vv => function() {
        for (var zv = arguments.length, Pv = new Array(zv), hv = 0; hv < zv; hv++) Pv[hv] = arguments[hv];
        const Sv = lz(vv, this, Pv);
        return !xv.inProbe && Pv.length >= 9 && Pv[0] === sv.TEXTURE_2D && 0 === Pv[1] && function(vv, zv) {
          var Pv;
          const hv = vv.getParameter(sv.TEXTURE_BINDING_2D),
            Sv = hv ? Uv.get(hv) : void 0;
          if (!Sv) return;
          const [, , ev, gv, pv, dv] = zv;
          let Nv = mz(zv[8], null !== (Pv = zv[9]) && void 0 !== Pv ? Pv : 0);
          if (null === Nv && "number" === typeof zv[8]) {
            const Pv = jz(vv, sv.PIXEL_UNPACK_BUFFER),
              hv = Pv ? Uv.get(Pv) : void 0;
            Nv = hv ? hv.bytes.subarray(zv[8]) : null
          }
          if (null === Nv) return void Sv.missed++;
          const lv = vv.getParameter(sv.UNPACK_ROW_LENGTH) || pv,
            Tv = vv.getParameter(sv.UNPACK_SKIP_ROWS),
            Wv = vv.getParameter(sv.UNPACK_SKIP_PIXELS),
            wv = Sv.texelBytes;
          for (let av = 0; av < dv; av++) {
            const vv = ((Tv + av) * lv + Wv) * wv,
              zv = ((gv + av) * Sv.width + ev) * wv;
            Sv.bytes.set(Nv.subarray(vv, vv + pv * wv), zv)
          }
          nz("texture", Sv, (gv * Sv.width + ev) * wv, pv * dv * wv)
        }(this, Pv), Sv
      })), Tz(vv, "copyTexSubImage2D", (vv => function() {
        for (var zv = arguments.length, Pv = new Array(zv), hv = 0; hv < zv; hv++) Pv[hv] = arguments[hv];
        const Sv = Pv[0] === sv.TEXTURE_2D ? this.getParameter(sv.TEXTURE_BINDING_2D) : null,
          ev = Sv ? Uv.get(Sv) : void 0;
        return ev && ev.missed++, lz(vv, this, Pv)
      })));
      for (const Pv of ["drawArrays", "drawElements", "drawArraysInstanced", "drawElementsInstanced"]) Tz(vv, Pv, (vv => function() {
        for (var zv = arguments.length, hv = new Array(zv), Sv = 0; Sv < zv; Sv++) hv[Sv] = arguments[Sv];
        const ev = lz(vv, this, hv);
        return xv.inProbe || Kz(this, Pv, hv), ev
      }));
      Tz(vv, "getExtension", (vv => function() {
        for (var zv = arguments.length, Pv = new Array(zv), hv = 0; hv < zv; hv++) Pv[hv] = arguments[hv];
        const Sv = lz(vv, this, Pv);
        return Sv && "object" === typeof Sv && function(vv, zv, Pv) {
          const hv = {
            WEBGL_multi_draw: ["multiDrawArraysWEBGL", "multiDrawElementsWEBGL", "multiDrawArraysInstancedWEBGL", "multiDrawElementsInstancedWEBGL"],
            ANGLE_instanced_arrays: ["drawArraysInstancedANGLE", "drawElementsInstancedANGLE"]
          };
          if (!(zv in hv) || Pv.bloxdRenderDebug) return;
          Pv.bloxdRenderDebug = !0;
          for (const Sv of hv[zv]) {
            const zv = Pv[Sv];
            "function" === typeof zv && (Pv[Sv] = function() {
              for (var hv = arguments.length, ev = new Array(hv), gv = 0; gv < hv; gv++) ev[gv] = arguments[gv];
              const pv = lz(zv, Pv, ev);
              return xv.inProbe || Kz(vv, Sv, ev), pv
            })
          }
        }(this, Pv[0], Sv), Sv
      }))
    }

    function nz(vv, zv, Pv, hv) {
      cz[vv] += hv, Gz < 32 && zv.bytes.length >= 1 << 20 && (Gz++, Hv(`upload ${vv} #${zv.id} +${Pv} ${hv} B`))
    }

    function Oz(vv) {
      if (!vv.includes("decodeQuad")) return null;
      return !/^\s*#version 300 es/.test(vv) || /in uvec3 _p2vs_location0\b/.test(vv) ? "inst" : "tex"
    }

    function Dz(vv, zv, Pv) {
      var hv;
      if (Pv.checked) return;
      Pv.checked = !0;
      const Sv = vv.getProgramParameter(zv, sv.LINK_STATUS),
        ev = (null !== (hv = vv.getProgramInfoLog(zv)) && void 0 !== hv ? hv : "").trim();
      var gv;
      null === Pv.terrain && Sv || (Lv(`program ${Kv(Pv)} ${null!==(gv=Pv.terrain)&&void 0!==gv?gv:"other"} link ${Sv?"ok":"FAILED"}${ev?`: ${Mv(ev,300)}`:""}`), ev && Hv(`program ${Kv(Pv)} link log:\n${Mv(ev)}`))
    }

    function Kz(vv, zv, Pv) {
      var hv;
      const Sv = vv.getParameter(sv.CURRENT_PROGRAM),
        ev = Sv ? sz.get(Sv) : void 0;
      if (!Sv || !ev) return;
      const gv = null !== (hv = ev.terrain) && void 0 !== hv ? hv : "other",
        {
          PC: pv,
          instances: dv
        } = function(vv, zv) {
          switch (vv) {
            case "drawArrays":
              return {
                PC: [
                  [zv[1], zv[2]]
                ], instances: 1
              };
            case "drawArraysInstanced":
            case "drawArraysInstancedANGLE":
              return {
                PC: [
                  [zv[1], zv[2]]
                ], instances: zv[3]
              };
            case "drawElements":
              return {
                PC: [
                  [0, zv[1]]
                ], instances: 1
              };
            case "drawElementsInstanced":
            case "drawElementsInstancedANGLE":
              return {
                PC: [
                  [0, zv[1]]
                ], instances: zv[4]
              };
            case "multiDrawArraysWEBGL": {
              const vv = zv[1],
                Pv = zv[3],
                hv = zv[2],
                Sv = zv[4],
                ev = [];
              for (let gv = 0; gv < zv[5]; gv++) ev.push([vv[hv + gv], Pv[Sv + gv]]);
              return {
                PC: ev,
                instances: 1
              }
            }
            default:
              return {
                PC: [], instances: 0
              }
          }
        }(zv, Pv),
        Nv = "inst" === ev.terrain ? dv : pv.reduce(((vv, zv) => {
          let [, Pv] = zv;
          return vv + Pv
        }), 0) / 6;
      if (iz[gv].draws++, iz[gv].faces += Nv, null === ev.terrain) return;
      if (xv.context = vv, !ev.firstDraw) {
        ev.firstDraw = !0, Dz(vv, Sv, ev), Vz || (Vz = !0, Lv(function(vv) {
          var zv;
          const Pv = vv.getParameter(sv.DEPTH_FUNC),
            hv = {
              513: "less",
              514: "equal",
              515: "lequal",
              516: "greater",
              518: "gequal",
              519: "always"
            };
          let Sv = "default framebuffer";
          if ("DRAW_FRAMEBUFFER" in vv && vv.getParameter(sv.DRAW_FRAMEBUFFER_BINDING)) {
            const zv = vv;
            Sv = zv.getFramebufferAttachmentParameter(sv.DRAW_FRAMEBUFFER, sv.DEPTH_ATTACHMENT, sv.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(zv.getFramebufferAttachmentParameter(sv.DRAW_FRAMEBUFFER,sv.DEPTH_ATTACHMENT,sv.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type 0x${Number(zv.getFramebufferAttachmentParameter(sv.DRAW_FRAMEBUFFER,sv.DEPTH_ATTACHMENT,sv.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE)).toString(16)}` : "no depth attachment"
          }
          const ev = vv.getParameter(sv.DEPTH_CLEAR_VALUE);
          return `depth ${null!==(zv=hv[Pv])&&void 0!==zv?zv:`0x${Pv.toString(16)}`} clear ${ev}${516===Pv||518===Pv?" (reverse-Z)":""}, samples ${String(vv.getParameter(sv.SAMPLES))}, ${Sv}`
        }(vv)));
        const Pv = vv.getError();
        Pv !== sv.NO_ERROR && Cz.gl < dz && (Cz.gl++, Lv(`GL error 0x${Pv.toString(16)} after program ${Kv(ev)}'s first terrain draw (${zv})`))
      }
      const lv = xv.pendingCheck;
      null !== lv && (lv.terrainDraws++, lv.draws.length < Nz && yv(vv, Sv, ev, zv, pv, dv))
    }
    let Vz = !1;
    const Uz = new WeakSet;
    var Rz = Pv(4264),
      xz = Pv(4456);
    const tz = ["maxStorageBuffersPerShaderStage", "maxStorageBufferBindingSize", "maxBufferSize", "maxUniformBufferBindingSize", "minUniformBufferOffsetAlignment", "maxTextureDimension2D", "maxTextureArrayLayers", "maxVertexBuffers", "maxVertexAttributes", "maxVertexBufferArrayStride", "maxBindGroups", "maxColorAttachmentBytesPerSample"];
    let qz = !1;
    const Iz = new WeakSet,
      Qz = new WeakMap,
      Zz = new WeakMap,
      Az = {
        uncaptured: 0,
        compile: 0,
        rejected: 0
      };
    let Lz = 0,
      Hz = !1,
      Mz = null,
      yz = {
        draws: 0,
        faces: 0
      };

    function Bz(vv) {
      const zv = globalThis[vv];
      return null === zv || void 0 === zv ? void 0 : zv.prototype
    }

    function Jz(vv) {
      return vv && "function" === typeof vv[Symbol.iterator] ? [...vv].sort().join(" ") : ""
    }

    function Ez(vv, zv) {
      const Pv = null !== vv && void 0 !== vv ? vv : {},
        hv = null !== zv && void 0 !== zv ? zv : Object.keys(Object.getPrototypeOf(Pv)).concat(Object.keys(Pv));
      return [...new Set(hv)].filter((vv => "number" === typeof Pv[vv])).map((vv => `${vv} ${String(Pv[vv])}`)).join(", ")
    }

    function oz(vv, zv) {
      var Pv;
      const hv = null !== (Pv = zv.vertex) && void 0 !== Pv ? Pv : {};
      if (hv.module && Iz.has(hv.module)) {
        var Sv;
        const Pv = String(null !== (Sv = hv.entryPoint) && void 0 !== Sv ? Sv : "");
        if (Pv.startsWith("vs_packed") && Qz.set(vv, Pv), !Hz) {
          var ev, gv, pv, dv, Nv;
          Hz = !0;
          const vv = null !== (ev = zv.depthStencil) && void 0 !== ev ? ev : {},
            hv = null !== (gv = zv.multisample) && void 0 !== gv ? gv : {},
            Sv = String(null !== (pv = vv.depthCompare) && void 0 !== pv ? pv : "");
          Lv(`WebGPU terrain pipeline ${Pv}: depth ${String(null!==(dv=vv.format)&&void 0!==dv?dv:"none")} ${Sv}${Sv.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(Nv=hv.count)&&void 0!==Nv?Nv:1)}`)
        }
      }
    }

    function bz(vv) {
      Tz(vv, "setPipeline", (vv => function() {
        for (var zv = arguments.length, Pv = new Array(zv), hv = 0; hv < zv; hv++) Pv[hv] = arguments[hv];
        return Zz.set(this, Pv[0]), lz(vv, this, Pv)
      }));
      for (const zv of ["draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect"]) Tz(vv, zv, (vv => function() {
        const Pv = Zz.get(this),
          hv = Pv ? Qz.get(Pv) : void 0;
        for (var Sv = arguments.length, ev = new Array(Sv), gv = 0; gv < Sv; gv++) ev[gv] = arguments[gv];
        return void 0 !== hv && rz(zv, hv, ev), lz(vv, this, ev)
      }))
    }

    function rz(vv, zv, Pv) {
      var hv;
      (yz.draws++, "draw" === vv || "drawIndexed" === vv) && (yz.faces += Pv[0] * (null !== (hv = Pv[1]) && void 0 !== hv ? hv : 1) / 6);
      if (null !== Mz && Mz.length < Nz) {
        const hv = ("draw" === vv ? ["vertices", "instances", "firstVertex", "firstInstance"] : "drawIndexed" === vv ? ["indices", "instances", "firstIndex", "baseVertex", "firstInstance"] : ["indirectOffset"]).map(((zv, hv) => {
          const Sv = vv.endsWith("Indirect") ? Pv[1] : Pv[hv];
          return `${zv} ${String(null!==Sv&&void 0!==Sv?Sv:"instances"===zv?1:0)}`
        }));
        Mz.push(`  ${zv} ${vv} ${hv.join(" ")}`)
      }
    }

    function kz() {
      if (qz || "undefined" === typeof navigator || !("gpu" in navigator)) return;
      qz = !0, Tz(Bz("GPU"), "requestAdapter", (vv => function() {
        for (var zv = arguments.length, Pv = new Array(zv), hv = 0; hv < zv; hv++) Pv[hv] = arguments[hv];
        return lz(vv, this, Pv).then((vv => {
          var zv;
          vv ? function(vv) {
            var zv;
            const Pv = null !== (zv = vv.info) && void 0 !== zv ? zv : {};
            Lv(`WebGPU adapter ${["vendor","architecture","device","description"].map((vv=>{var zv;return`${vv} "${String(null!==(zv=Pv[vv])&&void 0!==zv?zv:"")}"`})).join(" ")}${vv.isFallbackAdapter?" (fallback)":""}`), Lv(`WebGPU adapter features ${Jz(vv.features)}`), Lv(`WebGPU adapter limits ${Ez(vv.limits,tz)}`), Hv(`WebGPU adapter all limits ${Ez(vv.limits,null)}`)
          }(vv) : Lv(`WebGPU requestAdapter(${JSON.stringify(null!==(zv=Pv[0])&&void 0!==zv?zv:{})}) gave none`);
          return vv
        }))
      })), Tz(Bz("GPUAdapter"), "requestDevice", (vv => function() {
        for (var zv = arguments.length, Pv = new Array(zv), hv = 0; hv < zv; hv++) Pv[hv] = arguments[hv];
        return lz(vv, this, Pv).then((vv => (function(vv) {
          Lv(`WebGPU device features ${Jz(vv.features)}`), Lv(`WebGPU device limits ${Ez(vv.limits,tz)}`), vv.addEventListener("uncapturederror", (vv => {
            if (Az.uncaptured < dz) {
              var zv, Pv, hv;
              Az.uncaptured++;
              const Sv = vv.error;
              Lv(`WebGPU uncaptured ${null!==(zv=null===Sv||void 0===Sv||null===(Pv=Sv.constructor)||void 0===Pv?void 0:Pv.name)&&void 0!==zv?zv:"error"}: ${Mv(String(null!==(hv=null===Sv||void 0===Sv?void 0:Sv.message)&&void 0!==hv?hv:""),600)}`)
            }
          }));
          const zv = vv.lost;
          null === zv || void 0 === zv || zv.then((vv => {
            var zv;
            Lv(`WebGPU device lost (${String(vv.reason)}): ${Mv(String(null!==(zv=vv.message)&&void 0!==zv?zv:""),600)}`)
          }))
        }(vv), vv)), (vv => {
          throw Lv(`WebGPU requestDevice failed: ${String(vv)}`), vv
        }))
      }));
      const vv = Bz("GPUDevice");
      Tz(vv, "createShaderModule", (vv => function() {
        for (var zv, Pv, hv = arguments.length, Sv = new Array(hv), ev = 0; ev < hv; ev++) Sv[ev] = arguments[ev];
        const gv = lz(vv, this, Sv);
        return function(vv, zv) {
          const Pv = zv.includes("decodeQuad");
          Pv && Iz.add(vv);
          const hv = vv.getCompilationInfo;
          null === hv || void 0 === hv || hv.call(vv).then((vv => {
            if (0 === vv.messages.length && !Pv) return;
            const zv = {};
            for (const Pv of vv.messages) {
              var hv;
              zv[String(Pv.type)] = (null !== (hv = zv[String(Pv.type)]) && void 0 !== hv ? hv : 0) + 1
            }
            const Sv = vv.messages.map((vv => `${String(vv.type)} ${String(vv.lineNum)}:${String(vv.linePos)} ${String(vv.message)}`)).join("\n");
            Az.compile < dz && (Az.compile++, Lv(`WebGPU ${Pv?"terrain ":""}shader module compiled: ${JSON.stringify(zv)}${Sv?` first: ${Mv(Sv.split("\n")[0],300)}`:""}`)), Sv && Hv(`WebGPU shader module messages:\n${Mv(Sv)}`)
          }))
        }(gv, String(null !== (zv = (null !== (Pv = Sv[0]) && void 0 !== Pv ? Pv : {}).code) && void 0 !== zv ? zv : "")), gv
      })), Tz(vv, "createRenderPipeline", (vv => function() {
        for (var zv, Pv = arguments.length, hv = new Array(Pv), Sv = 0; Sv < Pv; Sv++) hv[Sv] = arguments[Sv];
        const ev = lz(vv, this, hv);
        return oz(ev, null !== (zv = hv[0]) && void 0 !== zv ? zv : {}), ev
      })), Tz(vv, "createRenderPipelineAsync", (vv => function() {
        for (var zv = arguments.length, Pv = new Array(zv), hv = 0; hv < zv; hv++) Pv[hv] = arguments[hv];
        return lz(vv, this, Pv).then((vv => {
          var zv;
          return oz(vv, null !== (zv = Pv[0]) && void 0 !== zv ? zv : {}), vv
        }), (vv => {
          var zv;
          throw function(vv, zv) {
            var Pv, hv, Sv;
            if (Az.rejected >= dz) return;
            Az.rejected++;
            const {
              reason: ev,
              message: gv
            } = null !== zv && void 0 !== zv ? zv : {}, pv = String(null !== (Pv = (null !== (hv = vv.vertex) && void 0 !== hv ? hv : {}).entryPoint) && void 0 !== Pv ? Pv : "");
            Lv(`WebGPU pipeline "${String(null!==(Sv=vv.label)&&void 0!==Sv?Sv:"")}" ${pv} rejected (${String(null!==ev&&void 0!==ev?ev:"no reason")}): ${Mv(String(null!==gv&&void 0!==gv?gv:zv),600)}`)
          }(null !== (zv = Pv[0]) && void 0 !== zv ? zv : {}, vv), vv
        }))
      })), Tz(Bz("GPUCanvasContext"), "configure", (vv => function() {
        for (var zv, Pv = arguments.length, hv = new Array(Pv), Sv = 0; Sv < Pv; Sv++) hv[Sv] = arguments[Sv];
        const ev = null !== (zv = hv[0]) && void 0 !== zv ? zv : {};
        var gv, pv;
        Lz++ < 3 && Lv(`WebGPU canvas ${String(ev.format)} ${String(null!==(gv=ev.colorSpace)&&void 0!==gv?gv:"srgb")} alpha ${String(null!==(pv=ev.alphaMode)&&void 0!==pv?pv:"opaque")}`);
        return lz(vv, this, hv)
      })), bz(Bz("GPURenderPassEncoder")), bz(Bz("GPURenderBundleEncoder"))
    }
    const Xz = 1e4,
      uz = 6e4,
      vP = 5e3,
      zP = 3e3,
      PP = 100;
    let hP = null,
      SP = !1,
      eP = {
        ...Rz.c
      },
      gP = !1,
      pP = null,
      dP = 0,
      NP = () => {};
    const lP = new Promise((vv => {
      NP = vv
    }));

    function TP() {
      var vv;
      SP || (SP = !0, eP = Object.assign(window.bloxdRenderDebug ??= {
        ...Rz.c
      }, {
        faceCull: "0" === (0, ev.l)("faceCull") ? "0" : "1",
        adrenoProbe: null !== (vv = (0, ev.l)("adrenoProbe")) && void 0 !== vv ? vv : ""
      }), Lv("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), Wz || "undefined" === typeof window || (Wz = !0, "undefined" !== typeof WebGL2RenderingContext && Yz(WebGL2RenderingContext.prototype, !0), "undefined" !== typeof WebGLRenderingContext && Yz(WebGLRenderingContext.prototype, !1)), kz(), (0, ev.b)("renderProbe", (() => {
        iP("console")
      })), sP(), setInterval(GP, vP))
    }

    function WP(vv) {
      var zv, Pv;
      TP(), hP = null !== (zv = null === vv || void 0 === vv ? void 0 : vv.backend) && void 0 !== zv ? zv : null;
      const hv = `, renderer param ${null!==(Pv=(0,ev.l)("renderer"))&&void 0!==Pv?Pv:"none"}, faceCull ${"0"===eP.faceCull?"off (whole parts)":"on"}, adrenoProbe ${eP.adrenoProbe||"none"}`;
      Lv(`${(0,xz.b)(vv)}${null===vv?"":hv}`)
    }

    function wP() {
      const vv = performance.now(),
        zv = aP(lP, Xz, uz).then((zv => iP(`${Math.round((performance.now()-vv)/1e3)} s after playable${zv?"":", no terrain drawn yet"}`)));
      (0, Sv.d)(Lv, (async () => {
        await zv, await pP
      }))
    }
    async function aP(vv, zv, Pv) {
      const Sv = (0, hv.b)(Pv).then((() => !1));
      return await (0, hv.b)(zv), Promise.race([vv.then((() => !0)), Sv])
    }

    function sP() {
      requestAnimationFrame((() => {
        dP++, sP()
      }))
    }

    function CP() {
      var vv, zv, Pv;
      if (gP) return;
      (gP = !0, Lv(`renderer caps ${null!==(vv=eP.caps)&&void 0!==vv?vv:"(not noted)"}; terrain fetch ${null!==(zv=eP.fetch)&&void 0!==zv?zv:"(not noted)"}`), eP.adrenoProbe) && Lv(`adrenoProbe ${eP.adrenoProbe} asked; in force (storage fetch only): ${null!==(Pv=eP.probe)&&void 0!==Pv?Pv:"(not noted)"}`);
      const hv = xv.context;
      if (hv) {
        for (const vv of function(vv) {
            var zv;
            const Pv = [],
              hv = vv.getExtension("WEBGL_debug_renderer_info"),
              Sv = hv ? vv.getParameter(hv.UNMASKED_VENDOR_WEBGL) : "(masked)",
              ev = hv ? vv.getParameter(hv.UNMASKED_RENDERER_WEBGL) : "(masked)";
            Pv.push(`GL ${String(vv.getParameter(vv.VERSION))} | ${String(vv.getParameter(vv.SHADING_LANGUAGE_VERSION))} | ${String(vv.getParameter(vv.VENDOR))} / ${String(vv.getParameter(vv.RENDERER))}`), Pv.push(`GL unmasked ${Sv} / ${ev}`);
            const gv = [
              ["MAX_TEXTURE_SIZE", vv.MAX_TEXTURE_SIZE],
              ["MAX_VERTEX_ATTRIBS", vv.MAX_VERTEX_ATTRIBS],
              ["MAX_VERTEX_UNIFORM_VECTORS", vv.MAX_VERTEX_UNIFORM_VECTORS],
              ["MAX_VERTEX_TEXTURE_IMAGE_UNITS", vv.MAX_VERTEX_TEXTURE_IMAGE_UNITS],
              ["MAX_COMBINED_TEXTURE_IMAGE_UNITS", vv.MAX_COMBINED_TEXTURE_IMAGE_UNITS],
              ["MAX_VARYING_VECTORS", vv.MAX_VARYING_VECTORS],
              ["MAX_RENDERBUFFER_SIZE", vv.MAX_RENDERBUFFER_SIZE]
            ];
            "MAX_UNIFORM_BLOCK_SIZE" in vv && gv.push(["MAX_UNIFORM_BLOCK_SIZE", vv.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", vv.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", vv.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", vv.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS]), Pv.push(`GL limits ${gv.map((zv=>{let[Pv,hv]=zv;return`${Pv} ${String(vv.getParameter(hv))}`})).join(", ")}`);
            const pv = (zv, Pv) => {
              const hv = vv.getShaderPrecisionFormat(zv, vv.HIGH_FLOAT),
                Sv = vv.getShaderPrecisionFormat(zv, vv.HIGH_INT);
              return `${Pv} highp float ${hv?`${hv.rangeMin}/${hv.rangeMax}/${hv.precision}`:"?"} int ${Sv?`${Sv.rangeMin}/${Sv.rangeMax}/${Sv.precision}`:"?"}`
            };
            Pv.push(`GL precision ${pv(vv.VERTEX_SHADER,"VS")}, ${pv(vv.FRAGMENT_SHADER,"FS")}`);
            const dv = vv.getContextAttributes();
            return Pv.push(`GL context ${JSON.stringify(dv)} drawingBuffer ${vv.drawingBufferWidth}x${vv.drawingBufferHeight}${"drawingBufferFormat"in vv?` format 0x${Number(vv.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in vv?` ${String(vv.drawingBufferColorSpace)}`:""}`), Pv.push(`GL extensions ${(null!==(zv=vv.getSupportedExtensions())&&void 0!==zv?zv:[]).join(" ")}`), Pv
          }(hv)) Lv(vv);
        ! function() {
          if (!xv.context) return;
          let vv = 0,
            zv = 0;
          for (const [Pv, hv] of Vv) !hv.gl.isContextLost() && hv.gl.isProgram(Pv) && (zv++, Dz(hv.gl, Pv, hv), null !== hv.terrain && vv++);
          Lv(`programs: ${zv} live of ${Vv.length} linked, ${vv} packed terrain; CPU page copies ${Math.round(xv.shadowBytes/1048576)} MiB (${xv.uncopied} over budget)`)
        }()
      }
    }

    function iP(vv) {
      return pP ??= async function(vv) {
        CP(), "webgpu" === hP ? (cP(), "1" === eP.slotCheck && Lv("slot check: the last request is still unanswered, so the next answer reads the slots as they were then"), eP.slotCheck = "1", await
          function(vv) {
            if (null !== Mz) return Promise.resolve();
            const zv = [];
            return Mz = zv, new Promise((Pv => {
              setTimeout((() => {
                Mz = null, Lv(`WebGPU draw ranges (${vv}): ${zv.length} terrain draws recorded in a second (first ${Nz}; bundles replay without new ones)`);
                for (const vv of zv) Lv(vv);
                Pv()
              }), 1e3)
            }))
          }(vv), await async function() {
            if (await (0, Rz.g)(eP, "slotCheck", ["1"], zP, PP), "1" === eP.slotCheck) return void Lv(`slot check: no answer in ${zP} ms (only the storage fetch has one; a later answer logs on its own)`);
            cP()
          }()) : await gz(vv);
        Lv(`check (${vv}) done: bloxdDebug.save() downloads it all`)
      }(vv).catch((zv => {
        Lv(`check (${vv}) failed: ${String(zv)}`)
      })).finally((() => {
        pP = null
      })), pP
    }

    function cP() {
      void 0 !== eP.slotCheck && "1" !== eP.slotCheck && (Lv(eP.slotCheck), delete eP.slotCheck)
    }

    function GP() {
      const vv = vv => dP ? (vv / dP).toFixed(1) : "0",
        zv = function() {
          const vv = yz;
          return yz = {
            draws: 0,
            faces: 0
          }, vv
        }(),
        Pv = function() {
          const vv = iz;
          return iz = {
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
          }, vv
        }(),
        hv = function() {
          const vv = cz;
          return cz = {
            buffer: 0,
            texture: 0
          }, vv
        }();
      cP(), ("webgpu" === hP ? zv.draws : Pv.inst.draws + Pv.tex.draws) > 0 && NP();
      const Sv = "webgpu" === hP ? [`terrain ${vv(zv.draws)} draws ${vv(zv.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((vv => Pv[vv].draws > 0)).map((zv => `${zv} ${vv(Pv[zv].draws)} draws ${vv(Pv[zv].faces)} faces a frame`));
      Lv(`${dP} frames: ${Sv.join(", ")||"no draws"}; uploaded ${Math.round(hv.buffer/1024)} KiB to buffers, ${Math.round(hv.texture/1024)} KiB to data textures`), dP = 0
    }
  },
  4456: (vv, zv, Pv) => {
    function hv(vv) {
      if (null === vv) return "backend: none picked (no renderer build)";
      const zv = vv.adapter ? `${vv.adapter.vendor}/${vv.adapter.architecture}` : "none";
      return `backend ${vv.backend}: reason ${vv.reason}, source ${vv.source}, adapter ${zv}`
    }
    Pv.d(zv, {
      b: () => hv
    })
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);