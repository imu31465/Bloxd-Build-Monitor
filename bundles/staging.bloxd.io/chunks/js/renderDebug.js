export const id = 57;
export const ids = [57];
export const modules = {
  5489: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => pr
    });
    var Zr = Qr(26),
      Wr = Qr(34),
      ar = Qr(1353),
      jr = Qr(3909);
    const Ir = 3e4,
      fr = 1e3;

    function Er() {
      return "visible" === document.visibilityState && "inGame" === Zr.c.get("gameState") && (0, ar.v)()
    }

    function pr(rr, Sr) {
      (0, jr.t)() || function(rr, Sr, Qr) {
        let Zr = 0;
        const Wr = setInterval((() => {
          Sr() && (Zr += fr, Zr >= rr && (clearInterval(Wr), Qr()))
        }), fr)
      }(Ir, Er, (() => {
        Sr().then((() => {
          rr(`saved for the player after ${Ir/1e3} s of play`), (0, jr.I)(), Wr.i.Jp("chat", {
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
  5481: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      installRenderDebug: () => xQ,
      renderDebugPlayable: () => NQ,
      startRenderDebug: () => mQ,
      waitForDraw: () => UQ
    });
    var Zr = Qr(1974),
      Wr = Qr(5489),
      ar = Qr(3909);
    const jr = ["+x", "-x", "+y", "-y", "+z", "-z", "dir6", "dir7"];

    function Ir(rr) {
      return 7 & rr
    }

    function fr(rr) {
      return rr >>> 11 & 1
    }

    function Er(rr) {
      return [1 + (rr >>> 18 & 63), 1 + (rr >>> 24 & 63)]
    }

    function pr(rr, Sr) {
      const [Qr, , Zr] = rr, Wr = Ir(Zr), ar = function(rr, Sr, Qr) {
        return Sr + (1 === (22 >>> rr & 1) ? 4 - Qr : Qr) & 3
      }(Wr, fr(Zr), Sr), jr = Wr >>> 1, [pr, xr] = Er(Qr), mr = 1 === ar || 2 === ar ? pr : 0, Nr = ar >= 2 ? xr : 0, Ur = [63 & Qr, Qr >>> 6 & 63, Qr >>> 12 & 63];
      return Ur[2 === jr ? 0 : 2] += mr, Ur[1 === jr ? 0 : 1] += Nr, Ur
    }

    function xr(rr) {
      const Sr = Math.max(...Er(rr[0]));
      return 1 === Sr ? "1" : Sr <= 4 ? "2-4" : Sr <= 16 ? "5-16" : "17-64"
    }
    const mr = 16;

    function Nr(rr) {
      let Sr = 2166136261;
      for (let Qr = 0; Qr < rr.length; Qr++) Sr = Math.imul(Sr ^ rr[Qr], 16777619);
      return Sr >>> 0
    }

    function Ur(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12;
      const Zr = Math.max(0, Sr - Qr),
        Wr = Math.min(rr.length, Sr + Qr),
        ar = [];
      for (let jr = Zr; jr < Wr; jr++) {
        const Qr = rr[jr].toString(16).padStart(2, "0");
        ar.push(jr === Sr ? `[${Qr}]` : Qr)
      }
      return ar.join(" ")
    }
    const tr = {
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
      hr = "_vs2fs_location0";
    const zr = 0,
      Yr = 4,
      nr = 6,
      er = [0, 1, 2, 0, 2, 3],
      Kr = 2048,
      yr = 4,
      Br = 256,
      Tr = 64,
      vr = 268435456,
      Or = 65536,
      Lr = /^#version [^\n]*\/\/ program (\S+)$/m;

    function lr(rr) {
      return null === rr.name ? `#${rr.id}` : `#${rr.id} ${rr.name}`
    }
    const Xr = [],
      Pr = new WeakMap,
      Hr = new WeakMap,
      qr = {
        context: null,
        inProbe: !1,
        pendingCheck: null,
        shadowBytes: 0,
        uncopied: 0
      };
    let Rr = 1;
    const gr = new WeakMap;

    function Cr(rr) {
      if (null === rr) return 0;
      let Sr = gr.get(rr);
      return void 0 === Sr && (Sr = Rr++, gr.set(rr, Sr)), Sr
    }
    class Mr {
      constructor(rr, Sr) {
        this.print = rr, this.now = Sr, this.shown = 0, this.wI = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.sp = [], this.dropped = 0
      }
      line(rr) {
        const Sr = this.now();
        if (Sr - this.second >= 1e3 && (this.second = Sr, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.wI++, void this.store(rr);
        this.shown++, this.inSecond++, this.print(400 === this.shown ? `${rr} (the last line here: the rest go to bloxdDebug.save())` : rr)
      }
      keep(rr) {
        this.sections++, this.store(rr)
      }
      store(rr) {
        this.sp.push(`${new Date(Date.now()).toISOString()} ${rr}`), this.sp.length > 2e4 && (this.sp.shift(), this.dropped++)
      }
      dump() {
        return [`${this.shown} lines logged (above); kept here: ${this.wI} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.sp].join("\n")
      }
    }
    let Gr = null;

    function kr() {
      if (null === Gr) {
        const rr = new Mr((rr => {
          (0, ar.l)("render", rr)
        }), (() => performance.now()));
        (0, ar.i)("render", (() => rr.dump())), Gr = rr
      }
      return Gr
    }

    function Ar(rr) {
      kr().line(rr)
    }

    function Vr(rr) {
      kr().keep(rr)
    }

    function ir(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4096;
      return rr.length <= Sr ? rr : `${rr.slice(0,Sr)}... (${rr.length-Sr} more characters)`
    }

    function wr(rr, Sr, Qr, Zr, Wr, ar) {
      const jr = qr.pendingCheck;
      if (null === jr) return;
      const Ir = "undefined" !== typeof WebGL2RenderingContext && rr instanceof WebGL2RenderingContext,
        fr = {
          gl: rr,
          program: Qr,
          call: Zr,
          yh: Wr,
          instances: ar,
          attributes: [],
          group: -1,
          chunk: "",
          pages: []
        };
      if (jr.draws.push(fr), Ir) try {
        const Zr = function(rr) {
          const Sr = [],
            Qr = new Map,
            Zr = Math.min(16, rr.getParameter(tr.MAX_VERTEX_ATTRIBS));
          for (let Wr = 0; Wr < Zr; Wr++) {
            if (!rr.getVertexAttrib(Wr, tr.VERTEX_ATTRIB_ARRAY_ENABLED)) continue;
            const Zr = rr.getVertexAttrib(Wr, tr.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING),
              ar = rr.getVertexAttribOffset(Wr, tr.VERTEX_ATTRIB_ARRAY_POINTER),
              jr = rr.getVertexAttrib(Wr, tr.VERTEX_ATTRIB_ARRAY_STRIDE),
              Ir = rr.getVertexAttrib(Wr, tr.VERTEX_ATTRIB_ARRAY_SIZE),
              fr = rr.getVertexAttrib(Wr, tr.VERTEX_ATTRIB_ARRAY_TYPE),
              Er = "VERTEX_ATTRIB_ARRAY_INTEGER" in rr && rr.getVertexAttrib(Wr, tr.VERTEX_ATTRIB_ARRAY_INTEGER),
              pr = "VERTEX_ATTRIB_ARRAY_DIVISOR" in rr ? rr.getVertexAttrib(Wr, tr.VERTEX_ATTRIB_ARRAY_DIVISOR) : 0;
            Qr.set(Wr, {
              buffer: Zr,
              offset: ar,
              stride: jr
            }), Sr.push(`@${Wr} buf#${Cr(Zr)} +${ar} stride ${jr} ${Ir}x0x${fr.toString(16)}${Er?" int":""} div ${pr}`)
          }
          return {
            lines: Sr,
            byLocation: Qr
          }
        }(rr);
        if (fr.attributes = Zr.lines, "inst" === Qr.terrain) {
          const {
            group: Wr,
            chunk: Ir
          } = function(rr, Sr, Qr) {
            const Zr = Sr.get(nr),
              Wr = rr.getVertexAttrib(nr, tr.CURRENT_VERTEX_ATTRIB),
              ar = Zr ? `+${Zr.offset}` : Wr ? Array.from(Wr).slice(0, 3).join(",") : "?";
            let jr = Qr.groups.get(ar);
            return void 0 === jr && (jr = Qr.groups.size, Qr.groups.set(ar, jr)), {
              group: jr,
              chunk: ar
            }
          }(rr, Zr.byLocation, jr);
          fr.group = Wr, fr.chunk = Ir;
          for (const rr of [zr, Yr]) {
            var Er;
            const Sr = null === (Er = Zr.byLocation.get(rr)) || void 0 === Er ? void 0 : Er.buffer;
            Sr && fr.pages.push({
              kind: "buf",
              buffer: Sr
            })
          }! function(rr, Sr, Qr, Zr, Wr, ar, jr) {
            const Ir = Zr.get(zr),
              fr = jr.parts.get(ar);
            if (void 0 === fr && jr.parts.size >= yr) return;
            const Er = Math.min(Wr, Tr, Br - (null !== fr && void 0 !== fr ? fr : 0));
            if (null === Ir || void 0 === Ir || !Ir.buffer || Er <= 0) return;
            const pr = cr(rr, Sr, Qr);
            if (!pr) return;
            const xr = Ir.stride || 12,
              mr = Dr(rr, Ir.buffer, Ir.offset, (Er - 1) * xr + 12),
              Nr = new DataView(mr.buffer),
              Ur = function(rr, Sr) {
                const Qr = function(rr) {
                    const Sr = ur.get(rr);
                    if (void 0 !== Sr && (null === Sr || rr.isProgram(Sr))) return Sr;
                    qr.inProbe = !0;
                    let Qr = null;
                    try {
                      Qr = Fr(rr, dr, sr, "fed", "the record feed")
                    } finally {
                      qr.inProbe = !1
                    }
                    return ur.set(rr, Qr), Qr
                  }(rr),
                  Zr = Qr ? Jr(rr, Qr, Sr, (() => {
                    rr.drawArraysInstanced(tr.POINTS, 0, 1, Sr)
                  }), "decode probe input (the record feed)") : null;
                return Zr ? new Uint32Array(Zr.buffer) : null
              }(rr, Er);
            Ur || jr.fed.failed++;
            const hr = Jr(rr, pr, 4 * Er, (() => {
              rr.drawArraysInstanced(tr.POINTS, 0, 4, Er)
            }));
            if (!hr) return;
            jr.parts.set(ar, (null !== fr && void 0 !== fr ? fr : 0) + Er);
            for (let tr = 0; tr < Er; tr++) {
              const rr = tr * xr,
                Sr = [Nr.getUint32(rr, !0), Nr.getUint32(rr + 4, !0), Nr.getUint32(rr + 8, !0)],
                Qr = Ur ? [Ur[3 * tr], Ur[3 * tr + 1], Ur[3 * tr + 2]] : Sr;
              Ur && (jr.fed.records++, Qr.some(((rr, Qr) => rr !== Sr[Qr])) && (jr.fed.differing++, jr.fed.first.length < 8 && jr.fed.first.push(`part ${ar} instance ${tr}: fed ${Qr.map(WS).join(" ")} buffer ${Sr.map(WS).join(" ")}`)));
              for (let Zr = 0; Zr < 4; Zr++) {
                const rr = 3 * (4 * tr + Zr);
                jr.vertices.push({
                  record: Qr,
                  slot: Zr,
                  group: ar,
                  gpu: [hr[rr], hr[rr + 1], hr[rr + 2]]
                })
              }
            }
          }(rr, Sr, Qr, Zr.byLocation, ar, Wr, jr)
        } else {
          const Zr = rS(rr, Sr, 16),
            ar = rS(rr, Sr, 8);
          for (const rr of [Zr, ar]) rr && fr.pages.push({
            kind: "tex",
            texture: rr
          });
          Zr && function(rr, Sr, Qr, Zr, Wr, ar) {
            if (ar.parts.size >= yr) return;
            const jr = cr(rr, Sr, Qr);
            if (!jr) return;
            let Ir = 6 * Br;
            const fr = [];
            for (const [Nr, Ur] of Wr) {
              const rr = Math.min(Ur, Ir, Math.max(6, 6 * Math.floor(Br / Wr.length)));
              rr > 0 && (fr.push([Nr, rr]), Ir -= rr)
            }
            const Er = fr.reduce(((rr, Sr) => {
                let [, Qr] = Sr;
                return rr + Qr
              }), 0),
              pr = Jr(rr, jr, Er, (() => {
                for (const [Sr, Qr] of fr) rr.drawArrays(tr.POINTS, Sr, Qr)
              }));
            if (!pr) return;
            let xr = 0;
            for (const [Nr, Ur] of fr) {
              const Sr = Math.floor(Nr / 6),
                Qr = Math.floor((Nr + Ur - 1) / 6) - Sr + 1,
                Wr = SS(rr, Zr, Kr, Sr, Qr);
              for (let rr = Nr; rr < Nr + Ur; rr++, xr++) {
                var mr;
                const Qr = 4 * (Math.floor(rr / 6) - Sr),
                  Zr = [Wr[Qr], Wr[Qr + 1], Wr[Qr + 2]];
                ar.parts.set(Wr[Qr + 3], (null !== (mr = ar.parts.get(Wr[Qr + 3])) && void 0 !== mr ? mr : 0) + (rr % 6 === 0 ? 1 : 0)), ar.vertices.push({
                  record: Zr,
                  slot: er[rr % 6],
                  group: Wr[Qr + 3],
                  gpu: [pr[3 * xr], pr[3 * xr + 1], pr[3 * xr + 2]]
                })
              }
            }
          }(rr, Sr, Qr, Zr, Wr, jr)
        }
      } catch (pr) {
        Ar(`decode probe failed on program ${lr(Qr)}: ${String(pr)}`)
      }
    }

    function cr(rr, Sr, Qr) {
      if (void 0 !== Qr.probe) return Qr.probe && or(rr, Sr, Qr.probe), Qr.probe;
      Qr.probe = null, qr.inProbe = !0;
      try {
        Qr.probe = function(rr, Sr) {
          return Fr(rr, (Qr = Sr.vertex, Qr.replace(`\nvec3 ${hr} = vec3(0);\n`, `\nout vec3 ${hr};\n`)), Sr.fragment, hr, `program ${lr(Sr)}'s twin`);
          var Qr
        }(rr, Qr)
      } finally {
        qr.inProbe = !1
      }
      return Qr.probe && or(rr, Sr, Qr.probe), Qr.probe
    }

    function Fr(rr, Sr, Qr, Zr, Wr) {
      const ar = [rr.createShader(tr.VERTEX_SHADER), rr.createShader(tr.FRAGMENT_SHADER)],
        jr = rr.createProgram();
      if (!jr || !ar[0] || !ar[1]) return null;
      rr.shaderSource(ar[0], Sr), rr.shaderSource(ar[1], Qr);
      for (const fr of ar) rr.compileShader(fr), rr.attachShader(jr, fr);
      rr.transformFeedbackVaryings(jr, [Zr], tr.INTERLEAVED_ATTRIBS), rr.linkProgram(jr);
      for (const fr of ar) rr.deleteShader(fr);
      var Ir;
      return rr.getProgramParameter(jr, tr.LINK_STATUS) ? jr : (Ar(`decode probe: ${Wr} failed to link: ${ir(null!==(Ir=rr.getProgramInfoLog(jr))&&void 0!==Ir?Ir:"",300)}`), rr.deleteProgram(jr), null)
    }

    function or(rr, Sr, Qr) {
      const Zr = rr.getProgramParameter(Sr, tr.ACTIVE_UNIFORM_BLOCKS);
      for (let Ir = 0; Ir < Zr; Ir++) {
        const Zr = rr.getActiveUniformBlockName(Sr, Ir),
          Wr = null === Zr ? tr.INVALID_INDEX : rr.getUniformBlockIndex(Qr, Zr);
        Wr !== tr.INVALID_INDEX && rr.uniformBlockBinding(Qr, Wr, rr.getActiveUniformBlockParameter(Sr, Ir, tr.UNIFORM_BLOCK_BINDING))
      }
      const Wr = rr.getParameter(tr.CURRENT_PROGRAM);
      rr.useProgram(Qr);
      const ar = rr.getProgramParameter(Sr, tr.ACTIVE_UNIFORMS),
        jr = rr.getActiveUniforms(Sr, [...Array(ar).keys()], tr.UNIFORM_BLOCK_INDEX);
      for (let Ir = 0; Ir < ar; Ir++) {
        const Zr = rr.getActiveUniform(Sr, Ir);
        if (!Zr || -1 !== jr[Ir]) continue;
        const Wr = Zr.name.replace(/\[0\]$/, "");
        for (let ar = 0; ar < Zr.size; ar++) {
          const jr = Zr.size > 1 ? `${Wr}[${ar}]` : Zr.name,
            Ir = rr.getUniformLocation(Sr, jr),
            fr = rr.getUniformLocation(Qr, jr);
          Ir && fr && br(rr, fr, Zr.type, rr.getUniform(Sr, Ir))
        }
      }
      rr.useProgram(Wr)
    }

    function br(rr, Sr, Qr, Zr) {
      const Wr = ArrayBuffer.isView(Zr) ? Array.from(Zr) : [Number(Zr)];
      switch (Qr) {
        case tr.FLOAT:
          return void rr.uniform1f(Sr, Wr[0]);
        case tr.FLOAT_VEC2:
          return void rr.uniform2fv(Sr, Wr);
        case tr.FLOAT_VEC3:
          return void rr.uniform3fv(Sr, Wr);
        case tr.FLOAT_VEC4:
          return void rr.uniform4fv(Sr, Wr);
        case tr.FLOAT_MAT3:
          return void rr.uniformMatrix3fv(Sr, !1, Wr);
        case tr.FLOAT_MAT4:
          return void rr.uniformMatrix4fv(Sr, !1, Wr);
        case tr.UNSIGNED_INT:
          return void rr.uniform1ui(Sr, Wr[0]);
        case tr.UNSIGNED_INT_VEC2:
          return void rr.uniform2uiv(Sr, Wr);
        case tr.UNSIGNED_INT_VEC3:
          return void rr.uniform3uiv(Sr, Wr);
        case tr.UNSIGNED_INT_VEC4:
          return void rr.uniform4uiv(Sr, Wr);
        case tr.INT_VEC2:
          return void rr.uniform2iv(Sr, Wr);
        case tr.INT_VEC3:
          return void rr.uniform3iv(Sr, Wr);
        case tr.INT_VEC4:
          return void rr.uniform4iv(Sr, Wr);
        default:
          rr.uniform1i(Sr, Wr[0])
      }
    }

    function Jr(rr, Sr, Qr, Zr) {
      let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "decode probe";
      const ar = rr.getParameter(tr.CURRENT_PROGRAM),
        jr = rr.getParameter(tr.TRANSFORM_FEEDBACK_BINDING),
        Ir = rr.getParameter(tr.TRANSFORM_FEEDBACK_BUFFER_BINDING),
        fr = rr.getParameter(tr.COPY_READ_BUFFER_BINDING),
        Er = rr.isEnabled(tr.RASTERIZER_DISCARD),
        pr = rr.createTransformFeedback(),
        xr = rr.createBuffer();
      qr.inProbe = !0;
      try {
        const ar = rr.getError();
        ar !== tr.NO_ERROR && Ar(`GL error 0x${ar.toString(16)} pending before the decode probe (the renderer's)`), rr.useProgram(Sr), rr.bindTransformFeedback(tr.TRANSFORM_FEEDBACK, pr), rr.bindBuffer(tr.TRANSFORM_FEEDBACK_BUFFER, xr), rr.bufferData(tr.TRANSFORM_FEEDBACK_BUFFER, 12 * Qr, tr.STREAM_READ), rr.bindBufferBase(tr.TRANSFORM_FEEDBACK_BUFFER, 0, xr), rr.enable(tr.RASTERIZER_DISCARD), rr.beginTransformFeedback(tr.POINTS), Zr(), rr.endTransformFeedback(), rr.bindBufferBase(tr.TRANSFORM_FEEDBACK_BUFFER, 0, null);
        const jr = rr.getError();
        if (jr !== tr.NO_ERROR) return Ar(`${Wr}: GL error 0x${jr.toString(16)} on the feedback draw`), null;
        const Ir = new Float32Array(3 * Qr);
        return rr.bindBuffer(tr.COPY_READ_BUFFER, xr), rr.getBufferSubData(tr.COPY_READ_BUFFER, 0, Ir), Ir
      } finally {
        Er || rr.disable(tr.RASTERIZER_DISCARD), rr.bindTransformFeedback(tr.TRANSFORM_FEEDBACK, jr), rr.bindBuffer(tr.TRANSFORM_FEEDBACK_BUFFER, Ir), rr.bindBuffer(tr.COPY_READ_BUFFER, fr), rr.deleteTransformFeedback(pr), rr.deleteBuffer(xr), rr.useProgram(ar), qr.inProbe = !1
      }
    }

    function Dr(rr, Sr, Qr, Zr) {
      const Wr = rr.getParameter(tr.COPY_READ_BUFFER_BINDING),
        ar = new Uint8Array(Zr);
      return rr.bindBuffer(tr.COPY_READ_BUFFER, Sr), rr.getBufferSubData(tr.COPY_READ_BUFFER, Qr, ar), rr.bindBuffer(tr.COPY_READ_BUFFER, Wr), ar
    }
    const dr = `#version 300 es\nlayout(location = ${zr}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
      sr = "#version 300 es\nprecision highp float;\nout vec4 color;\nvoid main() {\n\tcolor = vec4(0.0);\n}\n",
      ur = new WeakMap;

    function rS(rr, Sr, Qr) {
      const Zr = rr.getProgramParameter(Sr, tr.ACTIVE_UNIFORMS),
        Wr = rr.getParameter(tr.ACTIVE_TEXTURE);
      try {
        for (let Wr = 0; Wr < Zr; Wr++) {
          const Zr = rr.getActiveUniform(Sr, Wr);
          if ((null === Zr || void 0 === Zr ? void 0 : Zr.type) !== tr.UNSIGNED_INT_SAMPLER_2D) continue;
          const ar = rr.getUniformLocation(Sr, Zr.name),
            jr = ar ? rr.getUniform(Sr, ar) : -1;
          if (jr < 0) continue;
          rr.activeTexture(tr.TEXTURE0 + jr);
          const Ir = rr.getParameter(tr.TEXTURE_BINDING_2D);
          if (Ir && Hr.get(Ir) === Qr) return Ir
        }
        return null
      } finally {
        rr.activeTexture(Wr)
      }
    }

    function SS(rr, Sr, Qr, Zr, Wr) {
      const ar = new Uint32Array(4 * Wr),
        jr = rr.getParameter(tr.READ_FRAMEBUFFER_BINDING),
        Ir = rr.createFramebuffer();
      rr.bindFramebuffer(tr.READ_FRAMEBUFFER, Ir), rr.framebufferTexture2D(tr.READ_FRAMEBUFFER, tr.COLOR_ATTACHMENT0, tr.TEXTURE_2D, Sr, 0);
      try {
        let Sr = 0;
        for (; Sr < Wr;) {
          const jr = Zr + Sr,
            Ir = jr % Qr,
            fr = Math.min(Wr - Sr, Qr - Ir);
          rr.readPixels(Ir, Math.floor(jr / Qr), fr, 1, tr.RGBA_INTEGER, tr.UNSIGNED_INT, ar.subarray(4 * Sr, 4 * (Sr + fr))), Sr += fr
        }
      } finally {
        rr.bindFramebuffer(tr.READ_FRAMEBUFFER, jr), rr.deleteFramebuffer(Ir)
      }
      return ar
    }

    function QS(rr, Sr, Qr) {
      let Zr = 0,
        Wr = 0;
      for (let fr = 0; fr < Sr.bytes.length; fr += Or) {
        Zr++;
        const rr = Math.min(fr + Or, Sr.bytes.length);
        Nr(Sr.bytes.subarray(fr, rr)) !== Nr(Qr.subarray(fr, rr)) && Wr++
      }
      const ar = `${rr} ${Sr.bytes.length} B cpu ${Nr(Sr.bytes).toString(16)} gpu ${Nr(Qr).toString(16)}, ${Wr}/${Zr} blocks differ${Sr.missed?`, ${Sr.missed} GPU-side writes uncopied`:""}`;
      if (0 === Wr) return ar;
      const {
        count: jr,
        offsets: Ir
      } = function(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8;
        const Zr = Math.min(rr.length, Sr.length);
        let Wr = Math.abs(rr.length - Sr.length);
        const ar = [];
        for (let jr = 0; jr < Zr; jr++) rr[jr] !== Sr[jr] && (Wr++, ar.length < Qr && ar.push(jr));
        return {
          count: Wr,
          offsets: ar
        }
      }(Sr.bytes, Qr);
      return Vr([`${ar}: ${jr} bytes differ`, ...Ir.map((rr => `  +${rr}: cpu ${Ur(Sr.bytes,rr)} | gpu ${Ur(Qr,rr)}`))].join("\n")), `${ar}: ${jr} bytes differ, first at ${Ir.join(", ")} (context in the saved file)`
    }

    function ZS(rr) {
      if (0 === rr.vertices.length) return void Ar(`decode probe (${rr.reason}): no terrain draw probed (${rr.draws.length} seen)`);
      const Sr = function(rr) {
          const Sr = new Map;
          for (const Zr of rr) {
            const rr = Sr.get(Zr.group);
            rr ? rr.push(Zr) : Sr.set(Zr.group, [Zr])
          }
          const Qr = {
            vertices: rr.length,
            mismatches: 0,
            byDirection: new Array(8).fill(0),
            byDiagonal: [0, 0],
            byBand: {},
            translations: new Map,
            first: []
          };
          for (const [Zr, Wr] of Sr) {
            const rr = new Map,
              Sr = Wr.map((Sr => {
                const Qr = pr(Sr.record, Sr.slot),
                  Zr = [Sr.gpu[0] - Qr[0], Sr.gpu[1] - Qr[1], Sr.gpu[2] - Qr[2]],
                  Wr = Zr.map((rr => Math.round(64 * rr))).join(","),
                  ar = rr.get(Wr);
                return ar ? ar.count++ : rr.set(Wr, {
                  count: 1,
                  offset: Zr
                }), Qr
              }));
            let ar = [0, 0, 0],
              jr = 0;
            for (const Qr of rr.values()) Qr.count > jr && (jr = Qr.count, ar = Qr.offset);
            Qr.translations.set(Zr, ar), Wr.forEach(((rr, Zr) => {
              var Wr;
              const jr = [Sr[Zr][0] + ar[0], Sr[Zr][1] + ar[1], Sr[Zr][2] + ar[2]];
              if (jr.every(((Sr, Qr) => {
                  return Zr = rr.gpu[Qr], Wr = Sr, Math.abs(Zr - Wr) <= Math.max(.001, 1e-6 * Math.abs(Wr));
                  var Zr, Wr
                }))) return;
              Qr.mismatches++, Qr.byDirection[Ir(rr.record[2])]++, Qr.byDiagonal[fr(rr.record[2])]++;
              const Er = xr(rr.record);
              Qr.byBand[Er] = (null !== (Wr = Qr.byBand[Er]) && void 0 !== Wr ? Wr : 0) + 1, Qr.first.length < mr && Qr.first.push({
                ...rr,
                expected: jr
              })
            }))
          }
          return Qr
        }(rr.vertices),
        Qr = Sr.byDirection.map(((rr, Sr) => rr ? `${jr[Sr]} ${rr}` : "")).filter(Boolean).join(" "),
        Zr = Object.entries(Sr.byBand).map((rr => {
          let [Sr, Qr] = rr;
          return `${Sr}: ${Qr}`
        })).join(" ");
      if (Ar(`decode probe (${rr.reason}): ${Sr.mismatches}/${Sr.vertices} vertices differ from the CPU decode over ${rr.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (Sr.mismatches ? ` by direction [${Qr}] diagonal [0: ${Sr.byDiagonal[0]} 1: ${Sr.byDiagonal[1]}] extent [${Zr}]` : "")), rr.fed.records > 0 || rr.fed.failed > 0) {
        Ar(`decode probe input: ${rr.fed.differing}/${rr.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (rr.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (rr.fed.failed ? `; the feed failed on ${rr.fed.failed} draws, whose decode is held to the buffer's readback` : ""));
        for (const Sr of rr.fed.first) Ar(`  ${Sr}`)
      }
      for (const Wr of Sr.first) {
        const [rr, Sr, Qr] = Wr.record;
        Ar(`  mismatch part ${Wr.group} r0 ${rr.toString(16)} r1 ${Sr.toString(16)} r2 ${Qr.toString(16)} slot ${Wr.slot} (${jr[Ir(Qr)]}): expected ${Wr.expected.map(aS).join(",")} gpu ${Wr.gpu.map(aS).join(",")}`)
      }
      Vr(`decode probe translations: ${[...Sr.translations].map((rr=>{let[Sr,Qr]=rr;return`${Sr}: ${Qr.map(aS).join(",")}`})).join("; ")}`)
    }

    function WS(rr) {
      return rr.toString(16)
    }

    function aS(rr) {
      return Number.isInteger(rr) ? String(rr) : rr.toFixed(3)
    }

    function jS(rr) {
      return null !== qr.pendingCheck ? Promise.resolve() : new Promise((Sr => {
        let Qr = !1;
        const Zr = {
          reason: rr,
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
        qr.pendingCheck = Zr;
        const Wr = () => {
            qr.pendingCheck = null;
            try {
              ! function(rr) {
                Ar(`draw ranges (${rr.reason}): ${rr.terrainDraws} terrain draws in the frame, the first ${rr.draws.length} here`);
                for (const Sr of rr.draws) {
                  const rr = Sr.yh.slice(0, 8).map((rr => {
                      let [Sr, Qr] = rr;
                      return `${Sr}+${Qr}`
                    })).join(" "),
                    Qr = Sr.yh.length > 8 ? ` (+${Sr.yh.length-8} ranges)` : "";
                  Ar(`  ${lr(Sr.program)} ${Sr.program.terrain} ${Sr.call} ${rr}${Qr} x${Sr.instances}${Sr.group>=0?` part ${Sr.group} chunk ${Sr.chunk}`:""} | ${Sr.attributes.join(" | ")}`)
                }
              }(Zr), ZS(Zr);
              Zr.draws.some((rr => "undefined" !== typeof WebGL2RenderingContext && rr.gl instanceof WebGL2RenderingContext)) || 0 === Zr.draws.length ? function(rr) {
                const Sr = [],
                  Qr = new Map;
                for (const Zr of rr)
                  if ("undefined" !== typeof WebGL2RenderingContext && Zr.gl instanceof WebGL2RenderingContext)
                    for (const rr of Zr.pages) Qr.set("buf" === rr.kind ? rr.buffer : rr.texture, {
                      page: rr,
                      gl: Zr.gl
                    });
                for (const [Zr, {
                    page: Wr,
                    gl: ar
                  }] of Qr) {
                  const rr = Pr.get(Zr);
                  if (!rr) {
                    Sr.push(`${Wr.kind}#${Cr(Zr)}: no CPU copy (${qr.uncopied} pages over the copy budget)`);
                    continue
                  }
                  if ("buf" === Wr.kind) {
                    Sr.push(QS(`buf#${rr.id}`, rr, Dr(ar, Wr.buffer, 0, rr.bytes.length)));
                    continue
                  }
                  const Qr = SS(ar, Wr.texture, rr.width, 0, rr.width * rr.height),
                    jr = 16 === rr.texelBytes ? new Uint8Array(Qr.buffer) : new Uint8Array(new Uint16Array(Qr).buffer);
                  Sr.push(QS(`tex#${rr.id} (${16===rr.texelBytes?"records":"light"})`, rr, jr))
                }
                for (const Zr of Sr) Ar(`page readback ${Zr}`)
              }(Zr.draws) : Ar("page readback: none on WebGL1 (no buffer readback)")
            } catch (rr) {
              Ar(`check failed: ${String(rr)}`)
            }
            Sr()
          },
          ar = () => {
            if (Zr.draws.length > 0 && !Qr) return Qr = !0, void setTimeout(Wr, 0);
            Qr || requestAnimationFrame(ar)
          };
        requestAnimationFrame(ar), setTimeout((() => {
          Qr || (Qr = !0, Wr())
        }), 5e3)
      }))
    }
    var IS = Qr(5498);
    const fS = 20,
      ES = 24,
      pS = Reflect.apply;

    function xS(rr, Sr, Qr) {
      if (!rr) return;
      const Zr = rr[Sr];
      if ("function" === typeof Zr) {
        const Wr = Qr(Zr);
        rr[Sr] = Wr, (0, IS.E)(Wr, Zr)
      }
    }
    let mS = !1;
    const NS = new WeakMap,
      US = new WeakMap,
      tS = new WeakMap,
      hS = {
        gl: 0,
        lost: 0
      };
    let zS = {
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
      YS = {
        buffer: 0,
        texture: 0
      },
      nS = 0;

    function eS(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      if (rr instanceof ArrayBuffer) return new Uint8Array(rr, Sr, Qr || void 0);
      if (!ArrayBuffer.isView(rr)) return null;
      const Zr = "BYTES_PER_ELEMENT" in rr ? rr.BYTES_PER_ELEMENT : 1,
        Wr = rr.byteOffset + Sr * Zr,
        ar = Qr ? Qr * Zr : rr.byteLength - Sr * Zr;
      return new Uint8Array(rr.buffer, Wr, Math.max(0, ar))
    }

    function KS(rr, Sr) {
      const Qr = function(rr) {
        switch (rr) {
          case tr.ARRAY_BUFFER:
            return tr.ARRAY_BUFFER_BINDING;
          case tr.ELEMENT_ARRAY_BUFFER:
            return tr.ELEMENT_ARRAY_BUFFER_BINDING;
          case tr.COPY_READ_BUFFER:
            return tr.COPY_READ_BUFFER_BINDING;
          case tr.COPY_WRITE_BUFFER:
            return tr.COPY_WRITE_BUFFER_BINDING;
          case tr.UNIFORM_BUFFER:
            return tr.UNIFORM_BUFFER_BINDING;
          case tr.PIXEL_UNPACK_BUFFER:
            return tr.PIXEL_UNPACK_BUFFER_BINDING;
          case tr.TRANSFORM_FEEDBACK_BUFFER:
            return tr.TRANSFORM_FEEDBACK_BUFFER_BINDING;
          default:
            return 0
        }
      }(Sr);
      return Qr ? rr.getParameter(Qr) : null
    }

    function yS(rr) {
      const Sr = Pr.get(rr);
      Sr && (qr.shadowBytes -= Sr.bytes.length, Pr.delete(rr))
    }

    function BS(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      yS(rr), qr.shadowBytes + Sr > vr ? qr.uncopied++ : (qr.shadowBytes += Sr, Pr.set(rr, {
        id: Cr(rr),
        bytes: new Uint8Array(Sr),
        width: Qr,
        height: Zr,
        texelBytes: Wr,
        missed: 0
      }))
    }

    function TS(rr, Sr) {
      for (const Qr of ["deleteBuffer", "deleteTexture"]) xS(rr, Qr, (rr => function() {
        for (var Sr = arguments.length, Qr = new Array(Sr), Zr = 0; Zr < Sr; Zr++) Qr[Zr] = arguments[Zr];
        return Qr[0] && yS(Qr[0]), pS(rr, this, Qr)
      }));
      xS(rr, "shaderSource", (rr => function() {
        for (var Sr = arguments.length, Qr = new Array(Sr), Zr = 0; Zr < Sr; Zr++) Qr[Zr] = arguments[Zr];
        return Qr[0] && "string" === typeof Qr[1] && NS.set(Qr[0], Qr[1]), pS(rr, this, Qr)
      })), xS(rr, "attachShader", (rr => function() {
        for (var Sr, Qr = arguments.length, Zr = new Array(Qr), Wr = 0; Wr < Qr; Wr++) Zr[Wr] = arguments[Wr];
        const ar = Zr[0],
          jr = null !== (Sr = US.get(ar)) && void 0 !== Sr ? Sr : [];
        return jr.push(Zr[1]), US.set(ar, jr), pS(rr, this, Zr)
      })), xS(rr, "linkProgram", (rr => function() {
        for (var Sr = arguments.length, Qr = new Array(Sr), Zr = 0; Zr < Sr; Zr++) Qr[Zr] = arguments[Zr];
        const Wr = pS(rr, this, Qr);
        return qr.inProbe || function(rr, Sr) {
          var Qr, Zr, Wr;
          "undefined" !== typeof HTMLCanvasElement && rr.canvas instanceof HTMLCanvasElement && function(rr) {
            if (PS.has(rr)) return;
            PS.add(rr);
            for (const Sr of ["webglcontextlost", "webglcontextrestored", "webglcontextcreationerror"]) rr.addEventListener(Sr, (rr => {
              hS.lost < fS && (hS.lost++, Ar(`${Sr}${"statusMessage"in rr?`: ${String(rr.statusMessage)}`:""}`))
            }))
          }(rr.canvas);
          qr.context ??= rr;
          const ar = null !== (Qr = US.get(Sr)) && void 0 !== Qr ? Qr : [];
          let jr = "",
            Ir = "";
          for (const pr of ar) {
            var fr;
            const rr = null !== (fr = NS.get(pr)) && void 0 !== fr ? fr : "";
            /\bgl_Position\b/.test(rr) ? jr = rr : Ir = rr
          }
          const Er = {
            id: Cr(Sr),
            name: null !== (Zr = null === (Wr = Lr.exec(jr)) || void 0 === Wr ? void 0 : Wr[1]) && void 0 !== Zr ? Zr : null,
            gl: rr,
            vertex: jr,
            fragment: Ir,
            terrain: OS(jr),
            checked: !1,
            firstDraw: !1
          };
          if (tS.set(Sr, Er), Xr.push([Sr, Er]), null !== Er.terrain) {
            const Sr = ar.map((Sr => {
              var Qr;
              return null !== (Qr = rr.getShaderInfoLog(Sr)) && void 0 !== Qr ? Qr : ""
            })).filter((rr => "" !== rr.trim()));
            Sr.length > 0 && Vr(`program ${lr(Er)} (${Er.terrain}) shader logs:\n${ir(Sr.join("\n"))}`)
          }
        }(this, Qr[0]), Wr
      })), xS(rr, "bufferData", (rr => function() {
        for (var Sr = arguments.length, Qr = new Array(Sr), Zr = 0; Zr < Sr; Zr++) Qr[Zr] = arguments[Zr];
        const Wr = pS(rr, this, Qr);
        if (!qr.inProbe) {
          const rr = KS(this, Qr[0]);
          if (rr) {
            var ar, jr, Ir;
            const Sr = "number" === typeof Qr[1] ? null : eS(Qr[1], null !== (ar = Qr[3]) && void 0 !== ar ? ar : 0, null !== (jr = Qr[4]) && void 0 !== jr ? jr : 0);
            var fr;
            if (BS(rr, "number" === typeof Qr[1] ? Qr[1] : null !== (Ir = null === Sr || void 0 === Sr ? void 0 : Sr.length) && void 0 !== Ir ? Ir : 0), Sr) null === (fr = Pr.get(rr)) || void 0 === fr || fr.bytes.set(Sr)
          }
        }
        return Wr
      })), xS(rr, "bufferSubData", (rr => function() {
        for (var Sr = arguments.length, Qr = new Array(Sr), Zr = 0; Zr < Sr; Zr++) Qr[Zr] = arguments[Zr];
        const Wr = pS(rr, this, Qr);
        if (!qr.inProbe) {
          var ar, jr;
          const rr = KS(this, Qr[0]),
            Sr = rr ? Pr.get(rr) : void 0,
            Zr = eS(Qr[2], null !== (ar = Qr[3]) && void 0 !== ar ? ar : 0, null !== (jr = Qr[4]) && void 0 !== jr ? jr : 0);
          if (Sr && Zr) {
            const rr = Qr[1];
            Sr.bytes.set(Zr.subarray(0, Math.max(0, Sr.bytes.length - rr)), rr), vS("buffer", Sr, rr, Zr.length)
          }
        }
        return Wr
      })), Sr && (xS(rr, "copyBufferSubData", (rr => function() {
        for (var Sr = arguments.length, Qr = new Array(Sr), Zr = 0; Zr < Sr; Zr++) Qr[Zr] = arguments[Zr];
        const Wr = pS(rr, this, Qr);
        if (!qr.inProbe) {
          const [rr, Sr, Zr, Wr, ar] = Qr, jr = KS(this, rr), Ir = KS(this, Sr), fr = jr ? Pr.get(jr) : void 0, Er = Ir ? Pr.get(Ir) : void 0;
          Er && (fr ? Er.bytes.set(fr.bytes.slice(Zr, Zr + ar), Wr) : Er.missed++)
        }
        return Wr
      })), xS(rr, "texStorage2D", (rr => function() {
        for (var Sr = arguments.length, Qr = new Array(Sr), Zr = 0; Zr < Sr; Zr++) Qr[Zr] = arguments[Zr];
        const Wr = pS(rr, this, Qr),
          [, , ar, jr, Ir] = Qr;
        if (!qr.inProbe && (ar === tr.RGBA32UI || ar === tr.RGBA16UI)) {
          const rr = this.getParameter(tr.TEXTURE_BINDING_2D),
            Sr = ar === tr.RGBA32UI ? 16 : 8;
          rr && (Hr.set(rr, Sr), BS(rr, jr * Ir * Sr, jr, Ir, Sr))
        }
        return Wr
      })), xS(rr, "texSubImage2D", (rr => function() {
        for (var Sr = arguments.length, Qr = new Array(Sr), Zr = 0; Zr < Sr; Zr++) Qr[Zr] = arguments[Zr];
        const Wr = pS(rr, this, Qr);
        return !qr.inProbe && Qr.length >= 9 && Qr[0] === tr.TEXTURE_2D && 0 === Qr[1] && function(rr, Sr) {
          var Qr;
          const Zr = rr.getParameter(tr.TEXTURE_BINDING_2D),
            Wr = Zr ? Pr.get(Zr) : void 0;
          if (!Wr) return;
          const [, , ar, jr, Ir, fr] = Sr;
          let Er = eS(Sr[8], null !== (Qr = Sr[9]) && void 0 !== Qr ? Qr : 0);
          if (null === Er && "number" === typeof Sr[8]) {
            const Qr = KS(rr, tr.PIXEL_UNPACK_BUFFER),
              Zr = Qr ? Pr.get(Qr) : void 0;
            Er = Zr ? Zr.bytes.subarray(Sr[8]) : null
          }
          if (null === Er) return void Wr.missed++;
          const pr = rr.getParameter(tr.UNPACK_ROW_LENGTH) || Ir,
            xr = rr.getParameter(tr.UNPACK_SKIP_ROWS),
            mr = rr.getParameter(tr.UNPACK_SKIP_PIXELS),
            Nr = Wr.texelBytes;
          for (let Ur = 0; Ur < fr; Ur++) {
            const rr = ((xr + Ur) * pr + mr) * Nr,
              Sr = ((jr + Ur) * Wr.width + ar) * Nr;
            Wr.bytes.set(Er.subarray(rr, rr + Ir * Nr), Sr)
          }
          vS("texture", Wr, (jr * Wr.width + ar) * Nr, Ir * fr * Nr)
        }(this, Qr), Wr
      })), xS(rr, "copyTexSubImage2D", (rr => function() {
        for (var Sr = arguments.length, Qr = new Array(Sr), Zr = 0; Zr < Sr; Zr++) Qr[Zr] = arguments[Zr];
        const Wr = Qr[0] === tr.TEXTURE_2D ? this.getParameter(tr.TEXTURE_BINDING_2D) : null,
          ar = Wr ? Pr.get(Wr) : void 0;
        return ar && ar.missed++, pS(rr, this, Qr)
      })));
      for (const Qr of ["drawArrays", "drawElements", "drawArraysInstanced", "drawElementsInstanced"]) xS(rr, Qr, (rr => function() {
        for (var Sr = arguments.length, Zr = new Array(Sr), Wr = 0; Wr < Sr; Wr++) Zr[Wr] = arguments[Wr];
        const ar = pS(rr, this, Zr);
        return qr.inProbe || lS(this, Qr, Zr), ar
      }));
      xS(rr, "getExtension", (rr => function() {
        for (var Sr = arguments.length, Qr = new Array(Sr), Zr = 0; Zr < Sr; Zr++) Qr[Zr] = arguments[Zr];
        const Wr = pS(rr, this, Qr);
        return Wr && "object" === typeof Wr && function(rr, Sr, Qr) {
          const Zr = {
            WEBGL_multi_draw: ["multiDrawArraysWEBGL", "multiDrawElementsWEBGL", "multiDrawArraysInstancedWEBGL", "multiDrawElementsInstancedWEBGL"],
            ANGLE_instanced_arrays: ["drawArraysInstancedANGLE", "drawElementsInstancedANGLE"]
          };
          if (!(Sr in Zr) || Qr.bloxdRenderDebug) return;
          Qr.bloxdRenderDebug = !0;
          for (const Wr of Zr[Sr]) {
            const Sr = Qr[Wr];
            "function" === typeof Sr && (Qr[Wr] = function() {
              for (var Zr = arguments.length, ar = new Array(Zr), jr = 0; jr < Zr; jr++) ar[jr] = arguments[jr];
              const Ir = pS(Sr, Qr, ar);
              return qr.inProbe || lS(rr, Wr, ar), Ir
            })
          }
        }(this, Qr[0], Wr), Wr
      }))
    }

    function vS(rr, Sr, Qr, Zr) {
      YS[rr] += Zr, nS < 32 && Sr.bytes.length >= 1 << 20 && (nS++, Vr(`upload ${rr} #${Sr.id} +${Qr} ${Zr} B`))
    }

    function OS(rr) {
      if (!rr.includes("decodeQuad")) return null;
      return !/^\s*#version 300 es/.test(rr) || /in uvec3 _p2vs_location0\b/.test(rr) ? "inst" : "tex"
    }

    function LS(rr, Sr, Qr) {
      var Zr;
      if (Qr.checked) return;
      Qr.checked = !0;
      const Wr = rr.getProgramParameter(Sr, tr.LINK_STATUS),
        ar = (null !== (Zr = rr.getProgramInfoLog(Sr)) && void 0 !== Zr ? Zr : "").trim();
      var jr;
      null === Qr.terrain && Wr || (Ar(`program ${lr(Qr)} ${null!==(jr=Qr.terrain)&&void 0!==jr?jr:"other"} link ${Wr?"ok":"FAILED"}${ar?`: ${ir(ar,300)}`:""}`), ar && Vr(`program ${lr(Qr)} link log:\n${ir(ar)}`))
    }

    function lS(rr, Sr, Qr) {
      var Zr;
      const Wr = rr.getParameter(tr.CURRENT_PROGRAM),
        ar = Wr ? tS.get(Wr) : void 0;
      if (!Wr || !ar) return;
      const jr = null !== (Zr = ar.terrain) && void 0 !== Zr ? Zr : "other",
        {
          yh: Ir,
          instances: fr
        } = function(rr, Sr) {
          switch (rr) {
            case "drawArrays":
              return {
                yh: [
                  [Sr[1], Sr[2]]
                ], instances: 1
              };
            case "drawArraysInstanced":
            case "drawArraysInstancedANGLE":
              return {
                yh: [
                  [Sr[1], Sr[2]]
                ], instances: Sr[3]
              };
            case "drawElements":
              return {
                yh: [
                  [0, Sr[1]]
                ], instances: 1
              };
            case "drawElementsInstanced":
            case "drawElementsInstancedANGLE":
              return {
                yh: [
                  [0, Sr[1]]
                ], instances: Sr[4]
              };
            case "multiDrawArraysWEBGL": {
              const rr = Sr[1],
                Qr = Sr[3],
                Zr = Sr[2],
                Wr = Sr[4],
                ar = [];
              for (let jr = 0; jr < Sr[5]; jr++) ar.push([rr[Zr + jr], Qr[Wr + jr]]);
              return {
                yh: ar,
                instances: 1
              }
            }
            default:
              return {
                yh: [], instances: 0
              }
          }
        }(Sr, Qr),
        Er = "inst" === ar.terrain ? fr : Ir.reduce(((rr, Sr) => {
          let [, Qr] = Sr;
          return rr + Qr
        }), 0) / 6;
      if (zS[jr].draws++, zS[jr].faces += Er, null === ar.terrain) return;
      if (qr.context = rr, !ar.firstDraw) {
        ar.firstDraw = !0, LS(rr, Wr, ar), XS || (XS = !0, Ar(function(rr) {
          var Sr;
          const Qr = rr.getParameter(tr.DEPTH_FUNC),
            Zr = {
              513: "less",
              514: "equal",
              515: "lequal",
              516: "greater",
              518: "gequal",
              519: "always"
            };
          let Wr = "default framebuffer";
          if ("DRAW_FRAMEBUFFER" in rr && rr.getParameter(tr.DRAW_FRAMEBUFFER_BINDING)) {
            const Sr = rr;
            Wr = Sr.getFramebufferAttachmentParameter(tr.DRAW_FRAMEBUFFER, tr.DEPTH_ATTACHMENT, tr.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(Sr.getFramebufferAttachmentParameter(tr.DRAW_FRAMEBUFFER,tr.DEPTH_ATTACHMENT,tr.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type 0x${Number(Sr.getFramebufferAttachmentParameter(tr.DRAW_FRAMEBUFFER,tr.DEPTH_ATTACHMENT,tr.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE)).toString(16)}` : "no depth attachment"
          }
          const ar = rr.getParameter(tr.DEPTH_CLEAR_VALUE);
          return `depth ${null!==(Sr=Zr[Qr])&&void 0!==Sr?Sr:`0x${Qr.toString(16)}`} clear ${ar}${516===Qr||518===Qr?" (reverse-Z)":""}, samples ${String(rr.getParameter(tr.SAMPLES))}, ${Wr}`
        }(rr)));
        const Qr = rr.getError();
        Qr !== tr.NO_ERROR && hS.gl < fS && (hS.gl++, Ar(`GL error 0x${Qr.toString(16)} after program ${lr(ar)}'s first terrain draw (${Sr})`))
      }
      const pr = qr.pendingCheck;
      null !== pr && (pr.terrainDraws++, pr.draws.length < ES && wr(rr, Wr, ar, Sr, Ir, fr))
    }
    let XS = !1;
    const PS = new WeakSet;
    var HS = Qr(5270),
      qS = Qr(5501);
    const RS = ["maxStorageBuffersPerShaderStage", "maxStorageBufferBindingSize", "maxBufferSize", "maxUniformBufferBindingSize", "minUniformBufferOffsetAlignment", "maxTextureDimension2D", "maxTextureArrayLayers", "maxVertexBuffers", "maxVertexAttributes", "maxVertexBufferArrayStride", "maxBindGroups", "maxColorAttachmentBytesPerSample"];
    let gS = !1;
    const CS = new WeakSet,
      MS = new WeakMap,
      GS = new WeakMap,
      kS = {
        uncaptured: 0,
        compile: 0,
        rejected: 0
      };
    let AS = 0,
      VS = !1,
      iS = null,
      wS = {
        draws: 0,
        faces: 0
      };

    function cS(rr) {
      const Sr = globalThis[rr];
      return null === Sr || void 0 === Sr ? void 0 : Sr.prototype
    }

    function FS(rr) {
      return rr && "function" === typeof rr[Symbol.iterator] ? [...rr].sort().join(" ") : ""
    }

    function oS(rr, Sr) {
      const Qr = null !== rr && void 0 !== rr ? rr : {},
        Zr = null !== Sr && void 0 !== Sr ? Sr : Object.keys(Object.getPrototypeOf(Qr)).concat(Object.keys(Qr));
      return [...new Set(Zr)].filter((rr => "number" === typeof Qr[rr])).map((rr => `${rr} ${String(Qr[rr])}`)).join(", ")
    }

    function bS(rr, Sr) {
      var Qr;
      const Zr = null !== (Qr = Sr.vertex) && void 0 !== Qr ? Qr : {};
      if (Zr.module && CS.has(Zr.module)) {
        var Wr;
        const Qr = String(null !== (Wr = Zr.entryPoint) && void 0 !== Wr ? Wr : "");
        if (Qr.startsWith("vs_packed") && MS.set(rr, Qr), !VS) {
          var ar, jr, Ir, fr, Er;
          VS = !0;
          const rr = null !== (ar = Sr.depthStencil) && void 0 !== ar ? ar : {},
            Zr = null !== (jr = Sr.multisample) && void 0 !== jr ? jr : {},
            Wr = String(null !== (Ir = rr.depthCompare) && void 0 !== Ir ? Ir : "");
          Ar(`WebGPU terrain pipeline ${Qr}: depth ${String(null!==(fr=rr.format)&&void 0!==fr?fr:"none")} ${Wr}${Wr.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(Er=Zr.count)&&void 0!==Er?Er:1)}`)
        }
      }
    }

    function JS(rr) {
      xS(rr, "setPipeline", (rr => function() {
        for (var Sr = arguments.length, Qr = new Array(Sr), Zr = 0; Zr < Sr; Zr++) Qr[Zr] = arguments[Zr];
        return GS.set(this, Qr[0]), pS(rr, this, Qr)
      }));
      for (const Sr of ["draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect"]) xS(rr, Sr, (rr => function() {
        const Qr = GS.get(this),
          Zr = Qr ? MS.get(Qr) : void 0;
        for (var Wr = arguments.length, ar = new Array(Wr), jr = 0; jr < Wr; jr++) ar[jr] = arguments[jr];
        return void 0 !== Zr && DS(Sr, Zr, ar), pS(rr, this, ar)
      }))
    }

    function DS(rr, Sr, Qr) {
      var Zr;
      (wS.draws++, "draw" === rr || "drawIndexed" === rr) && (wS.faces += Qr[0] * (null !== (Zr = Qr[1]) && void 0 !== Zr ? Zr : 1) / 6);
      if (null !== iS && iS.length < ES) {
        const Zr = ("draw" === rr ? ["vertices", "instances", "firstVertex", "firstInstance"] : "drawIndexed" === rr ? ["indices", "instances", "firstIndex", "baseVertex", "firstInstance"] : ["indirectOffset"]).map(((Sr, Zr) => {
          const Wr = rr.endsWith("Indirect") ? Qr[1] : Qr[Zr];
          return `${Sr} ${String(null!==Wr&&void 0!==Wr?Wr:"instances"===Sr?1:0)}`
        }));
        iS.push(`  ${Sr} ${rr} ${Zr.join(" ")}`)
      }
    }

    function dS() {
      if (gS || "undefined" === typeof navigator || !("gpu" in navigator)) return;
      gS = !0, xS(cS("GPU"), "requestAdapter", (rr => function() {
        for (var Sr = arguments.length, Qr = new Array(Sr), Zr = 0; Zr < Sr; Zr++) Qr[Zr] = arguments[Zr];
        return pS(rr, this, Qr).then((rr => {
          var Sr;
          rr ? function(rr) {
            var Sr;
            const Qr = null !== (Sr = rr.info) && void 0 !== Sr ? Sr : {};
            Ar(`WebGPU adapter ${["vendor","architecture","device","description"].map((rr=>{var Sr;return`${rr} "${String(null!==(Sr=Qr[rr])&&void 0!==Sr?Sr:"")}"`})).join(" ")}${rr.isFallbackAdapter?" (fallback)":""}`), Ar(`WebGPU adapter features ${FS(rr.features)}`), Ar(`WebGPU adapter limits ${oS(rr.limits,RS)}`), Vr(`WebGPU adapter all limits ${oS(rr.limits,null)}`)
          }(rr) : Ar(`WebGPU requestAdapter(${JSON.stringify(null!==(Sr=Qr[0])&&void 0!==Sr?Sr:{})}) gave none`);
          return rr
        }))
      })), xS(cS("GPUAdapter"), "requestDevice", (rr => function() {
        for (var Sr = arguments.length, Qr = new Array(Sr), Zr = 0; Zr < Sr; Zr++) Qr[Zr] = arguments[Zr];
        return pS(rr, this, Qr).then((rr => (function(rr) {
          Ar(`WebGPU device features ${FS(rr.features)}`), Ar(`WebGPU device limits ${oS(rr.limits,RS)}`), rr.addEventListener("uncapturederror", (rr => {
            if (kS.uncaptured < fS) {
              var Sr, Qr, Zr;
              kS.uncaptured++;
              const Wr = rr.error;
              Ar(`WebGPU uncaptured ${null!==(Sr=null===Wr||void 0===Wr||null===(Qr=Wr.constructor)||void 0===Qr?void 0:Qr.name)&&void 0!==Sr?Sr:"error"}: ${ir(String(null!==(Zr=null===Wr||void 0===Wr?void 0:Wr.message)&&void 0!==Zr?Zr:""),600)}`)
            }
          }));
          const Sr = rr.lost;
          null === Sr || void 0 === Sr || Sr.then((rr => {
            var Sr;
            Ar(`WebGPU device lost (${String(rr.reason)}): ${ir(String(null!==(Sr=rr.message)&&void 0!==Sr?Sr:""),600)}`)
          }))
        }(rr), rr)), (rr => {
          throw Ar(`WebGPU requestDevice failed: ${String(rr)}`), rr
        }))
      }));
      const rr = cS("GPUDevice");
      xS(rr, "createShaderModule", (rr => function() {
        for (var Sr, Qr, Zr = arguments.length, Wr = new Array(Zr), ar = 0; ar < Zr; ar++) Wr[ar] = arguments[ar];
        const jr = pS(rr, this, Wr);
        return function(rr, Sr) {
          const Qr = Sr.includes("decodeQuad");
          Qr && CS.add(rr);
          const Zr = rr.getCompilationInfo;
          null === Zr || void 0 === Zr || Zr.call(rr).then((rr => {
            if (0 === rr.messages.length && !Qr) return;
            const Sr = {};
            for (const Qr of rr.messages) {
              var Zr;
              Sr[String(Qr.type)] = (null !== (Zr = Sr[String(Qr.type)]) && void 0 !== Zr ? Zr : 0) + 1
            }
            const Wr = rr.messages.map((rr => `${String(rr.type)} ${String(rr.lineNum)}:${String(rr.linePos)} ${String(rr.message)}`)).join("\n");
            kS.compile < fS && (kS.compile++, Ar(`WebGPU ${Qr?"terrain ":""}shader module compiled: ${JSON.stringify(Sr)}${Wr?` first: ${ir(Wr.split("\n")[0],300)}`:""}`)), Wr && Vr(`WebGPU shader module messages:\n${ir(Wr)}`)
          }))
        }(jr, String(null !== (Sr = (null !== (Qr = Wr[0]) && void 0 !== Qr ? Qr : {}).code) && void 0 !== Sr ? Sr : "")), jr
      })), xS(rr, "createRenderPipeline", (rr => function() {
        for (var Sr, Qr = arguments.length, Zr = new Array(Qr), Wr = 0; Wr < Qr; Wr++) Zr[Wr] = arguments[Wr];
        const ar = pS(rr, this, Zr);
        return bS(ar, null !== (Sr = Zr[0]) && void 0 !== Sr ? Sr : {}), ar
      })), xS(rr, "createRenderPipelineAsync", (rr => function() {
        for (var Sr = arguments.length, Qr = new Array(Sr), Zr = 0; Zr < Sr; Zr++) Qr[Zr] = arguments[Zr];
        return pS(rr, this, Qr).then((rr => {
          var Sr;
          return bS(rr, null !== (Sr = Qr[0]) && void 0 !== Sr ? Sr : {}), rr
        }), (rr => {
          var Sr;
          throw function(rr, Sr) {
            var Qr, Zr, Wr;
            if (kS.rejected >= fS) return;
            kS.rejected++;
            const {
              reason: ar,
              message: jr
            } = null !== Sr && void 0 !== Sr ? Sr : {}, Ir = String(null !== (Qr = (null !== (Zr = rr.vertex) && void 0 !== Zr ? Zr : {}).entryPoint) && void 0 !== Qr ? Qr : "");
            Ar(`WebGPU pipeline "${String(null!==(Wr=rr.label)&&void 0!==Wr?Wr:"")}" ${Ir} rejected (${String(null!==ar&&void 0!==ar?ar:"no reason")}): ${ir(String(null!==jr&&void 0!==jr?jr:Sr),600)}`)
          }(null !== (Sr = Qr[0]) && void 0 !== Sr ? Sr : {}, rr), rr
        }))
      })), xS(cS("GPUCanvasContext"), "configure", (rr => function() {
        for (var Sr, Qr = arguments.length, Zr = new Array(Qr), Wr = 0; Wr < Qr; Wr++) Zr[Wr] = arguments[Wr];
        const ar = null !== (Sr = Zr[0]) && void 0 !== Sr ? Sr : {};
        var jr, Ir;
        AS++ < 3 && Ar(`WebGPU canvas ${String(ar.format)} ${String(null!==(jr=ar.colorSpace)&&void 0!==jr?jr:"srgb")} alpha ${String(null!==(Ir=ar.alphaMode)&&void 0!==Ir?Ir:"opaque")}`);
        return pS(rr, this, Zr)
      })), JS(cS("GPURenderPassEncoder")), JS(cS("GPURenderBundleEncoder"))
    }
    const sS = 1e4,
      uS = 6e4,
      rQ = 5e3,
      SQ = 3e3,
      QQ = 100;
    let ZQ = null,
      WQ = !1,
      aQ = {
        ...HS.c
      },
      jQ = !1,
      IQ = null,
      fQ = 0,
      EQ = () => {};
    const pQ = new Promise((rr => {
      EQ = rr
    }));

    function xQ() {
      var rr;
      WQ || (WQ = !0, aQ = Object.assign(window.bloxdRenderDebug ??= {
        ...HS.c
      }, {
        faceCull: "0" === (0, ar.o)("faceCull") ? "0" : "1",
        adrenoProbe: null !== (rr = (0, ar.o)("adrenoProbe")) && void 0 !== rr ? rr : ""
      }), Ar("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), mS || "undefined" === typeof window || (mS = !0, "undefined" !== typeof WebGL2RenderingContext && TS(WebGL2RenderingContext.prototype, !0), "undefined" !== typeof WebGLRenderingContext && TS(WebGLRenderingContext.prototype, !1)), dS(), (0, ar.e)("renderProbe", (() => {
        zQ("console")
      })), tQ(), setInterval(nQ, rQ))
    }

    function mQ(rr) {
      var Sr, Qr;
      xQ(), ZQ = null !== (Sr = null === rr || void 0 === rr ? void 0 : rr.backend) && void 0 !== Sr ? Sr : null;
      const Zr = `, renderer param ${null!==(Qr=(0,ar.o)("renderer"))&&void 0!==Qr?Qr:"none"}, faceCull ${"0"===aQ.faceCull?"off (whole parts)":"on"}, adrenoProbe ${aQ.adrenoProbe||"none"}`;
      Ar(`${(0,qS.e)(rr)}${null===rr?"":Zr}`)
    }

    function NQ() {
      const rr = performance.now(),
        Sr = UQ(pQ, sS, uS).then((Sr => zQ(`${Math.round((performance.now()-rr)/1e3)} s after playable${Sr?"":", no terrain drawn yet"}`)));
      (0, Wr.c)(Ar, (async () => {
        await Sr, await IQ
      }))
    }
    async function UQ(rr, Sr, Qr) {
      const Wr = (0, Zr.e)(Qr).then((() => !1));
      return await (0, Zr.e)(Sr), Promise.race([rr.then((() => !0)), Wr])
    }

    function tQ() {
      requestAnimationFrame((() => {
        fQ++, tQ()
      }))
    }

    function hQ() {
      var rr, Sr, Qr;
      if (jQ) return;
      (jQ = !0, Ar(`renderer caps ${null!==(rr=aQ.caps)&&void 0!==rr?rr:"(not noted)"}; terrain fetch ${null!==(Sr=aQ.fetch)&&void 0!==Sr?Sr:"(not noted)"}`), aQ.adrenoProbe) && Ar(`adrenoProbe ${aQ.adrenoProbe} asked; in force (storage fetch only): ${null!==(Qr=aQ.probe)&&void 0!==Qr?Qr:"(not noted)"}`);
      const Zr = qr.context;
      if (Zr) {
        for (const rr of function(rr) {
            var Sr;
            const Qr = [],
              Zr = rr.getExtension("WEBGL_debug_renderer_info"),
              Wr = Zr ? rr.getParameter(Zr.UNMASKED_VENDOR_WEBGL) : "(masked)",
              ar = Zr ? rr.getParameter(Zr.UNMASKED_RENDERER_WEBGL) : "(masked)";
            Qr.push(`GL ${String(rr.getParameter(rr.VERSION))} | ${String(rr.getParameter(rr.SHADING_LANGUAGE_VERSION))} | ${String(rr.getParameter(rr.VENDOR))} / ${String(rr.getParameter(rr.RENDERER))}`), Qr.push(`GL unmasked ${Wr} / ${ar}`);
            const jr = [
              ["MAX_TEXTURE_SIZE", rr.MAX_TEXTURE_SIZE],
              ["MAX_VERTEX_ATTRIBS", rr.MAX_VERTEX_ATTRIBS],
              ["MAX_VERTEX_UNIFORM_VECTORS", rr.MAX_VERTEX_UNIFORM_VECTORS],
              ["MAX_VERTEX_TEXTURE_IMAGE_UNITS", rr.MAX_VERTEX_TEXTURE_IMAGE_UNITS],
              ["MAX_COMBINED_TEXTURE_IMAGE_UNITS", rr.MAX_COMBINED_TEXTURE_IMAGE_UNITS],
              ["MAX_VARYING_VECTORS", rr.MAX_VARYING_VECTORS],
              ["MAX_RENDERBUFFER_SIZE", rr.MAX_RENDERBUFFER_SIZE]
            ];
            "MAX_UNIFORM_BLOCK_SIZE" in rr && jr.push(["MAX_UNIFORM_BLOCK_SIZE", rr.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", rr.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", rr.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", rr.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS]), Qr.push(`GL limits ${jr.map((Sr=>{let[Qr,Zr]=Sr;return`${Qr} ${String(rr.getParameter(Zr))}`})).join(", ")}`);
            const Ir = (Sr, Qr) => {
              const Zr = rr.getShaderPrecisionFormat(Sr, rr.HIGH_FLOAT),
                Wr = rr.getShaderPrecisionFormat(Sr, rr.HIGH_INT);
              return `${Qr} highp float ${Zr?`${Zr.rangeMin}/${Zr.rangeMax}/${Zr.precision}`:"?"} int ${Wr?`${Wr.rangeMin}/${Wr.rangeMax}/${Wr.precision}`:"?"}`
            };
            Qr.push(`GL precision ${Ir(rr.VERTEX_SHADER,"VS")}, ${Ir(rr.FRAGMENT_SHADER,"FS")}`);
            const fr = rr.getContextAttributes();
            return Qr.push(`GL context ${JSON.stringify(fr)} drawingBuffer ${rr.drawingBufferWidth}x${rr.drawingBufferHeight}${"drawingBufferFormat"in rr?` format 0x${Number(rr.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in rr?` ${String(rr.drawingBufferColorSpace)}`:""}`), Qr.push(`GL extensions ${(null!==(Sr=rr.getSupportedExtensions())&&void 0!==Sr?Sr:[]).join(" ")}`), Qr
          }(Zr)) Ar(rr);
        ! function() {
          if (!qr.context) return;
          let rr = 0,
            Sr = 0;
          for (const [Qr, Zr] of Xr) !Zr.gl.isContextLost() && Zr.gl.isProgram(Qr) && (Sr++, LS(Zr.gl, Qr, Zr), null !== Zr.terrain && rr++);
          Ar(`programs: ${Sr} live of ${Xr.length} linked, ${rr} packed terrain; CPU page copies ${Math.round(qr.shadowBytes/1048576)} MiB (${qr.uncopied} over budget)`)
        }()
      }
    }

    function zQ(rr) {
      return IQ ??= async function(rr) {
        hQ(), "webgpu" === ZQ ? (YQ(), "1" === aQ.slotCheck && Ar("slot check: the last request is still unanswered, so the next answer reads the slots as they were then"), aQ.slotCheck = "1", await
          function(rr) {
            if (null !== iS) return Promise.resolve();
            const Sr = [];
            return iS = Sr, new Promise((Qr => {
              setTimeout((() => {
                iS = null, Ar(`WebGPU draw ranges (${rr}): ${Sr.length} terrain draws recorded in a second (first ${ES}; bundles replay without new ones)`);
                for (const rr of Sr) Ar(rr);
                Qr()
              }), 1e3)
            }))
          }(rr), await async function() {
            if (await (0, HS.i)(aQ, "slotCheck", ["1"], SQ, QQ), "1" === aQ.slotCheck) return void Ar(`slot check: no answer in ${SQ} ms (only the storage fetch has one; a later answer logs on its own)`);
            YQ()
          }()) : await jS(rr);
        Ar(`check (${rr}) done: bloxdDebug.save() downloads it all`)
      }(rr).catch((Sr => {
        Ar(`check (${rr}) failed: ${String(Sr)}`)
      })).finally((() => {
        IQ = null
      })), IQ
    }

    function YQ() {
      void 0 !== aQ.slotCheck && "1" !== aQ.slotCheck && (Ar(aQ.slotCheck), delete aQ.slotCheck)
    }

    function nQ() {
      const rr = rr => fQ ? (rr / fQ).toFixed(1) : "0",
        Sr = function() {
          const rr = wS;
          return wS = {
            draws: 0,
            faces: 0
          }, rr
        }(),
        Qr = function() {
          const rr = zS;
          return zS = {
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
          }, rr
        }(),
        Zr = function() {
          const rr = YS;
          return YS = {
            buffer: 0,
            texture: 0
          }, rr
        }();
      YQ(), ("webgpu" === ZQ ? Sr.draws : Qr.inst.draws + Qr.tex.draws) > 0 && EQ();
      const Wr = "webgpu" === ZQ ? [`terrain ${rr(Sr.draws)} draws ${rr(Sr.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((rr => Qr[rr].draws > 0)).map((Sr => `${Sr} ${rr(Qr[Sr].draws)} draws ${rr(Qr[Sr].faces)} faces a frame`));
      Ar(`${fQ} frames: ${Wr.join(", ")||"no draws"}; uploaded ${Math.round(Zr.buffer/1024)} KiB to buffers, ${Math.round(Zr.texture/1024)} KiB to data textures`), fQ = 0
    }
  },
  5501: (rr, Sr, Qr) => {
    function Zr(rr) {
      if (null === rr) return "backend: none picked (no renderer build)";
      const Sr = rr.adapter ? `${rr.adapter.vendor}/${rr.adapter.architecture}` : "none";
      return `backend ${rr.backend}: reason ${rr.reason}, source ${rr.source}, adapter ${Sr}`
    }
    Qr.d(Sr, {
      e: () => Zr
    })
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);