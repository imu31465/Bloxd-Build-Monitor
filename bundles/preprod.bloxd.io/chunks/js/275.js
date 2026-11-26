export const id = 275;
export const ids = [275];
export const modules = {
  41237: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => FU,
      e: () => aU,
      g: () => DU,
      h: () => oU
    });
    var cU = zU(41032),
      yU = zU(39493),
      QU = zU(41177),
      AU = zU(41085);
    class FU {
      get oR() {
        return this._isDisposed
      }
      constructor(UU, XU, zU) {
        let yU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          QU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          FU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          oU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          DU = arguments.length > 7 ? arguments[7] : void 0,
          EU = arguments.length > 8 ? arguments[8] : void 0;
        this._isAlreadyOwned = !1, this._isDisposed = !1, (0, AU.c)(), UU && UU.nS ? this._engine = UU.nS().qp() : this._engine = UU, this._updatable = zU, this._instanced = FU, this._divisor = DU || 1, this._label = EU, XU instanceof cU.c ? (this._data = null, this._buffer = XU) : (this._data = XU, this._buffer = null), this.byteStride = oU ? yU : yU * Float32Array.BYTES_PER_ELEMENT, QU || this.create()
      }
      createVertexBuffer(UU, XU, zU, cU, yU) {
        let QU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          AU = arguments.length > 6 ? arguments[6] : void 0;
        const FU = QU ? XU : XU * Float32Array.BYTES_PER_ELEMENT,
          DU = cU ? QU ? cU : cU * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
        return new oU(this._engine, this, UU, this._updatable, !0, DU, void 0 === yU ? this._instanced : yU, FU, zU, void 0, void 0, !0, this._divisor || AU)
      }
      isUpdatable() {
        return this._updatable
      }
      getData() {
        return this._data
      }
      getBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / Float32Array.BYTES_PER_ELEMENT
      }
      create() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        !UU && this._buffer || (UU = UU || this._data, UU && (this._buffer ? this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, UU), this._data = UU) : this._updatable ? (this._buffer = this._engine.createDynamicVertexBuffer(UU, this._label), this._data = UU) : this._buffer = this._engine.createVertexBuffer(UU, void 0, this._label)))
      }
      _rebuild() {
        if (this._data) this._buffer = null, this.create(this._data);
        else {
          if (!this._buffer) return;
          if (this._buffer.xY > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.xY, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.xY, void 0, this._label));
          yU.b.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
        }
      }
      update(UU) {
        this.create(UU)
      }
      updateDirectly(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, UU, cU ? XU : XU * Float32Array.BYTES_PER_ELEMENT, zU ? zU * this.byteStride : void 0), this._data = 0 === XU && void 0 === zU ? UU : null)
      }
      _increaseReferences() {
        this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
      }
      dispose() {
        this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
      }
    }
    class oU {
      get oR() {
        return this._isDisposed
      }
      get instanceDivisor() {
        return this._instanceDivisor
      }
      set instanceDivisor(UU) {
        const XU = 0 != UU;
        this._instanceDivisor = UU, XU !== this._instanced && (this._instanced = XU, this._computeHashCode())
      }
      get _maxVerticesCount() {
        const UU = this.getData();
        return UU ? Array.isArray(UU) ? UU.length / (this.byteStride / 4) - this.byteOffset / 4 : (UU.byteLength - this.byteOffset) / this.byteStride : 0
      }
      constructor(UU, XU, zU, cU, yU, AU, YU, NU, IU, pU) {
        let aU, tU = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          gU = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
          kU = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
          GU = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
        if (this._isDisposed = !1, this.engine = UU, "object" === typeof cU && null !== cU ? (aU = cU.updatable ?? !1, yU = cU.postponeInternalCreation, AU = cU.stride, YU = cU.instanced, NU = cU.offset, IU = cU.size, pU = cU.type, tU = cU.normalized ?? !1, gU = cU.useBytes ?? !1, kU = cU.divisor ?? 1, GU = cU.takeBufferOwnership ?? !1, this._label = cU.label) : aU = !!cU, XU instanceof FU ? (this._buffer = XU, this._ownsBuffer = GU) : (this._buffer = new FU(UU, XU, aU, AU, yU, YU, gU, kU, this._label), this._ownsBuffer = !0), this.uniqueId = oU._Counter++, this._kind = zU, void 0 === pU) {
          const UU = this.getData();
          this.type = UU ? EU(UU) : oU.FLOAT
        } else this.type = pU;
        const BU = (0, QU.r)(this.type);
        gU ? (this._size = IU || (AU ? AU / BU : DU(zU)), this.byteStride = AU || this._buffer.byteStride || this._size * BU, this.byteOffset = NU || 0) : (this._size = IU || AU || DU(zU), this.byteStride = AU ? AU * BU : this._buffer.byteStride || this._size * BU, this.byteOffset = (NU || 0) * BU), this.normalized = tU, this._instanced = void 0 !== YU && YU, this._instanceDivisor = YU ? kU : 0, this._alignBuffer(), this._computeHashCode()
      }
      static _GetTypeHashIndex(UU) {
        switch (UU) {
          case oU.BYTE:
            return 0;
          case oU.UNSIGNED_BYTE:
            return 1;
          case oU.SHORT:
            return 2;
          case oU.UNSIGNED_SHORT:
            return 3;
          case oU.INT:
            return 4;
          case oU.UNSIGNED_INT:
            return 5;
          case oU.FLOAT:
            return 6;
          case oU.HALF_FLOAT:
            return 7;
          default:
            throw new Error(`Invalid vertex buffer type '${UU}'`)
        }
      }
      _computeHashCode() {
        this.hashCode = (oU._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
      }
      _rebuild() {
        this._buffer?._rebuild()
      }
      getKind() {
        return this._kind
      }
      isUpdatable() {
        return this._buffer.isUpdatable()
      }
      getData() {
        return this._buffer.getData()
      }
      getFloatData(UU, XU) {
        const zU = this.getData();
        return zU ? (0, QU.n)(zU, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, UU, XU) : null
      }
      getBuffer() {
        return this._buffer.getBuffer()
      }
      getWrapperBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / (0, QU.r)(this.type)
      }
      ycU() {
        return this.byteOffset / (0, QU.r)(this.type)
      }
      getSize() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, QU.r)(this.type) : this._size
      }
      getIsInstanced() {
        return this._instanced
      }
      getInstanceDivisor() {
        return this._instanceDivisor
      }
      create(UU) {
        this._buffer.create(UU), this._alignBuffer()
      }
      update(UU) {
        this._buffer.update(UU), this._alignBuffer()
      }
      updateDirectly(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._buffer.updateDirectly(UU, XU, void 0, zU), this._alignBuffer()
      }
      dispose() {
        this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
      }
      forEach(UU, XU) {
        (0, QU.j)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, UU, this.normalized, ((UU, zU) => {
          for (let cU = 0; cU < this._size; cU++) XU(UU[cU], zU + cU)
        }))
      }
      _alignBuffer() {}
    }

    function DU(UU) {
      switch (UU) {
        case oU.UVKind:
        case oU.UV2Kind:
        case oU.UV3Kind:
        case oU.UV4Kind:
        case oU.UV5Kind:
        case oU.UV6Kind:
          return 2;
        case oU.NormalKind:
        case oU.PositionKind:
          return 3;
        case oU.ColorKind:
        case oU.ColorInstanceKind:
        case oU.MatricesIndicesKind:
        case oU.MatricesIndicesExtraKind:
        case oU.MatricesWeightsKind:
        case oU.MatricesWeightsExtraKind:
        case oU.TangentKind:
          return 4;
        default:
          throw new Error("Invalid kind '" + UU + "'")
      }
    }

    function EU(UU) {
      return UU instanceof Int8Array ? oU.BYTE : UU instanceof Uint8Array ? oU.UNSIGNED_BYTE : UU instanceof Int16Array ? oU.SHORT : UU instanceof Uint16Array ? oU.UNSIGNED_SHORT : UU instanceof Int32Array ? oU.INT : UU instanceof Uint32Array ? oU.UNSIGNED_INT : oU.FLOAT
    }

    function YU(UU) {
      return (0, QU.r)(UU)
    }

    function NU(UU, XU, zU, cU, yU, AU, FU, oU) {
      (0, QU.j)(UU, XU, zU, cU, yU, AU, FU, ((UU, XU) => {
        for (let zU = 0; zU < cU; zU++) oU(UU[zU], XU + zU)
      }))
    }

    function IU(UU, XU, zU, cU, yU, AU, FU, oU) {
      return (0, QU.n)(UU, XU, zU, cU, yU, AU, FU, oU)
    }
    oU._Counter = 0, oU.BYTE = 5120, oU.UNSIGNED_BYTE = 5121, oU.SHORT = 5122, oU.UNSIGNED_SHORT = 5123, oU.INT = 5124, oU.UNSIGNED_INT = 5125, oU.FLOAT = 5126, oU.HALF_FLOAT = 5131, oU.PositionKind = "position", oU.NormalKind = "normal", oU.TangentKind = "tangent", oU.UVKind = "uv", oU.UV2Kind = "uv2", oU.UV3Kind = "uv3", oU.UV4Kind = "uv4", oU.UV5Kind = "uv5", oU.UV6Kind = "uv6", oU.ColorKind = "color", oU.ColorInstanceKind = "instanceColor", oU.MatricesIndicesKind = "matricesIndices", oU.MatricesWeightsKind = "matricesWeights", oU.MatricesIndicesExtraKind = "matricesIndicesExtra", oU.MatricesWeightsExtraKind = "matricesWeightsExtra";
    let pU = !1;

    function aU() {
      pU || (pU = !0, oU.DeduceStride = DU, oU.GetDataType = EU, oU.GetTypeByteLength = YU, oU.ForEach = NU, oU.GetFloatData = IU)
    }
  },
  41032: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => cU
    });
    class cU {
      get underlyingResource() {
        return null
      }
      constructor() {
        this.references = 0, this.xY = 0, this.is32Bits = !1, this.uniqueId = cU._Counter++
      }
    }
    cU._Counter = 0
  },
  41235: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => QU
    });
    var cU = zU(37819),
      yU = zU(41237);
    class QU {
      constructor() {
        this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this.aimTransform = null, this.gripTransform = null
      }
      getNormal() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!this.pickedMesh || XU && !this.pickedMesh.isVerticesDataPresent(yU.h.NormalKind)) return null;
        let zU, QU = this.pickedMesh.yyU();
        0 === QU?.length && (QU = null);
        const AU = cU.l.Sp[0],
          FU = cU.l.Sp[1],
          oU = cU.l.Sp[2];
        if (XU) {
          const UU = this.pickedMesh.getVerticesData(yU.h.NormalKind);
          let XU = QU ? cU.q.FromArrayToRef(UU, 3 * QU[3 * this.faceId], AU) : AU.sUU(UU[3 * this.faceId * 3], UU[3 * this.faceId * 3 + 1], UU[3 * this.faceId * 3 + 2]),
            DU = QU ? cU.q.FromArrayToRef(UU, 3 * QU[3 * this.faceId + 1], FU) : FU.sUU(UU[3 * (3 * this.faceId + 1)], UU[3 * (3 * this.faceId + 1) + 1], UU[3 * (3 * this.faceId + 1) + 2]),
            EU = QU ? cU.q.FromArrayToRef(UU, 3 * QU[3 * this.faceId + 2], oU) : oU.sUU(UU[3 * (3 * this.faceId + 2)], UU[3 * (3 * this.faceId + 2) + 1], UU[3 * (3 * this.faceId + 2) + 2]);
          XU = XU.scale(this.bu), DU = DU.scale(this.bv), EU = EU.scale(1 - this.bu - this.bv), zU = new cU.q(XU.x + DU.x + EU.x, XU.y + DU.y + EU.y, XU.z + DU.z + EU.z)
        } else {
          const UU = this.pickedMesh.getVerticesData(yU.h.PositionKind),
            XU = QU ? cU.q.FromArrayToRef(UU, 3 * QU[3 * this.faceId], AU) : AU.sUU(UU[3 * this.faceId * 3], UU[3 * this.faceId * 3 + 1], UU[3 * this.faceId * 3 + 2]),
            DU = QU ? cU.q.FromArrayToRef(UU, 3 * QU[3 * this.faceId + 1], FU) : FU.sUU(UU[3 * (3 * this.faceId + 1)], UU[3 * (3 * this.faceId + 1) + 1], UU[3 * (3 * this.faceId + 1) + 2]),
            EU = QU ? cU.q.FromArrayToRef(UU, 3 * QU[3 * this.faceId + 2], oU) : oU.sUU(UU[3 * (3 * this.faceId + 2)], UU[3 * (3 * this.faceId + 2) + 1], UU[3 * (3 * this.faceId + 2) + 2]),
            YU = XU.subtract(DU),
            NU = EU.subtract(DU);
          zU = cU.q.Cross(YU, NU)
        }
        const DU = (UU, XU) => {
          if (-1 !== this.thinInstanceIndex) {
            const zU = UU._thinInstanceDataStorage.matrixData,
              yU = this.thinInstanceIndex << 4;
            if (zU && zU.length > yU) {
              const UU = cU.l.Matrix[0];
              cU.e.FromArrayToRef(zU, yU, UU), cU.q.TransformNormalToRef(XU, UU, XU)
            }
          }
          let zU = UU.getWorldMatrix();
          UU.nonUniformScaling && (cU.l.Matrix[0].YL(zU), zU = cU.l.Matrix[0], zU.setTranslationFromFloats(0, 0, 0), zU.invert(), zU.transposeToRef(cU.l.Matrix[1]), zU = cU.l.Matrix[1]), cU.q.TransformNormalToRef(XU, zU, XU)
        };
        if (UU && DU(this.pickedMesh, zU), this.ray) {
          const XU = cU.l.Sp[0].YL(zU);
          UU || DU(this.pickedMesh, XU), cU.q.Dot(XU, this.ray.direction) > 0 && zU.negateInPlace()
        }
        return zU.normalize(), zU
      }
      getTextureCoordinates() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yU.h.UVKind;
        if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(UU)) return null;
        const XU = this.pickedMesh.yyU();
        if (!XU) return null;
        const zU = this.pickedMesh.getVerticesData(UU);
        if (!zU) return null;
        let QU = cU.m.FromArray(zU, 2 * XU[3 * this.faceId]),
          AU = cU.m.FromArray(zU, 2 * XU[3 * this.faceId + 1]),
          FU = cU.m.FromArray(zU, 2 * XU[3 * this.faceId + 2]);
        return QU = QU.scale(this.bu), AU = AU.scale(this.bv), FU = FU.scale(1 - this.bu - this.bv), new cU.m(QU.x + AU.x + FU.x, QU.y + AU.y + FU.y)
      }
    }
  },
  41085: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => QU
    });
    var cU = zU(40948);
    let yU = !1;

    function QU() {
      yU || (yU = !0, cU.ThinEngine.prototype.updateDynamicIndexBuffer = function(UU, XU) {
        let zU;
        this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(UU), zU = UU.is32Bits ? XU instanceof Uint32Array ? XU : new Uint32Array(XU) : XU instanceof Uint16Array ? XU : new Uint16Array(XU), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, zU, this._gl.DYNAMIC_DRAW), this._resetIndexBufferBinding()
      }, cU.ThinEngine.prototype.updateDynamicVertexBuffer = function(UU, XU, zU, cU) {
        this.bindArrayBuffer(UU), void 0 === zU && (zU = 0);
        const yU = XU.byteLength || XU.length;
        void 0 === cU || cU >= yU && 0 === zU ? XU instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, zU, new Float32Array(XU)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, zU, XU) : XU instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, zU, new Float32Array(XU).subarray(0, cU / 4)) : (XU = ArrayBuffer.isView(XU) ? new Uint8Array(XU.buffer, XU.byteOffset, cU) : new Uint8Array(XU, 0, cU), this._gl.bufferSubData(this._gl.ARRAY_BUFFER, zU, XU)), this._resetVertexBufferBinding()
      })
    }
  },
  41042: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => cU
    });
    class cU {
      get underlyingResource() {
        return this._webGLTexture
      }
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          XU = arguments.length > 1 ? arguments[1] : void 0;
        if (this._MSAARenderBuffers = null, this._context = XU, !UU && (UU = XU.createTexture(), !UU)) throw new Error("Unable to create webGL texture");
        this.set(UU)
      }
      setUsage() {}
      set(UU) {
        this._webGLTexture = UU
      }
      reset() {
        this._webGLTexture = null, this._MSAARenderBuffers = null
      }
      addMSAARenderBuffer(UU) {
        this._MSAARenderBuffers || (this._MSAARenderBuffers = []), this._MSAARenderBuffers.push(UU)
      }
      releaseMSAARenderBuffers() {
        if (this._MSAARenderBuffers) {
          for (const UU of this._MSAARenderBuffers) this._context.deleteRenderbuffer(UU);
          this._MSAARenderBuffers = null
        }
      }
      getMSAARenderBuffer() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._MSAARenderBuffers?.[UU] ?? null
      }
      release() {
        this.releaseMSAARenderBuffers(), this._webGLTexture && this._context.deleteTexture(this._webGLTexture), this.reset()
      }
    }
  },
  41003: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => kU
    });
    var cU = zU(37846),
      yU = zU(40954),
      QU = zU(37841),
      AU = zU(39493),
      FU = zU(37834),
      oU = zU(41010);
    class DU {
      constructor() {
        let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, UU && this.reset()
      }
      get isDirty() {
        return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty || this._isZOffsetDirty || this._isFrontFaceDirty
      }
      get zOffset() {
        return this._zOffset
      }
      set zOffset(UU) {
        this._zOffset !== UU && (this._zOffset = UU, this._isZOffsetDirty = !0)
      }
      get zOffsetUnits() {
        return this._zOffsetUnits
      }
      set zOffsetUnits(UU) {
        this._zOffsetUnits !== UU && (this._zOffsetUnits = UU, this._isZOffsetDirty = !0)
      }
      get cullFace() {
        return this._cullFace
      }
      set cullFace(UU) {
        this._cullFace !== UU && (this._cullFace = UU, this._isCullFaceDirty = !0)
      }
      get cull() {
        return this._cull
      }
      set cull(UU) {
        this._cull !== UU && (this._cull = UU, this._isCullDirty = !0)
      }
      get depthFunc() {
        return this._depthFunc
      }
      set depthFunc(UU) {
        this._depthFunc !== UU && (this._depthFunc = UU, this._isDepthFuncDirty = !0)
      }
      get depthMask() {
        return this._depthMask
      }
      set depthMask(UU) {
        this._depthMask !== UU && (this._depthMask = UU, this._isDepthMaskDirty = !0)
      }
      get depthTest() {
        return this._depthTest
      }
      set depthTest(UU) {
        this._depthTest !== UU && (this._depthTest = UU, this._isDepthTestDirty = !0)
      }
      get frontFace() {
        return this._frontFace
      }
      set frontFace(UU) {
        this._frontFace !== UU && (this._frontFace = UU, this._isFrontFaceDirty = !0)
      }
      reset() {
        this._depthMask = !0, this._depthTest = !0, this._depthFunc = null, this._cullFace = null, this._cull = null, this._zOffset = 0, this._zOffsetUnits = 0, this._frontFace = null, this._isDepthTestDirty = !0, this._isDepthMaskDirty = !0, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !0, this._isFrontFaceDirty = !1
      }
      apply(UU) {
        this.isDirty && (this._isCullDirty && (this.cull ? UU.enable(UU.CULL_FACE) : UU.disable(UU.CULL_FACE), this._isCullDirty = !1), this._isCullFaceDirty && (UU.cullFace(this.cullFace), this._isCullFaceDirty = !1), this._isDepthMaskDirty && (UU.depthMask(this.depthMask), this._isDepthMaskDirty = !1), this._isDepthTestDirty && (this.depthTest ? UU.enable(UU.DEPTH_TEST) : UU.disable(UU.DEPTH_TEST), this._isDepthTestDirty = !1), this._isDepthFuncDirty && (UU.depthFunc(this.depthFunc), this._isDepthFuncDirty = !1), this._isZOffsetDirty && (this.zOffset || this.zOffsetUnits ? (UU.enable(UU.POLYGON_OFFSET_FILL), UU.polygonOffset(this.zOffset, this.zOffsetUnits)) : UU.disable(UU.POLYGON_OFFSET_FILL), this._isZOffsetDirty = !1), this._isFrontFaceDirty && (UU.frontFace(this.frontFace), this._isFrontFaceDirty = !1))
      }
    }
    class EU {
      get isDirty() {
        return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty
      }
      get func() {
        return this._func
      }
      set func(UU) {
        this._func !== UU && (this._func = UU, this._isStencilFuncDirty = !0)
      }
      get backFunc() {
        return this._func
      }
      set backFunc(UU) {
        this._backFunc !== UU && (this._backFunc = UU, this._isStencilFuncDirty = !0)
      }
      get funcRef() {
        return this._funcRef
      }
      set funcRef(UU) {
        this._funcRef !== UU && (this._funcRef = UU, this._isStencilFuncDirty = !0)
      }
      get funcMask() {
        return this._funcMask
      }
      set funcMask(UU) {
        this._funcMask !== UU && (this._funcMask = UU, this._isStencilFuncDirty = !0)
      }
      get opStencilFail() {
        return this._opStencilFail
      }
      set opStencilFail(UU) {
        this._opStencilFail !== UU && (this._opStencilFail = UU, this._isStencilOpDirty = !0)
      }
      get opDepthFail() {
        return this._opDepthFail
      }
      set opDepthFail(UU) {
        this._opDepthFail !== UU && (this._opDepthFail = UU, this._isStencilOpDirty = !0)
      }
      get opStencilDepthPass() {
        return this._opStencilDepthPass
      }
      set opStencilDepthPass(UU) {
        this._opStencilDepthPass !== UU && (this._opStencilDepthPass = UU, this._isStencilOpDirty = !0)
      }
      get backOpStencilFail() {
        return this._backOpStencilFail
      }
      set backOpStencilFail(UU) {
        this._backOpStencilFail !== UU && (this._backOpStencilFail = UU, this._isStencilOpDirty = !0)
      }
      get backOpDepthFail() {
        return this._backOpDepthFail
      }
      set backOpDepthFail(UU) {
        this._backOpDepthFail !== UU && (this._backOpDepthFail = UU, this._isStencilOpDirty = !0)
      }
      get backOpStencilDepthPass() {
        return this._backOpStencilDepthPass
      }
      set backOpStencilDepthPass(UU) {
        this._backOpStencilDepthPass !== UU && (this._backOpStencilDepthPass = UU, this._isStencilOpDirty = !0)
      }
      get mask() {
        return this._mask
      }
      set mask(UU) {
        this._mask !== UU && (this._mask = UU, this._isStencilMaskDirty = !0)
      }
      get enabled() {
        return this._enabled
      }
      set enabled(UU) {
        this._enabled !== UU && (this._enabled = UU, this._isStencilTestDirty = !0)
      }
      constructor() {
        let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isStencilTestDirty = !1, this._isStencilMaskDirty = !1, this._isStencilFuncDirty = !1, this._isStencilOpDirty = !1, this.useStencilGlobalOnly = !1, UU && this.reset()
      }
      reset() {
        this.stencilMaterial = void 0, this.stencilGlobal?.reset(), this._isStencilTestDirty = !0, this._isStencilMaskDirty = !0, this._isStencilFuncDirty = !0, this._isStencilOpDirty = !0
      }
      apply(UU) {
        if (!UU) return;
        const XU = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
        this.enabled = XU ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = XU ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = XU ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = XU ? this.stencilMaterial.funcRef : this.stencilGlobal.funcRef, this.funcMask = XU ? this.stencilMaterial.funcMask : this.stencilGlobal.funcMask, this.opStencilFail = XU ? this.stencilMaterial.opStencilFail : this.stencilGlobal.opStencilFail, this.opDepthFail = XU ? this.stencilMaterial.opDepthFail : this.stencilGlobal.opDepthFail, this.opStencilDepthPass = XU ? this.stencilMaterial.opStencilDepthPass : this.stencilGlobal.opStencilDepthPass, this.backOpStencilFail = XU ? this.stencilMaterial.backOpStencilFail : this.stencilGlobal.backOpStencilFail, this.backOpDepthFail = XU ? this.stencilMaterial.backOpDepthFail : this.stencilGlobal.backOpDepthFail, this.backOpStencilDepthPass = XU ? this.stencilMaterial.backOpStencilDepthPass : this.stencilGlobal.backOpStencilDepthPass, this.mask = XU ? this.stencilMaterial.mask : this.stencilGlobal.mask, this.isDirty && (this._isStencilTestDirty && (this.enabled ? UU.enable(UU.STENCIL_TEST) : UU.disable(UU.STENCIL_TEST), this._isStencilTestDirty = !1), this._isStencilMaskDirty && (UU.stencilMask(this.mask), this._isStencilMaskDirty = !1), this._isStencilFuncDirty && (UU.stencilFuncSeparate(UU.FRONT, this.func, this.funcRef, this.funcMask), UU.stencilFuncSeparate(UU.BACK, this.backFunc, this.funcRef, this.funcMask), this._isStencilFuncDirty = !1), this._isStencilOpDirty && (UU.stencilOpSeparate(UU.FRONT, this.opStencilFail, this.opDepthFail, this.opStencilDepthPass), UU.stencilOpSeparate(UU.BACK, this.backOpStencilFail, this.backOpDepthFail, this.backOpStencilDepthPass), this._isStencilOpDirty = !1))
      }
    }
    class YU {
      constructor() {
        this.reset()
      }
      reset() {
        this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = YU.ALWAYS, this.opStencilFail = YU.KEEP, this.opDepthFail = YU.KEEP, this.opStencilDepthPass = YU.REPLACE, this.backFunc = YU.ALWAYS, this.backOpStencilFail = YU.KEEP, this.backOpDepthFail = YU.KEEP, this.backOpStencilDepthPass = YU.REPLACE
      }
      get stencilFunc() {
        return this.func
      }
      set stencilFunc(UU) {
        this.func = UU
      }
      get stencilBackFunc() {
        return this.backFunc
      }
      set stencilBackFunc(UU) {
        this.backFunc = UU
      }
      get stencilFuncRef() {
        return this.funcRef
      }
      set stencilFuncRef(UU) {
        this.funcRef = UU
      }
      get stencilFuncMask() {
        return this.funcMask
      }
      set stencilFuncMask(UU) {
        this.funcMask = UU
      }
      get stencilOpStencilFail() {
        return this.opStencilFail
      }
      set stencilOpStencilFail(UU) {
        this.opStencilFail = UU
      }
      get stencilOpDepthFail() {
        return this.opDepthFail
      }
      set stencilOpDepthFail(UU) {
        this.opDepthFail = UU
      }
      get stencilOpStencilDepthPass() {
        return this.opStencilDepthPass
      }
      set stencilOpStencilDepthPass(UU) {
        this.opStencilDepthPass = UU
      }
      get stencilBackOpStencilFail() {
        return this.backOpStencilFail
      }
      set stencilBackOpStencilFail(UU) {
        this.backOpStencilFail = UU
      }
      get stencilBackOpDepthFail() {
        return this.backOpDepthFail
      }
      set stencilBackOpDepthFail(UU) {
        this.backOpDepthFail = UU
      }
      get stencilBackOpStencilDepthPass() {
        return this.backOpStencilDepthPass
      }
      set stencilBackOpStencilDepthPass(UU) {
        this.backOpStencilDepthPass = UU
      }
      get stencilMask() {
        return this.mask
      }
      set stencilMask(UU) {
        this.mask = UU
      }
      get stencilTest() {
        return this.enabled
      }
      set stencilTest(UU) {
        this.enabled = UU
      }
    }
    YU.ALWAYS = 519, YU.KEEP = 7680, YU.REPLACE = 7681;
    var NU = zU(41012),
      IU = zU(40989),
      pU = zU(40940),
      aU = zU(40971),
      tU = zU(40983);

    function gU(UU, XU) {
      if (XU) {
        const {
          requestAnimationFrame: zU
        } = XU;
        if ("function" === typeof zU) return zU(UU)
      }
      if ((0, aU.h)()) {
        const {
          requestAnimationFrame: zU
        } = XU || window;
        if ("function" === typeof zU) return zU(UU)
      } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(UU);
      return setTimeout(UU, 16)
    }
    class kU {
      get frameId() {
        return this._frameId
      }
      get isWebGPU() {
        return this._isWebGPU
      }
      _getShaderProcessor(UU) {
        return this._shaderProcessor
      }
      _resetAlphaMode() {
        this._alphaMode.fill(-1), this._alphaEquation.fill(-1)
      }
      get shaderPlatformName() {
        return this._shaderPlatformName
      }
      _clearEmptyResources() {
        this._emptyTexture = null, this._emptyCubeTexture = null, this._emptyTexture3D = null, this._emptyTexture2DArray = null
      }
      get XyU() {
        return this._useReverseDepthBuffer
      }
      set XyU(UU) {
        UU !== this._useReverseDepthBuffer && (this._useReverseDepthBuffer = UU, this._depthCullingState.depthFunc = UU ? 518 : 515)
      }
      setColorWrite(UU) {
        UU !== this._colorWrite && (this._colorWriteChanged = !0, this._colorWrite = UU)
      }
      getColorWrite() {
        return this._colorWrite
      }
      get depthCullingState() {
        return this._depthCullingState
      }
      get alphaState() {
        return this._alphaState
      }
      get stencilState() {
        return this._stencilState
      }
      get stencilStateComposer() {
        return this._stencilStateComposer
      }
      _getGlobalDefines(UU) {
        if (UU) return this.isNDCHalfZRange ? UU.IS_NDC_HALF_ZRANGE = "" : delete UU.IS_NDC_HALF_ZRANGE, this.XyU ? UU.USE_REVERSE_DEPTHBUFFER = "" : delete UU.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? UU.USE_EXACT_SRGB_CONVERSIONS = "" : delete UU.USE_EXACT_SRGB_CONVERSIONS);
        {
          let UU = "";
          return this.isNDCHalfZRange && (UU += "#define IS_NDC_HALF_ZRANGE"), this.XyU && (UU && (UU += "\n"), UU += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (UU && (UU += "\n"), UU += "#define USE_EXACT_SRGB_CONVERSIONS"), UU
        }
      }
      _rebuildInternalTextures() {
        const UU = this._internalTexturesCache.slice();
        for (const XU of UU) XU._rebuild()
      }
      _rebuildRenderTargetWrappers() {
        const UU = this._renderTargetWrapperCache.slice();
        for (const XU of UU) XU.textures?.some((UU => 15 === UU.source)) || XU._rebuild()
      }
      _rebuildEffects() {
        for (const UU in this._compiledEffects) {
          const XU = this._compiledEffects[UU];
          XU._pipelineContext = null, XU._prepareEffect()
        }
        yU.b.ResetCache()
      }
      _rebuildGraphicsResources() {
        this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
      }
      _flagContextRestored() {
        AU.b.Warn(this.name + " context successfully restored."), this.wp.notifyObservers(this), this._contextWasLost = !1
      }
      _restoreEngineAfterContextLost(UU) {
        setTimeout((() => {
          this._clearEmptyResources();
          const XU = this._depthCullingState.depthTest,
            zU = this._depthCullingState.depthFunc,
            cU = this._depthCullingState.depthMask,
            yU = this._stencilState.stencilTest;
          UU(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = XU, this._depthCullingState.depthFunc = zU, this._depthCullingState.depthMask = cU, this._stencilState.stencilTest = yU, this._flagContextRestored()
        }), 0)
      }
      get oR() {
        return this._isDisposed
      }
      get snapshotRendering() {
        return !1
      }
      set snapshotRendering(UU) {}
      get snapshotRenderingMode() {
        return 0
      }
      set snapshotRenderingMode(UU) {}
      getClassName() {
        return "AbstractEngine"
      }
      get emptyTexture() {
        return this._emptyTexture || (this._emptyTexture = this.createRawTexture(new Uint8Array(4), 1, 1, 5, !1, !1, 1)), this._emptyTexture
      }
      get emptyTexture3D() {
        return this._emptyTexture3D || (this._emptyTexture3D = this.createRawTexture3D(new Uint8Array(4), 1, 1, 1, 5, !1, !1, 1)), this._emptyTexture3D
      }
      get emptyTexture2DArray() {
        return this._emptyTexture2DArray || (this._emptyTexture2DArray = this.createRawTexture2DArray(new Uint8Array(4), 1, 1, 1, 5, !1, !1, 1)), this._emptyTexture2DArray
      }
      get emptyCubeTexture() {
        if (!this._emptyCubeTexture) {
          const UU = new Uint8Array(4),
            XU = [UU, UU, UU, UU, UU, UU];
          this._emptyCubeTexture = this.createRawCubeTexture(XU, 1, 5, 0, !1, !1, 1)
        }
        return this._emptyCubeTexture
      }
      set framebufferDimensionsObject(UU) {
        this._framebufferDimensionsObject = UU
      }
      get activeRenderLoops() {
        return this._activeRenderLoops
      }
      stopRenderLoop(UU) {
        if (!UU) return this._activeRenderLoops.length = 0, void this._cancelFrame();
        const XU = this._activeRenderLoops.indexOf(UU);
        XU >= 0 && (this._activeRenderLoops.splice(XU, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
      }
      _cancelFrame() {
        if (this.customAnimationFrameRequester) {
          if (0 !== this._frameHandler) {
            this._frameHandler = 0;
            const {
              cancelAnimationFrame: UU
            } = this.customAnimationFrameRequester;
            UU && UU(this.customAnimationFrameRequester.rp), delete this.customAnimationFrameRequester.rp
          }
        } else if (0 !== this._frameHandler) {
          const UU = this._frameHandler;
          if (this._frameHandler = 0, (0, aU.h)()) {
            const {
              cancelAnimationFrame: XU
            } = this.getHostWindow() || window;
            if ("function" === typeof XU) return XU(UU)
          } else if ("function" === typeof cancelAnimationFrame) return cancelAnimationFrame(UU);
          return clearTimeout(UU)
        }
      }
      zB() {
        this.onBeginFrameObservable.notifyObservers(this)
      }
      ZY() {
        this._frameId++, this.onEndFrameObservable.notifyObservers(this)
      }
      get maxFPS() {
        return this._maxFPS
      }
      set maxFPS(UU) {
        this._maxFPS = UU, void 0 !== UU && (this._minFrameTime = UU <= 0 ? Number.MAX_VALUE : 1e3 / UU)
      }
      _isOverFrameTime(UU) {
        if (!UU || void 0 === this._maxFPS) return !1;
        const XU = UU - this._lastFrameTime;
        return this._lastFrameTime = UU, this._renderAccumulator += XU, this._renderAccumulator < this._minFrameTime || (this._renderAccumulator -= this._minFrameTime, this._renderAccumulator > this._minFrameTime && (this._renderAccumulator = this._minFrameTime), !1)
      }
      _processFrame(UU) {
        if (this._frameHandler = 0, !this._contextWasLost && !this._isOverFrameTime(UU)) {
          let UU = !0;
          (this.oR || !this.renderEvenInBackground && this._windowIsBackground) && (UU = !1), UU && (this.zB(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.ZY())
        }
      }
      _renderLoop(UU) {
        this._processFrame(UU), this._activeRenderLoops.length > 0 && 0 === this._frameHandler && this._queueNewFrameForRenderLoop()
      }
      _renderFrame() {
        for (let UU = 0; UU < this._activeRenderLoops.length; UU++) {
          (0, this._activeRenderLoops[UU])()
        }
      }
      _renderViews() {
        return !1
      }
      _queueNewFrame(UU, XU) {
        return gU(UU, XU)
      }
      _queueNewFrameForRenderLoop() {
        this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.rp = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.rp) : this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow())
      }
      runRenderLoop(UU) {
        -1 === this._activeRenderLoops.indexOf(UU) && (this._activeRenderLoops.push(UU), 1 === this._activeRenderLoops.length && 0 === this._frameHandler && this._queueNewFrameForRenderLoop())
      }
      getDepthBuffer() {
        return this._depthCullingState.depthTest
      }
      setDepthBuffer(UU) {
        this._depthCullingState.depthTest = UU
      }
      setZOffset(UU) {
        this._depthCullingState.zOffset = this.XyU ? -UU : UU
      }
      getZOffset() {
        const UU = this._depthCullingState.zOffset;
        return this.XyU ? -UU : UU
      }
      setZOffsetUnits(UU) {
        this._depthCullingState.zOffsetUnits = this.XyU ? -UU : UU
      }
      getZOffsetUnits() {
        const UU = this._depthCullingState.zOffsetUnits;
        return this.XyU ? -UU : UU
      }
      getHostWindow() {
        return (0, aU.h)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
      }
      get compatibilityMode() {
        return this._compatibilityMode
      }
      set compatibilityMode(UU) {
        this._compatibilityMode = !0
      }
      _rebuildTextures() {
        for (const UU of this.scenes) UU._rebuildTextures();
        for (const UU of this._virtualScenes) UU._rebuildTextures()
      }
      _releaseRenderTargetWrapper(UU) {
        const XU = this._renderTargetWrapperCache.indexOf(UU); - 1 !== XU && this._renderTargetWrapperCache.splice(XU, 1)
      }
      get currentViewport() {
        return this._cachedViewport
      }
      setViewport(UU, XU, zU) {
        const cU = XU || this.getRenderWidth(),
          yU = zU || this.getRenderHeight(),
          QU = UU.x || 0,
          AU = UU.y || 0;
        this._cachedViewport = UU, this._viewport(QU * cU, AU * yU, cU * UU.width, yU * UU.height)
      }
      createCanvasImage() {
        return document.createElement("img")
      }
      createCanvasPath2D(UU) {
        return new Path2D(UU)
      }
      get description() {
        let UU = this.name + this.version;
        return this._caps.parallelShaderCompile && (UU += " - Parallel shader compilation"), UU
      }
      _createTextureBase(UU, XU, zU, cU) {
        let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          FU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          oU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          DU = arguments.length > 7 ? arguments[7] : void 0,
          EU = arguments.length > 8 ? arguments[8] : void 0,
          YU = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          NU = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          IU = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
          aU = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
          tU = arguments.length > 13 ? arguments[13] : void 0,
          gU = arguments.length > 14 ? arguments[14] : void 0,
          GU = arguments.length > 15 ? arguments[15] : void 0;
        const BU = "data:" === (UU = UU || "").substring(0, 5),
          ZU = "blob:" === UU.substring(0, 5),
          RU = BU && -1 !== UU.indexOf(";base64,"),
          PU = NU || new pU.e(this, 1);
        PU !== NU && (PU.label = UU.substring(0, 60));
        const WU = UU;
        !this._transformTextureUrl || RU || NU || YU || (UU = this._transformTextureUrl(UU)), WU !== UU && (PU._originalUrl = WU);
        const dU = UU.lastIndexOf(".");
        let LU = aU || (dU > -1 ? UU.substring(dU).toLowerCase() : "");
        LU.indexOf("?") > -1 && (LU = LU.split("?")[0]);
        const eU = kU.GetCompatibleTextureLoader(LU, tU);
        cU && cU.addPendingData(PU), PU.url = UU, PU.generateMipMaps = !XU, PU.samplingMode = yU, PU.invertY = zU, PU._useSRGBBuffer = this._getUseSRGBBuffer(!!GU, XU), this._doNotHandleContextLost || (PU._buffer = YU);
        let CU = null;
        FU && !NU && (CU = PU.onLoadedObservable.add(FU)), NU || this._internalTexturesCache.push(PU);
        const wU = (zU, NU) => {
          cU && cU.removePendingData(PU), UU === WU ? (CU && PU.onLoadedObservable.remove(CU), QU.b.UseFallbackTexture && UU !== QU.b.FallbackTexture && this._createTextureBase(QU.b.FallbackTexture, XU, PU.invertY, cU, yU, null, oU, DU, EU, YU, PU), zU = (zU || "Unknown error") + (QU.b.UseFallbackTexture ? " - Fallback texture was used" : ""), PU.onErrorObservable.notifyObservers({
            message: zU,
            exception: NU
          }), oU && oU(zU, NU)) : (AU.b.Warn(`Failed to load ${UU}, falling back to ${WU}`), this._createTextureBase(WU, XU, PU.invertY, cU, yU, FU, oU, DU, EU, YU, PU, IU, aU, tU, gU, GU))
        };
        if (eU) {
          const XU = async UU => {
            (await eU).loadData(UU, PU, ((UU, XU, zU, QU, AU, FU) => {
              FU ? wU("TextureLoader failed to load data") : DU(PU, LU, cU, {
                width: UU,
                height: XU
              }, PU.invertY, !zU, QU, (() => (AU(), !1)), yU)
            }), gU)
          };
          if (YU) {
            const UU = async UU => {
              try {
                await XU(UU)
              } catch (zU) {
                wU("Failed to parse texture data", zU)
              }
            };
            YU instanceof ArrayBuffer ? UU(new Uint8Array(YU)) : ArrayBuffer.isView(YU) ? UU(YU) : oU && oU("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null)
          } else this._loadFile(UU, (async UU => {
            try {
              await XU(new Uint8Array(UU))
            } catch (zU) {
              wU("Failed to parse texture data", zU)
            }
          }), void 0, cU ? cU.offlineProvider : void 0, !0, ((UU, XU) => {
            wU("Unable to load " + (UU && UU.responseURL, XU))
          }))
        } else {
          const zU = UU => {
            ZU && !this._doNotHandleContextLost && (PU._buffer = UU), DU(PU, LU, cU, UU, PU.invertY, XU, !1, EU, yU)
          };
          !BU || RU ? YU && ("string" === typeof YU.decoding || YU.close) ? zU(YU) : kU._FileToolsLoadImage(UU || "", zU, wU, cU ? cU.offlineProvider : null, tU, PU.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : "string" === typeof YU || YU instanceof ArrayBuffer || ArrayBuffer.isView(YU) || YU instanceof Blob ? kU._FileToolsLoadImage(YU, zU, wU, cU ? cU.offlineProvider : null, tU, PU.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : YU && zU(YU)
        }
        return PU
      }
      _rebuildBuffers() {
        for (const UU of this._uniformBuffers) UU._rebuildAfterContextLost()
      }
      get _shouldUseHighPrecisionShader() {
        return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed)
      }
      getHostDocument() {
        return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, aU.c)() ? document : null
      }
      getLoadedTexturesCache() {
        return this._internalTexturesCache
      }
      clearInternalTexturesCache() {
        this._internalTexturesCache.length = 0
      }
      getCaps() {
        return this._caps
      }
      resetTextureCache() {
        for (const UU in this._boundTexturesCache) Object.prototype.hasOwnProperty.call(this._boundTexturesCache, UU) && (this._boundTexturesCache[UU] = null);
        this._currentTextureChannel = -1
      }
      get name() {
        return this._name
      }
      set name(UU) {
        this._name = UU
      }
      static get NpmPackage() {
        return "babylonjs@9.28.0"
      }
      static get Version() {
        return "9.28.0"
      }
      getRenderingCanvas() {
        return this._renderingCanvas
      }
      getAudioContext() {
        return this._audioContext
      }
      getAudioDestination() {
        return this._audioDestination
      }
      setHardwareScalingLevel(UU) {
        this._hardwareScalingLevel = UU, this.resize()
      }
      getHardwareScalingLevel() {
        return this._hardwareScalingLevel
      }
      get doNotHandleContextLost() {
        return this._doNotHandleContextLost
      }
      set doNotHandleContextLost(UU) {
        this._doNotHandleContextLost = UU
      }
      get isStencilEnable() {
        return this._isStencilEnable
      }
      getCreationOptions() {
        return this._creationOptions
      }
      constructor(UU, XU, zU) {
        this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new DU, this._stencilStateComposer = new EU, this._stencilState = new YU, this._alphaState = new NU.c(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._activeRequests = [], this._badOS = !1, this._badDesktopOS = !1, this._compatibilityMode = !0, this._internalTexturesCache = new Array, this._currentRenderTarget = null, this._boundTexturesCache = {}, this._activeChannel = 0, this._currentTextureChannel = -1, this._viewportCached = {
          x: 0,
          y: 0,
          z: 0,
          w: 0
        }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new cU.e, this.onCanvasFocusObservable = new cU.e, this.onNewSceneAddedObservable = new cU.e, this.onResizeObservable = new cU.e, this.onCanvasPointerOutObservable = new cU.e, this.onEffectErrorObservable = new cU.e, this.disablePerformanceMonitorInBackground = !1, this.disableVertexArrayObjects = !1, this._frameId = 0, this.hostInformation = {
          isMobile: !1
        }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDepthBuffer = !1, this.isNDCHalfZRange = !1, this.hasOriginBottomLeft = !0, this._renderTargetWrapperCache = new Array, this._compiledEffects = {}, this._isDisposed = !1, this.scenes = [], this._virtualScenes = new Array, this.onBeforeTextureInitObservable = new cU.e, this.renderEvenInBackground = !0, this.preventCacheWipeBetweenFrames = !1, this._frameHandler = 0, this._activeRenderLoops = new Array, this.customAnimationFrameRequester = null, this._windowIsBackground = !1, this._boundRenderFunction = UU => this._renderLoop(UU), this._lastFrameTime = 0, this._renderAccumulator = 0, this.skipFrameRender = !1, this.onBeforeShaderCompilationObservable = new cU.e, this.onAfterShaderCompilationObservable = new cU.e, this.onBeginFrameObservable = new cU.e, this.onEndFrameObservable = new cU.e, this._transformTextureUrl = null, this._uniformBuffers = new Array, this._storageBuffers = new Array, this._highPrecisionShadersAllowed = !0, this.onContextLostObservable = new cU.e, this.wp = new cU.e, this._name = "", this.premultipliedAlpha = !0, this.adaptToDeviceRatio = !1, this._lastDevicePixelRatio = 1, this._doNotHandleContextLost = !1, this.cullBackFaces = null, this._renderPassNames = ["main"], this._onReleaseRenderPassObservable = null, this._fps = 60, this._deltaTime = 0, this._deterministicLockstep = !1, this._lockstepMaxSteps = 4, this._timeStep = 1 / 60, this.bS = new cU.e, this.onReleaseEffectsObservable = new cU.e, QU.b.Instances.push(this), this.startTime = oU.e.Now, this._stencilStateComposer.stencilGlobal = this._stencilState, FU.b.SetMatrixPrecision(!!XU.useLargeWorldRendering || !!XU.useHighPrecisionMatrix), (0, aU.e)() && navigator.userAgent && (this._badOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent), this._badDesktopOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), XU.antialias = UU ?? XU.antialias, XU.deterministicLockstep = XU.deterministicLockstep ?? !1, XU.lockstepMaxSteps = XU.lockstepMaxSteps ?? 4, XU.timeStep = XU.timeStep ?? 1 / 60, XU.stencil = XU.stencil ?? !0, this._audioContext = XU.audioEngineOptions?.audioContext ?? null, this._audioDestination = XU.audioEngineOptions?.audioDestination ?? null, this.premultipliedAlpha = XU.premultipliedAlpha ?? !0, this._doNotHandleContextLost = !!XU.doNotHandleContextLost, this._isStencilEnable = !!XU.stencil, this.useExactSrgbConversions = XU.useExactSrgbConversions ?? !1, this.canvasTabIndex = XU.canvasTabIndex ?? this.canvasTabIndex;
        const yU = (0, aU.h)() && window.devicePixelRatio || 1,
          AU = XU.limitDeviceRatio || yU;
        zU = zU || XU.adaptToDeviceRatio || !1, this.adaptToDeviceRatio = zU, this._hardwareScalingLevel = zU ? 1 / Math.min(AU, yU) : 1, this._lastDevicePixelRatio = yU, this._creationOptions = XU
      }
      resize() {
        let UU, XU, zU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.adaptToDeviceRatio) {
          const UU = (0, aU.h)() && window.devicePixelRatio || 1,
            XU = this._lastDevicePixelRatio / UU;
          this._lastDevicePixelRatio = UU, this._hardwareScalingLevel *= XU
        }
        if ((0, aU.h)() && (0, aU.c)())
          if (this._renderingCanvas) {
            const zU = this._renderingCanvas.getBoundingClientRect?.();
            UU = this._renderingCanvas.clientWidth || zU?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100, XU = this._renderingCanvas.clientHeight || zU?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100
          } else UU = window.innerWidth, XU = window.innerHeight;
        else UU = this._renderingCanvas ? this._renderingCanvas.width : 100, XU = this._renderingCanvas ? this._renderingCanvas.height : 100;
        this.setSize(UU / this._hardwareScalingLevel, XU / this._hardwareScalingLevel, zU)
      }
      setSize(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!this._renderingCanvas) return !1;
        if (UU |= 0, XU |= 0, !zU && this._renderingCanvas.width === UU && this._renderingCanvas.height === XU) return !1;
        if (this._renderingCanvas.width = UU, this._renderingCanvas.height = XU, this.scenes) {
          for (let UU = 0; UU < this.scenes.length; UU++) {
            const XU = this.scenes[UU];
            for (let UU = 0; UU < XU.cameras.length; UU++) {
              XU.cameras[UU]._currentRenderId = 0
            }
          }
          this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
        }
        return !0
      }
      createRawTexture(UU, XU, zU, cU, yU, QU, AU, FU, oU, DU, EU, YU) {
        throw (0, IU.m)("engine.rawTexture")
      }
      createRawCubeTexture(UU, XU, zU, cU, yU, QU, AU, FU) {
        throw (0, IU.m)("engine.rawTexture")
      }
      createRawTexture3D(UU, XU, zU, cU, yU, QU, AU, FU, oU, DU, EU) {
        throw (0, IU.m)("engine.rawTexture")
      }
      createRawTexture2DArray(UU, XU, zU, cU, yU, QU, AU, FU, oU, DU, EU, YU) {
        throw (0, IU.m)("engine.rawTexture")
      }
      _sharedInit(UU) {
        this._renderingCanvas = UU
      }
      _setupMobileChecks() {
        navigator && navigator.userAgent && (this._checkForMobile = () => {
          const UU = navigator.userAgent;
          this.hostInformation.isMobile = -1 !== UU.indexOf("Mobile") || -1 !== UU.indexOf("Mac") && (0, aU.c)() && "ontouchend" in document
        }, this._checkForMobile(), (0, aU.h)() && window.addEventListener("resize", this._checkForMobile))
      }
      createVideoElement(UU) {
        return document.createElement("video")
      }
      _reportDrawCall() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        this._drawCalls?.addCount(UU, !1)
      }
      getFps() {
        return this._fps
      }
      getDeltaTime() {
        return this._deltaTime
      }
      isDeterministicLockStep() {
        return this._deterministicLockstep
      }
      getLockstepMaxSteps() {
        return this._lockstepMaxSteps
      }
      getTimeStep() {
        return 1e3 * this._timeStep
      }
      _createImageBitmapFromSource(UU, XU) {
        throw new Error("createImageBitmapFromSource is not implemented")
      }
      createImageBitmap(UU, XU) {
        return createImageBitmap(UU, XU)
      }
      resizeImageBitmap(UU, XU, zU) {
        throw new Error("resizeImageBitmap is not implemented")
      }
      getFontOffset(UU) {
        throw new Error("getFontOffset is not implemented")
      }
      static _CreateCanvas(UU, XU) {
        if ("undefined" === typeof document) return new OffscreenCanvas(UU, XU);
        const zU = document.createElement("canvas");
        return zU.width = UU, zU.height = XU, zU
      }
      createCanvas(UU, XU) {
        return kU._CreateCanvas(UU, XU)
      }
      static _FileToolsLoadImage(UU, XU, zU, cU, yU, QU, AU) {
        if (!tU.c.loadImage) throw (0, IU.m)("FileTools");
        return tU.c.loadImage(UU, XU, zU, cU, yU, QU, AU)
      }
      _loadFile(UU, XU, zU, cU, yU, QU) {
        const AU = (0, tU.k)(UU, XU, zU, cU, yU, QU);
        return this._activeRequests.push(AU), AU.onCompleteObservable.add((() => {
          const UU = this._activeRequests.indexOf(AU); - 1 !== UU && this._activeRequests.splice(UU, 1)
        })), AU
      }
      static _FileToolsLoadFile(UU, XU, zU, cU, yU, QU) {
        if (tU.c.loadFile) return tU.c.loadFile(UU, XU, zU, cU, yU, QU);
        throw (0, IU.m)("FileTools")
      }
      dispose() {
        for (this.releaseEffects(), this._isDisposed = !0, this.stopRenderLoop(), this._emptyTexture && (this._releaseTexture(this._emptyTexture), this._emptyTexture = null), this._emptyCubeTexture && (this._releaseTexture(this._emptyCubeTexture), this._emptyCubeTexture = null), this._renderingCanvas = null, this.onBeforeTextureInitObservable && this.onBeforeTextureInitObservable.clear(); this.postProcesses.length;) this.postProcesses[0].dispose();
        for (; this.scenes.length;) this.scenes[0].dispose();
        for (; this._virtualScenes.length;) this._virtualScenes[0].dispose();
        this.releaseComputeEffects?.(), yU.b.ResetCache();
        for (const XU of this._activeRequests) XU.abort();
        this._boundRenderFunction = null, this.bS.notifyObservers(this), this.bS.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), this.onEffectErrorObservable.clear(), (0, aU.h)() && window.removeEventListener("resize", this._checkForMobile);
        const UU = QU.b.Instances.indexOf(this);
        UU >= 0 && QU.b.Instances.splice(UU, 1), QU.b.Instances.length || (QU.b.OnEnginesDisposedObservable.notifyObservers(this), QU.b.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservable?.clear(), this._onReleaseRenderPassObservable = null
      }
      static DefaultLoadingScreenFactory(UU) {
        throw (0, IU.m)("LoadingScreen")
      }
      static MarkAllMaterialsAsDirty(UU, XU) {
        for (let zU = 0; zU < QU.b.Instances.length; zU++) {
          const cU = QU.b.Instances[zU];
          for (let zU = 0; zU < cU.scenes.length; zU++) cU.scenes[zU].markAllMaterialsAsDirty(UU, XU)
        }
      }
      static GetCompatibleTextureLoader(UU, XU) {
        return null
      }
    }
    kU._RenderPassIdCounter = 0, kU._RescalePostProcessFactory = null, kU.CollisionsEpsilon = .001, kU.QueueNewFrame = gU
  },
  40961: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => cU
    });
    class cU {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? cU.ShadersRepository : cU.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? cU.ShadersStore : cU.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? cU.IncludesShadersStore : cU.IncludesShadersStoreWGSL
      }
    }
    cU.ShadersRepository = "src/Shaders/", cU.ShadersStore = {}, cU.IncludesShadersStore = {}, cU.ShadersRepositoryWGSL = "src/ShadersWGSL/", cU.ShadersStoreWGSL = {}, cU.IncludesShadersStoreWGSL = {}
  },
  40977: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => NU,
      g: () => GU,
      h: () => pU,
      l: () => IU,
      n: () => aU,
      q: () => kU,
      r: () => YU,
      v: () => DU,
      x: () => EU,
      y: () => oU,
      A: () => FU
    });
    class cU {
      constructor() {
        this._valueCache = {}, this._matrixValueCache = {}, this.vertexCompilationError = null, this.fragmentCompilationError = null, this.programLinkError = null, this.programValidationError = null, this._isDisposed = !1
      }
      get isAsync() {
        return this.isParallelCompiled
      }
      get isReady() {
        return !!this.program && (!this.isParallelCompiled || this.engine._isRenderingStateCompiled(this))
      }
      _handlesSpectorRebuildCallback(UU) {
        UU && this.program && UU(this.program)
      }
      setEngine(UU) {
        this.engine = UU
      }
      _fillEffectInformation(UU, XU, zU, cU, yU, QU, AU, FU) {
        const oU = this.engine;
        if (oU.supportsUniformBuffers)
          for (const EU in XU) UU.bindUniformBlock(EU, XU[EU]);
        let DU;
        for (this.engine.getUniforms(this, zU).forEach(((UU, XU) => {
            cU[zU[XU]] = UU
          })), this._uniforms = cU, DU = 0; DU < yU.length; DU++) {
          null == UU.getUniform(yU[DU]) && (yU.splice(DU, 1), DU--)
        }
        yU.forEach(((UU, XU) => {
          QU[UU] = XU
        }));
        for (const EU of oU.getAttributes(this, AU)) FU.push(EU)
      }
      dispose() {
        this._uniforms = {}, this._isDisposed = !0
      }
      _cacheMatrix(UU, XU) {
        const zU = this._valueCache[UU],
          cU = XU.updateFlag;
        if (void 0 !== zU && zU === cU) return !1;
        const yU = XU.cyU();
        let QU = this._matrixValueCache[UU];
        if (void 0 !== zU && null !== zU && void 0 !== QU) {
          let XU = !0;
          for (let UU = 15; UU >= 0; UU--)
            if (QU[UU] !== yU[UU]) {
              XU = !1;
              break
            } if (XU) return this._valueCache[UU] = cU, !1
        }
        return void 0 === QU && (QU = this._matrixValueCache[UU] = new Float32Array(16)), QU.set(yU), this._valueCache[UU] = cU, !0
      }
      _cacheFloat2(UU, XU, zU) {
        let cU = this._valueCache[UU];
        if (!cU || 2 !== cU.length) return cU = [XU, zU], this._valueCache[UU] = cU, !0;
        let yU = !1;
        return cU[0] !== XU && (cU[0] = XU, yU = !0), cU[1] !== zU && (cU[1] = zU, yU = !0), yU
      }
      _cacheFloat3(UU, XU, zU, cU) {
        let yU = this._valueCache[UU];
        if (!yU || 3 !== yU.length) return yU = [XU, zU, cU], this._valueCache[UU] = yU, !0;
        let QU = !1;
        return yU[0] !== XU && (yU[0] = XU, QU = !0), yU[1] !== zU && (yU[1] = zU, QU = !0), yU[2] !== cU && (yU[2] = cU, QU = !0), QU
      }
      _cacheFloat4(UU, XU, zU, cU, yU) {
        let QU = this._valueCache[UU];
        if (!QU || 4 !== QU.length) return QU = [XU, zU, cU, yU], this._valueCache[UU] = QU, !0;
        let AU = !1;
        return QU[0] !== XU && (QU[0] = XU, AU = !0), QU[1] !== zU && (QU[1] = zU, AU = !0), QU[2] !== cU && (QU[2] = cU, AU = !0), QU[3] !== yU && (QU[3] = yU, AU = !0), AU
      }
      setInt(UU, XU) {
        const zU = this._valueCache[UU];
        void 0 !== zU && zU === XU || this.engine.setInt(this._uniforms[UU], XU) && (this._valueCache[UU] = XU)
      }
      setInt2(UU, XU, zU) {
        this._cacheFloat2(UU, XU, zU) && (this.engine.setInt2(this._uniforms[UU], XU, zU) || (this._valueCache[UU] = null))
      }
      setInt3(UU, XU, zU, cU) {
        this._cacheFloat3(UU, XU, zU, cU) && (this.engine.setInt3(this._uniforms[UU], XU, zU, cU) || (this._valueCache[UU] = null))
      }
      setInt4(UU, XU, zU, cU, yU) {
        this._cacheFloat4(UU, XU, zU, cU, yU) && (this.engine.setInt4(this._uniforms[UU], XU, zU, cU, yU) || (this._valueCache[UU] = null))
      }
      setIntArray(UU, XU) {
        this._valueCache[UU] = null, this.engine.setIntArray(this._uniforms[UU], XU)
      }
      setIntArray2(UU, XU) {
        this._valueCache[UU] = null, this.engine.setIntArray2(this._uniforms[UU], XU)
      }
      setIntArray3(UU, XU) {
        this._valueCache[UU] = null, this.engine.setIntArray3(this._uniforms[UU], XU)
      }
      setIntArray4(UU, XU) {
        this._valueCache[UU] = null, this.engine.setIntArray4(this._uniforms[UU], XU)
      }
      setUInt(UU, XU) {
        const zU = this._valueCache[UU];
        void 0 !== zU && zU === XU || this.engine.setUInt(this._uniforms[UU], XU) && (this._valueCache[UU] = XU)
      }
      setUInt2(UU, XU, zU) {
        this._cacheFloat2(UU, XU, zU) && (this.engine.setUInt2(this._uniforms[UU], XU, zU) || (this._valueCache[UU] = null))
      }
      setUInt3(UU, XU, zU, cU) {
        this._cacheFloat3(UU, XU, zU, cU) && (this.engine.setUInt3(this._uniforms[UU], XU, zU, cU) || (this._valueCache[UU] = null))
      }
      setUInt4(UU, XU, zU, cU, yU) {
        this._cacheFloat4(UU, XU, zU, cU, yU) && (this.engine.setUInt4(this._uniforms[UU], XU, zU, cU, yU) || (this._valueCache[UU] = null))
      }
      setUIntArray(UU, XU) {
        this._valueCache[UU] = null, this.engine.setUIntArray(this._uniforms[UU], XU)
      }
      setUIntArray2(UU, XU) {
        this._valueCache[UU] = null, this.engine.setUIntArray2(this._uniforms[UU], XU)
      }
      setUIntArray3(UU, XU) {
        this._valueCache[UU] = null, this.engine.setUIntArray3(this._uniforms[UU], XU)
      }
      setUIntArray4(UU, XU) {
        this._valueCache[UU] = null, this.engine.setUIntArray4(this._uniforms[UU], XU)
      }
      setArray(UU, XU) {
        this._valueCache[UU] = null, this.engine.setArray(this._uniforms[UU], XU)
      }
      setArray2(UU, XU) {
        this._valueCache[UU] = null, this.engine.setArray2(this._uniforms[UU], XU)
      }
      setArray3(UU, XU) {
        this._valueCache[UU] = null, this.engine.setArray3(this._uniforms[UU], XU)
      }
      setArray4(UU, XU) {
        this._valueCache[UU] = null, this.engine.setArray4(this._uniforms[UU], XU)
      }
      setMatrices(UU, XU) {
        XU && (this._valueCache[UU] = null, this.engine.setMatrices(this._uniforms[UU], XU))
      }
      setMatrix(UU, XU) {
        this._cacheMatrix(UU, XU) && (this.engine.setMatrices(this._uniforms[UU], XU.cyU()) || (this._valueCache[UU] = null))
      }
      setMatrix3x3(UU, XU) {
        this._valueCache[UU] = null, this.engine.setMatrix3x3(this._uniforms[UU], XU)
      }
      setMatrix2x2(UU, XU) {
        this._valueCache[UU] = null, this.engine.setMatrix2x2(this._uniforms[UU], XU)
      }
      setFloat(UU, XU) {
        const zU = this._valueCache[UU];
        void 0 !== zU && zU === XU || this.engine.setFloat(this._uniforms[UU], XU) && (this._valueCache[UU] = XU)
      }
      setVector2(UU, XU) {
        this._cacheFloat2(UU, XU.x, XU.y) && (this.engine.setFloat2(this._uniforms[UU], XU.x, XU.y) || (this._valueCache[UU] = null))
      }
      setFloat2(UU, XU, zU) {
        this._cacheFloat2(UU, XU, zU) && (this.engine.setFloat2(this._uniforms[UU], XU, zU) || (this._valueCache[UU] = null))
      }
      setVector3(UU, XU) {
        this._cacheFloat3(UU, XU.x, XU.y, XU.z) && (this.engine.setFloat3(this._uniforms[UU], XU.x, XU.y, XU.z) || (this._valueCache[UU] = null))
      }
      setFloat3(UU, XU, zU, cU) {
        this._cacheFloat3(UU, XU, zU, cU) && (this.engine.setFloat3(this._uniforms[UU], XU, zU, cU) || (this._valueCache[UU] = null))
      }
      setVector4(UU, XU) {
        this._cacheFloat4(UU, XU.x, XU.y, XU.z, XU.w) && (this.engine.setFloat4(this._uniforms[UU], XU.x, XU.y, XU.z, XU.w) || (this._valueCache[UU] = null))
      }
      setQuaternion(UU, XU) {
        this._cacheFloat4(UU, XU.x, XU.y, XU.z, XU.w) && (this.engine.setFloat4(this._uniforms[UU], XU.x, XU.y, XU.z, XU.w) || (this._valueCache[UU] = null))
      }
      setFloat4(UU, XU, zU, cU, yU) {
        this._cacheFloat4(UU, XU, zU, cU, yU) && (this.engine.setFloat4(this._uniforms[UU], XU, zU, cU, yU) || (this._valueCache[UU] = null))
      }
      setColor3(UU, XU) {
        this._cacheFloat3(UU, XU.r, XU.g, XU.b) && (this.engine.setFloat3(this._uniforms[UU], XU.r, XU.g, XU.b) || (this._valueCache[UU] = null))
      }
      setColor4(UU, XU, zU) {
        this._cacheFloat4(UU, XU.r, XU.g, XU.b, zU) && (this.engine.setFloat4(this._uniforms[UU], XU.r, XU.g, XU.b, zU) || (this._valueCache[UU] = null))
      }
      setDirectColor4(UU, XU) {
        this._cacheFloat4(UU, XU.r, XU.g, XU.b, XU.a) && (this.engine.setFloat4(this._uniforms[UU], XU.r, XU.g, XU.b, XU.a) || (this._valueCache[UU] = null))
      }
      _getVertexShaderCode() {
        return this.vertexShader ? this.engine._getShaderSource(this.vertexShader) : null
      }
      _getFragmentShaderCode() {
        return this.fragmentShader ? this.engine._getShaderSource(this.fragmentShader) : null
      }
    }
    var yU = zU(40983);
    const QU = new WeakMap,
      AU = {
        _webGLVersion: 2,
        cachedPipelines: {}
      };

    function FU(UU) {
      let XU = QU.get(UU);
      if (!XU) {
        if (!UU) return AU;
        XU = {
          _webGLVersion: UU.TEXTURE_BINDING_3D ? 2 : 1,
          _context: UU,
          parallelShaderCompile: UU.getExtension("KHR_parallel_shader_compile") || void 0,
          cachedPipelines: {}
        }, QU.set(UU, XU)
      }
      return XU
    }

    function oU(UU) {
      QU.delete(UU)
    }

    function DU(UU, XU, zU, cU, yU, QU) {
      const AU = FU(cU);
      QU || (QU = AU._createShaderProgramInjection ?? NU);
      return QU(UU, gU(XU, "vertex", cU, AU._contextWasLost), gU(zU, "fragment", cU, AU._contextWasLost), cU, yU, AU.validateShaderPrograms)
    }

    function EU(UU, XU, zU, cU, yU) {
      let QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        AU = arguments.length > 6 ? arguments[6] : void 0;
      const oU = FU(yU);
      AU || (AU = oU._createShaderProgramInjection ?? NU);
      const DU = oU._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
      return AU(UU, tU(XU, "vertex", cU, DU, yU, oU._contextWasLost), tU(zU, "fragment", cU, DU, yU, oU._contextWasLost), yU, QU, oU.validateShaderPrograms)
    }

    function YU(UU, XU) {
      const zU = new cU,
        yU = FU(UU);
      return yU.parallelShaderCompile && !yU.disableParallelShaderCompile && (zU.isParallelCompiled = !0), zU.context = yU._context, zU
    }

    function NU(UU, XU, zU, cU) {
      let yU = arguments.length > 5 ? arguments[5] : void 0;
      const QU = cU.createProgram();
      if (UU.program = QU, !QU) throw new Error("Unable to create program");
      return cU.attachShader(QU, XU), cU.attachShader(QU, zU), cU.linkProgram(QU), UU.context = cU, UU.vertexShader = XU, UU.fragmentShader = zU, UU.isParallelCompiled || pU(UU, cU, yU), QU
    }

    function IU(UU, XU, zU) {
      const cU = UU;
      if (cU._isDisposed) return !1;
      const yU = FU(XU);
      return !!(yU && yU.parallelShaderCompile && yU.parallelShaderCompile.COMPLETION_STATUS_KHR && cU.program && XU.getProgramParameter(cU.program, yU.parallelShaderCompile.COMPLETION_STATUS_KHR)) && (pU(cU, XU, zU), !0)
    }

    function pU(UU, XU, zU) {
      const cU = UU.context,
        yU = UU.vertexShader,
        QU = UU.fragmentShader,
        AU = UU.program;
      if (!cU.getProgramParameter(AU, cU.LINK_STATUS)) {
        if (!XU.getShaderParameter(yU, XU.COMPILE_STATUS)) {
          const zU = XU.getShaderInfoLog(yU);
          if (zU) throw UU.vertexCompilationError = zU, new Error("VERTEX SHADER " + zU)
        }
        if (!XU.getShaderParameter(QU, XU.COMPILE_STATUS)) {
          const zU = XU.getShaderInfoLog(QU);
          if (zU) throw UU.fragmentCompilationError = zU, new Error("FRAGMENT SHADER " + zU)
        }
        const zU = cU.getProgramInfoLog(AU);
        if (zU) throw UU.programLinkError = zU, new Error(zU)
      }
      if (zU) {
        cU.validateProgram(AU);
        if (!cU.getProgramParameter(AU, cU.VALIDATE_STATUS)) {
          const XU = cU.getProgramInfoLog(AU);
          if (XU) throw UU.programValidationError = XU, new Error(XU)
        }
      }
      cU.deleteShader(yU), cU.deleteShader(QU), UU.vertexShader = void 0, UU.fragmentShader = void 0, UU.onCompiled && (UU.onCompiled(), UU.onCompiled = void 0)
    }

    function aU(UU, XU, zU, cU, yU, QU, AU, oU, YU) {
      let NU = arguments.length > 10 ? arguments[10] : void 0,
        IU = arguments.length > 11 ? arguments[11] : void 0,
        pU = arguments.length > 12 ? arguments[12] : void 0;
      const aU = FU(UU.context);
      IU || (IU = aU.createRawShaderProgramInjection ?? DU), pU || (pU = aU.createShaderProgramInjection ?? EU);
      const tU = UU;
      tU.program = cU ? IU(tU, XU, zU, tU.context, YU) : pU(tU, XU, zU, oU, tU.context, YU), tU.program.__SPECTOR_rebuildProgram = AU, NU()
    }

    function tU(UU, XU, zU, cU, QU, AU) {
      return gU((0, yU.d)(UU, zU, cU), XU, QU, AU)
    }

    function gU(UU, XU, zU, cU) {
      const yU = zU.createShader("vertex" === XU ? zU.VERTEX_SHADER : zU.FRAGMENT_SHADER);
      if (!yU) {
        let UU, yU = zU.NO_ERROR;
        for (;
          (UU = zU.getError()) !== zU.NO_ERROR;) yU = UU;
        throw new Error(`Something went wrong while creating a gl ${XU} shader object. gl error=${yU}, gl isContextLost=${zU.isContextLost()}, _contextWasLost=${cU}`)
      }
      return zU.shaderSource(yU, UU), zU.compileShader(yU), yU
    }

    function kU(UU, XU) {
      XU.useProgram(UU)
    }

    function GU(UU, XU) {
      const zU = UU;
      if (!zU.isParallelCompiled) return void XU(UU);
      const cU = zU.onCompiled;
      zU.onCompiled = () => {
        cU?.(), XU(UU)
      }
    }
  },
  40948: (UU, XU, zU) => {
    zU.d(XU, {
      ThinEngine: () => ZU
    });
    var cU = zU(40954),
      yU = zU(40977),
      QU = zU(41003),
      AU = zU(41017),
      FU = zU(39493),
      oU = zU(40971);
    class DU {
      constructor() {
        this.shaderLanguage = 0
      }
      postProcessor(UU, XU, zU, cU, yU) {
        if (yU.drawBuffersExtensionDisabled) {
          const XU = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
          UU = UU.replace(XU, "")
        }
        return UU
      }
    }
    const EU = /(flat\s)?\s*varying\s*.*/;
    class YU {
      constructor() {
        this.shaderLanguage = 0
      }
      attributeProcessor(UU) {
        return UU.replace("attribute", "in")
      }
      varyingCheck(UU, XU) {
        return EU.test(UU)
      }
      varyingProcessor(UU, XU) {
        return UU.replace("varying", XU ? "in" : "out")
      }
      postProcessor(UU, XU, zU) {
        const cU = -1 !== UU.search(/#extension.+GL_EXT_draw_buffers.+require/);
        if (UU = (UU = UU.replace(/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g, "")).replace(/texture2D\s*\(/g, "texture("), zU) {
          const zU = -1 !== UU.search(/layout *\(location *= *0\) *out/g),
            yU = -1 !== XU.indexOf("#define DUAL_SOURCE_BLENDING"),
            QU = yU ? "layout(location = 0, index = 0) out vec4 glFragColor;\nlayout(location = 0, index = 1) out vec4 glFragColor2;\n" : "layout(location = 0) out vec4 glFragColor;\n";
          yU && (UU = "#extension GL_EXT_blend_func_extended : require\n" + UU), UU = (UU = (UU = (UU = (UU = (UU = (UU = UU.replace(/texture2DLodEXT\s*\(/g, "textureLod(")).replace(/textureCubeLodEXT\s*\(/g, "textureLod(")).replace(/textureCube\s*\(/g, "texture(")).replace(/gl_FragDepthEXT/g, "gl_FragDepth")).replace(/gl_FragColor/g, "glFragColor")).replace(/gl_FragData/g, "glFragData")).replace(/void\s+?main\s*\(/g, (cU || zU ? "" : QU) + "void main(")
        } else {
          XU.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0 && (UU = "invariant gl_Position;\n" + UU);
          if (-1 !== XU.indexOf("#define MULTIVIEW")) return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + UU
        }
        return UU
      }
    }
    var NU = zU(41023),
      IU = zU(41036),
      pU = zU(41042),
      aU = zU(40940),
      tU = zU(40983),
      gU = zU(40965),
      kU = zU(41048),
      GU = zU(41012);
    class BU {}
    class ZU extends QU.c {
      get name() {
        return this._name
      }
      set name(UU) {
        this._name = UU
      }
      get version() {
        return this._webGLVersion
      }
      static get ShadersRepository() {
        return cU.b.ShadersRepository
      }
      static set ShadersRepository(UU) {
        cU.b.ShadersRepository = UU
      }
      get supportsUniformBuffers() {
        return this.Fa > 1 && !this.disableUniformBuffers
      }
      get needPOTTextures() {
        return this._webGLVersion < 2 || this.forcePOTTextures
      }
      get _supportsHardwareTextureRescaling() {
        return !1
      }
      snapshotRenderingReset() {
        this.snapshotRendering = !1
      }
      constructor(UU, XU, zU, cU) {
        if (zU = zU || {}, super(XU ?? zU.antialias, zU, cU), this._name = "WebGL", this.forcePOTTextures = !1, this.validateShaderPrograms = !1, this.disableUniformBuffers = !1, this._webGLVersion = 1, this._integerMRTAttachmentsMask = 0, this._vertexAttribArraysEnabled = [], this._uintIndicesCurrentlySet = !1, this._currentBoundBuffer = new Array, this._currentFramebuffer = null, this._dummyFramebuffer = null, this._currentBufferPointers = new Array, this._currentInstanceLocations = new Array, this._currentInstanceBuffers = new Array, this._vaoRecordInProgress = !1, this._mustWipeVertexAttributes = !1, this._nextFreeTextureSlots = new Array, this._maxSimultaneousTextures = 0, this._maxMSAASamplesOverride = null, this._unpackFlipYCached = null, this.enableUnpackFlipYCached = !0, this._boundUniforms = {}, !UU) return;
        let QU;
        if (UU.getContext) {
          if (QU = UU, void 0 === zU.preserveDrawingBuffer && (zU.preserveDrawingBuffer = !1), void 0 === zU.xrCompatible && (zU.xrCompatible = !1), navigator && navigator.userAgent) {
            this._setupMobileChecks();
            const UU = navigator.userAgent;
            for (const XU of ZU.ExceptionList) {
              const cU = XU.key,
                yU = XU.targets;
              if (new RegExp(cU).test(UU)) {
                if (XU.capture && XU.captureConstraint) {
                  const zU = XU.capture,
                    cU = XU.captureConstraint,
                    yU = new RegExp(zU).exec(UU);
                  if (yU && yU.length > 0) {
                    if (parseInt(yU[yU.length - 1]) >= cU) continue
                  }
                }
                for (const UU of yU) switch (UU) {
                  case "uniformBuffer":
                    this.disableUniformBuffers = !0;
                    break;
                  case "vao":
                    this.disableVertexArrayObjects = !0;
                    break;
                  case "antialias":
                    zU.antialias = !1;
                    break;
                  case "maxMSAASamples":
                    this._maxMSAASamplesOverride = 1
                }
              }
            }
          }
          if (this._doNotHandleContextLost ? this._onContextLost = () => {
              (0, yU.y)(this._gl)
            } : (this._onContextLost = UU => {
              UU.preventDefault(), this._contextWasLost = !0, (0, yU.y)(this._gl), FU.b.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
            }, this._onContextRestored = () => {
              this._restoreEngineAfterContextLost((() => this._initGLContext()))
            }, QU.addEventListener("webglcontextrestored", this._onContextRestored, !1), zU.powerPreference = zU.powerPreference || "high-performance"), QU.addEventListener("webglcontextlost", this._onContextLost, !1), this._badDesktopOS && (zU.xrCompatible = !1), !zU.disableWebGL2Support) try {
            this._gl = QU.getContext("webgl2", zU) || QU.getContext("experimental-webgl2", zU), this._gl && (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2", this._gl.deleteQuery || (this._webGLVersion = 1, this._shaderPlatformName = "WEBGL1"))
          } catch (EU) {}
          if (!this._gl) {
            if (!QU) throw new Error("The provided canvas is null or undefined.");
            try {
              this._gl = QU.getContext("webgl", zU) || QU.getContext("experimental-webgl", zU)
            } catch (EU) {
              throw new Error("WebGL not supported", {
                cause: EU
              })
            }
          }
          if (!this._gl) throw new Error("WebGL not supported")
        } else {
          this._gl = UU, QU = this._gl.canvas, this._gl.renderbufferStorageMultisample ? (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2") : this._shaderPlatformName = "WEBGL1";
          const XU = this._gl.getContextAttributes();
          XU && (zU.stencil = XU.stencil)
        }
        this._sharedInit(QU), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== zU.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = zU.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
        for (let yU = 0; yU < this._caps.maxVertexAttribs; yU++) this._currentBufferPointers[yU] = new BU;
        this._shaderProcessor = this.Fa > 1 ? new YU : new DU;
        const AU = `Babylon.js v${ZU.Version}`;
        FU.b.Log(AU + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", AU);
        const oU = (0, yU.A)(this._gl);
        oU.validateShaderPrograms = this.validateShaderPrograms, oU.parallelShaderCompile = this._caps.parallelShaderCompile
      }
      _clearEmptyResources() {
        this._dummyFramebuffer = null, super._clearEmptyResources()
      }
      _getShaderProcessingContext(UU) {
        return null
      }
      areAllEffectsReady() {
        for (const UU in this._compiledEffects) {
          if (!this._compiledEffects[UU].isReady()) return !1
        }
        return !0
      }
      _initGLContext() {
        this._caps = {
          maxTexturesImageUnits: this._gl.getParameter(this._gl.MAX_TEXTURE_IMAGE_UNITS),
          maxCombinedTexturesImageUnits: this._gl.getParameter(this._gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
          maxVertexTextureImageUnits: this._gl.getParameter(this._gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
          maxTextureSize: this._gl.getParameter(this._gl.MAX_TEXTURE_SIZE),
          maxSamples: this._webGLVersion > 1 ? this._gl.getParameter(this._gl.MAX_SAMPLES) : 1,
          maxCubemapTextureSize: this._gl.getParameter(this._gl.MAX_CUBE_MAP_TEXTURE_SIZE),
          maxRenderTextureSize: this._gl.getParameter(this._gl.MAX_RENDERBUFFER_SIZE),
          maxVertexAttribs: this._gl.getParameter(this._gl.MAX_VERTEX_ATTRIBS),
          maxVaryingVectors: this._gl.getParameter(this._gl.MAX_VARYING_VECTORS),
          maxFragmentUniformVectors: this._gl.getParameter(this._gl.MAX_FRAGMENT_UNIFORM_VECTORS),
          maxVertexUniformVectors: this._gl.getParameter(this._gl.MAX_VERTEX_UNIFORM_VECTORS),
          shaderFloatPrecision: 0,
          parallelShaderCompile: this._gl.getExtension("KHR_parallel_shader_compile") || void 0,
          standardDerivatives: this._webGLVersion > 1 || null !== this._gl.getExtension("OES_standard_derivatives"),
          maxAnisotropy: 1,
          astc: this._gl.getExtension("WEBGL_compressed_texture_astc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_astc"),
          bptc: this._gl.getExtension("EXT_texture_compression_bptc") || this._gl.getExtension("WEBKIT_EXT_texture_compression_bptc"),
          s3tc: this._gl.getExtension("WEBGL_compressed_texture_s3tc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc"),
          s3tc_srgb: this._gl.getExtension("WEBGL_compressed_texture_s3tc_srgb") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc_srgb"),
          pvrtc: this._gl.getExtension("WEBGL_compressed_texture_pvrtc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
          etc1: this._gl.getExtension("WEBGL_compressed_texture_etc1") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_etc1"),
          etc2: this._gl.getExtension("WEBGL_compressed_texture_etc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_etc") || this._gl.getExtension("WEBGL_compressed_texture_es3_0"),
          textureAnisotropicFilterExtension: this._gl.getExtension("EXT_texture_filter_anisotropic") || this._gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || this._gl.getExtension("MOZ_EXT_texture_filter_anisotropic"),
          uintIndices: this._webGLVersion > 1 || null !== this._gl.getExtension("OES_element_index_uint"),
          fragmentDepthSupported: this._webGLVersion > 1 || null !== this._gl.getExtension("EXT_frag_depth"),
          highPrecisionShaderSupported: !1,
          timerQuery: this._gl.getExtension("EXT_disjoint_timer_query_webgl2") || this._gl.getExtension("EXT_disjoint_timer_query"),
          supportOcclusionQuery: this._webGLVersion > 1,
          canUseTimestampForTimerQuery: !1,
          drawBuffersExtension: !1,
          maxMSAASamples: 1,
          colorBufferFloat: !!(this._webGLVersion > 1 && this._gl.getExtension("EXT_color_buffer_float")),
          blendFloat: null !== this._gl.getExtension("EXT_float_blend"),
          supportFloatTexturesResolve: !1,
          rg11b10ufColorRenderable: !1,
          colorBufferHalfFloat: !!(this._webGLVersion > 1 && this._gl.getExtension("EXT_color_buffer_half_float")),
          textureFloat: !!(this._webGLVersion > 1 || this._gl.getExtension("OES_texture_float")),
          textureHalfFloat: !!(this._webGLVersion > 1 || this._gl.getExtension("OES_texture_half_float")),
          textureHalfFloatRender: !1,
          textureFloatLinearFiltering: !1,
          textureFloatRender: !1,
          textureHalfFloatLinearFiltering: !1,
          vertexArrayObject: !1,
          instancedArrays: !1,
          textureLOD: !!(this._webGLVersion > 1 || this._gl.getExtension("EXT_shader_texture_lod")),
          texelFetch: 1 !== this._webGLVersion,
          blendMinMax: !1,
          multiview: this._gl.getExtension("OVR_multiview2"),
          oculusMultiview: this._gl.getExtension("OCULUS_multiview"),
          depthTextureExtension: !1,
          canUseGLInstanceID: this._webGLVersion > 1,
          canUseGLVertexID: this._webGLVersion > 1,
          supportComputeShaders: !1,
          supportSRGBBuffers: !1,
          supportTransformFeedbacks: this._webGLVersion > 1,
          textureMaxLevel: this._webGLVersion > 1,
          texture2DArrayMaxLayerCount: this._webGLVersion > 1 ? this._gl.getParameter(this._gl.MAX_ARRAY_TEXTURE_LAYERS) : 128,
          disableMorphTargetTexture: !1,
          textureNorm16: !!this._gl.getExtension("EXT_texture_norm16"),
          blendParametersPerTarget: !1,
          dualSourceBlending: !1,
          supportReadWriteStorageTextures: !1
        }, this._caps.supportFloatTexturesResolve = this._caps.colorBufferFloat, this._caps.rg11b10ufColorRenderable = this._caps.colorBufferFloat, this._glVersion = this._gl.getParameter(this._gl.VERSION);
        const UU = this._gl.getExtension("WEBGL_debug_renderer_info");
        null != UU && (this._glRenderer = this._gl.getParameter(UU.UNMASKED_RENDERER_WEBGL), this._glVendor = this._gl.getParameter(UU.UNMASKED_VENDOR_WEBGL)), this._glVendor || (this._glVendor = this._gl.getParameter(this._gl.VENDOR) || "Unknown vendor"), this._glRenderer || (this._glRenderer = this._gl.getParameter(this._gl.RENDERER) || "Unknown renderer"), 36193 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 36193), 34842 !== this._gl.RGBA16F && (this._gl.RGBA16F = 34842), 34836 !== this._gl.RGBA32F && (this._gl.RGBA32F = 34836), 35056 !== this._gl.DEPTH24_STENCIL8 && (this._gl.DEPTH24_STENCIL8 = 35056), this._caps.timerQuery && (1 === this._webGLVersion && (this._gl.getQuery = this._caps.timerQuery.getQueryEXT.bind(this._caps.timerQuery)), this._caps.canUseTimestampForTimerQuery = (this._gl.getQuery(this._caps.timerQuery.TIMESTAMP_EXT, this._caps.timerQuery.QUERY_COUNTER_BITS_EXT) ?? 0) > 0), this._caps.maxAnisotropy = this._caps.textureAnisotropicFilterExtension ? this._gl.getParameter(this._caps.textureAnisotropicFilterExtension.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0, this._caps.textureFloatLinearFiltering = !(!this._caps.textureFloat || !this._gl.getExtension("OES_texture_float_linear")), this._caps.textureFloatRender = !(!this._caps.textureFloat || !this._canRenderToFloatFramebuffer()), this._caps.textureHalfFloatLinearFiltering = !!(this._webGLVersion > 1 || this._caps.textureHalfFloat && this._gl.getExtension("OES_texture_half_float_linear")), this._caps.textureNorm16 && (this._gl.R16_EXT = 33322, this._gl.RG16_EXT = 33324, this._gl.RGB16_EXT = 32852, this._gl.RGBA16_EXT = 32859, this._gl.R16_SNORM_EXT = 36760, this._gl.RG16_SNORM_EXT = 36761, this._gl.RGB16_SNORM_EXT = 36762, this._gl.RGBA16_SNORM_EXT = 36763);
        const XU = this._gl.getExtension("OES_draw_buffers_indexed");
        if (this._caps.blendParametersPerTarget = !!XU, this._alphaState = new GU.c(this._caps.blendParametersPerTarget), XU && (this._gl.blendEquationSeparateIndexed = XU.blendEquationSeparateiOES.bind(XU), this._gl.blendEquationIndexed = XU.blendEquationiOES.bind(XU), this._gl.blendFuncSeparateIndexed = XU.blendFuncSeparateiOES.bind(XU), this._gl.blendFuncIndexed = XU.blendFunciOES.bind(XU), this._gl.colorMaskIndexed = XU.colorMaskiOES.bind(XU), this._gl.disableIndexed = XU.disableiOES.bind(XU), this._gl.enableIndexed = XU.enableiOES.bind(XU)), this._caps.dualSourceBlending = !!this._gl.getExtension("WEBGL_blend_func_extended"), this._caps.astc && (this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR), this._caps.bptc && (this._gl.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = this._caps.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT), this._caps.s3tc_srgb && (this._gl.COMPRESSED_SRGB_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT), this._caps.etc2 && (this._gl.COMPRESSED_SRGB8_ETC2 = this._caps.etc2.COMPRESSED_SRGB8_ETC2, this._gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = this._caps.etc2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC), this._webGLVersion > 1 && 5131 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 5131), this._caps.textureHalfFloatRender = this._caps.textureHalfFloat && this._canRenderToHalfFloatFramebuffer(), this._webGLVersion > 1) this._caps.drawBuffersExtension = !0, this._caps.maxMSAASamples = null !== this._maxMSAASamplesOverride ? this._maxMSAASamplesOverride : this._gl.getParameter(this._gl.MAX_SAMPLES), this._caps.maxDrawBuffers = this._gl.getParameter(this._gl.MAX_DRAW_BUFFERS);
        else {
          const UU = this._gl.getExtension("WEBGL_draw_buffers");
          if (null !== UU) {
            this._caps.drawBuffersExtension = !0, this._gl.drawBuffers = UU.drawBuffersWEBGL.bind(UU), this._caps.maxDrawBuffers = this._gl.getParameter(UU.MAX_DRAW_BUFFERS_WEBGL), this._gl.DRAW_FRAMEBUFFER = this._gl.FRAMEBUFFER;
            for (let XU = 0; XU < 16; XU++) this._gl["COLOR_ATTACHMENT" + XU + "_WEBGL"] = UU["COLOR_ATTACHMENT" + XU + "_WEBGL"]
          }
        }
        if (this._webGLVersion > 1) this._caps.depthTextureExtension = !0;
        else {
          const UU = this._gl.getExtension("WEBGL_depth_texture");
          null != UU && (this._caps.depthTextureExtension = !0, this._gl.UNSIGNED_INT_24_8 = UU.UNSIGNED_INT_24_8_WEBGL)
        }
        if (this.disableVertexArrayObjects) this._caps.vertexArrayObject = !1;
        else if (this._webGLVersion > 1) this._caps.vertexArrayObject = !0;
        else {
          const UU = this._gl.getExtension("OES_vertex_array_object");
          null != UU && (this._caps.vertexArrayObject = !0, this._gl.createVertexArray = UU.createVertexArrayOES.bind(UU), this._gl.bindVertexArray = UU.bindVertexArrayOES.bind(UU), this._gl.deleteVertexArray = UU.deleteVertexArrayOES.bind(UU))
        }
        if (this._webGLVersion > 1) this._caps.instancedArrays = !0;
        else {
          const UU = this._gl.getExtension("ANGLE_instanced_arrays");
          null != UU ? (this._caps.instancedArrays = !0, this._gl.drawArraysInstanced = UU.drawArraysInstancedANGLE.bind(UU), this._gl.drawElementsInstanced = UU.drawElementsInstancedANGLE.bind(UU), this._gl.vertexAttribDivisor = UU.vertexAttribDivisorANGLE.bind(UU)) : this._caps.instancedArrays = !1
        }
        if (this._gl.getShaderPrecisionFormat) {
          const UU = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.HIGH_FLOAT),
            XU = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
          if (UU && XU && (this._caps.highPrecisionShaderSupported = 0 !== UU.precision && 0 !== XU.precision, this._caps.shaderFloatPrecision = Math.min(UU.precision, XU.precision)), !this._shouldUseHighPrecisionShader) {
            const UU = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.MEDIUM_FLOAT),
              XU = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.MEDIUM_FLOAT);
            UU && XU && (this._caps.shaderFloatPrecision = Math.min(UU.precision, XU.precision))
          }
          this._caps.shaderFloatPrecision < 10 && (this._caps.shaderFloatPrecision = 10)
        }
        if (this._webGLVersion > 1) this._caps.blendMinMax = !0;
        else {
          const UU = this._gl.getExtension("EXT_blend_minmax");
          null != UU && (this._caps.blendMinMax = !0, this._gl.MAX = UU.MAX_EXT, this._gl.MIN = UU.MIN_EXT)
        }
        if (!this._caps.supportSRGBBuffers) {
          if (this._webGLVersion > 1) this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
            SRGB: WebGL2RenderingContext.SRGB,
            SRGB8: WebGL2RenderingContext.SRGB8,
            SRGB8_ALPHA8: WebGL2RenderingContext.SRGB8_ALPHA8
          };
          else {
            const UU = this._gl.getExtension("EXT_sRGB");
            null != UU && (this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
              SRGB: UU.SRGB_EXT,
              SRGB8: UU.SRGB_ALPHA_EXT,
              SRGB8_ALPHA8: UU.SRGB_ALPHA_EXT
            })
          }
          if (this._creationOptions) {
            const UU = this._creationOptions.forceSRGBBufferSupportState;
            void 0 !== UU && (this._caps.supportSRGBBuffers = this._caps.supportSRGBBuffers && UU)
          }
        }
        this._depthCullingState.depthTest = !0, this._depthCullingState.depthFunc = this._gl.LEQUAL, this._depthCullingState.depthMask = !0, this._maxSimultaneousTextures = this._caps.maxCombinedTexturesImageUnits;
        for (let zU = 0; zU < this._maxSimultaneousTextures; zU++) this._nextFreeTextureSlots.push(zU);
        "Mali-G72" === this._glRenderer && (this._caps.disableMorphTargetTexture = !0)
      }
      _initFeatures() {
        this._features = {
          forceBitmapOverHTMLImageElement: "undefined" === typeof HTMLImageElement,
          supportRenderAndCopyToLodForFloatTextures: 1 !== this._webGLVersion,
          supportDepthStencilTexture: 1 !== this._webGLVersion,
          supportShadowSamplers: 1 !== this._webGLVersion,
          uniformBufferHardCheckMatrix: !1,
          allowTexturePrefiltering: 1 !== this._webGLVersion,
          trackUbosInFrame: !1,
          checkUbosContentBeforeUpload: !1,
          supportCSM: 1 !== this._webGLVersion,
          basisNeedsPOT: 1 === this._webGLVersion,
          support3DTextures: 1 !== this._webGLVersion,
          needTypeSuffixInShaderConstants: 1 !== this._webGLVersion,
          supportMSAA: 1 !== this._webGLVersion,
          supportSSAO2: 1 !== this._webGLVersion,
          supportIBLShadows: 1 !== this._webGLVersion,
          supportExtendedTextureFormats: 1 !== this._webGLVersion,
          supportSwitchCaseInShader: 1 !== this._webGLVersion,
          supportSyncTextureRead: !0,
          needsInvertingBitmap: !0,
          useUBOBindingCache: !0,
          needShaderCodeInlining: !1,
          needToAlwaysBindUniformBuffers: !1,
          supportRenderPasses: !1,
          supportSpriteInstancing: !0,
          forceVertexBufferStrideAndOffsetMultiple4Bytes: !1,
          _checkNonFloatVertexBuffersDontRecreatePipelineContext: !1
        }
      }
      get Fa() {
        return this._webGLVersion
      }
      getClassName() {
        return "ThinEngine"
      }
      _prepareWorkingCanvas() {
        if (this._workingCanvas) return;
        this._workingCanvas = this.createCanvas(1, 1);
        const UU = this._workingCanvas.getContext("2d");
        UU && (this._workingContext = UU)
      }
      getInfo() {
        return this.getGlInfo()
      }
      getGlInfo() {
        return {
          vendor: this._glVendor,
          renderer: this._glRenderer,
          version: this._glVersion
        }
      }
      extractDriverInfo() {
        const UU = this.getGlInfo();
        return UU && UU.renderer ? UU.renderer : ""
      }
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferWidth : this._gl.drawingBufferWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferHeight : this._gl.drawingBufferHeight
      }
      clear(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const QU = this.stencilStateComposer.useStencilGlobalOnly;
        this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = QU;
        let AU = 0;
        if (XU && UU) {
          let XU = !0;
          if (this._currentRenderTarget) {
            const zU = this._currentRenderTarget.texture?.format;
            if (void 0 !== zU && (0, kU.i)(zU)) {
              const zU = this._currentRenderTarget.texture?.type;
              void 0 !== zU && (0, kU.j)(zU) ? (ZU._TempClearColorUint32[0] = 255 * UU.r, ZU._TempClearColorUint32[1] = 255 * UU.g, ZU._TempClearColorUint32[2] = 255 * UU.b, ZU._TempClearColorUint32[3] = 255 * UU.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, ZU._TempClearColorUint32), XU = !1) : (ZU._TempClearColorInt32[0] = 255 * UU.r, ZU._TempClearColorInt32[1] = 255 * UU.g, ZU._TempClearColorInt32[2] = 255 * UU.b, ZU._TempClearColorInt32[3] = 255 * UU.a, this._gl.clearBufferiv(this._gl.COLOR, 0, ZU._TempClearColorInt32), XU = !1)
            }
          }
          XU && (this._gl.clearColor(UU.r, UU.g, UU.b, void 0 !== UU.a ? UU.a : 1), AU |= this._gl.COLOR_BUFFER_BIT)
        }
        zU && (this.XyU ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), AU |= this._gl.DEPTH_BUFFER_BIT), cU && (this._gl.clearStencil(yU), AU |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(AU)
      }
      _clearColorAttachment(UU, XU, zU, cU) {
        if ((0, kU.i)(zU)) {
          const zU = (0, kU.j)(cU),
            yU = zU ? ZU._TempClearColorUint32 : ZU._TempClearColorInt32;
          return yU[0] = XU.r, yU[1] = XU.g, yU[2] = XU.b, yU[3] = XU.a, void(zU ? this._gl.clearBufferuiv(this._gl.COLOR, UU, yU) : this._gl.clearBufferiv(this._gl.COLOR, UU, yU))
        }
        ZU._TempClearColorFloat32[0] = XU.r, ZU._TempClearColorFloat32[1] = XU.g, ZU._TempClearColorFloat32[2] = XU.b, ZU._TempClearColorFloat32[3] = XU.a, this._gl.clearBufferfv(this._gl.COLOR, UU, ZU._TempClearColorFloat32)
      }
      _viewport(UU, XU, zU, cU) {
        UU === this._viewportCached.x && XU === this._viewportCached.y && zU === this._viewportCached.z && cU === this._viewportCached.w || (this._viewportCached.x = UU, this._viewportCached.y = XU, this._viewportCached.z = zU, this._viewportCached.w = cU, this._gl.viewport(UU, XU, zU, cU))
      }
      ZY() {
        super.ZY(), this._badOS && this.flushFramebuffer()
      }
      get performanceMonitor() {
        throw new Error("Not Supported by ThinEngine")
      }
      bindFramebuffer(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zU = arguments.length > 2 ? arguments[2] : void 0,
          cU = arguments.length > 3 ? arguments[3] : void 0,
          yU = arguments.length > 4 ? arguments[4] : void 0,
          QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          AU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const oU = UU;
        this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = UU, this._integerMRTAttachmentsMask = !UU.isMulti && UU.texture && (0, kU.i)(UU.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(oU._framebuffer);
        const DU = this._gl;
        UU.isMulti || (UU.is2DArray || UU.is3D ? (DU.framebufferTextureLayer(DU.FRAMEBUFFER, DU.COLOR_ATTACHMENT0, UU.texture._hardwareTexture?.underlyingResource, QU, AU), oU._currentLOD = QU) : UU.isCube ? DU.framebufferTexture2D(DU.FRAMEBUFFER, DU.COLOR_ATTACHMENT0, DU.TEXTURE_CUBE_MAP_POSITIVE_X + XU, UU.texture._hardwareTexture?.underlyingResource, QU) : oU._currentLOD !== QU && (DU.framebufferTexture2D(DU.FRAMEBUFFER, DU.COLOR_ATTACHMENT0, DU.TEXTURE_2D, UU.texture._hardwareTexture?.underlyingResource, QU), oU._currentLOD = QU));
        const EU = UU._depthStencilTexture;
        if (EU) {
          UU.is3D && (UU.texture.width === EU.width && UU.texture.height === EU.height && UU.texture.depth === EU.depth || FU.b.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
          const zU = UU._depthStencilTextureWithStencil ? DU.DEPTH_STENCIL_ATTACHMENT : DU.DEPTH_ATTACHMENT;
          UU.is2DArray || UU.is3D ? DU.framebufferTextureLayer(DU.FRAMEBUFFER, zU, EU._hardwareTexture?.underlyingResource, QU, AU) : UU.isCube ? DU.framebufferTexture2D(DU.FRAMEBUFFER, zU, DU.TEXTURE_CUBE_MAP_POSITIVE_X + XU, EU._hardwareTexture?.underlyingResource, QU) : DU.framebufferTexture2D(DU.FRAMEBUFFER, zU, DU.TEXTURE_2D, EU._hardwareTexture?.underlyingResource, QU)
        }
        oU._MSAAFramebuffer && this._bindUnboundFramebuffer(oU._MSAAFramebuffer), this._cachedViewport && !yU ? this.setViewport(this._cachedViewport, zU, cU) : (zU || (zU = UU.width, QU && (zU /= Math.pow(2, QU))), cU || (cU = UU.height, QU && (cU /= Math.pow(2, QU))), this._viewport(0, 0, zU, cU)), this.wipeCaches()
      }
      setStateCullFaceType(UU, XU) {
        const zU = this.cullBackFaces ?? UU ?? 1 ? this._gl.BACK : this._gl.FRONT;
        (this._depthCullingState.cullFace !== zU || XU) && (this._depthCullingState.cullFace = zU)
      }
      setState(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zU = arguments.length > 2 ? arguments[2] : void 0,
          cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          yU = arguments.length > 4 ? arguments[4] : void 0,
          QU = arguments.length > 5 ? arguments[5] : void 0,
          AU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        (this._depthCullingState.cull !== UU || zU) && (this._depthCullingState.cull = UU), this.setStateCullFaceType(yU, zU), this.setZOffset(XU), this.setZOffsetUnits(AU);
        const FU = cU ? this._gl.CW : this._gl.CCW;
        (this._depthCullingState.frontFace !== FU || zU) && (this._depthCullingState.frontFace = FU), this._stencilStateComposer.stencilMaterial = QU
      }
      _resolveAndGenerateMipMapsFramebuffer(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        UU.disableAutomaticMSAAResolve || (UU.isMulti ? this.resolveMultiFramebuffer(UU) : this.resolveFramebuffer(UU)), XU || (UU.isMulti ? this.generateMipMapsMultiFramebuffer(UU) : this.generateMipMapsFramebuffer(UU))
      }
      _bindUnboundFramebuffer(UU) {
        this._currentFramebuffer !== UU && (this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, UU), this._currentFramebuffer = UU)
      }
      _currentFrameBufferIsDefaultFrameBuffer() {
        return null === this._currentFramebuffer
      }
      generateMipmaps(UU) {
        const XU = this._getTextureTarget(UU);
        this._bindTextureDirectly(XU, UU, !0), this._gl.generateMipmap(XU), this._bindTextureDirectly(XU, null)
      }
      unBindFramebuffer(UU, XU, zU) {
        const cU = UU;
        this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, this._resolveAndGenerateMipMapsFramebuffer(UU, XU), zU && (cU._MSAAFramebuffer && this._bindUnboundFramebuffer(cU._framebuffer), zU()), this._bindUnboundFramebuffer(null)
      }
      generateMipMapsFramebuffer(UU) {
        UU.isMulti || !UU.texture?.generateMipMaps || UU.isCube || this.generateMipmaps(UU.texture)
      }
      resolveFramebuffer(UU) {
        const XU = UU,
          zU = this._gl;
        if (!XU._MSAAFramebuffer || XU.isMulti) return;
        let cU = XU.resolveMSAAColors ? zU.COLOR_BUFFER_BIT : 0;
        cU |= XU._generateDepthBuffer && XU.resolveMSAADepth ? zU.DEPTH_BUFFER_BIT : 0, cU |= XU._generateStencilBuffer && XU.resolveMSAAStencil ? zU.STENCIL_BUFFER_BIT : 0, zU.bindFramebuffer(zU.READ_FRAMEBUFFER, XU._MSAAFramebuffer), zU.bindFramebuffer(zU.DRAW_FRAMEBUFFER, XU._framebuffer), zU.blitFramebuffer(0, 0, UU.width, UU.height, 0, 0, UU.width, UU.height, cU, zU.NEAREST)
      }
      flushFramebuffer() {
        this._gl.flush()
      }
      restoreDefaultFramebuffer() {
        this._currentRenderTarget ? this.unBindFramebuffer(this._currentRenderTarget) : this._bindUnboundFramebuffer(null), this._cachedViewport && this.setViewport(this._cachedViewport), this.wipeCaches()
      }
      _resetVertexBufferBinding() {
        this.bindArrayBuffer(null), this._cachedVertexBuffers = null
      }
      createVertexBuffer(UU, XU, zU) {
        return this._createVertexBuffer(UU, this._gl.STATIC_DRAW)
      }
      _createVertexBuffer(UU, XU) {
        const zU = this._gl.createBuffer();
        if (!zU) throw new Error("Unable to create vertex buffer");
        const cU = new NU.d(zU);
        return this.bindArrayBuffer(cU), "number" !== typeof UU ? UU instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(UU), XU), cU.xY = 4 * UU.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, UU, XU), cU.xY = UU.byteLength) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Uint8Array(UU), XU), cU.xY = UU), this._resetVertexBufferBinding(), cU.references = 1, cU
      }
      createDynamicVertexBuffer(UU, XU) {
        return this._createVertexBuffer(UU, this._gl.DYNAMIC_DRAW)
      }
      _resetIndexBufferBinding() {
        this.bindIndexBuffer(null), this._cachedIndexBuffer = null
      }
      createIndexBuffer(UU, XU, zU) {
        const cU = this._gl.createBuffer(),
          yU = new NU.d(cU);
        if (!cU) throw new Error("Unable to create index buffer");
        this.bindIndexBuffer(yU);
        const QU = this._normalizeIndexData(UU);
        return this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, QU, XU ? this._gl.DYNAMIC_DRAW : this._gl.STATIC_DRAW), this._resetIndexBufferBinding(), yU.references = 1, yU.is32Bits = 4 === QU.BYTES_PER_ELEMENT, yU
      }
      _normalizeIndexData(UU) {
        if (2 === UU.BYTES_PER_ELEMENT) return UU;
        if (this._caps.uintIndices) {
          if (UU instanceof Uint32Array) return UU;
          for (let XU = 0; XU < UU.length; XU++)
            if (UU[XU] >= 65535) return new Uint32Array(UU);
          return new Uint16Array(UU)
        }
        return new Uint16Array(UU)
      }
      bindArrayBuffer(UU) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(UU, this._gl.ARRAY_BUFFER)
      }
      bindUniformBlock(UU, XU, zU) {
        const cU = UU.program,
          yU = this._gl.getUniformBlockIndex(cU, XU);
        this._gl.uniformBlockBinding(cU, yU, zU)
      }
      bindIndexBuffer(UU) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(UU, this._gl.ELEMENT_ARRAY_BUFFER)
      }
      _bindBuffer(UU, XU) {
        (this._vaoRecordInProgress || this._currentBoundBuffer[XU] !== UU) && (this._gl.bindBuffer(XU, UU ? UU.underlyingResource : null), this._currentBoundBuffer[XU] = UU)
      }
      updateArrayBuffer(UU) {
        this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, UU)
      }
      _vertexAttribPointer(UU, XU, zU, cU, yU, QU, AU) {
        const FU = this._currentBufferPointers[XU];
        if (!FU) return;
        let oU = !1;
        FU.active ? (FU.buffer !== UU && (FU.buffer = UU, oU = !0), FU.size !== zU && (FU.size = zU, oU = !0), FU.type !== cU && (FU.type = cU, oU = !0), FU.normalized !== yU && (FU.normalized = yU, oU = !0), FU.stride !== QU && (FU.stride = QU, oU = !0), FU.offset !== AU && (FU.offset = AU, oU = !0)) : (oU = !0, FU.active = !0, FU.index = XU, FU.size = zU, FU.type = cU, FU.normalized = yU, FU.stride = QU, FU.offset = AU, FU.buffer = UU), (oU || this._vaoRecordInProgress) && (this.bindArrayBuffer(UU), cU === this._gl.UNSIGNED_INT || cU === this._gl.INT ? this._gl.vertexAttribIPointer(XU, zU, cU, QU, AU) : this._gl.vertexAttribPointer(XU, zU, cU, yU, QU, AU))
      }
      _bindIndexBufferWithCache(UU) {
        null != UU && this._cachedIndexBuffer !== UU && (this._cachedIndexBuffer = UU, this.bindIndexBuffer(UU), this._uintIndicesCurrentlySet = UU.is32Bits)
      }
      _bindVertexBuffersAttributes(UU, XU, zU) {
        const cU = XU.getAttributesNames();
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this.unbindAllAttributes();
        for (let yU = 0; yU < cU.length; yU++) {
          const QU = XU.getAttributeLocation(yU);
          if (QU >= 0) {
            const XU = cU[yU];
            let AU = null;
            if (zU && (AU = zU[XU]), AU || (AU = UU[XU]), !AU) continue;
            this._gl.enableVertexAttribArray(QU), this._vaoRecordInProgress || (this._vertexAttribArraysEnabled[QU] = !0);
            const FU = AU.getBuffer();
            FU && (this._vertexAttribPointer(FU, QU, AU.getSize(), AU.type, AU.normalized, AU.byteStride, AU.byteOffset), AU.getIsInstanced() && (this._gl.vertexAttribDivisor(QU, AU.getInstanceDivisor()), this._vaoRecordInProgress || (this._currentInstanceLocations.push(QU), this._currentInstanceBuffers.push(FU))))
          }
        }
      }
      recordVertexArrayObject(UU, XU, zU, cU) {
        const yU = this._gl.createVertexArray();
        if (!yU) throw new Error("Unable to create VAO");
        return this._vaoRecordInProgress = !0, this._gl.bindVertexArray(yU), this._mustWipeVertexAttributes = !0, this._bindVertexBuffersAttributes(UU, zU, cU), this.bindIndexBuffer(XU), this._vaoRecordInProgress = !1, this._gl.bindVertexArray(null), yU
      }
      bindVertexArrayObject(UU, XU) {
        this._cachedVertexArrayObject !== UU && (this._cachedVertexArrayObject = UU, this._gl.bindVertexArray(UU), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._uintIndicesCurrentlySet = null != XU && XU.is32Bits, this._mustWipeVertexAttributes = !0)
      }
      bindBuffersDirectly(UU, XU, zU, cU, yU) {
        if (this._cachedVertexBuffers !== UU || this._cachedEffectForVertexBuffers !== yU) {
          this._cachedVertexBuffers = UU, this._cachedEffectForVertexBuffers = yU;
          const XU = yU.getAttributesCount();
          this._unbindVertexArrayObject(), this.unbindAllAttributes();
          let QU = 0;
          for (let AU = 0; AU < XU; AU++)
            if (AU < zU.length) {
              const XU = yU.getAttributeLocation(AU);
              XU >= 0 && (this._gl.enableVertexAttribArray(XU), this._vertexAttribArraysEnabled[XU] = !0, this._vertexAttribPointer(UU, XU, zU[AU], this._gl.FLOAT, !1, cU, QU)), QU += 4 * zU[AU]
            }
        }
        this._bindIndexBufferWithCache(XU)
      }
      _unbindVertexArrayObject() {
        this._cachedVertexArrayObject && (this._cachedVertexArrayObject = null, this._gl.bindVertexArray(null))
      }
      bindBuffers(UU, XU, zU, cU) {
        this._cachedVertexBuffers === UU && this._cachedEffectForVertexBuffers === zU || (this._cachedVertexBuffers = UU, this._cachedEffectForVertexBuffers = zU, this._bindVertexBuffersAttributes(UU, zU, cU)), this._bindIndexBufferWithCache(XU)
      }
      unbindInstanceAttributes() {
        let UU;
        for (let XU = 0, zU = this._currentInstanceLocations.length; XU < zU; XU++) {
          const zU = this._currentInstanceBuffers[XU];
          UU != zU && zU.references && (UU = zU, this.bindArrayBuffer(zU));
          const cU = this._currentInstanceLocations[XU];
          this._gl.vertexAttribDivisor(cU, 0)
        }
        this._currentInstanceBuffers.length = 0, this._currentInstanceLocations.length = 0
      }
      releaseVertexArrayObject(UU) {
        this._gl.deleteVertexArray(UU)
      }
      _releaseBuffer(UU) {
        return UU.references--, 0 === UU.references && (this._deleteBuffer(UU), !0)
      }
      _deleteBuffer(UU) {
        this._gl.deleteBuffer(UU.underlyingResource)
      }
      updateAndBindInstancesBuffer(UU, XU, zU) {
        if (this.bindArrayBuffer(UU), XU && this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, XU), void 0 !== zU[0].index) this.bindInstancesBuffer(UU, zU, !0);
        else
          for (let cU = 0; cU < 4; cU++) {
            const XU = zU[cU];
            this._vertexAttribArraysEnabled[XU] || (this._gl.enableVertexAttribArray(XU), this._vertexAttribArraysEnabled[XU] = !0), this._vertexAttribPointer(UU, XU, 4, this._gl.FLOAT, !1, 64, 16 * cU), this._gl.vertexAttribDivisor(XU, 1), this._currentInstanceLocations.push(XU), this._currentInstanceBuffers.push(UU)
          }
      }
      bindInstancesBuffer(UU, XU) {
        let zU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.bindArrayBuffer(UU);
        let cU = 0;
        if (zU)
          for (let yU = 0; yU < XU.length; yU++) {
            cU += 4 * XU[yU].attributeSize
          }
        for (let yU = 0; yU < XU.length; yU++) {
          const zU = XU[yU];
          void 0 === zU.index && (zU.index = this._currentEffect.getAttributeLocationByName(zU.attributeName)), zU.index < 0 || (this._vertexAttribArraysEnabled[zU.index] || (this._gl.enableVertexAttribArray(zU.index), this._vertexAttribArraysEnabled[zU.index] = !0), this._vertexAttribPointer(UU, zU.index, zU.attributeSize, zU.attributeType || this._gl.FLOAT, zU.normalized || !1, cU, zU.offset), this._gl.vertexAttribDivisor(zU.index, void 0 === zU.divisor ? 1 : zU.divisor), this._currentInstanceLocations.push(zU.index), this._currentInstanceBuffers.push(UU))
        }
      }
      disableInstanceAttributeByName(UU) {
        if (!this._currentEffect) return;
        const XU = this._currentEffect.getAttributeLocationByName(UU);
        this.disableInstanceAttribute(XU)
      }
      disableInstanceAttribute(UU) {
        let XU, zU = !1;
        for (; - 1 !== (XU = this._currentInstanceLocations.indexOf(UU));) this._currentInstanceLocations.splice(XU, 1), this._currentInstanceBuffers.splice(XU, 1), zU = !0;
        zU && (this._gl.vertexAttribDivisor(UU, 0), this.disableAttributeByIndex(UU))
      }
      disableAttributeByIndex(UU) {
        this._gl.disableVertexAttribArray(UU), this._vertexAttribArraysEnabled[UU] = !1, this._currentBufferPointers[UU].active = !1
      }
      draw(UU, XU, zU, cU) {
        this.drawElementsType(UU ? 0 : 1, XU, zU, cU)
      }
      drawPointClouds(UU, XU, zU) {
        this.drawArraysType(2, UU, XU, zU)
      }
      drawUnIndexed(UU, XU, zU, cU) {
        this.drawArraysType(UU ? 0 : 1, XU, zU, cU)
      }
      drawElementsType(UU, XU, zU, cU) {
        this.applyStates(), this._reportDrawCall();
        const yU = this._drawMode(UU),
          QU = this._uintIndicesCurrentlySet ? this._gl.UNSIGNED_INT : this._gl.UNSIGNED_SHORT,
          AU = this._uintIndicesCurrentlySet ? 4 : 2;
        cU ? this._gl.drawElementsInstanced(yU, zU, QU, XU * AU, cU) : this._gl.drawElements(yU, zU, QU, XU * AU)
      }
      drawArraysType(UU, XU, zU, cU) {
        this.applyStates(), this._reportDrawCall();
        const yU = this._drawMode(UU);
        cU ? this._gl.drawArraysInstanced(yU, XU, zU, cU) : this._gl.drawArrays(yU, XU, zU)
      }
      _drawMode(UU) {
        switch (UU) {
          case 0:
          default:
            return this._gl.TRIANGLES;
          case 2:
          case 3:
            return this._gl.POINTS;
          case 1:
          case 4:
            return this._gl.LINES;
          case 5:
            return this._gl.LINE_LOOP;
          case 6:
            return this._gl.LINE_STRIP;
          case 7:
            return this._gl.TRIANGLE_STRIP;
          case 8:
            return this._gl.TRIANGLE_FAN
        }
      }
      _releaseEffect(UU) {
        this._compiledEffects[UU._key] && delete this._compiledEffects[UU._key];
        const XU = UU.getPipelineContext();
        XU && this._deletePipelineContext(XU)
      }
      _deletePipelineContext(UU) {
        const XU = UU;
        XU && XU.program && (XU.program.__SPECTOR_rebuildProgram = null, (0, gU.o)(XU), this._gl && (this._currentProgram === XU.program && this._setProgram(null), this._gl.deleteProgram(XU.program)))
      }
      _getGlobalDefines(UU) {
        return (0, tU.h)(UU, this.isNDCHalfZRange, this.XyU, this.useExactSrgbConversions)
      }
      createEffect(UU, XU, zU, QU, AU, FU, oU, DU, EU) {
        let YU = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          NU = arguments.length > 10 ? arguments[10] : void 0;
        const IU = "string" === typeof UU ? UU : UU.vertexToken || UU.vertexSource || UU.vertexElement || UU.vertex,
          pU = "string" === typeof UU ? UU : UU.fragmentToken || UU.fragmentSource || UU.fragmentElement || UU.fragment,
          aU = this._getGlobalDefines(),
          tU = void 0 !== XU.attributes;
        let gU = AU ?? XU.defines ?? "";
        aU && (gU += aU);
        const kU = IU + "+" + pU + "@" + gU;
        if (this._compiledEffects[kU]) {
          const UU = this._compiledEffects[kU];
          return oU && UU.isReady() && oU(UU), UU._refCount++, UU
        }
        this._gl && (0, yU.A)(this._gl);
        const GU = new cU.b(UU, XU, tU ? this : zU, QU, this, AU, FU, oU, DU, EU, kU, XU.shaderLanguage ?? YU, XU.extraInitializationsAsync ?? NU);
        return this._compiledEffects[kU] = GU, GU
      }
      _getShaderSource(UU) {
        return this._gl.getShaderSource(UU)
      }
      createRawShaderProgram(UU, XU, zU, cU) {
        let QU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const AU = (0, yU.A)(this._gl);
        return AU._contextWasLost = this._contextWasLost, AU.validateShaderPrograms = this.validateShaderPrograms, (0, yU.v)(UU, XU, zU, cU || this._gl, QU)
      }
      createShaderProgram(UU, XU, zU, cU, QU) {
        let AU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        const FU = (0, yU.A)(this._gl);
        return FU._contextWasLost = this._contextWasLost, FU.validateShaderPrograms = this.validateShaderPrograms, (0, yU.x)(UU, XU, zU, cU, QU || this._gl, AU)
      }
      inlineShaderCode(UU) {
        return UU
      }
      createPipelineContext(UU) {
        if (this._gl) {
          (0, yU.A)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
        }
        const XU = (0, yU.r)(this._gl, UU);
        return XU.engine = this, XU
      }
      createMaterialContext() {}
      createDrawContext() {}
      _finalizePipelineContext(UU) {
        return (0, yU.h)(UU, this._gl, this.validateShaderPrograms)
      }
      _preparePipelineContextAsync(UU, XU, zU, cU, QU, AU, FU, oU, DU, EU, YU) {
        const NU = (0, yU.A)(this._gl);
        return NU._contextWasLost = this._contextWasLost, NU.validateShaderPrograms = this.validateShaderPrograms, NU._createShaderProgramInjection = this._createShaderProgram.bind(this), NU.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), NU.createShaderProgramInjection = this.createShaderProgram.bind(this), NU.loadFileInjection = this._loadFile.bind(this), (0, yU.n)(UU, XU, zU, cU, QU, AU, FU, oU, DU, EU, YU)
      }
      _createShaderProgram(UU, XU, zU, cU) {
        let QU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        return (0, yU.d)(UU, XU, zU, cU, QU)
      }
      _isRenderingStateCompiled(UU) {
        return !this._isDisposed && (0, yU.l)(UU, this._gl, this.validateShaderPrograms)
      }
      _executeWhenRenderingStateIsCompiled(UU, XU) {
        (0, yU.g)(UU, XU)
      }
      getUniforms(UU, XU) {
        const zU = new Array,
          cU = UU;
        for (let yU = 0; yU < XU.length; yU++) zU.push(this._gl.getUniformLocation(cU.program, XU[yU]));
        return zU
      }
      getAttributes(UU, XU) {
        const zU = [],
          cU = UU;
        for (let QU = 0; QU < XU.length; QU++) try {
          zU.push(this._gl.getAttribLocation(cU.program, XU[QU]))
        } catch (yU) {
          zU.push(-1)
        }
        return zU
      }
      enableEffect(UU) {
        (UU = null !== UU && (0, AU.c)(UU) ? UU.effect : UU) && UU !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(UU), this._currentEffect = UU, UU.onBind && UU.onBind(UU), UU._onBindObservable && UU._onBindObservable.notifyObservers(UU))
      }
      setInt(UU, XU) {
        return !!UU && (this._gl.uniform1i(UU, XU), !0)
      }
      setInt2(UU, XU, zU) {
        return !!UU && (this._gl.uniform2i(UU, XU, zU), !0)
      }
      setInt3(UU, XU, zU, cU) {
        return !!UU && (this._gl.uniform3i(UU, XU, zU, cU), !0)
      }
      setInt4(UU, XU, zU, cU, yU) {
        return !!UU && (this._gl.uniform4i(UU, XU, zU, cU, yU), !0)
      }
      setIntArray(UU, XU) {
        return !!UU && (this._gl.uniform1iv(UU, XU), !0)
      }
      setIntArray2(UU, XU) {
        return !(!UU || XU.length % 2 !== 0) && (this._gl.uniform2iv(UU, XU), !0)
      }
      setIntArray3(UU, XU) {
        return !(!UU || XU.length % 3 !== 0) && (this._gl.uniform3iv(UU, XU), !0)
      }
      setIntArray4(UU, XU) {
        return !(!UU || XU.length % 4 !== 0) && (this._gl.uniform4iv(UU, XU), !0)
      }
      setUInt(UU, XU) {
        return !!UU && (this._gl.uniform1ui(UU, XU), !0)
      }
      setUInt2(UU, XU, zU) {
        return !!UU && (this._gl.uniform2ui(UU, XU, zU), !0)
      }
      setUInt3(UU, XU, zU, cU) {
        return !!UU && (this._gl.uniform3ui(UU, XU, zU, cU), !0)
      }
      setUInt4(UU, XU, zU, cU, yU) {
        return !!UU && (this._gl.uniform4ui(UU, XU, zU, cU, yU), !0)
      }
      setUIntArray(UU, XU) {
        return !!UU && (this._gl.uniform1uiv(UU, XU), !0)
      }
      setUIntArray2(UU, XU) {
        return !(!UU || XU.length % 2 !== 0) && (this._gl.uniform2uiv(UU, XU), !0)
      }
      setUIntArray3(UU, XU) {
        return !(!UU || XU.length % 3 !== 0) && (this._gl.uniform3uiv(UU, XU), !0)
      }
      setUIntArray4(UU, XU) {
        return !(!UU || XU.length % 4 !== 0) && (this._gl.uniform4uiv(UU, XU), !0)
      }
      setArray(UU, XU) {
        return !!UU && (!(XU.length < 1) && (this._gl.uniform1fv(UU, XU), !0))
      }
      setArray2(UU, XU) {
        return !(!UU || XU.length % 2 !== 0) && (this._gl.uniform2fv(UU, XU), !0)
      }
      setArray3(UU, XU) {
        return !(!UU || XU.length % 3 !== 0) && (this._gl.uniform3fv(UU, XU), !0)
      }
      setArray4(UU, XU) {
        return !(!UU || XU.length % 4 !== 0) && (this._gl.uniform4fv(UU, XU), !0)
      }
      setMatrices(UU, XU) {
        return !!UU && (this._gl.uniformMatrix4fv(UU, !1, XU), !0)
      }
      setMatrix3x3(UU, XU) {
        return !!UU && (this._gl.uniformMatrix3fv(UU, !1, XU), !0)
      }
      setMatrix2x2(UU, XU) {
        return !!UU && (this._gl.uniformMatrix2fv(UU, !1, XU), !0)
      }
      setFloat(UU, XU) {
        return !!UU && (this._gl.uniform1f(UU, XU), !0)
      }
      setFloat2(UU, XU, zU) {
        return !!UU && (this._gl.uniform2f(UU, XU, zU), !0)
      }
      setFloat3(UU, XU, zU, cU) {
        return !!UU && (this._gl.uniform3f(UU, XU, zU, cU), !0)
      }
      setFloat4(UU, XU, zU, cU, yU) {
        return !!UU && (this._gl.uniform4f(UU, XU, zU, cU, yU), !0)
      }
      _applyColorWriteState() {
        if (this._colorWriteChanged) {
          this._colorWriteChanged = !1;
          const UU = this._colorWrite;
          this._gl.colorMask(UU, UU, UU, UU)
        }
      }
      applyStates() {
        this._depthCullingState.apply(this._gl), this._stencilStateComposer.apply(this._gl), this._alphaState.apply(this._gl, this._currentRenderTarget && this._currentRenderTarget.textures ? this._currentRenderTarget.textures.length : 1, this._integerMRTAttachmentsMask), this._applyColorWriteState()
      }
      wipeCaches(UU) {
        this.preventCacheWipeBetweenFrames && !UU || (this._currentEffect = null, this._viewportCached.x = 0, this._viewportCached.y = 0, this._viewportCached.z = 0, this._viewportCached.w = 0, this._unbindVertexArrayObject(), UU && (this._currentProgram = null, this.resetTextureCache(), this._stencilStateComposer.reset(), this._depthCullingState.reset(), this._depthCullingState.depthFunc = this._gl.LEQUAL, this._alphaState.reset(), this._resetAlphaMode(), this._colorWrite = !0, this._colorWriteChanged = !0, this._unpackFlipYCached = null, this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), this._gl.pixelStorei(this._gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), this._mustWipeVertexAttributes = !0, this.unbindAllAttributes()), this._resetVertexBufferBinding(), this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null, this.bindIndexBuffer(null))
      }
      _getSamplingParameters(UU, XU) {
        const zU = this._gl;
        let cU = zU.NEAREST,
          yU = zU.NEAREST,
          QU = !1;
        switch (UU) {
          case 11:
            cU = zU.LINEAR, yU = XU ? zU.LINEAR_MIPMAP_NEAREST : zU.LINEAR;
            break;
          case 3:
            cU = zU.LINEAR, QU = !0, yU = XU ? zU.LINEAR_MIPMAP_LINEAR : zU.LINEAR;
            break;
          case 8:
            QU = !0, cU = zU.NEAREST, yU = XU ? zU.NEAREST_MIPMAP_LINEAR : zU.NEAREST;
            break;
          case 4:
            cU = zU.NEAREST, yU = XU ? zU.NEAREST_MIPMAP_NEAREST : zU.NEAREST;
            break;
          case 5:
            cU = zU.NEAREST, yU = XU ? zU.LINEAR_MIPMAP_NEAREST : zU.LINEAR;
            break;
          case 6:
            QU = !0, cU = zU.NEAREST, yU = XU ? zU.LINEAR_MIPMAP_LINEAR : zU.LINEAR;
            break;
          case 7:
            cU = zU.NEAREST, yU = zU.LINEAR;
            break;
          case 1:
            cU = zU.NEAREST, yU = zU.NEAREST;
            break;
          case 9:
            cU = zU.LINEAR, yU = XU ? zU.NEAREST_MIPMAP_NEAREST : zU.NEAREST;
            break;
          case 10:
            QU = !0, cU = zU.LINEAR, yU = XU ? zU.NEAREST_MIPMAP_LINEAR : zU.NEAREST;
            break;
          case 2:
            cU = zU.LINEAR, yU = zU.LINEAR;
            break;
          case 12:
            cU = zU.LINEAR, yU = zU.NEAREST
        }
        return {
          min: yU,
          mag: cU,
          hasMipMaps: QU
        }
      }
      _createTexture() {
        const UU = this._gl.createTexture();
        if (!UU) throw new Error("Unable to create texture");
        return UU
      }
      _createHardwareTexture() {
        return new pU.e(this._createTexture(), this._gl)
      }
      _createInternalTexture(UU, XU) {
        let zU, cU, yU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          QU = !1,
          AU = 0,
          oU = 3,
          DU = 5,
          EU = !1,
          YU = 1,
          NU = !1,
          IU = 0,
          pU = !1;
        void 0 !== XU && "object" === typeof XU ? (zU = !!XU.generateMipMaps, QU = !!XU.createMipMaps, AU = void 0 === XU.type ? 0 : XU.type, oU = void 0 === XU.samplingMode ? 3 : XU.samplingMode, DU = void 0 === XU.format ? 5 : XU.format, EU = void 0 !== XU.useSRGBBuffer && XU.useSRGBBuffer, YU = XU.samples ?? 1, cU = XU.label, NU = !!XU.createMSAATexture, IU = XU.comparisonFunction || 0, pU = !!XU.isCube) : zU = !!XU, EU && (EU = this._caps.supportSRGBBuffers && (this.Fa > 1 || this.isWebGPU)), (1 !== AU || this._caps.textureFloatLinearFiltering) && (2 !== AU || this._caps.textureHalfFloatLinearFiltering) || (oU = 1), 1 !== AU || this._caps.textureFloat || (AU = 0, FU.b.Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE"));
        const tU = (0, kU.f)(DU),
          gU = (0, kU.c)(DU),
          GU = this._gl,
          BU = new aU.e(this, yU),
          ZU = UU.width || UU,
          RU = UU.height || UU,
          PU = UU.depth || 0,
          WU = UU.layers || 0,
          dU = this._getSamplingParameters(oU, (zU || QU) && !tU),
          LU = 0 !== WU ? GU.TEXTURE_2D_ARRAY : 0 !== PU ? GU.TEXTURE_3D : pU ? GU.TEXTURE_CUBE_MAP : GU.TEXTURE_2D,
          eU = tU ? this._getInternalFormatFromDepthTextureFormat(DU, !0, gU) : this._getRGBABufferInternalSizedFormat(AU, DU, EU),
          CU = tU ? gU ? GU.DEPTH_STENCIL : GU.DEPTH_COMPONENT : this._getInternalFormat(DU),
          wU = tU ? this._getWebGLTextureTypeFromDepthTextureFormat(DU) : this._getWebGLTextureType(AU);
        if (this._bindTextureDirectly(LU, BU), 0 !== WU) BU.is2DArray = !0, GU.texImage3D(LU, 0, eU, ZU, RU, WU, 0, CU, wU, null);
        else if (0 !== PU) BU.is3D = !0, GU.texImage3D(LU, 0, eU, ZU, RU, PU, 0, CU, wU, null);
        else if (pU) {
          BU.isCube = !0;
          for (let UU = 0; UU < 6; UU++) GU.texImage2D(GU.TEXTURE_CUBE_MAP_POSITIVE_X + UU, 0, eU, ZU, RU, 0, CU, wU, null)
        } else GU.texImage2D(LU, 0, eU, ZU, RU, 0, CU, wU, null);
        if (GU.texParameteri(LU, GU.TEXTURE_MAG_FILTER, dU.mag), GU.texParameteri(LU, GU.TEXTURE_MIN_FILTER, dU.min), GU.texParameteri(LU, GU.TEXTURE_WRAP_S, GU.CLAMP_TO_EDGE), GU.texParameteri(LU, GU.TEXTURE_WRAP_T, GU.CLAMP_TO_EDGE), tU && this.Fa > 1 && (0 === IU ? (GU.texParameteri(LU, GU.TEXTURE_COMPARE_FUNC, 515), GU.texParameteri(LU, GU.TEXTURE_COMPARE_MODE, GU.NONE)) : (GU.texParameteri(LU, GU.TEXTURE_COMPARE_FUNC, IU), GU.texParameteri(LU, GU.TEXTURE_COMPARE_MODE, GU.COMPARE_REF_TO_TEXTURE))), (zU || QU) && this._gl.generateMipmap(LU), this._bindTextureDirectly(LU, null), BU._useSRGBBuffer = EU, BU.baseWidth = ZU, BU.baseHeight = RU, BU.width = ZU, BU.height = RU, BU.depth = WU || PU, BU.isReady = !0, BU.samples = YU, BU.generateMipMaps = zU, BU.samplingMode = oU, BU.type = AU, BU.format = DU, BU.label = cU, BU.comparisonFunction = IU, this._internalTexturesCache.push(BU), NU) {
          let UU;
          if (UU = (0, kU.f)(BU.format) ? this._setupFramebufferDepthAttachments((0, kU.c)(BU.format), 19 !== BU.format, BU.width, BU.height, YU, BU.format, !0) : this._createRenderBuffer(BU.width, BU.height, YU, -1, this._getRGBABufferInternalSizedFormat(BU.type, BU.format, BU._useSRGBBuffer), -1), !UU) throw new Error("Unable to create render buffer");
          BU._autoMSAAManagement = !0;
          let XU = BU._hardwareTexture;
          XU || (XU = BU._hardwareTexture = this._createHardwareTexture()), XU.addMSAARenderBuffer(UU)
        }
        return BU
      }
      _getUseSRGBBuffer(UU, XU) {
        return UU && this._caps.supportSRGBBuffers && (this.Fa > 1 || XU)
      }
      createTexture(UU, XU, zU, cU) {
        var yU = this;
        let QU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          AU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          FU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          oU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          DU = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          EU = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          YU = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          NU = arguments.length > 11 ? arguments[11] : void 0,
          IU = arguments.length > 12 ? arguments[12] : void 0,
          pU = arguments.length > 13 ? arguments[13] : void 0,
          tU = arguments.length > 14 ? arguments[14] : void 0;
        return this._createTextureBase(UU, XU, zU, cU, QU, AU, FU, (function() {
          for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
          return yU._prepareWebGLTexture(...XU, EU)
        }), ((UU, XU, zU, yU, QU, AU) => {
          const FU = this._gl,
            oU = zU.width === UU && zU.height === XU;
          QU._creationFlags = pU ?? 0;
          const DU = this._getTexImageParametersForCreateTexture(QU.format, QU._useSRGBBuffer);
          if (oU) return FU.texImage2D(FU.TEXTURE_2D, 0, DU.internalFormat, DU.format, DU.type, zU), !1;
          const EU = this._caps.maxTextureSize;
          if (zU.width > EU || zU.height > EU || !this._supportsHardwareTextureRescaling) return this._prepareWorkingCanvas(), !(!this._workingCanvas || !this._workingContext) && (this._workingCanvas.width = UU, this._workingCanvas.height = XU, this._workingContext.drawImage(zU, 0, 0, zU.width, zU.height, 0, 0, UU, XU), FU.texImage2D(FU.TEXTURE_2D, 0, DU.internalFormat, DU.format, DU.type, this._workingCanvas), QU.width = UU, QU.height = XU, !1);
          {
            const UU = new aU.e(this, 2);
            this._bindTextureDirectly(FU.TEXTURE_2D, UU, !0), FU.texImage2D(FU.TEXTURE_2D, 0, DU.internalFormat, DU.format, DU.type, zU), this._rescaleTexture(UU, QU, cU, DU.format, (() => {
              this._releaseTexture(UU), this._bindTextureDirectly(FU.TEXTURE_2D, QU, !0), AU()
            }))
          }
          return !0
        }), oU, DU, EU, YU, NU, IU, tU)
      }
      _getTexImageParametersForCreateTexture(UU, XU) {
        let zU, cU;
        return 1 === this.Fa ? (zU = this._getInternalFormat(UU, XU), cU = zU) : (zU = this._getInternalFormat(UU, !1), cU = this._getRGBABufferInternalSizedFormat(0, UU, XU)), {
          internalFormat: cU,
          format: zU,
          type: this._gl.UNSIGNED_BYTE
        }
      }
      _rescaleTexture(UU, XU, zU, cU, yU) {}
      _unpackFlipY(UU) {
        this._unpackFlipYCached !== UU && (this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, UU ? 1 : 0), this.enableUnpackFlipYCached && (this._unpackFlipYCached = UU))
      }
      _getUnpackAlignement() {
        return this._gl.getParameter(this._gl.UNPACK_ALIGNMENT)
      }
      _getTextureTarget(UU) {
        return UU.isCube ? this._gl.TEXTURE_CUBE_MAP : UU.is3D ? this._gl.TEXTURE_3D : UU.is2DArray || UU.isMultiview ? this._gl.TEXTURE_2D_ARRAY : this._gl.TEXTURE_2D
      }
      updateTextureSamplingMode(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const cU = this._getTextureTarget(XU),
          yU = this._getSamplingParameters(UU, XU.useMipMaps || zU);
        this._setTextureParameterInteger(cU, this._gl.TEXTURE_MAG_FILTER, yU.mag, XU), this._setTextureParameterInteger(cU, this._gl.TEXTURE_MIN_FILTER, yU.min), zU && yU.hasMipMaps && (XU.generateMipMaps = !0, this._gl.generateMipmap(cU)), this._bindTextureDirectly(cU, null), XU.samplingMode = UU
      }
      updateTextureDimensions(UU, XU, zU) {}
      updateTextureWrappingMode(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const yU = this._getTextureTarget(UU);
        null !== XU && (this._setTextureParameterInteger(yU, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(XU), UU), UU._cachedWrapU = XU), null !== zU && (this._setTextureParameterInteger(yU, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(zU), UU), UU._cachedWrapV = zU), (UU.is2DArray || UU.is3D) && null !== cU && (this._setTextureParameterInteger(yU, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(cU), UU), UU._cachedWrapR = cU), this._bindTextureDirectly(yU, null)
      }
      _uploadCompressedDataToTextureDirectly(UU, XU, zU, cU, yU) {
        let QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          AU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const FU = this._gl;
        let oU = FU.TEXTURE_2D;
        if (UU.isCube && (oU = FU.TEXTURE_CUBE_MAP_POSITIVE_X + QU), UU._useSRGBBuffer) switch (XU) {
          case 37492:
          case 36196:
            this._caps.etc2 ? XU = FU.COMPRESSED_SRGB8_ETC2 : UU._useSRGBBuffer = !1;
            break;
          case 37496:
            this._caps.etc2 ? XU = FU.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : UU._useSRGBBuffer = !1;
            break;
          case 36492:
            XU = FU.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
            break;
          case 37808:
            XU = FU.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
            break;
          case 37809:
            XU = FU.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
            break;
          case 37810:
            XU = FU.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
            break;
          case 37811:
            XU = FU.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
            break;
          case 37812:
            XU = FU.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
            break;
          case 37813:
            XU = FU.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
            break;
          case 37814:
            XU = FU.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
            break;
          case 37815:
            XU = FU.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
            break;
          case 37816:
            XU = FU.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
            break;
          case 37817:
            XU = FU.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
            break;
          case 37818:
            XU = FU.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
            break;
          case 37819:
            XU = FU.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
            break;
          case 37820:
            XU = FU.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
            break;
          case 37821:
            XU = FU.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
            break;
          case 33776:
            this._caps.s3tc_srgb ? XU = FU.COMPRESSED_SRGB_S3TC_DXT1_EXT : UU._useSRGBBuffer = !1;
            break;
          case 33777:
            this._caps.s3tc_srgb ? XU = FU.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT : UU._useSRGBBuffer = !1;
            break;
          case 33779:
            this._caps.s3tc_srgb ? XU = FU.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT : UU._useSRGBBuffer = !1;
            break;
          default:
            UU._useSRGBBuffer = !1
        }
        if (UU.generateMipMaps) {
          const QU = UU._hardwareTexture;
          QU.memoryAllocated || (FU.texStorage2D(UU.isCube ? FU.TEXTURE_CUBE_MAP : FU.TEXTURE_2D, Math.floor(Math.log2(Math.max(zU, cU))) + 1, XU, UU.width, UU.height), QU.memoryAllocated = !0), this._gl.compressedTexSubImage2D(oU, AU, 0, 0, zU, cU, XU, yU)
        } else this._gl.compressedTexImage2D(oU, AU, XU, zU, cU, 0, yU)
      }
      _uploadDataToTextureDirectly(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          yU = arguments.length > 4 ? arguments[4] : void 0,
          QU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const AU = this._gl,
          FU = this._getWebGLTextureType(UU.type),
          oU = this._getInternalFormat(UU.format),
          DU = void 0 === yU ? this._getRGBABufferInternalSizedFormat(UU.type, UU.format, UU._useSRGBBuffer) : this._getInternalFormat(yU, UU._useSRGBBuffer);
        this._unpackFlipY(UU.invertY);
        let EU = AU.TEXTURE_2D;
        UU.isCube && (EU = AU.TEXTURE_CUBE_MAP_POSITIVE_X + zU);
        const YU = Math.round(Math.log(UU.width) * Math.LOG2E),
          NU = Math.round(Math.log(UU.height) * Math.LOG2E),
          IU = QU ? UU.width : Math.pow(2, Math.max(YU - cU, 0)),
          pU = QU ? UU.height : Math.pow(2, Math.max(NU - cU, 0));
        AU.texImage2D(EU, cU, DU, IU, pU, 0, oU, FU, XU)
      }
      updateTextureData(UU, XU, zU, cU, yU, QU) {
        let AU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          FU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          oU = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const DU = this._gl,
          EU = this._getWebGLTextureType(UU.type),
          YU = this._getInternalFormat(UU.format);
        this._unpackFlipY(UU.invertY);
        let NU = DU.TEXTURE_2D,
          IU = DU.TEXTURE_2D;
        UU.isCube && (IU = DU.TEXTURE_CUBE_MAP_POSITIVE_X + AU, NU = DU.TEXTURE_CUBE_MAP), this._bindTextureDirectly(NU, UU, !0), DU.texSubImage2D(IU, FU, zU, cU, yU, QU, YU, EU, XU), oU && this._gl.generateMipmap(IU), this._bindTextureDirectly(NU, null)
      }
      _uploadArrayBufferViewToTexture(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const yU = this._gl,
          QU = UU.isCube ? yU.TEXTURE_CUBE_MAP : yU.TEXTURE_2D;
        this._bindTextureDirectly(QU, UU, !0), this._uploadDataToTextureDirectly(UU, XU, zU, cU), this._bindTextureDirectly(QU, null, !0)
      }
      _prepareWebGLTextureContinuation(UU, XU, zU, cU, yU) {
        const QU = this._gl;
        if (!QU) return;
        const AU = this._getSamplingParameters(yU, !zU);
        QU.texParameteri(QU.TEXTURE_2D, QU.TEXTURE_MAG_FILTER, AU.mag), QU.texParameteri(QU.TEXTURE_2D, QU.TEXTURE_MIN_FILTER, AU.min), zU || cU || QU.generateMipmap(QU.TEXTURE_2D), this._bindTextureDirectly(QU.TEXTURE_2D, null), XU && XU.removePendingData(UU), UU.onLoadedObservable.notifyObservers(UU), UU.onLoadedObservable.clear()
      }
      _prepareWebGLTexture(UU, XU, zU, cU, yU, QU, AU, FU, oU, DU) {
        const EU = this.getCaps().maxTextureSize,
          YU = Math.min(EU, this.needPOTTextures ? (0, IU.g)(cU.width, EU) : cU.width),
          NU = Math.min(EU, this.needPOTTextures ? (0, IU.g)(cU.height, EU) : cU.height),
          pU = this._gl;
        pU && (UU._hardwareTexture ? (this._bindTextureDirectly(pU.TEXTURE_2D, UU, !0), this._unpackFlipY(void 0 === yU || !!yU), UU.baseWidth = cU.width, UU.baseHeight = cU.height, UU.width = YU, UU.height = NU, UU.isReady = !0, UU.type = -1 !== UU.type ? UU.type : 0, UU.format = -1 !== UU.format ? UU.format : DU ?? (".jpg" !== XU || UU._useSRGBBuffer ? 5 : 4), FU(YU, NU, cU, XU, UU, (() => {
          this._prepareWebGLTextureContinuation(UU, zU, QU, AU, oU)
        })) || this._prepareWebGLTextureContinuation(UU, zU, QU, AU, oU)) : zU && zU.removePendingData(UU))
      }
      _getInternalFormatFromDepthTextureFormat(UU, XU, zU) {
        const cU = this._gl;
        if (!XU) return cU.STENCIL_INDEX8;
        let yU = zU ? cU.DEPTH_STENCIL : cU.DEPTH_COMPONENT;
        return this.Fa > 1 ? 15 === UU ? yU = cU.DEPTH_COMPONENT16 : 16 === UU ? yU = cU.DEPTH_COMPONENT24 : 17 === UU || 13 === UU ? yU = zU ? cU.DEPTH24_STENCIL8 : cU.DEPTH_COMPONENT24 : 14 === UU ? yU = cU.DEPTH_COMPONENT32F : 18 === UU && (yU = zU ? cU.DEPTH32F_STENCIL8 : cU.DEPTH_COMPONENT32F) : yU = cU.DEPTH_COMPONENT16, yU
      }
      _getWebGLTextureTypeFromDepthTextureFormat(UU) {
        const XU = this._gl;
        let zU = XU.UNSIGNED_INT;
        return 15 === UU ? zU = XU.UNSIGNED_SHORT : 17 === UU || 13 === UU ? zU = XU.UNSIGNED_INT_24_8 : 14 === UU ? zU = XU.FLOAT : 18 === UU ? zU = XU.FLOAT_32_UNSIGNED_INT_24_8_REV : 19 === UU && (zU = XU.UNSIGNED_BYTE), zU
      }
      _setupFramebufferDepthAttachments(UU, XU, zU, cU) {
        let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          QU = arguments.length > 5 ? arguments[5] : void 0,
          AU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const FU = this._gl;
        QU = QU ?? (UU ? 13 : 14);
        const oU = this._getInternalFormatFromDepthTextureFormat(QU, XU, UU);
        return UU && XU ? this._createRenderBuffer(zU, cU, yU, FU.DEPTH_STENCIL, oU, AU ? -1 : FU.DEPTH_STENCIL_ATTACHMENT) : XU ? this._createRenderBuffer(zU, cU, yU, oU, oU, AU ? -1 : FU.DEPTH_ATTACHMENT) : UU ? this._createRenderBuffer(zU, cU, yU, oU, oU, AU ? -1 : FU.STENCIL_ATTACHMENT) : null
      }
      _createRenderBuffer(UU, XU, zU, cU, yU, QU) {
        let AU = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
        const FU = this._gl.createRenderbuffer();
        return this._updateRenderBuffer(FU, UU, XU, zU, cU, yU, QU, AU)
      }
      _updateRenderBuffer(UU, XU, zU, cU, yU, QU, AU) {
        let FU = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const oU = this._gl;
        return oU.bindRenderbuffer(oU.RENDERBUFFER, UU), cU > 1 && oU.renderbufferStorageMultisample ? oU.renderbufferStorageMultisample(oU.RENDERBUFFER, cU, QU, XU, zU) : oU.renderbufferStorage(oU.RENDERBUFFER, yU, XU, zU), -1 !== AU && oU.framebufferRenderbuffer(oU.FRAMEBUFFER, AU, oU.RENDERBUFFER, UU), FU && oU.bindRenderbuffer(oU.RENDERBUFFER, null), UU
      }
      _releaseTexture(UU) {
        this._deleteTexture(UU._hardwareTexture), this.unbindAllTextures();
        const XU = this._internalTexturesCache.indexOf(UU); - 1 !== XU && this._internalTexturesCache.splice(XU, 1), UU._lodTextureHigh && UU._lodTextureHigh.dispose(), UU._lodTextureMid && UU._lodTextureMid.dispose(), UU._lodTextureLow && UU._lodTextureLow.dispose(), UU._irradianceTexture && UU._irradianceTexture.dispose()
      }
      _deleteTexture(UU) {
        UU?.release()
      }
      _setProgram(UU) {
        this._currentProgram !== UU && ((0, yU.q)(UU, this._gl), this._currentProgram = UU)
      }
      bindSamplers(UU) {
        const XU = UU.getPipelineContext();
        this._setProgram(XU.program);
        const zU = UU.getSamplers();
        for (let cU = 0; cU < zU.length; cU++) {
          const XU = UU.getUniform(zU[cU]);
          XU && (this._boundUniforms[cU] = XU)
        }
        this._currentEffect = null
      }
      _activateCurrentTexture() {
        this._currentTextureChannel !== this._activeChannel && (this._gl.activeTexture(this._gl.TEXTURE0 + this._activeChannel), this._currentTextureChannel = this._activeChannel)
      }
      _bindTextureDirectly(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          yU = !1;
        const QU = XU && XU._associatedChannel > -1;
        zU && QU && (this._activeChannel = XU._associatedChannel);
        if (this._boundTexturesCache[this._activeChannel] !== XU || cU) {
          if (this._activateCurrentTexture(), XU && XU.isMultiview) throw FU.b.Error(["_bindTextureDirectly called with a multiview texture!", UU, XU]), "_bindTextureDirectly called with a multiview texture!";
          this._gl.bindTexture(UU, XU?._hardwareTexture?.underlyingResource ?? null), this._boundTexturesCache[this._activeChannel] = XU, XU && (XU._associatedChannel = this._activeChannel)
        } else zU && (yU = !0, this._activateCurrentTexture());
        return QU && !zU && this._bindSamplerUniformToChannel(XU._associatedChannel, this._activeChannel), yU
      }
      _bindTexture(UU, XU, zU) {
        if (void 0 === UU) return;
        XU && (XU._associatedChannel = UU), this._activeChannel = UU;
        const cU = XU ? this._getTextureTarget(XU) : this._gl.TEXTURE_2D;
        this._bindTextureDirectly(cU, XU)
      }
      unbindAllTextures() {
        for (let UU = 0; UU < this._maxSimultaneousTextures; UU++) this._activeChannel = UU, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.Fa > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))
      }
      setTexture(UU, XU, zU, cU) {
        void 0 !== UU && (XU && (this._boundUniforms[UU] = XU), this._setTexture(UU, zU))
      }
      _bindSamplerUniformToChannel(UU, XU) {
        const zU = this._boundUniforms[UU];
        zU && zU._currentState !== XU && (this._gl.uniform1i(zU, XU), zU._currentState = XU)
      }
      _getTextureWrapMode(UU) {
        switch (UU) {
          case 1:
            return this._gl.REPEAT;
          case 0:
            return this._gl.CLAMP_TO_EDGE;
          case 2:
            return this._gl.MIRRORED_REPEAT
        }
        return this._gl.REPEAT
      }
      _setTexture(UU, XU) {
        let zU, cU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          yU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!XU) return null != this._boundTexturesCache[UU] && (this._activeChannel = UU, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.Fa > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))), !1;
        if (XU.video) {
          this._activeChannel = UU;
          const zU = XU.getInternalTexture();
          zU && (zU._associatedChannel = UU), XU.update()
        } else if (4 === XU.delayLoadState) return XU.delayLoad(), !1;
        zU = yU ? XU.depthStencilTexture : XU.isReady() ? XU.getInternalTexture() : XU.isCube ? this.emptyCubeTexture : XU.is3D ? this.emptyTexture3D : XU.is2DArray ? this.emptyTexture2DArray : this.emptyTexture, !cU && zU && (zU._associatedChannel = UU);
        let QU = !0;
        this._boundTexturesCache[UU] === zU && (cU || this._bindSamplerUniformToChannel(zU._associatedChannel, UU), QU = !1), this._activeChannel = UU;
        const AU = this._getTextureTarget(zU);
        if (QU && this._bindTextureDirectly(AU, zU, cU), zU && !zU.isMultiview) {
          if (zU.isCube && zU._cachedCoordinatesMode !== XU.coordinatesMode) {
            zU._cachedCoordinatesMode = XU.coordinatesMode;
            const UU = 3 !== XU.coordinatesMode && 5 !== XU.coordinatesMode ? 1 : 0;
            XU.wrapU = UU, XU.wrapV = UU
          }
          zU._cachedWrapU !== XU.wrapU && (zU._cachedWrapU = XU.wrapU, this._setTextureParameterInteger(AU, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(XU.wrapU), zU)), zU._cachedWrapV !== XU.wrapV && (zU._cachedWrapV = XU.wrapV, this._setTextureParameterInteger(AU, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(XU.wrapV), zU)), zU.is3D && zU._cachedWrapR !== XU.wrapR && (zU._cachedWrapR = XU.wrapR, this._setTextureParameterInteger(AU, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(XU.wrapR), zU)), this._setAnisotropicLevel(AU, zU, XU.anisotropicFilteringLevel)
        }
        return !0
      }
      setTextureArray(UU, XU, zU, cU) {
        if (void 0 !== UU && XU) {
          this._textureUnits && this._textureUnits.length === zU.length || (this._textureUnits = new Int32Array(zU.length));
          for (let XU = 0; XU < zU.length; XU++) {
            const cU = zU[XU].getInternalTexture();
            cU ? (this._textureUnits[XU] = UU + XU, cU._associatedChannel = UU + XU) : this._textureUnits[XU] = -1
          }
          this._gl.uniform1iv(XU, this._textureUnits);
          for (let UU = 0; UU < zU.length; UU++) this._setTexture(this._textureUnits[UU], zU[UU], !0)
        }
      }
      _setAnisotropicLevel(UU, XU, zU) {
        const cU = this._caps.textureAnisotropicFilterExtension;
        11 !== XU.samplingMode && 3 !== XU.samplingMode && 2 !== XU.samplingMode && (zU = 1), cU && XU._cachedAnisotropicFilteringLevel !== zU && (this._setTextureParameterFloat(UU, cU.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(zU, this._caps.maxAnisotropy), XU), XU._cachedAnisotropicFilteringLevel = zU)
      }
      _setTextureParameterFloat(UU, XU, zU, cU) {
        this._bindTextureDirectly(UU, cU, !0, !0), this._gl.texParameterf(UU, XU, zU)
      }
      _setTextureParameterInteger(UU, XU, zU, cU) {
        cU && this._bindTextureDirectly(UU, cU, !0, !0), this._gl.texParameteri(UU, XU, zU)
      }
      unbindAllAttributes() {
        if (this._mustWipeVertexAttributes) {
          this._mustWipeVertexAttributes = !1;
          for (let UU = 0; UU < this._caps.maxVertexAttribs; UU++) this.disableAttributeByIndex(UU)
        } else
          for (let UU = 0, XU = this._vertexAttribArraysEnabled.length; UU < XU; UU++) UU >= this._caps.maxVertexAttribs || !this._vertexAttribArraysEnabled[UU] || this.disableAttributeByIndex(UU)
      }
      releaseEffects() {
        this._compiledEffects = {}, this.onReleaseEffectsObservable.notifyObservers(this)
      }
      dispose() {
        (0, oU.h)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dummyFramebuffer && this._gl.deleteFramebuffer(this._dummyFramebuffer), this.unbindAllAttributes(), this._boundUniforms = {}, this._workingCanvas = null, this._workingContext = null, this._currentBufferPointers.length = 0, this._currentProgram = null, this._creationOptions.loseContextOnDispose && this._gl.getExtension("WEBGL_lose_context")?.loseContext(), (0, yU.y)(this._gl)
      }
      attachContextLostEvent(UU) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextlost", UU, !1)
      }
      attachContextRestoredEvent(UU) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextrestored", UU, !1)
      }
      getError() {
        return this._gl.getError()
      }
      _canRenderToFloatFramebuffer() {
        return this._webGLVersion > 1 ? this._caps.colorBufferFloat : this._canRenderToFramebuffer(1)
      }
      _canRenderToHalfFloatFramebuffer() {
        return this._webGLVersion > 1 ? this._caps.colorBufferFloat : this._canRenderToFramebuffer(2)
      }
      _canRenderToFramebuffer(UU) {
        const XU = this._gl;
        for (; XU.getError() !== XU.NO_ERROR;);
        let zU = !0;
        const cU = XU.createTexture();
        XU.bindTexture(XU.TEXTURE_2D, cU), XU.texImage2D(XU.TEXTURE_2D, 0, this._getRGBABufferInternalSizedFormat(UU), 1, 1, 0, XU.RGBA, this._getWebGLTextureType(UU), null), XU.texParameteri(XU.TEXTURE_2D, XU.TEXTURE_MIN_FILTER, XU.NEAREST), XU.texParameteri(XU.TEXTURE_2D, XU.TEXTURE_MAG_FILTER, XU.NEAREST);
        const yU = XU.createFramebuffer();
        XU.bindFramebuffer(XU.FRAMEBUFFER, yU), XU.framebufferTexture2D(XU.FRAMEBUFFER, XU.COLOR_ATTACHMENT0, XU.TEXTURE_2D, cU, 0);
        const QU = XU.checkFramebufferStatus(XU.FRAMEBUFFER);
        if (zU = zU && QU === XU.FRAMEBUFFER_COMPLETE, zU = zU && XU.getError() === XU.NO_ERROR, zU && (XU.clear(XU.COLOR_BUFFER_BIT), zU = zU && XU.getError() === XU.NO_ERROR), zU) {
          XU.bindFramebuffer(XU.FRAMEBUFFER, null);
          const UU = XU.RGBA,
            cU = XU.UNSIGNED_BYTE,
            yU = new Uint8Array(4);
          XU.readPixels(0, 0, 1, 1, UU, cU, yU), zU = zU && XU.getError() === XU.NO_ERROR
        }
        for (XU.deleteTexture(cU), XU.deleteFramebuffer(yU), XU.bindFramebuffer(XU.FRAMEBUFFER, null); !zU && XU.getError() !== XU.NO_ERROR;);
        return zU
      }
      _getWebGLTextureType(UU) {
        if (1 === this._webGLVersion) {
          switch (UU) {
            case 1:
              return this._gl.FLOAT;
            case 2:
              return this._gl.HALF_FLOAT_OES;
            case 0:
              return this._gl.UNSIGNED_BYTE;
            case 8:
              return this._gl.UNSIGNED_SHORT_4_4_4_4;
            case 9:
              return this._gl.UNSIGNED_SHORT_5_5_5_1;
            case 10:
              return this._gl.UNSIGNED_SHORT_5_6_5
          }
          return this._gl.UNSIGNED_BYTE
        }
        switch (UU) {
          case 3:
            return this._gl.BYTE;
          case 0:
            return this._gl.UNSIGNED_BYTE;
          case 4:
            return this._gl.SHORT;
          case 5:
            return this._gl.UNSIGNED_SHORT;
          case 6:
            return this._gl.INT;
          case 7:
            return this._gl.UNSIGNED_INT;
          case 1:
            return this._gl.FLOAT;
          case 2:
            return this._gl.HALF_FLOAT;
          case 8:
            return this._gl.UNSIGNED_SHORT_4_4_4_4;
          case 9:
            return this._gl.UNSIGNED_SHORT_5_5_5_1;
          case 10:
            return this._gl.UNSIGNED_SHORT_5_6_5;
          case 11:
            return this._gl.UNSIGNED_INT_2_10_10_10_REV;
          case 12:
            return this._gl.UNSIGNED_INT_24_8;
          case 13:
            return this._gl.UNSIGNED_INT_10F_11F_11F_REV;
          case 14:
            return this._gl.UNSIGNED_INT_5_9_9_9_REV;
          case 15:
            return this._gl.FLOAT_32_UNSIGNED_INT_24_8_REV
        }
        return this._gl.UNSIGNED_BYTE
      }
      _getInternalFormat(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zU = XU ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA;
        switch (UU) {
          case 0:
            zU = this._gl.ALPHA;
            break;
          case 1:
            zU = this._gl.LUMINANCE;
            break;
          case 2:
            zU = this._gl.LUMINANCE_ALPHA;
            break;
          case 6:
          case 33322:
          case 36760:
            zU = this._gl.RED;
            break;
          case 7:
          case 33324:
          case 36761:
            zU = this._gl.RG;
            break;
          case 4:
          case 32852:
          case 36762:
            zU = XU ? this._glSRGBExtensionValues.SRGB : this._gl.RGB;
            break;
          case 5:
          case 32859:
          case 36763:
            zU = XU ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA
        }
        if (this._webGLVersion > 1) switch (UU) {
          case 8:
            zU = this._gl.RED_INTEGER;
            break;
          case 9:
            zU = this._gl.RG_INTEGER;
            break;
          case 10:
            zU = this._gl.RGB_INTEGER;
            break;
          case 11:
            zU = this._gl.RGBA_INTEGER
        }
        return zU
      }
      _getRGBABufferInternalSizedFormat(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (1 === this._webGLVersion) {
          if (void 0 !== XU) switch (XU) {
            case 0:
              return this._gl.ALPHA;
            case 1:
              return this._gl.LUMINANCE;
            case 2:
              return this._gl.LUMINANCE_ALPHA;
            case 4:
              return zU ? this._glSRGBExtensionValues.SRGB : this._gl.RGB
          }
          return this._gl.RGBA
        }
        switch (UU) {
          case 3:
            switch (XU) {
              case 6:
                return this._gl.R8_SNORM;
              case 7:
                return this._gl.RG8_SNORM;
              case 4:
                return this._gl.RGB8_SNORM;
              case 8:
                return this._gl.R8I;
              case 9:
                return this._gl.RG8I;
              case 10:
                return this._gl.RGB8I;
              case 11:
                return this._gl.RGBA8I;
              default:
                return this._gl.RGBA8_SNORM
            }
          case 0:
            switch (XU) {
              case 6:
                return this._gl.R8;
              case 7:
                return this._gl.RG8;
              case 4:
                return zU ? this._glSRGBExtensionValues.SRGB8 : this._gl.RGB8;
              case 5:
                return zU ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8;
              case 8:
                return this._gl.R8UI;
              case 9:
                return this._gl.RG8UI;
              case 10:
                return this._gl.RGB8UI;
              case 11:
                return this._gl.RGBA8UI;
              case 0:
                return this._gl.ALPHA;
              case 1:
                return this._gl.LUMINANCE;
              case 2:
                return this._gl.LUMINANCE_ALPHA;
              default:
                return this._gl.RGBA8
            }
          case 4:
            switch (XU) {
              case 8:
                return this._gl.R16I;
              case 36760:
                return this._gl.R16_SNORM_EXT;
              case 36761:
                return this._gl.RG16_SNORM_EXT;
              case 36762:
                return this._gl.RGB16_SNORM_EXT;
              case 36763:
                return this._gl.RGBA16_SNORM_EXT;
              case 9:
                return this._gl.RG16I;
              case 10:
                return this._gl.RGB16I;
              default:
                return this._gl.RGBA16I
            }
          case 5:
            switch (XU) {
              case 8:
                return this._gl.R16UI;
              case 33322:
                return this._gl.R16_EXT;
              case 33324:
                return this._gl.RG16_EXT;
              case 32852:
                return this._gl.RGB16_EXT;
              case 32859:
                return this._gl.RGBA16_EXT;
              case 9:
                return this._gl.RG16UI;
              case 10:
                return this._gl.RGB16UI;
              default:
                return this._gl.RGBA16UI
            }
          case 6:
            switch (XU) {
              case 8:
                return this._gl.R32I;
              case 9:
                return this._gl.RG32I;
              case 10:
                return this._gl.RGB32I;
              default:
                return this._gl.RGBA32I
            }
          case 7:
            switch (XU) {
              case 8:
                return this._gl.R32UI;
              case 9:
                return this._gl.RG32UI;
              case 10:
                return this._gl.RGB32UI;
              default:
                return this._gl.RGBA32UI
            }
          case 1:
            switch (XU) {
              case 6:
                return this._gl.R32F;
              case 7:
                return this._gl.RG32F;
              case 4:
                return this._gl.RGB32F;
              default:
                return this._gl.RGBA32F
            }
          case 2:
            switch (XU) {
              case 6:
                return this._gl.R16F;
              case 7:
                return this._gl.RG16F;
              case 4:
                return this._gl.RGB16F;
              default:
                return this._gl.RGBA16F
            }
          case 10:
            return this._gl.RGB565;
          case 13:
            return this._gl.R11F_G11F_B10F;
          case 14:
            return this._gl.RGB9_E5;
          case 8:
            return this._gl.RGBA4;
          case 9:
            return this._gl.RGB5_A1;
          case 11:
            switch (XU) {
              case 5:
              default:
                return this._gl.RGB10_A2;
              case 11:
                return this._gl.RGB10_A2UI
            }
        }
        return zU ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8
      }
      readPixels(UU, XU, zU, cU) {
        let yU = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          QU = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          AU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const oU = yU ? 4 : 3,
          DU = yU ? this._gl.RGBA : this._gl.RGB,
          EU = zU * cU * oU;
        if (AU) {
          if (AU.length < EU) return FU.b.Error(`Data buffer is too small to store the read pixels (${AU.length} should be more than ${EU})`), Promise.resolve(AU)
        } else AU = new Uint8Array(EU);
        return QU && this.flushFramebuffer(), this._gl.readPixels(UU, XU, zU, cU, DU, this._gl.UNSIGNED_BYTE, AU), Promise.resolve(AU)
      }
      static get IsSupportedAsync() {
        return Promise.resolve(this.isSupported())
      }
      static get IsSupported() {
        return this.isSupported()
      }
      static isSupported() {
        if (null !== this._HasMajorPerformanceCaveat) return !this._HasMajorPerformanceCaveat;
        if (null === this._IsSupported) try {
          const UU = QU.c._CreateCanvas(1, 1),
            XU = UU.getContext("webgl") || UU.getContext("experimental-webgl");
          this._IsSupported = null != XU && !!globalThis.WebGLRenderingContext
        } catch (UU) {
          this._IsSupported = !1
        }
        return this._IsSupported
      }
      static get HasMajorPerformanceCaveat() {
        if (null === this._HasMajorPerformanceCaveat) try {
          const UU = QU.c._CreateCanvas(1, 1),
            XU = UU.getContext("webgl", {
              failIfMajorPerformanceCaveat: !0
            }) || UU.getContext("experimental-webgl", {
              failIfMajorPerformanceCaveat: !0
            });
          this._HasMajorPerformanceCaveat = !XU
        } catch (UU) {
          this._HasMajorPerformanceCaveat = !1
        }
        return this._HasMajorPerformanceCaveat
      }
    }
    ZU._TempClearColorUint32 = new Uint32Array(4), ZU._TempClearColorInt32 = new Int32Array(4), ZU._TempClearColorFloat32 = new Float32Array(4), ZU.ExceptionList = [{
      key: "Chrome/63.0",
      capture: "63\\.0\\.3239\\.(\\d+)",
      captureConstraint: 108,
      targets: ["uniformBuffer"]
    }, {
      key: "Firefox/58",
      capture: null,
      captureConstraint: null,
      targets: ["uniformBuffer"]
    }, {
      key: "Firefox/59",
      capture: null,
      captureConstraint: null,
      targets: ["uniformBuffer"]
    }, {
      key: "Chrome/72.+?Mobile",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Chrome/73.+?Mobile",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Chrome/74.+?Mobile",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Mac OS.+Chrome/71",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Mac OS.+Chrome/72",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Mac OS.+Chrome",
      capture: null,
      captureConstraint: null,
      targets: ["uniformBuffer"]
    }, {
      key: "Chrome/12\\d\\..+?Mobile",
      capture: null,
      captureConstraint: null,
      targets: ["uniformBuffer"]
    }, {
      key: ".*AppleWebKit.*(15.4).*Safari",
      capture: null,
      captureConstraint: null,
      targets: ["antialias", "maxMSAASamples"]
    }, {
      key: ".*(15.4).*AppleWebKit.*Safari",
      capture: null,
      captureConstraint: null,
      targets: ["antialias", "maxMSAASamples"]
    }], ZU._ConcatenateShader = tU.d, ZU._IsSupported = null, ZU._HasMajorPerformanceCaveat = null
  },
  41283: (UU, XU, zU) => {
    var cU;
    zU.d(XU, {
        b: () => yU
      }),
      function(UU) {
        UU[UU.PointerMove = 0] = "PointerMove", UU[UU.PointerDown = 1] = "PointerDown", UU[UU.PointerUp = 2] = "PointerUp"
      }(cU || (cU = {}));
    class yU {}
    yU.DOM_DELTA_PIXEL = 0, yU.DOM_DELTA_LINE = 1, yU.DOM_DELTA_PAGE = 2
  },
  41278: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => cU,
      e: () => QU,
      h: () => yU
    });
    class cU {}
    cU.KEYDOWN = 1, cU.KEYUP = 2;
    class yU {
      constructor(UU, XU) {
        this.type = UU, this.event = XU
      }
    }
    class QU extends yU {
      get skipOnPointerObservable() {
        return this.skipOnKeyboardObservable
      }
      set skipOnPointerObservable(UU) {
        this.skipOnKeyboardObservable = UU
      }
      constructor(UU, XU) {
        super(UU, XU), this.type = UU, this.event = XU, this.skipOnKeyboardObservable = !1
      }
    }
  },
  41271: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => yU,
      f: () => AU,
      h: () => FU
    });
    var cU = zU(37819);
    class yU {}
    yU.POINTERDOWN = 1, yU.POINTERUP = 2, yU.POINTERMOVE = 4, yU.POINTERWHEEL = 8, yU.POINTERPICK = 16, yU.POINTERTAP = 32, yU.POINTERDOUBLETAP = 64;
    class QU {
      constructor(UU, XU) {
        this.type = UU, this.event = XU
      }
    }
    class AU extends QU {
      constructor(UU, XU, zU, yU) {
        super(UU, XU), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new cU.m(zU, yU)
      }
    }
    class FU extends QU {
      get pickInfo() {
        return this._pickInfo || this._generatePickInfo(), this._pickInfo
      }
      constructor(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(UU, XU), this._pickInfo = zU, this._inputManager = cU
      }
      _generatePickInfo() {
        this._inputManager && (this._pickInfo = this._inputManager._pickMove(this.event), this._inputManager._setRayOnPointerInfo(this._pickInfo, this.event), this._inputManager = null)
      }
    }
  },
  41293: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => cU
    });
    class cU {
      static CompareLightsPriority(UU, XU) {
        return UU.shadowEnabled !== XU.shadowEnabled ? (XU.shadowEnabled ? 1 : 0) - (UU.shadowEnabled ? 1 : 0) : XU.renderPriority - UU.renderPriority
      }
    }
    cU.FALLOFF_DEFAULT = 0, cU.FALLOFF_PHYSICAL = 1, cU.FALLOFF_GLTF = 2, cU.FALLOFF_STANDARD = 3, cU.LIGHTMAP_DEFAULT = 0, cU.LIGHTMAP_SPECULAR = 1, cU.LIGHTMAP_SHADOWSONLY = 2, cU.INTENSITYMODE_AUTOMATIC = 0, cU.INTENSITYMODE_LUMINOUSPOWER = 1, cU.INTENSITYMODE_LUMINOUSINTENSITY = 2, cU.INTENSITYMODE_ILLUMINANCE = 3, cU.INTENSITYMODE_LUMINANCE = 4, cU.LIGHTTYPEID_POINTLIGHT = 0, cU.LIGHTTYPEID_DIRECTIONALLIGHT = 1, cU.LIGHTTYPEID_SPOTLIGHT = 2, cU.LIGHTTYPEID_HEMISPHERICLIGHT = 3, cU.LIGHTTYPEID_RECT_AREALIGHT = 4, cU.LIGHTTYPEID_CLUSTERED_CONTAINER = 5
  },
  40940: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => AU
    });
    var cU, yU = zU(37846),
      QU = zU(40945);
    ! function(UU) {
      UU[UU.Unknown = 0] = "Unknown", UU[UU.Url = 1] = "Url", UU[UU.Temp = 2] = "Temp", UU[UU.Raw = 3] = "Raw", UU[UU.Dynamic = 4] = "Dynamic", UU[UU.RenderTarget = 5] = "RenderTarget", UU[UU.MultiRenderTarget = 6] = "MultiRenderTarget", UU[UU.Cube = 7] = "Cube", UU[UU.CubeRaw = 8] = "CubeRaw", UU[UU.CubePrefiltered = 9] = "CubePrefiltered", UU[UU.Raw3D = 10] = "Raw3D", UU[UU.Raw2DArray = 11] = "Raw2DArray", UU[UU.DepthStencil = 12] = "DepthStencil", UU[UU.CubeRawRGBD = 13] = "CubeRawRGBD", UU[UU.Depth = 14] = "Depth", UU[UU.External = 15] = "External"
    }(cU || (cU = {}));
    class AU extends QU.e {
      get useMipMaps() {
        return null === this._useMipMaps ? this.generateMipMaps : this._useMipMaps
      }
      set useMipMaps(UU) {
        this._useMipMaps = UU
      }
      get uniqueId() {
        return this._uniqueId
      }
      _setUniqueId(UU) {
        this._uniqueId = UU
      }
      qp() {
        return this._engine
      }
      get source() {
        return this._source
      }
      constructor(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable = new yU.e, this.onErrorObservable = new yU.e, this.onRebuildCallback = null, this.width = 0, this.height = 0, this.depth = 0, this.baseWidth = 0, this.baseHeight = 0, this.baseDepth = 0, this.invertY = !1, this._invertVScale = !1, this._associatedChannel = -1, this._source = 0, this._buffer = null, this._bufferView = null, this._bufferViewArray = null, this._bufferViewArrayArray = null, this._size = 0, this._extension = "", this._files = null, this._workingCanvas = null, this._workingContext = null, this._cachedCoordinatesMode = null, this._isDisabled = !1, this._compression = null, this._sphericalPolynomial = null, this._sphericalPolynomialPromise = null, this._sphericalPolynomialComputed = !1, this._lodGenerationScale = 0, this._lodGenerationOffset = 0, this._useSRGBBuffer = !1, this._creationFlags = 0, this._lodTextureHigh = null, this._lodTextureMid = null, this._lodTextureLow = null, this._isRGBD = !1, this._linearSpecularLOD = !1, this._irradianceTexture = null, this._hardwareTexture = null, this._maxLodLevel = null, this._references = 1, this._gammaSpace = null, this._premulAlpha = !1, this._dynamicTextureSource = null, this._autoMSAAManagement = !1, this._engine = UU, this._source = XU, this._uniqueId = AU._Counter++, zU || (this._hardwareTexture = UU._createHardwareTexture())
      }
      incrementReferences() {
        this._references++
      }
      updateSize(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._engine.updateTextureDimensions(this, UU, XU, zU), this.width = UU, this.height = XU, this.depth = zU, this.baseWidth = UU, this.baseHeight = XU, this.baseDepth = zU, this._size = UU * XU * zU
      }
      _rebuild() {
        if (this.isReady = !1, this._cachedCoordinatesMode = null, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this.onRebuildCallback) {
          const UU = this.onRebuildCallback(this),
            XU = XU => {
              XU._swapAndDie(this, !1), this.isReady = UU.isReady
            };
          return void(UU.isAsync ? UU.proxy.then(XU) : XU(UU.proxy))
        }
        let UU;
        switch (this.source) {
          case 2:
          case 12:
          case 14:
          case 15:
            break;
          case 1:
            return void(UU = this._engine.createTexture(this._originalUrl ?? this.url, !this.generateMipMaps, this.invertY, null, this.samplingMode, (UU => {
              UU._swapAndDie(this, !1), this.isReady = !0
            }), null, this._buffer, void 0, this.format, this._extension, void 0, void 0, void 0, this._useSRGBBuffer));
          case 3:
            if (UU = this._engine.createRawTexture(this._bufferView, this.baseWidth, this.baseHeight, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this._useSRGBBuffer, this.mipLevelCount), UU._swapAndDie(this, !1), this._bufferViewArray)
              for (let UU = 0; UU < this._bufferViewArray.length; UU++) {
                const XU = this._bufferViewArray[UU];
                XU && this._engine.updateRawTexture(this, XU, this.format, this.invertY, this._compression, this.type, this._useSRGBBuffer, UU)
              }
            this.isReady = !0;
            break;
          case 10:
            UU = this._engine.createRawTexture3D(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type), UU._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 11:
            if (UU = this._engine.createRawTexture2DArray(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this.mipLevelCount), UU._swapAndDie(this, !1), this._bufferViewArray)
              for (let UU = 0; UU < this._bufferViewArray.length; UU++) {
                const XU = this._bufferViewArray[UU];
                XU && this._engine.updateRawTexture2DArray(this, XU, this.format, this.invertY, this._compression, this.type, UU)
              }
            this.isReady = !0;
            break;
          case 4:
            UU = this._engine.createDynamicTexture(this.baseWidth, this.baseHeight, this.generateMipMaps, this.samplingMode), UU._swapAndDie(this, !1), this._dynamicTextureSource && this._engine.updateDynamicTexture(this, this._dynamicTextureSource, this.invertY, this._premulAlpha, this.format, !0);
            break;
          case 7:
            return void(UU = this._engine.createCubeTexture(this.url, null, this._files, !this.generateMipMaps, (() => {
              UU._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, !1, 0, 0, null, void 0, this._useSRGBBuffer, ArrayBuffer.isView(this._buffer) ? this._buffer : null));
          case 8:
            UU = this._engine.createRawCubeTexture(this._bufferViewArray, this.width, this._originalFormat ?? this.format, this.type, this.generateMipMaps, this.invertY, this.samplingMode, this._compression), UU._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 13:
            return;
          case 9:
            return UU = this._engine.createPrefilteredCubeTexture(this.url, null, this._lodGenerationScale, this._lodGenerationOffset, (UU => {
              UU && UU._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, void 0, ArrayBuffer.isView(this._buffer) ? this._buffer : null), void(UU._sphericalPolynomial = this._sphericalPolynomial)
        }
      }
      _swapAndDie(UU) {
        let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._hardwareTexture?.setUsage(UU._source, this.generateMipMaps, this.is2DArray, this.isCube, this.is3D, this.width, this.height, this.depth), UU._hardwareTexture = this._hardwareTexture, UU._setUniqueId(AU._Counter++), XU && (UU._isRGBD = this._isRGBD), this._lodTextureHigh && (UU._lodTextureHigh && UU._lodTextureHigh.dispose(), UU._lodTextureHigh = this._lodTextureHigh), this._lodTextureMid && (UU._lodTextureMid && UU._lodTextureMid.dispose(), UU._lodTextureMid = this._lodTextureMid), this._lodTextureLow && (UU._lodTextureLow && UU._lodTextureLow.dispose(), UU._lodTextureLow = this._lodTextureLow), this._irradianceTexture && (UU._irradianceTexture && UU._irradianceTexture.dispose(), UU._irradianceTexture = this._irradianceTexture);
        const zU = this._engine.getLoadedTexturesCache();
        let cU = zU.indexOf(this); - 1 !== cU && zU.splice(cU, 1), cU = zU.indexOf(UU), -1 === cU && zU.push(UU)
      }
      dispose() {
        this._references--, 0 === this._references && (this.onLoadedObservable.clear(), this.onErrorObservable.clear(), this._engine._releaseTexture(this), this._hardwareTexture = null, this._dynamicTextureSource = null)
      }
    }
    AU._Counter = 0
  },
  41048: (UU, XU, zU) => {
    function cU(UU) {
      return 13 === UU || 14 === UU || 15 === UU || 16 === UU || 17 === UU || 18 === UU || 19 === UU
    }

    function yU(UU) {
      return 8 === UU || 9 === UU || 10 === UU || 11 === UU
    }

    function QU(UU) {
      return 0 === UU || 5 === UU || 7 === UU || 11 === UU
    }

    function AU(UU) {
      return 13 === UU || 17 === UU || 18 === UU || 19 === UU
    }
    zU.d(XU, {
      c: () => AU,
      f: () => cU,
      i: () => yU,
      j: () => QU
    })
  },
  40945: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => cU
    });
    class cU {
      get wrapU() {
        return this._cachedWrapU
      }
      set wrapU(UU) {
        this._cachedWrapU = UU
      }
      get wrapV() {
        return this._cachedWrapV
      }
      set wrapV(UU) {
        this._cachedWrapV = UU
      }
      get wrapR() {
        return this._cachedWrapR
      }
      set wrapR(UU) {
        this._cachedWrapR = UU
      }
      get anisotropicFilteringLevel() {
        return this._cachedAnisotropicFilteringLevel
      }
      set anisotropicFilteringLevel(UU) {
        this._cachedAnisotropicFilteringLevel = UU
      }
      get comparisonFunction() {
        return this._comparisonFunction
      }
      set comparisonFunction(UU) {
        this._comparisonFunction = UU
      }
      get useMipMaps() {
        return this._useMipMaps
      }
      set useMipMaps(UU) {
        this._useMipMaps = UU
      }
      constructor() {
        this.samplingMode = -1, this._useMipMaps = !0, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this._comparisonFunction = 0
      }
      setParameters() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2,
          QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return this._cachedWrapU = UU, this._cachedWrapV = XU, this._cachedWrapR = zU, this._cachedAnisotropicFilteringLevel = cU, this.samplingMode = yU, this._comparisonFunction = QU, this
      }
      compareSampler(UU) {
        return this._cachedWrapU === UU._cachedWrapU && this._cachedWrapV === UU._cachedWrapV && this._cachedWrapR === UU._cachedWrapR && this._cachedAnisotropicFilteringLevel === UU._cachedAnisotropicFilteringLevel && this.samplingMode === UU.samplingMode && this._comparisonFunction === UU._comparisonFunction && this._useMipMaps === UU._useMipMaps
      }
    }
  },
  41221: (UU, XU, zU) => {
    function cU(UU) {
      UU.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative")
    }
    zU.d(XU, {
      d: () => cU
    })
  },
  41017: (UU, XU, zU) => {
    function cU(UU) {
      return void 0 === UU.getPipelineContext
    }
    zU.d(XU, {
      c: () => cU
    })
  },
  41395: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => yU
    });
    var cU = zU(40999);
    class yU {
      static GetEffect(UU) {
        return void 0 === UU.getPipelineContext ? UU.effect : UU
      }
      constructor(UU) {
        let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._wasPreviouslyReady = !1, this._forceRebindOnNextCall = !0, this._wasPreviouslyUsingInstances = null, this.effect = null, this.defines = null, this.drawContext = UU.createDrawContext(), XU && (this.materialContext = UU.createMaterialContext())
      }
      setEffect(UU, XU) {
        let zU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        zU || this.effect === UU || this.drawContext?._releaseUniformBufferSlots?.(), this.effect = UU, void 0 !== XU && (this.defines = XU), zU && this.drawContext?.reset()
      }
      dispose() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.effect) {
          const XU = this.effect;
          UU ? XU.dispose() : cU.e.SetImmediate((() => {
            XU.qp().onEndFrameObservable.addOnce((() => {
              XU.dispose()
            }))
          })), this.effect = null
        }
        this.drawContext?.dispose()
      }
    }
  },
  40965: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => YU,
      i: () => IU,
      k: () => DU,
      o: () => EU
    });
    var cU = zU(40971),
      yU = zU(40977),
      QU = zU(40961),
      AU = zU(39493),
      FU = zU(40991),
      oU = zU(40983);

    function DU(UU, XU) {
      return (0, yU.A)(XU).cachedPipelines[UU]
    }

    function EU(UU) {
      const XU = UU._name,
        zU = UU.context;
      if (XU && zU) {
        const UU = (0, yU.A)(zU),
          cU = UU.cachedPipelines[XU];
        cU?.dispose(), delete UU.cachedPipelines[XU]
      }
    }

    function YU(UU, XU, zU, yU, QU, AU, oU) {
      let DU, EU;
      const YU = (0, cU.h)() ? AU?.getHostDocument() : null;
      DU = "string" === typeof XU ? XU : "string" === typeof XU.vertexSource ? "source:" + XU.vertexSource : "string" === typeof XU.vertexElement ? YU?.getElementById(XU.vertexElement) || XU.vertexElement : XU.vertex || XU, EU = "string" === typeof XU ? XU : "string" === typeof XU.fragmentSource ? "source:" + XU.fragmentSource : "string" === typeof XU.fragmentElement ? YU?.getElementById(XU.fragmentElement) || XU.fragmentElement : XU.fragment || XU;
      const IU = [void 0, void 0],
        pU = () => {
          if (IU[0] && IU[1]) {
            const [cU, DU] = IU;
            (0, FU.f)(UU), (0, FU.k)(cU, UU, ((cU, EU) => {
              oU && (oU._vertexSourceCodeBeforeMigration = EU), zU && (cU = zU("vertex", cU)), UU.isFragment = !0, (0, FU.k)(DU, UU, ((AU, DU) => {
                oU && (oU._fragmentSourceCodeBeforeMigration = DU), zU && (AU = zU("fragment", AU));
                const EU = (0, FU.d)(cU, AU, UU);
                UU = null;
                const YU = function(UU, XU, zU, cU) {
                  if (zU) {
                    return {
                      vertexSourceCode: (1 === cU ? "//" : "") + "#define SHADER_NAME vertex:" + (zU.vertexElement || zU.vertex || zU.spectorName || zU) + "\n" + UU,
                      fragmentSourceCode: (1 === cU ? "//" : "") + "#define SHADER_NAME fragment:" + (zU.fragmentElement || zU.fragment || zU.spectorName || zU) + "\n" + XU
                    }
                  }
                  return {
                    vertexSourceCode: UU,
                    fragmentSourceCode: XU
                  }
                }(EU.vertexCode, EU.fragmentCode, XU, QU);
                yU?.(YU.vertexSourceCode, YU.fragmentSourceCode)
              }), AU)
            }), AU)
          }
        };
      NU(DU, "Vertex", "", (UU => {
        oU && (oU._rawVertexSourceCode = UU), IU[0] = UU, pU()
      }), QU), NU(EU, "Fragment", "Pixel", (UU => {
        oU && (oU._rawFragmentSourceCode = UU), IU[1] = UU, pU()
      }), QU)
    }

    function NU(UU, XU, zU, yU, AU, FU) {
      if ("undefined" !== typeof HTMLElement && UU instanceof HTMLElement) {
        return void yU((0, cU.b)(UU))
      }
      if ("source:" === UU.substring(0, 7)) return void yU(UU.substring(7));
      if ("base64:" === UU.substring(0, 7)) {
        return void yU(window.atob(UU.substring(7)))
      }
      const DU = QU.b.GetShadersStore(AU);
      if (DU[UU + XU + "Shader"]) return void yU(DU[UU + XU + "Shader"]);
      if (zU && DU[UU + zU + "Shader"]) return void yU(DU[UU + zU + "Shader"]);
      let EU;
      if (EU = "." === UU[0] || "/" === UU[0] || UU.indexOf("http") > -1 ? UU : QU.b.GetShadersRepository(AU) + UU, !(FU = FU || oU.k)) throw new Error("loadFileInjection is not defined");
      FU(EU + "." + XU.toLowerCase() + ".fx", yU)
    }
    const IU = (UU, XU, zU, cU) => {
      try {
        const QU = UU.context ? (0, yU.A)(UU.context) : null;
        QU && (QU.disableParallelShaderCompile = UU.disableParallelCompilation);
        const AU = UU.existingPipelineContext || XU(UU.shaderProcessingContext);
        return AU._name = UU.name, UU.name && QU && (QU.cachedPipelines[UU.name] = AU), zU(AU, UU.vertex, UU.fragment, !!UU.createAsRaw, "", "", UU.rebuildRebind, UU.defines, UU.transformFeedbackVaryings, "", (() => {
          cU(AU, (() => {
            UU.onRenderingStateCompiled?.(AU)
          }))
        })), AU
      } catch (QU) {
        throw AU.b.Error("Error compiling effect"), QU
      }
    }
  },
  40954: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => oU
    });
    var cU = zU(37846),
      yU = zU(39493),
      QU = zU(40961),
      AU = zU(40965),
      FU = zU(40999);
    class oU {
      static get ShadersRepository() {
        return QU.b.ShadersRepository
      }
      static set ShadersRepository(UU) {
        QU.b.ShadersRepository = UU
      }
      get oR() {
        return this._isDisposed
      }
      get onBindObservable() {
        return this._onBindObservable || (this._onBindObservable = new cU.e), this._onBindObservable
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(UU, XU, zU) {
        let yU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          QU = arguments.length > 4 ? arguments[4] : void 0,
          FU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          DU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          EU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          YU = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          NU = arguments.length > 9 ? arguments[9] : void 0,
          IU = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : "",
          pU = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0,
          aU = arguments.length > 12 ? arguments[12] : void 0;
        this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new cU.e, this.onErrorObservable = new cU.e, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationForcedToCPU = !1, this._uniformBuffersNames = {}, this._multiTarget = !1, this._samplers = {}, this._isReady = !1, this._compilationError = "", this._allFallbacksProcessed = !1, this._uniforms = {}, this._key = "", this._fallbacks = null, this._vertexSourceCodeOverride = "", this._fragmentSourceCodeOverride = "", this._transformFeedbackVaryings = null, this._disableParallelShaderCompilation = !1, this._pipelineContext = null, this._vertexSourceCode = "", this._fragmentSourceCode = "", this._vertexSourceCodeBeforeMigration = "", this._fragmentSourceCodeBeforeMigration = "", this._rawVertexSourceCode = "", this._rawFragmentSourceCode = "", this._processCodeAfterIncludes = void 0, this._processFinalCode = null, this._onReleaseEffectsObserver = null, this.name = UU, this._key = IU;
        const tU = this._key.replace(/\r/g, "").replace(/\n/g, "|");
        let gU;
        if (XU.attributes) {
          const UU = XU;
          if (this._engine = zU, this._attributesNames = UU.attributes, this._uniformsNames = UU.uniformsNames.concat(UU.samplers), this._samplerList = UU.samplers.slice(), this.defines = UU.defines, this.onError = UU.onError, this.onCompiled = UU.onCompiled, this._fallbacks = UU.fallbacks, this._indexParameters = UU.indexParameters, this._transformFeedbackVaryings = UU.transformFeedbackVaryings || null, this._multiTarget = !!UU.multiTarget, this._shaderLanguage = UU.shaderLanguage ?? 0, this._disableParallelShaderCompilation = !!UU.disableParallelShaderCompilation, UU.uniformBuffersNames) {
            this._uniformBuffersNamesList = UU.uniformBuffersNames.slice();
            for (let XU = 0; XU < UU.uniformBuffersNames.length; XU++) this._uniformBuffersNames[UU.uniformBuffersNames[XU]] = XU
          }
          this._processFinalCode = UU.processFinalCode ?? null, this._processCodeAfterIncludes = UU.processCodeAfterIncludes ?? void 0, aU = UU.extraInitializationsAsync, gU = UU.existingPipelineContext
        } else this._engine = QU, this.defines = null == FU ? "" : FU, this._uniformsNames = zU.concat(yU), this._samplerList = yU ? yU.slice() : [], this._attributesNames = XU, this._uniformBuffersNamesList = [], this._shaderLanguage = pU, this.onError = YU, this.onCompiled = EU, this._indexParameters = NU, this._fallbacks = DU;
        "WEBGL2" === this._engine.shaderPlatformName && (gU = (0, AU.k)(tU, this._engine._gl) ?? gU), this._attributeLocationByName = {}, this.uniqueId = oU._UniqueIdSeed++, gU ? (this._pipelineContext = gU, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCompiled(this._pipelineContext), this._pipelineContext.program && (this._pipelineContext.program.__SPECTOR_rebuildProgram = this._rebuildProgram.bind(this))) : this._processShaderCodeAsync(null, !1, null, aU).catch((UU => {
          const XU = UU?.message ?? String(UU),
            zU = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${XU}`);
          UU && "string" === typeof UU.stack && (zU.stack = `${zU.message}\nCaused by: ${UU.stack}`), this._processCompilationErrors(zU)
        })), this._onReleaseEffectsObserver = this._engine.onReleaseEffectsObservable.addOnce((() => {
          this._onReleaseEffectsObserver = null, this.oR || this.dispose(!0)
        }))
      }
      async _processShaderCodeAsync() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          cU = arguments.length > 3 ? arguments[3] : void 0;
        cU && await cU(), this._processingContext = zU || this._engine._getShaderProcessingContext(this._shaderLanguage, !1);
        const yU = {
          defines: this.defines.split("\n"),
          indexParameters: this._indexParameters,
          isFragment: !1,
          shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
          processor: UU ?? this._engine._getShaderProcessor(this._shaderLanguage),
          supportsUniformBuffers: this._engine.supportsUniformBuffers,
          shadersRepository: QU.b.GetShadersRepository(this._shaderLanguage),
          includesShadersStore: QU.b.GetIncludesShadersStore(this._shaderLanguage),
          version: (100 * this._engine.version).toString(),
          platformName: this._engine.shaderPlatformName,
          processingContext: this._processingContext,
          isNDCHalfZRange: this._engine.isNDCHalfZRange,
          XyU: this._engine.XyU,
          processCodeAfterIncludes: this._processCodeAfterIncludes
        };
        (0, AU.e)(yU, this.name, this._processFinalCode, ((UU, zU) => {
          this._vertexSourceCode = UU, this._fragmentSourceCode = zU, this._prepareEffect(XU)
        }), this._shaderLanguage, this._engine, this)
      }
      get key() {
        return this._key
      }
      isReady() {
        try {
          return this._isReadyInternal()
        } catch {
          return !1
        }
      }
      _isReadyInternal() {
        return !!this._engine.oR || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
      }
      qp() {
        return this._engine
      }
      getPipelineContext() {
        return this._pipelineContext
      }
      getAttributesNames() {
        return this._attributesNames
      }
      getAttributeLocation(UU) {
        return this._attributes[UU]
      }
      getAttributeLocationByName(UU) {
        return this._attributeLocationByName[UU]
      }
      getAttributesCount() {
        return this._attributes.length
      }
      getUniformIndex(UU) {
        return this._uniformsNames.indexOf(UU)
      }
      getUniform(UU) {
        return this._uniforms[UU]
      }
      getSamplers() {
        return this._samplerList
      }
      getUniformNames() {
        return this._uniformsNames
      }
      getUniformBuffersNames() {
        return this._uniformBuffersNamesList
      }
      getIndexParameters() {
        return this._indexParameters
      }
      getCompilationError() {
        return this._compilationError
      }
      allFallbacksProcessed() {
        return this._allFallbacksProcessed
      }
      async whenCompiledAsync() {
        return await new Promise((UU => {
          this.executeWhenCompiled(UU)
        }))
      }
      executeWhenCompiled(UU) {
        this.isReady() ? UU(this) : (this.onCompileObservable.add((XU => {
          UU(XU)
        })), this._pipelineContext && !this._pipelineContext.isAsync || this._checkIsReady(null))
      }
      _checkIsReady(UU) {
        (0, FU.h)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (XU => {
          this._processCompilationErrors(XU, UU)
        }), 16, 12e4, !0, ` - Effect: ${"string"===typeof this.name?this.name:this.key}`)
      }
      get vertexSourceCode() {
        return this._vertexSourceCodeOverride && this._fragmentSourceCodeOverride ? this._vertexSourceCodeOverride : this._pipelineContext?._getVertexShaderCode() ?? this._vertexSourceCode
      }
      get fragmentSourceCode() {
        return this._vertexSourceCodeOverride && this._fragmentSourceCodeOverride ? this._fragmentSourceCodeOverride : this._pipelineContext?._getFragmentShaderCode() ?? this._fragmentSourceCode
      }
      get vertexSourceCodeBeforeMigration() {
        return this._vertexSourceCodeBeforeMigration
      }
      get fragmentSourceCodeBeforeMigration() {
        return this._fragmentSourceCodeBeforeMigration
      }
      get rawVertexSourceCode() {
        return this._rawVertexSourceCode
      }
      get rawFragmentSourceCode() {
        return this._rawFragmentSourceCode
      }
      getPipelineGenerationOptions() {
        return {
          platformName: this._engine.shaderPlatformName,
          shaderLanguage: this._shaderLanguage,
          shaderNameOrContent: this.name,
          key: this._key,
          defines: this.defines.split("\n"),
          addGlobalDefines: !1,
          extendedProcessingOptions: {
            indexParameters: this._indexParameters,
            isNDCHalfZRange: this._engine.isNDCHalfZRange,
            XyU: this._engine.XyU,
            supportsUniformBuffers: this._engine.supportsUniformBuffers
          },
          extendedCreatePipelineOptions: {
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            createAsRaw: !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride)
          }
        }
      }
      _rebuildProgram(UU, XU, zU, cU) {
        this._isReady = !1, this._vertexSourceCodeOverride = UU, this._fragmentSourceCodeOverride = XU, this.onError = (UU, XU) => {
          cU && cU(XU)
        }, this.onCompiled = () => {
          const UU = this.qp().scenes;
          if (UU)
            for (let XU = 0; XU < UU.length; XU++) UU[XU].markAllMaterialsAsDirty(127);
          this._pipelineContext._handlesSpectorRebuildCallback?.(zU)
        }, this._fallbacks = null, this._prepareEffect()
      }
      _onRenderingStateCompiled(UU) {
        if (this._pipelineContext = UU, this._pipelineContext.setEngine(this._engine), this._attributes = [], this._pipelineContext._fillEffectInformation(this, this._uniformBuffersNames, this._uniformsNames, this._uniforms, this._samplerList, this._samplers, this._attributesNames, this._attributes), this._attributesNames)
          for (let XU = 0; XU < this._attributesNames.length; XU++) {
            const UU = this._attributesNames[XU];
            this._attributeLocationByName[UU] = this._attributes[XU]
          }
        this._engine.bindSamplers(this), this._compilationError = "", this._isReady = !0, this.onCompiled && this.onCompiled(this), this.onCompileObservable.notifyObservers(this), this.onCompileObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh(), oU.AutomaticallyClearCodeCache && this.clearCodeCache()
      }
      _prepareEffect() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const XU = this._pipelineContext;
        this._isReady = !1;
        try {
          const zU = !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride),
            cU = zU ? null : this.defines,
            yU = zU ? this._vertexSourceCodeOverride : this._vertexSourceCode,
            QU = zU ? this._fragmentSourceCodeOverride : this._fragmentSourceCode,
            FU = this._engine;
          this._pipelineContext = (0, AU.i)({
            existingPipelineContext: UU ? XU : null,
            vertex: yU,
            fragment: QU,
            context: "WEBGL2" === FU.shaderPlatformName || "WEBGL1" === FU.shaderPlatformName ? FU._gl : void 0,
            rebuildRebind: (UU, XU, zU, cU) => this._rebuildProgram(UU, XU, zU, cU),
            defines: cU,
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            name: this._key.replace(/\r/g, "").replace(/\n/g, "|"),
            createAsRaw: zU,
            disableParallelCompilation: this._disableParallelShaderCompilation,
            shaderProcessingContext: this._processingContext,
            onRenderingStateCompiled: zU => {
              XU && !UU && this._engine._deletePipelineContext(XU), zU && this._onRenderingStateCompiled(zU)
            }
          }, this._engine.createPipelineContext.bind(this._engine), this._engine._preparePipelineContextAsync.bind(this._engine), this._engine._executeWhenRenderingStateIsCompiled.bind(this._engine)), this._pipelineContext.isAsync && this._checkIsReady(XU)
        } catch (zU) {
          this._processCompilationErrors(zU, XU)
        }
      }
      _getShaderCodeAndErrorLine(UU, XU, zU) {
        const cU = zU ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/;
        let yU = null;
        if (XU && UU) {
          const QU = XU.match(cU);
          if (QU && 2 === QU.length) {
            const XU = parseInt(QU[1]),
              cU = UU.split("\n", -1);
            cU.length >= XU && (yU = `Offending line [${XU}] in ${zU?"fragment":"vertex"} code: ${cU[XU-1]}`)
          }
        }
        return [UU, yU]
      }
      _processCompilationErrors(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._compilationError = "string" === typeof UU?.stack ? UU.stack : UU?.message ?? String(UU);
        const zU = this._attributesNames,
          cU = this._fallbacks;
        if (yU.b.Error("Unable to compile effect:"), yU.b.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), yU.b.Error(`Attributes: ${zU.join(" ")}`), yU.b.Error("Defines:\n" + this.defines), oU.LogShaderCodeOnCompilationError) {
          let UU, XU = null,
            zU = null;
          this._pipelineContext?._getVertexShaderCode() && ([UU, XU] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), UU && (yU.b.Error("Vertex code:"), yU.b.Error(UU))), this._pipelineContext?._getFragmentShaderCode() && ([UU, zU] = this._getShaderCodeAndErrorLine(this._pipelineContext?._getFragmentShaderCode(), this._compilationError, !0), UU && (yU.b.Error("Fragment code:"), yU.b.Error(UU))), XU && yU.b.Error(XU), zU && yU.b.Error(zU)
        }
        yU.b.Error("Error: " + this._compilationError);
        const QU = () => {
          this.onError && this.onError(this, this._compilationError), this.onErrorObservable.notifyObservers(this), this._engine.onEffectErrorObservable.notifyObservers({
            effect: this,
            errors: this._compilationError
          })
        };
        XU && (this._pipelineContext = XU, this._isReady = !0, QU()), cU ? (this._pipelineContext = null, cU.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, yU.b.Error("Trying next fallback."), this.defines = cU.reduce(this.defines, this), this._prepareEffect()) : (this._allFallbacksProcessed = !0, QU(), this.onErrorObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh())) : (this._allFallbacksProcessed = !0, XU || QU())
      }
      get isSupported() {
        return "" === this._compilationError
      }
      _bindTexture(UU, XU) {
        this._engine._bindTexture(this._samplers[UU], XU, UU)
      }
      setTexture(UU, XU) {
        this._engine.setTexture(this._samplers[UU], this._uniforms[UU], XU, UU)
      }
      setTextureArray(UU, XU) {
        const zU = UU + "Ex";
        if (-1 === this._samplerList.indexOf(zU + "0")) {
          const cU = this._samplerList.indexOf(UU);
          for (let UU = 1; UU < XU.length; UU++) {
            const XU = zU + (UU - 1).toString();
            this._samplerList.splice(cU + UU, 0, XU)
          }
          let yU = 0;
          for (const UU of this._samplerList) this._samplers[UU] = yU, yU += 1
        }
        this._engine.setTextureArray(this._samplers[UU], this._uniforms[UU], XU, UU)
      }
      bindUniformBuffer(UU, XU) {
        const zU = this._uniformBuffersNames[XU];
        void 0 === zU || oU._BaseCache[zU] === UU && this._engine._features.useUBOBindingCache || (oU._BaseCache[zU] = UU, this._engine.bindUniformBufferBase(UU, zU, XU))
      }
      bindUniformBlock(UU, XU) {
        this._engine.bindUniformBlock(this._pipelineContext, UU, XU)
      }
      setInt(UU, XU) {
        return this._pipelineContext.setInt(UU, XU), this
      }
      setInt2(UU, XU, zU) {
        return this._pipelineContext.setInt2(UU, XU, zU), this
      }
      setInt3(UU, XU, zU, cU) {
        return this._pipelineContext.setInt3(UU, XU, zU, cU), this
      }
      setInt4(UU, XU, zU, cU, yU) {
        return this._pipelineContext.setInt4(UU, XU, zU, cU, yU), this
      }
      setIntArray(UU, XU) {
        return this._pipelineContext.setIntArray(UU, XU), this
      }
      setIntArray2(UU, XU) {
        return this._pipelineContext.setIntArray2(UU, XU), this
      }
      setIntArray3(UU, XU) {
        return this._pipelineContext.setIntArray3(UU, XU), this
      }
      setIntArray4(UU, XU) {
        return this._pipelineContext.setIntArray4(UU, XU), this
      }
      setUInt(UU, XU) {
        return this._pipelineContext.setUInt(UU, XU), this
      }
      setUInt2(UU, XU, zU) {
        return this._pipelineContext.setUInt2(UU, XU, zU), this
      }
      setUInt3(UU, XU, zU, cU) {
        return this._pipelineContext.setUInt3(UU, XU, zU, cU), this
      }
      setUInt4(UU, XU, zU, cU, yU) {
        return this._pipelineContext.setUInt4(UU, XU, zU, cU, yU), this
      }
      setUIntArray(UU, XU) {
        return this._pipelineContext.setUIntArray(UU, XU), this
      }
      setUIntArray2(UU, XU) {
        return this._pipelineContext.setUIntArray2(UU, XU), this
      }
      setUIntArray3(UU, XU) {
        return this._pipelineContext.setUIntArray3(UU, XU), this
      }
      setUIntArray4(UU, XU) {
        return this._pipelineContext.setUIntArray4(UU, XU), this
      }
      setFloatArray(UU, XU) {
        return this._pipelineContext.setArray(UU, XU), this
      }
      setFloatArray2(UU, XU) {
        return this._pipelineContext.setArray2(UU, XU), this
      }
      setFloatArray3(UU, XU) {
        return this._pipelineContext.setArray3(UU, XU), this
      }
      setFloatArray4(UU, XU) {
        return this._pipelineContext.setArray4(UU, XU), this
      }
      setArray(UU, XU) {
        return this._pipelineContext.setArray(UU, XU), this
      }
      setArray2(UU, XU) {
        return this._pipelineContext.setArray2(UU, XU), this
      }
      setArray3(UU, XU) {
        return this._pipelineContext.setArray3(UU, XU), this
      }
      setArray4(UU, XU) {
        return this._pipelineContext.setArray4(UU, XU), this
      }
      setMatrices(UU, XU) {
        return this._pipelineContext.setMatrices(UU, XU), this
      }
      setMatrix(UU, XU) {
        return this._pipelineContext.setMatrix(UU, XU), this
      }
      setMatrix3x3(UU, XU) {
        return this._pipelineContext.setMatrix3x3(UU, XU), this
      }
      setMatrix2x2(UU, XU) {
        return this._pipelineContext.setMatrix2x2(UU, XU), this
      }
      setFloat(UU, XU) {
        return this._pipelineContext.setFloat(UU, XU), this
      }
      setBool(UU, XU) {
        return this._pipelineContext.setInt(UU, XU ? 1 : 0), this
      }
      setVector2(UU, XU) {
        return this._pipelineContext.setVector2(UU, XU), this
      }
      setFloat2(UU, XU, zU) {
        return this._pipelineContext.setFloat2(UU, XU, zU), this
      }
      setVector3(UU, XU) {
        return this._pipelineContext.setVector3(UU, XU), this
      }
      setFloat3(UU, XU, zU, cU) {
        return this._pipelineContext.setFloat3(UU, XU, zU, cU), this
      }
      setVector4(UU, XU) {
        return this._pipelineContext.setVector4(UU, XU), this
      }
      setQuaternion(UU, XU) {
        return this._pipelineContext.setQuaternion(UU, XU), this
      }
      setFloat4(UU, XU, zU, cU, yU) {
        return this._pipelineContext.setFloat4(UU, XU, zU, cU, yU), this
      }
      setColor3(UU, XU) {
        return this._pipelineContext.setColor3(UU, XU), this
      }
      setColor4(UU, XU, zU) {
        return this._pipelineContext.setColor4(UU, XU, zU), this
      }
      setDirectColor4(UU, XU) {
        return this._pipelineContext.setDirectColor4(UU, XU), this
      }
      clearCodeCache() {
        this._vertexSourceCode = "", this._fragmentSourceCode = "", this._fragmentSourceCodeBeforeMigration = "", this._vertexSourceCodeBeforeMigration = ""
      }
      dispose() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) this._refCount = 0;
        else {
          if (oU.PersistentMode) return;
          this._refCount--
        }
        this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, AU.o)(this._pipelineContext), this._engine._releaseEffect(this), this.clearCodeCache(), this._isDisposed = !0)
      }
      static RegisterShader(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        XU && (QU.b.GetShadersStore(cU)[`${UU}PixelShader`] = XU), zU && (QU.b.GetShadersStore(cU)[`${UU}VertexShader`] = zU)
      }
      static ResetCache() {
        oU._BaseCache = {}
      }
    }
    oU.LogShaderCodeOnCompilationError = !0, oU.PersistentMode = !1, oU.AutomaticallyClearCodeCache = !1, oU._UniqueIdSeed = 0, oU._BaseCache = {}, oU.ShadersStore = QU.b.ShadersStore, oU.IncludesShadersStore = QU.b.IncludesShadersStore
  },
  41246: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => EU,
      h: () => PU,
      j: () => RU
    });
    var cU = zU(40954),
      yU = zU(37819),
      QU = zU(37861),
      AU = zU(41228);
    const FU = new yU.e,
      oU = new yU.e,
      DU = new yU.e,
      EU = {
        nS: () => {},
        eyeAtCamera: !0
      };

    function YU(UU, XU, zU) {
      const cU = zU.cyU(),
        yU = XU.cyU();
      for (let QU = 0; QU < 16; QU++) cU[QU] = yU[QU];
      return cU[12] -= UU.x, cU[13] -= UU.y, cU[14] -= UU.z, zU.markAsUpdated(), zU
    }

    function NU(UU, XU, zU) {
      return (0, QU.i)(XU, oU), YU(UU, oU, DU), (0, QU.i)(DU, zU), zU
    }

    function IU(UU, XU, zU) {
      if (!EU.eyeAtCamera) return NU(UU, XU, zU);
      const cU = zU.cyU(),
        yU = XU.cyU();
      for (let QU = 0; QU < 16; QU++) cU[QU] = yU[QU];
      return cU[12] = 0, cU[13] = 0, cU[14] = 0, zU.markAsUpdated(), zU
    }

    function pU(UU, XU, zU, cU) {
      return (0, QU.q)(IU(UU, XU, cU), zU, cU), cU
    }

    function aU(UU, XU, zU, cU) {
      return (0, QU.i)(zU, oU), (0, QU.q)(XU, oU, DU), YU(UU, DU, oU), IU(UU, zU, DU), (0, QU.q)(oU, DU, cU), cU
    }

    function tU(UU, XU, zU, cU, yU, AU) {
      return (0, QU.i)(zU, oU), (0, QU.q)(XU, oU, DU), YU(UU, DU, oU), pU(UU, cU, yU, DU), (0, QU.q)(oU, DU, AU), AU
    }

    function gU(UU, XU) {
      const zU = EU.nS();
      if (!zU || FU === XU) return XU;
      FU.updateFlag = XU.updateFlag;
      const cU = zU.floatingOriginOffset;
      switch (UU) {
        case "world":
          return YU(cU, XU, FU);
        case "view":
          return IU(cU, XU, FU);
        case "worldView":
          return aU(cU, XU, zU.getViewMatrix(), FU);
        case "viewProjection":
          return pU(cU, zU.getViewMatrix(), zU.getProjectionMatrix(), FU);
        case "worldViewProjection":
          return tU(cU, XU, zU.getTransformMatrix(), zU.getViewMatrix(), zU.getProjectionMatrix(), FU);
        default:
          if (UU.startsWith("u_")) {
            const yU = UU.toLowerCase();
            if (yU.startsWith("u_worldviewprojection")) return tU(cU, XU, zU.getTransformMatrix(), zU.getViewMatrix(), zU.getProjectionMatrix(), FU);
            if (yU.startsWith("u_viewprojection")) return pU(cU, zU.getViewMatrix(), zU.getProjectionMatrix(), FU);
            if (yU.startsWith("u_worldview")) return aU(cU, XU, zU.getViewMatrix(), FU);
            if (yU.startsWith("u_world")) return YU(cU, XU, FU);
            if (yU.startsWith("u_view")) return IU(cU, XU, FU)
          }
          return XU
      }
    }
    const kU = AU.b,
      GU = cU.b,
      BU = kU.prototype._updateMatrixForUniform,
      ZU = cU.b.prototype.setMatrix;

    function RU() {
      cU.b.prototype.setMatrix = ZU, GU._setMatrixOverride = void 0, kU.prototype._updateMatrixForUniform = BU, kU.prototype._updateMatrixForUniformOverride = void 0
    }

    function PU() {
      GU.prototype._setMatrixOverride = ZU, GU.prototype.setMatrix = function(UU, XU) {
        return this._setMatrixOverride(UU, gU(UU, XU)), this
      }, kU.prototype._updateMatrixForUniformOverride = BU, kU.prototype._updateMatrixForUniform = function(UU, XU) {
        this._updateMatrixForUniformOverride(UU, gU(UU, XU))
      }
    }
  },
  41224: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => QU,
      g: () => yU
    });
    var cU = zU(41221);

    function yU(UU, XU) {
      XU.WHITEBALANCE && UU.push("whiteBalanceMatrix"), XU.EXPOSURE && UU.push("exposureLinear"), XU.CONTRAST && UU.push("contrast"), XU.COLORGRADING && UU.push("colorTransformSettings"), (XU.VIGNETTE || XU.DITHER) && UU.push("vInverseScreenSize"), XU.VIGNETTE && (UU.push("vignetteSettings1"), UU.push("vignetteSettings2")), XU.COLORCURVES && (0, cU.d)(UU), XU.DITHER && UU.push("ditherIntensity")
    }

    function QU(UU, XU) {
      XU.COLORGRADING && UU.push("txColorTransform")
    }
  },
  41214: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => CU,
      d: () => OU
    });
    var cU = zU(41113),
      yU = zU(41121),
      QU = zU(37846),
      AU = zU(37923),
      FU = zU(37855),
      oU = zU(37819);
    const DU = [
        [0, .18006, .26352, -.24341],
        [10, .18066, .26589, -.25479],
        [20, .18133, .26846, -.26876],
        [30, .18208, .27119, -.28539],
        [40, .18293, .27407, -.3047],
        [50, .18388, .27709, -.32675],
        [60, .18494, .28021, -.35156],
        [70, .18611, .28342, -.37915],
        [80, .1874, .28668, -.40955],
        [90, .1888, .28997, -.44278],
        [100, .19032, .29326, -.47888],
        [125, .19462, .30141, -.58204],
        [150, .19962, .30921, -.70471],
        [175, .20525, .31647, -.84901],
        [200, .21142, .32312, -1.0182],
        [225, .21807, .32909, -1.2168],
        [250, .22511, .33439, -1.4512],
        [275, .23247, .33904, -1.7298],
        [300, .2401, .34308, -2.0637],
        [325, .24792, .34655, -2.4681],
        [350, .25591, .34951, -2.9641],
        [375, .264, .352, -3.5814],
        [400, .27218, .35407, -4.3633],
        [425, .28039, .35577, -5.3762],
        [450, .28863, .35714, -6.7262],
        [475, .29685, .35823, -8.5955],
        [500, .30505, .35907, -11.324],
        [525, .3132, .35968, -15.628],
        [550, .32129, .36011, -23.325],
        [575, .32931, .36038, -40.77],
        [600, .33724, .36051, -116.45]
      ],
      EU = 1e6 / DU[DU.length - 1][0],
      YU = 150;

    function NU(UU, XU) {
      const zU = Number.isNaN(UU) ? EU : Math.max(UU, EU),
        cU = (0, FU.Clamp)(1e6 / zU, DU[0][0], DU[DU.length - 1][0]);
      let yU = 0,
        QU = DU.length - 1;
      for (; QU - yU > 1;) {
        const UU = yU + QU >> 1;
        DU[UU][0] <= cU ? yU = UU : QU = UU
      }
      const AU = yU,
        [NU, IU, pU, aU] = DU[AU],
        [tU, gU, kU, GU] = DU[AU + 1],
        BU = (cU - NU) / (tU - NU),
        ZU = oU.m.Lerp(new oU.m(IU, pU), new oU.m(gU, kU), BU),
        RU = oU.m.Normalize(new oU.m(1, aU)),
        PU = oU.m.Normalize(new oU.m(1, GU)),
        WU = oU.m.Normalize(oU.m.Lerp(RU, PU, BU)),
        dU = (0, FU.Clamp)(XU, -150, YU);
      ZU.ZyU(WU.scale(dU / 3e3));
      const LU = 2 * ZU.x - 8 * ZU.y + 4,
        eU = 3 * ZU.x / LU,
        CU = 2 * ZU.y / LU;
      return new oU.q(eU / CU, 1, (1 - eU - CU) / CU)
    }
    const IU = oU.e.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
      pU = oU.e.Invert(IU);

    function aU(UU, XU) {
      const zU = XU > 0 ? UU / XU : 10;
      return (0, FU.Clamp)(zU, .1, 10)
    }

    function tU(UU, XU) {
      const zU = oU.q.TransformNormal(UU, IU),
        cU = oU.q.TransformNormal(XU, IU),
        yU = oU.e.FromArray([aU(cU.x, zU.x), 0, 0, 0, 0, aU(cU.y, zU.y), 0, 0, 0, 0, aU(cU.z, zU.z), 0, 0, 0, 0, 1]);
      return IU.multiply(yU).multiply(pU)
    }
    const gU = new oU.q(.95047, 1, 1.08883),
      kU = oU.e.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(tU(gU, NU(6500, 0))),
      GU = oU.e.Invert(kU),
      BU = oU.q.TransformNormal(new oU.q(1, 1, 1), kU);
    var ZU = zU(41134),
      RU = zU(41221);
    let PU = (() => {
      var UU;
      let XU, zU, QU, FU, oU, DU, EU, YU, NU, IU, pU, aU, tU = [],
        gU = [],
        kU = [],
        GU = [],
        BU = [],
        PU = [],
        WU = [],
        dU = [],
        LU = [],
        eU = [],
        CU = [],
        wU = [],
        qU = [],
        OU = [],
        SU = [],
        rU = [],
        uU = [],
        fU = [],
        iU = [],
        HU = [],
        MU = [],
        vU = [],
        VU = [],
        sU = [];
      return UU = class {
        constructor() {
          this._dirty = !0, this._tempColor = new AU.e(0, 0, 0, 0), this._globalCurve = new AU.e(0, 0, 0, 0), this._highlightsCurve = new AU.e(0, 0, 0, 0), this._midtonesCurve = new AU.e(0, 0, 0, 0), this._shadowsCurve = new AU.e(0, 0, 0, 0), this._positiveCurve = new AU.e(0, 0, 0, 0), this._negativeCurve = new AU.e(0, 0, 0, 0), this._globalHue = (0, cU.n)(this, tU, 30), this._globalDensity = ((0, cU.n)(this, gU), (0, cU.n)(this, kU, 0)), this._globalSaturation = ((0, cU.n)(this, GU), (0, cU.n)(this, BU, 0)), this._globalExposure = ((0, cU.n)(this, PU), (0, cU.n)(this, WU, 0)), this._highlightsHue = ((0, cU.n)(this, dU), (0, cU.n)(this, LU, 30)), this._highlightsDensity = ((0, cU.n)(this, eU), (0, cU.n)(this, CU, 0)), this._highlightsSaturation = ((0, cU.n)(this, wU), (0, cU.n)(this, qU, 0)), this._highlightsExposure = ((0, cU.n)(this, OU), (0, cU.n)(this, SU, 0)), this._midtonesHue = ((0, cU.n)(this, rU), (0, cU.n)(this, uU, 30)), this._midtonesDensity = ((0, cU.n)(this, fU), (0, cU.n)(this, iU, 0)), this._midtonesSaturation = ((0, cU.n)(this, HU), (0, cU.n)(this, MU, 0)), this._midtonesExposure = ((0, cU.n)(this, vU), (0, cU.n)(this, VU, 0)), this._shadowsHue = ((0, cU.n)(this, sU), 30), this._shadowsDensity = 0, this._shadowsSaturation = 0, this._shadowsExposure = 0
        }
        get globalHue() {
          return this._globalHue
        }
        set globalHue(UU) {
          this._globalHue = UU, this._dirty = !0
        }
        get globalDensity() {
          return this._globalDensity
        }
        set globalDensity(UU) {
          this._globalDensity = UU, this._dirty = !0
        }
        get globalSaturation() {
          return this._globalSaturation
        }
        set globalSaturation(UU) {
          this._globalSaturation = UU, this._dirty = !0
        }
        get globalExposure() {
          return this._globalExposure
        }
        set globalExposure(UU) {
          this._globalExposure = UU, this._dirty = !0
        }
        get highlightsHue() {
          return this._highlightsHue
        }
        set highlightsHue(UU) {
          this._highlightsHue = UU, this._dirty = !0
        }
        get highlightsDensity() {
          return this._highlightsDensity
        }
        set highlightsDensity(UU) {
          this._highlightsDensity = UU, this._dirty = !0
        }
        get highlightsSaturation() {
          return this._highlightsSaturation
        }
        set highlightsSaturation(UU) {
          this._highlightsSaturation = UU, this._dirty = !0
        }
        get highlightsExposure() {
          return this._highlightsExposure
        }
        set highlightsExposure(UU) {
          this._highlightsExposure = UU, this._dirty = !0
        }
        get midtonesHue() {
          return this._midtonesHue
        }
        set midtonesHue(UU) {
          this._midtonesHue = UU, this._dirty = !0
        }
        get midtonesDensity() {
          return this._midtonesDensity
        }
        set midtonesDensity(UU) {
          this._midtonesDensity = UU, this._dirty = !0
        }
        get midtonesSaturation() {
          return this._midtonesSaturation
        }
        set midtonesSaturation(UU) {
          this._midtonesSaturation = UU, this._dirty = !0
        }
        get midtonesExposure() {
          return this._midtonesExposure
        }
        set midtonesExposure(UU) {
          this._midtonesExposure = UU, this._dirty = !0
        }
        get shadowsHue() {
          return this._shadowsHue
        }
        set shadowsHue(UU) {
          this._shadowsHue = UU, this._dirty = !0
        }
        get shadowsDensity() {
          return this._shadowsDensity
        }
        set shadowsDensity(UU) {
          this._shadowsDensity = UU, this._dirty = !0
        }
        get shadowsSaturation() {
          return this._shadowsSaturation
        }
        set shadowsSaturation(UU) {
          this._shadowsSaturation = UU, this._dirty = !0
        }
        get shadowsExposure() {
          return this._shadowsExposure
        }
        set shadowsExposure(UU) {
          this._shadowsExposure = UU, this._dirty = !0
        }
        getClassName() {
          return "ColorCurves"
        }
        _getColorGradingDataToRef(XU, zU, cU, yU, QU) {
          null != XU && (XU = UU._Clamp(XU, 0, 360), zU = UU._Clamp(zU, -100, 100), cU = UU._Clamp(cU, -100, 100), yU = UU._Clamp(yU, -100, 100), zU = UU._ApplyColorGradingSliderNonlinear(zU), zU *= .5, yU = UU._ApplyColorGradingSliderNonlinear(yU), zU < 0 && (zU *= -1, XU = (XU + 180) % 360), UU._FromHSBToRef(XU, zU, 50 + .25 * yU, QU), QU.scaleToRef(2, QU), QU.a = 1 + .01 * cU)
        }
        static _ApplyColorGradingSliderNonlinear(UU) {
          UU /= 100;
          let XU = Math.abs(UU);
          return XU = Math.pow(XU, 2), UU < 0 && (XU *= -1), XU *= 100, XU
        }
        static _FromHSBToRef(XU, zU, cU, yU) {
          let QU = UU._Clamp(XU, 0, 360);
          const AU = UU._Clamp(zU / 100, 0, 1),
            FU = UU._Clamp(cU / 100, 0, 1);
          if (0 === AU) yU.r = FU, yU.g = FU, yU.b = FU;
          else {
            QU /= 60;
            const UU = Math.floor(QU),
              XU = QU - UU,
              zU = FU * (1 - AU),
              cU = FU * (1 - AU * XU),
              oU = FU * (1 - AU * (1 - XU));
            switch (UU) {
              case 0:
                yU.r = FU, yU.g = oU, yU.b = zU;
                break;
              case 1:
                yU.r = cU, yU.g = FU, yU.b = zU;
                break;
              case 2:
                yU.r = zU, yU.g = FU, yU.b = oU;
                break;
              case 3:
                yU.r = zU, yU.g = cU, yU.b = FU;
                break;
              case 4:
                yU.r = oU, yU.g = zU, yU.b = FU;
                break;
              default:
                yU.r = FU, yU.g = zU, yU.b = cU
            }
          }
          yU.a = 1
        }
        static _Clamp(UU, XU, zU) {
          return Math.min(Math.max(UU, XU), zU)
        }
        clone() {
          return ZU.b.Clone((() => new UU), this)
        }
        serialize() {
          return ZU.b.Serialize(this)
        }
        _bind(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vCameraColorCurvePositive",
            zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurveNeutral",
            cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNegative";
          this._dirty && (this._dirty = !1, this._getColorGradingDataToRef(this._globalHue, this._globalDensity, this._globalSaturation, this._globalExposure, this._globalCurve), this._getColorGradingDataToRef(this._highlightsHue, this._highlightsDensity, this._highlightsSaturation, this._highlightsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._highlightsCurve), this._getColorGradingDataToRef(this._midtonesHue, this._midtonesDensity, this._midtonesSaturation, this._midtonesExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._midtonesCurve), this._getColorGradingDataToRef(this._shadowsHue, this._shadowsDensity, this._shadowsSaturation, this._shadowsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._shadowsCurve), this._highlightsCurve.subtractToRef(this._midtonesCurve, this._positiveCurve), this._midtonesCurve.subtractToRef(this._shadowsCurve, this._negativeCurve)), UU && (UU.setFloat4(XU, this._positiveCurve.r, this._positiveCurve.g, this._positiveCurve.b, this._positiveCurve.a), UU.setFloat4(zU, this._midtonesCurve.r, this._midtonesCurve.g, this._midtonesCurve.b, this._midtonesCurve.a), UU.setFloat4(cU, this._negativeCurve.r, this._negativeCurve.g, this._negativeCurve.b, this._negativeCurve.a))
        }
      }, (() => {
        const AU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        XU = [(0, yU.I)()], zU = [(0, yU.I)()], QU = [(0, yU.I)()], FU = [(0, yU.I)()], oU = [(0, yU.I)()], DU = [(0, yU.I)()], EU = [(0, yU.I)()], YU = [(0, yU.I)()], NU = [(0, yU.I)()], IU = [(0, yU.I)()], pU = [(0, yU.I)()], aU = [(0, yU.I)()], (0, cU.j)(null, null, XU, {
          kind: "field",
          name: "_globalHue",
          static: !1,
          private: !1,
          access: {
            has: UU => "_globalHue" in UU,
            get: UU => UU._globalHue,
            set: (UU, XU) => {
              UU._globalHue = XU
            }
          },
          metadata: AU
        }, tU, gU), (0, cU.j)(null, null, zU, {
          kind: "field",
          name: "_globalDensity",
          static: !1,
          private: !1,
          access: {
            has: UU => "_globalDensity" in UU,
            get: UU => UU._globalDensity,
            set: (UU, XU) => {
              UU._globalDensity = XU
            }
          },
          metadata: AU
        }, kU, GU), (0, cU.j)(null, null, QU, {
          kind: "field",
          name: "_globalSaturation",
          static: !1,
          private: !1,
          access: {
            has: UU => "_globalSaturation" in UU,
            get: UU => UU._globalSaturation,
            set: (UU, XU) => {
              UU._globalSaturation = XU
            }
          },
          metadata: AU
        }, BU, PU), (0, cU.j)(null, null, FU, {
          kind: "field",
          name: "_globalExposure",
          static: !1,
          private: !1,
          access: {
            has: UU => "_globalExposure" in UU,
            get: UU => UU._globalExposure,
            set: (UU, XU) => {
              UU._globalExposure = XU
            }
          },
          metadata: AU
        }, WU, dU), (0, cU.j)(null, null, oU, {
          kind: "field",
          name: "_highlightsHue",
          static: !1,
          private: !1,
          access: {
            has: UU => "_highlightsHue" in UU,
            get: UU => UU._highlightsHue,
            set: (UU, XU) => {
              UU._highlightsHue = XU
            }
          },
          metadata: AU
        }, LU, eU), (0, cU.j)(null, null, DU, {
          kind: "field",
          name: "_highlightsDensity",
          static: !1,
          private: !1,
          access: {
            has: UU => "_highlightsDensity" in UU,
            get: UU => UU._highlightsDensity,
            set: (UU, XU) => {
              UU._highlightsDensity = XU
            }
          },
          metadata: AU
        }, CU, wU), (0, cU.j)(null, null, EU, {
          kind: "field",
          name: "_highlightsSaturation",
          static: !1,
          private: !1,
          access: {
            has: UU => "_highlightsSaturation" in UU,
            get: UU => UU._highlightsSaturation,
            set: (UU, XU) => {
              UU._highlightsSaturation = XU
            }
          },
          metadata: AU
        }, qU, OU), (0, cU.j)(null, null, YU, {
          kind: "field",
          name: "_highlightsExposure",
          static: !1,
          private: !1,
          access: {
            has: UU => "_highlightsExposure" in UU,
            get: UU => UU._highlightsExposure,
            set: (UU, XU) => {
              UU._highlightsExposure = XU
            }
          },
          metadata: AU
        }, SU, rU), (0, cU.j)(null, null, NU, {
          kind: "field",
          name: "_midtonesHue",
          static: !1,
          private: !1,
          access: {
            has: UU => "_midtonesHue" in UU,
            get: UU => UU._midtonesHue,
            set: (UU, XU) => {
              UU._midtonesHue = XU
            }
          },
          metadata: AU
        }, uU, fU), (0, cU.j)(null, null, IU, {
          kind: "field",
          name: "_midtonesDensity",
          static: !1,
          private: !1,
          access: {
            has: UU => "_midtonesDensity" in UU,
            get: UU => UU._midtonesDensity,
            set: (UU, XU) => {
              UU._midtonesDensity = XU
            }
          },
          metadata: AU
        }, iU, HU), (0, cU.j)(null, null, pU, {
          kind: "field",
          name: "_midtonesSaturation",
          static: !1,
          private: !1,
          access: {
            has: UU => "_midtonesSaturation" in UU,
            get: UU => UU._midtonesSaturation,
            set: (UU, XU) => {
              UU._midtonesSaturation = XU
            }
          },
          metadata: AU
        }, MU, vU), (0, cU.j)(null, null, aU, {
          kind: "field",
          name: "_midtonesExposure",
          static: !1,
          private: !1,
          access: {
            has: UU => "_midtonesExposure" in UU,
            get: UU => UU._midtonesExposure,
            set: (UU, XU) => {
              UU._midtonesExposure = XU
            }
          },
          metadata: AU
        }, VU, sU), AU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: AU
        })
      })(), UU.PrepareUniforms = RU.d, UU
    })();

    function WU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurvePositive",
        cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNeutral",
        yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "vCameraColorCurveNegative";
      UU._bind(XU, zU, cU, yU)
    }
    var dU = zU(41036),
      LU = zU(41224),
      eU = zU(37863);
    let CU = (() => {
        var UU;
        let XU, zU, DU, IU, pU, aU, gU, RU, eU, CU, wU, qU, OU, SU, rU, uU, fU, iU, HU, MU, vU, VU, sU, nU, mU, lU, xU, JU, jU = [],
          KU = [],
          bU = [],
          TU = [],
          hU = [],
          UX = [],
          XX = [],
          zX = [],
          cX = [],
          yX = [],
          QX = [],
          AX = [],
          FX = [],
          oX = [],
          DX = [],
          EX = [],
          YX = [],
          NX = [],
          IX = [],
          pX = [],
          aX = [],
          tX = [],
          gX = [],
          kX = [],
          GX = [],
          BX = [],
          ZX = [],
          RX = [],
          PX = [],
          WX = [],
          dX = [],
          LX = [],
          eX = [],
          CX = [],
          wX = [],
          qX = [],
          OX = [],
          SX = [],
          rX = [],
          uX = [],
          fX = [],
          iX = [],
          HX = [],
          MX = [],
          vX = [],
          VX = [],
          sX = [],
          nX = [],
          mX = [],
          lX = [],
          xX = [],
          JX = [],
          jX = [],
          KX = [],
          bX = [],
          TX = [];
        return UU = class {
          constructor() {
            this.colorCurves = (0, cU.n)(this, jU, new PU), this._colorCurvesEnabled = ((0, cU.n)(this, KU), (0, cU.n)(this, bU, !1)), this._colorGradingTexture = ((0, cU.n)(this, TU), (0, cU.n)(this, hU, void 0)), this._colorGradingEnabled = ((0, cU.n)(this, UX), (0, cU.n)(this, XX, !1)), this._colorGradingWithGreenDepth = ((0, cU.n)(this, zX), (0, cU.n)(this, cX, !0)), this._colorGradingBGR = ((0, cU.n)(this, yX), (0, cU.n)(this, QX, !0)), this._exposure = ((0, cU.n)(this, AX), (0, cU.n)(this, FX, 1)), this._toneMappingEnabled = ((0, cU.n)(this, oX), (0, cU.n)(this, DX, !1)), this._toneMappingType = ((0, cU.n)(this, EX), (0, cU.n)(this, YX, UU.TONEMAPPING_STANDARD)), this._contrast = ((0, cU.n)(this, NX), (0, cU.n)(this, IX, 1)), this._whiteBalanceEnabled = ((0, cU.n)(this, pX), (0, cU.n)(this, aX, !1)), this._temperature = ((0, cU.n)(this, tX), (0, cU.n)(this, gX, 6500)), this._tint = ((0, cU.n)(this, kX), (0, cU.n)(this, GX, 0)), this._whiteBalanceMatrix = ((0, cU.n)(this, BX), null), this._whiteBalanceMatrixTemperature = null, this._whiteBalanceMatrixTint = null, this.vignetteStretch = (0, cU.n)(this, ZX, 0), this.vignetteCenterX = ((0, cU.n)(this, RX), (0, cU.n)(this, PX, 0)), this.vignetteCenterY = ((0, cU.n)(this, WX), (0, cU.n)(this, dX, 0)), this.vignetteWeight = ((0, cU.n)(this, LX), (0, cU.n)(this, eX, 1.5)), this.vignetteColor = ((0, cU.n)(this, CX), (0, cU.n)(this, wX, new AU.e(0, 0, 0, 0))), this.vignetteCameraFov = ((0, cU.n)(this, qX), (0, cU.n)(this, OX, .5)), this._vignetteBlendMode = ((0, cU.n)(this, SX), (0, cU.n)(this, rX, UU.VIGNETTEMODE_MULTIPLY)), this._vignetteEnabled = ((0, cU.n)(this, uX), (0, cU.n)(this, fX, !1)), this._ditheringEnabled = ((0, cU.n)(this, iX), (0, cU.n)(this, HX, !1)), this._ditheringIntensity = ((0, cU.n)(this, MX), (0, cU.n)(this, vX, 1 / 255)), this._skipFinalColorClamp = ((0, cU.n)(this, VX), (0, cU.n)(this, sX, !1)), this._applyByPostProcess = ((0, cU.n)(this, nX), (0, cU.n)(this, mX, !1)), this._isEnabled = ((0, cU.n)(this, lX), (0, cU.n)(this, xX, !0)), this.outputTextureWidth = ((0, cU.n)(this, JX), (0, cU.n)(this, jX, 0)), this.outputTextureHeight = ((0, cU.n)(this, KX), (0, cU.n)(this, bX, 0)), this.onUpdateParameters = ((0, cU.n)(this, TX), new QU.e)
          }
          get colorCurvesEnabled() {
            return this._colorCurvesEnabled
          }
          set colorCurvesEnabled(UU) {
            this._colorCurvesEnabled !== UU && (this._colorCurvesEnabled = UU, this._updateParameters())
          }
          get colorGradingTexture() {
            return this._colorGradingTexture
          }
          set colorGradingTexture(UU) {
            this._colorGradingTexture !== UU && (this._colorGradingTexture = UU, this._updateParameters())
          }
          get colorGradingEnabled() {
            return this._colorGradingEnabled
          }
          set colorGradingEnabled(UU) {
            this._colorGradingEnabled !== UU && (this._colorGradingEnabled = UU, this._updateParameters())
          }
          get colorGradingWithGreenDepth() {
            return this._colorGradingWithGreenDepth
          }
          set colorGradingWithGreenDepth(UU) {
            this._colorGradingWithGreenDepth !== UU && (this._colorGradingWithGreenDepth = UU, this._updateParameters())
          }
          get colorGradingBGR() {
            return this._colorGradingBGR
          }
          set colorGradingBGR(UU) {
            this._colorGradingBGR !== UU && (this._colorGradingBGR = UU, this._updateParameters())
          }
          get exposure() {
            return this._exposure
          }
          set exposure(UU) {
            this._exposure !== UU && (this._exposure = UU, this._updateParameters())
          }
          get toneMappingEnabled() {
            return this._toneMappingEnabled
          }
          set toneMappingEnabled(UU) {
            this._toneMappingEnabled !== UU && (this._toneMappingEnabled = UU, this._updateParameters())
          }
          get toneMappingType() {
            return this._toneMappingType
          }
          set toneMappingType(UU) {
            this._toneMappingType !== UU && (this._toneMappingType = UU, this._updateParameters())
          }
          get contrast() {
            return this._contrast
          }
          set contrast(UU) {
            this._contrast !== UU && (this._contrast = UU, this._updateParameters())
          }
          get whiteBalanceEnabled() {
            return this._whiteBalanceEnabled
          }
          set whiteBalanceEnabled(UU) {
            this._whiteBalanceEnabled !== UU && (this._whiteBalanceEnabled = UU, this._updateParameters())
          }
          get temperature() {
            return this._temperature
          }
          set temperature(UU) {
            UU = Number.isNaN(UU) ? EU : Math.max(UU, EU), this._temperature !== UU && (this._temperature = UU, this._updateParameters())
          }
          get tint() {
            return this._tint
          }
          set tint(UU) {
            UU = (0, FU.Clamp)(UU, -150, YU), this._tint !== UU && (this._tint = UU, this._updateParameters())
          }
          _getWhiteBalanceMatrix() {
            return null !== this._whiteBalanceMatrix && this._whiteBalanceMatrixTemperature === this._temperature && this._whiteBalanceMatrixTint === this._tint || (this._whiteBalanceMatrixTemperature = this._temperature, this._whiteBalanceMatrixTint = this._tint, this._whiteBalanceMatrix = function(UU, XU) {
              const zU = tU(NU(UU, XU), BU),
                cU = kU.multiply(zU).multiply(GU);
              return oU.e.GetAsMatrix3x3(cU)
            }(this._temperature, this._tint)), this._whiteBalanceMatrix
          }
          get vignetteCentreY() {
            return this.vignetteCenterY
          }
          set vignetteCentreY(UU) {
            this.vignetteCenterY = UU
          }
          get vignetteCentreX() {
            return this.vignetteCenterX
          }
          set vignetteCentreX(UU) {
            this.vignetteCenterX = UU
          }
          get vignetteBlendMode() {
            return this._vignetteBlendMode
          }
          set vignetteBlendMode(UU) {
            this._vignetteBlendMode !== UU && (this._vignetteBlendMode = UU, this._updateParameters())
          }
          get vignetteEnabled() {
            return this._vignetteEnabled
          }
          set vignetteEnabled(UU) {
            this._vignetteEnabled !== UU && (this._vignetteEnabled = UU, this._updateParameters())
          }
          get ditheringEnabled() {
            return this._ditheringEnabled
          }
          set ditheringEnabled(UU) {
            this._ditheringEnabled !== UU && (this._ditheringEnabled = UU, this._updateParameters())
          }
          get ditheringIntensity() {
            return this._ditheringIntensity
          }
          set ditheringIntensity(UU) {
            this._ditheringIntensity !== UU && (this._ditheringIntensity = UU, this._updateParameters())
          }
          get skipFinalColorClamp() {
            return this._skipFinalColorClamp
          }
          set skipFinalColorClamp(UU) {
            this._skipFinalColorClamp !== UU && (this._skipFinalColorClamp = UU, this._updateParameters())
          }
          get applyByPostProcess() {
            return this._applyByPostProcess
          }
          set applyByPostProcess(UU) {
            this._applyByPostProcess !== UU && (this._applyByPostProcess = UU, this._updateParameters())
          }
          get isEnabled() {
            return this._isEnabled
          }
          set isEnabled(UU) {
            this._isEnabled !== UU && (this._isEnabled = UU, this._updateParameters())
          }
          _updateParameters() {
            this.onUpdateParameters.notifyObservers(this)
          }
          getClassName() {
            return "ImageProcessingConfiguration"
          }
          prepareDefines(XU) {
            if ((arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) !== this.applyByPostProcess || !this._isEnabled) return XU.WHITEBALANCE = !1, XU.VIGNETTE = !1, XU.TONEMAPPING = 0, XU.CONTRAST = !1, XU.EXPOSURE = !1, XU.COLORCURVES = !1, XU.COLORGRADING = !1, XU.COLORGRADING3D = !1, XU.DITHER = !1, XU.IMAGEPROCESSING = !1, XU.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, void(XU.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess && this._isEnabled);
            if (XU.WHITEBALANCE = this._whiteBalanceEnabled, XU.VIGNETTE = this.vignetteEnabled, XU.VIGNETTEBLENDMODEMULTIPLY = this.vignetteBlendMode === UU._VIGNETTEMODE_MULTIPLY, XU.VIGNETTEBLENDMODEOPAQUE = !XU.VIGNETTEBLENDMODEMULTIPLY, this._toneMappingEnabled) switch (this._toneMappingType) {
              case UU.TONEMAPPING_KHR_PBR_NEUTRAL:
                XU.TONEMAPPING = 3;
                break;
              case UU.TONEMAPPING_ACES:
                XU.TONEMAPPING = 2;
                break;
              default:
                XU.TONEMAPPING = 1
            } else XU.TONEMAPPING = 0;
            XU.CONTRAST = 1 !== this.contrast, XU.EXPOSURE = 1 !== this.exposure, XU.COLORCURVES = this.colorCurvesEnabled && !!this.colorCurves, XU.COLORGRADING = this.colorGradingEnabled && !!this.colorGradingTexture, XU.COLORGRADING ? XU.COLORGRADING3D = this.colorGradingTexture.is3D : XU.COLORGRADING3D = !1, XU.SAMPLER3DGREENDEPTH = this.colorGradingWithGreenDepth, XU.SAMPLER3DBGRMAP = this.colorGradingBGR, XU.DITHER = this._ditheringEnabled, XU.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess, XU.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, XU.IMAGEPROCESSING = XU.WHITEBALANCE || XU.VIGNETTE || !!XU.TONEMAPPING || XU.CONTRAST || XU.EXPOSURE || XU.COLORCURVES || XU.COLORGRADING || XU.DITHER
          }
          isReady() {
            return !this.colorGradingEnabled || !this.colorGradingTexture || this.colorGradingTexture.isReady()
          }
          bind(UU, XU) {
            if (this._whiteBalanceEnabled && UU.setMatrix3x3("whiteBalanceMatrix", this._getWhiteBalanceMatrix()), this._colorCurvesEnabled && this.colorCurves && WU(this.colorCurves, UU), this._vignetteEnabled || this._ditheringEnabled) {
              const zU = 1 / (this.outputTextureWidth || UU.qp().getRenderWidth()),
                cU = 1 / (this.outputTextureHeight || UU.qp().getRenderHeight());
              if (UU.setFloat2("vInverseScreenSize", zU, cU), this._ditheringEnabled && UU.setFloat("ditherIntensity", .5 * this._ditheringIntensity), this._vignetteEnabled) {
                const yU = null != XU ? XU : cU / zU;
                let QU = Math.tan(.5 * this.vignetteCameraFov),
                  AU = QU * yU;
                const FU = Math.sqrt(AU * QU);
                AU = (0, dU.n)(AU, FU, this.vignetteStretch), QU = (0, dU.n)(QU, FU, this.vignetteStretch), UU.setFloat4("vignetteSettings1", AU, QU, -AU * this.vignetteCenterX, -QU * this.vignetteCenterY);
                const oU = -2 * this.vignetteWeight;
                UU.setFloat4("vignetteSettings2", this.vignetteColor.r, this.vignetteColor.g, this.vignetteColor.b, oU)
              }
            }
            if (UU.setFloat("exposureLinear", this.exposure), UU.setFloat("contrast", this.contrast), this.colorGradingTexture) {
              UU.setTexture("txColorTransform", this.colorGradingTexture);
              const XU = this.colorGradingTexture.getSize().height;
              UU.setFloat4("colorTransformSettings", (XU - 1) / XU, .5 / XU, XU, this.colorGradingTexture.level)
            }
          }
          clone() {
            return ZU.b.Clone((() => new UU), this)
          }
          serialize() {
            return ZU.b.Serialize(this)
          }
          static get VIGNETTEMODE_MULTIPLY() {
            return this._VIGNETTEMODE_MULTIPLY
          }
          static get VIGNETTEMODE_OPAQUE() {
            return this._VIGNETTEMODE_OPAQUE
          }
        }, (() => {
          const QU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          XU = [(0, yU.i)()], zU = [(0, yU.I)()], DU = [(0, yU.x)("colorGradingTexture")], IU = [(0, yU.I)()], pU = [(0, yU.I)()], aU = [(0, yU.I)()], gU = [(0, yU.I)()], RU = [(0, yU.I)()], eU = [(0, yU.I)()], CU = [(0, yU.I)()], wU = [(0, yU.I)()], qU = [(0, yU.I)()], OU = [(0, yU.I)()], SU = [(0, yU.I)()], rU = [(0, yU.I)()], uU = [(0, yU.I)()], fU = [(0, yU.I)()], iU = [(0, yU.n)()], HU = [(0, yU.I)()], MU = [(0, yU.I)()], vU = [(0, yU.I)()], VU = [(0, yU.I)()], sU = [(0, yU.I)()], nU = [(0, yU.I)()], mU = [(0, yU.I)()], lU = [(0, yU.I)()], xU = [(0, yU.I)()], JU = [(0, yU.I)()], (0, cU.j)(null, null, XU, {
            kind: "field",
            name: "colorCurves",
            static: !1,
            private: !1,
            access: {
              has: UU => "colorCurves" in UU,
              get: UU => UU.colorCurves,
              set: (UU, XU) => {
                UU.colorCurves = XU
              }
            },
            metadata: QU
          }, jU, KU), (0, cU.j)(null, null, zU, {
            kind: "field",
            name: "_colorCurvesEnabled",
            static: !1,
            private: !1,
            access: {
              has: UU => "_colorCurvesEnabled" in UU,
              get: UU => UU._colorCurvesEnabled,
              set: (UU, XU) => {
                UU._colorCurvesEnabled = XU
              }
            },
            metadata: QU
          }, bU, TU), (0, cU.j)(null, null, DU, {
            kind: "field",
            name: "_colorGradingTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "_colorGradingTexture" in UU,
              get: UU => UU._colorGradingTexture,
              set: (UU, XU) => {
                UU._colorGradingTexture = XU
              }
            },
            metadata: QU
          }, hU, UX), (0, cU.j)(null, null, IU, {
            kind: "field",
            name: "_colorGradingEnabled",
            static: !1,
            private: !1,
            access: {
              has: UU => "_colorGradingEnabled" in UU,
              get: UU => UU._colorGradingEnabled,
              set: (UU, XU) => {
                UU._colorGradingEnabled = XU
              }
            },
            metadata: QU
          }, XX, zX), (0, cU.j)(null, null, pU, {
            kind: "field",
            name: "_colorGradingWithGreenDepth",
            static: !1,
            private: !1,
            access: {
              has: UU => "_colorGradingWithGreenDepth" in UU,
              get: UU => UU._colorGradingWithGreenDepth,
              set: (UU, XU) => {
                UU._colorGradingWithGreenDepth = XU
              }
            },
            metadata: QU
          }, cX, yX), (0, cU.j)(null, null, aU, {
            kind: "field",
            name: "_colorGradingBGR",
            static: !1,
            private: !1,
            access: {
              has: UU => "_colorGradingBGR" in UU,
              get: UU => UU._colorGradingBGR,
              set: (UU, XU) => {
                UU._colorGradingBGR = XU
              }
            },
            metadata: QU
          }, QX, AX), (0, cU.j)(null, null, gU, {
            kind: "field",
            name: "_exposure",
            static: !1,
            private: !1,
            access: {
              has: UU => "_exposure" in UU,
              get: UU => UU._exposure,
              set: (UU, XU) => {
                UU._exposure = XU
              }
            },
            metadata: QU
          }, FX, oX), (0, cU.j)(null, null, RU, {
            kind: "field",
            name: "_toneMappingEnabled",
            static: !1,
            private: !1,
            access: {
              has: UU => "_toneMappingEnabled" in UU,
              get: UU => UU._toneMappingEnabled,
              set: (UU, XU) => {
                UU._toneMappingEnabled = XU
              }
            },
            metadata: QU
          }, DX, EX), (0, cU.j)(null, null, eU, {
            kind: "field",
            name: "_toneMappingType",
            static: !1,
            private: !1,
            access: {
              has: UU => "_toneMappingType" in UU,
              get: UU => UU._toneMappingType,
              set: (UU, XU) => {
                UU._toneMappingType = XU
              }
            },
            metadata: QU
          }, YX, NX), (0, cU.j)(null, null, CU, {
            kind: "field",
            name: "_contrast",
            static: !1,
            private: !1,
            access: {
              has: UU => "_contrast" in UU,
              get: UU => UU._contrast,
              set: (UU, XU) => {
                UU._contrast = XU
              }
            },
            metadata: QU
          }, IX, pX), (0, cU.j)(null, null, wU, {
            kind: "field",
            name: "_whiteBalanceEnabled",
            static: !1,
            private: !1,
            access: {
              has: UU => "_whiteBalanceEnabled" in UU,
              get: UU => UU._whiteBalanceEnabled,
              set: (UU, XU) => {
                UU._whiteBalanceEnabled = XU
              }
            },
            metadata: QU
          }, aX, tX), (0, cU.j)(null, null, qU, {
            kind: "field",
            name: "_temperature",
            static: !1,
            private: !1,
            access: {
              has: UU => "_temperature" in UU,
              get: UU => UU._temperature,
              set: (UU, XU) => {
                UU._temperature = XU
              }
            },
            metadata: QU
          }, gX, kX), (0, cU.j)(null, null, OU, {
            kind: "field",
            name: "_tint",
            static: !1,
            private: !1,
            access: {
              has: UU => "_tint" in UU,
              get: UU => UU._tint,
              set: (UU, XU) => {
                UU._tint = XU
              }
            },
            metadata: QU
          }, GX, BX), (0, cU.j)(null, null, SU, {
            kind: "field",
            name: "vignetteStretch",
            static: !1,
            private: !1,
            access: {
              has: UU => "vignetteStretch" in UU,
              get: UU => UU.vignetteStretch,
              set: (UU, XU) => {
                UU.vignetteStretch = XU
              }
            },
            metadata: QU
          }, ZX, RX), (0, cU.j)(null, null, rU, {
            kind: "field",
            name: "vignetteCenterX",
            static: !1,
            private: !1,
            access: {
              has: UU => "vignetteCenterX" in UU,
              get: UU => UU.vignetteCenterX,
              set: (UU, XU) => {
                UU.vignetteCenterX = XU
              }
            },
            metadata: QU
          }, PX, WX), (0, cU.j)(null, null, uU, {
            kind: "field",
            name: "vignetteCenterY",
            static: !1,
            private: !1,
            access: {
              has: UU => "vignetteCenterY" in UU,
              get: UU => UU.vignetteCenterY,
              set: (UU, XU) => {
                UU.vignetteCenterY = XU
              }
            },
            metadata: QU
          }, dX, LX), (0, cU.j)(null, null, fU, {
            kind: "field",
            name: "vignetteWeight",
            static: !1,
            private: !1,
            access: {
              has: UU => "vignetteWeight" in UU,
              get: UU => UU.vignetteWeight,
              set: (UU, XU) => {
                UU.vignetteWeight = XU
              }
            },
            metadata: QU
          }, eX, CX), (0, cU.j)(null, null, iU, {
            kind: "field",
            name: "vignetteColor",
            static: !1,
            private: !1,
            access: {
              has: UU => "vignetteColor" in UU,
              get: UU => UU.vignetteColor,
              set: (UU, XU) => {
                UU.vignetteColor = XU
              }
            },
            metadata: QU
          }, wX, qX), (0, cU.j)(null, null, HU, {
            kind: "field",
            name: "vignetteCameraFov",
            static: !1,
            private: !1,
            access: {
              has: UU => "vignetteCameraFov" in UU,
              get: UU => UU.vignetteCameraFov,
              set: (UU, XU) => {
                UU.vignetteCameraFov = XU
              }
            },
            metadata: QU
          }, OX, SX), (0, cU.j)(null, null, MU, {
            kind: "field",
            name: "_vignetteBlendMode",
            static: !1,
            private: !1,
            access: {
              has: UU => "_vignetteBlendMode" in UU,
              get: UU => UU._vignetteBlendMode,
              set: (UU, XU) => {
                UU._vignetteBlendMode = XU
              }
            },
            metadata: QU
          }, rX, uX), (0, cU.j)(null, null, vU, {
            kind: "field",
            name: "_vignetteEnabled",
            static: !1,
            private: !1,
            access: {
              has: UU => "_vignetteEnabled" in UU,
              get: UU => UU._vignetteEnabled,
              set: (UU, XU) => {
                UU._vignetteEnabled = XU
              }
            },
            metadata: QU
          }, fX, iX), (0, cU.j)(null, null, VU, {
            kind: "field",
            name: "_ditheringEnabled",
            static: !1,
            private: !1,
            access: {
              has: UU => "_ditheringEnabled" in UU,
              get: UU => UU._ditheringEnabled,
              set: (UU, XU) => {
                UU._ditheringEnabled = XU
              }
            },
            metadata: QU
          }, HX, MX), (0, cU.j)(null, null, sU, {
            kind: "field",
            name: "_ditheringIntensity",
            static: !1,
            private: !1,
            access: {
              has: UU => "_ditheringIntensity" in UU,
              get: UU => UU._ditheringIntensity,
              set: (UU, XU) => {
                UU._ditheringIntensity = XU
              }
            },
            metadata: QU
          }, vX, VX), (0, cU.j)(null, null, nU, {
            kind: "field",
            name: "_skipFinalColorClamp",
            static: !1,
            private: !1,
            access: {
              has: UU => "_skipFinalColorClamp" in UU,
              get: UU => UU._skipFinalColorClamp,
              set: (UU, XU) => {
                UU._skipFinalColorClamp = XU
              }
            },
            metadata: QU
          }, sX, nX), (0, cU.j)(null, null, mU, {
            kind: "field",
            name: "_applyByPostProcess",
            static: !1,
            private: !1,
            access: {
              has: UU => "_applyByPostProcess" in UU,
              get: UU => UU._applyByPostProcess,
              set: (UU, XU) => {
                UU._applyByPostProcess = XU
              }
            },
            metadata: QU
          }, mX, lX), (0, cU.j)(null, null, lU, {
            kind: "field",
            name: "_isEnabled",
            static: !1,
            private: !1,
            access: {
              has: UU => "_isEnabled" in UU,
              get: UU => UU._isEnabled,
              set: (UU, XU) => {
                UU._isEnabled = XU
              }
            },
            metadata: QU
          }, xX, JX), (0, cU.j)(null, null, xU, {
            kind: "field",
            name: "outputTextureWidth",
            static: !1,
            private: !1,
            access: {
              has: UU => "outputTextureWidth" in UU,
              get: UU => UU.outputTextureWidth,
              set: (UU, XU) => {
                UU.outputTextureWidth = XU
              }
            },
            metadata: QU
          }, jX, KX), (0, cU.j)(null, null, JU, {
            kind: "field",
            name: "outputTextureHeight",
            static: !1,
            private: !1,
            access: {
              has: UU => "outputTextureHeight" in UU,
              get: UU => UU.outputTextureHeight,
              set: (UU, XU) => {
                UU.outputTextureHeight = XU
              }
            },
            metadata: QU
          }, bX, TX), QU && Object.defineProperty(UU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: QU
          })
        })(), UU.TONEMAPPING_STANDARD = 0, UU.TONEMAPPING_ACES = 1, UU.TONEMAPPING_KHR_PBR_NEUTRAL = 2, UU.PrepareUniforms = LU.g, UU.PrepareSamplers = LU.d, UU._VIGNETTEMODE_MULTIPLY = 0, UU._VIGNETTEMODE_OPAQUE = 1, UU
      })(),
      wU = !1;

    function qU(UU) {
      const XU = ZU.b.Parse((() => new CU), UU, null, null);
      return void 0 !== UU.vignetteCentreX && (XU.vignetteCenterX = UU.vignetteCentreX), void 0 !== UU.vignetteCentreY && (XU.vignetteCenterY = UU.vignetteCentreY), XU
    }

    function OU() {
      wU || (wU = !0, CU.Parse = qU, ZU.b._ImageProcessingConfigurationParser = qU, (0, eU.h)("BABYLON.ImageProcessingConfiguration", CU))
    }
  },
  41228: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => QU
    });
    var cU = zU(39493),
      yU = zU(41205);
    class QU {
      constructor(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          cU = arguments.length > 3 ? arguments[3] : void 0,
          yU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          QU = arguments.length > 5 ? arguments[5] : void 0;
        this._uniformNames = [], this._valueCache = {}, this._engine = UU, this._noUBO = !UU.supportsUniformBuffers || yU, this._dynamic = zU, this._name = cU ?? "no-name", this._data = XU || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {}, this._uniformLocationPointer = 0, this._needSync = !1, this._dataGeneration = 0, this._trackUBOsInFrame = !1, (void 0 === QU && this._engine._features.trackUbosInFrame || !0 === QU) && (this._buffers = [], this._bufferIndex = -1, this._bufferUpdatedLastFrame = !1, this._createBufferOnWrite = !1, this._currentFrameId = 0, this._trackUBOsInFrame = !0, this._resetOwnerSlots()), this._noUBO ? (this.updateMatrix3x3 = this._updateMatrix3x3ForEffect, this.updateMatrix2x2 = this._updateMatrix2x2ForEffect, this.updateFloat = this._updateFloatForEffect, this.updateFloat2 = this._updateFloat2ForEffect, this.updateFloat3 = this._updateFloat3ForEffect, this.updateFloat4 = this._updateFloat4ForEffect, this.updateFloatArray = this._updateFloatArrayForEffect, this.updateArray = this._updateArrayForEffect, this.updateIntArray = this._updateIntArrayForEffect, this.updateUIntArray = this._updateUIntArrayForEffect, this.eUU = this._updateMatrixForEffect, this.updateMatrices = this._updateMatricesForEffect, this.updateVector3 = this._updateVector3ForEffect, this.updateVector4 = this._updateVector4ForEffect, this.updateColor3 = this._updateColor3ForEffect, this.updateColor4 = this._updateColor4ForEffect, this.updateDirectColor4 = this._updateDirectColor4ForEffect, this.updateInt = this._updateIntForEffect, this.updateInt2 = this._updateInt2ForEffect, this.updateInt3 = this._updateInt3ForEffect, this.updateInt4 = this._updateInt4ForEffect, this.updateUInt = this._updateUIntForEffect, this.updateUInt2 = this._updateUInt2ForEffect, this.updateUInt3 = this._updateUInt3ForEffect, this.updateUInt4 = this._updateUInt4ForEffect) : (this._engine._uniformBuffers.push(this), this.updateMatrix3x3 = this._updateMatrix3x3ForUniform, this.updateMatrix2x2 = this._updateMatrix2x2ForUniform, this.updateFloat = this._updateFloatForUniform, this.updateFloat2 = this._updateFloat2ForUniform, this.updateFloat3 = this._updateFloat3ForUniform, this.updateFloat4 = this._updateFloat4ForUniform, this.updateFloatArray = this._updateFloatArrayForUniform, this.updateArray = this._updateArrayForUniform, this.updateIntArray = this._updateIntArrayForUniform, this.updateUIntArray = this._updateUIntArrayForUniform, this.eUU = this._updateMatrixForUniform, this.updateMatrices = this._updateMatricesForUniform, this.updateVector3 = this._updateVector3ForUniform, this.updateVector4 = this._updateVector4ForUniform, this.updateColor3 = this._updateColor3ForUniform, this.updateColor4 = this._updateColor4ForUniform, this.updateDirectColor4 = this._updateDirectColor4ForUniform, this.updateInt = this._updateIntForUniform, this.updateInt2 = this._updateInt2ForUniform, this.updateInt3 = this._updateInt3ForUniform, this.updateInt4 = this._updateInt4ForUniform, this.updateUInt = this._updateUIntForUniform, this.updateUInt2 = this._updateUInt2ForUniform, this.updateUInt3 = this._updateUInt3ForUniform, this.updateUInt4 = this._updateUInt4ForUniform)
      }
      get useUbo() {
        return !this._noUBO
      }
      get isSync() {
        return !this._needSync
      }
      isDynamic() {
        return this._dynamic
      }
      getData() {
        return this._bufferData
      }
      getBuffer() {
        return this._buffer
      }
      getUniformNames() {
        return this._uniformNames
      }
      _fillAlignment(UU) {
        let XU;
        if (XU = UU <= 2 ? UU : 4, this._uniformLocationPointer % XU !== 0) {
          const UU = this._uniformLocationPointer;
          this._uniformLocationPointer += XU - this._uniformLocationPointer % XU;
          const zU = this._uniformLocationPointer - UU;
          for (let XU = 0; XU < zU; XU++) this._data.push(0)
        }
      }
      addUniform(UU, XU) {
        let zU, cU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (cU > 0 && "number" === typeof XU && (this._uniformArraySizes[UU] = {
            strideSize: XU,
            arraySize: cU
          }), void 0 === this._uniformLocations[UU] && (this._uniformNames.push(UU), !this._noUBO)) {
          if (cU > 0) {
            if (XU instanceof Array) throw "addUniform should not be use with Array in UBO: " + UU;
            if (this._fillAlignment(4), 16 == XU) XU *= cU;
            else {
              XU = XU * cU + (4 - XU) * cU
            }
            zU = [];
            for (let UU = 0; UU < XU; UU++) zU.push(0)
          } else {
            if (XU instanceof Array) zU = XU, XU = zU.length;
            else {
              zU = [];
              for (let UU = 0; UU < XU; UU++) zU.push(0)
            }
            this._fillAlignment(XU)
          }
          this._uniformSizes[UU] = XU, this._uniformLocations[UU] = this._uniformLocationPointer, this._uniformLocationPointer += XU;
          for (let UU = 0; UU < XU; UU++) this._data.push(zU[UU]);
          this._needSync = !0
        }
      }
      addMatrix(UU, XU) {
        this.addUniform(UU, Array.prototype.slice.call(XU.cyU()))
      }
      addFloat2(UU, XU, zU) {
        const cU = [XU, zU];
        this.addUniform(UU, cU)
      }
      addFloat3(UU, XU, zU, cU) {
        const yU = [XU, zU, cU];
        this.addUniform(UU, yU)
      }
      addColor3(UU, XU) {
        const zU = [XU.r, XU.g, XU.b];
        this.addUniform(UU, zU)
      }
      addColor4(UU, XU, zU) {
        const cU = [XU.r, XU.g, XU.b, zU];
        this.addUniform(UU, cU)
      }
      addVector3(UU, XU) {
        const zU = [XU.x, XU.y, XU.z];
        this.addUniform(UU, zU)
      }
      addMatrix3x3(UU) {
        this.addUniform(UU, 12)
      }
      addMatrix2x2(UU) {
        this.addUniform(UU, 8)
      }
      create() {
        this._noUBO || this._buffer || (this._fillAlignment(4), this._bufferData = new Float32Array(this._data), this._dataGeneration++, this._rebuild(), this._needSync = !0)
      }
      _getNamesDebug() {
        const UU = [];
        let XU = 0;
        for (const zU in this._uniformLocations)
          if (UU.push(zU), 10 === ++XU) break;
        return UU.join(",")
      }
      _rebuild() {
        !this._noUBO && this._bufferData && (this._dynamic ? this._buffer = this._engine.createDynamicUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()) : this._buffer = this._engine.createUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()), this._trackUBOsInFrame && (this._buffers.push([this._buffer, this._engine._features.checkUbosContentBeforeUpload ? this._bufferData.slice() : void 0]), this._bufferIndex = this._buffers.length - 1, this._createBufferOnWrite = !1))
      }
      _rebuildAfterContextLost() {
        this._trackUBOsInFrame && (this._buffers = [], this._currentFrameId = 0, this._resetOwnerSlots()), this._rebuild()
      }
      _resetOwnerSlots() {
        if (this._ownerListsBySlot)
          for (const UU of this._ownerListsBySlot.values()) this._removeOwnerBacklink(UU);
        this._ownerListsBySlot = new Map, this._slotByOwner = new WeakMap, this._slotFrameId = [], this._ownerCount = 0, this._freeSlots = [], this._slotGeneration = []
      }
      get _numBuffers() {
        return this._buffers.length
      }
      get _indexBuffer() {
        return this._bufferIndex
      }
      get name() {
        return this._name
      }
      set name(UU) {
        this._name = UU
      }
      get currentEffect() {
        return this._currentEffect
      }
      _buffersEqual(UU, XU) {
        for (let zU = 0; zU < UU.length; ++zU)
          if (UU[zU] !== XU[zU]) return !1;
        return !0
      }
      _copyBuffer(UU, XU) {
        for (let zU = 0; zU < UU.length; ++zU) XU[zU] = UU[zU]
      }
      update() {
        if (!this._noUBO)
          if (this.bindUniformBuffer(), this._buffer)
            if (this._dynamic || this._needSync) {
              if (this._buffers && this._buffers.length > 1 && this._buffers[this._bufferIndex][1]) {
                if (this._buffersEqual(this._bufferData, this._buffers[this._bufferIndex][1])) return this._needSync = !1, void(this._createBufferOnWrite = this._trackUBOsInFrame);
                this._copyBuffer(this._bufferData, this._buffers[this._bufferIndex][1])
              }
              this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData), this._needSync = !1, this._createBufferOnWrite = this._trackUBOsInFrame
            } else this._createBufferOnWrite = this._trackUBOsInFrame;
        else this.create()
      }
      _updateOwnerKeyed(UU) {
        if (this._noUBO || !this._trackUBOsInFrame) return void this.update();
        this._buffer || this.create(), this._checkNewFrame();
        let XU = this._slotByOwner.get(UU);
        if (void 0 === XU && (XU = 0 === this._ownerCount && 1 === this._buffers.length && 0 === this._freeSlots.length ? 0 : this._takeFreeSlot(!0), this._slotByOwner.set(UU, XU), this._ownerCount++, UU._uniformBuffersWithOwnedSlot || (UU._uniformBuffersWithOwnedSlot = []), UU._uniformBuffersWithOwnedSlot.push(this), this._ownerListsBySlot.set(XU, UU._uniformBuffersWithOwnedSlot)), this._slotGeneration[XU] === this._dataGeneration) return this._bufferIndex = XU, this._buffer = this._buffers[XU][0], this.bindUniformBuffer(), this._slotFrameId[XU] = this._currentFrameId, this._needSync = !1, void(this._createBufferOnWrite = !1);
        const zU = this._buffers[XU][1];
        this._slotFrameId[XU] === this._currentFrameId && zU && !this._buffersEqual(this._bufferData, zU) && (XU = this._takeFreeSlot(!1)), this._bufferIndex = XU, this._buffer = this._buffers[XU][0], this.bindUniformBuffer();
        const cU = this._buffers[XU][1];
        cU && this._buffersEqual(this._bufferData, cU) || (cU && this._copyBuffer(this._bufferData, cU), this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData)), this._slotFrameId[XU] = this._currentFrameId, this._slotGeneration[XU] = this._dataGeneration, this._needSync = !1, this._createBufferOnWrite = !1
      }
      _takeFreeSlot(UU) {
        for (let zU = 0; zU < this._freeSlots.length; ++zU) {
          const XU = this._freeSlots[zU];
          if (this._slotFrameId[XU] !== this._currentFrameId) return UU && (this._freeSlots[zU] = this._freeSlots[this._freeSlots.length - 1], this._freeSlots.pop()), XU
        }
        this._rebuild();
        const XU = this._buffers.length - 1;
        return UU || this._freeSlots.push(XU), XU
      }
      _releaseOwnerSlot(UU) {
        const XU = this._slotByOwner?.get(UU);
        if (void 0 === XU) return;
        this._slotByOwner.delete(UU);
        const zU = this._ownerListsBySlot.get(XU);
        zU && (this._removeOwnerBacklink(zU), this._ownerListsBySlot.delete(XU)), this._ownerCount--, this._freeSlots.push(XU)
      }
      _removeOwnerBacklink(UU) {
        const XU = UU.indexOf(this); - 1 !== XU && (UU[XU] = UU[UU.length - 1], UU.pop())
      }
      _createNewBuffer() {
        this._bufferIndex + 1 < this._buffers.length ? (this._bufferIndex++, this._buffer = this._buffers[this._bufferIndex][0], this._createBufferOnWrite = !1, this._needSync = !0) : this._rebuild()
      }
      _checkNewFrame() {
        this._trackUBOsInFrame && this._currentFrameId !== this._engine.frameId && (this._currentFrameId = this._engine.frameId, this._createBufferOnWrite = !1, this._buffers && this._buffers.length > 0 ? (1 === this._buffers.length ? this._needSync = !this._bufferUpdatedLastFrame : this._needSync = 0 !== this._bufferIndex, this._bufferIndex = 0, this._buffer = this._buffers[this._bufferIndex][0]) : this._bufferIndex = -1)
      }
      updateUniform(UU, XU, zU) {
        this._checkNewFrame();
        let yU = this._uniformLocations[UU];
        if (void 0 === yU) {
          if (this._buffer) return void cU.b.Error("Cannot add an uniform after UBO has been created. uniformName=" + UU);
          this.addUniform(UU, zU), yU = this._uniformLocations[UU]
        }
        if (this._buffer || this.create(), this._dynamic) {
          for (let UU = 0; UU < zU; UU++) this._bufferData[yU + UU] = XU[UU];
          this._dataGeneration++
        } else {
          let UU = !1;
          for (let cU = 0; cU < zU; cU++)(16 === zU && !this._engine._features.uniformBufferHardCheckMatrix || this._bufferData[yU + cU] !== Math.fround(XU[cU])) && (UU = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[yU + cU] = XU[cU]);
          this._needSync = this._needSync || UU, UU && this._dataGeneration++
        }
      }
      updateUniformArray(UU, XU, zU) {
        this._checkNewFrame();
        const QU = this._uniformLocations[UU];
        if (void 0 === QU) return void cU.b.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
        this._buffer || this.create();
        const AU = this._uniformArraySizes[UU];
        if (this._dynamic) {
          for (let UU = 0; UU < zU; UU++) this._bufferData[QU + UU] = XU[UU];
          this._dataGeneration++
        } else {
          let UU = !1,
            cU = 0,
            FU = 0;
          for (let oU = 0; oU < zU; oU++)
            if (this._bufferData[QU + 4 * FU + cU] !== yU.j.FloatRound(XU[oU]) && (UU = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[QU + 4 * FU + cU] = XU[oU]), cU++, cU === AU.strideSize) {
              for (; cU < 4; cU++) this._bufferData[QU + 4 * FU + cU] = 0;
              cU = 0, FU++
            } this._needSync = this._needSync || UU, UU && this._dataGeneration++
        }
      }
      _cacheMatrix(UU, XU) {
        this._checkNewFrame();
        const zU = this._valueCache[UU],
          cU = XU.updateFlag;
        return (void 0 === zU || zU !== cU) && (this._valueCache[UU] = cU, !0)
      }
      _updateMatrix3x3ForUniform(UU, XU) {
        for (let zU = 0; zU < 3; zU++) QU._TempBuffer[4 * zU] = XU[3 * zU], QU._TempBuffer[4 * zU + 1] = XU[3 * zU + 1], QU._TempBuffer[4 * zU + 2] = XU[3 * zU + 2], QU._TempBuffer[4 * zU + 3] = 0;
        this.updateUniform(UU, QU._TempBuffer, 12)
      }
      _updateMatrix3x3ForEffect(UU, XU) {
        this._currentEffect.setMatrix3x3(UU, XU)
      }
      _updateMatrix2x2ForEffect(UU, XU) {
        this._currentEffect.setMatrix2x2(UU, XU)
      }
      _updateMatrix2x2ForUniform(UU, XU) {
        for (let zU = 0; zU < 2; zU++) QU._TempBuffer[4 * zU] = XU[2 * zU], QU._TempBuffer[4 * zU + 1] = XU[2 * zU + 1], QU._TempBuffer[4 * zU + 2] = 0, QU._TempBuffer[4 * zU + 3] = 0;
        this.updateUniform(UU, QU._TempBuffer, 8)
      }
      _updateFloatForEffect(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setFloat(UU + zU, XU)
      }
      _updateFloatForUniform(UU, XU) {
        QU._TempBuffer[0] = XU, this.updateUniform(UU, QU._TempBuffer, 1)
      }
      _updateFloat2ForEffect(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setFloat2(UU + cU, XU, zU)
      }
      _updateFloat2ForUniform(UU, XU, zU) {
        QU._TempBuffer[0] = XU, QU._TempBuffer[1] = zU, this.updateUniform(UU, QU._TempBuffer, 2)
      }
      _updateFloat3ForEffect(UU, XU, zU, cU) {
        let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setFloat3(UU + yU, XU, zU, cU)
      }
      _updateFloat3ForUniform(UU, XU, zU, cU) {
        QU._TempBuffer[0] = XU, QU._TempBuffer[1] = zU, QU._TempBuffer[2] = cU, this.updateUniform(UU, QU._TempBuffer, 3)
      }
      _updateFloat4ForEffect(UU, XU, zU, cU, yU) {
        let QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setFloat4(UU + QU, XU, zU, cU, yU)
      }
      _updateFloat4ForUniform(UU, XU, zU, cU, yU) {
        QU._TempBuffer[0] = XU, QU._TempBuffer[1] = zU, QU._TempBuffer[2] = cU, QU._TempBuffer[3] = yU, this.updateUniform(UU, QU._TempBuffer, 4)
      }
      _updateFloatArrayForEffect(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        switch (this._uniformArraySizes[UU]?.strideSize) {
          case 2:
            this._currentEffect.setFloatArray2(UU + zU, XU);
            break;
          case 3:
            this._currentEffect.setFloatArray3(UU + zU, XU);
            break;
          case 4:
            this._currentEffect.setFloatArray4(UU + zU, XU);
            break;
          default:
            this._currentEffect.setFloatArray(UU + zU, XU)
        }
      }
      _updateFloatArrayForUniform(UU, XU) {
        this.updateUniformArray(UU, XU, XU.length)
      }
      _updateArrayForEffect(UU, XU) {
        this._currentEffect.setArray(UU, XU)
      }
      _updateArrayForUniform(UU, XU) {
        this.updateUniformArray(UU, XU, XU.length)
      }
      _updateIntArrayForEffect(UU, XU) {
        this._currentEffect.setIntArray(UU, XU)
      }
      _updateIntArrayForUniform(UU, XU) {
        QU._TempBufferInt32View.set(XU), this.updateUniformArray(UU, QU._TempBuffer, XU.length)
      }
      _updateUIntArrayForEffect(UU, XU) {
        this._currentEffect.setUIntArray(UU, XU)
      }
      _updateUIntArrayForUniform(UU, XU) {
        QU._TempBufferUInt32View.set(XU), this.updateUniformArray(UU, QU._TempBuffer, XU.length)
      }
      _updateMatrixForEffect(UU, XU) {
        this._currentEffect.setMatrix(UU, XU)
      }
      _updateMatrixForUniform(UU, XU) {
        this._cacheMatrix(UU, XU) && this.updateUniform(UU, XU.cyU(), 16)
      }
      _updateMatricesForEffect(UU, XU) {
        this._currentEffect.setMatrices(UU, XU)
      }
      _updateMatricesForUniform(UU, XU) {
        this.updateUniform(UU, XU, XU.length)
      }
      _updateVector3ForEffect(UU, XU) {
        this._currentEffect.setVector3(UU, XU)
      }
      _updateVector3ForUniform(UU, XU) {
        QU._TempBuffer[0] = XU.x, QU._TempBuffer[1] = XU.y, QU._TempBuffer[2] = XU.z, this.updateUniform(UU, QU._TempBuffer, 3)
      }
      _updateVector4ForEffect(UU, XU) {
        this._currentEffect.setVector4(UU, XU)
      }
      _updateVector4ForUniform(UU, XU) {
        QU._TempBuffer[0] = XU.x, QU._TempBuffer[1] = XU.y, QU._TempBuffer[2] = XU.z, QU._TempBuffer[3] = XU.w, this.updateUniform(UU, QU._TempBuffer, 4)
      }
      _updateColor3ForEffect(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setColor3(UU + zU, XU)
      }
      _updateColor3ForUniform(UU, XU) {
        QU._TempBuffer[0] = XU.r, QU._TempBuffer[1] = XU.g, QU._TempBuffer[2] = XU.b, this.updateUniform(UU, QU._TempBuffer, 3)
      }
      _updateColor4ForEffect(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setColor4(UU + cU, XU, zU)
      }
      _updateDirectColor4ForEffect(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setDirectColor4(UU + zU, XU)
      }
      _updateColor4ForUniform(UU, XU, zU) {
        QU._TempBuffer[0] = XU.r, QU._TempBuffer[1] = XU.g, QU._TempBuffer[2] = XU.b, QU._TempBuffer[3] = zU, this.updateUniform(UU, QU._TempBuffer, 4)
      }
      _updateDirectColor4ForUniform(UU, XU) {
        QU._TempBuffer[0] = XU.r, QU._TempBuffer[1] = XU.g, QU._TempBuffer[2] = XU.b, QU._TempBuffer[3] = XU.a, this.updateUniform(UU, QU._TempBuffer, 4)
      }
      _updateIntForEffect(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setInt(UU + zU, XU)
      }
      _updateIntForUniform(UU, XU) {
        QU._TempBufferInt32View[0] = XU, this.updateUniform(UU, QU._TempBuffer, 1)
      }
      _updateInt2ForEffect(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setInt2(UU + cU, XU, zU)
      }
      _updateInt2ForUniform(UU, XU, zU) {
        QU._TempBufferInt32View[0] = XU, QU._TempBufferInt32View[1] = zU, this.updateUniform(UU, QU._TempBuffer, 2)
      }
      _updateInt3ForEffect(UU, XU, zU, cU) {
        let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setInt3(UU + yU, XU, zU, cU)
      }
      _updateInt3ForUniform(UU, XU, zU, cU) {
        QU._TempBufferInt32View[0] = XU, QU._TempBufferInt32View[1] = zU, QU._TempBufferInt32View[2] = cU, this.updateUniform(UU, QU._TempBuffer, 3)
      }
      _updateInt4ForEffect(UU, XU, zU, cU, yU) {
        let QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setInt4(UU + QU, XU, zU, cU, yU)
      }
      _updateInt4ForUniform(UU, XU, zU, cU, yU) {
        QU._TempBufferInt32View[0] = XU, QU._TempBufferInt32View[1] = zU, QU._TempBufferInt32View[2] = cU, QU._TempBufferInt32View[3] = yU, this.updateUniform(UU, QU._TempBuffer, 4)
      }
      _updateUIntForEffect(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setUInt(UU + zU, XU)
      }
      _updateUIntForUniform(UU, XU) {
        QU._TempBufferUInt32View[0] = XU, this.updateUniform(UU, QU._TempBuffer, 1)
      }
      _updateUInt2ForEffect(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setUInt2(UU + cU, XU, zU)
      }
      _updateUInt2ForUniform(UU, XU, zU) {
        QU._TempBufferUInt32View[0] = XU, QU._TempBufferUInt32View[1] = zU, this.updateUniform(UU, QU._TempBuffer, 2)
      }
      _updateUInt3ForEffect(UU, XU, zU, cU) {
        let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setUInt3(UU + yU, XU, zU, cU)
      }
      _updateUInt3ForUniform(UU, XU, zU, cU) {
        QU._TempBufferUInt32View[0] = XU, QU._TempBufferUInt32View[1] = zU, QU._TempBufferUInt32View[2] = cU, this.updateUniform(UU, QU._TempBuffer, 3)
      }
      _updateUInt4ForEffect(UU, XU, zU, cU, yU) {
        let QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setUInt4(UU + QU, XU, zU, cU, yU)
      }
      _updateUInt4ForUniform(UU, XU, zU, cU, yU) {
        QU._TempBufferUInt32View[0] = XU, QU._TempBufferUInt32View[1] = zU, QU._TempBufferUInt32View[2] = cU, QU._TempBufferUInt32View[3] = yU, this.updateUniform(UU, QU._TempBuffer, 4)
      }
      setTexture(UU, XU) {
        this._currentEffect.setTexture(UU, XU)
      }
      setTextureArray(UU, XU) {
        this._currentEffect.setTextureArray(UU, XU)
      }
      bindTexture(UU, XU) {
        this._currentEffect._bindTexture(UU, XU)
      }
      updateUniformDirectly(UU, XU) {
        this.updateUniform(UU, XU, XU.length), this.update()
      }
      bindToEffect(UU, XU) {
        this._currentEffect = UU, this._currentEffectName = XU
      }
      bindUniformBuffer() {
        !this._noUBO && this._buffer && this._currentEffect && this._currentEffect.bindUniformBuffer(this._buffer, this._currentEffectName)
      }
      unbindEffect() {
        this._currentEffect = void 0, this._currentEffectName = void 0
      }
      setDataBuffer(UU) {
        if (!this._buffers) return this._buffer === UU;
        for (let XU = 0; XU < this._buffers.length; ++XU) {
          if (this._buffers[XU][0] === UU) return this._bufferIndex = XU, this._buffer = UU, this._createBufferOnWrite = !1, this._currentEffect = void 0, this._buffers.length > 1 && this._buffers[XU][1] && (this._bufferData.set(this._buffers[XU][1]), this._dataGeneration++), this._valueCache = {}, this._currentFrameId = this._engine.frameId, !0
        }
        return !1
      }
      has(UU) {
        return void 0 !== this._uniformLocations[UU]
      }
      dispose() {
        if (this._noUBO) return;
        const UU = this._engine._uniformBuffers,
          XU = UU.indexOf(this);
        if (-1 !== XU && (UU[XU] = UU[UU.length - 1], UU.pop()), this._trackUBOsInFrame && this._buffers) {
          this._resetOwnerSlots();
          for (let UU = 0; UU < this._buffers.length; ++UU) {
            const XU = this._buffers[UU][0];
            this._engine._releaseBuffer(XU)
          }
          this._buffers = [], this._buffer = null, this._bufferIndex = -1
        } else this._buffer && this._engine._releaseBuffer(this._buffer) && (this._buffer = null)
      }
    }
    QU._MAX_UNIFORM_SIZE = 256, QU._TempBuffer = new Float32Array(QU._MAX_UNIFORM_SIZE), QU._TempBufferInt32View = new Int32Array(QU._TempBuffer.buffer), QU._TempBufferUInt32View = new Uint32Array(QU._TempBuffer.buffer)
  },
  41023: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => yU
    });
    var cU = zU(41032);
    class yU extends cU.c {
      constructor(UU) {
        super(), this._buffer = UU
      }
      get underlyingResource() {
        return this._buffer
      }
    }
  },
  41123: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => oU,
      f: () => DU
    });
    const cU = "__bjs_serializable__",
      yU = new WeakMap;

    function QU(UU, XU) {
      return Object.prototype.hasOwnProperty.call(UU, XU)
    }
    const AU = function() {
      let UU = Symbol.metadata;
      return UU || (UU = Symbol("Symbol.metadata"), Object.defineProperty(Symbol, "metadata", {
        configurable: !0,
        writable: !0,
        value: UU
      })), UU
    }();

    function FU(UU) {
      return "function" === typeof UU ? UU : UU?.constructor
    }

    function oU(UU) {
      if (!UU) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(AU)}) polyfill must run before decorated classes are evaluated.`);
      return QU(UU, cU) || (UU[cU] = {}), UU[cU]
    }

    function DU(UU) {
      const XU = FU(UU),
        zU = XU ? XU[AU] : void 0;
      if (!zU) return {};
      const oU = yU.get(zU);
      if (oU) return oU;
      const DU = {},
        EU = [];
      let YU = zU;
      for (; YU;) EU.push(YU), YU = Object.getPrototypeOf(YU);
      for (const yU of EU)
        if (QU(yU, cU)) {
          const UU = yU[cU];
          for (const XU in UU) DU[XU] = UU[XU]
        } return yU.set(zU, DU), DU
    }
  },
  41121: (UU, XU, zU) => {
    zU.d(XU, {
      B: () => EU,
      F: () => YU,
      I: () => AU,
      b: () => GU,
      c: () => QU,
      e: () => kU,
      i: () => IU,
      m: () => oU,
      n: () => pU,
      o: () => DU,
      q: () => tU,
      t: () => NU,
      v: () => aU,
      x: () => FU
    });
    var cU = zU(41123);

    function yU(UU, XU) {
      return (zU, yU) => {
        if (!yU.metadata) return;
        const QU = String(yU.name),
          AU = (0, cU.e)(yU.metadata);
        AU[QU] || (AU[QU] = {
          type: UU,
          sourceName: XU
        })
      }
    }

    function QU(UU) {
      return function(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (zU, cU) => {
          const yU = XU || "_" + String(cU.name);
          return {
            init(UU) {
              return void 0 === UU && yU in this || (this[yU] = UU), UU
            },
            get() {
              return this[yU]
            },
            set(XU) {
              "function" === typeof this[yU]?.equals && this[yU].equals(XU) || this[yU] !== XU && (this[yU] = XU, this[UU]())
            }
          }
        }
      }(UU, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function AU(UU) {
      return yU(0, UU)
    }

    function FU(UU) {
      return yU(1, UU)
    }

    function oU(UU) {
      return yU(2, UU)
    }

    function DU(UU) {
      return yU(3, UU)
    }

    function EU(UU) {
      return yU(4, UU)
    }

    function YU(UU) {
      return yU(5, UU)
    }

    function NU(UU) {
      return yU(6, UU)
    }

    function IU(UU) {
      return yU(7, UU)
    }

    function pU(UU) {
      return yU(8, UU)
    }

    function aU(UU) {
      return yU(10, UU)
    }

    function tU(UU) {
      return yU(12, UU)
    }

    function gU(UU, XU, zU) {
      const cU = String(XU.name);
      let yU = null;
      const QU = function() {
        if (null === yU) {
          yU = UU, "undefined" !== typeof _native && _native[cU] && (yU = zU(_native[cU], UU));
          const AU = this && (XU.static ? this : Object.getPrototypeOf(this));
          AU?.[cU] === QU && (AU[cU] = yU)
        }
        for (var AU = arguments.length, FU = new Array(AU), oU = 0; oU < AU; oU++) FU[oU] = arguments[oU];
        return yU.apply(this, FU)
      };
      return QU
    }

    function kU(UU, XU) {
      return gU(UU, XU, (UU => UU))
    }

    function GU(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return (zU, cU) => {
        const yU = XU || "_" + String(cU.name);
        return {
          get() {
            return this[yU]?.value
          },
          set(XU) {
            "function" === typeof this[yU]?.value?.equals && this[yU].value.equals(XU) || this[yU].value !== XU && (this[yU].value = XU, this[UU]())
          }
        }
      }
    }
    kU.filter = function(UU) {
      return (XU, zU) => gU(XU, zU, ((XU, zU) => function() {
        for (var cU = arguments.length, yU = new Array(cU), QU = 0; QU < cU; QU++) yU[QU] = arguments[QU];
        return UU(...yU) ? XU(...yU) : zU.apply(this, yU)
      }))
    }
  },
  41134: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => DU
    });
    var cU = zU(40989),
      yU = zU(41138),
      QU = zU(37923),
      AU = zU(37819),
      FU = zU(41123);
    const oU = function(UU, XU, zU) {
      let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const QU = UU();
      yU.b && yU.b.HasTags(XU) && yU.b.AddTagsTo(QU, yU.b.GetTags(XU, !0));
      const AU = (0, FU.f)(QU),
        oU = {};
      for (const yU in AU) {
        const UU = AU[yU],
          FU = XU[yU],
          EU = UU.type;
        if (void 0 !== FU && null !== FU && ("uniqueId" !== yU || DU.AllowLoadingUniqueId)) switch (EU) {
          case 0:
          case 6:
          case 9:
          case 11:
            "function" === typeof FU.slice ? QU[yU] = FU.slice() : QU[yU] = FU;
            break;
          case 1:
            cU.cloneTexturesOnlyOnce && oU[FU.uniqueId] ? QU[yU] = oU[FU.uniqueId] : (QU[yU] = zU || FU.isRenderTarget ? FU : FU.clone(), oU[FU.uniqueId] = QU[yU]);
            break;
          case 2:
          case 3:
          case 4:
          case 5:
          case 7:
          case 8:
          case 10:
          case 12:
          case 13:
            QU[yU] = zU ? FU : FU.clone()
        }
      }
      return QU
    };
    class DU {
      static AppendSerializedAnimations(UU, XU) {
        if (UU.animations) {
          XU.animations = [];
          for (let zU = 0; zU < UU.animations.length; zU++) {
            const cU = UU.animations[zU];
            XU.animations.push(cU.serialize())
          }
        }
      }
      static Serialize(UU, XU) {
        XU || (XU = {}), yU.b && (XU.tags = yU.b.GetTags(UU));
        const zU = (0, FU.f)(UU);
        for (const cU in zU) {
          const yU = zU[cU],
            QU = yU.sourceName || cU,
            AU = yU.type,
            FU = UU[cU];
          if (void 0 !== FU && null !== FU && ("uniqueId" !== cU || DU.AllowLoadingUniqueId)) switch (AU) {
            case 0:
              Array.isArray(FU) ? XU[QU] = FU.slice() : XU[QU] = FU;
              break;
            case 1:
            case 3:
            case 7:
            case 9:
              XU[QU] = FU.serialize();
              break;
            case 2:
            case 4:
            case 5:
            case 8:
            case 10:
            case 12:
            case 13:
              XU[QU] = FU.cyU();
              break;
            case 6:
            case 11:
              XU[QU] = FU.id
          }
        }
        return XU
      }
      static ParseProperties(UU, XU, zU, cU) {
        cU || (cU = "");
        const yU = (0, FU.f)(XU);
        for (const FU in yU) {
          const oU = yU[FU],
            EU = UU[oU.sourceName || FU],
            YU = oU.type;
          if (void 0 !== EU && null !== EU && ("uniqueId" !== FU || DU.AllowLoadingUniqueId)) {
            const UU = XU;
            switch (YU) {
              case 0:
                UU[FU] = EU;
                break;
              case 1:
                zU && (UU[FU] = DU._TextureParser(EU, zU, cU));
                break;
              case 2:
                UU[FU] = QU.b.FromArray(EU);
                break;
              case 3:
                UU[FU] = DU._FresnelParametersParser(EU);
                break;
              case 4:
                UU[FU] = AU.m.FromArray(EU);
                break;
              case 5:
                UU[FU] = AU.q.FromArray(EU);
                break;
              case 6:
                zU && (UU[FU] = zU.getLastMeshById(EU));
                break;
              case 7:
                UU[FU] = DU._ColorCurvesParser(EU);
                break;
              case 8:
                UU[FU] = QU.e.FromArray(EU);
                break;
              case 9:
                UU[FU] = DU._ImageProcessingConfigurationParser(EU);
                break;
              case 10:
                UU[FU] = AU.f.FromArray(EU);
                break;
              case 11:
                zU && (UU[FU] = zU.getCameraById(EU));
                break;
              case 12:
                UU[FU] = AU.e.FromArray(EU);
                break;
              case 13:
                UU[FU] = AU.t.FromArray(EU)
            }
          }
        }
      }
      static Parse(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const QU = UU();
        return yU.b && yU.b.AddTagsTo(QU, XU.tags), DU.ParseProperties(XU, QU, zU, cU), QU
      }
      static Clone(UU, XU) {
        return oU(UU, XU, !1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
      }
      static Instanciate(UU, XU) {
        return oU(UU, XU, !0)
      }
    }
    DU.AllowLoadingUniqueId = !1, DU._ImageProcessingConfigurationParser = UU => {
      throw (0, cU.m)("ImageProcessingConfiguration")
    }, DU._FresnelParametersParser = UU => {
      throw (0, cU.m)("FresnelParameters")
    }, DU._ColorCurvesParser = UU => {
      throw (0, cU.m)("ColorCurves")
    }, DU._TextureParser = (UU, XU, zU) => {
      throw (0, cU.m)("Texture")
    }
  },
  41052: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => yU
    });
    var cU = zU(41010);
    class yU {
      get min() {
        return this._min
      }
      get max() {
        return this._max
      }
      get average() {
        return this._average
      }
      get lastSecAverage() {
        return this._lastSecAverage
      }
      get current() {
        return this._current
      }
      get total() {
        return this._totalAccumulated
      }
      get count() {
        return this._totalValueCount
      }
      constructor() {
        this._startMonitoringTime = 0, this._min = 0, this._max = 0, this._hasResult = !1, this._hasCurrentValue = !1, this._average = 0, this._lastSecAverage = 0, this._current = 0, this._totalValueCount = 0, this._totalAccumulated = 0, this._lastSecAccumulated = 0, this._lastSecTime = 0, this._lastSecValueCount = 0
      }
      fetchNewFrame() {
        this._totalValueCount++, this._current = 0, this._hasCurrentValue = yU.Enabled, this._lastSecValueCount++
      }
      addCount(UU, XU) {
        yU.Enabled && (this._current += UU, this._hasCurrentValue = !0, XU && this._fetchResult())
      }
      beginMonitoring() {
        yU.Enabled && (this._startMonitoringTime = cU.e.Now)
      }
      endMonitoring() {
        let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (!yU.Enabled) return;
        UU && this.fetchNewFrame();
        const XU = cU.e.Now;
        this._current = XU - this._startMonitoringTime, this._hasCurrentValue = !0, UU && this._fetchResult()
      }
      ZY() {
        this._fetchResult()
      }
      _fetchResult() {
        if (!this._hasCurrentValue) return;
        this._totalAccumulated += this._current, this._lastSecAccumulated += this._current, this._hasResult ? (this._min = Math.min(this._min, this._current), this._max = Math.max(this._max, this._current)) : (this._min = this._current, this._max = this._current, this._hasResult = !0), this._average = this._totalAccumulated / this._totalValueCount;
        const UU = cU.e.Now;
        UU - this._lastSecTime > 1e3 && (this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount, this._lastSecTime = UU, this._lastSecAccumulated = 0, this._lastSecValueCount = 0)
      }
    }
    yU.Enabled = !0
  },
  41210: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => yU,
      d: () => cU
    });
    class cU {
      constructor(UU) {
        this.length = 0, this.data = new Array(UU), this._id = cU._GlobalId++
      }
      push(UU) {
        this.data[this.length++] = UU, this.length > this.data.length && (this.data.length *= 2)
      }
      forEach(UU) {
        for (let XU = 0; XU < this.length; XU++) UU(this.data[XU])
      }
      sort(UU) {
        this.data.sort(UU)
      }
      reset() {
        this.length = 0
      }
      dispose() {
        this.reset(), this.data && (this.data.length = 0)
      }
      concat(UU) {
        if (0 !== UU.length) {
          this.length + UU.length > this.data.length && (this.data.length = 2 * (this.length + UU.length));
          for (let XU = 0; XU < UU.length; XU++) this.data[this.length++] = (UU.data || UU)[XU]
        }
      }
      indexOf(UU) {
        const XU = this.data.indexOf(UU);
        return XU >= this.length ? -1 : XU
      }
      contains(UU) {
        return -1 !== this.indexOf(UU)
      }
    }
    cU._GlobalId = 0;
    class yU extends cU {
      constructor() {
        super(...arguments), this._duplicateId = 0
      }
      push(UU) {
        super.push(UU), UU.__smartArrayFlags || (UU.__smartArrayFlags = {}), UU.__smartArrayFlags[this._id] = this._duplicateId
      }
      pushNoDuplicate(UU) {
        return (!UU.__smartArrayFlags || UU.__smartArrayFlags[this._id] !== this._duplicateId) && (this.push(UU), !0)
      }
      reset() {
        super.reset(), this._duplicateId++
      }
      concatWithNoDuplicate(UU) {
        if (0 !== UU.length) {
          this.length + UU.length > this.data.length && (this.data.length = 2 * (this.length + UU.length));
          for (let XU = 0; XU < UU.length; XU++) {
            const zU = (UU.data || UU)[XU];
            this.pushNoDuplicate(zU)
          }
        }
      }
    }
  },
  41138: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => yU
    });
    class cU {
      static Eval(UU, XU) {
        return "true" === (UU = UU.match(/\([^()]*\)/g) ? UU.replace(/\([^()]*\)/g, (UU => (UU = UU.slice(1, UU.length - 1), cU._HandleParenthesisContent(UU, XU)))) : cU._HandleParenthesisContent(UU, XU)) || "false" !== UU && cU.Eval(UU, XU)
      }
      static _HandleParenthesisContent(UU, XU) {
        let zU;
        XU = XU || (UU => "true" === UU);
        const yU = UU.split("||");
        for (const QU in yU)
          if (Object.prototype.hasOwnProperty.call(yU, QU)) {
            let UU = cU._SimplifyNegation(yU[QU].trim());
            const AU = UU.split("&&");
            if (AU.length > 1)
              for (let yU = 0; yU < AU.length; ++yU) {
                const QU = cU._SimplifyNegation(AU[yU].trim());
                if (zU = "true" !== QU && "false" !== QU ? "!" === QU[0] ? !XU(QU.substring(1)) : XU(QU) : "true" === QU, !zU) {
                  UU = "false";
                  break
                }
              }
            if (zU || "true" === UU) {
              zU = !0;
              break
            }
            zU = "true" !== UU && "false" !== UU ? "!" === UU[0] ? !XU(UU.substring(1)) : XU(UU) : "true" === UU
          } return zU ? "true" : "false"
      }
      static _SimplifyNegation(UU) {
        return "!true" === (UU = (UU = UU.replace(/^[\s!]+/, (UU => (UU = UU.replace(/[\s]/g, (() => ""))).length % 2 ? "!" : ""))).trim()) ? UU = "false" : "!false" === UU && (UU = "true"), UU
      }
    }
    class yU {
      static EnableFor(UU) {
        UU._tags = UU._tags || {}, UU.hasTags = () => yU.HasTags(UU), UU.addTags = XU => yU.AddTagsTo(UU, XU), UU.removeTags = XU => yU.RemoveTagsFrom(UU, XU), UU.matchesTagsQuery = XU => yU.MatchesQuery(UU, XU)
      }
      static DisableFor(UU) {
        delete UU._tags, delete UU.hasTags, delete UU.addTags, delete UU.removeTags, delete UU.matchesTagsQuery
      }
      static HasTags(UU) {
        if (!UU._tags) return !1;
        const XU = UU._tags;
        for (const zU in XU)
          if (Object.prototype.hasOwnProperty.call(XU, zU)) return !0;
        return !1
      }
      static GetTags(UU) {
        let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!UU._tags) return null;
        if (XU) {
          const XU = [];
          for (const zU in UU._tags) Object.prototype.hasOwnProperty.call(UU._tags, zU) && !0 === UU._tags[zU] && XU.push(zU);
          return XU.join(" ")
        }
        return UU._tags
      }
      static AddTagsTo(UU, XU) {
        if (!XU) return;
        if ("string" !== typeof XU) return;
        const zU = XU.split(" ");
        for (const cU of zU) yU._AddTagTo(UU, cU)
      }
      static _AddTagTo(UU, XU) {
        "" !== (XU = XU.trim()) && "true" !== XU && "false" !== XU && (XU.match(/[\s]/) || XU.match(/^([!]|([|]|[&]){2})/) || (yU.EnableFor(UU), UU._tags[XU] = !0))
      }
      static RemoveTagsFrom(UU, XU) {
        if (!yU.HasTags(UU)) return;
        const zU = XU.split(" ");
        for (const cU in zU) yU._RemoveTagFrom(UU, zU[cU])
      }
      static _RemoveTagFrom(UU, XU) {
        delete UU._tags[XU]
      }
      static MatchesQuery(UU, XU) {
        return void 0 === XU || ("" === XU ? yU.HasTags(UU) : cU.Eval(XU, (XU => yU.HasTags(UU) && UU._tags[XU])))
      }
    }
  },
  41244: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => QU
    });
    var cU = zU(41237),
      yU = zU(37846);
    class QU {
      constructor(UU) {
        this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new yU.e, this._scene = UU
      }
      _prepareBuffers() {
        if (this._vertexBuffers[cU.h.PositionKind]) return;
        const UU = [];
        UU.push(1, 1), UU.push(-1, 1), UU.push(-1, -1), UU.push(1, -1), this._vertexBuffers[cU.h.PositionKind] = new cU.h(this._scene.qp(), UU, cU.h.PositionKind, !1, !1, 2), this._buildIndexBuffer()
      }
      _buildIndexBuffer() {
        const UU = [];
        UU.push(0), UU.push(1), UU.push(2), UU.push(0), UU.push(2), UU.push(3), this._indexBuffer = this._scene.qp().createIndexBuffer(UU)
      }
      _getActivePostProcesses(UU) {
        const XU = this._activePostProcesses;
        XU.length = 0;
        for (let zU = 0; zU < UU.length; zU++) {
          const cU = UU[zU];
          cU && XU.push(cU)
        }
        return XU
      }
      _rebuild() {
        const UU = this._vertexBuffers[cU.h.PositionKind];
        UU && (UU._rebuild(), this._buildIndexBuffer())
      }
      _prepareFrame() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const zU = this._scene.activeCamera;
        return !!zU && (XU = XU || this._getActivePostProcesses(zU._postProcesses), !(!XU || 0 === XU.length || !this._scene.postProcessesEnabled) && (XU[0].activate(zU, UU, null !== XU && void 0 !== XU), !0))
      }
      directRender(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          QU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          AU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : UU.length;
        const FU = this._scene.qp();
        for (let oU = 0; oU < AU; oU++) {
          oU < UU.length - 1 ? UU[oU + 1].activate(this._scene.activeCamera || this._scene, XU?.texture) : (XU ? FU.bindFramebuffer(XU, cU, void 0, void 0, zU, yU) : QU || FU.restoreDefaultFramebuffer(), FU._debugInsertMarker?.(`post process ${UU[oU].name} output`));
          const AU = UU[oU],
            DU = AU.apply();
          DU && (AU.onBeforeRenderObservable.notifyObservers(DU), this._prepareBuffers(), FU.bindBuffers(this._vertexBuffers, this._indexBuffer, DU), FU.drawElementsType(0, 0, 6), AU.onAfterRenderObservable.notifyObservers(DU))
        }
        FU.setDepthBuffer(!0), FU.setDepthWrite(!0)
      }
      _finalizeFrame(UU, XU, zU, cU) {
        let yU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const QU = this._scene.activeCamera;
        if (!QU) return;
        if (this.onBeforeRenderObservable.notifyObservers(this), 0 === (cU = cU || this._getActivePostProcesses(QU._postProcesses)).length || !this._scene.postProcessesEnabled) return;
        const AU = this._scene.qp();
        for (let FU = 0, oU = cU.length; FU < oU; FU++) {
          const DU = cU[FU];
          if (FU < oU - 1 ? DU._outputTexture = cU[FU + 1].activate(QU, XU?.texture) : (XU ? (AU.bindFramebuffer(XU, zU, void 0, void 0, yU), DU._outputTexture = XU) : (AU.restoreDefaultFramebuffer(), DU._outputTexture = null), AU._debugInsertMarker?.(`post process ${cU[FU].name} output`)), UU) break;
          const EU = DU.apply();
          EU && (DU.onBeforeRenderObservable.notifyObservers(EU), this._prepareBuffers(), AU.bindBuffers(this._vertexBuffers, this._indexBuffer, EU), AU.drawElementsType(0, 0, 6), DU.onAfterRenderObservable.notifyObservers(EU))
        }
        AU.setDepthBuffer(!0), AU.setDepthWrite(!0), AU.setAlphaMode(0)
      }
      dispose() {
        const UU = this._vertexBuffers[cU.h.PositionKind];
        UU && (UU.dispose(), this._vertexBuffers[cU.h.PositionKind] = null), this._indexBuffer && (this._scene.qp()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
      }
    }
  },
  41258: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => DU
    });
    var cU = zU(41210),
      yU = zU(37819);
    const QU = [],
      AU = [];
    let FU = !1;

    function oU(UU, XU) {
      for (; UU.length < XU;) UU.push(void 0)
    }
    class DU {
      set opaqueSortCompareFn(UU) {
        this._opaqueSortCompareFn = UU || DU.PainterSortCompare, this._renderOpaque = this._renderOpaqueSorted
      }
      set alphaTestSortCompareFn(UU) {
        this._alphaTestSortCompareFn = UU || DU.PainterSortCompare, this._renderAlphaTest = this._renderAlphaTestSorted
      }
      set transparentSortCompareFn(UU) {
        this._transparentSortCompareFn = UU || DU.defaultTransparentSortCompare, this._renderTransparent = this._renderTransparentSorted
      }
      constructor(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          yU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          QU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        this.index = UU, this._opaqueSubMeshes = new cU.d(256), this._transparentSubMeshes = new cU.d(256), this._alphaTestSubMeshes = new cU.d(256), this._depthOnlySubMeshes = new cU.d(256), this._particleSystems = new cU.d(256), this._spriteManagers = new cU.d(256), this._empty = !0, this._edgesRenderers = new cU.c(16), this.disableDepthPrePass = !1, this._scene = XU, this.opaqueSortCompareFn = zU, this.alphaTestSortCompareFn = yU, this.transparentSortCompareFn = QU
      }
      render(UU, XU, zU, cU) {
        let yU = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          QU = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          AU = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          FU = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          oU = arguments.length > 8 ? arguments[8] : void 0;
        if (UU) return void UU(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
        const DU = this._scene.qp();
        yU && 0 !== this._depthOnlySubMeshes.length && (DU.setColorWrite(!1), this._renderAlphaTest(this._depthOnlySubMeshes), DU.setColorWrite(!0)), QU && 0 !== this._opaqueSubMeshes.length && this._renderOpaque(this._opaqueSubMeshes), AU && 0 !== this._alphaTestSubMeshes.length && this._renderAlphaTest(this._alphaTestSubMeshes);
        const EU = DU.getStencilBuffer();
        if (DU.setStencilBuffer(!1), XU && this._renderSprites(), zU && this._renderParticles(cU), this.onBeforeTransparentRendering && this.onBeforeTransparentRendering(), FU && (oU || 0 !== this._transparentSubMeshes.length || this._scene.useOrderIndependentTransparency)) {
          if (DU.setStencilBuffer(EU), oU) oU(this._transparentSubMeshes, this);
          else if (this._scene.useOrderIndependentTransparency) {
            const UU = this._scene.depthPeelingRenderer.render(this._transparentSubMeshes);
            UU.length && this._renderTransparent(UU)
          } else this._renderTransparent(this._transparentSubMeshes);
          DU.setAlphaMode(0)
        }
        if (DU.setStencilBuffer(!1), QU && this._edgesRenderers.length) {
          for (let UU = 0; UU < this._edgesRenderers.length; UU++) this._edgesRenderers.data[UU].render();
          DU.setAlphaMode(0)
        }
        DU.setStencilBuffer(EU)
      }
      _renderOpaqueSorted(UU) {
        DU._RenderSorted(UU, this._opaqueSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderAlphaTestSorted(UU) {
        DU._RenderSorted(UU, this._alphaTestSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderTransparentSorted(UU) {
        DU._RenderSorted(UU, this._transparentSortCompareFn, this._scene.activeCamera, !0, this.disableDepthPrePass)
      }
      static _RenderSorted(UU, XU, zU, cU, QU) {
        let EU, YU = 0;
        const NU = zU ? zU.globalPosition : DU._ZeroVector;
        if (cU && XU !== DU.PainterSortCompare)
          for (; YU < UU.length; YU++) EU = UU.data[YU], EU._alphaIndex = EU.getMesh().alphaIndex, EU._distanceToCamera = yU.q.Distance(EU.gM().dyU.centerWorld, NU);
        const IU = UU.length;
        let pU = UU.data;
        const aU = IU !== pU.length && !FU;
        if (aU) {
          for (FU = !0, oU(AU, IU), YU = 0; YU < IU; YU++) AU[YU] = pU[YU];
          pU = AU
        } else IU !== pU.length && (pU = pU.slice(0, IU));
        try {
          XU && DU._StableSort(pU, IU, XU), DU._DrawSorted(pU, IU, cU, QU)
        } finally {
          aU && (AU.fill(void 0, 0, IU), FU = !1)
        }
      }
      static _DrawSorted(UU, XU, zU, cU) {
        let yU;
        const QU = UU[0].getMesh().nS();
        for (let AU = 0; AU < XU; AU++) {
          if (yU = UU[AU], QU._activeMeshesFrozenButKeepClipping && !yU.isInFrustum(QU._frustumPlanes)) continue;
          let XU = !1;
          if (zU) {
            const UU = yU.Hp();
            if (UU && UU.needDepthPrePass && !cU) {
              XU = !0;
              const zU = UU.nS().qp();
              zU.setColorWrite(!1), zU.setAlphaMode(0), yU.render(!1), zU.setColorWrite(!0)
            }
          }
          const FU = yU._renderingMesh;
          !XU && FU._renderRunFollower(yU, zU) || yU.render(zU)
        }
      }
      static _StableSort(UU, XU, zU) {
        for (let cU = 0; cU < XU; cU += 16) {
          const yU = Math.min(cU + 16, XU);
          for (let XU = cU + 1; XU < yU; XU++) {
            const yU = UU[XU];
            let QU = cU,
              AU = XU;
            for (; QU < AU;) {
              const XU = QU + AU >>> 1;
              zU(yU, UU[XU]) < 0 ? AU = XU : QU = XU + 1
            }
            for (let zU = XU; zU > QU; zU--) UU[zU] = UU[zU - 1];
            UU[QU] = yU
          }
        }
        if (!(XU <= 16)) {
          oU(QU, XU);
          try {
            let cU = UU,
              yU = QU;
            for (let UU = 16; UU < XU; UU *= 2) {
              for (let AU = 0; AU < XU; AU += 2 * UU) {
                const QU = Math.min(AU + UU, XU),
                  FU = Math.min(AU + 2 * UU, XU);
                let oU = AU,
                  DU = QU,
                  EU = AU;
                if (QU < FU && zU(cU[QU], cU[QU - 1]) < 0)
                  for (; oU < QU && DU < FU;) yU[EU++] = zU(cU[DU], cU[oU]) < 0 ? cU[DU++] : cU[oU++];
                for (; oU < QU;) yU[EU++] = cU[oU++];
                for (; DU < FU;) yU[EU++] = cU[DU++]
              }
              const QU = yU;
              yU = cU, cU = QU
            }
            if (cU !== UU)
              for (let zU = 0; zU < XU; zU++) UU[zU] = cU[zU]
          } finally {
            QU.fill(void 0, 0, XU)
          }
        }
      }
      static defaultTransparentSortCompare(UU, XU) {
        return UU._alphaIndex > XU._alphaIndex ? 1 : UU._alphaIndex < XU._alphaIndex ? -1 : DU.backToFrontSortCompare(UU, XU)
      }
      static backToFrontSortCompare(UU, XU) {
        return UU._distanceToCamera < XU._distanceToCamera ? 1 : UU._distanceToCamera > XU._distanceToCamera ? -1 : 0
      }
      static frontToBackSortCompare(UU, XU) {
        return UU._distanceToCamera < XU._distanceToCamera ? -1 : UU._distanceToCamera > XU._distanceToCamera ? 1 : 0
      }
      static PainterSortCompare(UU, XU) {
        const zU = UU.getMesh(),
          cU = XU.getMesh();
        return zU.material && cU.material ? zU.material.uniqueId - cU.material.uniqueId : zU.uniqueId - cU.uniqueId
      }
      prepare() {
        this._opaqueSubMeshes.reset(), this._transparentSubMeshes.reset(), this._alphaTestSubMeshes.reset(), this._depthOnlySubMeshes.reset(), this._particleSystems.reset(), this.prepareSprites(), this._edgesRenderers.reset(), this._empty = !0
      }
      prepareSprites() {
        this._spriteManagers.reset()
      }
      dispose() {
        this._opaqueSubMeshes.dispose(), this._transparentSubMeshes.dispose(), this._alphaTestSubMeshes.dispose(), this._depthOnlySubMeshes.dispose(), this._particleSystems.dispose(), this._spriteManagers.dispose(), this._edgesRenderers.dispose()
      }
      dispatch(UU, XU, zU) {
        void 0 === XU && (XU = UU.getMesh()), void 0 === zU && (zU = UU.Hp()), null !== zU && void 0 !== zU && (zU.needAlphaBlendingForMesh(XU) ? this._transparentSubMeshes.push(UU) : zU.needAlphaTestingForMesh(XU) ? (zU.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(UU), this._alphaTestSubMeshes.push(UU)) : (zU.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(UU), this._opaqueSubMeshes.push(UU)), XU._renderingGroup = this, XU._edgesRenderer && XU.isEnabled() && XU.isVisible && XU._edgesRenderer.isEnabled && this._edgesRenderers.pushNoDuplicate(XU._edgesRenderer), this._empty = !1)
      }
      dispatchSprites(UU) {
        this._spriteManagers.push(UU), this._empty = !1
      }
      dispatchParticles(UU) {
        this._particleSystems.push(UU), this._empty = !1
      }
      _renderParticles(UU) {
        if (0 === this._particleSystems.length) return;
        const XU = this._scene.activeCamera;
        this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
        for (let zU = 0; zU < this._particleSystems.length; zU++) {
          const cU = this._particleSystems.data[zU];
          if (0 === (XU && XU.layerMask & cU.layerMask)) continue;
          const yU = cU.emitter;
          yU.position && UU && -1 === UU.indexOf(yU) || this._scene._activeParticles.addCount(cU.render(), !1)
        }
        this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
      }
      _renderSprites() {
        if (!this._scene.spritesEnabled || 0 === this._spriteManagers.length) return;
        const UU = this._scene.activeCamera;
        this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
        for (let XU = 0; XU < this._spriteManagers.length; XU++) {
          const zU = this._spriteManagers.data[XU];
          0 !== (UU && UU.layerMask & zU.layerMask) && zU.render()
        }
        this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene)
      }
    }
    DU._ZeroVector = yU.q.Zero()
  },
  41251: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => QU
    });
    var cU = zU(41258);
    class yU {}
    class QU {
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(UU) {
        this._disableDepthPrePass = UU;
        for (const XU of this._renderingGroups) XU.disableDepthPrePass = UU
      }
      get maintainStateBetweenFrames() {
        return this._maintainStateBetweenFrames
      }
      set maintainStateBetweenFrames(UU) {
        UU !== this._maintainStateBetweenFrames && (this._maintainStateBetweenFrames = UU, this._maintainStateBetweenFrames || this.restoreDispachedFlags())
      }
      restoreDispachedFlags() {
        for (const UU of this._scene.meshes)
          if (UU.uB)
            for (const XU of UU.uB) XU._wasDispatched = !1;
        if (this._scene.spriteManagers)
          for (const UU of this._scene.spriteManagers) UU._wasDispatched = !1;
        for (const UU of this._scene.nB) UU._wasDispatched = !1
      }
      constructor(UU) {
        this._useSceneAutoClearSetup = !1, this._disableDepthPrePass = !1, this._renderingGroups = new Array, this._autoClearDepthStencil = {}, this._customOpaqueSortCompareFn = {}, this._customAlphaTestSortCompareFn = {}, this._customTransparentSortCompareFn = {}, this._renderingGroupInfo = new yU, this._maintainStateBetweenFrames = !1, this._scene = UU;
        for (let XU = QU.MIN_RENDERINGGROUPS; XU < QU.MAX_RENDERINGGROUPS; XU++) this._autoClearDepthStencil[XU] = {
          autoClear: !0,
          depth: !0,
          stencil: !0
        }
      }
      get renderingGroups() {
        return this._renderingGroups
      }
      getRenderingGroup(UU) {
        const XU = UU || 0;
        return this._prepareRenderingGroup(XU), this._renderingGroups[XU]
      }
      _clearDepthStencilBuffer() {
        let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._depthStencilBufferAlreadyCleaned || (this._scene.qp().clear(null, !1, UU, XU), this._depthStencilBufferAlreadyCleaned = !0)
      }
      render(UU, XU, zU, cU) {
        let yU = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          AU = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          FU = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          oU = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          DU = arguments.length > 8 ? arguments[8] : void 0,
          EU = arguments.length > 9 ? arguments[9] : void 0;
        const YU = this._renderingGroupInfo;
        YU.sa = this._scene, YU.camera = this._scene.activeCamera, YU.renderingManager = this;
        const NU = EU ?? this._scene.spriteManagers;
        if (NU && cU)
          for (let QU = 0; QU < NU.length; QU++) {
            const UU = NU[QU];
            this.dispatchSprites(UU)
          }
        for (let IU = QU.MIN_RENDERINGGROUPS; IU < QU.MAX_RENDERINGGROUPS; IU++) {
          this._depthStencilBufferAlreadyCleaned = IU === QU.MIN_RENDERINGGROUPS;
          const EU = this._renderingGroups[IU];
          if (!EU || EU._empty) continue;
          const NU = 1 << IU;
          if (YU.renderingGroupId = IU, this._scene.onBeforeRenderingGroupObservable.notifyObservers(YU, NU), QU.AUTOCLEAR) {
            const UU = this._useSceneAutoClearSetup ? this._scene.getAutoClearDepthStencilSetup(IU) : this._autoClearDepthStencil[IU];
            UU && UU.autoClear && this._clearDepthStencilBuffer(UU.depth, UU.stencil)
          }
          for (let UU = 0, XU = this._scene._beforeRenderingGroupDrawStage; UU < XU.length; UU++) {
            XU[UU].action(IU)
          }
          EU.render(UU, cU, zU, XU, yU, AU, FU, oU, DU);
          for (let UU = 0, XU = this._scene._afterRenderingGroupDrawStage; UU < XU.length; UU++) {
            XU[UU].action(IU)
          }
          this._scene.onAfterRenderingGroupObservable.notifyObservers(YU, NU)
        }
      }
      reset() {
        if (!this.maintainStateBetweenFrames)
          for (let UU = QU.MIN_RENDERINGGROUPS; UU < QU.MAX_RENDERINGGROUPS; UU++) {
            const XU = this._renderingGroups[UU];
            XU && XU.prepare()
          }
      }
      resetSprites() {
        if (!this.maintainStateBetweenFrames)
          for (let UU = QU.MIN_RENDERINGGROUPS; UU < QU.MAX_RENDERINGGROUPS; UU++) {
            const XU = this._renderingGroups[UU];
            XU && XU.prepareSprites()
          }
      }
      dispose() {
        this.freeRenderingGroups(), this._renderingGroups.length = 0, this._renderingGroupInfo = null
      }
      freeRenderingGroups() {
        for (let UU = QU.MIN_RENDERINGGROUPS; UU < QU.MAX_RENDERINGGROUPS; UU++) {
          const XU = this._renderingGroups[UU];
          XU && XU.dispose()
        }
      }
      _prepareRenderingGroup(UU) {
        void 0 === this._renderingGroups[UU] && (this._renderingGroups[UU] = new cU.c(UU, this._scene, this._customOpaqueSortCompareFn[UU], this._customAlphaTestSortCompareFn[UU], this._customTransparentSortCompareFn[UU]), this._renderingGroups[UU].disableDepthPrePass = this._disableDepthPrePass)
      }
      dispatchSprites(UU) {
        this.maintainStateBetweenFrames && UU._wasDispatched || (UU._wasDispatched = !0, this.getRenderingGroup(UU.renderingGroupId).dispatchSprites(UU))
      }
      dispatchParticles(UU) {
        this.maintainStateBetweenFrames && UU._wasDispatched || (UU._wasDispatched = !0, this.getRenderingGroup(UU.renderingGroupId).dispatchParticles(UU))
      }
      dispatch(UU, XU, zU) {
        void 0 === XU && (XU = UU.getMesh()), this.maintainStateBetweenFrames && UU._wasDispatched || (UU._wasDispatched = !0, this.getRenderingGroup(XU.renderingGroupId).dispatch(UU, XU, zU))
      }
      setRenderingOrder(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (this._customOpaqueSortCompareFn[UU] = XU, this._customAlphaTestSortCompareFn[UU] = zU, this._customTransparentSortCompareFn[UU] = cU, this._renderingGroups[UU]) {
          const XU = this._renderingGroups[UU];
          XU.opaqueSortCompareFn = this._customOpaqueSortCompareFn[UU], XU.alphaTestSortCompareFn = this._customAlphaTestSortCompareFn[UU], XU.transparentSortCompareFn = this._customTransparentSortCompareFn[UU]
        }
      }
      setRenderingAutoClearDepthStencil(UU, XU) {
        let zU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          cU = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._autoClearDepthStencil[UU] = {
          autoClear: XU,
          depth: zU,
          stencil: cU
        }
      }
      getAutoClearDepthStencilSetup(UU) {
        return this._autoClearDepthStencil[UU]
      }
    }
    QU.MAX_RENDERINGGROUPS = 4, QU.MIN_RENDERINGGROUPS = 0, QU.AUTOCLEAR = !0
  },
  41012: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => cU
    });
    class cU {
      constructor(UU) {
        this._supportBlendParametersPerTarget = UU, this._blendFunctionParameters = new Array(32), this._blendEquationParameters = new Array(16), this._blendConstants = new Array(4), this._isBlendConstantsDirty = !1, this._alphaBlend = Array(8).fill(!1), this._numTargetEnabled = 0, this._isAlphaBlendDirty = !1, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1, this.reset()
      }
      get isDirty() {
        return this._isAlphaBlendDirty || this._isBlendFunctionParametersDirty || this._isBlendEquationParametersDirty
      }
      get alphaBlend() {
        return this._numTargetEnabled > 0
      }
      set alphaBlend(UU) {
        this.setAlphaBlend(UU)
      }
      setAlphaBlend(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._alphaBlend[XU] !== UU && (UU ? this._numTargetEnabled++ : this._numTargetEnabled--, this._alphaBlend[XU] = UU, this._isAlphaBlendDirty = !0)
      }
      setAlphaBlendConstants(UU, XU, zU, cU) {
        this._blendConstants[0] === UU && this._blendConstants[1] === XU && this._blendConstants[2] === zU && this._blendConstants[3] === cU || (this._blendConstants[0] = UU, this._blendConstants[1] = XU, this._blendConstants[2] = zU, this._blendConstants[3] = cU, this._isBlendConstantsDirty = !0)
      }
      setAlphaBlendFunctionParameters(UU, XU, zU, cU) {
        const yU = 4 * (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0);
        this._blendFunctionParameters[yU + 0] === UU && this._blendFunctionParameters[yU + 1] === XU && this._blendFunctionParameters[yU + 2] === zU && this._blendFunctionParameters[yU + 3] === cU || (this._blendFunctionParameters[yU + 0] = UU, this._blendFunctionParameters[yU + 1] = XU, this._blendFunctionParameters[yU + 2] = zU, this._blendFunctionParameters[yU + 3] = cU, this._isBlendFunctionParametersDirty = !0)
      }
      setAlphaEquationParameters(UU, XU) {
        const zU = 2 * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0);
        this._blendEquationParameters[zU + 0] === UU && this._blendEquationParameters[zU + 1] === XU || (this._blendEquationParameters[zU + 0] = UU, this._blendEquationParameters[zU + 1] = XU, this._isBlendEquationParametersDirty = !0)
      }
      reset() {
        this._alphaBlend.fill(!1), this._numTargetEnabled = 0, this._blendFunctionParameters.fill(null), this._blendEquationParameters.fill(null), this._blendConstants[0] = null, this._blendConstants[1] = null, this._blendConstants[2] = null, this._blendConstants[3] = null, this._isAlphaBlendDirty = !0, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._isBlendConstantsDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1
      }
      apply(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._numTargets !== XU && (this._numTargets = XU, this._isAlphaBlendDirty = !0), this._blendDisabledTargetsMask !== zU && (this._blendDisabledTargetsMask = zU, this._isAlphaBlendDirty = !0), !this.isDirty) return;
        if (this._isBlendConstantsDirty && (UU.blendColor(this._blendConstants[0], this._blendConstants[1], this._blendConstants[2], this._blendConstants[3]), this._isBlendConstantsDirty = !1), 1 === XU || !this._supportBlendParametersPerTarget) {
          if (this._isAlphaBlendDirty) {
            if (XU > 1 && 0 !== zU && this.alphaBlend) throw new Error("AlphaState: blending with integer MRT attachments requires per-target blend parameters");
            this._alphaBlend[0] && 0 === (1 & zU) ? UU.enable(UU.BLEND) : UU.disable(UU.BLEND), this._isAlphaBlendDirty = !1
          }
          return this._isBlendFunctionParametersDirty && (UU.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]), this._isBlendFunctionParametersDirty = !1), void(this._isBlendEquationParametersDirty && (UU.blendEquationSeparate(this._blendEquationParameters[0], this._blendEquationParameters[1]), this._isBlendEquationParametersDirty = !1))
        }
        const cU = UU;
        if (this._isAlphaBlendDirty) {
          for (let yU = 0; yU < XU; yU++) {
            const XU = yU < this._numTargetEnabled ? yU : 0;
            this._alphaBlend[XU] && 0 === (zU & 1 << yU) ? cU.enableIndexed(UU.BLEND, yU) : cU.disableIndexed(UU.BLEND, yU)
          }
          this._isAlphaBlendDirty = !1
        }
        if (this._isBlendFunctionParametersDirty) {
          for (let UU = 0; UU < XU; UU++) {
            const XU = UU < this._numTargetEnabled ? 4 * UU : 0;
            cU.blendFuncSeparateIndexed(UU, this._blendFunctionParameters[XU + 0], this._blendFunctionParameters[XU + 1], this._blendFunctionParameters[XU + 2], this._blendFunctionParameters[XU + 3])
          }
          this._isBlendFunctionParametersDirty = !1
        }
        if (this._isBlendEquationParametersDirty) {
          for (let UU = 0; UU < XU; UU++) {
            const XU = UU < this._numTargetEnabled ? 2 * UU : 0;
            cU.blendEquationSeparateIndexed(UU, this._blendEquationParameters[XU + 0], this._blendEquationParameters[XU + 1])
          }
          this._isBlendEquationParametersDirty = !1
        }
      }
      setAlphaMode(UU, XU) {
        let zU = 32774;
        switch (UU) {
          case 0:
            break;
          case 7:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 1, XU);
            break;
          case 8:
          case 14:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 771, XU);
            break;
          case 2:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 1, XU);
            break;
          case 6:
            this.setAlphaBlendFunctionParameters(1, 1, 0, 1, XU);
            break;
          case 1:
            this.setAlphaBlendFunctionParameters(770, 1, 0, 1, XU);
            break;
          case 3:
            this.setAlphaBlendFunctionParameters(0, 769, 1, 1, XU);
            break;
          case 4:
            this.setAlphaBlendFunctionParameters(774, 0, 1, 1, XU);
            break;
          case 5:
            this.setAlphaBlendFunctionParameters(770, 769, 1, 1, XU);
            break;
          case 9:
            this.setAlphaBlendFunctionParameters(32769, 32770, 32771, 32772, XU);
            break;
          case 10:
            this.setAlphaBlendFunctionParameters(1, 769, 1, 771, XU);
            break;
          case 11:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, XU);
            break;
          case 12:
            this.setAlphaBlendFunctionParameters(772, 1, 0, 0, XU);
            break;
          case 13:
            this.setAlphaBlendFunctionParameters(775, 769, 773, 771, XU);
            break;
          case 15:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 0, XU);
            break;
          case 16:
            this.setAlphaBlendFunctionParameters(775, 769, 0, 1, XU);
            break;
          case 17:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 771, XU);
            break;
          case 18:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, XU), zU = 32775;
            break;
          case 19:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, XU), zU = 32776;
            break;
          case 20:
            this.setAlphaBlendFunctionParameters(1, 35065, 0, 1, XU);
            break;
          case 21:
            this.setAlphaBlendFunctionParameters(1, 0, 1, 771, XU)
        }
        this.setAlphaEquationParameters(zU, zU, XU)
      }
    }
  },
  41289: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => cU
    });
    class cU {}
    cU._IsPickingAvailable = !1
  },
  41202: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => Fz,
      d: () => Qz
    });
    var cU = zU(41205),
      yU = zU(40999),
      QU = zU(41010),
      AU = zU(37846),
      FU = zU(41210);
    class oU {
      constructor() {
        this._count = 0, this._data = {}
      }
      YL(UU) {
        this.clear(), UU.forEach(((UU, XU) => this.add(UU, XU)))
      }
      get(UU) {
        const XU = this._data[UU];
        if (void 0 !== XU) return XU
      }
      getOrAddWithFactory(UU, XU) {
        let zU = this.get(UU);
        return void 0 !== zU || (zU = XU(UU), zU && this.add(UU, zU)), zU
      }
      getOrAdd(UU, XU) {
        const zU = this.get(UU);
        return void 0 !== zU ? zU : (this.add(UU, XU), XU)
      }
      contains(UU) {
        return void 0 !== this._data[UU]
      }
      add(UU, XU) {
        return void 0 === this._data[UU] && (this._data[UU] = XU, ++this._count, !0)
      }
      set(UU, XU) {
        return void 0 !== this._data[UU] && (this._data[UU] = XU, !0)
      }
      getAndRemove(UU) {
        const XU = this.get(UU);
        return void 0 !== XU ? (delete this._data[UU], --this._count, XU) : null
      }
      remove(UU) {
        return !!this.contains(UU) && (delete this._data[UU], --this._count, !0)
      }
      clear() {
        this._data = {}, this._count = 0
      }
      get count() {
        return this._count
      }
      forEach(UU) {
        for (const XU in this._data) {
          UU(XU, this._data[XU])
        }
      }
      first(UU) {
        for (const XU in this._data) {
          const zU = UU(XU, this._data[XU]);
          if (zU) return zU
        }
        return null
      }
    }
    var DU = zU(41138),
      EU = zU(37819),
      YU = zU(41214),
      NU = zU(41228),
      IU = zU(41235);
    class pU {
      constructor(UU, XU, zU, cU, yU, QU) {
        this.source = UU, this.pointerX = XU, this.pointerY = zU, this.meshUnderPointer = cU, this.sourceEvent = yU, this.additionalData = QU
      }
      static CreateNew(UU, XU, zU) {
        const cU = UU.nS();
        return new pU(UU, cU.pointerX, cU.pointerY, cU.meshUnderPointer || UU, XU, zU)
      }
      static CreateNewFromSprite(UU, XU, zU, cU) {
        return new pU(UU, XU.pointerX, XU.pointerY, XU.meshUnderPointer, zU, cU)
      }
      static CreateNewFromScene(UU, XU) {
        return new pU(null, UU.pointerX, UU.pointerY, UU.meshUnderPointer, XU)
      }
      static CreateNewFromPrimitive(UU, XU, zU, cU) {
        return new pU(UU, XU.x, XU.y, null, zU, cU)
      }
    }
    var aU = zU(41244),
      tU = zU(41246),
      gU = zU(41251),
      kU = zU(41265),
      GU = zU(40971),
      BU = zU(37841),
      ZU = zU(40989),
      RU = zU(41271);
    class PU {
      constructor() {
        this.hoverCursor = "", this.actions = [], this.isRecursive = !1, this.disposeWhenUnowned = !0
      }
      static get HasTriggers() {
        for (const UU in PU.Triggers)
          if (Object.prototype.hasOwnProperty.call(PU.Triggers, UU)) return !0;
        return !1
      }
      static get HasPickTriggers() {
        for (const UU in PU.Triggers)
          if (Object.prototype.hasOwnProperty.call(PU.Triggers, UU)) {
            const XU = parseInt(UU);
            if (XU >= 1 && XU <= 7) return !0
          } return !1
      }
      static HasSpecificTrigger(UU) {
        for (const XU in PU.Triggers)
          if (Object.prototype.hasOwnProperty.call(PU.Triggers, XU)) {
            if (parseInt(XU) === UU) return !0
          } return !1
      }
    }
    PU.Triggers = {};
    var WU, dU, LU, eU, CU, wU, qU, OU = zU(41278);
    ! function(UU) {
      UU[UU.Generic = 0] = "Generic", UU[UU.Keyboard = 1] = "Keyboard", UU[UU.Mouse = 2] = "Mouse", UU[UU.Touch = 3] = "Touch", UU[UU.DualShock = 4] = "DualShock", UU[UU.Xbox = 5] = "Xbox", UU[UU.Switch = 6] = "Switch", UU[UU.DualSense = 7] = "DualSense"
    }(WU || (WU = {})),
    function(UU) {
      UU[UU.Horizontal = 0] = "Horizontal", UU[UU.Vertical = 1] = "Vertical", UU[UU.LeftClick = 2] = "LeftClick", UU[UU.MiddleClick = 3] = "MiddleClick", UU[UU.RightClick = 4] = "RightClick", UU[UU.BrowserBack = 5] = "BrowserBack", UU[UU.BrowserForward = 6] = "BrowserForward", UU[UU.MouseWheelX = 7] = "MouseWheelX", UU[UU.MouseWheelY = 8] = "MouseWheelY", UU[UU.MouseWheelZ = 9] = "MouseWheelZ", UU[UU.Move = 12] = "Move"
    }(dU || (dU = {})),
    function(UU) {
      UU[UU.Horizontal = 0] = "Horizontal", UU[UU.Vertical = 1] = "Vertical", UU[UU.LeftClick = 2] = "LeftClick", UU[UU.MiddleClick = 3] = "MiddleClick", UU[UU.RightClick = 4] = "RightClick", UU[UU.BrowserBack = 5] = "BrowserBack", UU[UU.BrowserForward = 6] = "BrowserForward", UU[UU.MouseWheelX = 7] = "MouseWheelX", UU[UU.MouseWheelY = 8] = "MouseWheelY", UU[UU.MouseWheelZ = 9] = "MouseWheelZ", UU[UU.DeltaHorizontal = 10] = "DeltaHorizontal", UU[UU.DeltaVertical = 11] = "DeltaVertical"
    }(LU || (LU = {})),
    function(UU) {
      UU[UU.Cross = 0] = "Cross", UU[UU.Circle = 1] = "Circle", UU[UU.Square = 2] = "Square", UU[UU.Triangle = 3] = "Triangle", UU[UU.L1 = 4] = "L1", UU[UU.R1 = 5] = "R1", UU[UU.L2 = 6] = "L2", UU[UU.R2 = 7] = "R2", UU[UU.Share = 8] = "Share", UU[UU.Options = 9] = "Options", UU[UU.L3 = 10] = "L3", UU[UU.R3 = 11] = "R3", UU[UU.DPadUp = 12] = "DPadUp", UU[UU.DPadDown = 13] = "DPadDown", UU[UU.DPadLeft = 14] = "DPadLeft", UU[UU.DPadRight = 15] = "DPadRight", UU[UU.Home = 16] = "Home", UU[UU.TouchPad = 17] = "TouchPad", UU[UU.LStickXAxis = 18] = "LStickXAxis", UU[UU.LStickYAxis = 19] = "LStickYAxis", UU[UU.RStickXAxis = 20] = "RStickXAxis", UU[UU.RStickYAxis = 21] = "RStickYAxis"
    }(eU || (eU = {})),
    function(UU) {
      UU[UU.Cross = 0] = "Cross", UU[UU.Circle = 1] = "Circle", UU[UU.Square = 2] = "Square", UU[UU.Triangle = 3] = "Triangle", UU[UU.L1 = 4] = "L1", UU[UU.R1 = 5] = "R1", UU[UU.L2 = 6] = "L2", UU[UU.R2 = 7] = "R2", UU[UU.Create = 8] = "Create", UU[UU.Options = 9] = "Options", UU[UU.L3 = 10] = "L3", UU[UU.R3 = 11] = "R3", UU[UU.DPadUp = 12] = "DPadUp", UU[UU.DPadDown = 13] = "DPadDown", UU[UU.DPadLeft = 14] = "DPadLeft", UU[UU.DPadRight = 15] = "DPadRight", UU[UU.Home = 16] = "Home", UU[UU.TouchPad = 17] = "TouchPad", UU[UU.LStickXAxis = 18] = "LStickXAxis", UU[UU.LStickYAxis = 19] = "LStickYAxis", UU[UU.RStickXAxis = 20] = "RStickXAxis", UU[UU.RStickYAxis = 21] = "RStickYAxis"
    }(CU || (CU = {})),
    function(UU) {
      UU[UU.A = 0] = "A", UU[UU.B = 1] = "B", UU[UU.X = 2] = "X", UU[UU.Y = 3] = "Y", UU[UU.LB = 4] = "LB", UU[UU.RB = 5] = "RB", UU[UU.LT = 6] = "LT", UU[UU.RT = 7] = "RT", UU[UU.Back = 8] = "Back", UU[UU.Start = 9] = "Start", UU[UU.LS = 10] = "LS", UU[UU.RS = 11] = "RS", UU[UU.DPadUp = 12] = "DPadUp", UU[UU.DPadDown = 13] = "DPadDown", UU[UU.DPadLeft = 14] = "DPadLeft", UU[UU.DPadRight = 15] = "DPadRight", UU[UU.Home = 16] = "Home", UU[UU.LStickXAxis = 17] = "LStickXAxis", UU[UU.LStickYAxis = 18] = "LStickYAxis", UU[UU.RStickXAxis = 19] = "RStickXAxis", UU[UU.RStickYAxis = 20] = "RStickYAxis"
    }(wU || (wU = {})),
    function(UU) {
      UU[UU.B = 0] = "B", UU[UU.A = 1] = "A", UU[UU.Y = 2] = "Y", UU[UU.X = 3] = "X", UU[UU.L = 4] = "L", UU[UU.R = 5] = "R", UU[UU.ZL = 6] = "ZL", UU[UU.ZR = 7] = "ZR", UU[UU.Minus = 8] = "Minus", UU[UU.Plus = 9] = "Plus", UU[UU.LS = 10] = "LS", UU[UU.RS = 11] = "RS", UU[UU.DPadUp = 12] = "DPadUp", UU[UU.DPadDown = 13] = "DPadDown", UU[UU.DPadLeft = 14] = "DPadLeft", UU[UU.DPadRight = 15] = "DPadRight", UU[UU.Home = 16] = "Home", UU[UU.Capture = 17] = "Capture", UU[UU.LStickXAxis = 18] = "LStickXAxis", UU[UU.LStickYAxis = 19] = "LStickYAxis", UU[UU.RStickXAxis = 20] = "RStickXAxis", UU[UU.RStickYAxis = 21] = "RStickYAxis"
    }(qU || (qU = {}));
    var SU = zU(41283);
    class rU {
      static CreateDeviceEvent(UU, XU, zU, cU, yU, QU, AU) {
        switch (UU) {
          case WU.Keyboard:
            return this._CreateKeyboardEvent(zU, cU, yU, QU);
          case WU.Mouse:
            if (zU === dU.MouseWheelX || zU === dU.MouseWheelY || zU === dU.MouseWheelZ) return this._CreateWheelEvent(UU, XU, zU, cU, yU, QU);
          case WU.Touch:
            return this._CreatePointerEvent(UU, XU, zU, cU, yU, QU, AU);
          default:
            throw `Unable to generate event for device ${WU[UU]}`
        }
      }
      static _CreatePointerEvent(UU, XU, zU, cU, yU, QU, AU) {
        const FU = this._CreateMouseEvent(UU, XU, zU, cU, yU, QU);
        UU === WU.Mouse ? (FU.deviceType = WU.Mouse, FU.pointerId = 1, FU.pointerType = "mouse") : (FU.deviceType = WU.Touch, FU.pointerId = AU ?? XU, FU.pointerType = "touch");
        let oU = 0;
        return oU += yU.pollInput(UU, XU, dU.LeftClick), oU += 2 * yU.pollInput(UU, XU, dU.RightClick), oU += 4 * yU.pollInput(UU, XU, dU.MiddleClick), FU.buttons = oU, zU === dU.Move ? FU.type = "pointermove" : zU >= dU.LeftClick && zU <= dU.RightClick && (FU.type = 1 === cU ? "pointerdown" : "pointerup", FU.button = zU - 2), FU
      }
      static _CreateWheelEvent(UU, XU, zU, cU, yU, QU) {
        const AU = this._CreateMouseEvent(UU, XU, zU, cU, yU, QU);
        switch (AU.pointerId = 1, AU.type = "wheel", AU.deltaMode = SU.b.DOM_DELTA_PIXEL, AU.deltaX = 0, AU.deltaY = 0, AU.deltaZ = 0, zU) {
          case dU.MouseWheelX:
            AU.deltaX = cU;
            break;
          case dU.MouseWheelY:
            AU.deltaY = cU;
            break;
          case dU.MouseWheelZ:
            AU.deltaZ = cU
        }
        return AU
      }
      static _CreateMouseEvent(UU, XU, zU, cU, yU, QU) {
        const AU = this._CreateEvent(QU),
          FU = yU.pollInput(UU, XU, dU.Horizontal),
          oU = yU.pollInput(UU, XU, dU.Vertical);
        return QU ? (AU.movementX = 0, AU.movementY = 0, AU.offsetX = AU.movementX - QU.getBoundingClientRect().x, AU.offsetY = AU.movementY - QU.getBoundingClientRect().y) : (AU.movementX = yU.pollInput(UU, XU, 10), AU.movementY = yU.pollInput(UU, XU, 11), AU.offsetX = 0, AU.offsetY = 0), this._CheckNonCharacterKeys(AU, yU), AU.clientX = FU, AU.clientY = oU, AU.x = FU, AU.y = oU, AU.deviceType = UU, AU.deviceSlot = XU, AU.inputIndex = zU, AU
      }
      static _CreateKeyboardEvent(UU, XU, zU, cU) {
        const yU = this._CreateEvent(cU);
        return this._CheckNonCharacterKeys(yU, zU), yU.deviceType = WU.Keyboard, yU.deviceSlot = 0, yU.inputIndex = UU, yU.type = 1 === XU ? "keydown" : "keyup", yU.key = String.fromCharCode(UU), yU.keyCode = UU, yU
      }
      static _CheckNonCharacterKeys(UU, XU) {
        const zU = XU.isDeviceAvailable(WU.Keyboard),
          cU = zU && 1 === XU.pollInput(WU.Keyboard, 0, 18),
          yU = zU && 1 === XU.pollInput(WU.Keyboard, 0, 17),
          QU = zU && (1 === XU.pollInput(WU.Keyboard, 0, 91) || 1 === XU.pollInput(WU.Keyboard, 0, 92) || 1 === XU.pollInput(WU.Keyboard, 0, 93)),
          AU = zU && 1 === XU.pollInput(WU.Keyboard, 0, 16);
        UU.altKey = cU, UU.ctrlKey = yU, UU.metaKey = QU, UU.shiftKey = AU
      }
      static _CreateEvent(UU) {
        const XU = {
          preventDefault: () => {}
        };
        return XU.target = UU, XU
      }
    }
    class uU {
      constructor(UU, XU, zU) {
        this._nativeInput = _native.DeviceInputSystem ? new _native.DeviceInputSystem(UU, XU, ((UU, XU, cU, yU) => {
          const QU = rU.CreateDeviceEvent(UU, XU, cU, yU, this);
          zU(UU, XU, QU)
        })) : this._createDummyNativeInput()
      }
      pollInput(UU, XU, zU) {
        return this._nativeInput.pollInput(UU, XU, zU)
      }
      isDeviceAvailable(UU) {
        return UU === WU.Mouse || UU === WU.Touch
      }
      dispose() {
        this._nativeInput.dispose()
      }
      _createDummyNativeInput() {
        return {
          pollInput: () => 0,
          isDeviceAvailable: () => !1,
          dispose: () => {}
        }
      }
    }
    const fU = Object.keys(dU).length / 2;
    class iU {
      constructor(UU, XU, zU, yU) {
        this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = cU.j.IsSafari(), this._usingMacOs = (0, GU.e)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = UU => {}, this._keyboardUpEvent = UU => {}, this._keyboardBlurEvent = UU => {}, this._pointerMoveEvent = UU => {}, this._pointerDownEvent = UU => {}, this._pointerUpEvent = UU => {}, this._pointerCancelEvent = UU => {}, this._pointerCancelTouch = UU => {}, this._pointerLeaveEvent = UU => {}, this._pointerWheelEvent = UU => {}, this._pointerBlurEvent = UU => {}, this._pointerMacOsChromeOutEvent = UU => {}, this._eventsAttached = !1, this._mouseId = -1, this._isUsingFirefox = (0, GU.e)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Firefox"), this._isUsingChromium = (0, GU.e)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Chrome"), this._maxTouchPoints = 0, this._pointerInputClearObserver = null, this._gamepadConnectedEvent = UU => {}, this._gamepadDisconnectedEvent = UU => {}, this._eventPrefix = cU.j.GetPointerPrefix(UU), this._engine = UU, this._onDeviceConnected = XU, this._onDeviceDisconnected = zU, this._onInputChanged = yU, this._mouseId = this._isUsingFirefox ? 0 : 1, this._enableEvents(), this._usingMacOs && (this._metaKeys = []), this._engine._onEngineViewChanged || (this._engine._onEngineViewChanged = () => {
          this._enableEvents()
        })
      }
      pollInput(UU, XU, zU) {
        const yU = this._inputs[UU][XU];
        if (!yU) throw `Unable to find device ${WU[UU]}`;
        UU >= WU.DualShock && UU <= WU.DualSense && this._updateDevice(UU, XU, zU);
        const QU = yU[zU];
        if (void 0 === QU) throw `Unable to find input ${zU} for device ${WU[UU]} in slot ${XU}`;
        return zU === dU.Move && cU.j.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), QU
      }
      isDeviceAvailable(UU) {
        return void 0 !== this._inputs[UU]
      }
      dispose() {
        this._onDeviceConnected = () => {}, this._onDeviceDisconnected = () => {}, this._onInputChanged = () => {}, delete this._engine._onEngineViewChanged, this._elementToAttachTo && this._disableEvents()
      }
      _enableEvents() {
        const UU = this?._engine.getInputElement();
        if (UU && (!this._eventsAttached || this._elementToAttachTo !== UU)) {
          if (this._disableEvents(), this._inputs)
            for (const UU of this._inputs)
              if (UU)
                for (const XU in UU) {
                  const zU = UU[+XU];
                  if (zU)
                    for (let UU = 0; UU < zU.length; UU++) zU[UU] = 0
                }
          this._elementToAttachTo = UU, this._elementToAttachTo.tabIndex = -1 !== this._elementToAttachTo.tabIndex ? this._elementToAttachTo.tabIndex : this._engine.canvasTabIndex, this._handleKeyActions(), this._handlePointerActions(), this._handleGamepadActions(), this._eventsAttached = !0, this._checkForConnectedDevices()
        }
      }
      _disableEvents() {
        this._elementToAttachTo && (this._elementToAttachTo.removeEventListener("blur", this._keyboardBlurEvent), this._elementToAttachTo.removeEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.removeEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.removeEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.removeEventListener(this._wheelEventName, this._pointerWheelEvent), this._usingMacOs && this._isUsingChromium && this._elementToAttachTo.removeEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent), window.removeEventListener("gamepadconnected", this._gamepadConnectedEvent), window.removeEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)), this._pointerInputClearObserver && this._engine.onEndFrameObservable.remove(this._pointerInputClearObserver), this._eventsAttached = !1
      }
      _checkForConnectedDevices() {
        if (navigator.getGamepads) {
          const UU = navigator.getGamepads();
          for (const XU of UU) XU && this._addGamePad(XU)
        }
        "function" === typeof matchMedia && matchMedia("(pointer:fine)").matches && this._addPointerDevice(WU.Mouse, 0, 0, 0)
      }
      _addGamePad(UU) {
        const XU = this._getGamepadDeviceType(UU.id),
          zU = UU.index;
        this._gamepads = this._gamepads || new Array(UU.index + 1), this._registerDevice(XU, zU, UU.buttons.length + UU.axes.length), this._gamepads[zU] = XU
      }
      _addPointerDevice(UU, XU, zU, cU) {
        this._pointerActive || (this._pointerActive = !0), this._registerDevice(UU, XU, fU);
        const yU = this._inputs[UU][XU];
        yU[0] = zU, yU[1] = cU
      }
      _registerDevice(UU, XU, zU) {
        if (void 0 === XU) throw `Unable to register device ${WU[UU]} to undefined slot.`;
        if (this._inputs[UU] || (this._inputs[UU] = {}), !this._inputs[UU][XU]) {
          const cU = new Array(zU);
          cU.fill(0), this._inputs[UU][XU] = cU, this._onDeviceConnected(UU, XU)
        }
      }
      _unregisterDevice(UU, XU) {
        this._inputs[UU][XU] && (delete this._inputs[UU][XU], this._onDeviceDisconnected(UU, XU))
      }
      _handleKeyActions() {
        this._keyboardDownEvent = UU => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(WU.Keyboard, 0, 255));
          const XU = this._inputs[WU.Keyboard][0];
          if (XU) {
            XU[UU.keyCode] = 1;
            const zU = UU;
            zU.inputIndex = UU.keyCode, this._usingMacOs && UU.metaKey && "Meta" !== UU.key && (this._metaKeys.includes(UU.keyCode) || this._metaKeys.push(UU.keyCode)), this._onInputChanged(WU.Keyboard, 0, zU)
          }
        }, this._keyboardUpEvent = UU => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(WU.Keyboard, 0, 255));
          const XU = this._inputs[WU.Keyboard][0];
          if (XU) {
            XU[UU.keyCode] = 0;
            const zU = UU;
            if (zU.inputIndex = UU.keyCode, this._usingMacOs && "Meta" === UU.key && this._metaKeys.length > 0) {
              for (const UU of this._metaKeys) {
                const zU = rU.CreateDeviceEvent(WU.Keyboard, 0, UU, 0, this, this._elementToAttachTo);
                XU[UU] = 0, this._onInputChanged(WU.Keyboard, 0, zU)
              }
              this._metaKeys.splice(0, this._metaKeys.length)
            }
            this._onInputChanged(WU.Keyboard, 0, zU)
          }
        }, this._keyboardBlurEvent = () => {
          if (this._keyboardActive) {
            const UU = this._inputs[WU.Keyboard][0];
            for (let XU = 0; XU < UU.length; XU++)
              if (0 !== UU[XU]) {
                UU[XU] = 0;
                const zU = rU.CreateDeviceEvent(WU.Keyboard, 0, XU, 0, this, this._elementToAttachTo);
                this._onInputChanged(WU.Keyboard, 0, zU)
              } this._usingMacOs && this._metaKeys.splice(0, this._metaKeys.length)
          }
        }, this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent)
      }
      _handlePointerActions() {
        this._maxTouchPoints = (0, GU.e)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
        for (let cU = 0; cU < this._maxTouchPoints; cU++) this._activeTouchIds[cU] = -1;
        this._pointerMoveEvent = UU => {
          const XU = this._getPointerType(UU);
          let zU = XU === WU.Mouse ? 0 : this._activeTouchIds.indexOf(UU.pointerId);
          if (XU === WU.Touch && -1 === zU) {
            if (0 === UU.buttons) return;
            const yU = this._activeTouchIds.indexOf(-1);
            if (!(yU >= 0)) return void cU.j.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            zU = yU, this._activeTouchIds[yU] = UU.pointerId, this._onDeviceConnected(XU, zU)
          }
          this._inputs[XU] || (this._inputs[XU] = {}), this._inputs[XU][zU] || this._addPointerDevice(XU, zU, UU.clientX, UU.clientY);
          const yU = this._inputs[XU][zU];
          if (yU) {
            const cU = UU;
            cU.inputIndex = dU.Move, yU[dU.Horizontal] = UU.clientX, yU[dU.Vertical] = UU.clientY, XU === WU.Touch && 0 === yU[dU.LeftClick] && (yU[dU.LeftClick] = 1), void 0 === UU.pointerId && (UU.pointerId = this._mouseId), this._onInputChanged(XU, zU, cU), this._usingSafari || -1 === UU.button || (cU.inputIndex = UU.button + 2, yU[UU.button + 2] = yU[UU.button + 2] ? 0 : 1, this._onInputChanged(XU, zU, cU))
          }
        }, this._pointerDownEvent = UU => {
          const XU = this._getPointerType(UU);
          let zU = XU === WU.Mouse ? 0 : UU.pointerId;
          if (XU === WU.Touch) {
            let XU = this._activeTouchIds.indexOf(UU.pointerId);
            if (-1 === XU && (XU = this._activeTouchIds.indexOf(-1)), !(XU >= 0)) return void cU.j.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            zU = XU, this._activeTouchIds[XU] = UU.pointerId
          }
          this._inputs[XU] || (this._inputs[XU] = {}), this._inputs[XU][zU] ? XU === WU.Touch && this._onDeviceConnected(XU, zU) : this._addPointerDevice(XU, zU, UU.clientX, UU.clientY);
          const yU = this._inputs[XU][zU];
          if (yU) {
            const cU = yU[dU.Horizontal],
              AU = yU[dU.Vertical];
            if (XU === WU.Mouse) {
              if (void 0 === UU.pointerId && (UU.pointerId = this._mouseId), !document.pointerLockElement) try {
                this._elementToAttachTo.setPointerCapture(this._mouseId)
              } catch (QU) {}
            } else if (UU.pointerId && !document.pointerLockElement) try {
              this._elementToAttachTo.setPointerCapture(UU.pointerId)
            } catch (QU) {}
            yU[dU.Horizontal] = UU.clientX, yU[dU.Vertical] = UU.clientY, yU[UU.button + 2] = 1;
            const FU = UU;
            FU.inputIndex = UU.button + 2, this._onInputChanged(XU, zU, FU), cU === UU.clientX && AU === UU.clientY || (FU.inputIndex = dU.Move, this._onInputChanged(XU, zU, FU))
          }
        }, this._pointerUpEvent = UU => {
          const XU = this._getPointerType(UU),
            zU = XU === WU.Mouse ? 0 : this._activeTouchIds.indexOf(UU.pointerId);
          if (XU === WU.Touch) {
            if (-1 === zU) return;
            this._activeTouchIds[zU] = -1
          }
          const cU = this._inputs[XU]?.[zU];
          let yU = UU.button,
            QU = cU && 0 !== cU[yU + 2];
          if (!QU && this._isUsingFirefox && this._usingMacOs && cU && (yU = 2 === yU ? 0 : 2, QU = 0 !== cU[yU + 2]), QU) {
            const QU = cU[dU.Horizontal],
              AU = cU[dU.Vertical];
            cU[dU.Horizontal] = UU.clientX, cU[dU.Vertical] = UU.clientY, cU[yU + 2] = 0;
            const FU = UU;
            void 0 === UU.pointerId && (UU.pointerId = this._mouseId), QU === UU.clientX && AU === UU.clientY || (FU.inputIndex = dU.Move, this._onInputChanged(XU, zU, FU)), FU.inputIndex = yU + 2, XU === WU.Mouse && this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) ? this._elementToAttachTo.releasePointerCapture(this._mouseId) : UU.pointerId && this._elementToAttachTo.hasPointerCapture?.(UU.pointerId) && this._elementToAttachTo.releasePointerCapture(UU.pointerId), this._onInputChanged(XU, zU, FU), XU === WU.Touch && this._onDeviceDisconnected(XU, zU)
          }
        }, this._pointerCancelTouch = UU => {
          const XU = this._activeTouchIds.indexOf(UU);
          if (-1 === XU) return;
          this._elementToAttachTo.hasPointerCapture?.(UU) && this._elementToAttachTo.releasePointerCapture(UU), this._inputs[WU.Touch][XU][dU.LeftClick] = 0;
          const zU = rU.CreateDeviceEvent(WU.Touch, XU, dU.LeftClick, 0, this, this._elementToAttachTo, UU);
          this._onInputChanged(WU.Touch, XU, zU), this._activeTouchIds[XU] = -1, this._onDeviceDisconnected(WU.Touch, XU)
        }, this._pointerCancelEvent = UU => {
          if ("mouse" === UU.pointerType) {
            const UU = this._inputs[WU.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let XU = dU.LeftClick; XU <= dU.BrowserForward; XU++)
              if (1 === UU[XU]) {
                UU[XU] = 0;
                const zU = rU.CreateDeviceEvent(WU.Mouse, 0, XU, 0, this, this._elementToAttachTo);
                this._onInputChanged(WU.Mouse, 0, zU)
              }
          } else this._pointerCancelTouch(UU.pointerId)
        }, this._pointerLeaveEvent = UU => {
          "pen" === UU.pointerType && this._pointerCancelTouch(UU.pointerId)
        }, this._wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        let UU = !1;
        const XU = function() {};
        try {
          const zU = Object.defineProperty({}, "passive", {
            get: function() {
              UU = !0
            }
          });
          this._elementToAttachTo.addEventListener("test", XU, zU), this._elementToAttachTo.removeEventListener("test", XU, zU)
        } catch (zU) {}
        this._pointerBlurEvent = () => {
          if (this.isDeviceAvailable(WU.Mouse)) {
            const UU = this._inputs[WU.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let XU = dU.LeftClick; XU <= dU.BrowserForward; XU++)
              if (1 === UU[XU]) {
                UU[XU] = 0;
                const zU = rU.CreateDeviceEvent(WU.Mouse, 0, XU, 0, this, this._elementToAttachTo);
                this._onInputChanged(WU.Mouse, 0, zU)
              }
          }
          if (this.isDeviceAvailable(WU.Touch)) {
            const UU = this._inputs[WU.Touch];
            for (let XU = 0; XU < this._activeTouchIds.length; XU++) {
              const zU = this._activeTouchIds[XU];
              if (this._elementToAttachTo.hasPointerCapture?.(zU) && this._elementToAttachTo.releasePointerCapture(zU), -1 !== zU && 1 === UU[XU]?.[dU.LeftClick]) {
                UU[XU][dU.LeftClick] = 0;
                const cU = rU.CreateDeviceEvent(WU.Touch, XU, dU.LeftClick, 0, this, this._elementToAttachTo, zU);
                this._onInputChanged(WU.Touch, XU, cU), this._activeTouchIds[XU] = -1, this._onDeviceDisconnected(WU.Touch, XU)
              }
            }
          }
        }, this._pointerWheelEvent = UU => {
          const XU = WU.Mouse;
          this._inputs[XU] || (this._inputs[XU] = []), this._inputs[XU][0] || (this._pointerActive = !0, this._registerDevice(XU, 0, fU));
          const zU = this._inputs[XU][0];
          if (zU) {
            zU[dU.MouseWheelX] = UU.deltaX || 0, zU[dU.MouseWheelY] = UU.deltaY || UU.wheelDelta || 0, zU[dU.MouseWheelZ] = UU.deltaZ || 0;
            const cU = UU;
            void 0 === UU.pointerId && (UU.pointerId = this._mouseId), 0 !== zU[dU.MouseWheelX] && (cU.inputIndex = dU.MouseWheelX, this._onInputChanged(XU, 0, cU)), 0 !== zU[dU.MouseWheelY] && (cU.inputIndex = dU.MouseWheelY, this._onInputChanged(XU, 0, cU)), 0 !== zU[dU.MouseWheelZ] && (cU.inputIndex = dU.MouseWheelZ, this._onInputChanged(XU, 0, cU))
          }
        }, this._usingMacOs && this._isUsingChromium && (this._pointerMacOsChromeOutEvent = UU => {
          UU.buttons > 1 && this._pointerCancelEvent(UU)
        }, this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent)), this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.addEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.addEventListener(this._wheelEventName, this._pointerWheelEvent, !!UU && {
          passive: !1
        }), this._pointerInputClearObserver = this._engine.onEndFrameObservable.add((() => {
          if (this.isDeviceAvailable(WU.Mouse)) {
            const UU = this._inputs[WU.Mouse][0];
            UU[dU.MouseWheelX] = 0, UU[dU.MouseWheelY] = 0, UU[dU.MouseWheelZ] = 0
          }
        }))
      }
      _handleGamepadActions() {
        this._gamepadConnectedEvent = UU => {
          this._addGamePad(UU.gamepad)
        }, this._gamepadDisconnectedEvent = UU => {
          if (this._gamepads) {
            const XU = this._getGamepadDeviceType(UU.gamepad.id),
              zU = UU.gamepad.index;
            this._unregisterDevice(XU, zU), delete this._gamepads[zU]
          }
        }, window.addEventListener("gamepadconnected", this._gamepadConnectedEvent), window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)
      }
      _updateDevice(UU, XU, zU) {
        const cU = navigator.getGamepads()[XU];
        if (cU && UU === this._gamepads[XU]) {
          const yU = this._inputs[UU][XU];
          zU >= cU.buttons.length ? yU[zU] = cU.axes[zU - cU.buttons.length].valueOf() : yU[zU] = cU.buttons[zU].value
        }
      }
      _getGamepadDeviceType(UU) {
        return -1 !== UU.indexOf("054c") ? -1 !== UU.indexOf("0ce6") ? WU.DualSense : WU.DualShock : -1 !== UU.indexOf("Xbox One") || -1 !== UU.search("Xbox 360") || -1 !== UU.search("xinput") || -1 !== UU.indexOf("045e") && -1 === UU.indexOf("Surface Dock") ? WU.Xbox : -1 !== UU.indexOf("057e") ? WU.Switch : WU.Generic
      }
      _getPointerType(UU) {
        let XU = WU.Mouse;
        return ("touch" === UU.pointerType || "pen" === UU.pointerType || UU.touches) && (XU = WU.Touch), XU
      }
    }
    class HU {
      constructor(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.deviceType = XU, this.deviceSlot = zU, this.onInputChangedObservable = new AU.e, this._deviceInputSystem = UU
      }
      getInput(UU) {
        return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, UU)
      }
    }
    class MU {
      constructor(UU) {
        this._registeredManagers = new Array, this._refCount = 0, this.registerManager = UU => {
          for (let XU = 0; XU < this._devices.length; XU++) {
            const zU = this._devices[XU];
            for (const cU in zU) {
              const zU = +cU;
              UU._addDevice(new HU(this._deviceInputSystem, XU, zU))
            }
          }
          this._registeredManagers.push(UU)
        }, this.unregisterManager = UU => {
          const XU = this._registeredManagers.indexOf(UU);
          XU > -1 && this._registeredManagers.splice(XU, 1)
        };
        const XU = Object.keys(WU).length / 2;
        this._devices = new Array(XU);
        const zU = (UU, XU) => {
            this._devices[UU] || (this._devices[UU] = new Array), this._devices[UU][XU] || (this._devices[UU][XU] = XU);
            for (const zU of this._registeredManagers) {
              const cU = new HU(this._deviceInputSystem, UU, XU);
              zU._addDevice(cU)
            }
          },
          cU = (UU, XU) => {
            this._devices[UU]?.[XU] && delete this._devices[UU][XU];
            for (const zU of this._registeredManagers) zU._removeDevice(UU, XU)
          },
          yU = (UU, XU, zU) => {
            if (zU)
              for (const cU of this._registeredManagers) cU._onInputChanged(UU, XU, zU)
          };
        "undefined" !== typeof _native ? this._deviceInputSystem = new uU(zU, cU, yU) : this._deviceInputSystem = new iU(UU, zU, cU, yU)
      }
      dispose() {
        this._deviceInputSystem.dispose()
      }
    }
    class vU {
      getDeviceSource(UU, XU) {
        if (void 0 === XU) {
          if (void 0 === this._firstDevice[UU]) return null;
          XU = this._firstDevice[UU]
        }
        return this._devices[UU] && void 0 !== this._devices[UU][XU] ? this._devices[UU][XU] : null
      }
      getDeviceSources(UU) {
        return this._devices[UU] ? this._devices[UU].filter((UU => !!UU)) : []
      }
      constructor(UU) {
        const XU = Object.keys(WU).length / 2;
        this._devices = new Array(XU), this._firstDevice = new Array(XU), this._engine = UU, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new MU(UU)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new AU.e((UU => {
          for (const XU of this._devices)
            if (XU)
              for (const zU of XU) zU && this.onDeviceConnectedObservable.notifyObserver(UU, zU)
        })), this.onDeviceDisconnectedObservable = new AU.e, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = UU.bS.add((() => {
          this.dispose()
        }))
      }
      dispose() {
        this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager.dispose(), delete this._engine._deviceSourceManager)), this._engine.bS.remove(this._onDisposeObserver)
      }
      _addDevice(UU) {
        this._devices[UU.deviceType] || (this._devices[UU.deviceType] = []), this._devices[UU.deviceType][UU.deviceSlot] || (this._devices[UU.deviceType][UU.deviceSlot] = UU, this._updateFirstDevices(UU.deviceType)), this.onDeviceConnectedObservable.notifyObservers(UU)
      }
      _removeDevice(UU, XU) {
        const zU = this._devices[UU]?.[XU];
        this.onDeviceDisconnectedObservable.notifyObservers(zU), this._devices[UU]?.[XU] && delete this._devices[UU][XU], this._updateFirstDevices(UU)
      }
      _onInputChanged(UU, XU, zU) {
        this._devices[UU]?.[XU]?.onInputChangedObservable.notifyObservers(zU)
      }
      _updateFirstDevices(UU) {
        switch (UU) {
          case WU.Keyboard:
          case WU.Mouse:
            this._firstDevice[UU] = 0;
            break;
          case WU.Touch:
          case WU.DualSense:
          case WU.DualShock:
          case WU.Xbox:
          case WU.Switch:
          case WU.Generic: {
            delete this._firstDevice[UU];
            const XU = this._devices[UU];
            if (XU)
              for (let zU = 0; zU < XU.length; zU++)
                if (XU[zU]) {
                  this._firstDevice[UU] = zU;
                  break
                } break
          }
        }
      }
    }
    var VU = zU(41289);
    class sU {
      constructor() {
        this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1
      }
      get singleClick() {
        return this._singleClick
      }
      get WA() {
        return this._doubleClick
      }
      get hasSwiped() {
        return this._hasSwiped
      }
      get ignore() {
        return this._ignore
      }
      set singleClick(UU) {
        this._singleClick = UU
      }
      set WA(UU) {
        this._doubleClick = UU
      }
      set hasSwiped(UU) {
        this._hasSwiped = UU
      }
      set ignore(UU) {
        this._ignore = UU
      }
    }
    class nU {
      constructor(UU) {
        this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1, this._skipPointerTap = !1, this._isMultiTouchGesture = !1, this._pointerX = 0, this._pointerY = 0, this._startingPointerPosition = new EU.m(0, 0), this._previousStartingPointerPosition = new EU.m(0, 0), this._startingPointerTime = 0, this._previousStartingPointerTime = 0, this._pointerCaptures = {}, this._meshUnderPointerId = {}, this._movePointerInfo = null, this._latestPointerMoveEvents = new Map, this._cameraObserverCount = 0, this._delayedClicks = [null, null, null, null, null], this._deviceSourceManager = null, this._scene = UU || BU.b.LastCreatedScene, this._scene
      }
      get meshUnderPointer() {
        return this._movePointerInfo && (this._movePointerInfo._generatePickInfo(), this._movePointerInfo = null), this._pointerOverMesh
      }
      getMeshUnderPointerByPointerId(UU) {
        return this._meshUnderPointerId[UU] || null
      }
      get unTranslatedPointer() {
        return new EU.m(this._unTranslatedPointerX, this._unTranslatedPointerY)
      }
      get pointerX() {
        return this._pointerX
      }
      set pointerX(UU) {
        this._pointerX = UU
      }
      get pointerY() {
        return this._pointerY
      }
      set pointerY(UU) {
        this._pointerY = UU
      }
      _updatePointerPosition(UU) {
        const XU = this._scene.qp().getInputElementClientRect();
        XU && (this._pointerX = UU.clientX - XU.left, this._pointerY = UU.clientY - XU.top, this._unTranslatedPointerX = this._pointerX, this._unTranslatedPointerY = this._pointerY)
      }
      _processPointerMove(UU, XU) {
        const zU = this._scene,
          cU = zU.qp(),
          yU = cU.getInputElement();
        yU && (yU.tabIndex = cU.canvasTabIndex, zU.doNotHandleCursors || (yU.style.cursor = zU.defaultCursor)), this._setCursorAndPointerOverMesh(UU, XU, zU);
        for (const FU of zU._pointerMoveStage) {
          UU = UU || this._pickMove(XU);
          const zU = !!UU?.pickedMesh;
          UU = FU.action(this._unTranslatedPointerX, this._unTranslatedPointerY, UU, zU, yU)
        }
        const QU = XU.inputIndex >= dU.MouseWheelX && XU.inputIndex <= dU.MouseWheelZ ? RU.c.POINTERWHEEL : RU.c.POINTERMOVE;
        let AU;
        zU.onPointerMove && (UU = UU || this._pickMove(XU), zU.onPointerMove(XU, UU, QU)), UU ? (AU = new RU.h(QU, XU, UU), this._setRayOnPointerInfo(UU, XU)) : (AU = new RU.h(QU, XU, null, this), this._movePointerInfo = AU), zU.onPointerObservable.hasObservers() && zU.onPointerObservable.notifyObservers(AU, QU)
      }
      _setRayOnPointerInfo(UU, XU) {
        const zU = this._scene;
        UU && VU.e._IsPickingAvailable && (UU.ray || (UU.ray = zU.createPickingRay(XU.offsetX, XU.offsetY, EU.e.Identity(), zU.activeCamera)))
      }
      _addCameraPointerObserver(UU, XU) {
        return this._cameraObserverCount++, this._scene.onPointerObservable.add(UU, XU)
      }
      _removeCameraPointerObserver(UU) {
        return this._cameraObserverCount--, this._scene.onPointerObservable.remove(UU)
      }
      _checkForPicking() {
        return !!(this._scene.onPointerObservable.observers.length > this._cameraObserverCount || this._scene.onPointerPick)
      }
      _checkPrePointerObservable(UU, XU, zU) {
        const cU = this._scene,
          yU = new RU.f(zU, XU, this._unTranslatedPointerX, this._unTranslatedPointerY);
        return UU && (yU.originalPickingInfo = UU, yU.ray = UU.ray, "xr-near" === XU.pointerType && UU.originMesh && (yU.nearInteractionPickingInfo = UU)), cU.onPrePointerObservable.notifyObservers(yU, zU), !!yU.skipOnPointerObservable
      }
      _pickMove(UU) {
        const XU = this._scene,
          zU = XU.DI(this._unTranslatedPointerX, this._unTranslatedPointerY, XU.pointerMovePredicate, XU.pointerMoveFastCheck, XU.cameraToUseForPointers, XU.pointerMoveTrianglePredicate);
        return this._setCursorAndPointerOverMesh(zU, UU, XU), zU
      }
      _updateMeshUnderPointer() {
        const UU = this._scene;
        if (!UU.constantlyUpdateMeshUnderPointer || 0 === this._latestPointerMoveEvents.size || UU.skipPointerMovePicking || !UU.cameraToUseForPointers && !UU.activeCamera) return;
        this._ensurePointerMovePredicate();
        const XU = this._pointerX,
          zU = this._pointerY,
          cU = this._unTranslatedPointerX,
          yU = this._unTranslatedPointerY;
        for (const QU of this._latestPointerMoveEvents.values()) this._pointerX = QU.pointerX, this._pointerY = QU.pointerY, this._unTranslatedPointerX = QU.unTranslatedPointerX, this._unTranslatedPointerY = QU.unTranslatedPointerY, this._pickMove(QU.event);
        this._pointerX = XU, this._pointerY = zU, this._unTranslatedPointerX = cU, this._unTranslatedPointerY = yU
      }
      _ensurePointerMovePredicate() {
        const UU = this._scene;
        UU.pointerMovePredicate || (UU.pointerMovePredicate = XU => (XU._isPointerMovePickable ?? XU.ma) && XU.isVisible && XU.isReady() && XU.isEnabled() && (XU.enablePointerMoveEvents || UU.constantlyUpdateMeshUnderPointer || null !== XU._getActionManagerForTrigger()) && (!UU.cameraToUseForPointers || 0 !== (UU.cameraToUseForPointers.layerMask & XU.layerMask)))
      }
      _setCursorAndPointerOverMesh(UU, XU, zU) {
        const cU = zU.qp().getInputElement();
        if (UU?.pickedMesh) {
          if (this.setPointerOverMesh(UU.pickedMesh, XU.pointerId, UU, XU), !zU.doNotHandleCursors && cU && this._pointerOverMesh) {
            const UU = this._pointerOverMesh._getActionManagerForTrigger();
            UU && UU.hasPointerTriggers && (cU.style.cursor = UU.hoverCursor || zU.hoverCursor)
          }
        } else this.setPointerOverMesh(null, XU.pointerId, UU, XU)
      }
      simulatePointerMove(UU, XU) {
        const zU = new PointerEvent("pointermove", XU);
        zU.inputIndex = dU.Move, this._checkPrePointerObservable(UU, zU, RU.c.POINTERMOVE) || this._processPointerMove(UU, zU)
      }
      simulatePointerDown(UU, XU) {
        const zU = new PointerEvent("pointerdown", XU);
        zU.inputIndex = zU.button + 2, this._checkPrePointerObservable(UU, zU, RU.c.POINTERDOWN) || this._processPointerDown(UU, zU)
      }
      _processPointerDown(UU, XU) {
        const zU = this._scene;
        if (UU?.pickedMesh) {
          this._pickedDownMesh = UU.pickedMesh;
          const cU = UU.pickedMesh._getActionManagerForTrigger();
          if (cU) {
            if (cU.hasPickTriggers) switch (cU.processTrigger(5, new pU(UU.pickedMesh, zU.pointerX, zU.pointerY, UU.pickedMesh, XU, UU)), XU.button) {
              case 0:
                cU.processTrigger(2, new pU(UU.pickedMesh, zU.pointerX, zU.pointerY, UU.pickedMesh, XU, UU));
                break;
              case 1:
                cU.processTrigger(4, new pU(UU.pickedMesh, zU.pointerX, zU.pointerY, UU.pickedMesh, XU, UU));
                break;
              case 2:
                cU.processTrigger(3, new pU(UU.pickedMesh, zU.pointerX, zU.pointerY, UU.pickedMesh, XU, UU))
            }
            cU.hasSpecificTrigger(8) && window.setTimeout((() => {
              const UU = zU.DI(this._unTranslatedPointerX, this._unTranslatedPointerY, (UU => UU.ma && UU.isVisible && UU.isReady() && UU.actionManager && UU.actionManager.hasSpecificTrigger(8) && UU === this._pickedDownMesh), !1, zU.cameraToUseForPointers);
              UU?.pickedMesh && cU && 0 !== this._activePointerIdsCount && Date.now() - this._startingPointerTime > nU.LongPressDelay && !this._isPointerSwiping() && (this._startingPointerTime = 0, cU.processTrigger(8, pU.CreateNew(UU.pickedMesh, XU)))
            }), nU.LongPressDelay)
          }
        } else
          for (const QU of zU._pointerDownStage) UU = QU.action(this._unTranslatedPointerX, this._unTranslatedPointerY, UU, XU, !1);
        let cU;
        const yU = RU.c.POINTERDOWN;
        UU ? (zU.onPointerDown && zU.onPointerDown(XU, UU, yU), cU = new RU.h(yU, XU, UU), this._setRayOnPointerInfo(UU, XU)) : cU = new RU.h(yU, XU, null, this), zU.onPointerObservable.hasObservers() && zU.onPointerObservable.notifyObservers(cU, yU)
      }
      _isPointerSwiping() {
        return this._isSwiping
      }
      simulatePointerUp(UU, XU, zU) {
        const cU = new PointerEvent("pointerup", XU);
        cU.inputIndex = dU.Move;
        const yU = new sU;
        zU ? yU.WA = !0 : yU.singleClick = !0, this._checkPrePointerObservable(UU, cU, RU.c.POINTERUP) || this._processPointerUp(UU, cU, yU)
      }
      _processPointerUp(UU, XU, zU) {
        const cU = this._scene;
        if (UU?.pickedMesh) {
          if (this._pickedUpMesh = UU.pickedMesh, this._pickedDownMesh === this._pickedUpMesh && (cU.onPointerPick && cU.onPointerPick(XU, UU), zU.singleClick && !zU.ignore && cU.onPointerObservable.observers.length > this._cameraObserverCount)) {
            const zU = RU.c.POINTERPICK,
              yU = new RU.h(zU, XU, UU);
            this._setRayOnPointerInfo(UU, XU), cU.onPointerObservable.notifyObservers(yU, zU)
          }
          const yU = UU.pickedMesh._getActionManagerForTrigger();
          if (yU && !zU.ignore) {
            yU.processTrigger(7, pU.CreateNew(UU.pickedMesh, XU, UU)), !zU.hasSwiped && zU.singleClick && yU.processTrigger(1, pU.CreateNew(UU.pickedMesh, XU, UU));
            const cU = UU.pickedMesh._getActionManagerForTrigger(6);
            zU.WA && cU && cU.processTrigger(6, pU.CreateNew(UU.pickedMesh, XU, UU))
          }
        } else if (!zU.ignore)
          for (const yU of cU._pointerUpStage) UU = yU.action(this._unTranslatedPointerX, this._unTranslatedPointerY, UU, XU, zU.WA);
        if (this._pickedDownMesh && this._pickedDownMesh !== this._pickedUpMesh) {
          const UU = this._pickedDownMesh._getActionManagerForTrigger(16);
          UU && UU.processTrigger(16, pU.CreateNew(this._pickedDownMesh, XU))
        }
        if (!zU.ignore) {
          const yU = new RU.h(RU.c.POINTERUP, XU, UU);
          if (this._setRayOnPointerInfo(UU, XU), cU.onPointerObservable.notifyObservers(yU, RU.c.POINTERUP), cU.onPointerUp && cU.onPointerUp(XU, UU, RU.c.POINTERUP), !zU.hasSwiped && !this._skipPointerTap && !this._isMultiTouchGesture) {
            let yU = 0;
            if (zU.singleClick ? yU = RU.c.POINTERTAP : zU.WA && (yU = RU.c.POINTERDOUBLETAP), yU) {
              const zU = new RU.h(yU, XU, UU);
              cU.onPointerObservable.hasObservers() && cU.onPointerObservable.hasSpecificMask(yU) && cU.onPointerObservable.notifyObservers(zU, yU)
            }
          }
        }
      }
      isPointerCaptured() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._pointerCaptures[UU]
      }
      attachControl() {
        let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          zU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const yU = this._scene,
          QU = yU.qp();
        cU || (cU = QU.getInputElement()), this._alreadyAttached && this.detachControl(), cU && (this._alreadyAttachedTo = cU), this._deviceSourceManager = new vU(QU), this._initActionManager = UU => {
          if (!this._meshPickProceed) {
            const XU = yU.skipPointerUpPicking || 0 === yU._registeredActions && !this._checkForPicking() && !yU.onPointerUp ? null : yU.DI(this._unTranslatedPointerX, this._unTranslatedPointerY, yU.pointerUpPredicate, yU.pointerUpFastCheck, yU.cameraToUseForPointers, yU.pointerUpTrianglePredicate);
            this._currentPickResult = XU, XU && (UU = XU.hit && XU.pickedMesh ? XU.pickedMesh._getActionManagerForTrigger() : null), this._meshPickProceed = !0
          }
          return UU
        }, this._delayedSimpleClick = (UU, XU, zU) => {
          if ((Date.now() - this._previousStartingPointerTime > nU.DoubleClickDelay && !this._doubleClickOccured || UU !== this._previousButtonPressed) && (this._doubleClickOccured = !1, XU.singleClick = !0, XU.ignore = !1, this._delayedClicks[UU])) {
            const XU = this._delayedClicks[UU].evt,
              zU = RU.c.POINTERTAP,
              cU = new RU.h(zU, XU, this._currentPickResult);
            yU.onPointerObservable.hasObservers() && yU.onPointerObservable.hasSpecificMask(zU) && yU.onPointerObservable.notifyObservers(cU, zU), this._delayedClicks[UU] = null
          }
        }, this._initClickEvent = (UU, XU, zU, cU) => {
          const yU = new sU;
          this._currentPickResult = null;
          let QU = null,
            AU = UU.hasSpecificMask(RU.c.POINTERPICK) || XU.hasSpecificMask(RU.c.POINTERPICK) || UU.hasSpecificMask(RU.c.POINTERTAP) || XU.hasSpecificMask(RU.c.POINTERTAP) || UU.hasSpecificMask(RU.c.POINTERDOUBLETAP) || XU.hasSpecificMask(RU.c.POINTERDOUBLETAP);
          !AU && PU && (QU = this._initActionManager(QU, yU), QU && (AU = QU.hasPickTriggers));
          let FU = !1;
          if (AU = AU && !this._isMultiTouchGesture, AU) {
            const AU = zU.button;
            if (yU.hasSwiped = this._isPointerSwiping(), !yU.hasSwiped) {
              let oU = !nU.ExclusiveDoubleClickMode;
              if (oU || (oU = !UU.hasSpecificMask(RU.c.POINTERDOUBLETAP) && !XU.hasSpecificMask(RU.c.POINTERDOUBLETAP), oU && !PU.HasSpecificTrigger(6) && (QU = this._initActionManager(QU, yU), QU && (oU = !QU.hasSpecificTrigger(6)))), oU)(Date.now() - this._previousStartingPointerTime > nU.DoubleClickDelay || AU !== this._previousButtonPressed) && (yU.singleClick = !0, cU(yU, this._currentPickResult), FU = !0);
              else {
                const UU = {
                  evt: zU,
                  clickInfo: yU,
                  timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, AU, yU, cU), nU.DoubleClickDelay)
                };
                this._delayedClicks[AU] = UU
              }
              let DU = UU.hasSpecificMask(RU.c.POINTERDOUBLETAP) || XU.hasSpecificMask(RU.c.POINTERDOUBLETAP);
              !DU && PU.HasSpecificTrigger(6) && (QU = this._initActionManager(QU, yU), QU && (DU = QU.hasSpecificTrigger(6))), DU && (AU === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < nU.DoubleClickDelay && !this._doubleClickOccured ? (yU.hasSwiped || this._isPointerSwiping() ? (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = AU, nU.ExclusiveDoubleClickMode ? (this._delayedClicks[AU] && (clearTimeout(this._delayedClicks[AU]?.timeoutId), this._delayedClicks[AU] = null), cU(yU, this._previousPickResult)) : cU(yU, this._currentPickResult)) : (this._previousStartingPointerTime = 0, this._doubleClickOccured = !0, yU.WA = !0, yU.ignore = !1, nU.ExclusiveDoubleClickMode && this._delayedClicks[AU] && (clearTimeout(this._delayedClicks[AU]?.timeoutId), this._delayedClicks[AU] = null), cU(yU, this._currentPickResult)), FU = !0) : (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = AU))
            }
          }
          FU || cU(yU, this._currentPickResult)
        }, this._onPointerMove = UU => {
          if (this._updatePointerPosition(UU), this._latestPointerMoveEvents.set(UU.pointerId, {
              event: UU,
              pointerX: this._pointerX,
              pointerY: this._pointerY,
              unTranslatedPointerX: this._unTranslatedPointerX,
              unTranslatedPointerY: this._unTranslatedPointerY
            }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > nU.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > nU.DragMovementThreshold), QU.isPointerLock && QU._verifyPointerLock(), this._checkPrePointerObservable(null, UU, UU.inputIndex >= dU.MouseWheelX && UU.inputIndex <= dU.MouseWheelZ ? RU.c.POINTERWHEEL : RU.c.POINTERMOVE)) return;
          if (!yU.cameraToUseForPointers && !yU.activeCamera) return;
          if (yU.skipPointerMovePicking) return void this._processPointerMove(new IU.c, UU);
          this._ensurePointerMovePredicate();
          const XU = yU._registeredActions > 0 || yU.constantlyUpdateMeshUnderPointer ? this._pickMove(UU) : null;
          this._processPointerMove(XU, UU)
        }, this._onPointerDown = UU => {
          const XU = this._activePointerIds.indexOf(-1);
          if (-1 === XU ? this._activePointerIds.push(UU.pointerId) : this._activePointerIds[XU] = UU.pointerId, this._activePointerIdsCount++, this._pickedDownMesh = null, this._meshPickProceed = !1, nU.ExclusiveDoubleClickMode)
            for (let cU = 0; cU < this._delayedClicks.length; cU++)
              if (this._delayedClicks[cU])
                if (UU.button === cU) clearTimeout(this._delayedClicks[cU]?.timeoutId);
                else {
                  const UU = this._delayedClicks[cU].clickInfo;
                  this._doubleClickOccured = !1, UU.singleClick = !0, UU.ignore = !1;
                  const XU = this._delayedClicks[cU].evt,
                    zU = RU.c.POINTERTAP,
                    QU = new RU.h(zU, XU, this._currentPickResult);
                  yU.onPointerObservable.hasObservers() && yU.onPointerObservable.hasSpecificMask(zU) && yU.onPointerObservable.notifyObservers(QU, zU), this._delayedClicks[cU] = null
                } if (this._updatePointerPosition(UU), -1 === this._swipeButtonPressed && (this._swipeButtonPressed = UU.button), yU.preventDefaultOnPointerDown && cU && (UU.preventDefault(), cU.focus()), this._startingPointerPosition.x = this._pointerX, this._startingPointerPosition.y = this._pointerY, this._startingPointerTime = Date.now(), this._checkPrePointerObservable(null, UU, RU.c.POINTERDOWN)) return;
          if (!yU.cameraToUseForPointers && !yU.activeCamera) return;
          let zU;
          this._pointerCaptures[UU.pointerId] = !0, yU.pointerDownPredicate || (yU.pointerDownPredicate = UU => UU.ma && UU.isVisible && UU.isReady() && UU.isEnabled() && (!yU.cameraToUseForPointers || 0 !== (yU.cameraToUseForPointers.layerMask & UU.layerMask))), this._pickedDownMesh = null, zU = yU.skipPointerDownPicking || 0 === yU._registeredActions && !this._checkForPicking() && !yU.onPointerDown ? new IU.c : yU.DI(this._unTranslatedPointerX, this._unTranslatedPointerY, yU.pointerDownPredicate, yU.pointerDownFastCheck, yU.cameraToUseForPointers, yU.pointerDownTrianglePredicate), this._processPointerDown(zU, UU)
        }, this._onPointerUp = UU => {
          const XU = this._activePointerIds.indexOf(UU.pointerId); - 1 !== XU && (this._activePointerIds[XU] = -1, this._activePointerIdsCount--, "touch" === UU.pointerType && this._latestPointerMoveEvents.delete(UU.pointerId), this._pickedUpMesh = null, this._meshPickProceed = !1, this._updatePointerPosition(UU), yU.preventDefaultOnPointerUp && cU && (UU.preventDefault(), cU.focus()), this._initClickEvent(yU.onPrePointerObservable, yU.onPointerObservable, UU, ((XU, zU) => {
            if (yU.onPrePointerObservable.hasObservers() && (this._skipPointerTap = !1, !XU.ignore)) {
              if (this._checkPrePointerObservable(null, UU, RU.c.POINTERUP)) return this._swipeButtonPressed === UU.button && (this._isSwiping = !1, this._swipeButtonPressed = -1), void(0 === UU.buttons && (this._pointerCaptures[UU.pointerId] = !1));
              XU.hasSwiped || (XU.singleClick && yU.onPrePointerObservable.hasSpecificMask(RU.c.POINTERTAP) && this._checkPrePointerObservable(null, UU, RU.c.POINTERTAP) && (this._skipPointerTap = !0), XU.WA && yU.onPrePointerObservable.hasSpecificMask(RU.c.POINTERDOUBLETAP) && this._checkPrePointerObservable(null, UU, RU.c.POINTERDOUBLETAP) && (this._skipPointerTap = !0))
            }
            this._pointerCaptures[UU.pointerId] ? (0 === UU.buttons && (this._pointerCaptures[UU.pointerId] = !1), (yU.cameraToUseForPointers || yU.activeCamera) && (yU.pointerUpPredicate || (yU.pointerUpPredicate = UU => UU.ma && UU.isVisible && UU.isReady() && UU.isEnabled() && (!yU.cameraToUseForPointers || 0 !== (yU.cameraToUseForPointers.layerMask & UU.layerMask))), !this._meshPickProceed && (PU && PU.HasTriggers || this._checkForPicking() || yU.onPointerUp) && this._initActionManager(null, XU), zU || (zU = this._currentPickResult), this._processPointerUp(zU, UU, XU), this._previousPickResult = this._currentPickResult, this._swipeButtonPressed === UU.button && (this._isSwiping = !1, this._swipeButtonPressed = -1))) : this._swipeButtonPressed === UU.button && (this._isSwiping = !1, this._swipeButtonPressed = -1)
          })))
        }, this._onKeyDown = UU => {
          const XU = OU.c.KEYDOWN;
          if (yU.onPreKeyboardObservable.hasObservers()) {
            const zU = new OU.e(XU, UU);
            if (yU.onPreKeyboardObservable.notifyObservers(zU, XU), zU.skipOnKeyboardObservable) return
          }
          if (yU.onKeyboardObservable.hasObservers()) {
            const zU = new OU.h(XU, UU);
            yU.onKeyboardObservable.notifyObservers(zU, XU)
          }
          yU.actionManager && yU.actionManager.processTrigger(14, pU.CreateNewFromScene(yU, UU))
        }, this._onKeyUp = UU => {
          const XU = OU.c.KEYUP;
          if (yU.onPreKeyboardObservable.hasObservers()) {
            const zU = new OU.e(XU, UU);
            if (yU.onPreKeyboardObservable.notifyObservers(zU, XU), zU.skipOnKeyboardObservable) return
          }
          if (yU.onKeyboardObservable.hasObservers()) {
            const zU = new OU.h(XU, UU);
            yU.onKeyboardObservable.notifyObservers(zU, XU)
          }
          yU.actionManager && yU.actionManager.processTrigger(15, pU.CreateNewFromScene(yU, UU))
        }, this._deviceSourceManager.onDeviceConnectedObservable.add((cU => {
          cU.deviceType === WU.Mouse ? cU.onInputChangedObservable.add((yU => {
            this._originMouseEvent = yU, yU.inputIndex === dU.LeftClick || yU.inputIndex === dU.MiddleClick || yU.inputIndex === dU.RightClick || yU.inputIndex === dU.BrowserBack || yU.inputIndex === dU.BrowserForward ? XU && 1 === cU.getInput(yU.inputIndex) ? this._onPointerDown(yU) : UU && 0 === cU.getInput(yU.inputIndex) && this._onPointerUp(yU) : zU && (yU.inputIndex === dU.Move ? this._onPointerMove(yU) : yU.inputIndex !== dU.MouseWheelX && yU.inputIndex !== dU.MouseWheelY && yU.inputIndex !== dU.MouseWheelZ || this._onPointerMove(yU))
          })) : cU.deviceType === WU.Touch ? cU.onInputChangedObservable.add((yU => {
            yU.inputIndex === dU.LeftClick && (XU && 1 === cU.getInput(yU.inputIndex) ? (this._onPointerDown(yU), this._activePointerIdsCount > 1 && (this._isMultiTouchGesture = !0)) : UU && 0 === cU.getInput(yU.inputIndex) && (this._onPointerUp(yU), 0 === this._activePointerIdsCount && (this._isMultiTouchGesture = !1))), zU && yU.inputIndex === dU.Move && this._onPointerMove(yU)
          })) : cU.deviceType === WU.Keyboard && cU.onInputChangedObservable.add((UU => {
            "keydown" === UU.type ? this._onKeyDown(UU) : "keyup" === UU.type && this._onKeyUp(UU)
          }))
        })), this._alreadyAttached = !0
      }
      detachControl() {
        this._alreadyAttached && (this._deviceSourceManager.dispose(), this._deviceSourceManager = null, this._alreadyAttachedTo && !this._scene.doNotHandleCursors && (this._alreadyAttachedTo.style.cursor = this._scene.defaultCursor), this._alreadyAttached = !1, this._alreadyAttachedTo = null, this._latestPointerMoveEvents.clear())
      }
      setPointerOverMesh(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zU = arguments.length > 2 ? arguments[2] : void 0,
          cU = arguments.length > 3 ? arguments[3] : void 0;
        if (this._meshUnderPointerId[XU] === UU && (!UU || !UU._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting)) return;
        const yU = this._meshUnderPointerId[XU];
        let QU;
        yU && (QU = yU._getActionManagerForTrigger(10), QU && QU.processTrigger(10, new pU(yU, this._pointerX, this._pointerY, UU, cU, {
          pointerId: XU
        }))), UU ? (this._meshUnderPointerId[XU] = UU, this._pointerOverMesh = UU, QU = UU._getActionManagerForTrigger(9), QU && QU.processTrigger(9, new pU(UU, this._pointerX, this._pointerY, UU, cU, {
          pointerId: XU,
          pickResult: zU
        }))) : (delete this._meshUnderPointerId[XU], this._pointerOverMesh = null), this._scene.onMeshUnderPointerUpdatedObservable.hasObservers() && this._scene.onMeshUnderPointerUpdatedObservable.notifyObservers({
          mesh: UU,
          pointerId: XU
        })
      }
      getPointerOverMesh() {
        return this.meshUnderPointer
      }
      _invalidateMesh(UU) {
        this._pointerOverMesh === UU && (this._pointerOverMesh = null), this._pickedDownMesh === UU && (this._pickedDownMesh = null), this._pickedUpMesh === UU && (this._pickedUpMesh = null);
        for (const XU in this._meshUnderPointerId) this._meshUnderPointerId[XU] === UU && delete this._meshUnderPointerId[XU]
      }
    }
    nU.DragMovementThreshold = 10, nU.LongPressDelay = 500, nU.DoubleClickDelay = 300, nU.ExclusiveDoubleClickMode = !1;
    var mU = zU(41052),
      lU = zU(37923),
      xU = zU(38502);
    class JU {
      static get UniqueId() {
        const UU = this._UniqueIdCounter;
        return this._UniqueIdCounter++, UU
      }
    }
    JU._UniqueIdCounter = 1;
    var jU = zU(41152),
      KU = zU(41293),
      bU = zU(37827);
    class TU {
      constructor() {
        this.pointerDownFastCheck = !1, this.pointerUpFastCheck = !1, this.pointerMoveFastCheck = !1, this.skipPointerMovePicking = !1, this.skipPointerDownPicking = !1, this.skipPointerUpPicking = !1
      }
    }
    var hU, UX, XX, zX, cX, yX, QX, AX, FX, oX, DX, EX, YX, NX, IX, pX, aX, tX, gX, kX, GX, BX, ZX, RX, PX, WX, dX, LX, eX, CX, wX, qX, OX, SX, rX, uX, fX, iX, HX, MX, vX, VX, sX, nX, mX, lX, xX, JX, jX, KX, bX, TX, hX, Uz = zU(39493),
      Xz = zU(37863);
    const zz = new EU.t,
      cz = new EU.t;
    var yz;
    ! function(UU) {
      UU[UU.BackwardCompatible = 0] = "BackwardCompatible", UU[UU.Intermediate = 1] = "Intermediate", UU[UU.Aggressive = 2] = "Aggressive"
    }(yz || (yz = {}));
    class Qz {
      static DefaultMaterialFactory(UU) {
        throw (0, ZU.m)("StandardMaterial")
      }
      static CollisionCoordinatorFactory() {
        throw (0, ZU.m)("DefaultCollisionCoordinator")
      }
      get clearColor() {
        return this._clearColor
      }
      set clearColor(UU) {
        UU !== this._clearColor && (this._clearColor = UU, this.onClearColorChangedObservable.notifyObservers(this._clearColor))
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      get performancePriority() {
        return this._performancePriority
      }
      set performancePriority(UU) {
        if (UU !== this._performancePriority) {
          switch (this._performancePriority = UU, UU) {
            case 0:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !1, this.autoClear = !0;
              break;
            case 1:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !0, this.autoClear = !1;
              break;
            case 2:
              this.skipFrustumClipping = !0, this._renderingManager.maintainStateBetweenFrames = !0, this.skipPointerMovePicking = !0, this.autoClear = !1
          }
          this.onScenePerformancePriorityChangedObservable.notifyObservers(UU)
        }
      }
      set forceWireframe(UU) {
        this._forceWireframe !== UU && (this._forceWireframe = UU, this.markAllMaterialsAsDirty(16))
      }
      get forceWireframe() {
        return this._forceWireframe
      }
      set skipFrustumClipping(UU) {
        this._skipFrustumClipping !== UU && (this._skipFrustumClipping = UU)
      }
      get skipFrustumClipping() {
        return this._skipFrustumClipping
      }
      set forcePointsCloud(UU) {
        this._forcePointsCloud !== UU && (this._forcePointsCloud = UU, this.markAllMaterialsAsDirty(16))
      }
      get forcePointsCloud() {
        return this._forcePointsCloud
      }
      get environmentTexture() {
        return this._environmentTexture
      }
      set environmentTexture(UU) {
        this._environmentTexture !== UU && (this._environmentTexture = UU, this.onEnvironmentTextureChangedObservable.notifyObservers(UU), this.markAllMaterialsAsDirty(1))
      }
      getNodes() {
        let UU = [];
        UU = UU.concat(this.meshes), UU = UU.concat(this.lights), UU = UU.concat(this.cameras), UU = UU.concat(this.transformNodes);
        for (const XU of this.skeletons) UU = UU.concat(XU.bones);
        return UU
      }
      get animationPropertiesOverride() {
        return this._animationPropertiesOverride
      }
      set animationPropertiesOverride(UU) {
        this._animationPropertiesOverride = UU
      }
      set onDispose(UU) {
        this._onDisposeObserver && this.bS.remove(this._onDisposeObserver), this._onDisposeObserver = this.bS.add(UU)
      }
      set beforeRender(UU) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), UU && (this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(UU))
      }
      set afterRender(UU) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), UU && (this._onAfterRenderObserver = this.onAfterRenderObservable.add(UU))
      }
      set beforeCameraRender(UU) {
        this._onBeforeCameraRenderObserver && this.onBeforeCameraRenderObservable.remove(this._onBeforeCameraRenderObserver), this._onBeforeCameraRenderObserver = this.onBeforeCameraRenderObservable.add(UU)
      }
      set afterCameraRender(UU) {
        this._onAfterCameraRenderObserver && this.onAfterCameraRenderObservable.remove(this._onAfterCameraRenderObserver), this._onAfterCameraRenderObserver = this.onAfterCameraRenderObservable.add(UU)
      }
      get pointerDownPredicate() {
        return this._pointerPickingConfiguration.pointerDownPredicate
      }
      set pointerDownPredicate(UU) {
        this._pointerPickingConfiguration.pointerDownPredicate = UU
      }
      get pointerUpPredicate() {
        return this._pointerPickingConfiguration.pointerUpPredicate
      }
      set pointerUpPredicate(UU) {
        this._pointerPickingConfiguration.pointerUpPredicate = UU
      }
      get pointerMovePredicate() {
        return this._pointerPickingConfiguration.pointerMovePredicate
      }
      set pointerMovePredicate(UU) {
        this._pointerPickingConfiguration.pointerMovePredicate = UU
      }
      get pointerDownFastCheck() {
        return this._pointerPickingConfiguration.pointerDownFastCheck
      }
      set pointerDownFastCheck(UU) {
        this._pointerPickingConfiguration.pointerDownFastCheck = UU
      }
      get pointerUpFastCheck() {
        return this._pointerPickingConfiguration.pointerUpFastCheck
      }
      set pointerUpFastCheck(UU) {
        this._pointerPickingConfiguration.pointerUpFastCheck = UU
      }
      get pointerMoveFastCheck() {
        return this._pointerPickingConfiguration.pointerMoveFastCheck
      }
      set pointerMoveFastCheck(UU) {
        this._pointerPickingConfiguration.pointerMoveFastCheck = UU
      }
      get skipPointerMovePicking() {
        return this._pointerPickingConfiguration.skipPointerMovePicking
      }
      set skipPointerMovePicking(UU) {
        this._pointerPickingConfiguration.skipPointerMovePicking = UU
      }
      get skipPointerDownPicking() {
        return this._pointerPickingConfiguration.skipPointerDownPicking
      }
      set skipPointerDownPicking(UU) {
        this._pointerPickingConfiguration.skipPointerDownPicking = UU
      }
      get skipPointerUpPicking() {
        return this._pointerPickingConfiguration.skipPointerUpPicking
      }
      set skipPointerUpPicking(UU) {
        this._pointerPickingConfiguration.skipPointerUpPicking = UU
      }
      get unTranslatedPointer() {
        return this._inputManager.unTranslatedPointer
      }
      static get DragMovementThreshold() {
        return nU.DragMovementThreshold
      }
      static set DragMovementThreshold(UU) {
        nU.DragMovementThreshold = UU
      }
      static get LongPressDelay() {
        return nU.LongPressDelay
      }
      static set LongPressDelay(UU) {
        nU.LongPressDelay = UU
      }
      static get DoubleClickDelay() {
        return nU.DoubleClickDelay
      }
      static set DoubleClickDelay(UU) {
        nU.DoubleClickDelay = UU
      }
      static get ExclusiveDoubleClickMode() {
        return nU.ExclusiveDoubleClickMode
      }
      static set ExclusiveDoubleClickMode(UU) {
        nU.ExclusiveDoubleClickMode = UU
      }
      get _eyePosition() {
        return this._forcedViewPosition ?? this.activeCamera?.globalPosition ?? EU.q.ZeroReadOnly
      }
      bindEyePosition(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vEyePosition",
          zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const cU = this._eyePosition,
          yU = this.useRightHandedSystem === (null != this._mirroredCameraPosition),
          QU = this.floatingOriginOffset,
          AU = zz.set(cU.x, cU.y, cU.z, yU ? -1 : 1),
          FU = AU.subtractFromFloatsToRef(QU.x, QU.y, QU.z, 0, cz);
        return UU && (zU ? UU.setFloat3(XU, FU.x, FU.y, FU.z) : UU.setVector4(XU, FU)), AU
      }
      finalizeSceneUbo() {
        const UU = this.getSceneUniformBuffer(),
          XU = this.bindEyePosition(null),
          zU = this.floatingOriginOffset;
        return UU.updateFloat4("vEyePosition", XU.x - zU.x, XU.y - zU.y, XU.z - zU.z, XU.w), UU.update(), UU
      }
      set useRightHandedSystem(UU) {
        this._useRightHandedSystem !== UU && (this._useRightHandedSystem = UU, this.markAllMaterialsAsDirty(16))
      }
      get useRightHandedSystem() {
        return this._useRightHandedSystem
      }
      setStepId(UU) {
        this._currentStepId = UU
      }
      getStepId() {
        return this._currentStepId
      }
      getInternalStep() {
        return this._currentInternalStep
      }
      set fogEnabled(UU) {
        this._fogEnabled !== UU && (this._fogEnabled = UU, this.markAllMaterialsAsDirty(16))
      }
      get fogEnabled() {
        return this._fogEnabled
      }
      set fogMode(UU) {
        this._fogMode !== UU && (this._fogMode = UU, this.markAllMaterialsAsDirty(16))
      }
      get fogMode() {
        return this._fogMode
      }
      get prePass() {
        return !!this.prePassRenderer && this.prePassRenderer.defaultRT.enabled
      }
      set shadowsEnabled(UU) {
        this._shadowsEnabled !== UU && (this._shadowsEnabled = UU, this.markAllMaterialsAsDirty(2))
      }
      get shadowsEnabled() {
        return this._shadowsEnabled
      }
      set lightsEnabled(UU) {
        this._lightsEnabled !== UU && (this._lightsEnabled = UU, this.markAllMaterialsAsDirty(2))
      }
      get lightsEnabled() {
        return this._lightsEnabled
      }
      get activeCameras() {
        return this._activeCameras
      }
      set activeCameras(UU) {
        this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), UU && (this._unObserveActiveCameras = (0, bU.i)(UU, (() => {
          this.onActiveCamerasChanged.notifyObservers(this)
        }))), this._activeCameras = UU
      }
      get activeCamera() {
        return this._activeCamera
      }
      set activeCamera(UU) {
        UU !== this._activeCamera && (this._activeCamera = UU, this.onActiveCameraChanged.notifyObservers(this))
      }
      get _hasDefaultMaterial() {
        return Qz.DefaultMaterialFactory !== Qz._OriginalDefaultMaterialFactory
      }
      get defaultMaterial() {
        return this._defaultMaterial || (this._defaultMaterial = Qz.DefaultMaterialFactory(this)), this._defaultMaterial
      }
      set defaultMaterial(UU) {
        this._defaultMaterial = UU
      }
      set texturesEnabled(UU) {
        this._texturesEnabled !== UU && (this._texturesEnabled = UU, this.markAllMaterialsAsDirty(1))
      }
      get texturesEnabled() {
        return this._texturesEnabled
      }
      get frameGraph() {
        return this._frameGraph
      }
      set frameGraph(UU) {
        if (this._frameGraph) return this._frameGraph = UU, void(UU || (this.customRenderFunction = this._currentCustomRenderFunction));
        this._frameGraph = UU, UU && (this._currentCustomRenderFunction = this.customRenderFunction, this.customRenderFunction = this._renderWithFrameGraph, this.activeCamera = null)
      }
      set skeletonsEnabled(UU) {
        this._skeletonsEnabled !== UU && (this._skeletonsEnabled = UU, this.markAllMaterialsAsDirty(8))
      }
      get skeletonsEnabled() {
        return this._skeletonsEnabled
      }
      get collisionCoordinator() {
        return this._collisionCoordinator || (this._collisionCoordinator = Qz.CollisionCoordinatorFactory(), this._collisionCoordinator.init(this)), this._collisionCoordinator
      }
      get renderingManager() {
        return this._renderingManager
      }
      get frustumPlanes() {
        return this._frustumPlanes
      }
      _registerTransientComponents() {
        if (this._transientComponents.length > 0) {
          for (const UU of this._transientComponents) UU.register();
          this._transientComponents.length = 0
        }
      }
      ncU(UU) {
        this._components.push(UU), this._transientComponents.push(UU);
        const XU = UU;
        XU.addFromContainer && XU.serialize && this._serializableComponents.push(XU)
      }
      _getComponent(UU) {
        for (const XU of this._components)
          if (XU.name === UU) return XU;
        return null
      }
      get uniqueId() {
        return this._uniqueId
      }
      constructor(UU, XU) {
        this._inputManager = new nU(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new lU.e(.2, .2, .3, 1), this.onClearColorChangedObservable = new AU.e, this.ambientColor = new lU.b(0, 0, 0), this.environmentIntensity = 1, this.iblIntensity = 1, this._performancePriority = 0, this.onScenePerformancePriorityChangedObservable = new AU.e, this._forceWireframe = !1, this._skipFrustumClipping = !1, this._forcePointsCloud = !1, this.rootNodes = [], this.cameras = [], this.lights = [], this.meshes = [], this.skeletons = [], this.nB = [], this.animations = [], this.animationGroups = [], this.multiMaterials = [], this.materials = [], this.morphTargetManagers = [], this.geometries = [], this.transformNodes = [], this.actionManagers = [], this.objectRenderers = [], this.textures = [], this._environmentTexture = null, this.postProcesses = [], this.effectLayers = [], this.sounds = null, this.layers = [], this.lensFlareSystems = [], this.proceduralTextures = [], this.animationsEnabled = !0, this._animationPropertiesOverride = null, this.useConstantAnimationDeltaTime = !1, this.constantlyUpdateMeshUnderPointer = !1, this.hoverCursor = "pointer", this.defaultCursor = "", this.doNotHandleCursors = !1, this.preventDefaultOnPointerDown = !0, this.preventDefaultOnPointerUp = !0, this.metadata = null, this.reservedDataStore = null, this.disableOfflineSupportExceptionRules = [], this.bS = new AU.e, this._onDisposeObserver = null, this.onBeforeRenderObservable = new AU.e, this._onBeforeRenderObserver = null, this.onAfterRenderObservable = new AU.e, this.onAfterRenderCameraObservable = new AU.e, this._onAfterRenderObserver = null, this.onBeforeAnimationsObservable = new AU.e, this.onAfterAnimationsObservable = new AU.e, this.onBeforeDrawPhaseObservable = new AU.e, this.onAfterDrawPhaseObservable = new AU.e, this.onReadyObservable = new AU.e, this.onBeforeCameraRenderObservable = new AU.e, this._onBeforeCameraRenderObserver = null, this.onAfterCameraRenderObservable = new AU.e, this._onAfterCameraRenderObserver = null, this.onBeforeActiveMeshesEvaluationObservable = new AU.e, this.onAfterActiveMeshesEvaluationObservable = new AU.e, this.onBeforeParticlesRenderingObservable = new AU.e, this.onAfterParticlesRenderingObservable = new AU.e, this.onDataLoadedObservable = new AU.e, this.onNewCameraAddedObservable = new AU.e, this.onCameraRemovedObservable = new AU.e, this.onNewLightAddedObservable = new AU.e, this.onLightRemovedObservable = new AU.e, this.onNewGeometryAddedObservable = new AU.e, this.onGeometryRemovedObservable = new AU.e, this.onNewTransformNodeAddedObservable = new AU.e, this.onTransformNodeRemovedObservable = new AU.e, this.onNewMeshAddedObservable = new AU.e, this.onMeshRemovedObservable = new AU.e, this.onNewSkeletonAddedObservable = new AU.e, this.onSkeletonRemovedObservable = new AU.e, this.onNewParticleSystemAddedObservable = new AU.e, this.onParticleSystemRemovedObservable = new AU.e, this.onNewAnimationGroupAddedObservable = new AU.e, this.onAnimationGroupRemovedObservable = new AU.e, this.onNewMaterialAddedObservable = new AU.e, this.onNewMultiMaterialAddedObservable = new AU.e, this.onMaterialRemovedObservable = new AU.e, this.onMultiMaterialRemovedObservable = new AU.e, this.onNewTextureAddedObservable = new AU.e, this.onTextureRemovedObservable = new AU.e, this.onNewFrameGraphAddedObservable = new AU.e, this.onFrameGraphRemovedObservable = new AU.e, this.onNewObjectRendererAddedObservable = new AU.e, this.onObjectRendererRemovedObservable = new AU.e, this.onNewPostProcessAddedObservable = new AU.e, this.onPostProcessRemovedObservable = new AU.e, this.onNewEffectLayerAddedObservable = new AU.e, this.onEffectLayerRemovedObservable = new AU.e, this.onBeforeRenderTargetsRenderObservable = new AU.e, this.onAfterRenderTargetsRenderObservable = new AU.e, this.onBeforeStepObservable = new AU.e, this.onAfterStepObservable = new AU.e, this.onActiveCameraChanged = new AU.e, this.onActiveCamerasChanged = new AU.e, this.onBeforeRenderingGroupObservable = new AU.e, this.onAfterRenderingGroupObservable = new AU.e, this.onMeshImportedObservable = new AU.e, this.onAnimationFileImportedObservable = new AU.e, this.onEnvironmentTextureChangedObservable = new AU.e, this.onMeshUnderPointerUpdatedObservable = new AU.e, this._registeredForLateAnimationBindings = new FU.c(256), this._pointerPickingConfiguration = new TU, this.onPrePointerObservable = new AU.e, this.onPointerObservable = new AU.e, this.onPreKeyboardObservable = new AU.e, this.onKeyboardObservable = new AU.e, this._useRightHandedSystem = !1, this._timeAccumulator = 0, this._currentStepId = 0, this._currentInternalStep = 0, this._fogEnabled = !0, this._fogMode = Qz.FOGMODE_NONE, this.fogColor = new lU.b(.2, .2, .3), this.fogDensity = .1, this.fogStart = 0, this.fogEnd = 1e3, this.needsPreviousWorldMatrices = !1, this._shadowsEnabled = !0, this._lightsEnabled = !0, this._unObserveActiveCameras = null, this._texturesEnabled = !0, this._frameGraph = null, this.frameGraphs = [], this.hV = !0, this.particlesEnabled = !0, this.spritesEnabled = !0, this._skeletonsEnabled = !0, this.lensFlaresEnabled = !0, this.collisionsEnabled = !0, this.gravity = new EU.q(0, -9.807, 0), this.postProcessesEnabled = !0, this.renderTargetsEnabled = !0, this.dumpNextRenderTargets = !1, this.customRenderTargets = [], this.importedMeshesFiles = [], this.probesEnabled = !0, this._meshesForIntersections = new FU.c(256), this.proceduralTexturesEnabled = !0, this._totalVertices = new mU.b, this._activeIndices = new mU.b, this._activeParticles = new mU.b, this._activeBones = new mU.b, this._animationTime = 0, this.animationTimeScale = 1, this._renderId = 0, this._frameId = 0, this._renderingMeshEvaluationDepth = 0, this._executeWhenReadyTimeoutId = null, this._intermediateRendering = !1, this._defaultFrameBufferCleared = !1, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1, this._toBeDisposed = new Array(256), this._activeRequests = new Array, this._delayedFileRequests = null, this._pendingData = [], this._isDisposed = !1, this._isDisposing = !1, this._isReadyChecks = [], this.dispatchAllSubMeshesOfActiveMeshes = !1, this._activeMeshes = new FU.d(256), this._processedMaterials = new FU.d(256), this._renderTargets = new FU.c(256), this._materialsRenderTargets = new FU.c(256), this._activeParticleSystems = new FU.d(256), this._activeSkeletons = new FU.c(32), this._softwareSkinnedMeshes = new FU.c(32), this._activeAnimatables = new Array, this._animationWrites = new Array, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, this._transformMatrix = EU.e.Zero(), this.requireLightSorting = !1, this._components = [], this._serializableComponents = [], this._transientComponents = [], this._beforeCameraUpdateStage = kU.h.Create(), this._beforeClearStage = kU.h.Create(), this._beforeRenderTargetClearStage = kU.h.Create(), this._gatherRenderTargetsStage = kU.h.Create(), this._gatherActiveCameraRenderTargetsStage = kU.h.Create(), this._isReadyForMeshStage = kU.h.Create(), this._beforeEvaluateActiveMeshStage = kU.h.Create(), this._evaluateSubMeshStage = kU.h.Create(), this._preActiveMeshStage = kU.h.Create(), this._cameraDrawRenderTargetStage = kU.h.Create(), this._beforeCameraDrawStage = kU.h.Create(), this._beforeRenderTargetDrawStage = kU.h.Create(), this._beforeRenderingGroupDrawStage = kU.h.Create(), this._beforeRenderingMeshStage = kU.h.Create(), this._afterRenderingMeshStage = kU.h.Create(), this._afterRenderingGroupDrawStage = kU.h.Create(), this._afterCameraDrawStage = kU.h.Create(), this._afterCameraPostProcessStage = kU.h.Create(), this._afterRenderTargetDrawStage = kU.h.Create(), this._afterRenderTargetPostProcessStage = kU.h.Create(), this._afterRenderStage = kU.h.Create(), this._pointerMoveStage = kU.h.Create(), this._pointerDownStage = kU.h.Create(), this._pointerUpStage = kU.h.Create(), this._geometriesByUniqueId = null, this._uniqueId = 0, this._defaultMeshCandidates = {
          data: [],
          length: 0
        }, this._defaultSubMeshCandidates = {
          data: [],
          length: 0
        }, this.onReadyTimeoutObservable = new AU.e, this.onReadyTimeoutDuration = 12e4, this._timeoutChecksStartTime = 0, this._floatingOriginScene = void 0, this._preventFreeActiveMeshesAndRenderingGroups = !1, this._activeMeshesFrozen = !1, this._activeMeshesFrozenButKeepClipping = !1, this._skipEvaluateActiveMeshesCompletely = !1, this._freezeActiveMeshesCancel = null, this._useCurrentFrameBuffer = !1, this._allowPostProcessClearColor = !0, this.getDeterministicFrameTime = () => this._engine.getTimeStep(), this._getFloatingOriginScene = () => this._floatingOriginScene, this._registeredActions = 0, this._blockMaterialDirtyMechanism = !1, this._perfCollector = null, this.activeCameras = [], this._uniqueId = this.getUniqueId();
        const zU = {
          useGeometryUniqueIdsMap: !0,
          useMaterialMeshMap: !0,
          useClonedMeshMap: !0,
          virtual: !1,
          defaultCameraLayerMask: 268435455,
          defaultRenderableLayerMask: 268435455,
          ...XU
        };
        this.defaultCameraLayerMask = zU.defaultCameraLayerMask, this.defaultRenderableLayerMask = zU.defaultRenderableLayerMask, UU = this._engine = UU || BU.b.LastCreatedEngine, zU.virtual ? UU._virtualScenes.push(this) : (BU.b._LastCreatedScene = this, UU.scenes.push(this)), (UU.getCreationOptions().useLargeWorldRendering || XU?.useFloatingOrigin) && ((0, tU.h)(), this._floatingOriginScene = this, tU.d.nS = this._getFloatingOriginScene), this._uid = null, this._renderingManager = new gU.e(this), aU.e && (this.postProcessManager = new aU.e(this)), (0, GU.h)() && this.attachControl(), this._createUbo(), YU.b && (this._imageProcessingConfiguration = new YU.b), this.setDefaultCandidateProviders(), zU.useGeometryUniqueIdsMap && (this._geometriesByUniqueId = {}), this.useMaterialMeshMap = zU.useMaterialMeshMap, this.useClonedMeshMap = zU.useClonedMeshMap, XU && XU.virtual || UU.onNewSceneAddedObservable.notifyObservers(this)
      }
      getClassName() {
        return "Scene"
      }
      _getDefaultMeshCandidates() {
        return this._defaultMeshCandidates.data = this.meshes, this._defaultMeshCandidates.length = this.meshes.length, this._defaultMeshCandidates
      }
      _getDefaultSubMeshCandidates(UU) {
        return this._defaultSubMeshCandidates.data = UU.uB, this._defaultSubMeshCandidates.length = UU.uB.length, this._defaultSubMeshCandidates
      }
      setDefaultCandidateProviders() {
        this.getActiveMeshCandidates = () => this._getDefaultMeshCandidates(), this.getActiveSubMeshCandidates = UU => this._getDefaultSubMeshCandidates(UU), this.getIntersectingSubMeshCandidates = (UU, XU) => this._getDefaultSubMeshCandidates(UU), this.getCollidingSubMeshCandidates = (UU, XU) => this._getDefaultSubMeshCandidates(UU)
      }
      get meshUnderPointer() {
        return this._inputManager.meshUnderPointer
      }
      get pointerX() {
        return this._inputManager.pointerX
      }
      set pointerX(UU) {
        this._inputManager.pointerX = UU
      }
      get pointerY() {
        return this._inputManager.pointerY
      }
      set pointerY(UU) {
        this._inputManager.pointerY = UU
      }
      getCachedMaterial() {
        return this._cachedMaterial
      }
      getCachedEffect() {
        return this._cachedEffect
      }
      getCachedVisibility() {
        return this._cachedVisibility
      }
      isCachedMaterialInvalid(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this._cachedEffect !== XU || this._cachedMaterial !== UU || this._cachedVisibility !== zU
      }
      qp() {
        return this._engine
      }
      getTotalVertices() {
        return this._totalVertices.current
      }
      get totalVerticesPerfCounter() {
        return this._totalVertices
      }
      getActiveIndices() {
        return this._activeIndices.current
      }
      get totalActiveIndicesPerfCounter() {
        return this._activeIndices
      }
      getActiveParticles() {
        return this._activeParticles.current
      }
      get activeParticlesPerfCounter() {
        return this._activeParticles
      }
      getActiveBones() {
        return this._activeBones.current
      }
      get activeBonesPerfCounter() {
        return this._activeBones
      }
      getActiveMeshes() {
        return this._activeMeshes
      }
      getAnimationRatio() {
        return void 0 !== this._animationRatio ? this._animationRatio : 1
      }
      getRenderId() {
        return this._renderId
      }
      getFrameId() {
        return this._frameId
      }
      incrementRenderId() {
        this._renderId++
      }
      _createUbo() {
        this.setSceneUniformBuffer(this.createSceneUniformBuffer())
      }
      simulatePointerMove(UU, XU) {
        return this._inputManager.simulatePointerMove(UU, XU), this
      }
      simulatePointerDown(UU, XU) {
        return this._inputManager.simulatePointerDown(UU, XU), this
      }
      simulatePointerUp(UU, XU, zU) {
        return this._inputManager.simulatePointerUp(UU, XU, zU), this
      }
      isPointerCaptured() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._inputManager.isPointerCaptured(UU)
      }
      attachControl() {
        let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          zU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._inputManager.attachControl(UU, XU, zU)
      }
      detachControl() {
        this._inputManager.detachControl()
      }
      isReady() {
        let UU, XU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._isDisposed) return !1;
        const zU = this.qp(),
          cU = zU.currentRenderPassId;
        zU.currentRenderPassId = this.activeCamera?.renderPassId ?? cU;
        let yU = !0;
        for (this._pendingData.length > 0 && (yU = !1), this.prePassRenderer?.update(), this.useOrderIndependentTransparency && this.depthPeelingRenderer && yU && (yU = this.depthPeelingRenderer.isReady()), XU && (this._processedMaterials.reset(), this._materialsRenderTargets.reset()), UU = 0; UU < this.meshes.length; UU++) {
          const cU = this.meshes[UU];
          if (!cU.uB || 0 === cU.uB.length) continue;
          if (!cU.isReady(!0)) {
            yU = !1;
            continue
          }
          const QU = cU.hasThinInstances || "InstancedMesh" === cU.getClassName() || "InstancedLinesMesh" === cU.getClassName() || zU.getCaps().instancedArrays && cU.instances.length > 0;
          for (let UU = 0, XU = this._isReadyForMeshStage; UU < XU.length; UU++) {
            XU[UU].action(cU, QU) || (yU = !1)
          }
          if (!XU) continue;
          const AU = cU.material || this.defaultMaterial;
          if (AU)
            if (AU._storeEffectOnSubMeshes)
              for (const UU of cU.uB) {
                const XU = UU.Hp();
                XU && XU.hasRenderTargetTextures && null != XU.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(XU) && (this._processedMaterials.push(XU), this._materialsRenderTargets.concatWithNoDuplicate(XU.getRenderTargetTextures()))
              } else AU.hasRenderTargetTextures && null != AU.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(AU) && (this._processedMaterials.push(AU), this._materialsRenderTargets.concatWithNoDuplicate(AU.getRenderTargetTextures()))
        }
        if (XU) {
          for (UU = 0; UU < this._materialsRenderTargets.length; ++UU) {
            this._materialsRenderTargets.data[UU].isReadyForRendering() || (yU = !1)
          }
          for (UU = 0; UU < this.customRenderTargets.length; ++UU) {
            this.customRenderTargets[UU].isReadyForRendering() || (yU = !1)
          }
        }
        for (UU = 0; UU < this.geometries.length; UU++) {
          2 === this.geometries[UU].delayLoadState && (yU = !1)
        }
        if (this.activeCameras && this.activeCameras.length > 0)
          for (const QU of this.activeCameras) QU.isReady(!0) || (yU = !1);
        else this.activeCamera && (this.activeCamera.isReady(!0) || (yU = !1));
        for (const QU of this.nB) QU.isReady() || (yU = !1);
        if (this.proceduralTexturesEnabled)
          for (const QU of this.proceduralTextures) QU.isReady() || (yU = !1);
        if (this.layers)
          for (const QU of this.layers) QU.isReady() || (yU = !1);
        if (this.effectLayers)
          for (const QU of this.effectLayers) QU.isLayerReady() || (yU = !1);
        for (const QU of this._isReadyChecks) QU.isReady() || (yU = !1);
        return zU.areAllEffectsReady() || (yU = !1), zU.currentRenderPassId = cU, yU
      }
      resetCachedMaterial() {
        this._cachedMaterial = null, this._cachedEffect = null, this._cachedVisibility = null
      }
      registerBeforeRender(UU) {
        this.onBeforeRenderObservable.add(UU)
      }
      unregisterBeforeRender(UU) {
        this.onBeforeRenderObservable.removeCallback(UU)
      }
      registerAfterRender(UU) {
        this.onAfterRenderObservable.add(UU)
      }
      unregisterAfterRender(UU) {
        this.onAfterRenderObservable.removeCallback(UU)
      }
      _executeOnceBeforeRender(UU) {
        const XU = () => {
          UU(), setTimeout((() => {
            this.unregisterBeforeRender(XU)
          }))
        };
        this.registerBeforeRender(XU)
      }
      executeOnceBeforeRender(UU, XU) {
        void 0 !== XU ? setTimeout((() => {
          this._executeOnceBeforeRender(UU)
        }), XU) : this._executeOnceBeforeRender(UU)
      }
      addPendingData(UU) {
        this._pendingData.push(UU)
      }
      removePendingData(UU) {
        const XU = this.isLoading,
          zU = this._pendingData.indexOf(UU); - 1 !== zU && this._pendingData.splice(zU, 1), XU && !this.isLoading && this.onDataLoadedObservable.notifyObservers(this)
      }
      getWaitingItemsCount() {
        return this._pendingData.length
      }
      get isLoading() {
        return this._pendingData.length > 0
      }
      addIsReadyCheck(UU) {
        -1 === this._isReadyChecks.indexOf(UU) && this._isReadyChecks.push(UU)
      }
      removeIsReadyCheck(UU) {
        const XU = this._isReadyChecks.indexOf(UU); - 1 !== XU && this._isReadyChecks.splice(XU, 1)
      }
      executeWhenReady(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.onReadyObservable.addOnce(UU), null === this._executeWhenReadyTimeoutId && this._checkIsReady(XU)
      }
      async whenReadyAsync() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return await new Promise((XU => {
          this.executeWhenReady((() => {
            XU()
          }), UU)
        }))
      }
      _clearReadynessChecksData() {
        this._timeoutChecksStartTime = 0, this.onReadyTimeoutObservable.clear(), this.onReadyObservable.clear(), this._executeWhenReadyTimeoutId = null
      }
      _checkIsReady() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = QU.e.Now;
        else if (this.onReadyTimeoutDuration > 0 && QU.e.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
        if (this.isReady(UU)) return this.onReadyObservable.notifyObservers(this), void this._clearReadynessChecksData();
        this._isDisposed ? this._clearReadynessChecksData() : this._executeWhenReadyTimeoutId = setTimeout((() => {
          this.incrementRenderId(), this._checkIsReady(UU)
        }), 100)
      }
      get animatables() {
        return this._activeAnimatables
      }
      resetLastAnimationTimeFrame() {
        this._animationTimeLast = QU.e.Now
      }
      getViewMatrix() {
        return this._viewMatrix
      }
      getProjectionMatrix() {
        return this._projectionMatrix
      }
      getInverseProjectionMatrix() {
        return this._inverseProjectionMatrix
      }
      getTransformMatrix() {
        return this._transformMatrix
      }
      setTransformMatrix(UU, XU, zU, cU) {
        this._multiviewSceneUboIsActive = !!(zU && cU && this._multiviewSceneUbo), this._viewUpdateFlag === UU.updateFlag && this._projectionUpdateFlag === XU.updateFlag || (this._viewUpdateFlag = UU.updateFlag, this._projectionUpdateFlag = XU.updateFlag, this._viewMatrix = UU, this._projectionMatrix = XU, this._inverseProjectionMatrix || (this._inverseProjectionMatrix = new EU.e), this._projectionMatrix.invertToRef(this._inverseProjectionMatrix), this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._frustumPlanes ? xU.d.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = xU.d.GetPlanes(this._transformMatrix), this._multiviewSceneUboIsActive && this._multiviewSceneUbo.useUbo ? this._updateMultiviewUbo(zU, cU) : this._sceneUbo.useUbo && (this._sceneUbo.eUU("viewProjection", this._transformMatrix), this._sceneUbo.eUU("view", this._viewMatrix), this._sceneUbo.eUU("projection", this._projectionMatrix), this._sceneUbo.eUU("inverseProjection", this._inverseProjectionMatrix)))
      }
      getSceneUniformBuffer() {
        return this._multiviewSceneUboIsActive && this._multiviewSceneUbo ? this._multiviewSceneUbo : this._sceneUbo
      }
      createSceneUniformBuffer(UU, XU) {
        const zU = "boolean" === typeof XU ? XU : XU?.trackUBOsInFrame,
          cU = new NU.b(this._engine, void 0, !1, UU ?? "sa", void 0, zU);
        return cU.addUniform("viewProjection", 16), cU.addUniform("view", 16), cU.addUniform("projection", 16), cU.addUniform("vEyePosition", 4), cU.addUniform("inverseProjection", 16), cU
      }
      setSceneUniformBuffer(UU) {
        this._sceneUbo = UU, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1
      }
      get floatingOriginMode() {
        return void 0 !== this._floatingOriginScene
      }
      get floatingOriginOffset() {
        return this.floatingOriginMode ? this._eyePosition : EU.q.ZeroReadOnly
      }
      getUniqueId() {
        return JU.UniqueId
      }
      UyU(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this._blockEntityCollection && (this.meshes.push(UU), UU._resyncLightSources(), UU.parent || UU._addToSceneRootNodes(), yU.e.SetImmediate((() => {
            this.onNewMeshAddedObservable.notifyObservers(UU)
          })), XU)) {
          const XU = UU.getChildMeshes();
          for (const UU of XU) this.UyU(UU)
        }
      }
      ZH(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const zU = this.meshes.indexOf(UU);
        if (-1 !== zU && (this.meshes.splice(zU, 1), UU.parent || UU._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(UU), this.onMeshRemovedObservable.notifyObservers(UU), XU) {
          const XU = UU.getChildMeshes();
          for (const UU of XU) this.ZH(UU)
        }
        return zU
      }
      addTransformNode(UU) {
        this._blockEntityCollection || UU.nS() === this && -1 !== UU._indexInSceneTransformNodesArray || (UU._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(UU), UU.parent || UU._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable.notifyObservers(UU))
      }
      removeTransformNode(UU) {
        const XU = UU._indexInSceneTransformNodesArray;
        if (-1 !== XU) {
          if (XU !== this.transformNodes.length - 1) {
            const UU = this.transformNodes[this.transformNodes.length - 1];
            this.transformNodes[XU] = UU, UU._indexInSceneTransformNodesArray = XU
          }
          UU._indexInSceneTransformNodesArray = -1, this.transformNodes.pop(), UU.parent || UU._removeFromSceneRootNodes()
        }
        return this.onTransformNodeRemovedObservable.notifyObservers(UU), XU
      }
      removeSkeleton(UU) {
        const XU = this.skeletons.indexOf(UU);
        return -1 !== XU && (this.skeletons.splice(XU, 1), this.onSkeletonRemovedObservable.notifyObservers(UU), this._executeActiveContainerCleanup(this._activeSkeletons)), XU
      }
      removeMorphTargetManager(UU) {
        const XU = this.morphTargetManagers.indexOf(UU);
        return -1 !== XU && this.morphTargetManagers.splice(XU, 1), XU
      }
      removeLight(UU) {
        const XU = this.lights.indexOf(UU);
        if (-1 !== XU) {
          for (const XU of this.meshes) XU._removeLightSource(UU, !1);
          this.lights.splice(XU, 1), this.sortLightsByPriority(), UU.parent || UU._removeFromSceneRootNodes(), this.onLightRemovedObservable.notifyObservers(UU)
        }
        return XU
      }
      removeCamera(UU) {
        const XU = this.cameras.indexOf(UU);
        if (-1 !== XU && (this.cameras.splice(XU, 1), UU.parent || UU._removeFromSceneRootNodes()), this.activeCameras) {
          const XU = this.activeCameras.indexOf(UU); - 1 !== XU && this.activeCameras.splice(XU, 1)
        }
        return this.activeCamera === UU && (this.cameras.length > 0 ? this.activeCamera = this.cameras[0] : this.activeCamera = null), this.onCameraRemovedObservable.notifyObservers(UU), XU
      }
      removeParticleSystem(UU) {
        const XU = this.nB.indexOf(UU);
        return -1 !== XU && (this.nB.splice(XU, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(UU), XU
      }
      removeAnimation(UU) {
        const XU = this.animations.indexOf(UU);
        return -1 !== XU && this.animations.splice(XU, 1), XU
      }
      stopAnimation(UU, XU, zU) {}
      removeAnimationGroup(UU) {
        const XU = this.animationGroups.indexOf(UU);
        return -1 !== XU && this.animationGroups.splice(XU, 1), this.onAnimationGroupRemovedObservable.notifyObservers(UU), XU
      }
      removeMultiMaterial(UU) {
        const XU = this.multiMaterials.indexOf(UU);
        return -1 !== XU && this.multiMaterials.splice(XU, 1), this.onMultiMaterialRemovedObservable.notifyObservers(UU), XU
      }
      removeMaterial(UU) {
        const XU = UU._indexInSceneMaterialArray;
        if (-1 !== XU && XU < this.materials.length) {
          if (XU !== this.materials.length - 1) {
            const UU = this.materials[this.materials.length - 1];
            this.materials[XU] = UU, UU._indexInSceneMaterialArray = XU
          }
          UU._indexInSceneMaterialArray = -1, this.materials.pop()
        }
        return this.onMaterialRemovedObservable.notifyObservers(UU), XU
      }
      removeActionManager(UU) {
        const XU = this.actionManagers.indexOf(UU);
        return -1 !== XU && this.actionManagers.splice(XU, 1), XU
      }
      removeTexture(UU) {
        const XU = this.textures.indexOf(UU);
        return -1 !== XU && this.textures.splice(XU, 1), this.onTextureRemovedObservable.notifyObservers(UU), XU
      }
      removeFrameGraph(UU) {
        const XU = this.frameGraphs.indexOf(UU);
        return -1 !== XU && this.frameGraphs.splice(XU, 1), this.onFrameGraphRemovedObservable.notifyObservers(UU), XU
      }
      removeObjectRenderer(UU) {
        const XU = this.objectRenderers.indexOf(UU);
        return -1 !== XU && this.objectRenderers.splice(XU, 1), this.onObjectRendererRemovedObservable.notifyObservers(UU), XU
      }
      removePostProcess(UU) {
        const XU = this.postProcesses.indexOf(UU);
        return -1 !== XU && this.postProcesses.splice(XU, 1), this.onPostProcessRemovedObservable.notifyObservers(UU), XU
      }
      removeEffectLayer(UU) {
        const XU = this.effectLayers.indexOf(UU);
        return -1 !== XU && this.effectLayers.splice(XU, 1), this.onEffectLayerRemovedObservable.notifyObservers(UU), XU
      }
      addLight(UU) {
        if (!this._blockEntityCollection) {
          this.lights.push(UU), this.sortLightsByPriority(), UU.parent || UU._addToSceneRootNodes();
          for (const XU of this.meshes) - 1 === XU.lightSources.indexOf(UU) && (XU.lightSources.push(UU), XU._resyncLightSources());
          yU.e.SetImmediate((() => {
            this.onNewLightAddedObservable.notifyObservers(UU)
          }))
        }
      }
      sortLightsByPriority() {
        this.requireLightSorting && this.lights.sort(KU.e.CompareLightsPriority)
      }
      addCamera(UU) {
        this._blockEntityCollection || (this.cameras.push(UU), yU.e.SetImmediate((() => {
          this.onNewCameraAddedObservable.notifyObservers(UU)
        })), UU.parent || UU._addToSceneRootNodes())
      }
      addSkeleton(UU) {
        this._blockEntityCollection || (this.skeletons.push(UU), yU.e.SetImmediate((() => {
          this.onNewSkeletonAddedObservable.notifyObservers(UU)
        })))
      }
      addParticleSystem(UU) {
        this._blockEntityCollection || (this.nB.push(UU), yU.e.SetImmediate((() => {
          this.onNewParticleSystemAddedObservable.notifyObservers(UU)
        })))
      }
      addAnimation(UU) {
        this._blockEntityCollection || this.animations.push(UU)
      }
      addAnimationGroup(UU) {
        this._blockEntityCollection || (this.animationGroups.push(UU), yU.e.SetImmediate((() => {
          this.onNewAnimationGroupAddedObservable.notifyObservers(UU)
        })))
      }
      addMultiMaterial(UU) {
        this._blockEntityCollection || (this.multiMaterials.push(UU), yU.e.SetImmediate((() => {
          this.onNewMultiMaterialAddedObservable.notifyObservers(UU)
        })))
      }
      addMaterial(UU) {
        this._blockEntityCollection || UU.nS() === this && -1 !== UU._indexInSceneMaterialArray || (UU._indexInSceneMaterialArray = this.materials.length, this.materials.push(UU), yU.e.SetImmediate((() => {
          this.onNewMaterialAddedObservable.notifyObservers(UU)
        })))
      }
      addMorphTargetManager(UU) {
        this._blockEntityCollection || this.morphTargetManagers.push(UU)
      }
      addGeometry(UU) {
        this._blockEntityCollection || (this._geometriesByUniqueId && (this._geometriesByUniqueId[UU.uniqueId] = this.geometries.length), this.geometries.push(UU))
      }
      addActionManager(UU) {
        this.actionManagers.push(UU)
      }
      addTexture(UU) {
        this._blockEntityCollection || (this.textures.push(UU), this.onNewTextureAddedObservable.notifyObservers(UU))
      }
      addFrameGraph(UU) {
        this.frameGraphs.push(UU), yU.e.SetImmediate((() => {
          this.onNewFrameGraphAddedObservable.notifyObservers(UU)
        }))
      }
      addObjectRenderer(UU) {
        this.objectRenderers.push(UU), yU.e.SetImmediate((() => {
          this.onNewObjectRendererAddedObservable.notifyObservers(UU)
        }))
      }
      addPostProcess(UU) {
        this._blockEntityCollection || (this.postProcesses.push(UU), yU.e.SetImmediate((() => {
          this.onNewPostProcessAddedObservable.notifyObservers(UU)
        })))
      }
      addEffectLayer(UU) {
        this._blockEntityCollection || (this.effectLayers.push(UU), yU.e.SetImmediate((() => {
          this.onNewEffectLayerAddedObservable.notifyObservers(UU)
        })))
      }
      switchActiveCamera(UU) {
        let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._engine.getInputElement() && (this.activeCamera && this.activeCamera.detachControl(), this.activeCamera = UU, XU && UU.attachControl())
      }
      setActiveCameraById(UU) {
        const XU = this.getCameraById(UU);
        return XU ? (this.activeCamera = XU, XU) : null
      }
      setActiveCameraByName(UU) {
        const XU = this.getCameraByName(UU);
        return XU ? (this.activeCamera = XU, XU) : null
      }
      getAnimationGroupByName(UU) {
        for (let XU = 0; XU < this.animationGroups.length; XU++)
          if (this.animationGroups[XU].name === UU) return this.animationGroups[XU];
        return null
      }
      _getMaterial(UU, XU) {
        for (let zU = 0; zU < this.materials.length; zU++) {
          const UU = this.materials[zU];
          if (XU(UU)) return UU
        }
        if (UU)
          for (let zU = 0; zU < this.multiMaterials.length; zU++) {
            const UU = this.multiMaterials[zU];
            if (XU(UU)) return UU
          }
        return null
      }
      getMaterialByUniqueID(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.getMaterialByUniqueId(UU, XU)
      }
      getMaterialByUniqueId(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(XU, (XU => XU.uniqueId === UU))
      }
      getMaterialById(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(XU, (XU => XU.id === UU))
      }
      getMaterialByName(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(XU, (XU => XU.name === UU))
      }
      getLastMaterialById(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        for (let zU = this.materials.length - 1; zU >= 0; zU--)
          if (this.materials[zU].id === UU) return this.materials[zU];
        if (XU)
          for (let zU = this.multiMaterials.length - 1; zU >= 0; zU--)
            if (this.multiMaterials[zU].id === UU) return this.multiMaterials[zU];
        return null
      }
      getTextureByUniqueId(UU) {
        for (let XU = 0; XU < this.textures.length; XU++)
          if (this.textures[XU].uniqueId === UU) return this.textures[XU];
        return null
      }
      getTextureByName(UU) {
        for (let XU = 0; XU < this.textures.length; XU++)
          if (this.textures[XU].name === UU) return this.textures[XU];
        return null
      }
      getCameraById(UU) {
        for (let XU = 0; XU < this.cameras.length; XU++)
          if (this.cameras[XU].id === UU) return this.cameras[XU];
        return null
      }
      getCameraByUniqueId(UU) {
        for (let XU = 0; XU < this.cameras.length; XU++)
          if (this.cameras[XU].uniqueId === UU) return this.cameras[XU];
        return null
      }
      getCameraByName(UU) {
        for (let XU = 0; XU < this.cameras.length; XU++)
          if (this.cameras[XU].name === UU) return this.cameras[XU];
        return null
      }
      getBoneById(UU) {
        for (let XU = 0; XU < this.skeletons.length; XU++) {
          const zU = this.skeletons[XU];
          for (let XU = 0; XU < zU.bones.length; XU++)
            if (zU.bones[XU].id === UU) return zU.bones[XU]
        }
        return null
      }
      getBoneByName(UU) {
        for (let XU = 0; XU < this.skeletons.length; XU++) {
          const zU = this.skeletons[XU];
          for (let XU = 0; XU < zU.bones.length; XU++)
            if (zU.bones[XU].name === UU) return zU.bones[XU]
        }
        return null
      }
      getLightByName(UU) {
        for (let XU = 0; XU < this.lights.length; XU++)
          if (this.lights[XU].name === UU) return this.lights[XU];
        return null
      }
      getLightById(UU) {
        for (let XU = 0; XU < this.lights.length; XU++)
          if (this.lights[XU].id === UU) return this.lights[XU];
        return null
      }
      getLightByUniqueId(UU) {
        for (let XU = 0; XU < this.lights.length; XU++)
          if (this.lights[XU].uniqueId === UU) return this.lights[XU];
        return null
      }
      getParticleSystemById(UU) {
        for (let XU = 0; XU < this.nB.length; XU++)
          if (this.nB[XU].id === UU) return this.nB[XU];
        return null
      }
      getGeometryById(UU) {
        for (let XU = 0; XU < this.geometries.length; XU++)
          if (this.geometries[XU].id === UU) return this.geometries[XU];
        return null
      }
      _getGeometryByUniqueId(UU) {
        if (this._geometriesByUniqueId) {
          const XU = this._geometriesByUniqueId[UU];
          if (void 0 !== XU) return this.geometries[XU]
        } else
          for (let XU = 0; XU < this.geometries.length; XU++)
            if (this.geometries[XU].uniqueId === UU) return this.geometries[XU];
        return null
      }
      getFrameGraphByName(UU) {
        for (let XU = 0; XU < this.frameGraphs.length; XU++)
          if (this.frameGraphs[XU].name === UU) return this.frameGraphs[XU];
        return null
      }
      pushGeometry(UU, XU) {
        return !(!XU && this._getGeometryByUniqueId(UU.uniqueId)) && (this.addGeometry(UU), yU.e.SetImmediate((() => {
          this.onNewGeometryAddedObservable.notifyObservers(UU)
        })), !0)
      }
      removeGeometry(UU) {
        let XU;
        if (this._geometriesByUniqueId) {
          if (XU = this._geometriesByUniqueId[UU.uniqueId], void 0 === XU) return !1
        } else if (XU = this.geometries.indexOf(UU), XU < 0) return !1;
        if (XU !== this.geometries.length - 1) {
          const UU = this.geometries[this.geometries.length - 1];
          UU && (this.geometries[XU] = UU, this._geometriesByUniqueId && (this._geometriesByUniqueId[UU.uniqueId] = XU))
        }
        return this._geometriesByUniqueId && (this._geometriesByUniqueId[UU.uniqueId] = void 0), this.geometries.pop(), this.onGeometryRemovedObservable.notifyObservers(UU), !0
      }
      getGeometries() {
        return this.geometries
      }
      getMeshById(UU) {
        for (let XU = 0; XU < this.meshes.length; XU++)
          if (this.meshes[XU].id === UU) return this.meshes[XU];
        return null
      }
      getMeshesById(UU) {
        return this.meshes.filter((function(XU) {
          return XU.id === UU
        }))
      }
      getTransformNodeById(UU) {
        for (let XU = 0; XU < this.transformNodes.length; XU++)
          if (this.transformNodes[XU].id === UU) return this.transformNodes[XU];
        return null
      }
      getTransformNodeByUniqueId(UU) {
        for (let XU = 0; XU < this.transformNodes.length; XU++)
          if (this.transformNodes[XU].uniqueId === UU) return this.transformNodes[XU];
        return null
      }
      getTransformNodesById(UU) {
        return this.transformNodes.filter((function(XU) {
          return XU.id === UU
        }))
      }
      getMeshByUniqueId(UU) {
        for (let XU = 0; XU < this.meshes.length; XU++)
          if (this.meshes[XU].uniqueId === UU) return this.meshes[XU];
        return null
      }
      getLastMeshById(UU) {
        for (let XU = this.meshes.length - 1; XU >= 0; XU--)
          if (this.meshes[XU].id === UU) return this.meshes[XU];
        return null
      }
      getLastTransformNodeById(UU) {
        for (let XU = this.transformNodes.length - 1; XU >= 0; XU--)
          if (this.transformNodes[XU].id === UU) return this.transformNodes[XU];
        return null
      }
      getLastEntryById(UU) {
        let XU;
        for (XU = this.meshes.length - 1; XU >= 0; XU--)
          if (this.meshes[XU].id === UU) return this.meshes[XU];
        for (XU = this.transformNodes.length - 1; XU >= 0; XU--)
          if (this.transformNodes[XU].id === UU) return this.transformNodes[XU];
        for (XU = this.cameras.length - 1; XU >= 0; XU--)
          if (this.cameras[XU].id === UU) return this.cameras[XU];
        for (XU = this.lights.length - 1; XU >= 0; XU--)
          if (this.lights[XU].id === UU) return this.lights[XU];
        for (XU = this.skeletons.length - 1; XU >= 0; XU--) {
          const zU = this.skeletons[XU];
          for (let XU = zU.bones.length - 1; XU >= 0; XU--)
            if (zU.bones[XU].id === UU) return zU.bones[XU]
        }
        return null
      }
      getNodeById(UU) {
        const XU = this.getMeshById(UU);
        if (XU) return XU;
        const zU = this.getTransformNodeById(UU);
        if (zU) return zU;
        const cU = this.getLightById(UU);
        if (cU) return cU;
        const yU = this.getCameraById(UU);
        if (yU) return yU;
        const QU = this.getBoneById(UU);
        return QU || null
      }
      getNodeByName(UU) {
        const XU = this.getMeshByName(UU);
        if (XU) return XU;
        const zU = this.getTransformNodeByName(UU);
        if (zU) return zU;
        const cU = this.getLightByName(UU);
        if (cU) return cU;
        const yU = this.getCameraByName(UU);
        if (yU) return yU;
        const QU = this.getBoneByName(UU);
        return QU || null
      }
      getMeshByName(UU) {
        for (let XU = 0; XU < this.meshes.length; XU++)
          if (this.meshes[XU].name === UU) return this.meshes[XU];
        return null
      }
      getTransformNodeByName(UU) {
        for (let XU = 0; XU < this.transformNodes.length; XU++)
          if (this.transformNodes[XU].name === UU) return this.transformNodes[XU];
        return null
      }
      getLastSkeletonById(UU) {
        for (let XU = this.skeletons.length - 1; XU >= 0; XU--)
          if (this.skeletons[XU].id === UU) return this.skeletons[XU];
        return null
      }
      getSkeletonByUniqueId(UU) {
        for (let XU = 0; XU < this.skeletons.length; XU++)
          if (this.skeletons[XU].uniqueId === UU) return this.skeletons[XU];
        return null
      }
      getSkeletonById(UU) {
        for (let XU = 0; XU < this.skeletons.length; XU++)
          if (this.skeletons[XU].id === UU) return this.skeletons[XU];
        return null
      }
      getSkeletonByName(UU) {
        for (let XU = 0; XU < this.skeletons.length; XU++)
          if (this.skeletons[XU].name === UU) return this.skeletons[XU];
        return null
      }
      getMorphTargetManagerById(UU) {
        for (let XU = 0; XU < this.morphTargetManagers.length; XU++)
          if (this.morphTargetManagers[XU].uniqueId === UU) return this.morphTargetManagers[XU];
        return null
      }
      getMorphTargetById(UU) {
        for (let XU = 0; XU < this.morphTargetManagers.length; ++XU) {
          const zU = this.morphTargetManagers[XU];
          for (let XU = 0; XU < zU.numTargets; ++XU) {
            const cU = zU.getTarget(XU);
            if (cU.id === UU) return cU
          }
        }
        return null
      }
      getMorphTargetByName(UU) {
        for (let XU = 0; XU < this.morphTargetManagers.length; ++XU) {
          const zU = this.morphTargetManagers[XU];
          for (let XU = 0; XU < zU.numTargets; ++XU) {
            const cU = zU.getTarget(XU);
            if (cU.name === UU) return cU
          }
        }
        return null
      }
      getPostProcessByName(UU) {
        for (let XU = 0; XU < this.postProcesses.length; ++XU) {
          const zU = this.postProcesses[XU];
          if (zU.name === UU) return zU
        }
        return null
      }
      isActiveMesh(UU) {
        return -1 !== this._activeMeshes.indexOf(UU)
      }
      get uid() {
        return this._uid || (this._uid = cU.j.RandomId()), this._uid
      }
      addExternalData(UU, XU) {
        return this._externalData || (this._externalData = new oU), this._externalData.add(UU, XU)
      }
      getExternalData(UU) {
        return this._externalData ? this._externalData.get(UU) : null
      }
      getOrAddExternalDataWithFactory(UU, XU) {
        return this._externalData || (this._externalData = new oU), this._externalData.getOrAddWithFactory(UU, XU)
      }
      removeExternalData(UU) {
        return this._externalData.remove(UU)
      }
      _evaluateSubMesh(UU, XU, zU, cU) {
        if (cU || UU.isInFrustum(this._frustumPlanes)) {
          for (let cU = 0, yU = this._evaluateSubMeshStage; cU < yU.length; cU++) {
            yU[cU].action(XU, UU)
          }
          const zU = UU.Hp();
          null !== zU && void 0 !== zU && (zU.hasRenderTargetTextures && null != zU.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(zU) && (this._processedMaterials.push(zU), this._materialsRenderTargets.concatWithNoDuplicate(zU.getRenderTargetTextures())), this._renderingManager.dispatch(UU, XU, zU))
        }
      }
      freeProcessedMaterials() {
        this._processedMaterials.dispose()
      }
      get blockfreeActiveMeshesAndRenderingGroups() {
        return this._preventFreeActiveMeshesAndRenderingGroups
      }
      set blockfreeActiveMeshesAndRenderingGroups(UU) {
        this._preventFreeActiveMeshesAndRenderingGroups !== UU && (UU && (this.freeActiveMeshes(), this.freeRenderingGroups()), this._preventFreeActiveMeshesAndRenderingGroups = UU)
      }
      freeActiveMeshes() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._activeMeshes.dispose(), this.activeCamera && this.activeCamera._activeMeshes && this.activeCamera._activeMeshes.dispose(), this.activeCameras))
          for (let UU = 0; UU < this.activeCameras.length; UU++) {
            const XU = this.activeCameras[UU];
            XU && XU._activeMeshes && XU._activeMeshes.dispose()
          }
      }
      freeRenderingGroups() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures))
          for (let UU = 0; UU < this.textures.length; UU++) {
            const XU = this.textures[UU];
            XU && XU.renderList && XU.freeRenderingGroups()
          }
      }
      _isInIntermediateRendering() {
        return this._intermediateRendering
      }
      _isInRenderingMeshEvaluation() {
        return this._renderingMeshEvaluationDepth > 0
      }
      freezeActiveMeshes() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          XU = arguments.length > 1 ? arguments[1] : void 0,
          zU = arguments.length > 2 ? arguments[2] : void 0,
          cU = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          QU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.frameGraph) {
          this._renderWithFrameGraph(!0, !1, !0);
          const AU = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const UU of AU) UU.objectRenderer._freezeActiveMeshes(cU);
          return this._freezeActiveMeshesCancel = (0, yU.h)((() => {
            let UU = !0,
              XU = !0;
            for (const zU of AU) UU && (UU = zU.objectRenderer._isFrozen), XU && (XU = null !== zU.objectRenderer._freezeActiveMeshesCancel);
            if (UU) return !0;
            if (!XU) throw new Error("Freezing active meshes was cancelled");
            return !1
          }), (() => {
            this._freezeActiveMeshesCancel = null, this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = QU, this._skipEvaluateActiveMeshesCompletely = UU, XU?.()
          }), ((UU, XU) => {
            if (this._freezeActiveMeshesCancel = null, this.unfreezeActiveMeshes(), XU) {
              const XU = "Scene: Timeout while waiting for meshes to be frozen.";
              zU ? zU(XU) : (Uz.b.Error(XU), UU && Uz.b.Error(UU))
            } else {
              const XU = "Scene: An unexpected error occurred while trying to freeze active meshes.";
              zU ? zU(XU) : (Uz.b.Error(XU), UU && (Uz.b.Error(UU), UU.stack && Uz.b.Error(UU.stack)))
            }
          })), this
        }
        return this.executeWhenReady((() => {
          if (this.activeCamera) {
            if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = QU, this._skipEvaluateActiveMeshesCompletely = UU, cU)
              for (let UU = 0; UU < this._activeMeshes.length; UU++) this._activeMeshes.data[UU]._freeze();
            XU && XU()
          } else zU && zU("No active camera found")
        })), this
      }
      unfreezeActiveMeshes() {
        for (let UU = 0; UU < this.meshes.length; UU++) {
          const XU = this.meshes[UU];
          XU._internalAbstractMeshDataInfo && (XU._internalAbstractMeshDataInfo._isActive = !1)
        }
        if (this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null, this.frameGraph) {
          const UU = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const XU of UU) XU.objectRenderer._unfreezeActiveMeshes()
        } else
          for (let UU = 0; UU < this._activeMeshes.length; UU++) this._activeMeshes.data[UU]._unFreeze();
        return this._activeMeshesFrozen = !1, this
      }
      _executeActiveContainerCleanup(UU) {
        (!this._engine.snapshotRendering || 1 !== this._engine.snapshotRenderingMode) && this._activeMeshesFrozen && this._activeMeshes.length || this.onBeforeRenderObservable.addOnce((() => UU.dispose()))
      }
      _evaluateActiveMeshes() {
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) return void(this._activeMeshes.length > 0 && (this.activeCamera?._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset()));
        if (this._activeMeshesFrozen && this._activeMeshes.length) {
          if (!this._skipEvaluateActiveMeshesCompletely) {
            const UU = this._activeMeshes.length;
            for (let XU = 0; XU < UU; XU++) {
              this._activeMeshes.data[XU].computeWorldMatrix()
            }
          }
          if (this._activeParticleSystems) {
            const UU = this._activeParticleSystems.length;
            for (let XU = 0; XU < UU; XU++) this._activeParticleSystems.data[XU].animate()
          }
          return void this._renderingManager.resetSprites()
        }
        if (!this.activeCamera) return;
        this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset(), this._materialsRenderTargets.reset();
        for (let yU = 0, QU = this._beforeEvaluateActiveMeshStage; yU < QU.length; yU++) {
          QU[yU].action()
        }
        const UU = this.getActiveMeshCandidates(),
          XU = UU.length,
          zU = mU.b.Enabled,
          cU = this.customLODSelector;
        for (let yU = 0; yU < XU; yU++) {
          const XU = UU.data[yU],
            QU = !cU && !XU.UH && !XU._internalMeshDataInfo?._LODLevels.length;
          let AU, FU;
          if ((QU || (AU = XU._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), AU ? AU[1] = -1 : (AU = [XU, -1], XU._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, AU))), !XU.isBlocked) && (zU && this._totalVertices.addCount(XU.getTotalVertices(), !1), XU.isReady() && XU.isEnabled() && !XU.RY.hasAZeroComponent)) {
            if (XU.computeWorldMatrix(), XU.actionManager && XU.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(XU), QU) FU = XU;
            else if (FU = cU ? cU(XU, this.activeCamera) : XU.getLOD(this.activeCamera), AU[0] = FU, AU[1] = this._frameId, void 0 === FU || null === FU) continue;
            if (FU !== XU && 0 !== FU.billboardMode && FU.computeWorldMatrix(), XU._preActivate(), XU.isVisible && XU.visibility > 0 && 0 !== (XU.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || XU.Op || XU.isInFrustum(this._frustumPlanes))) {
              this._activeMeshes.push(XU), this.activeCamera._activeMeshes.push(XU), FU !== XU && FU._activate(this._renderId, !1);
              for (let UU = 0, zU = this._preActiveMeshStage; UU < zU.length; UU++) {
                zU[UU].action(XU)
              }
              XU._activate(this._renderId, !1) && (XU.UH ? XU._internalAbstractMeshDataInfo._actAsRegularMesh && (FU = XU) : FU._internalAbstractMeshDataInfo._onlyForInstances = !1, FU._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(XU, FU)), XU._postActivate()
            }
          }
        }
        if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
          this.onBeforeParticlesRenderingObservable.notifyObservers(this);
          for (let UU = 0; UU < this.nB.length; UU++) {
            const XU = this.nB[UU];
            if (!XU.isStarted() || !XU.emitter) continue;
            const zU = XU.emitter;
            zU.position && !zU.isEnabled() || (this._activeParticleSystems.push(XU), XU.animate(), this._renderingManager.dispatchParticles(XU))
          }
          this.onAfterParticlesRenderingObservable.notifyObservers(this)
        }
      }
      _prepareSkeleton(UU) {
        this._skeletonsEnabled && UU.skeleton && (this._activeSkeletons.pushNoDuplicate(UU.skeleton) && (UU.skeleton.prepare(), this._activeBones.addCount(UU.skeleton.bones.length, !1)), UU.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(UU) && this.frameGraph && UU.applySkeleton(UU.skeleton))
      }
      _activeMesh(UU, XU) {
        this._prepareSkeleton(XU);
        let zU = UU.jyU || UU.UH || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || XU.Op;
        if (XU && XU.uB && XU.uB.length > 0) {
          const cU = this.getActiveSubMeshCandidates(XU),
            yU = cU.length;
          zU = zU || 1 === yU;
          for (let QU = 0; QU < yU; QU++) {
            const yU = cU.data[QU];
            this._evaluateSubMesh(yU, XU, UU, zU)
          }
        }
      }
      updateTransformMatrix(UU) {
        const XU = this.activeCamera;
        if (XU)
          if (XU._renderingMultiview) {
            const zU = XU._rigCameras[0],
              cU = XU._rigCameras[1];
            this.setTransformMatrix(zU.getViewMatrix(), zU.getProjectionMatrix(UU), cU.getViewMatrix(), cU.getProjectionMatrix(UU))
          } else this.setTransformMatrix(XU.getViewMatrix(), XU.getProjectionMatrix(UU))
      }
      _bindFrameBuffer(UU) {
        let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._useCurrentFrameBuffer || (UU && UU._multiviewTexture ? UU._multiviewTexture._bindFrameBuffer() : UU && UU.outputRenderTarget ? UU.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer()), XU && this._clearFrameBuffer(UU)
      }
      _clearFrameBuffer(UU) {
        if (UU && UU._multiviewTexture);
        else if (UU && UU.outputRenderTarget && !UU._renderingMultiview) {
          const XU = UU.outputRenderTarget;
          XU.onClearObservable.hasObservers() ? XU.onClearObservable.notifyObservers(this._engine) : XU.skipInitialClear || UU.isRightCamera || (this.autoClear && this._engine.clear(XU.clearColor || this._clearColor, !XU._cleared, !0, !0), XU._cleared = !0)
        } else this._defaultFrameBufferCleared ? this._engine.clear(null, !1, !0, !0) : (this._defaultFrameBufferCleared = !0, this._clear())
      }
      _renderForCamera(UU, XU) {
        let zU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (UU && UU._skipRendering) return;
        const yU = this._engine;
        if (this._activeCamera = UU, !this.activeCamera) throw new Error("Active camera not set");
        if (yU.setViewport(this.activeCamera.viewport), this.resetCachedMaterial(), this._renderId++, !this.prePass && zU) {
          let XU = !0;
          UU._renderingMultiview && UU.outputRenderTarget && (XU = UU.outputRenderTarget.skipInitialClear, this.autoClear && (this._defaultFrameBufferCleared = !1, UU.outputRenderTarget.skipInitialClear = !1)), this._bindFrameBuffer(this._activeCamera), UU._renderingMultiview && UU.outputRenderTarget && (UU.outputRenderTarget.skipInitialClear = XU)
        }
        this.updateTransformMatrix(), this.onBeforeCameraRenderObservable.notifyObservers(this.activeCamera), this._engine.currentRenderPassId = UU.outputRenderTarget?.renderPassId ?? UU.renderPassId ?? 0, this._evaluateActiveMeshes();
        for (let cU = 0; cU < this._softwareSkinnedMeshes.length; cU++) {
          const UU = this._softwareSkinnedMeshes.data[cU];
          UU.applySkeleton(UU.skeleton)
        }
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.concatWithNoDuplicate(this._materialsRenderTargets), UU.customRenderTargets && UU.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(UU.customRenderTargets), XU && XU.customRenderTargets && XU.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(XU.customRenderTargets), this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture);
        for (let cU = 0, FU = this._gatherActiveCameraRenderTargetsStage; cU < FU.length; cU++) {
          FU[cU].action(this._renderTargets)
        }
        let QU = !1;
        if (this.renderTargetsEnabled) {
          let UU;
          if (this._intermediateRendering = !0, this._renderTargets.length > 0) {
            cU.j.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
            const XU = this.getBoundingBoxRenderer?.();
            for (let zU = 0; zU < this._renderTargets.length; zU++) {
              const cU = this._renderTargets.data[zU];
              if (cU._shouldRender()) {
                this._renderId++;
                const zU = cU.activeCamera && cU.activeCamera !== this.activeCamera;
                XU && !UU && (UU = XU.renderList.length > 0 ? XU.renderList.data.slice() : [], UU.length = XU.renderList.length), cU.render(zU, this.dumpNextRenderTargets), QU = !0
              }
            }
            XU && UU && (XU.renderList.data = UU, XU.renderList.length = UU.length), cU.j.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
          }
          if (this._cameraDrawRenderTargetStage.length > 0) {
            const XU = this.getBoundingBoxRenderer?.();
            XU && !UU && (UU = XU.renderList.length > 0 ? XU.renderList.data.slice() : [], UU.length = XU.renderList.length);
            for (let UU = 0, zU = this._cameraDrawRenderTargetStage; UU < zU.length; UU++) {
              QU = zU[UU].action(this.activeCamera) || QU
            }
            XU && UU && (XU.renderList.data = UU, XU.renderList.length = UU.length)
          }
          this._intermediateRendering = !1
        }
        QU && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || UU._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame();
        for (let cU = 0, FU = this._beforeCameraDrawStage; cU < FU.length; cU++) {
          FU[cU].action(this.activeCamera)
        }
        this.onBeforeDrawPhaseObservable.notifyObservers(this);
        const AU = yU.snapshotRendering && 1 === yU.snapshotRenderingMode;
        AU && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !AU), this.onAfterDrawPhaseObservable.notifyObservers(this);
        for (let cU = 0, FU = this._afterCameraDrawStage; cU < FU.length; cU++) {
          FU[cU].action(this.activeCamera)
        }
        if (this.postProcessManager && !UU._multiviewTexture) {
          const XU = UU.outputRenderTarget ? UU.outputRenderTarget.renderTarget : void 0;
          this.postProcessManager._finalizeFrame(UU.isIntermediate, XU)
        }
        for (let cU = 0, FU = this._afterCameraPostProcessStage; cU < FU.length; cU++) {
          FU[cU].action(this.activeCamera)
        }
        this._renderTargets.reset(), this.onAfterCameraRenderObservable.notifyObservers(this.activeCamera)
      }
      _processSubCameras(UU) {
        let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (0 === UU.cameraRigMode || UU._renderingMultiview) return UU._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(UU, void 0, XU), void this.onAfterRenderCameraObservable.notifyObservers(UU);
        if (UU._useMultiviewToSingleView) this._renderMultiviewToSingleView(UU);
        else {
          this.onBeforeCameraRenderObservable.notifyObservers(UU);
          for (let XU = 0; XU < UU._rigCameras.length; XU++) this._renderForCamera(UU._rigCameras[XU], UU)
        }
        this._activeCamera = UU, this.updateTransformMatrix(), this.onAfterRenderCameraObservable.notifyObservers(UU)
      }
      _checkIntersections() {
        for (let UU = 0; UU < this._meshesForIntersections.length; UU++) {
          const XU = this._meshesForIntersections.data[UU];
          if (XU.actionManager)
            for (let UU = 0; XU.actionManager && UU < XU.actionManager.actions.length; UU++) {
              const zU = XU.actionManager.actions[UU];
              if (12 === zU.trigger || 13 === zU.trigger) {
                const UU = zU.getTriggerParameter(),
                  cU = UU.mesh ? UU.mesh : UU,
                  yU = cU.syU(XU, UU.usePreciseIntersection),
                  QU = XU._intersectionsInProgress.indexOf(cU);
                yU && -1 === QU ? 12 === zU.trigger ? (zU._executeCurrent(pU.CreateNew(XU, void 0, cU)), XU._intersectionsInProgress.push(cU)) : 13 === zU.trigger && XU._intersectionsInProgress.push(cU) : !yU && QU > -1 && (13 === zU.trigger && zU._executeCurrent(pU.CreateNew(XU, void 0, cU)), XU.actionManager.hasSpecificTrigger(13, (UU => {
                  const XU = UU.mesh ? UU.mesh : UU;
                  return cU === XU
                })) && 13 !== zU.trigger || XU._intersectionsInProgress.splice(QU, 1))
              }
            }
        }
      }
      _advancePhysicsEngineStep(UU) {}
      _animate(UU) {}
      animate() {
        if (this._engine.isDeterministicLockStep()) {
          let UU = Math.max(Qz.MinDeltaTime, Math.min(this._engine.getDeltaTime(), Qz.MaxDeltaTime)) + this._timeAccumulator;
          const XU = this._engine.getTimeStep(),
            zU = 1e3 / XU / 1e3;
          let cU = 0;
          const yU = this._engine.getLockstepMaxSteps();
          let QU = Math.floor(UU / XU);
          for (QU = Math.min(QU, yU); UU > 0 && cU < QU;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = XU * zU, this._animate(XU), this.onAfterAnimationsObservable.notifyObservers(this), this.hV && this._advancePhysicsEngineStep(XU), this.onAfterStepObservable.notifyObservers(this), this._currentStepId++, cU++, UU -= XU;
          this._timeAccumulator = UU < 0 ? 0 : UU
        } else {
          const UU = this.useConstantAnimationDeltaTime ? 16 : Math.max(Qz.MinDeltaTime, Math.min(this._engine.getDeltaTime(), Qz.MaxDeltaTime));
          this._animationRatio = .06 * UU, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.hV && this._advancePhysicsEngineStep(UU)
        }
      }
      _clear() {
        (this.autoClearDepthAndStencil || this.autoClear) && this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil)
      }
      _checkCameraRenderTarget(UU) {
        if (UU?.outputRenderTarget && !UU?.isRigCamera && (UU.outputRenderTarget._cleared = !1), UU?.rigCameras?.length)
          for (let XU = 0; XU < UU.rigCameras.length; ++XU) {
            const zU = UU.rigCameras[XU].outputRenderTarget;
            zU && (zU._cleared = !1)
          }
      }
      resetDrawCache(UU) {
        if (this.meshes)
          for (const XU of this.meshes) XU.resetDrawCache(UU)
      }
      _renderWithFrameGraph() {
        let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          XU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.activeCamera = null, this.activeCameras = null, UU)
          for (const zU of this.cameras)
            if (zU.update(), 0 !== zU.cameraRigMode)
              for (let UU = 0; UU < zU._rigCameras.length; UU++) zU._rigCameras[UU].update();
        this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
        try {
          this._renderWithFrameGraphAfterBeforeRender(XU)
        } finally {
          this._renderingMeshEvaluationDepth--
        }
      }
      _renderWithFrameGraphAfterBeforeRender(UU) {
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.reset();
        const XU = this._frameGraph?.findMainCamera() ?? null;
        if (this.renderTargetsEnabled) {
          this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), cU.j.StartPerformanceCounter("Custom render targets", this._renderTargets.length > 0);
          for (let UU = 0; UU < this._renderTargets.length; UU++) {
            const zU = this._renderTargets.data[UU],
              cU = zU.activeCamera || XU;
            this._renderRenderTarget(zU, cU, !0, this.dumpNextRenderTargets)
          }
          cU.j.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
        }
        this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
        for (let zU = 0, cU = this._beforeClearStage; zU < cU.length; zU++) {
          cU[zU].action()
        }
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
        else {
          const XU = this.getActiveMeshCandidates(),
            zU = XU.length;
          if (this._activeMeshesFrozen) {
            if (!this._skipEvaluateActiveMeshesCompletely)
              for (let UU = 0; UU < zU; UU++) {
                const zU = XU.data[UU];
                zU._internalAbstractMeshDataInfo._wasActiveLastFrame && zU.computeWorldMatrix()
              }
            if (this.particlesEnabled) {
              const UU = this._activeParticleSystems.length;
              for (let XU = 0; XU < UU; XU++) this._activeParticleSystems.data[XU].animate()
            }
          } else {
            this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
            for (let cU = 0; cU < zU; cU++) {
              const zU = XU.data[cU];
              zU._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, zU.isBlocked || (this._totalVertices.addCount(zU.getTotalVertices(), !1), zU.isReady() && zU.isEnabled() && !zU.RY.hasAZeroComponent && (zU.computeWorldMatrix(UU), zU.actionManager && zU.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(zU)))
            }
            if (this.particlesEnabled)
              for (let UU = 0; UU < this.nB.length; UU++) {
                const XU = this.nB[UU];
                if (!XU.isStarted() || !XU.emitter) continue;
                const zU = XU.emitter;
                zU.position && !zU.isEnabled() || (this._activeParticleSystems.push(XU), XU.animate())
              }
          }
        }
        this.frameGraph?.execute()
      }
      _renderRenderTarget(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._intermediateRendering = !0, UU._shouldRender()) {
          if (this._renderId++, this.activeCamera = XU, !this.activeCamera) throw new Error("Active camera not set");
          this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), UU.render(zU, cU)
        }
        this._intermediateRendering = !1
      }
      render() {
        let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.oR) return;
        const zU = this._renderingMeshEvaluationDepth;
        try {
          this._renderFrame(UU, XU)
        } finally {
          this._renderingMeshEvaluationDepth = zU
        }
      }
      _renderFrame(UU, XU) {
        if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), tU.d.nS = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCameras?.length)
          for (const zU of this.activeCameras) this._checkCameraRenderTarget(zU);
        this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimationsObservable.notifyObservers(this), this.actionManager && this.actionManager.processTrigger(11), XU || this.animate();
        for (let zU = 0, cU = this._beforeCameraUpdateStage; zU < cU.length; zU++) {
          cU[zU].action()
        }
        if (UU)
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let zU = 0; zU < this.activeCameras.length; zU++) {
              const UU = this.activeCameras[zU];
              if (UU.update(), 0 !== UU.cameraRigMode)
                for (let XU = 0; XU < UU._rigCameras.length; XU++) UU._rigCameras[XU].update()
            } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode))
              for (let zU = 0; zU < this.activeCamera._rigCameras.length; zU++) this.activeCamera._rigCameras[zU].update();
        if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this._renderingMeshEvaluationDepth++, this.customRenderFunction(UU, XU);
        else {
          this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++, this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
          const UU = this.activeCameras?.length ? this.activeCameras[0] : this.activeCamera;
          if (this.renderTargetsEnabled) {
            cU.j.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
            for (let XU = 0; XU < this.customRenderTargets.length; XU++) {
              const zU = this.customRenderTargets[XU],
                cU = zU.activeCamera || this.activeCamera;
              this._renderRenderTarget(zU, cU, UU !== cU, this.dumpNextRenderTargets)
            }
            cU.j.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
          }
          this._engine.currentRenderPassId = UU?.renderPassId ?? 0, this.activeCamera = UU, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
          for (let XU = 0, zU = this._beforeClearStage; XU < zU.length; XU++) {
            zU[XU].action()
          }
          this._clearFrameBuffer(this.activeCamera);
          for (let XU = 0, zU = this._gatherRenderTargetsStage; XU < zU.length; XU++) {
            zU[XU].action(this._renderTargets)
          }
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let XU = 0; XU < this.activeCameras.length; XU++) this._processSubCameras(this.activeCameras[XU], XU > 0);
          else {
            if (!this.activeCamera) throw new Error("No camera defined");
            this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
          }
        }
        this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
        for (let zU = 0, cU = this._afterRenderStage; zU < cU.length; zU++) {
          cU[zU].action()
        }
        if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
          for (let UU = 0; UU < this._toBeDisposed.length; UU++) {
            const XU = this._toBeDisposed[UU];
            XU && XU.dispose()
          }
          this._toBeDisposed.length = 0
        }
        this.dumpNextRenderTargets && (this.dumpNextRenderTargets = !1), this._activeBones.addCount(0, !0), this._activeIndices.addCount(0, !0), this._activeParticles.addCount(0, !0), this._engine.restoreDefaultFramebuffer()
      }
      freezeMaterials() {
        for (let UU = 0; UU < this.materials.length; UU++) this.materials[UU].freeze()
      }
      unfreezeMaterials() {
        for (let UU = 0; UU < this.materials.length; UU++) this.materials[UU].unfreeze()
      }
      dispose() {
        if (this.oR) return;
        if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStage.clear(), this._evaluateSubMeshStage.clear(), this._preActiveMeshStage.clear(), this._cameraDrawRenderTargetStage.clear(), this._beforeCameraDrawStage.clear(), this._beforeRenderTargetDrawStage.clear(), this._beforeRenderingGroupDrawStage.clear(), this._beforeRenderingMeshStage.clear(), this._afterRenderingMeshStage.clear(), this._afterRenderingGroupDrawStage.clear(), this._afterCameraDrawStage.clear(), this._afterRenderTargetDrawStage.clear(), this._afterRenderStage.clear(), this._beforeCameraUpdateStage.clear(), this._beforeClearStage.clear(), this._gatherRenderTargetsStage.clear(), this._gatherActiveCameraRenderTargetsStage.clear(), this._pointerMoveStage.clear(), this._pointerDownStage.clear(), this._pointerUpStage.clear(), this._isReadyChecks.length = 0, this.importedMeshesFiles = [], this._activeAnimatables && (0, ZU.e)(this.stopAllAnimations)) {
          for (const UU of this._activeAnimatables) UU.onAnimationEndObservable.clear(), UU.onAnimationEnd = null;
          this.stopAllAnimations()
        }
        this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSystems.dispose(), this._activeSkeletons.dispose(), this._softwareSkinnedMeshes.dispose(), this._renderTargets.dispose(), this._materialsRenderTargets.dispose(), this._registeredForLateAnimationBindings.dispose(), this._animationWrites.length = 0, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._meshesForIntersections.dispose(), this._toBeDisposed.length = 0;
        const UU = this._activeRequests.slice();
        for (const QU of UU) QU.abort();
        this._activeRequests.length = 0;
        try {
          this.bS.notifyObservers(this)
        } catch (yU) {
          Uz.b.Error("An error occurred while calling onDisposeObservable!", yU)
        }
        this.detachControl();
        const XU = this._engine.getInputElement?.();
        if (XU)
          for (let QU = 0; QU < this.cameras.length; QU++) this.cameras[QU].detachControl();
        this._disposeList(this.animationGroups), this._disposeList(this.lights), this._defaultMaterial && this._defaultMaterial.dispose(), this._disposeList(this.multiMaterials), this._disposeList(this.materials), this._disposeList(this.meshes, (UU => UU.dispose(!0))), this._disposeList(this.transformNodes, (UU => UU.dispose(!0)));
        const zU = this.cameras;
        this._disposeList(zU), this._disposeList(this.nB), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multiviewSceneUbo.dispose(), this.postProcessManager.dispose(), this._disposeList(this._components);
        let cU = this._engine.scenes.indexOf(this);
        if (cU > -1 && this._engine.scenes.splice(cU, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, tU.j)(), BU.b._LastCreatedScene === this) {
          BU.b._LastCreatedScene = null;
          let UU = BU.b.Instances.length - 1;
          for (; UU >= 0;) {
            const XU = BU.b.Instances[UU];
            if (XU.scenes.length > 0) {
              BU.b._LastCreatedScene = XU.scenes[this._engine.scenes.length - 1];
              break
            }
            UU--
          }
        }
        cU = this._engine._virtualScenes.indexOf(this), cU > -1 && this._engine._virtualScenes.splice(cU, 1), this._engine.wipeCaches(!0), this.bS.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clear(), this.onAfterRenderTargetsRenderObservable.clear(), this.onAfterStepObservable.clear(), this.onBeforeStepObservable.clear(), this.onBeforeActiveMeshesEvaluationObservable.clear(), this.onAfterActiveMeshesEvaluationObservable.clear(), this.onBeforeParticlesRenderingObservable.clear(), this.onAfterParticlesRenderingObservable.clear(), this.onBeforeDrawPhaseObservable.clear(), this.onAfterDrawPhaseObservable.clear(), this.onBeforeAnimationsObservable.clear(), this.onAfterAnimationsObservable.clear(), this.onDataLoadedObservable.clear(), this.onBeforeRenderingGroupObservable.clear(), this.onAfterRenderingGroupObservable.clear(), this.onMeshImportedObservable.clear(), this.onBeforeCameraRenderObservable.clear(), this.onAfterCameraRenderObservable.clear(), this.onAfterRenderCameraObservable.clear(), this.onReadyObservable.clear(), this.onNewCameraAddedObservable.clear(), this.onCameraRemovedObservable.clear(), this.onNewLightAddedObservable.clear(), this.onLightRemovedObservable.clear(), this.onNewGeometryAddedObservable.clear(), this.onGeometryRemovedObservable.clear(), this.onNewTransformNodeAddedObservable.clear(), this.onTransformNodeRemovedObservable.clear(), this.onNewMeshAddedObservable.clear(), this.onMeshRemovedObservable.clear(), this.onNewSkeletonAddedObservable.clear(), this.onSkeletonRemovedObservable.clear(), this.onNewMaterialAddedObservable.clear(), this.onNewMultiMaterialAddedObservable.clear(), this.onMaterialRemovedObservable.clear(), this.onMultiMaterialRemovedObservable.clear(), this.onNewTextureAddedObservable.clear(), this.onTextureRemovedObservable.clear(), this.onNewFrameGraphAddedObservable.clear(), this.onFrameGraphRemovedObservable.clear(), this.onNewObjectRendererAddedObservable.clear(), this.onObjectRendererRemovedObservable.clear(), this.onPrePointerObservable.clear(), this.onPointerObservable.clear(), this.onPreKeyboardObservable.clear(), this.onKeyboardObservable.clear(), this.onActiveCameraChanged.clear(), this.onScenePerformancePriorityChangedObservable.clear(), this.onClearColorChangedObservable.clear(), this.onEnvironmentTextureChangedObservable.clear(), this.onMeshUnderPointerUpdatedObservable.clear(), this._isDisposed = !0
      }
      _disposeList(UU, XU) {
        const zU = UU.slice(0);
        XU = XU ?? (UU => UU.dispose());
        for (const cU of zU) XU(cU);
        UU.length = 0
      }
      get oR() {
        return this._isDisposed
      }
      clearCachedVertexData() {
        for (let UU = 0; UU < this.meshes.length; UU++) {
          const XU = this.meshes[UU].geometry;
          XU && XU.clearCachedData()
        }
      }
      cleanCachedTextureBuffer() {
        for (const UU of this.textures) {
          UU._buffer && (UU._buffer = null)
        }
      }
      getWorldExtends(UU) {
        const XU = new EU.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          zU = new EU.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        UU = UU || (() => !0);
        const cU = this.meshes.filter(UU);
        for (const yU of cU) {
          if (yU.computeWorldMatrix(!0), !yU.uB || 0 === yU.uB.length || yU.infiniteDistance) continue;
          const UU = yU.gM(),
            cU = UU.boundingBox.minimumWorld,
            QU = UU.boundingBox.maximumWorld;
          EU.q.CheckExtends(cU, XU, zU), EU.q.CheckExtends(QU, XU, zU)
        }
        return XU.x === Number.MAX_VALUE ? {
          min: EU.q.Zero(),
          max: EU.q.Zero()
        } : {
          min: XU,
          max: zU
        }
      }
      createPickingRay(UU, XU, zU, cU) {
        throw (0, ZU.m)("Ray")
      }
      createPickingRayToRef(UU, XU, zU, cU, yU) {
        throw (0, ZU.m)("Ray")
      }
      createPickingRayInCameraSpace(UU, XU, zU) {
        throw (0, ZU.m)("Ray")
      }
      createPickingRayInCameraSpaceToRef(UU, XU, zU, cU) {
        throw (0, ZU.m)("Ray")
      }
      DI(UU, XU, zU, cU, yU, QU) {
        const AU = (0, ZU.m)("Ray", !0);
        return AU && Uz.b.Warn(AU), new IU.c
      }
      pickWithBoundingInfo(UU, XU, zU, cU, yU) {
        const QU = (0, ZU.m)("Ray", !0);
        return QU && Uz.b.Warn(QU), new IU.c
      }
      pickWithRay(UU, XU, zU, cU) {
        throw (0, ZU.m)("Ray")
      }
      multiPick(UU, XU, zU, cU, yU) {
        throw (0, ZU.m)("Ray")
      }
      multiPickWithRay(UU, XU, zU) {
        throw (0, ZU.m)("Ray")
      }
      setPointerOverMesh(UU, XU, zU) {
        this._inputManager.setPointerOverMesh(UU, XU, zU)
      }
      getPointerOverMesh() {
        return this._inputManager.getPointerOverMesh()
      }
      _rebuildGeometries() {
        for (const UU of this.geometries) UU._rebuild();
        for (const UU of this.meshes) UU._rebuild();
        this.postProcessManager && this.postProcessManager._rebuild();
        for (const UU of this._components) UU.rebuild();
        for (const UU of this.nB) UU.rebuild();
        if (this.spriteManagers)
          for (const UU of this.spriteManagers) UU.rebuild()
      }
      _rebuildTextures() {
        for (const UU of this.textures) UU._rebuild(!0);
        this.markAllMaterialsAsDirty(1)
      }
      _getByTags(UU, XU, zU) {
        if (void 0 === XU) return UU;
        const cU = [];
        for (const yU in UU) {
          const QU = UU[yU];
          DU.b && DU.b.MatchesQuery(QU, XU) && (!zU || zU(QU)) && cU.push(QU)
        }
        return cU
      }
      getMeshesByTags(UU, XU) {
        return this._getByTags(this.meshes, UU, XU)
      }
      getCamerasByTags(UU, XU) {
        return this._getByTags(this.cameras, UU, XU)
      }
      getLightsByTags(UU, XU) {
        return this._getByTags(this.lights, UU, XU)
      }
      getMaterialByTags(UU, XU) {
        return this._getByTags(this.materials, UU, XU).concat(this._getByTags(this.multiMaterials, UU, XU))
      }
      getTransformNodesByTags(UU, XU) {
        return this._getByTags(this.transformNodes, UU, XU)
      }
      setRenderingOrder(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(UU, XU, zU, cU)
      }
      setRenderingAutoClearDepthStencil(UU, XU) {
        let zU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          cU = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(UU, XU, zU, cU)
      }
      getAutoClearDepthStencilSetup(UU) {
        return this._renderingManager.getAutoClearDepthStencilSetup(UU)
      }
      _forceBlockMaterialDirtyMechanism(UU) {
        this._blockMaterialDirtyMechanism = UU
      }
      get blockMaterialDirtyMechanism() {
        return this._blockMaterialDirtyMechanism
      }
      set blockMaterialDirtyMechanism(UU) {
        this._blockMaterialDirtyMechanism !== UU && (this._blockMaterialDirtyMechanism = UU, UU || this.markAllMaterialsAsDirty(127))
      }
      markAllMaterialsAsDirty(UU, XU) {
        if (!this._blockMaterialDirtyMechanism)
          for (const zU of this.materials) XU && !XU(zU) || zU.OzU(UU)
      }
      _loadFile(UU, XU, zU, cU, yU, QU, AU) {
        const FU = (0, jU.q)(UU, XU, zU, cU ? this.offlineProvider : void 0, yU, QU, AU);
        return this._activeRequests.push(FU), FU.onCompleteObservable.add((UU => {
          this._activeRequests.splice(this._activeRequests.indexOf(UU), 1)
        })), FU
      }
      async _loadFileAsync(UU, XU, zU, cU, yU) {
        return await new Promise(((QU, AU) => {
          this._loadFile(UU, (UU => {
            QU(UU)
          }), XU, zU, cU, ((UU, XU) => {
            AU(XU)
          }), yU)
        }))
      }
      async _loadDelayedFileAsync(UU, XU, zU) {
        this._delayedFileRequests || (this._delayedFileRequests = new Map);
        const cU = `${UU}|${XU?"binary":"string"}`;
        let yU = this._delayedFileRequests.get(cU);
        if (!yU) {
          yU = XU ? this._loadFileAsync(UU, void 0, zU, !0) : this._loadFileAsync(UU, void 0, zU, !1);
          const QU = yU;
          (async () => {
            try {
              await QU
            } catch {}
            this._delayedFileRequests?.delete(cU)
          })(), this._delayedFileRequests.set(cU, yU)
        }
        return await yU
      }
      _requestFile(UU, XU, zU, cU, yU, QU, AU) {
        const FU = (0, jU.E)(UU, XU, zU, cU ? this.offlineProvider : void 0, yU, QU, AU);
        return this._activeRequests.push(FU), FU.onCompleteObservable.add((UU => {
          this._activeRequests.splice(this._activeRequests.indexOf(UU), 1)
        })), FU
      }
      async _requestFileAsync(UU, XU, zU, cU, yU) {
        return await new Promise(((QU, AU) => {
          this._requestFile(UU, (UU => {
            QU(UU)
          }), XU, zU, cU, (UU => {
            AU(UU)
          }), yU)
        }))
      }
      _readFile(UU, XU, zU, cU, yU) {
        const QU = (0, jU.w)(UU, XU, zU, cU, yU);
        return this._activeRequests.push(QU), QU.onCompleteObservable.add((UU => {
          this._activeRequests.splice(this._activeRequests.indexOf(UU), 1)
        })), QU
      }
      async _readFileAsync(UU, XU, zU) {
        return await new Promise(((cU, yU) => {
          this._readFile(UU, (UU => {
            cU(UU)
          }), XU, zU, (UU => {
            yU(UU)
          }))
        }))
      }
      getPerfCollector() {
        throw (0, ZU.m)("performanceViewerSceneExtension")
      }
      setActiveCameraByID(UU) {
        return this.setActiveCameraById(UU)
      }
      getMaterialByID(UU) {
        return this.getMaterialById(UU)
      }
      getLastMaterialByID(UU) {
        return this.getLastMaterialById(UU)
      }
      getTextureByUniqueID(UU) {
        return this.getTextureByUniqueId(UU)
      }
      getCameraByID(UU) {
        return this.getCameraById(UU)
      }
      getCameraByUniqueID(UU) {
        return this.getCameraByUniqueId(UU)
      }
      getBoneByID(UU) {
        return this.getBoneById(UU)
      }
      getLightByID(UU) {
        return this.getLightById(UU)
      }
      getLightByUniqueID(UU) {
        return this.getLightByUniqueId(UU)
      }
      getParticleSystemByID(UU) {
        return this.getParticleSystemById(UU)
      }
      getGeometryByID(UU) {
        return this.getGeometryById(UU)
      }
      getMeshByID(UU) {
        return this.getMeshById(UU)
      }
      getMeshByUniqueID(UU) {
        return this.getMeshByUniqueId(UU)
      }
      getLastMeshByID(UU) {
        return this.getLastMeshById(UU)
      }
      getMeshesByID(UU) {
        return this.getMeshesById(UU)
      }
      getTransformNodeByID(UU) {
        return this.getTransformNodeById(UU)
      }
      getTransformNodeByUniqueID(UU) {
        return this.getTransformNodeByUniqueId(UU)
      }
      getTransformNodesByID(UU) {
        return this.getTransformNodesById(UU)
      }
      getNodeByID(UU) {
        return this.getNodeById(UU)
      }
      getLastEntryByID(UU) {
        return this.getLastEntryById(UU)
      }
      getLastSkeletonByID(UU) {
        return this.getLastSkeletonById(UU)
      }
    }
    Qz.FOGMODE_NONE = 0, Qz.FOGMODE_EXP = 1, Qz.FOGMODE_EXP2 = 2, Qz.FOGMODE_LINEAR = 3, Qz.MinDeltaTime = 1, Qz.MaxDeltaTime = 1e3, Qz._OriginalDefaultMaterialFactory = Qz.DefaultMaterialFactory;
    let Az = !1;

    function Fz() {
      Az || (Az = !0, (0, Xz.h)("BABYLON.Scene", Qz))
    }(hU = Qz.prototype).sortActiveAnimatables ?? (hU.sortActiveAnimatables = (0, ZU.k)("Scene", "sortActiveAnimatables")), (UX = Qz.prototype).beginWeightedAnimation ?? (UX.beginWeightedAnimation = (0, ZU.k)("Scene", "beginWeightedAnimation")), (XX = Qz.prototype).beginAnimation ?? (XX.beginAnimation = (0, ZU.k)("Scene", "beginAnimation")), (zX = Qz.prototype).beginHierarchyAnimation ?? (zX.beginHierarchyAnimation = (0, ZU.k)("Scene", "beginHierarchyAnimation")), (cX = Qz.prototype).beginDirectAnimation ?? (cX.beginDirectAnimation = (0, ZU.k)("Scene", "beginDirectAnimation")), (yX = Qz.prototype).beginDirectHierarchyAnimation ?? (yX.beginDirectHierarchyAnimation = (0, ZU.k)("Scene", "beginDirectHierarchyAnimation")), (QX = Qz.prototype).getAnimatableByTarget ?? (QX.getAnimatableByTarget = (0, ZU.k)("Scene", "getAnimatableByTarget")), (AX = Qz.prototype).getAllAnimatablesByTarget ?? (AX.getAllAnimatablesByTarget = (0, ZU.k)("Scene", "getAllAnimatablesByTarget")), (FX = Qz.prototype).stopAllAnimations ?? (FX.stopAllAnimations = (0, ZU.k)("Scene", "stopAllAnimations")), (oX = Qz.prototype).getSoundByName ?? (oX.getSoundByName = (0, ZU.k)("Scene", "getSoundByName")), (DX = Qz.prototype).createOrUpdateSelectionOctree ?? (DX.createOrUpdateSelectionOctree = (0, ZU.k)("Scene", "createOrUpdateSelectionOctree")), (EX = Qz.prototype).createDefaultLight ?? (EX.createDefaultLight = (0, ZU.k)("Scene", "createDefaultLight")), (YX = Qz.prototype).createDefaultCamera ?? (YX.createDefaultCamera = (0, ZU.k)("Scene", "createDefaultCamera")), (NX = Qz.prototype).createDefaultCameraOrLight ?? (NX.createDefaultCameraOrLight = (0, ZU.k)("Scene", "createDefaultCameraOrLight")), (IX = Qz.prototype).createDefaultSkybox ?? (IX.createDefaultSkybox = (0, ZU.k)("Scene", "createDefaultSkybox")), (pX = Qz.prototype).createDefaultEnvironment ?? (pX.createDefaultEnvironment = (0, ZU.k)("Scene", "createDefaultEnvironment")), (aX = Qz.prototype).createDefaultVRExperience ?? (aX.createDefaultVRExperience = (0, ZU.k)("Scene", "createDefaultVRExperience")), (tX = Qz.prototype).createDefaultXRExperienceAsync ?? (tX.createDefaultXRExperienceAsync = (0, ZU.k)("Scene", "createDefaultXRExperienceAsync")), (gX = Qz.prototype).getGlowLayerByName ?? (gX.getGlowLayerByName = (0, ZU.k)("Scene", "getGlowLayerByName")), (kX = Qz.prototype).getHighlightLayerByName ?? (kX.getHighlightLayerByName = (0, ZU.k)("Scene", "getHighlightLayerByName")), (GX = Qz.prototype).getSelectionOutlineLayerByName ?? (GX.getSelectionOutlineLayerByName = (0, ZU.k)("Scene", "getSelectionOutlineLayerByName")), (BX = Qz.prototype).removeLensFlareSystem ?? (BX.removeLensFlareSystem = (0, ZU.k)("Scene", "removeLensFlareSystem")), (ZX = Qz.prototype).addLensFlareSystem ?? (ZX.addLensFlareSystem = (0, ZU.k)("Scene", "addLensFlareSystem")), (RX = Qz.prototype).getLensFlareSystemByName ?? (RX.getLensFlareSystemByName = (0, ZU.k)("Scene", "getLensFlareSystemByName")), (PX = Qz.prototype).getLensFlareSystemByID ?? (PX.getLensFlareSystemByID = (0, ZU.k)("Scene", "getLensFlareSystemByID")), (WX = Qz.prototype).getLensFlareSystemById ?? (WX.getLensFlareSystemById = (0, ZU.k)("Scene", "getLensFlareSystemById")), (dX = Qz.prototype).getPhysicsEngine ?? (dX.getPhysicsEngine = (0, ZU.k)("Scene", "getPhysicsEngine")), (LX = Qz.prototype).enablePhysics ?? (LX.enablePhysics = (0, ZU.k)("Scene", "enablePhysics")), (eX = Qz.prototype).disablePhysicsEngine ?? (eX.disablePhysicsEngine = (0, ZU.k)("Scene", "disablePhysicsEngine")), (CX = Qz.prototype).isPhysicsEnabled ?? (CX.isPhysicsEnabled = (0, ZU.k)("Scene", "isPhysicsEnabled")), (wX = Qz.prototype).deleteCompoundImpostor ?? (wX.deleteCompoundImpostor = (0, ZU.k)("Scene", "deleteCompoundImpostor")), (qX = Qz.prototype).removeReflectionProbe ?? (qX.removeReflectionProbe = (0, ZU.k)("Scene", "removeReflectionProbe")), (OX = Qz.prototype).addReflectionProbe ?? (OX.addReflectionProbe = (0, ZU.k)("Scene", "addReflectionProbe")), (SX = Qz.prototype).getBoundingBoxRenderer ?? (SX.getBoundingBoxRenderer = (0, ZU.k)("Scene", "getBoundingBoxRenderer")), (rX = Qz.prototype).enableDepthRenderer ?? (rX.enableDepthRenderer = (0, ZU.k)("Scene", "enableDepthRenderer")), (uX = Qz.prototype).disableDepthRenderer ?? (uX.disableDepthRenderer = (0, ZU.k)("Scene", "disableDepthRenderer")), (fX = Qz.prototype).enableFluidRenderer ?? (fX.enableFluidRenderer = (0, ZU.k)("Scene", "enableFluidRenderer")), (iX = Qz.prototype).disableFluidRenderer ?? (iX.disableFluidRenderer = (0, ZU.k)("Scene", "disableFluidRenderer")), (HX = Qz.prototype).enableGeometryBufferRenderer ?? (HX.enableGeometryBufferRenderer = (0, ZU.k)("Scene", "enableGeometryBufferRenderer")), (MX = Qz.prototype).disableGeometryBufferRenderer ?? (MX.disableGeometryBufferRenderer = (0, ZU.k)("Scene", "disableGeometryBufferRenderer")), (vX = Qz.prototype).enableIblCdfGenerator ?? (vX.enableIblCdfGenerator = (0, ZU.k)("Scene", "enableIblCdfGenerator")), (VX = Qz.prototype).disableIblCdfGenerator ?? (VX.disableIblCdfGenerator = (0, ZU.k)("Scene", "disableIblCdfGenerator")), (sX = Qz.prototype).getOutlineRenderer ?? (sX.getOutlineRenderer = (0, ZU.k)("Scene", "getOutlineRenderer")), (nX = Qz.prototype).enablePrePassRenderer ?? (nX.enablePrePassRenderer = (0, ZU.k)("Scene", "enablePrePassRenderer")), (mX = Qz.prototype).disablePrePassRenderer ?? (mX.disablePrePassRenderer = (0, ZU.k)("Scene", "disablePrePassRenderer")), (lX = Qz.prototype).enableSubSurfaceForPrePass ?? (lX.enableSubSurfaceForPrePass = (0, ZU.k)("Scene", "enableSubSurfaceForPrePass")), (xX = Qz.prototype).disableSubSurfaceForPrePass ?? (xX.disableSubSurfaceForPrePass = (0, ZU.k)("Scene", "disableSubSurfaceForPrePass")), (JX = Qz.prototype).pickSprite ?? (JX.pickSprite = (0, ZU.k)("Scene", "pickSprite")), (jX = Qz.prototype).pickSpriteWithRay ?? (jX.pickSpriteWithRay = (0, ZU.k)("Scene", "pickSpriteWithRay")), (KX = Qz.prototype).multiPickSprite ?? (KX.multiPickSprite = (0, ZU.k)("Scene", "multiPickSprite")), (bX = Qz.prototype).multiPickSpriteWithRay ?? (bX.multiPickSpriteWithRay = (0, ZU.k)("Scene", "multiPickSpriteWithRay")), (TX = Qz.prototype).setPointerOverSprite ?? (TX.setPointerOverSprite = (0, ZU.k)("Scene", "setPointerOverSprite")), (hX = Qz.prototype).getPointerOverSprite ?? (hX.getPointerOverSprite = (0, ZU.k)("Scene", "getPointerOverSprite")), Object.getOwnPropertyDescriptor(Qz.prototype, "mainSoundTrack") || Object.defineProperty(Qz.prototype, "mainSoundTrack", (0, ZU.i)("Scene", "mainSoundTrack")), Object.getOwnPropertyDescriptor(Qz.prototype, "soundTracks") || Object.defineProperty(Qz.prototype, "soundTracks", (0, ZU.i)("Scene", "soundTracks")), Object.getOwnPropertyDescriptor(Qz.prototype, "audioEnabled") || Object.defineProperty(Qz.prototype, "audioEnabled", (0, ZU.i)("Scene", "audioEnabled")), Object.getOwnPropertyDescriptor(Qz.prototype, "headphone") || Object.defineProperty(Qz.prototype, "headphone", (0, ZU.i)("Scene", "headphone")), Object.getOwnPropertyDescriptor(Qz.prototype, "audioListenerPositionProvider") || Object.defineProperty(Qz.prototype, "audioListenerPositionProvider", (0, ZU.i)("Scene", "audioListenerPositionProvider")), Object.getOwnPropertyDescriptor(Qz.prototype, "audioListenerRotationProvider") || Object.defineProperty(Qz.prototype, "audioListenerRotationProvider", (0, ZU.i)("Scene", "audioListenerRotationProvider")), Object.getOwnPropertyDescriptor(Qz.prototype, "audioPositioningRefreshRate") || Object.defineProperty(Qz.prototype, "audioPositioningRefreshRate", (0, ZU.i)("Scene", "audioPositioningRefreshRate")), Object.getOwnPropertyDescriptor(Qz.prototype, "selectionOctree") || Object.defineProperty(Qz.prototype, "selectionOctree", (0, ZU.i)("Scene", "selectionOctree")), Object.getOwnPropertyDescriptor(Qz.prototype, "debugLayer") || Object.defineProperty(Qz.prototype, "debugLayer", (0, ZU.i)("Scene", "debugLayer")), Object.getOwnPropertyDescriptor(Qz.prototype, "gamepadManager") || Object.defineProperty(Qz.prototype, "gamepadManager", (0, ZU.i)("Scene", "gamepadManager")), Object.getOwnPropertyDescriptor(Qz.prototype, "simplificationQueue") || Object.defineProperty(Qz.prototype, "simplificationQueue", (0, ZU.i)("Scene", "simplificationQueue")), Object.getOwnPropertyDescriptor(Qz.prototype, "onBeforePhysicsObservable") || Object.defineProperty(Qz.prototype, "onBeforePhysicsObservable", (0, ZU.i)("Scene", "onBeforePhysicsObservable")), Object.getOwnPropertyDescriptor(Qz.prototype, "onAfterPhysicsObservable") || Object.defineProperty(Qz.prototype, "onAfterPhysicsObservable", (0, ZU.i)("Scene", "onAfterPhysicsObservable")), Object.getOwnPropertyDescriptor(Qz.prototype, "reflectionProbes") || Object.defineProperty(Qz.prototype, "reflectionProbes", (0, ZU.i)("Scene", "reflectionProbes")), Object.getOwnPropertyDescriptor(Qz.prototype, "forceShowBoundingBoxes") || Object.defineProperty(Qz.prototype, "forceShowBoundingBoxes", (0, ZU.i)("Scene", "forceShowBoundingBoxes")), Object.getOwnPropertyDescriptor(Qz.prototype, "depthPeelingRenderer") || Object.defineProperty(Qz.prototype, "depthPeelingRenderer", (0, ZU.i)("Scene", "depthPeelingRenderer")), Object.getOwnPropertyDescriptor(Qz.prototype, "useOrderIndependentTransparency") || Object.defineProperty(Qz.prototype, "useOrderIndependentTransparency", (0, ZU.i)("Scene", "useOrderIndependentTransparency")), Object.getOwnPropertyDescriptor(Qz.prototype, "fluidRenderer") || Object.defineProperty(Qz.prototype, "fluidRenderer", (0, ZU.i)("Scene", "fluidRenderer")), Object.getOwnPropertyDescriptor(Qz.prototype, "geometryBufferRenderer") || Object.defineProperty(Qz.prototype, "geometryBufferRenderer", (0, ZU.i)("Scene", "geometryBufferRenderer")), Object.getOwnPropertyDescriptor(Qz.prototype, "iblCdfGenerator") || Object.defineProperty(Qz.prototype, "iblCdfGenerator", (0, ZU.i)("Scene", "iblCdfGenerator")), Object.getOwnPropertyDescriptor(Qz.prototype, "prePassRenderer") || Object.defineProperty(Qz.prototype, "prePassRenderer", (0, ZU.i)("Scene", "prePassRenderer")), Object.getOwnPropertyDescriptor(Qz.prototype, "subSurfaceConfiguration") || Object.defineProperty(Qz.prototype, "subSurfaceConfiguration", (0, ZU.i)("Scene", "subSurfaceConfiguration")), Object.getOwnPropertyDescriptor(Qz.prototype, "spriteManagers") || Object.defineProperty(Qz.prototype, "spriteManagers", (0, ZU.i)("Scene", "spriteManagers")), Object.getOwnPropertyDescriptor(Qz.prototype, "onBeforeSpritesRenderingObservable") || Object.defineProperty(Qz.prototype, "onBeforeSpritesRenderingObservable", (0, ZU.i)("Scene", "onBeforeSpritesRenderingObservable")), Object.getOwnPropertyDescriptor(Qz.prototype, "onAfterSpritesRenderingObservable") || Object.defineProperty(Qz.prototype, "onAfterSpritesRenderingObservable", (0, ZU.i)("Scene", "onAfterSpritesRenderingObservable"))
  },
  41265: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => cU,
      h: () => yU
    });
    class cU {}
    cU.NAME_EFFECTLAYER = "EffectLayer", cU.NAME_LAYER = "Layer", cU.NAME_LENSFLARESYSTEM = "LensFlareSystem", cU.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", cU.NAME_PARTICLESYSTEM = "ParticleSystem", cU.NAME_GAMEPAD = "Gamepad", cU.NAME_SIMPLIFICATIONQUEUE = "SimplificationQueue", cU.NAME_GEOMETRYBUFFERRENDERER = "GeometryBufferRenderer", cU.NAME_PREPASSRENDERER = "PrePassRenderer", cU.NAME_DEPTHRENDERER = "DepthRenderer", cU.NAME_DEPTHPEELINGRENDERER = "DepthPeelingRenderer", cU.NAME_POSTPROCESSRENDERPIPELINEMANAGER = "PostProcessRenderPipelineManager", cU.NAME_SPRITE = "Sprite", cU.NAME_SUBSURFACE = "SubSurface", cU.NAME_OUTLINERENDERER = "Outline", cU.NAME_PROCEDURALTEXTURE = "ProceduralTexture", cU.NAME_SHADOWGENERATOR = "ShadowGenerator", cU.NAME_OCTREE = "NyU", cU.NAME_PHYSICSENGINE = "PhysicsEngine", cU.NAME_AUDIO = "Audio", cU.NAME_FLUIDRENDERER = "FluidRenderer", cU.NAME_IBLCDFGENERATOR = "iblCDFGenerator", cU.NAME_CLUSTEREDLIGHTING = "ClusteredLighting", cU.STEP_ISREADYFORMESH_EFFECTLAYER = 0, cU.STEP_ISREADYFORMESH_DEPTHRENDERER = 1, cU.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER = 0, cU.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER = 0, cU.STEP_PREACTIVEMESH_BOUNDINGBOXRENDERER = 0, cU.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER = 1, cU.STEP_BEFORECAMERADRAW_PREPASS = 0, cU.STEP_BEFORECAMERADRAW_EFFECTLAYER = 1, cU.STEP_BEFORECAMERADRAW_LAYER = 2, cU.STEP_BEFORERENDERTARGETDRAW_PREPASS = 0, cU.STEP_BEFORERENDERTARGETDRAW_LAYER = 1, cU.STEP_BEFORERENDERINGMESH_PREPASS = 0, cU.STEP_BEFORERENDERINGMESH_OUTLINE = 1, cU.STEP_AFTERRENDERINGMESH_PREPASS = 0, cU.STEP_AFTERRENDERINGMESH_OUTLINE = 1, cU.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW = 0, cU.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER = 1, cU.STEP_BEFORECAMERAUPDATE_SIMPLIFICATIONQUEUE = 0, cU.STEP_BEFORECLEAR_PROCEDURALTEXTURE = 0, cU.STEP_BEFORECLEAR_PREPASS = 1, cU.STEP_BEFORERENDERTARGETCLEAR_PREPASS = 0, cU.STEP_AFTERRENDERTARGETDRAW_PREPASS = 0, cU.STEP_AFTERRENDERTARGETDRAW_LAYER = 1, cU.STEP_AFTERCAMERADRAW_PREPASS = 0, cU.STEP_AFTERCAMERADRAW_EFFECTLAYER = 1, cU.STEP_AFTERCAMERADRAW_LENSFLARESYSTEM = 2, cU.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW = 3, cU.STEP_AFTERCAMERADRAW_LAYER = 4, cU.STEP_AFTERCAMERADRAW_FLUIDRENDERER = 5, cU.STEP_AFTERCAMERAPOSTPROCESS_LAYER = 0, cU.STEP_AFTERRENDERTARGETPOSTPROCESS_LAYER = 0, cU.STEP_AFTERRENDER_AUDIO = 0, cU.STEP_GATHERRENDERTARGETS_DEPTHRENDERER = 0, cU.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER = 1, cU.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR = 2, cU.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER = 3, cU.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER = 0, cU.STEP_GATHERACTIVECAMERARENDERTARGETS_FLUIDRENDERER = 1, cU.STEP_GATHERACTIVECAMERARENDERTARGETS_CLUSTEREDLIGHTING = 2, cU.STEP_POINTERMOVE_SPRITE = 0, cU.STEP_POINTERDOWN_SPRITE = 0, cU.STEP_POINTERUP_SPRITE = 0;
    class yU extends Array {
      constructor(UU) {
        super(...UU)
      }
      static Create() {
        return Object.create(yU.prototype)
      }
      registerStep(UU, XU, zU) {
        let cU, yU = 0;
        for (; yU < this.length; yU++) {
          if (cU = this[yU].index, UU < cU) break
        }
        this.splice(yU, 0, {
          index: UU,
          component: XU,
          action: zU.bind(XU)
        })
      }
      clear() {
        this.length = 0
      }
    }
  },
  41113: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => AU,
      f: () => FU,
      j: () => cU,
      n: () => yU,
      r: () => QU
    });

    function cU(UU, XU, zU, cU, yU, QU) {
      function AU(UU) {
        if (void 0 !== UU && "function" !== typeof UU) throw new TypeError("Function expected");
        return UU
      }
      for (var FU, oU = cU.kind, DU = "getter" === oU ? "get" : "setter" === oU ? "set" : "value", EU = !XU && UU ? cU.static ? UU : UU.prototype : null, YU = XU || (EU ? Object.getOwnPropertyDescriptor(EU, cU.name) : {}), NU = !1, IU = zU.length - 1; IU >= 0; IU--) {
        var pU = {};
        for (var aU in cU) pU[aU] = "access" === aU ? {} : cU[aU];
        for (var aU in cU.access) pU.access[aU] = cU.access[aU];
        pU.addInitializer = function(UU) {
          if (NU) throw new TypeError("Cannot add initializers after decoration has completed");
          QU.push(AU(UU || null))
        };
        var tU = (0, zU[IU])("accessor" === oU ? {
          get: YU.get,
          set: YU.set
        } : YU[DU], pU);
        if ("accessor" === oU) {
          if (void 0 === tU) continue;
          if (null === tU || "object" !== typeof tU) throw new TypeError("Object expected");
          (FU = AU(tU.get)) && (YU.get = FU), (FU = AU(tU.set)) && (YU.set = FU), (FU = AU(tU.init)) && yU.unshift(FU)
        } else(FU = AU(tU)) && ("field" === oU ? yU.unshift(FU) : YU[DU] = FU)
      }
      EU && Object.defineProperty(EU, cU.name, YU), NU = !0
    }

    function yU(UU, XU, zU) {
      for (var cU = arguments.length > 2, yU = 0; yU < XU.length; yU++) zU = cU ? XU[yU].call(UU, zU) : XU[yU].call(UU);
      return cU ? zU : void 0
    }

    function QU(UU, XU, zU) {
      return "symbol" === typeof XU && (XU = XU.description ? "[".concat(XU.description, "]") : ""), Object.defineProperty(UU, "name", {
        configurable: !0,
        value: zU ? "".concat(zU, " ", XU) : XU
      })
    }
    Object.create;
    Object.create;

    function AU(UU, XU, zU, cU) {
      if ("a" === zU && !cU) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof XU ? UU !== XU || !cU : !XU.has(UU)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === zU ? cU : "a" === zU ? cU.call(UU) : cU ? cU.value : XU.get(UU)
    }

    function FU(UU, XU, zU, cU, yU) {
      if ("m" === cU) throw new TypeError("Private method is not writable");
      if ("a" === cU && !yU) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof XU ? UU !== XU || !yU : !XU.has(UU)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === cU ? yU.call(UU, zU) : yU ? yU.value = zU : XU.set(UU, zU), zU
    }
    "function" === typeof SuppressedError && SuppressedError
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);