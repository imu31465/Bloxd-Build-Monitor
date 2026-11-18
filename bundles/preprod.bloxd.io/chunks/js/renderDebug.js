export const id = 44;
export const ids = [44];
export const modules = {
  3892: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      installRenderDebug: () => ZW,
      renderDebugPlayable: () => PW,
      startRenderDebug: () => cU
    });
    var Uy = Wy(2444),
      hy = Wy(19),
      fy = Wy(23),
      Zy = Wy(1145);
    class cb {
      constructor(yb, bb) {
        this.print = yb, this.now = bb, this.shown = 0, this.kW = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.DW = [], this.dropped = 0
      }
      line(yb) {
        const bb = this.now();
        if (bb - this.second >= 1e3 && (this.second = bb, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.kW++, void this.store(yb);
        this.shown++, this.inSecond++, this.print(400 === this.shown ? `${yb} (the last line here: the rest go to bloxdDebug.save())` : yb)
      }
      keep(yb) {
        this.sections++, this.store(yb)
      }
      store(yb) {
        this.DW.push(`${new Date(Date.now()).toISOString()} ${yb}`), this.DW.length > 2e4 && (this.DW.shift(), this.dropped++)
      }
      dump() {
        return [`${this.shown} lines logged (above); kept here: ${this.kW} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.DW].join("\n")
      }
    }
    let Py = null;

    function oy() {
      if (null === Py) {
        const yb = new cb((yb => {
          (0, Uy.h)("render", yb)
        }), (() => performance.now()));
        (0, Uy.f)("render", (() => yb.dump())), Py = yb
      }
      return Py
    }

    function By(yb) {
      oy().line(yb)
    }

    function Ky(yb) {
      oy().keep(yb)
    }

    function ey(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4096;
      return yb.length <= bb ? yb : `${yb.slice(0,bb)}... (${yb.length-bb} more characters)`
    }
    const qb = 3e4,
      sy = 1e3;

    function Sy() {
      return "visible" === document.visibilityState && "inGame" === hy.d.get("gameState") && (0, Zy.l)()
    }

    function Ey(yb) {
      ! function(yb, bb, Wy) {
        let Uy = 0;
        const hy = setInterval((() => {
          bb() && (Uy += sy, Uy >= yb && (clearInterval(hy), Wy()))
        }), sy)
      }(qb, Sy, (() => {
        yb().then((() => {
          By(`saved for the player after ${qb/1e3} s of play`), (0, Uy.n)(), fy.g.EZ("chat", {
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
    const ly = ["+x", "-x", "+y", "-y", "+z", "-z", "dir6", "dir7"];

    function mb(yb) {
      return 7 & yb
    }

    function Cy(yb) {
      return yb >>> 11 & 1
    }

    function Ty(yb) {
      return [1 + (yb >>> 18 & 63), 1 + (yb >>> 24 & 63)]
    }

    function Vy(yb, bb) {
      const [Wy, , Uy] = yb, hy = mb(Uy), fy = function(yb, bb, Wy) {
        return bb + (1 === (22 >>> yb & 1) ? 4 - Wy : Wy) & 3
      }(hy, Cy(Uy), bb), Zy = hy >>> 1, [cb, Py] = Ty(Wy), oy = 1 === fy || 2 === fy ? cb : 0, By = fy >= 2 ? Py : 0, Ky = [63 & Wy, Wy >>> 6 & 63, Wy >>> 12 & 63];
      return Ky[2 === Zy ? 0 : 2] += oy, Ky[1 === Zy ? 0 : 1] += By, Ky
    }

    function Jy(yb) {
      const bb = Math.max(...Ty(yb[0]));
      return 1 === bb ? "1" : bb <= 4 ? "2-4" : bb <= 16 ? "5-16" : "17-64"
    }
    const gb = 16;

    function Gy(yb) {
      let bb = 2166136261;
      for (let Wy = 0; Wy < yb.length; Wy++) bb = Math.imul(bb ^ yb[Wy], 16777619);
      return bb >>> 0
    }

    function Oy(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12;
      const Uy = Math.max(0, bb - Wy),
        hy = Math.min(yb.length, bb + Wy),
        fy = [];
      for (let Zy = Uy; Zy < hy; Zy++) {
        const Wy = yb[Zy].toString(16).padStart(2, "0");
        fy.push(Zy === bb ? `[${Wy}]` : Wy)
      }
      return fy.join(" ")
    }
    const Ry = {
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
      vb = "_vs2fs_location0",
      ib = 0,
      My = 4,
      Yy = 6,
      Xy = [0, 1, 2, 0, 2, 3],
      ny = 2048,
      uy = 4,
      rb = 256,
      Hy = 64,
      ab = 268435456,
      Fy = 65536,
      py = [],
      Ly = new WeakMap,
      Qy = new WeakMap,
      jb = {
        context: null,
        inProbe: !1,
        pendingCheck: null,
        shadowBytes: 0,
        uncopied: 0
      };
    let Dy = 1;
    const tb = new WeakMap;

    function wy(yb) {
      if (null === yb) return 0;
      let bb = tb.get(yb);
      return void 0 === bb && (bb = Dy++, tb.set(yb, bb)), bb
    }

    function kb(yb, bb, Wy, Uy, hy, fy) {
      const Zy = jb.pendingCheck;
      if (null === Zy) return;
      const cb = "undefined" !== typeof WebGL2RenderingContext && yb instanceof WebGL2RenderingContext,
        Py = {
          gl: yb,
          program: Wy,
          call: Uy,
          lZ: hy,
          instances: fy,
          attributes: [],
          group: -1,
          chunk: "",
          pages: []
        };
      if (Zy.draws.push(Py), cb) try {
        const Uy = function(yb) {
          const bb = [],
            Wy = new Map,
            Uy = Math.min(16, yb.getParameter(Ry.MAX_VERTEX_ATTRIBS));
          for (let hy = 0; hy < Uy; hy++) {
            if (!yb.getVertexAttrib(hy, Ry.VERTEX_ATTRIB_ARRAY_ENABLED)) continue;
            const Uy = yb.getVertexAttrib(hy, Ry.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING),
              fy = yb.getVertexAttribOffset(hy, Ry.VERTEX_ATTRIB_ARRAY_POINTER),
              Zy = yb.getVertexAttrib(hy, Ry.VERTEX_ATTRIB_ARRAY_STRIDE),
              cb = yb.getVertexAttrib(hy, Ry.VERTEX_ATTRIB_ARRAY_SIZE),
              Py = yb.getVertexAttrib(hy, Ry.VERTEX_ATTRIB_ARRAY_TYPE),
              oy = "VERTEX_ATTRIB_ARRAY_INTEGER" in yb && yb.getVertexAttrib(hy, Ry.VERTEX_ATTRIB_ARRAY_INTEGER),
              By = "VERTEX_ATTRIB_ARRAY_DIVISOR" in yb ? yb.getVertexAttrib(hy, Ry.VERTEX_ATTRIB_ARRAY_DIVISOR) : 0;
            Wy.set(hy, {
              buffer: Uy,
              offset: fy,
              stride: Zy
            }), bb.push(`@${hy} buf#${wy(Uy)} +${fy} stride ${Zy} ${cb}x0x${Py.toString(16)}${oy?" int":""} div ${By}`)
          }
          return {
            lines: bb,
            byLocation: Wy
          }
        }(yb);
        if (Py.attributes = Uy.lines, "inst" === Wy.terrain) {
          const {
            group: hy,
            chunk: cb
          } = function(yb, bb, Wy) {
            const Uy = bb.get(Yy),
              hy = yb.getVertexAttrib(Yy, Ry.CURRENT_VERTEX_ATTRIB),
              fy = Uy ? `+${Uy.offset}` : hy ? Array.from(hy).slice(0, 3).join(",") : "?";
            let Zy = Wy.groups.get(fy);
            return void 0 === Zy && (Zy = Wy.groups.size, Wy.groups.set(fy, Zy)), {
              group: Zy,
              chunk: fy
            }
          }(yb, Uy.byLocation, Zy);
          Py.group = hy, Py.chunk = cb;
          for (const yb of [ib, My]) {
            var oy;
            const bb = null === (oy = Uy.byLocation.get(yb)) || void 0 === oy ? void 0 : oy.buffer;
            bb && Py.pages.push({
              kind: "buf",
              buffer: bb
            })
          }! function(yb, bb, Wy, Uy, hy, fy, Zy) {
            const cb = Uy.get(ib),
              Py = Zy.parts.get(fy);
            if (void 0 === Py && Zy.parts.size >= uy) return;
            const oy = Math.min(hy, Hy, rb - (null !== Py && void 0 !== Py ? Py : 0));
            if (null === cb || void 0 === cb || !cb.buffer || oy <= 0) return;
            const By = Ny(yb, bb, Wy);
            if (!By) return;
            const Ky = cb.stride || 12,
              ey = dy(yb, cb.buffer, cb.offset, (oy - 1) * Ky + 12),
              qb = new DataView(ey.buffer),
              sy = function(yb, bb) {
                const Wy = function(yb) {
                    const bb = Wb.get(yb);
                    if (void 0 !== bb && (null === bb || yb.isProgram(bb))) return bb;
                    jb.inProbe = !0;
                    let Wy = null;
                    try {
                      Wy = zb(yb, yW, bW, "fed", "the record feed")
                    } finally {
                      jb.inProbe = !1
                    }
                    return Wb.set(yb, Wy), Wy
                  }(yb),
                  Uy = Wy ? Ay(yb, Wy, bb, (() => {
                    yb.drawArraysInstanced(Ry.POINTS, 0, 1, bb)
                  }), "decode probe input (the record feed)") : null;
                return Uy ? new Uint32Array(Uy.buffer) : null
              }(yb, oy);
            sy || Zy.fed.failed++;
            const Sy = Ay(yb, By, 4 * oy, (() => {
              yb.drawArraysInstanced(Ry.POINTS, 0, 4, oy)
            }));
            if (!Sy) return;
            Zy.parts.set(fy, (null !== Py && void 0 !== Py ? Py : 0) + oy);
            for (let Ey = 0; Ey < oy; Ey++) {
              const yb = Ey * Ky,
                bb = [qb.getUint32(yb, !0), qb.getUint32(yb + 4, !0), qb.getUint32(yb + 8, !0)],
                Wy = sy ? [sy[3 * Ey], sy[3 * Ey + 1], sy[3 * Ey + 2]] : bb;
              sy && (Zy.fed.records++, Wy.some(((yb, Wy) => yb !== bb[Wy])) && (Zy.fed.differing++, Zy.fed.first.length < 8 && Zy.fed.first.push(`part ${fy} instance ${Ey}: fed ${Wy.map(cW).join(" ")} buffer ${bb.map(cW).join(" ")}`)));
              for (let Uy = 0; Uy < 4; Uy++) {
                const yb = 3 * (4 * Ey + Uy);
                Zy.vertices.push({
                  record: Wy,
                  slot: Uy,
                  group: fy,
                  gpu: [Sy[yb], Sy[yb + 1], Sy[yb + 2]]
                })
              }
            }
          }(yb, bb, Wy, Uy.byLocation, fy, hy, Zy)
        } else {
          const Uy = Ub(yb, bb, 16),
            fy = Ub(yb, bb, 8);
          for (const yb of [Uy, fy]) yb && Py.pages.push({
            kind: "tex",
            texture: yb
          });
          Uy && function(yb, bb, Wy, Uy, hy, fy) {
            if (fy.parts.size >= uy) return;
            const Zy = Ny(yb, bb, Wy);
            if (!Zy) return;
            let cb = 6 * rb;
            const Py = [];
            for (const [qb, sy] of hy) {
              const yb = Math.min(sy, cb, Math.max(6, 6 * Math.floor(rb / hy.length)));
              yb > 0 && (Py.push([qb, yb]), cb -= yb)
            }
            const oy = Py.reduce(((yb, bb) => {
                let [, Wy] = bb;
                return yb + Wy
              }), 0),
              By = Ay(yb, Zy, oy, (() => {
                for (const [bb, Wy] of Py) yb.drawArrays(Ry.POINTS, bb, Wy)
              }));
            if (!By) return;
            let Ky = 0;
            for (const [qb, sy] of Py) {
              const bb = Math.floor(qb / 6),
                Wy = Math.floor((qb + sy - 1) / 6) - bb + 1,
                hy = hb(yb, Uy, ny, bb, Wy);
              for (let yb = qb; yb < qb + sy; yb++, Ky++) {
                var ey;
                const Wy = 4 * (Math.floor(yb / 6) - bb),
                  Uy = [hy[Wy], hy[Wy + 1], hy[Wy + 2]];
                fy.parts.set(hy[Wy + 3], (null !== (ey = fy.parts.get(hy[Wy + 3])) && void 0 !== ey ? ey : 0) + (yb % 6 === 0 ? 1 : 0)), fy.vertices.push({
                  record: Uy,
                  slot: Xy[yb % 6],
                  group: hy[Wy + 3],
                  gpu: [By[3 * Ky], By[3 * Ky + 1], By[3 * Ky + 2]]
                })
              }
            }
          }(yb, bb, Wy, Uy, hy, Zy)
        }
      } catch (Ky) {
        By(`decode probe failed on program #${Wy.id}: ${String(Ky)}`)
      }
    }

    function Ny(yb, bb, Wy) {
      if (void 0 !== Wy.probe) return Wy.probe && Iy(yb, bb, Wy.probe), Wy.probe;
      Wy.probe = null, jb.inProbe = !0;
      try {
        Wy.probe = function(yb, bb) {
          return zb(yb, bb.vertex, bb.fragment, vb, `program #${bb.id}'s twin`)
        }(yb, Wy)
      } finally {
        jb.inProbe = !1
      }
      return Wy.probe && Iy(yb, bb, Wy.probe), Wy.probe
    }

    function zb(yb, bb, Wy, Uy, hy) {
      const fy = [yb.createShader(Ry.VERTEX_SHADER), yb.createShader(Ry.FRAGMENT_SHADER)],
        Zy = yb.createProgram();
      if (!Zy || !fy[0] || !fy[1]) return null;
      yb.shaderSource(fy[0], bb), yb.shaderSource(fy[1], Wy);
      for (const Py of fy) yb.compileShader(Py), yb.attachShader(Zy, Py);
      yb.transformFeedbackVaryings(Zy, [Uy], Ry.INTERLEAVED_ATTRIBS), yb.linkProgram(Zy);
      for (const Py of fy) yb.deleteShader(Py);
      var cb;
      return yb.getProgramParameter(Zy, Ry.LINK_STATUS) ? Zy : (By(`decode probe: ${hy} failed to link: ${ey(null!==(cb=yb.getProgramInfoLog(Zy))&&void 0!==cb?cb:"",300)}`), yb.deleteProgram(Zy), null)
    }

    function Iy(yb, bb, Wy) {
      const Uy = yb.getProgramParameter(bb, Ry.ACTIVE_UNIFORM_BLOCKS);
      for (let cb = 0; cb < Uy; cb++) {
        const Uy = yb.getActiveUniformBlockName(bb, cb),
          hy = null === Uy ? Ry.INVALID_INDEX : yb.getUniformBlockIndex(Wy, Uy);
        hy !== Ry.INVALID_INDEX && yb.uniformBlockBinding(Wy, hy, yb.getActiveUniformBlockParameter(bb, cb, Ry.UNIFORM_BLOCK_BINDING))
      }
      const hy = yb.getParameter(Ry.CURRENT_PROGRAM);
      yb.useProgram(Wy);
      const fy = yb.getProgramParameter(bb, Ry.ACTIVE_UNIFORMS),
        Zy = yb.getActiveUniforms(bb, [...Array(fy).keys()], Ry.UNIFORM_BLOCK_INDEX);
      for (let cb = 0; cb < fy; cb++) {
        const Uy = yb.getActiveUniform(bb, cb);
        if (!Uy || -1 !== Zy[cb]) continue;
        const hy = Uy.name.replace(/\[0\]$/, "");
        for (let fy = 0; fy < Uy.size; fy++) {
          const Zy = Uy.size > 1 ? `${hy}[${fy}]` : Uy.name,
            cb = yb.getUniformLocation(bb, Zy),
            Py = yb.getUniformLocation(Wy, Zy);
          cb && Py && xb(yb, Py, Uy.type, yb.getUniform(bb, cb))
        }
      }
      yb.useProgram(hy)
    }

    function xb(yb, bb, Wy, Uy) {
      const hy = ArrayBuffer.isView(Uy) ? Array.from(Uy) : [Number(Uy)];
      switch (Wy) {
        case Ry.FLOAT:
          return void yb.uniform1f(bb, hy[0]);
        case Ry.FLOAT_VEC2:
          return void yb.uniform2fv(bb, hy);
        case Ry.FLOAT_VEC3:
          return void yb.uniform3fv(bb, hy);
        case Ry.FLOAT_VEC4:
          return void yb.uniform4fv(bb, hy);
        case Ry.FLOAT_MAT3:
          return void yb.uniformMatrix3fv(bb, !1, hy);
        case Ry.FLOAT_MAT4:
          return void yb.uniformMatrix4fv(bb, !1, hy);
        case Ry.UNSIGNED_INT:
          return void yb.uniform1ui(bb, hy[0]);
        case Ry.UNSIGNED_INT_VEC2:
          return void yb.uniform2uiv(bb, hy);
        case Ry.UNSIGNED_INT_VEC3:
          return void yb.uniform3uiv(bb, hy);
        case Ry.UNSIGNED_INT_VEC4:
          return void yb.uniform4uiv(bb, hy);
        case Ry.INT_VEC2:
          return void yb.uniform2iv(bb, hy);
        case Ry.INT_VEC3:
          return void yb.uniform3iv(bb, hy);
        case Ry.INT_VEC4:
          return void yb.uniform4iv(bb, hy);
        default:
          yb.uniform1i(bb, hy[0])
      }
    }

    function Ay(yb, bb, Wy, Uy) {
      let hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "decode probe";
      const fy = yb.getParameter(Ry.CURRENT_PROGRAM),
        Zy = yb.getParameter(Ry.TRANSFORM_FEEDBACK_BINDING),
        cb = yb.getParameter(Ry.TRANSFORM_FEEDBACK_BUFFER_BINDING),
        Py = yb.getParameter(Ry.COPY_READ_BUFFER_BINDING),
        oy = yb.isEnabled(Ry.RASTERIZER_DISCARD),
        Ky = yb.createTransformFeedback(),
        ey = yb.createBuffer();
      jb.inProbe = !0;
      try {
        const fy = yb.getError();
        fy !== Ry.NO_ERROR && By(`GL error 0x${fy.toString(16)} pending before the decode probe (the renderer's)`), yb.useProgram(bb), yb.bindTransformFeedback(Ry.TRANSFORM_FEEDBACK, Ky), yb.bindBuffer(Ry.TRANSFORM_FEEDBACK_BUFFER, ey), yb.bufferData(Ry.TRANSFORM_FEEDBACK_BUFFER, 12 * Wy, Ry.STREAM_READ), yb.bindBufferBase(Ry.TRANSFORM_FEEDBACK_BUFFER, 0, ey), yb.enable(Ry.RASTERIZER_DISCARD), yb.beginTransformFeedback(Ry.POINTS), Uy(), yb.endTransformFeedback(), yb.bindBufferBase(Ry.TRANSFORM_FEEDBACK_BUFFER, 0, null);
        const Zy = yb.getError();
        if (Zy !== Ry.NO_ERROR) return By(`${hy}: GL error 0x${Zy.toString(16)} on the feedback draw`), null;
        const cb = new Float32Array(3 * Wy);
        return yb.bindBuffer(Ry.COPY_READ_BUFFER, ey), yb.getBufferSubData(Ry.COPY_READ_BUFFER, 0, cb), cb
      } finally {
        oy || yb.disable(Ry.RASTERIZER_DISCARD), yb.bindTransformFeedback(Ry.TRANSFORM_FEEDBACK, Zy), yb.bindBuffer(Ry.TRANSFORM_FEEDBACK_BUFFER, cb), yb.bindBuffer(Ry.COPY_READ_BUFFER, Py), yb.deleteTransformFeedback(Ky), yb.deleteBuffer(ey), yb.useProgram(fy), jb.inProbe = !1
      }
    }

    function dy(yb, bb, Wy, Uy) {
      const hy = yb.getParameter(Ry.COPY_READ_BUFFER_BINDING),
        fy = new Uint8Array(Uy);
      return yb.bindBuffer(Ry.COPY_READ_BUFFER, bb), yb.getBufferSubData(Ry.COPY_READ_BUFFER, Wy, fy), yb.bindBuffer(Ry.COPY_READ_BUFFER, hy), fy
    }
    const yW = `#version 300 es\nlayout(location = ${ib}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
      bW = "#version 300 es\nprecision highp float;\nout vec4 color;\nvoid main() {\n\tcolor = vec4(0.0);\n}\n",
      Wb = new WeakMap;

    function Ub(yb, bb, Wy) {
      const Uy = yb.getProgramParameter(bb, Ry.ACTIVE_UNIFORMS),
        hy = yb.getParameter(Ry.ACTIVE_TEXTURE);
      try {
        for (let hy = 0; hy < Uy; hy++) {
          const Uy = yb.getActiveUniform(bb, hy);
          if ((null === Uy || void 0 === Uy ? void 0 : Uy.type) !== Ry.UNSIGNED_INT_SAMPLER_2D) continue;
          const fy = yb.getUniformLocation(bb, Uy.name),
            Zy = fy ? yb.getUniform(bb, fy) : -1;
          if (Zy < 0) continue;
          yb.activeTexture(Ry.TEXTURE0 + Zy);
          const cb = yb.getParameter(Ry.TEXTURE_BINDING_2D);
          if (cb && Qy.get(cb) === Wy) return cb
        }
        return null
      } finally {
        yb.activeTexture(hy)
      }
    }

    function hb(yb, bb, Wy, Uy, hy) {
      const fy = new Uint32Array(4 * hy),
        Zy = yb.getParameter(Ry.READ_FRAMEBUFFER_BINDING),
        cb = yb.createFramebuffer();
      yb.bindFramebuffer(Ry.READ_FRAMEBUFFER, cb), yb.framebufferTexture2D(Ry.READ_FRAMEBUFFER, Ry.COLOR_ATTACHMENT0, Ry.TEXTURE_2D, bb, 0);
      try {
        let bb = 0;
        for (; bb < hy;) {
          const Zy = Uy + bb,
            cb = Zy % Wy,
            Py = Math.min(hy - bb, Wy - cb);
          yb.readPixels(cb, Math.floor(Zy / Wy), Py, 1, Ry.RGBA_INTEGER, Ry.UNSIGNED_INT, fy.subarray(4 * bb, 4 * (bb + Py))), bb += Py
        }
      } finally {
        yb.bindFramebuffer(Ry.READ_FRAMEBUFFER, Zy), yb.deleteFramebuffer(cb)
      }
      return fy
    }

    function fb(yb, bb, Wy) {
      let Uy = 0,
        hy = 0;
      for (let Py = 0; Py < bb.bytes.length; Py += Fy) {
        Uy++;
        const yb = Math.min(Py + Fy, bb.bytes.length);
        Gy(bb.bytes.subarray(Py, yb)) !== Gy(Wy.subarray(Py, yb)) && hy++
      }
      const fy = `${yb} ${bb.bytes.length} B cpu ${Gy(bb.bytes).toString(16)} gpu ${Gy(Wy).toString(16)}, ${hy}/${Uy} blocks differ${bb.missed?`, ${bb.missed} GPU-side writes uncopied`:""}`;
      if (0 === hy) return fy;
      const {
        count: Zy,
        offsets: cb
      } = function(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8;
        const Uy = Math.min(yb.length, bb.length);
        let hy = Math.abs(yb.length - bb.length);
        const fy = [];
        for (let Zy = 0; Zy < Uy; Zy++) yb[Zy] !== bb[Zy] && (hy++, fy.length < Wy && fy.push(Zy));
        return {
          count: hy,
          offsets: fy
        }
      }(bb.bytes, Wy);
      return Ky([`${fy}: ${Zy} bytes differ`, ...cb.map((yb => `  +${yb}: cpu ${Oy(bb.bytes,yb)} | gpu ${Oy(Wy,yb)}`))].join("\n")), `${fy}: ${Zy} bytes differ, first at ${cb.join(", ")} (context in the saved file)`
    }

    function Zb(yb) {
      if (0 === yb.vertices.length) return void By(`decode probe (${yb.reason}): no terrain draw probed (${yb.draws.length} seen)`);
      const bb = function(yb) {
          const bb = new Map;
          for (const Uy of yb) {
            const yb = bb.get(Uy.group);
            yb ? yb.push(Uy) : bb.set(Uy.group, [Uy])
          }
          const Wy = {
            vertices: yb.length,
            mismatches: 0,
            byDirection: new Array(8).fill(0),
            byDiagonal: [0, 0],
            byBand: {},
            translations: new Map,
            first: []
          };
          for (const [Uy, hy] of bb) {
            const yb = new Map,
              bb = hy.map((bb => {
                const Wy = Vy(bb.record, bb.slot),
                  Uy = [bb.gpu[0] - Wy[0], bb.gpu[1] - Wy[1], bb.gpu[2] - Wy[2]],
                  hy = Uy.map((yb => Math.round(64 * yb))).join(","),
                  fy = yb.get(hy);
                return fy ? fy.count++ : yb.set(hy, {
                  count: 1,
                  offset: Uy
                }), Wy
              }));
            let fy = [0, 0, 0],
              Zy = 0;
            for (const Wy of yb.values()) Wy.count > Zy && (Zy = Wy.count, fy = Wy.offset);
            Wy.translations.set(Uy, fy), hy.forEach(((yb, Uy) => {
              var hy;
              const Zy = [bb[Uy][0] + fy[0], bb[Uy][1] + fy[1], bb[Uy][2] + fy[2]];
              if (Zy.every(((bb, Wy) => {
                  return Uy = yb.gpu[Wy], hy = bb, Math.abs(Uy - hy) <= Math.max(.001, 1e-6 * Math.abs(hy));
                  var Uy, hy
                }))) return;
              Wy.mismatches++, Wy.byDirection[mb(yb.record[2])]++, Wy.byDiagonal[Cy(yb.record[2])]++;
              const cb = Jy(yb.record);
              Wy.byBand[cb] = (null !== (hy = Wy.byBand[cb]) && void 0 !== hy ? hy : 0) + 1, Wy.first.length < gb && Wy.first.push({
                ...yb,
                expected: Zy
              })
            }))
          }
          return Wy
        }(yb.vertices),
        Wy = bb.byDirection.map(((yb, bb) => yb ? `${ly[bb]} ${yb}` : "")).filter(Boolean).join(" "),
        Uy = Object.entries(bb.byBand).map((yb => {
          let [bb, Wy] = yb;
          return `${bb}: ${Wy}`
        })).join(" ");
      if (By(`decode probe (${yb.reason}): ${bb.mismatches}/${bb.vertices} vertices differ from the CPU decode over ${yb.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (bb.mismatches ? ` by direction [${Wy}] diagonal [0: ${bb.byDiagonal[0]} 1: ${bb.byDiagonal[1]}] extent [${Uy}]` : "")), yb.fed.records > 0 || yb.fed.failed > 0) {
        By(`decode probe input: ${yb.fed.differing}/${yb.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (yb.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (yb.fed.failed ? `; the feed failed on ${yb.fed.failed} draws, whose decode is held to the buffer's readback` : ""));
        for (const bb of yb.fed.first) By(`  ${bb}`)
      }
      for (const hy of bb.first) {
        const [yb, bb, Wy] = hy.record;
        By(`  mismatch part ${hy.group} r0 ${yb.toString(16)} r1 ${bb.toString(16)} r2 ${Wy.toString(16)} slot ${hy.slot} (${ly[mb(Wy)]}): expected ${hy.expected.map(Pb).join(",")} gpu ${hy.gpu.map(Pb).join(",")}`)
      }
      Ky(`decode probe translations: ${[...bb.translations].map((yb=>{let[bb,Wy]=yb;return`${bb}: ${Wy.map(Pb).join(",")}`})).join("; ")}`)
    }

    function cW(yb) {
      return yb.toString(16)
    }

    function Pb(yb) {
      return Number.isInteger(yb) ? String(yb) : yb.toFixed(3)
    }

    function ob(yb) {
      return null !== jb.pendingCheck ? Promise.resolve() : new Promise((bb => {
        let Wy = !1;
        const Uy = {
          reason: yb,
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
        jb.pendingCheck = Uy;
        const hy = () => {
            jb.pendingCheck = null;
            try {
              ! function(yb) {
                By(`draw ranges (${yb.reason}): ${yb.terrainDraws} terrain draws in the frame, the first ${yb.draws.length} here`);
                for (const bb of yb.draws) {
                  const yb = bb.lZ.slice(0, 8).map((yb => {
                      let [bb, Wy] = yb;
                      return `${bb}+${Wy}`
                    })).join(" "),
                    Wy = bb.lZ.length > 8 ? ` (+${bb.lZ.length-8} ranges)` : "";
                  By(`  #${bb.program.id} ${bb.program.terrain} ${bb.call} ${yb}${Wy} x${bb.instances}${bb.group>=0?` part ${bb.group} chunk ${bb.chunk}`:""} | ${bb.attributes.join(" | ")}`)
                }
              }(Uy), Zb(Uy);
              Uy.draws.some((yb => "undefined" !== typeof WebGL2RenderingContext && yb.gl instanceof WebGL2RenderingContext)) || 0 === Uy.draws.length ? function(yb) {
                const bb = [],
                  Wy = new Map;
                for (const Uy of yb)
                  if ("undefined" !== typeof WebGL2RenderingContext && Uy.gl instanceof WebGL2RenderingContext)
                    for (const yb of Uy.pages) Wy.set("buf" === yb.kind ? yb.buffer : yb.texture, {
                      page: yb,
                      gl: Uy.gl
                    });
                for (const [Uy, {
                    page: hy,
                    gl: fy
                  }] of Wy) {
                  const yb = Ly.get(Uy);
                  if (!yb) {
                    bb.push(`${hy.kind}#${wy(Uy)}: no CPU copy (${jb.uncopied} pages over the copy budget)`);
                    continue
                  }
                  if ("buf" === hy.kind) {
                    bb.push(fb(`buf#${yb.id}`, yb, dy(fy, hy.buffer, 0, yb.bytes.length)));
                    continue
                  }
                  const Wy = hb(fy, hy.texture, yb.width, 0, yb.width * yb.height),
                    Zy = 16 === yb.texelBytes ? new Uint8Array(Wy.buffer) : new Uint8Array(new Uint16Array(Wy).buffer);
                  bb.push(fb(`tex#${yb.id} (${16===yb.texelBytes?"records":"light"})`, yb, Zy))
                }
                for (const Uy of bb) By(`page readback ${Uy}`)
              }(Uy.draws) : By("page readback: none on WebGL1 (no buffer readback)")
            } catch (yb) {
              By(`check failed: ${String(yb)}`)
            }
            bb()
          },
          fy = () => {
            if (Uy.draws.length > 0 && !Wy) return Wy = !0, void setTimeout(hy, 0);
            Wy || requestAnimationFrame(fy)
          };
        requestAnimationFrame(fy), setTimeout((() => {
          Wy || (Wy = !0, hy())
        }), 5e3)
      }))
    }
    const Bb = 20,
      Kb = 24;

    function eb(yb, bb, Wy) {
      if (!yb) return;
      const Uy = yb[bb];
      "function" === typeof Uy && (yb[bb] = Wy(Uy))
    }
    let qW = !1;
    const sb = new WeakMap,
      Sb = new WeakMap,
      Eb = new WeakMap,
      lb = {
        gl: 0,
        lost: 0
      };
    let mW = {
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
      Cb = {
        buffer: 0,
        texture: 0
      },
      Tb = 0;

    function Vb(yb, bb, Wy) {
      return Reflect.apply(yb, bb, Wy)
    }

    function Jb(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      if (yb instanceof ArrayBuffer) return new Uint8Array(yb, bb, Wy || void 0);
      if (!ArrayBuffer.isView(yb)) return null;
      const Uy = "BYTES_PER_ELEMENT" in yb ? yb.BYTES_PER_ELEMENT : 1,
        hy = yb.byteOffset + bb * Uy,
        fy = Wy ? Wy * Uy : yb.byteLength - bb * Uy;
      return new Uint8Array(yb.buffer, hy, Math.max(0, fy))
    }

    function gW(yb, bb) {
      const Wy = function(yb) {
        switch (yb) {
          case Ry.ARRAY_BUFFER:
            return Ry.ARRAY_BUFFER_BINDING;
          case Ry.ELEMENT_ARRAY_BUFFER:
            return Ry.ELEMENT_ARRAY_BUFFER_BINDING;
          case Ry.COPY_READ_BUFFER:
            return Ry.COPY_READ_BUFFER_BINDING;
          case Ry.COPY_WRITE_BUFFER:
            return Ry.COPY_WRITE_BUFFER_BINDING;
          case Ry.UNIFORM_BUFFER:
            return Ry.UNIFORM_BUFFER_BINDING;
          case Ry.PIXEL_UNPACK_BUFFER:
            return Ry.PIXEL_UNPACK_BUFFER_BINDING;
          case Ry.TRANSFORM_FEEDBACK_BUFFER:
            return Ry.TRANSFORM_FEEDBACK_BUFFER_BINDING;
          default:
            return 0
        }
      }(bb);
      return Wy ? yb.getParameter(Wy) : null
    }

    function Gb(yb) {
      const bb = Ly.get(yb);
      bb && (jb.shadowBytes -= bb.bytes.length, Ly.delete(yb))
    }

    function Ob(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      Gb(yb), jb.shadowBytes + bb > ab ? jb.uncopied++ : (jb.shadowBytes += bb, Ly.set(yb, {
        id: wy(yb),
        bytes: new Uint8Array(bb),
        width: Wy,
        height: Uy,
        texelBytes: hy,
        missed: 0
      }))
    }

    function Rb(yb, bb) {
      for (const Wy of ["deleteBuffer", "deleteTexture"]) eb(yb, Wy, (yb => function() {
        for (var bb = arguments.length, Wy = new Array(bb), Uy = 0; Uy < bb; Uy++) Wy[Uy] = arguments[Uy];
        return Wy[0] && Gb(Wy[0]), Vb(yb, this, Wy)
      }));
      eb(yb, "shaderSource", (yb => function() {
        for (var bb = arguments.length, Wy = new Array(bb), Uy = 0; Uy < bb; Uy++) Wy[Uy] = arguments[Uy];
        return Wy[0] && "string" === typeof Wy[1] && sb.set(Wy[0], Wy[1]), Vb(yb, this, Wy)
      })), eb(yb, "attachShader", (yb => function() {
        for (var bb, Wy = arguments.length, Uy = new Array(Wy), hy = 0; hy < Wy; hy++) Uy[hy] = arguments[hy];
        const fy = Uy[0],
          Zy = null !== (bb = Sb.get(fy)) && void 0 !== bb ? bb : [];
        return Zy.push(Uy[1]), Sb.set(fy, Zy), Vb(yb, this, Uy)
      })), eb(yb, "linkProgram", (yb => function() {
        for (var bb = arguments.length, Wy = new Array(bb), Uy = 0; Uy < bb; Uy++) Wy[Uy] = arguments[Uy];
        const hy = Vb(yb, this, Wy);
        return jb.inProbe || function(yb, bb) {
          var Wy;
          "undefined" !== typeof HTMLCanvasElement && yb.canvas instanceof HTMLCanvasElement && function(yb) {
            if (nb.has(yb)) return;
            nb.add(yb);
            for (const bb of ["webglcontextlost", "webglcontextrestored", "webglcontextcreationerror"]) yb.addEventListener(bb, (yb => {
              lb.lost < Bb && (lb.lost++, By(`${bb}${"statusMessage"in yb?`: ${String(yb.statusMessage)}`:""}`))
            }))
          }(yb.canvas);
          jb.context ??= yb;
          const Uy = null !== (Wy = Sb.get(bb)) && void 0 !== Wy ? Wy : [];
          let hy = "",
            fy = "";
          for (const Py of Uy) {
            var Zy;
            const yb = null !== (Zy = sb.get(Py)) && void 0 !== Zy ? Zy : "";
            /\bgl_Position\b/.test(yb) ? hy = yb : fy = yb
          }
          const cb = {
            id: wy(bb),
            gl: yb,
            vertex: hy,
            fragment: fy,
            terrain: iW(hy),
            checked: !1,
            firstDraw: !1
          };
          if (Eb.set(bb, cb), py.push([bb, cb]), null !== cb.terrain) {
            const bb = Uy.map((bb => {
              var Wy;
              return null !== (Wy = yb.getShaderInfoLog(bb)) && void 0 !== Wy ? Wy : ""
            })).filter((yb => "" !== yb.trim()));
            bb.length > 0 && Ky(`program #${cb.id} (${cb.terrain}) shader logs:\n${ey(bb.join("\n"))}`)
          }
        }(this, Wy[0]), hy
      })), eb(yb, "bufferData", (yb => function() {
        for (var bb = arguments.length, Wy = new Array(bb), Uy = 0; Uy < bb; Uy++) Wy[Uy] = arguments[Uy];
        const hy = Vb(yb, this, Wy);
        if (!jb.inProbe) {
          const yb = gW(this, Wy[0]);
          if (yb) {
            var fy, Zy, cb;
            const bb = "number" === typeof Wy[1] ? null : Jb(Wy[1], null !== (fy = Wy[3]) && void 0 !== fy ? fy : 0, null !== (Zy = Wy[4]) && void 0 !== Zy ? Zy : 0);
            var Py;
            if (Ob(yb, "number" === typeof Wy[1] ? Wy[1] : null !== (cb = null === bb || void 0 === bb ? void 0 : bb.length) && void 0 !== cb ? cb : 0), bb) null === (Py = Ly.get(yb)) || void 0 === Py || Py.bytes.set(bb)
          }
        }
        return hy
      })), eb(yb, "bufferSubData", (yb => function() {
        for (var bb = arguments.length, Wy = new Array(bb), Uy = 0; Uy < bb; Uy++) Wy[Uy] = arguments[Uy];
        const hy = Vb(yb, this, Wy);
        if (!jb.inProbe) {
          var fy, Zy;
          const yb = gW(this, Wy[0]),
            bb = yb ? Ly.get(yb) : void 0,
            Uy = Jb(Wy[2], null !== (fy = Wy[3]) && void 0 !== fy ? fy : 0, null !== (Zy = Wy[4]) && void 0 !== Zy ? Zy : 0);
          if (bb && Uy) {
            const yb = Wy[1];
            bb.bytes.set(Uy.subarray(0, Math.max(0, bb.bytes.length - yb)), yb), vW("buffer", bb, yb, Uy.length)
          }
        }
        return hy
      })), bb && (eb(yb, "copyBufferSubData", (yb => function() {
        for (var bb = arguments.length, Wy = new Array(bb), Uy = 0; Uy < bb; Uy++) Wy[Uy] = arguments[Uy];
        const hy = Vb(yb, this, Wy);
        if (!jb.inProbe) {
          const [yb, bb, Uy, hy, fy] = Wy, Zy = gW(this, yb), cb = gW(this, bb), Py = Zy ? Ly.get(Zy) : void 0, oy = cb ? Ly.get(cb) : void 0;
          oy && (Py ? oy.bytes.set(Py.bytes.slice(Uy, Uy + fy), hy) : oy.missed++)
        }
        return hy
      })), eb(yb, "texStorage2D", (yb => function() {
        for (var bb = arguments.length, Wy = new Array(bb), Uy = 0; Uy < bb; Uy++) Wy[Uy] = arguments[Uy];
        const hy = Vb(yb, this, Wy),
          [, , fy, Zy, cb] = Wy;
        if (!jb.inProbe && (fy === Ry.RGBA32UI || fy === Ry.RGBA16UI)) {
          const yb = this.getParameter(Ry.TEXTURE_BINDING_2D),
            bb = fy === Ry.RGBA32UI ? 16 : 8;
          yb && (Qy.set(yb, bb), Ob(yb, Zy * cb * bb, Zy, cb, bb))
        }
        return hy
      })), eb(yb, "texSubImage2D", (yb => function() {
        for (var bb = arguments.length, Wy = new Array(bb), Uy = 0; Uy < bb; Uy++) Wy[Uy] = arguments[Uy];
        const hy = Vb(yb, this, Wy);
        return !jb.inProbe && Wy.length >= 9 && Wy[0] === Ry.TEXTURE_2D && 0 === Wy[1] && function(yb, bb) {
          var Wy;
          const Uy = yb.getParameter(Ry.TEXTURE_BINDING_2D),
            hy = Uy ? Ly.get(Uy) : void 0;
          if (!hy) return;
          const [, , fy, Zy, cb, Py] = bb;
          let oy = Jb(bb[8], null !== (Wy = bb[9]) && void 0 !== Wy ? Wy : 0);
          if (null === oy && "number" === typeof bb[8]) {
            const Wy = gW(yb, Ry.PIXEL_UNPACK_BUFFER),
              Uy = Wy ? Ly.get(Wy) : void 0;
            oy = Uy ? Uy.bytes.subarray(bb[8]) : null
          }
          if (null === oy) return void hy.missed++;
          const By = yb.getParameter(Ry.UNPACK_ROW_LENGTH) || cb,
            Ky = yb.getParameter(Ry.UNPACK_SKIP_ROWS),
            ey = yb.getParameter(Ry.UNPACK_SKIP_PIXELS),
            qb = hy.texelBytes;
          for (let sy = 0; sy < Py; sy++) {
            const yb = ((Ky + sy) * By + ey) * qb,
              bb = ((Zy + sy) * hy.width + fy) * qb;
            hy.bytes.set(oy.subarray(yb, yb + cb * qb), bb)
          }
          vW("texture", hy, (Zy * hy.width + fy) * qb, cb * Py * qb)
        }(this, Wy), hy
      })), eb(yb, "copyTexSubImage2D", (yb => function() {
        for (var bb = arguments.length, Wy = new Array(bb), Uy = 0; Uy < bb; Uy++) Wy[Uy] = arguments[Uy];
        const hy = Wy[0] === Ry.TEXTURE_2D ? this.getParameter(Ry.TEXTURE_BINDING_2D) : null,
          fy = hy ? Ly.get(hy) : void 0;
        return fy && fy.missed++, Vb(yb, this, Wy)
      })));
      for (const Wy of ["drawArrays", "drawElements", "drawArraysInstanced", "drawElementsInstanced"]) eb(yb, Wy, (yb => function() {
        for (var bb = arguments.length, Uy = new Array(bb), hy = 0; hy < bb; hy++) Uy[hy] = arguments[hy];
        const fy = Vb(yb, this, Uy);
        return jb.inProbe || Yb(this, Wy, Uy), fy
      }));
      eb(yb, "getExtension", (yb => function() {
        for (var bb = arguments.length, Wy = new Array(bb), Uy = 0; Uy < bb; Uy++) Wy[Uy] = arguments[Uy];
        const hy = Vb(yb, this, Wy);
        return hy && "object" === typeof hy && function(yb, bb, Wy) {
          const Uy = {
            WEBGL_multi_draw: ["multiDrawArraysWEBGL", "multiDrawElementsWEBGL", "multiDrawArraysInstancedWEBGL", "multiDrawElementsInstancedWEBGL"],
            ANGLE_instanced_arrays: ["drawArraysInstancedANGLE", "drawElementsInstancedANGLE"]
          };
          if (!(bb in Uy) || Wy.bloxdRenderDebug) return;
          Wy.bloxdRenderDebug = !0;
          for (const hy of Uy[bb]) {
            const bb = Wy[hy];
            "function" === typeof bb && (Wy[hy] = function() {
              for (var Uy = arguments.length, fy = new Array(Uy), Zy = 0; Zy < Uy; Zy++) fy[Zy] = arguments[Zy];
              const cb = Reflect.apply(bb, Wy, fy);
              return jb.inProbe || Yb(yb, hy, fy), cb
            })
          }
        }(this, Wy[0], hy), hy
      }))
    }

    function vW(yb, bb, Wy, Uy) {
      Cb[yb] += Uy, Tb < 32 && bb.bytes.length >= 1 << 20 && (Tb++, Ky(`upload ${yb} #${bb.id} +${Wy} ${Uy} B`))
    }

    function iW(yb) {
      if (!yb.includes("decodeQuad")) return null;
      return !/^\s*#version 300 es/.test(yb) || /in uvec3 _p2vs_location0\b/.test(yb) ? "inst" : "tex"
    }

    function Mb(yb, bb, Wy) {
      var Uy;
      if (Wy.checked) return;
      Wy.checked = !0;
      const hy = yb.getProgramParameter(bb, Ry.LINK_STATUS),
        fy = (null !== (Uy = yb.getProgramInfoLog(bb)) && void 0 !== Uy ? Uy : "").trim();
      var Zy;
      null === Wy.terrain && hy || (By(`program #${Wy.id} ${null!==(Zy=Wy.terrain)&&void 0!==Zy?Zy:"other"} link ${hy?"ok":"FAILED"}${fy?`: ${ey(fy,300)}`:""}`), fy && Ky(`program #${Wy.id} link log:\n${ey(fy)}`))
    }

    function Yb(yb, bb, Wy) {
      var Uy;
      const hy = yb.getParameter(Ry.CURRENT_PROGRAM),
        fy = hy ? Eb.get(hy) : void 0;
      if (!hy || !fy) return;
      const Zy = null !== (Uy = fy.terrain) && void 0 !== Uy ? Uy : "other",
        {
          lZ: cb,
          instances: Py
        } = function(yb, bb) {
          switch (yb) {
            case "drawArrays":
              return {
                lZ: [
                  [bb[1], bb[2]]
                ], instances: 1
              };
            case "drawArraysInstanced":
            case "drawArraysInstancedANGLE":
              return {
                lZ: [
                  [bb[1], bb[2]]
                ], instances: bb[3]
              };
            case "drawElements":
              return {
                lZ: [
                  [0, bb[1]]
                ], instances: 1
              };
            case "drawElementsInstanced":
            case "drawElementsInstancedANGLE":
              return {
                lZ: [
                  [0, bb[1]]
                ], instances: bb[4]
              };
            case "multiDrawArraysWEBGL": {
              const yb = bb[1],
                Wy = bb[3],
                Uy = bb[2],
                hy = bb[4],
                fy = [];
              for (let Zy = 0; Zy < bb[5]; Zy++) fy.push([yb[Uy + Zy], Wy[hy + Zy]]);
              return {
                lZ: fy,
                instances: 1
              }
            }
            default:
              return {
                lZ: [], instances: 0
              }
          }
        }(bb, Wy),
        oy = "inst" === fy.terrain ? Py : cb.reduce(((yb, bb) => {
          let [, Wy] = bb;
          return yb + Wy
        }), 0) / 6;
      if (mW[Zy].draws++, mW[Zy].faces += oy, null === fy.terrain) return;
      if (jb.context = yb, !fy.firstDraw) {
        fy.firstDraw = !0, Mb(yb, hy, fy), Xb || (Xb = !0, By(function(yb) {
          var bb;
          const Wy = yb.getParameter(Ry.DEPTH_FUNC),
            Uy = {
              513: "less",
              514: "equal",
              515: "lequal",
              516: "greater",
              518: "gequal",
              519: "always"
            };
          let hy = "default framebuffer";
          if ("DRAW_FRAMEBUFFER" in yb && yb.getParameter(Ry.DRAW_FRAMEBUFFER_BINDING)) {
            const bb = yb;
            hy = bb.getFramebufferAttachmentParameter(Ry.DRAW_FRAMEBUFFER, Ry.DEPTH_ATTACHMENT, Ry.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(bb.getFramebufferAttachmentParameter(Ry.DRAW_FRAMEBUFFER,Ry.DEPTH_ATTACHMENT,Ry.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type 0x${Number(bb.getFramebufferAttachmentParameter(Ry.DRAW_FRAMEBUFFER,Ry.DEPTH_ATTACHMENT,Ry.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE)).toString(16)}` : "no depth attachment"
          }
          const fy = yb.getParameter(Ry.DEPTH_CLEAR_VALUE);
          return `depth ${null!==(bb=Uy[Wy])&&void 0!==bb?bb:`0x${Wy.toString(16)}`} clear ${fy}${516===Wy||518===Wy?" (reverse-Z)":""}, samples ${String(yb.getParameter(Ry.SAMPLES))}, ${hy}`
        }(yb)));
        const Wy = yb.getError();
        Wy !== Ry.NO_ERROR && lb.gl < Bb && (lb.gl++, By(`GL error 0x${Wy.toString(16)} after program #${fy.id}'s first terrain draw (${bb})`))
      }
      const Ky = jb.pendingCheck;
      null !== Ky && (Ky.terrainDraws++, Ky.draws.length < Kb && kb(yb, hy, fy, bb, cb, Py))
    }
    let Xb = !1;
    const nb = new WeakSet;
    const ub = ["maxStorageBuffersPerShaderStage", "maxStorageBufferBindingSize", "maxBufferSize", "maxUniformBufferBindingSize", "minUniformBufferOffsetAlignment", "maxTextureDimension2D", "maxTextureArrayLayers", "maxVertexBuffers", "maxVertexAttributes", "maxVertexBufferArrayStride", "maxBindGroups", "maxColorAttachmentBytesPerSample"];
    let rW = !1;
    const Hb = new WeakSet,
      aW = new WeakMap,
      Fb = new WeakMap,
      pb = {
        uncaptured: 0,
        compile: 0,
        rejected: 0
      };
    let Lb = 0,
      Qb = !1,
      jW = null,
      Db = {
        draws: 0,
        faces: 0
      };

    function tW(yb) {
      const bb = globalThis[yb];
      return null === bb || void 0 === bb ? void 0 : bb.prototype
    }

    function wb(yb) {
      return yb && "function" === typeof yb[Symbol.iterator] ? [...yb].sort().join(" ") : ""
    }

    function kW(yb, bb) {
      const Wy = null !== yb && void 0 !== yb ? yb : {},
        Uy = null !== bb && void 0 !== bb ? bb : Object.keys(Object.getPrototypeOf(Wy)).concat(Object.keys(Wy));
      return [...new Set(Uy)].filter((yb => "number" === typeof Wy[yb])).map((yb => `${yb} ${String(Wy[yb])}`)).join(", ")
    }

    function Nb(yb, bb) {
      var Wy;
      const Uy = null !== (Wy = bb.vertex) && void 0 !== Wy ? Wy : {};
      if (Uy.module && Hb.has(Uy.module)) {
        var hy;
        const Wy = String(null !== (hy = Uy.entryPoint) && void 0 !== hy ? hy : "");
        if (Wy.startsWith("vs_packed") && aW.set(yb, Wy), !Qb) {
          var fy, Zy, cb, Py, oy;
          Qb = !0;
          const yb = null !== (fy = bb.depthStencil) && void 0 !== fy ? fy : {},
            Uy = null !== (Zy = bb.multisample) && void 0 !== Zy ? Zy : {},
            hy = String(null !== (cb = yb.depthCompare) && void 0 !== cb ? cb : "");
          By(`WebGPU terrain pipeline ${Wy}: depth ${String(null!==(Py=yb.format)&&void 0!==Py?Py:"none")} ${hy}${hy.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(oy=Uy.count)&&void 0!==oy?oy:1)}`)
        }
      }
    }

    function zW(yb) {
      eb(yb, "setPipeline", (yb => function() {
        for (var bb = arguments.length, Wy = new Array(bb), Uy = 0; Uy < bb; Uy++) Wy[Uy] = arguments[Uy];
        return Fb.set(this, Wy[0]), Reflect.apply(yb, this, Wy)
      }));
      for (const bb of ["draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect"]) eb(yb, bb, (yb => function() {
        const Wy = Fb.get(this),
          Uy = Wy ? aW.get(Wy) : void 0;
        for (var hy = arguments.length, fy = new Array(hy), Zy = 0; Zy < hy; Zy++) fy[Zy] = arguments[Zy];
        return void 0 !== Uy && Ib(bb, Uy, fy), Reflect.apply(yb, this, fy)
      }))
    }

    function Ib(yb, bb, Wy) {
      var Uy;
      (Db.draws++, "draw" === yb || "drawIndexed" === yb) && (Db.faces += Wy[0] * (null !== (Uy = Wy[1]) && void 0 !== Uy ? Uy : 1) / 6);
      if (null !== jW && jW.length < Kb) {
        const Uy = ("draw" === yb ? ["vertices", "instances", "firstVertex", "firstInstance"] : "drawIndexed" === yb ? ["indices", "instances", "firstIndex", "baseVertex", "firstInstance"] : ["indirectOffset"]).map(((bb, Uy) => {
          const hy = yb.endsWith("Indirect") ? Wy[1] : Wy[Uy];
          return `${bb} ${String(null!==hy&&void 0!==hy?hy:"instances"===bb?1:0)}`
        }));
        jW.push(`  ${bb} ${yb} ${Uy.join(" ")}`)
      }
    }

    function xW() {
      if (rW || "undefined" === typeof navigator || !("gpu" in navigator)) return;
      rW = !0, eb(tW("GPU"), "requestAdapter", (yb => function() {
        for (var bb = arguments.length, Wy = new Array(bb), Uy = 0; Uy < bb; Uy++) Wy[Uy] = arguments[Uy];
        return Reflect.apply(yb, this, Wy).then((yb => {
          var bb;
          yb ? function(yb) {
            var bb;
            const Wy = null !== (bb = yb.info) && void 0 !== bb ? bb : {};
            By(`WebGPU adapter ${["vendor","architecture","device","description"].map((yb=>{var bb;return`${yb} "${String(null!==(bb=Wy[yb])&&void 0!==bb?bb:"")}"`})).join(" ")}${yb.isFallbackAdapter?" (fallback)":""}`), By(`WebGPU adapter features ${wb(yb.features)}`), By(`WebGPU adapter limits ${kW(yb.limits,ub)}`), Ky(`WebGPU adapter all limits ${kW(yb.limits,null)}`)
          }(yb) : By(`WebGPU requestAdapter(${JSON.stringify(null!==(bb=Wy[0])&&void 0!==bb?bb:{})}) gave none`);
          return yb
        }))
      })), eb(tW("GPUAdapter"), "requestDevice", (yb => function() {
        for (var bb = arguments.length, Wy = new Array(bb), Uy = 0; Uy < bb; Uy++) Wy[Uy] = arguments[Uy];
        return Reflect.apply(yb, this, Wy).then((yb => (function(yb) {
          By(`WebGPU device features ${wb(yb.features)}`), By(`WebGPU device limits ${kW(yb.limits,ub)}`), yb.addEventListener("uncapturederror", (yb => {
            if (pb.uncaptured < Bb) {
              var bb, Wy, Uy;
              pb.uncaptured++;
              const hy = yb.error;
              By(`WebGPU uncaptured ${null!==(bb=null===hy||void 0===hy||null===(Wy=hy.constructor)||void 0===Wy?void 0:Wy.name)&&void 0!==bb?bb:"error"}: ${ey(String(null!==(Uy=null===hy||void 0===hy?void 0:hy.message)&&void 0!==Uy?Uy:""),600)}`)
            }
          }));
          const bb = yb.lost;
          null === bb || void 0 === bb || bb.then((yb => {
            var bb;
            By(`WebGPU device lost (${String(yb.reason)}): ${ey(String(null!==(bb=yb.message)&&void 0!==bb?bb:""),600)}`)
          }))
        }(yb), yb)), (yb => {
          throw By(`WebGPU requestDevice failed: ${String(yb)}`), yb
        }))
      }));
      const yb = tW("GPUDevice");
      eb(yb, "createShaderModule", (yb => function() {
        for (var bb, Wy, Uy = arguments.length, hy = new Array(Uy), fy = 0; fy < Uy; fy++) hy[fy] = arguments[fy];
        const Zy = Reflect.apply(yb, this, hy);
        return function(yb, bb) {
          const Wy = bb.includes("decodeQuad");
          Wy && Hb.add(yb);
          const Uy = yb.getCompilationInfo;
          null === Uy || void 0 === Uy || Uy.call(yb).then((yb => {
            if (0 === yb.messages.length && !Wy) return;
            const bb = {};
            for (const Wy of yb.messages) {
              var Uy;
              bb[String(Wy.type)] = (null !== (Uy = bb[String(Wy.type)]) && void 0 !== Uy ? Uy : 0) + 1
            }
            const hy = yb.messages.map((yb => `${String(yb.type)} ${String(yb.lineNum)}:${String(yb.linePos)} ${String(yb.message)}`)).join("\n");
            pb.compile < Bb && (pb.compile++, By(`WebGPU ${Wy?"terrain ":""}shader module compiled: ${JSON.stringify(bb)}${hy?` first: ${ey(hy.split("\n")[0],300)}`:""}`)), hy && Ky(`WebGPU shader module messages:\n${ey(hy)}`)
          }))
        }(Zy, String(null !== (bb = (null !== (Wy = hy[0]) && void 0 !== Wy ? Wy : {}).code) && void 0 !== bb ? bb : "")), Zy
      })), eb(yb, "createRenderPipeline", (yb => function() {
        for (var bb, Wy = arguments.length, Uy = new Array(Wy), hy = 0; hy < Wy; hy++) Uy[hy] = arguments[hy];
        const fy = Reflect.apply(yb, this, Uy);
        return Nb(fy, null !== (bb = Uy[0]) && void 0 !== bb ? bb : {}), fy
      })), eb(yb, "createRenderPipelineAsync", (yb => function() {
        for (var bb = arguments.length, Wy = new Array(bb), Uy = 0; Uy < bb; Uy++) Wy[Uy] = arguments[Uy];
        return Reflect.apply(yb, this, Wy).then((yb => {
          var bb;
          return Nb(yb, null !== (bb = Wy[0]) && void 0 !== bb ? bb : {}), yb
        }), (yb => {
          var bb;
          throw function(yb, bb) {
            var Wy, Uy, hy;
            if (pb.rejected >= Bb) return;
            pb.rejected++;
            const {
              reason: fy,
              message: Zy
            } = null !== bb && void 0 !== bb ? bb : {}, cb = String(null !== (Wy = (null !== (Uy = yb.vertex) && void 0 !== Uy ? Uy : {}).entryPoint) && void 0 !== Wy ? Wy : "");
            By(`WebGPU pipeline "${String(null!==(hy=yb.label)&&void 0!==hy?hy:"")}" ${cb} rejected (${String(null!==fy&&void 0!==fy?fy:"no reason")}): ${ey(String(null!==Zy&&void 0!==Zy?Zy:bb),600)}`)
          }(null !== (bb = Wy[0]) && void 0 !== bb ? bb : {}, yb), yb
        }))
      })), eb(tW("GPUCanvasContext"), "configure", (yb => function() {
        for (var bb, Wy = arguments.length, Uy = new Array(Wy), hy = 0; hy < Wy; hy++) Uy[hy] = arguments[hy];
        const fy = null !== (bb = Uy[0]) && void 0 !== bb ? bb : {};
        var Zy, cb;
        Lb++ < 3 && By(`WebGPU canvas ${String(fy.format)} ${String(null!==(Zy=fy.colorSpace)&&void 0!==Zy?Zy:"srgb")} alpha ${String(null!==(cb=fy.alphaMode)&&void 0!==cb?cb:"opaque")}`);
        return Reflect.apply(yb, this, Uy)
      })), zW(tW("GPURenderPassEncoder")), zW(tW("GPURenderBundleEncoder"))
    }
    const Ab = 1e4,
      db = 5e3;
    let yU = null,
      bU = !1,
      WW = "1",
      UW = !1,
      hW = null,
      fW = 0;

    function ZW() {
      bU || (bU = !0, WW = "0" === (0, Uy.j)("faceCull") ? "0" : "1", window.bloxdRenderDebug = {
        faceCull: WW
      }, By("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), qW || "undefined" === typeof window || (qW = !0, "undefined" !== typeof WebGL2RenderingContext && Rb(WebGL2RenderingContext.prototype, !0), "undefined" !== typeof WebGLRenderingContext && Rb(WebGLRenderingContext.prototype, !1)), xW(), (0, Uy.e)("renderProbe", (() => {
        KW("console")
      })), oW(), setInterval(eW, db))
    }

    function cU(yb) {
      var bb, Wy;
      ZW(), yU = null !== (bb = null === yb || void 0 === yb ? void 0 : yb.backend) && void 0 !== bb ? bb : null, By(null === yb ? "backend: none picked (no renderer build)" : `backend ${yb.backend}: reason ${yb.reason}, source ${yb.source}, adapter ${yb.adapter?`${yb.adapter.vendor}/${yb.adapter.architecture}`:"none"}, renderer param ${null!==(Wy=(0,Uy.j)("renderer"))&&void 0!==Wy?Wy:"none"}, faceCull ${"0"===WW?"off (whole parts)":"on"}`)
    }

    function PW() {
      setTimeout((() => {
        KW(Ab / 1e3 + " s after playable")
      }), Ab), Ey((() => {
        var yb;
        return null !== (yb = hW) && void 0 !== yb ? yb : Promise.resolve()
      }))
    }

    function oW() {
      requestAnimationFrame((() => {
        fW++, oW()
      }))
    }

    function BW() {
      var yb, bb;
      if (UW) return;
      UW = !0;
      const Wy = window.bloxdRenderDebug;
      By(`renderer caps ${null!==(yb=null===Wy||void 0===Wy?void 0:Wy.caps)&&void 0!==yb?yb:"(not noted)"}; terrain fetch ${null!==(bb=null===Wy||void 0===Wy?void 0:Wy.fetch)&&void 0!==bb?bb:"(not noted)"}`);
      const Uy = jb.context;
      if (Uy) {
        for (const yb of function(yb) {
            var bb;
            const Wy = [],
              Uy = yb.getExtension("WEBGL_debug_renderer_info"),
              hy = Uy ? yb.getParameter(Uy.UNMASKED_VENDOR_WEBGL) : "(masked)",
              fy = Uy ? yb.getParameter(Uy.UNMASKED_RENDERER_WEBGL) : "(masked)";
            Wy.push(`GL ${String(yb.getParameter(yb.VERSION))} | ${String(yb.getParameter(yb.SHADING_LANGUAGE_VERSION))} | ${String(yb.getParameter(yb.VENDOR))} / ${String(yb.getParameter(yb.RENDERER))}`), Wy.push(`GL unmasked ${hy} / ${fy}`);
            const Zy = [
              ["MAX_TEXTURE_SIZE", yb.MAX_TEXTURE_SIZE],
              ["MAX_VERTEX_ATTRIBS", yb.MAX_VERTEX_ATTRIBS],
              ["MAX_VERTEX_UNIFORM_VECTORS", yb.MAX_VERTEX_UNIFORM_VECTORS],
              ["MAX_VERTEX_TEXTURE_IMAGE_UNITS", yb.MAX_VERTEX_TEXTURE_IMAGE_UNITS],
              ["MAX_COMBINED_TEXTURE_IMAGE_UNITS", yb.MAX_COMBINED_TEXTURE_IMAGE_UNITS],
              ["MAX_VARYING_VECTORS", yb.MAX_VARYING_VECTORS],
              ["MAX_RENDERBUFFER_SIZE", yb.MAX_RENDERBUFFER_SIZE]
            ];
            "MAX_UNIFORM_BLOCK_SIZE" in yb && Zy.push(["MAX_UNIFORM_BLOCK_SIZE", yb.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", yb.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", yb.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", yb.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS]), Wy.push(`GL limits ${Zy.map((bb=>{let[Wy,Uy]=bb;return`${Wy} ${String(yb.getParameter(Uy))}`})).join(", ")}`);
            const cb = (bb, Wy) => {
              const Uy = yb.getShaderPrecisionFormat(bb, yb.HIGH_FLOAT),
                hy = yb.getShaderPrecisionFormat(bb, yb.HIGH_INT);
              return `${Wy} highp float ${Uy?`${Uy.rangeMin}/${Uy.rangeMax}/${Uy.precision}`:"?"} int ${hy?`${hy.rangeMin}/${hy.rangeMax}/${hy.precision}`:"?"}`
            };
            Wy.push(`GL precision ${cb(yb.VERTEX_SHADER,"VS")}, ${cb(yb.FRAGMENT_SHADER,"FS")}`);
            const Py = yb.getContextAttributes();
            return Wy.push(`GL context ${JSON.stringify(Py)} drawingBuffer ${yb.drawingBufferWidth}x${yb.drawingBufferHeight}${"drawingBufferFormat"in yb?` format 0x${Number(yb.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in yb?` ${String(yb.drawingBufferColorSpace)}`:""}`), Wy.push(`GL extensions ${(null!==(bb=yb.getSupportedExtensions())&&void 0!==bb?bb:[]).join(" ")}`), Wy
          }(Uy)) By(yb);
        ! function() {
          if (!jb.context) return;
          let yb = 0,
            bb = 0;
          for (const [Wy, Uy] of py) !Uy.gl.isContextLost() && Uy.gl.isProgram(Wy) && (bb++, Mb(Uy.gl, Wy, Uy), null !== Uy.terrain && yb++);
          By(`programs: ${bb} live of ${py.length} linked, ${yb} packed terrain; CPU page copies ${Math.round(jb.shadowBytes/1048576)} MiB (${jb.uncopied} over budget)`)
        }()
      }
    }

    function KW(yb) {
      return hW ??= async function(yb) {
        BW(), "webgpu" === yU ? await
        function(yb) {
          if (null !== jW) return Promise.resolve();
          const bb = [];
          return jW = bb, new Promise((Wy => {
            setTimeout((() => {
              jW = null, By(`WebGPU draw ranges (${yb}): ${bb.length} terrain draws recorded in a second (first ${Kb}; bundles replay without new ones)`);
              for (const yb of bb) By(yb);
              Wy()
            }), 1e3)
          }))
        }(yb): await ob(yb);
        By(`check (${yb}) done: bloxdDebug.save() downloads it all`)
      }(yb).catch((bb => {
        By(`check (${yb}) failed: ${String(bb)}`)
      })).finally((() => {
        hW = null
      })), hW
    }

    function eW() {
      const yb = yb => fW ? (yb / fW).toFixed(1) : "0",
        bb = function() {
          const yb = Db;
          return Db = {
            draws: 0,
            faces: 0
          }, yb
        }(),
        Wy = function() {
          const yb = mW;
          return mW = {
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
          }, yb
        }(),
        Uy = function() {
          const yb = Cb;
          return Cb = {
            buffer: 0,
            texture: 0
          }, yb
        }(),
        hy = "webgpu" === yU ? [`terrain ${yb(bb.draws)} draws ${yb(bb.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((yb => Wy[yb].draws > 0)).map((bb => `${bb} ${yb(Wy[bb].draws)} draws ${yb(Wy[bb].faces)} faces a frame`));
      By(`${fW} frames: ${hy.join(", ")||"no draws"}; uploaded ${Math.round(Uy.buffer/1024)} KiB to buffers, ${Math.round(Uy.texture/1024)} KiB to data textures`), fW = 0
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);