export const id = 295;
export const ids = [295];
export const modules = {
  40771: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => sY,
      e: () => WY,
      h: () => iY,
      i: () => yY,
      l: () => mY,
      m: () => EY
    });
    var FY = DY(40712);
    var AY = "Babylon Lite v1.32.0",
      IY = DY(40773);

    function RY(YY) {
      return "clientWidth" in YY
    }
    var OY = 1;

    function gY(YY, rY, DY) {
      const gY = rY.getContext("webgpu");
      gY || (0, FY.c)(54), RY(rY) && rY.setAttribute("data-engine", AY);
      const aY = DY?.format ?? navigator.gpu.getPreferredCanvasFormat(),
        vY = DY?.srgb ? (uY = aY).endsWith("-srgb") ? uY : `${uY}-srgb` : aY;
      var uY;
      const sY = DY?.alphaMode ?? "opaque";
      gY.configure({
        device: YY._device,
        format: aY,
        alphaMode: sY,
        viewFormats: [vY]
      });
      const iY = 1 === DY?.msaaSamples ? 1 : 4,
        yY = (0, IY.b)({
          lbl: "swapchain",
          format: vY,
          samples: 1,
          size: {
            width: 0,
            height: 0
          }
        });
      return yY._eager = !0, {
        engine: YY,
        canvas: rY,
        format: vY,
        msaaSamples: iY,
        scRT: yY,
        maxDevicePixelRatio: DY?.maxDevicePixelRatio ?? 1 / 0,
        _uniqueId: OY++,
        _context: gY,
        _configureFormat: aY,
        _alphaMode: sY,
        _renderingContexts: []
      }
    }

    function aY(YY) {
      const rY = YY._context.getCurrentTexture(),
        DY = YY.scRT;
      DY._colorTexture = rY, DY._colorView = rY.createView({
        format: YY.format
      }), DY._width = rY.width, DY._height = rY.height
    }

    function vY(YY) {
      const rY = YY.canvas;
      if (!RY(rY)) return;
      const DY = YY._w ?? rY.clientWidth,
        FY = YY._h ?? rY.clientHeight;
      if (!(DY > 0 && FY > 0)) return;
      const AY = Math.min(globalThis.devicePixelRatio || 1, YY.maxDevicePixelRatio);
      uY(YY, DY * AY | 0, FY * AY | 0)
    }

    function uY(YY, rY, DY) {
      const FY = YY.canvas,
        AY = 0 | rY,
        IY = 0 | DY;
      if (AY > 0 && IY > 0 && (AY !== FY.width || IY !== FY.height)) {
        FY.width = AY, FY.height = IY, YY.scRT._width = AY, YY.scRT._height = IY;
        for (const rY of YY._renderingContexts) rY._resize?.()
      }
    }
    var sY = 0;

    function iY(YY, rY) {
      return -1 !== YY._renderingContexts.indexOf(rY)
    }

    function yY(YY, rY) {
      return -1 === YY._renderingContexts.indexOf(rY) && (YY._renderingContexts.push(rY), !0)
    }
    var QY = null;
    var oY = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
    async function WY(YY, rY) {
      const IY = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance",
        ...QY ? QY() : {}
      });
      IY || (0, FY.c)(47);
      const RY = QY?.deviceFeatures?.(IY, rY) ?? function(YY) {
          return oY.filter((rY => YY.features.has(rY)))
        }(IY),
        OY = await IY.requestDevice({
          requiredFeatures: RY,
          requiredLimits: rY?.requiredLimits
        });
      console.log(`${AY} - WebGPU engine`);
      const uY = !!rY?.useHighPrecisionMatrix,
        sY = !!rY?.useFloatingOrigin;
      if (sY && !uY && (0, FY.c)(48), uY) {
        const {
          allocateF64Mat4: YY
        } = await DY.e(349).then((() => DY(60283)));
        0
      }
      let iY, yY, WY, EY;
      if (sY) {
        const [{
          wrapRenderableForFO: YY,
          lightFoVersion: rY,
          applyLightFoOffset: FY
        }, {
          makePackMeshWorld: AY
        }] = await Promise.all([DY.e(350).then((() => DY(60285))), DY.e(351).then((() => DY(60293)))]);
        iY = YY, yY = AY, WY = rY, EY = FY
      }
      const mY = {
          _device: OY
        },
        VY = [mY];
      return Object.assign(mY, {
        engine: mY,
        surfaces: VY,
        _surfaces: VY,
        _device: OY,
        _options: rY,
        drawCallCount: 0,
        gpuFrameTimeMs: 0,
        useHighPrecisionMatrix: uY,
        useFloatingOrigin: sY,
        _animFrameId: 0,
        _renderFn: null,
        _currentEncoder: void 0,
        _currentDelta: 0,
        _cbs: [],
        _wrapRenderableForFO: iY,
        _makePackMeshWorld: yY,
        _lightFoVersion: WY,
        _applyLightFoOffset: EY
      }, gY(mY, YY, rY)), vY(mY), aY(mY), mY
    }

    function EY(YY, rY, DY) {
      uY(YY, rY, DY)
    }

    function mY(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : YY.surfaces;
      if (DY !== YY.surfaces)
        for (let AY = DY.length; AY--;) DY[AY].engine !== YY && (0, FY.c)(49);
      VY(YY, rY, DY)
    }

    function VY(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : YY._surfaces,
        FY = 0;
      for (let IY = DY.length; IY--;) FY += DY[IY]._renderingContexts.length;
      if (!FY) return YY.drawCallCount = 0, YY._flushGpuRetirements?.(YY);
      const AY = YY._device.createCommandEncoder({
        label: "frame"
      });
      YY._currentEncoder = AY, YY._currentDelta = rY;
      try {
        YY._gpuTimerBegin?.(AY), FY = 0;
        for (let YY = 0; YY < DY.length; YY++) {
          const rY = DY[YY];
          rY._capturePreFrame?.(rY), aY(rY);
          const AY = rY._renderingContexts;
          for (let YY = 0; YY < AY.length; YY++) {
            const rY = AY[YY];
            rY._update(), FY += rY._drawCallsPre + rY._record()
          }
        }
        const rY = YY._currentEncoder;
        for (let YY = 0; YY < DY.length; YY++) {
          const FY = DY[YY];
          FY._captureService?.(FY, rY)
        }
        YY._gpuTimerEnd?.(rY), YY._cbs[0] = rY.finish(), YY._device.queue.submit(YY._cbs), YY._flushGpuRetirements?.(YY), YY.drawCallCount = FY, YY._gpuTimerResolve?.()
      } finally {
        YY._currentEncoder = void 0
      }
    }
  },
  40717: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => AY,
      g: () => IY,
      k: () => FY
    });
    var FY = globalThis.GPUTextureUsage,
      AY = globalThis.GPUBufferUsage,
      IY = globalThis.GPUShaderStage;
    globalThis.GPUColorWrite
  },
  40791: (YY, rY, DY) => {
    function FY(YY) {
      AY(YY.splice(0))
    }

    function AY(YY) {
      for (const DY of YY) try {
        DY()
      } catch (rY) {
        console.error("GPU resource retirement failed.", rY)
      }
    }

    function IY(YY, rY) {
      YY._flushGpuRetirements ??= RY, (YY._retirements ??= []).push(rY)
    }

    function RY(YY) {
      const rY = YY._retirements;
      if (!rY) return;
      YY._retirements = null;
      const DY = YY._retiring ??= new Set;
      DY.add(rY), queueMicrotask((() => {
        YY._device.queue.onSubmittedWorkDone().then((() => {
          DY.delete(rY), FY(rY)
        })).catch((() => {}))
      }))
    }
    DY.d(rY, {
      e: () => IY
    })
  },
  40773: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => IY,
      f: () => RY,
      j: () => OY
    });
    var FY = DY(40717);

    function AY(YY) {
      const rY = YY.size;
      return "canvas" in rY ? rY.canvas : rY
    }

    function IY(YY) {
      return {
        _descriptor: YY,
        _resolveSize: AY,
        _colorTexture: null,
        _colorView: null,
        _depthTexture: null,
        _depthView: null,
        _width: 0,
        _height: 0
      }
    }

    function RY(YY, rY) {
      if (YY._eager) return void YY._syncEager?.(rY);
      OY(YY);
      const DY = YY._descriptor,
        {
          width: IY,
          height: RY
        } = (YY._resolveSize ?? AY)(DY);
      YY._width = IY, YY._height = RY;
      const gY = rY._device;
      DY.format && (YY._colorTexture = gY.createTexture({
        label: DY.lbl,
        size: {
          width: IY,
          height: RY
        },
        format: DY.format,
        sampleCount: DY.samples,
        usage: FY.k.RENDER_ATTACHMENT | FY.k.TEXTURE_BINDING | FY.k.COPY_SRC | FY.k.COPY_DST
      }), YY._colorView = YY._colorTexture.createView()), DY.dFormat && (YY._depthTexture = gY.createTexture({
        label: DY.lbl,
        size: {
          width: IY,
          height: RY
        },
        format: DY.dFormat,
        sampleCount: DY.samples,
        usage: FY.k.RENDER_ATTACHMENT | FY.k.TEXTURE_BINDING
      }), YY._depthView = YY._depthTexture.createView())
    }

    function OY(YY) {
      if (!YY || YY._eager && !YY._disposeAttachments) return;
      const rY = YY._colorTexture,
        DY = YY._depthTexture;
      if (YY._colorTexture = YY._depthTexture = null, YY._colorView = YY._depthView = null, YY._width = YY._height = 0, YY._disposeAttachments) YY._disposeAttachments(rY, DY);
      else try {
        rY?.destroy()
      } finally {
        !1 !== YY._ownsDepthTexture && DY?.destroy()
      }
    }
  },
  40786: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => FY,
      f: () => AY,
      j: () => IY
    });
    var FY = Float32Array,
      AY = Float64Array,
      IY = Uint32Array
  },
  40800: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => FY
    });
    var FY = 16
  },
  40712: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => AY
    });
    var FY = null;

    function AY(YY) {
      for (var rY = arguments.length, DY = new Array(rY > 1 ? rY - 1 : 0), AY = 1; AY < rY; AY++) DY[AY - 1] = arguments[AY];
      const IY = new Error(FY?.(YY, DY) ?? `#${YY}`);
      throw IY.lite = DY, IY
    }
  },
  40749: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => AY
    });
    var FY = DY(40728);

    function AY(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const DY = rY.compare,
        AY = rY.lodMinClamp ?? 0,
        IY = rY.lodMaxClamp ?? 32,
        RY = void 0 !== DY || 0 !== AY || 32 !== IY ? `${DY??""}:${AY}:${IY}` : "";
      return (0, FY.e)(YY, rY, RY)
    }
  },
  40720: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => IY
    });
    var FY = null;

    function AY(YY) {
      const rY = FY ??= new WeakMap;
      rY.set(YY, (rY.get(YY) ?? 0) + 1)
    }

    function IY(YY) {
      AY(YY.texture)
    }
  },
  40728: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => OY
    });
    var FY = null,
      AY = "nearest",
      IY = "clamp-to-edge",
      RY = {
        minFilter: AY,
        magFilter: AY,
        mipmapFilter: AY,
        addressModeU: IY,
        addressModeV: IY,
        addressModeW: IY,
        maxAnisotropy: 1
      };

    function OY(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const AY = YY._device,
        IY = FY ??= new WeakMap;
      let OY = IY.get(AY);
      OY || IY.set(AY, OY = new Map);
      let gY = DY;
      for (const FY in RY) {
        const YY = FY;
        gY += `:${rY[YY]??RY[YY]}`
      }
      let aY = OY.get(gY);
      return aY || OY.set(gY, aY = AY.createSampler(rY)), aY
    }
  },
  40782: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => dY,
      i: () => wY
    });
    var FY = DY(40773),
      AY = DY(40771);

    function IY(YY, rY) {
      rY._passes.length = 0, YY._currentProcessedTask = rY;
      try {
        rY.record()
      } finally {
        YY._currentProcessedTask = null
      }
    }
    var RY = DY(40786);

    function OY(YY) {
      const rY = YY.worldMatrixVersion;
      if (YY._viewVer === rY) return YY._viewCache;
      const DY = YY._viewCache,
        FY = YY.worldMatrix,
        AY = YY._useFloatingOrigin,
        IY = AY ? 0 : FY[12],
        RY = AY ? 0 : FY[13],
        OY = AY ? 0 : FY[14];
      return DY[0] = FY[0], DY[1] = FY[4], DY[2] = FY[8], DY[3] = 0, DY[4] = FY[1], DY[5] = FY[5], DY[6] = FY[9], DY[7] = 0, DY[8] = FY[2], DY[9] = FY[6], DY[10] = FY[10], DY[11] = 0, DY[12] = -(FY[0] * IY + FY[1] * RY + FY[2] * OY), DY[13] = -(FY[4] * IY + FY[5] * RY + FY[6] * OY), DY[14] = -(FY[8] * IY + FY[9] * RY + FY[10] * OY), DY[15] = 1, YY._viewVer = rY, DY
    }
    var gY = null;

    function aY(YY) {
      return YY._projFov === YY.fov && YY._projNear === YY.nearPlane && YY._projFar === YY.farPlane || (YY._projFov = YY.fov, YY._projNear = YY.nearPlane, YY._projFar = YY.farPlane, YY._projRev = (YY._projRev ?? 0) + 1), YY.worldMatrixVersion + (YY._projRev ?? 0)
    }

    function vY(YY, rY) {
      const DY = aY(YY);
      if (YY._projVer === DY && YY._projAspect === rY) return YY._projCache;
      const FY = YY._projCache;
      return null !== gY && YY.ortho ? gY(YY, rY, FY) : function(YY, rY, DY, FY, AY) {
        const IY = 1 / Math.tan(.5 * rY),
          RY = AY - FY;
        YY[0] = IY / DY, YY[5] = IY, YY[10] = -FY / RY, YY[11] = 1, YY[14] = AY * FY / RY
      }(FY, YY.fov, rY, YY.nearPlane, YY.farPlane), YY._projVer = DY, YY._projAspect = rY, FY
    }
    var uY = DY(40717);

    function sY(YY, rY, DY) {
      return YY._device.createBuffer({
        label: DY,
        size: (FY = rY, AY = 16, Math.ceil(FY / AY) * AY),
        usage: uY.d.UNIFORM | uY.d.COPY_DST
      });
      var FY, AY
    }
    var iY = DY(40791),
      yY = null;

    function QY(YY) {
      const rY = YY._device,
        DY = yY ??= new WeakMap;
      let FY = DY.get(rY);
      return FY || (FY = rY.createBindGroupLayout({
        label: "LQ",
        entries: [{
          binding: 0,
          visibility: uY.g.VERTEX | uY.g.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }, {
          binding: 1,
          visibility: uY.g.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }]
      }), DY.set(rY, FY)), FY
    }

    function oY(YY, rY, DY) {
      const FY = YY._device,
        AY = sY(YY, rY.byteLength, DY);
      try {
        FY.queue.writeBuffer(AY, 0, rY.buffer, rY.byteOffset, rY.byteLength)
      } catch (IY) {
        throw AY.destroy(), IY
      }
      return AY
    }
    var WY = DY(40800),
      EY = new RY.j(1),
      mY = new RY.e(EY.buffer);

    function VY(YY) {
      let rY = 0;
      for (const DY of YY) rY += DY._lightVersion ?? 0;
      return rY
    }

    function SY(YY, rY) {
      YY.fill(0);
      let DY = 0;
      for (const FY of rY) {
        if (DY >= WY.c) break;
        FY._writeLightUbo && (FY._writeLightUbo(YY, 4 + 16 * DY), DY++)
      }
      EY[0] = DY, YY[0] = mY[0]
    }

    function lY(YY, rY) {
      let DY = rY._lightGpuState;
      const FY = 16 + 16 * WY.c * 4;
      if (DY && DY._byteSize === FY) return DY;
      const AY = !DY;
      DY?._buffer.destroy();
      const IY = new RY.e(FY / 4);
      return SY(IY, rY.lights), YY._applyLightFoOffset?.(IY, rY), DY = {
        _buffer: oY(YY, IY),
        _scratch: IY,
        Yz: VY(rY.lights) + (YY._lightFoVersion?.(rY) ?? 0),
        _listVersion: rY._lightListVersion ?? 0,
        _lightCount: rY.lights.length,
        _byteSize: FY
      }, rY._lightGpuState = DY, AY && rY._disposables.push((() => {
        rY._lightGpuState?._buffer.destroy(), rY._lightGpuState = void 0
      })), DY
    }

    function TY(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const AY = rY;
      if (0 === FY && 16 === AY.length) return void YY.set(AY, DY);
      const IY = FY,
        RY = DY;
      YY[RY + 0] = AY[IY + 0], YY[RY + 1] = AY[IY + 1], YY[RY + 2] = AY[IY + 2], YY[RY + 3] = AY[IY + 3], YY[RY + 4] = AY[IY + 4], YY[RY + 5] = AY[IY + 5], YY[RY + 6] = AY[IY + 6], YY[RY + 7] = AY[IY + 7], YY[RY + 8] = AY[IY + 8], YY[RY + 9] = AY[IY + 9], YY[RY + 10] = AY[IY + 10], YY[RY + 11] = AY[IY + 11], YY[RY + 12] = AY[IY + 12], YY[RY + 13] = AY[IY + 13], YY[RY + 14] = AY[IY + 14], YY[RY + 15] = AY[IY + 15]
    }

    function eY(YY, rY, DY, FY, AY) {
      YY.fill(0);
      const IY = function(YY, rY) {
          const DY = aY(YY);
          if (YY._vpVer === DY && YY._vpAspect === rY) return YY._vpCache;
          const FY = YY._vpCache;
          return function(YY, rY, DY, FY, AY, IY) {
            const RY = DY[FY],
              OY = DY[FY + 1],
              gY = DY[FY + 2],
              aY = DY[FY + 3],
              vY = DY[FY + 4],
              uY = DY[FY + 5],
              sY = DY[FY + 6],
              iY = DY[FY + 7],
              yY = DY[FY + 8],
              QY = DY[FY + 9],
              oY = DY[FY + 10],
              WY = DY[FY + 11],
              EY = DY[FY + 12],
              mY = DY[FY + 13],
              VY = DY[FY + 14],
              SY = DY[FY + 15];
            let lY = AY[IY],
              TY = AY[IY + 1],
              eY = AY[IY + 2],
              NY = AY[IY + 3];
            YY[rY] = RY * lY + vY * TY + yY * eY + EY * NY, YY[rY + 1] = OY * lY + uY * TY + QY * eY + mY * NY, YY[rY + 2] = gY * lY + sY * TY + oY * eY + VY * NY, YY[rY + 3] = aY * lY + iY * TY + WY * eY + SY * NY, lY = AY[IY + 4], TY = AY[IY + 5], eY = AY[IY + 6], NY = AY[IY + 7], YY[rY + 4] = RY * lY + vY * TY + yY * eY + EY * NY, YY[rY + 5] = OY * lY + uY * TY + QY * eY + mY * NY, YY[rY + 6] = gY * lY + sY * TY + oY * eY + VY * NY, YY[rY + 7] = aY * lY + iY * TY + WY * eY + SY * NY, lY = AY[IY + 8], TY = AY[IY + 9], eY = AY[IY + 10], NY = AY[IY + 11], YY[rY + 8] = RY * lY + vY * TY + yY * eY + EY * NY, YY[rY + 9] = OY * lY + uY * TY + QY * eY + mY * NY, YY[rY + 10] = gY * lY + sY * TY + oY * eY + VY * NY, YY[rY + 11] = aY * lY + iY * TY + WY * eY + SY * NY, lY = AY[IY + 12], TY = AY[IY + 13], eY = AY[IY + 14], NY = AY[IY + 15], YY[rY + 12] = RY * lY + vY * TY + yY * eY + EY * NY, YY[rY + 13] = OY * lY + uY * TY + QY * eY + mY * NY, YY[rY + 14] = gY * lY + sY * TY + oY * eY + VY * NY, YY[rY + 15] = aY * lY + iY * TY + WY * eY + SY * NY
          }(FY, 0, vY(YY, rY), 0, OY(YY), 0), YY._vpVer = DY, YY._vpAspect = rY, FY
        }(FY, AY),
        RY = OY(FY),
        gY = FY.worldMatrix;
      TY(YY, IY, 0), TY(YY, RY, 16), rY.useFloatingOrigin ? (YY[32] = 0, YY[33] = 0, YY[34] = 0) : (YY[32] = gY[12], YY[33] = gY[13], YY[34] = gY[14]), YY[87] = rY.canvas.width;
      const uY = DY.imageProcessing;
      YY[76] = uY.exposure, YY[77] = uY.contrast, YY[78] = DY._envTextures?.lodGenerationScale ?? .8, YY[79] = +uY.toneMappingEnabled, YY[37] = rY.canvas.height
    }

    function NY(YY, rY) {
      return {
        _renderables: YY,
        _opaqueBindings: [],
        _directBindings: [],
        _transparentBindings: [],
        _ob: [],
        _lastVersion: rY
      }
    }

    function BY(YY, rY, DY) {
      YY.clr ??= !0;
      const AY = YY.rt._descriptor,
        IY = YY.depth?._descriptor,
        gY = {
          _colorFormat: AY.format,
          _depthStencilFormat: IY?.dFormat ?? AY.dFormat,
          _depthCompare: AY.depthCompare ?? IY?.depthCompare,
          _sampleCount: AY.samples
        },
        vY = {
          loadOp: "clear",
          storeOp: "store"
        },
        uY = {
          ...NY([], -1),
          name: YY.name,
          _config: YY,
          _ownsTargets: !YY.sharedRt,
          engine: rY,
          LQ: DY,
          _passes: [],
          _renderPassDescriptor: {
            colorAttachments: [vY]
          },
          _colorAttachment: vY,
          _sceneUBO: sY(rY, 368),
          _suData: new RY.e(92),
          _sceneUboCacheKey: [],
          _targetSignature: gY,
          _updateContext: {
            targetWidth: 0,
            targetHeight: 0
          },
          record() {
            if (uY._disposed) throw new Error("RenderTask has been disposed.");
            uY._recordExplicit ? uY._recordExplicit(uY, !0) : HY(uY, !1 !== YY.autoMirror ? DY._renderables.slice() : uY._renderables, !0)
          },
          execute: () => function(YY, rY, DY) {
            if (!1 === YY.enabled) return 0;
            const FY = YY.LQ;
            ! function(YY, rY, DY) {
              const FY = YY.LQ;
              !1 !== YY._config.autoMirror && YY._lastVersion !== FY._renderableVersion && HY(YY, FY._renderables.slice());
              ZY(YY, rY);
              const AY = YY._updateContext,
                IY = YY._config.cam ?? FY.camera;
              DY._colorFormat && (YY._config._skipClusteredLights || FY._clusteredLightUpdater?.(IY, AY.targetWidth, AY.targetHeight), function(YY, rY) {
                const DY = lY(YY, rY),
                  FY = VY(rY.lights) + (YY._lightFoVersion?.(rY) ?? 0),
                  AY = rY._lightListVersion ?? 0;
                FY === DY.Yz && AY === DY._listVersion && rY.lights.length === DY._lightCount || (DY.Yz = FY, DY._listVersion = AY, DY._lightCount = rY.lights.length, SY(DY._scratch, rY.lights), YY._applyLightFoOffset?.(DY._scratch, rY), YY._device.queue.writeBuffer(DY._buffer, 0, DY._scratch)), DY._buffer
              }(rY, FY));
              (function(YY, rY, DY, FY) {
                if (!FY) return;
                const AY = FY.viewport,
                  IY = YY._config.rt,
                  RY = (YY._config.cs ? rY.canvas.width / rY.canvas.height : IY._width / IY._height) * (AY ? AY.width / AY.height : 1),
                  OY = DY.fog,
                  gY = DY.imageProcessing,
                  vY = aY(FY),
                  uY = DY._envTextures,
                  sY = YY._sceneUboCacheKey;
                if (sY[0] === FY && sY[1] === OY && sY[2] === vY && sY[3] === RY && sY[4] === gY.exposure && sY[5] === gY.contrast && sY[6] === uY) return;
                sY[0] = FY, sY[1] = OY, sY[2] = vY, sY[3] = RY, sY[4] = gY.exposure, sY[5] = gY.contrast, sY[6] = uY;
                const iY = YY._suData;
                eY(iY, rY, DY, FY, RY);
                const yY = DY._sceneUboContributors;
                if (yY)
                  for (const aY of yY) aY(iY, DY);
                rY._device.queue.writeBuffer(YY._sceneUBO, 0, iY)
              })(YY, rY, FY, IY), AY.Dk = IY, YY._batchState?._reset(), CY(YY._opaqueBindings, AY), CY(YY._directBindings, AY), CY(YY._transparentBindings, AY), YY._batchState?._flush(rY),
                function(YY, rY) {
                  const DY = YY._transparentBindings;
                  if (DY.length <= 1 || !rY) return;
                  const FY = OY(rY);
                  for (const AY of DY) {
                    const YY = AY.renderable._worldCenter;
                    AY._sortDistance = YY ? YY[0] * FY[2] + YY[1] * FY[6] + YY[2] * FY[10] + FY[14] : 0
                  }
                  DY.sort(cY)
                }(YY, IY)
            }(YY, rY, DY);
            const AY = YY._colorAttachment,
              IY = YY._config;
            IY.rt._colorView && (IY.rt === FY.surface.scRT && (AY.view = IY.rt._colorView), AY.resolveTarget = IY.rst?._colorView ?? void 0, AY.clearValue = IY.clrColor ?? FY.clearColor, AY.loadOp = IY.clr ? "clear" : "load");
            if (YY._executeWithTransmission) return YY._executeWithTransmission(DY._sampleCount);
            const RY = rY._currentEncoder.beginRenderPass(YY._renderPassDescriptor),
              gY = zY(YY, RY);
            return RY.end(), gY
          }(uY, rY, gY),
          dispose() {
            if (uY._disposed) return;
            uY._disposed = !0;
            const rY = uY._pendingMeshes;
            rY && (rY.length = 0);
            for (const YY of uY._renderables) uY._retireRenderable?.(uY.engine, YY);
            uY._passes.length = uY._opaqueBindings.length = uY._directBindings.length = 0, uY._transparentBindings.length = uY._renderables.length = uY._ob.length = 0, uY._ownsTargets && ((0, FY.j)(YY.rt), (0, FY.j)(YY.rst)), YY.depth?._eager || (0, FY.j)(YY.depth);
            const DY = uY._sceneUBO;
            (0, iY.e)(uY.engine, (() => DY.destroy())), uY._batchState?._release(uY.engine), uY._batchState = void 0
          }
        };
      return uY
    }

    function cY(YY, rY) {
      return rY._sortDistance - YY._sortDistance || YY.renderable.order - rY.renderable.order
    }

    function KY(YY, rY) {
      return YY.renderable.order - rY.renderable.order
    }

    function HY(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YY._renderables,
        DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        AY = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        IY = arguments.length > 4 ? arguments[4] : void 0;
      const RY = YY._config,
        OY = RY.rt,
        gY = YY._batchState,
        aY = NY(rY, YY.LQ._renderableVersion);
      if (DY) {
        const rY = (rY, DY) => {
          rY && (DY || YY._ownsTargets || rY._eager) && (0, FY.f)(rY, YY.engine)
        };
        rY(OY), OY._descriptor.samples > 1 && rY(RY.rst), rY(RY.depth, !0)
      }
      const {
        _opaqueBindings: vY,
        _directBindings: uY,
        _transparentBindings: sY
      } = aY;
      try {
        for (const DY of rY) {
          const rY = DY.bind(YY.engine, YY._targetSignature);
          aY._batchState = YY._targetSignature._collectBatches?.(aY._batchState, rY), DY.isTransparent || DY._transmissive ? sY.push(rY) : DY._direct ? uY.push(rY) : vY.push(rY)
        }
        vY.sort(KY), uY.sort(KY), DY && ZY(YY, YY.engine, !1)
      } catch (iY) {
        throw aY._batchState?._release(void 0, IY ?? [gY]), iY
      }
      return DY && (! function(YY, rY) {
        const DY = YY._config,
          FY = YY._colorAttachment;
        FY.view = rY._colorView, YY._renderPassDescriptor.colorAttachments = rY._colorView ? [FY] : [];
        const AY = DY.depth ?? rY,
          IY = AY._depthView;
        let RY;
        if (IY) {
          const YY = AY._descriptor,
            rY = (DY.depth ? AY._eager : !1 === DY.depthClear) ? "load" : "clear";
          RY = {
            view: IY,
            depthClearValue: YY.depthClearValue ?? 0,
            depthLoadOp: rY,
            depthStoreOp: "store"
          }, YY.dFormat?.includes("stencil") && (RY.stencilClearValue = 0, RY.stencilLoadOp = rY, RY.stencilStoreOp = "store")
        }
        YY._renderPassDescriptor.depthStencilAttachment = RY
      }(YY, OY), YY._updateContext.targetWidth = OY._width, YY._updateContext.targetHeight = OY._height), AY && (Object.assign(YY, aY), gY?._release(YY.engine, [aY._batchState])), aY
    }

    function zY(YY, rY) {
      const DY = YY.engine,
        FY = YY._config,
        IY = FY.rt,
        RY = YY.LQ,
        OY = YY._opaqueBindings,
        gY = YY._ob,
        aY = YY._sceneBG;
      if (function(YY, rY, DY, FY) {
          const AY = rY?.viewport;
          if (!AY) return;
          const IY = Math.floor(AY.x * DY),
            RY = Math.floor((1 - AY.y - AY.height) * FY),
            OY = Math.ceil((AY.x + AY.width) * DY) - IY,
            gY = Math.ceil((1 - AY.y) * FY) - RY;
          YY.setViewport(IY, RY, OY, gY, 0, 1), YY.setScissorRect(IY, RY, OY, gY)
        }(rY, FY.cam ?? RY.camera, IY._width, IY._height), rY.setBindGroup(0, aY), YY._lastVis !== AY.d || !gY.length) {
        const rY = IY._descriptor,
          FY = DY._device.createRenderBundleEncoder({
            colorFormats: rY.format ? [rY.format] : [],
            depthStencilFormat: YY._targetSignature._depthStencilFormat,
            sampleCount: rY.samples
          });
        FY.setBindGroup(0, aY), fY(FY, OY, DY), gY[0] = FY.finish(), YY._lastVis = AY.d
      }
      let vY = OY.length;
      return rY.executeBundles(gY), rY.setBindGroup(0, aY), vY += fY(rY, YY._directBindings, DY), vY += fY(rY, YY._transparentBindings, DY), vY
    }

    function ZY(YY, rY) {
      let DY = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const FY = lY(rY, YY.LQ)._buffer;
      if (FY === YY._lightsUBO) return;
      const AY = rY._device.createBindGroup({
        layout: QY(rY),
        entries: [{
          binding: 0,
          resource: {
            buffer: YY._sceneUBO
          }
        }, {
          binding: 1,
          resource: {
            buffer: FY
          }
        }]
      });
      YY._lightsUBO = FY, YY._sceneBG = AY, DY && (YY._ob = [])
    }

    function CY(YY, rY) {
      for (const DY of YY) DY.update?.(rY)
    }

    function fY(YY, rY, DY) {
      let FY = null,
        AY = 0;
      for (const IY of rY) {
        const rY = IY.renderable.mesh;
        rY && !1 === rY.visible || (IY.pipeline !== FY && (YY.setPipeline(IY.pipeline), FY = IY.pipeline), AY += IY.draw(YY, DY))
      }
      return AY
    }

    function jY(YY) {
      const rY = YY._materialSwapQueue;
      if (!rY[0] || YY._runtimeBuilds?.w) return;
      let FY, AY, IY;
      const RY = YY._renderables;
      for (const DY of rY) {
        const rY = DY.material;
        if (!rY) continue;
        const OY = DY._runtimeThinBuild;
        if (OY) {
          AY = OY(YY, DY, AY);
          continue
        }
        const gY = YY._groups.get(rY._buildGroup),
          aY = gY?.r;
        if (!aY) {
          (IY ??= []).push(DY);
          continue
        }
        if (gY._w?.(DY)) {
          (IY ??= []).push([DY, rY]);
          continue
        }
        const vY = YY._meshDisposables.get(DY);
        vY && (YY._meshDisposables.delete(DY), (0, iY.e)(YY.surface.engine, (() => vY.forEach((YY => YY())))));
        const uY = gY.o;
        let sY;
        for (let YY = RY.length; YY--;) RY[YY].mesh === DY && (sY = RY.splice(YY, 1)[0]);
        rY._csmGen = -~rY._csmGen;
        const yY = aY(YY, DY);
        if (uY) {
          const YY = uY.indexOf(sY);
          YY < 0 ? uY.push(yY) : uY[YY] = yY
        }
        FY = RY.push(yY)
      }
      if (FY && (RY.sort(((YY, rY) => YY.order - rY.order)), YY._renderableVersion++, YY._materialEpoch++), rY.length = 0, !IY) return AY;
      const OY = IY;
      return DY.e(355).then((() => DY(60320))).then((rY => {
        let {
          C: DY
        } = rY;
        return DY(YY, OY, AY)
      }), (rY => {
        const DY = YY._runtimeBuilds;
        DY ? DY._x(rY) : console.error(rY)
      }))
    }
    var hY = null;

    function dY(YY, rY) {
      const DY = YY.engine,
        AY = {
          _kind: "LQ",
          surface: YY,
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
            DY.useFloatingOrigin && AY.camera && !AY.camera._useFloatingOrigin && (AY.camera._useFloatingOrigin = !0, AY.camera._viewVer = -1, AY.camera._vpVer = -1);
            const YY = AY.fixedDeltaMs > 0 ? AY.fixedDeltaMs : DY._currentDelta,
              rY = DY._currentEncoder;
            let FY = 0;
            for (const DY of AY._beforeRender) DY(YY);
            AY._materialSwapQueue.length && jY(AY);
            for (const IY of AY._prePasses) FY += IY.execute(rY, DY);
            for (const IY of AY._uniformUpdaters) IY.update(DY);
            AY._drawCallsPre = FY
          },
          _record: () => AY._frameGraph.execute(),
          _resize() {
            AY._frameGraph.build()
          }
        },
        RY = function() {
          const YY = {
            _tasks: [],
            _currentProcessedTask: null,
            build() {
              for (let rY = 0; rY < YY._tasks.length; rY++) IY(YY, YY._tasks[rY]);
              for (const rY of YY._tasks)
                for (const YY of rY._passes) YY._initialize()
            },
            execute() {
              let rY = 0;
              for (const DY of YY._tasks)
                if (!1 !== DY.executionEnabled)
                  if (DY.execute) rY += DY.execute();
                  else
                    for (const YY of DY._passes) rY += YY._execute();
              return rY
            },
            dispose() {
              for (const rY of YY._tasks) rY.dispose();
              YY._tasks.length = 0, YY._currentProcessedTask = null
            }
          };
          return YY
        }();
      if (AY._frameGraph = RY, !1 !== rY?.defaultRenderTask) {
        const rY = YY.msaaSamples > 1,
          IY = rY ? (0, FY.b)({
            lbl: "scene-color",
            format: YY.format,
            dFormat: "depth24plus-stencil8",
            samples: YY.msaaSamples,
            size: YY
          }) : YY.scRT,
          OY = rY ? void 0 : (0, FY.b)({
            lbl: "scene-depth",
            dFormat: "depth24plus-stencil8",
            samples: 1,
            size: YY
          });
        ! function(YY, rY) {
          YY._tasks.push(rY)
        }(RY, BY({
          name: "LQ",
          rt: IY,
          rst: rY ? YY.scRT : void 0,
          depth: OY
        }, DY, AY))
      }
      return AY._disposables.push((() => RY.dispose())), AY
    }
    async function JY(YY) {
      const rY = YY;
      for (rY._built || (rY._materialSwapQueue.length = 0); rY._deferredBuilders.length;) {
        const YY = rY._deferredBuilders.splice(0);
        await Promise.all(YY.map((YY => YY())))
      }
      await jY(rY), hY?.get(rY)?.() || (rY._runtimeBuilds?._e(), rY._renderableVersion++, rY._built = !0), await (rY._rebuildHook?.(rY))
    }
    var MY = null;
    async function wY(YY) {
      const rY = YY,
        FY = rY.surface;
      (0, AY.h)(FY, rY) || (await JY(YY), rY._renderables.sort(bY), await Promise.all(rY._frameGraph._tasks.map((YY => YY._preload?.()))), MY && await MY(rY), rY._frameGraph.build(), FY._renderingContexts[0] && (await DY.e(353).then((() => DY(60310)))).configureSwapchainOverlayScene(FY, rY), hY?.get(rY)?.() || (0, AY.i)(FY, rY))
    }
    var bY = (YY, rY) => YY.order - rY.order
  },
  40764: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => aY,
      g: () => vY
    });
    var FY = DY(40712),
      AY = DY(40717),
      IY = DY(40720),
      RY = DY(40728),
      OY = DY(40737),
      gY = DY(40744);

    function aY(YY, rY, DY) {
      let OY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      (rY < 1 || DY < 1) && (0, FY.c)(676, rY, DY);
      const aY = YY._device,
        vY = OY.mipMaps ?? !1,
        uY = OY.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        sY = vY ? (0, gY.c)(rY, DY) : 1,
        iY = aY.createTexture({
          size: {
            width: rY,
            height: DY
          },
          format: uY,
          mipLevelCount: sY,
          usage: AY.k.TEXTURE_BINDING | AY.k.COPY_DST | AY.k.RENDER_ATTACHMENT
        }),
        yY = {
          addressModeU: OY.addressModeU ?? "clamp-to-edge",
          addressModeV: OY.addressModeV ?? "clamp-to-edge",
          minFilter: OY.minFilter ?? "linear",
          magFilter: OY.magFilter ?? "linear",
          mipmapFilter: vY ? "linear" : "nearest"
        },
        QY = (0, RY.e)(YY, yY),
        oY = {
          texture: iY,
          view: iY.createView(),
          sampler: QY,
          width: rY,
          height: DY
        };
      return (0, IY.e)(oY), YY._dlr && YY._dlr.t(oY, {
        kind: "dynamic",
        width: rY,
        height: DY,
        format: uY,
        levels: sY,
        samplerDesc: yY,
        source: null,
        flipY: !0,
        premultipliedAlpha: !1
      }), oY
    }

    function vY(YY, rY, DY) {
      let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const AY = FY.invertY ?? !0,
        IY = FY.premultiplyAlpha ?? !1;
      YY._device.queue.copyExternalImageToTexture({
        source: DY,
        flipY: AY
      }, {
        texture: rY.texture,
        premultipliedAlpha: IY
      }, [rY.width, rY.height]);
      const RY = rY._recoverySource;
      RY && "dynamic" === RY.kind && (RY.source = DY, RY.flipY = AY, RY.premultipliedAlpha = IY), rY.texture.mipLevelCount > 1 && (0, OY.generateMipmaps)(YY, rY.texture)
    }
  },
  40758: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => gY
    });
    var FY = DY(40712),
      AY = DY(40717),
      IY = DY(40720),
      RY = DY(40728),
      OY = DY(40744);
    async function gY(YY, rY) {
      let gY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const [aY, vY] = function(YY) {
        const rY = YY,
          DY = [
            [rY.displayWidth, rY.displayHeight],
            [rY.videoWidth, rY.videoHeight],
            [rY.naturalWidth, rY.naturalHeight],
            [rY.width, rY.height]
          ];
        for (const [FY, AY] of DY)
          if (void 0 !== FY && void 0 !== AY && Number.isInteger(FY) && Number.isInteger(AY) && FY > 0 && AY > 0) return [FY, AY];
        throw new TypeError("createTexture2DFromExternalImage: source has no supported positive intrinsic dimensions")
      }(rY), [uY, sY] = function(YY, rY, DY) {
        if (void 0 === DY) return [YY, rY];
        if (!Number.isInteger(DY) || DY < 1) throw new TypeError(`createTexture2DFromExternalImage: maxDimension must be a positive integer (got ${DY})`);
        if (Math.max(YY, rY) <= DY) return [YY, rY];
        const FY = DY / Math.max(YY, rY);
        return YY >= rY ? [DY, Math.max(1, Math.round(rY * FY))] : [Math.max(1, Math.round(YY * FY)), DY]
      }(aY, vY, gY.maxDimension), iY = gY.mipMaps ?? !0, yY = gY.premultiplyAlpha ?? !1;
      let QY = rY,
        oY = null;
      const WY = {
        texture: null
      };
      try {
        uY === aY && sY === vY || (oY = await createImageBitmap(rY, {
          resizeWidth: uY,
          resizeHeight: sY,
          resizeQuality: "high",
          premultiplyAlpha: yY ? "premultiply" : "none",
          colorSpaceConversion: "none"
        }), QY = oY);
        const EY = YY._device,
          mY = gY.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
          VY = iY ? (0, OY.c)(uY, sY) : 1,
          SY = VY > 1 ? (await Promise.resolve().then((() => DY(40737)))).generateMipmaps : null,
          lY = {
            addressModeU: gY.addressModeU ?? "repeat",
            addressModeV: gY.addressModeV ?? "repeat",
            minFilter: gY.minFilter ?? "linear",
            magFilter: gY.magFilter ?? "linear",
            mipmapFilter: iY ? "linear" : "nearest"
          };
        lY.maxAnisotropy = "linear" === lY.minFilter && "linear" === lY.magFilter && "linear" === lY.mipmapFilter ? 4 : 1;
        const TY = gY.invertY ?? !0,
          eY = async rY => {
            let DY;
            EY.pushErrorScope("validation"), EY.pushErrorScope("out-of-memory");
            let IY = null;
            try {
              const DY = WY.texture = EY.createTexture({
                size: {
                  width: uY,
                  height: sY
                },
                format: mY,
                mipLevelCount: VY,
                usage: AY.k.TEXTURE_BINDING | AY.k.COPY_DST | AY.k.RENDER_ATTACHMENT
              });
              EY.queue.copyExternalImageToTexture({
                source: rY,
                flipY: TY
              }, {
                texture: DY,
                premultipliedAlpha: yY
              }, {
                width: uY,
                height: sY
              }), SY && SY(YY, DY), IY = (0, RY.e)(YY, lY)
            } catch (iY) {
              DY = iY
            }
            const [OY, gY] = await Promise.all([EY.popErrorScope(), EY.popErrorScope()]);
            if (DY) throw DY;
            const aY = gY ?? OY;
            if (aY) throw new Error(`createTexture2DFromExternalImage: GPU upload failed: ${aY.message}`, {
              cause: aY
            });
            const vY = WY.texture;
            return vY && IY || (0, FY.c)(677), {
              texture: vY,
              view: vY.createView(),
              sampler: IY,
              width: uY,
              height: sY
            }
          }, NY = await (YY._dlr?.x(QY, uY, sY, mY, VY, lY, TY, yY, eY)) ?? await eY(QY);
        return (0, IY.e)(NY), NY
      } catch (EY) {
        throw WY.texture?.destroy(), EY
      } finally {
        oY?.close()
      }
    }
  },
  40737: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      generateMipmaps: () => iY,
      recordMipmaps: () => yY
    });
    var FY = DY(40717),
      AY = DY(40728),
      IY = {
        magFilter: "linear",
        minFilter: "linear"
      };
    var RY = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*vec2f(.5,-.5)+.5);}@fragment fn fs(v:V)->@location(0)vec4f{return textureSample(t,s,v.u);}",
      OY = null,
      gY = null,
      aY = null,
      vY = null,
      uY = null;

    function sY(YY) {
      const rY = YY._device;
      rY !== uY && (OY?.clear(), OY = null, gY = null, aY = null, vY = null, uY = null, uY = rY), gY ??= rY.createShaderModule({
        code: RY
      }), aY ??= function(YY) {
        return (0, AY.e)(YY, IY)
      }(YY), vY ??= rY.createBindGroupLayout({
        entries: [{
          binding: 0,
          visibility: FY.g.FRAGMENT,
          texture: {
            sampleType: "float"
          }
        }, {
          binding: 1,
          visibility: FY.g.FRAGMENT,
          sampler: {}
        }]
      })
    }

    function iY(YY, rY, DY) {
      const FY = YY._device,
        AY = FY.createCommandEncoder();
      yY(YY, rY, AY, DY), FY.queue.submit([AY.finish()])
    }

    function yY(YY, rY, DY, FY) {
      if (rY.mipLevelCount <= 1) return;
      const AY = YY._device,
        IY = function(YY, rY) {
          const DY = YY._device;
          sY(YY), OY ??= new Map;
          let FY = OY.get(rY);
          return FY || (FY = DY.createRenderPipeline({
            layout: DY.createPipelineLayout({
              bindGroupLayouts: [vY]
            }),
            vertex: {
              module: gY,
              entryPoint: "vs"
            },
            fragment: {
              module: gY,
              entryPoint: "fs",
              targets: [{
                format: rY
              }]
            },
            primitive: {
              topology: "triangle-list"
            }
          }), OY.set(rY, FY)), FY
        }(YY, rY.format),
        RY = null != FY ? {
          dimension: "2d",
          baseArrayLayer: FY,
          arrayLayerCount: 1
        } : {};
      for (let OY = 1; OY < rY.mipLevelCount; OY++) {
        const YY = rY.createView({
            baseMipLevel: OY - 1,
            mipLevelCount: 1,
            ...RY
          }),
          FY = rY.createView({
            baseMipLevel: OY,
            mipLevelCount: 1,
            ...RY
          }),
          gY = AY.createBindGroup({
            layout: vY,
            entries: [{
              binding: 0,
              resource: YY
            }, {
              binding: 1,
              resource: aY
            }]
          }),
          uY = DY.beginRenderPass({
            colorAttachments: [{
              view: FY,
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
        uY.setPipeline(IY), uY.setBindGroup(0, gY), uY.draw(3), uY.end()
      }
    }
  },
  40744: (YY, rY, DY) => {
    function FY(YY, rY) {
      return Math.floor(Math.log2(Math.max(YY, rY))) + 1
    }
    DY.d(rY, {
      c: () => FY
    })
  },
  40710: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => aY,
      g: () => vY
    });
    var FY = DY(40712),
      AY = DY(40717),
      IY = DY(40720),
      RY = DY(40728),
      OY = DY(40737),
      gY = DY(40744);

    function aY(YY, rY, DY, OY) {
      let aY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (rY < 1 || DY < 1 || OY < 1) && (0, FY.c)(722, rY, DY, OY);
      const vY = YY._device,
        uY = aY.mipMaps ?? !0,
        sY = aY.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        iY = vY.createTexture({
          size: {
            width: rY,
            height: DY,
            depthOrArrayLayers: OY
          },
          dimension: "2d",
          format: sY,
          mipLevelCount: uY ? (0, gY.c)(rY, DY) : 1,
          usage: AY.k.TEXTURE_BINDING | AY.k.COPY_DST | AY.k.RENDER_ATTACHMENT
        }),
        yY = (0, RY.e)(YY, {
          addressModeU: aY.addressModeU ?? "repeat",
          addressModeV: aY.addressModeV ?? "repeat",
          minFilter: aY.minFilter ?? "linear",
          magFilter: aY.magFilter ?? "linear",
          mipmapFilter: uY ? "linear" : "nearest"
        }),
        QY = {
          texture: iY,
          view: iY.createView({
            dimension: "2d-array"
          }),
          sampler: yY,
          width: rY,
          height: DY,
          layers: OY
        };
      return (0, IY.e)(QY), QY
    }

    function vY(YY, rY, DY, AY) {
      let IY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (DY < 0 || DY >= rY.layers || (0 | DY) !== DY) && (0, FY.c)(723, rY.layers, DY);
      const RY = IY.invertY ?? !0,
        gY = IY.premultiplyAlpha ?? !1;
      YY._device.queue.copyExternalImageToTexture({
        source: AY,
        flipY: RY
      }, {
        texture: rY.texture,
        origin: [0, 0, DY],
        premultipliedAlpha: gY
      }, [rY.width, rY.height, 1]), rY.texture.mipLevelCount > 1 && (0, OY.generateMipmaps)(YY, rY.texture, DY)
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);