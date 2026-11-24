export const id = 309;
export const ids = [309];
export const modules = {
  41955: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Ip
    });
    var Op = cp(41948),
      op = cp(41959);

    function Ip(pp) {
      (0, op.e)(pp), (0, Op.q)(pp);
      const ip = pp._surfaces;
      for (const cp of ip) cp._renderingContexts.length = 0, cp._ro?.disconnect(), cp._context.unconfigure();
      ip.length = 0;
      try {
        pp._disposeManagedResources?.(), pp._disposeStorageBuffers?.()
      } finally {
        pp._device.destroy()
      }
    }
  },
  41948: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Pp,
      e: () => vp,
      g: () => Wp,
      k: () => yp,
      l: () => dp,
      o: () => tp,
      q: () => Hp
    });
    var Op = cp(41905);
    var op = "Babylon Lite v1.32.0",
      Ip = cp(41952);

    function Sp(pp) {
      return "clientWidth" in pp
    }
    var xp = 1;

    function Lp(pp, ip, cp) {
      const Lp = ip.getContext("webgpu");
      Lp || (0, Op.e)(54), Sp(ip) && ip.setAttribute("data-engine", op);
      const Yp = cp?.format ?? navigator.gpu.getPreferredCanvasFormat(),
        Dp = cp?.srgb ? (Ap = Yp).endsWith("-srgb") ? Ap : `${Ap}-srgb` : Yp;
      var Ap;
      const Pp = cp?.alphaMode ?? "opaque";
      Lp.configure({
        device: pp._device,
        format: Yp,
        alphaMode: Pp,
        viewFormats: [Dp]
      });
      const Wp = 1 === cp?.msaaSamples ? 1 : 4,
        yp = (0, Ip.e)({
          lbl: "swapchain",
          format: Dp,
          samples: 1,
          size: {
            width: 0,
            height: 0
          }
        });
      return yp._eager = !0, {
        engine: pp,
        canvas: ip,
        format: Dp,
        msaaSamples: Wp,
        scRT: yp,
        maxDevicePixelRatio: cp?.maxDevicePixelRatio ?? 1 / 0,
        _uniqueId: xp++,
        _context: Lp,
        _configureFormat: Yp,
        _alphaMode: Pp,
        _renderingContexts: []
      }
    }

    function Yp(pp) {
      const ip = pp._context.getCurrentTexture(),
        cp = pp.scRT;
      cp._colorTexture = ip, cp._colorView = ip.createView({
        format: pp.format
      }), cp._width = ip.width, cp._height = ip.height
    }

    function Dp(pp) {
      const ip = pp.canvas;
      if (!Sp(ip)) return;
      const cp = pp._w ?? ip.clientWidth,
        Op = pp._h ?? ip.clientHeight;
      if (!(cp > 0 && Op > 0)) return;
      const op = Math.min(globalThis.devicePixelRatio || 1, pp.maxDevicePixelRatio);
      Ap(pp, cp * op | 0, Op * op | 0)
    }

    function Ap(pp, ip, cp) {
      const Op = pp.canvas,
        op = 0 | ip,
        Ip = 0 | cp;
      if (op > 0 && Ip > 0 && (op !== Op.width || Ip !== Op.height)) {
        Op.width = op, Op.height = Ip, pp.scRT._width = op, pp.scRT._height = Ip;
        for (const ip of pp._renderingContexts) ip._resize?.()
      }
    }
    var Pp = 0;

    function Wp(pp, ip) {
      return -1 !== pp._renderingContexts.indexOf(ip)
    }

    function yp(pp, ip) {
      return -1 === pp._renderingContexts.indexOf(ip) && (pp._renderingContexts.push(ip), !0)
    }
    var Up = null;
    var wp = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
    async function vp(pp, ip) {
      const Ip = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance",
        ...Up ? Up() : {}
      });
      Ip || (0, Op.e)(47);
      const Sp = Up?.deviceFeatures?.(Ip, ip) ?? function(pp) {
          return wp.filter((ip => pp.features.has(ip)))
        }(Ip),
        xp = await Ip.requestDevice({
          requiredFeatures: Sp,
          requiredLimits: ip?.requiredLimits
        });
      console.log(`${op} - WebGPU engine`);
      const Ap = !!ip?.useHighPrecisionMatrix,
        Pp = !!ip?.useFloatingOrigin;
      if (Pp && !Ap && (0, Op.e)(48), Ap) {
        const {
          allocateF64Mat4: pp
        } = await cp.e(361).then((() => cp(61441)));
        0
      }
      let Wp, yp, vp, tp;
      if (Pp) {
        const [{
          wrapRenderableForFO: pp,
          lightFoVersion: ip,
          applyLightFoOffset: Op
        }, {
          makePackMeshWorld: op
        }] = await Promise.all([cp.e(362).then((() => cp(61443))), cp.e(363).then((() => cp(61449)))]);
        Wp = pp, yp = op, vp = ip, tp = Op
      }
      const Hp = {
          _device: xp
        },
        dp = [Hp];
      return Object.assign(Hp, {
        engine: Hp,
        surfaces: dp,
        _surfaces: dp,
        _device: xp,
        _options: ip,
        drawCallCount: 0,
        gpuFrameTimeMs: 0,
        useHighPrecisionMatrix: Ap,
        useFloatingOrigin: Pp,
        _animFrameId: 0,
        _renderFn: null,
        _currentEncoder: void 0,
        _currentDelta: 0,
        _cbs: [],
        _wrapRenderableForFO: Wp,
        _makePackMeshWorld: yp,
        _lightFoVersion: vp,
        _applyLightFoOffset: tp
      }, Lp(Hp, pp, ip)), Dp(Hp), Yp(Hp), Hp
    }

    function tp(pp, ip, cp) {
      Ap(pp, ip, cp)
    }

    function Hp(pp) {
      pp._animFrameId && cancelAnimationFrame(pp._animFrameId), pp._animFrameId = 0, pp._renderFn = null, pp._flushGpuRetirements?.(pp)
    }

    function dp(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pp.surfaces;
      if (cp !== pp.surfaces)
        for (let op = cp.length; op--;) cp[op].engine !== pp && (0, Op.e)(49);
      ep(pp, ip, cp)
    }

    function ep(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pp._surfaces,
        Op = 0;
      for (let Ip = cp.length; Ip--;) Op += cp[Ip]._renderingContexts.length;
      if (!Op) return pp.drawCallCount = 0, pp._flushGpuRetirements?.(pp);
      const op = pp._device.createCommandEncoder({
        label: "frame"
      });
      pp._currentEncoder = op, pp._currentDelta = ip;
      try {
        pp._gpuTimerBegin?.(op), Op = 0;
        for (let pp = 0; pp < cp.length; pp++) {
          const ip = cp[pp];
          ip._capturePreFrame?.(ip), Yp(ip);
          const op = ip._renderingContexts;
          for (let pp = 0; pp < op.length; pp++) {
            const ip = op[pp];
            ip._update(), Op += ip._drawCallsPre + ip._record()
          }
        }
        const ip = pp._currentEncoder;
        for (let pp = 0; pp < cp.length; pp++) {
          const Op = cp[pp];
          Op._captureService?.(Op, ip)
        }
        pp._gpuTimerEnd?.(ip), pp._cbs[0] = ip.finish(), pp._device.queue.submit(pp._cbs), pp._flushGpuRetirements?.(pp), pp.drawCallCount = Op, pp._gpuTimerResolve?.()
      } finally {
        pp._currentEncoder = void 0
      }
    }
  },
  41911: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => op,
      h: () => Ip,
      j: () => Op
    });
    var Op = globalThis.GPUTextureUsage,
      op = globalThis.GPUBufferUsage,
      Ip = globalThis.GPUShaderStage;
    globalThis.GPUColorWrite
  },
  41959: (pp, ip, cp) => {
    function Op(pp) {
      op(pp.splice(0))
    }

    function op(pp) {
      for (const cp of pp) try {
        cp()
      } catch (ip) {
        console.error("GPU resource retirement failed.", ip)
      }
    }

    function Ip(pp, ip) {
      pp._flushGpuRetirements ??= Sp, (pp._retirements ??= []).push(ip)
    }

    function Sp(pp) {
      const ip = pp._retirements;
      if (!ip) return;
      pp._retirements = null;
      const cp = pp._retiring ??= new Set;
      cp.add(ip), queueMicrotask((() => {
        pp._device.queue.onSubmittedWorkDone().then((() => {
          cp.delete(ip), Op(ip)
        })).catch((() => {}))
      }))
    }

    function xp(pp) {
      const ip = pp._retirements,
        cp = pp._retiring;
      pp._retirements = null, pp._retiring = null, ip && Op(ip), cp?.forEach(Op)
    }
    cp.d(ip, {
      e: () => xp,
      h: () => Ip
    })
  },
  41952: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Ip,
      i: () => Sp,
      k: () => xp
    });
    var Op = cp(41911);

    function op(pp) {
      const ip = pp.size;
      return "canvas" in ip ? ip.canvas : ip
    }

    function Ip(pp) {
      return {
        _descriptor: pp,
        _resolveSize: op,
        _colorTexture: null,
        _colorView: null,
        _depthTexture: null,
        _depthView: null,
        _width: 0,
        _height: 0
      }
    }

    function Sp(pp, ip) {
      if (pp._eager) return void pp._syncEager?.(ip);
      xp(pp);
      const cp = pp._descriptor,
        {
          width: Ip,
          height: Sp
        } = (pp._resolveSize ?? op)(cp);
      pp._width = Ip, pp._height = Sp;
      const Lp = ip._device;
      cp.format && (pp._colorTexture = Lp.createTexture({
        label: cp.lbl,
        size: {
          width: Ip,
          height: Sp
        },
        format: cp.format,
        sampleCount: cp.samples,
        usage: Op.j.RENDER_ATTACHMENT | Op.j.TEXTURE_BINDING | Op.j.COPY_SRC | Op.j.COPY_DST
      }), pp._colorView = pp._colorTexture.createView()), cp.dFormat && (pp._depthTexture = Lp.createTexture({
        label: cp.lbl,
        size: {
          width: Ip,
          height: Sp
        },
        format: cp.dFormat,
        sampleCount: cp.samples,
        usage: Op.j.RENDER_ATTACHMENT | Op.j.TEXTURE_BINDING
      }), pp._depthView = pp._depthTexture.createView())
    }

    function xp(pp) {
      if (!pp || pp._eager && !pp._disposeAttachments) return;
      const ip = pp._colorTexture,
        cp = pp._depthTexture;
      if (pp._colorTexture = pp._depthTexture = null, pp._colorView = pp._depthView = null, pp._width = pp._height = 0, pp._disposeAttachments) pp._disposeAttachments(ip, cp);
      else try {
        ip?.destroy()
      } finally {
        !1 !== pp._ownsDepthTexture && cp?.destroy()
      }
    }
  },
  41971: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Op,
      g: () => op,
      k: () => Ip
    });
    var Op = Float32Array,
      op = Float64Array,
      Ip = Uint32Array
  },
  41977: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Op
    });
    var Op = 16
  },
  41905: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => op
    });
    var Op = null;

    function op(pp) {
      for (var ip = arguments.length, cp = new Array(ip > 1 ? ip - 1 : 0), op = 1; op < ip; op++) cp[op - 1] = arguments[op];
      const Ip = new Error(Op?.(pp, cp) ?? `#${pp}`);
      throw Ip.lite = cp, Ip
    }
  },
  41933: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => op
    });
    var Op = cp(41918);

    function op(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const cp = ip.compare,
        op = ip.lodMinClamp ?? 0,
        Ip = ip.lodMaxClamp ?? 32,
        Sp = void 0 !== cp || 0 !== op || 32 !== Ip ? `${cp??""}:${op}:${Ip}` : "";
      return (0, Op.e)(pp, ip, Sp)
    }
  },
  41915: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Ip
    });
    var Op = null;

    function op(pp) {
      const ip = Op ??= new WeakMap;
      ip.set(pp, (ip.get(pp) ?? 0) + 1)
    }

    function Ip(pp) {
      op(pp.texture)
    }
  },
  41918: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => xp
    });
    var Op = null,
      op = "nearest",
      Ip = "clamp-to-edge",
      Sp = {
        minFilter: op,
        magFilter: op,
        mipmapFilter: op,
        addressModeU: Ip,
        addressModeV: Ip,
        addressModeW: Ip,
        maxAnisotropy: 1
      };

    function xp(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const op = pp._device,
        Ip = Op ??= new WeakMap;
      let xp = Ip.get(op);
      xp || Ip.set(op, xp = new Map);
      let Lp = cp;
      for (const Op in Sp) {
        const pp = Op;
        Lp += `:${ip[pp]??Sp[pp]}`
      }
      let Yp = xp.get(Lp);
      return Yp || xp.set(Lp, Yp = op.createSampler(ip)), Yp
    }
  },
  41968: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Tp,
      e: () => hp
    });
    var Op = cp(41952),
      op = cp(41948);

    function Ip(pp, ip) {
      ip._passes.length = 0, pp._currentProcessedTask = ip;
      try {
        ip.record()
      } finally {
        pp._currentProcessedTask = null
      }
    }
    var Sp = cp(41971);

    function xp(pp) {
      const ip = pp.worldMatrixVersion;
      if (pp._viewVer === ip) return pp._viewCache;
      const cp = pp._viewCache,
        Op = pp.worldMatrix,
        op = pp._useFloatingOrigin,
        Ip = op ? 0 : Op[12],
        Sp = op ? 0 : Op[13],
        xp = op ? 0 : Op[14];
      return cp[0] = Op[0], cp[1] = Op[4], cp[2] = Op[8], cp[3] = 0, cp[4] = Op[1], cp[5] = Op[5], cp[6] = Op[9], cp[7] = 0, cp[8] = Op[2], cp[9] = Op[6], cp[10] = Op[10], cp[11] = 0, cp[12] = -(Op[0] * Ip + Op[1] * Sp + Op[2] * xp), cp[13] = -(Op[4] * Ip + Op[5] * Sp + Op[6] * xp), cp[14] = -(Op[8] * Ip + Op[9] * Sp + Op[10] * xp), cp[15] = 1, pp._viewVer = ip, cp
    }
    var Lp = null;

    function Yp(pp) {
      return pp._projFov === pp.fov && pp._projNear === pp.nearPlane && pp._projFar === pp.farPlane || (pp._projFov = pp.fov, pp._projNear = pp.nearPlane, pp._projFar = pp.farPlane, pp._projRev = (pp._projRev ?? 0) + 1), pp.worldMatrixVersion + (pp._projRev ?? 0)
    }

    function Dp(pp, ip) {
      const cp = Yp(pp);
      if (pp._projVer === cp && pp._projAspect === ip) return pp._projCache;
      const Op = pp._projCache;
      return null !== Lp && pp.ortho ? Lp(pp, ip, Op) : function(pp, ip, cp, Op, op) {
        const Ip = 1 / Math.tan(.5 * ip),
          Sp = op - Op;
        pp[0] = Ip / cp, pp[5] = Ip, pp[10] = -Op / Sp, pp[11] = 1, pp[14] = op * Op / Sp
      }(Op, pp.fov, ip, pp.nearPlane, pp.farPlane), pp._projVer = cp, pp._projAspect = ip, Op
    }
    var Ap = cp(41911);

    function Pp(pp, ip, cp) {
      return pp._device.createBuffer({
        label: cp,
        size: (Op = ip, op = 16, Math.ceil(Op / op) * op),
        usage: Ap.e.UNIFORM | Ap.e.COPY_DST
      });
      var Op, op
    }
    var Wp = cp(41959),
      yp = null;

    function Up(pp) {
      const ip = pp._device,
        cp = yp ??= new WeakMap;
      let Op = cp.get(ip);
      return Op || (Op = ip.createBindGroupLayout({
        label: "pw",
        entries: [{
          binding: 0,
          visibility: Ap.h.VERTEX | Ap.h.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }, {
          binding: 1,
          visibility: Ap.h.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }]
      }), cp.set(ip, Op)), Op
    }

    function wp(pp, ip, cp) {
      const Op = pp._device,
        op = Pp(pp, ip.byteLength, cp);
      try {
        Op.queue.writeBuffer(op, 0, ip.buffer, ip.byteOffset, ip.byteLength)
      } catch (Ip) {
        throw op.destroy(), Ip
      }
      return op
    }
    var vp = cp(41977),
      tp = new Sp.k(1),
      Hp = new Sp.c(tp.buffer);

    function dp(pp) {
      let ip = 0;
      for (const cp of pp) ip += cp._lightVersion ?? 0;
      return ip
    }

    function ep(pp, ip) {
      pp.fill(0);
      let cp = 0;
      for (const Op of ip) {
        if (cp >= vp.d) break;
        Op._writeLightUbo && (Op._writeLightUbo(pp, 4 + 16 * cp), cp++)
      }
      tp[0] = cp, pp[0] = Hp[0]
    }

    function jp(pp, ip) {
      let cp = ip._lightGpuState;
      const Op = 16 + 16 * vp.d * 4;
      if (cp && cp._byteSize === Op) return cp;
      const op = !cp;
      cp?._buffer.destroy();
      const Ip = new Sp.c(Op / 4);
      return ep(Ip, ip.lights), pp._applyLightFoOffset?.(Ip, ip), cp = {
        _buffer: wp(pp, Ip),
        _scratch: Ip,
        jT: dp(ip.lights) + (pp._lightFoVersion?.(ip) ?? 0),
        _listVersion: ip._lightListVersion ?? 0,
        _lightCount: ip.lights.length,
        _byteSize: Op
      }, ip._lightGpuState = cp, op && ip._disposables.push((() => {
        ip._lightGpuState?._buffer.destroy(), ip._lightGpuState = void 0
      })), cp
    }

    function kp(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const op = ip;
      if (0 === Op && 16 === op.length) return void pp.set(op, cp);
      const Ip = Op,
        Sp = cp;
      pp[Sp + 0] = op[Ip + 0], pp[Sp + 1] = op[Ip + 1], pp[Sp + 2] = op[Ip + 2], pp[Sp + 3] = op[Ip + 3], pp[Sp + 4] = op[Ip + 4], pp[Sp + 5] = op[Ip + 5], pp[Sp + 6] = op[Ip + 6], pp[Sp + 7] = op[Ip + 7], pp[Sp + 8] = op[Ip + 8], pp[Sp + 9] = op[Ip + 9], pp[Sp + 10] = op[Ip + 10], pp[Sp + 11] = op[Ip + 11], pp[Sp + 12] = op[Ip + 12], pp[Sp + 13] = op[Ip + 13], pp[Sp + 14] = op[Ip + 14], pp[Sp + 15] = op[Ip + 15]
    }

    function mp(pp, ip, cp, Op, op) {
      pp.fill(0);
      const Ip = function(pp, ip) {
          const cp = Yp(pp);
          if (pp._vpVer === cp && pp._vpAspect === ip) return pp._vpCache;
          const Op = pp._vpCache;
          return function(pp, ip, cp, Op, op, Ip) {
            const Sp = cp[Op],
              xp = cp[Op + 1],
              Lp = cp[Op + 2],
              Yp = cp[Op + 3],
              Dp = cp[Op + 4],
              Ap = cp[Op + 5],
              Pp = cp[Op + 6],
              Wp = cp[Op + 7],
              yp = cp[Op + 8],
              Up = cp[Op + 9],
              wp = cp[Op + 10],
              vp = cp[Op + 11],
              tp = cp[Op + 12],
              Hp = cp[Op + 13],
              dp = cp[Op + 14],
              ep = cp[Op + 15];
            let jp = op[Ip],
              kp = op[Ip + 1],
              mp = op[Ip + 2],
              Rp = op[Ip + 3];
            pp[ip] = Sp * jp + Dp * kp + yp * mp + tp * Rp, pp[ip + 1] = xp * jp + Ap * kp + Up * mp + Hp * Rp, pp[ip + 2] = Lp * jp + Pp * kp + wp * mp + dp * Rp, pp[ip + 3] = Yp * jp + Wp * kp + vp * mp + ep * Rp, jp = op[Ip + 4], kp = op[Ip + 5], mp = op[Ip + 6], Rp = op[Ip + 7], pp[ip + 4] = Sp * jp + Dp * kp + yp * mp + tp * Rp, pp[ip + 5] = xp * jp + Ap * kp + Up * mp + Hp * Rp, pp[ip + 6] = Lp * jp + Pp * kp + wp * mp + dp * Rp, pp[ip + 7] = Yp * jp + Wp * kp + vp * mp + ep * Rp, jp = op[Ip + 8], kp = op[Ip + 9], mp = op[Ip + 10], Rp = op[Ip + 11], pp[ip + 8] = Sp * jp + Dp * kp + yp * mp + tp * Rp, pp[ip + 9] = xp * jp + Ap * kp + Up * mp + Hp * Rp, pp[ip + 10] = Lp * jp + Pp * kp + wp * mp + dp * Rp, pp[ip + 11] = Yp * jp + Wp * kp + vp * mp + ep * Rp, jp = op[Ip + 12], kp = op[Ip + 13], mp = op[Ip + 14], Rp = op[Ip + 15], pp[ip + 12] = Sp * jp + Dp * kp + yp * mp + tp * Rp, pp[ip + 13] = xp * jp + Ap * kp + Up * mp + Hp * Rp, pp[ip + 14] = Lp * jp + Pp * kp + wp * mp + dp * Rp, pp[ip + 15] = Yp * jp + Wp * kp + vp * mp + ep * Rp
          }(Op, 0, Dp(pp, ip), 0, xp(pp), 0), pp._vpVer = cp, pp._vpAspect = ip, Op
        }(Op, op),
        Sp = xp(Op),
        Lp = Op.worldMatrix;
      kp(pp, Ip, 0), kp(pp, Sp, 16), ip.useFloatingOrigin ? (pp[32] = 0, pp[33] = 0, pp[34] = 0) : (pp[32] = Lp[12], pp[33] = Lp[13], pp[34] = Lp[14]), pp[87] = ip.canvas.width;
      const Ap = cp.imageProcessing;
      pp[76] = Ap.exposure, pp[77] = Ap.contrast, pp[78] = cp._envTextures?.lodGenerationScale ?? .8, pp[79] = +Ap.toneMappingEnabled, pp[37] = ip.canvas.height
    }

    function Rp(pp, ip) {
      return {
        _renderables: pp,
        _opaqueBindings: [],
        _directBindings: [],
        _transparentBindings: [],
        _ob: [],
        _lastVersion: ip
      }
    }

    function qp(pp, ip, cp) {
      pp.clr ??= !0;
      const op = pp.rt._descriptor,
        Ip = pp.depth?._descriptor,
        Lp = {
          _colorFormat: op.format,
          _depthStencilFormat: Ip?.dFormat ?? op.dFormat,
          _depthCompare: op.depthCompare ?? Ip?.depthCompare,
          _sampleCount: op.samples
        },
        Dp = {
          loadOp: "clear",
          storeOp: "store"
        },
        Ap = {
          ...Rp([], -1),
          name: pp.name,
          _config: pp,
          _ownsTargets: !pp.sharedRt,
          engine: ip,
          pw: cp,
          _passes: [],
          _renderPassDescriptor: {
            colorAttachments: [Dp]
          },
          _colorAttachment: Dp,
          _sceneUBO: Pp(ip, 368),
          _suData: new Sp.c(92),
          _sceneUboCacheKey: [],
          _targetSignature: Lp,
          _updateContext: {
            targetWidth: 0,
            targetHeight: 0
          },
          record() {
            if (Ap._disposed) throw new Error("RenderTask has been disposed.");
            Ap._recordExplicit ? Ap._recordExplicit(Ap, !0) : Ep(Ap, !1 !== pp.autoMirror ? cp._renderables.slice() : Ap._renderables, !0)
          },
          execute: () => function(pp, ip, cp) {
            if (!1 === pp.enabled) return 0;
            const Op = pp.pw;
            ! function(pp, ip, cp) {
              const Op = pp.pw;
              !1 !== pp._config.autoMirror && pp._lastVersion !== Op._renderableVersion && Ep(pp, Op._renderables.slice());
              lp(pp, ip);
              const op = pp._updateContext,
                Ip = pp._config.cam ?? Op.camera;
              cp._colorFormat && (pp._config._skipClusteredLights || Op._clusteredLightUpdater?.(Ip, op.targetWidth, op.targetHeight), function(pp, ip) {
                const cp = jp(pp, ip),
                  Op = dp(ip.lights) + (pp._lightFoVersion?.(ip) ?? 0),
                  op = ip._lightListVersion ?? 0;
                Op === cp.jT && op === cp._listVersion && ip.lights.length === cp._lightCount || (cp.jT = Op, cp._listVersion = op, cp._lightCount = ip.lights.length, ep(cp._scratch, ip.lights), pp._applyLightFoOffset?.(cp._scratch, ip), pp._device.queue.writeBuffer(cp._buffer, 0, cp._scratch)), cp._buffer
              }(ip, Op));
              (function(pp, ip, cp, Op) {
                if (!Op) return;
                const op = Op.viewport,
                  Ip = pp._config.rt,
                  Sp = (pp._config.cs ? ip.canvas.width / ip.canvas.height : Ip._width / Ip._height) * (op ? op.width / op.height : 1),
                  xp = cp.fog,
                  Lp = cp.imageProcessing,
                  Dp = Yp(Op),
                  Ap = cp._envTextures,
                  Pp = pp._sceneUboCacheKey;
                if (Pp[0] === Op && Pp[1] === xp && Pp[2] === Dp && Pp[3] === Sp && Pp[4] === Lp.exposure && Pp[5] === Lp.contrast && Pp[6] === Ap) return;
                Pp[0] = Op, Pp[1] = xp, Pp[2] = Dp, Pp[3] = Sp, Pp[4] = Lp.exposure, Pp[5] = Lp.contrast, Pp[6] = Ap;
                const Wp = pp._suData;
                mp(Wp, ip, cp, Op, Sp);
                const yp = cp._sceneUboContributors;
                if (yp)
                  for (const Yp of yp) Yp(Wp, cp);
                ip._device.queue.writeBuffer(pp._sceneUBO, 0, Wp)
              })(pp, ip, Op, Ip), op.HV = Ip, pp._batchState?._reset(), Qp(pp._opaqueBindings, op), Qp(pp._directBindings, op), Qp(pp._transparentBindings, op), pp._batchState?._flush(ip),
                function(pp, ip) {
                  const cp = pp._transparentBindings;
                  if (cp.length <= 1 || !ip) return;
                  const Op = xp(ip);
                  for (const op of cp) {
                    const pp = op.renderable._worldCenter;
                    op._sortDistance = pp ? pp[0] * Op[2] + pp[1] * Op[6] + pp[2] * Op[10] + Op[14] : 0
                  }
                  cp.sort(Mp)
                }(pp, Ip)
            }(pp, ip, cp);
            const op = pp._colorAttachment,
              Ip = pp._config;
            Ip.rt._colorView && (Ip.rt === Op.surface.scRT && (op.view = Ip.rt._colorView), op.resolveTarget = Ip.rst?._colorView ?? void 0, op.clearValue = Ip.clrColor ?? Op.clearColor, op.loadOp = Ip.clr ? "clear" : "load");
            if (pp._executeWithTransmission) return pp._executeWithTransmission(cp._sampleCount);
            const Sp = ip._currentEncoder.beginRenderPass(pp._renderPassDescriptor),
              Lp = Xp(pp, Sp);
            return Sp.end(), Lp
          }(Ap, ip, Lp),
          dispose() {
            if (Ap._disposed) return;
            Ap._disposed = !0;
            const ip = Ap._pendingMeshes;
            ip && (ip.length = 0);
            for (const pp of Ap._renderables) Ap._retireRenderable?.(Ap.engine, pp);
            Ap._passes.length = Ap._opaqueBindings.length = Ap._directBindings.length = 0, Ap._transparentBindings.length = Ap._renderables.length = Ap._ob.length = 0, Ap._ownsTargets && ((0, Op.k)(pp.rt), (0, Op.k)(pp.rst)), pp.depth?._eager || (0, Op.k)(pp.depth);
            const cp = Ap._sceneUBO;
            (0, Wp.h)(Ap.engine, (() => cp.destroy())), Ap._batchState?._release(Ap.engine), Ap._batchState = void 0
          }
        };
      return Ap
    }

    function Mp(pp, ip) {
      return ip._sortDistance - pp._sortDistance || pp.renderable.order - ip.renderable.order
    }

    function Cp(pp, ip) {
      return pp.renderable.order - ip.renderable.order
    }

    function Ep(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pp._renderables,
        cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        op = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        Ip = arguments.length > 4 ? arguments[4] : void 0;
      const Sp = pp._config,
        xp = Sp.rt,
        Lp = pp._batchState,
        Yp = Rp(ip, pp.pw._renderableVersion);
      if (cp) {
        const ip = (ip, cp) => {
          ip && (cp || pp._ownsTargets || ip._eager) && (0, Op.i)(ip, pp.engine)
        };
        ip(xp), xp._descriptor.samples > 1 && ip(Sp.rst), ip(Sp.depth, !0)
      }
      const {
        _opaqueBindings: Dp,
        _directBindings: Ap,
        _transparentBindings: Pp
      } = Yp;
      try {
        for (const cp of ip) {
          const ip = cp.bind(pp.engine, pp._targetSignature);
          Yp._batchState = pp._targetSignature._collectBatches?.(Yp._batchState, ip), cp.isTransparent || cp._transmissive ? Pp.push(ip) : cp._direct ? Ap.push(ip) : Dp.push(ip)
        }
        Dp.sort(Cp), Ap.sort(Cp), cp && lp(pp, pp.engine, !1)
      } catch (Wp) {
        throw Yp._batchState?._release(void 0, Ip ?? [Lp]), Wp
      }
      return cp && (! function(pp, ip) {
        const cp = pp._config,
          Op = pp._colorAttachment;
        Op.view = ip._colorView, pp._renderPassDescriptor.colorAttachments = ip._colorView ? [Op] : [];
        const op = cp.depth ?? ip,
          Ip = op._depthView;
        let Sp;
        if (Ip) {
          const pp = op._descriptor,
            ip = (cp.depth ? op._eager : !1 === cp.depthClear) ? "load" : "clear";
          Sp = {
            view: Ip,
            depthClearValue: pp.depthClearValue ?? 0,
            depthLoadOp: ip,
            depthStoreOp: "store"
          }, pp.dFormat?.includes("stencil") && (Sp.stencilClearValue = 0, Sp.stencilLoadOp = ip, Sp.stencilStoreOp = "store")
        }
        pp._renderPassDescriptor.depthStencilAttachment = Sp
      }(pp, xp), pp._updateContext.targetWidth = xp._width, pp._updateContext.targetHeight = xp._height), op && (Object.assign(pp, Yp), Lp?._release(pp.engine, [Yp._batchState])), Yp
    }

    function Xp(pp, ip) {
      const cp = pp.engine,
        Op = pp._config,
        Ip = Op.rt,
        Sp = pp.pw,
        xp = pp._opaqueBindings,
        Lp = pp._ob,
        Yp = pp._sceneBG;
      if (function(pp, ip, cp, Op) {
          const op = ip?.viewport;
          if (!op) return;
          const Ip = Math.floor(op.x * cp),
            Sp = Math.floor((1 - op.y - op.height) * Op),
            xp = Math.ceil((op.x + op.width) * cp) - Ip,
            Lp = Math.ceil((1 - op.y) * Op) - Sp;
          pp.setViewport(Ip, Sp, xp, Lp, 0, 1), pp.setScissorRect(Ip, Sp, xp, Lp)
        }(ip, Op.cam ?? Sp.camera, Ip._width, Ip._height), ip.setBindGroup(0, Yp), pp._lastVis !== op.c || !Lp.length) {
        const ip = Ip._descriptor,
          Op = cp._device.createRenderBundleEncoder({
            colorFormats: ip.format ? [ip.format] : [],
            depthStencilFormat: pp._targetSignature._depthStencilFormat,
            sampleCount: ip.samples
          });
        Op.setBindGroup(0, Yp), Jp(Op, xp, cp), Lp[0] = Op.finish(), pp._lastVis = op.c
      }
      let Dp = xp.length;
      return ip.executeBundles(Lp), ip.setBindGroup(0, Yp), Dp += Jp(ip, pp._directBindings, cp), Dp += Jp(ip, pp._transparentBindings, cp), Dp
    }

    function lp(pp, ip) {
      let cp = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const Op = jp(ip, pp.pw)._buffer;
      if (Op === pp._lightsUBO) return;
      const op = ip._device.createBindGroup({
        layout: Up(ip),
        entries: [{
          binding: 0,
          resource: {
            buffer: pp._sceneUBO
          }
        }, {
          binding: 1,
          resource: {
            buffer: Op
          }
        }]
      });
      pp._lightsUBO = Op, pp._sceneBG = op, cp && (pp._ob = [])
    }

    function Qp(pp, ip) {
      for (const cp of pp) cp.update?.(ip)
    }

    function Jp(pp, ip, cp) {
      let Op = null,
        op = 0;
      for (const Ip of ip) {
        const ip = Ip.renderable.mesh;
        ip && !1 === ip.visible || (Ip.pipeline !== Op && (pp.setPipeline(Ip.pipeline), Op = Ip.pipeline), op += Ip.draw(pp, cp))
      }
      return op
    }

    function Bp(pp) {
      const ip = pp._materialSwapQueue;
      if (!ip[0] || pp._runtimeBuilds?.w) return;
      let Op, op, Ip;
      const Sp = pp._renderables;
      for (const cp of ip) {
        const ip = cp.material;
        if (!ip) continue;
        const xp = cp._runtimeThinBuild;
        if (xp) {
          op = xp(pp, cp, op);
          continue
        }
        const Lp = pp._groups.get(ip._buildGroup),
          Yp = Lp?.r;
        if (!Yp) {
          (Ip ??= []).push(cp);
          continue
        }
        if (Lp._w?.(cp)) {
          (Ip ??= []).push([cp, ip]);
          continue
        }
        const Dp = pp._meshDisposables.get(cp);
        Dp && (pp._meshDisposables.delete(cp), (0, Wp.h)(pp.surface.engine, (() => Dp.forEach((pp => pp())))));
        const Ap = Lp.o;
        let Pp;
        for (let pp = Sp.length; pp--;) Sp[pp].mesh === cp && (Pp = Sp.splice(pp, 1)[0]);
        ip._csmGen = -~ip._csmGen;
        const yp = Yp(pp, cp);
        if (Ap) {
          const pp = Ap.indexOf(Pp);
          pp < 0 ? Ap.push(yp) : Ap[pp] = yp
        }
        Op = Sp.push(yp)
      }
      if (Op && (Sp.sort(((pp, ip) => pp.order - ip.order)), pp._renderableVersion++, pp._materialEpoch++), ip.length = 0, !Ip) return op;
      const xp = Ip;
      return cp.e(367).then((() => cp(61471))).then((ip => {
        let {
          C: cp
        } = ip;
        return cp(pp, xp, op)
      }), (ip => {
        const cp = pp._runtimeBuilds;
        cp ? cp._x(ip) : console.error(ip)
      }))
    }
    var Np = null;

    function Tp(pp, ip) {
      const cp = pp.engine,
        op = {
          _kind: "pw",
          surface: pp,
          clearColor: {
            r: .2,
            g: .2,
            b: .3,
            a: 1
          },
          camera: null,
          lights: [],
          meshes: [],
          animationGroups: [],
          fog: null,
          clipPlane: null,
          shadowGenerators: [],
          imageProcessing: {
            exposure: 1,
            contrast: 1,
            toneMappingEnabled: !1
          },
          _renderables: [],
          _prePasses: [],
          _pickSources: [],
          _uniformUpdaters: [],
          fixedDeltaMs: 0,
          _beforeRender: [],
          _deferredBuilders: [],
          _groups: new Map,
          _disposables: [],
          _meshDisposables: new Map,
          _materialSwapQueue: [],
          _renderableVersion: 0,
          _materialEpoch: 0,
          _built: !1,
          _drawCallsPre: 0,
          _update() {
            cp.useFloatingOrigin && op.camera && !op.camera._useFloatingOrigin && (op.camera._useFloatingOrigin = !0, op.camera._viewVer = -1, op.camera._vpVer = -1);
            const pp = op.fixedDeltaMs > 0 ? op.fixedDeltaMs : cp._currentDelta,
              ip = cp._currentEncoder;
            let Op = 0;
            for (const cp of op._beforeRender) cp(pp);
            op._materialSwapQueue.length && Bp(op);
            for (const Ip of op._prePasses) Op += Ip.execute(ip, cp);
            for (const Ip of op._uniformUpdaters) Ip.update(cp);
            op._drawCallsPre = Op
          },
          _record: () => op._frameGraph.execute(),
          _resize() {
            op._frameGraph.build()
          }
        },
        Sp = function() {
          const pp = {
            _tasks: [],
            _currentProcessedTask: null,
            build() {
              for (let ip = 0; ip < pp._tasks.length; ip++) Ip(pp, pp._tasks[ip]);
              for (const ip of pp._tasks)
                for (const pp of ip._passes) pp._initialize()
            },
            execute() {
              let ip = 0;
              for (const cp of pp._tasks)
                if (!1 !== cp.executionEnabled)
                  if (cp.execute) ip += cp.execute();
                  else
                    for (const pp of cp._passes) ip += pp._execute();
              return ip
            },
            dispose() {
              for (const ip of pp._tasks) ip.dispose();
              pp._tasks.length = 0, pp._currentProcessedTask = null
            }
          };
          return pp
        }();
      if (op._frameGraph = Sp, !1 !== ip?.defaultRenderTask) {
        const ip = pp.msaaSamples > 1,
          Ip = ip ? (0, Op.e)({
            lbl: "scene-color",
            format: pp.format,
            dFormat: "depth24plus-stencil8",
            samples: pp.msaaSamples,
            size: pp
          }) : pp.scRT,
          xp = ip ? void 0 : (0, Op.e)({
            lbl: "scene-depth",
            dFormat: "depth24plus-stencil8",
            samples: 1,
            size: pp
          });
        ! function(pp, ip) {
          pp._tasks.push(ip)
        }(Sp, qp({
          name: "pw",
          rt: Ip,
          rst: ip ? pp.scRT : void 0,
          depth: xp
        }, cp, op))
      }
      return op._disposables.push((() => Sp.dispose())), op
    }
    async function fp(pp) {
      const ip = pp;
      for (ip._built || (ip._materialSwapQueue.length = 0); ip._deferredBuilders.length;) {
        const pp = ip._deferredBuilders.splice(0);
        await Promise.all(pp.map((pp => pp())))
      }
      await Bp(ip), Np?.get(ip)?.() || (ip._runtimeBuilds?._e(), ip._renderableVersion++, ip._built = !0), await (ip._rebuildHook?.(ip))
    }
    var bp = null;
    async function hp(pp) {
      const ip = pp,
        Op = ip.surface;
      (0, op.g)(Op, ip) || (await fp(pp), ip._renderables.sort(ap), await Promise.all(ip._frameGraph._tasks.map((pp => pp._preload?.()))), bp && await bp(ip), ip._frameGraph.build(), Op._renderingContexts[0] && (await cp.e(365).then((() => cp(61462)))).configureSwapchainOverlayScene(Op, ip), Np?.get(ip)?.() || (0, op.k)(Op, ip))
    }
    var ap = (pp, ip) => pp.order - ip.order
  },
  41944: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Yp,
      f: () => Dp
    });
    var Op = cp(41905),
      op = cp(41911),
      Ip = cp(41915),
      Sp = cp(41918),
      xp = cp(41924),
      Lp = cp(41928);

    function Yp(pp, ip, cp) {
      let xp = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      (ip < 1 || cp < 1) && (0, Op.e)(676, ip, cp);
      const Yp = pp._device,
        Dp = xp.mipMaps ?? !1,
        Ap = xp.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        Pp = Dp ? (0, Lp.d)(ip, cp) : 1,
        Wp = Yp.createTexture({
          size: {
            width: ip,
            height: cp
          },
          format: Ap,
          mipLevelCount: Pp,
          usage: op.j.TEXTURE_BINDING | op.j.COPY_DST | op.j.RENDER_ATTACHMENT
        }),
        yp = {
          addressModeU: xp.addressModeU ?? "clamp-to-edge",
          addressModeV: xp.addressModeV ?? "clamp-to-edge",
          minFilter: xp.minFilter ?? "linear",
          magFilter: xp.magFilter ?? "linear",
          mipmapFilter: Dp ? "linear" : "nearest"
        },
        Up = (0, Sp.e)(pp, yp),
        wp = {
          texture: Wp,
          view: Wp.createView(),
          sampler: Up,
          width: ip,
          height: cp
        };
      return (0, Ip.d)(wp), pp._dlr && pp._dlr.t(wp, {
        kind: "dynamic",
        width: ip,
        height: cp,
        format: Ap,
        levels: Pp,
        samplerDesc: yp,
        source: null,
        flipY: !0,
        premultipliedAlpha: !1
      }), wp
    }

    function Dp(pp, ip, cp) {
      let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const op = Op.invertY ?? !0,
        Ip = Op.premultiplyAlpha ?? !1;
      pp._device.queue.copyExternalImageToTexture({
        source: cp,
        flipY: op
      }, {
        texture: ip.texture,
        premultipliedAlpha: Ip
      }, [ip.width, ip.height]);
      const Sp = ip._recoverySource;
      Sp && "dynamic" === Sp.kind && (Sp.source = cp, Sp.flipY = op, Sp.premultipliedAlpha = Ip), ip.texture.mipLevelCount > 1 && (0, xp.generateMipmaps)(pp, ip.texture)
    }
  },
  41937: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Lp
    });
    var Op = cp(41905),
      op = cp(41911),
      Ip = cp(41915),
      Sp = cp(41918),
      xp = cp(41928);
    async function Lp(pp, ip) {
      let Lp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const [Yp, Dp] = function(pp) {
        const ip = pp,
          cp = [
            [ip.displayWidth, ip.displayHeight],
            [ip.videoWidth, ip.videoHeight],
            [ip.naturalWidth, ip.naturalHeight],
            [ip.width, ip.height]
          ];
        for (const [Op, op] of cp)
          if (void 0 !== Op && void 0 !== op && Number.isInteger(Op) && Number.isInteger(op) && Op > 0 && op > 0) return [Op, op];
        throw new TypeError("createTexture2DFromExternalImage: source has no supported positive intrinsic dimensions")
      }(ip), [Ap, Pp] = function(pp, ip, cp) {
        if (void 0 === cp) return [pp, ip];
        if (!Number.isInteger(cp) || cp < 1) throw new TypeError(`createTexture2DFromExternalImage: maxDimension must be a positive integer (got ${cp})`);
        if (Math.max(pp, ip) <= cp) return [pp, ip];
        const Op = cp / Math.max(pp, ip);
        return pp >= ip ? [cp, Math.max(1, Math.round(ip * Op))] : [Math.max(1, Math.round(pp * Op)), cp]
      }(Yp, Dp, Lp.maxDimension), Wp = Lp.mipMaps ?? !0, yp = Lp.premultiplyAlpha ?? !1;
      let Up = ip,
        wp = null;
      const vp = {
        texture: null
      };
      try {
        Ap === Yp && Pp === Dp || (wp = await createImageBitmap(ip, {
          resizeWidth: Ap,
          resizeHeight: Pp,
          resizeQuality: "high",
          premultiplyAlpha: yp ? "premultiply" : "none",
          colorSpaceConversion: "none"
        }), Up = wp);
        const tp = pp._device,
          Hp = Lp.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
          dp = Wp ? (0, xp.d)(Ap, Pp) : 1,
          ep = dp > 1 ? (await Promise.resolve().then((() => cp(41924)))).generateMipmaps : null,
          jp = {
            addressModeU: Lp.addressModeU ?? "repeat",
            addressModeV: Lp.addressModeV ?? "repeat",
            minFilter: Lp.minFilter ?? "linear",
            magFilter: Lp.magFilter ?? "linear",
            mipmapFilter: Wp ? "linear" : "nearest"
          };
        jp.maxAnisotropy = "linear" === jp.minFilter && "linear" === jp.magFilter && "linear" === jp.mipmapFilter ? 4 : 1;
        const kp = Lp.invertY ?? !0,
          mp = async ip => {
            let cp;
            tp.pushErrorScope("validation"), tp.pushErrorScope("out-of-memory");
            let Ip = null;
            try {
              const cp = vp.texture = tp.createTexture({
                size: {
                  width: Ap,
                  height: Pp
                },
                format: Hp,
                mipLevelCount: dp,
                usage: op.j.TEXTURE_BINDING | op.j.COPY_DST | op.j.RENDER_ATTACHMENT
              });
              tp.queue.copyExternalImageToTexture({
                source: ip,
                flipY: kp
              }, {
                texture: cp,
                premultipliedAlpha: yp
              }, {
                width: Ap,
                height: Pp
              }), ep && ep(pp, cp), Ip = (0, Sp.e)(pp, jp)
            } catch (Wp) {
              cp = Wp
            }
            const [xp, Lp] = await Promise.all([tp.popErrorScope(), tp.popErrorScope()]);
            if (cp) throw cp;
            const Yp = Lp ?? xp;
            if (Yp) throw new Error(`createTexture2DFromExternalImage: GPU upload failed: ${Yp.message}`, {
              cause: Yp
            });
            const Dp = vp.texture;
            return Dp && Ip || (0, Op.e)(677), {
              texture: Dp,
              view: Dp.createView(),
              sampler: Ip,
              width: Ap,
              height: Pp
            }
          }, Rp = await (pp._dlr?.x(Up, Ap, Pp, Hp, dp, jp, kp, yp, mp)) ?? await mp(Up);
        return (0, Ip.d)(Rp), Rp
      } catch (tp) {
        throw vp.texture?.destroy(), tp
      } finally {
        wp?.close()
      }
    }
  },
  41924: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      generateMipmaps: () => Wp,
      recordMipmaps: () => yp
    });
    var Op = cp(41911),
      op = cp(41918),
      Ip = {
        magFilter: "linear",
        minFilter: "linear"
      };
    var Sp = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*vec2f(.5,-.5)+.5);}@fragment fn fs(v:V)->@location(0)vec4f{return textureSample(t,s,v.u);}",
      xp = null,
      Lp = null,
      Yp = null,
      Dp = null,
      Ap = null;

    function Pp(pp) {
      const ip = pp._device;
      ip !== Ap && (xp?.clear(), xp = null, Lp = null, Yp = null, Dp = null, Ap = null, Ap = ip), Lp ??= ip.createShaderModule({
        code: Sp
      }), Yp ??= function(pp) {
        return (0, op.e)(pp, Ip)
      }(pp), Dp ??= ip.createBindGroupLayout({
        entries: [{
          binding: 0,
          visibility: Op.h.FRAGMENT,
          texture: {
            sampleType: "float"
          }
        }, {
          binding: 1,
          visibility: Op.h.FRAGMENT,
          sampler: {}
        }]
      })
    }

    function Wp(pp, ip, cp) {
      const Op = pp._device,
        op = Op.createCommandEncoder();
      yp(pp, ip, op, cp), Op.queue.submit([op.finish()])
    }

    function yp(pp, ip, cp, Op) {
      if (ip.mipLevelCount <= 1) return;
      const op = pp._device,
        Ip = function(pp, ip) {
          const cp = pp._device;
          Pp(pp), xp ??= new Map;
          let Op = xp.get(ip);
          return Op || (Op = cp.createRenderPipeline({
            layout: cp.createPipelineLayout({
              bindGroupLayouts: [Dp]
            }),
            vertex: {
              module: Lp,
              entryPoint: "vs"
            },
            fragment: {
              module: Lp,
              entryPoint: "fs",
              targets: [{
                format: ip
              }]
            },
            primitive: {
              topology: "triangle-list"
            }
          }), xp.set(ip, Op)), Op
        }(pp, ip.format),
        Sp = null != Op ? {
          dimension: "2d",
          baseArrayLayer: Op,
          arrayLayerCount: 1
        } : {};
      for (let xp = 1; xp < ip.mipLevelCount; xp++) {
        const pp = ip.createView({
            baseMipLevel: xp - 1,
            mipLevelCount: 1,
            ...Sp
          }),
          Op = ip.createView({
            baseMipLevel: xp,
            mipLevelCount: 1,
            ...Sp
          }),
          Lp = op.createBindGroup({
            layout: Dp,
            entries: [{
              binding: 0,
              resource: pp
            }, {
              binding: 1,
              resource: Yp
            }]
          }),
          Ap = cp.beginRenderPass({
            colorAttachments: [{
              view: Op,
              loadOp: "clear",
              storeOp: "store",
              clearValue: {
                r: 0,
                g: 0,
                b: 0,
                a: 0
              }
            }]
          });
        Ap.setPipeline(Ip), Ap.setBindGroup(0, Lp), Ap.draw(3), Ap.end()
      }
    }
  },
  41928: (pp, ip, cp) => {
    function Op(pp, ip) {
      return Math.floor(Math.log2(Math.max(pp, ip))) + 1
    }
    cp.d(ip, {
      d: () => Op
    })
  },
  41898: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Yp,
      g: () => Dp
    });
    var Op = cp(41905),
      op = cp(41911),
      Ip = cp(41915),
      Sp = cp(41918),
      xp = cp(41924),
      Lp = cp(41928);

    function Yp(pp, ip, cp, xp) {
      let Yp = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (ip < 1 || cp < 1 || xp < 1) && (0, Op.e)(722, ip, cp, xp);
      const Dp = pp._device,
        Ap = Yp.mipMaps ?? !0,
        Pp = Yp.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        Wp = Dp.createTexture({
          size: {
            width: ip,
            height: cp,
            depthOrArrayLayers: xp
          },
          dimension: "2d",
          format: Pp,
          mipLevelCount: Ap ? (0, Lp.d)(ip, cp) : 1,
          usage: op.j.TEXTURE_BINDING | op.j.COPY_DST | op.j.RENDER_ATTACHMENT
        }),
        yp = (0, Sp.e)(pp, {
          addressModeU: Yp.addressModeU ?? "repeat",
          addressModeV: Yp.addressModeV ?? "repeat",
          minFilter: Yp.minFilter ?? "linear",
          magFilter: Yp.magFilter ?? "linear",
          mipmapFilter: Ap ? "linear" : "nearest"
        }),
        Up = {
          texture: Wp,
          view: Wp.createView({
            dimension: "2d-array"
          }),
          sampler: yp,
          width: ip,
          height: cp,
          layers: xp
        };
      return (0, Ip.d)(Up), Up
    }

    function Dp(pp, ip, cp, op) {
      let Ip = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (cp < 0 || cp >= ip.layers || (0 | cp) !== cp) && (0, Op.e)(723, ip.layers, cp);
      const Sp = Ip.invertY ?? !0,
        Lp = Ip.premultiplyAlpha ?? !1;
      pp._device.queue.copyExternalImageToTexture({
        source: op,
        flipY: Sp
      }, {
        texture: ip.texture,
        origin: [0, 0, cp],
        premultipliedAlpha: Lp
      }, [ip.width, ip.height, 1]), ip.texture.mipLevelCount > 1 && (0, xp.generateMipmaps)(pp, ip.texture, cp)
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);