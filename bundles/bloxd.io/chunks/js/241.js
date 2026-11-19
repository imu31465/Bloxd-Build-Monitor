export const id = 241;
export const ids = [241];
export const modules = {
  39270: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => OY,
      f: () => QY,
      h: () => aY,
      l: () => gY
    });
    var FY = DY(39056),
      AY = DY(38040),
      IY = DY(39180),
      RY = DY(39102);
    class OY {
      get CrY() {
        return this._isDisposed
      }
      constructor(YY, rY, DY) {
        let AY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          IY = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          OY = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          gY = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          aY = arguments.length > 7 ? arguments[7] : void 0,
          vY = arguments.length > 8 ? arguments[8] : void 0;
        this._isAlreadyOwned = !1, this._isDisposed = !1, (0, RY.d)(), YY && YY.hT ? this._engine = YY.hT().ky() : this._engine = YY, this._updatable = DY, this._instanced = OY, this._divisor = aY || 1, this._label = vY, rY instanceof FY.e ? (this._data = null, this._buffer = rY) : (this._data = rY, this._buffer = null), this.byteStride = gY ? AY : AY * Float32Array.BYTES_PER_ELEMENT, IY || this.create()
      }
      createVertexBuffer(YY, rY, DY, FY, AY) {
        let IY = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          RY = arguments.length > 6 ? arguments[6] : void 0;
        const OY = IY ? rY : rY * Float32Array.BYTES_PER_ELEMENT,
          aY = FY ? IY ? FY : FY * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
        return new gY(this._engine, this, YY, this._updatable, !0, aY, void 0 === AY ? this._instanced : AY, OY, DY, void 0, void 0, !0, this._divisor || RY)
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
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        !YY && this._buffer || (YY = YY || this._data, YY && (this._buffer ? this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, YY), this._data = YY) : this._updatable ? (this._buffer = this._engine.createDynamicVertexBuffer(YY, this._label), this._data = YY) : this._buffer = this._engine.createVertexBuffer(YY, void 0, this._label)))
      }
      _rebuild() {
        if (this._data) this._buffer = null, this.create(this._data);
        else {
          if (!this._buffer) return;
          if (this._buffer.gu > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.gu, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.gu, void 0, this._label));
          AY.d.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
        }
      }
      update(YY) {
        this.create(YY)
      }
      updateDirectly(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, YY, FY ? rY : rY * Float32Array.BYTES_PER_ELEMENT, DY ? DY * this.byteStride : void 0), this._data = 0 === rY && void 0 === DY ? YY : null)
      }
      _increaseReferences() {
        this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
      }
      dispose() {
        this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
      }
    }
    class gY {
      get CrY() {
        return this._isDisposed
      }
      get instanceDivisor() {
        return this._instanceDivisor
      }
      set instanceDivisor(YY) {
        const rY = 0 != YY;
        this._instanceDivisor = YY, rY !== this._instanced && (this._instanced = rY, this._computeHashCode())
      }
      get _maxVerticesCount() {
        const YY = this.getData();
        return YY ? Array.isArray(YY) ? YY.length / (this.byteStride / 4) - this.byteOffset / 4 : (YY.byteLength - this.byteOffset) / this.byteStride : 0
      }
      constructor(YY, rY, DY, FY, AY, RY, uY, sY, iY, yY) {
        let QY, oY = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          WY = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
          EY = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
          mY = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
        if (this._isDisposed = !1, this.engine = YY, "object" === typeof FY && null !== FY ? (QY = FY.updatable ?? !1, AY = FY.postponeInternalCreation, RY = FY.stride, uY = FY.instanced, sY = FY.offset, iY = FY.size, yY = FY.type, oY = FY.normalized ?? !1, WY = FY.useBytes ?? !1, EY = FY.divisor ?? 1, mY = FY.takeBufferOwnership ?? !1, this._label = FY.label) : QY = !!FY, rY instanceof OY ? (this._buffer = rY, this._ownsBuffer = mY) : (this._buffer = new OY(YY, rY, QY, RY, AY, uY, WY, EY, this._label), this._ownsBuffer = !0), this.uniqueId = gY._Counter++, this._kind = DY, void 0 === yY) {
          const YY = this.getData();
          this.type = YY ? vY(YY) : gY.FLOAT
        } else this.type = yY;
        const VY = (0, IY.n)(this.type);
        WY ? (this._size = iY || (RY ? RY / VY : aY(DY)), this.byteStride = RY || this._buffer.byteStride || this._size * VY, this.byteOffset = sY || 0) : (this._size = iY || RY || aY(DY), this.byteStride = RY ? RY * VY : this._buffer.byteStride || this._size * VY, this.byteOffset = (sY || 0) * VY), this.normalized = oY, this._instanced = void 0 !== uY && uY, this._instanceDivisor = uY ? EY : 0, this._alignBuffer(), this._computeHashCode()
      }
      static _GetTypeHashIndex(YY) {
        switch (YY) {
          case gY.BYTE:
            return 0;
          case gY.UNSIGNED_BYTE:
            return 1;
          case gY.SHORT:
            return 2;
          case gY.UNSIGNED_SHORT:
            return 3;
          case gY.INT:
            return 4;
          case gY.UNSIGNED_INT:
            return 5;
          case gY.FLOAT:
            return 6;
          case gY.HALF_FLOAT:
            return 7;
          default:
            throw new Error(`Invalid vertex buffer type '${YY}'`)
        }
      }
      _computeHashCode() {
        this.hashCode = (gY._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
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
      getFloatData(YY, rY) {
        const DY = this.getData();
        return DY ? (0, IY.l)(DY, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, YY, rY) : null
      }
      getBuffer() {
        return this._buffer.getBuffer()
      }
      getWrapperBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / (0, IY.n)(this.type)
      }
      SrY() {
        return this.byteOffset / (0, IY.n)(this.type)
      }
      getSize() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, IY.n)(this.type) : this._size
      }
      getIsInstanced() {
        return this._instanced
      }
      getInstanceDivisor() {
        return this._instanceDivisor
      }
      create(YY) {
        this._buffer.create(YY), this._alignBuffer()
      }
      update(YY) {
        this._buffer.update(YY), this._alignBuffer()
      }
      updateDirectly(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._buffer.updateDirectly(YY, rY, void 0, DY), this._alignBuffer()
      }
      dispose() {
        this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
      }
      forEach(YY, rY) {
        (0, IY.h)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, YY, this.normalized, ((YY, DY) => {
          for (let FY = 0; FY < this._size; FY++) rY(YY[FY], DY + FY)
        }))
      }
      _alignBuffer() {}
    }

    function aY(YY) {
      switch (YY) {
        case gY.UVKind:
        case gY.UV2Kind:
        case gY.UV3Kind:
        case gY.UV4Kind:
        case gY.UV5Kind:
        case gY.UV6Kind:
          return 2;
        case gY.NormalKind:
        case gY.PositionKind:
          return 3;
        case gY.ColorKind:
        case gY.ColorInstanceKind:
        case gY.MatricesIndicesKind:
        case gY.MatricesIndicesExtraKind:
        case gY.MatricesWeightsKind:
        case gY.MatricesWeightsExtraKind:
        case gY.TangentKind:
          return 4;
        default:
          throw new Error("Invalid kind '" + YY + "'")
      }
    }

    function vY(YY) {
      return YY instanceof Int8Array ? gY.BYTE : YY instanceof Uint8Array ? gY.UNSIGNED_BYTE : YY instanceof Int16Array ? gY.SHORT : YY instanceof Uint16Array ? gY.UNSIGNED_SHORT : YY instanceof Int32Array ? gY.INT : YY instanceof Uint32Array ? gY.UNSIGNED_INT : gY.FLOAT
    }

    function uY(YY) {
      return (0, IY.n)(YY)
    }

    function sY(YY, rY, DY, FY, AY, RY, OY, gY) {
      (0, IY.h)(YY, rY, DY, FY, AY, RY, OY, ((YY, rY) => {
        for (let DY = 0; DY < FY; DY++) gY(YY[DY], rY + DY)
      }))
    }

    function iY(YY, rY, DY, FY, AY, RY, OY, gY) {
      return (0, IY.l)(YY, rY, DY, FY, AY, RY, OY, gY)
    }
    gY._Counter = 0, gY.BYTE = 5120, gY.UNSIGNED_BYTE = 5121, gY.SHORT = 5122, gY.UNSIGNED_SHORT = 5123, gY.INT = 5124, gY.UNSIGNED_INT = 5125, gY.FLOAT = 5126, gY.HALF_FLOAT = 5131, gY.PositionKind = "position", gY.NormalKind = "normal", gY.TangentKind = "tangent", gY.UVKind = "uv", gY.UV2Kind = "uv2", gY.UV3Kind = "uv3", gY.UV4Kind = "uv4", gY.UV5Kind = "uv5", gY.UV6Kind = "uv6", gY.ColorKind = "color", gY.ColorInstanceKind = "instanceColor", gY.MatricesIndicesKind = "matricesIndices", gY.MatricesWeightsKind = "matricesWeights", gY.MatricesIndicesExtraKind = "matricesIndicesExtra", gY.MatricesWeightsExtraKind = "matricesWeightsExtra";
    let yY = !1;

    function QY() {
      yY || (yY = !0, gY.DeduceStride = aY, gY.GetDataType = vY, gY.GetTypeByteLength = uY, gY.ForEach = sY, gY.GetFloatData = iY)
    }
  },
  39056: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => FY
    });
    class FY {
      get underlyingResource() {
        return null
      }
      constructor() {
        this.references = 0, this.gu = 0, this.is32Bits = !1, this.uniqueId = FY._Counter++
      }
    }
    FY._Counter = 0
  },
  39261: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => IY
    });
    var FY = DY(36524),
      AY = DY(39270);
    class IY {
      constructor() {
        this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this.aimTransform = null, this.gripTransform = null
      }
      getNormal() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!this.pickedMesh || rY && !this.pickedMesh.isVerticesDataPresent(AY.l.NormalKind)) return null;
        let DY, IY = this.pickedMesh.XIY();
        0 === IY?.length && (IY = null);
        const RY = FY.n.xy[0],
          OY = FY.n.xy[1],
          gY = FY.n.xy[2];
        if (rY) {
          const YY = this.pickedMesh.getVerticesData(AY.l.NormalKind);
          let rY = IY ? FY.r.FromArrayToRef(YY, 3 * IY[3 * this.faceId], RY) : RY.p_(YY[3 * this.faceId * 3], YY[3 * this.faceId * 3 + 1], YY[3 * this.faceId * 3 + 2]),
            aY = IY ? FY.r.FromArrayToRef(YY, 3 * IY[3 * this.faceId + 1], OY) : OY.p_(YY[3 * (3 * this.faceId + 1)], YY[3 * (3 * this.faceId + 1) + 1], YY[3 * (3 * this.faceId + 1) + 2]),
            vY = IY ? FY.r.FromArrayToRef(YY, 3 * IY[3 * this.faceId + 2], gY) : gY.p_(YY[3 * (3 * this.faceId + 2)], YY[3 * (3 * this.faceId + 2) + 1], YY[3 * (3 * this.faceId + 2) + 2]);
          rY = rY.scale(this.bu), aY = aY.scale(this.bv), vY = vY.scale(1 - this.bu - this.bv), DY = new FY.r(rY.x + aY.x + vY.x, rY.y + aY.y + vY.y, rY.z + aY.z + vY.z)
        } else {
          const YY = this.pickedMesh.getVerticesData(AY.l.PositionKind),
            rY = IY ? FY.r.FromArrayToRef(YY, 3 * IY[3 * this.faceId], RY) : RY.p_(YY[3 * this.faceId * 3], YY[3 * this.faceId * 3 + 1], YY[3 * this.faceId * 3 + 2]),
            aY = IY ? FY.r.FromArrayToRef(YY, 3 * IY[3 * this.faceId + 1], OY) : OY.p_(YY[3 * (3 * this.faceId + 1)], YY[3 * (3 * this.faceId + 1) + 1], YY[3 * (3 * this.faceId + 1) + 2]),
            vY = IY ? FY.r.FromArrayToRef(YY, 3 * IY[3 * this.faceId + 2], gY) : gY.p_(YY[3 * (3 * this.faceId + 2)], YY[3 * (3 * this.faceId + 2) + 1], YY[3 * (3 * this.faceId + 2) + 2]),
            uY = rY.subtract(aY),
            sY = vY.subtract(aY);
          DY = FY.r.Cross(uY, sY)
        }
        const aY = (YY, rY) => {
          if (-1 !== this.thinInstanceIndex) {
            const DY = YY._thinInstanceDataStorage.matrixData,
              AY = this.thinInstanceIndex << 4;
            if (DY && DY.length > AY) {
              const YY = FY.n.Matrix[0];
              FY.e.FromArrayToRef(DY, AY, YY), FY.r.TransformNormalToRef(rY, YY, rY)
            }
          }
          let DY = YY.getWorldMatrix();
          YY.nonUniformScaling && (FY.n.Matrix[0].brY(DY), DY = FY.n.Matrix[0], DY.setTranslationFromFloats(0, 0, 0), DY.invert(), DY.transposeToRef(FY.n.Matrix[1]), DY = FY.n.Matrix[1]), FY.r.TransformNormalToRef(rY, DY, rY)
        };
        if (YY && aY(this.pickedMesh, DY), this.ray) {
          const rY = FY.n.xy[0].brY(DY);
          YY || aY(this.pickedMesh, rY), FY.r.Dot(rY, this.ray.direction) > 0 && DY.negateInPlace()
        }
        return DY.normalize(), DY
      }
      getTextureCoordinates() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AY.l.UVKind;
        if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(YY)) return null;
        const rY = this.pickedMesh.XIY();
        if (!rY) return null;
        const DY = this.pickedMesh.getVerticesData(YY);
        if (!DY) return null;
        let IY = FY.q.FromArray(DY, 2 * rY[3 * this.faceId]),
          RY = FY.q.FromArray(DY, 2 * rY[3 * this.faceId + 1]),
          OY = FY.q.FromArray(DY, 2 * rY[3 * this.faceId + 2]);
        return IY = IY.scale(this.bu), RY = RY.scale(this.bv), OY = OY.scale(1 - this.bu - this.bv), new FY.q(IY.x + RY.x + OY.x, IY.y + RY.y + OY.y)
      }
    }
  },
  39102: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => IY
    });
    var FY = DY(38982);
    let AY = !1;

    function IY() {
      AY || (AY = !0, FY.ThinEngine.prototype.updateDynamicIndexBuffer = function(YY, rY) {
        let DY;
        this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(YY), DY = YY.is32Bits ? rY instanceof Uint32Array ? rY : new Uint32Array(rY) : rY instanceof Uint16Array ? rY : new Uint16Array(rY), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, DY, this._gl.DYNAMIC_DRAW), this._resetIndexBufferBinding()
      }, FY.ThinEngine.prototype.updateDynamicVertexBuffer = function(YY, rY, DY, FY) {
        this.bindArrayBuffer(YY), void 0 === DY && (DY = 0);
        const AY = rY.byteLength || rY.length;
        void 0 === FY || FY >= AY && 0 === DY ? rY instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, DY, new Float32Array(rY)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, DY, rY) : rY instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, DY, new Float32Array(rY).subarray(0, FY / 4)) : (rY = ArrayBuffer.isView(rY) ? new Uint8Array(rY.buffer, rY.byteOffset, FY) : new Uint8Array(rY, 0, FY), this._gl.bufferSubData(this._gl.ARRAY_BUFFER, DY, rY)), this._resetVertexBufferBinding()
      })
    }
  },
  39074: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => FY
    });
    class FY {
      get underlyingResource() {
        return this._webGLTexture
      }
      constructor() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          rY = arguments.length > 1 ? arguments[1] : void 0;
        if (this._MSAARenderBuffers = null, this._context = rY, !YY && (YY = rY.createTexture(), !YY)) throw new Error("Unable to create webGL texture");
        this.set(YY)
      }
      setUsage() {}
      set(YY) {
        this._webGLTexture = YY
      }
      reset() {
        this._webGLTexture = null, this._MSAARenderBuffers = null
      }
      addMSAARenderBuffer(YY) {
        this._MSAARenderBuffers || (this._MSAARenderBuffers = []), this._MSAARenderBuffers.push(YY)
      }
      releaseMSAARenderBuffers() {
        if (this._MSAARenderBuffers) {
          for (const YY of this._MSAARenderBuffers) this._context.deleteRenderbuffer(YY);
          this._MSAARenderBuffers = null
        }
      }
      getMSAARenderBuffer() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._MSAARenderBuffers?.[YY] ?? null
      }
      release() {
        this.releaseMSAARenderBuffers(), this._webGLTexture && this._context.deleteTexture(this._webGLTexture), this.reset()
      }
    }
  },
  39041: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => EY
    });
    var FY = DY(36552),
      AY = DY(38991),
      IY = DY(36546),
      RY = DY(38040),
      OY = DY(36542),
      gY = DY(39044);
    class aY {
      constructor() {
        let YY = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, YY && this.reset()
      }
      get isDirty() {
        return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty || this._isZOffsetDirty || this._isFrontFaceDirty
      }
      get zOffset() {
        return this._zOffset
      }
      set zOffset(YY) {
        this._zOffset !== YY && (this._zOffset = YY, this._isZOffsetDirty = !0)
      }
      get zOffsetUnits() {
        return this._zOffsetUnits
      }
      set zOffsetUnits(YY) {
        this._zOffsetUnits !== YY && (this._zOffsetUnits = YY, this._isZOffsetDirty = !0)
      }
      get cullFace() {
        return this._cullFace
      }
      set cullFace(YY) {
        this._cullFace !== YY && (this._cullFace = YY, this._isCullFaceDirty = !0)
      }
      get cull() {
        return this._cull
      }
      set cull(YY) {
        this._cull !== YY && (this._cull = YY, this._isCullDirty = !0)
      }
      get depthFunc() {
        return this._depthFunc
      }
      set depthFunc(YY) {
        this._depthFunc !== YY && (this._depthFunc = YY, this._isDepthFuncDirty = !0)
      }
      get depthMask() {
        return this._depthMask
      }
      set depthMask(YY) {
        this._depthMask !== YY && (this._depthMask = YY, this._isDepthMaskDirty = !0)
      }
      get depthTest() {
        return this._depthTest
      }
      set depthTest(YY) {
        this._depthTest !== YY && (this._depthTest = YY, this._isDepthTestDirty = !0)
      }
      get frontFace() {
        return this._frontFace
      }
      set frontFace(YY) {
        this._frontFace !== YY && (this._frontFace = YY, this._isFrontFaceDirty = !0)
      }
      reset() {
        this._depthMask = !0, this._depthTest = !0, this._depthFunc = null, this._cullFace = null, this._cull = null, this._zOffset = 0, this._zOffsetUnits = 0, this._frontFace = null, this._isDepthTestDirty = !0, this._isDepthMaskDirty = !0, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !0, this._isFrontFaceDirty = !1
      }
      apply(YY) {
        this.isDirty && (this._isCullDirty && (this.cull ? YY.enable(YY.CULL_FACE) : YY.disable(YY.CULL_FACE), this._isCullDirty = !1), this._isCullFaceDirty && (YY.cullFace(this.cullFace), this._isCullFaceDirty = !1), this._isDepthMaskDirty && (YY.depthMask(this.depthMask), this._isDepthMaskDirty = !1), this._isDepthTestDirty && (this.depthTest ? YY.enable(YY.DEPTH_TEST) : YY.disable(YY.DEPTH_TEST), this._isDepthTestDirty = !1), this._isDepthFuncDirty && (YY.depthFunc(this.depthFunc), this._isDepthFuncDirty = !1), this._isZOffsetDirty && (this.zOffset || this.zOffsetUnits ? (YY.enable(YY.POLYGON_OFFSET_FILL), YY.polygonOffset(this.zOffset, this.zOffsetUnits)) : YY.disable(YY.POLYGON_OFFSET_FILL), this._isZOffsetDirty = !1), this._isFrontFaceDirty && (YY.frontFace(this.frontFace), this._isFrontFaceDirty = !1))
      }
    }
    class vY {
      get isDirty() {
        return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty
      }
      get func() {
        return this._func
      }
      set func(YY) {
        this._func !== YY && (this._func = YY, this._isStencilFuncDirty = !0)
      }
      get backFunc() {
        return this._func
      }
      set backFunc(YY) {
        this._backFunc !== YY && (this._backFunc = YY, this._isStencilFuncDirty = !0)
      }
      get funcRef() {
        return this._funcRef
      }
      set funcRef(YY) {
        this._funcRef !== YY && (this._funcRef = YY, this._isStencilFuncDirty = !0)
      }
      get funcMask() {
        return this._funcMask
      }
      set funcMask(YY) {
        this._funcMask !== YY && (this._funcMask = YY, this._isStencilFuncDirty = !0)
      }
      get opStencilFail() {
        return this._opStencilFail
      }
      set opStencilFail(YY) {
        this._opStencilFail !== YY && (this._opStencilFail = YY, this._isStencilOpDirty = !0)
      }
      get opDepthFail() {
        return this._opDepthFail
      }
      set opDepthFail(YY) {
        this._opDepthFail !== YY && (this._opDepthFail = YY, this._isStencilOpDirty = !0)
      }
      get opStencilDepthPass() {
        return this._opStencilDepthPass
      }
      set opStencilDepthPass(YY) {
        this._opStencilDepthPass !== YY && (this._opStencilDepthPass = YY, this._isStencilOpDirty = !0)
      }
      get backOpStencilFail() {
        return this._backOpStencilFail
      }
      set backOpStencilFail(YY) {
        this._backOpStencilFail !== YY && (this._backOpStencilFail = YY, this._isStencilOpDirty = !0)
      }
      get backOpDepthFail() {
        return this._backOpDepthFail
      }
      set backOpDepthFail(YY) {
        this._backOpDepthFail !== YY && (this._backOpDepthFail = YY, this._isStencilOpDirty = !0)
      }
      get backOpStencilDepthPass() {
        return this._backOpStencilDepthPass
      }
      set backOpStencilDepthPass(YY) {
        this._backOpStencilDepthPass !== YY && (this._backOpStencilDepthPass = YY, this._isStencilOpDirty = !0)
      }
      get mask() {
        return this._mask
      }
      set mask(YY) {
        this._mask !== YY && (this._mask = YY, this._isStencilMaskDirty = !0)
      }
      get enabled() {
        return this._enabled
      }
      set enabled(YY) {
        this._enabled !== YY && (this._enabled = YY, this._isStencilTestDirty = !0)
      }
      constructor() {
        let YY = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isStencilTestDirty = !1, this._isStencilMaskDirty = !1, this._isStencilFuncDirty = !1, this._isStencilOpDirty = !1, this.useStencilGlobalOnly = !1, YY && this.reset()
      }
      reset() {
        this.stencilMaterial = void 0, this.stencilGlobal?.reset(), this._isStencilTestDirty = !0, this._isStencilMaskDirty = !0, this._isStencilFuncDirty = !0, this._isStencilOpDirty = !0
      }
      apply(YY) {
        if (!YY) return;
        const rY = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
        this.enabled = rY ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = rY ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = rY ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = rY ? this.stencilMaterial.funcRef : this.stencilGlobal.funcRef, this.funcMask = rY ? this.stencilMaterial.funcMask : this.stencilGlobal.funcMask, this.opStencilFail = rY ? this.stencilMaterial.opStencilFail : this.stencilGlobal.opStencilFail, this.opDepthFail = rY ? this.stencilMaterial.opDepthFail : this.stencilGlobal.opDepthFail, this.opStencilDepthPass = rY ? this.stencilMaterial.opStencilDepthPass : this.stencilGlobal.opStencilDepthPass, this.backOpStencilFail = rY ? this.stencilMaterial.backOpStencilFail : this.stencilGlobal.backOpStencilFail, this.backOpDepthFail = rY ? this.stencilMaterial.backOpDepthFail : this.stencilGlobal.backOpDepthFail, this.backOpStencilDepthPass = rY ? this.stencilMaterial.backOpStencilDepthPass : this.stencilGlobal.backOpStencilDepthPass, this.mask = rY ? this.stencilMaterial.mask : this.stencilGlobal.mask, this.isDirty && (this._isStencilTestDirty && (this.enabled ? YY.enable(YY.STENCIL_TEST) : YY.disable(YY.STENCIL_TEST), this._isStencilTestDirty = !1), this._isStencilMaskDirty && (YY.stencilMask(this.mask), this._isStencilMaskDirty = !1), this._isStencilFuncDirty && (YY.stencilFuncSeparate(YY.FRONT, this.func, this.funcRef, this.funcMask), YY.stencilFuncSeparate(YY.BACK, this.backFunc, this.funcRef, this.funcMask), this._isStencilFuncDirty = !1), this._isStencilOpDirty && (YY.stencilOpSeparate(YY.FRONT, this.opStencilFail, this.opDepthFail, this.opStencilDepthPass), YY.stencilOpSeparate(YY.BACK, this.backOpStencilFail, this.backOpDepthFail, this.backOpStencilDepthPass), this._isStencilOpDirty = !1))
      }
    }
    class uY {
      constructor() {
        this.reset()
      }
      reset() {
        this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = uY.ALWAYS, this.opStencilFail = uY.KEEP, this.opDepthFail = uY.KEEP, this.opStencilDepthPass = uY.REPLACE, this.backFunc = uY.ALWAYS, this.backOpStencilFail = uY.KEEP, this.backOpDepthFail = uY.KEEP, this.backOpStencilDepthPass = uY.REPLACE
      }
      get stencilFunc() {
        return this.func
      }
      set stencilFunc(YY) {
        this.func = YY
      }
      get stencilBackFunc() {
        return this.backFunc
      }
      set stencilBackFunc(YY) {
        this.backFunc = YY
      }
      get stencilFuncRef() {
        return this.funcRef
      }
      set stencilFuncRef(YY) {
        this.funcRef = YY
      }
      get stencilFuncMask() {
        return this.funcMask
      }
      set stencilFuncMask(YY) {
        this.funcMask = YY
      }
      get stencilOpStencilFail() {
        return this.opStencilFail
      }
      set stencilOpStencilFail(YY) {
        this.opStencilFail = YY
      }
      get stencilOpDepthFail() {
        return this.opDepthFail
      }
      set stencilOpDepthFail(YY) {
        this.opDepthFail = YY
      }
      get stencilOpStencilDepthPass() {
        return this.opStencilDepthPass
      }
      set stencilOpStencilDepthPass(YY) {
        this.opStencilDepthPass = YY
      }
      get stencilBackOpStencilFail() {
        return this.backOpStencilFail
      }
      set stencilBackOpStencilFail(YY) {
        this.backOpStencilFail = YY
      }
      get stencilBackOpDepthFail() {
        return this.backOpDepthFail
      }
      set stencilBackOpDepthFail(YY) {
        this.backOpDepthFail = YY
      }
      get stencilBackOpStencilDepthPass() {
        return this.backOpStencilDepthPass
      }
      set stencilBackOpStencilDepthPass(YY) {
        this.backOpStencilDepthPass = YY
      }
      get stencilMask() {
        return this.mask
      }
      set stencilMask(YY) {
        this.mask = YY
      }
      get stencilTest() {
        return this.enabled
      }
      set stencilTest(YY) {
        this.enabled = YY
      }
    }
    uY.ALWAYS = 519, uY.KEEP = 7680, uY.REPLACE = 7681;
    var sY = DY(39046),
      iY = DY(39029),
      yY = DY(38975),
      QY = DY(39013),
      oY = DY(39021);

    function WY(YY, rY) {
      if (rY) {
        const {
          requestAnimationFrame: DY
        } = rY;
        if ("function" === typeof DY) return DY(YY)
      }
      if ((0, QY.l)()) {
        const {
          requestAnimationFrame: DY
        } = rY || window;
        if ("function" === typeof DY) return DY(YY)
      } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(YY);
      return setTimeout(YY, 16)
    }
    class EY {
      get frameId() {
        return this._frameId
      }
      get isWebGPU() {
        return this._isWebGPU
      }
      _getShaderProcessor(YY) {
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
      get QDY() {
        return this._useReverseDepthBuffer
      }
      set QDY(YY) {
        YY !== this._useReverseDepthBuffer && (this._useReverseDepthBuffer = YY, this._depthCullingState.depthFunc = YY ? 518 : 515)
      }
      setColorWrite(YY) {
        YY !== this._colorWrite && (this._colorWriteChanged = !0, this._colorWrite = YY)
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
      _getGlobalDefines(YY) {
        if (YY) return this.isNDCHalfZRange ? YY.IS_NDC_HALF_ZRANGE = "" : delete YY.IS_NDC_HALF_ZRANGE, this.QDY ? YY.USE_REVERSE_DEPTHBUFFER = "" : delete YY.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? YY.USE_EXACT_SRGB_CONVERSIONS = "" : delete YY.USE_EXACT_SRGB_CONVERSIONS);
        {
          let YY = "";
          return this.isNDCHalfZRange && (YY += "#define IS_NDC_HALF_ZRANGE"), this.QDY && (YY && (YY += "\n"), YY += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (YY && (YY += "\n"), YY += "#define USE_EXACT_SRGB_CONVERSIONS"), YY
        }
      }
      _rebuildInternalTextures() {
        const YY = this._internalTexturesCache.slice();
        for (const rY of YY) rY._rebuild()
      }
      _rebuildRenderTargetWrappers() {
        const YY = this._renderTargetWrapperCache.slice();
        for (const rY of YY) rY.textures?.some((YY => 15 === YY.source)) || rY._rebuild()
      }
      _rebuildEffects() {
        for (const YY in this._compiledEffects) {
          const rY = this._compiledEffects[YY];
          rY._pipelineContext = null, rY._prepareEffect()
        }
        AY.e.ResetCache()
      }
      _rebuildGraphicsResources() {
        this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
      }
      _flagContextRestored() {
        RY.d.Warn(this.name + " context successfully restored."), this.onContextRestoredObservable.notifyObservers(this), this._contextWasLost = !1
      }
      _restoreEngineAfterContextLost(YY) {
        setTimeout((() => {
          this._clearEmptyResources();
          const rY = this._depthCullingState.depthTest,
            DY = this._depthCullingState.depthFunc,
            FY = this._depthCullingState.depthMask,
            AY = this._stencilState.stencilTest;
          YY(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = rY, this._depthCullingState.depthFunc = DY, this._depthCullingState.depthMask = FY, this._stencilState.stencilTest = AY, this._flagContextRestored()
        }), 0)
      }
      get CrY() {
        return this._isDisposed
      }
      get snapshotRendering() {
        return !1
      }
      set snapshotRendering(YY) {}
      get snapshotRenderingMode() {
        return 0
      }
      set snapshotRenderingMode(YY) {}
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
          const YY = new Uint8Array(4),
            rY = [YY, YY, YY, YY, YY, YY];
          this._emptyCubeTexture = this.createRawCubeTexture(rY, 1, 5, 0, !1, !1, 1)
        }
        return this._emptyCubeTexture
      }
      set framebufferDimensionsObject(YY) {
        this._framebufferDimensionsObject = YY
      }
      get activeRenderLoops() {
        return this._activeRenderLoops
      }
      stopRenderLoop(YY) {
        if (!YY) return this._activeRenderLoops.length = 0, void this._cancelFrame();
        const rY = this._activeRenderLoops.indexOf(YY);
        rY >= 0 && (this._activeRenderLoops.splice(rY, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
      }
      _cancelFrame() {
        if (this.customAnimationFrameRequester) {
          if (0 !== this._frameHandler) {
            this._frameHandler = 0;
            const {
              cancelAnimationFrame: YY
            } = this.customAnimationFrameRequester;
            YY && YY(this.customAnimationFrameRequester.ny), delete this.customAnimationFrameRequester.ny
          }
        } else if (0 !== this._frameHandler) {
          const YY = this._frameHandler;
          if (this._frameHandler = 0, (0, QY.l)()) {
            const {
              cancelAnimationFrame: rY
            } = this.getHostWindow() || window;
            if ("function" === typeof rY) return rY(YY)
          } else if ("function" === typeof cancelAnimationFrame) return cancelAnimationFrame(YY);
          return clearTimeout(YY)
        }
      }
      Om() {
        this.onBeginFrameObservable.notifyObservers(this)
      }
      Qm() {
        this._frameId++, this.onEndFrameObservable.notifyObservers(this)
      }
      get maxFPS() {
        return this._maxFPS
      }
      set maxFPS(YY) {
        this._maxFPS = YY, void 0 !== YY && (this._minFrameTime = YY <= 0 ? Number.MAX_VALUE : 1e3 / YY)
      }
      _isOverFrameTime(YY) {
        if (!YY || void 0 === this._maxFPS) return !1;
        const rY = YY - this._lastFrameTime;
        return this._lastFrameTime = YY, this._renderAccumulator += rY, this._renderAccumulator < this._minFrameTime || (this._renderAccumulator -= this._minFrameTime, this._renderAccumulator > this._minFrameTime && (this._renderAccumulator = this._minFrameTime), !1)
      }
      _processFrame(YY) {
        if (this._frameHandler = 0, !this._contextWasLost && !this._isOverFrameTime(YY)) {
          let YY = !0;
          (this.CrY || !this.renderEvenInBackground && this._windowIsBackground) && (YY = !1), YY && (this.Om(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.Qm())
        }
      }
      _renderLoop(YY) {
        this._processFrame(YY), this._activeRenderLoops.length > 0 && 0 === this._frameHandler && this._queueNewFrameForRenderLoop()
      }
      _renderFrame() {
        for (let YY = 0; YY < this._activeRenderLoops.length; YY++) {
          (0, this._activeRenderLoops[YY])()
        }
      }
      _renderViews() {
        return !1
      }
      _queueNewFrame(YY, rY) {
        return WY(YY, rY)
      }
      _queueNewFrameForRenderLoop() {
        this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.ny = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.ny) : this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow())
      }
      runRenderLoop(YY) {
        -1 === this._activeRenderLoops.indexOf(YY) && (this._activeRenderLoops.push(YY), 1 === this._activeRenderLoops.length && 0 === this._frameHandler && this._queueNewFrameForRenderLoop())
      }
      getDepthBuffer() {
        return this._depthCullingState.depthTest
      }
      setDepthBuffer(YY) {
        this._depthCullingState.depthTest = YY
      }
      setZOffset(YY) {
        this._depthCullingState.zOffset = this.QDY ? -YY : YY
      }
      getZOffset() {
        const YY = this._depthCullingState.zOffset;
        return this.QDY ? -YY : YY
      }
      setZOffsetUnits(YY) {
        this._depthCullingState.zOffsetUnits = this.QDY ? -YY : YY
      }
      getZOffsetUnits() {
        const YY = this._depthCullingState.zOffsetUnits;
        return this.QDY ? -YY : YY
      }
      getHostWindow() {
        return (0, QY.l)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
      }
      get compatibilityMode() {
        return this._compatibilityMode
      }
      set compatibilityMode(YY) {
        this._compatibilityMode = !0
      }
      _rebuildTextures() {
        for (const YY of this.scenes) YY._rebuildTextures();
        for (const YY of this._virtualScenes) YY._rebuildTextures()
      }
      _releaseRenderTargetWrapper(YY) {
        const rY = this._renderTargetWrapperCache.indexOf(YY); - 1 !== rY && this._renderTargetWrapperCache.splice(rY, 1)
      }
      get currentViewport() {
        return this._cachedViewport
      }
      setViewport(YY, rY, DY) {
        const FY = rY || this.getRenderWidth(),
          AY = DY || this.getRenderHeight(),
          IY = YY.x || 0,
          RY = YY.y || 0;
        this._cachedViewport = YY, this._viewport(IY * FY, RY * AY, FY * YY.width, AY * YY.height)
      }
      createCanvasImage() {
        return document.createElement("img")
      }
      createCanvasPath2D(YY) {
        return new Path2D(YY)
      }
      get description() {
        let YY = this.name + this.version;
        return this._caps.parallelShaderCompile && (YY += " - Parallel shader compilation"), YY
      }
      _createTextureBase(YY, rY, DY, FY) {
        let AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          OY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          gY = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          aY = arguments.length > 7 ? arguments[7] : void 0,
          vY = arguments.length > 8 ? arguments[8] : void 0,
          uY = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          sY = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          iY = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
          QY = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
          oY = arguments.length > 13 ? arguments[13] : void 0,
          WY = arguments.length > 14 ? arguments[14] : void 0,
          mY = arguments.length > 15 ? arguments[15] : void 0;
        const VY = "data:" === (YY = YY || "").substring(0, 5),
          SY = "blob:" === YY.substring(0, 5),
          lY = VY && -1 !== YY.indexOf(";base64,"),
          TY = sY || new yY.c(this, 1);
        TY !== sY && (TY.label = YY.substring(0, 60));
        const eY = YY;
        !this._transformTextureUrl || lY || sY || uY || (YY = this._transformTextureUrl(YY)), eY !== YY && (TY._originalUrl = eY);
        const NY = YY.lastIndexOf(".");
        let BY = QY || (NY > -1 ? YY.substring(NY).toLowerCase() : "");
        BY.indexOf("?") > -1 && (BY = BY.split("?")[0]);
        const cY = EY.GetCompatibleTextureLoader(BY, oY);
        FY && FY.addPendingData(TY), TY.url = YY, TY.generateMipMaps = !rY, TY.samplingMode = AY, TY.invertY = DY, TY._useSRGBBuffer = this._getUseSRGBBuffer(!!mY, rY), this._doNotHandleContextLost || (TY._buffer = uY);
        let KY = null;
        OY && !sY && (KY = TY.onLoadedObservable.add(OY)), sY || this._internalTexturesCache.push(TY);
        const HY = (DY, sY) => {
          FY && FY.removePendingData(TY), YY === eY ? (KY && TY.onLoadedObservable.remove(KY), IY.d.UseFallbackTexture && YY !== IY.d.FallbackTexture && this._createTextureBase(IY.d.FallbackTexture, rY, TY.invertY, FY, AY, null, gY, aY, vY, uY, TY), DY = (DY || "Unknown error") + (IY.d.UseFallbackTexture ? " - Fallback texture was used" : ""), TY.onErrorObservable.notifyObservers({
            message: DY,
            exception: sY
          }), gY && gY(DY, sY)) : (RY.d.Warn(`Failed to load ${YY}, falling back to ${eY}`), this._createTextureBase(eY, rY, TY.invertY, FY, AY, OY, gY, aY, vY, uY, TY, iY, QY, oY, WY, mY))
        };
        if (cY) {
          const rY = async YY => {
            (await cY).loadData(YY, TY, ((YY, rY, DY, IY, RY, OY) => {
              OY ? HY("TextureLoader failed to load data") : aY(TY, BY, FY, {
                width: YY,
                height: rY
              }, TY.invertY, !DY, IY, (() => (RY(), !1)), AY)
            }), WY)
          };
          if (uY) {
            const YY = async YY => {
              try {
                await rY(YY)
              } catch (DY) {
                HY("Failed to parse texture data", DY)
              }
            };
            uY instanceof ArrayBuffer ? YY(new Uint8Array(uY)) : ArrayBuffer.isView(uY) ? YY(uY) : gY && gY("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null)
          } else this._loadFile(YY, (async YY => {
            try {
              await rY(new Uint8Array(YY))
            } catch (DY) {
              HY("Failed to parse texture data", DY)
            }
          }), void 0, FY ? FY.offlineProvider : void 0, !0, ((YY, rY) => {
            HY("Unable to load " + (YY && YY.responseURL, rY))
          }))
        } else {
          const DY = YY => {
            SY && !this._doNotHandleContextLost && (TY._buffer = YY), aY(TY, BY, FY, YY, TY.invertY, rY, !1, vY, AY)
          };
          !VY || lY ? uY && ("string" === typeof uY.decoding || uY.close) ? DY(uY) : EY._FileToolsLoadImage(YY || "", DY, HY, FY ? FY.offlineProvider : null, oY, TY.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : "string" === typeof uY || uY instanceof ArrayBuffer || ArrayBuffer.isView(uY) || uY instanceof Blob ? EY._FileToolsLoadImage(uY, DY, HY, FY ? FY.offlineProvider : null, oY, TY.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : uY && DY(uY)
        }
        return TY
      }
      _rebuildBuffers() {
        for (const YY of this._uniformBuffers) YY._rebuildAfterContextLost()
      }
      get _shouldUseHighPrecisionShader() {
        return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed)
      }
      getHostDocument() {
        return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, QY.e)() ? document : null
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
        for (const YY in this._boundTexturesCache) Object.prototype.hasOwnProperty.call(this._boundTexturesCache, YY) && (this._boundTexturesCache[YY] = null);
        this._currentTextureChannel = -1
      }
      get name() {
        return this._name
      }
      set name(YY) {
        this._name = YY
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
      setHardwareScalingLevel(YY) {
        this._hardwareScalingLevel = YY, this.resize()
      }
      getHardwareScalingLevel() {
        return this._hardwareScalingLevel
      }
      get doNotHandleContextLost() {
        return this._doNotHandleContextLost
      }
      set doNotHandleContextLost(YY) {
        this._doNotHandleContextLost = YY
      }
      get isStencilEnable() {
        return this._isStencilEnable
      }
      getCreationOptions() {
        return this._creationOptions
      }
      constructor(YY, rY, DY) {
        this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new aY, this._stencilStateComposer = new vY, this._stencilState = new uY, this._alphaState = new sY.b(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._activeRequests = [], this._badOS = !1, this._badDesktopOS = !1, this._compatibilityMode = !0, this._internalTexturesCache = new Array, this._currentRenderTarget = null, this._boundTexturesCache = {}, this._activeChannel = 0, this._currentTextureChannel = -1, this._viewportCached = {
          x: 0,
          y: 0,
          z: 0,
          w: 0
        }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new FY.e, this.onCanvasFocusObservable = new FY.e, this.onNewSceneAddedObservable = new FY.e, this.onResizeObservable = new FY.e, this.onCanvasPointerOutObservable = new FY.e, this.onEffectErrorObservable = new FY.e, this.disablePerformanceMonitorInBackground = !1, this.disableVertexArrayObjects = !1, this._frameId = 0, this.hostInformation = {
          isMobile: !1
        }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDepthBuffer = !1, this.isNDCHalfZRange = !1, this.hasOriginBottomLeft = !0, this._renderTargetWrapperCache = new Array, this._compiledEffects = {}, this._isDisposed = !1, this.scenes = [], this._virtualScenes = new Array, this.onBeforeTextureInitObservable = new FY.e, this.renderEvenInBackground = !0, this.preventCacheWipeBetweenFrames = !1, this._frameHandler = 0, this._activeRenderLoops = new Array, this.customAnimationFrameRequester = null, this._windowIsBackground = !1, this._boundRenderFunction = YY => this._renderLoop(YY), this._lastFrameTime = 0, this._renderAccumulator = 0, this.skipFrameRender = !1, this.onBeforeShaderCompilationObservable = new FY.e, this.onAfterShaderCompilationObservable = new FY.e, this.onBeginFrameObservable = new FY.e, this.onEndFrameObservable = new FY.e, this._transformTextureUrl = null, this._uniformBuffers = new Array, this._storageBuffers = new Array, this._highPrecisionShadersAllowed = !0, this.onContextLostObservable = new FY.e, this.onContextRestoredObservable = new FY.e, this._name = "", this.premultipliedAlpha = !0, this.adaptToDeviceRatio = !1, this._lastDevicePixelRatio = 1, this._doNotHandleContextLost = !1, this.cullBackFaces = null, this._renderPassNames = ["main"], this._onReleaseRenderPassObservable = null, this._fps = 60, this._deltaTime = 0, this._deterministicLockstep = !1, this._lockstepMaxSteps = 4, this._timeStep = 1 / 60, this.wT = new FY.e, this.onReleaseEffectsObservable = new FY.e, IY.d.Instances.push(this), this.startTime = gY.c.Now, this._stencilStateComposer.stencilGlobal = this._stencilState, OY.c.SetMatrixPrecision(!!rY.useLargeWorldRendering || !!rY.useHighPrecisionMatrix), (0, QY.i)() && navigator.userAgent && (this._badOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent), this._badDesktopOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), rY.antialias = YY ?? rY.antialias, rY.deterministicLockstep = rY.deterministicLockstep ?? !1, rY.lockstepMaxSteps = rY.lockstepMaxSteps ?? 4, rY.timeStep = rY.timeStep ?? 1 / 60, rY.stencil = rY.stencil ?? !0, this._audioContext = rY.audioEngineOptions?.audioContext ?? null, this._audioDestination = rY.audioEngineOptions?.audioDestination ?? null, this.premultipliedAlpha = rY.premultipliedAlpha ?? !0, this._doNotHandleContextLost = !!rY.doNotHandleContextLost, this._isStencilEnable = !!rY.stencil, this.useExactSrgbConversions = rY.useExactSrgbConversions ?? !1, this.canvasTabIndex = rY.canvasTabIndex ?? this.canvasTabIndex;
        const AY = (0, QY.l)() && window.devicePixelRatio || 1,
          RY = rY.limitDeviceRatio || AY;
        DY = DY || rY.adaptToDeviceRatio || !1, this.adaptToDeviceRatio = DY, this._hardwareScalingLevel = DY ? 1 / Math.min(RY, AY) : 1, this._lastDevicePixelRatio = AY, this._creationOptions = rY
      }
      resize() {
        let YY, rY, DY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.adaptToDeviceRatio) {
          const YY = (0, QY.l)() && window.devicePixelRatio || 1,
            rY = this._lastDevicePixelRatio / YY;
          this._lastDevicePixelRatio = YY, this._hardwareScalingLevel *= rY
        }
        if ((0, QY.l)() && (0, QY.e)())
          if (this._renderingCanvas) {
            const DY = this._renderingCanvas.getBoundingClientRect?.();
            YY = this._renderingCanvas.clientWidth || DY?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100, rY = this._renderingCanvas.clientHeight || DY?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100
          } else YY = window.innerWidth, rY = window.innerHeight;
        else YY = this._renderingCanvas ? this._renderingCanvas.width : 100, rY = this._renderingCanvas ? this._renderingCanvas.height : 100;
        this.setSize(YY / this._hardwareScalingLevel, rY / this._hardwareScalingLevel, DY)
      }
      setSize(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!this._renderingCanvas) return !1;
        if (YY |= 0, rY |= 0, !DY && this._renderingCanvas.width === YY && this._renderingCanvas.height === rY) return !1;
        if (this._renderingCanvas.width = YY, this._renderingCanvas.height = rY, this.scenes) {
          for (let YY = 0; YY < this.scenes.length; YY++) {
            const rY = this.scenes[YY];
            for (let YY = 0; YY < rY.cameras.length; YY++) {
              rY.cameras[YY]._currentRenderId = 0
            }
          }
          this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
        }
        return !0
      }
      createRawTexture(YY, rY, DY, FY, AY, IY, RY, OY, gY, aY, vY, uY) {
        throw (0, iY.i)("engine.rawTexture")
      }
      createRawCubeTexture(YY, rY, DY, FY, AY, IY, RY, OY) {
        throw (0, iY.i)("engine.rawTexture")
      }
      createRawTexture3D(YY, rY, DY, FY, AY, IY, RY, OY, gY, aY, vY) {
        throw (0, iY.i)("engine.rawTexture")
      }
      createRawTexture2DArray(YY, rY, DY, FY, AY, IY, RY, OY, gY, aY, vY, uY) {
        throw (0, iY.i)("engine.rawTexture")
      }
      _sharedInit(YY) {
        this._renderingCanvas = YY
      }
      _setupMobileChecks() {
        navigator && navigator.userAgent && (this._checkForMobile = () => {
          const YY = navigator.userAgent;
          this.hostInformation.isMobile = -1 !== YY.indexOf("Mobile") || -1 !== YY.indexOf("Mac") && (0, QY.e)() && "ontouchend" in document
        }, this._checkForMobile(), (0, QY.l)() && window.addEventListener("resize", this._checkForMobile))
      }
      createVideoElement(YY) {
        return document.createElement("video")
      }
      _reportDrawCall() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        this._drawCalls?.addCount(YY, !1)
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
      _createImageBitmapFromSource(YY, rY) {
        throw new Error("createImageBitmapFromSource is not implemented")
      }
      createImageBitmap(YY, rY) {
        return createImageBitmap(YY, rY)
      }
      resizeImageBitmap(YY, rY, DY) {
        throw new Error("resizeImageBitmap is not implemented")
      }
      getFontOffset(YY) {
        throw new Error("getFontOffset is not implemented")
      }
      static _CreateCanvas(YY, rY) {
        if ("undefined" === typeof document) return new OffscreenCanvas(YY, rY);
        const DY = document.createElement("canvas");
        return DY.width = YY, DY.height = rY, DY
      }
      createCanvas(YY, rY) {
        return EY._CreateCanvas(YY, rY)
      }
      static _FileToolsLoadImage(YY, rY, DY, FY, AY, IY, RY) {
        if (!oY.b.loadImage) throw (0, iY.i)("FileTools");
        return oY.b.loadImage(YY, rY, DY, FY, AY, IY, RY)
      }
      _loadFile(YY, rY, DY, FY, AY, IY) {
        const RY = (0, oY.m)(YY, rY, DY, FY, AY, IY);
        return this._activeRequests.push(RY), RY.onCompleteObservable.add((() => {
          const YY = this._activeRequests.indexOf(RY); - 1 !== YY && this._activeRequests.splice(YY, 1)
        })), RY
      }
      static _FileToolsLoadFile(YY, rY, DY, FY, AY, IY) {
        if (oY.b.loadFile) return oY.b.loadFile(YY, rY, DY, FY, AY, IY);
        throw (0, iY.i)("FileTools")
      }
      dispose() {
        for (this.releaseEffects(), this._isDisposed = !0, this.stopRenderLoop(), this._emptyTexture && (this._releaseTexture(this._emptyTexture), this._emptyTexture = null), this._emptyCubeTexture && (this._releaseTexture(this._emptyCubeTexture), this._emptyCubeTexture = null), this._renderingCanvas = null, this.onBeforeTextureInitObservable && this.onBeforeTextureInitObservable.clear(); this.postProcesses.length;) this.postProcesses[0].dispose();
        for (; this.scenes.length;) this.scenes[0].dispose();
        for (; this._virtualScenes.length;) this._virtualScenes[0].dispose();
        this.releaseComputeEffects?.(), AY.e.ResetCache();
        for (const rY of this._activeRequests) rY.abort();
        this._boundRenderFunction = null, this.wT.notifyObservers(this), this.wT.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), this.onEffectErrorObservable.clear(), (0, QY.l)() && window.removeEventListener("resize", this._checkForMobile);
        const YY = IY.d.Instances.indexOf(this);
        YY >= 0 && IY.d.Instances.splice(YY, 1), IY.d.Instances.length || (IY.d.OnEnginesDisposedObservable.notifyObservers(this), IY.d.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservable?.clear(), this._onReleaseRenderPassObservable = null
      }
      static DefaultLoadingScreenFactory(YY) {
        throw (0, iY.i)("LoadingScreen")
      }
      static MarkAllMaterialsAsDirty(YY, rY) {
        for (let DY = 0; DY < IY.d.Instances.length; DY++) {
          const FY = IY.d.Instances[DY];
          for (let DY = 0; DY < FY.scenes.length; DY++) FY.scenes[DY].markAllMaterialsAsDirty(YY, rY)
        }
      }
      static GetCompatibleTextureLoader(YY, rY) {
        return null
      }
    }
    EY._RenderPassIdCounter = 0, EY._RescalePostProcessFactory = null, EY.CollisionsEpsilon = .001, EY.QueueNewFrame = WY
  },
  38998: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => FY
    });
    class FY {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? FY.ShadersRepository : FY.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? FY.ShadersStore : FY.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? FY.IncludesShadersStore : FY.IncludesShadersStoreWGSL
      }
    }
    FY.ShadersRepository = "src/Shaders/", FY.ShadersStore = {}, FY.IncludesShadersStore = {}, FY.ShadersRepositoryWGSL = "src/ShadersWGSL/", FY.ShadersStoreWGSL = {}, FY.IncludesShadersStoreWGSL = {}
  },
  39019: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => sY,
      d: () => mY,
      h: () => yY,
      k: () => iY,
      m: () => QY,
      q: () => EY,
      r: () => uY,
      t: () => aY,
      u: () => vY,
      y: () => gY,
      z: () => OY
    });
    class FY {
      constructor() {
        this._valueCache = {}, this._matrixValueCache = {}, this.vertexCompilationError = null, this.fragmentCompilationError = null, this.programLinkError = null, this.programValidationError = null, this._isDisposed = !1
      }
      get isAsync() {
        return this.isParallelCompiled
      }
      get isReady() {
        return !!this.program && (!this.isParallelCompiled || this.engine._isRenderingStateCompiled(this))
      }
      _handlesSpectorRebuildCallback(YY) {
        YY && this.program && YY(this.program)
      }
      setEngine(YY) {
        this.engine = YY
      }
      _fillEffectInformation(YY, rY, DY, FY, AY, IY, RY, OY) {
        const gY = this.engine;
        if (gY.supportsUniformBuffers)
          for (const vY in rY) YY.bindUniformBlock(vY, rY[vY]);
        let aY;
        for (this.engine.getUniforms(this, DY).forEach(((YY, rY) => {
            FY[DY[rY]] = YY
          })), this._uniforms = FY, aY = 0; aY < AY.length; aY++) {
          null == YY.getUniform(AY[aY]) && (AY.splice(aY, 1), aY--)
        }
        AY.forEach(((YY, rY) => {
          IY[YY] = rY
        }));
        for (const vY of gY.getAttributes(this, RY)) OY.push(vY)
      }
      dispose() {
        this._uniforms = {}, this._isDisposed = !0
      }
      _cacheMatrix(YY, rY) {
        const DY = this._valueCache[YY],
          FY = rY.updateFlag;
        if (void 0 !== DY && DY === FY) return !1;
        const AY = rY.VDY();
        let IY = this._matrixValueCache[YY];
        if (void 0 !== DY && null !== DY && void 0 !== IY) {
          let rY = !0;
          for (let YY = 15; YY >= 0; YY--)
            if (IY[YY] !== AY[YY]) {
              rY = !1;
              break
            } if (rY) return this._valueCache[YY] = FY, !1
        }
        return void 0 === IY && (IY = this._matrixValueCache[YY] = new Float32Array(16)), IY.set(AY), this._valueCache[YY] = FY, !0
      }
      _cacheFloat2(YY, rY, DY) {
        let FY = this._valueCache[YY];
        if (!FY || 2 !== FY.length) return FY = [rY, DY], this._valueCache[YY] = FY, !0;
        let AY = !1;
        return FY[0] !== rY && (FY[0] = rY, AY = !0), FY[1] !== DY && (FY[1] = DY, AY = !0), AY
      }
      _cacheFloat3(YY, rY, DY, FY) {
        let AY = this._valueCache[YY];
        if (!AY || 3 !== AY.length) return AY = [rY, DY, FY], this._valueCache[YY] = AY, !0;
        let IY = !1;
        return AY[0] !== rY && (AY[0] = rY, IY = !0), AY[1] !== DY && (AY[1] = DY, IY = !0), AY[2] !== FY && (AY[2] = FY, IY = !0), IY
      }
      _cacheFloat4(YY, rY, DY, FY, AY) {
        let IY = this._valueCache[YY];
        if (!IY || 4 !== IY.length) return IY = [rY, DY, FY, AY], this._valueCache[YY] = IY, !0;
        let RY = !1;
        return IY[0] !== rY && (IY[0] = rY, RY = !0), IY[1] !== DY && (IY[1] = DY, RY = !0), IY[2] !== FY && (IY[2] = FY, RY = !0), IY[3] !== AY && (IY[3] = AY, RY = !0), RY
      }
      setInt(YY, rY) {
        const DY = this._valueCache[YY];
        void 0 !== DY && DY === rY || this.engine.setInt(this._uniforms[YY], rY) && (this._valueCache[YY] = rY)
      }
      setInt2(YY, rY, DY) {
        this._cacheFloat2(YY, rY, DY) && (this.engine.setInt2(this._uniforms[YY], rY, DY) || (this._valueCache[YY] = null))
      }
      setInt3(YY, rY, DY, FY) {
        this._cacheFloat3(YY, rY, DY, FY) && (this.engine.setInt3(this._uniforms[YY], rY, DY, FY) || (this._valueCache[YY] = null))
      }
      setInt4(YY, rY, DY, FY, AY) {
        this._cacheFloat4(YY, rY, DY, FY, AY) && (this.engine.setInt4(this._uniforms[YY], rY, DY, FY, AY) || (this._valueCache[YY] = null))
      }
      setIntArray(YY, rY) {
        this._valueCache[YY] = null, this.engine.setIntArray(this._uniforms[YY], rY)
      }
      setIntArray2(YY, rY) {
        this._valueCache[YY] = null, this.engine.setIntArray2(this._uniforms[YY], rY)
      }
      setIntArray3(YY, rY) {
        this._valueCache[YY] = null, this.engine.setIntArray3(this._uniforms[YY], rY)
      }
      setIntArray4(YY, rY) {
        this._valueCache[YY] = null, this.engine.setIntArray4(this._uniforms[YY], rY)
      }
      setUInt(YY, rY) {
        const DY = this._valueCache[YY];
        void 0 !== DY && DY === rY || this.engine.setUInt(this._uniforms[YY], rY) && (this._valueCache[YY] = rY)
      }
      setUInt2(YY, rY, DY) {
        this._cacheFloat2(YY, rY, DY) && (this.engine.setUInt2(this._uniforms[YY], rY, DY) || (this._valueCache[YY] = null))
      }
      setUInt3(YY, rY, DY, FY) {
        this._cacheFloat3(YY, rY, DY, FY) && (this.engine.setUInt3(this._uniforms[YY], rY, DY, FY) || (this._valueCache[YY] = null))
      }
      setUInt4(YY, rY, DY, FY, AY) {
        this._cacheFloat4(YY, rY, DY, FY, AY) && (this.engine.setUInt4(this._uniforms[YY], rY, DY, FY, AY) || (this._valueCache[YY] = null))
      }
      setUIntArray(YY, rY) {
        this._valueCache[YY] = null, this.engine.setUIntArray(this._uniforms[YY], rY)
      }
      setUIntArray2(YY, rY) {
        this._valueCache[YY] = null, this.engine.setUIntArray2(this._uniforms[YY], rY)
      }
      setUIntArray3(YY, rY) {
        this._valueCache[YY] = null, this.engine.setUIntArray3(this._uniforms[YY], rY)
      }
      setUIntArray4(YY, rY) {
        this._valueCache[YY] = null, this.engine.setUIntArray4(this._uniforms[YY], rY)
      }
      setArray(YY, rY) {
        this._valueCache[YY] = null, this.engine.setArray(this._uniforms[YY], rY)
      }
      setArray2(YY, rY) {
        this._valueCache[YY] = null, this.engine.setArray2(this._uniforms[YY], rY)
      }
      setArray3(YY, rY) {
        this._valueCache[YY] = null, this.engine.setArray3(this._uniforms[YY], rY)
      }
      setArray4(YY, rY) {
        this._valueCache[YY] = null, this.engine.setArray4(this._uniforms[YY], rY)
      }
      setMatrices(YY, rY) {
        rY && (this._valueCache[YY] = null, this.engine.setMatrices(this._uniforms[YY], rY))
      }
      setMatrix(YY, rY) {
        this._cacheMatrix(YY, rY) && (this.engine.setMatrices(this._uniforms[YY], rY.VDY()) || (this._valueCache[YY] = null))
      }
      setMatrix3x3(YY, rY) {
        this._valueCache[YY] = null, this.engine.setMatrix3x3(this._uniforms[YY], rY)
      }
      setMatrix2x2(YY, rY) {
        this._valueCache[YY] = null, this.engine.setMatrix2x2(this._uniforms[YY], rY)
      }
      setFloat(YY, rY) {
        const DY = this._valueCache[YY];
        void 0 !== DY && DY === rY || this.engine.setFloat(this._uniforms[YY], rY) && (this._valueCache[YY] = rY)
      }
      setVector2(YY, rY) {
        this._cacheFloat2(YY, rY.x, rY.y) && (this.engine.setFloat2(this._uniforms[YY], rY.x, rY.y) || (this._valueCache[YY] = null))
      }
      setFloat2(YY, rY, DY) {
        this._cacheFloat2(YY, rY, DY) && (this.engine.setFloat2(this._uniforms[YY], rY, DY) || (this._valueCache[YY] = null))
      }
      setVector3(YY, rY) {
        this._cacheFloat3(YY, rY.x, rY.y, rY.z) && (this.engine.setFloat3(this._uniforms[YY], rY.x, rY.y, rY.z) || (this._valueCache[YY] = null))
      }
      setFloat3(YY, rY, DY, FY) {
        this._cacheFloat3(YY, rY, DY, FY) && (this.engine.setFloat3(this._uniforms[YY], rY, DY, FY) || (this._valueCache[YY] = null))
      }
      setVector4(YY, rY) {
        this._cacheFloat4(YY, rY.x, rY.y, rY.z, rY.w) && (this.engine.setFloat4(this._uniforms[YY], rY.x, rY.y, rY.z, rY.w) || (this._valueCache[YY] = null))
      }
      setQuaternion(YY, rY) {
        this._cacheFloat4(YY, rY.x, rY.y, rY.z, rY.w) && (this.engine.setFloat4(this._uniforms[YY], rY.x, rY.y, rY.z, rY.w) || (this._valueCache[YY] = null))
      }
      setFloat4(YY, rY, DY, FY, AY) {
        this._cacheFloat4(YY, rY, DY, FY, AY) && (this.engine.setFloat4(this._uniforms[YY], rY, DY, FY, AY) || (this._valueCache[YY] = null))
      }
      setColor3(YY, rY) {
        this._cacheFloat3(YY, rY.r, rY.g, rY.b) && (this.engine.setFloat3(this._uniforms[YY], rY.r, rY.g, rY.b) || (this._valueCache[YY] = null))
      }
      setColor4(YY, rY, DY) {
        this._cacheFloat4(YY, rY.r, rY.g, rY.b, DY) && (this.engine.setFloat4(this._uniforms[YY], rY.r, rY.g, rY.b, DY) || (this._valueCache[YY] = null))
      }
      setDirectColor4(YY, rY) {
        this._cacheFloat4(YY, rY.r, rY.g, rY.b, rY.a) && (this.engine.setFloat4(this._uniforms[YY], rY.r, rY.g, rY.b, rY.a) || (this._valueCache[YY] = null))
      }
      _getVertexShaderCode() {
        return this.vertexShader ? this.engine._getShaderSource(this.vertexShader) : null
      }
      _getFragmentShaderCode() {
        return this.fragmentShader ? this.engine._getShaderSource(this.fragmentShader) : null
      }
    }
    var AY = DY(39021);
    const IY = new WeakMap,
      RY = {
        _webGLVersion: 2,
        cachedPipelines: {}
      };

    function OY(YY) {
      let rY = IY.get(YY);
      if (!rY) {
        if (!YY) return RY;
        rY = {
          _webGLVersion: YY.TEXTURE_BINDING_3D ? 2 : 1,
          _context: YY,
          parallelShaderCompile: YY.getExtension("KHR_parallel_shader_compile") || void 0,
          cachedPipelines: {}
        }, IY.set(YY, rY)
      }
      return rY
    }

    function gY(YY) {
      IY.delete(YY)
    }

    function aY(YY, rY, DY, FY, AY, IY) {
      const RY = OY(FY);
      IY || (IY = RY._createShaderProgramInjection ?? sY);
      return IY(YY, WY(rY, "vertex", FY, RY._contextWasLost), WY(DY, "fragment", FY, RY._contextWasLost), FY, AY, RY.validateShaderPrograms)
    }

    function vY(YY, rY, DY, FY, AY) {
      let IY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        RY = arguments.length > 6 ? arguments[6] : void 0;
      const gY = OY(AY);
      RY || (RY = gY._createShaderProgramInjection ?? sY);
      const aY = gY._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
      return RY(YY, oY(rY, "vertex", FY, aY, AY, gY._contextWasLost), oY(DY, "fragment", FY, aY, AY, gY._contextWasLost), AY, IY, gY.validateShaderPrograms)
    }

    function uY(YY, rY) {
      const DY = new FY,
        AY = OY(YY);
      return AY.parallelShaderCompile && !AY.disableParallelShaderCompile && (DY.isParallelCompiled = !0), DY.context = AY._context, DY
    }

    function sY(YY, rY, DY, FY) {
      let AY = arguments.length > 5 ? arguments[5] : void 0;
      const IY = FY.createProgram();
      if (YY.program = IY, !IY) throw new Error("Unable to create program");
      return FY.attachShader(IY, rY), FY.attachShader(IY, DY), FY.linkProgram(IY), YY.context = FY, YY.vertexShader = rY, YY.fragmentShader = DY, YY.isParallelCompiled || yY(YY, FY, AY), IY
    }

    function iY(YY, rY, DY) {
      const FY = YY;
      if (FY._isDisposed) return !1;
      const AY = OY(rY);
      return !!(AY && AY.parallelShaderCompile && AY.parallelShaderCompile.COMPLETION_STATUS_KHR && FY.program && rY.getProgramParameter(FY.program, AY.parallelShaderCompile.COMPLETION_STATUS_KHR)) && (yY(FY, rY, DY), !0)
    }

    function yY(YY, rY, DY) {
      const FY = YY.context,
        AY = YY.vertexShader,
        IY = YY.fragmentShader,
        RY = YY.program;
      if (!FY.getProgramParameter(RY, FY.LINK_STATUS)) {
        if (!rY.getShaderParameter(AY, rY.COMPILE_STATUS)) {
          const DY = rY.getShaderInfoLog(AY);
          if (DY) throw YY.vertexCompilationError = DY, new Error("VERTEX SHADER " + DY)
        }
        if (!rY.getShaderParameter(IY, rY.COMPILE_STATUS)) {
          const DY = rY.getShaderInfoLog(IY);
          if (DY) throw YY.fragmentCompilationError = DY, new Error("FRAGMENT SHADER " + DY)
        }
        const DY = FY.getProgramInfoLog(RY);
        if (DY) throw YY.programLinkError = DY, new Error(DY)
      }
      if (DY) {
        FY.validateProgram(RY);
        if (!FY.getProgramParameter(RY, FY.VALIDATE_STATUS)) {
          const rY = FY.getProgramInfoLog(RY);
          if (rY) throw YY.programValidationError = rY, new Error(rY)
        }
      }
      FY.deleteShader(AY), FY.deleteShader(IY), YY.vertexShader = void 0, YY.fragmentShader = void 0, YY.onCompiled && (YY.onCompiled(), YY.onCompiled = void 0)
    }

    function QY(YY, rY, DY, FY, AY, IY, RY, gY, uY) {
      let sY = arguments.length > 10 ? arguments[10] : void 0,
        iY = arguments.length > 11 ? arguments[11] : void 0,
        yY = arguments.length > 12 ? arguments[12] : void 0;
      const QY = OY(YY.context);
      iY || (iY = QY.createRawShaderProgramInjection ?? aY), yY || (yY = QY.createShaderProgramInjection ?? vY);
      const oY = YY;
      oY.program = FY ? iY(oY, rY, DY, oY.context, uY) : yY(oY, rY, DY, gY, oY.context, uY), oY.program.__SPECTOR_rebuildProgram = RY, sY()
    }

    function oY(YY, rY, DY, FY, IY, RY) {
      return WY((0, AY.e)(YY, DY, FY), rY, IY, RY)
    }

    function WY(YY, rY, DY, FY) {
      const AY = DY.createShader("vertex" === rY ? DY.VERTEX_SHADER : DY.FRAGMENT_SHADER);
      if (!AY) {
        let YY, AY = DY.NO_ERROR;
        for (;
          (YY = DY.getError()) !== DY.NO_ERROR;) AY = YY;
        throw new Error(`Something went wrong while creating a gl ${rY} shader object. gl error=${AY}, gl isContextLost=${DY.isContextLost()}, _contextWasLost=${FY}`)
      }
      return DY.shaderSource(AY, YY), DY.compileShader(AY), AY
    }

    function EY(YY, rY) {
      rY.useProgram(YY)
    }

    function mY(YY, rY) {
      const DY = YY;
      if (!DY.isParallelCompiled) return void rY(YY);
      const FY = DY.onCompiled;
      DY.onCompiled = () => {
        FY?.(), rY(YY)
      }
    }
  },
  38982: (YY, rY, DY) => {
    DY.d(rY, {
      ThinEngine: () => SY
    });
    var FY = DY(38991),
      AY = DY(39019),
      IY = DY(39041),
      RY = DY(39049),
      OY = DY(38040),
      gY = DY(39013);
    class aY {
      constructor() {
        this.shaderLanguage = 0
      }
      postProcessor(YY, rY, DY, FY, AY) {
        if (AY.drawBuffersExtensionDisabled) {
          const rY = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
          YY = YY.replace(rY, "")
        }
        return YY
      }
    }
    const vY = /(flat\s)?\s*varying\s*.*/;
    class uY {
      constructor() {
        this.shaderLanguage = 0
      }
      attributeProcessor(YY) {
        return YY.replace("attribute", "in")
      }
      varyingCheck(YY, rY) {
        return vY.test(YY)
      }
      varyingProcessor(YY, rY) {
        return YY.replace("varying", rY ? "in" : "out")
      }
      postProcessor(YY, rY, DY) {
        const FY = -1 !== YY.search(/#extension.+GL_EXT_draw_buffers.+require/);
        if (YY = (YY = YY.replace(/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g, "")).replace(/texture2D\s*\(/g, "texture("), DY) {
          const DY = -1 !== YY.search(/layout *\(location *= *0\) *out/g),
            AY = -1 !== rY.indexOf("#define DUAL_SOURCE_BLENDING"),
            IY = AY ? "layout(location = 0, index = 0) out vec4 glFragColor;\nlayout(location = 0, index = 1) out vec4 glFragColor2;\n" : "layout(location = 0) out vec4 glFragColor;\n";
          AY && (YY = "#extension GL_EXT_blend_func_extended : require\n" + YY), YY = (YY = (YY = (YY = (YY = (YY = (YY = YY.replace(/texture2DLodEXT\s*\(/g, "textureLod(")).replace(/textureCubeLodEXT\s*\(/g, "textureLod(")).replace(/textureCube\s*\(/g, "texture(")).replace(/gl_FragDepthEXT/g, "gl_FragDepth")).replace(/gl_FragColor/g, "glFragColor")).replace(/gl_FragData/g, "glFragData")).replace(/void\s+?main\s*\(/g, (FY || DY ? "" : IY) + "void main(")
        } else {
          rY.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0 && (YY = "invariant gl_Position;\n" + YY);
          if (-1 !== rY.indexOf("#define MULTIVIEW")) return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + YY
        }
        return YY
      }
    }
    var sY = DY(39054),
      iY = DY(39065),
      yY = DY(39074),
      QY = DY(38975),
      oY = DY(39021),
      WY = DY(39004),
      EY = DY(39078),
      mY = DY(39046);
    class VY {}
    class SY extends IY.d {
      get name() {
        return this._name
      }
      set name(YY) {
        this._name = YY
      }
      get version() {
        return this._webGLVersion
      }
      static get ShadersRepository() {
        return FY.e.ShadersRepository
      }
      static set ShadersRepository(YY) {
        FY.e.ShadersRepository = YY
      }
      get supportsUniformBuffers() {
        return this.VQ > 1 && !this.disableUniformBuffers
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
      constructor(YY, rY, DY, FY) {
        if (DY = DY || {}, super(rY ?? DY.antialias, DY, FY), this._name = "WebGL", this.forcePOTTextures = !1, this.validateShaderPrograms = !1, this.disableUniformBuffers = !1, this._webGLVersion = 1, this._integerMRTAttachmentsMask = 0, this._vertexAttribArraysEnabled = [], this._uintIndicesCurrentlySet = !1, this._currentBoundBuffer = new Array, this._currentFramebuffer = null, this._dummyFramebuffer = null, this._currentBufferPointers = new Array, this._currentInstanceLocations = new Array, this._currentInstanceBuffers = new Array, this._vaoRecordInProgress = !1, this._mustWipeVertexAttributes = !1, this._nextFreeTextureSlots = new Array, this._maxSimultaneousTextures = 0, this._maxMSAASamplesOverride = null, this._unpackFlipYCached = null, this.enableUnpackFlipYCached = !0, this._boundUniforms = {}, !YY) return;
        let IY;
        if (YY.getContext) {
          if (IY = YY, void 0 === DY.preserveDrawingBuffer && (DY.preserveDrawingBuffer = !1), void 0 === DY.xrCompatible && (DY.xrCompatible = !1), navigator && navigator.userAgent) {
            this._setupMobileChecks();
            const YY = navigator.userAgent;
            for (const rY of SY.ExceptionList) {
              const FY = rY.key,
                AY = rY.targets;
              if (new RegExp(FY).test(YY)) {
                if (rY.capture && rY.captureConstraint) {
                  const DY = rY.capture,
                    FY = rY.captureConstraint,
                    AY = new RegExp(DY).exec(YY);
                  if (AY && AY.length > 0) {
                    if (parseInt(AY[AY.length - 1]) >= FY) continue
                  }
                }
                for (const YY of AY) switch (YY) {
                  case "uniformBuffer":
                    this.disableUniformBuffers = !0;
                    break;
                  case "vao":
                    this.disableVertexArrayObjects = !0;
                    break;
                  case "antialias":
                    DY.antialias = !1;
                    break;
                  case "maxMSAASamples":
                    this._maxMSAASamplesOverride = 1
                }
              }
            }
          }
          if (this._doNotHandleContextLost ? this._onContextLost = () => {
              (0, AY.y)(this._gl)
            } : (this._onContextLost = YY => {
              YY.preventDefault(), this._contextWasLost = !0, (0, AY.y)(this._gl), OY.d.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
            }, this._onContextRestored = () => {
              this._restoreEngineAfterContextLost((() => this._initGLContext()))
            }, IY.addEventListener("webglcontextrestored", this._onContextRestored, !1), DY.powerPreference = DY.powerPreference || "high-performance"), IY.addEventListener("webglcontextlost", this._onContextLost, !1), this._badDesktopOS && (DY.xrCompatible = !1), !DY.disableWebGL2Support) try {
            this._gl = IY.getContext("webgl2", DY) || IY.getContext("experimental-webgl2", DY), this._gl && (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2", this._gl.deleteQuery || (this._webGLVersion = 1, this._shaderPlatformName = "WEBGL1"))
          } catch (vY) {}
          if (!this._gl) {
            if (!IY) throw new Error("The provided canvas is null or undefined.");
            try {
              this._gl = IY.getContext("webgl", DY) || IY.getContext("experimental-webgl", DY)
            } catch (vY) {
              throw new Error("WebGL not supported", {
                cause: vY
              })
            }
          }
          if (!this._gl) throw new Error("WebGL not supported")
        } else {
          this._gl = YY, IY = this._gl.canvas, this._gl.renderbufferStorageMultisample ? (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2") : this._shaderPlatformName = "WEBGL1";
          const rY = this._gl.getContextAttributes();
          rY && (DY.stencil = rY.stencil)
        }
        this._sharedInit(IY), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== DY.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = DY.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
        for (let AY = 0; AY < this._caps.maxVertexAttribs; AY++) this._currentBufferPointers[AY] = new VY;
        this._shaderProcessor = this.VQ > 1 ? new uY : new aY;
        const RY = `Babylon.js v${SY.Version}`;
        OY.d.Log(RY + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", RY);
        const gY = (0, AY.z)(this._gl);
        gY.validateShaderPrograms = this.validateShaderPrograms, gY.parallelShaderCompile = this._caps.parallelShaderCompile
      }
      _clearEmptyResources() {
        this._dummyFramebuffer = null, super._clearEmptyResources()
      }
      _getShaderProcessingContext(YY) {
        return null
      }
      areAllEffectsReady() {
        for (const YY in this._compiledEffects) {
          if (!this._compiledEffects[YY].isReady()) return !1
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
        const YY = this._gl.getExtension("WEBGL_debug_renderer_info");
        null != YY && (this._glRenderer = this._gl.getParameter(YY.UNMASKED_RENDERER_WEBGL), this._glVendor = this._gl.getParameter(YY.UNMASKED_VENDOR_WEBGL)), this._glVendor || (this._glVendor = this._gl.getParameter(this._gl.VENDOR) || "Unknown vendor"), this._glRenderer || (this._glRenderer = this._gl.getParameter(this._gl.RENDERER) || "Unknown renderer"), 36193 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 36193), 34842 !== this._gl.RGBA16F && (this._gl.RGBA16F = 34842), 34836 !== this._gl.RGBA32F && (this._gl.RGBA32F = 34836), 35056 !== this._gl.DEPTH24_STENCIL8 && (this._gl.DEPTH24_STENCIL8 = 35056), this._caps.timerQuery && (1 === this._webGLVersion && (this._gl.getQuery = this._caps.timerQuery.getQueryEXT.bind(this._caps.timerQuery)), this._caps.canUseTimestampForTimerQuery = (this._gl.getQuery(this._caps.timerQuery.TIMESTAMP_EXT, this._caps.timerQuery.QUERY_COUNTER_BITS_EXT) ?? 0) > 0), this._caps.maxAnisotropy = this._caps.textureAnisotropicFilterExtension ? this._gl.getParameter(this._caps.textureAnisotropicFilterExtension.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0, this._caps.textureFloatLinearFiltering = !(!this._caps.textureFloat || !this._gl.getExtension("OES_texture_float_linear")), this._caps.textureFloatRender = !(!this._caps.textureFloat || !this._canRenderToFloatFramebuffer()), this._caps.textureHalfFloatLinearFiltering = !!(this._webGLVersion > 1 || this._caps.textureHalfFloat && this._gl.getExtension("OES_texture_half_float_linear")), this._caps.textureNorm16 && (this._gl.R16_EXT = 33322, this._gl.RG16_EXT = 33324, this._gl.RGB16_EXT = 32852, this._gl.RGBA16_EXT = 32859, this._gl.R16_SNORM_EXT = 36760, this._gl.RG16_SNORM_EXT = 36761, this._gl.RGB16_SNORM_EXT = 36762, this._gl.RGBA16_SNORM_EXT = 36763);
        const rY = this._gl.getExtension("OES_draw_buffers_indexed");
        if (this._caps.blendParametersPerTarget = !!rY, this._alphaState = new mY.b(this._caps.blendParametersPerTarget), rY && (this._gl.blendEquationSeparateIndexed = rY.blendEquationSeparateiOES.bind(rY), this._gl.blendEquationIndexed = rY.blendEquationiOES.bind(rY), this._gl.blendFuncSeparateIndexed = rY.blendFuncSeparateiOES.bind(rY), this._gl.blendFuncIndexed = rY.blendFunciOES.bind(rY), this._gl.colorMaskIndexed = rY.colorMaskiOES.bind(rY), this._gl.disableIndexed = rY.disableiOES.bind(rY), this._gl.enableIndexed = rY.enableiOES.bind(rY)), this._caps.dualSourceBlending = !!this._gl.getExtension("WEBGL_blend_func_extended"), this._caps.astc && (this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR), this._caps.bptc && (this._gl.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = this._caps.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT), this._caps.s3tc_srgb && (this._gl.COMPRESSED_SRGB_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT), this._caps.etc2 && (this._gl.COMPRESSED_SRGB8_ETC2 = this._caps.etc2.COMPRESSED_SRGB8_ETC2, this._gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = this._caps.etc2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC), this._webGLVersion > 1 && 5131 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 5131), this._caps.textureHalfFloatRender = this._caps.textureHalfFloat && this._canRenderToHalfFloatFramebuffer(), this._webGLVersion > 1) this._caps.drawBuffersExtension = !0, this._caps.maxMSAASamples = null !== this._maxMSAASamplesOverride ? this._maxMSAASamplesOverride : this._gl.getParameter(this._gl.MAX_SAMPLES), this._caps.maxDrawBuffers = this._gl.getParameter(this._gl.MAX_DRAW_BUFFERS);
        else {
          const YY = this._gl.getExtension("WEBGL_draw_buffers");
          if (null !== YY) {
            this._caps.drawBuffersExtension = !0, this._gl.drawBuffers = YY.drawBuffersWEBGL.bind(YY), this._caps.maxDrawBuffers = this._gl.getParameter(YY.MAX_DRAW_BUFFERS_WEBGL), this._gl.DRAW_FRAMEBUFFER = this._gl.FRAMEBUFFER;
            for (let rY = 0; rY < 16; rY++) this._gl["COLOR_ATTACHMENT" + rY + "_WEBGL"] = YY["COLOR_ATTACHMENT" + rY + "_WEBGL"]
          }
        }
        if (this._webGLVersion > 1) this._caps.depthTextureExtension = !0;
        else {
          const YY = this._gl.getExtension("WEBGL_depth_texture");
          null != YY && (this._caps.depthTextureExtension = !0, this._gl.UNSIGNED_INT_24_8 = YY.UNSIGNED_INT_24_8_WEBGL)
        }
        if (this.disableVertexArrayObjects) this._caps.vertexArrayObject = !1;
        else if (this._webGLVersion > 1) this._caps.vertexArrayObject = !0;
        else {
          const YY = this._gl.getExtension("OES_vertex_array_object");
          null != YY && (this._caps.vertexArrayObject = !0, this._gl.createVertexArray = YY.createVertexArrayOES.bind(YY), this._gl.bindVertexArray = YY.bindVertexArrayOES.bind(YY), this._gl.deleteVertexArray = YY.deleteVertexArrayOES.bind(YY))
        }
        if (this._webGLVersion > 1) this._caps.instancedArrays = !0;
        else {
          const YY = this._gl.getExtension("ANGLE_instanced_arrays");
          null != YY ? (this._caps.instancedArrays = !0, this._gl.drawArraysInstanced = YY.drawArraysInstancedANGLE.bind(YY), this._gl.drawElementsInstanced = YY.drawElementsInstancedANGLE.bind(YY), this._gl.vertexAttribDivisor = YY.vertexAttribDivisorANGLE.bind(YY)) : this._caps.instancedArrays = !1
        }
        if (this._gl.getShaderPrecisionFormat) {
          const YY = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.HIGH_FLOAT),
            rY = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
          if (YY && rY && (this._caps.highPrecisionShaderSupported = 0 !== YY.precision && 0 !== rY.precision, this._caps.shaderFloatPrecision = Math.min(YY.precision, rY.precision)), !this._shouldUseHighPrecisionShader) {
            const YY = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.MEDIUM_FLOAT),
              rY = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.MEDIUM_FLOAT);
            YY && rY && (this._caps.shaderFloatPrecision = Math.min(YY.precision, rY.precision))
          }
          this._caps.shaderFloatPrecision < 10 && (this._caps.shaderFloatPrecision = 10)
        }
        if (this._webGLVersion > 1) this._caps.blendMinMax = !0;
        else {
          const YY = this._gl.getExtension("EXT_blend_minmax");
          null != YY && (this._caps.blendMinMax = !0, this._gl.MAX = YY.MAX_EXT, this._gl.MIN = YY.MIN_EXT)
        }
        if (!this._caps.supportSRGBBuffers) {
          if (this._webGLVersion > 1) this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
            SRGB: WebGL2RenderingContext.SRGB,
            SRGB8: WebGL2RenderingContext.SRGB8,
            SRGB8_ALPHA8: WebGL2RenderingContext.SRGB8_ALPHA8
          };
          else {
            const YY = this._gl.getExtension("EXT_sRGB");
            null != YY && (this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
              SRGB: YY.SRGB_EXT,
              SRGB8: YY.SRGB_ALPHA_EXT,
              SRGB8_ALPHA8: YY.SRGB_ALPHA_EXT
            })
          }
          if (this._creationOptions) {
            const YY = this._creationOptions.forceSRGBBufferSupportState;
            void 0 !== YY && (this._caps.supportSRGBBuffers = this._caps.supportSRGBBuffers && YY)
          }
        }
        this._depthCullingState.depthTest = !0, this._depthCullingState.depthFunc = this._gl.LEQUAL, this._depthCullingState.depthMask = !0, this._maxSimultaneousTextures = this._caps.maxCombinedTexturesImageUnits;
        for (let DY = 0; DY < this._maxSimultaneousTextures; DY++) this._nextFreeTextureSlots.push(DY);
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
      get VQ() {
        return this._webGLVersion
      }
      getClassName() {
        return "ThinEngine"
      }
      _prepareWorkingCanvas() {
        if (this._workingCanvas) return;
        this._workingCanvas = this.createCanvas(1, 1);
        const YY = this._workingCanvas.getContext("2d");
        YY && (this._workingContext = YY)
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
        const YY = this.getGlInfo();
        return YY && YY.renderer ? YY.renderer : ""
      }
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferWidth : this._gl.drawingBufferWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferHeight : this._gl.drawingBufferHeight
      }
      clear(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const IY = this.stencilStateComposer.useStencilGlobalOnly;
        this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = IY;
        let RY = 0;
        if (rY && YY) {
          let rY = !0;
          if (this._currentRenderTarget) {
            const DY = this._currentRenderTarget.texture?.format;
            if (void 0 !== DY && (0, EY.i)(DY)) {
              const DY = this._currentRenderTarget.texture?.type;
              void 0 !== DY && (0, EY.m)(DY) ? (SY._TempClearColorUint32[0] = 255 * YY.r, SY._TempClearColorUint32[1] = 255 * YY.g, SY._TempClearColorUint32[2] = 255 * YY.b, SY._TempClearColorUint32[3] = 255 * YY.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, SY._TempClearColorUint32), rY = !1) : (SY._TempClearColorInt32[0] = 255 * YY.r, SY._TempClearColorInt32[1] = 255 * YY.g, SY._TempClearColorInt32[2] = 255 * YY.b, SY._TempClearColorInt32[3] = 255 * YY.a, this._gl.clearBufferiv(this._gl.COLOR, 0, SY._TempClearColorInt32), rY = !1)
            }
          }
          rY && (this._gl.clearColor(YY.r, YY.g, YY.b, void 0 !== YY.a ? YY.a : 1), RY |= this._gl.COLOR_BUFFER_BIT)
        }
        DY && (this.QDY ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), RY |= this._gl.DEPTH_BUFFER_BIT), FY && (this._gl.clearStencil(AY), RY |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(RY)
      }
      _clearColorAttachment(YY, rY, DY, FY) {
        if ((0, EY.i)(DY)) {
          const DY = (0, EY.m)(FY),
            AY = DY ? SY._TempClearColorUint32 : SY._TempClearColorInt32;
          return AY[0] = rY.r, AY[1] = rY.g, AY[2] = rY.b, AY[3] = rY.a, void(DY ? this._gl.clearBufferuiv(this._gl.COLOR, YY, AY) : this._gl.clearBufferiv(this._gl.COLOR, YY, AY))
        }
        SY._TempClearColorFloat32[0] = rY.r, SY._TempClearColorFloat32[1] = rY.g, SY._TempClearColorFloat32[2] = rY.b, SY._TempClearColorFloat32[3] = rY.a, this._gl.clearBufferfv(this._gl.COLOR, YY, SY._TempClearColorFloat32)
      }
      _viewport(YY, rY, DY, FY) {
        YY === this._viewportCached.x && rY === this._viewportCached.y && DY === this._viewportCached.z && FY === this._viewportCached.w || (this._viewportCached.x = YY, this._viewportCached.y = rY, this._viewportCached.z = DY, this._viewportCached.w = FY, this._gl.viewport(YY, rY, DY, FY))
      }
      Qm() {
        super.Qm(), this._badOS && this.flushFramebuffer()
      }
      get performanceMonitor() {
        throw new Error("Not Supported by ThinEngine")
      }
      bindFramebuffer(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          DY = arguments.length > 2 ? arguments[2] : void 0,
          FY = arguments.length > 3 ? arguments[3] : void 0,
          AY = arguments.length > 4 ? arguments[4] : void 0,
          IY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          RY = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const gY = YY;
        this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = YY, this._integerMRTAttachmentsMask = !YY.isMulti && YY.texture && (0, EY.i)(YY.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(gY._framebuffer);
        const aY = this._gl;
        YY.isMulti || (YY.is2DArray || YY.is3D ? (aY.framebufferTextureLayer(aY.FRAMEBUFFER, aY.COLOR_ATTACHMENT0, YY.texture._hardwareTexture?.underlyingResource, IY, RY), gY._currentLOD = IY) : YY.isCube ? aY.framebufferTexture2D(aY.FRAMEBUFFER, aY.COLOR_ATTACHMENT0, aY.TEXTURE_CUBE_MAP_POSITIVE_X + rY, YY.texture._hardwareTexture?.underlyingResource, IY) : gY._currentLOD !== IY && (aY.framebufferTexture2D(aY.FRAMEBUFFER, aY.COLOR_ATTACHMENT0, aY.TEXTURE_2D, YY.texture._hardwareTexture?.underlyingResource, IY), gY._currentLOD = IY));
        const vY = YY._depthStencilTexture;
        if (vY) {
          YY.is3D && (YY.texture.width === vY.width && YY.texture.height === vY.height && YY.texture.depth === vY.depth || OY.d.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
          const DY = YY._depthStencilTextureWithStencil ? aY.DEPTH_STENCIL_ATTACHMENT : aY.DEPTH_ATTACHMENT;
          YY.is2DArray || YY.is3D ? aY.framebufferTextureLayer(aY.FRAMEBUFFER, DY, vY._hardwareTexture?.underlyingResource, IY, RY) : YY.isCube ? aY.framebufferTexture2D(aY.FRAMEBUFFER, DY, aY.TEXTURE_CUBE_MAP_POSITIVE_X + rY, vY._hardwareTexture?.underlyingResource, IY) : aY.framebufferTexture2D(aY.FRAMEBUFFER, DY, aY.TEXTURE_2D, vY._hardwareTexture?.underlyingResource, IY)
        }
        gY._MSAAFramebuffer && this._bindUnboundFramebuffer(gY._MSAAFramebuffer), this._cachedViewport && !AY ? this.setViewport(this._cachedViewport, DY, FY) : (DY || (DY = YY.width, IY && (DY /= Math.pow(2, IY))), FY || (FY = YY.height, IY && (FY /= Math.pow(2, IY))), this._viewport(0, 0, DY, FY)), this.wipeCaches()
      }
      setStateCullFaceType(YY, rY) {
        const DY = this.cullBackFaces ?? YY ?? 1 ? this._gl.BACK : this._gl.FRONT;
        (this._depthCullingState.cullFace !== DY || rY) && (this._depthCullingState.cullFace = DY)
      }
      setState(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          DY = arguments.length > 2 ? arguments[2] : void 0,
          FY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          AY = arguments.length > 4 ? arguments[4] : void 0,
          IY = arguments.length > 5 ? arguments[5] : void 0,
          RY = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        (this._depthCullingState.cull !== YY || DY) && (this._depthCullingState.cull = YY), this.setStateCullFaceType(AY, DY), this.setZOffset(rY), this.setZOffsetUnits(RY);
        const OY = FY ? this._gl.CW : this._gl.CCW;
        (this._depthCullingState.frontFace !== OY || DY) && (this._depthCullingState.frontFace = OY), this._stencilStateComposer.stencilMaterial = IY
      }
      _resolveAndGenerateMipMapsFramebuffer(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        YY.disableAutomaticMSAAResolve || (YY.isMulti ? this.resolveMultiFramebuffer(YY) : this.resolveFramebuffer(YY)), rY || (YY.isMulti ? this.generateMipMapsMultiFramebuffer(YY) : this.generateMipMapsFramebuffer(YY))
      }
      _bindUnboundFramebuffer(YY) {
        this._currentFramebuffer !== YY && (this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, YY), this._currentFramebuffer = YY)
      }
      _currentFrameBufferIsDefaultFrameBuffer() {
        return null === this._currentFramebuffer
      }
      generateMipmaps(YY) {
        const rY = this._getTextureTarget(YY);
        this._bindTextureDirectly(rY, YY, !0), this._gl.generateMipmap(rY), this._bindTextureDirectly(rY, null)
      }
      unBindFramebuffer(YY, rY, DY) {
        const FY = YY;
        this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, this._resolveAndGenerateMipMapsFramebuffer(YY, rY), DY && (FY._MSAAFramebuffer && this._bindUnboundFramebuffer(FY._framebuffer), DY()), this._bindUnboundFramebuffer(null)
      }
      generateMipMapsFramebuffer(YY) {
        YY.isMulti || !YY.texture?.generateMipMaps || YY.isCube || this.generateMipmaps(YY.texture)
      }
      resolveFramebuffer(YY) {
        const rY = YY,
          DY = this._gl;
        if (!rY._MSAAFramebuffer || rY.isMulti) return;
        let FY = rY.resolveMSAAColors ? DY.COLOR_BUFFER_BIT : 0;
        FY |= rY._generateDepthBuffer && rY.resolveMSAADepth ? DY.DEPTH_BUFFER_BIT : 0, FY |= rY._generateStencilBuffer && rY.resolveMSAAStencil ? DY.STENCIL_BUFFER_BIT : 0, DY.bindFramebuffer(DY.READ_FRAMEBUFFER, rY._MSAAFramebuffer), DY.bindFramebuffer(DY.DRAW_FRAMEBUFFER, rY._framebuffer), DY.blitFramebuffer(0, 0, YY.width, YY.height, 0, 0, YY.width, YY.height, FY, DY.NEAREST)
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
      createVertexBuffer(YY, rY, DY) {
        return this._createVertexBuffer(YY, this._gl.STATIC_DRAW)
      }
      _createVertexBuffer(YY, rY) {
        const DY = this._gl.createBuffer();
        if (!DY) throw new Error("Unable to create vertex buffer");
        const FY = new sY.d(DY);
        return this.bindArrayBuffer(FY), "number" !== typeof YY ? YY instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(YY), rY), FY.gu = 4 * YY.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, YY, rY), FY.gu = YY.byteLength) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Uint8Array(YY), rY), FY.gu = YY), this._resetVertexBufferBinding(), FY.references = 1, FY
      }
      createDynamicVertexBuffer(YY, rY) {
        return this._createVertexBuffer(YY, this._gl.DYNAMIC_DRAW)
      }
      _resetIndexBufferBinding() {
        this.bindIndexBuffer(null), this._cachedIndexBuffer = null
      }
      createIndexBuffer(YY, rY, DY) {
        const FY = this._gl.createBuffer(),
          AY = new sY.d(FY);
        if (!FY) throw new Error("Unable to create index buffer");
        this.bindIndexBuffer(AY);
        const IY = this._normalizeIndexData(YY);
        return this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, IY, rY ? this._gl.DYNAMIC_DRAW : this._gl.STATIC_DRAW), this._resetIndexBufferBinding(), AY.references = 1, AY.is32Bits = 4 === IY.BYTES_PER_ELEMENT, AY
      }
      _normalizeIndexData(YY) {
        if (2 === YY.BYTES_PER_ELEMENT) return YY;
        if (this._caps.uintIndices) {
          if (YY instanceof Uint32Array) return YY;
          for (let rY = 0; rY < YY.length; rY++)
            if (YY[rY] >= 65535) return new Uint32Array(YY);
          return new Uint16Array(YY)
        }
        return new Uint16Array(YY)
      }
      bindArrayBuffer(YY) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(YY, this._gl.ARRAY_BUFFER)
      }
      bindUniformBlock(YY, rY, DY) {
        const FY = YY.program,
          AY = this._gl.getUniformBlockIndex(FY, rY);
        this._gl.uniformBlockBinding(FY, AY, DY)
      }
      bindIndexBuffer(YY) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(YY, this._gl.ELEMENT_ARRAY_BUFFER)
      }
      _bindBuffer(YY, rY) {
        (this._vaoRecordInProgress || this._currentBoundBuffer[rY] !== YY) && (this._gl.bindBuffer(rY, YY ? YY.underlyingResource : null), this._currentBoundBuffer[rY] = YY)
      }
      updateArrayBuffer(YY) {
        this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, YY)
      }
      _vertexAttribPointer(YY, rY, DY, FY, AY, IY, RY) {
        const OY = this._currentBufferPointers[rY];
        if (!OY) return;
        let gY = !1;
        OY.active ? (OY.buffer !== YY && (OY.buffer = YY, gY = !0), OY.size !== DY && (OY.size = DY, gY = !0), OY.type !== FY && (OY.type = FY, gY = !0), OY.normalized !== AY && (OY.normalized = AY, gY = !0), OY.stride !== IY && (OY.stride = IY, gY = !0), OY.offset !== RY && (OY.offset = RY, gY = !0)) : (gY = !0, OY.active = !0, OY.index = rY, OY.size = DY, OY.type = FY, OY.normalized = AY, OY.stride = IY, OY.offset = RY, OY.buffer = YY), (gY || this._vaoRecordInProgress) && (this.bindArrayBuffer(YY), FY === this._gl.UNSIGNED_INT || FY === this._gl.INT ? this._gl.vertexAttribIPointer(rY, DY, FY, IY, RY) : this._gl.vertexAttribPointer(rY, DY, FY, AY, IY, RY))
      }
      _bindIndexBufferWithCache(YY) {
        null != YY && this._cachedIndexBuffer !== YY && (this._cachedIndexBuffer = YY, this.bindIndexBuffer(YY), this._uintIndicesCurrentlySet = YY.is32Bits)
      }
      _bindVertexBuffersAttributes(YY, rY, DY) {
        const FY = rY.getAttributesNames();
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this.unbindAllAttributes();
        for (let AY = 0; AY < FY.length; AY++) {
          const IY = rY.getAttributeLocation(AY);
          if (IY >= 0) {
            const rY = FY[AY];
            let RY = null;
            if (DY && (RY = DY[rY]), RY || (RY = YY[rY]), !RY) continue;
            this._gl.enableVertexAttribArray(IY), this._vaoRecordInProgress || (this._vertexAttribArraysEnabled[IY] = !0);
            const OY = RY.getBuffer();
            OY && (this._vertexAttribPointer(OY, IY, RY.getSize(), RY.type, RY.normalized, RY.byteStride, RY.byteOffset), RY.getIsInstanced() && (this._gl.vertexAttribDivisor(IY, RY.getInstanceDivisor()), this._vaoRecordInProgress || (this._currentInstanceLocations.push(IY), this._currentInstanceBuffers.push(OY))))
          }
        }
      }
      recordVertexArrayObject(YY, rY, DY, FY) {
        const AY = this._gl.createVertexArray();
        if (!AY) throw new Error("Unable to create VAO");
        return this._vaoRecordInProgress = !0, this._gl.bindVertexArray(AY), this._mustWipeVertexAttributes = !0, this._bindVertexBuffersAttributes(YY, DY, FY), this.bindIndexBuffer(rY), this._vaoRecordInProgress = !1, this._gl.bindVertexArray(null), AY
      }
      bindVertexArrayObject(YY, rY) {
        this._cachedVertexArrayObject !== YY && (this._cachedVertexArrayObject = YY, this._gl.bindVertexArray(YY), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._uintIndicesCurrentlySet = null != rY && rY.is32Bits, this._mustWipeVertexAttributes = !0)
      }
      bindBuffersDirectly(YY, rY, DY, FY, AY) {
        if (this._cachedVertexBuffers !== YY || this._cachedEffectForVertexBuffers !== AY) {
          this._cachedVertexBuffers = YY, this._cachedEffectForVertexBuffers = AY;
          const rY = AY.getAttributesCount();
          this._unbindVertexArrayObject(), this.unbindAllAttributes();
          let IY = 0;
          for (let RY = 0; RY < rY; RY++)
            if (RY < DY.length) {
              const rY = AY.getAttributeLocation(RY);
              rY >= 0 && (this._gl.enableVertexAttribArray(rY), this._vertexAttribArraysEnabled[rY] = !0, this._vertexAttribPointer(YY, rY, DY[RY], this._gl.FLOAT, !1, FY, IY)), IY += 4 * DY[RY]
            }
        }
        this._bindIndexBufferWithCache(rY)
      }
      _unbindVertexArrayObject() {
        this._cachedVertexArrayObject && (this._cachedVertexArrayObject = null, this._gl.bindVertexArray(null))
      }
      bindBuffers(YY, rY, DY, FY) {
        this._cachedVertexBuffers === YY && this._cachedEffectForVertexBuffers === DY || (this._cachedVertexBuffers = YY, this._cachedEffectForVertexBuffers = DY, this._bindVertexBuffersAttributes(YY, DY, FY)), this._bindIndexBufferWithCache(rY)
      }
      unbindInstanceAttributes() {
        let YY;
        for (let rY = 0, DY = this._currentInstanceLocations.length; rY < DY; rY++) {
          const DY = this._currentInstanceBuffers[rY];
          YY != DY && DY.references && (YY = DY, this.bindArrayBuffer(DY));
          const FY = this._currentInstanceLocations[rY];
          this._gl.vertexAttribDivisor(FY, 0)
        }
        this._currentInstanceBuffers.length = 0, this._currentInstanceLocations.length = 0
      }
      releaseVertexArrayObject(YY) {
        this._gl.deleteVertexArray(YY)
      }
      _releaseBuffer(YY) {
        return YY.references--, 0 === YY.references && (this._deleteBuffer(YY), !0)
      }
      _deleteBuffer(YY) {
        this._gl.deleteBuffer(YY.underlyingResource)
      }
      updateAndBindInstancesBuffer(YY, rY, DY) {
        if (this.bindArrayBuffer(YY), rY && this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, rY), void 0 !== DY[0].index) this.bindInstancesBuffer(YY, DY, !0);
        else
          for (let FY = 0; FY < 4; FY++) {
            const rY = DY[FY];
            this._vertexAttribArraysEnabled[rY] || (this._gl.enableVertexAttribArray(rY), this._vertexAttribArraysEnabled[rY] = !0), this._vertexAttribPointer(YY, rY, 4, this._gl.FLOAT, !1, 64, 16 * FY), this._gl.vertexAttribDivisor(rY, 1), this._currentInstanceLocations.push(rY), this._currentInstanceBuffers.push(YY)
          }
      }
      bindInstancesBuffer(YY, rY) {
        let DY = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.bindArrayBuffer(YY);
        let FY = 0;
        if (DY)
          for (let AY = 0; AY < rY.length; AY++) {
            FY += 4 * rY[AY].attributeSize
          }
        for (let AY = 0; AY < rY.length; AY++) {
          const DY = rY[AY];
          void 0 === DY.index && (DY.index = this._currentEffect.getAttributeLocationByName(DY.attributeName)), DY.index < 0 || (this._vertexAttribArraysEnabled[DY.index] || (this._gl.enableVertexAttribArray(DY.index), this._vertexAttribArraysEnabled[DY.index] = !0), this._vertexAttribPointer(YY, DY.index, DY.attributeSize, DY.attributeType || this._gl.FLOAT, DY.normalized || !1, FY, DY.offset), this._gl.vertexAttribDivisor(DY.index, void 0 === DY.divisor ? 1 : DY.divisor), this._currentInstanceLocations.push(DY.index), this._currentInstanceBuffers.push(YY))
        }
      }
      disableInstanceAttributeByName(YY) {
        if (!this._currentEffect) return;
        const rY = this._currentEffect.getAttributeLocationByName(YY);
        this.disableInstanceAttribute(rY)
      }
      disableInstanceAttribute(YY) {
        let rY, DY = !1;
        for (; - 1 !== (rY = this._currentInstanceLocations.indexOf(YY));) this._currentInstanceLocations.splice(rY, 1), this._currentInstanceBuffers.splice(rY, 1), DY = !0;
        DY && (this._gl.vertexAttribDivisor(YY, 0), this.disableAttributeByIndex(YY))
      }
      disableAttributeByIndex(YY) {
        this._gl.disableVertexAttribArray(YY), this._vertexAttribArraysEnabled[YY] = !1, this._currentBufferPointers[YY].active = !1
      }
      draw(YY, rY, DY, FY) {
        this.drawElementsType(YY ? 0 : 1, rY, DY, FY)
      }
      drawPointClouds(YY, rY, DY) {
        this.drawArraysType(2, YY, rY, DY)
      }
      drawUnIndexed(YY, rY, DY, FY) {
        this.drawArraysType(YY ? 0 : 1, rY, DY, FY)
      }
      drawElementsType(YY, rY, DY, FY) {
        this.applyStates(), this._reportDrawCall();
        const AY = this._drawMode(YY),
          IY = this._uintIndicesCurrentlySet ? this._gl.UNSIGNED_INT : this._gl.UNSIGNED_SHORT,
          RY = this._uintIndicesCurrentlySet ? 4 : 2;
        FY ? this._gl.drawElementsInstanced(AY, DY, IY, rY * RY, FY) : this._gl.drawElements(AY, DY, IY, rY * RY)
      }
      drawArraysType(YY, rY, DY, FY) {
        this.applyStates(), this._reportDrawCall();
        const AY = this._drawMode(YY);
        FY ? this._gl.drawArraysInstanced(AY, rY, DY, FY) : this._gl.drawArrays(AY, rY, DY)
      }
      _drawMode(YY) {
        switch (YY) {
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
      _releaseEffect(YY) {
        this._compiledEffects[YY._key] && delete this._compiledEffects[YY._key];
        const rY = YY.getPipelineContext();
        rY && this._deletePipelineContext(rY)
      }
      _deletePipelineContext(YY) {
        const rY = YY;
        rY && rY.program && (rY.program.__SPECTOR_rebuildProgram = null, (0, WY.k)(rY), this._gl && (this._currentProgram === rY.program && this._setProgram(null), this._gl.deleteProgram(rY.program)))
      }
      _getGlobalDefines(YY) {
        return (0, oY.i)(YY, this.isNDCHalfZRange, this.QDY, this.useExactSrgbConversions)
      }
      createEffect(YY, rY, DY, IY, RY, OY, gY, aY, vY) {
        let uY = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          sY = arguments.length > 10 ? arguments[10] : void 0;
        const iY = "string" === typeof YY ? YY : YY.vertexToken || YY.vertexSource || YY.vertexElement || YY.vertex,
          yY = "string" === typeof YY ? YY : YY.fragmentToken || YY.fragmentSource || YY.fragmentElement || YY.fragment,
          QY = this._getGlobalDefines(),
          oY = void 0 !== rY.attributes;
        let WY = RY ?? rY.defines ?? "";
        QY && (WY += QY);
        const EY = iY + "+" + yY + "@" + WY;
        if (this._compiledEffects[EY]) {
          const YY = this._compiledEffects[EY];
          return gY && YY.isReady() && gY(YY), YY._refCount++, YY
        }
        this._gl && (0, AY.z)(this._gl);
        const mY = new FY.e(YY, rY, oY ? this : DY, IY, this, RY, OY, gY, aY, vY, EY, rY.shaderLanguage ?? uY, rY.extraInitializationsAsync ?? sY);
        return this._compiledEffects[EY] = mY, mY
      }
      _getShaderSource(YY) {
        return this._gl.getShaderSource(YY)
      }
      createRawShaderProgram(YY, rY, DY, FY) {
        let IY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const RY = (0, AY.z)(this._gl);
        return RY._contextWasLost = this._contextWasLost, RY.validateShaderPrograms = this.validateShaderPrograms, (0, AY.t)(YY, rY, DY, FY || this._gl, IY)
      }
      createShaderProgram(YY, rY, DY, FY, IY) {
        let RY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        const OY = (0, AY.z)(this._gl);
        return OY._contextWasLost = this._contextWasLost, OY.validateShaderPrograms = this.validateShaderPrograms, (0, AY.u)(YY, rY, DY, FY, IY || this._gl, RY)
      }
      inlineShaderCode(YY) {
        return YY
      }
      createPipelineContext(YY) {
        if (this._gl) {
          (0, AY.z)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
        }
        const rY = (0, AY.r)(this._gl, YY);
        return rY.engine = this, rY
      }
      createMaterialContext() {}
      createDrawContext() {}
      _finalizePipelineContext(YY) {
        return (0, AY.h)(YY, this._gl, this.validateShaderPrograms)
      }
      _preparePipelineContextAsync(YY, rY, DY, FY, IY, RY, OY, gY, aY, vY, uY) {
        const sY = (0, AY.z)(this._gl);
        return sY._contextWasLost = this._contextWasLost, sY.validateShaderPrograms = this.validateShaderPrograms, sY._createShaderProgramInjection = this._createShaderProgram.bind(this), sY.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), sY.createShaderProgramInjection = this.createShaderProgram.bind(this), sY.loadFileInjection = this._loadFile.bind(this), (0, AY.m)(YY, rY, DY, FY, IY, RY, OY, gY, aY, vY, uY)
      }
      _createShaderProgram(YY, rY, DY, FY) {
        let IY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        return (0, AY.c)(YY, rY, DY, FY, IY)
      }
      _isRenderingStateCompiled(YY) {
        return !this._isDisposed && (0, AY.k)(YY, this._gl, this.validateShaderPrograms)
      }
      _executeWhenRenderingStateIsCompiled(YY, rY) {
        (0, AY.d)(YY, rY)
      }
      getUniforms(YY, rY) {
        const DY = new Array,
          FY = YY;
        for (let AY = 0; AY < rY.length; AY++) DY.push(this._gl.getUniformLocation(FY.program, rY[AY]));
        return DY
      }
      getAttributes(YY, rY) {
        const DY = [],
          FY = YY;
        for (let IY = 0; IY < rY.length; IY++) try {
          DY.push(this._gl.getAttribLocation(FY.program, rY[IY]))
        } catch (AY) {
          DY.push(-1)
        }
        return DY
      }
      enableEffect(YY) {
        (YY = null !== YY && (0, RY.c)(YY) ? YY.effect : YY) && YY !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(YY), this._currentEffect = YY, YY.onBind && YY.onBind(YY), YY._onBindObservable && YY._onBindObservable.notifyObservers(YY))
      }
      setInt(YY, rY) {
        return !!YY && (this._gl.uniform1i(YY, rY), !0)
      }
      setInt2(YY, rY, DY) {
        return !!YY && (this._gl.uniform2i(YY, rY, DY), !0)
      }
      setInt3(YY, rY, DY, FY) {
        return !!YY && (this._gl.uniform3i(YY, rY, DY, FY), !0)
      }
      setInt4(YY, rY, DY, FY, AY) {
        return !!YY && (this._gl.uniform4i(YY, rY, DY, FY, AY), !0)
      }
      setIntArray(YY, rY) {
        return !!YY && (this._gl.uniform1iv(YY, rY), !0)
      }
      setIntArray2(YY, rY) {
        return !(!YY || rY.length % 2 !== 0) && (this._gl.uniform2iv(YY, rY), !0)
      }
      setIntArray3(YY, rY) {
        return !(!YY || rY.length % 3 !== 0) && (this._gl.uniform3iv(YY, rY), !0)
      }
      setIntArray4(YY, rY) {
        return !(!YY || rY.length % 4 !== 0) && (this._gl.uniform4iv(YY, rY), !0)
      }
      setUInt(YY, rY) {
        return !!YY && (this._gl.uniform1ui(YY, rY), !0)
      }
      setUInt2(YY, rY, DY) {
        return !!YY && (this._gl.uniform2ui(YY, rY, DY), !0)
      }
      setUInt3(YY, rY, DY, FY) {
        return !!YY && (this._gl.uniform3ui(YY, rY, DY, FY), !0)
      }
      setUInt4(YY, rY, DY, FY, AY) {
        return !!YY && (this._gl.uniform4ui(YY, rY, DY, FY, AY), !0)
      }
      setUIntArray(YY, rY) {
        return !!YY && (this._gl.uniform1uiv(YY, rY), !0)
      }
      setUIntArray2(YY, rY) {
        return !(!YY || rY.length % 2 !== 0) && (this._gl.uniform2uiv(YY, rY), !0)
      }
      setUIntArray3(YY, rY) {
        return !(!YY || rY.length % 3 !== 0) && (this._gl.uniform3uiv(YY, rY), !0)
      }
      setUIntArray4(YY, rY) {
        return !(!YY || rY.length % 4 !== 0) && (this._gl.uniform4uiv(YY, rY), !0)
      }
      setArray(YY, rY) {
        return !!YY && (!(rY.length < 1) && (this._gl.uniform1fv(YY, rY), !0))
      }
      setArray2(YY, rY) {
        return !(!YY || rY.length % 2 !== 0) && (this._gl.uniform2fv(YY, rY), !0)
      }
      setArray3(YY, rY) {
        return !(!YY || rY.length % 3 !== 0) && (this._gl.uniform3fv(YY, rY), !0)
      }
      setArray4(YY, rY) {
        return !(!YY || rY.length % 4 !== 0) && (this._gl.uniform4fv(YY, rY), !0)
      }
      setMatrices(YY, rY) {
        return !!YY && (this._gl.uniformMatrix4fv(YY, !1, rY), !0)
      }
      setMatrix3x3(YY, rY) {
        return !!YY && (this._gl.uniformMatrix3fv(YY, !1, rY), !0)
      }
      setMatrix2x2(YY, rY) {
        return !!YY && (this._gl.uniformMatrix2fv(YY, !1, rY), !0)
      }
      setFloat(YY, rY) {
        return !!YY && (this._gl.uniform1f(YY, rY), !0)
      }
      setFloat2(YY, rY, DY) {
        return !!YY && (this._gl.uniform2f(YY, rY, DY), !0)
      }
      setFloat3(YY, rY, DY, FY) {
        return !!YY && (this._gl.uniform3f(YY, rY, DY, FY), !0)
      }
      setFloat4(YY, rY, DY, FY, AY) {
        return !!YY && (this._gl.uniform4f(YY, rY, DY, FY, AY), !0)
      }
      _applyColorWriteState() {
        if (this._colorWriteChanged) {
          this._colorWriteChanged = !1;
          const YY = this._colorWrite;
          this._gl.colorMask(YY, YY, YY, YY)
        }
      }
      applyStates() {
        this._depthCullingState.apply(this._gl), this._stencilStateComposer.apply(this._gl), this._alphaState.apply(this._gl, this._currentRenderTarget && this._currentRenderTarget.textures ? this._currentRenderTarget.textures.length : 1, this._integerMRTAttachmentsMask), this._applyColorWriteState()
      }
      wipeCaches(YY) {
        this.preventCacheWipeBetweenFrames && !YY || (this._currentEffect = null, this._viewportCached.x = 0, this._viewportCached.y = 0, this._viewportCached.z = 0, this._viewportCached.w = 0, this._unbindVertexArrayObject(), YY && (this._currentProgram = null, this.resetTextureCache(), this._stencilStateComposer.reset(), this._depthCullingState.reset(), this._depthCullingState.depthFunc = this._gl.LEQUAL, this._alphaState.reset(), this._resetAlphaMode(), this._colorWrite = !0, this._colorWriteChanged = !0, this._unpackFlipYCached = null, this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), this._gl.pixelStorei(this._gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), this._mustWipeVertexAttributes = !0, this.unbindAllAttributes()), this._resetVertexBufferBinding(), this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null, this.bindIndexBuffer(null))
      }
      _getSamplingParameters(YY, rY) {
        const DY = this._gl;
        let FY = DY.NEAREST,
          AY = DY.NEAREST,
          IY = !1;
        switch (YY) {
          case 11:
            FY = DY.LINEAR, AY = rY ? DY.LINEAR_MIPMAP_NEAREST : DY.LINEAR;
            break;
          case 3:
            FY = DY.LINEAR, IY = !0, AY = rY ? DY.LINEAR_MIPMAP_LINEAR : DY.LINEAR;
            break;
          case 8:
            IY = !0, FY = DY.NEAREST, AY = rY ? DY.NEAREST_MIPMAP_LINEAR : DY.NEAREST;
            break;
          case 4:
            FY = DY.NEAREST, AY = rY ? DY.NEAREST_MIPMAP_NEAREST : DY.NEAREST;
            break;
          case 5:
            FY = DY.NEAREST, AY = rY ? DY.LINEAR_MIPMAP_NEAREST : DY.LINEAR;
            break;
          case 6:
            IY = !0, FY = DY.NEAREST, AY = rY ? DY.LINEAR_MIPMAP_LINEAR : DY.LINEAR;
            break;
          case 7:
            FY = DY.NEAREST, AY = DY.LINEAR;
            break;
          case 1:
            FY = DY.NEAREST, AY = DY.NEAREST;
            break;
          case 9:
            FY = DY.LINEAR, AY = rY ? DY.NEAREST_MIPMAP_NEAREST : DY.NEAREST;
            break;
          case 10:
            IY = !0, FY = DY.LINEAR, AY = rY ? DY.NEAREST_MIPMAP_LINEAR : DY.NEAREST;
            break;
          case 2:
            FY = DY.LINEAR, AY = DY.LINEAR;
            break;
          case 12:
            FY = DY.LINEAR, AY = DY.NEAREST
        }
        return {
          min: AY,
          mag: FY,
          hasMipMaps: IY
        }
      }
      _createTexture() {
        const YY = this._gl.createTexture();
        if (!YY) throw new Error("Unable to create texture");
        return YY
      }
      _createHardwareTexture() {
        return new yY.d(this._createTexture(), this._gl)
      }
      _createInternalTexture(YY, rY) {
        let DY, FY, AY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          IY = !1,
          RY = 0,
          gY = 3,
          aY = 5,
          vY = !1,
          uY = 1,
          sY = !1,
          iY = 0,
          yY = !1;
        void 0 !== rY && "object" === typeof rY ? (DY = !!rY.generateMipMaps, IY = !!rY.createMipMaps, RY = void 0 === rY.type ? 0 : rY.type, gY = void 0 === rY.samplingMode ? 3 : rY.samplingMode, aY = void 0 === rY.format ? 5 : rY.format, vY = void 0 !== rY.useSRGBBuffer && rY.useSRGBBuffer, uY = rY.samples ?? 1, FY = rY.label, sY = !!rY.createMSAATexture, iY = rY.comparisonFunction || 0, yY = !!rY.isCube) : DY = !!rY, vY && (vY = this._caps.supportSRGBBuffers && (this.VQ > 1 || this.isWebGPU)), (1 !== RY || this._caps.textureFloatLinearFiltering) && (2 !== RY || this._caps.textureHalfFloatLinearFiltering) || (gY = 1), 1 !== RY || this._caps.textureFloat || (RY = 0, OY.d.Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE"));
        const oY = (0, EY.f)(aY),
          WY = (0, EY.d)(aY),
          mY = this._gl,
          VY = new QY.c(this, AY),
          SY = YY.width || YY,
          lY = YY.height || YY,
          TY = YY.depth || 0,
          eY = YY.layers || 0,
          NY = this._getSamplingParameters(gY, (DY || IY) && !oY),
          BY = 0 !== eY ? mY.TEXTURE_2D_ARRAY : 0 !== TY ? mY.TEXTURE_3D : yY ? mY.TEXTURE_CUBE_MAP : mY.TEXTURE_2D,
          cY = oY ? this._getInternalFormatFromDepthTextureFormat(aY, !0, WY) : this._getRGBABufferInternalSizedFormat(RY, aY, vY),
          KY = oY ? WY ? mY.DEPTH_STENCIL : mY.DEPTH_COMPONENT : this._getInternalFormat(aY),
          HY = oY ? this._getWebGLTextureTypeFromDepthTextureFormat(aY) : this._getWebGLTextureType(RY);
        if (this._bindTextureDirectly(BY, VY), 0 !== eY) VY.is2DArray = !0, mY.texImage3D(BY, 0, cY, SY, lY, eY, 0, KY, HY, null);
        else if (0 !== TY) VY.is3D = !0, mY.texImage3D(BY, 0, cY, SY, lY, TY, 0, KY, HY, null);
        else if (yY) {
          VY.isCube = !0;
          for (let YY = 0; YY < 6; YY++) mY.texImage2D(mY.TEXTURE_CUBE_MAP_POSITIVE_X + YY, 0, cY, SY, lY, 0, KY, HY, null)
        } else mY.texImage2D(BY, 0, cY, SY, lY, 0, KY, HY, null);
        if (mY.texParameteri(BY, mY.TEXTURE_MAG_FILTER, NY.mag), mY.texParameteri(BY, mY.TEXTURE_MIN_FILTER, NY.min), mY.texParameteri(BY, mY.TEXTURE_WRAP_S, mY.CLAMP_TO_EDGE), mY.texParameteri(BY, mY.TEXTURE_WRAP_T, mY.CLAMP_TO_EDGE), oY && this.VQ > 1 && (0 === iY ? (mY.texParameteri(BY, mY.TEXTURE_COMPARE_FUNC, 515), mY.texParameteri(BY, mY.TEXTURE_COMPARE_MODE, mY.NONE)) : (mY.texParameteri(BY, mY.TEXTURE_COMPARE_FUNC, iY), mY.texParameteri(BY, mY.TEXTURE_COMPARE_MODE, mY.COMPARE_REF_TO_TEXTURE))), (DY || IY) && this._gl.generateMipmap(BY), this._bindTextureDirectly(BY, null), VY._useSRGBBuffer = vY, VY.baseWidth = SY, VY.baseHeight = lY, VY.width = SY, VY.height = lY, VY.depth = eY || TY, VY.isReady = !0, VY.samples = uY, VY.generateMipMaps = DY, VY.samplingMode = gY, VY.type = RY, VY.format = aY, VY.label = FY, VY.comparisonFunction = iY, this._internalTexturesCache.push(VY), sY) {
          let YY;
          if (YY = (0, EY.f)(VY.format) ? this._setupFramebufferDepthAttachments((0, EY.d)(VY.format), 19 !== VY.format, VY.width, VY.height, uY, VY.format, !0) : this._createRenderBuffer(VY.width, VY.height, uY, -1, this._getRGBABufferInternalSizedFormat(VY.type, VY.format, VY._useSRGBBuffer), -1), !YY) throw new Error("Unable to create render buffer");
          VY._autoMSAAManagement = !0;
          let rY = VY._hardwareTexture;
          rY || (rY = VY._hardwareTexture = this._createHardwareTexture()), rY.addMSAARenderBuffer(YY)
        }
        return VY
      }
      _getUseSRGBBuffer(YY, rY) {
        return YY && this._caps.supportSRGBBuffers && (this.VQ > 1 || rY)
      }
      createTexture(YY, rY, DY, FY) {
        var AY = this;
        let IY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          RY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          OY = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          gY = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          aY = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          vY = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          uY = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          sY = arguments.length > 11 ? arguments[11] : void 0,
          iY = arguments.length > 12 ? arguments[12] : void 0,
          yY = arguments.length > 13 ? arguments[13] : void 0,
          oY = arguments.length > 14 ? arguments[14] : void 0;
        return this._createTextureBase(YY, rY, DY, FY, IY, RY, OY, (function() {
          for (var YY = arguments.length, rY = new Array(YY), DY = 0; DY < YY; DY++) rY[DY] = arguments[DY];
          return AY._prepareWebGLTexture(...rY, vY)
        }), ((YY, rY, DY, AY, IY, RY) => {
          const OY = this._gl,
            gY = DY.width === YY && DY.height === rY;
          IY._creationFlags = yY ?? 0;
          const aY = this._getTexImageParametersForCreateTexture(IY.format, IY._useSRGBBuffer);
          if (gY) return OY.texImage2D(OY.TEXTURE_2D, 0, aY.internalFormat, aY.format, aY.type, DY), !1;
          const vY = this._caps.maxTextureSize;
          if (DY.width > vY || DY.height > vY || !this._supportsHardwareTextureRescaling) return this._prepareWorkingCanvas(), !(!this._workingCanvas || !this._workingContext) && (this._workingCanvas.width = YY, this._workingCanvas.height = rY, this._workingContext.drawImage(DY, 0, 0, DY.width, DY.height, 0, 0, YY, rY), OY.texImage2D(OY.TEXTURE_2D, 0, aY.internalFormat, aY.format, aY.type, this._workingCanvas), IY.width = YY, IY.height = rY, !1);
          {
            const YY = new QY.c(this, 2);
            this._bindTextureDirectly(OY.TEXTURE_2D, YY, !0), OY.texImage2D(OY.TEXTURE_2D, 0, aY.internalFormat, aY.format, aY.type, DY), this._rescaleTexture(YY, IY, FY, aY.format, (() => {
              this._releaseTexture(YY), this._bindTextureDirectly(OY.TEXTURE_2D, IY, !0), RY()
            }))
          }
          return !0
        }), gY, aY, vY, uY, sY, iY, oY)
      }
      _getTexImageParametersForCreateTexture(YY, rY) {
        let DY, FY;
        return 1 === this.VQ ? (DY = this._getInternalFormat(YY, rY), FY = DY) : (DY = this._getInternalFormat(YY, !1), FY = this._getRGBABufferInternalSizedFormat(0, YY, rY)), {
          internalFormat: FY,
          format: DY,
          type: this._gl.UNSIGNED_BYTE
        }
      }
      _rescaleTexture(YY, rY, DY, FY, AY) {}
      _unpackFlipY(YY) {
        this._unpackFlipYCached !== YY && (this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, YY ? 1 : 0), this.enableUnpackFlipYCached && (this._unpackFlipYCached = YY))
      }
      _getUnpackAlignement() {
        return this._gl.getParameter(this._gl.UNPACK_ALIGNMENT)
      }
      _getTextureTarget(YY) {
        return YY.isCube ? this._gl.TEXTURE_CUBE_MAP : YY.is3D ? this._gl.TEXTURE_3D : YY.is2DArray || YY.isMultiview ? this._gl.TEXTURE_2D_ARRAY : this._gl.TEXTURE_2D
      }
      updateTextureSamplingMode(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const FY = this._getTextureTarget(rY),
          AY = this._getSamplingParameters(YY, rY.useMipMaps || DY);
        this._setTextureParameterInteger(FY, this._gl.TEXTURE_MAG_FILTER, AY.mag, rY), this._setTextureParameterInteger(FY, this._gl.TEXTURE_MIN_FILTER, AY.min), DY && AY.hasMipMaps && (rY.generateMipMaps = !0, this._gl.generateMipmap(FY)), this._bindTextureDirectly(FY, null), rY.samplingMode = YY
      }
      updateTextureDimensions(YY, rY, DY) {}
      updateTextureWrappingMode(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const AY = this._getTextureTarget(YY);
        null !== rY && (this._setTextureParameterInteger(AY, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(rY), YY), YY._cachedWrapU = rY), null !== DY && (this._setTextureParameterInteger(AY, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(DY), YY), YY._cachedWrapV = DY), (YY.is2DArray || YY.is3D) && null !== FY && (this._setTextureParameterInteger(AY, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(FY), YY), YY._cachedWrapR = FY), this._bindTextureDirectly(AY, null)
      }
      _uploadCompressedDataToTextureDirectly(YY, rY, DY, FY, AY) {
        let IY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          RY = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const OY = this._gl;
        let gY = OY.TEXTURE_2D;
        if (YY.isCube && (gY = OY.TEXTURE_CUBE_MAP_POSITIVE_X + IY), YY._useSRGBBuffer) switch (rY) {
          case 37492:
          case 36196:
            this._caps.etc2 ? rY = OY.COMPRESSED_SRGB8_ETC2 : YY._useSRGBBuffer = !1;
            break;
          case 37496:
            this._caps.etc2 ? rY = OY.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : YY._useSRGBBuffer = !1;
            break;
          case 36492:
            rY = OY.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
            break;
          case 37808:
            rY = OY.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
            break;
          case 37809:
            rY = OY.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
            break;
          case 37810:
            rY = OY.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
            break;
          case 37811:
            rY = OY.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
            break;
          case 37812:
            rY = OY.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
            break;
          case 37813:
            rY = OY.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
            break;
          case 37814:
            rY = OY.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
            break;
          case 37815:
            rY = OY.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
            break;
          case 37816:
            rY = OY.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
            break;
          case 37817:
            rY = OY.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
            break;
          case 37818:
            rY = OY.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
            break;
          case 37819:
            rY = OY.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
            break;
          case 37820:
            rY = OY.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
            break;
          case 37821:
            rY = OY.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
            break;
          case 33776:
            this._caps.s3tc_srgb ? rY = OY.COMPRESSED_SRGB_S3TC_DXT1_EXT : YY._useSRGBBuffer = !1;
            break;
          case 33777:
            this._caps.s3tc_srgb ? rY = OY.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT : YY._useSRGBBuffer = !1;
            break;
          case 33779:
            this._caps.s3tc_srgb ? rY = OY.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT : YY._useSRGBBuffer = !1;
            break;
          default:
            YY._useSRGBBuffer = !1
        }
        if (YY.generateMipMaps) {
          const IY = YY._hardwareTexture;
          IY.memoryAllocated || (OY.texStorage2D(YY.isCube ? OY.TEXTURE_CUBE_MAP : OY.TEXTURE_2D, Math.floor(Math.log2(Math.max(DY, FY))) + 1, rY, YY.width, YY.height), IY.memoryAllocated = !0), this._gl.compressedTexSubImage2D(gY, RY, 0, 0, DY, FY, rY, AY)
        } else this._gl.compressedTexImage2D(gY, RY, rY, DY, FY, 0, AY)
      }
      _uploadDataToTextureDirectly(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          AY = arguments.length > 4 ? arguments[4] : void 0,
          IY = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const RY = this._gl,
          OY = this._getWebGLTextureType(YY.type),
          gY = this._getInternalFormat(YY.format),
          aY = void 0 === AY ? this._getRGBABufferInternalSizedFormat(YY.type, YY.format, YY._useSRGBBuffer) : this._getInternalFormat(AY, YY._useSRGBBuffer);
        this._unpackFlipY(YY.invertY);
        let vY = RY.TEXTURE_2D;
        YY.isCube && (vY = RY.TEXTURE_CUBE_MAP_POSITIVE_X + DY);
        const uY = Math.round(Math.log(YY.width) * Math.LOG2E),
          sY = Math.round(Math.log(YY.height) * Math.LOG2E),
          iY = IY ? YY.width : Math.pow(2, Math.max(uY - FY, 0)),
          yY = IY ? YY.height : Math.pow(2, Math.max(sY - FY, 0));
        RY.texImage2D(vY, FY, aY, iY, yY, 0, gY, OY, rY)
      }
      updateTextureData(YY, rY, DY, FY, AY, IY) {
        let RY = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          OY = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          gY = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const aY = this._gl,
          vY = this._getWebGLTextureType(YY.type),
          uY = this._getInternalFormat(YY.format);
        this._unpackFlipY(YY.invertY);
        let sY = aY.TEXTURE_2D,
          iY = aY.TEXTURE_2D;
        YY.isCube && (iY = aY.TEXTURE_CUBE_MAP_POSITIVE_X + RY, sY = aY.TEXTURE_CUBE_MAP), this._bindTextureDirectly(sY, YY, !0), aY.texSubImage2D(iY, OY, DY, FY, AY, IY, uY, vY, rY), gY && this._gl.generateMipmap(iY), this._bindTextureDirectly(sY, null)
      }
      _uploadArrayBufferViewToTexture(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const AY = this._gl,
          IY = YY.isCube ? AY.TEXTURE_CUBE_MAP : AY.TEXTURE_2D;
        this._bindTextureDirectly(IY, YY, !0), this._uploadDataToTextureDirectly(YY, rY, DY, FY), this._bindTextureDirectly(IY, null, !0)
      }
      _prepareWebGLTextureContinuation(YY, rY, DY, FY, AY) {
        const IY = this._gl;
        if (!IY) return;
        const RY = this._getSamplingParameters(AY, !DY);
        IY.texParameteri(IY.TEXTURE_2D, IY.TEXTURE_MAG_FILTER, RY.mag), IY.texParameteri(IY.TEXTURE_2D, IY.TEXTURE_MIN_FILTER, RY.min), DY || FY || IY.generateMipmap(IY.TEXTURE_2D), this._bindTextureDirectly(IY.TEXTURE_2D, null), rY && rY.removePendingData(YY), YY.onLoadedObservable.notifyObservers(YY), YY.onLoadedObservable.clear()
      }
      _prepareWebGLTexture(YY, rY, DY, FY, AY, IY, RY, OY, gY, aY) {
        const vY = this.getCaps().maxTextureSize,
          uY = Math.min(vY, this.needPOTTextures ? (0, iY.f)(FY.width, vY) : FY.width),
          sY = Math.min(vY, this.needPOTTextures ? (0, iY.f)(FY.height, vY) : FY.height),
          yY = this._gl;
        yY && (YY._hardwareTexture ? (this._bindTextureDirectly(yY.TEXTURE_2D, YY, !0), this._unpackFlipY(void 0 === AY || !!AY), YY.baseWidth = FY.width, YY.baseHeight = FY.height, YY.width = uY, YY.height = sY, YY.isReady = !0, YY.type = -1 !== YY.type ? YY.type : 0, YY.format = -1 !== YY.format ? YY.format : aY ?? (".jpg" !== rY || YY._useSRGBBuffer ? 5 : 4), OY(uY, sY, FY, rY, YY, (() => {
          this._prepareWebGLTextureContinuation(YY, DY, IY, RY, gY)
        })) || this._prepareWebGLTextureContinuation(YY, DY, IY, RY, gY)) : DY && DY.removePendingData(YY))
      }
      _getInternalFormatFromDepthTextureFormat(YY, rY, DY) {
        const FY = this._gl;
        if (!rY) return FY.STENCIL_INDEX8;
        let AY = DY ? FY.DEPTH_STENCIL : FY.DEPTH_COMPONENT;
        return this.VQ > 1 ? 15 === YY ? AY = FY.DEPTH_COMPONENT16 : 16 === YY ? AY = FY.DEPTH_COMPONENT24 : 17 === YY || 13 === YY ? AY = DY ? FY.DEPTH24_STENCIL8 : FY.DEPTH_COMPONENT24 : 14 === YY ? AY = FY.DEPTH_COMPONENT32F : 18 === YY && (AY = DY ? FY.DEPTH32F_STENCIL8 : FY.DEPTH_COMPONENT32F) : AY = FY.DEPTH_COMPONENT16, AY
      }
      _getWebGLTextureTypeFromDepthTextureFormat(YY) {
        const rY = this._gl;
        let DY = rY.UNSIGNED_INT;
        return 15 === YY ? DY = rY.UNSIGNED_SHORT : 17 === YY || 13 === YY ? DY = rY.UNSIGNED_INT_24_8 : 14 === YY ? DY = rY.FLOAT : 18 === YY ? DY = rY.FLOAT_32_UNSIGNED_INT_24_8_REV : 19 === YY && (DY = rY.UNSIGNED_BYTE), DY
      }
      _setupFramebufferDepthAttachments(YY, rY, DY, FY) {
        let AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          IY = arguments.length > 5 ? arguments[5] : void 0,
          RY = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const OY = this._gl;
        IY = IY ?? (YY ? 13 : 14);
        const gY = this._getInternalFormatFromDepthTextureFormat(IY, rY, YY);
        return YY && rY ? this._createRenderBuffer(DY, FY, AY, OY.DEPTH_STENCIL, gY, RY ? -1 : OY.DEPTH_STENCIL_ATTACHMENT) : rY ? this._createRenderBuffer(DY, FY, AY, gY, gY, RY ? -1 : OY.DEPTH_ATTACHMENT) : YY ? this._createRenderBuffer(DY, FY, AY, gY, gY, RY ? -1 : OY.STENCIL_ATTACHMENT) : null
      }
      _createRenderBuffer(YY, rY, DY, FY, AY, IY) {
        let RY = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
        const OY = this._gl.createRenderbuffer();
        return this._updateRenderBuffer(OY, YY, rY, DY, FY, AY, IY, RY)
      }
      _updateRenderBuffer(YY, rY, DY, FY, AY, IY, RY) {
        let OY = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const gY = this._gl;
        return gY.bindRenderbuffer(gY.RENDERBUFFER, YY), FY > 1 && gY.renderbufferStorageMultisample ? gY.renderbufferStorageMultisample(gY.RENDERBUFFER, FY, IY, rY, DY) : gY.renderbufferStorage(gY.RENDERBUFFER, AY, rY, DY), -1 !== RY && gY.framebufferRenderbuffer(gY.FRAMEBUFFER, RY, gY.RENDERBUFFER, YY), OY && gY.bindRenderbuffer(gY.RENDERBUFFER, null), YY
      }
      _releaseTexture(YY) {
        this._deleteTexture(YY._hardwareTexture), this.unbindAllTextures();
        const rY = this._internalTexturesCache.indexOf(YY); - 1 !== rY && this._internalTexturesCache.splice(rY, 1), YY._lodTextureHigh && YY._lodTextureHigh.dispose(), YY._lodTextureMid && YY._lodTextureMid.dispose(), YY._lodTextureLow && YY._lodTextureLow.dispose(), YY._irradianceTexture && YY._irradianceTexture.dispose()
      }
      _deleteTexture(YY) {
        YY?.release()
      }
      _setProgram(YY) {
        this._currentProgram !== YY && ((0, AY.q)(YY, this._gl), this._currentProgram = YY)
      }
      bindSamplers(YY) {
        const rY = YY.getPipelineContext();
        this._setProgram(rY.program);
        const DY = YY.getSamplers();
        for (let FY = 0; FY < DY.length; FY++) {
          const rY = YY.getUniform(DY[FY]);
          rY && (this._boundUniforms[FY] = rY)
        }
        this._currentEffect = null
      }
      _activateCurrentTexture() {
        this._currentTextureChannel !== this._activeChannel && (this._gl.activeTexture(this._gl.TEXTURE0 + this._activeChannel), this._currentTextureChannel = this._activeChannel)
      }
      _bindTextureDirectly(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          FY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          AY = !1;
        const IY = rY && rY._associatedChannel > -1;
        DY && IY && (this._activeChannel = rY._associatedChannel);
        if (this._boundTexturesCache[this._activeChannel] !== rY || FY) {
          if (this._activateCurrentTexture(), rY && rY.isMultiview) throw OY.d.Error(["_bindTextureDirectly called with a multiview texture!", YY, rY]), "_bindTextureDirectly called with a multiview texture!";
          this._gl.bindTexture(YY, rY?._hardwareTexture?.underlyingResource ?? null), this._boundTexturesCache[this._activeChannel] = rY, rY && (rY._associatedChannel = this._activeChannel)
        } else DY && (AY = !0, this._activateCurrentTexture());
        return IY && !DY && this._bindSamplerUniformToChannel(rY._associatedChannel, this._activeChannel), AY
      }
      _bindTexture(YY, rY, DY) {
        if (void 0 === YY) return;
        rY && (rY._associatedChannel = YY), this._activeChannel = YY;
        const FY = rY ? this._getTextureTarget(rY) : this._gl.TEXTURE_2D;
        this._bindTextureDirectly(FY, rY)
      }
      unbindAllTextures() {
        for (let YY = 0; YY < this._maxSimultaneousTextures; YY++) this._activeChannel = YY, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.VQ > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))
      }
      setTexture(YY, rY, DY, FY) {
        void 0 !== YY && (rY && (this._boundUniforms[YY] = rY), this._setTexture(YY, DY))
      }
      _bindSamplerUniformToChannel(YY, rY) {
        const DY = this._boundUniforms[YY];
        DY && DY._currentState !== rY && (this._gl.uniform1i(DY, rY), DY._currentState = rY)
      }
      _getTextureWrapMode(YY) {
        switch (YY) {
          case 1:
            return this._gl.REPEAT;
          case 0:
            return this._gl.CLAMP_TO_EDGE;
          case 2:
            return this._gl.MIRRORED_REPEAT
        }
        return this._gl.REPEAT
      }
      _setTexture(YY, rY) {
        let DY, FY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          AY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!rY) return null != this._boundTexturesCache[YY] && (this._activeChannel = YY, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.VQ > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))), !1;
        if (rY.video) {
          this._activeChannel = YY;
          const DY = rY.getInternalTexture();
          DY && (DY._associatedChannel = YY), rY.update()
        } else if (4 === rY.delayLoadState) return rY.delayLoad(), !1;
        DY = AY ? rY.depthStencilTexture : rY.isReady() ? rY.getInternalTexture() : rY.isCube ? this.emptyCubeTexture : rY.is3D ? this.emptyTexture3D : rY.is2DArray ? this.emptyTexture2DArray : this.emptyTexture, !FY && DY && (DY._associatedChannel = YY);
        let IY = !0;
        this._boundTexturesCache[YY] === DY && (FY || this._bindSamplerUniformToChannel(DY._associatedChannel, YY), IY = !1), this._activeChannel = YY;
        const RY = this._getTextureTarget(DY);
        if (IY && this._bindTextureDirectly(RY, DY, FY), DY && !DY.isMultiview) {
          if (DY.isCube && DY._cachedCoordinatesMode !== rY.coordinatesMode) {
            DY._cachedCoordinatesMode = rY.coordinatesMode;
            const YY = 3 !== rY.coordinatesMode && 5 !== rY.coordinatesMode ? 1 : 0;
            rY.wrapU = YY, rY.wrapV = YY
          }
          DY._cachedWrapU !== rY.wrapU && (DY._cachedWrapU = rY.wrapU, this._setTextureParameterInteger(RY, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(rY.wrapU), DY)), DY._cachedWrapV !== rY.wrapV && (DY._cachedWrapV = rY.wrapV, this._setTextureParameterInteger(RY, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(rY.wrapV), DY)), DY.is3D && DY._cachedWrapR !== rY.wrapR && (DY._cachedWrapR = rY.wrapR, this._setTextureParameterInteger(RY, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(rY.wrapR), DY)), this._setAnisotropicLevel(RY, DY, rY.anisotropicFilteringLevel)
        }
        return !0
      }
      setTextureArray(YY, rY, DY, FY) {
        if (void 0 !== YY && rY) {
          this._textureUnits && this._textureUnits.length === DY.length || (this._textureUnits = new Int32Array(DY.length));
          for (let rY = 0; rY < DY.length; rY++) {
            const FY = DY[rY].getInternalTexture();
            FY ? (this._textureUnits[rY] = YY + rY, FY._associatedChannel = YY + rY) : this._textureUnits[rY] = -1
          }
          this._gl.uniform1iv(rY, this._textureUnits);
          for (let YY = 0; YY < DY.length; YY++) this._setTexture(this._textureUnits[YY], DY[YY], !0)
        }
      }
      _setAnisotropicLevel(YY, rY, DY) {
        const FY = this._caps.textureAnisotropicFilterExtension;
        11 !== rY.samplingMode && 3 !== rY.samplingMode && 2 !== rY.samplingMode && (DY = 1), FY && rY._cachedAnisotropicFilteringLevel !== DY && (this._setTextureParameterFloat(YY, FY.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(DY, this._caps.maxAnisotropy), rY), rY._cachedAnisotropicFilteringLevel = DY)
      }
      _setTextureParameterFloat(YY, rY, DY, FY) {
        this._bindTextureDirectly(YY, FY, !0, !0), this._gl.texParameterf(YY, rY, DY)
      }
      _setTextureParameterInteger(YY, rY, DY, FY) {
        FY && this._bindTextureDirectly(YY, FY, !0, !0), this._gl.texParameteri(YY, rY, DY)
      }
      unbindAllAttributes() {
        if (this._mustWipeVertexAttributes) {
          this._mustWipeVertexAttributes = !1;
          for (let YY = 0; YY < this._caps.maxVertexAttribs; YY++) this.disableAttributeByIndex(YY)
        } else
          for (let YY = 0, rY = this._vertexAttribArraysEnabled.length; YY < rY; YY++) YY >= this._caps.maxVertexAttribs || !this._vertexAttribArraysEnabled[YY] || this.disableAttributeByIndex(YY)
      }
      releaseEffects() {
        this._compiledEffects = {}, this.onReleaseEffectsObservable.notifyObservers(this)
      }
      dispose() {
        (0, gY.l)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dummyFramebuffer && this._gl.deleteFramebuffer(this._dummyFramebuffer), this.unbindAllAttributes(), this._boundUniforms = {}, this._workingCanvas = null, this._workingContext = null, this._currentBufferPointers.length = 0, this._currentProgram = null, this._creationOptions.loseContextOnDispose && this._gl.getExtension("WEBGL_lose_context")?.loseContext(), (0, AY.y)(this._gl)
      }
      attachContextLostEvent(YY) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextlost", YY, !1)
      }
      attachContextRestoredEvent(YY) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextrestored", YY, !1)
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
      _canRenderToFramebuffer(YY) {
        const rY = this._gl;
        for (; rY.getError() !== rY.NO_ERROR;);
        let DY = !0;
        const FY = rY.createTexture();
        rY.bindTexture(rY.TEXTURE_2D, FY), rY.texImage2D(rY.TEXTURE_2D, 0, this._getRGBABufferInternalSizedFormat(YY), 1, 1, 0, rY.RGBA, this._getWebGLTextureType(YY), null), rY.texParameteri(rY.TEXTURE_2D, rY.TEXTURE_MIN_FILTER, rY.NEAREST), rY.texParameteri(rY.TEXTURE_2D, rY.TEXTURE_MAG_FILTER, rY.NEAREST);
        const AY = rY.createFramebuffer();
        rY.bindFramebuffer(rY.FRAMEBUFFER, AY), rY.framebufferTexture2D(rY.FRAMEBUFFER, rY.COLOR_ATTACHMENT0, rY.TEXTURE_2D, FY, 0);
        const IY = rY.checkFramebufferStatus(rY.FRAMEBUFFER);
        if (DY = DY && IY === rY.FRAMEBUFFER_COMPLETE, DY = DY && rY.getError() === rY.NO_ERROR, DY && (rY.clear(rY.COLOR_BUFFER_BIT), DY = DY && rY.getError() === rY.NO_ERROR), DY) {
          rY.bindFramebuffer(rY.FRAMEBUFFER, null);
          const YY = rY.RGBA,
            FY = rY.UNSIGNED_BYTE,
            AY = new Uint8Array(4);
          rY.readPixels(0, 0, 1, 1, YY, FY, AY), DY = DY && rY.getError() === rY.NO_ERROR
        }
        for (rY.deleteTexture(FY), rY.deleteFramebuffer(AY), rY.bindFramebuffer(rY.FRAMEBUFFER, null); !DY && rY.getError() !== rY.NO_ERROR;);
        return DY
      }
      _getWebGLTextureType(YY) {
        if (1 === this._webGLVersion) {
          switch (YY) {
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
        switch (YY) {
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
      _getInternalFormat(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          DY = rY ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA;
        switch (YY) {
          case 0:
            DY = this._gl.ALPHA;
            break;
          case 1:
            DY = this._gl.LUMINANCE;
            break;
          case 2:
            DY = this._gl.LUMINANCE_ALPHA;
            break;
          case 6:
          case 33322:
          case 36760:
            DY = this._gl.RED;
            break;
          case 7:
          case 33324:
          case 36761:
            DY = this._gl.RG;
            break;
          case 4:
          case 32852:
          case 36762:
            DY = rY ? this._glSRGBExtensionValues.SRGB : this._gl.RGB;
            break;
          case 5:
          case 32859:
          case 36763:
            DY = rY ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA
        }
        if (this._webGLVersion > 1) switch (YY) {
          case 8:
            DY = this._gl.RED_INTEGER;
            break;
          case 9:
            DY = this._gl.RG_INTEGER;
            break;
          case 10:
            DY = this._gl.RGB_INTEGER;
            break;
          case 11:
            DY = this._gl.RGBA_INTEGER
        }
        return DY
      }
      _getRGBABufferInternalSizedFormat(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (1 === this._webGLVersion) {
          if (void 0 !== rY) switch (rY) {
            case 0:
              return this._gl.ALPHA;
            case 1:
              return this._gl.LUMINANCE;
            case 2:
              return this._gl.LUMINANCE_ALPHA;
            case 4:
              return DY ? this._glSRGBExtensionValues.SRGB : this._gl.RGB
          }
          return this._gl.RGBA
        }
        switch (YY) {
          case 3:
            switch (rY) {
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
            switch (rY) {
              case 6:
                return this._gl.R8;
              case 7:
                return this._gl.RG8;
              case 4:
                return DY ? this._glSRGBExtensionValues.SRGB8 : this._gl.RGB8;
              case 5:
                return DY ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8;
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
            switch (rY) {
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
            switch (rY) {
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
            switch (rY) {
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
            switch (rY) {
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
            switch (rY) {
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
            switch (rY) {
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
            switch (rY) {
              case 5:
              default:
                return this._gl.RGB10_A2;
              case 11:
                return this._gl.RGB10_A2UI
            }
        }
        return DY ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8
      }
      readPixels(YY, rY, DY, FY) {
        let AY = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          IY = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          RY = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const gY = AY ? 4 : 3,
          aY = AY ? this._gl.RGBA : this._gl.RGB,
          vY = DY * FY * gY;
        if (RY) {
          if (RY.length < vY) return OY.d.Error(`Data buffer is too small to store the read pixels (${RY.length} should be more than ${vY})`), Promise.resolve(RY)
        } else RY = new Uint8Array(vY);
        return IY && this.flushFramebuffer(), this._gl.readPixels(YY, rY, DY, FY, aY, this._gl.UNSIGNED_BYTE, RY), Promise.resolve(RY)
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
          const YY = IY.d._CreateCanvas(1, 1),
            rY = YY.getContext("webgl") || YY.getContext("experimental-webgl");
          this._IsSupported = null != rY && !!globalThis.WebGLRenderingContext
        } catch (YY) {
          this._IsSupported = !1
        }
        return this._IsSupported
      }
      static get HasMajorPerformanceCaveat() {
        if (null === this._HasMajorPerformanceCaveat) try {
          const YY = IY.d._CreateCanvas(1, 1),
            rY = YY.getContext("webgl", {
              failIfMajorPerformanceCaveat: !0
            }) || YY.getContext("experimental-webgl", {
              failIfMajorPerformanceCaveat: !0
            });
          this._HasMajorPerformanceCaveat = !rY
        } catch (YY) {
          this._HasMajorPerformanceCaveat = !1
        }
        return this._HasMajorPerformanceCaveat
      }
    }
    SY._TempClearColorUint32 = new Uint32Array(4), SY._TempClearColorInt32 = new Int32Array(4), SY._TempClearColorFloat32 = new Float32Array(4), SY.ExceptionList = [{
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
    }], SY._ConcatenateShader = oY.e, SY._IsSupported = null, SY._HasMajorPerformanceCaveat = null
  },
  39309: (YY, rY, DY) => {
    var FY;
    DY.d(rY, {
        d: () => AY
      }),
      function(YY) {
        YY[YY.PointerMove = 0] = "PointerMove", YY[YY.PointerDown = 1] = "PointerDown", YY[YY.PointerUp = 2] = "PointerUp"
      }(FY || (FY = {}));
    class AY {}
    AY.DOM_DELTA_PIXEL = 0, AY.DOM_DELTA_LINE = 1, AY.DOM_DELTA_PAGE = 2
  },
  39306: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => FY,
      f: () => IY,
      j: () => AY
    });
    class FY {}
    FY.KEYDOWN = 1, FY.KEYUP = 2;
    class AY {
      constructor(YY, rY) {
        this.type = YY, this.event = rY
      }
    }
    class IY extends AY {
      get skipOnPointerObservable() {
        return this.skipOnKeyboardObservable
      }
      set skipOnPointerObservable(YY) {
        this.skipOnKeyboardObservable = YY
      }
      constructor(YY, rY) {
        super(YY, rY), this.type = YY, this.event = rY, this.skipOnKeyboardObservable = !1
      }
    }
  },
  39301: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => AY,
      h: () => RY,
      l: () => OY
    });
    var FY = DY(36524);
    class AY {}
    AY.POINTERDOWN = 1, AY.POINTERUP = 2, AY.POINTERMOVE = 4, AY.POINTERWHEEL = 8, AY.POINTERPICK = 16, AY.POINTERTAP = 32, AY.POINTERDOUBLETAP = 64;
    class IY {
      constructor(YY, rY) {
        this.type = YY, this.event = rY
      }
    }
    class RY extends IY {
      constructor(YY, rY, DY, AY) {
        super(YY, rY), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new FY.q(DY, AY)
      }
    }
    class OY extends IY {
      get pickInfo() {
        return this._pickInfo || this._generatePickInfo(), this._pickInfo
      }
      constructor(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(YY, rY), this._pickInfo = DY, this._inputManager = FY
      }
      _generatePickInfo() {
        this._inputManager && (this._pickInfo = this._inputManager._pickMove(this.event), this._inputManager._setRayOnPointerInfo(this._pickInfo, this.event), this._inputManager = null)
      }
    }
  },
  39319: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => FY
    });
    class FY {
      static CompareLightsPriority(YY, rY) {
        return YY.shadowEnabled !== rY.shadowEnabled ? (rY.shadowEnabled ? 1 : 0) - (YY.shadowEnabled ? 1 : 0) : rY.renderPriority - YY.renderPriority
      }
    }
    FY.FALLOFF_DEFAULT = 0, FY.FALLOFF_PHYSICAL = 1, FY.FALLOFF_GLTF = 2, FY.FALLOFF_STANDARD = 3, FY.LIGHTMAP_DEFAULT = 0, FY.LIGHTMAP_SPECULAR = 1, FY.LIGHTMAP_SHADOWSONLY = 2, FY.INTENSITYMODE_AUTOMATIC = 0, FY.INTENSITYMODE_LUMINOUSPOWER = 1, FY.INTENSITYMODE_LUMINOUSINTENSITY = 2, FY.INTENSITYMODE_ILLUMINANCE = 3, FY.INTENSITYMODE_LUMINANCE = 4, FY.LIGHTTYPEID_POINTLIGHT = 0, FY.LIGHTTYPEID_DIRECTIONALLIGHT = 1, FY.LIGHTTYPEID_SPOTLIGHT = 2, FY.LIGHTTYPEID_HEMISPHERICLIGHT = 3, FY.LIGHTTYPEID_RECT_AREALIGHT = 4, FY.LIGHTTYPEID_CLUSTERED_CONTAINER = 5
  },
  38975: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => RY
    });
    var FY, AY = DY(36552),
      IY = DY(38979);
    ! function(YY) {
      YY[YY.Unknown = 0] = "Unknown", YY[YY.Url = 1] = "Url", YY[YY.Temp = 2] = "Temp", YY[YY.Raw = 3] = "Raw", YY[YY.Dynamic = 4] = "Dynamic", YY[YY.RenderTarget = 5] = "RenderTarget", YY[YY.MultiRenderTarget = 6] = "MultiRenderTarget", YY[YY.Cube = 7] = "Cube", YY[YY.CubeRaw = 8] = "CubeRaw", YY[YY.CubePrefiltered = 9] = "CubePrefiltered", YY[YY.Raw3D = 10] = "Raw3D", YY[YY.Raw2DArray = 11] = "Raw2DArray", YY[YY.DepthStencil = 12] = "DepthStencil", YY[YY.CubeRawRGBD = 13] = "CubeRawRGBD", YY[YY.Depth = 14] = "Depth", YY[YY.External = 15] = "External"
    }(FY || (FY = {}));
    class RY extends IY.e {
      get useMipMaps() {
        return null === this._useMipMaps ? this.generateMipMaps : this._useMipMaps
      }
      set useMipMaps(YY) {
        this._useMipMaps = YY
      }
      get uniqueId() {
        return this._uniqueId
      }
      _setUniqueId(YY) {
        this._uniqueId = YY
      }
      ky() {
        return this._engine
      }
      get source() {
        return this._source
      }
      constructor(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable = new AY.e, this.onErrorObservable = new AY.e, this.onRebuildCallback = null, this.width = 0, this.height = 0, this.depth = 0, this.baseWidth = 0, this.baseHeight = 0, this.baseDepth = 0, this.invertY = !1, this._invertVScale = !1, this._associatedChannel = -1, this._source = 0, this._buffer = null, this._bufferView = null, this._bufferViewArray = null, this._bufferViewArrayArray = null, this._size = 0, this._extension = "", this._files = null, this._workingCanvas = null, this._workingContext = null, this._cachedCoordinatesMode = null, this._isDisabled = !1, this._compression = null, this._sphericalPolynomial = null, this._sphericalPolynomialPromise = null, this._sphericalPolynomialComputed = !1, this._lodGenerationScale = 0, this._lodGenerationOffset = 0, this._useSRGBBuffer = !1, this._creationFlags = 0, this._lodTextureHigh = null, this._lodTextureMid = null, this._lodTextureLow = null, this._isRGBD = !1, this._linearSpecularLOD = !1, this._irradianceTexture = null, this._hardwareTexture = null, this._maxLodLevel = null, this._references = 1, this._gammaSpace = null, this._premulAlpha = !1, this._dynamicTextureSource = null, this._autoMSAAManagement = !1, this._engine = YY, this._source = rY, this._uniqueId = RY._Counter++, DY || (this._hardwareTexture = YY._createHardwareTexture())
      }
      incrementReferences() {
        this._references++
      }
      updateSize(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._engine.updateTextureDimensions(this, YY, rY, DY), this.width = YY, this.height = rY, this.depth = DY, this.baseWidth = YY, this.baseHeight = rY, this.baseDepth = DY, this._size = YY * rY * DY
      }
      _rebuild() {
        if (this.isReady = !1, this._cachedCoordinatesMode = null, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this.onRebuildCallback) {
          const YY = this.onRebuildCallback(this),
            rY = rY => {
              rY._swapAndDie(this, !1), this.isReady = YY.isReady
            };
          return void(YY.isAsync ? YY.proxy.then(rY) : rY(YY.proxy))
        }
        let YY;
        switch (this.source) {
          case 2:
          case 12:
          case 14:
          case 15:
            break;
          case 1:
            return void(YY = this._engine.createTexture(this._originalUrl ?? this.url, !this.generateMipMaps, this.invertY, null, this.samplingMode, (YY => {
              YY._swapAndDie(this, !1), this.isReady = !0
            }), null, this._buffer, void 0, this.format, this._extension, void 0, void 0, void 0, this._useSRGBBuffer));
          case 3:
            if (YY = this._engine.createRawTexture(this._bufferView, this.baseWidth, this.baseHeight, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this._useSRGBBuffer, this.mipLevelCount), YY._swapAndDie(this, !1), this._bufferViewArray)
              for (let YY = 0; YY < this._bufferViewArray.length; YY++) {
                const rY = this._bufferViewArray[YY];
                rY && this._engine.updateRawTexture(this, rY, this.format, this.invertY, this._compression, this.type, this._useSRGBBuffer, YY)
              }
            this.isReady = !0;
            break;
          case 10:
            YY = this._engine.createRawTexture3D(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type), YY._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 11:
            if (YY = this._engine.createRawTexture2DArray(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this.mipLevelCount), YY._swapAndDie(this, !1), this._bufferViewArray)
              for (let YY = 0; YY < this._bufferViewArray.length; YY++) {
                const rY = this._bufferViewArray[YY];
                rY && this._engine.updateRawTexture2DArray(this, rY, this.format, this.invertY, this._compression, this.type, YY)
              }
            this.isReady = !0;
            break;
          case 4:
            YY = this._engine.createDynamicTexture(this.baseWidth, this.baseHeight, this.generateMipMaps, this.samplingMode), YY._swapAndDie(this, !1), this._dynamicTextureSource && this._engine.updateDynamicTexture(this, this._dynamicTextureSource, this.invertY, this._premulAlpha, this.format, !0);
            break;
          case 7:
            return void(YY = this._engine.createCubeTexture(this.url, null, this._files, !this.generateMipMaps, (() => {
              YY._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, !1, 0, 0, null, void 0, this._useSRGBBuffer, ArrayBuffer.isView(this._buffer) ? this._buffer : null));
          case 8:
            YY = this._engine.createRawCubeTexture(this._bufferViewArray, this.width, this._originalFormat ?? this.format, this.type, this.generateMipMaps, this.invertY, this.samplingMode, this._compression), YY._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 13:
            return;
          case 9:
            return YY = this._engine.createPrefilteredCubeTexture(this.url, null, this._lodGenerationScale, this._lodGenerationOffset, (YY => {
              YY && YY._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, void 0, ArrayBuffer.isView(this._buffer) ? this._buffer : null), void(YY._sphericalPolynomial = this._sphericalPolynomial)
        }
      }
      _swapAndDie(YY) {
        let rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._hardwareTexture?.setUsage(YY._source, this.generateMipMaps, this.is2DArray, this.isCube, this.is3D, this.width, this.height, this.depth), YY._hardwareTexture = this._hardwareTexture, YY._setUniqueId(RY._Counter++), rY && (YY._isRGBD = this._isRGBD), this._lodTextureHigh && (YY._lodTextureHigh && YY._lodTextureHigh.dispose(), YY._lodTextureHigh = this._lodTextureHigh), this._lodTextureMid && (YY._lodTextureMid && YY._lodTextureMid.dispose(), YY._lodTextureMid = this._lodTextureMid), this._lodTextureLow && (YY._lodTextureLow && YY._lodTextureLow.dispose(), YY._lodTextureLow = this._lodTextureLow), this._irradianceTexture && (YY._irradianceTexture && YY._irradianceTexture.dispose(), YY._irradianceTexture = this._irradianceTexture);
        const DY = this._engine.getLoadedTexturesCache();
        let FY = DY.indexOf(this); - 1 !== FY && DY.splice(FY, 1), FY = DY.indexOf(YY), -1 === FY && DY.push(YY)
      }
      dispose() {
        this._references--, 0 === this._references && (this.onLoadedObservable.clear(), this.onErrorObservable.clear(), this._engine._releaseTexture(this), this._hardwareTexture = null, this._dynamicTextureSource = null)
      }
    }
    RY._Counter = 0
  },
  39078: (YY, rY, DY) => {
    function FY(YY) {
      return 13 === YY || 14 === YY || 15 === YY || 16 === YY || 17 === YY || 18 === YY || 19 === YY
    }

    function AY(YY) {
      return 8 === YY || 9 === YY || 10 === YY || 11 === YY
    }

    function IY(YY) {
      return 0 === YY || 5 === YY || 7 === YY || 11 === YY
    }

    function RY(YY) {
      return 13 === YY || 17 === YY || 18 === YY || 19 === YY
    }
    DY.d(rY, {
      d: () => RY,
      f: () => FY,
      i: () => AY,
      m: () => IY
    })
  },
  38979: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => FY
    });
    class FY {
      get wrapU() {
        return this._cachedWrapU
      }
      set wrapU(YY) {
        this._cachedWrapU = YY
      }
      get wrapV() {
        return this._cachedWrapV
      }
      set wrapV(YY) {
        this._cachedWrapV = YY
      }
      get wrapR() {
        return this._cachedWrapR
      }
      set wrapR(YY) {
        this._cachedWrapR = YY
      }
      get anisotropicFilteringLevel() {
        return this._cachedAnisotropicFilteringLevel
      }
      set anisotropicFilteringLevel(YY) {
        this._cachedAnisotropicFilteringLevel = YY
      }
      get comparisonFunction() {
        return this._comparisonFunction
      }
      set comparisonFunction(YY) {
        this._comparisonFunction = YY
      }
      get useMipMaps() {
        return this._useMipMaps
      }
      set useMipMaps(YY) {
        this._useMipMaps = YY
      }
      constructor() {
        this.samplingMode = -1, this._useMipMaps = !0, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this._comparisonFunction = 0
      }
      setParameters() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2,
          IY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return this._cachedWrapU = YY, this._cachedWrapV = rY, this._cachedWrapR = DY, this._cachedAnisotropicFilteringLevel = FY, this.samplingMode = AY, this._comparisonFunction = IY, this
      }
      compareSampler(YY) {
        return this._cachedWrapU === YY._cachedWrapU && this._cachedWrapV === YY._cachedWrapV && this._cachedWrapR === YY._cachedWrapR && this._cachedAnisotropicFilteringLevel === YY._cachedAnisotropicFilteringLevel && this.samplingMode === YY.samplingMode && this._comparisonFunction === YY._comparisonFunction && this._useMipMaps === YY._useMipMaps
      }
    }
  },
  39243: (YY, rY, DY) => {
    function FY(YY) {
      YY.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative")
    }
    DY.d(rY, {
      c: () => FY
    })
  },
  39049: (YY, rY, DY) => {
    function FY(YY) {
      return void 0 === YY.getPipelineContext
    }
    DY.d(rY, {
      c: () => FY
    })
  },
  39437: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => AY
    });
    var FY = DY(39037);
    class AY {
      static GetEffect(YY) {
        return void 0 === YY.getPipelineContext ? YY.effect : YY
      }
      constructor(YY) {
        let rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._wasPreviouslyReady = !1, this._forceRebindOnNextCall = !0, this._wasPreviouslyUsingInstances = null, this.effect = null, this.defines = null, this.drawContext = YY.createDrawContext(), rY && (this.materialContext = YY.createMaterialContext())
      }
      setEffect(YY, rY) {
        let DY = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        DY || this.effect === YY || this.drawContext?._releaseUniformBufferSlots?.(), this.effect = YY, void 0 !== rY && (this.defines = rY), DY && this.drawContext?.reset()
      }
      dispose() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.effect) {
          const rY = this.effect;
          YY ? rY.dispose() : FY.d.SetImmediate((() => {
            rY.ky().onEndFrameObservable.addOnce((() => {
              rY.dispose()
            }))
          })), this.effect = null
        }
        this.drawContext?.dispose()
      }
    }
  },
  39004: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => uY,
      f: () => iY,
      g: () => aY,
      k: () => vY
    });
    var FY = DY(39013),
      AY = DY(39019),
      IY = DY(38998),
      RY = DY(38040),
      OY = DY(39032),
      gY = DY(39021);

    function aY(YY, rY) {
      return (0, AY.z)(rY).cachedPipelines[YY]
    }

    function vY(YY) {
      const rY = YY._name,
        DY = YY.context;
      if (rY && DY) {
        const YY = (0, AY.z)(DY),
          FY = YY.cachedPipelines[rY];
        FY?.dispose(), delete YY.cachedPipelines[rY]
      }
    }

    function uY(YY, rY, DY, AY, IY, RY, gY) {
      let aY, vY;
      const uY = (0, FY.l)() ? RY?.getHostDocument() : null;
      aY = "string" === typeof rY ? rY : "string" === typeof rY.vertexSource ? "source:" + rY.vertexSource : "string" === typeof rY.vertexElement ? uY?.getElementById(rY.vertexElement) || rY.vertexElement : rY.vertex || rY, vY = "string" === typeof rY ? rY : "string" === typeof rY.fragmentSource ? "source:" + rY.fragmentSource : "string" === typeof rY.fragmentElement ? uY?.getElementById(rY.fragmentElement) || rY.fragmentElement : rY.fragment || rY;
      const iY = [void 0, void 0],
        yY = () => {
          if (iY[0] && iY[1]) {
            const [FY, aY] = iY;
            (0, OY.g)(YY), (0, OY.m)(FY, YY, ((FY, vY) => {
              gY && (gY._vertexSourceCodeBeforeMigration = vY), DY && (FY = DY("vertex", FY)), YY.isFragment = !0, (0, OY.m)(aY, YY, ((RY, aY) => {
                gY && (gY._fragmentSourceCodeBeforeMigration = aY), DY && (RY = DY("fragment", RY));
                const vY = (0, OY.e)(FY, RY, YY);
                YY = null;
                const uY = function(YY, rY, DY, FY) {
                  if (DY) {
                    return {
                      vertexSourceCode: (1 === FY ? "//" : "") + "#define SHADER_NAME vertex:" + (DY.vertexElement || DY.vertex || DY.spectorName || DY) + "\n" + YY,
                      fragmentSourceCode: (1 === FY ? "//" : "") + "#define SHADER_NAME fragment:" + (DY.fragmentElement || DY.fragment || DY.spectorName || DY) + "\n" + rY
                    }
                  }
                  return {
                    vertexSourceCode: YY,
                    fragmentSourceCode: rY
                  }
                }(vY.vertexCode, vY.fragmentCode, rY, IY);
                AY?.(uY.vertexSourceCode, uY.fragmentSourceCode)
              }), RY)
            }), RY)
          }
        };
      sY(aY, "Vertex", "", (YY => {
        gY && (gY._rawVertexSourceCode = YY), iY[0] = YY, yY()
      }), IY), sY(vY, "Fragment", "Pixel", (YY => {
        gY && (gY._rawFragmentSourceCode = YY), iY[1] = YY, yY()
      }), IY)
    }

    function sY(YY, rY, DY, AY, RY, OY) {
      if ("undefined" !== typeof HTMLElement && YY instanceof HTMLElement) {
        return void AY((0, FY.d)(YY))
      }
      if ("source:" === YY.substring(0, 7)) return void AY(YY.substring(7));
      if ("base64:" === YY.substring(0, 7)) {
        return void AY(window.atob(YY.substring(7)))
      }
      const aY = IY.b.GetShadersStore(RY);
      if (aY[YY + rY + "Shader"]) return void AY(aY[YY + rY + "Shader"]);
      if (DY && aY[YY + DY + "Shader"]) return void AY(aY[YY + DY + "Shader"]);
      let vY;
      if (vY = "." === YY[0] || "/" === YY[0] || YY.indexOf("http") > -1 ? YY : IY.b.GetShadersRepository(RY) + YY, !(OY = OY || gY.m)) throw new Error("loadFileInjection is not defined");
      OY(vY + "." + rY.toLowerCase() + ".fx", AY)
    }
    const iY = (YY, rY, DY, FY) => {
      try {
        const IY = YY.context ? (0, AY.z)(YY.context) : null;
        IY && (IY.disableParallelShaderCompile = YY.disableParallelCompilation);
        const RY = YY.existingPipelineContext || rY(YY.shaderProcessingContext);
        return RY._name = YY.name, YY.name && IY && (IY.cachedPipelines[YY.name] = RY), DY(RY, YY.vertex, YY.fragment, !!YY.createAsRaw, "", "", YY.rebuildRebind, YY.defines, YY.transformFeedbackVaryings, "", (() => {
          FY(RY, (() => {
            YY.onRenderingStateCompiled?.(RY)
          }))
        })), RY
      } catch (IY) {
        throw RY.d.Error("Error compiling effect"), IY
      }
    }
  },
  38991: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => gY
    });
    var FY = DY(36552),
      AY = DY(38040),
      IY = DY(38998),
      RY = DY(39004),
      OY = DY(39037);
    class gY {
      static get ShadersRepository() {
        return IY.b.ShadersRepository
      }
      static set ShadersRepository(YY) {
        IY.b.ShadersRepository = YY
      }
      get CrY() {
        return this._isDisposed
      }
      get onBindObservable() {
        return this._onBindObservable || (this._onBindObservable = new FY.e), this._onBindObservable
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(YY, rY, DY) {
        let AY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          IY = arguments.length > 4 ? arguments[4] : void 0,
          OY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          aY = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          vY = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          uY = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          sY = arguments.length > 9 ? arguments[9] : void 0,
          iY = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : "",
          yY = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0,
          QY = arguments.length > 12 ? arguments[12] : void 0;
        this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new FY.e, this.onErrorObservable = new FY.e, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationForcedToCPU = !1, this._uniformBuffersNames = {}, this._multiTarget = !1, this._samplers = {}, this._isReady = !1, this._compilationError = "", this._allFallbacksProcessed = !1, this._uniforms = {}, this._key = "", this._fallbacks = null, this._vertexSourceCodeOverride = "", this._fragmentSourceCodeOverride = "", this._transformFeedbackVaryings = null, this._disableParallelShaderCompilation = !1, this._pipelineContext = null, this._vertexSourceCode = "", this._fragmentSourceCode = "", this._vertexSourceCodeBeforeMigration = "", this._fragmentSourceCodeBeforeMigration = "", this._rawVertexSourceCode = "", this._rawFragmentSourceCode = "", this._processCodeAfterIncludes = void 0, this._processFinalCode = null, this._onReleaseEffectsObserver = null, this.name = YY, this._key = iY;
        const oY = this._key.replace(/\r/g, "").replace(/\n/g, "|");
        let WY;
        if (rY.attributes) {
          const YY = rY;
          if (this._engine = DY, this._attributesNames = YY.attributes, this._uniformsNames = YY.uniformsNames.concat(YY.samplers), this._samplerList = YY.samplers.slice(), this.defines = YY.defines, this.onError = YY.onError, this.onCompiled = YY.onCompiled, this._fallbacks = YY.fallbacks, this._indexParameters = YY.indexParameters, this._transformFeedbackVaryings = YY.transformFeedbackVaryings || null, this._multiTarget = !!YY.multiTarget, this._shaderLanguage = YY.shaderLanguage ?? 0, this._disableParallelShaderCompilation = !!YY.disableParallelShaderCompilation, YY.uniformBuffersNames) {
            this._uniformBuffersNamesList = YY.uniformBuffersNames.slice();
            for (let rY = 0; rY < YY.uniformBuffersNames.length; rY++) this._uniformBuffersNames[YY.uniformBuffersNames[rY]] = rY
          }
          this._processFinalCode = YY.processFinalCode ?? null, this._processCodeAfterIncludes = YY.processCodeAfterIncludes ?? void 0, QY = YY.extraInitializationsAsync, WY = YY.existingPipelineContext
        } else this._engine = IY, this.defines = null == OY ? "" : OY, this._uniformsNames = DY.concat(AY), this._samplerList = AY ? AY.slice() : [], this._attributesNames = rY, this._uniformBuffersNamesList = [], this._shaderLanguage = yY, this.onError = uY, this.onCompiled = vY, this._indexParameters = sY, this._fallbacks = aY;
        "WEBGL2" === this._engine.shaderPlatformName && (WY = (0, RY.g)(oY, this._engine._gl) ?? WY), this._attributeLocationByName = {}, this.uniqueId = gY._UniqueIdSeed++, WY ? (this._pipelineContext = WY, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCompiled(this._pipelineContext), this._pipelineContext.program && (this._pipelineContext.program.__SPECTOR_rebuildProgram = this._rebuildProgram.bind(this))) : this._processShaderCodeAsync(null, !1, null, QY).catch((YY => {
          const rY = YY?.message ?? String(YY),
            DY = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${rY}`);
          YY && "string" === typeof YY.stack && (DY.stack = `${DY.message}\nCaused by: ${YY.stack}`), this._processCompilationErrors(DY)
        })), this._onReleaseEffectsObserver = this._engine.onReleaseEffectsObservable.addOnce((() => {
          this._onReleaseEffectsObserver = null, this.CrY || this.dispose(!0)
        }))
      }
      async _processShaderCodeAsync() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          FY = arguments.length > 3 ? arguments[3] : void 0;
        FY && await FY(), this._processingContext = DY || this._engine._getShaderProcessingContext(this._shaderLanguage, !1);
        const AY = {
          defines: this.defines.split("\n"),
          indexParameters: this._indexParameters,
          isFragment: !1,
          shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
          processor: YY ?? this._engine._getShaderProcessor(this._shaderLanguage),
          supportsUniformBuffers: this._engine.supportsUniformBuffers,
          shadersRepository: IY.b.GetShadersRepository(this._shaderLanguage),
          includesShadersStore: IY.b.GetIncludesShadersStore(this._shaderLanguage),
          version: (100 * this._engine.version).toString(),
          platformName: this._engine.shaderPlatformName,
          processingContext: this._processingContext,
          isNDCHalfZRange: this._engine.isNDCHalfZRange,
          QDY: this._engine.QDY,
          processCodeAfterIncludes: this._processCodeAfterIncludes
        };
        (0, RY.b)(AY, this.name, this._processFinalCode, ((YY, DY) => {
          this._vertexSourceCode = YY, this._fragmentSourceCode = DY, this._prepareEffect(rY)
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
        return !!this._engine.CrY || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
      }
      ky() {
        return this._engine
      }
      getPipelineContext() {
        return this._pipelineContext
      }
      getAttributesNames() {
        return this._attributesNames
      }
      getAttributeLocation(YY) {
        return this._attributes[YY]
      }
      getAttributeLocationByName(YY) {
        return this._attributeLocationByName[YY]
      }
      getAttributesCount() {
        return this._attributes.length
      }
      getUniformIndex(YY) {
        return this._uniformsNames.indexOf(YY)
      }
      getUniform(YY) {
        return this._uniforms[YY]
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
        return await new Promise((YY => {
          this.executeWhenCompiled(YY)
        }))
      }
      executeWhenCompiled(YY) {
        this.isReady() ? YY(this) : (this.onCompileObservable.add((rY => {
          YY(rY)
        })), this._pipelineContext && !this._pipelineContext.isAsync || this._checkIsReady(null))
      }
      _checkIsReady(YY) {
        (0, OY.e)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (rY => {
          this._processCompilationErrors(rY, YY)
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
            QDY: this._engine.QDY,
            supportsUniformBuffers: this._engine.supportsUniformBuffers
          },
          extendedCreatePipelineOptions: {
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            createAsRaw: !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride)
          }
        }
      }
      _rebuildProgram(YY, rY, DY, FY) {
        this._isReady = !1, this._vertexSourceCodeOverride = YY, this._fragmentSourceCodeOverride = rY, this.onError = (YY, rY) => {
          FY && FY(rY)
        }, this.onCompiled = () => {
          const YY = this.ky().scenes;
          if (YY)
            for (let rY = 0; rY < YY.length; rY++) YY[rY].markAllMaterialsAsDirty(127);
          this._pipelineContext._handlesSpectorRebuildCallback?.(DY)
        }, this._fallbacks = null, this._prepareEffect()
      }
      _onRenderingStateCompiled(YY) {
        if (this._pipelineContext = YY, this._pipelineContext.setEngine(this._engine), this._attributes = [], this._pipelineContext._fillEffectInformation(this, this._uniformBuffersNames, this._uniformsNames, this._uniforms, this._samplerList, this._samplers, this._attributesNames, this._attributes), this._attributesNames)
          for (let rY = 0; rY < this._attributesNames.length; rY++) {
            const YY = this._attributesNames[rY];
            this._attributeLocationByName[YY] = this._attributes[rY]
          }
        this._engine.bindSamplers(this), this._compilationError = "", this._isReady = !0, this.onCompiled && this.onCompiled(this), this.onCompileObservable.notifyObservers(this), this.onCompileObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh(), gY.AutomaticallyClearCodeCache && this.clearCodeCache()
      }
      _prepareEffect() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const rY = this._pipelineContext;
        this._isReady = !1;
        try {
          const DY = !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride),
            FY = DY ? null : this.defines,
            AY = DY ? this._vertexSourceCodeOverride : this._vertexSourceCode,
            IY = DY ? this._fragmentSourceCodeOverride : this._fragmentSourceCode,
            OY = this._engine;
          this._pipelineContext = (0, RY.f)({
            existingPipelineContext: YY ? rY : null,
            vertex: AY,
            fragment: IY,
            context: "WEBGL2" === OY.shaderPlatformName || "WEBGL1" === OY.shaderPlatformName ? OY._gl : void 0,
            rebuildRebind: (YY, rY, DY, FY) => this._rebuildProgram(YY, rY, DY, FY),
            defines: FY,
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            name: this._key.replace(/\r/g, "").replace(/\n/g, "|"),
            createAsRaw: DY,
            disableParallelCompilation: this._disableParallelShaderCompilation,
            shaderProcessingContext: this._processingContext,
            onRenderingStateCompiled: DY => {
              rY && !YY && this._engine._deletePipelineContext(rY), DY && this._onRenderingStateCompiled(DY)
            }
          }, this._engine.createPipelineContext.bind(this._engine), this._engine._preparePipelineContextAsync.bind(this._engine), this._engine._executeWhenRenderingStateIsCompiled.bind(this._engine)), this._pipelineContext.isAsync && this._checkIsReady(rY)
        } catch (DY) {
          this._processCompilationErrors(DY, rY)
        }
      }
      _getShaderCodeAndErrorLine(YY, rY, DY) {
        const FY = DY ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/;
        let AY = null;
        if (rY && YY) {
          const IY = rY.match(FY);
          if (IY && 2 === IY.length) {
            const rY = parseInt(IY[1]),
              FY = YY.split("\n", -1);
            FY.length >= rY && (AY = `Offending line [${rY}] in ${DY?"fragment":"vertex"} code: ${FY[rY-1]}`)
          }
        }
        return [YY, AY]
      }
      _processCompilationErrors(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._compilationError = "string" === typeof YY?.stack ? YY.stack : YY?.message ?? String(YY);
        const DY = this._attributesNames,
          FY = this._fallbacks;
        if (AY.d.Error("Unable to compile effect:"), AY.d.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), AY.d.Error(`Attributes: ${DY.join(" ")}`), AY.d.Error("Defines:\n" + this.defines), gY.LogShaderCodeOnCompilationError) {
          let YY, rY = null,
            DY = null;
          this._pipelineContext?._getVertexShaderCode() && ([YY, rY] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), YY && (AY.d.Error("Vertex code:"), AY.d.Error(YY))), this._pipelineContext?._getFragmentShaderCode() && ([YY, DY] = this._getShaderCodeAndErrorLine(this._pipelineContext?._getFragmentShaderCode(), this._compilationError, !0), YY && (AY.d.Error("Fragment code:"), AY.d.Error(YY))), rY && AY.d.Error(rY), DY && AY.d.Error(DY)
        }
        AY.d.Error("Error: " + this._compilationError);
        const IY = () => {
          this.onError && this.onError(this, this._compilationError), this.onErrorObservable.notifyObservers(this), this._engine.onEffectErrorObservable.notifyObservers({
            effect: this,
            errors: this._compilationError
          })
        };
        rY && (this._pipelineContext = rY, this._isReady = !0, IY()), FY ? (this._pipelineContext = null, FY.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, AY.d.Error("Trying next fallback."), this.defines = FY.reduce(this.defines, this), this._prepareEffect()) : (this._allFallbacksProcessed = !0, IY(), this.onErrorObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh())) : (this._allFallbacksProcessed = !0, rY || IY())
      }
      get isSupported() {
        return "" === this._compilationError
      }
      _bindTexture(YY, rY) {
        this._engine._bindTexture(this._samplers[YY], rY, YY)
      }
      setTexture(YY, rY) {
        this._engine.setTexture(this._samplers[YY], this._uniforms[YY], rY, YY)
      }
      setTextureArray(YY, rY) {
        const DY = YY + "Ex";
        if (-1 === this._samplerList.indexOf(DY + "0")) {
          const FY = this._samplerList.indexOf(YY);
          for (let YY = 1; YY < rY.length; YY++) {
            const rY = DY + (YY - 1).toString();
            this._samplerList.splice(FY + YY, 0, rY)
          }
          let AY = 0;
          for (const YY of this._samplerList) this._samplers[YY] = AY, AY += 1
        }
        this._engine.setTextureArray(this._samplers[YY], this._uniforms[YY], rY, YY)
      }
      bindUniformBuffer(YY, rY) {
        const DY = this._uniformBuffersNames[rY];
        void 0 === DY || gY._BaseCache[DY] === YY && this._engine._features.useUBOBindingCache || (gY._BaseCache[DY] = YY, this._engine.bindUniformBufferBase(YY, DY, rY))
      }
      bindUniformBlock(YY, rY) {
        this._engine.bindUniformBlock(this._pipelineContext, YY, rY)
      }
      setInt(YY, rY) {
        return this._pipelineContext.setInt(YY, rY), this
      }
      setInt2(YY, rY, DY) {
        return this._pipelineContext.setInt2(YY, rY, DY), this
      }
      setInt3(YY, rY, DY, FY) {
        return this._pipelineContext.setInt3(YY, rY, DY, FY), this
      }
      setInt4(YY, rY, DY, FY, AY) {
        return this._pipelineContext.setInt4(YY, rY, DY, FY, AY), this
      }
      setIntArray(YY, rY) {
        return this._pipelineContext.setIntArray(YY, rY), this
      }
      setIntArray2(YY, rY) {
        return this._pipelineContext.setIntArray2(YY, rY), this
      }
      setIntArray3(YY, rY) {
        return this._pipelineContext.setIntArray3(YY, rY), this
      }
      setIntArray4(YY, rY) {
        return this._pipelineContext.setIntArray4(YY, rY), this
      }
      setUInt(YY, rY) {
        return this._pipelineContext.setUInt(YY, rY), this
      }
      setUInt2(YY, rY, DY) {
        return this._pipelineContext.setUInt2(YY, rY, DY), this
      }
      setUInt3(YY, rY, DY, FY) {
        return this._pipelineContext.setUInt3(YY, rY, DY, FY), this
      }
      setUInt4(YY, rY, DY, FY, AY) {
        return this._pipelineContext.setUInt4(YY, rY, DY, FY, AY), this
      }
      setUIntArray(YY, rY) {
        return this._pipelineContext.setUIntArray(YY, rY), this
      }
      setUIntArray2(YY, rY) {
        return this._pipelineContext.setUIntArray2(YY, rY), this
      }
      setUIntArray3(YY, rY) {
        return this._pipelineContext.setUIntArray3(YY, rY), this
      }
      setUIntArray4(YY, rY) {
        return this._pipelineContext.setUIntArray4(YY, rY), this
      }
      setFloatArray(YY, rY) {
        return this._pipelineContext.setArray(YY, rY), this
      }
      setFloatArray2(YY, rY) {
        return this._pipelineContext.setArray2(YY, rY), this
      }
      setFloatArray3(YY, rY) {
        return this._pipelineContext.setArray3(YY, rY), this
      }
      setFloatArray4(YY, rY) {
        return this._pipelineContext.setArray4(YY, rY), this
      }
      setArray(YY, rY) {
        return this._pipelineContext.setArray(YY, rY), this
      }
      setArray2(YY, rY) {
        return this._pipelineContext.setArray2(YY, rY), this
      }
      setArray3(YY, rY) {
        return this._pipelineContext.setArray3(YY, rY), this
      }
      setArray4(YY, rY) {
        return this._pipelineContext.setArray4(YY, rY), this
      }
      setMatrices(YY, rY) {
        return this._pipelineContext.setMatrices(YY, rY), this
      }
      setMatrix(YY, rY) {
        return this._pipelineContext.setMatrix(YY, rY), this
      }
      setMatrix3x3(YY, rY) {
        return this._pipelineContext.setMatrix3x3(YY, rY), this
      }
      setMatrix2x2(YY, rY) {
        return this._pipelineContext.setMatrix2x2(YY, rY), this
      }
      setFloat(YY, rY) {
        return this._pipelineContext.setFloat(YY, rY), this
      }
      setBool(YY, rY) {
        return this._pipelineContext.setInt(YY, rY ? 1 : 0), this
      }
      setVector2(YY, rY) {
        return this._pipelineContext.setVector2(YY, rY), this
      }
      setFloat2(YY, rY, DY) {
        return this._pipelineContext.setFloat2(YY, rY, DY), this
      }
      setVector3(YY, rY) {
        return this._pipelineContext.setVector3(YY, rY), this
      }
      setFloat3(YY, rY, DY, FY) {
        return this._pipelineContext.setFloat3(YY, rY, DY, FY), this
      }
      setVector4(YY, rY) {
        return this._pipelineContext.setVector4(YY, rY), this
      }
      setQuaternion(YY, rY) {
        return this._pipelineContext.setQuaternion(YY, rY), this
      }
      setFloat4(YY, rY, DY, FY, AY) {
        return this._pipelineContext.setFloat4(YY, rY, DY, FY, AY), this
      }
      setColor3(YY, rY) {
        return this._pipelineContext.setColor3(YY, rY), this
      }
      setColor4(YY, rY, DY) {
        return this._pipelineContext.setColor4(YY, rY, DY), this
      }
      setDirectColor4(YY, rY) {
        return this._pipelineContext.setDirectColor4(YY, rY), this
      }
      clearCodeCache() {
        this._vertexSourceCode = "", this._fragmentSourceCode = "", this._fragmentSourceCodeBeforeMigration = "", this._vertexSourceCodeBeforeMigration = ""
      }
      dispose() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) this._refCount = 0;
        else {
          if (gY.PersistentMode) return;
          this._refCount--
        }
        this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, RY.k)(this._pipelineContext), this._engine._releaseEffect(this), this.clearCodeCache(), this._isDisposed = !0)
      }
      static RegisterShader(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        rY && (IY.b.GetShadersStore(FY)[`${YY}PixelShader`] = rY), DY && (IY.b.GetShadersStore(FY)[`${YY}VertexShader`] = DY)
      }
      static ResetCache() {
        gY._BaseCache = {}
      }
    }
    gY.LogShaderCodeOnCompilationError = !0, gY.PersistentMode = !1, gY.AutomaticallyClearCodeCache = !1, gY._UniqueIdSeed = 0, gY._BaseCache = {}, gY.ShadersStore = IY.b.ShadersStore, gY.IncludesShadersStore = IY.b.IncludesShadersStore
  },
  39286: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => vY,
      d: () => TY,
      g: () => lY
    });
    var FY = DY(38991),
      AY = DY(36524),
      IY = DY(36561),
      RY = DY(39255);
    const OY = new AY.e,
      gY = new AY.e,
      aY = new AY.e,
      vY = {
        hT: () => {},
        eyeAtCamera: !0
      };

    function uY(YY, rY, DY) {
      const FY = DY.VDY(),
        AY = rY.VDY();
      for (let IY = 0; IY < 16; IY++) FY[IY] = AY[IY];
      return FY[12] -= YY.x, FY[13] -= YY.y, FY[14] -= YY.z, DY.markAsUpdated(), DY
    }

    function sY(YY, rY, DY) {
      return (0, IY.f)(rY, gY), uY(YY, gY, aY), (0, IY.f)(aY, DY), DY
    }

    function iY(YY, rY, DY) {
      if (!vY.eyeAtCamera) return sY(YY, rY, DY);
      const FY = DY.VDY(),
        AY = rY.VDY();
      for (let IY = 0; IY < 16; IY++) FY[IY] = AY[IY];
      return FY[12] = 0, FY[13] = 0, FY[14] = 0, DY.markAsUpdated(), DY
    }

    function yY(YY, rY, DY, FY) {
      return (0, IY.j)(iY(YY, rY, FY), DY, FY), FY
    }

    function QY(YY, rY, DY, FY) {
      return (0, IY.f)(DY, gY), (0, IY.j)(rY, gY, aY), uY(YY, aY, gY), iY(YY, DY, aY), (0, IY.j)(gY, aY, FY), FY
    }

    function oY(YY, rY, DY, FY, AY, RY) {
      return (0, IY.f)(DY, gY), (0, IY.j)(rY, gY, aY), uY(YY, aY, gY), yY(YY, FY, AY, aY), (0, IY.j)(gY, aY, RY), RY
    }

    function WY(YY, rY) {
      const DY = vY.hT();
      if (!DY || OY === rY) return rY;
      OY.updateFlag = rY.updateFlag;
      const FY = DY.floatingOriginOffset;
      switch (YY) {
        case "world":
          return uY(FY, rY, OY);
        case "view":
          return iY(FY, rY, OY);
        case "worldView":
          return QY(FY, rY, DY.getViewMatrix(), OY);
        case "viewProjection":
          return yY(FY, DY.getViewMatrix(), DY.getProjectionMatrix(), OY);
        case "worldViewProjection":
          return oY(FY, rY, DY.getTransformMatrix(), DY.getViewMatrix(), DY.getProjectionMatrix(), OY);
        default:
          if (YY.startsWith("u_")) {
            const AY = YY.toLowerCase();
            if (AY.startsWith("u_worldviewprojection")) return oY(FY, rY, DY.getTransformMatrix(), DY.getViewMatrix(), DY.getProjectionMatrix(), OY);
            if (AY.startsWith("u_viewprojection")) return yY(FY, DY.getViewMatrix(), DY.getProjectionMatrix(), OY);
            if (AY.startsWith("u_worldview")) return QY(FY, rY, DY.getViewMatrix(), OY);
            if (AY.startsWith("u_world")) return uY(FY, rY, OY);
            if (AY.startsWith("u_view")) return iY(FY, rY, OY)
          }
          return rY
      }
    }
    const EY = RY.b,
      mY = FY.e,
      VY = EY.prototype._updateMatrixForUniform,
      SY = FY.e.prototype.setMatrix;

    function lY() {
      FY.e.prototype.setMatrix = SY, mY._setMatrixOverride = void 0, EY.prototype._updateMatrixForUniform = VY, EY.prototype._updateMatrixForUniformOverride = void 0
    }

    function TY() {
      mY.prototype._setMatrixOverride = SY, mY.prototype.setMatrix = function(YY, rY) {
        return this._setMatrixOverride(YY, WY(YY, rY)), this
      }, EY.prototype._updateMatrixForUniformOverride = VY, EY.prototype._updateMatrixForUniform = function(YY, rY) {
        this._updateMatrixForUniformOverride(YY, WY(YY, rY))
      }
    }
  },
  39252: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => IY,
      g: () => AY
    });
    var FY = DY(39243);

    function AY(YY, rY) {
      rY.WHITEBALANCE && YY.push("whiteBalanceMatrix"), rY.EXPOSURE && YY.push("exposureLinear"), rY.CONTRAST && YY.push("contrast"), rY.COLORGRADING && YY.push("colorTransformSettings"), (rY.VIGNETTE || rY.DITHER) && YY.push("vInverseScreenSize"), rY.VIGNETTE && (YY.push("vignetteSettings1"), YY.push("vignetteSettings2")), rY.COLORCURVES && (0, FY.c)(YY), rY.DITHER && YY.push("ditherIntensity")
    }

    function IY(YY, rY) {
      rY.COLORGRADING && YY.push("txColorTransform")
    }
  },
  39234: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => KY,
      d: () => ZY
    });
    var FY = DY(39127),
      AY = DY(39131),
      IY = DY(36552),
      RY = DY(36588),
      OY = DY(36559),
      gY = DY(36524);
    const aY = [
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
      vY = 1e6 / aY[aY.length - 1][0],
      uY = 150;

    function sY(YY, rY) {
      const DY = Number.isNaN(YY) ? vY : Math.max(YY, vY),
        FY = (0, OY.Clamp)(1e6 / DY, aY[0][0], aY[aY.length - 1][0]);
      let AY = 0,
        IY = aY.length - 1;
      for (; IY - AY > 1;) {
        const YY = AY + IY >> 1;
        aY[YY][0] <= FY ? AY = YY : IY = YY
      }
      const RY = AY,
        [sY, iY, yY, QY] = aY[RY],
        [oY, WY, EY, mY] = aY[RY + 1],
        VY = (FY - sY) / (oY - sY),
        SY = gY.q.Lerp(new gY.q(iY, yY), new gY.q(WY, EY), VY),
        lY = gY.q.Normalize(new gY.q(1, QY)),
        TY = gY.q.Normalize(new gY.q(1, mY)),
        eY = gY.q.Normalize(gY.q.Lerp(lY, TY, VY)),
        NY = (0, OY.Clamp)(rY, -150, uY);
      SY.dDY(eY.scale(NY / 3e3));
      const BY = 2 * SY.x - 8 * SY.y + 4,
        cY = 3 * SY.x / BY,
        KY = 2 * SY.y / BY;
      return new gY.r(cY / KY, 1, (1 - cY - KY) / KY)
    }
    const iY = gY.e.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
      yY = gY.e.Invert(iY);

    function QY(YY, rY) {
      const DY = rY > 0 ? YY / rY : 10;
      return (0, OY.Clamp)(DY, .1, 10)
    }

    function oY(YY, rY) {
      const DY = gY.r.TransformNormal(YY, iY),
        FY = gY.r.TransformNormal(rY, iY),
        AY = gY.e.FromArray([QY(FY.x, DY.x), 0, 0, 0, 0, QY(FY.y, DY.y), 0, 0, 0, 0, QY(FY.z, DY.z), 0, 0, 0, 0, 1]);
      return iY.multiply(AY).multiply(yY)
    }
    const WY = new gY.r(.95047, 1, 1.08883),
      EY = gY.e.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(oY(WY, sY(6500, 0))),
      mY = gY.e.Invert(EY),
      VY = gY.r.TransformNormal(new gY.r(1, 1, 1), EY);
    var SY = DY(39144),
      lY = DY(39243);
    let TY = (() => {
      var YY;
      let rY, DY, IY, OY, gY, aY, vY, uY, sY, iY, yY, QY, oY = [],
        WY = [],
        EY = [],
        mY = [],
        VY = [],
        TY = [],
        eY = [],
        NY = [],
        BY = [],
        cY = [],
        KY = [],
        HY = [],
        zY = [],
        ZY = [],
        CY = [],
        fY = [],
        jY = [],
        hY = [],
        dY = [],
        JY = [],
        MY = [],
        wY = [],
        bY = [],
        XY = [];
      return YY = class {
        constructor() {
          this._dirty = !0, this._tempColor = new RY.d(0, 0, 0, 0), this._globalCurve = new RY.d(0, 0, 0, 0), this._highlightsCurve = new RY.d(0, 0, 0, 0), this._midtonesCurve = new RY.d(0, 0, 0, 0), this._shadowsCurve = new RY.d(0, 0, 0, 0), this._positiveCurve = new RY.d(0, 0, 0, 0), this._negativeCurve = new RY.d(0, 0, 0, 0), this._globalHue = (0, FY.j)(this, oY, 30), this._globalDensity = ((0, FY.j)(this, WY), (0, FY.j)(this, EY, 0)), this._globalSaturation = ((0, FY.j)(this, mY), (0, FY.j)(this, VY, 0)), this._globalExposure = ((0, FY.j)(this, TY), (0, FY.j)(this, eY, 0)), this._highlightsHue = ((0, FY.j)(this, NY), (0, FY.j)(this, BY, 30)), this._highlightsDensity = ((0, FY.j)(this, cY), (0, FY.j)(this, KY, 0)), this._highlightsSaturation = ((0, FY.j)(this, HY), (0, FY.j)(this, zY, 0)), this._highlightsExposure = ((0, FY.j)(this, ZY), (0, FY.j)(this, CY, 0)), this._midtonesHue = ((0, FY.j)(this, fY), (0, FY.j)(this, jY, 30)), this._midtonesDensity = ((0, FY.j)(this, hY), (0, FY.j)(this, dY, 0)), this._midtonesSaturation = ((0, FY.j)(this, JY), (0, FY.j)(this, MY, 0)), this._midtonesExposure = ((0, FY.j)(this, wY), (0, FY.j)(this, bY, 0)), this._shadowsHue = ((0, FY.j)(this, XY), 30), this._shadowsDensity = 0, this._shadowsSaturation = 0, this._shadowsExposure = 0
        }
        get globalHue() {
          return this._globalHue
        }
        set globalHue(YY) {
          this._globalHue = YY, this._dirty = !0
        }
        get globalDensity() {
          return this._globalDensity
        }
        set globalDensity(YY) {
          this._globalDensity = YY, this._dirty = !0
        }
        get globalSaturation() {
          return this._globalSaturation
        }
        set globalSaturation(YY) {
          this._globalSaturation = YY, this._dirty = !0
        }
        get globalExposure() {
          return this._globalExposure
        }
        set globalExposure(YY) {
          this._globalExposure = YY, this._dirty = !0
        }
        get highlightsHue() {
          return this._highlightsHue
        }
        set highlightsHue(YY) {
          this._highlightsHue = YY, this._dirty = !0
        }
        get highlightsDensity() {
          return this._highlightsDensity
        }
        set highlightsDensity(YY) {
          this._highlightsDensity = YY, this._dirty = !0
        }
        get highlightsSaturation() {
          return this._highlightsSaturation
        }
        set highlightsSaturation(YY) {
          this._highlightsSaturation = YY, this._dirty = !0
        }
        get highlightsExposure() {
          return this._highlightsExposure
        }
        set highlightsExposure(YY) {
          this._highlightsExposure = YY, this._dirty = !0
        }
        get midtonesHue() {
          return this._midtonesHue
        }
        set midtonesHue(YY) {
          this._midtonesHue = YY, this._dirty = !0
        }
        get midtonesDensity() {
          return this._midtonesDensity
        }
        set midtonesDensity(YY) {
          this._midtonesDensity = YY, this._dirty = !0
        }
        get midtonesSaturation() {
          return this._midtonesSaturation
        }
        set midtonesSaturation(YY) {
          this._midtonesSaturation = YY, this._dirty = !0
        }
        get midtonesExposure() {
          return this._midtonesExposure
        }
        set midtonesExposure(YY) {
          this._midtonesExposure = YY, this._dirty = !0
        }
        get shadowsHue() {
          return this._shadowsHue
        }
        set shadowsHue(YY) {
          this._shadowsHue = YY, this._dirty = !0
        }
        get shadowsDensity() {
          return this._shadowsDensity
        }
        set shadowsDensity(YY) {
          this._shadowsDensity = YY, this._dirty = !0
        }
        get shadowsSaturation() {
          return this._shadowsSaturation
        }
        set shadowsSaturation(YY) {
          this._shadowsSaturation = YY, this._dirty = !0
        }
        get shadowsExposure() {
          return this._shadowsExposure
        }
        set shadowsExposure(YY) {
          this._shadowsExposure = YY, this._dirty = !0
        }
        getClassName() {
          return "ColorCurves"
        }
        _getColorGradingDataToRef(rY, DY, FY, AY, IY) {
          null != rY && (rY = YY._Clamp(rY, 0, 360), DY = YY._Clamp(DY, -100, 100), FY = YY._Clamp(FY, -100, 100), AY = YY._Clamp(AY, -100, 100), DY = YY._ApplyColorGradingSliderNonlinear(DY), DY *= .5, AY = YY._ApplyColorGradingSliderNonlinear(AY), DY < 0 && (DY *= -1, rY = (rY + 180) % 360), YY._FromHSBToRef(rY, DY, 50 + .25 * AY, IY), IY.scaleToRef(2, IY), IY.a = 1 + .01 * FY)
        }
        static _ApplyColorGradingSliderNonlinear(YY) {
          YY /= 100;
          let rY = Math.abs(YY);
          return rY = Math.pow(rY, 2), YY < 0 && (rY *= -1), rY *= 100, rY
        }
        static _FromHSBToRef(rY, DY, FY, AY) {
          let IY = YY._Clamp(rY, 0, 360);
          const RY = YY._Clamp(DY / 100, 0, 1),
            OY = YY._Clamp(FY / 100, 0, 1);
          if (0 === RY) AY.r = OY, AY.g = OY, AY.b = OY;
          else {
            IY /= 60;
            const YY = Math.floor(IY),
              rY = IY - YY,
              DY = OY * (1 - RY),
              FY = OY * (1 - RY * rY),
              gY = OY * (1 - RY * (1 - rY));
            switch (YY) {
              case 0:
                AY.r = OY, AY.g = gY, AY.b = DY;
                break;
              case 1:
                AY.r = FY, AY.g = OY, AY.b = DY;
                break;
              case 2:
                AY.r = DY, AY.g = OY, AY.b = gY;
                break;
              case 3:
                AY.r = DY, AY.g = FY, AY.b = OY;
                break;
              case 4:
                AY.r = gY, AY.g = DY, AY.b = OY;
                break;
              default:
                AY.r = OY, AY.g = DY, AY.b = FY
            }
          }
          AY.a = 1
        }
        static _Clamp(YY, rY, DY) {
          return Math.min(Math.max(YY, rY), DY)
        }
        clone() {
          return SY.b.Clone((() => new YY), this)
        }
        serialize() {
          return SY.b.Serialize(this)
        }
        _bind(YY) {
          let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vCameraColorCurvePositive",
            DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurveNeutral",
            FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNegative";
          this._dirty && (this._dirty = !1, this._getColorGradingDataToRef(this._globalHue, this._globalDensity, this._globalSaturation, this._globalExposure, this._globalCurve), this._getColorGradingDataToRef(this._highlightsHue, this._highlightsDensity, this._highlightsSaturation, this._highlightsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._highlightsCurve), this._getColorGradingDataToRef(this._midtonesHue, this._midtonesDensity, this._midtonesSaturation, this._midtonesExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._midtonesCurve), this._getColorGradingDataToRef(this._shadowsHue, this._shadowsDensity, this._shadowsSaturation, this._shadowsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._shadowsCurve), this._highlightsCurve.subtractToRef(this._midtonesCurve, this._positiveCurve), this._midtonesCurve.subtractToRef(this._shadowsCurve, this._negativeCurve)), YY && (YY.setFloat4(rY, this._positiveCurve.r, this._positiveCurve.g, this._positiveCurve.b, this._positiveCurve.a), YY.setFloat4(DY, this._midtonesCurve.r, this._midtonesCurve.g, this._midtonesCurve.b, this._midtonesCurve.a), YY.setFloat4(FY, this._negativeCurve.r, this._negativeCurve.g, this._negativeCurve.b, this._negativeCurve.a))
        }
      }, (() => {
        const RY = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        rY = [(0, AY.M)()], DY = [(0, AY.M)()], IY = [(0, AY.M)()], OY = [(0, AY.M)()], gY = [(0, AY.M)()], aY = [(0, AY.M)()], vY = [(0, AY.M)()], uY = [(0, AY.M)()], sY = [(0, AY.M)()], iY = [(0, AY.M)()], yY = [(0, AY.M)()], QY = [(0, AY.M)()], (0, FY.i)(null, null, rY, {
          kind: "field",
          name: "_globalHue",
          static: !1,
          private: !1,
          access: {
            has: YY => "_globalHue" in YY,
            get: YY => YY._globalHue,
            set: (YY, rY) => {
              YY._globalHue = rY
            }
          },
          metadata: RY
        }, oY, WY), (0, FY.i)(null, null, DY, {
          kind: "field",
          name: "_globalDensity",
          static: !1,
          private: !1,
          access: {
            has: YY => "_globalDensity" in YY,
            get: YY => YY._globalDensity,
            set: (YY, rY) => {
              YY._globalDensity = rY
            }
          },
          metadata: RY
        }, EY, mY), (0, FY.i)(null, null, IY, {
          kind: "field",
          name: "_globalSaturation",
          static: !1,
          private: !1,
          access: {
            has: YY => "_globalSaturation" in YY,
            get: YY => YY._globalSaturation,
            set: (YY, rY) => {
              YY._globalSaturation = rY
            }
          },
          metadata: RY
        }, VY, TY), (0, FY.i)(null, null, OY, {
          kind: "field",
          name: "_globalExposure",
          static: !1,
          private: !1,
          access: {
            has: YY => "_globalExposure" in YY,
            get: YY => YY._globalExposure,
            set: (YY, rY) => {
              YY._globalExposure = rY
            }
          },
          metadata: RY
        }, eY, NY), (0, FY.i)(null, null, gY, {
          kind: "field",
          name: "_highlightsHue",
          static: !1,
          private: !1,
          access: {
            has: YY => "_highlightsHue" in YY,
            get: YY => YY._highlightsHue,
            set: (YY, rY) => {
              YY._highlightsHue = rY
            }
          },
          metadata: RY
        }, BY, cY), (0, FY.i)(null, null, aY, {
          kind: "field",
          name: "_highlightsDensity",
          static: !1,
          private: !1,
          access: {
            has: YY => "_highlightsDensity" in YY,
            get: YY => YY._highlightsDensity,
            set: (YY, rY) => {
              YY._highlightsDensity = rY
            }
          },
          metadata: RY
        }, KY, HY), (0, FY.i)(null, null, vY, {
          kind: "field",
          name: "_highlightsSaturation",
          static: !1,
          private: !1,
          access: {
            has: YY => "_highlightsSaturation" in YY,
            get: YY => YY._highlightsSaturation,
            set: (YY, rY) => {
              YY._highlightsSaturation = rY
            }
          },
          metadata: RY
        }, zY, ZY), (0, FY.i)(null, null, uY, {
          kind: "field",
          name: "_highlightsExposure",
          static: !1,
          private: !1,
          access: {
            has: YY => "_highlightsExposure" in YY,
            get: YY => YY._highlightsExposure,
            set: (YY, rY) => {
              YY._highlightsExposure = rY
            }
          },
          metadata: RY
        }, CY, fY), (0, FY.i)(null, null, sY, {
          kind: "field",
          name: "_midtonesHue",
          static: !1,
          private: !1,
          access: {
            has: YY => "_midtonesHue" in YY,
            get: YY => YY._midtonesHue,
            set: (YY, rY) => {
              YY._midtonesHue = rY
            }
          },
          metadata: RY
        }, jY, hY), (0, FY.i)(null, null, iY, {
          kind: "field",
          name: "_midtonesDensity",
          static: !1,
          private: !1,
          access: {
            has: YY => "_midtonesDensity" in YY,
            get: YY => YY._midtonesDensity,
            set: (YY, rY) => {
              YY._midtonesDensity = rY
            }
          },
          metadata: RY
        }, dY, JY), (0, FY.i)(null, null, yY, {
          kind: "field",
          name: "_midtonesSaturation",
          static: !1,
          private: !1,
          access: {
            has: YY => "_midtonesSaturation" in YY,
            get: YY => YY._midtonesSaturation,
            set: (YY, rY) => {
              YY._midtonesSaturation = rY
            }
          },
          metadata: RY
        }, MY, wY), (0, FY.i)(null, null, QY, {
          kind: "field",
          name: "_midtonesExposure",
          static: !1,
          private: !1,
          access: {
            has: YY => "_midtonesExposure" in YY,
            get: YY => YY._midtonesExposure,
            set: (YY, rY) => {
              YY._midtonesExposure = rY
            }
          },
          metadata: RY
        }, bY, XY), RY && Object.defineProperty(YY, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: RY
        })
      })(), YY.PrepareUniforms = lY.c, YY
    })();

    function eY(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurvePositive",
        FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNeutral",
        AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "vCameraColorCurveNegative";
      YY._bind(rY, DY, FY, AY)
    }
    var NY = DY(39065),
      BY = DY(39252),
      cY = DY(36569);
    let KY = (() => {
        var YY;
        let rY, DY, aY, iY, yY, QY, WY, lY, cY, KY, HY, zY, ZY, CY, fY, jY, hY, dY, JY, MY, wY, bY, XY, qY, pY, kY, GY, xY, nY = [],
          PY = [],
          UY = [],
          LY = [],
          tY = [],
          Yr = [],
          rr = [],
          Dr = [],
          Fr = [],
          Ar = [],
          Ir = [],
          Rr = [],
          Or = [],
          gr = [],
          ar = [],
          vr = [],
          ur = [],
          sr = [],
          ir = [],
          yr = [],
          Qr = [],
          or = [],
          Wr = [],
          Er = [],
          mr = [],
          Vr = [],
          Sr = [],
          lr = [],
          Tr = [],
          er = [],
          Nr = [],
          Br = [],
          cr = [],
          Kr = [],
          Hr = [],
          zr = [],
          Zr = [],
          Cr = [],
          fr = [],
          jr = [],
          hr = [],
          dr = [],
          Jr = [],
          Mr = [],
          wr = [],
          br = [],
          Xr = [],
          qr = [],
          pr = [],
          kr = [],
          Gr = [],
          xr = [],
          nr = [],
          Pr = [],
          Ur = [],
          Lr = [];
        return YY = class {
          constructor() {
            this.colorCurves = (0, FY.j)(this, nY, new TY), this._colorCurvesEnabled = ((0, FY.j)(this, PY), (0, FY.j)(this, UY, !1)), this._colorGradingTexture = ((0, FY.j)(this, LY), (0, FY.j)(this, tY, void 0)), this._colorGradingEnabled = ((0, FY.j)(this, Yr), (0, FY.j)(this, rr, !1)), this._colorGradingWithGreenDepth = ((0, FY.j)(this, Dr), (0, FY.j)(this, Fr, !0)), this._colorGradingBGR = ((0, FY.j)(this, Ar), (0, FY.j)(this, Ir, !0)), this._exposure = ((0, FY.j)(this, Rr), (0, FY.j)(this, Or, 1)), this._toneMappingEnabled = ((0, FY.j)(this, gr), (0, FY.j)(this, ar, !1)), this._toneMappingType = ((0, FY.j)(this, vr), (0, FY.j)(this, ur, YY.TONEMAPPING_STANDARD)), this._contrast = ((0, FY.j)(this, sr), (0, FY.j)(this, ir, 1)), this._whiteBalanceEnabled = ((0, FY.j)(this, yr), (0, FY.j)(this, Qr, !1)), this._temperature = ((0, FY.j)(this, or), (0, FY.j)(this, Wr, 6500)), this._tint = ((0, FY.j)(this, Er), (0, FY.j)(this, mr, 0)), this._whiteBalanceMatrix = ((0, FY.j)(this, Vr), null), this._whiteBalanceMatrixTemperature = null, this._whiteBalanceMatrixTint = null, this.vignetteStretch = (0, FY.j)(this, Sr, 0), this.vignetteCenterX = ((0, FY.j)(this, lr), (0, FY.j)(this, Tr, 0)), this.vignetteCenterY = ((0, FY.j)(this, er), (0, FY.j)(this, Nr, 0)), this.vignetteWeight = ((0, FY.j)(this, Br), (0, FY.j)(this, cr, 1.5)), this.vignetteColor = ((0, FY.j)(this, Kr), (0, FY.j)(this, Hr, new RY.d(0, 0, 0, 0))), this.vignetteCameraFov = ((0, FY.j)(this, zr), (0, FY.j)(this, Zr, .5)), this._vignetteBlendMode = ((0, FY.j)(this, Cr), (0, FY.j)(this, fr, YY.VIGNETTEMODE_MULTIPLY)), this._vignetteEnabled = ((0, FY.j)(this, jr), (0, FY.j)(this, hr, !1)), this._ditheringEnabled = ((0, FY.j)(this, dr), (0, FY.j)(this, Jr, !1)), this._ditheringIntensity = ((0, FY.j)(this, Mr), (0, FY.j)(this, wr, 1 / 255)), this._skipFinalColorClamp = ((0, FY.j)(this, br), (0, FY.j)(this, Xr, !1)), this._applyByPostProcess = ((0, FY.j)(this, qr), (0, FY.j)(this, pr, !1)), this._isEnabled = ((0, FY.j)(this, kr), (0, FY.j)(this, Gr, !0)), this.outputTextureWidth = ((0, FY.j)(this, xr), (0, FY.j)(this, nr, 0)), this.outputTextureHeight = ((0, FY.j)(this, Pr), (0, FY.j)(this, Ur, 0)), this.onUpdateParameters = ((0, FY.j)(this, Lr), new IY.e)
          }
          get colorCurvesEnabled() {
            return this._colorCurvesEnabled
          }
          set colorCurvesEnabled(YY) {
            this._colorCurvesEnabled !== YY && (this._colorCurvesEnabled = YY, this._updateParameters())
          }
          get colorGradingTexture() {
            return this._colorGradingTexture
          }
          set colorGradingTexture(YY) {
            this._colorGradingTexture !== YY && (this._colorGradingTexture = YY, this._updateParameters())
          }
          get colorGradingEnabled() {
            return this._colorGradingEnabled
          }
          set colorGradingEnabled(YY) {
            this._colorGradingEnabled !== YY && (this._colorGradingEnabled = YY, this._updateParameters())
          }
          get colorGradingWithGreenDepth() {
            return this._colorGradingWithGreenDepth
          }
          set colorGradingWithGreenDepth(YY) {
            this._colorGradingWithGreenDepth !== YY && (this._colorGradingWithGreenDepth = YY, this._updateParameters())
          }
          get colorGradingBGR() {
            return this._colorGradingBGR
          }
          set colorGradingBGR(YY) {
            this._colorGradingBGR !== YY && (this._colorGradingBGR = YY, this._updateParameters())
          }
          get exposure() {
            return this._exposure
          }
          set exposure(YY) {
            this._exposure !== YY && (this._exposure = YY, this._updateParameters())
          }
          get toneMappingEnabled() {
            return this._toneMappingEnabled
          }
          set toneMappingEnabled(YY) {
            this._toneMappingEnabled !== YY && (this._toneMappingEnabled = YY, this._updateParameters())
          }
          get toneMappingType() {
            return this._toneMappingType
          }
          set toneMappingType(YY) {
            this._toneMappingType !== YY && (this._toneMappingType = YY, this._updateParameters())
          }
          get contrast() {
            return this._contrast
          }
          set contrast(YY) {
            this._contrast !== YY && (this._contrast = YY, this._updateParameters())
          }
          get whiteBalanceEnabled() {
            return this._whiteBalanceEnabled
          }
          set whiteBalanceEnabled(YY) {
            this._whiteBalanceEnabled !== YY && (this._whiteBalanceEnabled = YY, this._updateParameters())
          }
          get temperature() {
            return this._temperature
          }
          set temperature(YY) {
            YY = Number.isNaN(YY) ? vY : Math.max(YY, vY), this._temperature !== YY && (this._temperature = YY, this._updateParameters())
          }
          get tint() {
            return this._tint
          }
          set tint(YY) {
            YY = (0, OY.Clamp)(YY, -150, uY), this._tint !== YY && (this._tint = YY, this._updateParameters())
          }
          _getWhiteBalanceMatrix() {
            return null !== this._whiteBalanceMatrix && this._whiteBalanceMatrixTemperature === this._temperature && this._whiteBalanceMatrixTint === this._tint || (this._whiteBalanceMatrixTemperature = this._temperature, this._whiteBalanceMatrixTint = this._tint, this._whiteBalanceMatrix = function(YY, rY) {
              const DY = oY(sY(YY, rY), VY),
                FY = EY.multiply(DY).multiply(mY);
              return gY.e.GetAsMatrix3x3(FY)
            }(this._temperature, this._tint)), this._whiteBalanceMatrix
          }
          get vignetteCentreY() {
            return this.vignetteCenterY
          }
          set vignetteCentreY(YY) {
            this.vignetteCenterY = YY
          }
          get vignetteCentreX() {
            return this.vignetteCenterX
          }
          set vignetteCentreX(YY) {
            this.vignetteCenterX = YY
          }
          get vignetteBlendMode() {
            return this._vignetteBlendMode
          }
          set vignetteBlendMode(YY) {
            this._vignetteBlendMode !== YY && (this._vignetteBlendMode = YY, this._updateParameters())
          }
          get vignetteEnabled() {
            return this._vignetteEnabled
          }
          set vignetteEnabled(YY) {
            this._vignetteEnabled !== YY && (this._vignetteEnabled = YY, this._updateParameters())
          }
          get ditheringEnabled() {
            return this._ditheringEnabled
          }
          set ditheringEnabled(YY) {
            this._ditheringEnabled !== YY && (this._ditheringEnabled = YY, this._updateParameters())
          }
          get ditheringIntensity() {
            return this._ditheringIntensity
          }
          set ditheringIntensity(YY) {
            this._ditheringIntensity !== YY && (this._ditheringIntensity = YY, this._updateParameters())
          }
          get skipFinalColorClamp() {
            return this._skipFinalColorClamp
          }
          set skipFinalColorClamp(YY) {
            this._skipFinalColorClamp !== YY && (this._skipFinalColorClamp = YY, this._updateParameters())
          }
          get applyByPostProcess() {
            return this._applyByPostProcess
          }
          set applyByPostProcess(YY) {
            this._applyByPostProcess !== YY && (this._applyByPostProcess = YY, this._updateParameters())
          }
          get isEnabled() {
            return this._isEnabled
          }
          set isEnabled(YY) {
            this._isEnabled !== YY && (this._isEnabled = YY, this._updateParameters())
          }
          _updateParameters() {
            this.onUpdateParameters.notifyObservers(this)
          }
          getClassName() {
            return "ImageProcessingConfiguration"
          }
          prepareDefines(rY) {
            if ((arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) !== this.applyByPostProcess || !this._isEnabled) return rY.WHITEBALANCE = !1, rY.VIGNETTE = !1, rY.TONEMAPPING = 0, rY.CONTRAST = !1, rY.EXPOSURE = !1, rY.COLORCURVES = !1, rY.COLORGRADING = !1, rY.COLORGRADING3D = !1, rY.DITHER = !1, rY.IMAGEPROCESSING = !1, rY.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, void(rY.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess && this._isEnabled);
            if (rY.WHITEBALANCE = this._whiteBalanceEnabled, rY.VIGNETTE = this.vignetteEnabled, rY.VIGNETTEBLENDMODEMULTIPLY = this.vignetteBlendMode === YY._VIGNETTEMODE_MULTIPLY, rY.VIGNETTEBLENDMODEOPAQUE = !rY.VIGNETTEBLENDMODEMULTIPLY, this._toneMappingEnabled) switch (this._toneMappingType) {
              case YY.TONEMAPPING_KHR_PBR_NEUTRAL:
                rY.TONEMAPPING = 3;
                break;
              case YY.TONEMAPPING_ACES:
                rY.TONEMAPPING = 2;
                break;
              default:
                rY.TONEMAPPING = 1
            } else rY.TONEMAPPING = 0;
            rY.CONTRAST = 1 !== this.contrast, rY.EXPOSURE = 1 !== this.exposure, rY.COLORCURVES = this.colorCurvesEnabled && !!this.colorCurves, rY.COLORGRADING = this.colorGradingEnabled && !!this.colorGradingTexture, rY.COLORGRADING ? rY.COLORGRADING3D = this.colorGradingTexture.is3D : rY.COLORGRADING3D = !1, rY.SAMPLER3DGREENDEPTH = this.colorGradingWithGreenDepth, rY.SAMPLER3DBGRMAP = this.colorGradingBGR, rY.DITHER = this._ditheringEnabled, rY.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess, rY.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, rY.IMAGEPROCESSING = rY.WHITEBALANCE || rY.VIGNETTE || !!rY.TONEMAPPING || rY.CONTRAST || rY.EXPOSURE || rY.COLORCURVES || rY.COLORGRADING || rY.DITHER
          }
          isReady() {
            return !this.colorGradingEnabled || !this.colorGradingTexture || this.colorGradingTexture.isReady()
          }
          bind(YY, rY) {
            if (this._whiteBalanceEnabled && YY.setMatrix3x3("whiteBalanceMatrix", this._getWhiteBalanceMatrix()), this._colorCurvesEnabled && this.colorCurves && eY(this.colorCurves, YY), this._vignetteEnabled || this._ditheringEnabled) {
              const DY = 1 / (this.outputTextureWidth || YY.ky().getRenderWidth()),
                FY = 1 / (this.outputTextureHeight || YY.ky().getRenderHeight());
              if (YY.setFloat2("vInverseScreenSize", DY, FY), this._ditheringEnabled && YY.setFloat("ditherIntensity", .5 * this._ditheringIntensity), this._vignetteEnabled) {
                const AY = null != rY ? rY : FY / DY;
                let IY = Math.tan(.5 * this.vignetteCameraFov),
                  RY = IY * AY;
                const OY = Math.sqrt(RY * IY);
                RY = (0, NY.j)(RY, OY, this.vignetteStretch), IY = (0, NY.j)(IY, OY, this.vignetteStretch), YY.setFloat4("vignetteSettings1", RY, IY, -RY * this.vignetteCenterX, -IY * this.vignetteCenterY);
                const gY = -2 * this.vignetteWeight;
                YY.setFloat4("vignetteSettings2", this.vignetteColor.r, this.vignetteColor.g, this.vignetteColor.b, gY)
              }
            }
            if (YY.setFloat("exposureLinear", this.exposure), YY.setFloat("contrast", this.contrast), this.colorGradingTexture) {
              YY.setTexture("txColorTransform", this.colorGradingTexture);
              const rY = this.colorGradingTexture.getSize().height;
              YY.setFloat4("colorTransformSettings", (rY - 1) / rY, .5 / rY, rY, this.colorGradingTexture.level)
            }
          }
          clone() {
            return SY.b.Clone((() => new YY), this)
          }
          serialize() {
            return SY.b.Serialize(this)
          }
          static get VIGNETTEMODE_MULTIPLY() {
            return this._VIGNETTEMODE_MULTIPLY
          }
          static get VIGNETTEMODE_OPAQUE() {
            return this._VIGNETTEMODE_OPAQUE
          }
        }, (() => {
          const IY = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          rY = [(0, AY.n)()], DY = [(0, AY.M)()], aY = [(0, AY.D)("colorGradingTexture")], iY = [(0, AY.M)()], yY = [(0, AY.M)()], QY = [(0, AY.M)()], WY = [(0, AY.M)()], lY = [(0, AY.M)()], cY = [(0, AY.M)()], KY = [(0, AY.M)()], HY = [(0, AY.M)()], zY = [(0, AY.M)()], ZY = [(0, AY.M)()], CY = [(0, AY.M)()], fY = [(0, AY.M)()], jY = [(0, AY.M)()], hY = [(0, AY.M)()], dY = [(0, AY.s)()], JY = [(0, AY.M)()], MY = [(0, AY.M)()], wY = [(0, AY.M)()], bY = [(0, AY.M)()], XY = [(0, AY.M)()], qY = [(0, AY.M)()], pY = [(0, AY.M)()], kY = [(0, AY.M)()], GY = [(0, AY.M)()], xY = [(0, AY.M)()], (0, FY.i)(null, null, rY, {
            kind: "field",
            name: "colorCurves",
            static: !1,
            private: !1,
            access: {
              has: YY => "colorCurves" in YY,
              get: YY => YY.colorCurves,
              set: (YY, rY) => {
                YY.colorCurves = rY
              }
            },
            metadata: IY
          }, nY, PY), (0, FY.i)(null, null, DY, {
            kind: "field",
            name: "_colorCurvesEnabled",
            static: !1,
            private: !1,
            access: {
              has: YY => "_colorCurvesEnabled" in YY,
              get: YY => YY._colorCurvesEnabled,
              set: (YY, rY) => {
                YY._colorCurvesEnabled = rY
              }
            },
            metadata: IY
          }, UY, LY), (0, FY.i)(null, null, aY, {
            kind: "field",
            name: "_colorGradingTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "_colorGradingTexture" in YY,
              get: YY => YY._colorGradingTexture,
              set: (YY, rY) => {
                YY._colorGradingTexture = rY
              }
            },
            metadata: IY
          }, tY, Yr), (0, FY.i)(null, null, iY, {
            kind: "field",
            name: "_colorGradingEnabled",
            static: !1,
            private: !1,
            access: {
              has: YY => "_colorGradingEnabled" in YY,
              get: YY => YY._colorGradingEnabled,
              set: (YY, rY) => {
                YY._colorGradingEnabled = rY
              }
            },
            metadata: IY
          }, rr, Dr), (0, FY.i)(null, null, yY, {
            kind: "field",
            name: "_colorGradingWithGreenDepth",
            static: !1,
            private: !1,
            access: {
              has: YY => "_colorGradingWithGreenDepth" in YY,
              get: YY => YY._colorGradingWithGreenDepth,
              set: (YY, rY) => {
                YY._colorGradingWithGreenDepth = rY
              }
            },
            metadata: IY
          }, Fr, Ar), (0, FY.i)(null, null, QY, {
            kind: "field",
            name: "_colorGradingBGR",
            static: !1,
            private: !1,
            access: {
              has: YY => "_colorGradingBGR" in YY,
              get: YY => YY._colorGradingBGR,
              set: (YY, rY) => {
                YY._colorGradingBGR = rY
              }
            },
            metadata: IY
          }, Ir, Rr), (0, FY.i)(null, null, WY, {
            kind: "field",
            name: "_exposure",
            static: !1,
            private: !1,
            access: {
              has: YY => "_exposure" in YY,
              get: YY => YY._exposure,
              set: (YY, rY) => {
                YY._exposure = rY
              }
            },
            metadata: IY
          }, Or, gr), (0, FY.i)(null, null, lY, {
            kind: "field",
            name: "_toneMappingEnabled",
            static: !1,
            private: !1,
            access: {
              has: YY => "_toneMappingEnabled" in YY,
              get: YY => YY._toneMappingEnabled,
              set: (YY, rY) => {
                YY._toneMappingEnabled = rY
              }
            },
            metadata: IY
          }, ar, vr), (0, FY.i)(null, null, cY, {
            kind: "field",
            name: "_toneMappingType",
            static: !1,
            private: !1,
            access: {
              has: YY => "_toneMappingType" in YY,
              get: YY => YY._toneMappingType,
              set: (YY, rY) => {
                YY._toneMappingType = rY
              }
            },
            metadata: IY
          }, ur, sr), (0, FY.i)(null, null, KY, {
            kind: "field",
            name: "_contrast",
            static: !1,
            private: !1,
            access: {
              has: YY => "_contrast" in YY,
              get: YY => YY._contrast,
              set: (YY, rY) => {
                YY._contrast = rY
              }
            },
            metadata: IY
          }, ir, yr), (0, FY.i)(null, null, HY, {
            kind: "field",
            name: "_whiteBalanceEnabled",
            static: !1,
            private: !1,
            access: {
              has: YY => "_whiteBalanceEnabled" in YY,
              get: YY => YY._whiteBalanceEnabled,
              set: (YY, rY) => {
                YY._whiteBalanceEnabled = rY
              }
            },
            metadata: IY
          }, Qr, or), (0, FY.i)(null, null, zY, {
            kind: "field",
            name: "_temperature",
            static: !1,
            private: !1,
            access: {
              has: YY => "_temperature" in YY,
              get: YY => YY._temperature,
              set: (YY, rY) => {
                YY._temperature = rY
              }
            },
            metadata: IY
          }, Wr, Er), (0, FY.i)(null, null, ZY, {
            kind: "field",
            name: "_tint",
            static: !1,
            private: !1,
            access: {
              has: YY => "_tint" in YY,
              get: YY => YY._tint,
              set: (YY, rY) => {
                YY._tint = rY
              }
            },
            metadata: IY
          }, mr, Vr), (0, FY.i)(null, null, CY, {
            kind: "field",
            name: "vignetteStretch",
            static: !1,
            private: !1,
            access: {
              has: YY => "vignetteStretch" in YY,
              get: YY => YY.vignetteStretch,
              set: (YY, rY) => {
                YY.vignetteStretch = rY
              }
            },
            metadata: IY
          }, Sr, lr), (0, FY.i)(null, null, fY, {
            kind: "field",
            name: "vignetteCenterX",
            static: !1,
            private: !1,
            access: {
              has: YY => "vignetteCenterX" in YY,
              get: YY => YY.vignetteCenterX,
              set: (YY, rY) => {
                YY.vignetteCenterX = rY
              }
            },
            metadata: IY
          }, Tr, er), (0, FY.i)(null, null, jY, {
            kind: "field",
            name: "vignetteCenterY",
            static: !1,
            private: !1,
            access: {
              has: YY => "vignetteCenterY" in YY,
              get: YY => YY.vignetteCenterY,
              set: (YY, rY) => {
                YY.vignetteCenterY = rY
              }
            },
            metadata: IY
          }, Nr, Br), (0, FY.i)(null, null, hY, {
            kind: "field",
            name: "vignetteWeight",
            static: !1,
            private: !1,
            access: {
              has: YY => "vignetteWeight" in YY,
              get: YY => YY.vignetteWeight,
              set: (YY, rY) => {
                YY.vignetteWeight = rY
              }
            },
            metadata: IY
          }, cr, Kr), (0, FY.i)(null, null, dY, {
            kind: "field",
            name: "vignetteColor",
            static: !1,
            private: !1,
            access: {
              has: YY => "vignetteColor" in YY,
              get: YY => YY.vignetteColor,
              set: (YY, rY) => {
                YY.vignetteColor = rY
              }
            },
            metadata: IY
          }, Hr, zr), (0, FY.i)(null, null, JY, {
            kind: "field",
            name: "vignetteCameraFov",
            static: !1,
            private: !1,
            access: {
              has: YY => "vignetteCameraFov" in YY,
              get: YY => YY.vignetteCameraFov,
              set: (YY, rY) => {
                YY.vignetteCameraFov = rY
              }
            },
            metadata: IY
          }, Zr, Cr), (0, FY.i)(null, null, MY, {
            kind: "field",
            name: "_vignetteBlendMode",
            static: !1,
            private: !1,
            access: {
              has: YY => "_vignetteBlendMode" in YY,
              get: YY => YY._vignetteBlendMode,
              set: (YY, rY) => {
                YY._vignetteBlendMode = rY
              }
            },
            metadata: IY
          }, fr, jr), (0, FY.i)(null, null, wY, {
            kind: "field",
            name: "_vignetteEnabled",
            static: !1,
            private: !1,
            access: {
              has: YY => "_vignetteEnabled" in YY,
              get: YY => YY._vignetteEnabled,
              set: (YY, rY) => {
                YY._vignetteEnabled = rY
              }
            },
            metadata: IY
          }, hr, dr), (0, FY.i)(null, null, bY, {
            kind: "field",
            name: "_ditheringEnabled",
            static: !1,
            private: !1,
            access: {
              has: YY => "_ditheringEnabled" in YY,
              get: YY => YY._ditheringEnabled,
              set: (YY, rY) => {
                YY._ditheringEnabled = rY
              }
            },
            metadata: IY
          }, Jr, Mr), (0, FY.i)(null, null, XY, {
            kind: "field",
            name: "_ditheringIntensity",
            static: !1,
            private: !1,
            access: {
              has: YY => "_ditheringIntensity" in YY,
              get: YY => YY._ditheringIntensity,
              set: (YY, rY) => {
                YY._ditheringIntensity = rY
              }
            },
            metadata: IY
          }, wr, br), (0, FY.i)(null, null, qY, {
            kind: "field",
            name: "_skipFinalColorClamp",
            static: !1,
            private: !1,
            access: {
              has: YY => "_skipFinalColorClamp" in YY,
              get: YY => YY._skipFinalColorClamp,
              set: (YY, rY) => {
                YY._skipFinalColorClamp = rY
              }
            },
            metadata: IY
          }, Xr, qr), (0, FY.i)(null, null, pY, {
            kind: "field",
            name: "_applyByPostProcess",
            static: !1,
            private: !1,
            access: {
              has: YY => "_applyByPostProcess" in YY,
              get: YY => YY._applyByPostProcess,
              set: (YY, rY) => {
                YY._applyByPostProcess = rY
              }
            },
            metadata: IY
          }, pr, kr), (0, FY.i)(null, null, kY, {
            kind: "field",
            name: "_isEnabled",
            static: !1,
            private: !1,
            access: {
              has: YY => "_isEnabled" in YY,
              get: YY => YY._isEnabled,
              set: (YY, rY) => {
                YY._isEnabled = rY
              }
            },
            metadata: IY
          }, Gr, xr), (0, FY.i)(null, null, GY, {
            kind: "field",
            name: "outputTextureWidth",
            static: !1,
            private: !1,
            access: {
              has: YY => "outputTextureWidth" in YY,
              get: YY => YY.outputTextureWidth,
              set: (YY, rY) => {
                YY.outputTextureWidth = rY
              }
            },
            metadata: IY
          }, nr, Pr), (0, FY.i)(null, null, xY, {
            kind: "field",
            name: "outputTextureHeight",
            static: !1,
            private: !1,
            access: {
              has: YY => "outputTextureHeight" in YY,
              get: YY => YY.outputTextureHeight,
              set: (YY, rY) => {
                YY.outputTextureHeight = rY
              }
            },
            metadata: IY
          }, Ur, Lr), IY && Object.defineProperty(YY, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: IY
          })
        })(), YY.TONEMAPPING_STANDARD = 0, YY.TONEMAPPING_ACES = 1, YY.TONEMAPPING_KHR_PBR_NEUTRAL = 2, YY.PrepareUniforms = BY.g, YY.PrepareSamplers = BY.c, YY._VIGNETTEMODE_MULTIPLY = 0, YY._VIGNETTEMODE_OPAQUE = 1, YY
      })(),
      HY = !1;

    function zY(YY) {
      const rY = SY.b.Parse((() => new KY), YY, null, null);
      return void 0 !== YY.vignetteCentreX && (rY.vignetteCenterX = YY.vignetteCentreX), void 0 !== YY.vignetteCentreY && (rY.vignetteCenterY = YY.vignetteCentreY), rY
    }

    function ZY() {
      HY || (HY = !0, KY.Parse = zY, SY.b._ImageProcessingConfigurationParser = zY, (0, cY.i)("BABYLON.ImageProcessingConfiguration", KY))
    }
  },
  39255: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => IY
    });
    var FY = DY(38040),
      AY = DY(39219);
    class IY {
      constructor(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          FY = arguments.length > 3 ? arguments[3] : void 0,
          AY = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          IY = arguments.length > 5 ? arguments[5] : void 0;
        this._uniformNames = [], this._valueCache = {}, this._engine = YY, this._noUBO = !YY.supportsUniformBuffers || AY, this._dynamic = DY, this._name = FY ?? "no-name", this._data = rY || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {}, this._uniformLocationPointer = 0, this._needSync = !1, this._dataGeneration = 0, this._trackUBOsInFrame = !1, (void 0 === IY && this._engine._features.trackUbosInFrame || !0 === IY) && (this._buffers = [], this._bufferIndex = -1, this._bufferUpdatedLastFrame = !1, this._createBufferOnWrite = !1, this._currentFrameId = 0, this._trackUBOsInFrame = !0, this._resetOwnerSlots()), this._noUBO ? (this.updateMatrix3x3 = this._updateMatrix3x3ForEffect, this.updateMatrix2x2 = this._updateMatrix2x2ForEffect, this.updateFloat = this._updateFloatForEffect, this.updateFloat2 = this._updateFloat2ForEffect, this.updateFloat3 = this._updateFloat3ForEffect, this.updateFloat4 = this._updateFloat4ForEffect, this.updateFloatArray = this._updateFloatArrayForEffect, this.updateArray = this._updateArrayForEffect, this.updateIntArray = this._updateIntArrayForEffect, this.updateUIntArray = this._updateUIntArrayForEffect, this.m_ = this._updateMatrixForEffect, this.updateMatrices = this._updateMatricesForEffect, this.updateVector3 = this._updateVector3ForEffect, this.updateVector4 = this._updateVector4ForEffect, this.updateColor3 = this._updateColor3ForEffect, this.updateColor4 = this._updateColor4ForEffect, this.updateDirectColor4 = this._updateDirectColor4ForEffect, this.updateInt = this._updateIntForEffect, this.updateInt2 = this._updateInt2ForEffect, this.updateInt3 = this._updateInt3ForEffect, this.updateInt4 = this._updateInt4ForEffect, this.updateUInt = this._updateUIntForEffect, this.updateUInt2 = this._updateUInt2ForEffect, this.updateUInt3 = this._updateUInt3ForEffect, this.updateUInt4 = this._updateUInt4ForEffect) : (this._engine._uniformBuffers.push(this), this.updateMatrix3x3 = this._updateMatrix3x3ForUniform, this.updateMatrix2x2 = this._updateMatrix2x2ForUniform, this.updateFloat = this._updateFloatForUniform, this.updateFloat2 = this._updateFloat2ForUniform, this.updateFloat3 = this._updateFloat3ForUniform, this.updateFloat4 = this._updateFloat4ForUniform, this.updateFloatArray = this._updateFloatArrayForUniform, this.updateArray = this._updateArrayForUniform, this.updateIntArray = this._updateIntArrayForUniform, this.updateUIntArray = this._updateUIntArrayForUniform, this.m_ = this._updateMatrixForUniform, this.updateMatrices = this._updateMatricesForUniform, this.updateVector3 = this._updateVector3ForUniform, this.updateVector4 = this._updateVector4ForUniform, this.updateColor3 = this._updateColor3ForUniform, this.updateColor4 = this._updateColor4ForUniform, this.updateDirectColor4 = this._updateDirectColor4ForUniform, this.updateInt = this._updateIntForUniform, this.updateInt2 = this._updateInt2ForUniform, this.updateInt3 = this._updateInt3ForUniform, this.updateInt4 = this._updateInt4ForUniform, this.updateUInt = this._updateUIntForUniform, this.updateUInt2 = this._updateUInt2ForUniform, this.updateUInt3 = this._updateUInt3ForUniform, this.updateUInt4 = this._updateUInt4ForUniform)
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
      _fillAlignment(YY) {
        let rY;
        if (rY = YY <= 2 ? YY : 4, this._uniformLocationPointer % rY !== 0) {
          const YY = this._uniformLocationPointer;
          this._uniformLocationPointer += rY - this._uniformLocationPointer % rY;
          const DY = this._uniformLocationPointer - YY;
          for (let rY = 0; rY < DY; rY++) this._data.push(0)
        }
      }
      addUniform(YY, rY) {
        let DY, FY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (FY > 0 && "number" === typeof rY && (this._uniformArraySizes[YY] = {
            strideSize: rY,
            arraySize: FY
          }), void 0 === this._uniformLocations[YY] && (this._uniformNames.push(YY), !this._noUBO)) {
          if (FY > 0) {
            if (rY instanceof Array) throw "addUniform should not be use with Array in UBO: " + YY;
            if (this._fillAlignment(4), 16 == rY) rY *= FY;
            else {
              rY = rY * FY + (4 - rY) * FY
            }
            DY = [];
            for (let YY = 0; YY < rY; YY++) DY.push(0)
          } else {
            if (rY instanceof Array) DY = rY, rY = DY.length;
            else {
              DY = [];
              for (let YY = 0; YY < rY; YY++) DY.push(0)
            }
            this._fillAlignment(rY)
          }
          this._uniformSizes[YY] = rY, this._uniformLocations[YY] = this._uniformLocationPointer, this._uniformLocationPointer += rY;
          for (let YY = 0; YY < rY; YY++) this._data.push(DY[YY]);
          this._needSync = !0
        }
      }
      addMatrix(YY, rY) {
        this.addUniform(YY, Array.prototype.slice.call(rY.VDY()))
      }
      addFloat2(YY, rY, DY) {
        const FY = [rY, DY];
        this.addUniform(YY, FY)
      }
      addFloat3(YY, rY, DY, FY) {
        const AY = [rY, DY, FY];
        this.addUniform(YY, AY)
      }
      addColor3(YY, rY) {
        const DY = [rY.r, rY.g, rY.b];
        this.addUniform(YY, DY)
      }
      addColor4(YY, rY, DY) {
        const FY = [rY.r, rY.g, rY.b, DY];
        this.addUniform(YY, FY)
      }
      addVector3(YY, rY) {
        const DY = [rY.x, rY.y, rY.z];
        this.addUniform(YY, DY)
      }
      addMatrix3x3(YY) {
        this.addUniform(YY, 12)
      }
      addMatrix2x2(YY) {
        this.addUniform(YY, 8)
      }
      create() {
        this._noUBO || this._buffer || (this._fillAlignment(4), this._bufferData = new Float32Array(this._data), this._dataGeneration++, this._rebuild(), this._needSync = !0)
      }
      _getNamesDebug() {
        const YY = [];
        let rY = 0;
        for (const DY in this._uniformLocations)
          if (YY.push(DY), 10 === ++rY) break;
        return YY.join(",")
      }
      _rebuild() {
        !this._noUBO && this._bufferData && (this._dynamic ? this._buffer = this._engine.createDynamicUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()) : this._buffer = this._engine.createUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()), this._trackUBOsInFrame && (this._buffers.push([this._buffer, this._engine._features.checkUbosContentBeforeUpload ? this._bufferData.slice() : void 0]), this._bufferIndex = this._buffers.length - 1, this._createBufferOnWrite = !1))
      }
      _rebuildAfterContextLost() {
        this._trackUBOsInFrame && (this._buffers = [], this._currentFrameId = 0, this._resetOwnerSlots()), this._rebuild()
      }
      _resetOwnerSlots() {
        if (this._ownerListsBySlot)
          for (const YY of this._ownerListsBySlot.values()) this._removeOwnerBacklink(YY);
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
      set name(YY) {
        this._name = YY
      }
      get currentEffect() {
        return this._currentEffect
      }
      _buffersEqual(YY, rY) {
        for (let DY = 0; DY < YY.length; ++DY)
          if (YY[DY] !== rY[DY]) return !1;
        return !0
      }
      _copyBuffer(YY, rY) {
        for (let DY = 0; DY < YY.length; ++DY) rY[DY] = YY[DY]
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
      _updateOwnerKeyed(YY) {
        if (this._noUBO || !this._trackUBOsInFrame) return void this.update();
        this._buffer || this.create(), this._checkNewFrame();
        let rY = this._slotByOwner.get(YY);
        if (void 0 === rY && (rY = 0 === this._ownerCount && 1 === this._buffers.length && 0 === this._freeSlots.length ? 0 : this._takeFreeSlot(!0), this._slotByOwner.set(YY, rY), this._ownerCount++, YY._uniformBuffersWithOwnedSlot || (YY._uniformBuffersWithOwnedSlot = []), YY._uniformBuffersWithOwnedSlot.push(this), this._ownerListsBySlot.set(rY, YY._uniformBuffersWithOwnedSlot)), this._slotGeneration[rY] === this._dataGeneration) return this._bufferIndex = rY, this._buffer = this._buffers[rY][0], this.bindUniformBuffer(), this._slotFrameId[rY] = this._currentFrameId, this._needSync = !1, void(this._createBufferOnWrite = !1);
        const DY = this._buffers[rY][1];
        this._slotFrameId[rY] === this._currentFrameId && DY && !this._buffersEqual(this._bufferData, DY) && (rY = this._takeFreeSlot(!1)), this._bufferIndex = rY, this._buffer = this._buffers[rY][0], this.bindUniformBuffer();
        const FY = this._buffers[rY][1];
        FY && this._buffersEqual(this._bufferData, FY) || (FY && this._copyBuffer(this._bufferData, FY), this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData)), this._slotFrameId[rY] = this._currentFrameId, this._slotGeneration[rY] = this._dataGeneration, this._needSync = !1, this._createBufferOnWrite = !1
      }
      _takeFreeSlot(YY) {
        for (let DY = 0; DY < this._freeSlots.length; ++DY) {
          const rY = this._freeSlots[DY];
          if (this._slotFrameId[rY] !== this._currentFrameId) return YY && (this._freeSlots[DY] = this._freeSlots[this._freeSlots.length - 1], this._freeSlots.pop()), rY
        }
        this._rebuild();
        const rY = this._buffers.length - 1;
        return YY || this._freeSlots.push(rY), rY
      }
      _releaseOwnerSlot(YY) {
        const rY = this._slotByOwner?.get(YY);
        if (void 0 === rY) return;
        this._slotByOwner.delete(YY);
        const DY = this._ownerListsBySlot.get(rY);
        DY && (this._removeOwnerBacklink(DY), this._ownerListsBySlot.delete(rY)), this._ownerCount--, this._freeSlots.push(rY)
      }
      _removeOwnerBacklink(YY) {
        const rY = YY.indexOf(this); - 1 !== rY && (YY[rY] = YY[YY.length - 1], YY.pop())
      }
      _createNewBuffer() {
        this._bufferIndex + 1 < this._buffers.length ? (this._bufferIndex++, this._buffer = this._buffers[this._bufferIndex][0], this._createBufferOnWrite = !1, this._needSync = !0) : this._rebuild()
      }
      _checkNewFrame() {
        this._trackUBOsInFrame && this._currentFrameId !== this._engine.frameId && (this._currentFrameId = this._engine.frameId, this._createBufferOnWrite = !1, this._buffers && this._buffers.length > 0 ? (1 === this._buffers.length ? this._needSync = !this._bufferUpdatedLastFrame : this._needSync = 0 !== this._bufferIndex, this._bufferIndex = 0, this._buffer = this._buffers[this._bufferIndex][0]) : this._bufferIndex = -1)
      }
      updateUniform(YY, rY, DY) {
        this._checkNewFrame();
        let AY = this._uniformLocations[YY];
        if (void 0 === AY) {
          if (this._buffer) return void FY.d.Error("Cannot add an uniform after UBO has been created. uniformName=" + YY);
          this.addUniform(YY, DY), AY = this._uniformLocations[YY]
        }
        if (this._buffer || this.create(), this._dynamic) {
          for (let YY = 0; YY < DY; YY++) this._bufferData[AY + YY] = rY[YY];
          this._dataGeneration++
        } else {
          let YY = !1;
          for (let FY = 0; FY < DY; FY++)(16 === DY && !this._engine._features.uniformBufferHardCheckMatrix || this._bufferData[AY + FY] !== Math.fround(rY[FY])) && (YY = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[AY + FY] = rY[FY]);
          this._needSync = this._needSync || YY, YY && this._dataGeneration++
        }
      }
      updateUniformArray(YY, rY, DY) {
        this._checkNewFrame();
        const IY = this._uniformLocations[YY];
        if (void 0 === IY) return void FY.d.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
        this._buffer || this.create();
        const RY = this._uniformArraySizes[YY];
        if (this._dynamic) {
          for (let YY = 0; YY < DY; YY++) this._bufferData[IY + YY] = rY[YY];
          this._dataGeneration++
        } else {
          let YY = !1,
            FY = 0,
            OY = 0;
          for (let gY = 0; gY < DY; gY++)
            if (this._bufferData[IY + 4 * OY + FY] !== AY.i.FloatRound(rY[gY]) && (YY = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[IY + 4 * OY + FY] = rY[gY]), FY++, FY === RY.strideSize) {
              for (; FY < 4; FY++) this._bufferData[IY + 4 * OY + FY] = 0;
              FY = 0, OY++
            } this._needSync = this._needSync || YY, YY && this._dataGeneration++
        }
      }
      _cacheMatrix(YY, rY) {
        this._checkNewFrame();
        const DY = this._valueCache[YY],
          FY = rY.updateFlag;
        return (void 0 === DY || DY !== FY) && (this._valueCache[YY] = FY, !0)
      }
      _updateMatrix3x3ForUniform(YY, rY) {
        for (let DY = 0; DY < 3; DY++) IY._TempBuffer[4 * DY] = rY[3 * DY], IY._TempBuffer[4 * DY + 1] = rY[3 * DY + 1], IY._TempBuffer[4 * DY + 2] = rY[3 * DY + 2], IY._TempBuffer[4 * DY + 3] = 0;
        this.updateUniform(YY, IY._TempBuffer, 12)
      }
      _updateMatrix3x3ForEffect(YY, rY) {
        this._currentEffect.setMatrix3x3(YY, rY)
      }
      _updateMatrix2x2ForEffect(YY, rY) {
        this._currentEffect.setMatrix2x2(YY, rY)
      }
      _updateMatrix2x2ForUniform(YY, rY) {
        for (let DY = 0; DY < 2; DY++) IY._TempBuffer[4 * DY] = rY[2 * DY], IY._TempBuffer[4 * DY + 1] = rY[2 * DY + 1], IY._TempBuffer[4 * DY + 2] = 0, IY._TempBuffer[4 * DY + 3] = 0;
        this.updateUniform(YY, IY._TempBuffer, 8)
      }
      _updateFloatForEffect(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setFloat(YY + DY, rY)
      }
      _updateFloatForUniform(YY, rY) {
        IY._TempBuffer[0] = rY, this.updateUniform(YY, IY._TempBuffer, 1)
      }
      _updateFloat2ForEffect(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setFloat2(YY + FY, rY, DY)
      }
      _updateFloat2ForUniform(YY, rY, DY) {
        IY._TempBuffer[0] = rY, IY._TempBuffer[1] = DY, this.updateUniform(YY, IY._TempBuffer, 2)
      }
      _updateFloat3ForEffect(YY, rY, DY, FY) {
        let AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setFloat3(YY + AY, rY, DY, FY)
      }
      _updateFloat3ForUniform(YY, rY, DY, FY) {
        IY._TempBuffer[0] = rY, IY._TempBuffer[1] = DY, IY._TempBuffer[2] = FY, this.updateUniform(YY, IY._TempBuffer, 3)
      }
      _updateFloat4ForEffect(YY, rY, DY, FY, AY) {
        let IY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setFloat4(YY + IY, rY, DY, FY, AY)
      }
      _updateFloat4ForUniform(YY, rY, DY, FY, AY) {
        IY._TempBuffer[0] = rY, IY._TempBuffer[1] = DY, IY._TempBuffer[2] = FY, IY._TempBuffer[3] = AY, this.updateUniform(YY, IY._TempBuffer, 4)
      }
      _updateFloatArrayForEffect(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        switch (this._uniformArraySizes[YY]?.strideSize) {
          case 2:
            this._currentEffect.setFloatArray2(YY + DY, rY);
            break;
          case 3:
            this._currentEffect.setFloatArray3(YY + DY, rY);
            break;
          case 4:
            this._currentEffect.setFloatArray4(YY + DY, rY);
            break;
          default:
            this._currentEffect.setFloatArray(YY + DY, rY)
        }
      }
      _updateFloatArrayForUniform(YY, rY) {
        this.updateUniformArray(YY, rY, rY.length)
      }
      _updateArrayForEffect(YY, rY) {
        this._currentEffect.setArray(YY, rY)
      }
      _updateArrayForUniform(YY, rY) {
        this.updateUniformArray(YY, rY, rY.length)
      }
      _updateIntArrayForEffect(YY, rY) {
        this._currentEffect.setIntArray(YY, rY)
      }
      _updateIntArrayForUniform(YY, rY) {
        IY._TempBufferInt32View.set(rY), this.updateUniformArray(YY, IY._TempBuffer, rY.length)
      }
      _updateUIntArrayForEffect(YY, rY) {
        this._currentEffect.setUIntArray(YY, rY)
      }
      _updateUIntArrayForUniform(YY, rY) {
        IY._TempBufferUInt32View.set(rY), this.updateUniformArray(YY, IY._TempBuffer, rY.length)
      }
      _updateMatrixForEffect(YY, rY) {
        this._currentEffect.setMatrix(YY, rY)
      }
      _updateMatrixForUniform(YY, rY) {
        this._cacheMatrix(YY, rY) && this.updateUniform(YY, rY.VDY(), 16)
      }
      _updateMatricesForEffect(YY, rY) {
        this._currentEffect.setMatrices(YY, rY)
      }
      _updateMatricesForUniform(YY, rY) {
        this.updateUniform(YY, rY, rY.length)
      }
      _updateVector3ForEffect(YY, rY) {
        this._currentEffect.setVector3(YY, rY)
      }
      _updateVector3ForUniform(YY, rY) {
        IY._TempBuffer[0] = rY.x, IY._TempBuffer[1] = rY.y, IY._TempBuffer[2] = rY.z, this.updateUniform(YY, IY._TempBuffer, 3)
      }
      _updateVector4ForEffect(YY, rY) {
        this._currentEffect.setVector4(YY, rY)
      }
      _updateVector4ForUniform(YY, rY) {
        IY._TempBuffer[0] = rY.x, IY._TempBuffer[1] = rY.y, IY._TempBuffer[2] = rY.z, IY._TempBuffer[3] = rY.w, this.updateUniform(YY, IY._TempBuffer, 4)
      }
      _updateColor3ForEffect(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setColor3(YY + DY, rY)
      }
      _updateColor3ForUniform(YY, rY) {
        IY._TempBuffer[0] = rY.r, IY._TempBuffer[1] = rY.g, IY._TempBuffer[2] = rY.b, this.updateUniform(YY, IY._TempBuffer, 3)
      }
      _updateColor4ForEffect(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setColor4(YY + FY, rY, DY)
      }
      _updateDirectColor4ForEffect(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setDirectColor4(YY + DY, rY)
      }
      _updateColor4ForUniform(YY, rY, DY) {
        IY._TempBuffer[0] = rY.r, IY._TempBuffer[1] = rY.g, IY._TempBuffer[2] = rY.b, IY._TempBuffer[3] = DY, this.updateUniform(YY, IY._TempBuffer, 4)
      }
      _updateDirectColor4ForUniform(YY, rY) {
        IY._TempBuffer[0] = rY.r, IY._TempBuffer[1] = rY.g, IY._TempBuffer[2] = rY.b, IY._TempBuffer[3] = rY.a, this.updateUniform(YY, IY._TempBuffer, 4)
      }
      _updateIntForEffect(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setInt(YY + DY, rY)
      }
      _updateIntForUniform(YY, rY) {
        IY._TempBufferInt32View[0] = rY, this.updateUniform(YY, IY._TempBuffer, 1)
      }
      _updateInt2ForEffect(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setInt2(YY + FY, rY, DY)
      }
      _updateInt2ForUniform(YY, rY, DY) {
        IY._TempBufferInt32View[0] = rY, IY._TempBufferInt32View[1] = DY, this.updateUniform(YY, IY._TempBuffer, 2)
      }
      _updateInt3ForEffect(YY, rY, DY, FY) {
        let AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setInt3(YY + AY, rY, DY, FY)
      }
      _updateInt3ForUniform(YY, rY, DY, FY) {
        IY._TempBufferInt32View[0] = rY, IY._TempBufferInt32View[1] = DY, IY._TempBufferInt32View[2] = FY, this.updateUniform(YY, IY._TempBuffer, 3)
      }
      _updateInt4ForEffect(YY, rY, DY, FY, AY) {
        let IY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setInt4(YY + IY, rY, DY, FY, AY)
      }
      _updateInt4ForUniform(YY, rY, DY, FY, AY) {
        IY._TempBufferInt32View[0] = rY, IY._TempBufferInt32View[1] = DY, IY._TempBufferInt32View[2] = FY, IY._TempBufferInt32View[3] = AY, this.updateUniform(YY, IY._TempBuffer, 4)
      }
      _updateUIntForEffect(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setUInt(YY + DY, rY)
      }
      _updateUIntForUniform(YY, rY) {
        IY._TempBufferUInt32View[0] = rY, this.updateUniform(YY, IY._TempBuffer, 1)
      }
      _updateUInt2ForEffect(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setUInt2(YY + FY, rY, DY)
      }
      _updateUInt2ForUniform(YY, rY, DY) {
        IY._TempBufferUInt32View[0] = rY, IY._TempBufferUInt32View[1] = DY, this.updateUniform(YY, IY._TempBuffer, 2)
      }
      _updateUInt3ForEffect(YY, rY, DY, FY) {
        let AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setUInt3(YY + AY, rY, DY, FY)
      }
      _updateUInt3ForUniform(YY, rY, DY, FY) {
        IY._TempBufferUInt32View[0] = rY, IY._TempBufferUInt32View[1] = DY, IY._TempBufferUInt32View[2] = FY, this.updateUniform(YY, IY._TempBuffer, 3)
      }
      _updateUInt4ForEffect(YY, rY, DY, FY, AY) {
        let IY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setUInt4(YY + IY, rY, DY, FY, AY)
      }
      _updateUInt4ForUniform(YY, rY, DY, FY, AY) {
        IY._TempBufferUInt32View[0] = rY, IY._TempBufferUInt32View[1] = DY, IY._TempBufferUInt32View[2] = FY, IY._TempBufferUInt32View[3] = AY, this.updateUniform(YY, IY._TempBuffer, 4)
      }
      setTexture(YY, rY) {
        this._currentEffect.setTexture(YY, rY)
      }
      setTextureArray(YY, rY) {
        this._currentEffect.setTextureArray(YY, rY)
      }
      bindTexture(YY, rY) {
        this._currentEffect._bindTexture(YY, rY)
      }
      updateUniformDirectly(YY, rY) {
        this.updateUniform(YY, rY, rY.length), this.update()
      }
      bindToEffect(YY, rY) {
        this._currentEffect = YY, this._currentEffectName = rY
      }
      bindUniformBuffer() {
        !this._noUBO && this._buffer && this._currentEffect && this._currentEffect.bindUniformBuffer(this._buffer, this._currentEffectName)
      }
      unbindEffect() {
        this._currentEffect = void 0, this._currentEffectName = void 0
      }
      setDataBuffer(YY) {
        if (!this._buffers) return this._buffer === YY;
        for (let rY = 0; rY < this._buffers.length; ++rY) {
          if (this._buffers[rY][0] === YY) return this._bufferIndex = rY, this._buffer = YY, this._createBufferOnWrite = !1, this._currentEffect = void 0, this._buffers.length > 1 && this._buffers[rY][1] && (this._bufferData.set(this._buffers[rY][1]), this._dataGeneration++), this._valueCache = {}, this._currentFrameId = this._engine.frameId, !0
        }
        return !1
      }
      has(YY) {
        return void 0 !== this._uniformLocations[YY]
      }
      dispose() {
        if (this._noUBO) return;
        const YY = this._engine._uniformBuffers,
          rY = YY.indexOf(this);
        if (-1 !== rY && (YY[rY] = YY[YY.length - 1], YY.pop()), this._trackUBOsInFrame && this._buffers) {
          this._resetOwnerSlots();
          for (let YY = 0; YY < this._buffers.length; ++YY) {
            const rY = this._buffers[YY][0];
            this._engine._releaseBuffer(rY)
          }
          this._buffers = [], this._buffer = null, this._bufferIndex = -1
        } else this._buffer && this._engine._releaseBuffer(this._buffer) && (this._buffer = null)
      }
    }
    IY._MAX_UNIFORM_SIZE = 256, IY._TempBuffer = new Float32Array(IY._MAX_UNIFORM_SIZE), IY._TempBufferInt32View = new Int32Array(IY._TempBuffer.buffer), IY._TempBufferUInt32View = new Uint32Array(IY._TempBuffer.buffer)
  },
  39054: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => AY
    });
    var FY = DY(39056);
    class AY extends FY.e {
      constructor(YY) {
        super(), this._buffer = YY
      }
      get underlyingResource() {
        return this._buffer
      }
    }
  },
  39136: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => gY,
      g: () => aY
    });
    const FY = "__bjs_serializable__",
      AY = new WeakMap;

    function IY(YY, rY) {
      return Object.prototype.hasOwnProperty.call(YY, rY)
    }
    const RY = function() {
      let YY = Symbol.metadata;
      return YY || (YY = Symbol("Symbol.metadata"), Object.defineProperty(Symbol, "metadata", {
        configurable: !0,
        writable: !0,
        value: YY
      })), YY
    }();

    function OY(YY) {
      return "function" === typeof YY ? YY : YY?.constructor
    }

    function gY(YY) {
      if (!YY) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(RY)}) polyfill must run before decorated classes are evaluated.`);
      return IY(YY, FY) || (YY[FY] = {}), YY[FY]
    }

    function aY(YY) {
      const rY = OY(YY),
        DY = rY ? rY[RY] : void 0;
      if (!DY) return {};
      const gY = AY.get(DY);
      if (gY) return gY;
      const aY = {},
        vY = [];
      let uY = DY;
      for (; uY;) vY.push(uY), uY = Object.getPrototypeOf(uY);
      for (const AY of vY)
        if (IY(AY, FY)) {
          const YY = AY[FY];
          for (const rY in YY) aY[rY] = YY[rY]
        } return AY.set(DY, aY), aY
    }
  },
  39131: (YY, rY, DY) => {
    DY.d(rY, {
      B: () => sY,
      C: () => QY,
      D: () => OY,
      G: () => vY,
      J: () => uY,
      M: () => RY,
      d: () => mY,
      f: () => IY,
      j: () => EY,
      n: () => iY,
      o: () => gY,
      s: () => yY,
      v: () => aY,
      z: () => oY
    });
    var FY = DY(39136);

    function AY(YY, rY) {
      return (DY, AY) => {
        if (!AY.metadata) return;
        const IY = String(AY.name),
          RY = (0, FY.e)(AY.metadata);
        RY[IY] || (RY[IY] = {
          type: YY,
          sourceName: rY
        })
      }
    }

    function IY(YY) {
      return function(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (DY, FY) => {
          const AY = rY || "_" + String(FY.name);
          return {
            init(YY) {
              return void 0 === YY && AY in this || (this[AY] = YY), YY
            },
            get() {
              return this[AY]
            },
            set(rY) {
              "function" === typeof this[AY]?.equals && this[AY].equals(rY) || this[AY] !== rY && (this[AY] = rY, this[YY]())
            }
          }
        }
      }(YY, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function RY(YY) {
      return AY(0, YY)
    }

    function OY(YY) {
      return AY(1, YY)
    }

    function gY(YY) {
      return AY(2, YY)
    }

    function aY(YY) {
      return AY(3, YY)
    }

    function vY(YY) {
      return AY(4, YY)
    }

    function uY(YY) {
      return AY(5, YY)
    }

    function sY(YY) {
      return AY(6, YY)
    }

    function iY(YY) {
      return AY(7, YY)
    }

    function yY(YY) {
      return AY(8, YY)
    }

    function QY(YY) {
      return AY(10, YY)
    }

    function oY(YY) {
      return AY(12, YY)
    }

    function WY(YY, rY, DY) {
      const FY = String(rY.name);
      let AY = null;
      const IY = function() {
        if (null === AY) {
          AY = YY, "undefined" !== typeof _native && _native[FY] && (AY = DY(_native[FY], YY));
          const RY = this && (rY.static ? this : Object.getPrototypeOf(this));
          RY?.[FY] === IY && (RY[FY] = AY)
        }
        for (var RY = arguments.length, OY = new Array(RY), gY = 0; gY < RY; gY++) OY[gY] = arguments[gY];
        return AY.apply(this, OY)
      };
      return IY
    }

    function EY(YY, rY) {
      return WY(YY, rY, (YY => YY))
    }

    function mY(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return (DY, FY) => {
        const AY = rY || "_" + String(FY.name);
        return {
          get() {
            return this[AY]?.value
          },
          set(rY) {
            "function" === typeof this[AY]?.value?.equals && this[AY].value.equals(rY) || this[AY].value !== rY && (this[AY].value = rY, this[YY]())
          }
        }
      }
    }
    EY.filter = function(YY) {
      return (rY, DY) => WY(rY, DY, ((rY, DY) => function() {
        for (var FY = arguments.length, AY = new Array(FY), IY = 0; IY < FY; IY++) AY[IY] = arguments[IY];
        return YY(...AY) ? rY(...AY) : DY.apply(this, AY)
      }))
    }
  },
  39144: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => aY
    });
    var FY = DY(39029),
      AY = DY(39149),
      IY = DY(36588),
      RY = DY(36524),
      OY = DY(39136);
    const gY = function(YY, rY, DY) {
      let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const IY = YY();
      AY.e && AY.e.HasTags(rY) && AY.e.AddTagsTo(IY, AY.e.GetTags(rY, !0));
      const RY = (0, OY.g)(IY),
        gY = {};
      for (const AY in RY) {
        const YY = RY[AY],
          OY = rY[AY],
          vY = YY.type;
        if (void 0 !== OY && null !== OY && ("uniqueId" !== AY || aY.AllowLoadingUniqueId)) switch (vY) {
          case 0:
          case 6:
          case 9:
          case 11:
            "function" === typeof OY.slice ? IY[AY] = OY.slice() : IY[AY] = OY;
            break;
          case 1:
            FY.cloneTexturesOnlyOnce && gY[OY.uniqueId] ? IY[AY] = gY[OY.uniqueId] : (IY[AY] = DY || OY.isRenderTarget ? OY : OY.clone(), gY[OY.uniqueId] = IY[AY]);
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
            IY[AY] = DY ? OY : OY.clone()
        }
      }
      return IY
    };
    class aY {
      static AppendSerializedAnimations(YY, rY) {
        if (YY.animations) {
          rY.animations = [];
          for (let DY = 0; DY < YY.animations.length; DY++) {
            const FY = YY.animations[DY];
            rY.animations.push(FY.serialize())
          }
        }
      }
      static Serialize(YY, rY) {
        rY || (rY = {}), AY.e && (rY.tags = AY.e.GetTags(YY));
        const DY = (0, OY.g)(YY);
        for (const FY in DY) {
          const AY = DY[FY],
            IY = AY.sourceName || FY,
            RY = AY.type,
            OY = YY[FY];
          if (void 0 !== OY && null !== OY && ("uniqueId" !== FY || aY.AllowLoadingUniqueId)) switch (RY) {
            case 0:
              Array.isArray(OY) ? rY[IY] = OY.slice() : rY[IY] = OY;
              break;
            case 1:
            case 3:
            case 7:
            case 9:
              rY[IY] = OY.serialize();
              break;
            case 2:
            case 4:
            case 5:
            case 8:
            case 10:
            case 12:
            case 13:
              rY[IY] = OY.VDY();
              break;
            case 6:
            case 11:
              rY[IY] = OY.id
          }
        }
        return rY
      }
      static ParseProperties(YY, rY, DY, FY) {
        FY || (FY = "");
        const AY = (0, OY.g)(rY);
        for (const OY in AY) {
          const gY = AY[OY],
            vY = YY[gY.sourceName || OY],
            uY = gY.type;
          if (void 0 !== vY && null !== vY && ("uniqueId" !== OY || aY.AllowLoadingUniqueId)) {
            const YY = rY;
            switch (uY) {
              case 0:
                YY[OY] = vY;
                break;
              case 1:
                DY && (YY[OY] = aY._TextureParser(vY, DY, FY));
                break;
              case 2:
                YY[OY] = IY.c.FromArray(vY);
                break;
              case 3:
                YY[OY] = aY._FresnelParametersParser(vY);
                break;
              case 4:
                YY[OY] = RY.q.FromArray(vY);
                break;
              case 5:
                YY[OY] = RY.r.FromArray(vY);
                break;
              case 6:
                DY && (YY[OY] = DY.getLastMeshById(vY));
                break;
              case 7:
                YY[OY] = aY._ColorCurvesParser(vY);
                break;
              case 8:
                YY[OY] = IY.d.FromArray(vY);
                break;
              case 9:
                YY[OY] = aY._ImageProcessingConfigurationParser(vY);
                break;
              case 10:
                YY[OY] = RY.g.FromArray(vY);
                break;
              case 11:
                DY && (YY[OY] = DY.getCameraById(vY));
                break;
              case 12:
                YY[OY] = RY.e.FromArray(vY);
                break;
              case 13:
                YY[OY] = RY.v.FromArray(vY)
            }
          }
        }
      }
      static Parse(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const IY = YY();
        return AY.e && AY.e.AddTagsTo(IY, rY.tags), aY.ParseProperties(rY, IY, DY, FY), IY
      }
      static Clone(YY, rY) {
        return gY(YY, rY, !1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
      }
      static Instanciate(YY, rY) {
        return gY(YY, rY, !0)
      }
    }
    aY.AllowLoadingUniqueId = !1, aY._ImageProcessingConfigurationParser = YY => {
      throw (0, FY.i)("ImageProcessingConfiguration")
    }, aY._FresnelParametersParser = YY => {
      throw (0, FY.i)("FresnelParameters")
    }, aY._ColorCurvesParser = YY => {
      throw (0, FY.i)("ColorCurves")
    }, aY._TextureParser = (YY, rY, DY) => {
      throw (0, FY.i)("Texture")
    }
  },
  39087: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => AY
    });
    var FY = DY(39044);
    class AY {
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
        this._totalValueCount++, this._current = 0, this._hasCurrentValue = AY.Enabled, this._lastSecValueCount++
      }
      addCount(YY, rY) {
        AY.Enabled && (this._current += YY, this._hasCurrentValue = !0, rY && this._fetchResult())
      }
      beginMonitoring() {
        AY.Enabled && (this._startMonitoringTime = FY.c.Now)
      }
      endMonitoring() {
        let YY = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (!AY.Enabled) return;
        YY && this.fetchNewFrame();
        const rY = FY.c.Now;
        this._current = rY - this._startMonitoringTime, this._hasCurrentValue = !0, YY && this._fetchResult()
      }
      Qm() {
        this._fetchResult()
      }
      _fetchResult() {
        if (!this._hasCurrentValue) return;
        this._totalAccumulated += this._current, this._lastSecAccumulated += this._current, this._hasResult ? (this._min = Math.min(this._min, this._current), this._max = Math.max(this._max, this._current)) : (this._min = this._current, this._max = this._current, this._hasResult = !0), this._average = this._totalAccumulated / this._totalValueCount;
        const YY = FY.c.Now;
        YY - this._lastSecTime > 1e3 && (this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount, this._lastSecTime = YY, this._lastSecAccumulated = 0, this._lastSecValueCount = 0)
      }
    }
    AY.Enabled = !0
  },
  39231: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => AY,
      f: () => FY
    });
    class FY {
      constructor(YY) {
        this.length = 0, this.data = new Array(YY), this._id = FY._GlobalId++
      }
      push(YY) {
        this.data[this.length++] = YY, this.length > this.data.length && (this.data.length *= 2)
      }
      forEach(YY) {
        for (let rY = 0; rY < this.length; rY++) YY(this.data[rY])
      }
      sort(YY) {
        this.data.sort(YY)
      }
      reset() {
        this.length = 0
      }
      dispose() {
        this.reset(), this.data && (this.data.length = 0)
      }
      concat(YY) {
        if (0 !== YY.length) {
          this.length + YY.length > this.data.length && (this.data.length = 2 * (this.length + YY.length));
          for (let rY = 0; rY < YY.length; rY++) this.data[this.length++] = (YY.data || YY)[rY]
        }
      }
      indexOf(YY) {
        const rY = this.data.indexOf(YY);
        return rY >= this.length ? -1 : rY
      }
      contains(YY) {
        return -1 !== this.indexOf(YY)
      }
    }
    FY._GlobalId = 0;
    class AY extends FY {
      constructor() {
        super(...arguments), this._duplicateId = 0
      }
      push(YY) {
        super.push(YY), YY.__smartArrayFlags || (YY.__smartArrayFlags = {}), YY.__smartArrayFlags[this._id] = this._duplicateId
      }
      pushNoDuplicate(YY) {
        return (!YY.__smartArrayFlags || YY.__smartArrayFlags[this._id] !== this._duplicateId) && (this.push(YY), !0)
      }
      reset() {
        super.reset(), this._duplicateId++
      }
      concatWithNoDuplicate(YY) {
        if (0 !== YY.length) {
          this.length + YY.length > this.data.length && (this.data.length = 2 * (this.length + YY.length));
          for (let rY = 0; rY < YY.length; rY++) {
            const DY = (YY.data || YY)[rY];
            this.pushNoDuplicate(DY)
          }
        }
      }
    }
  },
  39149: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => AY
    });
    class FY {
      static Eval(YY, rY) {
        return "true" === (YY = YY.match(/\([^()]*\)/g) ? YY.replace(/\([^()]*\)/g, (YY => (YY = YY.slice(1, YY.length - 1), FY._HandleParenthesisContent(YY, rY)))) : FY._HandleParenthesisContent(YY, rY)) || "false" !== YY && FY.Eval(YY, rY)
      }
      static _HandleParenthesisContent(YY, rY) {
        let DY;
        rY = rY || (YY => "true" === YY);
        const AY = YY.split("||");
        for (const IY in AY)
          if (Object.prototype.hasOwnProperty.call(AY, IY)) {
            let YY = FY._SimplifyNegation(AY[IY].trim());
            const RY = YY.split("&&");
            if (RY.length > 1)
              for (let AY = 0; AY < RY.length; ++AY) {
                const IY = FY._SimplifyNegation(RY[AY].trim());
                if (DY = "true" !== IY && "false" !== IY ? "!" === IY[0] ? !rY(IY.substring(1)) : rY(IY) : "true" === IY, !DY) {
                  YY = "false";
                  break
                }
              }
            if (DY || "true" === YY) {
              DY = !0;
              break
            }
            DY = "true" !== YY && "false" !== YY ? "!" === YY[0] ? !rY(YY.substring(1)) : rY(YY) : "true" === YY
          } return DY ? "true" : "false"
      }
      static _SimplifyNegation(YY) {
        return "!true" === (YY = (YY = YY.replace(/^[\s!]+/, (YY => (YY = YY.replace(/[\s]/g, (() => ""))).length % 2 ? "!" : ""))).trim()) ? YY = "false" : "!false" === YY && (YY = "true"), YY
      }
    }
    class AY {
      static EnableFor(YY) {
        YY._tags = YY._tags || {}, YY.hasTags = () => AY.HasTags(YY), YY.addTags = rY => AY.AddTagsTo(YY, rY), YY.removeTags = rY => AY.RemoveTagsFrom(YY, rY), YY.matchesTagsQuery = rY => AY.MatchesQuery(YY, rY)
      }
      static DisableFor(YY) {
        delete YY._tags, delete YY.hasTags, delete YY.addTags, delete YY.removeTags, delete YY.matchesTagsQuery
      }
      static HasTags(YY) {
        if (!YY._tags) return !1;
        const rY = YY._tags;
        for (const DY in rY)
          if (Object.prototype.hasOwnProperty.call(rY, DY)) return !0;
        return !1
      }
      static GetTags(YY) {
        let rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!YY._tags) return null;
        if (rY) {
          const rY = [];
          for (const DY in YY._tags) Object.prototype.hasOwnProperty.call(YY._tags, DY) && !0 === YY._tags[DY] && rY.push(DY);
          return rY.join(" ")
        }
        return YY._tags
      }
      static AddTagsTo(YY, rY) {
        if (!rY) return;
        if ("string" !== typeof rY) return;
        const DY = rY.split(" ");
        for (const FY of DY) AY._AddTagTo(YY, FY)
      }
      static _AddTagTo(YY, rY) {
        "" !== (rY = rY.trim()) && "true" !== rY && "false" !== rY && (rY.match(/[\s]/) || rY.match(/^([!]|([|]|[&]){2})/) || (AY.EnableFor(YY), YY._tags[rY] = !0))
      }
      static RemoveTagsFrom(YY, rY) {
        if (!AY.HasTags(YY)) return;
        const DY = rY.split(" ");
        for (const FY in DY) AY._RemoveTagFrom(YY, DY[FY])
      }
      static _RemoveTagFrom(YY, rY) {
        delete YY._tags[rY]
      }
      static MatchesQuery(YY, rY) {
        return void 0 === rY || ("" === rY ? AY.HasTags(YY) : FY.Eval(rY, (rY => AY.HasTags(YY) && YY._tags[rY])))
      }
    }
  },
  39277: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => IY
    });
    var FY = DY(39270),
      AY = DY(36552);
    class IY {
      constructor(YY) {
        this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new AY.e, this._scene = YY
      }
      _prepareBuffers() {
        if (this._vertexBuffers[FY.l.PositionKind]) return;
        const YY = [];
        YY.push(1, 1), YY.push(-1, 1), YY.push(-1, -1), YY.push(1, -1), this._vertexBuffers[FY.l.PositionKind] = new FY.l(this._scene.ky(), YY, FY.l.PositionKind, !1, !1, 2), this._buildIndexBuffer()
      }
      _buildIndexBuffer() {
        const YY = [];
        YY.push(0), YY.push(1), YY.push(2), YY.push(0), YY.push(2), YY.push(3), this._indexBuffer = this._scene.ky().createIndexBuffer(YY)
      }
      _getActivePostProcesses(YY) {
        const rY = this._activePostProcesses;
        rY.length = 0;
        for (let DY = 0; DY < YY.length; DY++) {
          const FY = YY[DY];
          FY && rY.push(FY)
        }
        return rY
      }
      _rebuild() {
        const YY = this._vertexBuffers[FY.l.PositionKind];
        YY && (YY._rebuild(), this._buildIndexBuffer())
      }
      _prepareFrame() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const DY = this._scene.activeCamera;
        return !!DY && (rY = rY || this._getActivePostProcesses(DY._postProcesses), !(!rY || 0 === rY.length || !this._scene.postProcessesEnabled) && (rY[0].activate(DY, YY, null !== rY && void 0 !== rY), !0))
      }
      directRender(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          IY = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          RY = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : YY.length;
        const OY = this._scene.ky();
        for (let gY = 0; gY < RY; gY++) {
          gY < YY.length - 1 ? YY[gY + 1].activate(this._scene.activeCamera || this._scene, rY?.texture) : (rY ? OY.bindFramebuffer(rY, FY, void 0, void 0, DY, AY) : IY || OY.restoreDefaultFramebuffer(), OY._debugInsertMarker?.(`post process ${YY[gY].name} output`));
          const RY = YY[gY],
            aY = RY.apply();
          aY && (RY.onBeforeRenderObservable.notifyObservers(aY), this._prepareBuffers(), OY.bindBuffers(this._vertexBuffers, this._indexBuffer, aY), OY.drawElementsType(0, 0, 6), RY.onAfterRenderObservable.notifyObservers(aY))
        }
        OY.setDepthBuffer(!0), OY.setDepthWrite(!0)
      }
      _finalizeFrame(YY, rY, DY, FY) {
        let AY = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const IY = this._scene.activeCamera;
        if (!IY) return;
        if (this.onBeforeRenderObservable.notifyObservers(this), 0 === (FY = FY || this._getActivePostProcesses(IY._postProcesses)).length || !this._scene.postProcessesEnabled) return;
        const RY = this._scene.ky();
        for (let OY = 0, gY = FY.length; OY < gY; OY++) {
          const aY = FY[OY];
          if (OY < gY - 1 ? aY._outputTexture = FY[OY + 1].activate(IY, rY?.texture) : (rY ? (RY.bindFramebuffer(rY, DY, void 0, void 0, AY), aY._outputTexture = rY) : (RY.restoreDefaultFramebuffer(), aY._outputTexture = null), RY._debugInsertMarker?.(`post process ${FY[OY].name} output`)), YY) break;
          const vY = aY.apply();
          vY && (aY.onBeforeRenderObservable.notifyObservers(vY), this._prepareBuffers(), RY.bindBuffers(this._vertexBuffers, this._indexBuffer, vY), RY.drawElementsType(0, 0, 6), aY.onAfterRenderObservable.notifyObservers(vY))
        }
        RY.setDepthBuffer(!0), RY.setDepthWrite(!0), RY.setAlphaMode(0)
      }
      dispose() {
        const YY = this._vertexBuffers[FY.l.PositionKind];
        YY && (YY.dispose(), this._vertexBuffers[FY.l.PositionKind] = null), this._indexBuffer && (this._scene.ky()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
      }
    }
  },
  39290: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => IY
    });
    var FY = DY(39231),
      AY = DY(36524);
    class IY {
      set opaqueSortCompareFn(YY) {
        this._opaqueSortCompareFn = YY || IY.PainterSortCompare, this._renderOpaque = this._renderOpaqueSorted
      }
      set alphaTestSortCompareFn(YY) {
        this._alphaTestSortCompareFn = YY || IY.PainterSortCompare, this._renderAlphaTest = this._renderAlphaTestSorted
      }
      set transparentSortCompareFn(YY) {
        this._transparentSortCompareFn = YY || IY.defaultTransparentSortCompare, this._renderTransparent = this._renderTransparentSorted
      }
      constructor(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          AY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          IY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        this.index = YY, this._opaqueSubMeshes = new FY.f(256), this._transparentSubMeshes = new FY.f(256), this._alphaTestSubMeshes = new FY.f(256), this._depthOnlySubMeshes = new FY.f(256), this._particleSystems = new FY.f(256), this._spriteManagers = new FY.f(256), this._empty = !0, this._edgesRenderers = new FY.e(16), this.disableDepthPrePass = !1, this._scene = rY, this.opaqueSortCompareFn = DY, this.alphaTestSortCompareFn = AY, this.transparentSortCompareFn = IY
      }
      render(YY, rY, DY, FY) {
        let AY = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          IY = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          RY = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          OY = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          gY = arguments.length > 8 ? arguments[8] : void 0;
        if (YY) return void YY(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
        const aY = this._scene.ky();
        AY && 0 !== this._depthOnlySubMeshes.length && (aY.setColorWrite(!1), this._renderAlphaTest(this._depthOnlySubMeshes), aY.setColorWrite(!0)), IY && 0 !== this._opaqueSubMeshes.length && this._renderOpaque(this._opaqueSubMeshes), RY && 0 !== this._alphaTestSubMeshes.length && this._renderAlphaTest(this._alphaTestSubMeshes);
        const vY = aY.getStencilBuffer();
        if (aY.setStencilBuffer(!1), rY && this._renderSprites(), DY && this._renderParticles(FY), this.onBeforeTransparentRendering && this.onBeforeTransparentRendering(), OY && (gY || 0 !== this._transparentSubMeshes.length || this._scene.useOrderIndependentTransparency)) {
          if (aY.setStencilBuffer(vY), gY) gY(this._transparentSubMeshes, this);
          else if (this._scene.useOrderIndependentTransparency) {
            const YY = this._scene.depthPeelingRenderer.render(this._transparentSubMeshes);
            YY.length && this._renderTransparent(YY)
          } else this._renderTransparent(this._transparentSubMeshes);
          aY.setAlphaMode(0)
        }
        if (aY.setStencilBuffer(!1), IY && this._edgesRenderers.length) {
          for (let YY = 0; YY < this._edgesRenderers.length; YY++) this._edgesRenderers.data[YY].render();
          aY.setAlphaMode(0)
        }
        aY.setStencilBuffer(vY)
      }
      _renderOpaqueSorted(YY) {
        IY._RenderSorted(YY, this._opaqueSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderAlphaTestSorted(YY) {
        IY._RenderSorted(YY, this._alphaTestSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderTransparentSorted(YY) {
        IY._RenderSorted(YY, this._transparentSortCompareFn, this._scene.activeCamera, !0, this.disableDepthPrePass)
      }
      static _RenderSorted(YY, rY, DY, FY, RY) {
        let OY, gY = 0;
        const aY = DY ? DY.globalPosition : IY._ZeroVector;
        if (FY && rY !== IY.PainterSortCompare)
          for (; gY < YY.length; gY++) OY = YY.data[gY], OY._alphaIndex = OY.getMesh().alphaIndex, OY._distanceToCamera = AY.r.Distance(OY.oB().bDY.centerWorld, aY);
        const vY = YY.length === YY.data.length ? YY.data : YY.data.slice(0, YY.length);
        rY && vY.sort(rY);
        const uY = vY[0].getMesh().hT();
        for (gY = 0; gY < vY.length; gY++) {
          if (OY = vY[gY], uY._activeMeshesFrozenButKeepClipping && !OY.isInFrustum(uY._frustumPlanes)) continue;
          let YY = !1;
          if (FY) {
            const rY = OY.Uy();
            if (rY && rY.needDepthPrePass && !RY) {
              YY = !0;
              const DY = rY.hT().ky();
              DY.setColorWrite(!1), DY.setAlphaMode(0), OY.render(!1), DY.setColorWrite(!0)
            }
          }
          const rY = OY._renderingMesh;
          !YY && rY._renderRunFollower(OY, FY) || OY.render(FY)
        }
      }
      static defaultTransparentSortCompare(YY, rY) {
        return YY._alphaIndex > rY._alphaIndex ? 1 : YY._alphaIndex < rY._alphaIndex ? -1 : IY.backToFrontSortCompare(YY, rY)
      }
      static backToFrontSortCompare(YY, rY) {
        return YY._distanceToCamera < rY._distanceToCamera ? 1 : YY._distanceToCamera > rY._distanceToCamera ? -1 : 0
      }
      static frontToBackSortCompare(YY, rY) {
        return YY._distanceToCamera < rY._distanceToCamera ? -1 : YY._distanceToCamera > rY._distanceToCamera ? 1 : 0
      }
      static PainterSortCompare(YY, rY) {
        const DY = YY.getMesh(),
          FY = rY.getMesh();
        return DY.material && FY.material ? DY.material.uniqueId - FY.material.uniqueId : DY.uniqueId - FY.uniqueId
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
      dispatch(YY, rY, DY) {
        void 0 === rY && (rY = YY.getMesh()), void 0 === DY && (DY = YY.Uy()), null !== DY && void 0 !== DY && (DY.needAlphaBlendingForMesh(rY) ? this._transparentSubMeshes.push(YY) : DY.needAlphaTestingForMesh(rY) ? (DY.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(YY), this._alphaTestSubMeshes.push(YY)) : (DY.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(YY), this._opaqueSubMeshes.push(YY)), rY._renderingGroup = this, rY._edgesRenderer && rY.isEnabled() && rY.isVisible && rY._edgesRenderer.isEnabled && this._edgesRenderers.pushNoDuplicate(rY._edgesRenderer), this._empty = !1)
      }
      dispatchSprites(YY) {
        this._spriteManagers.push(YY), this._empty = !1
      }
      dispatchParticles(YY) {
        this._particleSystems.push(YY), this._empty = !1
      }
      _renderParticles(YY) {
        if (0 === this._particleSystems.length) return;
        const rY = this._scene.activeCamera;
        this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
        for (let DY = 0; DY < this._particleSystems.length; DY++) {
          const FY = this._particleSystems.data[DY];
          if (0 === (rY && rY.layerMask & FY.layerMask)) continue;
          const AY = FY.emitter;
          AY.position && YY && -1 === YY.indexOf(AY) || this._scene._activeParticles.addCount(FY.render(), !1)
        }
        this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
      }
      _renderSprites() {
        if (!this._scene.spritesEnabled || 0 === this._spriteManagers.length) return;
        const YY = this._scene.activeCamera;
        this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
        for (let rY = 0; rY < this._spriteManagers.length; rY++) {
          const DY = this._spriteManagers.data[rY];
          0 !== (YY && YY.layerMask & DY.layerMask) && DY.render()
        }
        this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene)
      }
    }
    IY._ZeroVector = AY.r.Zero()
  },
  39288: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => IY
    });
    var FY = DY(39290);
    class AY {}
    class IY {
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(YY) {
        this._disableDepthPrePass = YY;
        for (const rY of this._renderingGroups) rY.disableDepthPrePass = YY
      }
      get maintainStateBetweenFrames() {
        return this._maintainStateBetweenFrames
      }
      set maintainStateBetweenFrames(YY) {
        YY !== this._maintainStateBetweenFrames && (this._maintainStateBetweenFrames = YY, this._maintainStateBetweenFrames || this.restoreDispachedFlags())
      }
      restoreDispachedFlags() {
        for (const YY of this._scene.meshes)
          if (YY.qm)
            for (const rY of YY.qm) rY._wasDispatched = !1;
        if (this._scene.spriteManagers)
          for (const YY of this._scene.spriteManagers) YY._wasDispatched = !1;
        for (const YY of this._scene.YV) YY._wasDispatched = !1
      }
      constructor(YY) {
        this._useSceneAutoClearSetup = !1, this._disableDepthPrePass = !1, this._renderingGroups = new Array, this._autoClearDepthStencil = {}, this._customOpaqueSortCompareFn = {}, this._customAlphaTestSortCompareFn = {}, this._customTransparentSortCompareFn = {}, this._renderingGroupInfo = new AY, this._maintainStateBetweenFrames = !1, this._scene = YY;
        for (let rY = IY.MIN_RENDERINGGROUPS; rY < IY.MAX_RENDERINGGROUPS; rY++) this._autoClearDepthStencil[rY] = {
          autoClear: !0,
          depth: !0,
          stencil: !0
        }
      }
      get renderingGroups() {
        return this._renderingGroups
      }
      getRenderingGroup(YY) {
        const rY = YY || 0;
        return this._prepareRenderingGroup(rY), this._renderingGroups[rY]
      }
      _clearDepthStencilBuffer() {
        let YY = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._depthStencilBufferAlreadyCleaned || (this._scene.ky().clear(null, !1, YY, rY), this._depthStencilBufferAlreadyCleaned = !0)
      }
      render(YY, rY, DY, FY) {
        let AY = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          RY = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          OY = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          gY = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          aY = arguments.length > 8 ? arguments[8] : void 0,
          vY = arguments.length > 9 ? arguments[9] : void 0;
        const uY = this._renderingGroupInfo;
        uY.LQ = this._scene, uY.camera = this._scene.activeCamera, uY.renderingManager = this;
        const sY = vY ?? this._scene.spriteManagers;
        if (sY && FY)
          for (let IY = 0; IY < sY.length; IY++) {
            const YY = sY[IY];
            this.dispatchSprites(YY)
          }
        for (let iY = IY.MIN_RENDERINGGROUPS; iY < IY.MAX_RENDERINGGROUPS; iY++) {
          this._depthStencilBufferAlreadyCleaned = iY === IY.MIN_RENDERINGGROUPS;
          const vY = this._renderingGroups[iY];
          if (!vY || vY._empty) continue;
          const sY = 1 << iY;
          if (uY.renderingGroupId = iY, this._scene.onBeforeRenderingGroupObservable.notifyObservers(uY, sY), IY.AUTOCLEAR) {
            const YY = this._useSceneAutoClearSetup ? this._scene.getAutoClearDepthStencilSetup(iY) : this._autoClearDepthStencil[iY];
            YY && YY.autoClear && this._clearDepthStencilBuffer(YY.depth, YY.stencil)
          }
          for (let YY = 0, rY = this._scene._beforeRenderingGroupDrawStage; YY < rY.length; YY++) {
            rY[YY].action(iY)
          }
          vY.render(YY, FY, DY, rY, AY, RY, OY, gY, aY);
          for (let YY = 0, rY = this._scene._afterRenderingGroupDrawStage; YY < rY.length; YY++) {
            rY[YY].action(iY)
          }
          this._scene.onAfterRenderingGroupObservable.notifyObservers(uY, sY)
        }
      }
      reset() {
        if (!this.maintainStateBetweenFrames)
          for (let YY = IY.MIN_RENDERINGGROUPS; YY < IY.MAX_RENDERINGGROUPS; YY++) {
            const rY = this._renderingGroups[YY];
            rY && rY.prepare()
          }
      }
      resetSprites() {
        if (!this.maintainStateBetweenFrames)
          for (let YY = IY.MIN_RENDERINGGROUPS; YY < IY.MAX_RENDERINGGROUPS; YY++) {
            const rY = this._renderingGroups[YY];
            rY && rY.prepareSprites()
          }
      }
      dispose() {
        this.freeRenderingGroups(), this._renderingGroups.length = 0, this._renderingGroupInfo = null
      }
      freeRenderingGroups() {
        for (let YY = IY.MIN_RENDERINGGROUPS; YY < IY.MAX_RENDERINGGROUPS; YY++) {
          const rY = this._renderingGroups[YY];
          rY && rY.dispose()
        }
      }
      _prepareRenderingGroup(YY) {
        void 0 === this._renderingGroups[YY] && (this._renderingGroups[YY] = new FY.e(YY, this._scene, this._customOpaqueSortCompareFn[YY], this._customAlphaTestSortCompareFn[YY], this._customTransparentSortCompareFn[YY]), this._renderingGroups[YY].disableDepthPrePass = this._disableDepthPrePass)
      }
      dispatchSprites(YY) {
        this.maintainStateBetweenFrames && YY._wasDispatched || (YY._wasDispatched = !0, this.getRenderingGroup(YY.renderingGroupId).dispatchSprites(YY))
      }
      dispatchParticles(YY) {
        this.maintainStateBetweenFrames && YY._wasDispatched || (YY._wasDispatched = !0, this.getRenderingGroup(YY.renderingGroupId).dispatchParticles(YY))
      }
      dispatch(YY, rY, DY) {
        void 0 === rY && (rY = YY.getMesh()), this.maintainStateBetweenFrames && YY._wasDispatched || (YY._wasDispatched = !0, this.getRenderingGroup(rY.renderingGroupId).dispatch(YY, rY, DY))
      }
      setRenderingOrder(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (this._customOpaqueSortCompareFn[YY] = rY, this._customAlphaTestSortCompareFn[YY] = DY, this._customTransparentSortCompareFn[YY] = FY, this._renderingGroups[YY]) {
          const rY = this._renderingGroups[YY];
          rY.opaqueSortCompareFn = this._customOpaqueSortCompareFn[YY], rY.alphaTestSortCompareFn = this._customAlphaTestSortCompareFn[YY], rY.transparentSortCompareFn = this._customTransparentSortCompareFn[YY]
        }
      }
      setRenderingAutoClearDepthStencil(YY, rY) {
        let DY = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          FY = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._autoClearDepthStencil[YY] = {
          autoClear: rY,
          depth: DY,
          stencil: FY
        }
      }
      getAutoClearDepthStencilSetup(YY) {
        return this._autoClearDepthStencil[YY]
      }
    }
    IY.MAX_RENDERINGGROUPS = 4, IY.MIN_RENDERINGGROUPS = 0, IY.AUTOCLEAR = !0
  },
  39046: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => FY
    });
    class FY {
      constructor(YY) {
        this._supportBlendParametersPerTarget = YY, this._blendFunctionParameters = new Array(32), this._blendEquationParameters = new Array(16), this._blendConstants = new Array(4), this._isBlendConstantsDirty = !1, this._alphaBlend = Array(8).fill(!1), this._numTargetEnabled = 0, this._isAlphaBlendDirty = !1, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1, this.reset()
      }
      get isDirty() {
        return this._isAlphaBlendDirty || this._isBlendFunctionParametersDirty || this._isBlendEquationParametersDirty
      }
      get alphaBlend() {
        return this._numTargetEnabled > 0
      }
      set alphaBlend(YY) {
        this.setAlphaBlend(YY)
      }
      setAlphaBlend(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._alphaBlend[rY] !== YY && (YY ? this._numTargetEnabled++ : this._numTargetEnabled--, this._alphaBlend[rY] = YY, this._isAlphaBlendDirty = !0)
      }
      setAlphaBlendConstants(YY, rY, DY, FY) {
        this._blendConstants[0] === YY && this._blendConstants[1] === rY && this._blendConstants[2] === DY && this._blendConstants[3] === FY || (this._blendConstants[0] = YY, this._blendConstants[1] = rY, this._blendConstants[2] = DY, this._blendConstants[3] = FY, this._isBlendConstantsDirty = !0)
      }
      setAlphaBlendFunctionParameters(YY, rY, DY, FY) {
        const AY = 4 * (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0);
        this._blendFunctionParameters[AY + 0] === YY && this._blendFunctionParameters[AY + 1] === rY && this._blendFunctionParameters[AY + 2] === DY && this._blendFunctionParameters[AY + 3] === FY || (this._blendFunctionParameters[AY + 0] = YY, this._blendFunctionParameters[AY + 1] = rY, this._blendFunctionParameters[AY + 2] = DY, this._blendFunctionParameters[AY + 3] = FY, this._isBlendFunctionParametersDirty = !0)
      }
      setAlphaEquationParameters(YY, rY) {
        const DY = 2 * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0);
        this._blendEquationParameters[DY + 0] === YY && this._blendEquationParameters[DY + 1] === rY || (this._blendEquationParameters[DY + 0] = YY, this._blendEquationParameters[DY + 1] = rY, this._isBlendEquationParametersDirty = !0)
      }
      reset() {
        this._alphaBlend.fill(!1), this._numTargetEnabled = 0, this._blendFunctionParameters.fill(null), this._blendEquationParameters.fill(null), this._blendConstants[0] = null, this._blendConstants[1] = null, this._blendConstants[2] = null, this._blendConstants[3] = null, this._isAlphaBlendDirty = !0, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._isBlendConstantsDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1
      }
      apply(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._numTargets !== rY && (this._numTargets = rY, this._isAlphaBlendDirty = !0), this._blendDisabledTargetsMask !== DY && (this._blendDisabledTargetsMask = DY, this._isAlphaBlendDirty = !0), !this.isDirty) return;
        if (this._isBlendConstantsDirty && (YY.blendColor(this._blendConstants[0], this._blendConstants[1], this._blendConstants[2], this._blendConstants[3]), this._isBlendConstantsDirty = !1), 1 === rY || !this._supportBlendParametersPerTarget) {
          if (this._isAlphaBlendDirty) {
            if (rY > 1 && 0 !== DY && this.alphaBlend) throw new Error("AlphaState: blending with integer MRT attachments requires per-target blend parameters");
            this._alphaBlend[0] && 0 === (1 & DY) ? YY.enable(YY.BLEND) : YY.disable(YY.BLEND), this._isAlphaBlendDirty = !1
          }
          return this._isBlendFunctionParametersDirty && (YY.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]), this._isBlendFunctionParametersDirty = !1), void(this._isBlendEquationParametersDirty && (YY.blendEquationSeparate(this._blendEquationParameters[0], this._blendEquationParameters[1]), this._isBlendEquationParametersDirty = !1))
        }
        const FY = YY;
        if (this._isAlphaBlendDirty) {
          for (let AY = 0; AY < rY; AY++) {
            const rY = AY < this._numTargetEnabled ? AY : 0;
            this._alphaBlend[rY] && 0 === (DY & 1 << AY) ? FY.enableIndexed(YY.BLEND, AY) : FY.disableIndexed(YY.BLEND, AY)
          }
          this._isAlphaBlendDirty = !1
        }
        if (this._isBlendFunctionParametersDirty) {
          for (let YY = 0; YY < rY; YY++) {
            const rY = YY < this._numTargetEnabled ? 4 * YY : 0;
            FY.blendFuncSeparateIndexed(YY, this._blendFunctionParameters[rY + 0], this._blendFunctionParameters[rY + 1], this._blendFunctionParameters[rY + 2], this._blendFunctionParameters[rY + 3])
          }
          this._isBlendFunctionParametersDirty = !1
        }
        if (this._isBlendEquationParametersDirty) {
          for (let YY = 0; YY < rY; YY++) {
            const rY = YY < this._numTargetEnabled ? 2 * YY : 0;
            FY.blendEquationSeparateIndexed(YY, this._blendEquationParameters[rY + 0], this._blendEquationParameters[rY + 1])
          }
          this._isBlendEquationParametersDirty = !1
        }
      }
      setAlphaMode(YY, rY) {
        let DY = 32774;
        switch (YY) {
          case 0:
            break;
          case 7:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 1, rY);
            break;
          case 8:
          case 14:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 771, rY);
            break;
          case 2:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 1, rY);
            break;
          case 6:
            this.setAlphaBlendFunctionParameters(1, 1, 0, 1, rY);
            break;
          case 1:
            this.setAlphaBlendFunctionParameters(770, 1, 0, 1, rY);
            break;
          case 3:
            this.setAlphaBlendFunctionParameters(0, 769, 1, 1, rY);
            break;
          case 4:
            this.setAlphaBlendFunctionParameters(774, 0, 1, 1, rY);
            break;
          case 5:
            this.setAlphaBlendFunctionParameters(770, 769, 1, 1, rY);
            break;
          case 9:
            this.setAlphaBlendFunctionParameters(32769, 32770, 32771, 32772, rY);
            break;
          case 10:
            this.setAlphaBlendFunctionParameters(1, 769, 1, 771, rY);
            break;
          case 11:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, rY);
            break;
          case 12:
            this.setAlphaBlendFunctionParameters(772, 1, 0, 0, rY);
            break;
          case 13:
            this.setAlphaBlendFunctionParameters(775, 769, 773, 771, rY);
            break;
          case 15:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 0, rY);
            break;
          case 16:
            this.setAlphaBlendFunctionParameters(775, 769, 0, 1, rY);
            break;
          case 17:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 771, rY);
            break;
          case 18:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, rY), DY = 32775;
            break;
          case 19:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, rY), DY = 32776;
            break;
          case 20:
            this.setAlphaBlendFunctionParameters(1, 35065, 0, 1, rY);
            break;
          case 21:
            this.setAlphaBlendFunctionParameters(1, 0, 1, 771, rY)
        }
        this.setAlphaEquationParameters(DY, DY, rY)
      }
    }
  },
  39316: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => FY
    });
    class FY {}
    FY._IsPickingAvailable = !1
  },
  39217: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => OD,
      g: () => ID
    });
    var FY = DY(39219),
      AY = DY(39037),
      IY = DY(39044),
      RY = DY(36552),
      OY = DY(39231);
    class gY {
      constructor() {
        this._count = 0, this._data = {}
      }
      brY(YY) {
        this.clear(), YY.forEach(((YY, rY) => this.add(YY, rY)))
      }
      get(YY) {
        const rY = this._data[YY];
        if (void 0 !== rY) return rY
      }
      getOrAddWithFactory(YY, rY) {
        let DY = this.get(YY);
        return void 0 !== DY || (DY = rY(YY), DY && this.add(YY, DY)), DY
      }
      getOrAdd(YY, rY) {
        const DY = this.get(YY);
        return void 0 !== DY ? DY : (this.add(YY, rY), rY)
      }
      contains(YY) {
        return void 0 !== this._data[YY]
      }
      add(YY, rY) {
        return void 0 === this._data[YY] && (this._data[YY] = rY, ++this._count, !0)
      }
      set(YY, rY) {
        return void 0 !== this._data[YY] && (this._data[YY] = rY, !0)
      }
      getAndRemove(YY) {
        const rY = this.get(YY);
        return void 0 !== rY ? (delete this._data[YY], --this._count, rY) : null
      }
      remove(YY) {
        return !!this.contains(YY) && (delete this._data[YY], --this._count, !0)
      }
      clear() {
        this._data = {}, this._count = 0
      }
      get count() {
        return this._count
      }
      forEach(YY) {
        for (const rY in this._data) {
          YY(rY, this._data[rY])
        }
      }
      first(YY) {
        for (const rY in this._data) {
          const DY = YY(rY, this._data[rY]);
          if (DY) return DY
        }
        return null
      }
    }
    var aY = DY(39149),
      vY = DY(36524),
      uY = DY(39234),
      sY = DY(39255),
      iY = DY(39261);
    class yY {
      constructor(YY, rY, DY, FY, AY, IY) {
        this.source = YY, this.pointerX = rY, this.pointerY = DY, this.meshUnderPointer = FY, this.sourceEvent = AY, this.additionalData = IY
      }
      static CreateNew(YY, rY, DY) {
        const FY = YY.hT();
        return new yY(YY, FY.pointerX, FY.pointerY, FY.meshUnderPointer || YY, rY, DY)
      }
      static CreateNewFromSprite(YY, rY, DY, FY) {
        return new yY(YY, rY.pointerX, rY.pointerY, rY.meshUnderPointer, DY, FY)
      }
      static CreateNewFromScene(YY, rY) {
        return new yY(null, YY.pointerX, YY.pointerY, YY.meshUnderPointer, rY)
      }
      static CreateNewFromPrimitive(YY, rY, DY, FY) {
        return new yY(YY, rY.x, rY.y, null, DY, FY)
      }
    }
    var QY = DY(39277),
      oY = DY(39286),
      WY = DY(39288),
      EY = DY(39296),
      mY = DY(39013),
      VY = DY(36546),
      SY = DY(39029),
      lY = DY(39301);
    class TY {
      constructor() {
        this.hoverCursor = "", this.actions = [], this.isRecursive = !1, this.disposeWhenUnowned = !0
      }
      static get HasTriggers() {
        for (const YY in TY.Triggers)
          if (Object.prototype.hasOwnProperty.call(TY.Triggers, YY)) return !0;
        return !1
      }
      static get HasPickTriggers() {
        for (const YY in TY.Triggers)
          if (Object.prototype.hasOwnProperty.call(TY.Triggers, YY)) {
            const rY = parseInt(YY);
            if (rY >= 1 && rY <= 7) return !0
          } return !1
      }
      static HasSpecificTrigger(YY) {
        for (const rY in TY.Triggers)
          if (Object.prototype.hasOwnProperty.call(TY.Triggers, rY)) {
            if (parseInt(rY) === YY) return !0
          } return !1
      }
    }
    TY.Triggers = {};
    var eY, NY, BY, cY, KY, HY, zY, ZY = DY(39306);
    ! function(YY) {
      YY[YY.Generic = 0] = "Generic", YY[YY.Keyboard = 1] = "Keyboard", YY[YY.Mouse = 2] = "Mouse", YY[YY.Touch = 3] = "Touch", YY[YY.DualShock = 4] = "DualShock", YY[YY.Xbox = 5] = "Xbox", YY[YY.Switch = 6] = "Switch", YY[YY.DualSense = 7] = "DualSense"
    }(eY || (eY = {})),
    function(YY) {
      YY[YY.Horizontal = 0] = "Horizontal", YY[YY.Vertical = 1] = "Vertical", YY[YY.LeftClick = 2] = "LeftClick", YY[YY.MiddleClick = 3] = "MiddleClick", YY[YY.RightClick = 4] = "RightClick", YY[YY.BrowserBack = 5] = "BrowserBack", YY[YY.BrowserForward = 6] = "BrowserForward", YY[YY.MouseWheelX = 7] = "MouseWheelX", YY[YY.MouseWheelY = 8] = "MouseWheelY", YY[YY.MouseWheelZ = 9] = "MouseWheelZ", YY[YY.Move = 12] = "Move"
    }(NY || (NY = {})),
    function(YY) {
      YY[YY.Horizontal = 0] = "Horizontal", YY[YY.Vertical = 1] = "Vertical", YY[YY.LeftClick = 2] = "LeftClick", YY[YY.MiddleClick = 3] = "MiddleClick", YY[YY.RightClick = 4] = "RightClick", YY[YY.BrowserBack = 5] = "BrowserBack", YY[YY.BrowserForward = 6] = "BrowserForward", YY[YY.MouseWheelX = 7] = "MouseWheelX", YY[YY.MouseWheelY = 8] = "MouseWheelY", YY[YY.MouseWheelZ = 9] = "MouseWheelZ", YY[YY.DeltaHorizontal = 10] = "DeltaHorizontal", YY[YY.DeltaVertical = 11] = "DeltaVertical"
    }(BY || (BY = {})),
    function(YY) {
      YY[YY.Cross = 0] = "Cross", YY[YY.Circle = 1] = "Circle", YY[YY.Square = 2] = "Square", YY[YY.Triangle = 3] = "Triangle", YY[YY.L1 = 4] = "L1", YY[YY.R1 = 5] = "R1", YY[YY.L2 = 6] = "L2", YY[YY.R2 = 7] = "R2", YY[YY.Share = 8] = "Share", YY[YY.Options = 9] = "Options", YY[YY.L3 = 10] = "L3", YY[YY.R3 = 11] = "R3", YY[YY.DPadUp = 12] = "DPadUp", YY[YY.DPadDown = 13] = "DPadDown", YY[YY.DPadLeft = 14] = "DPadLeft", YY[YY.DPadRight = 15] = "DPadRight", YY[YY.Home = 16] = "Home", YY[YY.TouchPad = 17] = "TouchPad", YY[YY.LStickXAxis = 18] = "LStickXAxis", YY[YY.LStickYAxis = 19] = "LStickYAxis", YY[YY.RStickXAxis = 20] = "RStickXAxis", YY[YY.RStickYAxis = 21] = "RStickYAxis"
    }(cY || (cY = {})),
    function(YY) {
      YY[YY.Cross = 0] = "Cross", YY[YY.Circle = 1] = "Circle", YY[YY.Square = 2] = "Square", YY[YY.Triangle = 3] = "Triangle", YY[YY.L1 = 4] = "L1", YY[YY.R1 = 5] = "R1", YY[YY.L2 = 6] = "L2", YY[YY.R2 = 7] = "R2", YY[YY.Create = 8] = "Create", YY[YY.Options = 9] = "Options", YY[YY.L3 = 10] = "L3", YY[YY.R3 = 11] = "R3", YY[YY.DPadUp = 12] = "DPadUp", YY[YY.DPadDown = 13] = "DPadDown", YY[YY.DPadLeft = 14] = "DPadLeft", YY[YY.DPadRight = 15] = "DPadRight", YY[YY.Home = 16] = "Home", YY[YY.TouchPad = 17] = "TouchPad", YY[YY.LStickXAxis = 18] = "LStickXAxis", YY[YY.LStickYAxis = 19] = "LStickYAxis", YY[YY.RStickXAxis = 20] = "RStickXAxis", YY[YY.RStickYAxis = 21] = "RStickYAxis"
    }(KY || (KY = {})),
    function(YY) {
      YY[YY.A = 0] = "A", YY[YY.B = 1] = "B", YY[YY.X = 2] = "X", YY[YY.Y = 3] = "Y", YY[YY.LB = 4] = "LB", YY[YY.RB = 5] = "RB", YY[YY.LT = 6] = "LT", YY[YY.RT = 7] = "RT", YY[YY.Back = 8] = "Back", YY[YY.Start = 9] = "Start", YY[YY.LS = 10] = "LS", YY[YY.RS = 11] = "RS", YY[YY.DPadUp = 12] = "DPadUp", YY[YY.DPadDown = 13] = "DPadDown", YY[YY.DPadLeft = 14] = "DPadLeft", YY[YY.DPadRight = 15] = "DPadRight", YY[YY.Home = 16] = "Home", YY[YY.LStickXAxis = 17] = "LStickXAxis", YY[YY.LStickYAxis = 18] = "LStickYAxis", YY[YY.RStickXAxis = 19] = "RStickXAxis", YY[YY.RStickYAxis = 20] = "RStickYAxis"
    }(HY || (HY = {})),
    function(YY) {
      YY[YY.B = 0] = "B", YY[YY.A = 1] = "A", YY[YY.Y = 2] = "Y", YY[YY.X = 3] = "X", YY[YY.L = 4] = "L", YY[YY.R = 5] = "R", YY[YY.ZL = 6] = "ZL", YY[YY.ZR = 7] = "ZR", YY[YY.Minus = 8] = "Minus", YY[YY.Plus = 9] = "Plus", YY[YY.LS = 10] = "LS", YY[YY.RS = 11] = "RS", YY[YY.DPadUp = 12] = "DPadUp", YY[YY.DPadDown = 13] = "DPadDown", YY[YY.DPadLeft = 14] = "DPadLeft", YY[YY.DPadRight = 15] = "DPadRight", YY[YY.Home = 16] = "Home", YY[YY.Capture = 17] = "Capture", YY[YY.LStickXAxis = 18] = "LStickXAxis", YY[YY.LStickYAxis = 19] = "LStickYAxis", YY[YY.RStickXAxis = 20] = "RStickXAxis", YY[YY.RStickYAxis = 21] = "RStickYAxis"
    }(zY || (zY = {}));
    var CY = DY(39309);
    class fY {
      static CreateDeviceEvent(YY, rY, DY, FY, AY, IY, RY) {
        switch (YY) {
          case eY.Keyboard:
            return this._CreateKeyboardEvent(DY, FY, AY, IY);
          case eY.Mouse:
            if (DY === NY.MouseWheelX || DY === NY.MouseWheelY || DY === NY.MouseWheelZ) return this._CreateWheelEvent(YY, rY, DY, FY, AY, IY);
          case eY.Touch:
            return this._CreatePointerEvent(YY, rY, DY, FY, AY, IY, RY);
          default:
            throw `Unable to generate event for device ${eY[YY]}`
        }
      }
      static _CreatePointerEvent(YY, rY, DY, FY, AY, IY, RY) {
        const OY = this._CreateMouseEvent(YY, rY, DY, FY, AY, IY);
        YY === eY.Mouse ? (OY.deviceType = eY.Mouse, OY.pointerId = 1, OY.pointerType = "mouse") : (OY.deviceType = eY.Touch, OY.pointerId = RY ?? rY, OY.pointerType = "touch");
        let gY = 0;
        return gY += AY.pollInput(YY, rY, NY.LeftClick), gY += 2 * AY.pollInput(YY, rY, NY.RightClick), gY += 4 * AY.pollInput(YY, rY, NY.MiddleClick), OY.buttons = gY, DY === NY.Move ? OY.type = "pointermove" : DY >= NY.LeftClick && DY <= NY.RightClick && (OY.type = 1 === FY ? "pointerdown" : "pointerup", OY.button = DY - 2), OY
      }
      static _CreateWheelEvent(YY, rY, DY, FY, AY, IY) {
        const RY = this._CreateMouseEvent(YY, rY, DY, FY, AY, IY);
        switch (RY.pointerId = 1, RY.type = "wheel", RY.deltaMode = CY.d.DOM_DELTA_PIXEL, RY.deltaX = 0, RY.deltaY = 0, RY.deltaZ = 0, DY) {
          case NY.MouseWheelX:
            RY.deltaX = FY;
            break;
          case NY.MouseWheelY:
            RY.deltaY = FY;
            break;
          case NY.MouseWheelZ:
            RY.deltaZ = FY
        }
        return RY
      }
      static _CreateMouseEvent(YY, rY, DY, FY, AY, IY) {
        const RY = this._CreateEvent(IY),
          OY = AY.pollInput(YY, rY, NY.Horizontal),
          gY = AY.pollInput(YY, rY, NY.Vertical);
        return IY ? (RY.movementX = 0, RY.movementY = 0, RY.offsetX = RY.movementX - IY.getBoundingClientRect().x, RY.offsetY = RY.movementY - IY.getBoundingClientRect().y) : (RY.movementX = AY.pollInput(YY, rY, 10), RY.movementY = AY.pollInput(YY, rY, 11), RY.offsetX = 0, RY.offsetY = 0), this._CheckNonCharacterKeys(RY, AY), RY.clientX = OY, RY.clientY = gY, RY.x = OY, RY.y = gY, RY.deviceType = YY, RY.deviceSlot = rY, RY.inputIndex = DY, RY
      }
      static _CreateKeyboardEvent(YY, rY, DY, FY) {
        const AY = this._CreateEvent(FY);
        return this._CheckNonCharacterKeys(AY, DY), AY.deviceType = eY.Keyboard, AY.deviceSlot = 0, AY.inputIndex = YY, AY.type = 1 === rY ? "keydown" : "keyup", AY.key = String.fromCharCode(YY), AY.keyCode = YY, AY
      }
      static _CheckNonCharacterKeys(YY, rY) {
        const DY = rY.isDeviceAvailable(eY.Keyboard),
          FY = DY && 1 === rY.pollInput(eY.Keyboard, 0, 18),
          AY = DY && 1 === rY.pollInput(eY.Keyboard, 0, 17),
          IY = DY && (1 === rY.pollInput(eY.Keyboard, 0, 91) || 1 === rY.pollInput(eY.Keyboard, 0, 92) || 1 === rY.pollInput(eY.Keyboard, 0, 93)),
          RY = DY && 1 === rY.pollInput(eY.Keyboard, 0, 16);
        YY.altKey = FY, YY.ctrlKey = AY, YY.metaKey = IY, YY.shiftKey = RY
      }
      static _CreateEvent(YY) {
        const rY = {
          preventDefault: () => {}
        };
        return rY.target = YY, rY
      }
    }
    class jY {
      constructor(YY, rY, DY) {
        this._nativeInput = _native.DeviceInputSystem ? new _native.DeviceInputSystem(YY, rY, ((YY, rY, FY, AY) => {
          const IY = fY.CreateDeviceEvent(YY, rY, FY, AY, this);
          DY(YY, rY, IY)
        })) : this._createDummyNativeInput()
      }
      pollInput(YY, rY, DY) {
        return this._nativeInput.pollInput(YY, rY, DY)
      }
      isDeviceAvailable(YY) {
        return YY === eY.Mouse || YY === eY.Touch
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
    const hY = Object.keys(NY).length / 2;
    class dY {
      constructor(YY, rY, DY, AY) {
        this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = FY.i.IsSafari(), this._usingMacOs = (0, mY.i)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = YY => {}, this._keyboardUpEvent = YY => {}, this._keyboardBlurEvent = YY => {}, this._pointerMoveEvent = YY => {}, this._pointerDownEvent = YY => {}, this._pointerUpEvent = YY => {}, this._pointerCancelEvent = YY => {}, this._pointerCancelTouch = YY => {}, this._pointerLeaveEvent = YY => {}, this._pointerWheelEvent = YY => {}, this._pointerBlurEvent = YY => {}, this._pointerMacOsChromeOutEvent = YY => {}, this._eventsAttached = !1, this._mouseId = -1, this._isUsingFirefox = (0, mY.i)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Firefox"), this._isUsingChromium = (0, mY.i)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Chrome"), this._maxTouchPoints = 0, this._pointerInputClearObserver = null, this._gamepadConnectedEvent = YY => {}, this._gamepadDisconnectedEvent = YY => {}, this._eventPrefix = FY.i.GetPointerPrefix(YY), this._engine = YY, this._onDeviceConnected = rY, this._onDeviceDisconnected = DY, this._onInputChanged = AY, this._mouseId = this._isUsingFirefox ? 0 : 1, this._enableEvents(), this._usingMacOs && (this._metaKeys = []), this._engine._onEngineViewChanged || (this._engine._onEngineViewChanged = () => {
          this._enableEvents()
        })
      }
      pollInput(YY, rY, DY) {
        const AY = this._inputs[YY][rY];
        if (!AY) throw `Unable to find device ${eY[YY]}`;
        YY >= eY.DualShock && YY <= eY.DualSense && this._updateDevice(YY, rY, DY);
        const IY = AY[DY];
        if (void 0 === IY) throw `Unable to find input ${DY} for device ${eY[YY]} in slot ${rY}`;
        return DY === NY.Move && FY.i.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), IY
      }
      isDeviceAvailable(YY) {
        return void 0 !== this._inputs[YY]
      }
      dispose() {
        this._onDeviceConnected = () => {}, this._onDeviceDisconnected = () => {}, this._onInputChanged = () => {}, delete this._engine._onEngineViewChanged, this._elementToAttachTo && this._disableEvents()
      }
      _enableEvents() {
        const YY = this?._engine.getInputElement();
        if (YY && (!this._eventsAttached || this._elementToAttachTo !== YY)) {
          if (this._disableEvents(), this._inputs)
            for (const YY of this._inputs)
              if (YY)
                for (const rY in YY) {
                  const DY = YY[+rY];
                  if (DY)
                    for (let YY = 0; YY < DY.length; YY++) DY[YY] = 0
                }
          this._elementToAttachTo = YY, this._elementToAttachTo.tabIndex = -1 !== this._elementToAttachTo.tabIndex ? this._elementToAttachTo.tabIndex : this._engine.canvasTabIndex, this._handleKeyActions(), this._handlePointerActions(), this._handleGamepadActions(), this._eventsAttached = !0, this._checkForConnectedDevices()
        }
      }
      _disableEvents() {
        this._elementToAttachTo && (this._elementToAttachTo.removeEventListener("blur", this._keyboardBlurEvent), this._elementToAttachTo.removeEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.removeEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.removeEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.removeEventListener(this._wheelEventName, this._pointerWheelEvent), this._usingMacOs && this._isUsingChromium && this._elementToAttachTo.removeEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent), window.removeEventListener("gamepadconnected", this._gamepadConnectedEvent), window.removeEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)), this._pointerInputClearObserver && this._engine.onEndFrameObservable.remove(this._pointerInputClearObserver), this._eventsAttached = !1
      }
      _checkForConnectedDevices() {
        if (navigator.getGamepads) {
          const YY = navigator.getGamepads();
          for (const rY of YY) rY && this._addGamePad(rY)
        }
        "function" === typeof matchMedia && matchMedia("(pointer:fine)").matches && this._addPointerDevice(eY.Mouse, 0, 0, 0)
      }
      _addGamePad(YY) {
        const rY = this._getGamepadDeviceType(YY.id),
          DY = YY.index;
        this._gamepads = this._gamepads || new Array(YY.index + 1), this._registerDevice(rY, DY, YY.buttons.length + YY.axes.length), this._gamepads[DY] = rY
      }
      _addPointerDevice(YY, rY, DY, FY) {
        this._pointerActive || (this._pointerActive = !0), this._registerDevice(YY, rY, hY);
        const AY = this._inputs[YY][rY];
        AY[0] = DY, AY[1] = FY
      }
      _registerDevice(YY, rY, DY) {
        if (void 0 === rY) throw `Unable to register device ${eY[YY]} to undefined slot.`;
        if (this._inputs[YY] || (this._inputs[YY] = {}), !this._inputs[YY][rY]) {
          const FY = new Array(DY);
          FY.fill(0), this._inputs[YY][rY] = FY, this._onDeviceConnected(YY, rY)
        }
      }
      _unregisterDevice(YY, rY) {
        this._inputs[YY][rY] && (delete this._inputs[YY][rY], this._onDeviceDisconnected(YY, rY))
      }
      _handleKeyActions() {
        this._keyboardDownEvent = YY => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(eY.Keyboard, 0, 255));
          const rY = this._inputs[eY.Keyboard][0];
          if (rY) {
            rY[YY.keyCode] = 1;
            const DY = YY;
            DY.inputIndex = YY.keyCode, this._usingMacOs && YY.metaKey && "Meta" !== YY.key && (this._metaKeys.includes(YY.keyCode) || this._metaKeys.push(YY.keyCode)), this._onInputChanged(eY.Keyboard, 0, DY)
          }
        }, this._keyboardUpEvent = YY => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(eY.Keyboard, 0, 255));
          const rY = this._inputs[eY.Keyboard][0];
          if (rY) {
            rY[YY.keyCode] = 0;
            const DY = YY;
            if (DY.inputIndex = YY.keyCode, this._usingMacOs && "Meta" === YY.key && this._metaKeys.length > 0) {
              for (const YY of this._metaKeys) {
                const DY = fY.CreateDeviceEvent(eY.Keyboard, 0, YY, 0, this, this._elementToAttachTo);
                rY[YY] = 0, this._onInputChanged(eY.Keyboard, 0, DY)
              }
              this._metaKeys.splice(0, this._metaKeys.length)
            }
            this._onInputChanged(eY.Keyboard, 0, DY)
          }
        }, this._keyboardBlurEvent = () => {
          if (this._keyboardActive) {
            const YY = this._inputs[eY.Keyboard][0];
            for (let rY = 0; rY < YY.length; rY++)
              if (0 !== YY[rY]) {
                YY[rY] = 0;
                const DY = fY.CreateDeviceEvent(eY.Keyboard, 0, rY, 0, this, this._elementToAttachTo);
                this._onInputChanged(eY.Keyboard, 0, DY)
              } this._usingMacOs && this._metaKeys.splice(0, this._metaKeys.length)
          }
        }, this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent)
      }
      _handlePointerActions() {
        this._maxTouchPoints = (0, mY.i)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
        for (let FY = 0; FY < this._maxTouchPoints; FY++) this._activeTouchIds[FY] = -1;
        this._pointerMoveEvent = YY => {
          const rY = this._getPointerType(YY);
          let DY = rY === eY.Mouse ? 0 : this._activeTouchIds.indexOf(YY.pointerId);
          if (rY === eY.Touch && -1 === DY) {
            if (0 === YY.buttons) return;
            const AY = this._activeTouchIds.indexOf(-1);
            if (!(AY >= 0)) return void FY.i.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            DY = AY, this._activeTouchIds[AY] = YY.pointerId, this._onDeviceConnected(rY, DY)
          }
          this._inputs[rY] || (this._inputs[rY] = {}), this._inputs[rY][DY] || this._addPointerDevice(rY, DY, YY.clientX, YY.clientY);
          const AY = this._inputs[rY][DY];
          if (AY) {
            const FY = YY;
            FY.inputIndex = NY.Move, AY[NY.Horizontal] = YY.clientX, AY[NY.Vertical] = YY.clientY, rY === eY.Touch && 0 === AY[NY.LeftClick] && (AY[NY.LeftClick] = 1), void 0 === YY.pointerId && (YY.pointerId = this._mouseId), this._onInputChanged(rY, DY, FY), this._usingSafari || -1 === YY.button || (FY.inputIndex = YY.button + 2, AY[YY.button + 2] = AY[YY.button + 2] ? 0 : 1, this._onInputChanged(rY, DY, FY))
          }
        }, this._pointerDownEvent = YY => {
          const rY = this._getPointerType(YY);
          let DY = rY === eY.Mouse ? 0 : YY.pointerId;
          if (rY === eY.Touch) {
            let rY = this._activeTouchIds.indexOf(YY.pointerId);
            if (-1 === rY && (rY = this._activeTouchIds.indexOf(-1)), !(rY >= 0)) return void FY.i.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            DY = rY, this._activeTouchIds[rY] = YY.pointerId
          }
          this._inputs[rY] || (this._inputs[rY] = {}), this._inputs[rY][DY] ? rY === eY.Touch && this._onDeviceConnected(rY, DY) : this._addPointerDevice(rY, DY, YY.clientX, YY.clientY);
          const AY = this._inputs[rY][DY];
          if (AY) {
            const FY = AY[NY.Horizontal],
              RY = AY[NY.Vertical];
            if (rY === eY.Mouse) {
              if (void 0 === YY.pointerId && (YY.pointerId = this._mouseId), !document.pointerLockElement) try {
                this._elementToAttachTo.setPointerCapture(this._mouseId)
              } catch (IY) {}
            } else if (YY.pointerId && !document.pointerLockElement) try {
              this._elementToAttachTo.setPointerCapture(YY.pointerId)
            } catch (IY) {}
            AY[NY.Horizontal] = YY.clientX, AY[NY.Vertical] = YY.clientY, AY[YY.button + 2] = 1;
            const OY = YY;
            OY.inputIndex = YY.button + 2, this._onInputChanged(rY, DY, OY), FY === YY.clientX && RY === YY.clientY || (OY.inputIndex = NY.Move, this._onInputChanged(rY, DY, OY))
          }
        }, this._pointerUpEvent = YY => {
          const rY = this._getPointerType(YY),
            DY = rY === eY.Mouse ? 0 : this._activeTouchIds.indexOf(YY.pointerId);
          if (rY === eY.Touch) {
            if (-1 === DY) return;
            this._activeTouchIds[DY] = -1
          }
          const FY = this._inputs[rY]?.[DY];
          let AY = YY.button,
            IY = FY && 0 !== FY[AY + 2];
          if (!IY && this._isUsingFirefox && this._usingMacOs && FY && (AY = 2 === AY ? 0 : 2, IY = 0 !== FY[AY + 2]), IY) {
            const IY = FY[NY.Horizontal],
              RY = FY[NY.Vertical];
            FY[NY.Horizontal] = YY.clientX, FY[NY.Vertical] = YY.clientY, FY[AY + 2] = 0;
            const OY = YY;
            void 0 === YY.pointerId && (YY.pointerId = this._mouseId), IY === YY.clientX && RY === YY.clientY || (OY.inputIndex = NY.Move, this._onInputChanged(rY, DY, OY)), OY.inputIndex = AY + 2, rY === eY.Mouse && this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) ? this._elementToAttachTo.releasePointerCapture(this._mouseId) : YY.pointerId && this._elementToAttachTo.hasPointerCapture?.(YY.pointerId) && this._elementToAttachTo.releasePointerCapture(YY.pointerId), this._onInputChanged(rY, DY, OY), rY === eY.Touch && this._onDeviceDisconnected(rY, DY)
          }
        }, this._pointerCancelTouch = YY => {
          const rY = this._activeTouchIds.indexOf(YY);
          if (-1 === rY) return;
          this._elementToAttachTo.hasPointerCapture?.(YY) && this._elementToAttachTo.releasePointerCapture(YY), this._inputs[eY.Touch][rY][NY.LeftClick] = 0;
          const DY = fY.CreateDeviceEvent(eY.Touch, rY, NY.LeftClick, 0, this, this._elementToAttachTo, YY);
          this._onInputChanged(eY.Touch, rY, DY), this._activeTouchIds[rY] = -1, this._onDeviceDisconnected(eY.Touch, rY)
        }, this._pointerCancelEvent = YY => {
          if ("mouse" === YY.pointerType) {
            const YY = this._inputs[eY.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let rY = NY.LeftClick; rY <= NY.BrowserForward; rY++)
              if (1 === YY[rY]) {
                YY[rY] = 0;
                const DY = fY.CreateDeviceEvent(eY.Mouse, 0, rY, 0, this, this._elementToAttachTo);
                this._onInputChanged(eY.Mouse, 0, DY)
              }
          } else this._pointerCancelTouch(YY.pointerId)
        }, this._pointerLeaveEvent = YY => {
          "pen" === YY.pointerType && this._pointerCancelTouch(YY.pointerId)
        }, this._wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        let YY = !1;
        const rY = function() {};
        try {
          const DY = Object.defineProperty({}, "passive", {
            get: function() {
              YY = !0
            }
          });
          this._elementToAttachTo.addEventListener("test", rY, DY), this._elementToAttachTo.removeEventListener("test", rY, DY)
        } catch (DY) {}
        this._pointerBlurEvent = () => {
          if (this.isDeviceAvailable(eY.Mouse)) {
            const YY = this._inputs[eY.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let rY = NY.LeftClick; rY <= NY.BrowserForward; rY++)
              if (1 === YY[rY]) {
                YY[rY] = 0;
                const DY = fY.CreateDeviceEvent(eY.Mouse, 0, rY, 0, this, this._elementToAttachTo);
                this._onInputChanged(eY.Mouse, 0, DY)
              }
          }
          if (this.isDeviceAvailable(eY.Touch)) {
            const YY = this._inputs[eY.Touch];
            for (let rY = 0; rY < this._activeTouchIds.length; rY++) {
              const DY = this._activeTouchIds[rY];
              if (this._elementToAttachTo.hasPointerCapture?.(DY) && this._elementToAttachTo.releasePointerCapture(DY), -1 !== DY && 1 === YY[rY]?.[NY.LeftClick]) {
                YY[rY][NY.LeftClick] = 0;
                const FY = fY.CreateDeviceEvent(eY.Touch, rY, NY.LeftClick, 0, this, this._elementToAttachTo, DY);
                this._onInputChanged(eY.Touch, rY, FY), this._activeTouchIds[rY] = -1, this._onDeviceDisconnected(eY.Touch, rY)
              }
            }
          }
        }, this._pointerWheelEvent = YY => {
          const rY = eY.Mouse;
          this._inputs[rY] || (this._inputs[rY] = []), this._inputs[rY][0] || (this._pointerActive = !0, this._registerDevice(rY, 0, hY));
          const DY = this._inputs[rY][0];
          if (DY) {
            DY[NY.MouseWheelX] = YY.deltaX || 0, DY[NY.MouseWheelY] = YY.deltaY || YY.wheelDelta || 0, DY[NY.MouseWheelZ] = YY.deltaZ || 0;
            const FY = YY;
            void 0 === YY.pointerId && (YY.pointerId = this._mouseId), 0 !== DY[NY.MouseWheelX] && (FY.inputIndex = NY.MouseWheelX, this._onInputChanged(rY, 0, FY)), 0 !== DY[NY.MouseWheelY] && (FY.inputIndex = NY.MouseWheelY, this._onInputChanged(rY, 0, FY)), 0 !== DY[NY.MouseWheelZ] && (FY.inputIndex = NY.MouseWheelZ, this._onInputChanged(rY, 0, FY))
          }
        }, this._usingMacOs && this._isUsingChromium && (this._pointerMacOsChromeOutEvent = YY => {
          YY.buttons > 1 && this._pointerCancelEvent(YY)
        }, this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent)), this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.addEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.addEventListener(this._wheelEventName, this._pointerWheelEvent, !!YY && {
          passive: !1
        }), this._pointerInputClearObserver = this._engine.onEndFrameObservable.add((() => {
          if (this.isDeviceAvailable(eY.Mouse)) {
            const YY = this._inputs[eY.Mouse][0];
            YY[NY.MouseWheelX] = 0, YY[NY.MouseWheelY] = 0, YY[NY.MouseWheelZ] = 0
          }
        }))
      }
      _handleGamepadActions() {
        this._gamepadConnectedEvent = YY => {
          this._addGamePad(YY.gamepad)
        }, this._gamepadDisconnectedEvent = YY => {
          if (this._gamepads) {
            const rY = this._getGamepadDeviceType(YY.gamepad.id),
              DY = YY.gamepad.index;
            this._unregisterDevice(rY, DY), delete this._gamepads[DY]
          }
        }, window.addEventListener("gamepadconnected", this._gamepadConnectedEvent), window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)
      }
      _updateDevice(YY, rY, DY) {
        const FY = navigator.getGamepads()[rY];
        if (FY && YY === this._gamepads[rY]) {
          const AY = this._inputs[YY][rY];
          DY >= FY.buttons.length ? AY[DY] = FY.axes[DY - FY.buttons.length].valueOf() : AY[DY] = FY.buttons[DY].value
        }
      }
      _getGamepadDeviceType(YY) {
        return -1 !== YY.indexOf("054c") ? -1 !== YY.indexOf("0ce6") ? eY.DualSense : eY.DualShock : -1 !== YY.indexOf("Xbox One") || -1 !== YY.search("Xbox 360") || -1 !== YY.search("xinput") || -1 !== YY.indexOf("045e") && -1 === YY.indexOf("Surface Dock") ? eY.Xbox : -1 !== YY.indexOf("057e") ? eY.Switch : eY.Generic
      }
      _getPointerType(YY) {
        let rY = eY.Mouse;
        return ("touch" === YY.pointerType || "pen" === YY.pointerType || YY.touches) && (rY = eY.Touch), rY
      }
    }
    class JY {
      constructor(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.deviceType = rY, this.deviceSlot = DY, this.onInputChangedObservable = new RY.e, this._deviceInputSystem = YY
      }
      getInput(YY) {
        return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, YY)
      }
    }
    class MY {
      constructor(YY) {
        this._registeredManagers = new Array, this._refCount = 0, this.registerManager = YY => {
          for (let rY = 0; rY < this._devices.length; rY++) {
            const DY = this._devices[rY];
            for (const FY in DY) {
              const DY = +FY;
              YY._addDevice(new JY(this._deviceInputSystem, rY, DY))
            }
          }
          this._registeredManagers.push(YY)
        }, this.unregisterManager = YY => {
          const rY = this._registeredManagers.indexOf(YY);
          rY > -1 && this._registeredManagers.splice(rY, 1)
        };
        const rY = Object.keys(eY).length / 2;
        this._devices = new Array(rY);
        const DY = (YY, rY) => {
            this._devices[YY] || (this._devices[YY] = new Array), this._devices[YY][rY] || (this._devices[YY][rY] = rY);
            for (const DY of this._registeredManagers) {
              const FY = new JY(this._deviceInputSystem, YY, rY);
              DY._addDevice(FY)
            }
          },
          FY = (YY, rY) => {
            this._devices[YY]?.[rY] && delete this._devices[YY][rY];
            for (const DY of this._registeredManagers) DY._removeDevice(YY, rY)
          },
          AY = (YY, rY, DY) => {
            if (DY)
              for (const FY of this._registeredManagers) FY._onInputChanged(YY, rY, DY)
          };
        "undefined" !== typeof _native ? this._deviceInputSystem = new jY(DY, FY, AY) : this._deviceInputSystem = new dY(YY, DY, FY, AY)
      }
      dispose() {
        this._deviceInputSystem.dispose()
      }
    }
    class wY {
      getDeviceSource(YY, rY) {
        if (void 0 === rY) {
          if (void 0 === this._firstDevice[YY]) return null;
          rY = this._firstDevice[YY]
        }
        return this._devices[YY] && void 0 !== this._devices[YY][rY] ? this._devices[YY][rY] : null
      }
      getDeviceSources(YY) {
        return this._devices[YY] ? this._devices[YY].filter((YY => !!YY)) : []
      }
      constructor(YY) {
        const rY = Object.keys(eY).length / 2;
        this._devices = new Array(rY), this._firstDevice = new Array(rY), this._engine = YY, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new MY(YY)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new RY.e((YY => {
          for (const rY of this._devices)
            if (rY)
              for (const DY of rY) DY && this.onDeviceConnectedObservable.notifyObserver(YY, DY)
        })), this.onDeviceDisconnectedObservable = new RY.e, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = YY.wT.add((() => {
          this.dispose()
        }))
      }
      dispose() {
        this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager.dispose(), delete this._engine._deviceSourceManager)), this._engine.wT.remove(this._onDisposeObserver)
      }
      _addDevice(YY) {
        this._devices[YY.deviceType] || (this._devices[YY.deviceType] = []), this._devices[YY.deviceType][YY.deviceSlot] || (this._devices[YY.deviceType][YY.deviceSlot] = YY, this._updateFirstDevices(YY.deviceType)), this.onDeviceConnectedObservable.notifyObservers(YY)
      }
      _removeDevice(YY, rY) {
        const DY = this._devices[YY]?.[rY];
        this.onDeviceDisconnectedObservable.notifyObservers(DY), this._devices[YY]?.[rY] && delete this._devices[YY][rY], this._updateFirstDevices(YY)
      }
      _onInputChanged(YY, rY, DY) {
        this._devices[YY]?.[rY]?.onInputChangedObservable.notifyObservers(DY)
      }
      _updateFirstDevices(YY) {
        switch (YY) {
          case eY.Keyboard:
          case eY.Mouse:
            this._firstDevice[YY] = 0;
            break;
          case eY.Touch:
          case eY.DualSense:
          case eY.DualShock:
          case eY.Xbox:
          case eY.Switch:
          case eY.Generic: {
            delete this._firstDevice[YY];
            const rY = this._devices[YY];
            if (rY)
              for (let DY = 0; DY < rY.length; DY++)
                if (rY[DY]) {
                  this._firstDevice[YY] = DY;
                  break
                } break
          }
        }
      }
    }
    var bY = DY(39316);
    class XY {
      constructor() {
        this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1
      }
      get singleClick() {
        return this._singleClick
      }
      get iR() {
        return this._doubleClick
      }
      get hasSwiped() {
        return this._hasSwiped
      }
      get ignore() {
        return this._ignore
      }
      set singleClick(YY) {
        this._singleClick = YY
      }
      set iR(YY) {
        this._doubleClick = YY
      }
      set hasSwiped(YY) {
        this._hasSwiped = YY
      }
      set ignore(YY) {
        this._ignore = YY
      }
    }
    class qY {
      constructor(YY) {
        this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1, this._skipPointerTap = !1, this._isMultiTouchGesture = !1, this._pointerX = 0, this._pointerY = 0, this._startingPointerPosition = new vY.q(0, 0), this._previousStartingPointerPosition = new vY.q(0, 0), this._startingPointerTime = 0, this._previousStartingPointerTime = 0, this._pointerCaptures = {}, this._meshUnderPointerId = {}, this._movePointerInfo = null, this._latestPointerMoveEvents = new Map, this._cameraObserverCount = 0, this._delayedClicks = [null, null, null, null, null], this._deviceSourceManager = null, this._scene = YY || VY.d.LastCreatedScene, this._scene
      }
      get meshUnderPointer() {
        return this._movePointerInfo && (this._movePointerInfo._generatePickInfo(), this._movePointerInfo = null), this._pointerOverMesh
      }
      getMeshUnderPointerByPointerId(YY) {
        return this._meshUnderPointerId[YY] || null
      }
      get unTranslatedPointer() {
        return new vY.q(this._unTranslatedPointerX, this._unTranslatedPointerY)
      }
      get pointerX() {
        return this._pointerX
      }
      set pointerX(YY) {
        this._pointerX = YY
      }
      get pointerY() {
        return this._pointerY
      }
      set pointerY(YY) {
        this._pointerY = YY
      }
      _updatePointerPosition(YY) {
        const rY = this._scene.ky().getInputElementClientRect();
        rY && (this._pointerX = YY.clientX - rY.left, this._pointerY = YY.clientY - rY.top, this._unTranslatedPointerX = this._pointerX, this._unTranslatedPointerY = this._pointerY)
      }
      _processPointerMove(YY, rY) {
        const DY = this._scene,
          FY = DY.ky(),
          AY = FY.getInputElement();
        AY && (AY.tabIndex = FY.canvasTabIndex, DY.doNotHandleCursors || (AY.style.cursor = DY.defaultCursor)), this._setCursorAndPointerOverMesh(YY, rY, DY);
        for (const OY of DY._pointerMoveStage) {
          YY = YY || this._pickMove(rY);
          const DY = !!YY?.pickedMesh;
          YY = OY.action(this._unTranslatedPointerX, this._unTranslatedPointerY, YY, DY, AY)
        }
        const IY = rY.inputIndex >= NY.MouseWheelX && rY.inputIndex <= NY.MouseWheelZ ? lY.d.POINTERWHEEL : lY.d.POINTERMOVE;
        let RY;
        DY.onPointerMove && (YY = YY || this._pickMove(rY), DY.onPointerMove(rY, YY, IY)), YY ? (RY = new lY.l(IY, rY, YY), this._setRayOnPointerInfo(YY, rY)) : (RY = new lY.l(IY, rY, null, this), this._movePointerInfo = RY), DY.onPointerObservable.hasObservers() && DY.onPointerObservable.notifyObservers(RY, IY)
      }
      _setRayOnPointerInfo(YY, rY) {
        const DY = this._scene;
        YY && bY.b._IsPickingAvailable && (YY.ray || (YY.ray = DY.createPickingRay(rY.offsetX, rY.offsetY, vY.e.Identity(), DY.activeCamera)))
      }
      _addCameraPointerObserver(YY, rY) {
        return this._cameraObserverCount++, this._scene.onPointerObservable.add(YY, rY)
      }
      _removeCameraPointerObserver(YY) {
        return this._cameraObserverCount--, this._scene.onPointerObservable.remove(YY)
      }
      _checkForPicking() {
        return !!(this._scene.onPointerObservable.observers.length > this._cameraObserverCount || this._scene.onPointerPick)
      }
      _checkPrePointerObservable(YY, rY, DY) {
        const FY = this._scene,
          AY = new lY.h(DY, rY, this._unTranslatedPointerX, this._unTranslatedPointerY);
        return YY && (AY.originalPickingInfo = YY, AY.ray = YY.ray, "xr-near" === rY.pointerType && YY.originMesh && (AY.nearInteractionPickingInfo = YY)), FY.onPrePointerObservable.notifyObservers(AY, DY), !!AY.skipOnPointerObservable
      }
      _pickMove(YY) {
        const rY = this._scene,
          DY = rY.Ps(this._unTranslatedPointerX, this._unTranslatedPointerY, rY.pointerMovePredicate, rY.pointerMoveFastCheck, rY.cameraToUseForPointers, rY.pointerMoveTrianglePredicate);
        return this._setCursorAndPointerOverMesh(DY, YY, rY), DY
      }
      _updateMeshUnderPointer() {
        const YY = this._scene;
        if (!YY.constantlyUpdateMeshUnderPointer || 0 === this._latestPointerMoveEvents.size || YY.skipPointerMovePicking || !YY.cameraToUseForPointers && !YY.activeCamera) return;
        this._ensurePointerMovePredicate();
        const rY = this._pointerX,
          DY = this._pointerY,
          FY = this._unTranslatedPointerX,
          AY = this._unTranslatedPointerY;
        for (const IY of this._latestPointerMoveEvents.values()) this._pointerX = IY.pointerX, this._pointerY = IY.pointerY, this._unTranslatedPointerX = IY.unTranslatedPointerX, this._unTranslatedPointerY = IY.unTranslatedPointerY, this._pickMove(IY.event);
        this._pointerX = rY, this._pointerY = DY, this._unTranslatedPointerX = FY, this._unTranslatedPointerY = AY
      }
      _ensurePointerMovePredicate() {
        const YY = this._scene;
        YY.pointerMovePredicate || (YY.pointerMovePredicate = rY => (rY._isPointerMovePickable ?? rY.Yo) && rY.isVisible && rY.isReady() && rY.isEnabled() && (rY.enablePointerMoveEvents || YY.constantlyUpdateMeshUnderPointer || null !== rY._getActionManagerForTrigger()) && (!YY.cameraToUseForPointers || 0 !== (YY.cameraToUseForPointers.layerMask & rY.layerMask)))
      }
      _setCursorAndPointerOverMesh(YY, rY, DY) {
        const FY = DY.ky().getInputElement();
        if (YY?.pickedMesh) {
          if (this.setPointerOverMesh(YY.pickedMesh, rY.pointerId, YY, rY), !DY.doNotHandleCursors && FY && this._pointerOverMesh) {
            const YY = this._pointerOverMesh._getActionManagerForTrigger();
            YY && YY.hasPointerTriggers && (FY.style.cursor = YY.hoverCursor || DY.hoverCursor)
          }
        } else this.setPointerOverMesh(null, rY.pointerId, YY, rY)
      }
      simulatePointerMove(YY, rY) {
        const DY = new PointerEvent("pointermove", rY);
        DY.inputIndex = NY.Move, this._checkPrePointerObservable(YY, DY, lY.d.POINTERMOVE) || this._processPointerMove(YY, DY)
      }
      simulatePointerDown(YY, rY) {
        const DY = new PointerEvent("pointerdown", rY);
        DY.inputIndex = DY.button + 2, this._checkPrePointerObservable(YY, DY, lY.d.POINTERDOWN) || this._processPointerDown(YY, DY)
      }
      _processPointerDown(YY, rY) {
        const DY = this._scene;
        if (YY?.pickedMesh) {
          this._pickedDownMesh = YY.pickedMesh;
          const FY = YY.pickedMesh._getActionManagerForTrigger();
          if (FY) {
            if (FY.hasPickTriggers) switch (FY.processTrigger(5, new yY(YY.pickedMesh, DY.pointerX, DY.pointerY, YY.pickedMesh, rY, YY)), rY.button) {
              case 0:
                FY.processTrigger(2, new yY(YY.pickedMesh, DY.pointerX, DY.pointerY, YY.pickedMesh, rY, YY));
                break;
              case 1:
                FY.processTrigger(4, new yY(YY.pickedMesh, DY.pointerX, DY.pointerY, YY.pickedMesh, rY, YY));
                break;
              case 2:
                FY.processTrigger(3, new yY(YY.pickedMesh, DY.pointerX, DY.pointerY, YY.pickedMesh, rY, YY))
            }
            FY.hasSpecificTrigger(8) && window.setTimeout((() => {
              const YY = DY.Ps(this._unTranslatedPointerX, this._unTranslatedPointerY, (YY => YY.Yo && YY.isVisible && YY.isReady() && YY.actionManager && YY.actionManager.hasSpecificTrigger(8) && YY === this._pickedDownMesh), !1, DY.cameraToUseForPointers);
              YY?.pickedMesh && FY && 0 !== this._activePointerIdsCount && Date.now() - this._startingPointerTime > qY.LongPressDelay && !this._isPointerSwiping() && (this._startingPointerTime = 0, FY.processTrigger(8, yY.CreateNew(YY.pickedMesh, rY)))
            }), qY.LongPressDelay)
          }
        } else
          for (const IY of DY._pointerDownStage) YY = IY.action(this._unTranslatedPointerX, this._unTranslatedPointerY, YY, rY, !1);
        let FY;
        const AY = lY.d.POINTERDOWN;
        YY ? (DY.onPointerDown && DY.onPointerDown(rY, YY, AY), FY = new lY.l(AY, rY, YY), this._setRayOnPointerInfo(YY, rY)) : FY = new lY.l(AY, rY, null, this), DY.onPointerObservable.hasObservers() && DY.onPointerObservable.notifyObservers(FY, AY)
      }
      _isPointerSwiping() {
        return this._isSwiping
      }
      simulatePointerUp(YY, rY, DY) {
        const FY = new PointerEvent("pointerup", rY);
        FY.inputIndex = NY.Move;
        const AY = new XY;
        DY ? AY.iR = !0 : AY.singleClick = !0, this._checkPrePointerObservable(YY, FY, lY.d.POINTERUP) || this._processPointerUp(YY, FY, AY)
      }
      _processPointerUp(YY, rY, DY) {
        const FY = this._scene;
        if (YY?.pickedMesh) {
          if (this._pickedUpMesh = YY.pickedMesh, this._pickedDownMesh === this._pickedUpMesh && (FY.onPointerPick && FY.onPointerPick(rY, YY), DY.singleClick && !DY.ignore && FY.onPointerObservable.observers.length > this._cameraObserverCount)) {
            const DY = lY.d.POINTERPICK,
              AY = new lY.l(DY, rY, YY);
            this._setRayOnPointerInfo(YY, rY), FY.onPointerObservable.notifyObservers(AY, DY)
          }
          const AY = YY.pickedMesh._getActionManagerForTrigger();
          if (AY && !DY.ignore) {
            AY.processTrigger(7, yY.CreateNew(YY.pickedMesh, rY, YY)), !DY.hasSwiped && DY.singleClick && AY.processTrigger(1, yY.CreateNew(YY.pickedMesh, rY, YY));
            const FY = YY.pickedMesh._getActionManagerForTrigger(6);
            DY.iR && FY && FY.processTrigger(6, yY.CreateNew(YY.pickedMesh, rY, YY))
          }
        } else if (!DY.ignore)
          for (const AY of FY._pointerUpStage) YY = AY.action(this._unTranslatedPointerX, this._unTranslatedPointerY, YY, rY, DY.iR);
        if (this._pickedDownMesh && this._pickedDownMesh !== this._pickedUpMesh) {
          const YY = this._pickedDownMesh._getActionManagerForTrigger(16);
          YY && YY.processTrigger(16, yY.CreateNew(this._pickedDownMesh, rY))
        }
        if (!DY.ignore) {
          const AY = new lY.l(lY.d.POINTERUP, rY, YY);
          if (this._setRayOnPointerInfo(YY, rY), FY.onPointerObservable.notifyObservers(AY, lY.d.POINTERUP), FY.onPointerUp && FY.onPointerUp(rY, YY, lY.d.POINTERUP), !DY.hasSwiped && !this._skipPointerTap && !this._isMultiTouchGesture) {
            let AY = 0;
            if (DY.singleClick ? AY = lY.d.POINTERTAP : DY.iR && (AY = lY.d.POINTERDOUBLETAP), AY) {
              const DY = new lY.l(AY, rY, YY);
              FY.onPointerObservable.hasObservers() && FY.onPointerObservable.hasSpecificMask(AY) && FY.onPointerObservable.notifyObservers(DY, AY)
            }
          }
        }
      }
      isPointerCaptured() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._pointerCaptures[YY]
      }
      attachControl() {
        let YY = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          DY = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const AY = this._scene,
          IY = AY.ky();
        FY || (FY = IY.getInputElement()), this._alreadyAttached && this.detachControl(), FY && (this._alreadyAttachedTo = FY), this._deviceSourceManager = new wY(IY), this._initActionManager = YY => {
          if (!this._meshPickProceed) {
            const rY = AY.skipPointerUpPicking || 0 === AY._registeredActions && !this._checkForPicking() && !AY.onPointerUp ? null : AY.Ps(this._unTranslatedPointerX, this._unTranslatedPointerY, AY.pointerUpPredicate, AY.pointerUpFastCheck, AY.cameraToUseForPointers, AY.pointerUpTrianglePredicate);
            this._currentPickResult = rY, rY && (YY = rY.hit && rY.pickedMesh ? rY.pickedMesh._getActionManagerForTrigger() : null), this._meshPickProceed = !0
          }
          return YY
        }, this._delayedSimpleClick = (YY, rY, DY) => {
          if ((Date.now() - this._previousStartingPointerTime > qY.DoubleClickDelay && !this._doubleClickOccured || YY !== this._previousButtonPressed) && (this._doubleClickOccured = !1, rY.singleClick = !0, rY.ignore = !1, this._delayedClicks[YY])) {
            const rY = this._delayedClicks[YY].evt,
              DY = lY.d.POINTERTAP,
              FY = new lY.l(DY, rY, this._currentPickResult);
            AY.onPointerObservable.hasObservers() && AY.onPointerObservable.hasSpecificMask(DY) && AY.onPointerObservable.notifyObservers(FY, DY), this._delayedClicks[YY] = null
          }
        }, this._initClickEvent = (YY, rY, DY, FY) => {
          const AY = new XY;
          this._currentPickResult = null;
          let IY = null,
            RY = YY.hasSpecificMask(lY.d.POINTERPICK) || rY.hasSpecificMask(lY.d.POINTERPICK) || YY.hasSpecificMask(lY.d.POINTERTAP) || rY.hasSpecificMask(lY.d.POINTERTAP) || YY.hasSpecificMask(lY.d.POINTERDOUBLETAP) || rY.hasSpecificMask(lY.d.POINTERDOUBLETAP);
          !RY && TY && (IY = this._initActionManager(IY, AY), IY && (RY = IY.hasPickTriggers));
          let OY = !1;
          if (RY = RY && !this._isMultiTouchGesture, RY) {
            const RY = DY.button;
            if (AY.hasSwiped = this._isPointerSwiping(), !AY.hasSwiped) {
              let gY = !qY.ExclusiveDoubleClickMode;
              if (gY || (gY = !YY.hasSpecificMask(lY.d.POINTERDOUBLETAP) && !rY.hasSpecificMask(lY.d.POINTERDOUBLETAP), gY && !TY.HasSpecificTrigger(6) && (IY = this._initActionManager(IY, AY), IY && (gY = !IY.hasSpecificTrigger(6)))), gY)(Date.now() - this._previousStartingPointerTime > qY.DoubleClickDelay || RY !== this._previousButtonPressed) && (AY.singleClick = !0, FY(AY, this._currentPickResult), OY = !0);
              else {
                const YY = {
                  evt: DY,
                  clickInfo: AY,
                  timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, RY, AY, FY), qY.DoubleClickDelay)
                };
                this._delayedClicks[RY] = YY
              }
              let aY = YY.hasSpecificMask(lY.d.POINTERDOUBLETAP) || rY.hasSpecificMask(lY.d.POINTERDOUBLETAP);
              !aY && TY.HasSpecificTrigger(6) && (IY = this._initActionManager(IY, AY), IY && (aY = IY.hasSpecificTrigger(6))), aY && (RY === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < qY.DoubleClickDelay && !this._doubleClickOccured ? (AY.hasSwiped || this._isPointerSwiping() ? (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = RY, qY.ExclusiveDoubleClickMode ? (this._delayedClicks[RY] && (clearTimeout(this._delayedClicks[RY]?.timeoutId), this._delayedClicks[RY] = null), FY(AY, this._previousPickResult)) : FY(AY, this._currentPickResult)) : (this._previousStartingPointerTime = 0, this._doubleClickOccured = !0, AY.iR = !0, AY.ignore = !1, qY.ExclusiveDoubleClickMode && this._delayedClicks[RY] && (clearTimeout(this._delayedClicks[RY]?.timeoutId), this._delayedClicks[RY] = null), FY(AY, this._currentPickResult)), OY = !0) : (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = RY))
            }
          }
          OY || FY(AY, this._currentPickResult)
        }, this._onPointerMove = YY => {
          if (this._updatePointerPosition(YY), this._latestPointerMoveEvents.set(YY.pointerId, {
              event: YY,
              pointerX: this._pointerX,
              pointerY: this._pointerY,
              unTranslatedPointerX: this._unTranslatedPointerX,
              unTranslatedPointerY: this._unTranslatedPointerY
            }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > qY.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > qY.DragMovementThreshold), IY.isPointerLock && IY._verifyPointerLock(), this._checkPrePointerObservable(null, YY, YY.inputIndex >= NY.MouseWheelX && YY.inputIndex <= NY.MouseWheelZ ? lY.d.POINTERWHEEL : lY.d.POINTERMOVE)) return;
          if (!AY.cameraToUseForPointers && !AY.activeCamera) return;
          if (AY.skipPointerMovePicking) return void this._processPointerMove(new iY.c, YY);
          this._ensurePointerMovePredicate();
          const rY = AY._registeredActions > 0 || AY.constantlyUpdateMeshUnderPointer ? this._pickMove(YY) : null;
          this._processPointerMove(rY, YY)
        }, this._onPointerDown = YY => {
          const rY = this._activePointerIds.indexOf(-1);
          if (-1 === rY ? this._activePointerIds.push(YY.pointerId) : this._activePointerIds[rY] = YY.pointerId, this._activePointerIdsCount++, this._pickedDownMesh = null, this._meshPickProceed = !1, qY.ExclusiveDoubleClickMode)
            for (let FY = 0; FY < this._delayedClicks.length; FY++)
              if (this._delayedClicks[FY])
                if (YY.button === FY) clearTimeout(this._delayedClicks[FY]?.timeoutId);
                else {
                  const YY = this._delayedClicks[FY].clickInfo;
                  this._doubleClickOccured = !1, YY.singleClick = !0, YY.ignore = !1;
                  const rY = this._delayedClicks[FY].evt,
                    DY = lY.d.POINTERTAP,
                    IY = new lY.l(DY, rY, this._currentPickResult);
                  AY.onPointerObservable.hasObservers() && AY.onPointerObservable.hasSpecificMask(DY) && AY.onPointerObservable.notifyObservers(IY, DY), this._delayedClicks[FY] = null
                } if (this._updatePointerPosition(YY), -1 === this._swipeButtonPressed && (this._swipeButtonPressed = YY.button), AY.preventDefaultOnPointerDown && FY && (YY.preventDefault(), FY.focus()), this._startingPointerPosition.x = this._pointerX, this._startingPointerPosition.y = this._pointerY, this._startingPointerTime = Date.now(), this._checkPrePointerObservable(null, YY, lY.d.POINTERDOWN)) return;
          if (!AY.cameraToUseForPointers && !AY.activeCamera) return;
          let DY;
          this._pointerCaptures[YY.pointerId] = !0, AY.pointerDownPredicate || (AY.pointerDownPredicate = YY => YY.Yo && YY.isVisible && YY.isReady() && YY.isEnabled() && (!AY.cameraToUseForPointers || 0 !== (AY.cameraToUseForPointers.layerMask & YY.layerMask))), this._pickedDownMesh = null, DY = AY.skipPointerDownPicking || 0 === AY._registeredActions && !this._checkForPicking() && !AY.onPointerDown ? new iY.c : AY.Ps(this._unTranslatedPointerX, this._unTranslatedPointerY, AY.pointerDownPredicate, AY.pointerDownFastCheck, AY.cameraToUseForPointers, AY.pointerDownTrianglePredicate), this._processPointerDown(DY, YY)
        }, this._onPointerUp = YY => {
          const rY = this._activePointerIds.indexOf(YY.pointerId); - 1 !== rY && (this._activePointerIds[rY] = -1, this._activePointerIdsCount--, "touch" === YY.pointerType && this._latestPointerMoveEvents.delete(YY.pointerId), this._pickedUpMesh = null, this._meshPickProceed = !1, this._updatePointerPosition(YY), AY.preventDefaultOnPointerUp && FY && (YY.preventDefault(), FY.focus()), this._initClickEvent(AY.onPrePointerObservable, AY.onPointerObservable, YY, ((rY, DY) => {
            if (AY.onPrePointerObservable.hasObservers() && (this._skipPointerTap = !1, !rY.ignore)) {
              if (this._checkPrePointerObservable(null, YY, lY.d.POINTERUP)) return this._swipeButtonPressed === YY.button && (this._isSwiping = !1, this._swipeButtonPressed = -1), void(0 === YY.buttons && (this._pointerCaptures[YY.pointerId] = !1));
              rY.hasSwiped || (rY.singleClick && AY.onPrePointerObservable.hasSpecificMask(lY.d.POINTERTAP) && this._checkPrePointerObservable(null, YY, lY.d.POINTERTAP) && (this._skipPointerTap = !0), rY.iR && AY.onPrePointerObservable.hasSpecificMask(lY.d.POINTERDOUBLETAP) && this._checkPrePointerObservable(null, YY, lY.d.POINTERDOUBLETAP) && (this._skipPointerTap = !0))
            }
            this._pointerCaptures[YY.pointerId] ? (0 === YY.buttons && (this._pointerCaptures[YY.pointerId] = !1), (AY.cameraToUseForPointers || AY.activeCamera) && (AY.pointerUpPredicate || (AY.pointerUpPredicate = YY => YY.Yo && YY.isVisible && YY.isReady() && YY.isEnabled() && (!AY.cameraToUseForPointers || 0 !== (AY.cameraToUseForPointers.layerMask & YY.layerMask))), !this._meshPickProceed && (TY && TY.HasTriggers || this._checkForPicking() || AY.onPointerUp) && this._initActionManager(null, rY), DY || (DY = this._currentPickResult), this._processPointerUp(DY, YY, rY), this._previousPickResult = this._currentPickResult, this._swipeButtonPressed === YY.button && (this._isSwiping = !1, this._swipeButtonPressed = -1))) : this._swipeButtonPressed === YY.button && (this._isSwiping = !1, this._swipeButtonPressed = -1)
          })))
        }, this._onKeyDown = YY => {
          const rY = ZY.d.KEYDOWN;
          if (AY.onPreKeyboardObservable.hasObservers()) {
            const DY = new ZY.f(rY, YY);
            if (AY.onPreKeyboardObservable.notifyObservers(DY, rY), DY.skipOnKeyboardObservable) return
          }
          if (AY.onKeyboardObservable.hasObservers()) {
            const DY = new ZY.j(rY, YY);
            AY.onKeyboardObservable.notifyObservers(DY, rY)
          }
          AY.actionManager && AY.actionManager.processTrigger(14, yY.CreateNewFromScene(AY, YY))
        }, this._onKeyUp = YY => {
          const rY = ZY.d.KEYUP;
          if (AY.onPreKeyboardObservable.hasObservers()) {
            const DY = new ZY.f(rY, YY);
            if (AY.onPreKeyboardObservable.notifyObservers(DY, rY), DY.skipOnKeyboardObservable) return
          }
          if (AY.onKeyboardObservable.hasObservers()) {
            const DY = new ZY.j(rY, YY);
            AY.onKeyboardObservable.notifyObservers(DY, rY)
          }
          AY.actionManager && AY.actionManager.processTrigger(15, yY.CreateNewFromScene(AY, YY))
        }, this._deviceSourceManager.onDeviceConnectedObservable.add((FY => {
          FY.deviceType === eY.Mouse ? FY.onInputChangedObservable.add((AY => {
            this._originMouseEvent = AY, AY.inputIndex === NY.LeftClick || AY.inputIndex === NY.MiddleClick || AY.inputIndex === NY.RightClick || AY.inputIndex === NY.BrowserBack || AY.inputIndex === NY.BrowserForward ? rY && 1 === FY.getInput(AY.inputIndex) ? this._onPointerDown(AY) : YY && 0 === FY.getInput(AY.inputIndex) && this._onPointerUp(AY) : DY && (AY.inputIndex === NY.Move ? this._onPointerMove(AY) : AY.inputIndex !== NY.MouseWheelX && AY.inputIndex !== NY.MouseWheelY && AY.inputIndex !== NY.MouseWheelZ || this._onPointerMove(AY))
          })) : FY.deviceType === eY.Touch ? FY.onInputChangedObservable.add((AY => {
            AY.inputIndex === NY.LeftClick && (rY && 1 === FY.getInput(AY.inputIndex) ? (this._onPointerDown(AY), this._activePointerIdsCount > 1 && (this._isMultiTouchGesture = !0)) : YY && 0 === FY.getInput(AY.inputIndex) && (this._onPointerUp(AY), 0 === this._activePointerIdsCount && (this._isMultiTouchGesture = !1))), DY && AY.inputIndex === NY.Move && this._onPointerMove(AY)
          })) : FY.deviceType === eY.Keyboard && FY.onInputChangedObservable.add((YY => {
            "keydown" === YY.type ? this._onKeyDown(YY) : "keyup" === YY.type && this._onKeyUp(YY)
          }))
        })), this._alreadyAttached = !0
      }
      detachControl() {
        this._alreadyAttached && (this._deviceSourceManager.dispose(), this._deviceSourceManager = null, this._alreadyAttachedTo && !this._scene.doNotHandleCursors && (this._alreadyAttachedTo.style.cursor = this._scene.defaultCursor), this._alreadyAttached = !1, this._alreadyAttachedTo = null, this._latestPointerMoveEvents.clear())
      }
      setPointerOverMesh(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          DY = arguments.length > 2 ? arguments[2] : void 0,
          FY = arguments.length > 3 ? arguments[3] : void 0;
        if (this._meshUnderPointerId[rY] === YY && (!YY || !YY._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting)) return;
        const AY = this._meshUnderPointerId[rY];
        let IY;
        AY && (IY = AY._getActionManagerForTrigger(10), IY && IY.processTrigger(10, new yY(AY, this._pointerX, this._pointerY, YY, FY, {
          pointerId: rY
        }))), YY ? (this._meshUnderPointerId[rY] = YY, this._pointerOverMesh = YY, IY = YY._getActionManagerForTrigger(9), IY && IY.processTrigger(9, new yY(YY, this._pointerX, this._pointerY, YY, FY, {
          pointerId: rY,
          pickResult: DY
        }))) : (delete this._meshUnderPointerId[rY], this._pointerOverMesh = null), this._scene.onMeshUnderPointerUpdatedObservable.hasObservers() && this._scene.onMeshUnderPointerUpdatedObservable.notifyObservers({
          mesh: YY,
          pointerId: rY
        })
      }
      getPointerOverMesh() {
        return this.meshUnderPointer
      }
      _invalidateMesh(YY) {
        this._pointerOverMesh === YY && (this._pointerOverMesh = null), this._pickedDownMesh === YY && (this._pickedDownMesh = null), this._pickedUpMesh === YY && (this._pickedUpMesh = null);
        for (const rY in this._meshUnderPointerId) this._meshUnderPointerId[rY] === YY && delete this._meshUnderPointerId[rY]
      }
    }
    qY.DragMovementThreshold = 10, qY.LongPressDelay = 500, qY.DoubleClickDelay = 300, qY.ExclusiveDoubleClickMode = !1;
    var pY = DY(39087),
      kY = DY(36588),
      GY = DY(37105);
    class xY {
      static get UniqueId() {
        const YY = this._UniqueIdCounter;
        return this._UniqueIdCounter++, YY
      }
    }
    xY._UniqueIdCounter = 1;
    var nY = DY(39160),
      PY = DY(39319),
      UY = DY(36539);
    class LY {
      constructor() {
        this.pointerDownFastCheck = !1, this.pointerUpFastCheck = !1, this.pointerMoveFastCheck = !1, this.skipPointerMovePicking = !1, this.skipPointerDownPicking = !1, this.skipPointerUpPicking = !1
      }
    }
    var tY, Yr, rr, Dr, Fr, Ar, Ir, Rr, Or, gr, ar, vr, ur, sr, ir, yr, Qr, or, Wr, Er, mr, Vr, Sr, lr, Tr, er, Nr, Br, cr, Kr, Hr, zr, Zr, Cr, fr, jr, hr, dr, Jr, Mr, wr, br, Xr, qr, pr, kr, Gr, xr, nr, Pr, Ur, Lr, tr, YD = DY(38040),
      rD = DY(36569);
    const DD = new vY.v,
      FD = new vY.v;
    var AD;
    ! function(YY) {
      YY[YY.BackwardCompatible = 0] = "BackwardCompatible", YY[YY.Intermediate = 1] = "Intermediate", YY[YY.Aggressive = 2] = "Aggressive"
    }(AD || (AD = {}));
    class ID {
      static DefaultMaterialFactory(YY) {
        throw (0, SY.i)("StandardMaterial")
      }
      static CollisionCoordinatorFactory() {
        throw (0, SY.i)("DefaultCollisionCoordinator")
      }
      get clearColor() {
        return this._clearColor
      }
      set clearColor(YY) {
        YY !== this._clearColor && (this._clearColor = YY, this.onClearColorChangedObservable.notifyObservers(this._clearColor))
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      get performancePriority() {
        return this._performancePriority
      }
      set performancePriority(YY) {
        if (YY !== this._performancePriority) {
          switch (this._performancePriority = YY, YY) {
            case 0:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !1, this.autoClear = !0;
              break;
            case 1:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !0, this.autoClear = !1;
              break;
            case 2:
              this.skipFrustumClipping = !0, this._renderingManager.maintainStateBetweenFrames = !0, this.skipPointerMovePicking = !0, this.autoClear = !1
          }
          this.onScenePerformancePriorityChangedObservable.notifyObservers(YY)
        }
      }
      set forceWireframe(YY) {
        this._forceWireframe !== YY && (this._forceWireframe = YY, this.markAllMaterialsAsDirty(16))
      }
      get forceWireframe() {
        return this._forceWireframe
      }
      set skipFrustumClipping(YY) {
        this._skipFrustumClipping !== YY && (this._skipFrustumClipping = YY)
      }
      get skipFrustumClipping() {
        return this._skipFrustumClipping
      }
      set forcePointsCloud(YY) {
        this._forcePointsCloud !== YY && (this._forcePointsCloud = YY, this.markAllMaterialsAsDirty(16))
      }
      get forcePointsCloud() {
        return this._forcePointsCloud
      }
      get environmentTexture() {
        return this._environmentTexture
      }
      set environmentTexture(YY) {
        this._environmentTexture !== YY && (this._environmentTexture = YY, this.onEnvironmentTextureChangedObservable.notifyObservers(YY), this.markAllMaterialsAsDirty(1))
      }
      getNodes() {
        let YY = [];
        YY = YY.concat(this.meshes), YY = YY.concat(this.lights), YY = YY.concat(this.cameras), YY = YY.concat(this.transformNodes);
        for (const rY of this.skeletons) YY = YY.concat(rY.bones);
        return YY
      }
      get animationPropertiesOverride() {
        return this._animationPropertiesOverride
      }
      set animationPropertiesOverride(YY) {
        this._animationPropertiesOverride = YY
      }
      set onDispose(YY) {
        this._onDisposeObserver && this.wT.remove(this._onDisposeObserver), this._onDisposeObserver = this.wT.add(YY)
      }
      set beforeRender(YY) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), YY && (this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(YY))
      }
      set afterRender(YY) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), YY && (this._onAfterRenderObserver = this.onAfterRenderObservable.add(YY))
      }
      set beforeCameraRender(YY) {
        this._onBeforeCameraRenderObserver && this.onBeforeCameraRenderObservable.remove(this._onBeforeCameraRenderObserver), this._onBeforeCameraRenderObserver = this.onBeforeCameraRenderObservable.add(YY)
      }
      set afterCameraRender(YY) {
        this._onAfterCameraRenderObserver && this.onAfterCameraRenderObservable.remove(this._onAfterCameraRenderObserver), this._onAfterCameraRenderObserver = this.onAfterCameraRenderObservable.add(YY)
      }
      get pointerDownPredicate() {
        return this._pointerPickingConfiguration.pointerDownPredicate
      }
      set pointerDownPredicate(YY) {
        this._pointerPickingConfiguration.pointerDownPredicate = YY
      }
      get pointerUpPredicate() {
        return this._pointerPickingConfiguration.pointerUpPredicate
      }
      set pointerUpPredicate(YY) {
        this._pointerPickingConfiguration.pointerUpPredicate = YY
      }
      get pointerMovePredicate() {
        return this._pointerPickingConfiguration.pointerMovePredicate
      }
      set pointerMovePredicate(YY) {
        this._pointerPickingConfiguration.pointerMovePredicate = YY
      }
      get pointerDownFastCheck() {
        return this._pointerPickingConfiguration.pointerDownFastCheck
      }
      set pointerDownFastCheck(YY) {
        this._pointerPickingConfiguration.pointerDownFastCheck = YY
      }
      get pointerUpFastCheck() {
        return this._pointerPickingConfiguration.pointerUpFastCheck
      }
      set pointerUpFastCheck(YY) {
        this._pointerPickingConfiguration.pointerUpFastCheck = YY
      }
      get pointerMoveFastCheck() {
        return this._pointerPickingConfiguration.pointerMoveFastCheck
      }
      set pointerMoveFastCheck(YY) {
        this._pointerPickingConfiguration.pointerMoveFastCheck = YY
      }
      get skipPointerMovePicking() {
        return this._pointerPickingConfiguration.skipPointerMovePicking
      }
      set skipPointerMovePicking(YY) {
        this._pointerPickingConfiguration.skipPointerMovePicking = YY
      }
      get skipPointerDownPicking() {
        return this._pointerPickingConfiguration.skipPointerDownPicking
      }
      set skipPointerDownPicking(YY) {
        this._pointerPickingConfiguration.skipPointerDownPicking = YY
      }
      get skipPointerUpPicking() {
        return this._pointerPickingConfiguration.skipPointerUpPicking
      }
      set skipPointerUpPicking(YY) {
        this._pointerPickingConfiguration.skipPointerUpPicking = YY
      }
      get unTranslatedPointer() {
        return this._inputManager.unTranslatedPointer
      }
      static get DragMovementThreshold() {
        return qY.DragMovementThreshold
      }
      static set DragMovementThreshold(YY) {
        qY.DragMovementThreshold = YY
      }
      static get LongPressDelay() {
        return qY.LongPressDelay
      }
      static set LongPressDelay(YY) {
        qY.LongPressDelay = YY
      }
      static get DoubleClickDelay() {
        return qY.DoubleClickDelay
      }
      static set DoubleClickDelay(YY) {
        qY.DoubleClickDelay = YY
      }
      static get ExclusiveDoubleClickMode() {
        return qY.ExclusiveDoubleClickMode
      }
      static set ExclusiveDoubleClickMode(YY) {
        qY.ExclusiveDoubleClickMode = YY
      }
      get _eyePosition() {
        return this._forcedViewPosition ?? this.activeCamera?.globalPosition ?? vY.r.ZeroReadOnly
      }
      bindEyePosition(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vEyePosition",
          DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const FY = this._eyePosition,
          AY = this.useRightHandedSystem === (null != this._mirroredCameraPosition),
          IY = this.floatingOriginOffset,
          RY = DD.set(FY.x, FY.y, FY.z, AY ? -1 : 1),
          OY = RY.subtractFromFloatsToRef(IY.x, IY.y, IY.z, 0, FD);
        return YY && (DY ? YY.setFloat3(rY, OY.x, OY.y, OY.z) : YY.setVector4(rY, OY)), RY
      }
      finalizeSceneUbo() {
        const YY = this.getSceneUniformBuffer(),
          rY = this.bindEyePosition(null),
          DY = this.floatingOriginOffset;
        return YY.updateFloat4("vEyePosition", rY.x - DY.x, rY.y - DY.y, rY.z - DY.z, rY.w), YY.update(), YY
      }
      set useRightHandedSystem(YY) {
        this._useRightHandedSystem !== YY && (this._useRightHandedSystem = YY, this.markAllMaterialsAsDirty(16))
      }
      get useRightHandedSystem() {
        return this._useRightHandedSystem
      }
      setStepId(YY) {
        this._currentStepId = YY
      }
      getStepId() {
        return this._currentStepId
      }
      getInternalStep() {
        return this._currentInternalStep
      }
      set fogEnabled(YY) {
        this._fogEnabled !== YY && (this._fogEnabled = YY, this.markAllMaterialsAsDirty(16))
      }
      get fogEnabled() {
        return this._fogEnabled
      }
      set fogMode(YY) {
        this._fogMode !== YY && (this._fogMode = YY, this.markAllMaterialsAsDirty(16))
      }
      get fogMode() {
        return this._fogMode
      }
      get prePass() {
        return !!this.prePassRenderer && this.prePassRenderer.defaultRT.enabled
      }
      set shadowsEnabled(YY) {
        this._shadowsEnabled !== YY && (this._shadowsEnabled = YY, this.markAllMaterialsAsDirty(2))
      }
      get shadowsEnabled() {
        return this._shadowsEnabled
      }
      set lightsEnabled(YY) {
        this._lightsEnabled !== YY && (this._lightsEnabled = YY, this.markAllMaterialsAsDirty(2))
      }
      get lightsEnabled() {
        return this._lightsEnabled
      }
      get activeCameras() {
        return this._activeCameras
      }
      set activeCameras(YY) {
        this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), YY && (this._unObserveActiveCameras = (0, UY.j)(YY, (() => {
          this.onActiveCamerasChanged.notifyObservers(this)
        }))), this._activeCameras = YY
      }
      get activeCamera() {
        return this._activeCamera
      }
      set activeCamera(YY) {
        YY !== this._activeCamera && (this._activeCamera = YY, this.onActiveCameraChanged.notifyObservers(this))
      }
      get _hasDefaultMaterial() {
        return ID.DefaultMaterialFactory !== ID._OriginalDefaultMaterialFactory
      }
      get defaultMaterial() {
        return this._defaultMaterial || (this._defaultMaterial = ID.DefaultMaterialFactory(this)), this._defaultMaterial
      }
      set defaultMaterial(YY) {
        this._defaultMaterial = YY
      }
      set texturesEnabled(YY) {
        this._texturesEnabled !== YY && (this._texturesEnabled = YY, this.markAllMaterialsAsDirty(1))
      }
      get texturesEnabled() {
        return this._texturesEnabled
      }
      get frameGraph() {
        return this._frameGraph
      }
      set frameGraph(YY) {
        if (this._frameGraph) return this._frameGraph = YY, void(YY || (this.customRenderFunction = this._currentCustomRenderFunction));
        this._frameGraph = YY, YY && (this._currentCustomRenderFunction = this.customRenderFunction, this.customRenderFunction = this._renderWithFrameGraph, this.activeCamera = null)
      }
      set skeletonsEnabled(YY) {
        this._skeletonsEnabled !== YY && (this._skeletonsEnabled = YY, this.markAllMaterialsAsDirty(8))
      }
      get skeletonsEnabled() {
        return this._skeletonsEnabled
      }
      get collisionCoordinator() {
        return this._collisionCoordinator || (this._collisionCoordinator = ID.CollisionCoordinatorFactory(), this._collisionCoordinator.init(this)), this._collisionCoordinator
      }
      get renderingManager() {
        return this._renderingManager
      }
      get frustumPlanes() {
        return this._frustumPlanes
      }
      _registerTransientComponents() {
        if (this._transientComponents.length > 0) {
          for (const YY of this._transientComponents) YY.register();
          this._transientComponents.length = 0
        }
      }
      ADY(YY) {
        this._components.push(YY), this._transientComponents.push(YY);
        const rY = YY;
        rY.addFromContainer && rY.serialize && this._serializableComponents.push(rY)
      }
      _getComponent(YY) {
        for (const rY of this._components)
          if (rY.name === YY) return rY;
        return null
      }
      get uniqueId() {
        return this._uniqueId
      }
      constructor(YY, rY) {
        this._inputManager = new qY(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new kY.d(.2, .2, .3, 1), this.onClearColorChangedObservable = new RY.e, this.ambientColor = new kY.c(0, 0, 0), this.environmentIntensity = 1, this.iblIntensity = 1, this._performancePriority = 0, this.onScenePerformancePriorityChangedObservable = new RY.e, this._forceWireframe = !1, this._skipFrustumClipping = !1, this._forcePointsCloud = !1, this.rootNodes = [], this.cameras = [], this.lights = [], this.meshes = [], this.skeletons = [], this.YV = [], this.animations = [], this.animationGroups = [], this.multiMaterials = [], this.materials = [], this.morphTargetManagers = [], this.geometries = [], this.transformNodes = [], this.actionManagers = [], this.objectRenderers = [], this.textures = [], this._environmentTexture = null, this.postProcesses = [], this.effectLayers = [], this.sounds = null, this.layers = [], this.lensFlareSystems = [], this.proceduralTextures = [], this.animationsEnabled = !0, this._animationPropertiesOverride = null, this.useConstantAnimationDeltaTime = !1, this.constantlyUpdateMeshUnderPointer = !1, this.hoverCursor = "pointer", this.defaultCursor = "", this.doNotHandleCursors = !1, this.preventDefaultOnPointerDown = !0, this.preventDefaultOnPointerUp = !0, this.metadata = null, this.reservedDataStore = null, this.disableOfflineSupportExceptionRules = [], this.wT = new RY.e, this._onDisposeObserver = null, this.onBeforeRenderObservable = new RY.e, this._onBeforeRenderObserver = null, this.onAfterRenderObservable = new RY.e, this.onAfterRenderCameraObservable = new RY.e, this._onAfterRenderObserver = null, this.onBeforeAnimationsObservable = new RY.e, this.onAfterAnimationsObservable = new RY.e, this.onBeforeDrawPhaseObservable = new RY.e, this.onAfterDrawPhaseObservable = new RY.e, this.onReadyObservable = new RY.e, this.onBeforeCameraRenderObservable = new RY.e, this._onBeforeCameraRenderObserver = null, this.onAfterCameraRenderObservable = new RY.e, this._onAfterCameraRenderObserver = null, this.onBeforeActiveMeshesEvaluationObservable = new RY.e, this.onAfterActiveMeshesEvaluationObservable = new RY.e, this.onBeforeParticlesRenderingObservable = new RY.e, this.onAfterParticlesRenderingObservable = new RY.e, this.onDataLoadedObservable = new RY.e, this.onNewCameraAddedObservable = new RY.e, this.onCameraRemovedObservable = new RY.e, this.onNewLightAddedObservable = new RY.e, this.onLightRemovedObservable = new RY.e, this.onNewGeometryAddedObservable = new RY.e, this.onGeometryRemovedObservable = new RY.e, this.onNewTransformNodeAddedObservable = new RY.e, this.onTransformNodeRemovedObservable = new RY.e, this.onNewMeshAddedObservable = new RY.e, this.onMeshRemovedObservable = new RY.e, this.onNewSkeletonAddedObservable = new RY.e, this.onSkeletonRemovedObservable = new RY.e, this.onNewParticleSystemAddedObservable = new RY.e, this.onParticleSystemRemovedObservable = new RY.e, this.onNewAnimationGroupAddedObservable = new RY.e, this.onAnimationGroupRemovedObservable = new RY.e, this.onNewMaterialAddedObservable = new RY.e, this.onNewMultiMaterialAddedObservable = new RY.e, this.onMaterialRemovedObservable = new RY.e, this.onMultiMaterialRemovedObservable = new RY.e, this.onNewTextureAddedObservable = new RY.e, this.onTextureRemovedObservable = new RY.e, this.onNewFrameGraphAddedObservable = new RY.e, this.onFrameGraphRemovedObservable = new RY.e, this.onNewObjectRendererAddedObservable = new RY.e, this.onObjectRendererRemovedObservable = new RY.e, this.onNewPostProcessAddedObservable = new RY.e, this.onPostProcessRemovedObservable = new RY.e, this.onNewEffectLayerAddedObservable = new RY.e, this.onEffectLayerRemovedObservable = new RY.e, this.onBeforeRenderTargetsRenderObservable = new RY.e, this.onAfterRenderTargetsRenderObservable = new RY.e, this.onBeforeStepObservable = new RY.e, this.onAfterStepObservable = new RY.e, this.onActiveCameraChanged = new RY.e, this.onActiveCamerasChanged = new RY.e, this.onBeforeRenderingGroupObservable = new RY.e, this.onAfterRenderingGroupObservable = new RY.e, this.onMeshImportedObservable = new RY.e, this.onAnimationFileImportedObservable = new RY.e, this.onEnvironmentTextureChangedObservable = new RY.e, this.onMeshUnderPointerUpdatedObservable = new RY.e, this._registeredForLateAnimationBindings = new OY.e(256), this._pointerPickingConfiguration = new LY, this.onPrePointerObservable = new RY.e, this.onPointerObservable = new RY.e, this.onPreKeyboardObservable = new RY.e, this.onKeyboardObservable = new RY.e, this._useRightHandedSystem = !1, this._timeAccumulator = 0, this._currentStepId = 0, this._currentInternalStep = 0, this._fogEnabled = !0, this._fogMode = ID.FOGMODE_NONE, this.fogColor = new kY.c(.2, .2, .3), this.fogDensity = .1, this.fogStart = 0, this.fogEnd = 1e3, this.needsPreviousWorldMatrices = !1, this._shadowsEnabled = !0, this._lightsEnabled = !0, this._unObserveActiveCameras = null, this._texturesEnabled = !0, this._frameGraph = null, this.frameGraphs = [], this.mH = !0, this.particlesEnabled = !0, this.spritesEnabled = !0, this._skeletonsEnabled = !0, this.lensFlaresEnabled = !0, this.collisionsEnabled = !0, this.gravity = new vY.r(0, -9.807, 0), this.postProcessesEnabled = !0, this.renderTargetsEnabled = !0, this.dumpNextRenderTargets = !1, this.customRenderTargets = [], this.importedMeshesFiles = [], this.probesEnabled = !0, this._meshesForIntersections = new OY.e(256), this.proceduralTexturesEnabled = !0, this._totalVertices = new pY.e, this._activeIndices = new pY.e, this._activeParticles = new pY.e, this._activeBones = new pY.e, this._animationTime = 0, this.animationTimeScale = 1, this._renderId = 0, this._frameId = 0, this._renderingMeshEvaluationDepth = 0, this._executeWhenReadyTimeoutId = null, this._intermediateRendering = !1, this._defaultFrameBufferCleared = !1, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1, this._toBeDisposed = new Array(256), this._activeRequests = new Array, this._delayedFileRequests = null, this._pendingData = [], this._isDisposed = !1, this._isDisposing = !1, this._isReadyChecks = [], this.dispatchAllSubMeshesOfActiveMeshes = !1, this._activeMeshes = new OY.f(256), this._processedMaterials = new OY.f(256), this._renderTargets = new OY.e(256), this._materialsRenderTargets = new OY.e(256), this._activeParticleSystems = new OY.f(256), this._activeSkeletons = new OY.e(32), this._softwareSkinnedMeshes = new OY.e(32), this._activeAnimatables = new Array, this._animationWrites = new Array, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, this._transformMatrix = vY.e.Zero(), this.requireLightSorting = !1, this._components = [], this._serializableComponents = [], this._transientComponents = [], this._beforeCameraUpdateStage = EY.e.Create(), this._beforeClearStage = EY.e.Create(), this._beforeRenderTargetClearStage = EY.e.Create(), this._gatherRenderTargetsStage = EY.e.Create(), this._gatherActiveCameraRenderTargetsStage = EY.e.Create(), this._isReadyForMeshStage = EY.e.Create(), this._beforeEvaluateActiveMeshStage = EY.e.Create(), this._evaluateSubMeshStage = EY.e.Create(), this._preActiveMeshStage = EY.e.Create(), this._cameraDrawRenderTargetStage = EY.e.Create(), this._beforeCameraDrawStage = EY.e.Create(), this._beforeRenderTargetDrawStage = EY.e.Create(), this._beforeRenderingGroupDrawStage = EY.e.Create(), this._beforeRenderingMeshStage = EY.e.Create(), this._afterRenderingMeshStage = EY.e.Create(), this._afterRenderingGroupDrawStage = EY.e.Create(), this._afterCameraDrawStage = EY.e.Create(), this._afterCameraPostProcessStage = EY.e.Create(), this._afterRenderTargetDrawStage = EY.e.Create(), this._afterRenderTargetPostProcessStage = EY.e.Create(), this._afterRenderStage = EY.e.Create(), this._pointerMoveStage = EY.e.Create(), this._pointerDownStage = EY.e.Create(), this._pointerUpStage = EY.e.Create(), this._geometriesByUniqueId = null, this._uniqueId = 0, this._defaultMeshCandidates = {
          data: [],
          length: 0
        }, this._defaultSubMeshCandidates = {
          data: [],
          length: 0
        }, this.onReadyTimeoutObservable = new RY.e, this.onReadyTimeoutDuration = 12e4, this._timeoutChecksStartTime = 0, this._floatingOriginScene = void 0, this._preventFreeActiveMeshesAndRenderingGroups = !1, this._activeMeshesFrozen = !1, this._activeMeshesFrozenButKeepClipping = !1, this._skipEvaluateActiveMeshesCompletely = !1, this._freezeActiveMeshesCancel = null, this._useCurrentFrameBuffer = !1, this._allowPostProcessClearColor = !0, this.getDeterministicFrameTime = () => this._engine.getTimeStep(), this._getFloatingOriginScene = () => this._floatingOriginScene, this._registeredActions = 0, this._blockMaterialDirtyMechanism = !1, this._perfCollector = null, this.activeCameras = [], this._uniqueId = this.getUniqueId();
        const DY = {
          useGeometryUniqueIdsMap: !0,
          useMaterialMeshMap: !0,
          useClonedMeshMap: !0,
          virtual: !1,
          defaultCameraLayerMask: 268435455,
          defaultRenderableLayerMask: 268435455,
          ...rY
        };
        this.defaultCameraLayerMask = DY.defaultCameraLayerMask, this.defaultRenderableLayerMask = DY.defaultRenderableLayerMask, YY = this._engine = YY || VY.d.LastCreatedEngine, DY.virtual ? YY._virtualScenes.push(this) : (VY.d._LastCreatedScene = this, YY.scenes.push(this)), (YY.getCreationOptions().useLargeWorldRendering || rY?.useFloatingOrigin) && ((0, oY.d)(), this._floatingOriginScene = this, oY.c.hT = this._getFloatingOriginScene), this._uid = null, this._renderingManager = new WY.d(this), QY.e && (this.postProcessManager = new QY.e(this)), (0, mY.l)() && this.attachControl(), this._createUbo(), uY.b && (this._imageProcessingConfiguration = new uY.b), this.setDefaultCandidateProviders(), DY.useGeometryUniqueIdsMap && (this._geometriesByUniqueId = {}), this.useMaterialMeshMap = DY.useMaterialMeshMap, this.useClonedMeshMap = DY.useClonedMeshMap, rY && rY.virtual || YY.onNewSceneAddedObservable.notifyObservers(this)
      }
      getClassName() {
        return "Scene"
      }
      _getDefaultMeshCandidates() {
        return this._defaultMeshCandidates.data = this.meshes, this._defaultMeshCandidates.length = this.meshes.length, this._defaultMeshCandidates
      }
      _getDefaultSubMeshCandidates(YY) {
        return this._defaultSubMeshCandidates.data = YY.qm, this._defaultSubMeshCandidates.length = YY.qm.length, this._defaultSubMeshCandidates
      }
      setDefaultCandidateProviders() {
        this.getActiveMeshCandidates = () => this._getDefaultMeshCandidates(), this.getActiveSubMeshCandidates = YY => this._getDefaultSubMeshCandidates(YY), this.getIntersectingSubMeshCandidates = (YY, rY) => this._getDefaultSubMeshCandidates(YY), this.getCollidingSubMeshCandidates = (YY, rY) => this._getDefaultSubMeshCandidates(YY)
      }
      get meshUnderPointer() {
        return this._inputManager.meshUnderPointer
      }
      get pointerX() {
        return this._inputManager.pointerX
      }
      set pointerX(YY) {
        this._inputManager.pointerX = YY
      }
      get pointerY() {
        return this._inputManager.pointerY
      }
      set pointerY(YY) {
        this._inputManager.pointerY = YY
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
      isCachedMaterialInvalid(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this._cachedEffect !== rY || this._cachedMaterial !== YY || this._cachedVisibility !== DY
      }
      ky() {
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
      simulatePointerMove(YY, rY) {
        return this._inputManager.simulatePointerMove(YY, rY), this
      }
      simulatePointerDown(YY, rY) {
        return this._inputManager.simulatePointerDown(YY, rY), this
      }
      simulatePointerUp(YY, rY, DY) {
        return this._inputManager.simulatePointerUp(YY, rY, DY), this
      }
      isPointerCaptured() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._inputManager.isPointerCaptured(YY)
      }
      attachControl() {
        let YY = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          DY = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._inputManager.attachControl(YY, rY, DY)
      }
      detachControl() {
        this._inputManager.detachControl()
      }
      isReady() {
        let YY, rY = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._isDisposed) return !1;
        const DY = this.ky(),
          FY = DY.currentRenderPassId;
        DY.currentRenderPassId = this.activeCamera?.renderPassId ?? FY;
        let AY = !0;
        for (this._pendingData.length > 0 && (AY = !1), this.prePassRenderer?.update(), this.useOrderIndependentTransparency && this.depthPeelingRenderer && AY && (AY = this.depthPeelingRenderer.isReady()), rY && (this._processedMaterials.reset(), this._materialsRenderTargets.reset()), YY = 0; YY < this.meshes.length; YY++) {
          const FY = this.meshes[YY];
          if (!FY.qm || 0 === FY.qm.length) continue;
          if (!FY.isReady(!0)) {
            AY = !1;
            continue
          }
          const IY = FY.hasThinInstances || "InstancedMesh" === FY.getClassName() || "InstancedLinesMesh" === FY.getClassName() || DY.getCaps().instancedArrays && FY.instances.length > 0;
          for (let YY = 0, rY = this._isReadyForMeshStage; YY < rY.length; YY++) {
            rY[YY].action(FY, IY) || (AY = !1)
          }
          if (!rY) continue;
          const RY = FY.material || this.defaultMaterial;
          if (RY)
            if (RY._storeEffectOnSubMeshes)
              for (const YY of FY.qm) {
                const rY = YY.Uy();
                rY && rY.hasRenderTargetTextures && null != rY.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(rY) && (this._processedMaterials.push(rY), this._materialsRenderTargets.concatWithNoDuplicate(rY.getRenderTargetTextures()))
              } else RY.hasRenderTargetTextures && null != RY.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(RY) && (this._processedMaterials.push(RY), this._materialsRenderTargets.concatWithNoDuplicate(RY.getRenderTargetTextures()))
        }
        if (rY) {
          for (YY = 0; YY < this._materialsRenderTargets.length; ++YY) {
            this._materialsRenderTargets.data[YY].isReadyForRendering() || (AY = !1)
          }
          for (YY = 0; YY < this.customRenderTargets.length; ++YY) {
            this.customRenderTargets[YY].isReadyForRendering() || (AY = !1)
          }
        }
        for (YY = 0; YY < this.geometries.length; YY++) {
          2 === this.geometries[YY].delayLoadState && (AY = !1)
        }
        if (this.activeCameras && this.activeCameras.length > 0)
          for (const IY of this.activeCameras) IY.isReady(!0) || (AY = !1);
        else this.activeCamera && (this.activeCamera.isReady(!0) || (AY = !1));
        for (const IY of this.YV) IY.isReady() || (AY = !1);
        if (this.proceduralTexturesEnabled)
          for (const IY of this.proceduralTextures) IY.isReady() || (AY = !1);
        if (this.layers)
          for (const IY of this.layers) IY.isReady() || (AY = !1);
        if (this.effectLayers)
          for (const IY of this.effectLayers) IY.isLayerReady() || (AY = !1);
        for (const IY of this._isReadyChecks) IY.isReady() || (AY = !1);
        return DY.areAllEffectsReady() || (AY = !1), DY.currentRenderPassId = FY, AY
      }
      resetCachedMaterial() {
        this._cachedMaterial = null, this._cachedEffect = null, this._cachedVisibility = null
      }
      registerBeforeRender(YY) {
        this.onBeforeRenderObservable.add(YY)
      }
      unregisterBeforeRender(YY) {
        this.onBeforeRenderObservable.removeCallback(YY)
      }
      registerAfterRender(YY) {
        this.onAfterRenderObservable.add(YY)
      }
      unregisterAfterRender(YY) {
        this.onAfterRenderObservable.removeCallback(YY)
      }
      _executeOnceBeforeRender(YY) {
        const rY = () => {
          YY(), setTimeout((() => {
            this.unregisterBeforeRender(rY)
          }))
        };
        this.registerBeforeRender(rY)
      }
      executeOnceBeforeRender(YY, rY) {
        void 0 !== rY ? setTimeout((() => {
          this._executeOnceBeforeRender(YY)
        }), rY) : this._executeOnceBeforeRender(YY)
      }
      addPendingData(YY) {
        this._pendingData.push(YY)
      }
      removePendingData(YY) {
        const rY = this.isLoading,
          DY = this._pendingData.indexOf(YY); - 1 !== DY && this._pendingData.splice(DY, 1), rY && !this.isLoading && this.onDataLoadedObservable.notifyObservers(this)
      }
      getWaitingItemsCount() {
        return this._pendingData.length
      }
      get isLoading() {
        return this._pendingData.length > 0
      }
      addIsReadyCheck(YY) {
        -1 === this._isReadyChecks.indexOf(YY) && this._isReadyChecks.push(YY)
      }
      removeIsReadyCheck(YY) {
        const rY = this._isReadyChecks.indexOf(YY); - 1 !== rY && this._isReadyChecks.splice(rY, 1)
      }
      executeWhenReady(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.onReadyObservable.addOnce(YY), null === this._executeWhenReadyTimeoutId && this._checkIsReady(rY)
      }
      async whenReadyAsync() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return await new Promise((rY => {
          this.executeWhenReady((() => {
            rY()
          }), YY)
        }))
      }
      _clearReadynessChecksData() {
        this._timeoutChecksStartTime = 0, this.onReadyTimeoutObservable.clear(), this.onReadyObservable.clear(), this._executeWhenReadyTimeoutId = null
      }
      _checkIsReady() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = IY.c.Now;
        else if (this.onReadyTimeoutDuration > 0 && IY.c.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
        if (this.isReady(YY)) return this.onReadyObservable.notifyObservers(this), void this._clearReadynessChecksData();
        this._isDisposed ? this._clearReadynessChecksData() : this._executeWhenReadyTimeoutId = setTimeout((() => {
          this.incrementRenderId(), this._checkIsReady(YY)
        }), 100)
      }
      get animatables() {
        return this._activeAnimatables
      }
      resetLastAnimationTimeFrame() {
        this._animationTimeLast = IY.c.Now
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
      setTransformMatrix(YY, rY, DY, FY) {
        this._multiviewSceneUboIsActive = !!(DY && FY && this._multiviewSceneUbo), this._viewUpdateFlag === YY.updateFlag && this._projectionUpdateFlag === rY.updateFlag || (this._viewUpdateFlag = YY.updateFlag, this._projectionUpdateFlag = rY.updateFlag, this._viewMatrix = YY, this._projectionMatrix = rY, this._inverseProjectionMatrix || (this._inverseProjectionMatrix = new vY.e), this._projectionMatrix.invertToRef(this._inverseProjectionMatrix), this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._frustumPlanes ? GY.d.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = GY.d.GetPlanes(this._transformMatrix), this._multiviewSceneUboIsActive && this._multiviewSceneUbo.useUbo ? this._updateMultiviewUbo(DY, FY) : this._sceneUbo.useUbo && (this._sceneUbo.m_("viewProjection", this._transformMatrix), this._sceneUbo.m_("view", this._viewMatrix), this._sceneUbo.m_("projection", this._projectionMatrix), this._sceneUbo.m_("inverseProjection", this._inverseProjectionMatrix)))
      }
      getSceneUniformBuffer() {
        return this._multiviewSceneUboIsActive && this._multiviewSceneUbo ? this._multiviewSceneUbo : this._sceneUbo
      }
      createSceneUniformBuffer(YY, rY) {
        const DY = "boolean" === typeof rY ? rY : rY?.trackUBOsInFrame,
          FY = new sY.b(this._engine, void 0, !1, YY ?? "LQ", void 0, DY);
        return FY.addUniform("viewProjection", 16), FY.addUniform("view", 16), FY.addUniform("projection", 16), FY.addUniform("vEyePosition", 4), FY.addUniform("inverseProjection", 16), FY
      }
      setSceneUniformBuffer(YY) {
        this._sceneUbo = YY, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1
      }
      get floatingOriginMode() {
        return void 0 !== this._floatingOriginScene
      }
      get floatingOriginOffset() {
        return this.floatingOriginMode ? this._eyePosition : vY.r.ZeroReadOnly
      }
      getUniqueId() {
        return xY.UniqueId
      }
      WDY(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this._blockEntityCollection && (this.meshes.push(YY), YY._resyncLightSources(), YY.parent || YY._addToSceneRootNodes(), AY.d.SetImmediate((() => {
            this.onNewMeshAddedObservable.notifyObservers(YY)
          })), rY)) {
          const rY = YY.getChildMeshes();
          for (const YY of rY) this.WDY(YY)
        }
      }
      iN(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const DY = this.meshes.indexOf(YY);
        if (-1 !== DY && (this.meshes.splice(DY, 1), YY.parent || YY._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(YY), this.onMeshRemovedObservable.notifyObservers(YY), rY) {
          const rY = YY.getChildMeshes();
          for (const YY of rY) this.iN(YY)
        }
        return DY
      }
      addTransformNode(YY) {
        this._blockEntityCollection || YY.hT() === this && -1 !== YY._indexInSceneTransformNodesArray || (YY._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(YY), YY.parent || YY._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable.notifyObservers(YY))
      }
      removeTransformNode(YY) {
        const rY = YY._indexInSceneTransformNodesArray;
        if (-1 !== rY) {
          if (rY !== this.transformNodes.length - 1) {
            const YY = this.transformNodes[this.transformNodes.length - 1];
            this.transformNodes[rY] = YY, YY._indexInSceneTransformNodesArray = rY
          }
          YY._indexInSceneTransformNodesArray = -1, this.transformNodes.pop(), YY.parent || YY._removeFromSceneRootNodes()
        }
        return this.onTransformNodeRemovedObservable.notifyObservers(YY), rY
      }
      removeSkeleton(YY) {
        const rY = this.skeletons.indexOf(YY);
        return -1 !== rY && (this.skeletons.splice(rY, 1), this.onSkeletonRemovedObservable.notifyObservers(YY), this._executeActiveContainerCleanup(this._activeSkeletons)), rY
      }
      removeMorphTargetManager(YY) {
        const rY = this.morphTargetManagers.indexOf(YY);
        return -1 !== rY && this.morphTargetManagers.splice(rY, 1), rY
      }
      removeLight(YY) {
        const rY = this.lights.indexOf(YY);
        if (-1 !== rY) {
          for (const rY of this.meshes) rY._removeLightSource(YY, !1);
          this.lights.splice(rY, 1), this.sortLightsByPriority(), YY.parent || YY._removeFromSceneRootNodes(), this.onLightRemovedObservable.notifyObservers(YY)
        }
        return rY
      }
      removeCamera(YY) {
        const rY = this.cameras.indexOf(YY);
        if (-1 !== rY && (this.cameras.splice(rY, 1), YY.parent || YY._removeFromSceneRootNodes()), this.activeCameras) {
          const rY = this.activeCameras.indexOf(YY); - 1 !== rY && this.activeCameras.splice(rY, 1)
        }
        return this.activeCamera === YY && (this.cameras.length > 0 ? this.activeCamera = this.cameras[0] : this.activeCamera = null), this.onCameraRemovedObservable.notifyObservers(YY), rY
      }
      removeParticleSystem(YY) {
        const rY = this.YV.indexOf(YY);
        return -1 !== rY && (this.YV.splice(rY, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(YY), rY
      }
      removeAnimation(YY) {
        const rY = this.animations.indexOf(YY);
        return -1 !== rY && this.animations.splice(rY, 1), rY
      }
      stopAnimation(YY, rY, DY) {}
      removeAnimationGroup(YY) {
        const rY = this.animationGroups.indexOf(YY);
        return -1 !== rY && this.animationGroups.splice(rY, 1), this.onAnimationGroupRemovedObservable.notifyObservers(YY), rY
      }
      removeMultiMaterial(YY) {
        const rY = this.multiMaterials.indexOf(YY);
        return -1 !== rY && this.multiMaterials.splice(rY, 1), this.onMultiMaterialRemovedObservable.notifyObservers(YY), rY
      }
      removeMaterial(YY) {
        const rY = YY._indexInSceneMaterialArray;
        if (-1 !== rY && rY < this.materials.length) {
          if (rY !== this.materials.length - 1) {
            const YY = this.materials[this.materials.length - 1];
            this.materials[rY] = YY, YY._indexInSceneMaterialArray = rY
          }
          YY._indexInSceneMaterialArray = -1, this.materials.pop()
        }
        return this.onMaterialRemovedObservable.notifyObservers(YY), rY
      }
      removeActionManager(YY) {
        const rY = this.actionManagers.indexOf(YY);
        return -1 !== rY && this.actionManagers.splice(rY, 1), rY
      }
      removeTexture(YY) {
        const rY = this.textures.indexOf(YY);
        return -1 !== rY && this.textures.splice(rY, 1), this.onTextureRemovedObservable.notifyObservers(YY), rY
      }
      removeFrameGraph(YY) {
        const rY = this.frameGraphs.indexOf(YY);
        return -1 !== rY && this.frameGraphs.splice(rY, 1), this.onFrameGraphRemovedObservable.notifyObservers(YY), rY
      }
      removeObjectRenderer(YY) {
        const rY = this.objectRenderers.indexOf(YY);
        return -1 !== rY && this.objectRenderers.splice(rY, 1), this.onObjectRendererRemovedObservable.notifyObservers(YY), rY
      }
      removePostProcess(YY) {
        const rY = this.postProcesses.indexOf(YY);
        return -1 !== rY && this.postProcesses.splice(rY, 1), this.onPostProcessRemovedObservable.notifyObservers(YY), rY
      }
      removeEffectLayer(YY) {
        const rY = this.effectLayers.indexOf(YY);
        return -1 !== rY && this.effectLayers.splice(rY, 1), this.onEffectLayerRemovedObservable.notifyObservers(YY), rY
      }
      addLight(YY) {
        if (!this._blockEntityCollection) {
          this.lights.push(YY), this.sortLightsByPriority(), YY.parent || YY._addToSceneRootNodes();
          for (const rY of this.meshes) - 1 === rY.lightSources.indexOf(YY) && (rY.lightSources.push(YY), rY._resyncLightSources());
          AY.d.SetImmediate((() => {
            this.onNewLightAddedObservable.notifyObservers(YY)
          }))
        }
      }
      sortLightsByPriority() {
        this.requireLightSorting && this.lights.sort(PY.e.CompareLightsPriority)
      }
      addCamera(YY) {
        this._blockEntityCollection || (this.cameras.push(YY), AY.d.SetImmediate((() => {
          this.onNewCameraAddedObservable.notifyObservers(YY)
        })), YY.parent || YY._addToSceneRootNodes())
      }
      addSkeleton(YY) {
        this._blockEntityCollection || (this.skeletons.push(YY), AY.d.SetImmediate((() => {
          this.onNewSkeletonAddedObservable.notifyObservers(YY)
        })))
      }
      addParticleSystem(YY) {
        this._blockEntityCollection || (this.YV.push(YY), AY.d.SetImmediate((() => {
          this.onNewParticleSystemAddedObservable.notifyObservers(YY)
        })))
      }
      addAnimation(YY) {
        this._blockEntityCollection || this.animations.push(YY)
      }
      addAnimationGroup(YY) {
        this._blockEntityCollection || (this.animationGroups.push(YY), AY.d.SetImmediate((() => {
          this.onNewAnimationGroupAddedObservable.notifyObservers(YY)
        })))
      }
      addMultiMaterial(YY) {
        this._blockEntityCollection || (this.multiMaterials.push(YY), AY.d.SetImmediate((() => {
          this.onNewMultiMaterialAddedObservable.notifyObservers(YY)
        })))
      }
      addMaterial(YY) {
        this._blockEntityCollection || YY.hT() === this && -1 !== YY._indexInSceneMaterialArray || (YY._indexInSceneMaterialArray = this.materials.length, this.materials.push(YY), AY.d.SetImmediate((() => {
          this.onNewMaterialAddedObservable.notifyObservers(YY)
        })))
      }
      addMorphTargetManager(YY) {
        this._blockEntityCollection || this.morphTargetManagers.push(YY)
      }
      addGeometry(YY) {
        this._blockEntityCollection || (this._geometriesByUniqueId && (this._geometriesByUniqueId[YY.uniqueId] = this.geometries.length), this.geometries.push(YY))
      }
      addActionManager(YY) {
        this.actionManagers.push(YY)
      }
      addTexture(YY) {
        this._blockEntityCollection || (this.textures.push(YY), this.onNewTextureAddedObservable.notifyObservers(YY))
      }
      addFrameGraph(YY) {
        this.frameGraphs.push(YY), AY.d.SetImmediate((() => {
          this.onNewFrameGraphAddedObservable.notifyObservers(YY)
        }))
      }
      addObjectRenderer(YY) {
        this.objectRenderers.push(YY), AY.d.SetImmediate((() => {
          this.onNewObjectRendererAddedObservable.notifyObservers(YY)
        }))
      }
      addPostProcess(YY) {
        this._blockEntityCollection || (this.postProcesses.push(YY), AY.d.SetImmediate((() => {
          this.onNewPostProcessAddedObservable.notifyObservers(YY)
        })))
      }
      addEffectLayer(YY) {
        this._blockEntityCollection || (this.effectLayers.push(YY), AY.d.SetImmediate((() => {
          this.onNewEffectLayerAddedObservable.notifyObservers(YY)
        })))
      }
      switchActiveCamera(YY) {
        let rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._engine.getInputElement() && (this.activeCamera && this.activeCamera.detachControl(), this.activeCamera = YY, rY && YY.attachControl())
      }
      setActiveCameraById(YY) {
        const rY = this.getCameraById(YY);
        return rY ? (this.activeCamera = rY, rY) : null
      }
      setActiveCameraByName(YY) {
        const rY = this.getCameraByName(YY);
        return rY ? (this.activeCamera = rY, rY) : null
      }
      getAnimationGroupByName(YY) {
        for (let rY = 0; rY < this.animationGroups.length; rY++)
          if (this.animationGroups[rY].name === YY) return this.animationGroups[rY];
        return null
      }
      _getMaterial(YY, rY) {
        for (let DY = 0; DY < this.materials.length; DY++) {
          const YY = this.materials[DY];
          if (rY(YY)) return YY
        }
        if (YY)
          for (let DY = 0; DY < this.multiMaterials.length; DY++) {
            const YY = this.multiMaterials[DY];
            if (rY(YY)) return YY
          }
        return null
      }
      getMaterialByUniqueID(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.getMaterialByUniqueId(YY, rY)
      }
      getMaterialByUniqueId(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(rY, (rY => rY.uniqueId === YY))
      }
      getMaterialById(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(rY, (rY => rY.id === YY))
      }
      getMaterialByName(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(rY, (rY => rY.name === YY))
      }
      getLastMaterialById(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        for (let DY = this.materials.length - 1; DY >= 0; DY--)
          if (this.materials[DY].id === YY) return this.materials[DY];
        if (rY)
          for (let DY = this.multiMaterials.length - 1; DY >= 0; DY--)
            if (this.multiMaterials[DY].id === YY) return this.multiMaterials[DY];
        return null
      }
      getTextureByUniqueId(YY) {
        for (let rY = 0; rY < this.textures.length; rY++)
          if (this.textures[rY].uniqueId === YY) return this.textures[rY];
        return null
      }
      getTextureByName(YY) {
        for (let rY = 0; rY < this.textures.length; rY++)
          if (this.textures[rY].name === YY) return this.textures[rY];
        return null
      }
      getCameraById(YY) {
        for (let rY = 0; rY < this.cameras.length; rY++)
          if (this.cameras[rY].id === YY) return this.cameras[rY];
        return null
      }
      getCameraByUniqueId(YY) {
        for (let rY = 0; rY < this.cameras.length; rY++)
          if (this.cameras[rY].uniqueId === YY) return this.cameras[rY];
        return null
      }
      getCameraByName(YY) {
        for (let rY = 0; rY < this.cameras.length; rY++)
          if (this.cameras[rY].name === YY) return this.cameras[rY];
        return null
      }
      getBoneById(YY) {
        for (let rY = 0; rY < this.skeletons.length; rY++) {
          const DY = this.skeletons[rY];
          for (let rY = 0; rY < DY.bones.length; rY++)
            if (DY.bones[rY].id === YY) return DY.bones[rY]
        }
        return null
      }
      getBoneByName(YY) {
        for (let rY = 0; rY < this.skeletons.length; rY++) {
          const DY = this.skeletons[rY];
          for (let rY = 0; rY < DY.bones.length; rY++)
            if (DY.bones[rY].name === YY) return DY.bones[rY]
        }
        return null
      }
      getLightByName(YY) {
        for (let rY = 0; rY < this.lights.length; rY++)
          if (this.lights[rY].name === YY) return this.lights[rY];
        return null
      }
      getLightById(YY) {
        for (let rY = 0; rY < this.lights.length; rY++)
          if (this.lights[rY].id === YY) return this.lights[rY];
        return null
      }
      getLightByUniqueId(YY) {
        for (let rY = 0; rY < this.lights.length; rY++)
          if (this.lights[rY].uniqueId === YY) return this.lights[rY];
        return null
      }
      getParticleSystemById(YY) {
        for (let rY = 0; rY < this.YV.length; rY++)
          if (this.YV[rY].id === YY) return this.YV[rY];
        return null
      }
      getGeometryById(YY) {
        for (let rY = 0; rY < this.geometries.length; rY++)
          if (this.geometries[rY].id === YY) return this.geometries[rY];
        return null
      }
      _getGeometryByUniqueId(YY) {
        if (this._geometriesByUniqueId) {
          const rY = this._geometriesByUniqueId[YY];
          if (void 0 !== rY) return this.geometries[rY]
        } else
          for (let rY = 0; rY < this.geometries.length; rY++)
            if (this.geometries[rY].uniqueId === YY) return this.geometries[rY];
        return null
      }
      getFrameGraphByName(YY) {
        for (let rY = 0; rY < this.frameGraphs.length; rY++)
          if (this.frameGraphs[rY].name === YY) return this.frameGraphs[rY];
        return null
      }
      pushGeometry(YY, rY) {
        return !(!rY && this._getGeometryByUniqueId(YY.uniqueId)) && (this.addGeometry(YY), AY.d.SetImmediate((() => {
          this.onNewGeometryAddedObservable.notifyObservers(YY)
        })), !0)
      }
      removeGeometry(YY) {
        let rY;
        if (this._geometriesByUniqueId) {
          if (rY = this._geometriesByUniqueId[YY.uniqueId], void 0 === rY) return !1
        } else if (rY = this.geometries.indexOf(YY), rY < 0) return !1;
        if (rY !== this.geometries.length - 1) {
          const YY = this.geometries[this.geometries.length - 1];
          YY && (this.geometries[rY] = YY, this._geometriesByUniqueId && (this._geometriesByUniqueId[YY.uniqueId] = rY))
        }
        return this._geometriesByUniqueId && (this._geometriesByUniqueId[YY.uniqueId] = void 0), this.geometries.pop(), this.onGeometryRemovedObservable.notifyObservers(YY), !0
      }
      getGeometries() {
        return this.geometries
      }
      getMeshById(YY) {
        for (let rY = 0; rY < this.meshes.length; rY++)
          if (this.meshes[rY].id === YY) return this.meshes[rY];
        return null
      }
      getMeshesById(YY) {
        return this.meshes.filter((function(rY) {
          return rY.id === YY
        }))
      }
      getTransformNodeById(YY) {
        for (let rY = 0; rY < this.transformNodes.length; rY++)
          if (this.transformNodes[rY].id === YY) return this.transformNodes[rY];
        return null
      }
      getTransformNodeByUniqueId(YY) {
        for (let rY = 0; rY < this.transformNodes.length; rY++)
          if (this.transformNodes[rY].uniqueId === YY) return this.transformNodes[rY];
        return null
      }
      getTransformNodesById(YY) {
        return this.transformNodes.filter((function(rY) {
          return rY.id === YY
        }))
      }
      getMeshByUniqueId(YY) {
        for (let rY = 0; rY < this.meshes.length; rY++)
          if (this.meshes[rY].uniqueId === YY) return this.meshes[rY];
        return null
      }
      getLastMeshById(YY) {
        for (let rY = this.meshes.length - 1; rY >= 0; rY--)
          if (this.meshes[rY].id === YY) return this.meshes[rY];
        return null
      }
      getLastTransformNodeById(YY) {
        for (let rY = this.transformNodes.length - 1; rY >= 0; rY--)
          if (this.transformNodes[rY].id === YY) return this.transformNodes[rY];
        return null
      }
      getLastEntryById(YY) {
        let rY;
        for (rY = this.meshes.length - 1; rY >= 0; rY--)
          if (this.meshes[rY].id === YY) return this.meshes[rY];
        for (rY = this.transformNodes.length - 1; rY >= 0; rY--)
          if (this.transformNodes[rY].id === YY) return this.transformNodes[rY];
        for (rY = this.cameras.length - 1; rY >= 0; rY--)
          if (this.cameras[rY].id === YY) return this.cameras[rY];
        for (rY = this.lights.length - 1; rY >= 0; rY--)
          if (this.lights[rY].id === YY) return this.lights[rY];
        for (rY = this.skeletons.length - 1; rY >= 0; rY--) {
          const DY = this.skeletons[rY];
          for (let rY = DY.bones.length - 1; rY >= 0; rY--)
            if (DY.bones[rY].id === YY) return DY.bones[rY]
        }
        return null
      }
      getNodeById(YY) {
        const rY = this.getMeshById(YY);
        if (rY) return rY;
        const DY = this.getTransformNodeById(YY);
        if (DY) return DY;
        const FY = this.getLightById(YY);
        if (FY) return FY;
        const AY = this.getCameraById(YY);
        if (AY) return AY;
        const IY = this.getBoneById(YY);
        return IY || null
      }
      getNodeByName(YY) {
        const rY = this.getMeshByName(YY);
        if (rY) return rY;
        const DY = this.getTransformNodeByName(YY);
        if (DY) return DY;
        const FY = this.getLightByName(YY);
        if (FY) return FY;
        const AY = this.getCameraByName(YY);
        if (AY) return AY;
        const IY = this.getBoneByName(YY);
        return IY || null
      }
      getMeshByName(YY) {
        for (let rY = 0; rY < this.meshes.length; rY++)
          if (this.meshes[rY].name === YY) return this.meshes[rY];
        return null
      }
      getTransformNodeByName(YY) {
        for (let rY = 0; rY < this.transformNodes.length; rY++)
          if (this.transformNodes[rY].name === YY) return this.transformNodes[rY];
        return null
      }
      getLastSkeletonById(YY) {
        for (let rY = this.skeletons.length - 1; rY >= 0; rY--)
          if (this.skeletons[rY].id === YY) return this.skeletons[rY];
        return null
      }
      getSkeletonByUniqueId(YY) {
        for (let rY = 0; rY < this.skeletons.length; rY++)
          if (this.skeletons[rY].uniqueId === YY) return this.skeletons[rY];
        return null
      }
      getSkeletonById(YY) {
        for (let rY = 0; rY < this.skeletons.length; rY++)
          if (this.skeletons[rY].id === YY) return this.skeletons[rY];
        return null
      }
      getSkeletonByName(YY) {
        for (let rY = 0; rY < this.skeletons.length; rY++)
          if (this.skeletons[rY].name === YY) return this.skeletons[rY];
        return null
      }
      getMorphTargetManagerById(YY) {
        for (let rY = 0; rY < this.morphTargetManagers.length; rY++)
          if (this.morphTargetManagers[rY].uniqueId === YY) return this.morphTargetManagers[rY];
        return null
      }
      getMorphTargetById(YY) {
        for (let rY = 0; rY < this.morphTargetManagers.length; ++rY) {
          const DY = this.morphTargetManagers[rY];
          for (let rY = 0; rY < DY.numTargets; ++rY) {
            const FY = DY.getTarget(rY);
            if (FY.id === YY) return FY
          }
        }
        return null
      }
      getMorphTargetByName(YY) {
        for (let rY = 0; rY < this.morphTargetManagers.length; ++rY) {
          const DY = this.morphTargetManagers[rY];
          for (let rY = 0; rY < DY.numTargets; ++rY) {
            const FY = DY.getTarget(rY);
            if (FY.name === YY) return FY
          }
        }
        return null
      }
      getPostProcessByName(YY) {
        for (let rY = 0; rY < this.postProcesses.length; ++rY) {
          const DY = this.postProcesses[rY];
          if (DY.name === YY) return DY
        }
        return null
      }
      isActiveMesh(YY) {
        return -1 !== this._activeMeshes.indexOf(YY)
      }
      get uid() {
        return this._uid || (this._uid = FY.i.RandomId()), this._uid
      }
      addExternalData(YY, rY) {
        return this._externalData || (this._externalData = new gY), this._externalData.add(YY, rY)
      }
      getExternalData(YY) {
        return this._externalData ? this._externalData.get(YY) : null
      }
      getOrAddExternalDataWithFactory(YY, rY) {
        return this._externalData || (this._externalData = new gY), this._externalData.getOrAddWithFactory(YY, rY)
      }
      removeExternalData(YY) {
        return this._externalData.remove(YY)
      }
      _evaluateSubMesh(YY, rY, DY, FY) {
        if (FY || YY.isInFrustum(this._frustumPlanes)) {
          for (let FY = 0, AY = this._evaluateSubMeshStage; FY < AY.length; FY++) {
            AY[FY].action(rY, YY)
          }
          const DY = YY.Uy();
          null !== DY && void 0 !== DY && (DY.hasRenderTargetTextures && null != DY.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(DY) && (this._processedMaterials.push(DY), this._materialsRenderTargets.concatWithNoDuplicate(DY.getRenderTargetTextures())), this._renderingManager.dispatch(YY, rY, DY))
        }
      }
      freeProcessedMaterials() {
        this._processedMaterials.dispose()
      }
      get blockfreeActiveMeshesAndRenderingGroups() {
        return this._preventFreeActiveMeshesAndRenderingGroups
      }
      set blockfreeActiveMeshesAndRenderingGroups(YY) {
        this._preventFreeActiveMeshesAndRenderingGroups !== YY && (YY && (this.freeActiveMeshes(), this.freeRenderingGroups()), this._preventFreeActiveMeshesAndRenderingGroups = YY)
      }
      freeActiveMeshes() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._activeMeshes.dispose(), this.activeCamera && this.activeCamera._activeMeshes && this.activeCamera._activeMeshes.dispose(), this.activeCameras))
          for (let YY = 0; YY < this.activeCameras.length; YY++) {
            const rY = this.activeCameras[YY];
            rY && rY._activeMeshes && rY._activeMeshes.dispose()
          }
      }
      freeRenderingGroups() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures))
          for (let YY = 0; YY < this.textures.length; YY++) {
            const rY = this.textures[YY];
            rY && rY.renderList && rY.freeRenderingGroups()
          }
      }
      _isInIntermediateRendering() {
        return this._intermediateRendering
      }
      _isInRenderingMeshEvaluation() {
        return this._renderingMeshEvaluationDepth > 0
      }
      freezeActiveMeshes() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          rY = arguments.length > 1 ? arguments[1] : void 0,
          DY = arguments.length > 2 ? arguments[2] : void 0,
          FY = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          IY = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.frameGraph) {
          this._renderWithFrameGraph(!0, !1, !0);
          const RY = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const YY of RY) YY.objectRenderer._freezeActiveMeshes(FY);
          return this._freezeActiveMeshesCancel = (0, AY.e)((() => {
            let YY = !0,
              rY = !0;
            for (const DY of RY) YY && (YY = DY.objectRenderer._isFrozen), rY && (rY = null !== DY.objectRenderer._freezeActiveMeshesCancel);
            if (YY) return !0;
            if (!rY) throw new Error("Freezing active meshes was cancelled");
            return !1
          }), (() => {
            this._freezeActiveMeshesCancel = null, this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = IY, this._skipEvaluateActiveMeshesCompletely = YY, rY?.()
          }), ((YY, rY) => {
            if (this._freezeActiveMeshesCancel = null, this.unfreezeActiveMeshes(), rY) {
              const rY = "Scene: Timeout while waiting for meshes to be frozen.";
              DY ? DY(rY) : (YD.d.Error(rY), YY && YD.d.Error(YY))
            } else {
              const rY = "Scene: An unexpected error occurred while trying to freeze active meshes.";
              DY ? DY(rY) : (YD.d.Error(rY), YY && (YD.d.Error(YY), YY.stack && YD.d.Error(YY.stack)))
            }
          })), this
        }
        return this.executeWhenReady((() => {
          if (this.activeCamera) {
            if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = IY, this._skipEvaluateActiveMeshesCompletely = YY, FY)
              for (let YY = 0; YY < this._activeMeshes.length; YY++) this._activeMeshes.data[YY]._freeze();
            rY && rY()
          } else DY && DY("No active camera found")
        })), this
      }
      unfreezeActiveMeshes() {
        for (let YY = 0; YY < this.meshes.length; YY++) {
          const rY = this.meshes[YY];
          rY._internalAbstractMeshDataInfo && (rY._internalAbstractMeshDataInfo._isActive = !1)
        }
        if (this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null, this.frameGraph) {
          const YY = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const rY of YY) rY.objectRenderer._unfreezeActiveMeshes()
        } else
          for (let YY = 0; YY < this._activeMeshes.length; YY++) this._activeMeshes.data[YY]._unFreeze();
        return this._activeMeshesFrozen = !1, this
      }
      _executeActiveContainerCleanup(YY) {
        (!this._engine.snapshotRendering || 1 !== this._engine.snapshotRenderingMode) && this._activeMeshesFrozen && this._activeMeshes.length || this.onBeforeRenderObservable.addOnce((() => YY.dispose()))
      }
      _evaluateActiveMeshes() {
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) return void(this._activeMeshes.length > 0 && (this.activeCamera?._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset()));
        if (this._activeMeshesFrozen && this._activeMeshes.length) {
          if (!this._skipEvaluateActiveMeshesCompletely) {
            const YY = this._activeMeshes.length;
            for (let rY = 0; rY < YY; rY++) {
              this._activeMeshes.data[rY].computeWorldMatrix()
            }
          }
          if (this._activeParticleSystems) {
            const YY = this._activeParticleSystems.length;
            for (let rY = 0; rY < YY; rY++) this._activeParticleSystems.data[rY].animate()
          }
          return void this._renderingManager.resetSprites()
        }
        if (!this.activeCamera) return;
        this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset(), this._materialsRenderTargets.reset();
        for (let AY = 0, IY = this._beforeEvaluateActiveMeshStage; AY < IY.length; AY++) {
          IY[AY].action()
        }
        const YY = this.getActiveMeshCandidates(),
          rY = YY.length,
          DY = pY.e.Enabled,
          FY = this.customLODSelector;
        for (let AY = 0; AY < rY; AY++) {
          const rY = YY.data[AY],
            IY = !FY && !rY.XT && !rY._internalMeshDataInfo?._LODLevels.length;
          let RY, OY;
          if ((IY || (RY = rY._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), RY ? RY[1] = -1 : (RY = [rY, -1], rY._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, RY))), !rY.isBlocked) && (DY && this._totalVertices.addCount(rY.getTotalVertices(), !1), rY.isReady() && rY.isEnabled() && !rY.pa.hasAZeroComponent)) {
            if (rY.computeWorldMatrix(), rY.actionManager && rY.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(rY), IY) OY = rY;
            else if (OY = FY ? FY(rY, this.activeCamera) : rY.getLOD(this.activeCamera), RY[0] = OY, RY[1] = this._frameId, void 0 === OY || null === OY) continue;
            if (OY !== rY && 0 !== OY.billboardMode && OY.computeWorldMatrix(), rY._preActivate(), rY.isVisible && rY.visibility > 0 && 0 !== (rY.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || rY.Gy || rY.isInFrustum(this._frustumPlanes))) {
              this._activeMeshes.push(rY), this.activeCamera._activeMeshes.push(rY), OY !== rY && OY._activate(this._renderId, !1);
              for (let YY = 0, DY = this._preActiveMeshStage; YY < DY.length; YY++) {
                DY[YY].action(rY)
              }
              rY._activate(this._renderId, !1) && (rY.XT ? rY._internalAbstractMeshDataInfo._actAsRegularMesh && (OY = rY) : OY._internalAbstractMeshDataInfo._onlyForInstances = !1, OY._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(rY, OY)), rY._postActivate()
            }
          }
        }
        if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
          this.onBeforeParticlesRenderingObservable.notifyObservers(this);
          for (let YY = 0; YY < this.YV.length; YY++) {
            const rY = this.YV[YY];
            if (!rY.isStarted() || !rY.emitter) continue;
            const DY = rY.emitter;
            DY.position && !DY.isEnabled() || (this._activeParticleSystems.push(rY), rY.animate(), this._renderingManager.dispatchParticles(rY))
          }
          this.onAfterParticlesRenderingObservable.notifyObservers(this)
        }
      }
      _prepareSkeleton(YY) {
        this._skeletonsEnabled && YY.skeleton && (this._activeSkeletons.pushNoDuplicate(YY.skeleton) && (YY.skeleton.prepare(), this._activeBones.addCount(YY.skeleton.bones.length, !1)), YY.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(YY) && this.frameGraph && YY.applySkeleton(YY.skeleton))
      }
      _activeMesh(YY, rY) {
        this._prepareSkeleton(rY);
        let DY = YY.aFY || YY.XT || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || rY.Gy;
        if (rY && rY.qm && rY.qm.length > 0) {
          const FY = this.getActiveSubMeshCandidates(rY),
            AY = FY.length;
          DY = DY || 1 === AY;
          for (let IY = 0; IY < AY; IY++) {
            const AY = FY.data[IY];
            this._evaluateSubMesh(AY, rY, YY, DY)
          }
        }
      }
      updateTransformMatrix(YY) {
        const rY = this.activeCamera;
        if (rY)
          if (rY._renderingMultiview) {
            const DY = rY._rigCameras[0],
              FY = rY._rigCameras[1];
            this.setTransformMatrix(DY.getViewMatrix(), DY.getProjectionMatrix(YY), FY.getViewMatrix(), FY.getProjectionMatrix(YY))
          } else this.setTransformMatrix(rY.getViewMatrix(), rY.getProjectionMatrix(YY))
      }
      _bindFrameBuffer(YY) {
        let rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._useCurrentFrameBuffer || (YY && YY._multiviewTexture ? YY._multiviewTexture._bindFrameBuffer() : YY && YY.outputRenderTarget ? YY.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer()), rY && this._clearFrameBuffer(YY)
      }
      _clearFrameBuffer(YY) {
        if (YY && YY._multiviewTexture);
        else if (YY && YY.outputRenderTarget && !YY._renderingMultiview) {
          const rY = YY.outputRenderTarget;
          rY.onClearObservable.hasObservers() ? rY.onClearObservable.notifyObservers(this._engine) : rY.skipInitialClear || YY.isRightCamera || (this.autoClear && this._engine.clear(rY.clearColor || this._clearColor, !rY._cleared, !0, !0), rY._cleared = !0)
        } else this._defaultFrameBufferCleared ? this._engine.clear(null, !1, !0, !0) : (this._defaultFrameBufferCleared = !0, this._clear())
      }
      _renderForCamera(YY, rY) {
        let DY = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (YY && YY._skipRendering) return;
        const AY = this._engine;
        if (this._activeCamera = YY, !this.activeCamera) throw new Error("Active camera not set");
        if (AY.setViewport(this.activeCamera.viewport), this.resetCachedMaterial(), this._renderId++, !this.prePass && DY) {
          let rY = !0;
          YY._renderingMultiview && YY.outputRenderTarget && (rY = YY.outputRenderTarget.skipInitialClear, this.autoClear && (this._defaultFrameBufferCleared = !1, YY.outputRenderTarget.skipInitialClear = !1)), this._bindFrameBuffer(this._activeCamera), YY._renderingMultiview && YY.outputRenderTarget && (YY.outputRenderTarget.skipInitialClear = rY)
        }
        this.updateTransformMatrix(), this.onBeforeCameraRenderObservable.notifyObservers(this.activeCamera), this._engine.currentRenderPassId = YY.outputRenderTarget?.renderPassId ?? YY.renderPassId ?? 0, this._evaluateActiveMeshes();
        for (let FY = 0; FY < this._softwareSkinnedMeshes.length; FY++) {
          const YY = this._softwareSkinnedMeshes.data[FY];
          YY.applySkeleton(YY.skeleton)
        }
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.concatWithNoDuplicate(this._materialsRenderTargets), YY.customRenderTargets && YY.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(YY.customRenderTargets), rY && rY.customRenderTargets && rY.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(rY.customRenderTargets), this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture);
        for (let FY = 0, OY = this._gatherActiveCameraRenderTargetsStage; FY < OY.length; FY++) {
          OY[FY].action(this._renderTargets)
        }
        let IY = !1;
        if (this.renderTargetsEnabled) {
          let YY;
          if (this._intermediateRendering = !0, this._renderTargets.length > 0) {
            FY.i.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
            const rY = this.getBoundingBoxRenderer?.();
            for (let DY = 0; DY < this._renderTargets.length; DY++) {
              const FY = this._renderTargets.data[DY];
              if (FY._shouldRender()) {
                this._renderId++;
                const DY = FY.activeCamera && FY.activeCamera !== this.activeCamera;
                rY && !YY && (YY = rY.renderList.length > 0 ? rY.renderList.data.slice() : [], YY.length = rY.renderList.length), FY.render(DY, this.dumpNextRenderTargets), IY = !0
              }
            }
            rY && YY && (rY.renderList.data = YY, rY.renderList.length = YY.length), FY.i.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
          }
          if (this._cameraDrawRenderTargetStage.length > 0) {
            const rY = this.getBoundingBoxRenderer?.();
            rY && !YY && (YY = rY.renderList.length > 0 ? rY.renderList.data.slice() : [], YY.length = rY.renderList.length);
            for (let YY = 0, DY = this._cameraDrawRenderTargetStage; YY < DY.length; YY++) {
              IY = DY[YY].action(this.activeCamera) || IY
            }
            rY && YY && (rY.renderList.data = YY, rY.renderList.length = YY.length)
          }
          this._intermediateRendering = !1
        }
        IY && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || YY._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame();
        for (let FY = 0, OY = this._beforeCameraDrawStage; FY < OY.length; FY++) {
          OY[FY].action(this.activeCamera)
        }
        this.onBeforeDrawPhaseObservable.notifyObservers(this);
        const RY = AY.snapshotRendering && 1 === AY.snapshotRenderingMode;
        RY && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !RY), this.onAfterDrawPhaseObservable.notifyObservers(this);
        for (let FY = 0, OY = this._afterCameraDrawStage; FY < OY.length; FY++) {
          OY[FY].action(this.activeCamera)
        }
        if (this.postProcessManager && !YY._multiviewTexture) {
          const rY = YY.outputRenderTarget ? YY.outputRenderTarget.renderTarget : void 0;
          this.postProcessManager._finalizeFrame(YY.isIntermediate, rY)
        }
        for (let FY = 0, OY = this._afterCameraPostProcessStage; FY < OY.length; FY++) {
          OY[FY].action(this.activeCamera)
        }
        this._renderTargets.reset(), this.onAfterCameraRenderObservable.notifyObservers(this.activeCamera)
      }
      _processSubCameras(YY) {
        let rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (0 === YY.cameraRigMode || YY._renderingMultiview) return YY._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(YY, void 0, rY), void this.onAfterRenderCameraObservable.notifyObservers(YY);
        if (YY._useMultiviewToSingleView) this._renderMultiviewToSingleView(YY);
        else {
          this.onBeforeCameraRenderObservable.notifyObservers(YY);
          for (let rY = 0; rY < YY._rigCameras.length; rY++) this._renderForCamera(YY._rigCameras[rY], YY)
        }
        this._activeCamera = YY, this.updateTransformMatrix(), this.onAfterRenderCameraObservable.notifyObservers(YY)
      }
      _checkIntersections() {
        for (let YY = 0; YY < this._meshesForIntersections.length; YY++) {
          const rY = this._meshesForIntersections.data[YY];
          if (rY.actionManager)
            for (let YY = 0; rY.actionManager && YY < rY.actionManager.actions.length; YY++) {
              const DY = rY.actionManager.actions[YY];
              if (12 === DY.trigger || 13 === DY.trigger) {
                const YY = DY.getTriggerParameter(),
                  FY = YY.mesh ? YY.mesh : YY,
                  AY = FY.FFY(rY, YY.usePreciseIntersection),
                  IY = rY._intersectionsInProgress.indexOf(FY);
                AY && -1 === IY ? 12 === DY.trigger ? (DY._executeCurrent(yY.CreateNew(rY, void 0, FY)), rY._intersectionsInProgress.push(FY)) : 13 === DY.trigger && rY._intersectionsInProgress.push(FY) : !AY && IY > -1 && (13 === DY.trigger && DY._executeCurrent(yY.CreateNew(rY, void 0, FY)), rY.actionManager.hasSpecificTrigger(13, (YY => {
                  const rY = YY.mesh ? YY.mesh : YY;
                  return FY === rY
                })) && 13 !== DY.trigger || rY._intersectionsInProgress.splice(IY, 1))
              }
            }
        }
      }
      _advancePhysicsEngineStep(YY) {}
      _animate(YY) {}
      animate() {
        if (this._engine.isDeterministicLockStep()) {
          let YY = Math.max(ID.MinDeltaTime, Math.min(this._engine.getDeltaTime(), ID.MaxDeltaTime)) + this._timeAccumulator;
          const rY = this._engine.getTimeStep(),
            DY = 1e3 / rY / 1e3;
          let FY = 0;
          const AY = this._engine.getLockstepMaxSteps();
          let IY = Math.floor(YY / rY);
          for (IY = Math.min(IY, AY); YY > 0 && FY < IY;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = rY * DY, this._animate(rY), this.onAfterAnimationsObservable.notifyObservers(this), this.mH && this._advancePhysicsEngineStep(rY), this.onAfterStepObservable.notifyObservers(this), this._currentStepId++, FY++, YY -= rY;
          this._timeAccumulator = YY < 0 ? 0 : YY
        } else {
          const YY = this.useConstantAnimationDeltaTime ? 16 : Math.max(ID.MinDeltaTime, Math.min(this._engine.getDeltaTime(), ID.MaxDeltaTime));
          this._animationRatio = .06 * YY, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.mH && this._advancePhysicsEngineStep(YY)
        }
      }
      _clear() {
        (this.autoClearDepthAndStencil || this.autoClear) && this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil)
      }
      _checkCameraRenderTarget(YY) {
        if (YY?.outputRenderTarget && !YY?.isRigCamera && (YY.outputRenderTarget._cleared = !1), YY?.rigCameras?.length)
          for (let rY = 0; rY < YY.rigCameras.length; ++rY) {
            const DY = YY.rigCameras[rY].outputRenderTarget;
            DY && (DY._cleared = !1)
          }
      }
      resetDrawCache(YY) {
        if (this.meshes)
          for (const rY of this.meshes) rY.resetDrawCache(YY)
      }
      _renderWithFrameGraph() {
        let YY = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          rY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.activeCamera = null, this.activeCameras = null, YY)
          for (const DY of this.cameras)
            if (DY.update(), 0 !== DY.cameraRigMode)
              for (let YY = 0; YY < DY._rigCameras.length; YY++) DY._rigCameras[YY].update();
        this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
        try {
          this._renderWithFrameGraphAfterBeforeRender(rY)
        } finally {
          this._renderingMeshEvaluationDepth--
        }
      }
      _renderWithFrameGraphAfterBeforeRender(YY) {
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.reset();
        const rY = this._frameGraph?.findMainCamera() ?? null;
        if (this.renderTargetsEnabled) {
          this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), FY.i.StartPerformanceCounter("Custom render targets", this._renderTargets.length > 0);
          for (let YY = 0; YY < this._renderTargets.length; YY++) {
            const DY = this._renderTargets.data[YY],
              FY = DY.activeCamera || rY;
            this._renderRenderTarget(DY, FY, !0, this.dumpNextRenderTargets)
          }
          FY.i.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
        }
        this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
        for (let DY = 0, FY = this._beforeClearStage; DY < FY.length; DY++) {
          FY[DY].action()
        }
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
        else {
          const rY = this.getActiveMeshCandidates(),
            DY = rY.length;
          if (this._activeMeshesFrozen) {
            if (!this._skipEvaluateActiveMeshesCompletely)
              for (let YY = 0; YY < DY; YY++) {
                const DY = rY.data[YY];
                DY._internalAbstractMeshDataInfo._wasActiveLastFrame && DY.computeWorldMatrix()
              }
            if (this.particlesEnabled) {
              const YY = this._activeParticleSystems.length;
              for (let rY = 0; rY < YY; rY++) this._activeParticleSystems.data[rY].animate()
            }
          } else {
            this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
            for (let FY = 0; FY < DY; FY++) {
              const DY = rY.data[FY];
              DY._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, DY.isBlocked || (this._totalVertices.addCount(DY.getTotalVertices(), !1), DY.isReady() && DY.isEnabled() && !DY.pa.hasAZeroComponent && (DY.computeWorldMatrix(YY), DY.actionManager && DY.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(DY)))
            }
            if (this.particlesEnabled)
              for (let YY = 0; YY < this.YV.length; YY++) {
                const rY = this.YV[YY];
                if (!rY.isStarted() || !rY.emitter) continue;
                const DY = rY.emitter;
                DY.position && !DY.isEnabled() || (this._activeParticleSystems.push(rY), rY.animate())
              }
          }
        }
        this.frameGraph?.execute()
      }
      _renderRenderTarget(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          FY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._intermediateRendering = !0, YY._shouldRender()) {
          if (this._renderId++, this.activeCamera = rY, !this.activeCamera) throw new Error("Active camera not set");
          this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), YY.render(DY, FY)
        }
        this._intermediateRendering = !1
      }
      render() {
        let YY = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.CrY) return;
        const DY = this._renderingMeshEvaluationDepth;
        try {
          this._renderFrame(YY, rY)
        } finally {
          this._renderingMeshEvaluationDepth = DY
        }
      }
      _renderFrame(YY, rY) {
        if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), oY.c.hT = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCameras?.length)
          for (const DY of this.activeCameras) this._checkCameraRenderTarget(DY);
        this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimationsObservable.notifyObservers(this), this.actionManager && this.actionManager.processTrigger(11), rY || this.animate();
        for (let DY = 0, FY = this._beforeCameraUpdateStage; DY < FY.length; DY++) {
          FY[DY].action()
        }
        if (YY)
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let DY = 0; DY < this.activeCameras.length; DY++) {
              const YY = this.activeCameras[DY];
              if (YY.update(), 0 !== YY.cameraRigMode)
                for (let rY = 0; rY < YY._rigCameras.length; rY++) YY._rigCameras[rY].update()
            } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode))
              for (let DY = 0; DY < this.activeCamera._rigCameras.length; DY++) this.activeCamera._rigCameras[DY].update();
        if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this._renderingMeshEvaluationDepth++, this.customRenderFunction(YY, rY);
        else {
          this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++, this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
          const YY = this.activeCameras?.length ? this.activeCameras[0] : this.activeCamera;
          if (this.renderTargetsEnabled) {
            FY.i.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
            for (let rY = 0; rY < this.customRenderTargets.length; rY++) {
              const DY = this.customRenderTargets[rY],
                FY = DY.activeCamera || this.activeCamera;
              this._renderRenderTarget(DY, FY, YY !== FY, this.dumpNextRenderTargets)
            }
            FY.i.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
          }
          this._engine.currentRenderPassId = YY?.renderPassId ?? 0, this.activeCamera = YY, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
          for (let rY = 0, DY = this._beforeClearStage; rY < DY.length; rY++) {
            DY[rY].action()
          }
          this._clearFrameBuffer(this.activeCamera);
          for (let rY = 0, DY = this._gatherRenderTargetsStage; rY < DY.length; rY++) {
            DY[rY].action(this._renderTargets)
          }
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let rY = 0; rY < this.activeCameras.length; rY++) this._processSubCameras(this.activeCameras[rY], rY > 0);
          else {
            if (!this.activeCamera) throw new Error("No camera defined");
            this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
          }
        }
        this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
        for (let DY = 0, FY = this._afterRenderStage; DY < FY.length; DY++) {
          FY[DY].action()
        }
        if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
          for (let YY = 0; YY < this._toBeDisposed.length; YY++) {
            const rY = this._toBeDisposed[YY];
            rY && rY.dispose()
          }
          this._toBeDisposed.length = 0
        }
        this.dumpNextRenderTargets && (this.dumpNextRenderTargets = !1), this._activeBones.addCount(0, !0), this._activeIndices.addCount(0, !0), this._activeParticles.addCount(0, !0), this._engine.restoreDefaultFramebuffer()
      }
      freezeMaterials() {
        for (let YY = 0; YY < this.materials.length; YY++) this.materials[YY].freeze()
      }
      unfreezeMaterials() {
        for (let YY = 0; YY < this.materials.length; YY++) this.materials[YY].unfreeze()
      }
      dispose() {
        if (this.CrY) return;
        if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStage.clear(), this._evaluateSubMeshStage.clear(), this._preActiveMeshStage.clear(), this._cameraDrawRenderTargetStage.clear(), this._beforeCameraDrawStage.clear(), this._beforeRenderTargetDrawStage.clear(), this._beforeRenderingGroupDrawStage.clear(), this._beforeRenderingMeshStage.clear(), this._afterRenderingMeshStage.clear(), this._afterRenderingGroupDrawStage.clear(), this._afterCameraDrawStage.clear(), this._afterRenderTargetDrawStage.clear(), this._afterRenderStage.clear(), this._beforeCameraUpdateStage.clear(), this._beforeClearStage.clear(), this._gatherRenderTargetsStage.clear(), this._gatherActiveCameraRenderTargetsStage.clear(), this._pointerMoveStage.clear(), this._pointerDownStage.clear(), this._pointerUpStage.clear(), this._isReadyChecks.length = 0, this.importedMeshesFiles = [], this._activeAnimatables && (0, SY.b)(this.stopAllAnimations)) {
          for (const YY of this._activeAnimatables) YY.onAnimationEndObservable.clear(), YY.onAnimationEnd = null;
          this.stopAllAnimations()
        }
        this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSystems.dispose(), this._activeSkeletons.dispose(), this._softwareSkinnedMeshes.dispose(), this._renderTargets.dispose(), this._materialsRenderTargets.dispose(), this._registeredForLateAnimationBindings.dispose(), this._animationWrites.length = 0, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._meshesForIntersections.dispose(), this._toBeDisposed.length = 0;
        const YY = this._activeRequests.slice();
        for (const IY of YY) IY.abort();
        this._activeRequests.length = 0;
        try {
          this.wT.notifyObservers(this)
        } catch (AY) {
          YD.d.Error("An error occurred while calling onDisposeObservable!", AY)
        }
        this.detachControl();
        const rY = this._engine.getInputElement?.();
        if (rY)
          for (let IY = 0; IY < this.cameras.length; IY++) this.cameras[IY].detachControl();
        this._disposeList(this.animationGroups), this._disposeList(this.lights), this._defaultMaterial && this._defaultMaterial.dispose(), this._disposeList(this.multiMaterials), this._disposeList(this.materials), this._disposeList(this.meshes, (YY => YY.dispose(!0))), this._disposeList(this.transformNodes, (YY => YY.dispose(!0)));
        const DY = this.cameras;
        this._disposeList(DY), this._disposeList(this.YV), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multiviewSceneUbo.dispose(), this.postProcessManager.dispose(), this._disposeList(this._components);
        let FY = this._engine.scenes.indexOf(this);
        if (FY > -1 && this._engine.scenes.splice(FY, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, oY.g)(), VY.d._LastCreatedScene === this) {
          VY.d._LastCreatedScene = null;
          let YY = VY.d.Instances.length - 1;
          for (; YY >= 0;) {
            const rY = VY.d.Instances[YY];
            if (rY.scenes.length > 0) {
              VY.d._LastCreatedScene = rY.scenes[this._engine.scenes.length - 1];
              break
            }
            YY--
          }
        }
        FY = this._engine._virtualScenes.indexOf(this), FY > -1 && this._engine._virtualScenes.splice(FY, 1), this._engine.wipeCaches(!0), this.wT.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clear(), this.onAfterRenderTargetsRenderObservable.clear(), this.onAfterStepObservable.clear(), this.onBeforeStepObservable.clear(), this.onBeforeActiveMeshesEvaluationObservable.clear(), this.onAfterActiveMeshesEvaluationObservable.clear(), this.onBeforeParticlesRenderingObservable.clear(), this.onAfterParticlesRenderingObservable.clear(), this.onBeforeDrawPhaseObservable.clear(), this.onAfterDrawPhaseObservable.clear(), this.onBeforeAnimationsObservable.clear(), this.onAfterAnimationsObservable.clear(), this.onDataLoadedObservable.clear(), this.onBeforeRenderingGroupObservable.clear(), this.onAfterRenderingGroupObservable.clear(), this.onMeshImportedObservable.clear(), this.onBeforeCameraRenderObservable.clear(), this.onAfterCameraRenderObservable.clear(), this.onAfterRenderCameraObservable.clear(), this.onReadyObservable.clear(), this.onNewCameraAddedObservable.clear(), this.onCameraRemovedObservable.clear(), this.onNewLightAddedObservable.clear(), this.onLightRemovedObservable.clear(), this.onNewGeometryAddedObservable.clear(), this.onGeometryRemovedObservable.clear(), this.onNewTransformNodeAddedObservable.clear(), this.onTransformNodeRemovedObservable.clear(), this.onNewMeshAddedObservable.clear(), this.onMeshRemovedObservable.clear(), this.onNewSkeletonAddedObservable.clear(), this.onSkeletonRemovedObservable.clear(), this.onNewMaterialAddedObservable.clear(), this.onNewMultiMaterialAddedObservable.clear(), this.onMaterialRemovedObservable.clear(), this.onMultiMaterialRemovedObservable.clear(), this.onNewTextureAddedObservable.clear(), this.onTextureRemovedObservable.clear(), this.onNewFrameGraphAddedObservable.clear(), this.onFrameGraphRemovedObservable.clear(), this.onNewObjectRendererAddedObservable.clear(), this.onObjectRendererRemovedObservable.clear(), this.onPrePointerObservable.clear(), this.onPointerObservable.clear(), this.onPreKeyboardObservable.clear(), this.onKeyboardObservable.clear(), this.onActiveCameraChanged.clear(), this.onScenePerformancePriorityChangedObservable.clear(), this.onClearColorChangedObservable.clear(), this.onEnvironmentTextureChangedObservable.clear(), this.onMeshUnderPointerUpdatedObservable.clear(), this._isDisposed = !0
      }
      _disposeList(YY, rY) {
        const DY = YY.slice(0);
        rY = rY ?? (YY => YY.dispose());
        for (const FY of DY) rY(FY);
        YY.length = 0
      }
      get CrY() {
        return this._isDisposed
      }
      clearCachedVertexData() {
        for (let YY = 0; YY < this.meshes.length; YY++) {
          const rY = this.meshes[YY].geometry;
          rY && rY.clearCachedData()
        }
      }
      cleanCachedTextureBuffer() {
        for (const YY of this.textures) {
          YY._buffer && (YY._buffer = null)
        }
      }
      getWorldExtends(YY) {
        const rY = new vY.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          DY = new vY.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        YY = YY || (() => !0);
        const FY = this.meshes.filter(YY);
        for (const AY of FY) {
          if (AY.computeWorldMatrix(!0), !AY.qm || 0 === AY.qm.length || AY.infiniteDistance) continue;
          const YY = AY.oB(),
            FY = YY.boundingBox.minimumWorld,
            IY = YY.boundingBox.maximumWorld;
          vY.r.CheckExtends(FY, rY, DY), vY.r.CheckExtends(IY, rY, DY)
        }
        return rY.x === Number.MAX_VALUE ? {
          min: vY.r.Zero(),
          max: vY.r.Zero()
        } : {
          min: rY,
          max: DY
        }
      }
      createPickingRay(YY, rY, DY, FY) {
        throw (0, SY.i)("Ray")
      }
      createPickingRayToRef(YY, rY, DY, FY, AY) {
        throw (0, SY.i)("Ray")
      }
      createPickingRayInCameraSpace(YY, rY, DY) {
        throw (0, SY.i)("Ray")
      }
      createPickingRayInCameraSpaceToRef(YY, rY, DY, FY) {
        throw (0, SY.i)("Ray")
      }
      Ps(YY, rY, DY, FY, AY, IY) {
        const RY = (0, SY.i)("Ray", !0);
        return RY && YD.d.Warn(RY), new iY.c
      }
      pickWithBoundingInfo(YY, rY, DY, FY, AY) {
        const IY = (0, SY.i)("Ray", !0);
        return IY && YD.d.Warn(IY), new iY.c
      }
      pickWithRay(YY, rY, DY, FY) {
        throw (0, SY.i)("Ray")
      }
      multiPick(YY, rY, DY, FY, AY) {
        throw (0, SY.i)("Ray")
      }
      multiPickWithRay(YY, rY, DY) {
        throw (0, SY.i)("Ray")
      }
      setPointerOverMesh(YY, rY, DY) {
        this._inputManager.setPointerOverMesh(YY, rY, DY)
      }
      getPointerOverMesh() {
        return this._inputManager.getPointerOverMesh()
      }
      _rebuildGeometries() {
        for (const YY of this.geometries) YY._rebuild();
        for (const YY of this.meshes) YY._rebuild();
        this.postProcessManager && this.postProcessManager._rebuild();
        for (const YY of this._components) YY.rebuild();
        for (const YY of this.YV) YY.rebuild();
        if (this.spriteManagers)
          for (const YY of this.spriteManagers) YY.rebuild()
      }
      _rebuildTextures() {
        for (const YY of this.textures) YY._rebuild(!0);
        this.markAllMaterialsAsDirty(1)
      }
      _getByTags(YY, rY, DY) {
        if (void 0 === rY) return YY;
        const FY = [];
        for (const AY in YY) {
          const IY = YY[AY];
          aY.e && aY.e.MatchesQuery(IY, rY) && (!DY || DY(IY)) && FY.push(IY)
        }
        return FY
      }
      getMeshesByTags(YY, rY) {
        return this._getByTags(this.meshes, YY, rY)
      }
      getCamerasByTags(YY, rY) {
        return this._getByTags(this.cameras, YY, rY)
      }
      getLightsByTags(YY, rY) {
        return this._getByTags(this.lights, YY, rY)
      }
      getMaterialByTags(YY, rY) {
        return this._getByTags(this.materials, YY, rY).concat(this._getByTags(this.multiMaterials, YY, rY))
      }
      getTransformNodesByTags(YY, rY) {
        return this._getByTags(this.transformNodes, YY, rY)
      }
      setRenderingOrder(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(YY, rY, DY, FY)
      }
      setRenderingAutoClearDepthStencil(YY, rY) {
        let DY = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          FY = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(YY, rY, DY, FY)
      }
      getAutoClearDepthStencilSetup(YY) {
        return this._renderingManager.getAutoClearDepthStencilSetup(YY)
      }
      _forceBlockMaterialDirtyMechanism(YY) {
        this._blockMaterialDirtyMechanism = YY
      }
      get blockMaterialDirtyMechanism() {
        return this._blockMaterialDirtyMechanism
      }
      set blockMaterialDirtyMechanism(YY) {
        this._blockMaterialDirtyMechanism !== YY && (this._blockMaterialDirtyMechanism = YY, YY || this.markAllMaterialsAsDirty(127))
      }
      markAllMaterialsAsDirty(YY, rY) {
        if (!this._blockMaterialDirtyMechanism)
          for (const DY of this.materials) rY && !rY(DY) || DY.nYY(YY)
      }
      _loadFile(YY, rY, DY, FY, AY, IY, RY) {
        const OY = (0, nY.i)(YY, rY, DY, FY ? this.offlineProvider : void 0, AY, IY, RY);
        return this._activeRequests.push(OY), OY.onCompleteObservable.add((YY => {
          this._activeRequests.splice(this._activeRequests.indexOf(YY), 1)
        })), OY
      }
      async _loadFileAsync(YY, rY, DY, FY, AY) {
        return await new Promise(((IY, RY) => {
          this._loadFile(YY, (YY => {
            IY(YY)
          }), rY, DY, FY, ((YY, rY) => {
            RY(rY)
          }), AY)
        }))
      }
      async _loadDelayedFileAsync(YY, rY, DY) {
        this._delayedFileRequests || (this._delayedFileRequests = new Map);
        const FY = `${YY}|${rY?"binary":"string"}`;
        let AY = this._delayedFileRequests.get(FY);
        if (!AY) {
          AY = rY ? this._loadFileAsync(YY, void 0, DY, !0) : this._loadFileAsync(YY, void 0, DY, !1);
          const IY = AY;
          (async () => {
            try {
              await IY
            } catch {}
            this._delayedFileRequests?.delete(FY)
          })(), this._delayedFileRequests.set(FY, AY)
        }
        return await AY
      }
      _requestFile(YY, rY, DY, FY, AY, IY, RY) {
        const OY = (0, nY.w)(YY, rY, DY, FY ? this.offlineProvider : void 0, AY, IY, RY);
        return this._activeRequests.push(OY), OY.onCompleteObservable.add((YY => {
          this._activeRequests.splice(this._activeRequests.indexOf(YY), 1)
        })), OY
      }
      async _requestFileAsync(YY, rY, DY, FY, AY) {
        return await new Promise(((IY, RY) => {
          this._requestFile(YY, (YY => {
            IY(YY)
          }), rY, DY, FY, (YY => {
            RY(YY)
          }), AY)
        }))
      }
      _readFile(YY, rY, DY, FY, AY) {
        const IY = (0, nY.p)(YY, rY, DY, FY, AY);
        return this._activeRequests.push(IY), IY.onCompleteObservable.add((YY => {
          this._activeRequests.splice(this._activeRequests.indexOf(YY), 1)
        })), IY
      }
      async _readFileAsync(YY, rY, DY) {
        return await new Promise(((FY, AY) => {
          this._readFile(YY, (YY => {
            FY(YY)
          }), rY, DY, (YY => {
            AY(YY)
          }))
        }))
      }
      getPerfCollector() {
        throw (0, SY.i)("performanceViewerSceneExtension")
      }
      setActiveCameraByID(YY) {
        return this.setActiveCameraById(YY)
      }
      getMaterialByID(YY) {
        return this.getMaterialById(YY)
      }
      getLastMaterialByID(YY) {
        return this.getLastMaterialById(YY)
      }
      getTextureByUniqueID(YY) {
        return this.getTextureByUniqueId(YY)
      }
      getCameraByID(YY) {
        return this.getCameraById(YY)
      }
      getCameraByUniqueID(YY) {
        return this.getCameraByUniqueId(YY)
      }
      getBoneByID(YY) {
        return this.getBoneById(YY)
      }
      getLightByID(YY) {
        return this.getLightById(YY)
      }
      getLightByUniqueID(YY) {
        return this.getLightByUniqueId(YY)
      }
      getParticleSystemByID(YY) {
        return this.getParticleSystemById(YY)
      }
      getGeometryByID(YY) {
        return this.getGeometryById(YY)
      }
      getMeshByID(YY) {
        return this.getMeshById(YY)
      }
      getMeshByUniqueID(YY) {
        return this.getMeshByUniqueId(YY)
      }
      getLastMeshByID(YY) {
        return this.getLastMeshById(YY)
      }
      getMeshesByID(YY) {
        return this.getMeshesById(YY)
      }
      getTransformNodeByID(YY) {
        return this.getTransformNodeById(YY)
      }
      getTransformNodeByUniqueID(YY) {
        return this.getTransformNodeByUniqueId(YY)
      }
      getTransformNodesByID(YY) {
        return this.getTransformNodesById(YY)
      }
      getNodeByID(YY) {
        return this.getNodeById(YY)
      }
      getLastEntryByID(YY) {
        return this.getLastEntryById(YY)
      }
      getLastSkeletonByID(YY) {
        return this.getLastSkeletonById(YY)
      }
    }
    ID.FOGMODE_NONE = 0, ID.FOGMODE_EXP = 1, ID.FOGMODE_EXP2 = 2, ID.FOGMODE_LINEAR = 3, ID.MinDeltaTime = 1, ID.MaxDeltaTime = 1e3, ID._OriginalDefaultMaterialFactory = ID.DefaultMaterialFactory;
    let RD = !1;

    function OD() {
      RD || (RD = !0, (0, rD.i)("BABYLON.Scene", ID))
    }(tY = ID.prototype).sortActiveAnimatables ?? (tY.sortActiveAnimatables = (0, SY.g)("Scene", "sortActiveAnimatables")), (Yr = ID.prototype).beginWeightedAnimation ?? (Yr.beginWeightedAnimation = (0, SY.g)("Scene", "beginWeightedAnimation")), (rr = ID.prototype).beginAnimation ?? (rr.beginAnimation = (0, SY.g)("Scene", "beginAnimation")), (Dr = ID.prototype).beginHierarchyAnimation ?? (Dr.beginHierarchyAnimation = (0, SY.g)("Scene", "beginHierarchyAnimation")), (Fr = ID.prototype).beginDirectAnimation ?? (Fr.beginDirectAnimation = (0, SY.g)("Scene", "beginDirectAnimation")), (Ar = ID.prototype).beginDirectHierarchyAnimation ?? (Ar.beginDirectHierarchyAnimation = (0, SY.g)("Scene", "beginDirectHierarchyAnimation")), (Ir = ID.prototype).getAnimatableByTarget ?? (Ir.getAnimatableByTarget = (0, SY.g)("Scene", "getAnimatableByTarget")), (Rr = ID.prototype).getAllAnimatablesByTarget ?? (Rr.getAllAnimatablesByTarget = (0, SY.g)("Scene", "getAllAnimatablesByTarget")), (Or = ID.prototype).stopAllAnimations ?? (Or.stopAllAnimations = (0, SY.g)("Scene", "stopAllAnimations")), (gr = ID.prototype).getSoundByName ?? (gr.getSoundByName = (0, SY.g)("Scene", "getSoundByName")), (ar = ID.prototype).createOrUpdateSelectionOctree ?? (ar.createOrUpdateSelectionOctree = (0, SY.g)("Scene", "createOrUpdateSelectionOctree")), (vr = ID.prototype).createDefaultLight ?? (vr.createDefaultLight = (0, SY.g)("Scene", "createDefaultLight")), (ur = ID.prototype).createDefaultCamera ?? (ur.createDefaultCamera = (0, SY.g)("Scene", "createDefaultCamera")), (sr = ID.prototype).createDefaultCameraOrLight ?? (sr.createDefaultCameraOrLight = (0, SY.g)("Scene", "createDefaultCameraOrLight")), (ir = ID.prototype).createDefaultSkybox ?? (ir.createDefaultSkybox = (0, SY.g)("Scene", "createDefaultSkybox")), (yr = ID.prototype).createDefaultEnvironment ?? (yr.createDefaultEnvironment = (0, SY.g)("Scene", "createDefaultEnvironment")), (Qr = ID.prototype).createDefaultVRExperience ?? (Qr.createDefaultVRExperience = (0, SY.g)("Scene", "createDefaultVRExperience")), (or = ID.prototype).createDefaultXRExperienceAsync ?? (or.createDefaultXRExperienceAsync = (0, SY.g)("Scene", "createDefaultXRExperienceAsync")), (Wr = ID.prototype).getGlowLayerByName ?? (Wr.getGlowLayerByName = (0, SY.g)("Scene", "getGlowLayerByName")), (Er = ID.prototype).getHighlightLayerByName ?? (Er.getHighlightLayerByName = (0, SY.g)("Scene", "getHighlightLayerByName")), (mr = ID.prototype).getSelectionOutlineLayerByName ?? (mr.getSelectionOutlineLayerByName = (0, SY.g)("Scene", "getSelectionOutlineLayerByName")), (Vr = ID.prototype).removeLensFlareSystem ?? (Vr.removeLensFlareSystem = (0, SY.g)("Scene", "removeLensFlareSystem")), (Sr = ID.prototype).addLensFlareSystem ?? (Sr.addLensFlareSystem = (0, SY.g)("Scene", "addLensFlareSystem")), (lr = ID.prototype).getLensFlareSystemByName ?? (lr.getLensFlareSystemByName = (0, SY.g)("Scene", "getLensFlareSystemByName")), (Tr = ID.prototype).getLensFlareSystemByID ?? (Tr.getLensFlareSystemByID = (0, SY.g)("Scene", "getLensFlareSystemByID")), (er = ID.prototype).getLensFlareSystemById ?? (er.getLensFlareSystemById = (0, SY.g)("Scene", "getLensFlareSystemById")), (Nr = ID.prototype).getPhysicsEngine ?? (Nr.getPhysicsEngine = (0, SY.g)("Scene", "getPhysicsEngine")), (Br = ID.prototype).enablePhysics ?? (Br.enablePhysics = (0, SY.g)("Scene", "enablePhysics")), (cr = ID.prototype).disablePhysicsEngine ?? (cr.disablePhysicsEngine = (0, SY.g)("Scene", "disablePhysicsEngine")), (Kr = ID.prototype).isPhysicsEnabled ?? (Kr.isPhysicsEnabled = (0, SY.g)("Scene", "isPhysicsEnabled")), (Hr = ID.prototype).deleteCompoundImpostor ?? (Hr.deleteCompoundImpostor = (0, SY.g)("Scene", "deleteCompoundImpostor")), (zr = ID.prototype).removeReflectionProbe ?? (zr.removeReflectionProbe = (0, SY.g)("Scene", "removeReflectionProbe")), (Zr = ID.prototype).addReflectionProbe ?? (Zr.addReflectionProbe = (0, SY.g)("Scene", "addReflectionProbe")), (Cr = ID.prototype).getBoundingBoxRenderer ?? (Cr.getBoundingBoxRenderer = (0, SY.g)("Scene", "getBoundingBoxRenderer")), (fr = ID.prototype).enableDepthRenderer ?? (fr.enableDepthRenderer = (0, SY.g)("Scene", "enableDepthRenderer")), (jr = ID.prototype).disableDepthRenderer ?? (jr.disableDepthRenderer = (0, SY.g)("Scene", "disableDepthRenderer")), (hr = ID.prototype).enableFluidRenderer ?? (hr.enableFluidRenderer = (0, SY.g)("Scene", "enableFluidRenderer")), (dr = ID.prototype).disableFluidRenderer ?? (dr.disableFluidRenderer = (0, SY.g)("Scene", "disableFluidRenderer")), (Jr = ID.prototype).enableGeometryBufferRenderer ?? (Jr.enableGeometryBufferRenderer = (0, SY.g)("Scene", "enableGeometryBufferRenderer")), (Mr = ID.prototype).disableGeometryBufferRenderer ?? (Mr.disableGeometryBufferRenderer = (0, SY.g)("Scene", "disableGeometryBufferRenderer")), (wr = ID.prototype).enableIblCdfGenerator ?? (wr.enableIblCdfGenerator = (0, SY.g)("Scene", "enableIblCdfGenerator")), (br = ID.prototype).disableIblCdfGenerator ?? (br.disableIblCdfGenerator = (0, SY.g)("Scene", "disableIblCdfGenerator")), (Xr = ID.prototype).getOutlineRenderer ?? (Xr.getOutlineRenderer = (0, SY.g)("Scene", "getOutlineRenderer")), (qr = ID.prototype).enablePrePassRenderer ?? (qr.enablePrePassRenderer = (0, SY.g)("Scene", "enablePrePassRenderer")), (pr = ID.prototype).disablePrePassRenderer ?? (pr.disablePrePassRenderer = (0, SY.g)("Scene", "disablePrePassRenderer")), (kr = ID.prototype).enableSubSurfaceForPrePass ?? (kr.enableSubSurfaceForPrePass = (0, SY.g)("Scene", "enableSubSurfaceForPrePass")), (Gr = ID.prototype).disableSubSurfaceForPrePass ?? (Gr.disableSubSurfaceForPrePass = (0, SY.g)("Scene", "disableSubSurfaceForPrePass")), (xr = ID.prototype).pickSprite ?? (xr.pickSprite = (0, SY.g)("Scene", "pickSprite")), (nr = ID.prototype).pickSpriteWithRay ?? (nr.pickSpriteWithRay = (0, SY.g)("Scene", "pickSpriteWithRay")), (Pr = ID.prototype).multiPickSprite ?? (Pr.multiPickSprite = (0, SY.g)("Scene", "multiPickSprite")), (Ur = ID.prototype).multiPickSpriteWithRay ?? (Ur.multiPickSpriteWithRay = (0, SY.g)("Scene", "multiPickSpriteWithRay")), (Lr = ID.prototype).setPointerOverSprite ?? (Lr.setPointerOverSprite = (0, SY.g)("Scene", "setPointerOverSprite")), (tr = ID.prototype).getPointerOverSprite ?? (tr.getPointerOverSprite = (0, SY.g)("Scene", "getPointerOverSprite")), Object.getOwnPropertyDescriptor(ID.prototype, "mainSoundTrack") || Object.defineProperty(ID.prototype, "mainSoundTrack", (0, SY.c)("Scene", "mainSoundTrack")), Object.getOwnPropertyDescriptor(ID.prototype, "soundTracks") || Object.defineProperty(ID.prototype, "soundTracks", (0, SY.c)("Scene", "soundTracks")), Object.getOwnPropertyDescriptor(ID.prototype, "audioEnabled") || Object.defineProperty(ID.prototype, "audioEnabled", (0, SY.c)("Scene", "audioEnabled")), Object.getOwnPropertyDescriptor(ID.prototype, "headphone") || Object.defineProperty(ID.prototype, "headphone", (0, SY.c)("Scene", "headphone")), Object.getOwnPropertyDescriptor(ID.prototype, "audioListenerPositionProvider") || Object.defineProperty(ID.prototype, "audioListenerPositionProvider", (0, SY.c)("Scene", "audioListenerPositionProvider")), Object.getOwnPropertyDescriptor(ID.prototype, "audioListenerRotationProvider") || Object.defineProperty(ID.prototype, "audioListenerRotationProvider", (0, SY.c)("Scene", "audioListenerRotationProvider")), Object.getOwnPropertyDescriptor(ID.prototype, "audioPositioningRefreshRate") || Object.defineProperty(ID.prototype, "audioPositioningRefreshRate", (0, SY.c)("Scene", "audioPositioningRefreshRate")), Object.getOwnPropertyDescriptor(ID.prototype, "selectionOctree") || Object.defineProperty(ID.prototype, "selectionOctree", (0, SY.c)("Scene", "selectionOctree")), Object.getOwnPropertyDescriptor(ID.prototype, "debugLayer") || Object.defineProperty(ID.prototype, "debugLayer", (0, SY.c)("Scene", "debugLayer")), Object.getOwnPropertyDescriptor(ID.prototype, "gamepadManager") || Object.defineProperty(ID.prototype, "gamepadManager", (0, SY.c)("Scene", "gamepadManager")), Object.getOwnPropertyDescriptor(ID.prototype, "simplificationQueue") || Object.defineProperty(ID.prototype, "simplificationQueue", (0, SY.c)("Scene", "simplificationQueue")), Object.getOwnPropertyDescriptor(ID.prototype, "onBeforePhysicsObservable") || Object.defineProperty(ID.prototype, "onBeforePhysicsObservable", (0, SY.c)("Scene", "onBeforePhysicsObservable")), Object.getOwnPropertyDescriptor(ID.prototype, "onAfterPhysicsObservable") || Object.defineProperty(ID.prototype, "onAfterPhysicsObservable", (0, SY.c)("Scene", "onAfterPhysicsObservable")), Object.getOwnPropertyDescriptor(ID.prototype, "reflectionProbes") || Object.defineProperty(ID.prototype, "reflectionProbes", (0, SY.c)("Scene", "reflectionProbes")), Object.getOwnPropertyDescriptor(ID.prototype, "forceShowBoundingBoxes") || Object.defineProperty(ID.prototype, "forceShowBoundingBoxes", (0, SY.c)("Scene", "forceShowBoundingBoxes")), Object.getOwnPropertyDescriptor(ID.prototype, "depthPeelingRenderer") || Object.defineProperty(ID.prototype, "depthPeelingRenderer", (0, SY.c)("Scene", "depthPeelingRenderer")), Object.getOwnPropertyDescriptor(ID.prototype, "useOrderIndependentTransparency") || Object.defineProperty(ID.prototype, "useOrderIndependentTransparency", (0, SY.c)("Scene", "useOrderIndependentTransparency")), Object.getOwnPropertyDescriptor(ID.prototype, "fluidRenderer") || Object.defineProperty(ID.prototype, "fluidRenderer", (0, SY.c)("Scene", "fluidRenderer")), Object.getOwnPropertyDescriptor(ID.prototype, "geometryBufferRenderer") || Object.defineProperty(ID.prototype, "geometryBufferRenderer", (0, SY.c)("Scene", "geometryBufferRenderer")), Object.getOwnPropertyDescriptor(ID.prototype, "iblCdfGenerator") || Object.defineProperty(ID.prototype, "iblCdfGenerator", (0, SY.c)("Scene", "iblCdfGenerator")), Object.getOwnPropertyDescriptor(ID.prototype, "prePassRenderer") || Object.defineProperty(ID.prototype, "prePassRenderer", (0, SY.c)("Scene", "prePassRenderer")), Object.getOwnPropertyDescriptor(ID.prototype, "subSurfaceConfiguration") || Object.defineProperty(ID.prototype, "subSurfaceConfiguration", (0, SY.c)("Scene", "subSurfaceConfiguration")), Object.getOwnPropertyDescriptor(ID.prototype, "spriteManagers") || Object.defineProperty(ID.prototype, "spriteManagers", (0, SY.c)("Scene", "spriteManagers")), Object.getOwnPropertyDescriptor(ID.prototype, "onBeforeSpritesRenderingObservable") || Object.defineProperty(ID.prototype, "onBeforeSpritesRenderingObservable", (0, SY.c)("Scene", "onBeforeSpritesRenderingObservable")), Object.getOwnPropertyDescriptor(ID.prototype, "onAfterSpritesRenderingObservable") || Object.defineProperty(ID.prototype, "onAfterSpritesRenderingObservable", (0, SY.c)("Scene", "onAfterSpritesRenderingObservable"))
  },
  39296: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => FY,
      e: () => AY
    });
    class FY {}
    FY.NAME_EFFECTLAYER = "EffectLayer", FY.NAME_LAYER = "Layer", FY.NAME_LENSFLARESYSTEM = "LensFlareSystem", FY.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", FY.NAME_PARTICLESYSTEM = "ParticleSystem", FY.NAME_GAMEPAD = "Gamepad", FY.NAME_SIMPLIFICATIONQUEUE = "SimplificationQueue", FY.NAME_GEOMETRYBUFFERRENDERER = "GeometryBufferRenderer", FY.NAME_PREPASSRENDERER = "PrePassRenderer", FY.NAME_DEPTHRENDERER = "DepthRenderer", FY.NAME_DEPTHPEELINGRENDERER = "DepthPeelingRenderer", FY.NAME_POSTPROCESSRENDERPIPELINEMANAGER = "PostProcessRenderPipelineManager", FY.NAME_SPRITE = "Sprite", FY.NAME_SUBSURFACE = "SubSurface", FY.NAME_OUTLINERENDERER = "Outline", FY.NAME_PROCEDURALTEXTURE = "ProceduralTexture", FY.NAME_SHADOWGENERATOR = "ShadowGenerator", FY.NAME_OCTREE = "BDY", FY.NAME_PHYSICSENGINE = "PhysicsEngine", FY.NAME_AUDIO = "Audio", FY.NAME_FLUIDRENDERER = "FluidRenderer", FY.NAME_IBLCDFGENERATOR = "iblCDFGenerator", FY.NAME_CLUSTEREDLIGHTING = "ClusteredLighting", FY.STEP_ISREADYFORMESH_EFFECTLAYER = 0, FY.STEP_ISREADYFORMESH_DEPTHRENDERER = 1, FY.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER = 0, FY.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER = 0, FY.STEP_PREACTIVEMESH_BOUNDINGBOXRENDERER = 0, FY.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER = 1, FY.STEP_BEFORECAMERADRAW_PREPASS = 0, FY.STEP_BEFORECAMERADRAW_EFFECTLAYER = 1, FY.STEP_BEFORECAMERADRAW_LAYER = 2, FY.STEP_BEFORERENDERTARGETDRAW_PREPASS = 0, FY.STEP_BEFORERENDERTARGETDRAW_LAYER = 1, FY.STEP_BEFORERENDERINGMESH_PREPASS = 0, FY.STEP_BEFORERENDERINGMESH_OUTLINE = 1, FY.STEP_AFTERRENDERINGMESH_PREPASS = 0, FY.STEP_AFTERRENDERINGMESH_OUTLINE = 1, FY.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW = 0, FY.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER = 1, FY.STEP_BEFORECAMERAUPDATE_SIMPLIFICATIONQUEUE = 0, FY.STEP_BEFORECLEAR_PROCEDURALTEXTURE = 0, FY.STEP_BEFORECLEAR_PREPASS = 1, FY.STEP_BEFORERENDERTARGETCLEAR_PREPASS = 0, FY.STEP_AFTERRENDERTARGETDRAW_PREPASS = 0, FY.STEP_AFTERRENDERTARGETDRAW_LAYER = 1, FY.STEP_AFTERCAMERADRAW_PREPASS = 0, FY.STEP_AFTERCAMERADRAW_EFFECTLAYER = 1, FY.STEP_AFTERCAMERADRAW_LENSFLARESYSTEM = 2, FY.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW = 3, FY.STEP_AFTERCAMERADRAW_LAYER = 4, FY.STEP_AFTERCAMERADRAW_FLUIDRENDERER = 5, FY.STEP_AFTERCAMERAPOSTPROCESS_LAYER = 0, FY.STEP_AFTERRENDERTARGETPOSTPROCESS_LAYER = 0, FY.STEP_AFTERRENDER_AUDIO = 0, FY.STEP_GATHERRENDERTARGETS_DEPTHRENDERER = 0, FY.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER = 1, FY.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR = 2, FY.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER = 3, FY.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER = 0, FY.STEP_GATHERACTIVECAMERARENDERTARGETS_FLUIDRENDERER = 1, FY.STEP_GATHERACTIVECAMERARENDERTARGETS_CLUSTEREDLIGHTING = 2, FY.STEP_POINTERMOVE_SPRITE = 0, FY.STEP_POINTERDOWN_SPRITE = 0, FY.STEP_POINTERUP_SPRITE = 0;
    class AY extends Array {
      constructor(YY) {
        super(...YY)
      }
      static Create() {
        return Object.create(AY.prototype)
      }
      registerStep(YY, rY, DY) {
        let FY, AY = 0;
        for (; AY < this.length; AY++) {
          if (FY = this[AY].index, YY < FY) break
        }
        this.splice(AY, 0, {
          index: YY,
          component: rY,
          action: DY.bind(rY)
        })
      }
      clear() {
        this.length = 0
      }
    }
  },
  39127: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => RY,
      g: () => OY,
      i: () => FY,
      j: () => AY,
      m: () => IY
    });

    function FY(YY, rY, DY, FY, AY, IY) {
      function RY(YY) {
        if (void 0 !== YY && "function" !== typeof YY) throw new TypeError("Function expected");
        return YY
      }
      for (var OY, gY = FY.kind, aY = "getter" === gY ? "get" : "setter" === gY ? "set" : "value", vY = !rY && YY ? FY.static ? YY : YY.prototype : null, uY = rY || (vY ? Object.getOwnPropertyDescriptor(vY, FY.name) : {}), sY = !1, iY = DY.length - 1; iY >= 0; iY--) {
        var yY = {};
        for (var QY in FY) yY[QY] = "access" === QY ? {} : FY[QY];
        for (var QY in FY.access) yY.access[QY] = FY.access[QY];
        yY.addInitializer = function(YY) {
          if (sY) throw new TypeError("Cannot add initializers after decoration has completed");
          IY.push(RY(YY || null))
        };
        var oY = (0, DY[iY])("accessor" === gY ? {
          get: uY.get,
          set: uY.set
        } : uY[aY], yY);
        if ("accessor" === gY) {
          if (void 0 === oY) continue;
          if (null === oY || "object" !== typeof oY) throw new TypeError("Object expected");
          (OY = RY(oY.get)) && (uY.get = OY), (OY = RY(oY.set)) && (uY.set = OY), (OY = RY(oY.init)) && AY.unshift(OY)
        } else(OY = RY(oY)) && ("field" === gY ? AY.unshift(OY) : uY[aY] = OY)
      }
      vY && Object.defineProperty(vY, FY.name, uY), sY = !0
    }

    function AY(YY, rY, DY) {
      for (var FY = arguments.length > 2, AY = 0; AY < rY.length; AY++) DY = FY ? rY[AY].call(YY, DY) : rY[AY].call(YY);
      return FY ? DY : void 0
    }

    function IY(YY, rY, DY) {
      return "symbol" === typeof rY && (rY = rY.description ? "[".concat(rY.description, "]") : ""), Object.defineProperty(YY, "name", {
        configurable: !0,
        value: DY ? "".concat(DY, " ", rY) : rY
      })
    }
    Object.create;
    Object.create;

    function RY(YY, rY, DY, FY) {
      if ("a" === DY && !FY) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof rY ? YY !== rY || !FY : !rY.has(YY)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === DY ? FY : "a" === DY ? FY.call(YY) : FY ? FY.value : rY.get(YY)
    }

    function OY(YY, rY, DY, FY, AY) {
      if ("m" === FY) throw new TypeError("Private method is not writable");
      if ("a" === FY && !AY) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof rY ? YY !== rY || !AY : !rY.has(YY)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === FY ? AY.call(YY, DY) : AY ? AY.value = DY : rY.set(YY, DY), DY
    }
    "function" === typeof SuppressedError && SuppressedError
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);