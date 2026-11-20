export const id = 242;
export const ids = [242];
export const modules = {
  39293: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => oz,
      h: () => Dz,
      j: () => Uz,
      m: () => vz
    });
    var Fz = sz(39106),
      Wz = sz(38097),
      Xz = sz(39231),
      Oz = sz(39140);
    class oz {
      get zsz() {
        return this._isDisposed
      }
      constructor(zz, tz, sz) {
        let Wz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Xz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          oz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          vz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          Uz = arguments.length > 7 ? arguments[7] : void 0,
          Kz = arguments.length > 8 ? arguments[8] : void 0;
        this._isAlreadyOwned = !1, this._isDisposed = !1, (0, Oz.b)(), zz && zz.aJ ? this._engine = zz.aJ().FD() : this._engine = zz, this._updatable = sz, this._instanced = oz, this._divisor = Uz || 1, this._label = Kz, tz instanceof Fz.c ? (this._data = null, this._buffer = tz) : (this._data = tz, this._buffer = null), this.byteStride = vz ? Wz : Wz * Float32Array.BYTES_PER_ELEMENT, Xz || this.create()
      }
      createVertexBuffer(zz, tz, sz, Fz, Wz) {
        let Xz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Oz = arguments.length > 6 ? arguments[6] : void 0;
        const oz = Xz ? tz : tz * Float32Array.BYTES_PER_ELEMENT,
          Uz = Fz ? Xz ? Fz : Fz * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
        return new vz(this._engine, this, zz, this._updatable, !0, Uz, void 0 === Wz ? this._instanced : Wz, oz, sz, void 0, void 0, !0, this._divisor || Oz)
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
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        !zz && this._buffer || (zz = zz || this._data, zz && (this._buffer ? this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, zz), this._data = zz) : this._updatable ? (this._buffer = this._engine.createDynamicVertexBuffer(zz, this._label), this._data = zz) : this._buffer = this._engine.createVertexBuffer(zz, void 0, this._label)))
      }
      _rebuild() {
        if (this._data) this._buffer = null, this.create(this._data);
        else {
          if (!this._buffer) return;
          if (this._buffer.au > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.au, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.au, void 0, this._label));
          Wz.e.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
        }
      }
      update(zz) {
        this.create(zz)
      }
      updateDirectly(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, zz, Fz ? tz : tz * Float32Array.BYTES_PER_ELEMENT, sz ? sz * this.byteStride : void 0), this._data = 0 === tz && void 0 === sz ? zz : null)
      }
      _increaseReferences() {
        this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
      }
      dispose() {
        this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
      }
    }
    class vz {
      get zsz() {
        return this._isDisposed
      }
      get instanceDivisor() {
        return this._instanceDivisor
      }
      set instanceDivisor(zz) {
        const tz = 0 != zz;
        this._instanceDivisor = zz, tz !== this._instanced && (this._instanced = tz, this._computeHashCode())
      }
      get _maxVerticesCount() {
        const zz = this.getData();
        return zz ? Array.isArray(zz) ? zz.length / (this.byteStride / 4) - this.byteOffset / 4 : (zz.byteLength - this.byteOffset) / this.byteStride : 0
      }
      constructor(zz, tz, sz, Fz, Wz, Oz, uz, Nz, bz, wz) {
        let Dz, gz = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          Hz = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
          Bz = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
          Pz = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
        if (this._isDisposed = !1, this.engine = zz, "object" === typeof Fz && null !== Fz ? (Dz = Fz.updatable ?? !1, Wz = Fz.postponeInternalCreation, Oz = Fz.stride, uz = Fz.instanced, Nz = Fz.offset, bz = Fz.size, wz = Fz.type, gz = Fz.normalized ?? !1, Hz = Fz.useBytes ?? !1, Bz = Fz.divisor ?? 1, Pz = Fz.takeBufferOwnership ?? !1, this._label = Fz.label) : Dz = !!Fz, tz instanceof oz ? (this._buffer = tz, this._ownsBuffer = Pz) : (this._buffer = new oz(zz, tz, Dz, Oz, Wz, uz, Hz, Bz, this._label), this._ownsBuffer = !0), this.uniqueId = vz._Counter++, this._kind = sz, void 0 === wz) {
          const zz = this.getData();
          this.type = zz ? Kz(zz) : vz.FLOAT
        } else this.type = wz;
        const rz = (0, Xz.q)(this.type);
        Hz ? (this._size = bz || (Oz ? Oz / rz : Uz(sz)), this.byteStride = Oz || this._buffer.byteStride || this._size * rz, this.byteOffset = Nz || 0) : (this._size = bz || Oz || Uz(sz), this.byteStride = Oz ? Oz * rz : this._buffer.byteStride || this._size * rz, this.byteOffset = (Nz || 0) * rz), this.normalized = gz, this._instanced = void 0 !== uz && uz, this._instanceDivisor = uz ? Bz : 0, this._alignBuffer(), this._computeHashCode()
      }
      static _GetTypeHashIndex(zz) {
        switch (zz) {
          case vz.BYTE:
            return 0;
          case vz.UNSIGNED_BYTE:
            return 1;
          case vz.SHORT:
            return 2;
          case vz.UNSIGNED_SHORT:
            return 3;
          case vz.INT:
            return 4;
          case vz.UNSIGNED_INT:
            return 5;
          case vz.FLOAT:
            return 6;
          case vz.HALF_FLOAT:
            return 7;
          default:
            throw new Error(`Invalid vertex buffer type '${zz}'`)
        }
      }
      _computeHashCode() {
        this.hashCode = (vz._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
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
      getFloatData(zz, tz) {
        const sz = this.getData();
        return sz ? (0, Xz.p)(sz, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, zz, tz) : null
      }
      getBuffer() {
        return this._buffer.getBuffer()
      }
      getWrapperBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / (0, Xz.q)(this.type)
      }
      Ltz() {
        return this.byteOffset / (0, Xz.q)(this.type)
      }
      getSize() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, Xz.q)(this.type) : this._size
      }
      getIsInstanced() {
        return this._instanced
      }
      getInstanceDivisor() {
        return this._instanceDivisor
      }
      create(zz) {
        this._buffer.create(zz), this._alignBuffer()
      }
      update(zz) {
        this._buffer.update(zz), this._alignBuffer()
      }
      updateDirectly(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._buffer.updateDirectly(zz, tz, void 0, sz), this._alignBuffer()
      }
      dispose() {
        this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
      }
      forEach(zz, tz) {
        (0, Xz.l)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, zz, this.normalized, ((zz, sz) => {
          for (let Fz = 0; Fz < this._size; Fz++) tz(zz[Fz], sz + Fz)
        }))
      }
      _alignBuffer() {}
    }

    function Uz(zz) {
      switch (zz) {
        case vz.UVKind:
        case vz.UV2Kind:
        case vz.UV3Kind:
        case vz.UV4Kind:
        case vz.UV5Kind:
        case vz.UV6Kind:
          return 2;
        case vz.NormalKind:
        case vz.PositionKind:
          return 3;
        case vz.ColorKind:
        case vz.ColorInstanceKind:
        case vz.MatricesIndicesKind:
        case vz.MatricesIndicesExtraKind:
        case vz.MatricesWeightsKind:
        case vz.MatricesWeightsExtraKind:
        case vz.TangentKind:
          return 4;
        default:
          throw new Error("Invalid kind '" + zz + "'")
      }
    }

    function Kz(zz) {
      return zz instanceof Int8Array ? vz.BYTE : zz instanceof Uint8Array ? vz.UNSIGNED_BYTE : zz instanceof Int16Array ? vz.SHORT : zz instanceof Uint16Array ? vz.UNSIGNED_SHORT : zz instanceof Int32Array ? vz.INT : zz instanceof Uint32Array ? vz.UNSIGNED_INT : vz.FLOAT
    }

    function uz(zz) {
      return (0, Xz.q)(zz)
    }

    function Nz(zz, tz, sz, Fz, Wz, Oz, oz, vz) {
      (0, Xz.l)(zz, tz, sz, Fz, Wz, Oz, oz, ((zz, tz) => {
        for (let sz = 0; sz < Fz; sz++) vz(zz[sz], tz + sz)
      }))
    }

    function bz(zz, tz, sz, Fz, Wz, Oz, oz, vz) {
      return (0, Xz.p)(zz, tz, sz, Fz, Wz, Oz, oz, vz)
    }
    vz._Counter = 0, vz.BYTE = 5120, vz.UNSIGNED_BYTE = 5121, vz.SHORT = 5122, vz.UNSIGNED_SHORT = 5123, vz.INT = 5124, vz.UNSIGNED_INT = 5125, vz.FLOAT = 5126, vz.HALF_FLOAT = 5131, vz.PositionKind = "position", vz.NormalKind = "normal", vz.TangentKind = "tangent", vz.UVKind = "uv", vz.UV2Kind = "uv2", vz.UV3Kind = "uv3", vz.UV4Kind = "uv4", vz.UV5Kind = "uv5", vz.UV6Kind = "uv6", vz.ColorKind = "color", vz.ColorInstanceKind = "instanceColor", vz.MatricesIndicesKind = "matricesIndices", vz.MatricesWeightsKind = "matricesWeights", vz.MatricesIndicesExtraKind = "matricesIndicesExtra", vz.MatricesWeightsExtraKind = "matricesWeightsExtra";
    let wz = !1;

    function Dz() {
      wz || (wz = !0, vz.DeduceStride = Uz, vz.GetDataType = Kz, vz.GetTypeByteLength = uz, vz.ForEach = Nz, vz.GetFloatData = bz)
    }
  },
  39106: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Fz
    });
    class Fz {
      get underlyingResource() {
        return null
      }
      constructor() {
        this.references = 0, this.au = 0, this.is32Bits = !1, this.uniqueId = Fz._Counter++
      }
    }
    Fz._Counter = 0
  },
  39284: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Xz
    });
    var Fz = sz(36475),
      Wz = sz(39293);
    class Xz {
      constructor() {
        this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this.aimTransform = null, this.gripTransform = null
      }
      getNormal() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!this.pickedMesh || tz && !this.pickedMesh.isVerticesDataPresent(Wz.m.NormalKind)) return null;
        let sz, Xz = this.pickedMesh.Qsz();
        0 === Xz?.length && (Xz = null);
        const Oz = Fz.m.XD[0],
          oz = Fz.m.XD[1],
          vz = Fz.m.XD[2];
        if (tz) {
          const zz = this.pickedMesh.getVerticesData(Wz.m.NormalKind);
          let tz = Xz ? Fz.p.FromArrayToRef(zz, 3 * Xz[3 * this.faceId], Oz) : Oz.m_(zz[3 * this.faceId * 3], zz[3 * this.faceId * 3 + 1], zz[3 * this.faceId * 3 + 2]),
            Uz = Xz ? Fz.p.FromArrayToRef(zz, 3 * Xz[3 * this.faceId + 1], oz) : oz.m_(zz[3 * (3 * this.faceId + 1)], zz[3 * (3 * this.faceId + 1) + 1], zz[3 * (3 * this.faceId + 1) + 2]),
            Kz = Xz ? Fz.p.FromArrayToRef(zz, 3 * Xz[3 * this.faceId + 2], vz) : vz.m_(zz[3 * (3 * this.faceId + 2)], zz[3 * (3 * this.faceId + 2) + 1], zz[3 * (3 * this.faceId + 2) + 2]);
          tz = tz.scale(this.bu), Uz = Uz.scale(this.bv), Kz = Kz.scale(1 - this.bu - this.bv), sz = new Fz.p(tz.x + Uz.x + Kz.x, tz.y + Uz.y + Kz.y, tz.z + Uz.z + Kz.z)
        } else {
          const zz = this.pickedMesh.getVerticesData(Wz.m.PositionKind),
            tz = Xz ? Fz.p.FromArrayToRef(zz, 3 * Xz[3 * this.faceId], Oz) : Oz.m_(zz[3 * this.faceId * 3], zz[3 * this.faceId * 3 + 1], zz[3 * this.faceId * 3 + 2]),
            Uz = Xz ? Fz.p.FromArrayToRef(zz, 3 * Xz[3 * this.faceId + 1], oz) : oz.m_(zz[3 * (3 * this.faceId + 1)], zz[3 * (3 * this.faceId + 1) + 1], zz[3 * (3 * this.faceId + 1) + 2]),
            Kz = Xz ? Fz.p.FromArrayToRef(zz, 3 * Xz[3 * this.faceId + 2], vz) : vz.m_(zz[3 * (3 * this.faceId + 2)], zz[3 * (3 * this.faceId + 2) + 1], zz[3 * (3 * this.faceId + 2) + 2]),
            uz = tz.subtract(Uz),
            Nz = Kz.subtract(Uz);
          sz = Fz.p.Cross(uz, Nz)
        }
        const Uz = (zz, tz) => {
          if (-1 !== this.thinInstanceIndex) {
            const sz = zz._thinInstanceDataStorage.matrixData,
              Wz = this.thinInstanceIndex << 4;
            if (sz && sz.length > Wz) {
              const zz = Fz.m.Matrix[0];
              Fz.e.FromArrayToRef(sz, Wz, zz), Fz.p.TransformNormalToRef(tz, zz, tz)
            }
          }
          let sz = zz.getWorldMatrix();
          zz.nonUniformScaling && (Fz.m.Matrix[0].vsz(sz), sz = Fz.m.Matrix[0], sz.setTranslationFromFloats(0, 0, 0), sz.invert(), sz.transposeToRef(Fz.m.Matrix[1]), sz = Fz.m.Matrix[1]), Fz.p.TransformNormalToRef(tz, sz, tz)
        };
        if (zz && Uz(this.pickedMesh, sz), this.ray) {
          const tz = Fz.m.XD[0].vsz(sz);
          zz || Uz(this.pickedMesh, tz), Fz.p.Dot(tz, this.ray.direction) > 0 && sz.negateInPlace()
        }
        return sz.normalize(), sz
      }
      getTextureCoordinates() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wz.m.UVKind;
        if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(zz)) return null;
        const tz = this.pickedMesh.Qsz();
        if (!tz) return null;
        const sz = this.pickedMesh.getVerticesData(zz);
        if (!sz) return null;
        let Xz = Fz.n.FromArray(sz, 2 * tz[3 * this.faceId]),
          Oz = Fz.n.FromArray(sz, 2 * tz[3 * this.faceId + 1]),
          oz = Fz.n.FromArray(sz, 2 * tz[3 * this.faceId + 2]);
        return Xz = Xz.scale(this.bu), Oz = Oz.scale(this.bv), oz = oz.scale(1 - this.bu - this.bv), new Fz.n(Xz.x + Oz.x + oz.x, Xz.y + Oz.y + oz.y)
      }
    }
  },
  39140: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Xz
    });
    var Fz = sz(39031);
    let Wz = !1;

    function Xz() {
      Wz || (Wz = !0, Fz.ThinEngine.prototype.updateDynamicIndexBuffer = function(zz, tz) {
        let sz;
        this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(zz), sz = zz.is32Bits ? tz instanceof Uint32Array ? tz : new Uint32Array(tz) : tz instanceof Uint16Array ? tz : new Uint16Array(tz), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, sz, this._gl.DYNAMIC_DRAW), this._resetIndexBufferBinding()
      }, Fz.ThinEngine.prototype.updateDynamicVertexBuffer = function(zz, tz, sz, Fz) {
        this.bindArrayBuffer(zz), void 0 === sz && (sz = 0);
        const Wz = tz.byteLength || tz.length;
        void 0 === Fz || Fz >= Wz && 0 === sz ? tz instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, sz, new Float32Array(tz)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, sz, tz) : tz instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, sz, new Float32Array(tz).subarray(0, Fz / 4)) : (tz = ArrayBuffer.isView(tz) ? new Uint8Array(tz.buffer, tz.byteOffset, Fz) : new Uint8Array(tz, 0, Fz), this._gl.bufferSubData(this._gl.ARRAY_BUFFER, sz, tz)), this._resetVertexBufferBinding()
      })
    }
  },
  39113: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Fz
    });
    class Fz {
      get underlyingResource() {
        return this._webGLTexture
      }
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          tz = arguments.length > 1 ? arguments[1] : void 0;
        if (this._MSAARenderBuffers = null, this._context = tz, !zz && (zz = tz.createTexture(), !zz)) throw new Error("Unable to create webGL texture");
        this.set(zz)
      }
      setUsage() {}
      set(zz) {
        this._webGLTexture = zz
      }
      reset() {
        this._webGLTexture = null, this._MSAARenderBuffers = null
      }
      addMSAARenderBuffer(zz) {
        this._MSAARenderBuffers || (this._MSAARenderBuffers = []), this._MSAARenderBuffers.push(zz)
      }
      releaseMSAARenderBuffers() {
        if (this._MSAARenderBuffers) {
          for (const zz of this._MSAARenderBuffers) this._context.deleteRenderbuffer(zz);
          this._MSAARenderBuffers = null
        }
      }
      getMSAARenderBuffer() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._MSAARenderBuffers?.[zz] ?? null
      }
      release() {
        this.releaseMSAARenderBuffers(), this._webGLTexture && this._context.deleteTexture(this._webGLTexture), this.reset()
      }
    }
  },
  39077: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Bz
    });
    var Fz = sz(36505),
      Wz = sz(39036),
      Xz = sz(36502),
      Oz = sz(38097),
      oz = sz(36493),
      vz = sz(39079);
    class Uz {
      constructor() {
        let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, zz && this.reset()
      }
      get isDirty() {
        return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty || this._isZOffsetDirty || this._isFrontFaceDirty
      }
      get zOffset() {
        return this._zOffset
      }
      set zOffset(zz) {
        this._zOffset !== zz && (this._zOffset = zz, this._isZOffsetDirty = !0)
      }
      get zOffsetUnits() {
        return this._zOffsetUnits
      }
      set zOffsetUnits(zz) {
        this._zOffsetUnits !== zz && (this._zOffsetUnits = zz, this._isZOffsetDirty = !0)
      }
      get cullFace() {
        return this._cullFace
      }
      set cullFace(zz) {
        this._cullFace !== zz && (this._cullFace = zz, this._isCullFaceDirty = !0)
      }
      get cull() {
        return this._cull
      }
      set cull(zz) {
        this._cull !== zz && (this._cull = zz, this._isCullDirty = !0)
      }
      get depthFunc() {
        return this._depthFunc
      }
      set depthFunc(zz) {
        this._depthFunc !== zz && (this._depthFunc = zz, this._isDepthFuncDirty = !0)
      }
      get depthMask() {
        return this._depthMask
      }
      set depthMask(zz) {
        this._depthMask !== zz && (this._depthMask = zz, this._isDepthMaskDirty = !0)
      }
      get depthTest() {
        return this._depthTest
      }
      set depthTest(zz) {
        this._depthTest !== zz && (this._depthTest = zz, this._isDepthTestDirty = !0)
      }
      get frontFace() {
        return this._frontFace
      }
      set frontFace(zz) {
        this._frontFace !== zz && (this._frontFace = zz, this._isFrontFaceDirty = !0)
      }
      reset() {
        this._depthMask = !0, this._depthTest = !0, this._depthFunc = null, this._cullFace = null, this._cull = null, this._zOffset = 0, this._zOffsetUnits = 0, this._frontFace = null, this._isDepthTestDirty = !0, this._isDepthMaskDirty = !0, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !0, this._isFrontFaceDirty = !1
      }
      apply(zz) {
        this.isDirty && (this._isCullDirty && (this.cull ? zz.enable(zz.CULL_FACE) : zz.disable(zz.CULL_FACE), this._isCullDirty = !1), this._isCullFaceDirty && (zz.cullFace(this.cullFace), this._isCullFaceDirty = !1), this._isDepthMaskDirty && (zz.depthMask(this.depthMask), this._isDepthMaskDirty = !1), this._isDepthTestDirty && (this.depthTest ? zz.enable(zz.DEPTH_TEST) : zz.disable(zz.DEPTH_TEST), this._isDepthTestDirty = !1), this._isDepthFuncDirty && (zz.depthFunc(this.depthFunc), this._isDepthFuncDirty = !1), this._isZOffsetDirty && (this.zOffset || this.zOffsetUnits ? (zz.enable(zz.POLYGON_OFFSET_FILL), zz.polygonOffset(this.zOffset, this.zOffsetUnits)) : zz.disable(zz.POLYGON_OFFSET_FILL), this._isZOffsetDirty = !1), this._isFrontFaceDirty && (zz.frontFace(this.frontFace), this._isFrontFaceDirty = !1))
      }
    }
    class Kz {
      get isDirty() {
        return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty
      }
      get func() {
        return this._func
      }
      set func(zz) {
        this._func !== zz && (this._func = zz, this._isStencilFuncDirty = !0)
      }
      get backFunc() {
        return this._func
      }
      set backFunc(zz) {
        this._backFunc !== zz && (this._backFunc = zz, this._isStencilFuncDirty = !0)
      }
      get funcRef() {
        return this._funcRef
      }
      set funcRef(zz) {
        this._funcRef !== zz && (this._funcRef = zz, this._isStencilFuncDirty = !0)
      }
      get funcMask() {
        return this._funcMask
      }
      set funcMask(zz) {
        this._funcMask !== zz && (this._funcMask = zz, this._isStencilFuncDirty = !0)
      }
      get opStencilFail() {
        return this._opStencilFail
      }
      set opStencilFail(zz) {
        this._opStencilFail !== zz && (this._opStencilFail = zz, this._isStencilOpDirty = !0)
      }
      get opDepthFail() {
        return this._opDepthFail
      }
      set opDepthFail(zz) {
        this._opDepthFail !== zz && (this._opDepthFail = zz, this._isStencilOpDirty = !0)
      }
      get opStencilDepthPass() {
        return this._opStencilDepthPass
      }
      set opStencilDepthPass(zz) {
        this._opStencilDepthPass !== zz && (this._opStencilDepthPass = zz, this._isStencilOpDirty = !0)
      }
      get backOpStencilFail() {
        return this._backOpStencilFail
      }
      set backOpStencilFail(zz) {
        this._backOpStencilFail !== zz && (this._backOpStencilFail = zz, this._isStencilOpDirty = !0)
      }
      get backOpDepthFail() {
        return this._backOpDepthFail
      }
      set backOpDepthFail(zz) {
        this._backOpDepthFail !== zz && (this._backOpDepthFail = zz, this._isStencilOpDirty = !0)
      }
      get backOpStencilDepthPass() {
        return this._backOpStencilDepthPass
      }
      set backOpStencilDepthPass(zz) {
        this._backOpStencilDepthPass !== zz && (this._backOpStencilDepthPass = zz, this._isStencilOpDirty = !0)
      }
      get mask() {
        return this._mask
      }
      set mask(zz) {
        this._mask !== zz && (this._mask = zz, this._isStencilMaskDirty = !0)
      }
      get enabled() {
        return this._enabled
      }
      set enabled(zz) {
        this._enabled !== zz && (this._enabled = zz, this._isStencilTestDirty = !0)
      }
      constructor() {
        let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isStencilTestDirty = !1, this._isStencilMaskDirty = !1, this._isStencilFuncDirty = !1, this._isStencilOpDirty = !1, this.useStencilGlobalOnly = !1, zz && this.reset()
      }
      reset() {
        this.stencilMaterial = void 0, this.stencilGlobal?.reset(), this._isStencilTestDirty = !0, this._isStencilMaskDirty = !0, this._isStencilFuncDirty = !0, this._isStencilOpDirty = !0
      }
      apply(zz) {
        if (!zz) return;
        const tz = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
        this.enabled = tz ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = tz ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = tz ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = tz ? this.stencilMaterial.funcRef : this.stencilGlobal.funcRef, this.funcMask = tz ? this.stencilMaterial.funcMask : this.stencilGlobal.funcMask, this.opStencilFail = tz ? this.stencilMaterial.opStencilFail : this.stencilGlobal.opStencilFail, this.opDepthFail = tz ? this.stencilMaterial.opDepthFail : this.stencilGlobal.opDepthFail, this.opStencilDepthPass = tz ? this.stencilMaterial.opStencilDepthPass : this.stencilGlobal.opStencilDepthPass, this.backOpStencilFail = tz ? this.stencilMaterial.backOpStencilFail : this.stencilGlobal.backOpStencilFail, this.backOpDepthFail = tz ? this.stencilMaterial.backOpDepthFail : this.stencilGlobal.backOpDepthFail, this.backOpStencilDepthPass = tz ? this.stencilMaterial.backOpStencilDepthPass : this.stencilGlobal.backOpStencilDepthPass, this.mask = tz ? this.stencilMaterial.mask : this.stencilGlobal.mask, this.isDirty && (this._isStencilTestDirty && (this.enabled ? zz.enable(zz.STENCIL_TEST) : zz.disable(zz.STENCIL_TEST), this._isStencilTestDirty = !1), this._isStencilMaskDirty && (zz.stencilMask(this.mask), this._isStencilMaskDirty = !1), this._isStencilFuncDirty && (zz.stencilFuncSeparate(zz.FRONT, this.func, this.funcRef, this.funcMask), zz.stencilFuncSeparate(zz.BACK, this.backFunc, this.funcRef, this.funcMask), this._isStencilFuncDirty = !1), this._isStencilOpDirty && (zz.stencilOpSeparate(zz.FRONT, this.opStencilFail, this.opDepthFail, this.opStencilDepthPass), zz.stencilOpSeparate(zz.BACK, this.backOpStencilFail, this.backOpDepthFail, this.backOpStencilDepthPass), this._isStencilOpDirty = !1))
      }
    }
    class uz {
      constructor() {
        this.reset()
      }
      reset() {
        this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = uz.ALWAYS, this.opStencilFail = uz.KEEP, this.opDepthFail = uz.KEEP, this.opStencilDepthPass = uz.REPLACE, this.backFunc = uz.ALWAYS, this.backOpStencilFail = uz.KEEP, this.backOpDepthFail = uz.KEEP, this.backOpStencilDepthPass = uz.REPLACE
      }
      get stencilFunc() {
        return this.func
      }
      set stencilFunc(zz) {
        this.func = zz
      }
      get stencilBackFunc() {
        return this.backFunc
      }
      set stencilBackFunc(zz) {
        this.backFunc = zz
      }
      get stencilFuncRef() {
        return this.funcRef
      }
      set stencilFuncRef(zz) {
        this.funcRef = zz
      }
      get stencilFuncMask() {
        return this.funcMask
      }
      set stencilFuncMask(zz) {
        this.funcMask = zz
      }
      get stencilOpStencilFail() {
        return this.opStencilFail
      }
      set stencilOpStencilFail(zz) {
        this.opStencilFail = zz
      }
      get stencilOpDepthFail() {
        return this.opDepthFail
      }
      set stencilOpDepthFail(zz) {
        this.opDepthFail = zz
      }
      get stencilOpStencilDepthPass() {
        return this.opStencilDepthPass
      }
      set stencilOpStencilDepthPass(zz) {
        this.opStencilDepthPass = zz
      }
      get stencilBackOpStencilFail() {
        return this.backOpStencilFail
      }
      set stencilBackOpStencilFail(zz) {
        this.backOpStencilFail = zz
      }
      get stencilBackOpDepthFail() {
        return this.backOpDepthFail
      }
      set stencilBackOpDepthFail(zz) {
        this.backOpDepthFail = zz
      }
      get stencilBackOpStencilDepthPass() {
        return this.backOpStencilDepthPass
      }
      set stencilBackOpStencilDepthPass(zz) {
        this.backOpStencilDepthPass = zz
      }
      get stencilMask() {
        return this.mask
      }
      set stencilMask(zz) {
        this.mask = zz
      }
      get stencilTest() {
        return this.enabled
      }
      set stencilTest(zz) {
        this.enabled = zz
      }
    }
    uz.ALWAYS = 519, uz.KEEP = 7680, uz.REPLACE = 7681;
    var Nz = sz(39083),
      bz = sz(39065),
      wz = sz(39021),
      Dz = sz(39051),
      gz = sz(39063);

    function Hz(zz, tz) {
      if (tz) {
        const {
          requestAnimationFrame: sz
        } = tz;
        if ("function" === typeof sz) return sz(zz)
      }
      if ((0, Dz.j)()) {
        const {
          requestAnimationFrame: sz
        } = tz || window;
        if ("function" === typeof sz) return sz(zz)
      } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(zz);
      return setTimeout(zz, 16)
    }
    class Bz {
      get frameId() {
        return this._frameId
      }
      get isWebGPU() {
        return this._isWebGPU
      }
      _getShaderProcessor(zz) {
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
      get ysz() {
        return this._useReverseDepthBuffer
      }
      set ysz(zz) {
        zz !== this._useReverseDepthBuffer && (this._useReverseDepthBuffer = zz, this._depthCullingState.depthFunc = zz ? 518 : 515)
      }
      setColorWrite(zz) {
        zz !== this._colorWrite && (this._colorWriteChanged = !0, this._colorWrite = zz)
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
      _getGlobalDefines(zz) {
        if (zz) return this.isNDCHalfZRange ? zz.IS_NDC_HALF_ZRANGE = "" : delete zz.IS_NDC_HALF_ZRANGE, this.ysz ? zz.USE_REVERSE_DEPTHBUFFER = "" : delete zz.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? zz.USE_EXACT_SRGB_CONVERSIONS = "" : delete zz.USE_EXACT_SRGB_CONVERSIONS);
        {
          let zz = "";
          return this.isNDCHalfZRange && (zz += "#define IS_NDC_HALF_ZRANGE"), this.ysz && (zz && (zz += "\n"), zz += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (zz && (zz += "\n"), zz += "#define USE_EXACT_SRGB_CONVERSIONS"), zz
        }
      }
      _rebuildInternalTextures() {
        const zz = this._internalTexturesCache.slice();
        for (const tz of zz) tz._rebuild()
      }
      _rebuildRenderTargetWrappers() {
        const zz = this._renderTargetWrapperCache.slice();
        for (const tz of zz) tz.textures?.some((zz => 15 === zz.source)) || tz._rebuild()
      }
      _rebuildEffects() {
        for (const zz in this._compiledEffects) {
          const tz = this._compiledEffects[zz];
          tz._pipelineContext = null, tz._prepareEffect()
        }
        Wz.e.ResetCache()
      }
      _rebuildGraphicsResources() {
        this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
      }
      _flagContextRestored() {
        Oz.e.Warn(this.name + " context successfully restored."), this.onContextRestoredObservable.notifyObservers(this), this._contextWasLost = !1
      }
      _restoreEngineAfterContextLost(zz) {
        setTimeout((() => {
          this._clearEmptyResources();
          const tz = this._depthCullingState.depthTest,
            sz = this._depthCullingState.depthFunc,
            Fz = this._depthCullingState.depthMask,
            Wz = this._stencilState.stencilTest;
          zz(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = tz, this._depthCullingState.depthFunc = sz, this._depthCullingState.depthMask = Fz, this._stencilState.stencilTest = Wz, this._flagContextRestored()
        }), 0)
      }
      get zsz() {
        return this._isDisposed
      }
      get snapshotRendering() {
        return !1
      }
      set snapshotRendering(zz) {}
      get snapshotRenderingMode() {
        return 0
      }
      set snapshotRenderingMode(zz) {}
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
          const zz = new Uint8Array(4),
            tz = [zz, zz, zz, zz, zz, zz];
          this._emptyCubeTexture = this.createRawCubeTexture(tz, 1, 5, 0, !1, !1, 1)
        }
        return this._emptyCubeTexture
      }
      set framebufferDimensionsObject(zz) {
        this._framebufferDimensionsObject = zz
      }
      get activeRenderLoops() {
        return this._activeRenderLoops
      }
      stopRenderLoop(zz) {
        if (!zz) return this._activeRenderLoops.length = 0, void this._cancelFrame();
        const tz = this._activeRenderLoops.indexOf(zz);
        tz >= 0 && (this._activeRenderLoops.splice(tz, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
      }
      _cancelFrame() {
        if (this.customAnimationFrameRequester) {
          if (0 !== this._frameHandler) {
            this._frameHandler = 0;
            const {
              cancelAnimationFrame: zz
            } = this.customAnimationFrameRequester;
            zz && zz(this.customAnimationFrameRequester.OD), delete this.customAnimationFrameRequester.OD
          }
        } else if (0 !== this._frameHandler) {
          const zz = this._frameHandler;
          if (this._frameHandler = 0, (0, Dz.j)()) {
            const {
              cancelAnimationFrame: tz
            } = this.getHostWindow() || window;
            if ("function" === typeof tz) return tz(zz)
          } else if ("function" === typeof cancelAnimationFrame) return cancelAnimationFrame(zz);
          return clearTimeout(zz)
        }
      }
      bY() {
        this.onBeginFrameObservable.notifyObservers(this)
      }
      rY() {
        this._frameId++, this.onEndFrameObservable.notifyObservers(this)
      }
      get maxFPS() {
        return this._maxFPS
      }
      set maxFPS(zz) {
        this._maxFPS = zz, void 0 !== zz && (this._minFrameTime = zz <= 0 ? Number.MAX_VALUE : 1e3 / zz)
      }
      _isOverFrameTime(zz) {
        if (!zz || void 0 === this._maxFPS) return !1;
        const tz = zz - this._lastFrameTime;
        return this._lastFrameTime = zz, this._renderAccumulator += tz, this._renderAccumulator < this._minFrameTime || (this._renderAccumulator -= this._minFrameTime, this._renderAccumulator > this._minFrameTime && (this._renderAccumulator = this._minFrameTime), !1)
      }
      _processFrame(zz) {
        if (this._frameHandler = 0, !this._contextWasLost && !this._isOverFrameTime(zz)) {
          let zz = !0;
          (this.zsz || !this.renderEvenInBackground && this._windowIsBackground) && (zz = !1), zz && (this.bY(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.rY())
        }
      }
      _renderLoop(zz) {
        this._processFrame(zz), this._activeRenderLoops.length > 0 && 0 === this._frameHandler && this._queueNewFrameForRenderLoop()
      }
      _renderFrame() {
        for (let zz = 0; zz < this._activeRenderLoops.length; zz++) {
          (0, this._activeRenderLoops[zz])()
        }
      }
      _renderViews() {
        return !1
      }
      _queueNewFrame(zz, tz) {
        return Hz(zz, tz)
      }
      _queueNewFrameForRenderLoop() {
        this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.OD = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.OD) : this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow())
      }
      runRenderLoop(zz) {
        -1 === this._activeRenderLoops.indexOf(zz) && (this._activeRenderLoops.push(zz), 1 === this._activeRenderLoops.length && 0 === this._frameHandler && this._queueNewFrameForRenderLoop())
      }
      getDepthBuffer() {
        return this._depthCullingState.depthTest
      }
      setDepthBuffer(zz) {
        this._depthCullingState.depthTest = zz
      }
      setZOffset(zz) {
        this._depthCullingState.zOffset = this.ysz ? -zz : zz
      }
      getZOffset() {
        const zz = this._depthCullingState.zOffset;
        return this.ysz ? -zz : zz
      }
      setZOffsetUnits(zz) {
        this._depthCullingState.zOffsetUnits = this.ysz ? -zz : zz
      }
      getZOffsetUnits() {
        const zz = this._depthCullingState.zOffsetUnits;
        return this.ysz ? -zz : zz
      }
      getHostWindow() {
        return (0, Dz.j)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
      }
      get compatibilityMode() {
        return this._compatibilityMode
      }
      set compatibilityMode(zz) {
        this._compatibilityMode = !0
      }
      _rebuildTextures() {
        for (const zz of this.scenes) zz._rebuildTextures();
        for (const zz of this._virtualScenes) zz._rebuildTextures()
      }
      _releaseRenderTargetWrapper(zz) {
        const tz = this._renderTargetWrapperCache.indexOf(zz); - 1 !== tz && this._renderTargetWrapperCache.splice(tz, 1)
      }
      get currentViewport() {
        return this._cachedViewport
      }
      setViewport(zz, tz, sz) {
        const Fz = tz || this.getRenderWidth(),
          Wz = sz || this.getRenderHeight(),
          Xz = zz.x || 0,
          Oz = zz.y || 0;
        this._cachedViewport = zz, this._viewport(Xz * Fz, Oz * Wz, Fz * zz.width, Wz * zz.height)
      }
      createCanvasImage() {
        return document.createElement("img")
      }
      createCanvasPath2D(zz) {
        return new Path2D(zz)
      }
      get description() {
        let zz = this.name + this.version;
        return this._caps.parallelShaderCompile && (zz += " - Parallel shader compilation"), zz
      }
      _createTextureBase(zz, tz, sz, Fz) {
        let Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          oz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          vz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          Uz = arguments.length > 7 ? arguments[7] : void 0,
          Kz = arguments.length > 8 ? arguments[8] : void 0,
          uz = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          Nz = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          bz = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
          Dz = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
          gz = arguments.length > 13 ? arguments[13] : void 0,
          Hz = arguments.length > 14 ? arguments[14] : void 0,
          Pz = arguments.length > 15 ? arguments[15] : void 0;
        const rz = "data:" === (zz = zz || "").substring(0, 5),
          Yz = "blob:" === zz.substring(0, 5),
          xz = rz && -1 !== zz.indexOf(";base64,"),
          mz = Nz || new wz.d(this, 1);
        mz !== Nz && (mz.label = zz.substring(0, 60));
        const Jz = zz;
        !this._transformTextureUrl || xz || Nz || uz || (zz = this._transformTextureUrl(zz)), Jz !== zz && (mz._originalUrl = Jz);
        const Iz = zz.lastIndexOf(".");
        let Cz = Dz || (Iz > -1 ? zz.substring(Iz).toLowerCase() : "");
        Cz.indexOf("?") > -1 && (Cz = Cz.split("?")[0]);
        const ez = Bz.GetCompatibleTextureLoader(Cz, gz);
        Fz && Fz.addPendingData(mz), mz.url = zz, mz.generateMipMaps = !tz, mz.samplingMode = Wz, mz.invertY = sz, mz._useSRGBBuffer = this._getUseSRGBBuffer(!!Pz, tz), this._doNotHandleContextLost || (mz._buffer = uz);
        let Zz = null;
        oz && !Nz && (Zz = mz.onLoadedObservable.add(oz)), Nz || this._internalTexturesCache.push(mz);
        const Gz = (sz, Nz) => {
          Fz && Fz.removePendingData(mz), zz === Jz ? (Zz && mz.onLoadedObservable.remove(Zz), Xz.c.UseFallbackTexture && zz !== Xz.c.FallbackTexture && this._createTextureBase(Xz.c.FallbackTexture, tz, mz.invertY, Fz, Wz, null, vz, Uz, Kz, uz, mz), sz = (sz || "Unknown error") + (Xz.c.UseFallbackTexture ? " - Fallback texture was used" : ""), mz.onErrorObservable.notifyObservers({
            message: sz,
            exception: Nz
          }), vz && vz(sz, Nz)) : (Oz.e.Warn(`Failed to load ${zz}, falling back to ${Jz}`), this._createTextureBase(Jz, tz, mz.invertY, Fz, Wz, oz, vz, Uz, Kz, uz, mz, bz, Dz, gz, Hz, Pz))
        };
        if (ez) {
          const tz = async zz => {
            (await ez).loadData(zz, mz, ((zz, tz, sz, Xz, Oz, oz) => {
              oz ? Gz("TextureLoader failed to load data") : Uz(mz, Cz, Fz, {
                width: zz,
                height: tz
              }, mz.invertY, !sz, Xz, (() => (Oz(), !1)), Wz)
            }), Hz)
          };
          if (uz) {
            const zz = async zz => {
              try {
                await tz(zz)
              } catch (sz) {
                Gz("Failed to parse texture data", sz)
              }
            };
            uz instanceof ArrayBuffer ? zz(new Uint8Array(uz)) : ArrayBuffer.isView(uz) ? zz(uz) : vz && vz("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null)
          } else this._loadFile(zz, (async zz => {
            try {
              await tz(new Uint8Array(zz))
            } catch (sz) {
              Gz("Failed to parse texture data", sz)
            }
          }), void 0, Fz ? Fz.offlineProvider : void 0, !0, ((zz, tz) => {
            Gz("Unable to load " + (zz && zz.responseURL, tz))
          }))
        } else {
          const sz = zz => {
            Yz && !this._doNotHandleContextLost && (mz._buffer = zz), Uz(mz, Cz, Fz, zz, mz.invertY, tz, !1, Kz, Wz)
          };
          !rz || xz ? uz && ("string" === typeof uz.decoding || uz.close) ? sz(uz) : Bz._FileToolsLoadImage(zz || "", sz, Gz, Fz ? Fz.offlineProvider : null, gz, mz.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : "string" === typeof uz || uz instanceof ArrayBuffer || ArrayBuffer.isView(uz) || uz instanceof Blob ? Bz._FileToolsLoadImage(uz, sz, Gz, Fz ? Fz.offlineProvider : null, gz, mz.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : uz && sz(uz)
        }
        return mz
      }
      _rebuildBuffers() {
        for (const zz of this._uniformBuffers) zz._rebuildAfterContextLost()
      }
      get _shouldUseHighPrecisionShader() {
        return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed)
      }
      getHostDocument() {
        return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, Dz.g)() ? document : null
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
        for (const zz in this._boundTexturesCache) Object.prototype.hasOwnProperty.call(this._boundTexturesCache, zz) && (this._boundTexturesCache[zz] = null);
        this._currentTextureChannel = -1
      }
      get name() {
        return this._name
      }
      set name(zz) {
        this._name = zz
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
      setHardwareScalingLevel(zz) {
        this._hardwareScalingLevel = zz, this.resize()
      }
      getHardwareScalingLevel() {
        return this._hardwareScalingLevel
      }
      get doNotHandleContextLost() {
        return this._doNotHandleContextLost
      }
      set doNotHandleContextLost(zz) {
        this._doNotHandleContextLost = zz
      }
      get isStencilEnable() {
        return this._isStencilEnable
      }
      getCreationOptions() {
        return this._creationOptions
      }
      constructor(zz, tz, sz) {
        this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new Uz, this._stencilStateComposer = new Kz, this._stencilState = new uz, this._alphaState = new Nz.e(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._activeRequests = [], this._badOS = !1, this._badDesktopOS = !1, this._compatibilityMode = !0, this._internalTexturesCache = new Array, this._currentRenderTarget = null, this._boundTexturesCache = {}, this._activeChannel = 0, this._currentTextureChannel = -1, this._viewportCached = {
          x: 0,
          y: 0,
          z: 0,
          w: 0
        }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new Fz.c, this.onCanvasFocusObservable = new Fz.c, this.onNewSceneAddedObservable = new Fz.c, this.onResizeObservable = new Fz.c, this.onCanvasPointerOutObservable = new Fz.c, this.onEffectErrorObservable = new Fz.c, this.disablePerformanceMonitorInBackground = !1, this.disableVertexArrayObjects = !1, this._frameId = 0, this.hostInformation = {
          isMobile: !1
        }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDepthBuffer = !1, this.isNDCHalfZRange = !1, this.hasOriginBottomLeft = !0, this._renderTargetWrapperCache = new Array, this._compiledEffects = {}, this._isDisposed = !1, this.scenes = [], this._virtualScenes = new Array, this.onBeforeTextureInitObservable = new Fz.c, this.renderEvenInBackground = !0, this.preventCacheWipeBetweenFrames = !1, this._frameHandler = 0, this._activeRenderLoops = new Array, this.customAnimationFrameRequester = null, this._windowIsBackground = !1, this._boundRenderFunction = zz => this._renderLoop(zz), this._lastFrameTime = 0, this._renderAccumulator = 0, this.skipFrameRender = !1, this.onBeforeShaderCompilationObservable = new Fz.c, this.onAfterShaderCompilationObservable = new Fz.c, this.onBeginFrameObservable = new Fz.c, this.onEndFrameObservable = new Fz.c, this._transformTextureUrl = null, this._uniformBuffers = new Array, this._storageBuffers = new Array, this._highPrecisionShadersAllowed = !0, this.onContextLostObservable = new Fz.c, this.onContextRestoredObservable = new Fz.c, this._name = "", this.premultipliedAlpha = !0, this.adaptToDeviceRatio = !1, this._lastDevicePixelRatio = 1, this._doNotHandleContextLost = !1, this.cullBackFaces = null, this._renderPassNames = ["main"], this._onReleaseRenderPassObservable = null, this._fps = 60, this._deltaTime = 0, this._deterministicLockstep = !1, this._lockstepMaxSteps = 4, this._timeStep = 1 / 60, this.qJ = new Fz.c, this.onReleaseEffectsObservable = new Fz.c, Xz.c.Instances.push(this), this.startTime = vz.b.Now, this._stencilStateComposer.stencilGlobal = this._stencilState, oz.c.SetMatrixPrecision(!!tz.useLargeWorldRendering || !!tz.useHighPrecisionMatrix), (0, Dz.i)() && navigator.userAgent && (this._badOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent), this._badDesktopOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), tz.antialias = zz ?? tz.antialias, tz.deterministicLockstep = tz.deterministicLockstep ?? !1, tz.lockstepMaxSteps = tz.lockstepMaxSteps ?? 4, tz.timeStep = tz.timeStep ?? 1 / 60, tz.stencil = tz.stencil ?? !0, this._audioContext = tz.audioEngineOptions?.audioContext ?? null, this._audioDestination = tz.audioEngineOptions?.audioDestination ?? null, this.premultipliedAlpha = tz.premultipliedAlpha ?? !0, this._doNotHandleContextLost = !!tz.doNotHandleContextLost, this._isStencilEnable = !!tz.stencil, this.useExactSrgbConversions = tz.useExactSrgbConversions ?? !1, this.canvasTabIndex = tz.canvasTabIndex ?? this.canvasTabIndex;
        const Wz = (0, Dz.j)() && window.devicePixelRatio || 1,
          Oz = tz.limitDeviceRatio || Wz;
        sz = sz || tz.adaptToDeviceRatio || !1, this.adaptToDeviceRatio = sz, this._hardwareScalingLevel = sz ? 1 / Math.min(Oz, Wz) : 1, this._lastDevicePixelRatio = Wz, this._creationOptions = tz
      }
      resize() {
        let zz, tz, sz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.adaptToDeviceRatio) {
          const zz = (0, Dz.j)() && window.devicePixelRatio || 1,
            tz = this._lastDevicePixelRatio / zz;
          this._lastDevicePixelRatio = zz, this._hardwareScalingLevel *= tz
        }
        if ((0, Dz.j)() && (0, Dz.g)())
          if (this._renderingCanvas) {
            const sz = this._renderingCanvas.getBoundingClientRect?.();
            zz = this._renderingCanvas.clientWidth || sz?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100, tz = this._renderingCanvas.clientHeight || sz?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100
          } else zz = window.innerWidth, tz = window.innerHeight;
        else zz = this._renderingCanvas ? this._renderingCanvas.width : 100, tz = this._renderingCanvas ? this._renderingCanvas.height : 100;
        this.setSize(zz / this._hardwareScalingLevel, tz / this._hardwareScalingLevel, sz)
      }
      setSize(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!this._renderingCanvas) return !1;
        if (zz |= 0, tz |= 0, !sz && this._renderingCanvas.width === zz && this._renderingCanvas.height === tz) return !1;
        if (this._renderingCanvas.width = zz, this._renderingCanvas.height = tz, this.scenes) {
          for (let zz = 0; zz < this.scenes.length; zz++) {
            const tz = this.scenes[zz];
            for (let zz = 0; zz < tz.cameras.length; zz++) {
              tz.cameras[zz]._currentRenderId = 0
            }
          }
          this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
        }
        return !0
      }
      createRawTexture(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz, Kz, uz) {
        throw (0, bz.i)("engine.rawTexture")
      }
      createRawCubeTexture(zz, tz, sz, Fz, Wz, Xz, Oz, oz) {
        throw (0, bz.i)("engine.rawTexture")
      }
      createRawTexture3D(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz, Kz) {
        throw (0, bz.i)("engine.rawTexture")
      }
      createRawTexture2DArray(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz, Kz, uz) {
        throw (0, bz.i)("engine.rawTexture")
      }
      _sharedInit(zz) {
        this._renderingCanvas = zz
      }
      _setupMobileChecks() {
        navigator && navigator.userAgent && (this._checkForMobile = () => {
          const zz = navigator.userAgent;
          this.hostInformation.isMobile = -1 !== zz.indexOf("Mobile") || -1 !== zz.indexOf("Mac") && (0, Dz.g)() && "ontouchend" in document
        }, this._checkForMobile(), (0, Dz.j)() && window.addEventListener("resize", this._checkForMobile))
      }
      createVideoElement(zz) {
        return document.createElement("video")
      }
      _reportDrawCall() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        this._drawCalls?.addCount(zz, !1)
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
      _createImageBitmapFromSource(zz, tz) {
        throw new Error("createImageBitmapFromSource is not implemented")
      }
      createImageBitmap(zz, tz) {
        return createImageBitmap(zz, tz)
      }
      resizeImageBitmap(zz, tz, sz) {
        throw new Error("resizeImageBitmap is not implemented")
      }
      getFontOffset(zz) {
        throw new Error("getFontOffset is not implemented")
      }
      static _CreateCanvas(zz, tz) {
        if ("undefined" === typeof document) return new OffscreenCanvas(zz, tz);
        const sz = document.createElement("canvas");
        return sz.width = zz, sz.height = tz, sz
      }
      createCanvas(zz, tz) {
        return Bz._CreateCanvas(zz, tz)
      }
      static _FileToolsLoadImage(zz, tz, sz, Fz, Wz, Xz, Oz) {
        if (!gz.b.loadImage) throw (0, bz.i)("FileTools");
        return gz.b.loadImage(zz, tz, sz, Fz, Wz, Xz, Oz)
      }
      _loadFile(zz, tz, sz, Fz, Wz, Xz) {
        const Oz = (0, gz.g)(zz, tz, sz, Fz, Wz, Xz);
        return this._activeRequests.push(Oz), Oz.onCompleteObservable.add((() => {
          const zz = this._activeRequests.indexOf(Oz); - 1 !== zz && this._activeRequests.splice(zz, 1)
        })), Oz
      }
      static _FileToolsLoadFile(zz, tz, sz, Fz, Wz, Xz) {
        if (gz.b.loadFile) return gz.b.loadFile(zz, tz, sz, Fz, Wz, Xz);
        throw (0, bz.i)("FileTools")
      }
      dispose() {
        for (this.releaseEffects(), this._isDisposed = !0, this.stopRenderLoop(), this._emptyTexture && (this._releaseTexture(this._emptyTexture), this._emptyTexture = null), this._emptyCubeTexture && (this._releaseTexture(this._emptyCubeTexture), this._emptyCubeTexture = null), this._renderingCanvas = null, this.onBeforeTextureInitObservable && this.onBeforeTextureInitObservable.clear(); this.postProcesses.length;) this.postProcesses[0].dispose();
        for (; this.scenes.length;) this.scenes[0].dispose();
        for (; this._virtualScenes.length;) this._virtualScenes[0].dispose();
        this.releaseComputeEffects?.(), Wz.e.ResetCache();
        for (const tz of this._activeRequests) tz.abort();
        this._boundRenderFunction = null, this.qJ.notifyObservers(this), this.qJ.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), this.onEffectErrorObservable.clear(), (0, Dz.j)() && window.removeEventListener("resize", this._checkForMobile);
        const zz = Xz.c.Instances.indexOf(this);
        zz >= 0 && Xz.c.Instances.splice(zz, 1), Xz.c.Instances.length || (Xz.c.OnEnginesDisposedObservable.notifyObservers(this), Xz.c.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservable?.clear(), this._onReleaseRenderPassObservable = null
      }
      static DefaultLoadingScreenFactory(zz) {
        throw (0, bz.i)("LoadingScreen")
      }
      static MarkAllMaterialsAsDirty(zz, tz) {
        for (let sz = 0; sz < Xz.c.Instances.length; sz++) {
          const Fz = Xz.c.Instances[sz];
          for (let sz = 0; sz < Fz.scenes.length; sz++) Fz.scenes[sz].markAllMaterialsAsDirty(zz, tz)
        }
      }
      static GetCompatibleTextureLoader(zz, tz) {
        return null
      }
    }
    Bz._RenderPassIdCounter = 0, Bz._RescalePostProcessFactory = null, Bz.CollisionsEpsilon = .001, Bz.QueueNewFrame = Hz
  },
  39041: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Fz
    });
    class Fz {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Fz.ShadersRepository : Fz.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Fz.ShadersStore : Fz.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Fz.IncludesShadersStore : Fz.IncludesShadersStoreWGSL
      }
    }
    Fz.ShadersRepository = "src/Shaders/", Fz.ShadersStore = {}, Fz.IncludesShadersStore = {}, Fz.ShadersRepositoryWGSL = "src/ShadersWGSL/", Fz.ShadersStoreWGSL = {}, Fz.IncludesShadersStoreWGSL = {}
  },
  39058: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Nz,
      g: () => Pz,
      j: () => wz,
      l: () => bz,
      n: () => Dz,
      q: () => Bz,
      t: () => uz,
      x: () => Uz,
      z: () => Kz,
      B: () => vz,
      F: () => oz
    });
    class Fz {
      constructor() {
        this._valueCache = {}, this._matrixValueCache = {}, this.vertexCompilationError = null, this.fragmentCompilationError = null, this.programLinkError = null, this.programValidationError = null, this._isDisposed = !1
      }
      get isAsync() {
        return this.isParallelCompiled
      }
      get isReady() {
        return !!this.program && (!this.isParallelCompiled || this.engine._isRenderingStateCompiled(this))
      }
      _handlesSpectorRebuildCallback(zz) {
        zz && this.program && zz(this.program)
      }
      setEngine(zz) {
        this.engine = zz
      }
      _fillEffectInformation(zz, tz, sz, Fz, Wz, Xz, Oz, oz) {
        const vz = this.engine;
        if (vz.supportsUniformBuffers)
          for (const Kz in tz) zz.bindUniformBlock(Kz, tz[Kz]);
        let Uz;
        for (this.engine.getUniforms(this, sz).forEach(((zz, tz) => {
            Fz[sz[tz]] = zz
          })), this._uniforms = Fz, Uz = 0; Uz < Wz.length; Uz++) {
          null == zz.getUniform(Wz[Uz]) && (Wz.splice(Uz, 1), Uz--)
        }
        Wz.forEach(((zz, tz) => {
          Xz[zz] = tz
        }));
        for (const Kz of vz.getAttributes(this, Oz)) oz.push(Kz)
      }
      dispose() {
        this._uniforms = {}, this._isDisposed = !0
      }
      _cacheMatrix(zz, tz) {
        const sz = this._valueCache[zz],
          Fz = tz.updateFlag;
        if (void 0 !== sz && sz === Fz) return !1;
        const Wz = tz.hsz();
        let Xz = this._matrixValueCache[zz];
        if (void 0 !== sz && null !== sz && void 0 !== Xz) {
          let tz = !0;
          for (let zz = 15; zz >= 0; zz--)
            if (Xz[zz] !== Wz[zz]) {
              tz = !1;
              break
            } if (tz) return this._valueCache[zz] = Fz, !1
        }
        return void 0 === Xz && (Xz = this._matrixValueCache[zz] = new Float32Array(16)), Xz.set(Wz), this._valueCache[zz] = Fz, !0
      }
      _cacheFloat2(zz, tz, sz) {
        let Fz = this._valueCache[zz];
        if (!Fz || 2 !== Fz.length) return Fz = [tz, sz], this._valueCache[zz] = Fz, !0;
        let Wz = !1;
        return Fz[0] !== tz && (Fz[0] = tz, Wz = !0), Fz[1] !== sz && (Fz[1] = sz, Wz = !0), Wz
      }
      _cacheFloat3(zz, tz, sz, Fz) {
        let Wz = this._valueCache[zz];
        if (!Wz || 3 !== Wz.length) return Wz = [tz, sz, Fz], this._valueCache[zz] = Wz, !0;
        let Xz = !1;
        return Wz[0] !== tz && (Wz[0] = tz, Xz = !0), Wz[1] !== sz && (Wz[1] = sz, Xz = !0), Wz[2] !== Fz && (Wz[2] = Fz, Xz = !0), Xz
      }
      _cacheFloat4(zz, tz, sz, Fz, Wz) {
        let Xz = this._valueCache[zz];
        if (!Xz || 4 !== Xz.length) return Xz = [tz, sz, Fz, Wz], this._valueCache[zz] = Xz, !0;
        let Oz = !1;
        return Xz[0] !== tz && (Xz[0] = tz, Oz = !0), Xz[1] !== sz && (Xz[1] = sz, Oz = !0), Xz[2] !== Fz && (Xz[2] = Fz, Oz = !0), Xz[3] !== Wz && (Xz[3] = Wz, Oz = !0), Oz
      }
      setInt(zz, tz) {
        const sz = this._valueCache[zz];
        void 0 !== sz && sz === tz || this.engine.setInt(this._uniforms[zz], tz) && (this._valueCache[zz] = tz)
      }
      setInt2(zz, tz, sz) {
        this._cacheFloat2(zz, tz, sz) && (this.engine.setInt2(this._uniforms[zz], tz, sz) || (this._valueCache[zz] = null))
      }
      setInt3(zz, tz, sz, Fz) {
        this._cacheFloat3(zz, tz, sz, Fz) && (this.engine.setInt3(this._uniforms[zz], tz, sz, Fz) || (this._valueCache[zz] = null))
      }
      setInt4(zz, tz, sz, Fz, Wz) {
        this._cacheFloat4(zz, tz, sz, Fz, Wz) && (this.engine.setInt4(this._uniforms[zz], tz, sz, Fz, Wz) || (this._valueCache[zz] = null))
      }
      setIntArray(zz, tz) {
        this._valueCache[zz] = null, this.engine.setIntArray(this._uniforms[zz], tz)
      }
      setIntArray2(zz, tz) {
        this._valueCache[zz] = null, this.engine.setIntArray2(this._uniforms[zz], tz)
      }
      setIntArray3(zz, tz) {
        this._valueCache[zz] = null, this.engine.setIntArray3(this._uniforms[zz], tz)
      }
      setIntArray4(zz, tz) {
        this._valueCache[zz] = null, this.engine.setIntArray4(this._uniforms[zz], tz)
      }
      setUInt(zz, tz) {
        const sz = this._valueCache[zz];
        void 0 !== sz && sz === tz || this.engine.setUInt(this._uniforms[zz], tz) && (this._valueCache[zz] = tz)
      }
      setUInt2(zz, tz, sz) {
        this._cacheFloat2(zz, tz, sz) && (this.engine.setUInt2(this._uniforms[zz], tz, sz) || (this._valueCache[zz] = null))
      }
      setUInt3(zz, tz, sz, Fz) {
        this._cacheFloat3(zz, tz, sz, Fz) && (this.engine.setUInt3(this._uniforms[zz], tz, sz, Fz) || (this._valueCache[zz] = null))
      }
      setUInt4(zz, tz, sz, Fz, Wz) {
        this._cacheFloat4(zz, tz, sz, Fz, Wz) && (this.engine.setUInt4(this._uniforms[zz], tz, sz, Fz, Wz) || (this._valueCache[zz] = null))
      }
      setUIntArray(zz, tz) {
        this._valueCache[zz] = null, this.engine.setUIntArray(this._uniforms[zz], tz)
      }
      setUIntArray2(zz, tz) {
        this._valueCache[zz] = null, this.engine.setUIntArray2(this._uniforms[zz], tz)
      }
      setUIntArray3(zz, tz) {
        this._valueCache[zz] = null, this.engine.setUIntArray3(this._uniforms[zz], tz)
      }
      setUIntArray4(zz, tz) {
        this._valueCache[zz] = null, this.engine.setUIntArray4(this._uniforms[zz], tz)
      }
      setArray(zz, tz) {
        this._valueCache[zz] = null, this.engine.setArray(this._uniforms[zz], tz)
      }
      setArray2(zz, tz) {
        this._valueCache[zz] = null, this.engine.setArray2(this._uniforms[zz], tz)
      }
      setArray3(zz, tz) {
        this._valueCache[zz] = null, this.engine.setArray3(this._uniforms[zz], tz)
      }
      setArray4(zz, tz) {
        this._valueCache[zz] = null, this.engine.setArray4(this._uniforms[zz], tz)
      }
      setMatrices(zz, tz) {
        tz && (this._valueCache[zz] = null, this.engine.setMatrices(this._uniforms[zz], tz))
      }
      setMatrix(zz, tz) {
        this._cacheMatrix(zz, tz) && (this.engine.setMatrices(this._uniforms[zz], tz.hsz()) || (this._valueCache[zz] = null))
      }
      setMatrix3x3(zz, tz) {
        this._valueCache[zz] = null, this.engine.setMatrix3x3(this._uniforms[zz], tz)
      }
      setMatrix2x2(zz, tz) {
        this._valueCache[zz] = null, this.engine.setMatrix2x2(this._uniforms[zz], tz)
      }
      setFloat(zz, tz) {
        const sz = this._valueCache[zz];
        void 0 !== sz && sz === tz || this.engine.setFloat(this._uniforms[zz], tz) && (this._valueCache[zz] = tz)
      }
      setVector2(zz, tz) {
        this._cacheFloat2(zz, tz.x, tz.y) && (this.engine.setFloat2(this._uniforms[zz], tz.x, tz.y) || (this._valueCache[zz] = null))
      }
      setFloat2(zz, tz, sz) {
        this._cacheFloat2(zz, tz, sz) && (this.engine.setFloat2(this._uniforms[zz], tz, sz) || (this._valueCache[zz] = null))
      }
      setVector3(zz, tz) {
        this._cacheFloat3(zz, tz.x, tz.y, tz.z) && (this.engine.setFloat3(this._uniforms[zz], tz.x, tz.y, tz.z) || (this._valueCache[zz] = null))
      }
      setFloat3(zz, tz, sz, Fz) {
        this._cacheFloat3(zz, tz, sz, Fz) && (this.engine.setFloat3(this._uniforms[zz], tz, sz, Fz) || (this._valueCache[zz] = null))
      }
      setVector4(zz, tz) {
        this._cacheFloat4(zz, tz.x, tz.y, tz.z, tz.w) && (this.engine.setFloat4(this._uniforms[zz], tz.x, tz.y, tz.z, tz.w) || (this._valueCache[zz] = null))
      }
      setQuaternion(zz, tz) {
        this._cacheFloat4(zz, tz.x, tz.y, tz.z, tz.w) && (this.engine.setFloat4(this._uniforms[zz], tz.x, tz.y, tz.z, tz.w) || (this._valueCache[zz] = null))
      }
      setFloat4(zz, tz, sz, Fz, Wz) {
        this._cacheFloat4(zz, tz, sz, Fz, Wz) && (this.engine.setFloat4(this._uniforms[zz], tz, sz, Fz, Wz) || (this._valueCache[zz] = null))
      }
      setColor3(zz, tz) {
        this._cacheFloat3(zz, tz.r, tz.g, tz.b) && (this.engine.setFloat3(this._uniforms[zz], tz.r, tz.g, tz.b) || (this._valueCache[zz] = null))
      }
      setColor4(zz, tz, sz) {
        this._cacheFloat4(zz, tz.r, tz.g, tz.b, sz) && (this.engine.setFloat4(this._uniforms[zz], tz.r, tz.g, tz.b, sz) || (this._valueCache[zz] = null))
      }
      setDirectColor4(zz, tz) {
        this._cacheFloat4(zz, tz.r, tz.g, tz.b, tz.a) && (this.engine.setFloat4(this._uniforms[zz], tz.r, tz.g, tz.b, tz.a) || (this._valueCache[zz] = null))
      }
      _getVertexShaderCode() {
        return this.vertexShader ? this.engine._getShaderSource(this.vertexShader) : null
      }
      _getFragmentShaderCode() {
        return this.fragmentShader ? this.engine._getShaderSource(this.fragmentShader) : null
      }
    }
    var Wz = sz(39063);
    const Xz = new WeakMap,
      Oz = {
        _webGLVersion: 2,
        cachedPipelines: {}
      };

    function oz(zz) {
      let tz = Xz.get(zz);
      if (!tz) {
        if (!zz) return Oz;
        tz = {
          _webGLVersion: zz.TEXTURE_BINDING_3D ? 2 : 1,
          _context: zz,
          parallelShaderCompile: zz.getExtension("KHR_parallel_shader_compile") || void 0,
          cachedPipelines: {}
        }, Xz.set(zz, tz)
      }
      return tz
    }

    function vz(zz) {
      Xz.delete(zz)
    }

    function Uz(zz, tz, sz, Fz, Wz, Xz) {
      const Oz = oz(Fz);
      Xz || (Xz = Oz._createShaderProgramInjection ?? Nz);
      return Xz(zz, Hz(tz, "vertex", Fz, Oz._contextWasLost), Hz(sz, "fragment", Fz, Oz._contextWasLost), Fz, Wz, Oz.validateShaderPrograms)
    }

    function Kz(zz, tz, sz, Fz, Wz) {
      let Xz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Oz = arguments.length > 6 ? arguments[6] : void 0;
      const vz = oz(Wz);
      Oz || (Oz = vz._createShaderProgramInjection ?? Nz);
      const Uz = vz._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
      return Oz(zz, gz(tz, "vertex", Fz, Uz, Wz, vz._contextWasLost), gz(sz, "fragment", Fz, Uz, Wz, vz._contextWasLost), Wz, Xz, vz.validateShaderPrograms)
    }

    function uz(zz, tz) {
      const sz = new Fz,
        Wz = oz(zz);
      return Wz.parallelShaderCompile && !Wz.disableParallelShaderCompile && (sz.isParallelCompiled = !0), sz.context = Wz._context, sz
    }

    function Nz(zz, tz, sz, Fz) {
      let Wz = arguments.length > 5 ? arguments[5] : void 0;
      const Xz = Fz.createProgram();
      if (zz.program = Xz, !Xz) throw new Error("Unable to create program");
      return Fz.attachShader(Xz, tz), Fz.attachShader(Xz, sz), Fz.linkProgram(Xz), zz.context = Fz, zz.vertexShader = tz, zz.fragmentShader = sz, zz.isParallelCompiled || wz(zz, Fz, Wz), Xz
    }

    function bz(zz, tz, sz) {
      const Fz = zz;
      if (Fz._isDisposed) return !1;
      const Wz = oz(tz);
      return !!(Wz && Wz.parallelShaderCompile && Wz.parallelShaderCompile.COMPLETION_STATUS_KHR && Fz.program && tz.getProgramParameter(Fz.program, Wz.parallelShaderCompile.COMPLETION_STATUS_KHR)) && (wz(Fz, tz, sz), !0)
    }

    function wz(zz, tz, sz) {
      const Fz = zz.context,
        Wz = zz.vertexShader,
        Xz = zz.fragmentShader,
        Oz = zz.program;
      if (!Fz.getProgramParameter(Oz, Fz.LINK_STATUS)) {
        if (!tz.getShaderParameter(Wz, tz.COMPILE_STATUS)) {
          const sz = tz.getShaderInfoLog(Wz);
          if (sz) throw zz.vertexCompilationError = sz, new Error("VERTEX SHADER " + sz)
        }
        if (!tz.getShaderParameter(Xz, tz.COMPILE_STATUS)) {
          const sz = tz.getShaderInfoLog(Xz);
          if (sz) throw zz.fragmentCompilationError = sz, new Error("FRAGMENT SHADER " + sz)
        }
        const sz = Fz.getProgramInfoLog(Oz);
        if (sz) throw zz.programLinkError = sz, new Error(sz)
      }
      if (sz) {
        Fz.validateProgram(Oz);
        if (!Fz.getProgramParameter(Oz, Fz.VALIDATE_STATUS)) {
          const tz = Fz.getProgramInfoLog(Oz);
          if (tz) throw zz.programValidationError = tz, new Error(tz)
        }
      }
      Fz.deleteShader(Wz), Fz.deleteShader(Xz), zz.vertexShader = void 0, zz.fragmentShader = void 0, zz.onCompiled && (zz.onCompiled(), zz.onCompiled = void 0)
    }

    function Dz(zz, tz, sz, Fz, Wz, Xz, Oz, vz, uz) {
      let Nz = arguments.length > 10 ? arguments[10] : void 0,
        bz = arguments.length > 11 ? arguments[11] : void 0,
        wz = arguments.length > 12 ? arguments[12] : void 0;
      const Dz = oz(zz.context);
      bz || (bz = Dz.createRawShaderProgramInjection ?? Uz), wz || (wz = Dz.createShaderProgramInjection ?? Kz);
      const gz = zz;
      gz.program = Fz ? bz(gz, tz, sz, gz.context, uz) : wz(gz, tz, sz, vz, gz.context, uz), gz.program.__SPECTOR_rebuildProgram = Oz, Nz()
    }

    function gz(zz, tz, sz, Fz, Xz, Oz) {
      return Hz((0, Wz.c)(zz, sz, Fz), tz, Xz, Oz)
    }

    function Hz(zz, tz, sz, Fz) {
      const Wz = sz.createShader("vertex" === tz ? sz.VERTEX_SHADER : sz.FRAGMENT_SHADER);
      if (!Wz) {
        let zz, Wz = sz.NO_ERROR;
        for (;
          (zz = sz.getError()) !== sz.NO_ERROR;) Wz = zz;
        throw new Error(`Something went wrong while creating a gl ${tz} shader object. gl error=${Wz}, gl isContextLost=${sz.isContextLost()}, _contextWasLost=${Fz}`)
      }
      return sz.shaderSource(Wz, zz), sz.compileShader(Wz), Wz
    }

    function Bz(zz, tz) {
      tz.useProgram(zz)
    }

    function Pz(zz, tz) {
      const sz = zz;
      if (!sz.isParallelCompiled) return void tz(zz);
      const Fz = sz.onCompiled;
      sz.onCompiled = () => {
        Fz?.(), tz(zz)
      }
    }
  },
  39031: (zz, tz, sz) => {
    sz.d(tz, {
      ThinEngine: () => Yz
    });
    var Fz = sz(39036),
      Wz = sz(39058),
      Xz = sz(39077),
      Oz = sz(39090),
      oz = sz(38097),
      vz = sz(39051);
    class Uz {
      constructor() {
        this.shaderLanguage = 0
      }
      postProcessor(zz, tz, sz, Fz, Wz) {
        if (Wz.drawBuffersExtensionDisabled) {
          const tz = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
          zz = zz.replace(tz, "")
        }
        return zz
      }
    }
    const Kz = /(flat\s)?\s*varying\s*.*/;
    class uz {
      constructor() {
        this.shaderLanguage = 0
      }
      attributeProcessor(zz) {
        return zz.replace("attribute", "in")
      }
      varyingCheck(zz, tz) {
        return Kz.test(zz)
      }
      varyingProcessor(zz, tz) {
        return zz.replace("varying", tz ? "in" : "out")
      }
      postProcessor(zz, tz, sz) {
        const Fz = -1 !== zz.search(/#extension.+GL_EXT_draw_buffers.+require/);
        if (zz = (zz = zz.replace(/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g, "")).replace(/texture2D\s*\(/g, "texture("), sz) {
          const sz = -1 !== zz.search(/layout *\(location *= *0\) *out/g),
            Wz = -1 !== tz.indexOf("#define DUAL_SOURCE_BLENDING"),
            Xz = Wz ? "layout(location = 0, index = 0) out vec4 glFragColor;\nlayout(location = 0, index = 1) out vec4 glFragColor2;\n" : "layout(location = 0) out vec4 glFragColor;\n";
          Wz && (zz = "#extension GL_EXT_blend_func_extended : require\n" + zz), zz = (zz = (zz = (zz = (zz = (zz = (zz = zz.replace(/texture2DLodEXT\s*\(/g, "textureLod(")).replace(/textureCubeLodEXT\s*\(/g, "textureLod(")).replace(/textureCube\s*\(/g, "texture(")).replace(/gl_FragDepthEXT/g, "gl_FragDepth")).replace(/gl_FragColor/g, "glFragColor")).replace(/gl_FragData/g, "glFragData")).replace(/void\s+?main\s*\(/g, (Fz || sz ? "" : Xz) + "void main(")
        } else {
          tz.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0 && (zz = "invariant gl_Position;\n" + zz);
          if (-1 !== tz.indexOf("#define MULTIVIEW")) return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + zz
        }
        return zz
      }
    }
    var Nz = sz(39097),
      bz = sz(39111),
      wz = sz(39113),
      Dz = sz(39021),
      gz = sz(39063),
      Hz = sz(39047),
      Bz = sz(39117),
      Pz = sz(39083);
    class rz {}
    class Yz extends Xz.b {
      get name() {
        return this._name
      }
      set name(zz) {
        this._name = zz
      }
      get version() {
        return this._webGLVersion
      }
      static get ShadersRepository() {
        return Fz.e.ShadersRepository
      }
      static set ShadersRepository(zz) {
        Fz.e.ShadersRepository = zz
      }
      get supportsUniformBuffers() {
        return this.jD > 1 && !this.disableUniformBuffers
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
      constructor(zz, tz, sz, Fz) {
        if (sz = sz || {}, super(tz ?? sz.antialias, sz, Fz), this._name = "WebGL", this.forcePOTTextures = !1, this.validateShaderPrograms = !1, this.disableUniformBuffers = !1, this._webGLVersion = 1, this._integerMRTAttachmentsMask = 0, this._vertexAttribArraysEnabled = [], this._uintIndicesCurrentlySet = !1, this._currentBoundBuffer = new Array, this._currentFramebuffer = null, this._dummyFramebuffer = null, this._currentBufferPointers = new Array, this._currentInstanceLocations = new Array, this._currentInstanceBuffers = new Array, this._vaoRecordInProgress = !1, this._mustWipeVertexAttributes = !1, this._nextFreeTextureSlots = new Array, this._maxSimultaneousTextures = 0, this._maxMSAASamplesOverride = null, this._unpackFlipYCached = null, this.enableUnpackFlipYCached = !0, this._boundUniforms = {}, !zz) return;
        let Xz;
        if (zz.getContext) {
          if (Xz = zz, void 0 === sz.preserveDrawingBuffer && (sz.preserveDrawingBuffer = !1), void 0 === sz.xrCompatible && (sz.xrCompatible = !1), navigator && navigator.userAgent) {
            this._setupMobileChecks();
            const zz = navigator.userAgent;
            for (const tz of Yz.ExceptionList) {
              const Fz = tz.key,
                Wz = tz.targets;
              if (new RegExp(Fz).test(zz)) {
                if (tz.capture && tz.captureConstraint) {
                  const sz = tz.capture,
                    Fz = tz.captureConstraint,
                    Wz = new RegExp(sz).exec(zz);
                  if (Wz && Wz.length > 0) {
                    if (parseInt(Wz[Wz.length - 1]) >= Fz) continue
                  }
                }
                for (const zz of Wz) switch (zz) {
                  case "uniformBuffer":
                    this.disableUniformBuffers = !0;
                    break;
                  case "vao":
                    this.disableVertexArrayObjects = !0;
                    break;
                  case "antialias":
                    sz.antialias = !1;
                    break;
                  case "maxMSAASamples":
                    this._maxMSAASamplesOverride = 1
                }
              }
            }
          }
          if (this._doNotHandleContextLost ? this._onContextLost = () => {
              (0, Wz.B)(this._gl)
            } : (this._onContextLost = zz => {
              zz.preventDefault(), this._contextWasLost = !0, (0, Wz.B)(this._gl), oz.e.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
            }, this._onContextRestored = () => {
              this._restoreEngineAfterContextLost((() => this._initGLContext()))
            }, Xz.addEventListener("webglcontextrestored", this._onContextRestored, !1), sz.powerPreference = sz.powerPreference || "high-performance"), Xz.addEventListener("webglcontextlost", this._onContextLost, !1), this._badDesktopOS && (sz.xrCompatible = !1), !sz.disableWebGL2Support) try {
            this._gl = Xz.getContext("webgl2", sz) || Xz.getContext("experimental-webgl2", sz), this._gl && (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2", this._gl.deleteQuery || (this._webGLVersion = 1, this._shaderPlatformName = "WEBGL1"))
          } catch (Kz) {}
          if (!this._gl) {
            if (!Xz) throw new Error("The provided canvas is null or undefined.");
            try {
              this._gl = Xz.getContext("webgl", sz) || Xz.getContext("experimental-webgl", sz)
            } catch (Kz) {
              throw new Error("WebGL not supported", {
                cause: Kz
              })
            }
          }
          if (!this._gl) throw new Error("WebGL not supported")
        } else {
          this._gl = zz, Xz = this._gl.canvas, this._gl.renderbufferStorageMultisample ? (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2") : this._shaderPlatformName = "WEBGL1";
          const tz = this._gl.getContextAttributes();
          tz && (sz.stencil = tz.stencil)
        }
        this._sharedInit(Xz), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== sz.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = sz.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
        for (let Wz = 0; Wz < this._caps.maxVertexAttribs; Wz++) this._currentBufferPointers[Wz] = new rz;
        this._shaderProcessor = this.jD > 1 ? new uz : new Uz;
        const Oz = `Babylon.js v${Yz.Version}`;
        oz.e.Log(Oz + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", Oz);
        const vz = (0, Wz.F)(this._gl);
        vz.validateShaderPrograms = this.validateShaderPrograms, vz.parallelShaderCompile = this._caps.parallelShaderCompile
      }
      _clearEmptyResources() {
        this._dummyFramebuffer = null, super._clearEmptyResources()
      }
      _getShaderProcessingContext(zz) {
        return null
      }
      areAllEffectsReady() {
        for (const zz in this._compiledEffects) {
          if (!this._compiledEffects[zz].isReady()) return !1
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
        const zz = this._gl.getExtension("WEBGL_debug_renderer_info");
        null != zz && (this._glRenderer = this._gl.getParameter(zz.UNMASKED_RENDERER_WEBGL), this._glVendor = this._gl.getParameter(zz.UNMASKED_VENDOR_WEBGL)), this._glVendor || (this._glVendor = this._gl.getParameter(this._gl.VENDOR) || "Unknown vendor"), this._glRenderer || (this._glRenderer = this._gl.getParameter(this._gl.RENDERER) || "Unknown renderer"), 36193 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 36193), 34842 !== this._gl.RGBA16F && (this._gl.RGBA16F = 34842), 34836 !== this._gl.RGBA32F && (this._gl.RGBA32F = 34836), 35056 !== this._gl.DEPTH24_STENCIL8 && (this._gl.DEPTH24_STENCIL8 = 35056), this._caps.timerQuery && (1 === this._webGLVersion && (this._gl.getQuery = this._caps.timerQuery.getQueryEXT.bind(this._caps.timerQuery)), this._caps.canUseTimestampForTimerQuery = (this._gl.getQuery(this._caps.timerQuery.TIMESTAMP_EXT, this._caps.timerQuery.QUERY_COUNTER_BITS_EXT) ?? 0) > 0), this._caps.maxAnisotropy = this._caps.textureAnisotropicFilterExtension ? this._gl.getParameter(this._caps.textureAnisotropicFilterExtension.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0, this._caps.textureFloatLinearFiltering = !(!this._caps.textureFloat || !this._gl.getExtension("OES_texture_float_linear")), this._caps.textureFloatRender = !(!this._caps.textureFloat || !this._canRenderToFloatFramebuffer()), this._caps.textureHalfFloatLinearFiltering = !!(this._webGLVersion > 1 || this._caps.textureHalfFloat && this._gl.getExtension("OES_texture_half_float_linear")), this._caps.textureNorm16 && (this._gl.R16_EXT = 33322, this._gl.RG16_EXT = 33324, this._gl.RGB16_EXT = 32852, this._gl.RGBA16_EXT = 32859, this._gl.R16_SNORM_EXT = 36760, this._gl.RG16_SNORM_EXT = 36761, this._gl.RGB16_SNORM_EXT = 36762, this._gl.RGBA16_SNORM_EXT = 36763);
        const tz = this._gl.getExtension("OES_draw_buffers_indexed");
        if (this._caps.blendParametersPerTarget = !!tz, this._alphaState = new Pz.e(this._caps.blendParametersPerTarget), tz && (this._gl.blendEquationSeparateIndexed = tz.blendEquationSeparateiOES.bind(tz), this._gl.blendEquationIndexed = tz.blendEquationiOES.bind(tz), this._gl.blendFuncSeparateIndexed = tz.blendFuncSeparateiOES.bind(tz), this._gl.blendFuncIndexed = tz.blendFunciOES.bind(tz), this._gl.colorMaskIndexed = tz.colorMaskiOES.bind(tz), this._gl.disableIndexed = tz.disableiOES.bind(tz), this._gl.enableIndexed = tz.enableiOES.bind(tz)), this._caps.dualSourceBlending = !!this._gl.getExtension("WEBGL_blend_func_extended"), this._caps.astc && (this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR), this._caps.bptc && (this._gl.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = this._caps.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT), this._caps.s3tc_srgb && (this._gl.COMPRESSED_SRGB_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT), this._caps.etc2 && (this._gl.COMPRESSED_SRGB8_ETC2 = this._caps.etc2.COMPRESSED_SRGB8_ETC2, this._gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = this._caps.etc2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC), this._webGLVersion > 1 && 5131 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 5131), this._caps.textureHalfFloatRender = this._caps.textureHalfFloat && this._canRenderToHalfFloatFramebuffer(), this._webGLVersion > 1) this._caps.drawBuffersExtension = !0, this._caps.maxMSAASamples = null !== this._maxMSAASamplesOverride ? this._maxMSAASamplesOverride : this._gl.getParameter(this._gl.MAX_SAMPLES), this._caps.maxDrawBuffers = this._gl.getParameter(this._gl.MAX_DRAW_BUFFERS);
        else {
          const zz = this._gl.getExtension("WEBGL_draw_buffers");
          if (null !== zz) {
            this._caps.drawBuffersExtension = !0, this._gl.drawBuffers = zz.drawBuffersWEBGL.bind(zz), this._caps.maxDrawBuffers = this._gl.getParameter(zz.MAX_DRAW_BUFFERS_WEBGL), this._gl.DRAW_FRAMEBUFFER = this._gl.FRAMEBUFFER;
            for (let tz = 0; tz < 16; tz++) this._gl["COLOR_ATTACHMENT" + tz + "_WEBGL"] = zz["COLOR_ATTACHMENT" + tz + "_WEBGL"]
          }
        }
        if (this._webGLVersion > 1) this._caps.depthTextureExtension = !0;
        else {
          const zz = this._gl.getExtension("WEBGL_depth_texture");
          null != zz && (this._caps.depthTextureExtension = !0, this._gl.UNSIGNED_INT_24_8 = zz.UNSIGNED_INT_24_8_WEBGL)
        }
        if (this.disableVertexArrayObjects) this._caps.vertexArrayObject = !1;
        else if (this._webGLVersion > 1) this._caps.vertexArrayObject = !0;
        else {
          const zz = this._gl.getExtension("OES_vertex_array_object");
          null != zz && (this._caps.vertexArrayObject = !0, this._gl.createVertexArray = zz.createVertexArrayOES.bind(zz), this._gl.bindVertexArray = zz.bindVertexArrayOES.bind(zz), this._gl.deleteVertexArray = zz.deleteVertexArrayOES.bind(zz))
        }
        if (this._webGLVersion > 1) this._caps.instancedArrays = !0;
        else {
          const zz = this._gl.getExtension("ANGLE_instanced_arrays");
          null != zz ? (this._caps.instancedArrays = !0, this._gl.drawArraysInstanced = zz.drawArraysInstancedANGLE.bind(zz), this._gl.drawElementsInstanced = zz.drawElementsInstancedANGLE.bind(zz), this._gl.vertexAttribDivisor = zz.vertexAttribDivisorANGLE.bind(zz)) : this._caps.instancedArrays = !1
        }
        if (this._gl.getShaderPrecisionFormat) {
          const zz = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.HIGH_FLOAT),
            tz = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
          if (zz && tz && (this._caps.highPrecisionShaderSupported = 0 !== zz.precision && 0 !== tz.precision, this._caps.shaderFloatPrecision = Math.min(zz.precision, tz.precision)), !this._shouldUseHighPrecisionShader) {
            const zz = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.MEDIUM_FLOAT),
              tz = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.MEDIUM_FLOAT);
            zz && tz && (this._caps.shaderFloatPrecision = Math.min(zz.precision, tz.precision))
          }
          this._caps.shaderFloatPrecision < 10 && (this._caps.shaderFloatPrecision = 10)
        }
        if (this._webGLVersion > 1) this._caps.blendMinMax = !0;
        else {
          const zz = this._gl.getExtension("EXT_blend_minmax");
          null != zz && (this._caps.blendMinMax = !0, this._gl.MAX = zz.MAX_EXT, this._gl.MIN = zz.MIN_EXT)
        }
        if (!this._caps.supportSRGBBuffers) {
          if (this._webGLVersion > 1) this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
            SRGB: WebGL2RenderingContext.SRGB,
            SRGB8: WebGL2RenderingContext.SRGB8,
            SRGB8_ALPHA8: WebGL2RenderingContext.SRGB8_ALPHA8
          };
          else {
            const zz = this._gl.getExtension("EXT_sRGB");
            null != zz && (this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
              SRGB: zz.SRGB_EXT,
              SRGB8: zz.SRGB_ALPHA_EXT,
              SRGB8_ALPHA8: zz.SRGB_ALPHA_EXT
            })
          }
          if (this._creationOptions) {
            const zz = this._creationOptions.forceSRGBBufferSupportState;
            void 0 !== zz && (this._caps.supportSRGBBuffers = this._caps.supportSRGBBuffers && zz)
          }
        }
        this._depthCullingState.depthTest = !0, this._depthCullingState.depthFunc = this._gl.LEQUAL, this._depthCullingState.depthMask = !0, this._maxSimultaneousTextures = this._caps.maxCombinedTexturesImageUnits;
        for (let sz = 0; sz < this._maxSimultaneousTextures; sz++) this._nextFreeTextureSlots.push(sz);
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
      get jD() {
        return this._webGLVersion
      }
      getClassName() {
        return "ThinEngine"
      }
      _prepareWorkingCanvas() {
        if (this._workingCanvas) return;
        this._workingCanvas = this.createCanvas(1, 1);
        const zz = this._workingCanvas.getContext("2d");
        zz && (this._workingContext = zz)
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
        const zz = this.getGlInfo();
        return zz && zz.renderer ? zz.renderer : ""
      }
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferWidth : this._gl.drawingBufferWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferHeight : this._gl.drawingBufferHeight
      }
      clear(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const Xz = this.stencilStateComposer.useStencilGlobalOnly;
        this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = Xz;
        let Oz = 0;
        if (tz && zz) {
          let tz = !0;
          if (this._currentRenderTarget) {
            const sz = this._currentRenderTarget.texture?.format;
            if (void 0 !== sz && (0, Bz.h)(sz)) {
              const sz = this._currentRenderTarget.texture?.type;
              void 0 !== sz && (0, Bz.k)(sz) ? (Yz._TempClearColorUint32[0] = 255 * zz.r, Yz._TempClearColorUint32[1] = 255 * zz.g, Yz._TempClearColorUint32[2] = 255 * zz.b, Yz._TempClearColorUint32[3] = 255 * zz.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, Yz._TempClearColorUint32), tz = !1) : (Yz._TempClearColorInt32[0] = 255 * zz.r, Yz._TempClearColorInt32[1] = 255 * zz.g, Yz._TempClearColorInt32[2] = 255 * zz.b, Yz._TempClearColorInt32[3] = 255 * zz.a, this._gl.clearBufferiv(this._gl.COLOR, 0, Yz._TempClearColorInt32), tz = !1)
            }
          }
          tz && (this._gl.clearColor(zz.r, zz.g, zz.b, void 0 !== zz.a ? zz.a : 1), Oz |= this._gl.COLOR_BUFFER_BIT)
        }
        sz && (this.ysz ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), Oz |= this._gl.DEPTH_BUFFER_BIT), Fz && (this._gl.clearStencil(Wz), Oz |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(Oz)
      }
      _clearColorAttachment(zz, tz, sz, Fz) {
        if ((0, Bz.h)(sz)) {
          const sz = (0, Bz.k)(Fz),
            Wz = sz ? Yz._TempClearColorUint32 : Yz._TempClearColorInt32;
          return Wz[0] = tz.r, Wz[1] = tz.g, Wz[2] = tz.b, Wz[3] = tz.a, void(sz ? this._gl.clearBufferuiv(this._gl.COLOR, zz, Wz) : this._gl.clearBufferiv(this._gl.COLOR, zz, Wz))
        }
        Yz._TempClearColorFloat32[0] = tz.r, Yz._TempClearColorFloat32[1] = tz.g, Yz._TempClearColorFloat32[2] = tz.b, Yz._TempClearColorFloat32[3] = tz.a, this._gl.clearBufferfv(this._gl.COLOR, zz, Yz._TempClearColorFloat32)
      }
      _viewport(zz, tz, sz, Fz) {
        zz === this._viewportCached.x && tz === this._viewportCached.y && sz === this._viewportCached.z && Fz === this._viewportCached.w || (this._viewportCached.x = zz, this._viewportCached.y = tz, this._viewportCached.z = sz, this._viewportCached.w = Fz, this._gl.viewport(zz, tz, sz, Fz))
      }
      rY() {
        super.rY(), this._badOS && this.flushFramebuffer()
      }
      get performanceMonitor() {
        throw new Error("Not Supported by ThinEngine")
      }
      bindFramebuffer(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sz = arguments.length > 2 ? arguments[2] : void 0,
          Fz = arguments.length > 3 ? arguments[3] : void 0,
          Wz = arguments.length > 4 ? arguments[4] : void 0,
          Xz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Oz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const vz = zz;
        this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = zz, this._integerMRTAttachmentsMask = !zz.isMulti && zz.texture && (0, Bz.h)(zz.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(vz._framebuffer);
        const Uz = this._gl;
        zz.isMulti || (zz.is2DArray || zz.is3D ? (Uz.framebufferTextureLayer(Uz.FRAMEBUFFER, Uz.COLOR_ATTACHMENT0, zz.texture._hardwareTexture?.underlyingResource, Xz, Oz), vz._currentLOD = Xz) : zz.isCube ? Uz.framebufferTexture2D(Uz.FRAMEBUFFER, Uz.COLOR_ATTACHMENT0, Uz.TEXTURE_CUBE_MAP_POSITIVE_X + tz, zz.texture._hardwareTexture?.underlyingResource, Xz) : vz._currentLOD !== Xz && (Uz.framebufferTexture2D(Uz.FRAMEBUFFER, Uz.COLOR_ATTACHMENT0, Uz.TEXTURE_2D, zz.texture._hardwareTexture?.underlyingResource, Xz), vz._currentLOD = Xz));
        const Kz = zz._depthStencilTexture;
        if (Kz) {
          zz.is3D && (zz.texture.width === Kz.width && zz.texture.height === Kz.height && zz.texture.depth === Kz.depth || oz.e.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
          const sz = zz._depthStencilTextureWithStencil ? Uz.DEPTH_STENCIL_ATTACHMENT : Uz.DEPTH_ATTACHMENT;
          zz.is2DArray || zz.is3D ? Uz.framebufferTextureLayer(Uz.FRAMEBUFFER, sz, Kz._hardwareTexture?.underlyingResource, Xz, Oz) : zz.isCube ? Uz.framebufferTexture2D(Uz.FRAMEBUFFER, sz, Uz.TEXTURE_CUBE_MAP_POSITIVE_X + tz, Kz._hardwareTexture?.underlyingResource, Xz) : Uz.framebufferTexture2D(Uz.FRAMEBUFFER, sz, Uz.TEXTURE_2D, Kz._hardwareTexture?.underlyingResource, Xz)
        }
        vz._MSAAFramebuffer && this._bindUnboundFramebuffer(vz._MSAAFramebuffer), this._cachedViewport && !Wz ? this.setViewport(this._cachedViewport, sz, Fz) : (sz || (sz = zz.width, Xz && (sz /= Math.pow(2, Xz))), Fz || (Fz = zz.height, Xz && (Fz /= Math.pow(2, Xz))), this._viewport(0, 0, sz, Fz)), this.wipeCaches()
      }
      setStateCullFaceType(zz, tz) {
        const sz = this.cullBackFaces ?? zz ?? 1 ? this._gl.BACK : this._gl.FRONT;
        (this._depthCullingState.cullFace !== sz || tz) && (this._depthCullingState.cullFace = sz)
      }
      setState(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sz = arguments.length > 2 ? arguments[2] : void 0,
          Fz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Wz = arguments.length > 4 ? arguments[4] : void 0,
          Xz = arguments.length > 5 ? arguments[5] : void 0,
          Oz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        (this._depthCullingState.cull !== zz || sz) && (this._depthCullingState.cull = zz), this.setStateCullFaceType(Wz, sz), this.setZOffset(tz), this.setZOffsetUnits(Oz);
        const oz = Fz ? this._gl.CW : this._gl.CCW;
        (this._depthCullingState.frontFace !== oz || sz) && (this._depthCullingState.frontFace = oz), this._stencilStateComposer.stencilMaterial = Xz
      }
      _resolveAndGenerateMipMapsFramebuffer(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        zz.disableAutomaticMSAAResolve || (zz.isMulti ? this.resolveMultiFramebuffer(zz) : this.resolveFramebuffer(zz)), tz || (zz.isMulti ? this.generateMipMapsMultiFramebuffer(zz) : this.generateMipMapsFramebuffer(zz))
      }
      _bindUnboundFramebuffer(zz) {
        this._currentFramebuffer !== zz && (this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, zz), this._currentFramebuffer = zz)
      }
      _currentFrameBufferIsDefaultFrameBuffer() {
        return null === this._currentFramebuffer
      }
      generateMipmaps(zz) {
        const tz = this._getTextureTarget(zz);
        this._bindTextureDirectly(tz, zz, !0), this._gl.generateMipmap(tz), this._bindTextureDirectly(tz, null)
      }
      unBindFramebuffer(zz, tz, sz) {
        const Fz = zz;
        this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, this._resolveAndGenerateMipMapsFramebuffer(zz, tz), sz && (Fz._MSAAFramebuffer && this._bindUnboundFramebuffer(Fz._framebuffer), sz()), this._bindUnboundFramebuffer(null)
      }
      generateMipMapsFramebuffer(zz) {
        zz.isMulti || !zz.texture?.generateMipMaps || zz.isCube || this.generateMipmaps(zz.texture)
      }
      resolveFramebuffer(zz) {
        const tz = zz,
          sz = this._gl;
        if (!tz._MSAAFramebuffer || tz.isMulti) return;
        let Fz = tz.resolveMSAAColors ? sz.COLOR_BUFFER_BIT : 0;
        Fz |= tz._generateDepthBuffer && tz.resolveMSAADepth ? sz.DEPTH_BUFFER_BIT : 0, Fz |= tz._generateStencilBuffer && tz.resolveMSAAStencil ? sz.STENCIL_BUFFER_BIT : 0, sz.bindFramebuffer(sz.READ_FRAMEBUFFER, tz._MSAAFramebuffer), sz.bindFramebuffer(sz.DRAW_FRAMEBUFFER, tz._framebuffer), sz.blitFramebuffer(0, 0, zz.width, zz.height, 0, 0, zz.width, zz.height, Fz, sz.NEAREST)
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
      createVertexBuffer(zz, tz, sz) {
        return this._createVertexBuffer(zz, this._gl.STATIC_DRAW)
      }
      _createVertexBuffer(zz, tz) {
        const sz = this._gl.createBuffer();
        if (!sz) throw new Error("Unable to create vertex buffer");
        const Fz = new Nz.e(sz);
        return this.bindArrayBuffer(Fz), "number" !== typeof zz ? zz instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(zz), tz), Fz.au = 4 * zz.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, zz, tz), Fz.au = zz.byteLength) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Uint8Array(zz), tz), Fz.au = zz), this._resetVertexBufferBinding(), Fz.references = 1, Fz
      }
      createDynamicVertexBuffer(zz, tz) {
        return this._createVertexBuffer(zz, this._gl.DYNAMIC_DRAW)
      }
      _resetIndexBufferBinding() {
        this.bindIndexBuffer(null), this._cachedIndexBuffer = null
      }
      createIndexBuffer(zz, tz, sz) {
        const Fz = this._gl.createBuffer(),
          Wz = new Nz.e(Fz);
        if (!Fz) throw new Error("Unable to create index buffer");
        this.bindIndexBuffer(Wz);
        const Xz = this._normalizeIndexData(zz);
        return this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, Xz, tz ? this._gl.DYNAMIC_DRAW : this._gl.STATIC_DRAW), this._resetIndexBufferBinding(), Wz.references = 1, Wz.is32Bits = 4 === Xz.BYTES_PER_ELEMENT, Wz
      }
      _normalizeIndexData(zz) {
        if (2 === zz.BYTES_PER_ELEMENT) return zz;
        if (this._caps.uintIndices) {
          if (zz instanceof Uint32Array) return zz;
          for (let tz = 0; tz < zz.length; tz++)
            if (zz[tz] >= 65535) return new Uint32Array(zz);
          return new Uint16Array(zz)
        }
        return new Uint16Array(zz)
      }
      bindArrayBuffer(zz) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(zz, this._gl.ARRAY_BUFFER)
      }
      bindUniformBlock(zz, tz, sz) {
        const Fz = zz.program,
          Wz = this._gl.getUniformBlockIndex(Fz, tz);
        this._gl.uniformBlockBinding(Fz, Wz, sz)
      }
      bindIndexBuffer(zz) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(zz, this._gl.ELEMENT_ARRAY_BUFFER)
      }
      _bindBuffer(zz, tz) {
        (this._vaoRecordInProgress || this._currentBoundBuffer[tz] !== zz) && (this._gl.bindBuffer(tz, zz ? zz.underlyingResource : null), this._currentBoundBuffer[tz] = zz)
      }
      updateArrayBuffer(zz) {
        this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, zz)
      }
      _vertexAttribPointer(zz, tz, sz, Fz, Wz, Xz, Oz) {
        const oz = this._currentBufferPointers[tz];
        if (!oz) return;
        let vz = !1;
        oz.active ? (oz.buffer !== zz && (oz.buffer = zz, vz = !0), oz.size !== sz && (oz.size = sz, vz = !0), oz.type !== Fz && (oz.type = Fz, vz = !0), oz.normalized !== Wz && (oz.normalized = Wz, vz = !0), oz.stride !== Xz && (oz.stride = Xz, vz = !0), oz.offset !== Oz && (oz.offset = Oz, vz = !0)) : (vz = !0, oz.active = !0, oz.index = tz, oz.size = sz, oz.type = Fz, oz.normalized = Wz, oz.stride = Xz, oz.offset = Oz, oz.buffer = zz), (vz || this._vaoRecordInProgress) && (this.bindArrayBuffer(zz), Fz === this._gl.UNSIGNED_INT || Fz === this._gl.INT ? this._gl.vertexAttribIPointer(tz, sz, Fz, Xz, Oz) : this._gl.vertexAttribPointer(tz, sz, Fz, Wz, Xz, Oz))
      }
      _bindIndexBufferWithCache(zz) {
        null != zz && this._cachedIndexBuffer !== zz && (this._cachedIndexBuffer = zz, this.bindIndexBuffer(zz), this._uintIndicesCurrentlySet = zz.is32Bits)
      }
      _bindVertexBuffersAttributes(zz, tz, sz) {
        const Fz = tz.getAttributesNames();
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this.unbindAllAttributes();
        for (let Wz = 0; Wz < Fz.length; Wz++) {
          const Xz = tz.getAttributeLocation(Wz);
          if (Xz >= 0) {
            const tz = Fz[Wz];
            let Oz = null;
            if (sz && (Oz = sz[tz]), Oz || (Oz = zz[tz]), !Oz) continue;
            this._gl.enableVertexAttribArray(Xz), this._vaoRecordInProgress || (this._vertexAttribArraysEnabled[Xz] = !0);
            const oz = Oz.getBuffer();
            oz && (this._vertexAttribPointer(oz, Xz, Oz.getSize(), Oz.type, Oz.normalized, Oz.byteStride, Oz.byteOffset), Oz.getIsInstanced() && (this._gl.vertexAttribDivisor(Xz, Oz.getInstanceDivisor()), this._vaoRecordInProgress || (this._currentInstanceLocations.push(Xz), this._currentInstanceBuffers.push(oz))))
          }
        }
      }
      recordVertexArrayObject(zz, tz, sz, Fz) {
        const Wz = this._gl.createVertexArray();
        if (!Wz) throw new Error("Unable to create VAO");
        return this._vaoRecordInProgress = !0, this._gl.bindVertexArray(Wz), this._mustWipeVertexAttributes = !0, this._bindVertexBuffersAttributes(zz, sz, Fz), this.bindIndexBuffer(tz), this._vaoRecordInProgress = !1, this._gl.bindVertexArray(null), Wz
      }
      bindVertexArrayObject(zz, tz) {
        this._cachedVertexArrayObject !== zz && (this._cachedVertexArrayObject = zz, this._gl.bindVertexArray(zz), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._uintIndicesCurrentlySet = null != tz && tz.is32Bits, this._mustWipeVertexAttributes = !0)
      }
      bindBuffersDirectly(zz, tz, sz, Fz, Wz) {
        if (this._cachedVertexBuffers !== zz || this._cachedEffectForVertexBuffers !== Wz) {
          this._cachedVertexBuffers = zz, this._cachedEffectForVertexBuffers = Wz;
          const tz = Wz.getAttributesCount();
          this._unbindVertexArrayObject(), this.unbindAllAttributes();
          let Xz = 0;
          for (let Oz = 0; Oz < tz; Oz++)
            if (Oz < sz.length) {
              const tz = Wz.getAttributeLocation(Oz);
              tz >= 0 && (this._gl.enableVertexAttribArray(tz), this._vertexAttribArraysEnabled[tz] = !0, this._vertexAttribPointer(zz, tz, sz[Oz], this._gl.FLOAT, !1, Fz, Xz)), Xz += 4 * sz[Oz]
            }
        }
        this._bindIndexBufferWithCache(tz)
      }
      _unbindVertexArrayObject() {
        this._cachedVertexArrayObject && (this._cachedVertexArrayObject = null, this._gl.bindVertexArray(null))
      }
      bindBuffers(zz, tz, sz, Fz) {
        this._cachedVertexBuffers === zz && this._cachedEffectForVertexBuffers === sz || (this._cachedVertexBuffers = zz, this._cachedEffectForVertexBuffers = sz, this._bindVertexBuffersAttributes(zz, sz, Fz)), this._bindIndexBufferWithCache(tz)
      }
      unbindInstanceAttributes() {
        let zz;
        for (let tz = 0, sz = this._currentInstanceLocations.length; tz < sz; tz++) {
          const sz = this._currentInstanceBuffers[tz];
          zz != sz && sz.references && (zz = sz, this.bindArrayBuffer(sz));
          const Fz = this._currentInstanceLocations[tz];
          this._gl.vertexAttribDivisor(Fz, 0)
        }
        this._currentInstanceBuffers.length = 0, this._currentInstanceLocations.length = 0
      }
      releaseVertexArrayObject(zz) {
        this._gl.deleteVertexArray(zz)
      }
      _releaseBuffer(zz) {
        return zz.references--, 0 === zz.references && (this._deleteBuffer(zz), !0)
      }
      _deleteBuffer(zz) {
        this._gl.deleteBuffer(zz.underlyingResource)
      }
      updateAndBindInstancesBuffer(zz, tz, sz) {
        if (this.bindArrayBuffer(zz), tz && this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, tz), void 0 !== sz[0].index) this.bindInstancesBuffer(zz, sz, !0);
        else
          for (let Fz = 0; Fz < 4; Fz++) {
            const tz = sz[Fz];
            this._vertexAttribArraysEnabled[tz] || (this._gl.enableVertexAttribArray(tz), this._vertexAttribArraysEnabled[tz] = !0), this._vertexAttribPointer(zz, tz, 4, this._gl.FLOAT, !1, 64, 16 * Fz), this._gl.vertexAttribDivisor(tz, 1), this._currentInstanceLocations.push(tz), this._currentInstanceBuffers.push(zz)
          }
      }
      bindInstancesBuffer(zz, tz) {
        let sz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.bindArrayBuffer(zz);
        let Fz = 0;
        if (sz)
          for (let Wz = 0; Wz < tz.length; Wz++) {
            Fz += 4 * tz[Wz].attributeSize
          }
        for (let Wz = 0; Wz < tz.length; Wz++) {
          const sz = tz[Wz];
          void 0 === sz.index && (sz.index = this._currentEffect.getAttributeLocationByName(sz.attributeName)), sz.index < 0 || (this._vertexAttribArraysEnabled[sz.index] || (this._gl.enableVertexAttribArray(sz.index), this._vertexAttribArraysEnabled[sz.index] = !0), this._vertexAttribPointer(zz, sz.index, sz.attributeSize, sz.attributeType || this._gl.FLOAT, sz.normalized || !1, Fz, sz.offset), this._gl.vertexAttribDivisor(sz.index, void 0 === sz.divisor ? 1 : sz.divisor), this._currentInstanceLocations.push(sz.index), this._currentInstanceBuffers.push(zz))
        }
      }
      disableInstanceAttributeByName(zz) {
        if (!this._currentEffect) return;
        const tz = this._currentEffect.getAttributeLocationByName(zz);
        this.disableInstanceAttribute(tz)
      }
      disableInstanceAttribute(zz) {
        let tz, sz = !1;
        for (; - 1 !== (tz = this._currentInstanceLocations.indexOf(zz));) this._currentInstanceLocations.splice(tz, 1), this._currentInstanceBuffers.splice(tz, 1), sz = !0;
        sz && (this._gl.vertexAttribDivisor(zz, 0), this.disableAttributeByIndex(zz))
      }
      disableAttributeByIndex(zz) {
        this._gl.disableVertexAttribArray(zz), this._vertexAttribArraysEnabled[zz] = !1, this._currentBufferPointers[zz].active = !1
      }
      draw(zz, tz, sz, Fz) {
        this.drawElementsType(zz ? 0 : 1, tz, sz, Fz)
      }
      drawPointClouds(zz, tz, sz) {
        this.drawArraysType(2, zz, tz, sz)
      }
      drawUnIndexed(zz, tz, sz, Fz) {
        this.drawArraysType(zz ? 0 : 1, tz, sz, Fz)
      }
      drawElementsType(zz, tz, sz, Fz) {
        this.applyStates(), this._reportDrawCall();
        const Wz = this._drawMode(zz),
          Xz = this._uintIndicesCurrentlySet ? this._gl.UNSIGNED_INT : this._gl.UNSIGNED_SHORT,
          Oz = this._uintIndicesCurrentlySet ? 4 : 2;
        Fz ? this._gl.drawElementsInstanced(Wz, sz, Xz, tz * Oz, Fz) : this._gl.drawElements(Wz, sz, Xz, tz * Oz)
      }
      drawArraysType(zz, tz, sz, Fz) {
        this.applyStates(), this._reportDrawCall();
        const Wz = this._drawMode(zz);
        Fz ? this._gl.drawArraysInstanced(Wz, tz, sz, Fz) : this._gl.drawArrays(Wz, tz, sz)
      }
      _drawMode(zz) {
        switch (zz) {
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
      _releaseEffect(zz) {
        this._compiledEffects[zz._key] && delete this._compiledEffects[zz._key];
        const tz = zz.getPipelineContext();
        tz && this._deletePipelineContext(tz)
      }
      _deletePipelineContext(zz) {
        const tz = zz;
        tz && tz.program && (tz.program.__SPECTOR_rebuildProgram = null, (0, Hz.l)(tz), this._gl && (this._currentProgram === tz.program && this._setProgram(null), this._gl.deleteProgram(tz.program)))
      }
      _getGlobalDefines(zz) {
        return (0, gz.f)(zz, this.isNDCHalfZRange, this.ysz, this.useExactSrgbConversions)
      }
      createEffect(zz, tz, sz, Xz, Oz, oz, vz, Uz, Kz) {
        let uz = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          Nz = arguments.length > 10 ? arguments[10] : void 0;
        const bz = "string" === typeof zz ? zz : zz.vertexToken || zz.vertexSource || zz.vertexElement || zz.vertex,
          wz = "string" === typeof zz ? zz : zz.fragmentToken || zz.fragmentSource || zz.fragmentElement || zz.fragment,
          Dz = this._getGlobalDefines(),
          gz = void 0 !== tz.attributes;
        let Hz = Oz ?? tz.defines ?? "";
        Dz && (Hz += Dz);
        const Bz = bz + "+" + wz + "@" + Hz;
        if (this._compiledEffects[Bz]) {
          const zz = this._compiledEffects[Bz];
          return vz && zz.isReady() && vz(zz), zz._refCount++, zz
        }
        this._gl && (0, Wz.F)(this._gl);
        const Pz = new Fz.e(zz, tz, gz ? this : sz, Xz, this, Oz, oz, vz, Uz, Kz, Bz, tz.shaderLanguage ?? uz, tz.extraInitializationsAsync ?? Nz);
        return this._compiledEffects[Bz] = Pz, Pz
      }
      _getShaderSource(zz) {
        return this._gl.getShaderSource(zz)
      }
      createRawShaderProgram(zz, tz, sz, Fz) {
        let Xz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const Oz = (0, Wz.F)(this._gl);
        return Oz._contextWasLost = this._contextWasLost, Oz.validateShaderPrograms = this.validateShaderPrograms, (0, Wz.x)(zz, tz, sz, Fz || this._gl, Xz)
      }
      createShaderProgram(zz, tz, sz, Fz, Xz) {
        let Oz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        const oz = (0, Wz.F)(this._gl);
        return oz._contextWasLost = this._contextWasLost, oz.validateShaderPrograms = this.validateShaderPrograms, (0, Wz.z)(zz, tz, sz, Fz, Xz || this._gl, Oz)
      }
      inlineShaderCode(zz) {
        return zz
      }
      createPipelineContext(zz) {
        if (this._gl) {
          (0, Wz.F)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
        }
        const tz = (0, Wz.t)(this._gl, zz);
        return tz.engine = this, tz
      }
      createMaterialContext() {}
      createDrawContext() {}
      _finalizePipelineContext(zz) {
        return (0, Wz.j)(zz, this._gl, this.validateShaderPrograms)
      }
      _preparePipelineContextAsync(zz, tz, sz, Fz, Xz, Oz, oz, vz, Uz, Kz, uz) {
        const Nz = (0, Wz.F)(this._gl);
        return Nz._contextWasLost = this._contextWasLost, Nz.validateShaderPrograms = this.validateShaderPrograms, Nz._createShaderProgramInjection = this._createShaderProgram.bind(this), Nz.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), Nz.createShaderProgramInjection = this.createShaderProgram.bind(this), Nz.loadFileInjection = this._loadFile.bind(this), (0, Wz.n)(zz, tz, sz, Fz, Xz, Oz, oz, vz, Uz, Kz, uz)
      }
      _createShaderProgram(zz, tz, sz, Fz) {
        let Xz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        return (0, Wz.d)(zz, tz, sz, Fz, Xz)
      }
      _isRenderingStateCompiled(zz) {
        return !this._isDisposed && (0, Wz.l)(zz, this._gl, this.validateShaderPrograms)
      }
      _executeWhenRenderingStateIsCompiled(zz, tz) {
        (0, Wz.g)(zz, tz)
      }
      getUniforms(zz, tz) {
        const sz = new Array,
          Fz = zz;
        for (let Wz = 0; Wz < tz.length; Wz++) sz.push(this._gl.getUniformLocation(Fz.program, tz[Wz]));
        return sz
      }
      getAttributes(zz, tz) {
        const sz = [],
          Fz = zz;
        for (let Xz = 0; Xz < tz.length; Xz++) try {
          sz.push(this._gl.getAttribLocation(Fz.program, tz[Xz]))
        } catch (Wz) {
          sz.push(-1)
        }
        return sz
      }
      enableEffect(zz) {
        (zz = null !== zz && (0, Oz.d)(zz) ? zz.effect : zz) && zz !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(zz), this._currentEffect = zz, zz.onBind && zz.onBind(zz), zz._onBindObservable && zz._onBindObservable.notifyObservers(zz))
      }
      setInt(zz, tz) {
        return !!zz && (this._gl.uniform1i(zz, tz), !0)
      }
      setInt2(zz, tz, sz) {
        return !!zz && (this._gl.uniform2i(zz, tz, sz), !0)
      }
      setInt3(zz, tz, sz, Fz) {
        return !!zz && (this._gl.uniform3i(zz, tz, sz, Fz), !0)
      }
      setInt4(zz, tz, sz, Fz, Wz) {
        return !!zz && (this._gl.uniform4i(zz, tz, sz, Fz, Wz), !0)
      }
      setIntArray(zz, tz) {
        return !!zz && (this._gl.uniform1iv(zz, tz), !0)
      }
      setIntArray2(zz, tz) {
        return !(!zz || tz.length % 2 !== 0) && (this._gl.uniform2iv(zz, tz), !0)
      }
      setIntArray3(zz, tz) {
        return !(!zz || tz.length % 3 !== 0) && (this._gl.uniform3iv(zz, tz), !0)
      }
      setIntArray4(zz, tz) {
        return !(!zz || tz.length % 4 !== 0) && (this._gl.uniform4iv(zz, tz), !0)
      }
      setUInt(zz, tz) {
        return !!zz && (this._gl.uniform1ui(zz, tz), !0)
      }
      setUInt2(zz, tz, sz) {
        return !!zz && (this._gl.uniform2ui(zz, tz, sz), !0)
      }
      setUInt3(zz, tz, sz, Fz) {
        return !!zz && (this._gl.uniform3ui(zz, tz, sz, Fz), !0)
      }
      setUInt4(zz, tz, sz, Fz, Wz) {
        return !!zz && (this._gl.uniform4ui(zz, tz, sz, Fz, Wz), !0)
      }
      setUIntArray(zz, tz) {
        return !!zz && (this._gl.uniform1uiv(zz, tz), !0)
      }
      setUIntArray2(zz, tz) {
        return !(!zz || tz.length % 2 !== 0) && (this._gl.uniform2uiv(zz, tz), !0)
      }
      setUIntArray3(zz, tz) {
        return !(!zz || tz.length % 3 !== 0) && (this._gl.uniform3uiv(zz, tz), !0)
      }
      setUIntArray4(zz, tz) {
        return !(!zz || tz.length % 4 !== 0) && (this._gl.uniform4uiv(zz, tz), !0)
      }
      setArray(zz, tz) {
        return !!zz && (!(tz.length < 1) && (this._gl.uniform1fv(zz, tz), !0))
      }
      setArray2(zz, tz) {
        return !(!zz || tz.length % 2 !== 0) && (this._gl.uniform2fv(zz, tz), !0)
      }
      setArray3(zz, tz) {
        return !(!zz || tz.length % 3 !== 0) && (this._gl.uniform3fv(zz, tz), !0)
      }
      setArray4(zz, tz) {
        return !(!zz || tz.length % 4 !== 0) && (this._gl.uniform4fv(zz, tz), !0)
      }
      setMatrices(zz, tz) {
        return !!zz && (this._gl.uniformMatrix4fv(zz, !1, tz), !0)
      }
      setMatrix3x3(zz, tz) {
        return !!zz && (this._gl.uniformMatrix3fv(zz, !1, tz), !0)
      }
      setMatrix2x2(zz, tz) {
        return !!zz && (this._gl.uniformMatrix2fv(zz, !1, tz), !0)
      }
      setFloat(zz, tz) {
        return !!zz && (this._gl.uniform1f(zz, tz), !0)
      }
      setFloat2(zz, tz, sz) {
        return !!zz && (this._gl.uniform2f(zz, tz, sz), !0)
      }
      setFloat3(zz, tz, sz, Fz) {
        return !!zz && (this._gl.uniform3f(zz, tz, sz, Fz), !0)
      }
      setFloat4(zz, tz, sz, Fz, Wz) {
        return !!zz && (this._gl.uniform4f(zz, tz, sz, Fz, Wz), !0)
      }
      _applyColorWriteState() {
        if (this._colorWriteChanged) {
          this._colorWriteChanged = !1;
          const zz = this._colorWrite;
          this._gl.colorMask(zz, zz, zz, zz)
        }
      }
      applyStates() {
        this._depthCullingState.apply(this._gl), this._stencilStateComposer.apply(this._gl), this._alphaState.apply(this._gl, this._currentRenderTarget && this._currentRenderTarget.textures ? this._currentRenderTarget.textures.length : 1, this._integerMRTAttachmentsMask), this._applyColorWriteState()
      }
      wipeCaches(zz) {
        this.preventCacheWipeBetweenFrames && !zz || (this._currentEffect = null, this._viewportCached.x = 0, this._viewportCached.y = 0, this._viewportCached.z = 0, this._viewportCached.w = 0, this._unbindVertexArrayObject(), zz && (this._currentProgram = null, this.resetTextureCache(), this._stencilStateComposer.reset(), this._depthCullingState.reset(), this._depthCullingState.depthFunc = this._gl.LEQUAL, this._alphaState.reset(), this._resetAlphaMode(), this._colorWrite = !0, this._colorWriteChanged = !0, this._unpackFlipYCached = null, this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), this._gl.pixelStorei(this._gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), this._mustWipeVertexAttributes = !0, this.unbindAllAttributes()), this._resetVertexBufferBinding(), this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null, this.bindIndexBuffer(null))
      }
      _getSamplingParameters(zz, tz) {
        const sz = this._gl;
        let Fz = sz.NEAREST,
          Wz = sz.NEAREST,
          Xz = !1;
        switch (zz) {
          case 11:
            Fz = sz.LINEAR, Wz = tz ? sz.LINEAR_MIPMAP_NEAREST : sz.LINEAR;
            break;
          case 3:
            Fz = sz.LINEAR, Xz = !0, Wz = tz ? sz.LINEAR_MIPMAP_LINEAR : sz.LINEAR;
            break;
          case 8:
            Xz = !0, Fz = sz.NEAREST, Wz = tz ? sz.NEAREST_MIPMAP_LINEAR : sz.NEAREST;
            break;
          case 4:
            Fz = sz.NEAREST, Wz = tz ? sz.NEAREST_MIPMAP_NEAREST : sz.NEAREST;
            break;
          case 5:
            Fz = sz.NEAREST, Wz = tz ? sz.LINEAR_MIPMAP_NEAREST : sz.LINEAR;
            break;
          case 6:
            Xz = !0, Fz = sz.NEAREST, Wz = tz ? sz.LINEAR_MIPMAP_LINEAR : sz.LINEAR;
            break;
          case 7:
            Fz = sz.NEAREST, Wz = sz.LINEAR;
            break;
          case 1:
            Fz = sz.NEAREST, Wz = sz.NEAREST;
            break;
          case 9:
            Fz = sz.LINEAR, Wz = tz ? sz.NEAREST_MIPMAP_NEAREST : sz.NEAREST;
            break;
          case 10:
            Xz = !0, Fz = sz.LINEAR, Wz = tz ? sz.NEAREST_MIPMAP_LINEAR : sz.NEAREST;
            break;
          case 2:
            Fz = sz.LINEAR, Wz = sz.LINEAR;
            break;
          case 12:
            Fz = sz.LINEAR, Wz = sz.NEAREST
        }
        return {
          min: Wz,
          mag: Fz,
          hasMipMaps: Xz
        }
      }
      _createTexture() {
        const zz = this._gl.createTexture();
        if (!zz) throw new Error("Unable to create texture");
        return zz
      }
      _createHardwareTexture() {
        return new wz.b(this._createTexture(), this._gl)
      }
      _createInternalTexture(zz, tz) {
        let sz, Fz, Wz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Xz = !1,
          Oz = 0,
          vz = 3,
          Uz = 5,
          Kz = !1,
          uz = 1,
          Nz = !1,
          bz = 0,
          wz = !1;
        void 0 !== tz && "object" === typeof tz ? (sz = !!tz.generateMipMaps, Xz = !!tz.createMipMaps, Oz = void 0 === tz.type ? 0 : tz.type, vz = void 0 === tz.samplingMode ? 3 : tz.samplingMode, Uz = void 0 === tz.format ? 5 : tz.format, Kz = void 0 !== tz.useSRGBBuffer && tz.useSRGBBuffer, uz = tz.samples ?? 1, Fz = tz.label, Nz = !!tz.createMSAATexture, bz = tz.comparisonFunction || 0, wz = !!tz.isCube) : sz = !!tz, Kz && (Kz = this._caps.supportSRGBBuffers && (this.jD > 1 || this.isWebGPU)), (1 !== Oz || this._caps.textureFloatLinearFiltering) && (2 !== Oz || this._caps.textureHalfFloatLinearFiltering) || (vz = 1), 1 !== Oz || this._caps.textureFloat || (Oz = 0, oz.e.Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE"));
        const gz = (0, Bz.e)(Uz),
          Hz = (0, Bz.c)(Uz),
          Pz = this._gl,
          rz = new Dz.d(this, Wz),
          Yz = zz.width || zz,
          xz = zz.height || zz,
          mz = zz.depth || 0,
          Jz = zz.layers || 0,
          Iz = this._getSamplingParameters(vz, (sz || Xz) && !gz),
          Cz = 0 !== Jz ? Pz.TEXTURE_2D_ARRAY : 0 !== mz ? Pz.TEXTURE_3D : wz ? Pz.TEXTURE_CUBE_MAP : Pz.TEXTURE_2D,
          ez = gz ? this._getInternalFormatFromDepthTextureFormat(Uz, !0, Hz) : this._getRGBABufferInternalSizedFormat(Oz, Uz, Kz),
          Zz = gz ? Hz ? Pz.DEPTH_STENCIL : Pz.DEPTH_COMPONENT : this._getInternalFormat(Uz),
          Gz = gz ? this._getWebGLTextureTypeFromDepthTextureFormat(Uz) : this._getWebGLTextureType(Oz);
        if (this._bindTextureDirectly(Cz, rz), 0 !== Jz) rz.is2DArray = !0, Pz.texImage3D(Cz, 0, ez, Yz, xz, Jz, 0, Zz, Gz, null);
        else if (0 !== mz) rz.is3D = !0, Pz.texImage3D(Cz, 0, ez, Yz, xz, mz, 0, Zz, Gz, null);
        else if (wz) {
          rz.isCube = !0;
          for (let zz = 0; zz < 6; zz++) Pz.texImage2D(Pz.TEXTURE_CUBE_MAP_POSITIVE_X + zz, 0, ez, Yz, xz, 0, Zz, Gz, null)
        } else Pz.texImage2D(Cz, 0, ez, Yz, xz, 0, Zz, Gz, null);
        if (Pz.texParameteri(Cz, Pz.TEXTURE_MAG_FILTER, Iz.mag), Pz.texParameteri(Cz, Pz.TEXTURE_MIN_FILTER, Iz.min), Pz.texParameteri(Cz, Pz.TEXTURE_WRAP_S, Pz.CLAMP_TO_EDGE), Pz.texParameteri(Cz, Pz.TEXTURE_WRAP_T, Pz.CLAMP_TO_EDGE), gz && this.jD > 1 && (0 === bz ? (Pz.texParameteri(Cz, Pz.TEXTURE_COMPARE_FUNC, 515), Pz.texParameteri(Cz, Pz.TEXTURE_COMPARE_MODE, Pz.NONE)) : (Pz.texParameteri(Cz, Pz.TEXTURE_COMPARE_FUNC, bz), Pz.texParameteri(Cz, Pz.TEXTURE_COMPARE_MODE, Pz.COMPARE_REF_TO_TEXTURE))), (sz || Xz) && this._gl.generateMipmap(Cz), this._bindTextureDirectly(Cz, null), rz._useSRGBBuffer = Kz, rz.baseWidth = Yz, rz.baseHeight = xz, rz.width = Yz, rz.height = xz, rz.depth = Jz || mz, rz.isReady = !0, rz.samples = uz, rz.generateMipMaps = sz, rz.samplingMode = vz, rz.type = Oz, rz.format = Uz, rz.label = Fz, rz.comparisonFunction = bz, this._internalTexturesCache.push(rz), Nz) {
          let zz;
          if (zz = (0, Bz.e)(rz.format) ? this._setupFramebufferDepthAttachments((0, Bz.c)(rz.format), 19 !== rz.format, rz.width, rz.height, uz, rz.format, !0) : this._createRenderBuffer(rz.width, rz.height, uz, -1, this._getRGBABufferInternalSizedFormat(rz.type, rz.format, rz._useSRGBBuffer), -1), !zz) throw new Error("Unable to create render buffer");
          rz._autoMSAAManagement = !0;
          let tz = rz._hardwareTexture;
          tz || (tz = rz._hardwareTexture = this._createHardwareTexture()), tz.addMSAARenderBuffer(zz)
        }
        return rz
      }
      _getUseSRGBBuffer(zz, tz) {
        return zz && this._caps.supportSRGBBuffers && (this.jD > 1 || tz)
      }
      createTexture(zz, tz, sz, Fz) {
        var Wz = this;
        let Xz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          Oz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          oz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          vz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Uz = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          Kz = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          uz = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          Nz = arguments.length > 11 ? arguments[11] : void 0,
          bz = arguments.length > 12 ? arguments[12] : void 0,
          wz = arguments.length > 13 ? arguments[13] : void 0,
          gz = arguments.length > 14 ? arguments[14] : void 0;
        return this._createTextureBase(zz, tz, sz, Fz, Xz, Oz, oz, (function() {
          for (var zz = arguments.length, tz = new Array(zz), sz = 0; sz < zz; sz++) tz[sz] = arguments[sz];
          return Wz._prepareWebGLTexture(...tz, Kz)
        }), ((zz, tz, sz, Wz, Xz, Oz) => {
          const oz = this._gl,
            vz = sz.width === zz && sz.height === tz;
          Xz._creationFlags = wz ?? 0;
          const Uz = this._getTexImageParametersForCreateTexture(Xz.format, Xz._useSRGBBuffer);
          if (vz) return oz.texImage2D(oz.TEXTURE_2D, 0, Uz.internalFormat, Uz.format, Uz.type, sz), !1;
          const Kz = this._caps.maxTextureSize;
          if (sz.width > Kz || sz.height > Kz || !this._supportsHardwareTextureRescaling) return this._prepareWorkingCanvas(), !(!this._workingCanvas || !this._workingContext) && (this._workingCanvas.width = zz, this._workingCanvas.height = tz, this._workingContext.drawImage(sz, 0, 0, sz.width, sz.height, 0, 0, zz, tz), oz.texImage2D(oz.TEXTURE_2D, 0, Uz.internalFormat, Uz.format, Uz.type, this._workingCanvas), Xz.width = zz, Xz.height = tz, !1);
          {
            const zz = new Dz.d(this, 2);
            this._bindTextureDirectly(oz.TEXTURE_2D, zz, !0), oz.texImage2D(oz.TEXTURE_2D, 0, Uz.internalFormat, Uz.format, Uz.type, sz), this._rescaleTexture(zz, Xz, Fz, Uz.format, (() => {
              this._releaseTexture(zz), this._bindTextureDirectly(oz.TEXTURE_2D, Xz, !0), Oz()
            }))
          }
          return !0
        }), vz, Uz, Kz, uz, Nz, bz, gz)
      }
      _getTexImageParametersForCreateTexture(zz, tz) {
        let sz, Fz;
        return 1 === this.jD ? (sz = this._getInternalFormat(zz, tz), Fz = sz) : (sz = this._getInternalFormat(zz, !1), Fz = this._getRGBABufferInternalSizedFormat(0, zz, tz)), {
          internalFormat: Fz,
          format: sz,
          type: this._gl.UNSIGNED_BYTE
        }
      }
      _rescaleTexture(zz, tz, sz, Fz, Wz) {}
      _unpackFlipY(zz) {
        this._unpackFlipYCached !== zz && (this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, zz ? 1 : 0), this.enableUnpackFlipYCached && (this._unpackFlipYCached = zz))
      }
      _getUnpackAlignement() {
        return this._gl.getParameter(this._gl.UNPACK_ALIGNMENT)
      }
      _getTextureTarget(zz) {
        return zz.isCube ? this._gl.TEXTURE_CUBE_MAP : zz.is3D ? this._gl.TEXTURE_3D : zz.is2DArray || zz.isMultiview ? this._gl.TEXTURE_2D_ARRAY : this._gl.TEXTURE_2D
      }
      updateTextureSamplingMode(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Fz = this._getTextureTarget(tz),
          Wz = this._getSamplingParameters(zz, tz.useMipMaps || sz);
        this._setTextureParameterInteger(Fz, this._gl.TEXTURE_MAG_FILTER, Wz.mag, tz), this._setTextureParameterInteger(Fz, this._gl.TEXTURE_MIN_FILTER, Wz.min), sz && Wz.hasMipMaps && (tz.generateMipMaps = !0, this._gl.generateMipmap(Fz)), this._bindTextureDirectly(Fz, null), tz.samplingMode = zz
      }
      updateTextureDimensions(zz, tz, sz) {}
      updateTextureWrappingMode(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Wz = this._getTextureTarget(zz);
        null !== tz && (this._setTextureParameterInteger(Wz, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(tz), zz), zz._cachedWrapU = tz), null !== sz && (this._setTextureParameterInteger(Wz, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(sz), zz), zz._cachedWrapV = sz), (zz.is2DArray || zz.is3D) && null !== Fz && (this._setTextureParameterInteger(Wz, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(Fz), zz), zz._cachedWrapR = Fz), this._bindTextureDirectly(Wz, null)
      }
      _uploadCompressedDataToTextureDirectly(zz, tz, sz, Fz, Wz) {
        let Xz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Oz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const oz = this._gl;
        let vz = oz.TEXTURE_2D;
        if (zz.isCube && (vz = oz.TEXTURE_CUBE_MAP_POSITIVE_X + Xz), zz._useSRGBBuffer) switch (tz) {
          case 37492:
          case 36196:
            this._caps.etc2 ? tz = oz.COMPRESSED_SRGB8_ETC2 : zz._useSRGBBuffer = !1;
            break;
          case 37496:
            this._caps.etc2 ? tz = oz.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : zz._useSRGBBuffer = !1;
            break;
          case 36492:
            tz = oz.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
            break;
          case 37808:
            tz = oz.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
            break;
          case 37809:
            tz = oz.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
            break;
          case 37810:
            tz = oz.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
            break;
          case 37811:
            tz = oz.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
            break;
          case 37812:
            tz = oz.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
            break;
          case 37813:
            tz = oz.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
            break;
          case 37814:
            tz = oz.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
            break;
          case 37815:
            tz = oz.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
            break;
          case 37816:
            tz = oz.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
            break;
          case 37817:
            tz = oz.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
            break;
          case 37818:
            tz = oz.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
            break;
          case 37819:
            tz = oz.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
            break;
          case 37820:
            tz = oz.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
            break;
          case 37821:
            tz = oz.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
            break;
          case 33776:
            this._caps.s3tc_srgb ? tz = oz.COMPRESSED_SRGB_S3TC_DXT1_EXT : zz._useSRGBBuffer = !1;
            break;
          case 33777:
            this._caps.s3tc_srgb ? tz = oz.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT : zz._useSRGBBuffer = !1;
            break;
          case 33779:
            this._caps.s3tc_srgb ? tz = oz.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT : zz._useSRGBBuffer = !1;
            break;
          default:
            zz._useSRGBBuffer = !1
        }
        if (zz.generateMipMaps) {
          const Xz = zz._hardwareTexture;
          Xz.memoryAllocated || (oz.texStorage2D(zz.isCube ? oz.TEXTURE_CUBE_MAP : oz.TEXTURE_2D, Math.floor(Math.log2(Math.max(sz, Fz))) + 1, tz, zz.width, zz.height), Xz.memoryAllocated = !0), this._gl.compressedTexSubImage2D(vz, Oz, 0, 0, sz, Fz, tz, Wz)
        } else this._gl.compressedTexImage2D(vz, Oz, tz, sz, Fz, 0, Wz)
      }
      _uploadDataToTextureDirectly(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Wz = arguments.length > 4 ? arguments[4] : void 0,
          Xz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const Oz = this._gl,
          oz = this._getWebGLTextureType(zz.type),
          vz = this._getInternalFormat(zz.format),
          Uz = void 0 === Wz ? this._getRGBABufferInternalSizedFormat(zz.type, zz.format, zz._useSRGBBuffer) : this._getInternalFormat(Wz, zz._useSRGBBuffer);
        this._unpackFlipY(zz.invertY);
        let Kz = Oz.TEXTURE_2D;
        zz.isCube && (Kz = Oz.TEXTURE_CUBE_MAP_POSITIVE_X + sz);
        const uz = Math.round(Math.log(zz.width) * Math.LOG2E),
          Nz = Math.round(Math.log(zz.height) * Math.LOG2E),
          bz = Xz ? zz.width : Math.pow(2, Math.max(uz - Fz, 0)),
          wz = Xz ? zz.height : Math.pow(2, Math.max(Nz - Fz, 0));
        Oz.texImage2D(Kz, Fz, Uz, bz, wz, 0, vz, oz, tz)
      }
      updateTextureData(zz, tz, sz, Fz, Wz, Xz) {
        let Oz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          oz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          vz = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const Uz = this._gl,
          Kz = this._getWebGLTextureType(zz.type),
          uz = this._getInternalFormat(zz.format);
        this._unpackFlipY(zz.invertY);
        let Nz = Uz.TEXTURE_2D,
          bz = Uz.TEXTURE_2D;
        zz.isCube && (bz = Uz.TEXTURE_CUBE_MAP_POSITIVE_X + Oz, Nz = Uz.TEXTURE_CUBE_MAP), this._bindTextureDirectly(Nz, zz, !0), Uz.texSubImage2D(bz, oz, sz, Fz, Wz, Xz, uz, Kz, tz), vz && this._gl.generateMipmap(bz), this._bindTextureDirectly(Nz, null)
      }
      _uploadArrayBufferViewToTexture(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Wz = this._gl,
          Xz = zz.isCube ? Wz.TEXTURE_CUBE_MAP : Wz.TEXTURE_2D;
        this._bindTextureDirectly(Xz, zz, !0), this._uploadDataToTextureDirectly(zz, tz, sz, Fz), this._bindTextureDirectly(Xz, null, !0)
      }
      _prepareWebGLTextureContinuation(zz, tz, sz, Fz, Wz) {
        const Xz = this._gl;
        if (!Xz) return;
        const Oz = this._getSamplingParameters(Wz, !sz);
        Xz.texParameteri(Xz.TEXTURE_2D, Xz.TEXTURE_MAG_FILTER, Oz.mag), Xz.texParameteri(Xz.TEXTURE_2D, Xz.TEXTURE_MIN_FILTER, Oz.min), sz || Fz || Xz.generateMipmap(Xz.TEXTURE_2D), this._bindTextureDirectly(Xz.TEXTURE_2D, null), tz && tz.removePendingData(zz), zz.onLoadedObservable.notifyObservers(zz), zz.onLoadedObservable.clear()
      }
      _prepareWebGLTexture(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz) {
        const Kz = this.getCaps().maxTextureSize,
          uz = Math.min(Kz, this.needPOTTextures ? (0, bz.e)(Fz.width, Kz) : Fz.width),
          Nz = Math.min(Kz, this.needPOTTextures ? (0, bz.e)(Fz.height, Kz) : Fz.height),
          wz = this._gl;
        wz && (zz._hardwareTexture ? (this._bindTextureDirectly(wz.TEXTURE_2D, zz, !0), this._unpackFlipY(void 0 === Wz || !!Wz), zz.baseWidth = Fz.width, zz.baseHeight = Fz.height, zz.width = uz, zz.height = Nz, zz.isReady = !0, zz.type = -1 !== zz.type ? zz.type : 0, zz.format = -1 !== zz.format ? zz.format : Uz ?? (".jpg" !== tz || zz._useSRGBBuffer ? 5 : 4), oz(uz, Nz, Fz, tz, zz, (() => {
          this._prepareWebGLTextureContinuation(zz, sz, Xz, Oz, vz)
        })) || this._prepareWebGLTextureContinuation(zz, sz, Xz, Oz, vz)) : sz && sz.removePendingData(zz))
      }
      _getInternalFormatFromDepthTextureFormat(zz, tz, sz) {
        const Fz = this._gl;
        if (!tz) return Fz.STENCIL_INDEX8;
        let Wz = sz ? Fz.DEPTH_STENCIL : Fz.DEPTH_COMPONENT;
        return this.jD > 1 ? 15 === zz ? Wz = Fz.DEPTH_COMPONENT16 : 16 === zz ? Wz = Fz.DEPTH_COMPONENT24 : 17 === zz || 13 === zz ? Wz = sz ? Fz.DEPTH24_STENCIL8 : Fz.DEPTH_COMPONENT24 : 14 === zz ? Wz = Fz.DEPTH_COMPONENT32F : 18 === zz && (Wz = sz ? Fz.DEPTH32F_STENCIL8 : Fz.DEPTH_COMPONENT32F) : Wz = Fz.DEPTH_COMPONENT16, Wz
      }
      _getWebGLTextureTypeFromDepthTextureFormat(zz) {
        const tz = this._gl;
        let sz = tz.UNSIGNED_INT;
        return 15 === zz ? sz = tz.UNSIGNED_SHORT : 17 === zz || 13 === zz ? sz = tz.UNSIGNED_INT_24_8 : 14 === zz ? sz = tz.FLOAT : 18 === zz ? sz = tz.FLOAT_32_UNSIGNED_INT_24_8_REV : 19 === zz && (sz = tz.UNSIGNED_BYTE), sz
      }
      _setupFramebufferDepthAttachments(zz, tz, sz, Fz) {
        let Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          Xz = arguments.length > 5 ? arguments[5] : void 0,
          Oz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const oz = this._gl;
        Xz = Xz ?? (zz ? 13 : 14);
        const vz = this._getInternalFormatFromDepthTextureFormat(Xz, tz, zz);
        return zz && tz ? this._createRenderBuffer(sz, Fz, Wz, oz.DEPTH_STENCIL, vz, Oz ? -1 : oz.DEPTH_STENCIL_ATTACHMENT) : tz ? this._createRenderBuffer(sz, Fz, Wz, vz, vz, Oz ? -1 : oz.DEPTH_ATTACHMENT) : zz ? this._createRenderBuffer(sz, Fz, Wz, vz, vz, Oz ? -1 : oz.STENCIL_ATTACHMENT) : null
      }
      _createRenderBuffer(zz, tz, sz, Fz, Wz, Xz) {
        let Oz = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
        const oz = this._gl.createRenderbuffer();
        return this._updateRenderBuffer(oz, zz, tz, sz, Fz, Wz, Xz, Oz)
      }
      _updateRenderBuffer(zz, tz, sz, Fz, Wz, Xz, Oz) {
        let oz = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const vz = this._gl;
        return vz.bindRenderbuffer(vz.RENDERBUFFER, zz), Fz > 1 && vz.renderbufferStorageMultisample ? vz.renderbufferStorageMultisample(vz.RENDERBUFFER, Fz, Xz, tz, sz) : vz.renderbufferStorage(vz.RENDERBUFFER, Wz, tz, sz), -1 !== Oz && vz.framebufferRenderbuffer(vz.FRAMEBUFFER, Oz, vz.RENDERBUFFER, zz), oz && vz.bindRenderbuffer(vz.RENDERBUFFER, null), zz
      }
      _releaseTexture(zz) {
        this._deleteTexture(zz._hardwareTexture), this.unbindAllTextures();
        const tz = this._internalTexturesCache.indexOf(zz); - 1 !== tz && this._internalTexturesCache.splice(tz, 1), zz._lodTextureHigh && zz._lodTextureHigh.dispose(), zz._lodTextureMid && zz._lodTextureMid.dispose(), zz._lodTextureLow && zz._lodTextureLow.dispose(), zz._irradianceTexture && zz._irradianceTexture.dispose()
      }
      _deleteTexture(zz) {
        zz?.release()
      }
      _setProgram(zz) {
        this._currentProgram !== zz && ((0, Wz.q)(zz, this._gl), this._currentProgram = zz)
      }
      bindSamplers(zz) {
        const tz = zz.getPipelineContext();
        this._setProgram(tz.program);
        const sz = zz.getSamplers();
        for (let Fz = 0; Fz < sz.length; Fz++) {
          const tz = zz.getUniform(sz[Fz]);
          tz && (this._boundUniforms[Fz] = tz)
        }
        this._currentEffect = null
      }
      _activateCurrentTexture() {
        this._currentTextureChannel !== this._activeChannel && (this._gl.activeTexture(this._gl.TEXTURE0 + this._activeChannel), this._currentTextureChannel = this._activeChannel)
      }
      _bindTextureDirectly(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Fz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Wz = !1;
        const Xz = tz && tz._associatedChannel > -1;
        sz && Xz && (this._activeChannel = tz._associatedChannel);
        if (this._boundTexturesCache[this._activeChannel] !== tz || Fz) {
          if (this._activateCurrentTexture(), tz && tz.isMultiview) throw oz.e.Error(["_bindTextureDirectly called with a multiview texture!", zz, tz]), "_bindTextureDirectly called with a multiview texture!";
          this._gl.bindTexture(zz, tz?._hardwareTexture?.underlyingResource ?? null), this._boundTexturesCache[this._activeChannel] = tz, tz && (tz._associatedChannel = this._activeChannel)
        } else sz && (Wz = !0, this._activateCurrentTexture());
        return Xz && !sz && this._bindSamplerUniformToChannel(tz._associatedChannel, this._activeChannel), Wz
      }
      _bindTexture(zz, tz, sz) {
        if (void 0 === zz) return;
        tz && (tz._associatedChannel = zz), this._activeChannel = zz;
        const Fz = tz ? this._getTextureTarget(tz) : this._gl.TEXTURE_2D;
        this._bindTextureDirectly(Fz, tz)
      }
      unbindAllTextures() {
        for (let zz = 0; zz < this._maxSimultaneousTextures; zz++) this._activeChannel = zz, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.jD > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))
      }
      setTexture(zz, tz, sz, Fz) {
        void 0 !== zz && (tz && (this._boundUniforms[zz] = tz), this._setTexture(zz, sz))
      }
      _bindSamplerUniformToChannel(zz, tz) {
        const sz = this._boundUniforms[zz];
        sz && sz._currentState !== tz && (this._gl.uniform1i(sz, tz), sz._currentState = tz)
      }
      _getTextureWrapMode(zz) {
        switch (zz) {
          case 1:
            return this._gl.REPEAT;
          case 0:
            return this._gl.CLAMP_TO_EDGE;
          case 2:
            return this._gl.MIRRORED_REPEAT
        }
        return this._gl.REPEAT
      }
      _setTexture(zz, tz) {
        let sz, Fz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Wz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!tz) return null != this._boundTexturesCache[zz] && (this._activeChannel = zz, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.jD > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))), !1;
        if (tz.video) {
          this._activeChannel = zz;
          const sz = tz.getInternalTexture();
          sz && (sz._associatedChannel = zz), tz.update()
        } else if (4 === tz.delayLoadState) return tz.delayLoad(), !1;
        sz = Wz ? tz.depthStencilTexture : tz.isReady() ? tz.getInternalTexture() : tz.isCube ? this.emptyCubeTexture : tz.is3D ? this.emptyTexture3D : tz.is2DArray ? this.emptyTexture2DArray : this.emptyTexture, !Fz && sz && (sz._associatedChannel = zz);
        let Xz = !0;
        this._boundTexturesCache[zz] === sz && (Fz || this._bindSamplerUniformToChannel(sz._associatedChannel, zz), Xz = !1), this._activeChannel = zz;
        const Oz = this._getTextureTarget(sz);
        if (Xz && this._bindTextureDirectly(Oz, sz, Fz), sz && !sz.isMultiview) {
          if (sz.isCube && sz._cachedCoordinatesMode !== tz.coordinatesMode) {
            sz._cachedCoordinatesMode = tz.coordinatesMode;
            const zz = 3 !== tz.coordinatesMode && 5 !== tz.coordinatesMode ? 1 : 0;
            tz.wrapU = zz, tz.wrapV = zz
          }
          sz._cachedWrapU !== tz.wrapU && (sz._cachedWrapU = tz.wrapU, this._setTextureParameterInteger(Oz, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(tz.wrapU), sz)), sz._cachedWrapV !== tz.wrapV && (sz._cachedWrapV = tz.wrapV, this._setTextureParameterInteger(Oz, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(tz.wrapV), sz)), sz.is3D && sz._cachedWrapR !== tz.wrapR && (sz._cachedWrapR = tz.wrapR, this._setTextureParameterInteger(Oz, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(tz.wrapR), sz)), this._setAnisotropicLevel(Oz, sz, tz.anisotropicFilteringLevel)
        }
        return !0
      }
      setTextureArray(zz, tz, sz, Fz) {
        if (void 0 !== zz && tz) {
          this._textureUnits && this._textureUnits.length === sz.length || (this._textureUnits = new Int32Array(sz.length));
          for (let tz = 0; tz < sz.length; tz++) {
            const Fz = sz[tz].getInternalTexture();
            Fz ? (this._textureUnits[tz] = zz + tz, Fz._associatedChannel = zz + tz) : this._textureUnits[tz] = -1
          }
          this._gl.uniform1iv(tz, this._textureUnits);
          for (let zz = 0; zz < sz.length; zz++) this._setTexture(this._textureUnits[zz], sz[zz], !0)
        }
      }
      _setAnisotropicLevel(zz, tz, sz) {
        const Fz = this._caps.textureAnisotropicFilterExtension;
        11 !== tz.samplingMode && 3 !== tz.samplingMode && 2 !== tz.samplingMode && (sz = 1), Fz && tz._cachedAnisotropicFilteringLevel !== sz && (this._setTextureParameterFloat(zz, Fz.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(sz, this._caps.maxAnisotropy), tz), tz._cachedAnisotropicFilteringLevel = sz)
      }
      _setTextureParameterFloat(zz, tz, sz, Fz) {
        this._bindTextureDirectly(zz, Fz, !0, !0), this._gl.texParameterf(zz, tz, sz)
      }
      _setTextureParameterInteger(zz, tz, sz, Fz) {
        Fz && this._bindTextureDirectly(zz, Fz, !0, !0), this._gl.texParameteri(zz, tz, sz)
      }
      unbindAllAttributes() {
        if (this._mustWipeVertexAttributes) {
          this._mustWipeVertexAttributes = !1;
          for (let zz = 0; zz < this._caps.maxVertexAttribs; zz++) this.disableAttributeByIndex(zz)
        } else
          for (let zz = 0, tz = this._vertexAttribArraysEnabled.length; zz < tz; zz++) zz >= this._caps.maxVertexAttribs || !this._vertexAttribArraysEnabled[zz] || this.disableAttributeByIndex(zz)
      }
      releaseEffects() {
        this._compiledEffects = {}, this.onReleaseEffectsObservable.notifyObservers(this)
      }
      dispose() {
        (0, vz.j)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dummyFramebuffer && this._gl.deleteFramebuffer(this._dummyFramebuffer), this.unbindAllAttributes(), this._boundUniforms = {}, this._workingCanvas = null, this._workingContext = null, this._currentBufferPointers.length = 0, this._currentProgram = null, this._creationOptions.loseContextOnDispose && this._gl.getExtension("WEBGL_lose_context")?.loseContext(), (0, Wz.B)(this._gl)
      }
      attachContextLostEvent(zz) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextlost", zz, !1)
      }
      attachContextRestoredEvent(zz) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextrestored", zz, !1)
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
      _canRenderToFramebuffer(zz) {
        const tz = this._gl;
        for (; tz.getError() !== tz.NO_ERROR;);
        let sz = !0;
        const Fz = tz.createTexture();
        tz.bindTexture(tz.TEXTURE_2D, Fz), tz.texImage2D(tz.TEXTURE_2D, 0, this._getRGBABufferInternalSizedFormat(zz), 1, 1, 0, tz.RGBA, this._getWebGLTextureType(zz), null), tz.texParameteri(tz.TEXTURE_2D, tz.TEXTURE_MIN_FILTER, tz.NEAREST), tz.texParameteri(tz.TEXTURE_2D, tz.TEXTURE_MAG_FILTER, tz.NEAREST);
        const Wz = tz.createFramebuffer();
        tz.bindFramebuffer(tz.FRAMEBUFFER, Wz), tz.framebufferTexture2D(tz.FRAMEBUFFER, tz.COLOR_ATTACHMENT0, tz.TEXTURE_2D, Fz, 0);
        const Xz = tz.checkFramebufferStatus(tz.FRAMEBUFFER);
        if (sz = sz && Xz === tz.FRAMEBUFFER_COMPLETE, sz = sz && tz.getError() === tz.NO_ERROR, sz && (tz.clear(tz.COLOR_BUFFER_BIT), sz = sz && tz.getError() === tz.NO_ERROR), sz) {
          tz.bindFramebuffer(tz.FRAMEBUFFER, null);
          const zz = tz.RGBA,
            Fz = tz.UNSIGNED_BYTE,
            Wz = new Uint8Array(4);
          tz.readPixels(0, 0, 1, 1, zz, Fz, Wz), sz = sz && tz.getError() === tz.NO_ERROR
        }
        for (tz.deleteTexture(Fz), tz.deleteFramebuffer(Wz), tz.bindFramebuffer(tz.FRAMEBUFFER, null); !sz && tz.getError() !== tz.NO_ERROR;);
        return sz
      }
      _getWebGLTextureType(zz) {
        if (1 === this._webGLVersion) {
          switch (zz) {
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
        switch (zz) {
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
      _getInternalFormat(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sz = tz ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA;
        switch (zz) {
          case 0:
            sz = this._gl.ALPHA;
            break;
          case 1:
            sz = this._gl.LUMINANCE;
            break;
          case 2:
            sz = this._gl.LUMINANCE_ALPHA;
            break;
          case 6:
          case 33322:
          case 36760:
            sz = this._gl.RED;
            break;
          case 7:
          case 33324:
          case 36761:
            sz = this._gl.RG;
            break;
          case 4:
          case 32852:
          case 36762:
            sz = tz ? this._glSRGBExtensionValues.SRGB : this._gl.RGB;
            break;
          case 5:
          case 32859:
          case 36763:
            sz = tz ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA
        }
        if (this._webGLVersion > 1) switch (zz) {
          case 8:
            sz = this._gl.RED_INTEGER;
            break;
          case 9:
            sz = this._gl.RG_INTEGER;
            break;
          case 10:
            sz = this._gl.RGB_INTEGER;
            break;
          case 11:
            sz = this._gl.RGBA_INTEGER
        }
        return sz
      }
      _getRGBABufferInternalSizedFormat(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (1 === this._webGLVersion) {
          if (void 0 !== tz) switch (tz) {
            case 0:
              return this._gl.ALPHA;
            case 1:
              return this._gl.LUMINANCE;
            case 2:
              return this._gl.LUMINANCE_ALPHA;
            case 4:
              return sz ? this._glSRGBExtensionValues.SRGB : this._gl.RGB
          }
          return this._gl.RGBA
        }
        switch (zz) {
          case 3:
            switch (tz) {
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
            switch (tz) {
              case 6:
                return this._gl.R8;
              case 7:
                return this._gl.RG8;
              case 4:
                return sz ? this._glSRGBExtensionValues.SRGB8 : this._gl.RGB8;
              case 5:
                return sz ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8;
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
            switch (tz) {
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
            switch (tz) {
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
            switch (tz) {
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
            switch (tz) {
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
            switch (tz) {
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
            switch (tz) {
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
            switch (tz) {
              case 5:
              default:
                return this._gl.RGB10_A2;
              case 11:
                return this._gl.RGB10_A2UI
            }
        }
        return sz ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8
      }
      readPixels(zz, tz, sz, Fz) {
        let Wz = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Xz = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Oz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const vz = Wz ? 4 : 3,
          Uz = Wz ? this._gl.RGBA : this._gl.RGB,
          Kz = sz * Fz * vz;
        if (Oz) {
          if (Oz.length < Kz) return oz.e.Error(`Data buffer is too small to store the read pixels (${Oz.length} should be more than ${Kz})`), Promise.resolve(Oz)
        } else Oz = new Uint8Array(Kz);
        return Xz && this.flushFramebuffer(), this._gl.readPixels(zz, tz, sz, Fz, Uz, this._gl.UNSIGNED_BYTE, Oz), Promise.resolve(Oz)
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
          const zz = Xz.b._CreateCanvas(1, 1),
            tz = zz.getContext("webgl") || zz.getContext("experimental-webgl");
          this._IsSupported = null != tz && !!globalThis.WebGLRenderingContext
        } catch (zz) {
          this._IsSupported = !1
        }
        return this._IsSupported
      }
      static get HasMajorPerformanceCaveat() {
        if (null === this._HasMajorPerformanceCaveat) try {
          const zz = Xz.b._CreateCanvas(1, 1),
            tz = zz.getContext("webgl", {
              failIfMajorPerformanceCaveat: !0
            }) || zz.getContext("experimental-webgl", {
              failIfMajorPerformanceCaveat: !0
            });
          this._HasMajorPerformanceCaveat = !tz
        } catch (zz) {
          this._HasMajorPerformanceCaveat = !1
        }
        return this._HasMajorPerformanceCaveat
      }
    }
    Yz._TempClearColorUint32 = new Uint32Array(4), Yz._TempClearColorInt32 = new Int32Array(4), Yz._TempClearColorFloat32 = new Float32Array(4), Yz.ExceptionList = [{
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
    }], Yz._ConcatenateShader = gz.c, Yz._IsSupported = null, Yz._HasMajorPerformanceCaveat = null
  },
  39337: (zz, tz, sz) => {
    var Fz;
    sz.d(tz, {
        e: () => Wz
      }),
      function(zz) {
        zz[zz.PointerMove = 0] = "PointerMove", zz[zz.PointerDown = 1] = "PointerDown", zz[zz.PointerUp = 2] = "PointerUp"
      }(Fz || (Fz = {}));
    class Wz {}
    Wz.DOM_DELTA_PIXEL = 0, Wz.DOM_DELTA_LINE = 1, Wz.DOM_DELTA_PAGE = 2
  },
  39331: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Fz,
      f: () => Xz,
      j: () => Wz
    });
    class Fz {}
    Fz.KEYDOWN = 1, Fz.KEYUP = 2;
    class Wz {
      constructor(zz, tz) {
        this.type = zz, this.event = tz
      }
    }
    class Xz extends Wz {
      get skipOnPointerObservable() {
        return this.skipOnKeyboardObservable
      }
      set skipOnPointerObservable(zz) {
        this.skipOnKeyboardObservable = zz
      }
      constructor(zz, tz) {
        super(zz, tz), this.type = zz, this.event = tz, this.skipOnKeyboardObservable = !1
      }
    }
  },
  39328: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Wz,
      e: () => Oz,
      g: () => oz
    });
    var Fz = sz(36475);
    class Wz {}
    Wz.POINTERDOWN = 1, Wz.POINTERUP = 2, Wz.POINTERMOVE = 4, Wz.POINTERWHEEL = 8, Wz.POINTERPICK = 16, Wz.POINTERTAP = 32, Wz.POINTERDOUBLETAP = 64;
    class Xz {
      constructor(zz, tz) {
        this.type = zz, this.event = tz
      }
    }
    class Oz extends Xz {
      constructor(zz, tz, sz, Wz) {
        super(zz, tz), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new Fz.n(sz, Wz)
      }
    }
    class oz extends Xz {
      get pickInfo() {
        return this._pickInfo || this._generatePickInfo(), this._pickInfo
      }
      constructor(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(zz, tz), this._pickInfo = sz, this._inputManager = Fz
      }
      _generatePickInfo() {
        this._inputManager && (this._pickInfo = this._inputManager._pickMove(this.event), this._inputManager._setRayOnPointerInfo(this._pickInfo, this.event), this._inputManager = null)
      }
    }
  },
  39350: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Fz
    });
    class Fz {
      static CompareLightsPriority(zz, tz) {
        return zz.shadowEnabled !== tz.shadowEnabled ? (tz.shadowEnabled ? 1 : 0) - (zz.shadowEnabled ? 1 : 0) : tz.renderPriority - zz.renderPriority
      }
    }
    Fz.FALLOFF_DEFAULT = 0, Fz.FALLOFF_PHYSICAL = 1, Fz.FALLOFF_GLTF = 2, Fz.FALLOFF_STANDARD = 3, Fz.LIGHTMAP_DEFAULT = 0, Fz.LIGHTMAP_SPECULAR = 1, Fz.LIGHTMAP_SHADOWSONLY = 2, Fz.INTENSITYMODE_AUTOMATIC = 0, Fz.INTENSITYMODE_LUMINOUSPOWER = 1, Fz.INTENSITYMODE_LUMINOUSINTENSITY = 2, Fz.INTENSITYMODE_ILLUMINANCE = 3, Fz.INTENSITYMODE_LUMINANCE = 4, Fz.LIGHTTYPEID_POINTLIGHT = 0, Fz.LIGHTTYPEID_DIRECTIONALLIGHT = 1, Fz.LIGHTTYPEID_SPOTLIGHT = 2, Fz.LIGHTTYPEID_HEMISPHERICLIGHT = 3, Fz.LIGHTTYPEID_RECT_AREALIGHT = 4, Fz.LIGHTTYPEID_CLUSTERED_CONTAINER = 5
  },
  39021: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Oz
    });
    var Fz, Wz = sz(36505),
      Xz = sz(39026);
    ! function(zz) {
      zz[zz.Unknown = 0] = "Unknown", zz[zz.Url = 1] = "Url", zz[zz.Temp = 2] = "Temp", zz[zz.Raw = 3] = "Raw", zz[zz.Dynamic = 4] = "Dynamic", zz[zz.RenderTarget = 5] = "RenderTarget", zz[zz.MultiRenderTarget = 6] = "MultiRenderTarget", zz[zz.Cube = 7] = "Cube", zz[zz.CubeRaw = 8] = "CubeRaw", zz[zz.CubePrefiltered = 9] = "CubePrefiltered", zz[zz.Raw3D = 10] = "Raw3D", zz[zz.Raw2DArray = 11] = "Raw2DArray", zz[zz.DepthStencil = 12] = "DepthStencil", zz[zz.CubeRawRGBD = 13] = "CubeRawRGBD", zz[zz.Depth = 14] = "Depth", zz[zz.External = 15] = "External"
    }(Fz || (Fz = {}));
    class Oz extends Xz.d {
      get useMipMaps() {
        return null === this._useMipMaps ? this.generateMipMaps : this._useMipMaps
      }
      set useMipMaps(zz) {
        this._useMipMaps = zz
      }
      get uniqueId() {
        return this._uniqueId
      }
      _setUniqueId(zz) {
        this._uniqueId = zz
      }
      FD() {
        return this._engine
      }
      get source() {
        return this._source
      }
      constructor(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable = new Wz.c, this.onErrorObservable = new Wz.c, this.onRebuildCallback = null, this.width = 0, this.height = 0, this.depth = 0, this.baseWidth = 0, this.baseHeight = 0, this.baseDepth = 0, this.invertY = !1, this._invertVScale = !1, this._associatedChannel = -1, this._source = 0, this._buffer = null, this._bufferView = null, this._bufferViewArray = null, this._bufferViewArrayArray = null, this._size = 0, this._extension = "", this._files = null, this._workingCanvas = null, this._workingContext = null, this._cachedCoordinatesMode = null, this._isDisabled = !1, this._compression = null, this._sphericalPolynomial = null, this._sphericalPolynomialPromise = null, this._sphericalPolynomialComputed = !1, this._lodGenerationScale = 0, this._lodGenerationOffset = 0, this._useSRGBBuffer = !1, this._creationFlags = 0, this._lodTextureHigh = null, this._lodTextureMid = null, this._lodTextureLow = null, this._isRGBD = !1, this._linearSpecularLOD = !1, this._irradianceTexture = null, this._hardwareTexture = null, this._maxLodLevel = null, this._references = 1, this._gammaSpace = null, this._premulAlpha = !1, this._dynamicTextureSource = null, this._autoMSAAManagement = !1, this._engine = zz, this._source = tz, this._uniqueId = Oz._Counter++, sz || (this._hardwareTexture = zz._createHardwareTexture())
      }
      incrementReferences() {
        this._references++
      }
      updateSize(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._engine.updateTextureDimensions(this, zz, tz, sz), this.width = zz, this.height = tz, this.depth = sz, this.baseWidth = zz, this.baseHeight = tz, this.baseDepth = sz, this._size = zz * tz * sz
      }
      _rebuild() {
        if (this.isReady = !1, this._cachedCoordinatesMode = null, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this.onRebuildCallback) {
          const zz = this.onRebuildCallback(this),
            tz = tz => {
              tz._swapAndDie(this, !1), this.isReady = zz.isReady
            };
          return void(zz.isAsync ? zz.proxy.then(tz) : tz(zz.proxy))
        }
        let zz;
        switch (this.source) {
          case 2:
          case 12:
          case 14:
          case 15:
            break;
          case 1:
            return void(zz = this._engine.createTexture(this._originalUrl ?? this.url, !this.generateMipMaps, this.invertY, null, this.samplingMode, (zz => {
              zz._swapAndDie(this, !1), this.isReady = !0
            }), null, this._buffer, void 0, this.format, this._extension, void 0, void 0, void 0, this._useSRGBBuffer));
          case 3:
            if (zz = this._engine.createRawTexture(this._bufferView, this.baseWidth, this.baseHeight, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this._useSRGBBuffer, this.mipLevelCount), zz._swapAndDie(this, !1), this._bufferViewArray)
              for (let zz = 0; zz < this._bufferViewArray.length; zz++) {
                const tz = this._bufferViewArray[zz];
                tz && this._engine.updateRawTexture(this, tz, this.format, this.invertY, this._compression, this.type, this._useSRGBBuffer, zz)
              }
            this.isReady = !0;
            break;
          case 10:
            zz = this._engine.createRawTexture3D(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type), zz._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 11:
            if (zz = this._engine.createRawTexture2DArray(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this.mipLevelCount), zz._swapAndDie(this, !1), this._bufferViewArray)
              for (let zz = 0; zz < this._bufferViewArray.length; zz++) {
                const tz = this._bufferViewArray[zz];
                tz && this._engine.updateRawTexture2DArray(this, tz, this.format, this.invertY, this._compression, this.type, zz)
              }
            this.isReady = !0;
            break;
          case 4:
            zz = this._engine.createDynamicTexture(this.baseWidth, this.baseHeight, this.generateMipMaps, this.samplingMode), zz._swapAndDie(this, !1), this._dynamicTextureSource && this._engine.updateDynamicTexture(this, this._dynamicTextureSource, this.invertY, this._premulAlpha, this.format, !0);
            break;
          case 7:
            return void(zz = this._engine.createCubeTexture(this.url, null, this._files, !this.generateMipMaps, (() => {
              zz._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, !1, 0, 0, null, void 0, this._useSRGBBuffer, ArrayBuffer.isView(this._buffer) ? this._buffer : null));
          case 8:
            zz = this._engine.createRawCubeTexture(this._bufferViewArray, this.width, this._originalFormat ?? this.format, this.type, this.generateMipMaps, this.invertY, this.samplingMode, this._compression), zz._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 13:
            return;
          case 9:
            return zz = this._engine.createPrefilteredCubeTexture(this.url, null, this._lodGenerationScale, this._lodGenerationOffset, (zz => {
              zz && zz._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, void 0, ArrayBuffer.isView(this._buffer) ? this._buffer : null), void(zz._sphericalPolynomial = this._sphericalPolynomial)
        }
      }
      _swapAndDie(zz) {
        let tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._hardwareTexture?.setUsage(zz._source, this.generateMipMaps, this.is2DArray, this.isCube, this.is3D, this.width, this.height, this.depth), zz._hardwareTexture = this._hardwareTexture, zz._setUniqueId(Oz._Counter++), tz && (zz._isRGBD = this._isRGBD), this._lodTextureHigh && (zz._lodTextureHigh && zz._lodTextureHigh.dispose(), zz._lodTextureHigh = this._lodTextureHigh), this._lodTextureMid && (zz._lodTextureMid && zz._lodTextureMid.dispose(), zz._lodTextureMid = this._lodTextureMid), this._lodTextureLow && (zz._lodTextureLow && zz._lodTextureLow.dispose(), zz._lodTextureLow = this._lodTextureLow), this._irradianceTexture && (zz._irradianceTexture && zz._irradianceTexture.dispose(), zz._irradianceTexture = this._irradianceTexture);
        const sz = this._engine.getLoadedTexturesCache();
        let Fz = sz.indexOf(this); - 1 !== Fz && sz.splice(Fz, 1), Fz = sz.indexOf(zz), -1 === Fz && sz.push(zz)
      }
      dispose() {
        this._references--, 0 === this._references && (this.onLoadedObservable.clear(), this.onErrorObservable.clear(), this._engine._releaseTexture(this), this._hardwareTexture = null, this._dynamicTextureSource = null)
      }
    }
    Oz._Counter = 0
  },
  39117: (zz, tz, sz) => {
    function Fz(zz) {
      return 13 === zz || 14 === zz || 15 === zz || 16 === zz || 17 === zz || 18 === zz || 19 === zz
    }

    function Wz(zz) {
      return 8 === zz || 9 === zz || 10 === zz || 11 === zz
    }

    function Xz(zz) {
      return 0 === zz || 5 === zz || 7 === zz || 11 === zz
    }

    function Oz(zz) {
      return 13 === zz || 17 === zz || 18 === zz || 19 === zz
    }
    sz.d(tz, {
      c: () => Oz,
      e: () => Fz,
      h: () => Wz,
      k: () => Xz
    })
  },
  39026: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Fz
    });
    class Fz {
      get wrapU() {
        return this._cachedWrapU
      }
      set wrapU(zz) {
        this._cachedWrapU = zz
      }
      get wrapV() {
        return this._cachedWrapV
      }
      set wrapV(zz) {
        this._cachedWrapV = zz
      }
      get wrapR() {
        return this._cachedWrapR
      }
      set wrapR(zz) {
        this._cachedWrapR = zz
      }
      get anisotropicFilteringLevel() {
        return this._cachedAnisotropicFilteringLevel
      }
      set anisotropicFilteringLevel(zz) {
        this._cachedAnisotropicFilteringLevel = zz
      }
      get comparisonFunction() {
        return this._comparisonFunction
      }
      set comparisonFunction(zz) {
        this._comparisonFunction = zz
      }
      get useMipMaps() {
        return this._useMipMaps
      }
      set useMipMaps(zz) {
        this._useMipMaps = zz
      }
      constructor() {
        this.samplingMode = -1, this._useMipMaps = !0, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this._comparisonFunction = 0
      }
      setParameters() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2,
          Xz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return this._cachedWrapU = zz, this._cachedWrapV = tz, this._cachedWrapR = sz, this._cachedAnisotropicFilteringLevel = Fz, this.samplingMode = Wz, this._comparisonFunction = Xz, this
      }
      compareSampler(zz) {
        return this._cachedWrapU === zz._cachedWrapU && this._cachedWrapV === zz._cachedWrapV && this._cachedWrapR === zz._cachedWrapR && this._cachedAnisotropicFilteringLevel === zz._cachedAnisotropicFilteringLevel && this.samplingMode === zz.samplingMode && this._comparisonFunction === zz._comparisonFunction && this._useMipMaps === zz._useMipMaps
      }
    }
  },
  39274: (zz, tz, sz) => {
    function Fz(zz) {
      zz.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative")
    }
    sz.d(tz, {
      c: () => Fz
    })
  },
  39090: (zz, tz, sz) => {
    function Fz(zz) {
      return void 0 === zz.getPipelineContext
    }
    sz.d(tz, {
      d: () => Fz
    })
  },
  39485: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Wz
    });
    var Fz = sz(39074);
    class Wz {
      static GetEffect(zz) {
        return void 0 === zz.getPipelineContext ? zz.effect : zz
      }
      constructor(zz) {
        let tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._wasPreviouslyReady = !1, this._forceRebindOnNextCall = !0, this._wasPreviouslyUsingInstances = null, this.effect = null, this.defines = null, this.drawContext = zz.createDrawContext(), tz && (this.materialContext = zz.createMaterialContext())
      }
      setEffect(zz, tz) {
        let sz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        sz || this.effect === zz || this.drawContext?._releaseUniformBufferSlots?.(), this.effect = zz, void 0 !== tz && (this.defines = tz), sz && this.drawContext?.reset()
      }
      dispose() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.effect) {
          const tz = this.effect;
          zz ? tz.dispose() : Fz.b.SetImmediate((() => {
            tz.FD().onEndFrameObservable.addOnce((() => {
              tz.dispose()
            }))
          })), this.effect = null
        }
        this.drawContext?.dispose()
      }
    }
  },
  39047: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => uz,
      g: () => bz,
      i: () => Uz,
      l: () => Kz
    });
    var Fz = sz(39051),
      Wz = sz(39058),
      Xz = sz(39041),
      Oz = sz(38097),
      oz = sz(39071),
      vz = sz(39063);

    function Uz(zz, tz) {
      return (0, Wz.F)(tz).cachedPipelines[zz]
    }

    function Kz(zz) {
      const tz = zz._name,
        sz = zz.context;
      if (tz && sz) {
        const zz = (0, Wz.F)(sz),
          Fz = zz.cachedPipelines[tz];
        Fz?.dispose(), delete zz.cachedPipelines[tz]
      }
    }

    function uz(zz, tz, sz, Wz, Xz, Oz, vz) {
      let Uz, Kz;
      const uz = (0, Fz.j)() ? Oz?.getHostDocument() : null;
      Uz = "string" === typeof tz ? tz : "string" === typeof tz.vertexSource ? "source:" + tz.vertexSource : "string" === typeof tz.vertexElement ? uz?.getElementById(tz.vertexElement) || tz.vertexElement : tz.vertex || tz, Kz = "string" === typeof tz ? tz : "string" === typeof tz.fragmentSource ? "source:" + tz.fragmentSource : "string" === typeof tz.fragmentElement ? uz?.getElementById(tz.fragmentElement) || tz.fragmentElement : tz.fragment || tz;
      const bz = [void 0, void 0],
        wz = () => {
          if (bz[0] && bz[1]) {
            const [Fz, Uz] = bz;
            (0, oz.h)(zz), (0, oz.n)(Fz, zz, ((Fz, Kz) => {
              vz && (vz._vertexSourceCodeBeforeMigration = Kz), sz && (Fz = sz("vertex", Fz)), zz.isFragment = !0, (0, oz.n)(Uz, zz, ((Oz, Uz) => {
                vz && (vz._fragmentSourceCodeBeforeMigration = Uz), sz && (Oz = sz("fragment", Oz));
                const Kz = (0, oz.d)(Fz, Oz, zz);
                zz = null;
                const uz = function(zz, tz, sz, Fz) {
                  if (sz) {
                    return {
                      vertexSourceCode: (1 === Fz ? "//" : "") + "#define SHADER_NAME vertex:" + (sz.vertexElement || sz.vertex || sz.spectorName || sz) + "\n" + zz,
                      fragmentSourceCode: (1 === Fz ? "//" : "") + "#define SHADER_NAME fragment:" + (sz.fragmentElement || sz.fragment || sz.spectorName || sz) + "\n" + tz
                    }
                  }
                  return {
                    vertexSourceCode: zz,
                    fragmentSourceCode: tz
                  }
                }(Kz.vertexCode, Kz.fragmentCode, tz, Xz);
                Wz?.(uz.vertexSourceCode, uz.fragmentSourceCode)
              }), Oz)
            }), Oz)
          }
        };
      Nz(Uz, "Vertex", "", (zz => {
        vz && (vz._rawVertexSourceCode = zz), bz[0] = zz, wz()
      }), Xz), Nz(Kz, "Fragment", "Pixel", (zz => {
        vz && (vz._rawFragmentSourceCode = zz), bz[1] = zz, wz()
      }), Xz)
    }

    function Nz(zz, tz, sz, Wz, Oz, oz) {
      if ("undefined" !== typeof HTMLElement && zz instanceof HTMLElement) {
        return void Wz((0, Fz.e)(zz))
      }
      if ("source:" === zz.substring(0, 7)) return void Wz(zz.substring(7));
      if ("base64:" === zz.substring(0, 7)) {
        return void Wz(window.atob(zz.substring(7)))
      }
      const Uz = Xz.e.GetShadersStore(Oz);
      if (Uz[zz + tz + "Shader"]) return void Wz(Uz[zz + tz + "Shader"]);
      if (sz && Uz[zz + sz + "Shader"]) return void Wz(Uz[zz + sz + "Shader"]);
      let Kz;
      if (Kz = "." === zz[0] || "/" === zz[0] || zz.indexOf("http") > -1 ? zz : Xz.e.GetShadersRepository(Oz) + zz, !(oz = oz || vz.g)) throw new Error("loadFileInjection is not defined");
      oz(Kz + "." + tz.toLowerCase() + ".fx", Wz)
    }
    const bz = (zz, tz, sz, Fz) => {
      try {
        const Xz = zz.context ? (0, Wz.F)(zz.context) : null;
        Xz && (Xz.disableParallelShaderCompile = zz.disableParallelCompilation);
        const Oz = zz.existingPipelineContext || tz(zz.shaderProcessingContext);
        return Oz._name = zz.name, zz.name && Xz && (Xz.cachedPipelines[zz.name] = Oz), sz(Oz, zz.vertex, zz.fragment, !!zz.createAsRaw, "", "", zz.rebuildRebind, zz.defines, zz.transformFeedbackVaryings, "", (() => {
          Fz(Oz, (() => {
            zz.onRenderingStateCompiled?.(Oz)
          }))
        })), Oz
      } catch (Xz) {
        throw Oz.e.Error("Error compiling effect"), Xz
      }
    }
  },
  39036: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => vz
    });
    var Fz = sz(36505),
      Wz = sz(38097),
      Xz = sz(39041),
      Oz = sz(39047),
      oz = sz(39074);
    class vz {
      static get ShadersRepository() {
        return Xz.e.ShadersRepository
      }
      static set ShadersRepository(zz) {
        Xz.e.ShadersRepository = zz
      }
      get zsz() {
        return this._isDisposed
      }
      get onBindObservable() {
        return this._onBindObservable || (this._onBindObservable = new Fz.c), this._onBindObservable
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(zz, tz, sz) {
        let Wz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Xz = arguments.length > 4 ? arguments[4] : void 0,
          oz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Uz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          Kz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          uz = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          Nz = arguments.length > 9 ? arguments[9] : void 0,
          bz = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : "",
          wz = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0,
          Dz = arguments.length > 12 ? arguments[12] : void 0;
        this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new Fz.c, this.onErrorObservable = new Fz.c, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationForcedToCPU = !1, this._uniformBuffersNames = {}, this._multiTarget = !1, this._samplers = {}, this._isReady = !1, this._compilationError = "", this._allFallbacksProcessed = !1, this._uniforms = {}, this._key = "", this._fallbacks = null, this._vertexSourceCodeOverride = "", this._fragmentSourceCodeOverride = "", this._transformFeedbackVaryings = null, this._disableParallelShaderCompilation = !1, this._pipelineContext = null, this._vertexSourceCode = "", this._fragmentSourceCode = "", this._vertexSourceCodeBeforeMigration = "", this._fragmentSourceCodeBeforeMigration = "", this._rawVertexSourceCode = "", this._rawFragmentSourceCode = "", this._processCodeAfterIncludes = void 0, this._processFinalCode = null, this._onReleaseEffectsObserver = null, this.name = zz, this._key = bz;
        const gz = this._key.replace(/\r/g, "").replace(/\n/g, "|");
        let Hz;
        if (tz.attributes) {
          const zz = tz;
          if (this._engine = sz, this._attributesNames = zz.attributes, this._uniformsNames = zz.uniformsNames.concat(zz.samplers), this._samplerList = zz.samplers.slice(), this.defines = zz.defines, this.onError = zz.onError, this.onCompiled = zz.onCompiled, this._fallbacks = zz.fallbacks, this._indexParameters = zz.indexParameters, this._transformFeedbackVaryings = zz.transformFeedbackVaryings || null, this._multiTarget = !!zz.multiTarget, this._shaderLanguage = zz.shaderLanguage ?? 0, this._disableParallelShaderCompilation = !!zz.disableParallelShaderCompilation, zz.uniformBuffersNames) {
            this._uniformBuffersNamesList = zz.uniformBuffersNames.slice();
            for (let tz = 0; tz < zz.uniformBuffersNames.length; tz++) this._uniformBuffersNames[zz.uniformBuffersNames[tz]] = tz
          }
          this._processFinalCode = zz.processFinalCode ?? null, this._processCodeAfterIncludes = zz.processCodeAfterIncludes ?? void 0, Dz = zz.extraInitializationsAsync, Hz = zz.existingPipelineContext
        } else this._engine = Xz, this.defines = null == oz ? "" : oz, this._uniformsNames = sz.concat(Wz), this._samplerList = Wz ? Wz.slice() : [], this._attributesNames = tz, this._uniformBuffersNamesList = [], this._shaderLanguage = wz, this.onError = uz, this.onCompiled = Kz, this._indexParameters = Nz, this._fallbacks = Uz;
        "WEBGL2" === this._engine.shaderPlatformName && (Hz = (0, Oz.i)(gz, this._engine._gl) ?? Hz), this._attributeLocationByName = {}, this.uniqueId = vz._UniqueIdSeed++, Hz ? (this._pipelineContext = Hz, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCompiled(this._pipelineContext), this._pipelineContext.program && (this._pipelineContext.program.__SPECTOR_rebuildProgram = this._rebuildProgram.bind(this))) : this._processShaderCodeAsync(null, !1, null, Dz).catch((zz => {
          const tz = zz?.message ?? String(zz),
            sz = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${tz}`);
          zz && "string" === typeof zz.stack && (sz.stack = `${sz.message}\nCaused by: ${zz.stack}`), this._processCompilationErrors(sz)
        })), this._onReleaseEffectsObserver = this._engine.onReleaseEffectsObservable.addOnce((() => {
          this._onReleaseEffectsObserver = null, this.zsz || this.dispose(!0)
        }))
      }
      async _processShaderCodeAsync() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Fz = arguments.length > 3 ? arguments[3] : void 0;
        Fz && await Fz(), this._processingContext = sz || this._engine._getShaderProcessingContext(this._shaderLanguage, !1);
        const Wz = {
          defines: this.defines.split("\n"),
          indexParameters: this._indexParameters,
          isFragment: !1,
          shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
          processor: zz ?? this._engine._getShaderProcessor(this._shaderLanguage),
          supportsUniformBuffers: this._engine.supportsUniformBuffers,
          shadersRepository: Xz.e.GetShadersRepository(this._shaderLanguage),
          includesShadersStore: Xz.e.GetIncludesShadersStore(this._shaderLanguage),
          version: (100 * this._engine.version).toString(),
          platformName: this._engine.shaderPlatformName,
          processingContext: this._processingContext,
          isNDCHalfZRange: this._engine.isNDCHalfZRange,
          ysz: this._engine.ysz,
          processCodeAfterIncludes: this._processCodeAfterIncludes
        };
        (0, Oz.d)(Wz, this.name, this._processFinalCode, ((zz, sz) => {
          this._vertexSourceCode = zz, this._fragmentSourceCode = sz, this._prepareEffect(tz)
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
        return !!this._engine.zsz || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
      }
      FD() {
        return this._engine
      }
      getPipelineContext() {
        return this._pipelineContext
      }
      getAttributesNames() {
        return this._attributesNames
      }
      getAttributeLocation(zz) {
        return this._attributes[zz]
      }
      getAttributeLocationByName(zz) {
        return this._attributeLocationByName[zz]
      }
      getAttributesCount() {
        return this._attributes.length
      }
      getUniformIndex(zz) {
        return this._uniformsNames.indexOf(zz)
      }
      getUniform(zz) {
        return this._uniforms[zz]
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
        return await new Promise((zz => {
          this.executeWhenCompiled(zz)
        }))
      }
      executeWhenCompiled(zz) {
        this.isReady() ? zz(this) : (this.onCompileObservable.add((tz => {
          zz(tz)
        })), this._pipelineContext && !this._pipelineContext.isAsync || this._checkIsReady(null))
      }
      _checkIsReady(zz) {
        (0, oz.e)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (tz => {
          this._processCompilationErrors(tz, zz)
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
            ysz: this._engine.ysz,
            supportsUniformBuffers: this._engine.supportsUniformBuffers
          },
          extendedCreatePipelineOptions: {
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            createAsRaw: !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride)
          }
        }
      }
      _rebuildProgram(zz, tz, sz, Fz) {
        this._isReady = !1, this._vertexSourceCodeOverride = zz, this._fragmentSourceCodeOverride = tz, this.onError = (zz, tz) => {
          Fz && Fz(tz)
        }, this.onCompiled = () => {
          const zz = this.FD().scenes;
          if (zz)
            for (let tz = 0; tz < zz.length; tz++) zz[tz].markAllMaterialsAsDirty(127);
          this._pipelineContext._handlesSpectorRebuildCallback?.(sz)
        }, this._fallbacks = null, this._prepareEffect()
      }
      _onRenderingStateCompiled(zz) {
        if (this._pipelineContext = zz, this._pipelineContext.setEngine(this._engine), this._attributes = [], this._pipelineContext._fillEffectInformation(this, this._uniformBuffersNames, this._uniformsNames, this._uniforms, this._samplerList, this._samplers, this._attributesNames, this._attributes), this._attributesNames)
          for (let tz = 0; tz < this._attributesNames.length; tz++) {
            const zz = this._attributesNames[tz];
            this._attributeLocationByName[zz] = this._attributes[tz]
          }
        this._engine.bindSamplers(this), this._compilationError = "", this._isReady = !0, this.onCompiled && this.onCompiled(this), this.onCompileObservable.notifyObservers(this), this.onCompileObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh(), vz.AutomaticallyClearCodeCache && this.clearCodeCache()
      }
      _prepareEffect() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const tz = this._pipelineContext;
        this._isReady = !1;
        try {
          const sz = !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride),
            Fz = sz ? null : this.defines,
            Wz = sz ? this._vertexSourceCodeOverride : this._vertexSourceCode,
            Xz = sz ? this._fragmentSourceCodeOverride : this._fragmentSourceCode,
            oz = this._engine;
          this._pipelineContext = (0, Oz.g)({
            existingPipelineContext: zz ? tz : null,
            vertex: Wz,
            fragment: Xz,
            context: "WEBGL2" === oz.shaderPlatformName || "WEBGL1" === oz.shaderPlatformName ? oz._gl : void 0,
            rebuildRebind: (zz, tz, sz, Fz) => this._rebuildProgram(zz, tz, sz, Fz),
            defines: Fz,
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            name: this._key.replace(/\r/g, "").replace(/\n/g, "|"),
            createAsRaw: sz,
            disableParallelCompilation: this._disableParallelShaderCompilation,
            shaderProcessingContext: this._processingContext,
            onRenderingStateCompiled: sz => {
              tz && !zz && this._engine._deletePipelineContext(tz), sz && this._onRenderingStateCompiled(sz)
            }
          }, this._engine.createPipelineContext.bind(this._engine), this._engine._preparePipelineContextAsync.bind(this._engine), this._engine._executeWhenRenderingStateIsCompiled.bind(this._engine)), this._pipelineContext.isAsync && this._checkIsReady(tz)
        } catch (sz) {
          this._processCompilationErrors(sz, tz)
        }
      }
      _getShaderCodeAndErrorLine(zz, tz, sz) {
        const Fz = sz ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/;
        let Wz = null;
        if (tz && zz) {
          const Xz = tz.match(Fz);
          if (Xz && 2 === Xz.length) {
            const tz = parseInt(Xz[1]),
              Fz = zz.split("\n", -1);
            Fz.length >= tz && (Wz = `Offending line [${tz}] in ${sz?"fragment":"vertex"} code: ${Fz[tz-1]}`)
          }
        }
        return [zz, Wz]
      }
      _processCompilationErrors(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._compilationError = "string" === typeof zz?.stack ? zz.stack : zz?.message ?? String(zz);
        const sz = this._attributesNames,
          Fz = this._fallbacks;
        if (Wz.e.Error("Unable to compile effect:"), Wz.e.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), Wz.e.Error(`Attributes: ${sz.join(" ")}`), Wz.e.Error("Defines:\n" + this.defines), vz.LogShaderCodeOnCompilationError) {
          let zz, tz = null,
            sz = null;
          this._pipelineContext?._getVertexShaderCode() && ([zz, tz] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), zz && (Wz.e.Error("Vertex code:"), Wz.e.Error(zz))), this._pipelineContext?._getFragmentShaderCode() && ([zz, sz] = this._getShaderCodeAndErrorLine(this._pipelineContext?._getFragmentShaderCode(), this._compilationError, !0), zz && (Wz.e.Error("Fragment code:"), Wz.e.Error(zz))), tz && Wz.e.Error(tz), sz && Wz.e.Error(sz)
        }
        Wz.e.Error("Error: " + this._compilationError);
        const Xz = () => {
          this.onError && this.onError(this, this._compilationError), this.onErrorObservable.notifyObservers(this), this._engine.onEffectErrorObservable.notifyObservers({
            effect: this,
            errors: this._compilationError
          })
        };
        tz && (this._pipelineContext = tz, this._isReady = !0, Xz()), Fz ? (this._pipelineContext = null, Fz.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, Wz.e.Error("Trying next fallback."), this.defines = Fz.reduce(this.defines, this), this._prepareEffect()) : (this._allFallbacksProcessed = !0, Xz(), this.onErrorObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh())) : (this._allFallbacksProcessed = !0, tz || Xz())
      }
      get isSupported() {
        return "" === this._compilationError
      }
      _bindTexture(zz, tz) {
        this._engine._bindTexture(this._samplers[zz], tz, zz)
      }
      setTexture(zz, tz) {
        this._engine.setTexture(this._samplers[zz], this._uniforms[zz], tz, zz)
      }
      setTextureArray(zz, tz) {
        const sz = zz + "Ex";
        if (-1 === this._samplerList.indexOf(sz + "0")) {
          const Fz = this._samplerList.indexOf(zz);
          for (let zz = 1; zz < tz.length; zz++) {
            const tz = sz + (zz - 1).toString();
            this._samplerList.splice(Fz + zz, 0, tz)
          }
          let Wz = 0;
          for (const zz of this._samplerList) this._samplers[zz] = Wz, Wz += 1
        }
        this._engine.setTextureArray(this._samplers[zz], this._uniforms[zz], tz, zz)
      }
      bindUniformBuffer(zz, tz) {
        const sz = this._uniformBuffersNames[tz];
        void 0 === sz || vz._BaseCache[sz] === zz && this._engine._features.useUBOBindingCache || (vz._BaseCache[sz] = zz, this._engine.bindUniformBufferBase(zz, sz, tz))
      }
      bindUniformBlock(zz, tz) {
        this._engine.bindUniformBlock(this._pipelineContext, zz, tz)
      }
      setInt(zz, tz) {
        return this._pipelineContext.setInt(zz, tz), this
      }
      setInt2(zz, tz, sz) {
        return this._pipelineContext.setInt2(zz, tz, sz), this
      }
      setInt3(zz, tz, sz, Fz) {
        return this._pipelineContext.setInt3(zz, tz, sz, Fz), this
      }
      setInt4(zz, tz, sz, Fz, Wz) {
        return this._pipelineContext.setInt4(zz, tz, sz, Fz, Wz), this
      }
      setIntArray(zz, tz) {
        return this._pipelineContext.setIntArray(zz, tz), this
      }
      setIntArray2(zz, tz) {
        return this._pipelineContext.setIntArray2(zz, tz), this
      }
      setIntArray3(zz, tz) {
        return this._pipelineContext.setIntArray3(zz, tz), this
      }
      setIntArray4(zz, tz) {
        return this._pipelineContext.setIntArray4(zz, tz), this
      }
      setUInt(zz, tz) {
        return this._pipelineContext.setUInt(zz, tz), this
      }
      setUInt2(zz, tz, sz) {
        return this._pipelineContext.setUInt2(zz, tz, sz), this
      }
      setUInt3(zz, tz, sz, Fz) {
        return this._pipelineContext.setUInt3(zz, tz, sz, Fz), this
      }
      setUInt4(zz, tz, sz, Fz, Wz) {
        return this._pipelineContext.setUInt4(zz, tz, sz, Fz, Wz), this
      }
      setUIntArray(zz, tz) {
        return this._pipelineContext.setUIntArray(zz, tz), this
      }
      setUIntArray2(zz, tz) {
        return this._pipelineContext.setUIntArray2(zz, tz), this
      }
      setUIntArray3(zz, tz) {
        return this._pipelineContext.setUIntArray3(zz, tz), this
      }
      setUIntArray4(zz, tz) {
        return this._pipelineContext.setUIntArray4(zz, tz), this
      }
      setFloatArray(zz, tz) {
        return this._pipelineContext.setArray(zz, tz), this
      }
      setFloatArray2(zz, tz) {
        return this._pipelineContext.setArray2(zz, tz), this
      }
      setFloatArray3(zz, tz) {
        return this._pipelineContext.setArray3(zz, tz), this
      }
      setFloatArray4(zz, tz) {
        return this._pipelineContext.setArray4(zz, tz), this
      }
      setArray(zz, tz) {
        return this._pipelineContext.setArray(zz, tz), this
      }
      setArray2(zz, tz) {
        return this._pipelineContext.setArray2(zz, tz), this
      }
      setArray3(zz, tz) {
        return this._pipelineContext.setArray3(zz, tz), this
      }
      setArray4(zz, tz) {
        return this._pipelineContext.setArray4(zz, tz), this
      }
      setMatrices(zz, tz) {
        return this._pipelineContext.setMatrices(zz, tz), this
      }
      setMatrix(zz, tz) {
        return this._pipelineContext.setMatrix(zz, tz), this
      }
      setMatrix3x3(zz, tz) {
        return this._pipelineContext.setMatrix3x3(zz, tz), this
      }
      setMatrix2x2(zz, tz) {
        return this._pipelineContext.setMatrix2x2(zz, tz), this
      }
      setFloat(zz, tz) {
        return this._pipelineContext.setFloat(zz, tz), this
      }
      setBool(zz, tz) {
        return this._pipelineContext.setInt(zz, tz ? 1 : 0), this
      }
      setVector2(zz, tz) {
        return this._pipelineContext.setVector2(zz, tz), this
      }
      setFloat2(zz, tz, sz) {
        return this._pipelineContext.setFloat2(zz, tz, sz), this
      }
      setVector3(zz, tz) {
        return this._pipelineContext.setVector3(zz, tz), this
      }
      setFloat3(zz, tz, sz, Fz) {
        return this._pipelineContext.setFloat3(zz, tz, sz, Fz), this
      }
      setVector4(zz, tz) {
        return this._pipelineContext.setVector4(zz, tz), this
      }
      setQuaternion(zz, tz) {
        return this._pipelineContext.setQuaternion(zz, tz), this
      }
      setFloat4(zz, tz, sz, Fz, Wz) {
        return this._pipelineContext.setFloat4(zz, tz, sz, Fz, Wz), this
      }
      setColor3(zz, tz) {
        return this._pipelineContext.setColor3(zz, tz), this
      }
      setColor4(zz, tz, sz) {
        return this._pipelineContext.setColor4(zz, tz, sz), this
      }
      setDirectColor4(zz, tz) {
        return this._pipelineContext.setDirectColor4(zz, tz), this
      }
      clearCodeCache() {
        this._vertexSourceCode = "", this._fragmentSourceCode = "", this._fragmentSourceCodeBeforeMigration = "", this._vertexSourceCodeBeforeMigration = ""
      }
      dispose() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) this._refCount = 0;
        else {
          if (vz.PersistentMode) return;
          this._refCount--
        }
        this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, Oz.l)(this._pipelineContext), this._engine._releaseEffect(this), this.clearCodeCache(), this._isDisposed = !0)
      }
      static RegisterShader(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        tz && (Xz.e.GetShadersStore(Fz)[`${zz}PixelShader`] = tz), sz && (Xz.e.GetShadersStore(Fz)[`${zz}VertexShader`] = sz)
      }
      static ResetCache() {
        vz._BaseCache = {}
      }
    }
    vz.LogShaderCodeOnCompilationError = !0, vz.PersistentMode = !1, vz.AutomaticallyClearCodeCache = !1, vz._UniqueIdSeed = 0, vz._BaseCache = {}, vz.ShadersStore = Xz.e.ShadersStore, vz.IncludesShadersStore = Xz.e.IncludesShadersStore
  },
  39305: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Kz,
      h: () => mz,
      l: () => xz
    });
    var Fz = sz(39036),
      Wz = sz(36475),
      Xz = sz(36513),
      Oz = sz(39280);
    const oz = new Wz.e,
      vz = new Wz.e,
      Uz = new Wz.e,
      Kz = {
        aJ: () => {},
        eyeAtCamera: !0
      };

    function uz(zz, tz, sz) {
      const Fz = sz.hsz(),
        Wz = tz.hsz();
      for (let Xz = 0; Xz < 16; Xz++) Fz[Xz] = Wz[Xz];
      return Fz[12] -= zz.x, Fz[13] -= zz.y, Fz[14] -= zz.z, sz.markAsUpdated(), sz
    }

    function Nz(zz, tz, sz) {
      return (0, Xz.h)(tz, vz), uz(zz, vz, Uz), (0, Xz.h)(Uz, sz), sz
    }

    function bz(zz, tz, sz) {
      if (!Kz.eyeAtCamera) return Nz(zz, tz, sz);
      const Fz = sz.hsz(),
        Wz = tz.hsz();
      for (let Xz = 0; Xz < 16; Xz++) Fz[Xz] = Wz[Xz];
      return Fz[12] = 0, Fz[13] = 0, Fz[14] = 0, sz.markAsUpdated(), sz
    }

    function wz(zz, tz, sz, Fz) {
      return (0, Xz.o)(bz(zz, tz, Fz), sz, Fz), Fz
    }

    function Dz(zz, tz, sz, Fz) {
      return (0, Xz.h)(sz, vz), (0, Xz.o)(tz, vz, Uz), uz(zz, Uz, vz), bz(zz, sz, Uz), (0, Xz.o)(vz, Uz, Fz), Fz
    }

    function gz(zz, tz, sz, Fz, Wz, Oz) {
      return (0, Xz.h)(sz, vz), (0, Xz.o)(tz, vz, Uz), uz(zz, Uz, vz), wz(zz, Fz, Wz, Uz), (0, Xz.o)(vz, Uz, Oz), Oz
    }

    function Hz(zz, tz) {
      const sz = Kz.aJ();
      if (!sz || oz === tz) return tz;
      oz.updateFlag = tz.updateFlag;
      const Fz = sz.floatingOriginOffset;
      switch (zz) {
        case "world":
          return uz(Fz, tz, oz);
        case "view":
          return bz(Fz, tz, oz);
        case "worldView":
          return Dz(Fz, tz, sz.getViewMatrix(), oz);
        case "viewProjection":
          return wz(Fz, sz.getViewMatrix(), sz.getProjectionMatrix(), oz);
        case "worldViewProjection":
          return gz(Fz, tz, sz.getTransformMatrix(), sz.getViewMatrix(), sz.getProjectionMatrix(), oz);
        default:
          if (zz.startsWith("u_")) {
            const Wz = zz.toLowerCase();
            if (Wz.startsWith("u_worldviewprojection")) return gz(Fz, tz, sz.getTransformMatrix(), sz.getViewMatrix(), sz.getProjectionMatrix(), oz);
            if (Wz.startsWith("u_viewprojection")) return wz(Fz, sz.getViewMatrix(), sz.getProjectionMatrix(), oz);
            if (Wz.startsWith("u_worldview")) return Dz(Fz, tz, sz.getViewMatrix(), oz);
            if (Wz.startsWith("u_world")) return uz(Fz, tz, oz);
            if (Wz.startsWith("u_view")) return bz(Fz, tz, oz)
          }
          return tz
      }
    }
    const Bz = Oz.c,
      Pz = Fz.e,
      rz = Bz.prototype._updateMatrixForUniform,
      Yz = Fz.e.prototype.setMatrix;

    function xz() {
      Fz.e.prototype.setMatrix = Yz, Pz._setMatrixOverride = void 0, Bz.prototype._updateMatrixForUniform = rz, Bz.prototype._updateMatrixForUniformOverride = void 0
    }

    function mz() {
      Pz.prototype._setMatrixOverride = Yz, Pz.prototype.setMatrix = function(zz, tz) {
        return this._setMatrixOverride(zz, Hz(zz, tz)), this
      }, Bz.prototype._updateMatrixForUniformOverride = rz, Bz.prototype._updateMatrixForUniform = function(zz, tz) {
        this._updateMatrixForUniformOverride(zz, Hz(zz, tz))
      }
    }
  },
  39276: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Xz,
      g: () => Wz
    });
    var Fz = sz(39274);

    function Wz(zz, tz) {
      tz.WHITEBALANCE && zz.push("whiteBalanceMatrix"), tz.EXPOSURE && zz.push("exposureLinear"), tz.CONTRAST && zz.push("contrast"), tz.COLORGRADING && zz.push("colorTransformSettings"), (tz.VIGNETTE || tz.DITHER) && zz.push("vInverseScreenSize"), tz.VIGNETTE && (zz.push("vignetteSettings1"), zz.push("vignetteSettings2")), tz.COLORCURVES && (0, Fz.c)(zz), tz.DITHER && zz.push("ditherIntensity")
    }

    function Xz(zz, tz) {
      tz.COLORGRADING && zz.push("txColorTransform")
    }
  },
  39272: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Zz,
      g: () => cz
    });
    var Fz = sz(39167),
      Wz = sz(39170),
      Xz = sz(36505),
      Oz = sz(36654),
      oz = sz(36507),
      vz = sz(36475);
    const Uz = [
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
      Kz = 1e6 / Uz[Uz.length - 1][0],
      uz = 150;

    function Nz(zz, tz) {
      const sz = Number.isNaN(zz) ? Kz : Math.max(zz, Kz),
        Fz = (0, oz.Clamp)(1e6 / sz, Uz[0][0], Uz[Uz.length - 1][0]);
      let Wz = 0,
        Xz = Uz.length - 1;
      for (; Xz - Wz > 1;) {
        const zz = Wz + Xz >> 1;
        Uz[zz][0] <= Fz ? Wz = zz : Xz = zz
      }
      const Oz = Wz,
        [Nz, bz, wz, Dz] = Uz[Oz],
        [gz, Hz, Bz, Pz] = Uz[Oz + 1],
        rz = (Fz - Nz) / (gz - Nz),
        Yz = vz.n.Lerp(new vz.n(bz, wz), new vz.n(Hz, Bz), rz),
        xz = vz.n.Normalize(new vz.n(1, Dz)),
        mz = vz.n.Normalize(new vz.n(1, Pz)),
        Jz = vz.n.Normalize(vz.n.Lerp(xz, mz, rz)),
        Iz = (0, oz.Clamp)(tz, -150, uz);
      Yz.oFz(Jz.scale(Iz / 3e3));
      const Cz = 2 * Yz.x - 8 * Yz.y + 4,
        ez = 3 * Yz.x / Cz,
        Zz = 2 * Yz.y / Cz;
      return new vz.p(ez / Zz, 1, (1 - ez - Zz) / Zz)
    }
    const bz = vz.e.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
      wz = vz.e.Invert(bz);

    function Dz(zz, tz) {
      const sz = tz > 0 ? zz / tz : 10;
      return (0, oz.Clamp)(sz, .1, 10)
    }

    function gz(zz, tz) {
      const sz = vz.p.TransformNormal(zz, bz),
        Fz = vz.p.TransformNormal(tz, bz),
        Wz = vz.e.FromArray([Dz(Fz.x, sz.x), 0, 0, 0, 0, Dz(Fz.y, sz.y), 0, 0, 0, 0, Dz(Fz.z, sz.z), 0, 0, 0, 0, 1]);
      return bz.multiply(Wz).multiply(wz)
    }
    const Hz = new vz.p(.95047, 1, 1.08883),
      Bz = vz.e.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(gz(Hz, Nz(6500, 0))),
      Pz = vz.e.Invert(Bz),
      rz = vz.p.TransformNormal(new vz.p(1, 1, 1), Bz);
    var Yz = sz(39181),
      xz = sz(39274);
    let mz = (() => {
      var zz;
      let tz, sz, Xz, oz, vz, Uz, Kz, uz, Nz, bz, wz, Dz, gz = [],
        Hz = [],
        Bz = [],
        Pz = [],
        rz = [],
        mz = [],
        Jz = [],
        Iz = [],
        Cz = [],
        ez = [],
        Zz = [],
        Gz = [],
        Tz = [],
        cz = [],
        jz = [],
        Az = [],
        yz = [],
        Mz = [],
        dz = [],
        hz = [],
        Qz = [],
        kz = [],
        iz = [],
        Lz = [];
      return zz = class {
        constructor() {
          this._dirty = !0, this._tempColor = new Oz.d(0, 0, 0, 0), this._globalCurve = new Oz.d(0, 0, 0, 0), this._highlightsCurve = new Oz.d(0, 0, 0, 0), this._midtonesCurve = new Oz.d(0, 0, 0, 0), this._shadowsCurve = new Oz.d(0, 0, 0, 0), this._positiveCurve = new Oz.d(0, 0, 0, 0), this._negativeCurve = new Oz.d(0, 0, 0, 0), this._globalHue = (0, Fz.k)(this, gz, 30), this._globalDensity = ((0, Fz.k)(this, Hz), (0, Fz.k)(this, Bz, 0)), this._globalSaturation = ((0, Fz.k)(this, Pz), (0, Fz.k)(this, rz, 0)), this._globalExposure = ((0, Fz.k)(this, mz), (0, Fz.k)(this, Jz, 0)), this._highlightsHue = ((0, Fz.k)(this, Iz), (0, Fz.k)(this, Cz, 30)), this._highlightsDensity = ((0, Fz.k)(this, ez), (0, Fz.k)(this, Zz, 0)), this._highlightsSaturation = ((0, Fz.k)(this, Gz), (0, Fz.k)(this, Tz, 0)), this._highlightsExposure = ((0, Fz.k)(this, cz), (0, Fz.k)(this, jz, 0)), this._midtonesHue = ((0, Fz.k)(this, Az), (0, Fz.k)(this, yz, 30)), this._midtonesDensity = ((0, Fz.k)(this, Mz), (0, Fz.k)(this, dz, 0)), this._midtonesSaturation = ((0, Fz.k)(this, hz), (0, Fz.k)(this, Qz, 0)), this._midtonesExposure = ((0, Fz.k)(this, kz), (0, Fz.k)(this, iz, 0)), this._shadowsHue = ((0, Fz.k)(this, Lz), 30), this._shadowsDensity = 0, this._shadowsSaturation = 0, this._shadowsExposure = 0
        }
        get globalHue() {
          return this._globalHue
        }
        set globalHue(zz) {
          this._globalHue = zz, this._dirty = !0
        }
        get globalDensity() {
          return this._globalDensity
        }
        set globalDensity(zz) {
          this._globalDensity = zz, this._dirty = !0
        }
        get globalSaturation() {
          return this._globalSaturation
        }
        set globalSaturation(zz) {
          this._globalSaturation = zz, this._dirty = !0
        }
        get globalExposure() {
          return this._globalExposure
        }
        set globalExposure(zz) {
          this._globalExposure = zz, this._dirty = !0
        }
        get highlightsHue() {
          return this._highlightsHue
        }
        set highlightsHue(zz) {
          this._highlightsHue = zz, this._dirty = !0
        }
        get highlightsDensity() {
          return this._highlightsDensity
        }
        set highlightsDensity(zz) {
          this._highlightsDensity = zz, this._dirty = !0
        }
        get highlightsSaturation() {
          return this._highlightsSaturation
        }
        set highlightsSaturation(zz) {
          this._highlightsSaturation = zz, this._dirty = !0
        }
        get highlightsExposure() {
          return this._highlightsExposure
        }
        set highlightsExposure(zz) {
          this._highlightsExposure = zz, this._dirty = !0
        }
        get midtonesHue() {
          return this._midtonesHue
        }
        set midtonesHue(zz) {
          this._midtonesHue = zz, this._dirty = !0
        }
        get midtonesDensity() {
          return this._midtonesDensity
        }
        set midtonesDensity(zz) {
          this._midtonesDensity = zz, this._dirty = !0
        }
        get midtonesSaturation() {
          return this._midtonesSaturation
        }
        set midtonesSaturation(zz) {
          this._midtonesSaturation = zz, this._dirty = !0
        }
        get midtonesExposure() {
          return this._midtonesExposure
        }
        set midtonesExposure(zz) {
          this._midtonesExposure = zz, this._dirty = !0
        }
        get shadowsHue() {
          return this._shadowsHue
        }
        set shadowsHue(zz) {
          this._shadowsHue = zz, this._dirty = !0
        }
        get shadowsDensity() {
          return this._shadowsDensity
        }
        set shadowsDensity(zz) {
          this._shadowsDensity = zz, this._dirty = !0
        }
        get shadowsSaturation() {
          return this._shadowsSaturation
        }
        set shadowsSaturation(zz) {
          this._shadowsSaturation = zz, this._dirty = !0
        }
        get shadowsExposure() {
          return this._shadowsExposure
        }
        set shadowsExposure(zz) {
          this._shadowsExposure = zz, this._dirty = !0
        }
        getClassName() {
          return "ColorCurves"
        }
        _getColorGradingDataToRef(tz, sz, Fz, Wz, Xz) {
          null != tz && (tz = zz._Clamp(tz, 0, 360), sz = zz._Clamp(sz, -100, 100), Fz = zz._Clamp(Fz, -100, 100), Wz = zz._Clamp(Wz, -100, 100), sz = zz._ApplyColorGradingSliderNonlinear(sz), sz *= .5, Wz = zz._ApplyColorGradingSliderNonlinear(Wz), sz < 0 && (sz *= -1, tz = (tz + 180) % 360), zz._FromHSBToRef(tz, sz, 50 + .25 * Wz, Xz), Xz.scaleToRef(2, Xz), Xz.a = 1 + .01 * Fz)
        }
        static _ApplyColorGradingSliderNonlinear(zz) {
          zz /= 100;
          let tz = Math.abs(zz);
          return tz = Math.pow(tz, 2), zz < 0 && (tz *= -1), tz *= 100, tz
        }
        static _FromHSBToRef(tz, sz, Fz, Wz) {
          let Xz = zz._Clamp(tz, 0, 360);
          const Oz = zz._Clamp(sz / 100, 0, 1),
            oz = zz._Clamp(Fz / 100, 0, 1);
          if (0 === Oz) Wz.r = oz, Wz.g = oz, Wz.b = oz;
          else {
            Xz /= 60;
            const zz = Math.floor(Xz),
              tz = Xz - zz,
              sz = oz * (1 - Oz),
              Fz = oz * (1 - Oz * tz),
              vz = oz * (1 - Oz * (1 - tz));
            switch (zz) {
              case 0:
                Wz.r = oz, Wz.g = vz, Wz.b = sz;
                break;
              case 1:
                Wz.r = Fz, Wz.g = oz, Wz.b = sz;
                break;
              case 2:
                Wz.r = sz, Wz.g = oz, Wz.b = vz;
                break;
              case 3:
                Wz.r = sz, Wz.g = Fz, Wz.b = oz;
                break;
              case 4:
                Wz.r = vz, Wz.g = sz, Wz.b = oz;
                break;
              default:
                Wz.r = oz, Wz.g = sz, Wz.b = Fz
            }
          }
          Wz.a = 1
        }
        static _Clamp(zz, tz, sz) {
          return Math.min(Math.max(zz, tz), sz)
        }
        clone() {
          return Yz.e.Clone((() => new zz), this)
        }
        serialize() {
          return Yz.e.Serialize(this)
        }
        _bind(zz) {
          let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vCameraColorCurvePositive",
            sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurveNeutral",
            Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNegative";
          this._dirty && (this._dirty = !1, this._getColorGradingDataToRef(this._globalHue, this._globalDensity, this._globalSaturation, this._globalExposure, this._globalCurve), this._getColorGradingDataToRef(this._highlightsHue, this._highlightsDensity, this._highlightsSaturation, this._highlightsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._highlightsCurve), this._getColorGradingDataToRef(this._midtonesHue, this._midtonesDensity, this._midtonesSaturation, this._midtonesExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._midtonesCurve), this._getColorGradingDataToRef(this._shadowsHue, this._shadowsDensity, this._shadowsSaturation, this._shadowsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._shadowsCurve), this._highlightsCurve.subtractToRef(this._midtonesCurve, this._positiveCurve), this._midtonesCurve.subtractToRef(this._shadowsCurve, this._negativeCurve)), zz && (zz.setFloat4(tz, this._positiveCurve.r, this._positiveCurve.g, this._positiveCurve.b, this._positiveCurve.a), zz.setFloat4(sz, this._midtonesCurve.r, this._midtonesCurve.g, this._midtonesCurve.b, this._midtonesCurve.a), zz.setFloat4(Fz, this._negativeCurve.r, this._negativeCurve.g, this._negativeCurve.b, this._negativeCurve.a))
        }
      }, (() => {
        const Oz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        tz = [(0, Wz.J)()], sz = [(0, Wz.J)()], Xz = [(0, Wz.J)()], oz = [(0, Wz.J)()], vz = [(0, Wz.J)()], Uz = [(0, Wz.J)()], Kz = [(0, Wz.J)()], uz = [(0, Wz.J)()], Nz = [(0, Wz.J)()], bz = [(0, Wz.J)()], wz = [(0, Wz.J)()], Dz = [(0, Wz.J)()], (0, Fz.h)(null, null, tz, {
          kind: "field",
          name: "_globalHue",
          static: !1,
          private: !1,
          access: {
            has: zz => "_globalHue" in zz,
            get: zz => zz._globalHue,
            set: (zz, tz) => {
              zz._globalHue = tz
            }
          },
          metadata: Oz
        }, gz, Hz), (0, Fz.h)(null, null, sz, {
          kind: "field",
          name: "_globalDensity",
          static: !1,
          private: !1,
          access: {
            has: zz => "_globalDensity" in zz,
            get: zz => zz._globalDensity,
            set: (zz, tz) => {
              zz._globalDensity = tz
            }
          },
          metadata: Oz
        }, Bz, Pz), (0, Fz.h)(null, null, Xz, {
          kind: "field",
          name: "_globalSaturation",
          static: !1,
          private: !1,
          access: {
            has: zz => "_globalSaturation" in zz,
            get: zz => zz._globalSaturation,
            set: (zz, tz) => {
              zz._globalSaturation = tz
            }
          },
          metadata: Oz
        }, rz, mz), (0, Fz.h)(null, null, oz, {
          kind: "field",
          name: "_globalExposure",
          static: !1,
          private: !1,
          access: {
            has: zz => "_globalExposure" in zz,
            get: zz => zz._globalExposure,
            set: (zz, tz) => {
              zz._globalExposure = tz
            }
          },
          metadata: Oz
        }, Jz, Iz), (0, Fz.h)(null, null, vz, {
          kind: "field",
          name: "_highlightsHue",
          static: !1,
          private: !1,
          access: {
            has: zz => "_highlightsHue" in zz,
            get: zz => zz._highlightsHue,
            set: (zz, tz) => {
              zz._highlightsHue = tz
            }
          },
          metadata: Oz
        }, Cz, ez), (0, Fz.h)(null, null, Uz, {
          kind: "field",
          name: "_highlightsDensity",
          static: !1,
          private: !1,
          access: {
            has: zz => "_highlightsDensity" in zz,
            get: zz => zz._highlightsDensity,
            set: (zz, tz) => {
              zz._highlightsDensity = tz
            }
          },
          metadata: Oz
        }, Zz, Gz), (0, Fz.h)(null, null, Kz, {
          kind: "field",
          name: "_highlightsSaturation",
          static: !1,
          private: !1,
          access: {
            has: zz => "_highlightsSaturation" in zz,
            get: zz => zz._highlightsSaturation,
            set: (zz, tz) => {
              zz._highlightsSaturation = tz
            }
          },
          metadata: Oz
        }, Tz, cz), (0, Fz.h)(null, null, uz, {
          kind: "field",
          name: "_highlightsExposure",
          static: !1,
          private: !1,
          access: {
            has: zz => "_highlightsExposure" in zz,
            get: zz => zz._highlightsExposure,
            set: (zz, tz) => {
              zz._highlightsExposure = tz
            }
          },
          metadata: Oz
        }, jz, Az), (0, Fz.h)(null, null, Nz, {
          kind: "field",
          name: "_midtonesHue",
          static: !1,
          private: !1,
          access: {
            has: zz => "_midtonesHue" in zz,
            get: zz => zz._midtonesHue,
            set: (zz, tz) => {
              zz._midtonesHue = tz
            }
          },
          metadata: Oz
        }, yz, Mz), (0, Fz.h)(null, null, bz, {
          kind: "field",
          name: "_midtonesDensity",
          static: !1,
          private: !1,
          access: {
            has: zz => "_midtonesDensity" in zz,
            get: zz => zz._midtonesDensity,
            set: (zz, tz) => {
              zz._midtonesDensity = tz
            }
          },
          metadata: Oz
        }, dz, hz), (0, Fz.h)(null, null, wz, {
          kind: "field",
          name: "_midtonesSaturation",
          static: !1,
          private: !1,
          access: {
            has: zz => "_midtonesSaturation" in zz,
            get: zz => zz._midtonesSaturation,
            set: (zz, tz) => {
              zz._midtonesSaturation = tz
            }
          },
          metadata: Oz
        }, Qz, kz), (0, Fz.h)(null, null, Dz, {
          kind: "field",
          name: "_midtonesExposure",
          static: !1,
          private: !1,
          access: {
            has: zz => "_midtonesExposure" in zz,
            get: zz => zz._midtonesExposure,
            set: (zz, tz) => {
              zz._midtonesExposure = tz
            }
          },
          metadata: Oz
        }, iz, Lz), Oz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Oz
        })
      })(), zz.PrepareUniforms = xz.c, zz
    })();

    function Jz(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurvePositive",
        Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNeutral",
        Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "vCameraColorCurveNegative";
      zz._bind(tz, sz, Fz, Wz)
    }
    var Iz = sz(39111),
      Cz = sz(39276),
      ez = sz(36518);
    let Zz = (() => {
        var zz;
        let tz, sz, Uz, bz, wz, Dz, Hz, xz, ez, Zz, Gz, Tz, cz, jz, Az, yz, Mz, dz, hz, Qz, kz, iz, Lz, lz, nz, az, qz, Sz, Vz = [],
          Rz = [],
          pz = [],
          fz = [],
          Ez = [],
          zt = [],
          tt = [],
          st = [],
          Ft = [],
          Wt = [],
          Xt = [],
          Ot = [],
          ot = [],
          vt = [],
          Ut = [],
          Kt = [],
          ut = [],
          Nt = [],
          bt = [],
          wt = [],
          Dt = [],
          gt = [],
          Ht = [],
          Bt = [],
          Pt = [],
          rt = [],
          Yt = [],
          xt = [],
          mt = [],
          Jt = [],
          It = [],
          Ct = [],
          et = [],
          Zt = [],
          Gt = [],
          Tt = [],
          ct = [],
          jt = [],
          At = [],
          yt = [],
          Mt = [],
          dt = [],
          ht = [],
          Qt = [],
          kt = [],
          it = [],
          Lt = [],
          lt = [],
          nt = [],
          qt = [],
          St = [],
          Vt = [],
          Rt = [],
          pt = [],
          ft = [],
          Et = [];
        return zz = class {
          constructor() {
            this.colorCurves = (0, Fz.k)(this, Vz, new mz), this._colorCurvesEnabled = ((0, Fz.k)(this, Rz), (0, Fz.k)(this, pz, !1)), this._colorGradingTexture = ((0, Fz.k)(this, fz), (0, Fz.k)(this, Ez, void 0)), this._colorGradingEnabled = ((0, Fz.k)(this, zt), (0, Fz.k)(this, tt, !1)), this._colorGradingWithGreenDepth = ((0, Fz.k)(this, st), (0, Fz.k)(this, Ft, !0)), this._colorGradingBGR = ((0, Fz.k)(this, Wt), (0, Fz.k)(this, Xt, !0)), this._exposure = ((0, Fz.k)(this, Ot), (0, Fz.k)(this, ot, 1)), this._toneMappingEnabled = ((0, Fz.k)(this, vt), (0, Fz.k)(this, Ut, !1)), this._toneMappingType = ((0, Fz.k)(this, Kt), (0, Fz.k)(this, ut, zz.TONEMAPPING_STANDARD)), this._contrast = ((0, Fz.k)(this, Nt), (0, Fz.k)(this, bt, 1)), this._whiteBalanceEnabled = ((0, Fz.k)(this, wt), (0, Fz.k)(this, Dt, !1)), this._temperature = ((0, Fz.k)(this, gt), (0, Fz.k)(this, Ht, 6500)), this._tint = ((0, Fz.k)(this, Bt), (0, Fz.k)(this, Pt, 0)), this._whiteBalanceMatrix = ((0, Fz.k)(this, rt), null), this._whiteBalanceMatrixTemperature = null, this._whiteBalanceMatrixTint = null, this.vignetteStretch = (0, Fz.k)(this, Yt, 0), this.vignetteCenterX = ((0, Fz.k)(this, xt), (0, Fz.k)(this, mt, 0)), this.vignetteCenterY = ((0, Fz.k)(this, Jt), (0, Fz.k)(this, It, 0)), this.vignetteWeight = ((0, Fz.k)(this, Ct), (0, Fz.k)(this, et, 1.5)), this.vignetteColor = ((0, Fz.k)(this, Zt), (0, Fz.k)(this, Gt, new Oz.d(0, 0, 0, 0))), this.vignetteCameraFov = ((0, Fz.k)(this, Tt), (0, Fz.k)(this, ct, .5)), this._vignetteBlendMode = ((0, Fz.k)(this, jt), (0, Fz.k)(this, At, zz.VIGNETTEMODE_MULTIPLY)), this._vignetteEnabled = ((0, Fz.k)(this, yt), (0, Fz.k)(this, Mt, !1)), this._ditheringEnabled = ((0, Fz.k)(this, dt), (0, Fz.k)(this, ht, !1)), this._ditheringIntensity = ((0, Fz.k)(this, Qt), (0, Fz.k)(this, kt, 1 / 255)), this._skipFinalColorClamp = ((0, Fz.k)(this, it), (0, Fz.k)(this, Lt, !1)), this._applyByPostProcess = ((0, Fz.k)(this, lt), (0, Fz.k)(this, nt, !1)), this._isEnabled = ((0, Fz.k)(this, qt), (0, Fz.k)(this, St, !0)), this.outputTextureWidth = ((0, Fz.k)(this, Vt), (0, Fz.k)(this, Rt, 0)), this.outputTextureHeight = ((0, Fz.k)(this, pt), (0, Fz.k)(this, ft, 0)), this.onUpdateParameters = ((0, Fz.k)(this, Et), new Xz.c)
          }
          get colorCurvesEnabled() {
            return this._colorCurvesEnabled
          }
          set colorCurvesEnabled(zz) {
            this._colorCurvesEnabled !== zz && (this._colorCurvesEnabled = zz, this._updateParameters())
          }
          get colorGradingTexture() {
            return this._colorGradingTexture
          }
          set colorGradingTexture(zz) {
            this._colorGradingTexture !== zz && (this._colorGradingTexture = zz, this._updateParameters())
          }
          get colorGradingEnabled() {
            return this._colorGradingEnabled
          }
          set colorGradingEnabled(zz) {
            this._colorGradingEnabled !== zz && (this._colorGradingEnabled = zz, this._updateParameters())
          }
          get colorGradingWithGreenDepth() {
            return this._colorGradingWithGreenDepth
          }
          set colorGradingWithGreenDepth(zz) {
            this._colorGradingWithGreenDepth !== zz && (this._colorGradingWithGreenDepth = zz, this._updateParameters())
          }
          get colorGradingBGR() {
            return this._colorGradingBGR
          }
          set colorGradingBGR(zz) {
            this._colorGradingBGR !== zz && (this._colorGradingBGR = zz, this._updateParameters())
          }
          get exposure() {
            return this._exposure
          }
          set exposure(zz) {
            this._exposure !== zz && (this._exposure = zz, this._updateParameters())
          }
          get toneMappingEnabled() {
            return this._toneMappingEnabled
          }
          set toneMappingEnabled(zz) {
            this._toneMappingEnabled !== zz && (this._toneMappingEnabled = zz, this._updateParameters())
          }
          get toneMappingType() {
            return this._toneMappingType
          }
          set toneMappingType(zz) {
            this._toneMappingType !== zz && (this._toneMappingType = zz, this._updateParameters())
          }
          get contrast() {
            return this._contrast
          }
          set contrast(zz) {
            this._contrast !== zz && (this._contrast = zz, this._updateParameters())
          }
          get whiteBalanceEnabled() {
            return this._whiteBalanceEnabled
          }
          set whiteBalanceEnabled(zz) {
            this._whiteBalanceEnabled !== zz && (this._whiteBalanceEnabled = zz, this._updateParameters())
          }
          get temperature() {
            return this._temperature
          }
          set temperature(zz) {
            zz = Number.isNaN(zz) ? Kz : Math.max(zz, Kz), this._temperature !== zz && (this._temperature = zz, this._updateParameters())
          }
          get tint() {
            return this._tint
          }
          set tint(zz) {
            zz = (0, oz.Clamp)(zz, -150, uz), this._tint !== zz && (this._tint = zz, this._updateParameters())
          }
          _getWhiteBalanceMatrix() {
            return null !== this._whiteBalanceMatrix && this._whiteBalanceMatrixTemperature === this._temperature && this._whiteBalanceMatrixTint === this._tint || (this._whiteBalanceMatrixTemperature = this._temperature, this._whiteBalanceMatrixTint = this._tint, this._whiteBalanceMatrix = function(zz, tz) {
              const sz = gz(Nz(zz, tz), rz),
                Fz = Bz.multiply(sz).multiply(Pz);
              return vz.e.GetAsMatrix3x3(Fz)
            }(this._temperature, this._tint)), this._whiteBalanceMatrix
          }
          get vignetteCentreY() {
            return this.vignetteCenterY
          }
          set vignetteCentreY(zz) {
            this.vignetteCenterY = zz
          }
          get vignetteCentreX() {
            return this.vignetteCenterX
          }
          set vignetteCentreX(zz) {
            this.vignetteCenterX = zz
          }
          get vignetteBlendMode() {
            return this._vignetteBlendMode
          }
          set vignetteBlendMode(zz) {
            this._vignetteBlendMode !== zz && (this._vignetteBlendMode = zz, this._updateParameters())
          }
          get vignetteEnabled() {
            return this._vignetteEnabled
          }
          set vignetteEnabled(zz) {
            this._vignetteEnabled !== zz && (this._vignetteEnabled = zz, this._updateParameters())
          }
          get ditheringEnabled() {
            return this._ditheringEnabled
          }
          set ditheringEnabled(zz) {
            this._ditheringEnabled !== zz && (this._ditheringEnabled = zz, this._updateParameters())
          }
          get ditheringIntensity() {
            return this._ditheringIntensity
          }
          set ditheringIntensity(zz) {
            this._ditheringIntensity !== zz && (this._ditheringIntensity = zz, this._updateParameters())
          }
          get skipFinalColorClamp() {
            return this._skipFinalColorClamp
          }
          set skipFinalColorClamp(zz) {
            this._skipFinalColorClamp !== zz && (this._skipFinalColorClamp = zz, this._updateParameters())
          }
          get applyByPostProcess() {
            return this._applyByPostProcess
          }
          set applyByPostProcess(zz) {
            this._applyByPostProcess !== zz && (this._applyByPostProcess = zz, this._updateParameters())
          }
          get isEnabled() {
            return this._isEnabled
          }
          set isEnabled(zz) {
            this._isEnabled !== zz && (this._isEnabled = zz, this._updateParameters())
          }
          _updateParameters() {
            this.onUpdateParameters.notifyObservers(this)
          }
          getClassName() {
            return "ImageProcessingConfiguration"
          }
          prepareDefines(tz) {
            if ((arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) !== this.applyByPostProcess || !this._isEnabled) return tz.WHITEBALANCE = !1, tz.VIGNETTE = !1, tz.TONEMAPPING = 0, tz.CONTRAST = !1, tz.EXPOSURE = !1, tz.COLORCURVES = !1, tz.COLORGRADING = !1, tz.COLORGRADING3D = !1, tz.DITHER = !1, tz.IMAGEPROCESSING = !1, tz.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, void(tz.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess && this._isEnabled);
            if (tz.WHITEBALANCE = this._whiteBalanceEnabled, tz.VIGNETTE = this.vignetteEnabled, tz.VIGNETTEBLENDMODEMULTIPLY = this.vignetteBlendMode === zz._VIGNETTEMODE_MULTIPLY, tz.VIGNETTEBLENDMODEOPAQUE = !tz.VIGNETTEBLENDMODEMULTIPLY, this._toneMappingEnabled) switch (this._toneMappingType) {
              case zz.TONEMAPPING_KHR_PBR_NEUTRAL:
                tz.TONEMAPPING = 3;
                break;
              case zz.TONEMAPPING_ACES:
                tz.TONEMAPPING = 2;
                break;
              default:
                tz.TONEMAPPING = 1
            } else tz.TONEMAPPING = 0;
            tz.CONTRAST = 1 !== this.contrast, tz.EXPOSURE = 1 !== this.exposure, tz.COLORCURVES = this.colorCurvesEnabled && !!this.colorCurves, tz.COLORGRADING = this.colorGradingEnabled && !!this.colorGradingTexture, tz.COLORGRADING ? tz.COLORGRADING3D = this.colorGradingTexture.is3D : tz.COLORGRADING3D = !1, tz.SAMPLER3DGREENDEPTH = this.colorGradingWithGreenDepth, tz.SAMPLER3DBGRMAP = this.colorGradingBGR, tz.DITHER = this._ditheringEnabled, tz.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess, tz.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, tz.IMAGEPROCESSING = tz.WHITEBALANCE || tz.VIGNETTE || !!tz.TONEMAPPING || tz.CONTRAST || tz.EXPOSURE || tz.COLORCURVES || tz.COLORGRADING || tz.DITHER
          }
          isReady() {
            return !this.colorGradingEnabled || !this.colorGradingTexture || this.colorGradingTexture.isReady()
          }
          bind(zz, tz) {
            if (this._whiteBalanceEnabled && zz.setMatrix3x3("whiteBalanceMatrix", this._getWhiteBalanceMatrix()), this._colorCurvesEnabled && this.colorCurves && Jz(this.colorCurves, zz), this._vignetteEnabled || this._ditheringEnabled) {
              const sz = 1 / (this.outputTextureWidth || zz.FD().getRenderWidth()),
                Fz = 1 / (this.outputTextureHeight || zz.FD().getRenderHeight());
              if (zz.setFloat2("vInverseScreenSize", sz, Fz), this._ditheringEnabled && zz.setFloat("ditherIntensity", .5 * this._ditheringIntensity), this._vignetteEnabled) {
                const Wz = null != tz ? tz : Fz / sz;
                let Xz = Math.tan(.5 * this.vignetteCameraFov),
                  Oz = Xz * Wz;
                const oz = Math.sqrt(Oz * Xz);
                Oz = (0, Iz.i)(Oz, oz, this.vignetteStretch), Xz = (0, Iz.i)(Xz, oz, this.vignetteStretch), zz.setFloat4("vignetteSettings1", Oz, Xz, -Oz * this.vignetteCenterX, -Xz * this.vignetteCenterY);
                const vz = -2 * this.vignetteWeight;
                zz.setFloat4("vignetteSettings2", this.vignetteColor.r, this.vignetteColor.g, this.vignetteColor.b, vz)
              }
            }
            if (zz.setFloat("exposureLinear", this.exposure), zz.setFloat("contrast", this.contrast), this.colorGradingTexture) {
              zz.setTexture("txColorTransform", this.colorGradingTexture);
              const tz = this.colorGradingTexture.getSize().height;
              zz.setFloat4("colorTransformSettings", (tz - 1) / tz, .5 / tz, tz, this.colorGradingTexture.level)
            }
          }
          clone() {
            return Yz.e.Clone((() => new zz), this)
          }
          serialize() {
            return Yz.e.Serialize(this)
          }
          static get VIGNETTEMODE_MULTIPLY() {
            return this._VIGNETTEMODE_MULTIPLY
          }
          static get VIGNETTEMODE_OPAQUE() {
            return this._VIGNETTEMODE_OPAQUE
          }
        }, (() => {
          const Xz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          tz = [(0, Wz.n)()], sz = [(0, Wz.J)()], Uz = [(0, Wz.D)("colorGradingTexture")], bz = [(0, Wz.J)()], wz = [(0, Wz.J)()], Dz = [(0, Wz.J)()], Hz = [(0, Wz.J)()], xz = [(0, Wz.J)()], ez = [(0, Wz.J)()], Zz = [(0, Wz.J)()], Gz = [(0, Wz.J)()], Tz = [(0, Wz.J)()], cz = [(0, Wz.J)()], jz = [(0, Wz.J)()], Az = [(0, Wz.J)()], yz = [(0, Wz.J)()], Mz = [(0, Wz.J)()], dz = [(0, Wz.t)()], hz = [(0, Wz.J)()], Qz = [(0, Wz.J)()], kz = [(0, Wz.J)()], iz = [(0, Wz.J)()], Lz = [(0, Wz.J)()], lz = [(0, Wz.J)()], nz = [(0, Wz.J)()], az = [(0, Wz.J)()], qz = [(0, Wz.J)()], Sz = [(0, Wz.J)()], (0, Fz.h)(null, null, tz, {
            kind: "field",
            name: "colorCurves",
            static: !1,
            private: !1,
            access: {
              has: zz => "colorCurves" in zz,
              get: zz => zz.colorCurves,
              set: (zz, tz) => {
                zz.colorCurves = tz
              }
            },
            metadata: Xz
          }, Vz, Rz), (0, Fz.h)(null, null, sz, {
            kind: "field",
            name: "_colorCurvesEnabled",
            static: !1,
            private: !1,
            access: {
              has: zz => "_colorCurvesEnabled" in zz,
              get: zz => zz._colorCurvesEnabled,
              set: (zz, tz) => {
                zz._colorCurvesEnabled = tz
              }
            },
            metadata: Xz
          }, pz, fz), (0, Fz.h)(null, null, Uz, {
            kind: "field",
            name: "_colorGradingTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "_colorGradingTexture" in zz,
              get: zz => zz._colorGradingTexture,
              set: (zz, tz) => {
                zz._colorGradingTexture = tz
              }
            },
            metadata: Xz
          }, Ez, zt), (0, Fz.h)(null, null, bz, {
            kind: "field",
            name: "_colorGradingEnabled",
            static: !1,
            private: !1,
            access: {
              has: zz => "_colorGradingEnabled" in zz,
              get: zz => zz._colorGradingEnabled,
              set: (zz, tz) => {
                zz._colorGradingEnabled = tz
              }
            },
            metadata: Xz
          }, tt, st), (0, Fz.h)(null, null, wz, {
            kind: "field",
            name: "_colorGradingWithGreenDepth",
            static: !1,
            private: !1,
            access: {
              has: zz => "_colorGradingWithGreenDepth" in zz,
              get: zz => zz._colorGradingWithGreenDepth,
              set: (zz, tz) => {
                zz._colorGradingWithGreenDepth = tz
              }
            },
            metadata: Xz
          }, Ft, Wt), (0, Fz.h)(null, null, Dz, {
            kind: "field",
            name: "_colorGradingBGR",
            static: !1,
            private: !1,
            access: {
              has: zz => "_colorGradingBGR" in zz,
              get: zz => zz._colorGradingBGR,
              set: (zz, tz) => {
                zz._colorGradingBGR = tz
              }
            },
            metadata: Xz
          }, Xt, Ot), (0, Fz.h)(null, null, Hz, {
            kind: "field",
            name: "_exposure",
            static: !1,
            private: !1,
            access: {
              has: zz => "_exposure" in zz,
              get: zz => zz._exposure,
              set: (zz, tz) => {
                zz._exposure = tz
              }
            },
            metadata: Xz
          }, ot, vt), (0, Fz.h)(null, null, xz, {
            kind: "field",
            name: "_toneMappingEnabled",
            static: !1,
            private: !1,
            access: {
              has: zz => "_toneMappingEnabled" in zz,
              get: zz => zz._toneMappingEnabled,
              set: (zz, tz) => {
                zz._toneMappingEnabled = tz
              }
            },
            metadata: Xz
          }, Ut, Kt), (0, Fz.h)(null, null, ez, {
            kind: "field",
            name: "_toneMappingType",
            static: !1,
            private: !1,
            access: {
              has: zz => "_toneMappingType" in zz,
              get: zz => zz._toneMappingType,
              set: (zz, tz) => {
                zz._toneMappingType = tz
              }
            },
            metadata: Xz
          }, ut, Nt), (0, Fz.h)(null, null, Zz, {
            kind: "field",
            name: "_contrast",
            static: !1,
            private: !1,
            access: {
              has: zz => "_contrast" in zz,
              get: zz => zz._contrast,
              set: (zz, tz) => {
                zz._contrast = tz
              }
            },
            metadata: Xz
          }, bt, wt), (0, Fz.h)(null, null, Gz, {
            kind: "field",
            name: "_whiteBalanceEnabled",
            static: !1,
            private: !1,
            access: {
              has: zz => "_whiteBalanceEnabled" in zz,
              get: zz => zz._whiteBalanceEnabled,
              set: (zz, tz) => {
                zz._whiteBalanceEnabled = tz
              }
            },
            metadata: Xz
          }, Dt, gt), (0, Fz.h)(null, null, Tz, {
            kind: "field",
            name: "_temperature",
            static: !1,
            private: !1,
            access: {
              has: zz => "_temperature" in zz,
              get: zz => zz._temperature,
              set: (zz, tz) => {
                zz._temperature = tz
              }
            },
            metadata: Xz
          }, Ht, Bt), (0, Fz.h)(null, null, cz, {
            kind: "field",
            name: "_tint",
            static: !1,
            private: !1,
            access: {
              has: zz => "_tint" in zz,
              get: zz => zz._tint,
              set: (zz, tz) => {
                zz._tint = tz
              }
            },
            metadata: Xz
          }, Pt, rt), (0, Fz.h)(null, null, jz, {
            kind: "field",
            name: "vignetteStretch",
            static: !1,
            private: !1,
            access: {
              has: zz => "vignetteStretch" in zz,
              get: zz => zz.vignetteStretch,
              set: (zz, tz) => {
                zz.vignetteStretch = tz
              }
            },
            metadata: Xz
          }, Yt, xt), (0, Fz.h)(null, null, Az, {
            kind: "field",
            name: "vignetteCenterX",
            static: !1,
            private: !1,
            access: {
              has: zz => "vignetteCenterX" in zz,
              get: zz => zz.vignetteCenterX,
              set: (zz, tz) => {
                zz.vignetteCenterX = tz
              }
            },
            metadata: Xz
          }, mt, Jt), (0, Fz.h)(null, null, yz, {
            kind: "field",
            name: "vignetteCenterY",
            static: !1,
            private: !1,
            access: {
              has: zz => "vignetteCenterY" in zz,
              get: zz => zz.vignetteCenterY,
              set: (zz, tz) => {
                zz.vignetteCenterY = tz
              }
            },
            metadata: Xz
          }, It, Ct), (0, Fz.h)(null, null, Mz, {
            kind: "field",
            name: "vignetteWeight",
            static: !1,
            private: !1,
            access: {
              has: zz => "vignetteWeight" in zz,
              get: zz => zz.vignetteWeight,
              set: (zz, tz) => {
                zz.vignetteWeight = tz
              }
            },
            metadata: Xz
          }, et, Zt), (0, Fz.h)(null, null, dz, {
            kind: "field",
            name: "vignetteColor",
            static: !1,
            private: !1,
            access: {
              has: zz => "vignetteColor" in zz,
              get: zz => zz.vignetteColor,
              set: (zz, tz) => {
                zz.vignetteColor = tz
              }
            },
            metadata: Xz
          }, Gt, Tt), (0, Fz.h)(null, null, hz, {
            kind: "field",
            name: "vignetteCameraFov",
            static: !1,
            private: !1,
            access: {
              has: zz => "vignetteCameraFov" in zz,
              get: zz => zz.vignetteCameraFov,
              set: (zz, tz) => {
                zz.vignetteCameraFov = tz
              }
            },
            metadata: Xz
          }, ct, jt), (0, Fz.h)(null, null, Qz, {
            kind: "field",
            name: "_vignetteBlendMode",
            static: !1,
            private: !1,
            access: {
              has: zz => "_vignetteBlendMode" in zz,
              get: zz => zz._vignetteBlendMode,
              set: (zz, tz) => {
                zz._vignetteBlendMode = tz
              }
            },
            metadata: Xz
          }, At, yt), (0, Fz.h)(null, null, kz, {
            kind: "field",
            name: "_vignetteEnabled",
            static: !1,
            private: !1,
            access: {
              has: zz => "_vignetteEnabled" in zz,
              get: zz => zz._vignetteEnabled,
              set: (zz, tz) => {
                zz._vignetteEnabled = tz
              }
            },
            metadata: Xz
          }, Mt, dt), (0, Fz.h)(null, null, iz, {
            kind: "field",
            name: "_ditheringEnabled",
            static: !1,
            private: !1,
            access: {
              has: zz => "_ditheringEnabled" in zz,
              get: zz => zz._ditheringEnabled,
              set: (zz, tz) => {
                zz._ditheringEnabled = tz
              }
            },
            metadata: Xz
          }, ht, Qt), (0, Fz.h)(null, null, Lz, {
            kind: "field",
            name: "_ditheringIntensity",
            static: !1,
            private: !1,
            access: {
              has: zz => "_ditheringIntensity" in zz,
              get: zz => zz._ditheringIntensity,
              set: (zz, tz) => {
                zz._ditheringIntensity = tz
              }
            },
            metadata: Xz
          }, kt, it), (0, Fz.h)(null, null, lz, {
            kind: "field",
            name: "_skipFinalColorClamp",
            static: !1,
            private: !1,
            access: {
              has: zz => "_skipFinalColorClamp" in zz,
              get: zz => zz._skipFinalColorClamp,
              set: (zz, tz) => {
                zz._skipFinalColorClamp = tz
              }
            },
            metadata: Xz
          }, Lt, lt), (0, Fz.h)(null, null, nz, {
            kind: "field",
            name: "_applyByPostProcess",
            static: !1,
            private: !1,
            access: {
              has: zz => "_applyByPostProcess" in zz,
              get: zz => zz._applyByPostProcess,
              set: (zz, tz) => {
                zz._applyByPostProcess = tz
              }
            },
            metadata: Xz
          }, nt, qt), (0, Fz.h)(null, null, az, {
            kind: "field",
            name: "_isEnabled",
            static: !1,
            private: !1,
            access: {
              has: zz => "_isEnabled" in zz,
              get: zz => zz._isEnabled,
              set: (zz, tz) => {
                zz._isEnabled = tz
              }
            },
            metadata: Xz
          }, St, Vt), (0, Fz.h)(null, null, qz, {
            kind: "field",
            name: "outputTextureWidth",
            static: !1,
            private: !1,
            access: {
              has: zz => "outputTextureWidth" in zz,
              get: zz => zz.outputTextureWidth,
              set: (zz, tz) => {
                zz.outputTextureWidth = tz
              }
            },
            metadata: Xz
          }, Rt, pt), (0, Fz.h)(null, null, Sz, {
            kind: "field",
            name: "outputTextureHeight",
            static: !1,
            private: !1,
            access: {
              has: zz => "outputTextureHeight" in zz,
              get: zz => zz.outputTextureHeight,
              set: (zz, tz) => {
                zz.outputTextureHeight = tz
              }
            },
            metadata: Xz
          }, ft, Et), Xz && Object.defineProperty(zz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Xz
          })
        })(), zz.TONEMAPPING_STANDARD = 0, zz.TONEMAPPING_ACES = 1, zz.TONEMAPPING_KHR_PBR_NEUTRAL = 2, zz.PrepareUniforms = Cz.g, zz.PrepareSamplers = Cz.e, zz._VIGNETTEMODE_MULTIPLY = 0, zz._VIGNETTEMODE_OPAQUE = 1, zz
      })(),
      Gz = !1;

    function Tz(zz) {
      const tz = Yz.e.Parse((() => new Zz), zz, null, null);
      return void 0 !== zz.vignetteCentreX && (tz.vignetteCenterX = zz.vignetteCentreX), void 0 !== zz.vignetteCentreY && (tz.vignetteCenterY = zz.vignetteCentreY), tz
    }

    function cz() {
      Gz || (Gz = !0, Zz.Parse = Tz, Yz.e._ImageProcessingConfigurationParser = Tz, (0, ez.g)("BABYLON.ImageProcessingConfiguration", Zz))
    }
  },
  39280: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Xz
    });
    var Fz = sz(38097),
      Wz = sz(39264);
    class Xz {
      constructor(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Fz = arguments.length > 3 ? arguments[3] : void 0,
          Wz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Xz = arguments.length > 5 ? arguments[5] : void 0;
        this._uniformNames = [], this._valueCache = {}, this._engine = zz, this._noUBO = !zz.supportsUniformBuffers || Wz, this._dynamic = sz, this._name = Fz ?? "no-name", this._data = tz || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {}, this._uniformLocationPointer = 0, this._needSync = !1, this._dataGeneration = 0, this._trackUBOsInFrame = !1, (void 0 === Xz && this._engine._features.trackUbosInFrame || !0 === Xz) && (this._buffers = [], this._bufferIndex = -1, this._bufferUpdatedLastFrame = !1, this._createBufferOnWrite = !1, this._currentFrameId = 0, this._trackUBOsInFrame = !0, this._resetOwnerSlots()), this._noUBO ? (this.updateMatrix3x3 = this._updateMatrix3x3ForEffect, this.updateMatrix2x2 = this._updateMatrix2x2ForEffect, this.updateFloat = this._updateFloatForEffect, this.updateFloat2 = this._updateFloat2ForEffect, this.updateFloat3 = this._updateFloat3ForEffect, this.updateFloat4 = this._updateFloat4ForEffect, this.updateFloatArray = this._updateFloatArrayForEffect, this.updateArray = this._updateArrayForEffect, this.updateIntArray = this._updateIntArrayForEffect, this.updateUIntArray = this._updateUIntArrayForEffect, this.y5 = this._updateMatrixForEffect, this.updateMatrices = this._updateMatricesForEffect, this.updateVector3 = this._updateVector3ForEffect, this.updateVector4 = this._updateVector4ForEffect, this.updateColor3 = this._updateColor3ForEffect, this.updateColor4 = this._updateColor4ForEffect, this.updateDirectColor4 = this._updateDirectColor4ForEffect, this.updateInt = this._updateIntForEffect, this.updateInt2 = this._updateInt2ForEffect, this.updateInt3 = this._updateInt3ForEffect, this.updateInt4 = this._updateInt4ForEffect, this.updateUInt = this._updateUIntForEffect, this.updateUInt2 = this._updateUInt2ForEffect, this.updateUInt3 = this._updateUInt3ForEffect, this.updateUInt4 = this._updateUInt4ForEffect) : (this._engine._uniformBuffers.push(this), this.updateMatrix3x3 = this._updateMatrix3x3ForUniform, this.updateMatrix2x2 = this._updateMatrix2x2ForUniform, this.updateFloat = this._updateFloatForUniform, this.updateFloat2 = this._updateFloat2ForUniform, this.updateFloat3 = this._updateFloat3ForUniform, this.updateFloat4 = this._updateFloat4ForUniform, this.updateFloatArray = this._updateFloatArrayForUniform, this.updateArray = this._updateArrayForUniform, this.updateIntArray = this._updateIntArrayForUniform, this.updateUIntArray = this._updateUIntArrayForUniform, this.y5 = this._updateMatrixForUniform, this.updateMatrices = this._updateMatricesForUniform, this.updateVector3 = this._updateVector3ForUniform, this.updateVector4 = this._updateVector4ForUniform, this.updateColor3 = this._updateColor3ForUniform, this.updateColor4 = this._updateColor4ForUniform, this.updateDirectColor4 = this._updateDirectColor4ForUniform, this.updateInt = this._updateIntForUniform, this.updateInt2 = this._updateInt2ForUniform, this.updateInt3 = this._updateInt3ForUniform, this.updateInt4 = this._updateInt4ForUniform, this.updateUInt = this._updateUIntForUniform, this.updateUInt2 = this._updateUInt2ForUniform, this.updateUInt3 = this._updateUInt3ForUniform, this.updateUInt4 = this._updateUInt4ForUniform)
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
      _fillAlignment(zz) {
        let tz;
        if (tz = zz <= 2 ? zz : 4, this._uniformLocationPointer % tz !== 0) {
          const zz = this._uniformLocationPointer;
          this._uniformLocationPointer += tz - this._uniformLocationPointer % tz;
          const sz = this._uniformLocationPointer - zz;
          for (let tz = 0; tz < sz; tz++) this._data.push(0)
        }
      }
      addUniform(zz, tz) {
        let sz, Fz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (Fz > 0 && "number" === typeof tz && (this._uniformArraySizes[zz] = {
            strideSize: tz,
            arraySize: Fz
          }), void 0 === this._uniformLocations[zz] && (this._uniformNames.push(zz), !this._noUBO)) {
          if (Fz > 0) {
            if (tz instanceof Array) throw "addUniform should not be use with Array in UBO: " + zz;
            if (this._fillAlignment(4), 16 == tz) tz *= Fz;
            else {
              tz = tz * Fz + (4 - tz) * Fz
            }
            sz = [];
            for (let zz = 0; zz < tz; zz++) sz.push(0)
          } else {
            if (tz instanceof Array) sz = tz, tz = sz.length;
            else {
              sz = [];
              for (let zz = 0; zz < tz; zz++) sz.push(0)
            }
            this._fillAlignment(tz)
          }
          this._uniformSizes[zz] = tz, this._uniformLocations[zz] = this._uniformLocationPointer, this._uniformLocationPointer += tz;
          for (let zz = 0; zz < tz; zz++) this._data.push(sz[zz]);
          this._needSync = !0
        }
      }
      addMatrix(zz, tz) {
        this.addUniform(zz, Array.prototype.slice.call(tz.hsz()))
      }
      addFloat2(zz, tz, sz) {
        const Fz = [tz, sz];
        this.addUniform(zz, Fz)
      }
      addFloat3(zz, tz, sz, Fz) {
        const Wz = [tz, sz, Fz];
        this.addUniform(zz, Wz)
      }
      addColor3(zz, tz) {
        const sz = [tz.r, tz.g, tz.b];
        this.addUniform(zz, sz)
      }
      addColor4(zz, tz, sz) {
        const Fz = [tz.r, tz.g, tz.b, sz];
        this.addUniform(zz, Fz)
      }
      addVector3(zz, tz) {
        const sz = [tz.x, tz.y, tz.z];
        this.addUniform(zz, sz)
      }
      addMatrix3x3(zz) {
        this.addUniform(zz, 12)
      }
      addMatrix2x2(zz) {
        this.addUniform(zz, 8)
      }
      create() {
        this._noUBO || this._buffer || (this._fillAlignment(4), this._bufferData = new Float32Array(this._data), this._dataGeneration++, this._rebuild(), this._needSync = !0)
      }
      _getNamesDebug() {
        const zz = [];
        let tz = 0;
        for (const sz in this._uniformLocations)
          if (zz.push(sz), 10 === ++tz) break;
        return zz.join(",")
      }
      _rebuild() {
        !this._noUBO && this._bufferData && (this._dynamic ? this._buffer = this._engine.createDynamicUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()) : this._buffer = this._engine.createUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()), this._trackUBOsInFrame && (this._buffers.push([this._buffer, this._engine._features.checkUbosContentBeforeUpload ? this._bufferData.slice() : void 0]), this._bufferIndex = this._buffers.length - 1, this._createBufferOnWrite = !1))
      }
      _rebuildAfterContextLost() {
        this._trackUBOsInFrame && (this._buffers = [], this._currentFrameId = 0, this._resetOwnerSlots()), this._rebuild()
      }
      _resetOwnerSlots() {
        if (this._ownerListsBySlot)
          for (const zz of this._ownerListsBySlot.values()) this._removeOwnerBacklink(zz);
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
      set name(zz) {
        this._name = zz
      }
      get currentEffect() {
        return this._currentEffect
      }
      _buffersEqual(zz, tz) {
        for (let sz = 0; sz < zz.length; ++sz)
          if (zz[sz] !== tz[sz]) return !1;
        return !0
      }
      _copyBuffer(zz, tz) {
        for (let sz = 0; sz < zz.length; ++sz) tz[sz] = zz[sz]
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
      _updateOwnerKeyed(zz) {
        if (this._noUBO || !this._trackUBOsInFrame) return void this.update();
        this._buffer || this.create(), this._checkNewFrame();
        let tz = this._slotByOwner.get(zz);
        if (void 0 === tz && (tz = 0 === this._ownerCount && 1 === this._buffers.length && 0 === this._freeSlots.length ? 0 : this._takeFreeSlot(!0), this._slotByOwner.set(zz, tz), this._ownerCount++, zz._uniformBuffersWithOwnedSlot || (zz._uniformBuffersWithOwnedSlot = []), zz._uniformBuffersWithOwnedSlot.push(this), this._ownerListsBySlot.set(tz, zz._uniformBuffersWithOwnedSlot)), this._slotGeneration[tz] === this._dataGeneration) return this._bufferIndex = tz, this._buffer = this._buffers[tz][0], this.bindUniformBuffer(), this._slotFrameId[tz] = this._currentFrameId, this._needSync = !1, void(this._createBufferOnWrite = !1);
        const sz = this._buffers[tz][1];
        this._slotFrameId[tz] === this._currentFrameId && sz && !this._buffersEqual(this._bufferData, sz) && (tz = this._takeFreeSlot(!1)), this._bufferIndex = tz, this._buffer = this._buffers[tz][0], this.bindUniformBuffer();
        const Fz = this._buffers[tz][1];
        Fz && this._buffersEqual(this._bufferData, Fz) || (Fz && this._copyBuffer(this._bufferData, Fz), this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData)), this._slotFrameId[tz] = this._currentFrameId, this._slotGeneration[tz] = this._dataGeneration, this._needSync = !1, this._createBufferOnWrite = !1
      }
      _takeFreeSlot(zz) {
        for (let sz = 0; sz < this._freeSlots.length; ++sz) {
          const tz = this._freeSlots[sz];
          if (this._slotFrameId[tz] !== this._currentFrameId) return zz && (this._freeSlots[sz] = this._freeSlots[this._freeSlots.length - 1], this._freeSlots.pop()), tz
        }
        this._rebuild();
        const tz = this._buffers.length - 1;
        return zz || this._freeSlots.push(tz), tz
      }
      _releaseOwnerSlot(zz) {
        const tz = this._slotByOwner?.get(zz);
        if (void 0 === tz) return;
        this._slotByOwner.delete(zz);
        const sz = this._ownerListsBySlot.get(tz);
        sz && (this._removeOwnerBacklink(sz), this._ownerListsBySlot.delete(tz)), this._ownerCount--, this._freeSlots.push(tz)
      }
      _removeOwnerBacklink(zz) {
        const tz = zz.indexOf(this); - 1 !== tz && (zz[tz] = zz[zz.length - 1], zz.pop())
      }
      _createNewBuffer() {
        this._bufferIndex + 1 < this._buffers.length ? (this._bufferIndex++, this._buffer = this._buffers[this._bufferIndex][0], this._createBufferOnWrite = !1, this._needSync = !0) : this._rebuild()
      }
      _checkNewFrame() {
        this._trackUBOsInFrame && this._currentFrameId !== this._engine.frameId && (this._currentFrameId = this._engine.frameId, this._createBufferOnWrite = !1, this._buffers && this._buffers.length > 0 ? (1 === this._buffers.length ? this._needSync = !this._bufferUpdatedLastFrame : this._needSync = 0 !== this._bufferIndex, this._bufferIndex = 0, this._buffer = this._buffers[this._bufferIndex][0]) : this._bufferIndex = -1)
      }
      updateUniform(zz, tz, sz) {
        this._checkNewFrame();
        let Wz = this._uniformLocations[zz];
        if (void 0 === Wz) {
          if (this._buffer) return void Fz.e.Error("Cannot add an uniform after UBO has been created. uniformName=" + zz);
          this.addUniform(zz, sz), Wz = this._uniformLocations[zz]
        }
        if (this._buffer || this.create(), this._dynamic) {
          for (let zz = 0; zz < sz; zz++) this._bufferData[Wz + zz] = tz[zz];
          this._dataGeneration++
        } else {
          let zz = !1;
          for (let Fz = 0; Fz < sz; Fz++)(16 === sz && !this._engine._features.uniformBufferHardCheckMatrix || this._bufferData[Wz + Fz] !== Math.fround(tz[Fz])) && (zz = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[Wz + Fz] = tz[Fz]);
          this._needSync = this._needSync || zz, zz && this._dataGeneration++
        }
      }
      updateUniformArray(zz, tz, sz) {
        this._checkNewFrame();
        const Xz = this._uniformLocations[zz];
        if (void 0 === Xz) return void Fz.e.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
        this._buffer || this.create();
        const Oz = this._uniformArraySizes[zz];
        if (this._dynamic) {
          for (let zz = 0; zz < sz; zz++) this._bufferData[Xz + zz] = tz[zz];
          this._dataGeneration++
        } else {
          let zz = !1,
            Fz = 0,
            oz = 0;
          for (let vz = 0; vz < sz; vz++)
            if (this._bufferData[Xz + 4 * oz + Fz] !== Wz.j.FloatRound(tz[vz]) && (zz = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[Xz + 4 * oz + Fz] = tz[vz]), Fz++, Fz === Oz.strideSize) {
              for (; Fz < 4; Fz++) this._bufferData[Xz + 4 * oz + Fz] = 0;
              Fz = 0, oz++
            } this._needSync = this._needSync || zz, zz && this._dataGeneration++
        }
      }
      _cacheMatrix(zz, tz) {
        this._checkNewFrame();
        const sz = this._valueCache[zz],
          Fz = tz.updateFlag;
        return (void 0 === sz || sz !== Fz) && (this._valueCache[zz] = Fz, !0)
      }
      _updateMatrix3x3ForUniform(zz, tz) {
        for (let sz = 0; sz < 3; sz++) Xz._TempBuffer[4 * sz] = tz[3 * sz], Xz._TempBuffer[4 * sz + 1] = tz[3 * sz + 1], Xz._TempBuffer[4 * sz + 2] = tz[3 * sz + 2], Xz._TempBuffer[4 * sz + 3] = 0;
        this.updateUniform(zz, Xz._TempBuffer, 12)
      }
      _updateMatrix3x3ForEffect(zz, tz) {
        this._currentEffect.setMatrix3x3(zz, tz)
      }
      _updateMatrix2x2ForEffect(zz, tz) {
        this._currentEffect.setMatrix2x2(zz, tz)
      }
      _updateMatrix2x2ForUniform(zz, tz) {
        for (let sz = 0; sz < 2; sz++) Xz._TempBuffer[4 * sz] = tz[2 * sz], Xz._TempBuffer[4 * sz + 1] = tz[2 * sz + 1], Xz._TempBuffer[4 * sz + 2] = 0, Xz._TempBuffer[4 * sz + 3] = 0;
        this.updateUniform(zz, Xz._TempBuffer, 8)
      }
      _updateFloatForEffect(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setFloat(zz + sz, tz)
      }
      _updateFloatForUniform(zz, tz) {
        Xz._TempBuffer[0] = tz, this.updateUniform(zz, Xz._TempBuffer, 1)
      }
      _updateFloat2ForEffect(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setFloat2(zz + Fz, tz, sz)
      }
      _updateFloat2ForUniform(zz, tz, sz) {
        Xz._TempBuffer[0] = tz, Xz._TempBuffer[1] = sz, this.updateUniform(zz, Xz._TempBuffer, 2)
      }
      _updateFloat3ForEffect(zz, tz, sz, Fz) {
        let Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setFloat3(zz + Wz, tz, sz, Fz)
      }
      _updateFloat3ForUniform(zz, tz, sz, Fz) {
        Xz._TempBuffer[0] = tz, Xz._TempBuffer[1] = sz, Xz._TempBuffer[2] = Fz, this.updateUniform(zz, Xz._TempBuffer, 3)
      }
      _updateFloat4ForEffect(zz, tz, sz, Fz, Wz) {
        let Xz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setFloat4(zz + Xz, tz, sz, Fz, Wz)
      }
      _updateFloat4ForUniform(zz, tz, sz, Fz, Wz) {
        Xz._TempBuffer[0] = tz, Xz._TempBuffer[1] = sz, Xz._TempBuffer[2] = Fz, Xz._TempBuffer[3] = Wz, this.updateUniform(zz, Xz._TempBuffer, 4)
      }
      _updateFloatArrayForEffect(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        switch (this._uniformArraySizes[zz]?.strideSize) {
          case 2:
            this._currentEffect.setFloatArray2(zz + sz, tz);
            break;
          case 3:
            this._currentEffect.setFloatArray3(zz + sz, tz);
            break;
          case 4:
            this._currentEffect.setFloatArray4(zz + sz, tz);
            break;
          default:
            this._currentEffect.setFloatArray(zz + sz, tz)
        }
      }
      _updateFloatArrayForUniform(zz, tz) {
        this.updateUniformArray(zz, tz, tz.length)
      }
      _updateArrayForEffect(zz, tz) {
        this._currentEffect.setArray(zz, tz)
      }
      _updateArrayForUniform(zz, tz) {
        this.updateUniformArray(zz, tz, tz.length)
      }
      _updateIntArrayForEffect(zz, tz) {
        this._currentEffect.setIntArray(zz, tz)
      }
      _updateIntArrayForUniform(zz, tz) {
        Xz._TempBufferInt32View.set(tz), this.updateUniformArray(zz, Xz._TempBuffer, tz.length)
      }
      _updateUIntArrayForEffect(zz, tz) {
        this._currentEffect.setUIntArray(zz, tz)
      }
      _updateUIntArrayForUniform(zz, tz) {
        Xz._TempBufferUInt32View.set(tz), this.updateUniformArray(zz, Xz._TempBuffer, tz.length)
      }
      _updateMatrixForEffect(zz, tz) {
        this._currentEffect.setMatrix(zz, tz)
      }
      _updateMatrixForUniform(zz, tz) {
        this._cacheMatrix(zz, tz) && this.updateUniform(zz, tz.hsz(), 16)
      }
      _updateMatricesForEffect(zz, tz) {
        this._currentEffect.setMatrices(zz, tz)
      }
      _updateMatricesForUniform(zz, tz) {
        this.updateUniform(zz, tz, tz.length)
      }
      _updateVector3ForEffect(zz, tz) {
        this._currentEffect.setVector3(zz, tz)
      }
      _updateVector3ForUniform(zz, tz) {
        Xz._TempBuffer[0] = tz.x, Xz._TempBuffer[1] = tz.y, Xz._TempBuffer[2] = tz.z, this.updateUniform(zz, Xz._TempBuffer, 3)
      }
      _updateVector4ForEffect(zz, tz) {
        this._currentEffect.setVector4(zz, tz)
      }
      _updateVector4ForUniform(zz, tz) {
        Xz._TempBuffer[0] = tz.x, Xz._TempBuffer[1] = tz.y, Xz._TempBuffer[2] = tz.z, Xz._TempBuffer[3] = tz.w, this.updateUniform(zz, Xz._TempBuffer, 4)
      }
      _updateColor3ForEffect(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setColor3(zz + sz, tz)
      }
      _updateColor3ForUniform(zz, tz) {
        Xz._TempBuffer[0] = tz.r, Xz._TempBuffer[1] = tz.g, Xz._TempBuffer[2] = tz.b, this.updateUniform(zz, Xz._TempBuffer, 3)
      }
      _updateColor4ForEffect(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setColor4(zz + Fz, tz, sz)
      }
      _updateDirectColor4ForEffect(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setDirectColor4(zz + sz, tz)
      }
      _updateColor4ForUniform(zz, tz, sz) {
        Xz._TempBuffer[0] = tz.r, Xz._TempBuffer[1] = tz.g, Xz._TempBuffer[2] = tz.b, Xz._TempBuffer[3] = sz, this.updateUniform(zz, Xz._TempBuffer, 4)
      }
      _updateDirectColor4ForUniform(zz, tz) {
        Xz._TempBuffer[0] = tz.r, Xz._TempBuffer[1] = tz.g, Xz._TempBuffer[2] = tz.b, Xz._TempBuffer[3] = tz.a, this.updateUniform(zz, Xz._TempBuffer, 4)
      }
      _updateIntForEffect(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setInt(zz + sz, tz)
      }
      _updateIntForUniform(zz, tz) {
        Xz._TempBufferInt32View[0] = tz, this.updateUniform(zz, Xz._TempBuffer, 1)
      }
      _updateInt2ForEffect(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setInt2(zz + Fz, tz, sz)
      }
      _updateInt2ForUniform(zz, tz, sz) {
        Xz._TempBufferInt32View[0] = tz, Xz._TempBufferInt32View[1] = sz, this.updateUniform(zz, Xz._TempBuffer, 2)
      }
      _updateInt3ForEffect(zz, tz, sz, Fz) {
        let Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setInt3(zz + Wz, tz, sz, Fz)
      }
      _updateInt3ForUniform(zz, tz, sz, Fz) {
        Xz._TempBufferInt32View[0] = tz, Xz._TempBufferInt32View[1] = sz, Xz._TempBufferInt32View[2] = Fz, this.updateUniform(zz, Xz._TempBuffer, 3)
      }
      _updateInt4ForEffect(zz, tz, sz, Fz, Wz) {
        let Xz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setInt4(zz + Xz, tz, sz, Fz, Wz)
      }
      _updateInt4ForUniform(zz, tz, sz, Fz, Wz) {
        Xz._TempBufferInt32View[0] = tz, Xz._TempBufferInt32View[1] = sz, Xz._TempBufferInt32View[2] = Fz, Xz._TempBufferInt32View[3] = Wz, this.updateUniform(zz, Xz._TempBuffer, 4)
      }
      _updateUIntForEffect(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setUInt(zz + sz, tz)
      }
      _updateUIntForUniform(zz, tz) {
        Xz._TempBufferUInt32View[0] = tz, this.updateUniform(zz, Xz._TempBuffer, 1)
      }
      _updateUInt2ForEffect(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setUInt2(zz + Fz, tz, sz)
      }
      _updateUInt2ForUniform(zz, tz, sz) {
        Xz._TempBufferUInt32View[0] = tz, Xz._TempBufferUInt32View[1] = sz, this.updateUniform(zz, Xz._TempBuffer, 2)
      }
      _updateUInt3ForEffect(zz, tz, sz, Fz) {
        let Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setUInt3(zz + Wz, tz, sz, Fz)
      }
      _updateUInt3ForUniform(zz, tz, sz, Fz) {
        Xz._TempBufferUInt32View[0] = tz, Xz._TempBufferUInt32View[1] = sz, Xz._TempBufferUInt32View[2] = Fz, this.updateUniform(zz, Xz._TempBuffer, 3)
      }
      _updateUInt4ForEffect(zz, tz, sz, Fz, Wz) {
        let Xz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setUInt4(zz + Xz, tz, sz, Fz, Wz)
      }
      _updateUInt4ForUniform(zz, tz, sz, Fz, Wz) {
        Xz._TempBufferUInt32View[0] = tz, Xz._TempBufferUInt32View[1] = sz, Xz._TempBufferUInt32View[2] = Fz, Xz._TempBufferUInt32View[3] = Wz, this.updateUniform(zz, Xz._TempBuffer, 4)
      }
      setTexture(zz, tz) {
        this._currentEffect.setTexture(zz, tz)
      }
      setTextureArray(zz, tz) {
        this._currentEffect.setTextureArray(zz, tz)
      }
      bindTexture(zz, tz) {
        this._currentEffect._bindTexture(zz, tz)
      }
      updateUniformDirectly(zz, tz) {
        this.updateUniform(zz, tz, tz.length), this.update()
      }
      bindToEffect(zz, tz) {
        this._currentEffect = zz, this._currentEffectName = tz
      }
      bindUniformBuffer() {
        !this._noUBO && this._buffer && this._currentEffect && this._currentEffect.bindUniformBuffer(this._buffer, this._currentEffectName)
      }
      unbindEffect() {
        this._currentEffect = void 0, this._currentEffectName = void 0
      }
      setDataBuffer(zz) {
        if (!this._buffers) return this._buffer === zz;
        for (let tz = 0; tz < this._buffers.length; ++tz) {
          if (this._buffers[tz][0] === zz) return this._bufferIndex = tz, this._buffer = zz, this._createBufferOnWrite = !1, this._currentEffect = void 0, this._buffers.length > 1 && this._buffers[tz][1] && (this._bufferData.set(this._buffers[tz][1]), this._dataGeneration++), this._valueCache = {}, this._currentFrameId = this._engine.frameId, !0
        }
        return !1
      }
      has(zz) {
        return void 0 !== this._uniformLocations[zz]
      }
      dispose() {
        if (this._noUBO) return;
        const zz = this._engine._uniformBuffers,
          tz = zz.indexOf(this);
        if (-1 !== tz && (zz[tz] = zz[zz.length - 1], zz.pop()), this._trackUBOsInFrame && this._buffers) {
          this._resetOwnerSlots();
          for (let zz = 0; zz < this._buffers.length; ++zz) {
            const tz = this._buffers[zz][0];
            this._engine._releaseBuffer(tz)
          }
          this._buffers = [], this._buffer = null, this._bufferIndex = -1
        } else this._buffer && this._engine._releaseBuffer(this._buffer) && (this._buffer = null)
      }
    }
    Xz._MAX_UNIFORM_SIZE = 256, Xz._TempBuffer = new Float32Array(Xz._MAX_UNIFORM_SIZE), Xz._TempBufferInt32View = new Int32Array(Xz._TempBuffer.buffer), Xz._TempBufferUInt32View = new Uint32Array(Xz._TempBuffer.buffer)
  },
  39097: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Wz
    });
    var Fz = sz(39106);
    class Wz extends Fz.c {
      constructor(zz) {
        super(), this._buffer = zz
      }
      get underlyingResource() {
        return this._buffer
      }
    }
  },
  39177: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => vz,
      f: () => Uz
    });
    const Fz = "__bjs_serializable__",
      Wz = new WeakMap;

    function Xz(zz, tz) {
      return Object.prototype.hasOwnProperty.call(zz, tz)
    }
    const Oz = function() {
      let zz = Symbol.metadata;
      return zz || (zz = Symbol("Symbol.metadata"), Object.defineProperty(Symbol, "metadata", {
        configurable: !0,
        writable: !0,
        value: zz
      })), zz
    }();

    function oz(zz) {
      return "function" === typeof zz ? zz : zz?.constructor
    }

    function vz(zz) {
      if (!zz) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(Oz)}) polyfill must run before decorated classes are evaluated.`);
      return Xz(zz, Fz) || (zz[Fz] = {}), zz[Fz]
    }

    function Uz(zz) {
      const tz = oz(zz),
        sz = tz ? tz[Oz] : void 0;
      if (!sz) return {};
      const vz = Wz.get(sz);
      if (vz) return vz;
      const Uz = {},
        Kz = [];
      let uz = sz;
      for (; uz;) Kz.push(uz), uz = Object.getPrototypeOf(uz);
      for (const Wz of Kz)
        if (Xz(Wz, Fz)) {
          const zz = Wz[Fz];
          for (const tz in zz) Uz[tz] = zz[tz]
        } return Wz.set(sz, Uz), Uz
    }
  },
  39170: (zz, tz, sz) => {
    sz.d(tz, {
      D: () => oz,
      E: () => Kz,
      H: () => uz,
      J: () => Oz,
      e: () => Pz,
      i: () => Xz,
      m: () => Bz,
      n: () => bz,
      p: () => vz,
      t: () => wz,
      u: () => Uz,
      w: () => gz,
      x: () => Nz,
      z: () => Dz
    });
    var Fz = sz(39177);

    function Wz(zz, tz) {
      return (sz, Wz) => {
        if (!Wz.metadata) return;
        const Xz = String(Wz.name),
          Oz = (0, Fz.e)(Wz.metadata);
        Oz[Xz] || (Oz[Xz] = {
          type: zz,
          sourceName: tz
        })
      }
    }

    function Xz(zz) {
      return function(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (sz, Fz) => {
          const Wz = tz || "_" + String(Fz.name);
          return {
            init(zz) {
              return void 0 === zz && Wz in this || (this[Wz] = zz), zz
            },
            get() {
              return this[Wz]
            },
            set(tz) {
              "function" === typeof this[Wz]?.equals && this[Wz].equals(tz) || this[Wz] !== tz && (this[Wz] = tz, this[zz]())
            }
          }
        }
      }(zz, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function Oz(zz) {
      return Wz(0, zz)
    }

    function oz(zz) {
      return Wz(1, zz)
    }

    function vz(zz) {
      return Wz(2, zz)
    }

    function Uz(zz) {
      return Wz(3, zz)
    }

    function Kz(zz) {
      return Wz(4, zz)
    }

    function uz(zz) {
      return Wz(5, zz)
    }

    function Nz(zz) {
      return Wz(6, zz)
    }

    function bz(zz) {
      return Wz(7, zz)
    }

    function wz(zz) {
      return Wz(8, zz)
    }

    function Dz(zz) {
      return Wz(10, zz)
    }

    function gz(zz) {
      return Wz(12, zz)
    }

    function Hz(zz, tz, sz) {
      const Fz = String(tz.name);
      let Wz = null;
      const Xz = function() {
        if (null === Wz) {
          Wz = zz, "undefined" !== typeof _native && _native[Fz] && (Wz = sz(_native[Fz], zz));
          const Oz = this && (tz.static ? this : Object.getPrototypeOf(this));
          Oz?.[Fz] === Xz && (Oz[Fz] = Wz)
        }
        for (var Oz = arguments.length, oz = new Array(Oz), vz = 0; vz < Oz; vz++) oz[vz] = arguments[vz];
        return Wz.apply(this, oz)
      };
      return Xz
    }

    function Bz(zz, tz) {
      return Hz(zz, tz, (zz => zz))
    }

    function Pz(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return (sz, Fz) => {
        const Wz = tz || "_" + String(Fz.name);
        return {
          get() {
            return this[Wz]?.value
          },
          set(tz) {
            "function" === typeof this[Wz]?.value?.equals && this[Wz].value.equals(tz) || this[Wz].value !== tz && (this[Wz].value = tz, this[zz]())
          }
        }
      }
    }
    Bz.filter = function(zz) {
      return (tz, sz) => Hz(tz, sz, ((tz, sz) => function() {
        for (var Fz = arguments.length, Wz = new Array(Fz), Xz = 0; Xz < Fz; Xz++) Wz[Xz] = arguments[Xz];
        return zz(...Wz) ? tz(...Wz) : sz.apply(this, Wz)
      }))
    }
  },
  39181: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Uz
    });
    var Fz = sz(39065),
      Wz = sz(39185),
      Xz = sz(36654),
      Oz = sz(36475),
      oz = sz(39177);
    const vz = function(zz, tz, sz) {
      let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Xz = zz();
      Wz.e && Wz.e.HasTags(tz) && Wz.e.AddTagsTo(Xz, Wz.e.GetTags(tz, !0));
      const Oz = (0, oz.f)(Xz),
        vz = {};
      for (const Wz in Oz) {
        const zz = Oz[Wz],
          oz = tz[Wz],
          Kz = zz.type;
        if (void 0 !== oz && null !== oz && ("uniqueId" !== Wz || Uz.AllowLoadingUniqueId)) switch (Kz) {
          case 0:
          case 6:
          case 9:
          case 11:
            "function" === typeof oz.slice ? Xz[Wz] = oz.slice() : Xz[Wz] = oz;
            break;
          case 1:
            Fz.cloneTexturesOnlyOnce && vz[oz.uniqueId] ? Xz[Wz] = vz[oz.uniqueId] : (Xz[Wz] = sz || oz.isRenderTarget ? oz : oz.clone(), vz[oz.uniqueId] = Xz[Wz]);
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
            Xz[Wz] = sz ? oz : oz.clone()
        }
      }
      return Xz
    };
    class Uz {
      static AppendSerializedAnimations(zz, tz) {
        if (zz.animations) {
          tz.animations = [];
          for (let sz = 0; sz < zz.animations.length; sz++) {
            const Fz = zz.animations[sz];
            tz.animations.push(Fz.serialize())
          }
        }
      }
      static Serialize(zz, tz) {
        tz || (tz = {}), Wz.e && (tz.tags = Wz.e.GetTags(zz));
        const sz = (0, oz.f)(zz);
        for (const Fz in sz) {
          const Wz = sz[Fz],
            Xz = Wz.sourceName || Fz,
            Oz = Wz.type,
            oz = zz[Fz];
          if (void 0 !== oz && null !== oz && ("uniqueId" !== Fz || Uz.AllowLoadingUniqueId)) switch (Oz) {
            case 0:
              Array.isArray(oz) ? tz[Xz] = oz.slice() : tz[Xz] = oz;
              break;
            case 1:
            case 3:
            case 7:
            case 9:
              tz[Xz] = oz.serialize();
              break;
            case 2:
            case 4:
            case 5:
            case 8:
            case 10:
            case 12:
            case 13:
              tz[Xz] = oz.hsz();
              break;
            case 6:
            case 11:
              tz[Xz] = oz.id
          }
        }
        return tz
      }
      static ParseProperties(zz, tz, sz, Fz) {
        Fz || (Fz = "");
        const Wz = (0, oz.f)(tz);
        for (const oz in Wz) {
          const vz = Wz[oz],
            Kz = zz[vz.sourceName || oz],
            uz = vz.type;
          if (void 0 !== Kz && null !== Kz && ("uniqueId" !== oz || Uz.AllowLoadingUniqueId)) {
            const zz = tz;
            switch (uz) {
              case 0:
                zz[oz] = Kz;
                break;
              case 1:
                sz && (zz[oz] = Uz._TextureParser(Kz, sz, Fz));
                break;
              case 2:
                zz[oz] = Xz.c.FromArray(Kz);
                break;
              case 3:
                zz[oz] = Uz._FresnelParametersParser(Kz);
                break;
              case 4:
                zz[oz] = Oz.n.FromArray(Kz);
                break;
              case 5:
                zz[oz] = Oz.p.FromArray(Kz);
                break;
              case 6:
                sz && (zz[oz] = sz.getLastMeshById(Kz));
                break;
              case 7:
                zz[oz] = Uz._ColorCurvesParser(Kz);
                break;
              case 8:
                zz[oz] = Xz.d.FromArray(Kz);
                break;
              case 9:
                zz[oz] = Uz._ImageProcessingConfigurationParser(Kz);
                break;
              case 10:
                zz[oz] = Oz.h.FromArray(Kz);
                break;
              case 11:
                sz && (zz[oz] = sz.getCameraById(Kz));
                break;
              case 12:
                zz[oz] = Oz.e.FromArray(Kz);
                break;
              case 13:
                zz[oz] = Oz.q.FromArray(Kz)
            }
          }
        }
      }
      static Parse(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Xz = zz();
        return Wz.e && Wz.e.AddTagsTo(Xz, tz.tags), Uz.ParseProperties(tz, Xz, sz, Fz), Xz
      }
      static Clone(zz, tz) {
        return vz(zz, tz, !1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
      }
      static Instanciate(zz, tz) {
        return vz(zz, tz, !0)
      }
    }
    Uz.AllowLoadingUniqueId = !1, Uz._ImageProcessingConfigurationParser = zz => {
      throw (0, Fz.i)("ImageProcessingConfiguration")
    }, Uz._FresnelParametersParser = zz => {
      throw (0, Fz.i)("FresnelParameters")
    }, Uz._ColorCurvesParser = zz => {
      throw (0, Fz.i)("ColorCurves")
    }, Uz._TextureParser = (zz, tz, sz) => {
      throw (0, Fz.i)("Texture")
    }
  },
  39121: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Wz
    });
    var Fz = sz(39079);
    class Wz {
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
        this._totalValueCount++, this._current = 0, this._hasCurrentValue = Wz.Enabled, this._lastSecValueCount++
      }
      addCount(zz, tz) {
        Wz.Enabled && (this._current += zz, this._hasCurrentValue = !0, tz && this._fetchResult())
      }
      beginMonitoring() {
        Wz.Enabled && (this._startMonitoringTime = Fz.b.Now)
      }
      endMonitoring() {
        let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (!Wz.Enabled) return;
        zz && this.fetchNewFrame();
        const tz = Fz.b.Now;
        this._current = tz - this._startMonitoringTime, this._hasCurrentValue = !0, zz && this._fetchResult()
      }
      rY() {
        this._fetchResult()
      }
      _fetchResult() {
        if (!this._hasCurrentValue) return;
        this._totalAccumulated += this._current, this._lastSecAccumulated += this._current, this._hasResult ? (this._min = Math.min(this._min, this._current), this._max = Math.max(this._max, this._current)) : (this._min = this._current, this._max = this._current, this._hasResult = !0), this._average = this._totalAccumulated / this._totalValueCount;
        const zz = Fz.b.Now;
        zz - this._lastSecTime > 1e3 && (this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount, this._lastSecTime = zz, this._lastSecAccumulated = 0, this._lastSecValueCount = 0)
      }
    }
    Wz.Enabled = !0
  },
  39270: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Wz,
      h: () => Fz
    });
    class Fz {
      constructor(zz) {
        this.length = 0, this.data = new Array(zz), this._id = Fz._GlobalId++
      }
      push(zz) {
        this.data[this.length++] = zz, this.length > this.data.length && (this.data.length *= 2)
      }
      forEach(zz) {
        for (let tz = 0; tz < this.length; tz++) zz(this.data[tz])
      }
      sort(zz) {
        this.data.sort(zz)
      }
      reset() {
        this.length = 0
      }
      dispose() {
        this.reset(), this.data && (this.data.length = 0)
      }
      concat(zz) {
        if (0 !== zz.length) {
          this.length + zz.length > this.data.length && (this.data.length = 2 * (this.length + zz.length));
          for (let tz = 0; tz < zz.length; tz++) this.data[this.length++] = (zz.data || zz)[tz]
        }
      }
      indexOf(zz) {
        const tz = this.data.indexOf(zz);
        return tz >= this.length ? -1 : tz
      }
      contains(zz) {
        return -1 !== this.indexOf(zz)
      }
    }
    Fz._GlobalId = 0;
    class Wz extends Fz {
      constructor() {
        super(...arguments), this._duplicateId = 0
      }
      push(zz) {
        super.push(zz), zz.__smartArrayFlags || (zz.__smartArrayFlags = {}), zz.__smartArrayFlags[this._id] = this._duplicateId
      }
      pushNoDuplicate(zz) {
        return (!zz.__smartArrayFlags || zz.__smartArrayFlags[this._id] !== this._duplicateId) && (this.push(zz), !0)
      }
      reset() {
        super.reset(), this._duplicateId++
      }
      concatWithNoDuplicate(zz) {
        if (0 !== zz.length) {
          this.length + zz.length > this.data.length && (this.data.length = 2 * (this.length + zz.length));
          for (let tz = 0; tz < zz.length; tz++) {
            const sz = (zz.data || zz)[tz];
            this.pushNoDuplicate(sz)
          }
        }
      }
    }
  },
  39185: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Wz
    });
    class Fz {
      static Eval(zz, tz) {
        return "true" === (zz = zz.match(/\([^()]*\)/g) ? zz.replace(/\([^()]*\)/g, (zz => (zz = zz.slice(1, zz.length - 1), Fz._HandleParenthesisContent(zz, tz)))) : Fz._HandleParenthesisContent(zz, tz)) || "false" !== zz && Fz.Eval(zz, tz)
      }
      static _HandleParenthesisContent(zz, tz) {
        let sz;
        tz = tz || (zz => "true" === zz);
        const Wz = zz.split("||");
        for (const Xz in Wz)
          if (Object.prototype.hasOwnProperty.call(Wz, Xz)) {
            let zz = Fz._SimplifyNegation(Wz[Xz].trim());
            const Oz = zz.split("&&");
            if (Oz.length > 1)
              for (let Wz = 0; Wz < Oz.length; ++Wz) {
                const Xz = Fz._SimplifyNegation(Oz[Wz].trim());
                if (sz = "true" !== Xz && "false" !== Xz ? "!" === Xz[0] ? !tz(Xz.substring(1)) : tz(Xz) : "true" === Xz, !sz) {
                  zz = "false";
                  break
                }
              }
            if (sz || "true" === zz) {
              sz = !0;
              break
            }
            sz = "true" !== zz && "false" !== zz ? "!" === zz[0] ? !tz(zz.substring(1)) : tz(zz) : "true" === zz
          } return sz ? "true" : "false"
      }
      static _SimplifyNegation(zz) {
        return "!true" === (zz = (zz = zz.replace(/^[\s!]+/, (zz => (zz = zz.replace(/[\s]/g, (() => ""))).length % 2 ? "!" : ""))).trim()) ? zz = "false" : "!false" === zz && (zz = "true"), zz
      }
    }
    class Wz {
      static EnableFor(zz) {
        zz._tags = zz._tags || {}, zz.hasTags = () => Wz.HasTags(zz), zz.addTags = tz => Wz.AddTagsTo(zz, tz), zz.removeTags = tz => Wz.RemoveTagsFrom(zz, tz), zz.matchesTagsQuery = tz => Wz.MatchesQuery(zz, tz)
      }
      static DisableFor(zz) {
        delete zz._tags, delete zz.hasTags, delete zz.addTags, delete zz.removeTags, delete zz.matchesTagsQuery
      }
      static HasTags(zz) {
        if (!zz._tags) return !1;
        const tz = zz._tags;
        for (const sz in tz)
          if (Object.prototype.hasOwnProperty.call(tz, sz)) return !0;
        return !1
      }
      static GetTags(zz) {
        let tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!zz._tags) return null;
        if (tz) {
          const tz = [];
          for (const sz in zz._tags) Object.prototype.hasOwnProperty.call(zz._tags, sz) && !0 === zz._tags[sz] && tz.push(sz);
          return tz.join(" ")
        }
        return zz._tags
      }
      static AddTagsTo(zz, tz) {
        if (!tz) return;
        if ("string" !== typeof tz) return;
        const sz = tz.split(" ");
        for (const Fz of sz) Wz._AddTagTo(zz, Fz)
      }
      static _AddTagTo(zz, tz) {
        "" !== (tz = tz.trim()) && "true" !== tz && "false" !== tz && (tz.match(/[\s]/) || tz.match(/^([!]|([|]|[&]){2})/) || (Wz.EnableFor(zz), zz._tags[tz] = !0))
      }
      static RemoveTagsFrom(zz, tz) {
        if (!Wz.HasTags(zz)) return;
        const sz = tz.split(" ");
        for (const Fz in sz) Wz._RemoveTagFrom(zz, sz[Fz])
      }
      static _RemoveTagFrom(zz, tz) {
        delete zz._tags[tz]
      }
      static MatchesQuery(zz, tz) {
        return void 0 === tz || ("" === tz ? Wz.HasTags(zz) : Fz.Eval(tz, (tz => Wz.HasTags(zz) && zz._tags[tz])))
      }
    }
  },
  39299: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Xz
    });
    var Fz = sz(39293),
      Wz = sz(36505);
    class Xz {
      constructor(zz) {
        this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new Wz.c, this._scene = zz
      }
      _prepareBuffers() {
        if (this._vertexBuffers[Fz.m.PositionKind]) return;
        const zz = [];
        zz.push(1, 1), zz.push(-1, 1), zz.push(-1, -1), zz.push(1, -1), this._vertexBuffers[Fz.m.PositionKind] = new Fz.m(this._scene.FD(), zz, Fz.m.PositionKind, !1, !1, 2), this._buildIndexBuffer()
      }
      _buildIndexBuffer() {
        const zz = [];
        zz.push(0), zz.push(1), zz.push(2), zz.push(0), zz.push(2), zz.push(3), this._indexBuffer = this._scene.FD().createIndexBuffer(zz)
      }
      _getActivePostProcesses(zz) {
        const tz = this._activePostProcesses;
        tz.length = 0;
        for (let sz = 0; sz < zz.length; sz++) {
          const Fz = zz[sz];
          Fz && tz.push(Fz)
        }
        return tz
      }
      _rebuild() {
        const zz = this._vertexBuffers[Fz.m.PositionKind];
        zz && (zz._rebuild(), this._buildIndexBuffer())
      }
      _prepareFrame() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const sz = this._scene.activeCamera;
        return !!sz && (tz = tz || this._getActivePostProcesses(sz._postProcesses), !(!tz || 0 === tz.length || !this._scene.postProcessesEnabled) && (tz[0].activate(sz, zz, null !== tz && void 0 !== tz), !0))
      }
      directRender(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          Xz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Oz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : zz.length;
        const oz = this._scene.FD();
        for (let vz = 0; vz < Oz; vz++) {
          vz < zz.length - 1 ? zz[vz + 1].activate(this._scene.activeCamera || this._scene, tz?.texture) : (tz ? oz.bindFramebuffer(tz, Fz, void 0, void 0, sz, Wz) : Xz || oz.restoreDefaultFramebuffer(), oz._debugInsertMarker?.(`post process ${zz[vz].name} output`));
          const Oz = zz[vz],
            Uz = Oz.apply();
          Uz && (Oz.onBeforeRenderObservable.notifyObservers(Uz), this._prepareBuffers(), oz.bindBuffers(this._vertexBuffers, this._indexBuffer, Uz), oz.drawElementsType(0, 0, 6), Oz.onAfterRenderObservable.notifyObservers(Uz))
        }
        oz.setDepthBuffer(!0), oz.setDepthWrite(!0)
      }
      _finalizeFrame(zz, tz, sz, Fz) {
        let Wz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Xz = this._scene.activeCamera;
        if (!Xz) return;
        if (this.onBeforeRenderObservable.notifyObservers(this), 0 === (Fz = Fz || this._getActivePostProcesses(Xz._postProcesses)).length || !this._scene.postProcessesEnabled) return;
        const Oz = this._scene.FD();
        for (let oz = 0, vz = Fz.length; oz < vz; oz++) {
          const Uz = Fz[oz];
          if (oz < vz - 1 ? Uz._outputTexture = Fz[oz + 1].activate(Xz, tz?.texture) : (tz ? (Oz.bindFramebuffer(tz, sz, void 0, void 0, Wz), Uz._outputTexture = tz) : (Oz.restoreDefaultFramebuffer(), Uz._outputTexture = null), Oz._debugInsertMarker?.(`post process ${Fz[oz].name} output`)), zz) break;
          const Kz = Uz.apply();
          Kz && (Uz.onBeforeRenderObservable.notifyObservers(Kz), this._prepareBuffers(), Oz.bindBuffers(this._vertexBuffers, this._indexBuffer, Kz), Oz.drawElementsType(0, 0, 6), Uz.onAfterRenderObservable.notifyObservers(Kz))
        }
        Oz.setDepthBuffer(!0), Oz.setDepthWrite(!0), Oz.setAlphaMode(0)
      }
      dispose() {
        const zz = this._vertexBuffers[Fz.m.PositionKind];
        zz && (zz.dispose(), this._vertexBuffers[Fz.m.PositionKind] = null), this._indexBuffer && (this._scene.FD()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
      }
    }
  },
  39314: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Xz
    });
    var Fz = sz(39270),
      Wz = sz(36475);
    class Xz {
      set opaqueSortCompareFn(zz) {
        this._opaqueSortCompareFn = zz || Xz.PainterSortCompare, this._renderOpaque = this._renderOpaqueSorted
      }
      set alphaTestSortCompareFn(zz) {
        this._alphaTestSortCompareFn = zz || Xz.PainterSortCompare, this._renderAlphaTest = this._renderAlphaTestSorted
      }
      set transparentSortCompareFn(zz) {
        this._transparentSortCompareFn = zz || Xz.defaultTransparentSortCompare, this._renderTransparent = this._renderTransparentSorted
      }
      constructor(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Wz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Xz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        this.index = zz, this._opaqueSubMeshes = new Fz.h(256), this._transparentSubMeshes = new Fz.h(256), this._alphaTestSubMeshes = new Fz.h(256), this._depthOnlySubMeshes = new Fz.h(256), this._particleSystems = new Fz.h(256), this._spriteManagers = new Fz.h(256), this._empty = !0, this._edgesRenderers = new Fz.e(16), this.disableDepthPrePass = !1, this._scene = tz, this.opaqueSortCompareFn = sz, this.alphaTestSortCompareFn = Wz, this.transparentSortCompareFn = Xz
      }
      render(zz, tz, sz, Fz) {
        let Wz = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Xz = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Oz = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          oz = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          vz = arguments.length > 8 ? arguments[8] : void 0;
        if (zz) return void zz(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
        const Uz = this._scene.FD();
        Wz && 0 !== this._depthOnlySubMeshes.length && (Uz.setColorWrite(!1), this._renderAlphaTest(this._depthOnlySubMeshes), Uz.setColorWrite(!0)), Xz && 0 !== this._opaqueSubMeshes.length && this._renderOpaque(this._opaqueSubMeshes), Oz && 0 !== this._alphaTestSubMeshes.length && this._renderAlphaTest(this._alphaTestSubMeshes);
        const Kz = Uz.getStencilBuffer();
        if (Uz.setStencilBuffer(!1), tz && this._renderSprites(), sz && this._renderParticles(Fz), this.onBeforeTransparentRendering && this.onBeforeTransparentRendering(), oz && (vz || 0 !== this._transparentSubMeshes.length || this._scene.useOrderIndependentTransparency)) {
          if (Uz.setStencilBuffer(Kz), vz) vz(this._transparentSubMeshes, this);
          else if (this._scene.useOrderIndependentTransparency) {
            const zz = this._scene.depthPeelingRenderer.render(this._transparentSubMeshes);
            zz.length && this._renderTransparent(zz)
          } else this._renderTransparent(this._transparentSubMeshes);
          Uz.setAlphaMode(0)
        }
        if (Uz.setStencilBuffer(!1), Xz && this._edgesRenderers.length) {
          for (let zz = 0; zz < this._edgesRenderers.length; zz++) this._edgesRenderers.data[zz].render();
          Uz.setAlphaMode(0)
        }
        Uz.setStencilBuffer(Kz)
      }
      _renderOpaqueSorted(zz) {
        Xz._RenderSorted(zz, this._opaqueSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderAlphaTestSorted(zz) {
        Xz._RenderSorted(zz, this._alphaTestSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderTransparentSorted(zz) {
        Xz._RenderSorted(zz, this._transparentSortCompareFn, this._scene.activeCamera, !0, this.disableDepthPrePass)
      }
      static _RenderSorted(zz, tz, sz, Fz, Oz) {
        let oz, vz = 0;
        const Uz = sz ? sz.globalPosition : Xz._ZeroVector;
        if (Fz && tz !== Xz.PainterSortCompare)
          for (; vz < zz.length; vz++) oz = zz.data[vz], oz._alphaIndex = oz.getMesh().alphaIndex, oz._distanceToCamera = Wz.p.Distance(oz.rC().uFz.centerWorld, Uz);
        const Kz = zz.length === zz.data.length ? zz.data : zz.data.slice(0, zz.length);
        tz && Kz.sort(tz);
        const uz = Kz[0].getMesh().aJ();
        for (vz = 0; vz < Kz.length; vz++) {
          if (oz = Kz[vz], uz._activeMeshesFrozenButKeepClipping && !oz.isInFrustum(uz._frustumPlanes)) continue;
          let zz = !1;
          if (Fz) {
            const tz = oz.vD();
            if (tz && tz.needDepthPrePass && !Oz) {
              zz = !0;
              const sz = tz.aJ().FD();
              sz.setColorWrite(!1), sz.setAlphaMode(0), oz.render(!1), sz.setColorWrite(!0)
            }
          }
          const tz = oz._renderingMesh;
          !zz && tz._renderRunFollower(oz, Fz) || oz.render(Fz)
        }
      }
      static defaultTransparentSortCompare(zz, tz) {
        return zz._alphaIndex > tz._alphaIndex ? 1 : zz._alphaIndex < tz._alphaIndex ? -1 : Xz.backToFrontSortCompare(zz, tz)
      }
      static backToFrontSortCompare(zz, tz) {
        return zz._distanceToCamera < tz._distanceToCamera ? 1 : zz._distanceToCamera > tz._distanceToCamera ? -1 : 0
      }
      static frontToBackSortCompare(zz, tz) {
        return zz._distanceToCamera < tz._distanceToCamera ? -1 : zz._distanceToCamera > tz._distanceToCamera ? 1 : 0
      }
      static PainterSortCompare(zz, tz) {
        const sz = zz.getMesh(),
          Fz = tz.getMesh();
        return sz.material && Fz.material ? sz.material.uniqueId - Fz.material.uniqueId : sz.uniqueId - Fz.uniqueId
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
      dispatch(zz, tz, sz) {
        void 0 === tz && (tz = zz.getMesh()), void 0 === sz && (sz = zz.vD()), null !== sz && void 0 !== sz && (sz.needAlphaBlendingForMesh(tz) ? this._transparentSubMeshes.push(zz) : sz.needAlphaTestingForMesh(tz) ? (sz.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(zz), this._alphaTestSubMeshes.push(zz)) : (sz.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(zz), this._opaqueSubMeshes.push(zz)), tz._renderingGroup = this, tz._edgesRenderer && tz.isEnabled() && tz.isVisible && tz._edgesRenderer.isEnabled && this._edgesRenderers.pushNoDuplicate(tz._edgesRenderer), this._empty = !1)
      }
      dispatchSprites(zz) {
        this._spriteManagers.push(zz), this._empty = !1
      }
      dispatchParticles(zz) {
        this._particleSystems.push(zz), this._empty = !1
      }
      _renderParticles(zz) {
        if (0 === this._particleSystems.length) return;
        const tz = this._scene.activeCamera;
        this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
        for (let sz = 0; sz < this._particleSystems.length; sz++) {
          const Fz = this._particleSystems.data[sz];
          if (0 === (tz && tz.layerMask & Fz.layerMask)) continue;
          const Wz = Fz.emitter;
          Wz.position && zz && -1 === zz.indexOf(Wz) || this._scene._activeParticles.addCount(Fz.render(), !1)
        }
        this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
      }
      _renderSprites() {
        if (!this._scene.spritesEnabled || 0 === this._spriteManagers.length) return;
        const zz = this._scene.activeCamera;
        this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
        for (let tz = 0; tz < this._spriteManagers.length; tz++) {
          const sz = this._spriteManagers.data[tz];
          0 !== (zz && zz.layerMask & sz.layerMask) && sz.render()
        }
        this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene)
      }
    }
    Xz._ZeroVector = Wz.p.Zero()
  },
  39312: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Xz
    });
    var Fz = sz(39314);
    class Wz {}
    class Xz {
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(zz) {
        this._disableDepthPrePass = zz;
        for (const tz of this._renderingGroups) tz.disableDepthPrePass = zz
      }
      get maintainStateBetweenFrames() {
        return this._maintainStateBetweenFrames
      }
      set maintainStateBetweenFrames(zz) {
        zz !== this._maintainStateBetweenFrames && (this._maintainStateBetweenFrames = zz, this._maintainStateBetweenFrames || this.restoreDispachedFlags())
      }
      restoreDispachedFlags() {
        for (const zz of this._scene.meshes)
          if (zz.kY)
            for (const tz of zz.kY) tz._wasDispatched = !1;
        if (this._scene.spriteManagers)
          for (const zz of this._scene.spriteManagers) zz._wasDispatched = !1;
        for (const zz of this._scene.lY) zz._wasDispatched = !1
      }
      constructor(zz) {
        this._useSceneAutoClearSetup = !1, this._disableDepthPrePass = !1, this._renderingGroups = new Array, this._autoClearDepthStencil = {}, this._customOpaqueSortCompareFn = {}, this._customAlphaTestSortCompareFn = {}, this._customTransparentSortCompareFn = {}, this._renderingGroupInfo = new Wz, this._maintainStateBetweenFrames = !1, this._scene = zz;
        for (let tz = Xz.MIN_RENDERINGGROUPS; tz < Xz.MAX_RENDERINGGROUPS; tz++) this._autoClearDepthStencil[tz] = {
          autoClear: !0,
          depth: !0,
          stencil: !0
        }
      }
      get renderingGroups() {
        return this._renderingGroups
      }
      getRenderingGroup(zz) {
        const tz = zz || 0;
        return this._prepareRenderingGroup(tz), this._renderingGroups[tz]
      }
      _clearDepthStencilBuffer() {
        let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._depthStencilBufferAlreadyCleaned || (this._scene.FD().clear(null, !1, zz, tz), this._depthStencilBufferAlreadyCleaned = !0)
      }
      render(zz, tz, sz, Fz) {
        let Wz = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Oz = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          oz = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          vz = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Uz = arguments.length > 8 ? arguments[8] : void 0,
          Kz = arguments.length > 9 ? arguments[9] : void 0;
        const uz = this._renderingGroupInfo;
        uz.Kg = this._scene, uz.camera = this._scene.activeCamera, uz.renderingManager = this;
        const Nz = Kz ?? this._scene.spriteManagers;
        if (Nz && Fz)
          for (let Xz = 0; Xz < Nz.length; Xz++) {
            const zz = Nz[Xz];
            this.dispatchSprites(zz)
          }
        for (let bz = Xz.MIN_RENDERINGGROUPS; bz < Xz.MAX_RENDERINGGROUPS; bz++) {
          this._depthStencilBufferAlreadyCleaned = bz === Xz.MIN_RENDERINGGROUPS;
          const Kz = this._renderingGroups[bz];
          if (!Kz || Kz._empty) continue;
          const Nz = 1 << bz;
          if (uz.renderingGroupId = bz, this._scene.onBeforeRenderingGroupObservable.notifyObservers(uz, Nz), Xz.AUTOCLEAR) {
            const zz = this._useSceneAutoClearSetup ? this._scene.getAutoClearDepthStencilSetup(bz) : this._autoClearDepthStencil[bz];
            zz && zz.autoClear && this._clearDepthStencilBuffer(zz.depth, zz.stencil)
          }
          for (let zz = 0, tz = this._scene._beforeRenderingGroupDrawStage; zz < tz.length; zz++) {
            tz[zz].action(bz)
          }
          Kz.render(zz, Fz, sz, tz, Wz, Oz, oz, vz, Uz);
          for (let zz = 0, tz = this._scene._afterRenderingGroupDrawStage; zz < tz.length; zz++) {
            tz[zz].action(bz)
          }
          this._scene.onAfterRenderingGroupObservable.notifyObservers(uz, Nz)
        }
      }
      reset() {
        if (!this.maintainStateBetweenFrames)
          for (let zz = Xz.MIN_RENDERINGGROUPS; zz < Xz.MAX_RENDERINGGROUPS; zz++) {
            const tz = this._renderingGroups[zz];
            tz && tz.prepare()
          }
      }
      resetSprites() {
        if (!this.maintainStateBetweenFrames)
          for (let zz = Xz.MIN_RENDERINGGROUPS; zz < Xz.MAX_RENDERINGGROUPS; zz++) {
            const tz = this._renderingGroups[zz];
            tz && tz.prepareSprites()
          }
      }
      dispose() {
        this.freeRenderingGroups(), this._renderingGroups.length = 0, this._renderingGroupInfo = null
      }
      freeRenderingGroups() {
        for (let zz = Xz.MIN_RENDERINGGROUPS; zz < Xz.MAX_RENDERINGGROUPS; zz++) {
          const tz = this._renderingGroups[zz];
          tz && tz.dispose()
        }
      }
      _prepareRenderingGroup(zz) {
        void 0 === this._renderingGroups[zz] && (this._renderingGroups[zz] = new Fz.c(zz, this._scene, this._customOpaqueSortCompareFn[zz], this._customAlphaTestSortCompareFn[zz], this._customTransparentSortCompareFn[zz]), this._renderingGroups[zz].disableDepthPrePass = this._disableDepthPrePass)
      }
      dispatchSprites(zz) {
        this.maintainStateBetweenFrames && zz._wasDispatched || (zz._wasDispatched = !0, this.getRenderingGroup(zz.renderingGroupId).dispatchSprites(zz))
      }
      dispatchParticles(zz) {
        this.maintainStateBetweenFrames && zz._wasDispatched || (zz._wasDispatched = !0, this.getRenderingGroup(zz.renderingGroupId).dispatchParticles(zz))
      }
      dispatch(zz, tz, sz) {
        void 0 === tz && (tz = zz.getMesh()), this.maintainStateBetweenFrames && zz._wasDispatched || (zz._wasDispatched = !0, this.getRenderingGroup(tz.renderingGroupId).dispatch(zz, tz, sz))
      }
      setRenderingOrder(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (this._customOpaqueSortCompareFn[zz] = tz, this._customAlphaTestSortCompareFn[zz] = sz, this._customTransparentSortCompareFn[zz] = Fz, this._renderingGroups[zz]) {
          const tz = this._renderingGroups[zz];
          tz.opaqueSortCompareFn = this._customOpaqueSortCompareFn[zz], tz.alphaTestSortCompareFn = this._customAlphaTestSortCompareFn[zz], tz.transparentSortCompareFn = this._customTransparentSortCompareFn[zz]
        }
      }
      setRenderingAutoClearDepthStencil(zz, tz) {
        let sz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Fz = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._autoClearDepthStencil[zz] = {
          autoClear: tz,
          depth: sz,
          stencil: Fz
        }
      }
      getAutoClearDepthStencilSetup(zz) {
        return this._autoClearDepthStencil[zz]
      }
    }
    Xz.MAX_RENDERINGGROUPS = 4, Xz.MIN_RENDERINGGROUPS = 0, Xz.AUTOCLEAR = !0
  },
  39083: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Fz
    });
    class Fz {
      constructor(zz) {
        this._supportBlendParametersPerTarget = zz, this._blendFunctionParameters = new Array(32), this._blendEquationParameters = new Array(16), this._blendConstants = new Array(4), this._isBlendConstantsDirty = !1, this._alphaBlend = Array(8).fill(!1), this._numTargetEnabled = 0, this._isAlphaBlendDirty = !1, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1, this.reset()
      }
      get isDirty() {
        return this._isAlphaBlendDirty || this._isBlendFunctionParametersDirty || this._isBlendEquationParametersDirty
      }
      get alphaBlend() {
        return this._numTargetEnabled > 0
      }
      set alphaBlend(zz) {
        this.setAlphaBlend(zz)
      }
      setAlphaBlend(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._alphaBlend[tz] !== zz && (zz ? this._numTargetEnabled++ : this._numTargetEnabled--, this._alphaBlend[tz] = zz, this._isAlphaBlendDirty = !0)
      }
      setAlphaBlendConstants(zz, tz, sz, Fz) {
        this._blendConstants[0] === zz && this._blendConstants[1] === tz && this._blendConstants[2] === sz && this._blendConstants[3] === Fz || (this._blendConstants[0] = zz, this._blendConstants[1] = tz, this._blendConstants[2] = sz, this._blendConstants[3] = Fz, this._isBlendConstantsDirty = !0)
      }
      setAlphaBlendFunctionParameters(zz, tz, sz, Fz) {
        const Wz = 4 * (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0);
        this._blendFunctionParameters[Wz + 0] === zz && this._blendFunctionParameters[Wz + 1] === tz && this._blendFunctionParameters[Wz + 2] === sz && this._blendFunctionParameters[Wz + 3] === Fz || (this._blendFunctionParameters[Wz + 0] = zz, this._blendFunctionParameters[Wz + 1] = tz, this._blendFunctionParameters[Wz + 2] = sz, this._blendFunctionParameters[Wz + 3] = Fz, this._isBlendFunctionParametersDirty = !0)
      }
      setAlphaEquationParameters(zz, tz) {
        const sz = 2 * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0);
        this._blendEquationParameters[sz + 0] === zz && this._blendEquationParameters[sz + 1] === tz || (this._blendEquationParameters[sz + 0] = zz, this._blendEquationParameters[sz + 1] = tz, this._isBlendEquationParametersDirty = !0)
      }
      reset() {
        this._alphaBlend.fill(!1), this._numTargetEnabled = 0, this._blendFunctionParameters.fill(null), this._blendEquationParameters.fill(null), this._blendConstants[0] = null, this._blendConstants[1] = null, this._blendConstants[2] = null, this._blendConstants[3] = null, this._isAlphaBlendDirty = !0, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._isBlendConstantsDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1
      }
      apply(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._numTargets !== tz && (this._numTargets = tz, this._isAlphaBlendDirty = !0), this._blendDisabledTargetsMask !== sz && (this._blendDisabledTargetsMask = sz, this._isAlphaBlendDirty = !0), !this.isDirty) return;
        if (this._isBlendConstantsDirty && (zz.blendColor(this._blendConstants[0], this._blendConstants[1], this._blendConstants[2], this._blendConstants[3]), this._isBlendConstantsDirty = !1), 1 === tz || !this._supportBlendParametersPerTarget) {
          if (this._isAlphaBlendDirty) {
            if (tz > 1 && 0 !== sz && this.alphaBlend) throw new Error("AlphaState: blending with integer MRT attachments requires per-target blend parameters");
            this._alphaBlend[0] && 0 === (1 & sz) ? zz.enable(zz.BLEND) : zz.disable(zz.BLEND), this._isAlphaBlendDirty = !1
          }
          return this._isBlendFunctionParametersDirty && (zz.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]), this._isBlendFunctionParametersDirty = !1), void(this._isBlendEquationParametersDirty && (zz.blendEquationSeparate(this._blendEquationParameters[0], this._blendEquationParameters[1]), this._isBlendEquationParametersDirty = !1))
        }
        const Fz = zz;
        if (this._isAlphaBlendDirty) {
          for (let Wz = 0; Wz < tz; Wz++) {
            const tz = Wz < this._numTargetEnabled ? Wz : 0;
            this._alphaBlend[tz] && 0 === (sz & 1 << Wz) ? Fz.enableIndexed(zz.BLEND, Wz) : Fz.disableIndexed(zz.BLEND, Wz)
          }
          this._isAlphaBlendDirty = !1
        }
        if (this._isBlendFunctionParametersDirty) {
          for (let zz = 0; zz < tz; zz++) {
            const tz = zz < this._numTargetEnabled ? 4 * zz : 0;
            Fz.blendFuncSeparateIndexed(zz, this._blendFunctionParameters[tz + 0], this._blendFunctionParameters[tz + 1], this._blendFunctionParameters[tz + 2], this._blendFunctionParameters[tz + 3])
          }
          this._isBlendFunctionParametersDirty = !1
        }
        if (this._isBlendEquationParametersDirty) {
          for (let zz = 0; zz < tz; zz++) {
            const tz = zz < this._numTargetEnabled ? 2 * zz : 0;
            Fz.blendEquationSeparateIndexed(zz, this._blendEquationParameters[tz + 0], this._blendEquationParameters[tz + 1])
          }
          this._isBlendEquationParametersDirty = !1
        }
      }
      setAlphaMode(zz, tz) {
        let sz = 32774;
        switch (zz) {
          case 0:
            break;
          case 7:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 1, tz);
            break;
          case 8:
          case 14:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 771, tz);
            break;
          case 2:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 1, tz);
            break;
          case 6:
            this.setAlphaBlendFunctionParameters(1, 1, 0, 1, tz);
            break;
          case 1:
            this.setAlphaBlendFunctionParameters(770, 1, 0, 1, tz);
            break;
          case 3:
            this.setAlphaBlendFunctionParameters(0, 769, 1, 1, tz);
            break;
          case 4:
            this.setAlphaBlendFunctionParameters(774, 0, 1, 1, tz);
            break;
          case 5:
            this.setAlphaBlendFunctionParameters(770, 769, 1, 1, tz);
            break;
          case 9:
            this.setAlphaBlendFunctionParameters(32769, 32770, 32771, 32772, tz);
            break;
          case 10:
            this.setAlphaBlendFunctionParameters(1, 769, 1, 771, tz);
            break;
          case 11:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, tz);
            break;
          case 12:
            this.setAlphaBlendFunctionParameters(772, 1, 0, 0, tz);
            break;
          case 13:
            this.setAlphaBlendFunctionParameters(775, 769, 773, 771, tz);
            break;
          case 15:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 0, tz);
            break;
          case 16:
            this.setAlphaBlendFunctionParameters(775, 769, 0, 1, tz);
            break;
          case 17:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 771, tz);
            break;
          case 18:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, tz), sz = 32775;
            break;
          case 19:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, tz), sz = 32776;
            break;
          case 20:
            this.setAlphaBlendFunctionParameters(1, 35065, 0, 1, tz);
            break;
          case 21:
            this.setAlphaBlendFunctionParameters(1, 0, 1, 771, tz)
        }
        this.setAlphaEquationParameters(sz, sz, tz)
      }
    }
  },
  39342: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Fz
    });
    class Fz {}
    Fz._IsPickingAvailable = !1
  },
  39256: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => vs,
      i: () => Os
    });
    var Fz = sz(39264),
      Wz = sz(39074),
      Xz = sz(39079),
      Oz = sz(36505),
      oz = sz(39270);
    class vz {
      constructor() {
        this._count = 0, this._data = {}
      }
      vsz(zz) {
        this.clear(), zz.forEach(((zz, tz) => this.add(zz, tz)))
      }
      get(zz) {
        const tz = this._data[zz];
        if (void 0 !== tz) return tz
      }
      getOrAddWithFactory(zz, tz) {
        let sz = this.get(zz);
        return void 0 !== sz || (sz = tz(zz), sz && this.add(zz, sz)), sz
      }
      getOrAdd(zz, tz) {
        const sz = this.get(zz);
        return void 0 !== sz ? sz : (this.add(zz, tz), tz)
      }
      contains(zz) {
        return void 0 !== this._data[zz]
      }
      add(zz, tz) {
        return void 0 === this._data[zz] && (this._data[zz] = tz, ++this._count, !0)
      }
      set(zz, tz) {
        return void 0 !== this._data[zz] && (this._data[zz] = tz, !0)
      }
      getAndRemove(zz) {
        const tz = this.get(zz);
        return void 0 !== tz ? (delete this._data[zz], --this._count, tz) : null
      }
      remove(zz) {
        return !!this.contains(zz) && (delete this._data[zz], --this._count, !0)
      }
      clear() {
        this._data = {}, this._count = 0
      }
      get count() {
        return this._count
      }
      forEach(zz) {
        for (const tz in this._data) {
          zz(tz, this._data[tz])
        }
      }
      first(zz) {
        for (const tz in this._data) {
          const sz = zz(tz, this._data[tz]);
          if (sz) return sz
        }
        return null
      }
    }
    var Uz = sz(39185),
      Kz = sz(36475),
      uz = sz(39272),
      Nz = sz(39280),
      bz = sz(39284);
    class wz {
      constructor(zz, tz, sz, Fz, Wz, Xz) {
        this.source = zz, this.pointerX = tz, this.pointerY = sz, this.meshUnderPointer = Fz, this.sourceEvent = Wz, this.additionalData = Xz
      }
      static CreateNew(zz, tz, sz) {
        const Fz = zz.aJ();
        return new wz(zz, Fz.pointerX, Fz.pointerY, Fz.meshUnderPointer || zz, tz, sz)
      }
      static CreateNewFromSprite(zz, tz, sz, Fz) {
        return new wz(zz, tz.pointerX, tz.pointerY, tz.meshUnderPointer, sz, Fz)
      }
      static CreateNewFromScene(zz, tz) {
        return new wz(null, zz.pointerX, zz.pointerY, zz.meshUnderPointer, tz)
      }
      static CreateNewFromPrimitive(zz, tz, sz, Fz) {
        return new wz(zz, tz.x, tz.y, null, sz, Fz)
      }
    }
    var Dz = sz(39299),
      gz = sz(39305),
      Hz = sz(39312),
      Bz = sz(39319),
      Pz = sz(39051),
      rz = sz(36502),
      Yz = sz(39065),
      xz = sz(39328);
    class mz {
      constructor() {
        this.hoverCursor = "", this.actions = [], this.isRecursive = !1, this.disposeWhenUnowned = !0
      }
      static get HasTriggers() {
        for (const zz in mz.Triggers)
          if (Object.prototype.hasOwnProperty.call(mz.Triggers, zz)) return !0;
        return !1
      }
      static get HasPickTriggers() {
        for (const zz in mz.Triggers)
          if (Object.prototype.hasOwnProperty.call(mz.Triggers, zz)) {
            const tz = parseInt(zz);
            if (tz >= 1 && tz <= 7) return !0
          } return !1
      }
      static HasSpecificTrigger(zz) {
        for (const tz in mz.Triggers)
          if (Object.prototype.hasOwnProperty.call(mz.Triggers, tz)) {
            if (parseInt(tz) === zz) return !0
          } return !1
      }
    }
    mz.Triggers = {};
    var Jz, Iz, Cz, ez, Zz, Gz, Tz, cz = sz(39331);
    ! function(zz) {
      zz[zz.Generic = 0] = "Generic", zz[zz.Keyboard = 1] = "Keyboard", zz[zz.Mouse = 2] = "Mouse", zz[zz.Touch = 3] = "Touch", zz[zz.DualShock = 4] = "DualShock", zz[zz.Xbox = 5] = "Xbox", zz[zz.Switch = 6] = "Switch", zz[zz.DualSense = 7] = "DualSense"
    }(Jz || (Jz = {})),
    function(zz) {
      zz[zz.Horizontal = 0] = "Horizontal", zz[zz.Vertical = 1] = "Vertical", zz[zz.LeftClick = 2] = "LeftClick", zz[zz.MiddleClick = 3] = "MiddleClick", zz[zz.RightClick = 4] = "RightClick", zz[zz.BrowserBack = 5] = "BrowserBack", zz[zz.BrowserForward = 6] = "BrowserForward", zz[zz.MouseWheelX = 7] = "MouseWheelX", zz[zz.MouseWheelY = 8] = "MouseWheelY", zz[zz.MouseWheelZ = 9] = "MouseWheelZ", zz[zz.Move = 12] = "Move"
    }(Iz || (Iz = {})),
    function(zz) {
      zz[zz.Horizontal = 0] = "Horizontal", zz[zz.Vertical = 1] = "Vertical", zz[zz.LeftClick = 2] = "LeftClick", zz[zz.MiddleClick = 3] = "MiddleClick", zz[zz.RightClick = 4] = "RightClick", zz[zz.BrowserBack = 5] = "BrowserBack", zz[zz.BrowserForward = 6] = "BrowserForward", zz[zz.MouseWheelX = 7] = "MouseWheelX", zz[zz.MouseWheelY = 8] = "MouseWheelY", zz[zz.MouseWheelZ = 9] = "MouseWheelZ", zz[zz.DeltaHorizontal = 10] = "DeltaHorizontal", zz[zz.DeltaVertical = 11] = "DeltaVertical"
    }(Cz || (Cz = {})),
    function(zz) {
      zz[zz.Cross = 0] = "Cross", zz[zz.Circle = 1] = "Circle", zz[zz.Square = 2] = "Square", zz[zz.Triangle = 3] = "Triangle", zz[zz.L1 = 4] = "L1", zz[zz.R1 = 5] = "R1", zz[zz.L2 = 6] = "L2", zz[zz.R2 = 7] = "R2", zz[zz.Share = 8] = "Share", zz[zz.Options = 9] = "Options", zz[zz.L3 = 10] = "L3", zz[zz.R3 = 11] = "R3", zz[zz.DPadUp = 12] = "DPadUp", zz[zz.DPadDown = 13] = "DPadDown", zz[zz.DPadLeft = 14] = "DPadLeft", zz[zz.DPadRight = 15] = "DPadRight", zz[zz.Home = 16] = "Home", zz[zz.TouchPad = 17] = "TouchPad", zz[zz.LStickXAxis = 18] = "LStickXAxis", zz[zz.LStickYAxis = 19] = "LStickYAxis", zz[zz.RStickXAxis = 20] = "RStickXAxis", zz[zz.RStickYAxis = 21] = "RStickYAxis"
    }(ez || (ez = {})),
    function(zz) {
      zz[zz.Cross = 0] = "Cross", zz[zz.Circle = 1] = "Circle", zz[zz.Square = 2] = "Square", zz[zz.Triangle = 3] = "Triangle", zz[zz.L1 = 4] = "L1", zz[zz.R1 = 5] = "R1", zz[zz.L2 = 6] = "L2", zz[zz.R2 = 7] = "R2", zz[zz.Create = 8] = "Create", zz[zz.Options = 9] = "Options", zz[zz.L3 = 10] = "L3", zz[zz.R3 = 11] = "R3", zz[zz.DPadUp = 12] = "DPadUp", zz[zz.DPadDown = 13] = "DPadDown", zz[zz.DPadLeft = 14] = "DPadLeft", zz[zz.DPadRight = 15] = "DPadRight", zz[zz.Home = 16] = "Home", zz[zz.TouchPad = 17] = "TouchPad", zz[zz.LStickXAxis = 18] = "LStickXAxis", zz[zz.LStickYAxis = 19] = "LStickYAxis", zz[zz.RStickXAxis = 20] = "RStickXAxis", zz[zz.RStickYAxis = 21] = "RStickYAxis"
    }(Zz || (Zz = {})),
    function(zz) {
      zz[zz.A = 0] = "A", zz[zz.B = 1] = "B", zz[zz.X = 2] = "X", zz[zz.Y = 3] = "Y", zz[zz.LB = 4] = "LB", zz[zz.RB = 5] = "RB", zz[zz.LT = 6] = "LT", zz[zz.RT = 7] = "RT", zz[zz.Back = 8] = "Back", zz[zz.Start = 9] = "Start", zz[zz.LS = 10] = "LS", zz[zz.RS = 11] = "RS", zz[zz.DPadUp = 12] = "DPadUp", zz[zz.DPadDown = 13] = "DPadDown", zz[zz.DPadLeft = 14] = "DPadLeft", zz[zz.DPadRight = 15] = "DPadRight", zz[zz.Home = 16] = "Home", zz[zz.LStickXAxis = 17] = "LStickXAxis", zz[zz.LStickYAxis = 18] = "LStickYAxis", zz[zz.RStickXAxis = 19] = "RStickXAxis", zz[zz.RStickYAxis = 20] = "RStickYAxis"
    }(Gz || (Gz = {})),
    function(zz) {
      zz[zz.B = 0] = "B", zz[zz.A = 1] = "A", zz[zz.Y = 2] = "Y", zz[zz.X = 3] = "X", zz[zz.L = 4] = "L", zz[zz.R = 5] = "R", zz[zz.ZL = 6] = "ZL", zz[zz.ZR = 7] = "ZR", zz[zz.Minus = 8] = "Minus", zz[zz.Plus = 9] = "Plus", zz[zz.LS = 10] = "LS", zz[zz.RS = 11] = "RS", zz[zz.DPadUp = 12] = "DPadUp", zz[zz.DPadDown = 13] = "DPadDown", zz[zz.DPadLeft = 14] = "DPadLeft", zz[zz.DPadRight = 15] = "DPadRight", zz[zz.Home = 16] = "Home", zz[zz.Capture = 17] = "Capture", zz[zz.LStickXAxis = 18] = "LStickXAxis", zz[zz.LStickYAxis = 19] = "LStickYAxis", zz[zz.RStickXAxis = 20] = "RStickXAxis", zz[zz.RStickYAxis = 21] = "RStickYAxis"
    }(Tz || (Tz = {}));
    var jz = sz(39337);
    class Az {
      static CreateDeviceEvent(zz, tz, sz, Fz, Wz, Xz, Oz) {
        switch (zz) {
          case Jz.Keyboard:
            return this._CreateKeyboardEvent(sz, Fz, Wz, Xz);
          case Jz.Mouse:
            if (sz === Iz.MouseWheelX || sz === Iz.MouseWheelY || sz === Iz.MouseWheelZ) return this._CreateWheelEvent(zz, tz, sz, Fz, Wz, Xz);
          case Jz.Touch:
            return this._CreatePointerEvent(zz, tz, sz, Fz, Wz, Xz, Oz);
          default:
            throw `Unable to generate event for device ${Jz[zz]}`
        }
      }
      static _CreatePointerEvent(zz, tz, sz, Fz, Wz, Xz, Oz) {
        const oz = this._CreateMouseEvent(zz, tz, sz, Fz, Wz, Xz);
        zz === Jz.Mouse ? (oz.deviceType = Jz.Mouse, oz.pointerId = 1, oz.pointerType = "mouse") : (oz.deviceType = Jz.Touch, oz.pointerId = Oz ?? tz, oz.pointerType = "touch");
        let vz = 0;
        return vz += Wz.pollInput(zz, tz, Iz.LeftClick), vz += 2 * Wz.pollInput(zz, tz, Iz.RightClick), vz += 4 * Wz.pollInput(zz, tz, Iz.MiddleClick), oz.buttons = vz, sz === Iz.Move ? oz.type = "pointermove" : sz >= Iz.LeftClick && sz <= Iz.RightClick && (oz.type = 1 === Fz ? "pointerdown" : "pointerup", oz.button = sz - 2), oz
      }
      static _CreateWheelEvent(zz, tz, sz, Fz, Wz, Xz) {
        const Oz = this._CreateMouseEvent(zz, tz, sz, Fz, Wz, Xz);
        switch (Oz.pointerId = 1, Oz.type = "wheel", Oz.deltaMode = jz.e.DOM_DELTA_PIXEL, Oz.deltaX = 0, Oz.deltaY = 0, Oz.deltaZ = 0, sz) {
          case Iz.MouseWheelX:
            Oz.deltaX = Fz;
            break;
          case Iz.MouseWheelY:
            Oz.deltaY = Fz;
            break;
          case Iz.MouseWheelZ:
            Oz.deltaZ = Fz
        }
        return Oz
      }
      static _CreateMouseEvent(zz, tz, sz, Fz, Wz, Xz) {
        const Oz = this._CreateEvent(Xz),
          oz = Wz.pollInput(zz, tz, Iz.Horizontal),
          vz = Wz.pollInput(zz, tz, Iz.Vertical);
        return Xz ? (Oz.movementX = 0, Oz.movementY = 0, Oz.offsetX = Oz.movementX - Xz.getBoundingClientRect().x, Oz.offsetY = Oz.movementY - Xz.getBoundingClientRect().y) : (Oz.movementX = Wz.pollInput(zz, tz, 10), Oz.movementY = Wz.pollInput(zz, tz, 11), Oz.offsetX = 0, Oz.offsetY = 0), this._CheckNonCharacterKeys(Oz, Wz), Oz.clientX = oz, Oz.clientY = vz, Oz.x = oz, Oz.y = vz, Oz.deviceType = zz, Oz.deviceSlot = tz, Oz.inputIndex = sz, Oz
      }
      static _CreateKeyboardEvent(zz, tz, sz, Fz) {
        const Wz = this._CreateEvent(Fz);
        return this._CheckNonCharacterKeys(Wz, sz), Wz.deviceType = Jz.Keyboard, Wz.deviceSlot = 0, Wz.inputIndex = zz, Wz.type = 1 === tz ? "keydown" : "keyup", Wz.key = String.fromCharCode(zz), Wz.keyCode = zz, Wz
      }
      static _CheckNonCharacterKeys(zz, tz) {
        const sz = tz.isDeviceAvailable(Jz.Keyboard),
          Fz = sz && 1 === tz.pollInput(Jz.Keyboard, 0, 18),
          Wz = sz && 1 === tz.pollInput(Jz.Keyboard, 0, 17),
          Xz = sz && (1 === tz.pollInput(Jz.Keyboard, 0, 91) || 1 === tz.pollInput(Jz.Keyboard, 0, 92) || 1 === tz.pollInput(Jz.Keyboard, 0, 93)),
          Oz = sz && 1 === tz.pollInput(Jz.Keyboard, 0, 16);
        zz.altKey = Fz, zz.ctrlKey = Wz, zz.metaKey = Xz, zz.shiftKey = Oz
      }
      static _CreateEvent(zz) {
        const tz = {
          preventDefault: () => {}
        };
        return tz.target = zz, tz
      }
    }
    class yz {
      constructor(zz, tz, sz) {
        this._nativeInput = _native.DeviceInputSystem ? new _native.DeviceInputSystem(zz, tz, ((zz, tz, Fz, Wz) => {
          const Xz = Az.CreateDeviceEvent(zz, tz, Fz, Wz, this);
          sz(zz, tz, Xz)
        })) : this._createDummyNativeInput()
      }
      pollInput(zz, tz, sz) {
        return this._nativeInput.pollInput(zz, tz, sz)
      }
      isDeviceAvailable(zz) {
        return zz === Jz.Mouse || zz === Jz.Touch
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
    const Mz = Object.keys(Iz).length / 2;
    class dz {
      constructor(zz, tz, sz, Wz) {
        this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = Fz.j.IsSafari(), this._usingMacOs = (0, Pz.i)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = zz => {}, this._keyboardUpEvent = zz => {}, this._keyboardBlurEvent = zz => {}, this._pointerMoveEvent = zz => {}, this._pointerDownEvent = zz => {}, this._pointerUpEvent = zz => {}, this._pointerCancelEvent = zz => {}, this._pointerCancelTouch = zz => {}, this._pointerLeaveEvent = zz => {}, this._pointerWheelEvent = zz => {}, this._pointerBlurEvent = zz => {}, this._pointerMacOsChromeOutEvent = zz => {}, this._eventsAttached = !1, this._mouseId = -1, this._isUsingFirefox = (0, Pz.i)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Firefox"), this._isUsingChromium = (0, Pz.i)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Chrome"), this._maxTouchPoints = 0, this._pointerInputClearObserver = null, this._gamepadConnectedEvent = zz => {}, this._gamepadDisconnectedEvent = zz => {}, this._eventPrefix = Fz.j.GetPointerPrefix(zz), this._engine = zz, this._onDeviceConnected = tz, this._onDeviceDisconnected = sz, this._onInputChanged = Wz, this._mouseId = this._isUsingFirefox ? 0 : 1, this._enableEvents(), this._usingMacOs && (this._metaKeys = []), this._engine._onEngineViewChanged || (this._engine._onEngineViewChanged = () => {
          this._enableEvents()
        })
      }
      pollInput(zz, tz, sz) {
        const Wz = this._inputs[zz][tz];
        if (!Wz) throw `Unable to find device ${Jz[zz]}`;
        zz >= Jz.DualShock && zz <= Jz.DualSense && this._updateDevice(zz, tz, sz);
        const Xz = Wz[sz];
        if (void 0 === Xz) throw `Unable to find input ${sz} for device ${Jz[zz]} in slot ${tz}`;
        return sz === Iz.Move && Fz.j.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), Xz
      }
      isDeviceAvailable(zz) {
        return void 0 !== this._inputs[zz]
      }
      dispose() {
        this._onDeviceConnected = () => {}, this._onDeviceDisconnected = () => {}, this._onInputChanged = () => {}, delete this._engine._onEngineViewChanged, this._elementToAttachTo && this._disableEvents()
      }
      _enableEvents() {
        const zz = this?._engine.getInputElement();
        if (zz && (!this._eventsAttached || this._elementToAttachTo !== zz)) {
          if (this._disableEvents(), this._inputs)
            for (const zz of this._inputs)
              if (zz)
                for (const tz in zz) {
                  const sz = zz[+tz];
                  if (sz)
                    for (let zz = 0; zz < sz.length; zz++) sz[zz] = 0
                }
          this._elementToAttachTo = zz, this._elementToAttachTo.tabIndex = -1 !== this._elementToAttachTo.tabIndex ? this._elementToAttachTo.tabIndex : this._engine.canvasTabIndex, this._handleKeyActions(), this._handlePointerActions(), this._handleGamepadActions(), this._eventsAttached = !0, this._checkForConnectedDevices()
        }
      }
      _disableEvents() {
        this._elementToAttachTo && (this._elementToAttachTo.removeEventListener("blur", this._keyboardBlurEvent), this._elementToAttachTo.removeEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.removeEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.removeEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.removeEventListener(this._wheelEventName, this._pointerWheelEvent), this._usingMacOs && this._isUsingChromium && this._elementToAttachTo.removeEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent), window.removeEventListener("gamepadconnected", this._gamepadConnectedEvent), window.removeEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)), this._pointerInputClearObserver && this._engine.onEndFrameObservable.remove(this._pointerInputClearObserver), this._eventsAttached = !1
      }
      _checkForConnectedDevices() {
        if (navigator.getGamepads) {
          const zz = navigator.getGamepads();
          for (const tz of zz) tz && this._addGamePad(tz)
        }
        "function" === typeof matchMedia && matchMedia("(pointer:fine)").matches && this._addPointerDevice(Jz.Mouse, 0, 0, 0)
      }
      _addGamePad(zz) {
        const tz = this._getGamepadDeviceType(zz.id),
          sz = zz.index;
        this._gamepads = this._gamepads || new Array(zz.index + 1), this._registerDevice(tz, sz, zz.buttons.length + zz.axes.length), this._gamepads[sz] = tz
      }
      _addPointerDevice(zz, tz, sz, Fz) {
        this._pointerActive || (this._pointerActive = !0), this._registerDevice(zz, tz, Mz);
        const Wz = this._inputs[zz][tz];
        Wz[0] = sz, Wz[1] = Fz
      }
      _registerDevice(zz, tz, sz) {
        if (void 0 === tz) throw `Unable to register device ${Jz[zz]} to undefined slot.`;
        if (this._inputs[zz] || (this._inputs[zz] = {}), !this._inputs[zz][tz]) {
          const Fz = new Array(sz);
          Fz.fill(0), this._inputs[zz][tz] = Fz, this._onDeviceConnected(zz, tz)
        }
      }
      _unregisterDevice(zz, tz) {
        this._inputs[zz][tz] && (delete this._inputs[zz][tz], this._onDeviceDisconnected(zz, tz))
      }
      _handleKeyActions() {
        this._keyboardDownEvent = zz => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(Jz.Keyboard, 0, 255));
          const tz = this._inputs[Jz.Keyboard][0];
          if (tz) {
            tz[zz.keyCode] = 1;
            const sz = zz;
            sz.inputIndex = zz.keyCode, this._usingMacOs && zz.metaKey && "Meta" !== zz.key && (this._metaKeys.includes(zz.keyCode) || this._metaKeys.push(zz.keyCode)), this._onInputChanged(Jz.Keyboard, 0, sz)
          }
        }, this._keyboardUpEvent = zz => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(Jz.Keyboard, 0, 255));
          const tz = this._inputs[Jz.Keyboard][0];
          if (tz) {
            tz[zz.keyCode] = 0;
            const sz = zz;
            if (sz.inputIndex = zz.keyCode, this._usingMacOs && "Meta" === zz.key && this._metaKeys.length > 0) {
              for (const zz of this._metaKeys) {
                const sz = Az.CreateDeviceEvent(Jz.Keyboard, 0, zz, 0, this, this._elementToAttachTo);
                tz[zz] = 0, this._onInputChanged(Jz.Keyboard, 0, sz)
              }
              this._metaKeys.splice(0, this._metaKeys.length)
            }
            this._onInputChanged(Jz.Keyboard, 0, sz)
          }
        }, this._keyboardBlurEvent = () => {
          if (this._keyboardActive) {
            const zz = this._inputs[Jz.Keyboard][0];
            for (let tz = 0; tz < zz.length; tz++)
              if (0 !== zz[tz]) {
                zz[tz] = 0;
                const sz = Az.CreateDeviceEvent(Jz.Keyboard, 0, tz, 0, this, this._elementToAttachTo);
                this._onInputChanged(Jz.Keyboard, 0, sz)
              } this._usingMacOs && this._metaKeys.splice(0, this._metaKeys.length)
          }
        }, this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent)
      }
      _handlePointerActions() {
        this._maxTouchPoints = (0, Pz.i)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
        for (let Fz = 0; Fz < this._maxTouchPoints; Fz++) this._activeTouchIds[Fz] = -1;
        this._pointerMoveEvent = zz => {
          const tz = this._getPointerType(zz);
          let sz = tz === Jz.Mouse ? 0 : this._activeTouchIds.indexOf(zz.pointerId);
          if (tz === Jz.Touch && -1 === sz) {
            if (0 === zz.buttons) return;
            const Wz = this._activeTouchIds.indexOf(-1);
            if (!(Wz >= 0)) return void Fz.j.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            sz = Wz, this._activeTouchIds[Wz] = zz.pointerId, this._onDeviceConnected(tz, sz)
          }
          this._inputs[tz] || (this._inputs[tz] = {}), this._inputs[tz][sz] || this._addPointerDevice(tz, sz, zz.clientX, zz.clientY);
          const Wz = this._inputs[tz][sz];
          if (Wz) {
            const Fz = zz;
            Fz.inputIndex = Iz.Move, Wz[Iz.Horizontal] = zz.clientX, Wz[Iz.Vertical] = zz.clientY, tz === Jz.Touch && 0 === Wz[Iz.LeftClick] && (Wz[Iz.LeftClick] = 1), void 0 === zz.pointerId && (zz.pointerId = this._mouseId), this._onInputChanged(tz, sz, Fz), this._usingSafari || -1 === zz.button || (Fz.inputIndex = zz.button + 2, Wz[zz.button + 2] = Wz[zz.button + 2] ? 0 : 1, this._onInputChanged(tz, sz, Fz))
          }
        }, this._pointerDownEvent = zz => {
          const tz = this._getPointerType(zz);
          let sz = tz === Jz.Mouse ? 0 : zz.pointerId;
          if (tz === Jz.Touch) {
            let tz = this._activeTouchIds.indexOf(zz.pointerId);
            if (-1 === tz && (tz = this._activeTouchIds.indexOf(-1)), !(tz >= 0)) return void Fz.j.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            sz = tz, this._activeTouchIds[tz] = zz.pointerId
          }
          this._inputs[tz] || (this._inputs[tz] = {}), this._inputs[tz][sz] ? tz === Jz.Touch && this._onDeviceConnected(tz, sz) : this._addPointerDevice(tz, sz, zz.clientX, zz.clientY);
          const Wz = this._inputs[tz][sz];
          if (Wz) {
            const Fz = Wz[Iz.Horizontal],
              Oz = Wz[Iz.Vertical];
            if (tz === Jz.Mouse) {
              if (void 0 === zz.pointerId && (zz.pointerId = this._mouseId), !document.pointerLockElement) try {
                this._elementToAttachTo.setPointerCapture(this._mouseId)
              } catch (Xz) {}
            } else if (zz.pointerId && !document.pointerLockElement) try {
              this._elementToAttachTo.setPointerCapture(zz.pointerId)
            } catch (Xz) {}
            Wz[Iz.Horizontal] = zz.clientX, Wz[Iz.Vertical] = zz.clientY, Wz[zz.button + 2] = 1;
            const oz = zz;
            oz.inputIndex = zz.button + 2, this._onInputChanged(tz, sz, oz), Fz === zz.clientX && Oz === zz.clientY || (oz.inputIndex = Iz.Move, this._onInputChanged(tz, sz, oz))
          }
        }, this._pointerUpEvent = zz => {
          const tz = this._getPointerType(zz),
            sz = tz === Jz.Mouse ? 0 : this._activeTouchIds.indexOf(zz.pointerId);
          if (tz === Jz.Touch) {
            if (-1 === sz) return;
            this._activeTouchIds[sz] = -1
          }
          const Fz = this._inputs[tz]?.[sz];
          let Wz = zz.button,
            Xz = Fz && 0 !== Fz[Wz + 2];
          if (!Xz && this._isUsingFirefox && this._usingMacOs && Fz && (Wz = 2 === Wz ? 0 : 2, Xz = 0 !== Fz[Wz + 2]), Xz) {
            const Xz = Fz[Iz.Horizontal],
              Oz = Fz[Iz.Vertical];
            Fz[Iz.Horizontal] = zz.clientX, Fz[Iz.Vertical] = zz.clientY, Fz[Wz + 2] = 0;
            const oz = zz;
            void 0 === zz.pointerId && (zz.pointerId = this._mouseId), Xz === zz.clientX && Oz === zz.clientY || (oz.inputIndex = Iz.Move, this._onInputChanged(tz, sz, oz)), oz.inputIndex = Wz + 2, tz === Jz.Mouse && this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) ? this._elementToAttachTo.releasePointerCapture(this._mouseId) : zz.pointerId && this._elementToAttachTo.hasPointerCapture?.(zz.pointerId) && this._elementToAttachTo.releasePointerCapture(zz.pointerId), this._onInputChanged(tz, sz, oz), tz === Jz.Touch && this._onDeviceDisconnected(tz, sz)
          }
        }, this._pointerCancelTouch = zz => {
          const tz = this._activeTouchIds.indexOf(zz);
          if (-1 === tz) return;
          this._elementToAttachTo.hasPointerCapture?.(zz) && this._elementToAttachTo.releasePointerCapture(zz), this._inputs[Jz.Touch][tz][Iz.LeftClick] = 0;
          const sz = Az.CreateDeviceEvent(Jz.Touch, tz, Iz.LeftClick, 0, this, this._elementToAttachTo, zz);
          this._onInputChanged(Jz.Touch, tz, sz), this._activeTouchIds[tz] = -1, this._onDeviceDisconnected(Jz.Touch, tz)
        }, this._pointerCancelEvent = zz => {
          if ("mouse" === zz.pointerType) {
            const zz = this._inputs[Jz.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let tz = Iz.LeftClick; tz <= Iz.BrowserForward; tz++)
              if (1 === zz[tz]) {
                zz[tz] = 0;
                const sz = Az.CreateDeviceEvent(Jz.Mouse, 0, tz, 0, this, this._elementToAttachTo);
                this._onInputChanged(Jz.Mouse, 0, sz)
              }
          } else this._pointerCancelTouch(zz.pointerId)
        }, this._pointerLeaveEvent = zz => {
          "pen" === zz.pointerType && this._pointerCancelTouch(zz.pointerId)
        }, this._wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        let zz = !1;
        const tz = function() {};
        try {
          const sz = Object.defineProperty({}, "passive", {
            get: function() {
              zz = !0
            }
          });
          this._elementToAttachTo.addEventListener("test", tz, sz), this._elementToAttachTo.removeEventListener("test", tz, sz)
        } catch (sz) {}
        this._pointerBlurEvent = () => {
          if (this.isDeviceAvailable(Jz.Mouse)) {
            const zz = this._inputs[Jz.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let tz = Iz.LeftClick; tz <= Iz.BrowserForward; tz++)
              if (1 === zz[tz]) {
                zz[tz] = 0;
                const sz = Az.CreateDeviceEvent(Jz.Mouse, 0, tz, 0, this, this._elementToAttachTo);
                this._onInputChanged(Jz.Mouse, 0, sz)
              }
          }
          if (this.isDeviceAvailable(Jz.Touch)) {
            const zz = this._inputs[Jz.Touch];
            for (let tz = 0; tz < this._activeTouchIds.length; tz++) {
              const sz = this._activeTouchIds[tz];
              if (this._elementToAttachTo.hasPointerCapture?.(sz) && this._elementToAttachTo.releasePointerCapture(sz), -1 !== sz && 1 === zz[tz]?.[Iz.LeftClick]) {
                zz[tz][Iz.LeftClick] = 0;
                const Fz = Az.CreateDeviceEvent(Jz.Touch, tz, Iz.LeftClick, 0, this, this._elementToAttachTo, sz);
                this._onInputChanged(Jz.Touch, tz, Fz), this._activeTouchIds[tz] = -1, this._onDeviceDisconnected(Jz.Touch, tz)
              }
            }
          }
        }, this._pointerWheelEvent = zz => {
          const tz = Jz.Mouse;
          this._inputs[tz] || (this._inputs[tz] = []), this._inputs[tz][0] || (this._pointerActive = !0, this._registerDevice(tz, 0, Mz));
          const sz = this._inputs[tz][0];
          if (sz) {
            sz[Iz.MouseWheelX] = zz.deltaX || 0, sz[Iz.MouseWheelY] = zz.deltaY || zz.wheelDelta || 0, sz[Iz.MouseWheelZ] = zz.deltaZ || 0;
            const Fz = zz;
            void 0 === zz.pointerId && (zz.pointerId = this._mouseId), 0 !== sz[Iz.MouseWheelX] && (Fz.inputIndex = Iz.MouseWheelX, this._onInputChanged(tz, 0, Fz)), 0 !== sz[Iz.MouseWheelY] && (Fz.inputIndex = Iz.MouseWheelY, this._onInputChanged(tz, 0, Fz)), 0 !== sz[Iz.MouseWheelZ] && (Fz.inputIndex = Iz.MouseWheelZ, this._onInputChanged(tz, 0, Fz))
          }
        }, this._usingMacOs && this._isUsingChromium && (this._pointerMacOsChromeOutEvent = zz => {
          zz.buttons > 1 && this._pointerCancelEvent(zz)
        }, this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent)), this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.addEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.addEventListener(this._wheelEventName, this._pointerWheelEvent, !!zz && {
          passive: !1
        }), this._pointerInputClearObserver = this._engine.onEndFrameObservable.add((() => {
          if (this.isDeviceAvailable(Jz.Mouse)) {
            const zz = this._inputs[Jz.Mouse][0];
            zz[Iz.MouseWheelX] = 0, zz[Iz.MouseWheelY] = 0, zz[Iz.MouseWheelZ] = 0
          }
        }))
      }
      _handleGamepadActions() {
        this._gamepadConnectedEvent = zz => {
          this._addGamePad(zz.gamepad)
        }, this._gamepadDisconnectedEvent = zz => {
          if (this._gamepads) {
            const tz = this._getGamepadDeviceType(zz.gamepad.id),
              sz = zz.gamepad.index;
            this._unregisterDevice(tz, sz), delete this._gamepads[sz]
          }
        }, window.addEventListener("gamepadconnected", this._gamepadConnectedEvent), window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)
      }
      _updateDevice(zz, tz, sz) {
        const Fz = navigator.getGamepads()[tz];
        if (Fz && zz === this._gamepads[tz]) {
          const Wz = this._inputs[zz][tz];
          sz >= Fz.buttons.length ? Wz[sz] = Fz.axes[sz - Fz.buttons.length].valueOf() : Wz[sz] = Fz.buttons[sz].value
        }
      }
      _getGamepadDeviceType(zz) {
        return -1 !== zz.indexOf("054c") ? -1 !== zz.indexOf("0ce6") ? Jz.DualSense : Jz.DualShock : -1 !== zz.indexOf("Xbox One") || -1 !== zz.search("Xbox 360") || -1 !== zz.search("xinput") || -1 !== zz.indexOf("045e") && -1 === zz.indexOf("Surface Dock") ? Jz.Xbox : -1 !== zz.indexOf("057e") ? Jz.Switch : Jz.Generic
      }
      _getPointerType(zz) {
        let tz = Jz.Mouse;
        return ("touch" === zz.pointerType || "pen" === zz.pointerType || zz.touches) && (tz = Jz.Touch), tz
      }
    }
    class hz {
      constructor(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.deviceType = tz, this.deviceSlot = sz, this.onInputChangedObservable = new Oz.c, this._deviceInputSystem = zz
      }
      getInput(zz) {
        return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, zz)
      }
    }
    class Qz {
      constructor(zz) {
        this._registeredManagers = new Array, this._refCount = 0, this.registerManager = zz => {
          for (let tz = 0; tz < this._devices.length; tz++) {
            const sz = this._devices[tz];
            for (const Fz in sz) {
              const sz = +Fz;
              zz._addDevice(new hz(this._deviceInputSystem, tz, sz))
            }
          }
          this._registeredManagers.push(zz)
        }, this.unregisterManager = zz => {
          const tz = this._registeredManagers.indexOf(zz);
          tz > -1 && this._registeredManagers.splice(tz, 1)
        };
        const tz = Object.keys(Jz).length / 2;
        this._devices = new Array(tz);
        const sz = (zz, tz) => {
            this._devices[zz] || (this._devices[zz] = new Array), this._devices[zz][tz] || (this._devices[zz][tz] = tz);
            for (const sz of this._registeredManagers) {
              const Fz = new hz(this._deviceInputSystem, zz, tz);
              sz._addDevice(Fz)
            }
          },
          Fz = (zz, tz) => {
            this._devices[zz]?.[tz] && delete this._devices[zz][tz];
            for (const sz of this._registeredManagers) sz._removeDevice(zz, tz)
          },
          Wz = (zz, tz, sz) => {
            if (sz)
              for (const Fz of this._registeredManagers) Fz._onInputChanged(zz, tz, sz)
          };
        "undefined" !== typeof _native ? this._deviceInputSystem = new yz(sz, Fz, Wz) : this._deviceInputSystem = new dz(zz, sz, Fz, Wz)
      }
      dispose() {
        this._deviceInputSystem.dispose()
      }
    }
    class kz {
      getDeviceSource(zz, tz) {
        if (void 0 === tz) {
          if (void 0 === this._firstDevice[zz]) return null;
          tz = this._firstDevice[zz]
        }
        return this._devices[zz] && void 0 !== this._devices[zz][tz] ? this._devices[zz][tz] : null
      }
      getDeviceSources(zz) {
        return this._devices[zz] ? this._devices[zz].filter((zz => !!zz)) : []
      }
      constructor(zz) {
        const tz = Object.keys(Jz).length / 2;
        this._devices = new Array(tz), this._firstDevice = new Array(tz), this._engine = zz, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new Qz(zz)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new Oz.c((zz => {
          for (const tz of this._devices)
            if (tz)
              for (const sz of tz) sz && this.onDeviceConnectedObservable.notifyObserver(zz, sz)
        })), this.onDeviceDisconnectedObservable = new Oz.c, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = zz.qJ.add((() => {
          this.dispose()
        }))
      }
      dispose() {
        this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager.dispose(), delete this._engine._deviceSourceManager)), this._engine.qJ.remove(this._onDisposeObserver)
      }
      _addDevice(zz) {
        this._devices[zz.deviceType] || (this._devices[zz.deviceType] = []), this._devices[zz.deviceType][zz.deviceSlot] || (this._devices[zz.deviceType][zz.deviceSlot] = zz, this._updateFirstDevices(zz.deviceType)), this.onDeviceConnectedObservable.notifyObservers(zz)
      }
      _removeDevice(zz, tz) {
        const sz = this._devices[zz]?.[tz];
        this.onDeviceDisconnectedObservable.notifyObservers(sz), this._devices[zz]?.[tz] && delete this._devices[zz][tz], this._updateFirstDevices(zz)
      }
      _onInputChanged(zz, tz, sz) {
        this._devices[zz]?.[tz]?.onInputChangedObservable.notifyObservers(sz)
      }
      _updateFirstDevices(zz) {
        switch (zz) {
          case Jz.Keyboard:
          case Jz.Mouse:
            this._firstDevice[zz] = 0;
            break;
          case Jz.Touch:
          case Jz.DualSense:
          case Jz.DualShock:
          case Jz.Xbox:
          case Jz.Switch:
          case Jz.Generic: {
            delete this._firstDevice[zz];
            const tz = this._devices[zz];
            if (tz)
              for (let sz = 0; sz < tz.length; sz++)
                if (tz[sz]) {
                  this._firstDevice[zz] = sz;
                  break
                } break
          }
        }
      }
    }
    var iz = sz(39342);
    class Lz {
      constructor() {
        this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1
      }
      get singleClick() {
        return this._singleClick
      }
      get nK() {
        return this._doubleClick
      }
      get hasSwiped() {
        return this._hasSwiped
      }
      get ignore() {
        return this._ignore
      }
      set singleClick(zz) {
        this._singleClick = zz
      }
      set nK(zz) {
        this._doubleClick = zz
      }
      set hasSwiped(zz) {
        this._hasSwiped = zz
      }
      set ignore(zz) {
        this._ignore = zz
      }
    }
    class lz {
      constructor(zz) {
        this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1, this._skipPointerTap = !1, this._isMultiTouchGesture = !1, this._pointerX = 0, this._pointerY = 0, this._startingPointerPosition = new Kz.n(0, 0), this._previousStartingPointerPosition = new Kz.n(0, 0), this._startingPointerTime = 0, this._previousStartingPointerTime = 0, this._pointerCaptures = {}, this._meshUnderPointerId = {}, this._movePointerInfo = null, this._latestPointerMoveEvents = new Map, this._cameraObserverCount = 0, this._delayedClicks = [null, null, null, null, null], this._deviceSourceManager = null, this._scene = zz || rz.c.LastCreatedScene, this._scene
      }
      get meshUnderPointer() {
        return this._movePointerInfo && (this._movePointerInfo._generatePickInfo(), this._movePointerInfo = null), this._pointerOverMesh
      }
      getMeshUnderPointerByPointerId(zz) {
        return this._meshUnderPointerId[zz] || null
      }
      get unTranslatedPointer() {
        return new Kz.n(this._unTranslatedPointerX, this._unTranslatedPointerY)
      }
      get pointerX() {
        return this._pointerX
      }
      set pointerX(zz) {
        this._pointerX = zz
      }
      get pointerY() {
        return this._pointerY
      }
      set pointerY(zz) {
        this._pointerY = zz
      }
      _updatePointerPosition(zz) {
        const tz = this._scene.FD().getInputElementClientRect();
        tz && (this._pointerX = zz.clientX - tz.left, this._pointerY = zz.clientY - tz.top, this._unTranslatedPointerX = this._pointerX, this._unTranslatedPointerY = this._pointerY)
      }
      _processPointerMove(zz, tz) {
        const sz = this._scene,
          Fz = sz.FD(),
          Wz = Fz.getInputElement();
        Wz && (Wz.tabIndex = Fz.canvasTabIndex, sz.doNotHandleCursors || (Wz.style.cursor = sz.defaultCursor)), this._setCursorAndPointerOverMesh(zz, tz, sz);
        for (const oz of sz._pointerMoveStage) {
          zz = zz || this._pickMove(tz);
          const sz = !!zz?.pickedMesh;
          zz = oz.action(this._unTranslatedPointerX, this._unTranslatedPointerY, zz, sz, Wz)
        }
        const Xz = tz.inputIndex >= Iz.MouseWheelX && tz.inputIndex <= Iz.MouseWheelZ ? xz.c.POINTERWHEEL : xz.c.POINTERMOVE;
        let Oz;
        sz.onPointerMove && (zz = zz || this._pickMove(tz), sz.onPointerMove(tz, zz, Xz)), zz ? (Oz = new xz.g(Xz, tz, zz), this._setRayOnPointerInfo(zz, tz)) : (Oz = new xz.g(Xz, tz, null, this), this._movePointerInfo = Oz), sz.onPointerObservable.hasObservers() && sz.onPointerObservable.notifyObservers(Oz, Xz)
      }
      _setRayOnPointerInfo(zz, tz) {
        const sz = this._scene;
        zz && iz.c._IsPickingAvailable && (zz.ray || (zz.ray = sz.createPickingRay(tz.offsetX, tz.offsetY, Kz.e.Identity(), sz.activeCamera)))
      }
      _addCameraPointerObserver(zz, tz) {
        return this._cameraObserverCount++, this._scene.onPointerObservable.add(zz, tz)
      }
      _removeCameraPointerObserver(zz) {
        return this._cameraObserverCount--, this._scene.onPointerObservable.remove(zz)
      }
      _checkForPicking() {
        return !!(this._scene.onPointerObservable.observers.length > this._cameraObserverCount || this._scene.onPointerPick)
      }
      _checkPrePointerObservable(zz, tz, sz) {
        const Fz = this._scene,
          Wz = new xz.e(sz, tz, this._unTranslatedPointerX, this._unTranslatedPointerY);
        return zz && (Wz.originalPickingInfo = zz, Wz.ray = zz.ray, "xr-near" === tz.pointerType && zz.originMesh && (Wz.nearInteractionPickingInfo = zz)), Fz.onPrePointerObservable.notifyObservers(Wz, sz), !!Wz.skipOnPointerObservable
      }
      _pickMove(zz) {
        const tz = this._scene,
          sz = tz.gb(this._unTranslatedPointerX, this._unTranslatedPointerY, tz.pointerMovePredicate, tz.pointerMoveFastCheck, tz.cameraToUseForPointers, tz.pointerMoveTrianglePredicate);
        return this._setCursorAndPointerOverMesh(sz, zz, tz), sz
      }
      _updateMeshUnderPointer() {
        const zz = this._scene;
        if (!zz.constantlyUpdateMeshUnderPointer || 0 === this._latestPointerMoveEvents.size || zz.skipPointerMovePicking || !zz.cameraToUseForPointers && !zz.activeCamera) return;
        this._ensurePointerMovePredicate();
        const tz = this._pointerX,
          sz = this._pointerY,
          Fz = this._unTranslatedPointerX,
          Wz = this._unTranslatedPointerY;
        for (const Xz of this._latestPointerMoveEvents.values()) this._pointerX = Xz.pointerX, this._pointerY = Xz.pointerY, this._unTranslatedPointerX = Xz.unTranslatedPointerX, this._unTranslatedPointerY = Xz.unTranslatedPointerY, this._pickMove(Xz.event);
        this._pointerX = tz, this._pointerY = sz, this._unTranslatedPointerX = Fz, this._unTranslatedPointerY = Wz
      }
      _ensurePointerMovePredicate() {
        const zz = this._scene;
        zz.pointerMovePredicate || (zz.pointerMovePredicate = tz => (tz._isPointerMovePickable ?? tz.Ng) && tz.isVisible && tz.isReady() && tz.isEnabled() && (tz.enablePointerMoveEvents || zz.constantlyUpdateMeshUnderPointer || null !== tz._getActionManagerForTrigger()) && (!zz.cameraToUseForPointers || 0 !== (zz.cameraToUseForPointers.layerMask & tz.layerMask)))
      }
      _setCursorAndPointerOverMesh(zz, tz, sz) {
        const Fz = sz.FD().getInputElement();
        if (zz?.pickedMesh) {
          if (this.setPointerOverMesh(zz.pickedMesh, tz.pointerId, zz, tz), !sz.doNotHandleCursors && Fz && this._pointerOverMesh) {
            const zz = this._pointerOverMesh._getActionManagerForTrigger();
            zz && zz.hasPointerTriggers && (Fz.style.cursor = zz.hoverCursor || sz.hoverCursor)
          }
        } else this.setPointerOverMesh(null, tz.pointerId, zz, tz)
      }
      simulatePointerMove(zz, tz) {
        const sz = new PointerEvent("pointermove", tz);
        sz.inputIndex = Iz.Move, this._checkPrePointerObservable(zz, sz, xz.c.POINTERMOVE) || this._processPointerMove(zz, sz)
      }
      simulatePointerDown(zz, tz) {
        const sz = new PointerEvent("pointerdown", tz);
        sz.inputIndex = sz.button + 2, this._checkPrePointerObservable(zz, sz, xz.c.POINTERDOWN) || this._processPointerDown(zz, sz)
      }
      _processPointerDown(zz, tz) {
        const sz = this._scene;
        if (zz?.pickedMesh) {
          this._pickedDownMesh = zz.pickedMesh;
          const Fz = zz.pickedMesh._getActionManagerForTrigger();
          if (Fz) {
            if (Fz.hasPickTriggers) switch (Fz.processTrigger(5, new wz(zz.pickedMesh, sz.pointerX, sz.pointerY, zz.pickedMesh, tz, zz)), tz.button) {
              case 0:
                Fz.processTrigger(2, new wz(zz.pickedMesh, sz.pointerX, sz.pointerY, zz.pickedMesh, tz, zz));
                break;
              case 1:
                Fz.processTrigger(4, new wz(zz.pickedMesh, sz.pointerX, sz.pointerY, zz.pickedMesh, tz, zz));
                break;
              case 2:
                Fz.processTrigger(3, new wz(zz.pickedMesh, sz.pointerX, sz.pointerY, zz.pickedMesh, tz, zz))
            }
            Fz.hasSpecificTrigger(8) && window.setTimeout((() => {
              const zz = sz.gb(this._unTranslatedPointerX, this._unTranslatedPointerY, (zz => zz.Ng && zz.isVisible && zz.isReady() && zz.actionManager && zz.actionManager.hasSpecificTrigger(8) && zz === this._pickedDownMesh), !1, sz.cameraToUseForPointers);
              zz?.pickedMesh && Fz && 0 !== this._activePointerIdsCount && Date.now() - this._startingPointerTime > lz.LongPressDelay && !this._isPointerSwiping() && (this._startingPointerTime = 0, Fz.processTrigger(8, wz.CreateNew(zz.pickedMesh, tz)))
            }), lz.LongPressDelay)
          }
        } else
          for (const Xz of sz._pointerDownStage) zz = Xz.action(this._unTranslatedPointerX, this._unTranslatedPointerY, zz, tz, !1);
        let Fz;
        const Wz = xz.c.POINTERDOWN;
        zz ? (sz.onPointerDown && sz.onPointerDown(tz, zz, Wz), Fz = new xz.g(Wz, tz, zz), this._setRayOnPointerInfo(zz, tz)) : Fz = new xz.g(Wz, tz, null, this), sz.onPointerObservable.hasObservers() && sz.onPointerObservable.notifyObservers(Fz, Wz)
      }
      _isPointerSwiping() {
        return this._isSwiping
      }
      simulatePointerUp(zz, tz, sz) {
        const Fz = new PointerEvent("pointerup", tz);
        Fz.inputIndex = Iz.Move;
        const Wz = new Lz;
        sz ? Wz.nK = !0 : Wz.singleClick = !0, this._checkPrePointerObservable(zz, Fz, xz.c.POINTERUP) || this._processPointerUp(zz, Fz, Wz)
      }
      _processPointerUp(zz, tz, sz) {
        const Fz = this._scene;
        if (zz?.pickedMesh) {
          if (this._pickedUpMesh = zz.pickedMesh, this._pickedDownMesh === this._pickedUpMesh && (Fz.onPointerPick && Fz.onPointerPick(tz, zz), sz.singleClick && !sz.ignore && Fz.onPointerObservable.observers.length > this._cameraObserverCount)) {
            const sz = xz.c.POINTERPICK,
              Wz = new xz.g(sz, tz, zz);
            this._setRayOnPointerInfo(zz, tz), Fz.onPointerObservable.notifyObservers(Wz, sz)
          }
          const Wz = zz.pickedMesh._getActionManagerForTrigger();
          if (Wz && !sz.ignore) {
            Wz.processTrigger(7, wz.CreateNew(zz.pickedMesh, tz, zz)), !sz.hasSwiped && sz.singleClick && Wz.processTrigger(1, wz.CreateNew(zz.pickedMesh, tz, zz));
            const Fz = zz.pickedMesh._getActionManagerForTrigger(6);
            sz.nK && Fz && Fz.processTrigger(6, wz.CreateNew(zz.pickedMesh, tz, zz))
          }
        } else if (!sz.ignore)
          for (const Wz of Fz._pointerUpStage) zz = Wz.action(this._unTranslatedPointerX, this._unTranslatedPointerY, zz, tz, sz.nK);
        if (this._pickedDownMesh && this._pickedDownMesh !== this._pickedUpMesh) {
          const zz = this._pickedDownMesh._getActionManagerForTrigger(16);
          zz && zz.processTrigger(16, wz.CreateNew(this._pickedDownMesh, tz))
        }
        if (!sz.ignore) {
          const Wz = new xz.g(xz.c.POINTERUP, tz, zz);
          if (this._setRayOnPointerInfo(zz, tz), Fz.onPointerObservable.notifyObservers(Wz, xz.c.POINTERUP), Fz.onPointerUp && Fz.onPointerUp(tz, zz, xz.c.POINTERUP), !sz.hasSwiped && !this._skipPointerTap && !this._isMultiTouchGesture) {
            let Wz = 0;
            if (sz.singleClick ? Wz = xz.c.POINTERTAP : sz.nK && (Wz = xz.c.POINTERDOUBLETAP), Wz) {
              const sz = new xz.g(Wz, tz, zz);
              Fz.onPointerObservable.hasObservers() && Fz.onPointerObservable.hasSpecificMask(Wz) && Fz.onPointerObservable.notifyObservers(sz, Wz)
            }
          }
        }
      }
      isPointerCaptured() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._pointerCaptures[zz]
      }
      attachControl() {
        let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          sz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Wz = this._scene,
          Xz = Wz.FD();
        Fz || (Fz = Xz.getInputElement()), this._alreadyAttached && this.detachControl(), Fz && (this._alreadyAttachedTo = Fz), this._deviceSourceManager = new kz(Xz), this._initActionManager = zz => {
          if (!this._meshPickProceed) {
            const tz = Wz.skipPointerUpPicking || 0 === Wz._registeredActions && !this._checkForPicking() && !Wz.onPointerUp ? null : Wz.gb(this._unTranslatedPointerX, this._unTranslatedPointerY, Wz.pointerUpPredicate, Wz.pointerUpFastCheck, Wz.cameraToUseForPointers, Wz.pointerUpTrianglePredicate);
            this._currentPickResult = tz, tz && (zz = tz.hit && tz.pickedMesh ? tz.pickedMesh._getActionManagerForTrigger() : null), this._meshPickProceed = !0
          }
          return zz
        }, this._delayedSimpleClick = (zz, tz, sz) => {
          if ((Date.now() - this._previousStartingPointerTime > lz.DoubleClickDelay && !this._doubleClickOccured || zz !== this._previousButtonPressed) && (this._doubleClickOccured = !1, tz.singleClick = !0, tz.ignore = !1, this._delayedClicks[zz])) {
            const tz = this._delayedClicks[zz].evt,
              sz = xz.c.POINTERTAP,
              Fz = new xz.g(sz, tz, this._currentPickResult);
            Wz.onPointerObservable.hasObservers() && Wz.onPointerObservable.hasSpecificMask(sz) && Wz.onPointerObservable.notifyObservers(Fz, sz), this._delayedClicks[zz] = null
          }
        }, this._initClickEvent = (zz, tz, sz, Fz) => {
          const Wz = new Lz;
          this._currentPickResult = null;
          let Xz = null,
            Oz = zz.hasSpecificMask(xz.c.POINTERPICK) || tz.hasSpecificMask(xz.c.POINTERPICK) || zz.hasSpecificMask(xz.c.POINTERTAP) || tz.hasSpecificMask(xz.c.POINTERTAP) || zz.hasSpecificMask(xz.c.POINTERDOUBLETAP) || tz.hasSpecificMask(xz.c.POINTERDOUBLETAP);
          !Oz && mz && (Xz = this._initActionManager(Xz, Wz), Xz && (Oz = Xz.hasPickTriggers));
          let oz = !1;
          if (Oz = Oz && !this._isMultiTouchGesture, Oz) {
            const Oz = sz.button;
            if (Wz.hasSwiped = this._isPointerSwiping(), !Wz.hasSwiped) {
              let vz = !lz.ExclusiveDoubleClickMode;
              if (vz || (vz = !zz.hasSpecificMask(xz.c.POINTERDOUBLETAP) && !tz.hasSpecificMask(xz.c.POINTERDOUBLETAP), vz && !mz.HasSpecificTrigger(6) && (Xz = this._initActionManager(Xz, Wz), Xz && (vz = !Xz.hasSpecificTrigger(6)))), vz)(Date.now() - this._previousStartingPointerTime > lz.DoubleClickDelay || Oz !== this._previousButtonPressed) && (Wz.singleClick = !0, Fz(Wz, this._currentPickResult), oz = !0);
              else {
                const zz = {
                  evt: sz,
                  clickInfo: Wz,
                  timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, Oz, Wz, Fz), lz.DoubleClickDelay)
                };
                this._delayedClicks[Oz] = zz
              }
              let Uz = zz.hasSpecificMask(xz.c.POINTERDOUBLETAP) || tz.hasSpecificMask(xz.c.POINTERDOUBLETAP);
              !Uz && mz.HasSpecificTrigger(6) && (Xz = this._initActionManager(Xz, Wz), Xz && (Uz = Xz.hasSpecificTrigger(6))), Uz && (Oz === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < lz.DoubleClickDelay && !this._doubleClickOccured ? (Wz.hasSwiped || this._isPointerSwiping() ? (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = Oz, lz.ExclusiveDoubleClickMode ? (this._delayedClicks[Oz] && (clearTimeout(this._delayedClicks[Oz]?.timeoutId), this._delayedClicks[Oz] = null), Fz(Wz, this._previousPickResult)) : Fz(Wz, this._currentPickResult)) : (this._previousStartingPointerTime = 0, this._doubleClickOccured = !0, Wz.nK = !0, Wz.ignore = !1, lz.ExclusiveDoubleClickMode && this._delayedClicks[Oz] && (clearTimeout(this._delayedClicks[Oz]?.timeoutId), this._delayedClicks[Oz] = null), Fz(Wz, this._currentPickResult)), oz = !0) : (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = Oz))
            }
          }
          oz || Fz(Wz, this._currentPickResult)
        }, this._onPointerMove = zz => {
          if (this._updatePointerPosition(zz), this._latestPointerMoveEvents.set(zz.pointerId, {
              event: zz,
              pointerX: this._pointerX,
              pointerY: this._pointerY,
              unTranslatedPointerX: this._unTranslatedPointerX,
              unTranslatedPointerY: this._unTranslatedPointerY
            }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > lz.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > lz.DragMovementThreshold), Xz.isPointerLock && Xz._verifyPointerLock(), this._checkPrePointerObservable(null, zz, zz.inputIndex >= Iz.MouseWheelX && zz.inputIndex <= Iz.MouseWheelZ ? xz.c.POINTERWHEEL : xz.c.POINTERMOVE)) return;
          if (!Wz.cameraToUseForPointers && !Wz.activeCamera) return;
          if (Wz.skipPointerMovePicking) return void this._processPointerMove(new bz.e, zz);
          this._ensurePointerMovePredicate();
          const tz = Wz._registeredActions > 0 || Wz.constantlyUpdateMeshUnderPointer ? this._pickMove(zz) : null;
          this._processPointerMove(tz, zz)
        }, this._onPointerDown = zz => {
          const tz = this._activePointerIds.indexOf(-1);
          if (-1 === tz ? this._activePointerIds.push(zz.pointerId) : this._activePointerIds[tz] = zz.pointerId, this._activePointerIdsCount++, this._pickedDownMesh = null, this._meshPickProceed = !1, lz.ExclusiveDoubleClickMode)
            for (let Fz = 0; Fz < this._delayedClicks.length; Fz++)
              if (this._delayedClicks[Fz])
                if (zz.button === Fz) clearTimeout(this._delayedClicks[Fz]?.timeoutId);
                else {
                  const zz = this._delayedClicks[Fz].clickInfo;
                  this._doubleClickOccured = !1, zz.singleClick = !0, zz.ignore = !1;
                  const tz = this._delayedClicks[Fz].evt,
                    sz = xz.c.POINTERTAP,
                    Xz = new xz.g(sz, tz, this._currentPickResult);
                  Wz.onPointerObservable.hasObservers() && Wz.onPointerObservable.hasSpecificMask(sz) && Wz.onPointerObservable.notifyObservers(Xz, sz), this._delayedClicks[Fz] = null
                } if (this._updatePointerPosition(zz), -1 === this._swipeButtonPressed && (this._swipeButtonPressed = zz.button), Wz.preventDefaultOnPointerDown && Fz && (zz.preventDefault(), Fz.focus()), this._startingPointerPosition.x = this._pointerX, this._startingPointerPosition.y = this._pointerY, this._startingPointerTime = Date.now(), this._checkPrePointerObservable(null, zz, xz.c.POINTERDOWN)) return;
          if (!Wz.cameraToUseForPointers && !Wz.activeCamera) return;
          let sz;
          this._pointerCaptures[zz.pointerId] = !0, Wz.pointerDownPredicate || (Wz.pointerDownPredicate = zz => zz.Ng && zz.isVisible && zz.isReady() && zz.isEnabled() && (!Wz.cameraToUseForPointers || 0 !== (Wz.cameraToUseForPointers.layerMask & zz.layerMask))), this._pickedDownMesh = null, sz = Wz.skipPointerDownPicking || 0 === Wz._registeredActions && !this._checkForPicking() && !Wz.onPointerDown ? new bz.e : Wz.gb(this._unTranslatedPointerX, this._unTranslatedPointerY, Wz.pointerDownPredicate, Wz.pointerDownFastCheck, Wz.cameraToUseForPointers, Wz.pointerDownTrianglePredicate), this._processPointerDown(sz, zz)
        }, this._onPointerUp = zz => {
          const tz = this._activePointerIds.indexOf(zz.pointerId); - 1 !== tz && (this._activePointerIds[tz] = -1, this._activePointerIdsCount--, "touch" === zz.pointerType && this._latestPointerMoveEvents.delete(zz.pointerId), this._pickedUpMesh = null, this._meshPickProceed = !1, this._updatePointerPosition(zz), Wz.preventDefaultOnPointerUp && Fz && (zz.preventDefault(), Fz.focus()), this._initClickEvent(Wz.onPrePointerObservable, Wz.onPointerObservable, zz, ((tz, sz) => {
            if (Wz.onPrePointerObservable.hasObservers() && (this._skipPointerTap = !1, !tz.ignore)) {
              if (this._checkPrePointerObservable(null, zz, xz.c.POINTERUP)) return this._swipeButtonPressed === zz.button && (this._isSwiping = !1, this._swipeButtonPressed = -1), void(0 === zz.buttons && (this._pointerCaptures[zz.pointerId] = !1));
              tz.hasSwiped || (tz.singleClick && Wz.onPrePointerObservable.hasSpecificMask(xz.c.POINTERTAP) && this._checkPrePointerObservable(null, zz, xz.c.POINTERTAP) && (this._skipPointerTap = !0), tz.nK && Wz.onPrePointerObservable.hasSpecificMask(xz.c.POINTERDOUBLETAP) && this._checkPrePointerObservable(null, zz, xz.c.POINTERDOUBLETAP) && (this._skipPointerTap = !0))
            }
            this._pointerCaptures[zz.pointerId] ? (0 === zz.buttons && (this._pointerCaptures[zz.pointerId] = !1), (Wz.cameraToUseForPointers || Wz.activeCamera) && (Wz.pointerUpPredicate || (Wz.pointerUpPredicate = zz => zz.Ng && zz.isVisible && zz.isReady() && zz.isEnabled() && (!Wz.cameraToUseForPointers || 0 !== (Wz.cameraToUseForPointers.layerMask & zz.layerMask))), !this._meshPickProceed && (mz && mz.HasTriggers || this._checkForPicking() || Wz.onPointerUp) && this._initActionManager(null, tz), sz || (sz = this._currentPickResult), this._processPointerUp(sz, zz, tz), this._previousPickResult = this._currentPickResult, this._swipeButtonPressed === zz.button && (this._isSwiping = !1, this._swipeButtonPressed = -1))) : this._swipeButtonPressed === zz.button && (this._isSwiping = !1, this._swipeButtonPressed = -1)
          })))
        }, this._onKeyDown = zz => {
          const tz = cz.b.KEYDOWN;
          if (Wz.onPreKeyboardObservable.hasObservers()) {
            const sz = new cz.f(tz, zz);
            if (Wz.onPreKeyboardObservable.notifyObservers(sz, tz), sz.skipOnKeyboardObservable) return
          }
          if (Wz.onKeyboardObservable.hasObservers()) {
            const sz = new cz.j(tz, zz);
            Wz.onKeyboardObservable.notifyObservers(sz, tz)
          }
          Wz.actionManager && Wz.actionManager.processTrigger(14, wz.CreateNewFromScene(Wz, zz))
        }, this._onKeyUp = zz => {
          const tz = cz.b.KEYUP;
          if (Wz.onPreKeyboardObservable.hasObservers()) {
            const sz = new cz.f(tz, zz);
            if (Wz.onPreKeyboardObservable.notifyObservers(sz, tz), sz.skipOnKeyboardObservable) return
          }
          if (Wz.onKeyboardObservable.hasObservers()) {
            const sz = new cz.j(tz, zz);
            Wz.onKeyboardObservable.notifyObservers(sz, tz)
          }
          Wz.actionManager && Wz.actionManager.processTrigger(15, wz.CreateNewFromScene(Wz, zz))
        }, this._deviceSourceManager.onDeviceConnectedObservable.add((Fz => {
          Fz.deviceType === Jz.Mouse ? Fz.onInputChangedObservable.add((Wz => {
            this._originMouseEvent = Wz, Wz.inputIndex === Iz.LeftClick || Wz.inputIndex === Iz.MiddleClick || Wz.inputIndex === Iz.RightClick || Wz.inputIndex === Iz.BrowserBack || Wz.inputIndex === Iz.BrowserForward ? tz && 1 === Fz.getInput(Wz.inputIndex) ? this._onPointerDown(Wz) : zz && 0 === Fz.getInput(Wz.inputIndex) && this._onPointerUp(Wz) : sz && (Wz.inputIndex === Iz.Move ? this._onPointerMove(Wz) : Wz.inputIndex !== Iz.MouseWheelX && Wz.inputIndex !== Iz.MouseWheelY && Wz.inputIndex !== Iz.MouseWheelZ || this._onPointerMove(Wz))
          })) : Fz.deviceType === Jz.Touch ? Fz.onInputChangedObservable.add((Wz => {
            Wz.inputIndex === Iz.LeftClick && (tz && 1 === Fz.getInput(Wz.inputIndex) ? (this._onPointerDown(Wz), this._activePointerIdsCount > 1 && (this._isMultiTouchGesture = !0)) : zz && 0 === Fz.getInput(Wz.inputIndex) && (this._onPointerUp(Wz), 0 === this._activePointerIdsCount && (this._isMultiTouchGesture = !1))), sz && Wz.inputIndex === Iz.Move && this._onPointerMove(Wz)
          })) : Fz.deviceType === Jz.Keyboard && Fz.onInputChangedObservable.add((zz => {
            "keydown" === zz.type ? this._onKeyDown(zz) : "keyup" === zz.type && this._onKeyUp(zz)
          }))
        })), this._alreadyAttached = !0
      }
      detachControl() {
        this._alreadyAttached && (this._deviceSourceManager.dispose(), this._deviceSourceManager = null, this._alreadyAttachedTo && !this._scene.doNotHandleCursors && (this._alreadyAttachedTo.style.cursor = this._scene.defaultCursor), this._alreadyAttached = !1, this._alreadyAttachedTo = null, this._latestPointerMoveEvents.clear())
      }
      setPointerOverMesh(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sz = arguments.length > 2 ? arguments[2] : void 0,
          Fz = arguments.length > 3 ? arguments[3] : void 0;
        if (this._meshUnderPointerId[tz] === zz && (!zz || !zz._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting)) return;
        const Wz = this._meshUnderPointerId[tz];
        let Xz;
        Wz && (Xz = Wz._getActionManagerForTrigger(10), Xz && Xz.processTrigger(10, new wz(Wz, this._pointerX, this._pointerY, zz, Fz, {
          pointerId: tz
        }))), zz ? (this._meshUnderPointerId[tz] = zz, this._pointerOverMesh = zz, Xz = zz._getActionManagerForTrigger(9), Xz && Xz.processTrigger(9, new wz(zz, this._pointerX, this._pointerY, zz, Fz, {
          pointerId: tz,
          pickResult: sz
        }))) : (delete this._meshUnderPointerId[tz], this._pointerOverMesh = null), this._scene.onMeshUnderPointerUpdatedObservable.hasObservers() && this._scene.onMeshUnderPointerUpdatedObservable.notifyObservers({
          mesh: zz,
          pointerId: tz
        })
      }
      getPointerOverMesh() {
        return this.meshUnderPointer
      }
      _invalidateMesh(zz) {
        this._pointerOverMesh === zz && (this._pointerOverMesh = null), this._pickedDownMesh === zz && (this._pickedDownMesh = null), this._pickedUpMesh === zz && (this._pickedUpMesh = null);
        for (const tz in this._meshUnderPointerId) this._meshUnderPointerId[tz] === zz && delete this._meshUnderPointerId[tz]
      }
    }
    lz.DragMovementThreshold = 10, lz.LongPressDelay = 500, lz.DoubleClickDelay = 300, lz.ExclusiveDoubleClickMode = !1;
    var nz = sz(39121),
      az = sz(36654),
      qz = sz(37191);
    class Sz {
      static get UniqueId() {
        const zz = this._UniqueIdCounter;
        return this._UniqueIdCounter++, zz
      }
    }
    Sz._UniqueIdCounter = 1;
    var Vz = sz(39205),
      Rz = sz(39350),
      pz = sz(36487);
    class fz {
      constructor() {
        this.pointerDownFastCheck = !1, this.pointerUpFastCheck = !1, this.pointerMoveFastCheck = !1, this.skipPointerMovePicking = !1, this.skipPointerDownPicking = !1, this.skipPointerUpPicking = !1
      }
    }
    var Ez, zt, tt, st, Ft, Wt, Xt, Ot, ot, vt, Ut, Kt, ut, Nt, bt, wt, Dt, gt, Ht, Bt, Pt, rt, Yt, xt, mt, Jt, It, Ct, et, Zt, Gt, Tt, ct, jt, At, yt, Mt, dt, ht, Qt, kt, it, Lt, lt, nt, qt, St, Vt, Rt, pt, ft, Et, zs, ts = sz(38097),
      ss = sz(36518);
    const Fs = new Kz.q,
      Ws = new Kz.q;
    var Xs;
    ! function(zz) {
      zz[zz.BackwardCompatible = 0] = "BackwardCompatible", zz[zz.Intermediate = 1] = "Intermediate", zz[zz.Aggressive = 2] = "Aggressive"
    }(Xs || (Xs = {}));
    class Os {
      static DefaultMaterialFactory(zz) {
        throw (0, Yz.i)("StandardMaterial")
      }
      static CollisionCoordinatorFactory() {
        throw (0, Yz.i)("DefaultCollisionCoordinator")
      }
      get clearColor() {
        return this._clearColor
      }
      set clearColor(zz) {
        zz !== this._clearColor && (this._clearColor = zz, this.onClearColorChangedObservable.notifyObservers(this._clearColor))
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      get performancePriority() {
        return this._performancePriority
      }
      set performancePriority(zz) {
        if (zz !== this._performancePriority) {
          switch (this._performancePriority = zz, zz) {
            case 0:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !1, this.autoClear = !0;
              break;
            case 1:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !0, this.autoClear = !1;
              break;
            case 2:
              this.skipFrustumClipping = !0, this._renderingManager.maintainStateBetweenFrames = !0, this.skipPointerMovePicking = !0, this.autoClear = !1
          }
          this.onScenePerformancePriorityChangedObservable.notifyObservers(zz)
        }
      }
      set forceWireframe(zz) {
        this._forceWireframe !== zz && (this._forceWireframe = zz, this.markAllMaterialsAsDirty(16))
      }
      get forceWireframe() {
        return this._forceWireframe
      }
      set skipFrustumClipping(zz) {
        this._skipFrustumClipping !== zz && (this._skipFrustumClipping = zz)
      }
      get skipFrustumClipping() {
        return this._skipFrustumClipping
      }
      set forcePointsCloud(zz) {
        this._forcePointsCloud !== zz && (this._forcePointsCloud = zz, this.markAllMaterialsAsDirty(16))
      }
      get forcePointsCloud() {
        return this._forcePointsCloud
      }
      get environmentTexture() {
        return this._environmentTexture
      }
      set environmentTexture(zz) {
        this._environmentTexture !== zz && (this._environmentTexture = zz, this.onEnvironmentTextureChangedObservable.notifyObservers(zz), this.markAllMaterialsAsDirty(1))
      }
      getNodes() {
        let zz = [];
        zz = zz.concat(this.meshes), zz = zz.concat(this.lights), zz = zz.concat(this.cameras), zz = zz.concat(this.transformNodes);
        for (const tz of this.skeletons) zz = zz.concat(tz.bones);
        return zz
      }
      get animationPropertiesOverride() {
        return this._animationPropertiesOverride
      }
      set animationPropertiesOverride(zz) {
        this._animationPropertiesOverride = zz
      }
      set onDispose(zz) {
        this._onDisposeObserver && this.qJ.remove(this._onDisposeObserver), this._onDisposeObserver = this.qJ.add(zz)
      }
      set beforeRender(zz) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), zz && (this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(zz))
      }
      set afterRender(zz) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), zz && (this._onAfterRenderObserver = this.onAfterRenderObservable.add(zz))
      }
      set beforeCameraRender(zz) {
        this._onBeforeCameraRenderObserver && this.onBeforeCameraRenderObservable.remove(this._onBeforeCameraRenderObserver), this._onBeforeCameraRenderObserver = this.onBeforeCameraRenderObservable.add(zz)
      }
      set afterCameraRender(zz) {
        this._onAfterCameraRenderObserver && this.onAfterCameraRenderObservable.remove(this._onAfterCameraRenderObserver), this._onAfterCameraRenderObserver = this.onAfterCameraRenderObservable.add(zz)
      }
      get pointerDownPredicate() {
        return this._pointerPickingConfiguration.pointerDownPredicate
      }
      set pointerDownPredicate(zz) {
        this._pointerPickingConfiguration.pointerDownPredicate = zz
      }
      get pointerUpPredicate() {
        return this._pointerPickingConfiguration.pointerUpPredicate
      }
      set pointerUpPredicate(zz) {
        this._pointerPickingConfiguration.pointerUpPredicate = zz
      }
      get pointerMovePredicate() {
        return this._pointerPickingConfiguration.pointerMovePredicate
      }
      set pointerMovePredicate(zz) {
        this._pointerPickingConfiguration.pointerMovePredicate = zz
      }
      get pointerDownFastCheck() {
        return this._pointerPickingConfiguration.pointerDownFastCheck
      }
      set pointerDownFastCheck(zz) {
        this._pointerPickingConfiguration.pointerDownFastCheck = zz
      }
      get pointerUpFastCheck() {
        return this._pointerPickingConfiguration.pointerUpFastCheck
      }
      set pointerUpFastCheck(zz) {
        this._pointerPickingConfiguration.pointerUpFastCheck = zz
      }
      get pointerMoveFastCheck() {
        return this._pointerPickingConfiguration.pointerMoveFastCheck
      }
      set pointerMoveFastCheck(zz) {
        this._pointerPickingConfiguration.pointerMoveFastCheck = zz
      }
      get skipPointerMovePicking() {
        return this._pointerPickingConfiguration.skipPointerMovePicking
      }
      set skipPointerMovePicking(zz) {
        this._pointerPickingConfiguration.skipPointerMovePicking = zz
      }
      get skipPointerDownPicking() {
        return this._pointerPickingConfiguration.skipPointerDownPicking
      }
      set skipPointerDownPicking(zz) {
        this._pointerPickingConfiguration.skipPointerDownPicking = zz
      }
      get skipPointerUpPicking() {
        return this._pointerPickingConfiguration.skipPointerUpPicking
      }
      set skipPointerUpPicking(zz) {
        this._pointerPickingConfiguration.skipPointerUpPicking = zz
      }
      get unTranslatedPointer() {
        return this._inputManager.unTranslatedPointer
      }
      static get DragMovementThreshold() {
        return lz.DragMovementThreshold
      }
      static set DragMovementThreshold(zz) {
        lz.DragMovementThreshold = zz
      }
      static get LongPressDelay() {
        return lz.LongPressDelay
      }
      static set LongPressDelay(zz) {
        lz.LongPressDelay = zz
      }
      static get DoubleClickDelay() {
        return lz.DoubleClickDelay
      }
      static set DoubleClickDelay(zz) {
        lz.DoubleClickDelay = zz
      }
      static get ExclusiveDoubleClickMode() {
        return lz.ExclusiveDoubleClickMode
      }
      static set ExclusiveDoubleClickMode(zz) {
        lz.ExclusiveDoubleClickMode = zz
      }
      get _eyePosition() {
        return this._forcedViewPosition ?? this.activeCamera?.globalPosition ?? Kz.p.ZeroReadOnly
      }
      bindEyePosition(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vEyePosition",
          sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Fz = this._eyePosition,
          Wz = this.useRightHandedSystem === (null != this._mirroredCameraPosition),
          Xz = this.floatingOriginOffset,
          Oz = Fs.set(Fz.x, Fz.y, Fz.z, Wz ? -1 : 1),
          oz = Oz.subtractFromFloatsToRef(Xz.x, Xz.y, Xz.z, 0, Ws);
        return zz && (sz ? zz.setFloat3(tz, oz.x, oz.y, oz.z) : zz.setVector4(tz, oz)), Oz
      }
      finalizeSceneUbo() {
        const zz = this.getSceneUniformBuffer(),
          tz = this.bindEyePosition(null),
          sz = this.floatingOriginOffset;
        return zz.updateFloat4("vEyePosition", tz.x - sz.x, tz.y - sz.y, tz.z - sz.z, tz.w), zz.update(), zz
      }
      set useRightHandedSystem(zz) {
        this._useRightHandedSystem !== zz && (this._useRightHandedSystem = zz, this.markAllMaterialsAsDirty(16))
      }
      get useRightHandedSystem() {
        return this._useRightHandedSystem
      }
      setStepId(zz) {
        this._currentStepId = zz
      }
      getStepId() {
        return this._currentStepId
      }
      getInternalStep() {
        return this._currentInternalStep
      }
      set fogEnabled(zz) {
        this._fogEnabled !== zz && (this._fogEnabled = zz, this.markAllMaterialsAsDirty(16))
      }
      get fogEnabled() {
        return this._fogEnabled
      }
      set fogMode(zz) {
        this._fogMode !== zz && (this._fogMode = zz, this.markAllMaterialsAsDirty(16))
      }
      get fogMode() {
        return this._fogMode
      }
      get prePass() {
        return !!this.prePassRenderer && this.prePassRenderer.defaultRT.enabled
      }
      set shadowsEnabled(zz) {
        this._shadowsEnabled !== zz && (this._shadowsEnabled = zz, this.markAllMaterialsAsDirty(2))
      }
      get shadowsEnabled() {
        return this._shadowsEnabled
      }
      set lightsEnabled(zz) {
        this._lightsEnabled !== zz && (this._lightsEnabled = zz, this.markAllMaterialsAsDirty(2))
      }
      get lightsEnabled() {
        return this._lightsEnabled
      }
      get activeCameras() {
        return this._activeCameras
      }
      set activeCameras(zz) {
        this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), zz && (this._unObserveActiveCameras = (0, pz.f)(zz, (() => {
          this.onActiveCamerasChanged.notifyObservers(this)
        }))), this._activeCameras = zz
      }
      get activeCamera() {
        return this._activeCamera
      }
      set activeCamera(zz) {
        zz !== this._activeCamera && (this._activeCamera = zz, this.onActiveCameraChanged.notifyObservers(this))
      }
      get _hasDefaultMaterial() {
        return Os.DefaultMaterialFactory !== Os._OriginalDefaultMaterialFactory
      }
      get defaultMaterial() {
        return this._defaultMaterial || (this._defaultMaterial = Os.DefaultMaterialFactory(this)), this._defaultMaterial
      }
      set defaultMaterial(zz) {
        this._defaultMaterial = zz
      }
      set texturesEnabled(zz) {
        this._texturesEnabled !== zz && (this._texturesEnabled = zz, this.markAllMaterialsAsDirty(1))
      }
      get texturesEnabled() {
        return this._texturesEnabled
      }
      get frameGraph() {
        return this._frameGraph
      }
      set frameGraph(zz) {
        if (this._frameGraph) return this._frameGraph = zz, void(zz || (this.customRenderFunction = this._currentCustomRenderFunction));
        this._frameGraph = zz, zz && (this._currentCustomRenderFunction = this.customRenderFunction, this.customRenderFunction = this._renderWithFrameGraph, this.activeCamera = null)
      }
      set skeletonsEnabled(zz) {
        this._skeletonsEnabled !== zz && (this._skeletonsEnabled = zz, this.markAllMaterialsAsDirty(8))
      }
      get skeletonsEnabled() {
        return this._skeletonsEnabled
      }
      get collisionCoordinator() {
        return this._collisionCoordinator || (this._collisionCoordinator = Os.CollisionCoordinatorFactory(), this._collisionCoordinator.init(this)), this._collisionCoordinator
      }
      get renderingManager() {
        return this._renderingManager
      }
      get frustumPlanes() {
        return this._frustumPlanes
      }
      _registerTransientComponents() {
        if (this._transientComponents.length > 0) {
          for (const zz of this._transientComponents) zz.register();
          this._transientComponents.length = 0
        }
      }
      Jsz(zz) {
        this._components.push(zz), this._transientComponents.push(zz);
        const tz = zz;
        tz.addFromContainer && tz.serialize && this._serializableComponents.push(tz)
      }
      _getComponent(zz) {
        for (const tz of this._components)
          if (tz.name === zz) return tz;
        return null
      }
      get uniqueId() {
        return this._uniqueId
      }
      constructor(zz, tz) {
        this._inputManager = new lz(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new az.d(.2, .2, .3, 1), this.onClearColorChangedObservable = new Oz.c, this.ambientColor = new az.c(0, 0, 0), this.environmentIntensity = 1, this.iblIntensity = 1, this._performancePriority = 0, this.onScenePerformancePriorityChangedObservable = new Oz.c, this._forceWireframe = !1, this._skipFrustumClipping = !1, this._forcePointsCloud = !1, this.rootNodes = [], this.cameras = [], this.lights = [], this.meshes = [], this.skeletons = [], this.lY = [], this.animations = [], this.animationGroups = [], this.multiMaterials = [], this.materials = [], this.morphTargetManagers = [], this.geometries = [], this.transformNodes = [], this.actionManagers = [], this.objectRenderers = [], this.textures = [], this._environmentTexture = null, this.postProcesses = [], this.effectLayers = [], this.sounds = null, this.layers = [], this.lensFlareSystems = [], this.proceduralTextures = [], this.animationsEnabled = !0, this._animationPropertiesOverride = null, this.useConstantAnimationDeltaTime = !1, this.constantlyUpdateMeshUnderPointer = !1, this.hoverCursor = "pointer", this.defaultCursor = "", this.doNotHandleCursors = !1, this.preventDefaultOnPointerDown = !0, this.preventDefaultOnPointerUp = !0, this.metadata = null, this.reservedDataStore = null, this.disableOfflineSupportExceptionRules = [], this.qJ = new Oz.c, this._onDisposeObserver = null, this.onBeforeRenderObservable = new Oz.c, this._onBeforeRenderObserver = null, this.onAfterRenderObservable = new Oz.c, this.onAfterRenderCameraObservable = new Oz.c, this._onAfterRenderObserver = null, this.onBeforeAnimationsObservable = new Oz.c, this.onAfterAnimationsObservable = new Oz.c, this.onBeforeDrawPhaseObservable = new Oz.c, this.onAfterDrawPhaseObservable = new Oz.c, this.onReadyObservable = new Oz.c, this.onBeforeCameraRenderObservable = new Oz.c, this._onBeforeCameraRenderObserver = null, this.onAfterCameraRenderObservable = new Oz.c, this._onAfterCameraRenderObserver = null, this.onBeforeActiveMeshesEvaluationObservable = new Oz.c, this.onAfterActiveMeshesEvaluationObservable = new Oz.c, this.onBeforeParticlesRenderingObservable = new Oz.c, this.onAfterParticlesRenderingObservable = new Oz.c, this.onDataLoadedObservable = new Oz.c, this.onNewCameraAddedObservable = new Oz.c, this.onCameraRemovedObservable = new Oz.c, this.onNewLightAddedObservable = new Oz.c, this.onLightRemovedObservable = new Oz.c, this.onNewGeometryAddedObservable = new Oz.c, this.onGeometryRemovedObservable = new Oz.c, this.onNewTransformNodeAddedObservable = new Oz.c, this.onTransformNodeRemovedObservable = new Oz.c, this.onNewMeshAddedObservable = new Oz.c, this.onMeshRemovedObservable = new Oz.c, this.onNewSkeletonAddedObservable = new Oz.c, this.onSkeletonRemovedObservable = new Oz.c, this.onNewParticleSystemAddedObservable = new Oz.c, this.onParticleSystemRemovedObservable = new Oz.c, this.onNewAnimationGroupAddedObservable = new Oz.c, this.onAnimationGroupRemovedObservable = new Oz.c, this.onNewMaterialAddedObservable = new Oz.c, this.onNewMultiMaterialAddedObservable = new Oz.c, this.onMaterialRemovedObservable = new Oz.c, this.onMultiMaterialRemovedObservable = new Oz.c, this.onNewTextureAddedObservable = new Oz.c, this.onTextureRemovedObservable = new Oz.c, this.onNewFrameGraphAddedObservable = new Oz.c, this.onFrameGraphRemovedObservable = new Oz.c, this.onNewObjectRendererAddedObservable = new Oz.c, this.onObjectRendererRemovedObservable = new Oz.c, this.onNewPostProcessAddedObservable = new Oz.c, this.onPostProcessRemovedObservable = new Oz.c, this.onNewEffectLayerAddedObservable = new Oz.c, this.onEffectLayerRemovedObservable = new Oz.c, this.onBeforeRenderTargetsRenderObservable = new Oz.c, this.onAfterRenderTargetsRenderObservable = new Oz.c, this.onBeforeStepObservable = new Oz.c, this.onAfterStepObservable = new Oz.c, this.onActiveCameraChanged = new Oz.c, this.onActiveCamerasChanged = new Oz.c, this.onBeforeRenderingGroupObservable = new Oz.c, this.onAfterRenderingGroupObservable = new Oz.c, this.onMeshImportedObservable = new Oz.c, this.onAnimationFileImportedObservable = new Oz.c, this.onEnvironmentTextureChangedObservable = new Oz.c, this.onMeshUnderPointerUpdatedObservable = new Oz.c, this._registeredForLateAnimationBindings = new oz.e(256), this._pointerPickingConfiguration = new fz, this.onPrePointerObservable = new Oz.c, this.onPointerObservable = new Oz.c, this.onPreKeyboardObservable = new Oz.c, this.onKeyboardObservable = new Oz.c, this._useRightHandedSystem = !1, this._timeAccumulator = 0, this._currentStepId = 0, this._currentInternalStep = 0, this._fogEnabled = !0, this._fogMode = Os.FOGMODE_NONE, this.fogColor = new az.c(.2, .2, .3), this.fogDensity = .1, this.fogStart = 0, this.fogEnd = 1e3, this.needsPreviousWorldMatrices = !1, this._shadowsEnabled = !0, this._lightsEnabled = !0, this._unObserveActiveCameras = null, this._texturesEnabled = !0, this._frameGraph = null, this.frameGraphs = [], this.rG = !0, this.particlesEnabled = !0, this.spritesEnabled = !0, this._skeletonsEnabled = !0, this.lensFlaresEnabled = !0, this.collisionsEnabled = !0, this.gravity = new Kz.p(0, -9.807, 0), this.postProcessesEnabled = !0, this.renderTargetsEnabled = !0, this.dumpNextRenderTargets = !1, this.customRenderTargets = [], this.importedMeshesFiles = [], this.probesEnabled = !0, this._meshesForIntersections = new oz.e(256), this.proceduralTexturesEnabled = !0, this._totalVertices = new nz.d, this._activeIndices = new nz.d, this._activeParticles = new nz.d, this._activeBones = new nz.d, this._animationTime = 0, this.animationTimeScale = 1, this._renderId = 0, this._frameId = 0, this._renderingMeshEvaluationDepth = 0, this._executeWhenReadyTimeoutId = null, this._intermediateRendering = !1, this._defaultFrameBufferCleared = !1, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1, this._toBeDisposed = new Array(256), this._activeRequests = new Array, this._delayedFileRequests = null, this._pendingData = [], this._isDisposed = !1, this._isDisposing = !1, this._isReadyChecks = [], this.dispatchAllSubMeshesOfActiveMeshes = !1, this._activeMeshes = new oz.h(256), this._processedMaterials = new oz.h(256), this._renderTargets = new oz.e(256), this._materialsRenderTargets = new oz.e(256), this._activeParticleSystems = new oz.h(256), this._activeSkeletons = new oz.e(32), this._softwareSkinnedMeshes = new oz.e(32), this._activeAnimatables = new Array, this._animationWrites = new Array, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, this._transformMatrix = Kz.e.Zero(), this.requireLightSorting = !1, this._components = [], this._serializableComponents = [], this._transientComponents = [], this._beforeCameraUpdateStage = Bz.g.Create(), this._beforeClearStage = Bz.g.Create(), this._beforeRenderTargetClearStage = Bz.g.Create(), this._gatherRenderTargetsStage = Bz.g.Create(), this._gatherActiveCameraRenderTargetsStage = Bz.g.Create(), this._isReadyForMeshStage = Bz.g.Create(), this._beforeEvaluateActiveMeshStage = Bz.g.Create(), this._evaluateSubMeshStage = Bz.g.Create(), this._preActiveMeshStage = Bz.g.Create(), this._cameraDrawRenderTargetStage = Bz.g.Create(), this._beforeCameraDrawStage = Bz.g.Create(), this._beforeRenderTargetDrawStage = Bz.g.Create(), this._beforeRenderingGroupDrawStage = Bz.g.Create(), this._beforeRenderingMeshStage = Bz.g.Create(), this._afterRenderingMeshStage = Bz.g.Create(), this._afterRenderingGroupDrawStage = Bz.g.Create(), this._afterCameraDrawStage = Bz.g.Create(), this._afterCameraPostProcessStage = Bz.g.Create(), this._afterRenderTargetDrawStage = Bz.g.Create(), this._afterRenderTargetPostProcessStage = Bz.g.Create(), this._afterRenderStage = Bz.g.Create(), this._pointerMoveStage = Bz.g.Create(), this._pointerDownStage = Bz.g.Create(), this._pointerUpStage = Bz.g.Create(), this._geometriesByUniqueId = null, this._uniqueId = 0, this._defaultMeshCandidates = {
          data: [],
          length: 0
        }, this._defaultSubMeshCandidates = {
          data: [],
          length: 0
        }, this.onReadyTimeoutObservable = new Oz.c, this.onReadyTimeoutDuration = 12e4, this._timeoutChecksStartTime = 0, this._floatingOriginScene = void 0, this._preventFreeActiveMeshesAndRenderingGroups = !1, this._activeMeshesFrozen = !1, this._activeMeshesFrozenButKeepClipping = !1, this._skipEvaluateActiveMeshesCompletely = !1, this._freezeActiveMeshesCancel = null, this._useCurrentFrameBuffer = !1, this._allowPostProcessClearColor = !0, this.getDeterministicFrameTime = () => this._engine.getTimeStep(), this._getFloatingOriginScene = () => this._floatingOriginScene, this._registeredActions = 0, this._blockMaterialDirtyMechanism = !1, this._perfCollector = null, this.activeCameras = [], this._uniqueId = this.getUniqueId();
        const sz = {
          useGeometryUniqueIdsMap: !0,
          useMaterialMeshMap: !0,
          useClonedMeshMap: !0,
          virtual: !1,
          defaultCameraLayerMask: 268435455,
          defaultRenderableLayerMask: 268435455,
          ...tz
        };
        this.defaultCameraLayerMask = sz.defaultCameraLayerMask, this.defaultRenderableLayerMask = sz.defaultRenderableLayerMask, zz = this._engine = zz || rz.c.LastCreatedEngine, sz.virtual ? zz._virtualScenes.push(this) : (rz.c._LastCreatedScene = this, zz.scenes.push(this)), (zz.getCreationOptions().useLargeWorldRendering || tz?.useFloatingOrigin) && ((0, gz.h)(), this._floatingOriginScene = this, gz.e.aJ = this._getFloatingOriginScene), this._uid = null, this._renderingManager = new Hz.e(this), Dz.c && (this.postProcessManager = new Dz.c(this)), (0, Pz.j)() && this.attachControl(), this._createUbo(), uz.d && (this._imageProcessingConfiguration = new uz.d), this.setDefaultCandidateProviders(), sz.useGeometryUniqueIdsMap && (this._geometriesByUniqueId = {}), this.useMaterialMeshMap = sz.useMaterialMeshMap, this.useClonedMeshMap = sz.useClonedMeshMap, tz && tz.virtual || zz.onNewSceneAddedObservable.notifyObservers(this)
      }
      getClassName() {
        return "Scene"
      }
      _getDefaultMeshCandidates() {
        return this._defaultMeshCandidates.data = this.meshes, this._defaultMeshCandidates.length = this.meshes.length, this._defaultMeshCandidates
      }
      _getDefaultSubMeshCandidates(zz) {
        return this._defaultSubMeshCandidates.data = zz.kY, this._defaultSubMeshCandidates.length = zz.kY.length, this._defaultSubMeshCandidates
      }
      setDefaultCandidateProviders() {
        this.getActiveMeshCandidates = () => this._getDefaultMeshCandidates(), this.getActiveSubMeshCandidates = zz => this._getDefaultSubMeshCandidates(zz), this.getIntersectingSubMeshCandidates = (zz, tz) => this._getDefaultSubMeshCandidates(zz), this.getCollidingSubMeshCandidates = (zz, tz) => this._getDefaultSubMeshCandidates(zz)
      }
      get meshUnderPointer() {
        return this._inputManager.meshUnderPointer
      }
      get pointerX() {
        return this._inputManager.pointerX
      }
      set pointerX(zz) {
        this._inputManager.pointerX = zz
      }
      get pointerY() {
        return this._inputManager.pointerY
      }
      set pointerY(zz) {
        this._inputManager.pointerY = zz
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
      isCachedMaterialInvalid(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this._cachedEffect !== tz || this._cachedMaterial !== zz || this._cachedVisibility !== sz
      }
      FD() {
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
      simulatePointerMove(zz, tz) {
        return this._inputManager.simulatePointerMove(zz, tz), this
      }
      simulatePointerDown(zz, tz) {
        return this._inputManager.simulatePointerDown(zz, tz), this
      }
      simulatePointerUp(zz, tz, sz) {
        return this._inputManager.simulatePointerUp(zz, tz, sz), this
      }
      isPointerCaptured() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._inputManager.isPointerCaptured(zz)
      }
      attachControl() {
        let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          sz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._inputManager.attachControl(zz, tz, sz)
      }
      detachControl() {
        this._inputManager.detachControl()
      }
      isReady() {
        let zz, tz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._isDisposed) return !1;
        const sz = this.FD(),
          Fz = sz.currentRenderPassId;
        sz.currentRenderPassId = this.activeCamera?.renderPassId ?? Fz;
        let Wz = !0;
        for (this._pendingData.length > 0 && (Wz = !1), this.prePassRenderer?.update(), this.useOrderIndependentTransparency && this.depthPeelingRenderer && Wz && (Wz = this.depthPeelingRenderer.isReady()), tz && (this._processedMaterials.reset(), this._materialsRenderTargets.reset()), zz = 0; zz < this.meshes.length; zz++) {
          const Fz = this.meshes[zz];
          if (!Fz.kY || 0 === Fz.kY.length) continue;
          if (!Fz.isReady(!0)) {
            Wz = !1;
            continue
          }
          const Xz = Fz.hasThinInstances || "InstancedMesh" === Fz.getClassName() || "InstancedLinesMesh" === Fz.getClassName() || sz.getCaps().instancedArrays && Fz.instances.length > 0;
          for (let zz = 0, tz = this._isReadyForMeshStage; zz < tz.length; zz++) {
            tz[zz].action(Fz, Xz) || (Wz = !1)
          }
          if (!tz) continue;
          const Oz = Fz.material || this.defaultMaterial;
          if (Oz)
            if (Oz._storeEffectOnSubMeshes)
              for (const zz of Fz.kY) {
                const tz = zz.vD();
                tz && tz.hasRenderTargetTextures && null != tz.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(tz) && (this._processedMaterials.push(tz), this._materialsRenderTargets.concatWithNoDuplicate(tz.getRenderTargetTextures()))
              } else Oz.hasRenderTargetTextures && null != Oz.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(Oz) && (this._processedMaterials.push(Oz), this._materialsRenderTargets.concatWithNoDuplicate(Oz.getRenderTargetTextures()))
        }
        if (tz) {
          for (zz = 0; zz < this._materialsRenderTargets.length; ++zz) {
            this._materialsRenderTargets.data[zz].isReadyForRendering() || (Wz = !1)
          }
          for (zz = 0; zz < this.customRenderTargets.length; ++zz) {
            this.customRenderTargets[zz].isReadyForRendering() || (Wz = !1)
          }
        }
        for (zz = 0; zz < this.geometries.length; zz++) {
          2 === this.geometries[zz].delayLoadState && (Wz = !1)
        }
        if (this.activeCameras && this.activeCameras.length > 0)
          for (const Xz of this.activeCameras) Xz.isReady(!0) || (Wz = !1);
        else this.activeCamera && (this.activeCamera.isReady(!0) || (Wz = !1));
        for (const Xz of this.lY) Xz.isReady() || (Wz = !1);
        if (this.proceduralTexturesEnabled)
          for (const Xz of this.proceduralTextures) Xz.isReady() || (Wz = !1);
        if (this.layers)
          for (const Xz of this.layers) Xz.isReady() || (Wz = !1);
        if (this.effectLayers)
          for (const Xz of this.effectLayers) Xz.isLayerReady() || (Wz = !1);
        for (const Xz of this._isReadyChecks) Xz.isReady() || (Wz = !1);
        return sz.areAllEffectsReady() || (Wz = !1), sz.currentRenderPassId = Fz, Wz
      }
      resetCachedMaterial() {
        this._cachedMaterial = null, this._cachedEffect = null, this._cachedVisibility = null
      }
      registerBeforeRender(zz) {
        this.onBeforeRenderObservable.add(zz)
      }
      unregisterBeforeRender(zz) {
        this.onBeforeRenderObservable.removeCallback(zz)
      }
      registerAfterRender(zz) {
        this.onAfterRenderObservable.add(zz)
      }
      unregisterAfterRender(zz) {
        this.onAfterRenderObservable.removeCallback(zz)
      }
      _executeOnceBeforeRender(zz) {
        const tz = () => {
          zz(), setTimeout((() => {
            this.unregisterBeforeRender(tz)
          }))
        };
        this.registerBeforeRender(tz)
      }
      executeOnceBeforeRender(zz, tz) {
        void 0 !== tz ? setTimeout((() => {
          this._executeOnceBeforeRender(zz)
        }), tz) : this._executeOnceBeforeRender(zz)
      }
      addPendingData(zz) {
        this._pendingData.push(zz)
      }
      removePendingData(zz) {
        const tz = this.isLoading,
          sz = this._pendingData.indexOf(zz); - 1 !== sz && this._pendingData.splice(sz, 1), tz && !this.isLoading && this.onDataLoadedObservable.notifyObservers(this)
      }
      getWaitingItemsCount() {
        return this._pendingData.length
      }
      get isLoading() {
        return this._pendingData.length > 0
      }
      addIsReadyCheck(zz) {
        -1 === this._isReadyChecks.indexOf(zz) && this._isReadyChecks.push(zz)
      }
      removeIsReadyCheck(zz) {
        const tz = this._isReadyChecks.indexOf(zz); - 1 !== tz && this._isReadyChecks.splice(tz, 1)
      }
      executeWhenReady(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.onReadyObservable.addOnce(zz), null === this._executeWhenReadyTimeoutId && this._checkIsReady(tz)
      }
      async whenReadyAsync() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return await new Promise((tz => {
          this.executeWhenReady((() => {
            tz()
          }), zz)
        }))
      }
      _clearReadynessChecksData() {
        this._timeoutChecksStartTime = 0, this.onReadyTimeoutObservable.clear(), this.onReadyObservable.clear(), this._executeWhenReadyTimeoutId = null
      }
      _checkIsReady() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = Xz.b.Now;
        else if (this.onReadyTimeoutDuration > 0 && Xz.b.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
        if (this.isReady(zz)) return this.onReadyObservable.notifyObservers(this), void this._clearReadynessChecksData();
        this._isDisposed ? this._clearReadynessChecksData() : this._executeWhenReadyTimeoutId = setTimeout((() => {
          this.incrementRenderId(), this._checkIsReady(zz)
        }), 100)
      }
      get animatables() {
        return this._activeAnimatables
      }
      resetLastAnimationTimeFrame() {
        this._animationTimeLast = Xz.b.Now
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
      setTransformMatrix(zz, tz, sz, Fz) {
        this._multiviewSceneUboIsActive = !!(sz && Fz && this._multiviewSceneUbo), this._viewUpdateFlag === zz.updateFlag && this._projectionUpdateFlag === tz.updateFlag || (this._viewUpdateFlag = zz.updateFlag, this._projectionUpdateFlag = tz.updateFlag, this._viewMatrix = zz, this._projectionMatrix = tz, this._inverseProjectionMatrix || (this._inverseProjectionMatrix = new Kz.e), this._projectionMatrix.invertToRef(this._inverseProjectionMatrix), this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._frustumPlanes ? qz.e.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = qz.e.GetPlanes(this._transformMatrix), this._multiviewSceneUboIsActive && this._multiviewSceneUbo.useUbo ? this._updateMultiviewUbo(sz, Fz) : this._sceneUbo.useUbo && (this._sceneUbo.y5("viewProjection", this._transformMatrix), this._sceneUbo.y5("view", this._viewMatrix), this._sceneUbo.y5("projection", this._projectionMatrix), this._sceneUbo.y5("inverseProjection", this._inverseProjectionMatrix)))
      }
      getSceneUniformBuffer() {
        return this._multiviewSceneUboIsActive && this._multiviewSceneUbo ? this._multiviewSceneUbo : this._sceneUbo
      }
      createSceneUniformBuffer(zz, tz) {
        const sz = "boolean" === typeof tz ? tz : tz?.trackUBOsInFrame,
          Fz = new Nz.c(this._engine, void 0, !1, zz ?? "Kg", void 0, sz);
        return Fz.addUniform("viewProjection", 16), Fz.addUniform("view", 16), Fz.addUniform("projection", 16), Fz.addUniform("vEyePosition", 4), Fz.addUniform("inverseProjection", 16), Fz
      }
      setSceneUniformBuffer(zz) {
        this._sceneUbo = zz, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1
      }
      get floatingOriginMode() {
        return void 0 !== this._floatingOriginScene
      }
      get floatingOriginOffset() {
        return this.floatingOriginMode ? this._eyePosition : Kz.p.ZeroReadOnly
      }
      getUniqueId() {
        return Sz.UniqueId
      }
      ksz(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this._blockEntityCollection && (this.meshes.push(zz), zz._resyncLightSources(), zz.parent || zz._addToSceneRootNodes(), Wz.b.SetImmediate((() => {
            this.onNewMeshAddedObservable.notifyObservers(zz)
          })), tz)) {
          const tz = zz.getChildMeshes();
          for (const zz of tz) this.ksz(zz)
        }
      }
      mI(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const sz = this.meshes.indexOf(zz);
        if (-1 !== sz && (this.meshes.splice(sz, 1), zz.parent || zz._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(zz), this.onMeshRemovedObservable.notifyObservers(zz), tz) {
          const tz = zz.getChildMeshes();
          for (const zz of tz) this.mI(zz)
        }
        return sz
      }
      addTransformNode(zz) {
        this._blockEntityCollection || zz.aJ() === this && -1 !== zz._indexInSceneTransformNodesArray || (zz._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(zz), zz.parent || zz._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable.notifyObservers(zz))
      }
      removeTransformNode(zz) {
        const tz = zz._indexInSceneTransformNodesArray;
        if (-1 !== tz) {
          if (tz !== this.transformNodes.length - 1) {
            const zz = this.transformNodes[this.transformNodes.length - 1];
            this.transformNodes[tz] = zz, zz._indexInSceneTransformNodesArray = tz
          }
          zz._indexInSceneTransformNodesArray = -1, this.transformNodes.pop(), zz.parent || zz._removeFromSceneRootNodes()
        }
        return this.onTransformNodeRemovedObservable.notifyObservers(zz), tz
      }
      removeSkeleton(zz) {
        const tz = this.skeletons.indexOf(zz);
        return -1 !== tz && (this.skeletons.splice(tz, 1), this.onSkeletonRemovedObservable.notifyObservers(zz), this._executeActiveContainerCleanup(this._activeSkeletons)), tz
      }
      removeMorphTargetManager(zz) {
        const tz = this.morphTargetManagers.indexOf(zz);
        return -1 !== tz && this.morphTargetManagers.splice(tz, 1), tz
      }
      removeLight(zz) {
        const tz = this.lights.indexOf(zz);
        if (-1 !== tz) {
          for (const tz of this.meshes) tz._removeLightSource(zz, !1);
          this.lights.splice(tz, 1), this.sortLightsByPriority(), zz.parent || zz._removeFromSceneRootNodes(), this.onLightRemovedObservable.notifyObservers(zz)
        }
        return tz
      }
      removeCamera(zz) {
        const tz = this.cameras.indexOf(zz);
        if (-1 !== tz && (this.cameras.splice(tz, 1), zz.parent || zz._removeFromSceneRootNodes()), this.activeCameras) {
          const tz = this.activeCameras.indexOf(zz); - 1 !== tz && this.activeCameras.splice(tz, 1)
        }
        return this.activeCamera === zz && (this.cameras.length > 0 ? this.activeCamera = this.cameras[0] : this.activeCamera = null), this.onCameraRemovedObservable.notifyObservers(zz), tz
      }
      removeParticleSystem(zz) {
        const tz = this.lY.indexOf(zz);
        return -1 !== tz && (this.lY.splice(tz, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(zz), tz
      }
      removeAnimation(zz) {
        const tz = this.animations.indexOf(zz);
        return -1 !== tz && this.animations.splice(tz, 1), tz
      }
      stopAnimation(zz, tz, sz) {}
      removeAnimationGroup(zz) {
        const tz = this.animationGroups.indexOf(zz);
        return -1 !== tz && this.animationGroups.splice(tz, 1), this.onAnimationGroupRemovedObservable.notifyObservers(zz), tz
      }
      removeMultiMaterial(zz) {
        const tz = this.multiMaterials.indexOf(zz);
        return -1 !== tz && this.multiMaterials.splice(tz, 1), this.onMultiMaterialRemovedObservable.notifyObservers(zz), tz
      }
      removeMaterial(zz) {
        const tz = zz._indexInSceneMaterialArray;
        if (-1 !== tz && tz < this.materials.length) {
          if (tz !== this.materials.length - 1) {
            const zz = this.materials[this.materials.length - 1];
            this.materials[tz] = zz, zz._indexInSceneMaterialArray = tz
          }
          zz._indexInSceneMaterialArray = -1, this.materials.pop()
        }
        return this.onMaterialRemovedObservable.notifyObservers(zz), tz
      }
      removeActionManager(zz) {
        const tz = this.actionManagers.indexOf(zz);
        return -1 !== tz && this.actionManagers.splice(tz, 1), tz
      }
      removeTexture(zz) {
        const tz = this.textures.indexOf(zz);
        return -1 !== tz && this.textures.splice(tz, 1), this.onTextureRemovedObservable.notifyObservers(zz), tz
      }
      removeFrameGraph(zz) {
        const tz = this.frameGraphs.indexOf(zz);
        return -1 !== tz && this.frameGraphs.splice(tz, 1), this.onFrameGraphRemovedObservable.notifyObservers(zz), tz
      }
      removeObjectRenderer(zz) {
        const tz = this.objectRenderers.indexOf(zz);
        return -1 !== tz && this.objectRenderers.splice(tz, 1), this.onObjectRendererRemovedObservable.notifyObservers(zz), tz
      }
      removePostProcess(zz) {
        const tz = this.postProcesses.indexOf(zz);
        return -1 !== tz && this.postProcesses.splice(tz, 1), this.onPostProcessRemovedObservable.notifyObservers(zz), tz
      }
      removeEffectLayer(zz) {
        const tz = this.effectLayers.indexOf(zz);
        return -1 !== tz && this.effectLayers.splice(tz, 1), this.onEffectLayerRemovedObservable.notifyObservers(zz), tz
      }
      addLight(zz) {
        if (!this._blockEntityCollection) {
          this.lights.push(zz), this.sortLightsByPriority(), zz.parent || zz._addToSceneRootNodes();
          for (const tz of this.meshes) - 1 === tz.lightSources.indexOf(zz) && (tz.lightSources.push(zz), tz._resyncLightSources());
          Wz.b.SetImmediate((() => {
            this.onNewLightAddedObservable.notifyObservers(zz)
          }))
        }
      }
      sortLightsByPriority() {
        this.requireLightSorting && this.lights.sort(Rz.c.CompareLightsPriority)
      }
      addCamera(zz) {
        this._blockEntityCollection || (this.cameras.push(zz), Wz.b.SetImmediate((() => {
          this.onNewCameraAddedObservable.notifyObservers(zz)
        })), zz.parent || zz._addToSceneRootNodes())
      }
      addSkeleton(zz) {
        this._blockEntityCollection || (this.skeletons.push(zz), Wz.b.SetImmediate((() => {
          this.onNewSkeletonAddedObservable.notifyObservers(zz)
        })))
      }
      addParticleSystem(zz) {
        this._blockEntityCollection || (this.lY.push(zz), Wz.b.SetImmediate((() => {
          this.onNewParticleSystemAddedObservable.notifyObservers(zz)
        })))
      }
      addAnimation(zz) {
        this._blockEntityCollection || this.animations.push(zz)
      }
      addAnimationGroup(zz) {
        this._blockEntityCollection || (this.animationGroups.push(zz), Wz.b.SetImmediate((() => {
          this.onNewAnimationGroupAddedObservable.notifyObservers(zz)
        })))
      }
      addMultiMaterial(zz) {
        this._blockEntityCollection || (this.multiMaterials.push(zz), Wz.b.SetImmediate((() => {
          this.onNewMultiMaterialAddedObservable.notifyObservers(zz)
        })))
      }
      addMaterial(zz) {
        this._blockEntityCollection || zz.aJ() === this && -1 !== zz._indexInSceneMaterialArray || (zz._indexInSceneMaterialArray = this.materials.length, this.materials.push(zz), Wz.b.SetImmediate((() => {
          this.onNewMaterialAddedObservable.notifyObservers(zz)
        })))
      }
      addMorphTargetManager(zz) {
        this._blockEntityCollection || this.morphTargetManagers.push(zz)
      }
      addGeometry(zz) {
        this._blockEntityCollection || (this._geometriesByUniqueId && (this._geometriesByUniqueId[zz.uniqueId] = this.geometries.length), this.geometries.push(zz))
      }
      addActionManager(zz) {
        this.actionManagers.push(zz)
      }
      addTexture(zz) {
        this._blockEntityCollection || (this.textures.push(zz), this.onNewTextureAddedObservable.notifyObservers(zz))
      }
      addFrameGraph(zz) {
        this.frameGraphs.push(zz), Wz.b.SetImmediate((() => {
          this.onNewFrameGraphAddedObservable.notifyObservers(zz)
        }))
      }
      addObjectRenderer(zz) {
        this.objectRenderers.push(zz), Wz.b.SetImmediate((() => {
          this.onNewObjectRendererAddedObservable.notifyObservers(zz)
        }))
      }
      addPostProcess(zz) {
        this._blockEntityCollection || (this.postProcesses.push(zz), Wz.b.SetImmediate((() => {
          this.onNewPostProcessAddedObservable.notifyObservers(zz)
        })))
      }
      addEffectLayer(zz) {
        this._blockEntityCollection || (this.effectLayers.push(zz), Wz.b.SetImmediate((() => {
          this.onNewEffectLayerAddedObservable.notifyObservers(zz)
        })))
      }
      switchActiveCamera(zz) {
        let tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._engine.getInputElement() && (this.activeCamera && this.activeCamera.detachControl(), this.activeCamera = zz, tz && zz.attachControl())
      }
      setActiveCameraById(zz) {
        const tz = this.getCameraById(zz);
        return tz ? (this.activeCamera = tz, tz) : null
      }
      setActiveCameraByName(zz) {
        const tz = this.getCameraByName(zz);
        return tz ? (this.activeCamera = tz, tz) : null
      }
      getAnimationGroupByName(zz) {
        for (let tz = 0; tz < this.animationGroups.length; tz++)
          if (this.animationGroups[tz].name === zz) return this.animationGroups[tz];
        return null
      }
      _getMaterial(zz, tz) {
        for (let sz = 0; sz < this.materials.length; sz++) {
          const zz = this.materials[sz];
          if (tz(zz)) return zz
        }
        if (zz)
          for (let sz = 0; sz < this.multiMaterials.length; sz++) {
            const zz = this.multiMaterials[sz];
            if (tz(zz)) return zz
          }
        return null
      }
      getMaterialByUniqueID(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.getMaterialByUniqueId(zz, tz)
      }
      getMaterialByUniqueId(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(tz, (tz => tz.uniqueId === zz))
      }
      getMaterialById(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(tz, (tz => tz.id === zz))
      }
      getMaterialByName(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(tz, (tz => tz.name === zz))
      }
      getLastMaterialById(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        for (let sz = this.materials.length - 1; sz >= 0; sz--)
          if (this.materials[sz].id === zz) return this.materials[sz];
        if (tz)
          for (let sz = this.multiMaterials.length - 1; sz >= 0; sz--)
            if (this.multiMaterials[sz].id === zz) return this.multiMaterials[sz];
        return null
      }
      getTextureByUniqueId(zz) {
        for (let tz = 0; tz < this.textures.length; tz++)
          if (this.textures[tz].uniqueId === zz) return this.textures[tz];
        return null
      }
      getTextureByName(zz) {
        for (let tz = 0; tz < this.textures.length; tz++)
          if (this.textures[tz].name === zz) return this.textures[tz];
        return null
      }
      getCameraById(zz) {
        for (let tz = 0; tz < this.cameras.length; tz++)
          if (this.cameras[tz].id === zz) return this.cameras[tz];
        return null
      }
      getCameraByUniqueId(zz) {
        for (let tz = 0; tz < this.cameras.length; tz++)
          if (this.cameras[tz].uniqueId === zz) return this.cameras[tz];
        return null
      }
      getCameraByName(zz) {
        for (let tz = 0; tz < this.cameras.length; tz++)
          if (this.cameras[tz].name === zz) return this.cameras[tz];
        return null
      }
      getBoneById(zz) {
        for (let tz = 0; tz < this.skeletons.length; tz++) {
          const sz = this.skeletons[tz];
          for (let tz = 0; tz < sz.bones.length; tz++)
            if (sz.bones[tz].id === zz) return sz.bones[tz]
        }
        return null
      }
      getBoneByName(zz) {
        for (let tz = 0; tz < this.skeletons.length; tz++) {
          const sz = this.skeletons[tz];
          for (let tz = 0; tz < sz.bones.length; tz++)
            if (sz.bones[tz].name === zz) return sz.bones[tz]
        }
        return null
      }
      getLightByName(zz) {
        for (let tz = 0; tz < this.lights.length; tz++)
          if (this.lights[tz].name === zz) return this.lights[tz];
        return null
      }
      getLightById(zz) {
        for (let tz = 0; tz < this.lights.length; tz++)
          if (this.lights[tz].id === zz) return this.lights[tz];
        return null
      }
      getLightByUniqueId(zz) {
        for (let tz = 0; tz < this.lights.length; tz++)
          if (this.lights[tz].uniqueId === zz) return this.lights[tz];
        return null
      }
      getParticleSystemById(zz) {
        for (let tz = 0; tz < this.lY.length; tz++)
          if (this.lY[tz].id === zz) return this.lY[tz];
        return null
      }
      getGeometryById(zz) {
        for (let tz = 0; tz < this.geometries.length; tz++)
          if (this.geometries[tz].id === zz) return this.geometries[tz];
        return null
      }
      _getGeometryByUniqueId(zz) {
        if (this._geometriesByUniqueId) {
          const tz = this._geometriesByUniqueId[zz];
          if (void 0 !== tz) return this.geometries[tz]
        } else
          for (let tz = 0; tz < this.geometries.length; tz++)
            if (this.geometries[tz].uniqueId === zz) return this.geometries[tz];
        return null
      }
      getFrameGraphByName(zz) {
        for (let tz = 0; tz < this.frameGraphs.length; tz++)
          if (this.frameGraphs[tz].name === zz) return this.frameGraphs[tz];
        return null
      }
      pushGeometry(zz, tz) {
        return !(!tz && this._getGeometryByUniqueId(zz.uniqueId)) && (this.addGeometry(zz), Wz.b.SetImmediate((() => {
          this.onNewGeometryAddedObservable.notifyObservers(zz)
        })), !0)
      }
      removeGeometry(zz) {
        let tz;
        if (this._geometriesByUniqueId) {
          if (tz = this._geometriesByUniqueId[zz.uniqueId], void 0 === tz) return !1
        } else if (tz = this.geometries.indexOf(zz), tz < 0) return !1;
        if (tz !== this.geometries.length - 1) {
          const zz = this.geometries[this.geometries.length - 1];
          zz && (this.geometries[tz] = zz, this._geometriesByUniqueId && (this._geometriesByUniqueId[zz.uniqueId] = tz))
        }
        return this._geometriesByUniqueId && (this._geometriesByUniqueId[zz.uniqueId] = void 0), this.geometries.pop(), this.onGeometryRemovedObservable.notifyObservers(zz), !0
      }
      getGeometries() {
        return this.geometries
      }
      getMeshById(zz) {
        for (let tz = 0; tz < this.meshes.length; tz++)
          if (this.meshes[tz].id === zz) return this.meshes[tz];
        return null
      }
      getMeshesById(zz) {
        return this.meshes.filter((function(tz) {
          return tz.id === zz
        }))
      }
      getTransformNodeById(zz) {
        for (let tz = 0; tz < this.transformNodes.length; tz++)
          if (this.transformNodes[tz].id === zz) return this.transformNodes[tz];
        return null
      }
      getTransformNodeByUniqueId(zz) {
        for (let tz = 0; tz < this.transformNodes.length; tz++)
          if (this.transformNodes[tz].uniqueId === zz) return this.transformNodes[tz];
        return null
      }
      getTransformNodesById(zz) {
        return this.transformNodes.filter((function(tz) {
          return tz.id === zz
        }))
      }
      getMeshByUniqueId(zz) {
        for (let tz = 0; tz < this.meshes.length; tz++)
          if (this.meshes[tz].uniqueId === zz) return this.meshes[tz];
        return null
      }
      getLastMeshById(zz) {
        for (let tz = this.meshes.length - 1; tz >= 0; tz--)
          if (this.meshes[tz].id === zz) return this.meshes[tz];
        return null
      }
      getLastTransformNodeById(zz) {
        for (let tz = this.transformNodes.length - 1; tz >= 0; tz--)
          if (this.transformNodes[tz].id === zz) return this.transformNodes[tz];
        return null
      }
      getLastEntryById(zz) {
        let tz;
        for (tz = this.meshes.length - 1; tz >= 0; tz--)
          if (this.meshes[tz].id === zz) return this.meshes[tz];
        for (tz = this.transformNodes.length - 1; tz >= 0; tz--)
          if (this.transformNodes[tz].id === zz) return this.transformNodes[tz];
        for (tz = this.cameras.length - 1; tz >= 0; tz--)
          if (this.cameras[tz].id === zz) return this.cameras[tz];
        for (tz = this.lights.length - 1; tz >= 0; tz--)
          if (this.lights[tz].id === zz) return this.lights[tz];
        for (tz = this.skeletons.length - 1; tz >= 0; tz--) {
          const sz = this.skeletons[tz];
          for (let tz = sz.bones.length - 1; tz >= 0; tz--)
            if (sz.bones[tz].id === zz) return sz.bones[tz]
        }
        return null
      }
      getNodeById(zz) {
        const tz = this.getMeshById(zz);
        if (tz) return tz;
        const sz = this.getTransformNodeById(zz);
        if (sz) return sz;
        const Fz = this.getLightById(zz);
        if (Fz) return Fz;
        const Wz = this.getCameraById(zz);
        if (Wz) return Wz;
        const Xz = this.getBoneById(zz);
        return Xz || null
      }
      getNodeByName(zz) {
        const tz = this.getMeshByName(zz);
        if (tz) return tz;
        const sz = this.getTransformNodeByName(zz);
        if (sz) return sz;
        const Fz = this.getLightByName(zz);
        if (Fz) return Fz;
        const Wz = this.getCameraByName(zz);
        if (Wz) return Wz;
        const Xz = this.getBoneByName(zz);
        return Xz || null
      }
      getMeshByName(zz) {
        for (let tz = 0; tz < this.meshes.length; tz++)
          if (this.meshes[tz].name === zz) return this.meshes[tz];
        return null
      }
      getTransformNodeByName(zz) {
        for (let tz = 0; tz < this.transformNodes.length; tz++)
          if (this.transformNodes[tz].name === zz) return this.transformNodes[tz];
        return null
      }
      getLastSkeletonById(zz) {
        for (let tz = this.skeletons.length - 1; tz >= 0; tz--)
          if (this.skeletons[tz].id === zz) return this.skeletons[tz];
        return null
      }
      getSkeletonByUniqueId(zz) {
        for (let tz = 0; tz < this.skeletons.length; tz++)
          if (this.skeletons[tz].uniqueId === zz) return this.skeletons[tz];
        return null
      }
      getSkeletonById(zz) {
        for (let tz = 0; tz < this.skeletons.length; tz++)
          if (this.skeletons[tz].id === zz) return this.skeletons[tz];
        return null
      }
      getSkeletonByName(zz) {
        for (let tz = 0; tz < this.skeletons.length; tz++)
          if (this.skeletons[tz].name === zz) return this.skeletons[tz];
        return null
      }
      getMorphTargetManagerById(zz) {
        for (let tz = 0; tz < this.morphTargetManagers.length; tz++)
          if (this.morphTargetManagers[tz].uniqueId === zz) return this.morphTargetManagers[tz];
        return null
      }
      getMorphTargetById(zz) {
        for (let tz = 0; tz < this.morphTargetManagers.length; ++tz) {
          const sz = this.morphTargetManagers[tz];
          for (let tz = 0; tz < sz.numTargets; ++tz) {
            const Fz = sz.getTarget(tz);
            if (Fz.id === zz) return Fz
          }
        }
        return null
      }
      getMorphTargetByName(zz) {
        for (let tz = 0; tz < this.morphTargetManagers.length; ++tz) {
          const sz = this.morphTargetManagers[tz];
          for (let tz = 0; tz < sz.numTargets; ++tz) {
            const Fz = sz.getTarget(tz);
            if (Fz.name === zz) return Fz
          }
        }
        return null
      }
      getPostProcessByName(zz) {
        for (let tz = 0; tz < this.postProcesses.length; ++tz) {
          const sz = this.postProcesses[tz];
          if (sz.name === zz) return sz
        }
        return null
      }
      isActiveMesh(zz) {
        return -1 !== this._activeMeshes.indexOf(zz)
      }
      get uid() {
        return this._uid || (this._uid = Fz.j.RandomId()), this._uid
      }
      addExternalData(zz, tz) {
        return this._externalData || (this._externalData = new vz), this._externalData.add(zz, tz)
      }
      getExternalData(zz) {
        return this._externalData ? this._externalData.get(zz) : null
      }
      getOrAddExternalDataWithFactory(zz, tz) {
        return this._externalData || (this._externalData = new vz), this._externalData.getOrAddWithFactory(zz, tz)
      }
      removeExternalData(zz) {
        return this._externalData.remove(zz)
      }
      _evaluateSubMesh(zz, tz, sz, Fz) {
        if (Fz || zz.isInFrustum(this._frustumPlanes)) {
          for (let Fz = 0, Wz = this._evaluateSubMeshStage; Fz < Wz.length; Fz++) {
            Wz[Fz].action(tz, zz)
          }
          const sz = zz.vD();
          null !== sz && void 0 !== sz && (sz.hasRenderTargetTextures && null != sz.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(sz) && (this._processedMaterials.push(sz), this._materialsRenderTargets.concatWithNoDuplicate(sz.getRenderTargetTextures())), this._renderingManager.dispatch(zz, tz, sz))
        }
      }
      freeProcessedMaterials() {
        this._processedMaterials.dispose()
      }
      get blockfreeActiveMeshesAndRenderingGroups() {
        return this._preventFreeActiveMeshesAndRenderingGroups
      }
      set blockfreeActiveMeshesAndRenderingGroups(zz) {
        this._preventFreeActiveMeshesAndRenderingGroups !== zz && (zz && (this.freeActiveMeshes(), this.freeRenderingGroups()), this._preventFreeActiveMeshesAndRenderingGroups = zz)
      }
      freeActiveMeshes() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._activeMeshes.dispose(), this.activeCamera && this.activeCamera._activeMeshes && this.activeCamera._activeMeshes.dispose(), this.activeCameras))
          for (let zz = 0; zz < this.activeCameras.length; zz++) {
            const tz = this.activeCameras[zz];
            tz && tz._activeMeshes && tz._activeMeshes.dispose()
          }
      }
      freeRenderingGroups() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures))
          for (let zz = 0; zz < this.textures.length; zz++) {
            const tz = this.textures[zz];
            tz && tz.renderList && tz.freeRenderingGroups()
          }
      }
      _isInIntermediateRendering() {
        return this._intermediateRendering
      }
      _isInRenderingMeshEvaluation() {
        return this._renderingMeshEvaluationDepth > 0
      }
      freezeActiveMeshes() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          tz = arguments.length > 1 ? arguments[1] : void 0,
          sz = arguments.length > 2 ? arguments[2] : void 0,
          Fz = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          Xz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.frameGraph) {
          this._renderWithFrameGraph(!0, !1, !0);
          const Oz = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const zz of Oz) zz.objectRenderer._freezeActiveMeshes(Fz);
          return this._freezeActiveMeshesCancel = (0, Wz.e)((() => {
            let zz = !0,
              tz = !0;
            for (const sz of Oz) zz && (zz = sz.objectRenderer._isFrozen), tz && (tz = null !== sz.objectRenderer._freezeActiveMeshesCancel);
            if (zz) return !0;
            if (!tz) throw new Error("Freezing active meshes was cancelled");
            return !1
          }), (() => {
            this._freezeActiveMeshesCancel = null, this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = Xz, this._skipEvaluateActiveMeshesCompletely = zz, tz?.()
          }), ((zz, tz) => {
            if (this._freezeActiveMeshesCancel = null, this.unfreezeActiveMeshes(), tz) {
              const tz = "Scene: Timeout while waiting for meshes to be frozen.";
              sz ? sz(tz) : (ts.e.Error(tz), zz && ts.e.Error(zz))
            } else {
              const tz = "Scene: An unexpected error occurred while trying to freeze active meshes.";
              sz ? sz(tz) : (ts.e.Error(tz), zz && (ts.e.Error(zz), zz.stack && ts.e.Error(zz.stack)))
            }
          })), this
        }
        return this.executeWhenReady((() => {
          if (this.activeCamera) {
            if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = Xz, this._skipEvaluateActiveMeshesCompletely = zz, Fz)
              for (let zz = 0; zz < this._activeMeshes.length; zz++) this._activeMeshes.data[zz]._freeze();
            tz && tz()
          } else sz && sz("No active camera found")
        })), this
      }
      unfreezeActiveMeshes() {
        for (let zz = 0; zz < this.meshes.length; zz++) {
          const tz = this.meshes[zz];
          tz._internalAbstractMeshDataInfo && (tz._internalAbstractMeshDataInfo._isActive = !1)
        }
        if (this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null, this.frameGraph) {
          const zz = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const tz of zz) tz.objectRenderer._unfreezeActiveMeshes()
        } else
          for (let zz = 0; zz < this._activeMeshes.length; zz++) this._activeMeshes.data[zz]._unFreeze();
        return this._activeMeshesFrozen = !1, this
      }
      _executeActiveContainerCleanup(zz) {
        (!this._engine.snapshotRendering || 1 !== this._engine.snapshotRenderingMode) && this._activeMeshesFrozen && this._activeMeshes.length || this.onBeforeRenderObservable.addOnce((() => zz.dispose()))
      }
      _evaluateActiveMeshes() {
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) return void(this._activeMeshes.length > 0 && (this.activeCamera?._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset()));
        if (this._activeMeshesFrozen && this._activeMeshes.length) {
          if (!this._skipEvaluateActiveMeshesCompletely) {
            const zz = this._activeMeshes.length;
            for (let tz = 0; tz < zz; tz++) {
              this._activeMeshes.data[tz].computeWorldMatrix()
            }
          }
          if (this._activeParticleSystems) {
            const zz = this._activeParticleSystems.length;
            for (let tz = 0; tz < zz; tz++) this._activeParticleSystems.data[tz].animate()
          }
          return void this._renderingManager.resetSprites()
        }
        if (!this.activeCamera) return;
        this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset(), this._materialsRenderTargets.reset();
        for (let Wz = 0, Xz = this._beforeEvaluateActiveMeshStage; Wz < Xz.length; Wz++) {
          Xz[Wz].action()
        }
        const zz = this.getActiveMeshCandidates(),
          tz = zz.length,
          sz = nz.d.Enabled,
          Fz = this.customLODSelector;
        for (let Wz = 0; Wz < tz; Wz++) {
          const tz = zz.data[Wz],
            Xz = !Fz && !tz.VJ && !tz._internalMeshDataInfo?._LODLevels.length;
          let Oz, oz;
          if ((Xz || (Oz = tz._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), Oz ? Oz[1] = -1 : (Oz = [tz, -1], tz._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, Oz))), !tz.isBlocked) && (sz && this._totalVertices.addCount(tz.getTotalVertices(), !1), tz.isReady() && tz.isEnabled() && !tz.nX.hasAZeroComponent)) {
            if (tz.computeWorldMatrix(), tz.actionManager && tz.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(tz), Xz) oz = tz;
            else if (oz = Fz ? Fz(tz, this.activeCamera) : tz.getLOD(this.activeCamera), Oz[0] = oz, Oz[1] = this._frameId, void 0 === oz || null === oz) continue;
            if (oz !== tz && 0 !== oz.billboardMode && oz.computeWorldMatrix(), tz._preActivate(), tz.isVisible && tz.visibility > 0 && 0 !== (tz.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || tz.WD || tz.isInFrustum(this._frustumPlanes))) {
              this._activeMeshes.push(tz), this.activeCamera._activeMeshes.push(tz), oz !== tz && oz._activate(this._renderId, !1);
              for (let zz = 0, sz = this._preActiveMeshStage; zz < sz.length; zz++) {
                sz[zz].action(tz)
              }
              tz._activate(this._renderId, !1) && (tz.VJ ? tz._internalAbstractMeshDataInfo._actAsRegularMesh && (oz = tz) : oz._internalAbstractMeshDataInfo._onlyForInstances = !1, oz._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(tz, oz)), tz._postActivate()
            }
          }
        }
        if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
          this.onBeforeParticlesRenderingObservable.notifyObservers(this);
          for (let zz = 0; zz < this.lY.length; zz++) {
            const tz = this.lY[zz];
            if (!tz.isStarted() || !tz.emitter) continue;
            const sz = tz.emitter;
            sz.position && !sz.isEnabled() || (this._activeParticleSystems.push(tz), tz.animate(), this._renderingManager.dispatchParticles(tz))
          }
          this.onAfterParticlesRenderingObservable.notifyObservers(this)
        }
      }
      _prepareSkeleton(zz) {
        this._skeletonsEnabled && zz.skeleton && (this._activeSkeletons.pushNoDuplicate(zz.skeleton) && (zz.skeleton.prepare(), this._activeBones.addCount(zz.skeleton.bones.length, !1)), zz.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(zz) && this.frameGraph && zz.applySkeleton(zz.skeleton))
      }
      _activeMesh(zz, tz) {
        this._prepareSkeleton(tz);
        let sz = zz.jFz || zz.VJ || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || tz.WD;
        if (tz && tz.kY && tz.kY.length > 0) {
          const Fz = this.getActiveSubMeshCandidates(tz),
            Wz = Fz.length;
          sz = sz || 1 === Wz;
          for (let Xz = 0; Xz < Wz; Xz++) {
            const Wz = Fz.data[Xz];
            this._evaluateSubMesh(Wz, tz, zz, sz)
          }
        }
      }
      updateTransformMatrix(zz) {
        const tz = this.activeCamera;
        if (tz)
          if (tz._renderingMultiview) {
            const sz = tz._rigCameras[0],
              Fz = tz._rigCameras[1];
            this.setTransformMatrix(sz.getViewMatrix(), sz.getProjectionMatrix(zz), Fz.getViewMatrix(), Fz.getProjectionMatrix(zz))
          } else this.setTransformMatrix(tz.getViewMatrix(), tz.getProjectionMatrix(zz))
      }
      _bindFrameBuffer(zz) {
        let tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._useCurrentFrameBuffer || (zz && zz._multiviewTexture ? zz._multiviewTexture._bindFrameBuffer() : zz && zz.outputRenderTarget ? zz.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer()), tz && this._clearFrameBuffer(zz)
      }
      _clearFrameBuffer(zz) {
        if (zz && zz._multiviewTexture);
        else if (zz && zz.outputRenderTarget && !zz._renderingMultiview) {
          const tz = zz.outputRenderTarget;
          tz.onClearObservable.hasObservers() ? tz.onClearObservable.notifyObservers(this._engine) : tz.skipInitialClear || zz.isRightCamera || (this.autoClear && this._engine.clear(tz.clearColor || this._clearColor, !tz._cleared, !0, !0), tz._cleared = !0)
        } else this._defaultFrameBufferCleared ? this._engine.clear(null, !1, !0, !0) : (this._defaultFrameBufferCleared = !0, this._clear())
      }
      _renderForCamera(zz, tz) {
        let sz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (zz && zz._skipRendering) return;
        const Wz = this._engine;
        if (this._activeCamera = zz, !this.activeCamera) throw new Error("Active camera not set");
        if (Wz.setViewport(this.activeCamera.viewport), this.resetCachedMaterial(), this._renderId++, !this.prePass && sz) {
          let tz = !0;
          zz._renderingMultiview && zz.outputRenderTarget && (tz = zz.outputRenderTarget.skipInitialClear, this.autoClear && (this._defaultFrameBufferCleared = !1, zz.outputRenderTarget.skipInitialClear = !1)), this._bindFrameBuffer(this._activeCamera), zz._renderingMultiview && zz.outputRenderTarget && (zz.outputRenderTarget.skipInitialClear = tz)
        }
        this.updateTransformMatrix(), this.onBeforeCameraRenderObservable.notifyObservers(this.activeCamera), this._engine.currentRenderPassId = zz.outputRenderTarget?.renderPassId ?? zz.renderPassId ?? 0, this._evaluateActiveMeshes();
        for (let Fz = 0; Fz < this._softwareSkinnedMeshes.length; Fz++) {
          const zz = this._softwareSkinnedMeshes.data[Fz];
          zz.applySkeleton(zz.skeleton)
        }
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.concatWithNoDuplicate(this._materialsRenderTargets), zz.customRenderTargets && zz.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(zz.customRenderTargets), tz && tz.customRenderTargets && tz.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(tz.customRenderTargets), this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture);
        for (let Fz = 0, oz = this._gatherActiveCameraRenderTargetsStage; Fz < oz.length; Fz++) {
          oz[Fz].action(this._renderTargets)
        }
        let Xz = !1;
        if (this.renderTargetsEnabled) {
          let zz;
          if (this._intermediateRendering = !0, this._renderTargets.length > 0) {
            Fz.j.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
            const tz = this.getBoundingBoxRenderer?.();
            for (let sz = 0; sz < this._renderTargets.length; sz++) {
              const Fz = this._renderTargets.data[sz];
              if (Fz._shouldRender()) {
                this._renderId++;
                const sz = Fz.activeCamera && Fz.activeCamera !== this.activeCamera;
                tz && !zz && (zz = tz.renderList.length > 0 ? tz.renderList.data.slice() : [], zz.length = tz.renderList.length), Fz.render(sz, this.dumpNextRenderTargets), Xz = !0
              }
            }
            tz && zz && (tz.renderList.data = zz, tz.renderList.length = zz.length), Fz.j.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
          }
          if (this._cameraDrawRenderTargetStage.length > 0) {
            const tz = this.getBoundingBoxRenderer?.();
            tz && !zz && (zz = tz.renderList.length > 0 ? tz.renderList.data.slice() : [], zz.length = tz.renderList.length);
            for (let zz = 0, sz = this._cameraDrawRenderTargetStage; zz < sz.length; zz++) {
              Xz = sz[zz].action(this.activeCamera) || Xz
            }
            tz && zz && (tz.renderList.data = zz, tz.renderList.length = zz.length)
          }
          this._intermediateRendering = !1
        }
        Xz && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || zz._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame();
        for (let Fz = 0, oz = this._beforeCameraDrawStage; Fz < oz.length; Fz++) {
          oz[Fz].action(this.activeCamera)
        }
        this.onBeforeDrawPhaseObservable.notifyObservers(this);
        const Oz = Wz.snapshotRendering && 1 === Wz.snapshotRenderingMode;
        Oz && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !Oz), this.onAfterDrawPhaseObservable.notifyObservers(this);
        for (let Fz = 0, oz = this._afterCameraDrawStage; Fz < oz.length; Fz++) {
          oz[Fz].action(this.activeCamera)
        }
        if (this.postProcessManager && !zz._multiviewTexture) {
          const tz = zz.outputRenderTarget ? zz.outputRenderTarget.renderTarget : void 0;
          this.postProcessManager._finalizeFrame(zz.isIntermediate, tz)
        }
        for (let Fz = 0, oz = this._afterCameraPostProcessStage; Fz < oz.length; Fz++) {
          oz[Fz].action(this.activeCamera)
        }
        this._renderTargets.reset(), this.onAfterCameraRenderObservable.notifyObservers(this.activeCamera)
      }
      _processSubCameras(zz) {
        let tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (0 === zz.cameraRigMode || zz._renderingMultiview) return zz._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(zz, void 0, tz), void this.onAfterRenderCameraObservable.notifyObservers(zz);
        if (zz._useMultiviewToSingleView) this._renderMultiviewToSingleView(zz);
        else {
          this.onBeforeCameraRenderObservable.notifyObservers(zz);
          for (let tz = 0; tz < zz._rigCameras.length; tz++) this._renderForCamera(zz._rigCameras[tz], zz)
        }
        this._activeCamera = zz, this.updateTransformMatrix(), this.onAfterRenderCameraObservable.notifyObservers(zz)
      }
      _checkIntersections() {
        for (let zz = 0; zz < this._meshesForIntersections.length; zz++) {
          const tz = this._meshesForIntersections.data[zz];
          if (tz.actionManager)
            for (let zz = 0; tz.actionManager && zz < tz.actionManager.actions.length; zz++) {
              const sz = tz.actionManager.actions[zz];
              if (12 === sz.trigger || 13 === sz.trigger) {
                const zz = sz.getTriggerParameter(),
                  Fz = zz.mesh ? zz.mesh : zz,
                  Wz = Fz.CFz(tz, zz.usePreciseIntersection),
                  Xz = tz._intersectionsInProgress.indexOf(Fz);
                Wz && -1 === Xz ? 12 === sz.trigger ? (sz._executeCurrent(wz.CreateNew(tz, void 0, Fz)), tz._intersectionsInProgress.push(Fz)) : 13 === sz.trigger && tz._intersectionsInProgress.push(Fz) : !Wz && Xz > -1 && (13 === sz.trigger && sz._executeCurrent(wz.CreateNew(tz, void 0, Fz)), tz.actionManager.hasSpecificTrigger(13, (zz => {
                  const tz = zz.mesh ? zz.mesh : zz;
                  return Fz === tz
                })) && 13 !== sz.trigger || tz._intersectionsInProgress.splice(Xz, 1))
              }
            }
        }
      }
      _advancePhysicsEngineStep(zz) {}
      _animate(zz) {}
      animate() {
        if (this._engine.isDeterministicLockStep()) {
          let zz = Math.max(Os.MinDeltaTime, Math.min(this._engine.getDeltaTime(), Os.MaxDeltaTime)) + this._timeAccumulator;
          const tz = this._engine.getTimeStep(),
            sz = 1e3 / tz / 1e3;
          let Fz = 0;
          const Wz = this._engine.getLockstepMaxSteps();
          let Xz = Math.floor(zz / tz);
          for (Xz = Math.min(Xz, Wz); zz > 0 && Fz < Xz;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = tz * sz, this._animate(tz), this.onAfterAnimationsObservable.notifyObservers(this), this.rG && this._advancePhysicsEngineStep(tz), this.onAfterStepObservable.notifyObservers(this), this._currentStepId++, Fz++, zz -= tz;
          this._timeAccumulator = zz < 0 ? 0 : zz
        } else {
          const zz = this.useConstantAnimationDeltaTime ? 16 : Math.max(Os.MinDeltaTime, Math.min(this._engine.getDeltaTime(), Os.MaxDeltaTime));
          this._animationRatio = .06 * zz, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.rG && this._advancePhysicsEngineStep(zz)
        }
      }
      _clear() {
        (this.autoClearDepthAndStencil || this.autoClear) && this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil)
      }
      _checkCameraRenderTarget(zz) {
        if (zz?.outputRenderTarget && !zz?.isRigCamera && (zz.outputRenderTarget._cleared = !1), zz?.rigCameras?.length)
          for (let tz = 0; tz < zz.rigCameras.length; ++tz) {
            const sz = zz.rigCameras[tz].outputRenderTarget;
            sz && (sz._cleared = !1)
          }
      }
      resetDrawCache(zz) {
        if (this.meshes)
          for (const tz of this.meshes) tz.resetDrawCache(zz)
      }
      _renderWithFrameGraph() {
        let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          tz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.activeCamera = null, this.activeCameras = null, zz)
          for (const sz of this.cameras)
            if (sz.update(), 0 !== sz.cameraRigMode)
              for (let zz = 0; zz < sz._rigCameras.length; zz++) sz._rigCameras[zz].update();
        this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
        try {
          this._renderWithFrameGraphAfterBeforeRender(tz)
        } finally {
          this._renderingMeshEvaluationDepth--
        }
      }
      _renderWithFrameGraphAfterBeforeRender(zz) {
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.reset();
        const tz = this._frameGraph?.findMainCamera() ?? null;
        if (this.renderTargetsEnabled) {
          this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), Fz.j.StartPerformanceCounter("Custom render targets", this._renderTargets.length > 0);
          for (let zz = 0; zz < this._renderTargets.length; zz++) {
            const sz = this._renderTargets.data[zz],
              Fz = sz.activeCamera || tz;
            this._renderRenderTarget(sz, Fz, !0, this.dumpNextRenderTargets)
          }
          Fz.j.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
        }
        this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
        for (let sz = 0, Fz = this._beforeClearStage; sz < Fz.length; sz++) {
          Fz[sz].action()
        }
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
        else {
          const tz = this.getActiveMeshCandidates(),
            sz = tz.length;
          if (this._activeMeshesFrozen) {
            if (!this._skipEvaluateActiveMeshesCompletely)
              for (let zz = 0; zz < sz; zz++) {
                const sz = tz.data[zz];
                sz._internalAbstractMeshDataInfo._wasActiveLastFrame && sz.computeWorldMatrix()
              }
            if (this.particlesEnabled) {
              const zz = this._activeParticleSystems.length;
              for (let tz = 0; tz < zz; tz++) this._activeParticleSystems.data[tz].animate()
            }
          } else {
            this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
            for (let Fz = 0; Fz < sz; Fz++) {
              const sz = tz.data[Fz];
              sz._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, sz.isBlocked || (this._totalVertices.addCount(sz.getTotalVertices(), !1), sz.isReady() && sz.isEnabled() && !sz.nX.hasAZeroComponent && (sz.computeWorldMatrix(zz), sz.actionManager && sz.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(sz)))
            }
            if (this.particlesEnabled)
              for (let zz = 0; zz < this.lY.length; zz++) {
                const tz = this.lY[zz];
                if (!tz.isStarted() || !tz.emitter) continue;
                const sz = tz.emitter;
                sz.position && !sz.isEnabled() || (this._activeParticleSystems.push(tz), tz.animate())
              }
          }
        }
        this.frameGraph?.execute()
      }
      _renderRenderTarget(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Fz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._intermediateRendering = !0, zz._shouldRender()) {
          if (this._renderId++, this.activeCamera = tz, !this.activeCamera) throw new Error("Active camera not set");
          this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), zz.render(sz, Fz)
        }
        this._intermediateRendering = !1
      }
      render() {
        let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.zsz) return;
        const sz = this._renderingMeshEvaluationDepth;
        try {
          this._renderFrame(zz, tz)
        } finally {
          this._renderingMeshEvaluationDepth = sz
        }
      }
      _renderFrame(zz, tz) {
        if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), gz.e.aJ = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCameras?.length)
          for (const sz of this.activeCameras) this._checkCameraRenderTarget(sz);
        this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimationsObservable.notifyObservers(this), this.actionManager && this.actionManager.processTrigger(11), tz || this.animate();
        for (let sz = 0, Fz = this._beforeCameraUpdateStage; sz < Fz.length; sz++) {
          Fz[sz].action()
        }
        if (zz)
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let sz = 0; sz < this.activeCameras.length; sz++) {
              const zz = this.activeCameras[sz];
              if (zz.update(), 0 !== zz.cameraRigMode)
                for (let tz = 0; tz < zz._rigCameras.length; tz++) zz._rigCameras[tz].update()
            } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode))
              for (let sz = 0; sz < this.activeCamera._rigCameras.length; sz++) this.activeCamera._rigCameras[sz].update();
        if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this._renderingMeshEvaluationDepth++, this.customRenderFunction(zz, tz);
        else {
          this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++, this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
          const zz = this.activeCameras?.length ? this.activeCameras[0] : this.activeCamera;
          if (this.renderTargetsEnabled) {
            Fz.j.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
            for (let tz = 0; tz < this.customRenderTargets.length; tz++) {
              const sz = this.customRenderTargets[tz],
                Fz = sz.activeCamera || this.activeCamera;
              this._renderRenderTarget(sz, Fz, zz !== Fz, this.dumpNextRenderTargets)
            }
            Fz.j.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
          }
          this._engine.currentRenderPassId = zz?.renderPassId ?? 0, this.activeCamera = zz, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
          for (let tz = 0, sz = this._beforeClearStage; tz < sz.length; tz++) {
            sz[tz].action()
          }
          this._clearFrameBuffer(this.activeCamera);
          for (let tz = 0, sz = this._gatherRenderTargetsStage; tz < sz.length; tz++) {
            sz[tz].action(this._renderTargets)
          }
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let tz = 0; tz < this.activeCameras.length; tz++) this._processSubCameras(this.activeCameras[tz], tz > 0);
          else {
            if (!this.activeCamera) throw new Error("No camera defined");
            this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
          }
        }
        this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
        for (let sz = 0, Fz = this._afterRenderStage; sz < Fz.length; sz++) {
          Fz[sz].action()
        }
        if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
          for (let zz = 0; zz < this._toBeDisposed.length; zz++) {
            const tz = this._toBeDisposed[zz];
            tz && tz.dispose()
          }
          this._toBeDisposed.length = 0
        }
        this.dumpNextRenderTargets && (this.dumpNextRenderTargets = !1), this._activeBones.addCount(0, !0), this._activeIndices.addCount(0, !0), this._activeParticles.addCount(0, !0), this._engine.restoreDefaultFramebuffer()
      }
      freezeMaterials() {
        for (let zz = 0; zz < this.materials.length; zz++) this.materials[zz].freeze()
      }
      unfreezeMaterials() {
        for (let zz = 0; zz < this.materials.length; zz++) this.materials[zz].unfreeze()
      }
      dispose() {
        if (this.zsz) return;
        if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStage.clear(), this._evaluateSubMeshStage.clear(), this._preActiveMeshStage.clear(), this._cameraDrawRenderTargetStage.clear(), this._beforeCameraDrawStage.clear(), this._beforeRenderTargetDrawStage.clear(), this._beforeRenderingGroupDrawStage.clear(), this._beforeRenderingMeshStage.clear(), this._afterRenderingMeshStage.clear(), this._afterRenderingGroupDrawStage.clear(), this._afterCameraDrawStage.clear(), this._afterRenderTargetDrawStage.clear(), this._afterRenderStage.clear(), this._beforeCameraUpdateStage.clear(), this._beforeClearStage.clear(), this._gatherRenderTargetsStage.clear(), this._gatherActiveCameraRenderTargetsStage.clear(), this._pointerMoveStage.clear(), this._pointerDownStage.clear(), this._pointerUpStage.clear(), this._isReadyChecks.length = 0, this.importedMeshesFiles = [], this._activeAnimatables && (0, Yz.d)(this.stopAllAnimations)) {
          for (const zz of this._activeAnimatables) zz.onAnimationEndObservable.clear(), zz.onAnimationEnd = null;
          this.stopAllAnimations()
        }
        this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSystems.dispose(), this._activeSkeletons.dispose(), this._softwareSkinnedMeshes.dispose(), this._renderTargets.dispose(), this._materialsRenderTargets.dispose(), this._registeredForLateAnimationBindings.dispose(), this._animationWrites.length = 0, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._meshesForIntersections.dispose(), this._toBeDisposed.length = 0;
        const zz = this._activeRequests.slice();
        for (const Xz of zz) Xz.abort();
        this._activeRequests.length = 0;
        try {
          this.qJ.notifyObservers(this)
        } catch (Wz) {
          ts.e.Error("An error occurred while calling onDisposeObservable!", Wz)
        }
        this.detachControl();
        const tz = this._engine.getInputElement?.();
        if (tz)
          for (let Xz = 0; Xz < this.cameras.length; Xz++) this.cameras[Xz].detachControl();
        this._disposeList(this.animationGroups), this._disposeList(this.lights), this._defaultMaterial && this._defaultMaterial.dispose(), this._disposeList(this.multiMaterials), this._disposeList(this.materials), this._disposeList(this.meshes, (zz => zz.dispose(!0))), this._disposeList(this.transformNodes, (zz => zz.dispose(!0)));
        const sz = this.cameras;
        this._disposeList(sz), this._disposeList(this.lY), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multiviewSceneUbo.dispose(), this.postProcessManager.dispose(), this._disposeList(this._components);
        let Fz = this._engine.scenes.indexOf(this);
        if (Fz > -1 && this._engine.scenes.splice(Fz, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, gz.l)(), rz.c._LastCreatedScene === this) {
          rz.c._LastCreatedScene = null;
          let zz = rz.c.Instances.length - 1;
          for (; zz >= 0;) {
            const tz = rz.c.Instances[zz];
            if (tz.scenes.length > 0) {
              rz.c._LastCreatedScene = tz.scenes[this._engine.scenes.length - 1];
              break
            }
            zz--
          }
        }
        Fz = this._engine._virtualScenes.indexOf(this), Fz > -1 && this._engine._virtualScenes.splice(Fz, 1), this._engine.wipeCaches(!0), this.qJ.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clear(), this.onAfterRenderTargetsRenderObservable.clear(), this.onAfterStepObservable.clear(), this.onBeforeStepObservable.clear(), this.onBeforeActiveMeshesEvaluationObservable.clear(), this.onAfterActiveMeshesEvaluationObservable.clear(), this.onBeforeParticlesRenderingObservable.clear(), this.onAfterParticlesRenderingObservable.clear(), this.onBeforeDrawPhaseObservable.clear(), this.onAfterDrawPhaseObservable.clear(), this.onBeforeAnimationsObservable.clear(), this.onAfterAnimationsObservable.clear(), this.onDataLoadedObservable.clear(), this.onBeforeRenderingGroupObservable.clear(), this.onAfterRenderingGroupObservable.clear(), this.onMeshImportedObservable.clear(), this.onBeforeCameraRenderObservable.clear(), this.onAfterCameraRenderObservable.clear(), this.onAfterRenderCameraObservable.clear(), this.onReadyObservable.clear(), this.onNewCameraAddedObservable.clear(), this.onCameraRemovedObservable.clear(), this.onNewLightAddedObservable.clear(), this.onLightRemovedObservable.clear(), this.onNewGeometryAddedObservable.clear(), this.onGeometryRemovedObservable.clear(), this.onNewTransformNodeAddedObservable.clear(), this.onTransformNodeRemovedObservable.clear(), this.onNewMeshAddedObservable.clear(), this.onMeshRemovedObservable.clear(), this.onNewSkeletonAddedObservable.clear(), this.onSkeletonRemovedObservable.clear(), this.onNewMaterialAddedObservable.clear(), this.onNewMultiMaterialAddedObservable.clear(), this.onMaterialRemovedObservable.clear(), this.onMultiMaterialRemovedObservable.clear(), this.onNewTextureAddedObservable.clear(), this.onTextureRemovedObservable.clear(), this.onNewFrameGraphAddedObservable.clear(), this.onFrameGraphRemovedObservable.clear(), this.onNewObjectRendererAddedObservable.clear(), this.onObjectRendererRemovedObservable.clear(), this.onPrePointerObservable.clear(), this.onPointerObservable.clear(), this.onPreKeyboardObservable.clear(), this.onKeyboardObservable.clear(), this.onActiveCameraChanged.clear(), this.onScenePerformancePriorityChangedObservable.clear(), this.onClearColorChangedObservable.clear(), this.onEnvironmentTextureChangedObservable.clear(), this.onMeshUnderPointerUpdatedObservable.clear(), this._isDisposed = !0
      }
      _disposeList(zz, tz) {
        const sz = zz.slice(0);
        tz = tz ?? (zz => zz.dispose());
        for (const Fz of sz) tz(Fz);
        zz.length = 0
      }
      get zsz() {
        return this._isDisposed
      }
      clearCachedVertexData() {
        for (let zz = 0; zz < this.meshes.length; zz++) {
          const tz = this.meshes[zz].geometry;
          tz && tz.clearCachedData()
        }
      }
      cleanCachedTextureBuffer() {
        for (const zz of this.textures) {
          zz._buffer && (zz._buffer = null)
        }
      }
      getWorldExtends(zz) {
        const tz = new Kz.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          sz = new Kz.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        zz = zz || (() => !0);
        const Fz = this.meshes.filter(zz);
        for (const Wz of Fz) {
          if (Wz.computeWorldMatrix(!0), !Wz.kY || 0 === Wz.kY.length || Wz.infiniteDistance) continue;
          const zz = Wz.rC(),
            Fz = zz.boundingBox.minimumWorld,
            Xz = zz.boundingBox.maximumWorld;
          Kz.p.CheckExtends(Fz, tz, sz), Kz.p.CheckExtends(Xz, tz, sz)
        }
        return tz.x === Number.MAX_VALUE ? {
          min: Kz.p.Zero(),
          max: Kz.p.Zero()
        } : {
          min: tz,
          max: sz
        }
      }
      createPickingRay(zz, tz, sz, Fz) {
        throw (0, Yz.i)("Ray")
      }
      createPickingRayToRef(zz, tz, sz, Fz, Wz) {
        throw (0, Yz.i)("Ray")
      }
      createPickingRayInCameraSpace(zz, tz, sz) {
        throw (0, Yz.i)("Ray")
      }
      createPickingRayInCameraSpaceToRef(zz, tz, sz, Fz) {
        throw (0, Yz.i)("Ray")
      }
      gb(zz, tz, sz, Fz, Wz, Xz) {
        const Oz = (0, Yz.i)("Ray", !0);
        return Oz && ts.e.Warn(Oz), new bz.e
      }
      pickWithBoundingInfo(zz, tz, sz, Fz, Wz) {
        const Xz = (0, Yz.i)("Ray", !0);
        return Xz && ts.e.Warn(Xz), new bz.e
      }
      pickWithRay(zz, tz, sz, Fz) {
        throw (0, Yz.i)("Ray")
      }
      multiPick(zz, tz, sz, Fz, Wz) {
        throw (0, Yz.i)("Ray")
      }
      multiPickWithRay(zz, tz, sz) {
        throw (0, Yz.i)("Ray")
      }
      setPointerOverMesh(zz, tz, sz) {
        this._inputManager.setPointerOverMesh(zz, tz, sz)
      }
      getPointerOverMesh() {
        return this._inputManager.getPointerOverMesh()
      }
      _rebuildGeometries() {
        for (const zz of this.geometries) zz._rebuild();
        for (const zz of this.meshes) zz._rebuild();
        this.postProcessManager && this.postProcessManager._rebuild();
        for (const zz of this._components) zz.rebuild();
        for (const zz of this.lY) zz.rebuild();
        if (this.spriteManagers)
          for (const zz of this.spriteManagers) zz.rebuild()
      }
      _rebuildTextures() {
        for (const zz of this.textures) zz._rebuild(!0);
        this.markAllMaterialsAsDirty(1)
      }
      _getByTags(zz, tz, sz) {
        if (void 0 === tz) return zz;
        const Fz = [];
        for (const Wz in zz) {
          const Xz = zz[Wz];
          Uz.e && Uz.e.MatchesQuery(Xz, tz) && (!sz || sz(Xz)) && Fz.push(Xz)
        }
        return Fz
      }
      getMeshesByTags(zz, tz) {
        return this._getByTags(this.meshes, zz, tz)
      }
      getCamerasByTags(zz, tz) {
        return this._getByTags(this.cameras, zz, tz)
      }
      getLightsByTags(zz, tz) {
        return this._getByTags(this.lights, zz, tz)
      }
      getMaterialByTags(zz, tz) {
        return this._getByTags(this.materials, zz, tz).concat(this._getByTags(this.multiMaterials, zz, tz))
      }
      getTransformNodesByTags(zz, tz) {
        return this._getByTags(this.transformNodes, zz, tz)
      }
      setRenderingOrder(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(zz, tz, sz, Fz)
      }
      setRenderingAutoClearDepthStencil(zz, tz) {
        let sz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Fz = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(zz, tz, sz, Fz)
      }
      getAutoClearDepthStencilSetup(zz) {
        return this._renderingManager.getAutoClearDepthStencilSetup(zz)
      }
      _forceBlockMaterialDirtyMechanism(zz) {
        this._blockMaterialDirtyMechanism = zz
      }
      get blockMaterialDirtyMechanism() {
        return this._blockMaterialDirtyMechanism
      }
      set blockMaterialDirtyMechanism(zz) {
        this._blockMaterialDirtyMechanism !== zz && (this._blockMaterialDirtyMechanism = zz, zz || this.markAllMaterialsAsDirty(127))
      }
      markAllMaterialsAsDirty(zz, tz) {
        if (!this._blockMaterialDirtyMechanism)
          for (const sz of this.materials) tz && !tz(sz) || sz.wtz(zz)
      }
      _loadFile(zz, tz, sz, Fz, Wz, Xz, Oz) {
        const oz = (0, Vz.l)(zz, tz, sz, Fz ? this.offlineProvider : void 0, Wz, Xz, Oz);
        return this._activeRequests.push(oz), oz.onCompleteObservable.add((zz => {
          this._activeRequests.splice(this._activeRequests.indexOf(zz), 1)
        })), oz
      }
      async _loadFileAsync(zz, tz, sz, Fz, Wz) {
        return await new Promise(((Xz, Oz) => {
          this._loadFile(zz, (zz => {
            Xz(zz)
          }), tz, sz, Fz, ((zz, tz) => {
            Oz(tz)
          }), Wz)
        }))
      }
      async _loadDelayedFileAsync(zz, tz, sz) {
        this._delayedFileRequests || (this._delayedFileRequests = new Map);
        const Fz = `${zz}|${tz?"binary":"string"}`;
        let Wz = this._delayedFileRequests.get(Fz);
        if (!Wz) {
          Wz = tz ? this._loadFileAsync(zz, void 0, sz, !0) : this._loadFileAsync(zz, void 0, sz, !1);
          const Xz = Wz;
          (async () => {
            try {
              await Xz
            } catch {}
            this._delayedFileRequests?.delete(Fz)
          })(), this._delayedFileRequests.set(Fz, Wz)
        }
        return await Wz
      }
      _requestFile(zz, tz, sz, Fz, Wz, Xz, Oz) {
        const oz = (0, Vz.u)(zz, tz, sz, Fz ? this.offlineProvider : void 0, Wz, Xz, Oz);
        return this._activeRequests.push(oz), oz.onCompleteObservable.add((zz => {
          this._activeRequests.splice(this._activeRequests.indexOf(zz), 1)
        })), oz
      }
      async _requestFileAsync(zz, tz, sz, Fz, Wz) {
        return await new Promise(((Xz, Oz) => {
          this._requestFile(zz, (zz => {
            Xz(zz)
          }), tz, sz, Fz, (zz => {
            Oz(zz)
          }), Wz)
        }))
      }
      _readFile(zz, tz, sz, Fz, Wz) {
        const Xz = (0, Vz.q)(zz, tz, sz, Fz, Wz);
        return this._activeRequests.push(Xz), Xz.onCompleteObservable.add((zz => {
          this._activeRequests.splice(this._activeRequests.indexOf(zz), 1)
        })), Xz
      }
      async _readFileAsync(zz, tz, sz) {
        return await new Promise(((Fz, Wz) => {
          this._readFile(zz, (zz => {
            Fz(zz)
          }), tz, sz, (zz => {
            Wz(zz)
          }))
        }))
      }
      getPerfCollector() {
        throw (0, Yz.i)("performanceViewerSceneExtension")
      }
      setActiveCameraByID(zz) {
        return this.setActiveCameraById(zz)
      }
      getMaterialByID(zz) {
        return this.getMaterialById(zz)
      }
      getLastMaterialByID(zz) {
        return this.getLastMaterialById(zz)
      }
      getTextureByUniqueID(zz) {
        return this.getTextureByUniqueId(zz)
      }
      getCameraByID(zz) {
        return this.getCameraById(zz)
      }
      getCameraByUniqueID(zz) {
        return this.getCameraByUniqueId(zz)
      }
      getBoneByID(zz) {
        return this.getBoneById(zz)
      }
      getLightByID(zz) {
        return this.getLightById(zz)
      }
      getLightByUniqueID(zz) {
        return this.getLightByUniqueId(zz)
      }
      getParticleSystemByID(zz) {
        return this.getParticleSystemById(zz)
      }
      getGeometryByID(zz) {
        return this.getGeometryById(zz)
      }
      getMeshByID(zz) {
        return this.getMeshById(zz)
      }
      getMeshByUniqueID(zz) {
        return this.getMeshByUniqueId(zz)
      }
      getLastMeshByID(zz) {
        return this.getLastMeshById(zz)
      }
      getMeshesByID(zz) {
        return this.getMeshesById(zz)
      }
      getTransformNodeByID(zz) {
        return this.getTransformNodeById(zz)
      }
      getTransformNodeByUniqueID(zz) {
        return this.getTransformNodeByUniqueId(zz)
      }
      getTransformNodesByID(zz) {
        return this.getTransformNodesById(zz)
      }
      getNodeByID(zz) {
        return this.getNodeById(zz)
      }
      getLastEntryByID(zz) {
        return this.getLastEntryById(zz)
      }
      getLastSkeletonByID(zz) {
        return this.getLastSkeletonById(zz)
      }
    }
    Os.FOGMODE_NONE = 0, Os.FOGMODE_EXP = 1, Os.FOGMODE_EXP2 = 2, Os.FOGMODE_LINEAR = 3, Os.MinDeltaTime = 1, Os.MaxDeltaTime = 1e3, Os._OriginalDefaultMaterialFactory = Os.DefaultMaterialFactory;
    let os = !1;

    function vs() {
      os || (os = !0, (0, ss.g)("BABYLON.Scene", Os))
    }(Ez = Os.prototype).sortActiveAnimatables ?? (Ez.sortActiveAnimatables = (0, Yz.g)("Scene", "sortActiveAnimatables")), (zt = Os.prototype).beginWeightedAnimation ?? (zt.beginWeightedAnimation = (0, Yz.g)("Scene", "beginWeightedAnimation")), (tt = Os.prototype).beginAnimation ?? (tt.beginAnimation = (0, Yz.g)("Scene", "beginAnimation")), (st = Os.prototype).beginHierarchyAnimation ?? (st.beginHierarchyAnimation = (0, Yz.g)("Scene", "beginHierarchyAnimation")), (Ft = Os.prototype).beginDirectAnimation ?? (Ft.beginDirectAnimation = (0, Yz.g)("Scene", "beginDirectAnimation")), (Wt = Os.prototype).beginDirectHierarchyAnimation ?? (Wt.beginDirectHierarchyAnimation = (0, Yz.g)("Scene", "beginDirectHierarchyAnimation")), (Xt = Os.prototype).getAnimatableByTarget ?? (Xt.getAnimatableByTarget = (0, Yz.g)("Scene", "getAnimatableByTarget")), (Ot = Os.prototype).getAllAnimatablesByTarget ?? (Ot.getAllAnimatablesByTarget = (0, Yz.g)("Scene", "getAllAnimatablesByTarget")), (ot = Os.prototype).stopAllAnimations ?? (ot.stopAllAnimations = (0, Yz.g)("Scene", "stopAllAnimations")), (vt = Os.prototype).getSoundByName ?? (vt.getSoundByName = (0, Yz.g)("Scene", "getSoundByName")), (Ut = Os.prototype).createOrUpdateSelectionOctree ?? (Ut.createOrUpdateSelectionOctree = (0, Yz.g)("Scene", "createOrUpdateSelectionOctree")), (Kt = Os.prototype).createDefaultLight ?? (Kt.createDefaultLight = (0, Yz.g)("Scene", "createDefaultLight")), (ut = Os.prototype).createDefaultCamera ?? (ut.createDefaultCamera = (0, Yz.g)("Scene", "createDefaultCamera")), (Nt = Os.prototype).createDefaultCameraOrLight ?? (Nt.createDefaultCameraOrLight = (0, Yz.g)("Scene", "createDefaultCameraOrLight")), (bt = Os.prototype).createDefaultSkybox ?? (bt.createDefaultSkybox = (0, Yz.g)("Scene", "createDefaultSkybox")), (wt = Os.prototype).createDefaultEnvironment ?? (wt.createDefaultEnvironment = (0, Yz.g)("Scene", "createDefaultEnvironment")), (Dt = Os.prototype).createDefaultVRExperience ?? (Dt.createDefaultVRExperience = (0, Yz.g)("Scene", "createDefaultVRExperience")), (gt = Os.prototype).createDefaultXRExperienceAsync ?? (gt.createDefaultXRExperienceAsync = (0, Yz.g)("Scene", "createDefaultXRExperienceAsync")), (Ht = Os.prototype).getGlowLayerByName ?? (Ht.getGlowLayerByName = (0, Yz.g)("Scene", "getGlowLayerByName")), (Bt = Os.prototype).getHighlightLayerByName ?? (Bt.getHighlightLayerByName = (0, Yz.g)("Scene", "getHighlightLayerByName")), (Pt = Os.prototype).getSelectionOutlineLayerByName ?? (Pt.getSelectionOutlineLayerByName = (0, Yz.g)("Scene", "getSelectionOutlineLayerByName")), (rt = Os.prototype).removeLensFlareSystem ?? (rt.removeLensFlareSystem = (0, Yz.g)("Scene", "removeLensFlareSystem")), (Yt = Os.prototype).addLensFlareSystem ?? (Yt.addLensFlareSystem = (0, Yz.g)("Scene", "addLensFlareSystem")), (xt = Os.prototype).getLensFlareSystemByName ?? (xt.getLensFlareSystemByName = (0, Yz.g)("Scene", "getLensFlareSystemByName")), (mt = Os.prototype).getLensFlareSystemByID ?? (mt.getLensFlareSystemByID = (0, Yz.g)("Scene", "getLensFlareSystemByID")), (Jt = Os.prototype).getLensFlareSystemById ?? (Jt.getLensFlareSystemById = (0, Yz.g)("Scene", "getLensFlareSystemById")), (It = Os.prototype).getPhysicsEngine ?? (It.getPhysicsEngine = (0, Yz.g)("Scene", "getPhysicsEngine")), (Ct = Os.prototype).enablePhysics ?? (Ct.enablePhysics = (0, Yz.g)("Scene", "enablePhysics")), (et = Os.prototype).disablePhysicsEngine ?? (et.disablePhysicsEngine = (0, Yz.g)("Scene", "disablePhysicsEngine")), (Zt = Os.prototype).isPhysicsEnabled ?? (Zt.isPhysicsEnabled = (0, Yz.g)("Scene", "isPhysicsEnabled")), (Gt = Os.prototype).deleteCompoundImpostor ?? (Gt.deleteCompoundImpostor = (0, Yz.g)("Scene", "deleteCompoundImpostor")), (Tt = Os.prototype).removeReflectionProbe ?? (Tt.removeReflectionProbe = (0, Yz.g)("Scene", "removeReflectionProbe")), (ct = Os.prototype).addReflectionProbe ?? (ct.addReflectionProbe = (0, Yz.g)("Scene", "addReflectionProbe")), (jt = Os.prototype).getBoundingBoxRenderer ?? (jt.getBoundingBoxRenderer = (0, Yz.g)("Scene", "getBoundingBoxRenderer")), (At = Os.prototype).enableDepthRenderer ?? (At.enableDepthRenderer = (0, Yz.g)("Scene", "enableDepthRenderer")), (yt = Os.prototype).disableDepthRenderer ?? (yt.disableDepthRenderer = (0, Yz.g)("Scene", "disableDepthRenderer")), (Mt = Os.prototype).enableFluidRenderer ?? (Mt.enableFluidRenderer = (0, Yz.g)("Scene", "enableFluidRenderer")), (dt = Os.prototype).disableFluidRenderer ?? (dt.disableFluidRenderer = (0, Yz.g)("Scene", "disableFluidRenderer")), (ht = Os.prototype).enableGeometryBufferRenderer ?? (ht.enableGeometryBufferRenderer = (0, Yz.g)("Scene", "enableGeometryBufferRenderer")), (Qt = Os.prototype).disableGeometryBufferRenderer ?? (Qt.disableGeometryBufferRenderer = (0, Yz.g)("Scene", "disableGeometryBufferRenderer")), (kt = Os.prototype).enableIblCdfGenerator ?? (kt.enableIblCdfGenerator = (0, Yz.g)("Scene", "enableIblCdfGenerator")), (it = Os.prototype).disableIblCdfGenerator ?? (it.disableIblCdfGenerator = (0, Yz.g)("Scene", "disableIblCdfGenerator")), (Lt = Os.prototype).getOutlineRenderer ?? (Lt.getOutlineRenderer = (0, Yz.g)("Scene", "getOutlineRenderer")), (lt = Os.prototype).enablePrePassRenderer ?? (lt.enablePrePassRenderer = (0, Yz.g)("Scene", "enablePrePassRenderer")), (nt = Os.prototype).disablePrePassRenderer ?? (nt.disablePrePassRenderer = (0, Yz.g)("Scene", "disablePrePassRenderer")), (qt = Os.prototype).enableSubSurfaceForPrePass ?? (qt.enableSubSurfaceForPrePass = (0, Yz.g)("Scene", "enableSubSurfaceForPrePass")), (St = Os.prototype).disableSubSurfaceForPrePass ?? (St.disableSubSurfaceForPrePass = (0, Yz.g)("Scene", "disableSubSurfaceForPrePass")), (Vt = Os.prototype).pickSprite ?? (Vt.pickSprite = (0, Yz.g)("Scene", "pickSprite")), (Rt = Os.prototype).pickSpriteWithRay ?? (Rt.pickSpriteWithRay = (0, Yz.g)("Scene", "pickSpriteWithRay")), (pt = Os.prototype).multiPickSprite ?? (pt.multiPickSprite = (0, Yz.g)("Scene", "multiPickSprite")), (ft = Os.prototype).multiPickSpriteWithRay ?? (ft.multiPickSpriteWithRay = (0, Yz.g)("Scene", "multiPickSpriteWithRay")), (Et = Os.prototype).setPointerOverSprite ?? (Et.setPointerOverSprite = (0, Yz.g)("Scene", "setPointerOverSprite")), (zs = Os.prototype).getPointerOverSprite ?? (zs.getPointerOverSprite = (0, Yz.g)("Scene", "getPointerOverSprite")), Object.getOwnPropertyDescriptor(Os.prototype, "mainSoundTrack") || Object.defineProperty(Os.prototype, "mainSoundTrack", (0, Yz.f)("Scene", "mainSoundTrack")), Object.getOwnPropertyDescriptor(Os.prototype, "soundTracks") || Object.defineProperty(Os.prototype, "soundTracks", (0, Yz.f)("Scene", "soundTracks")), Object.getOwnPropertyDescriptor(Os.prototype, "audioEnabled") || Object.defineProperty(Os.prototype, "audioEnabled", (0, Yz.f)("Scene", "audioEnabled")), Object.getOwnPropertyDescriptor(Os.prototype, "headphone") || Object.defineProperty(Os.prototype, "headphone", (0, Yz.f)("Scene", "headphone")), Object.getOwnPropertyDescriptor(Os.prototype, "audioListenerPositionProvider") || Object.defineProperty(Os.prototype, "audioListenerPositionProvider", (0, Yz.f)("Scene", "audioListenerPositionProvider")), Object.getOwnPropertyDescriptor(Os.prototype, "audioListenerRotationProvider") || Object.defineProperty(Os.prototype, "audioListenerRotationProvider", (0, Yz.f)("Scene", "audioListenerRotationProvider")), Object.getOwnPropertyDescriptor(Os.prototype, "audioPositioningRefreshRate") || Object.defineProperty(Os.prototype, "audioPositioningRefreshRate", (0, Yz.f)("Scene", "audioPositioningRefreshRate")), Object.getOwnPropertyDescriptor(Os.prototype, "selectionOctree") || Object.defineProperty(Os.prototype, "selectionOctree", (0, Yz.f)("Scene", "selectionOctree")), Object.getOwnPropertyDescriptor(Os.prototype, "debugLayer") || Object.defineProperty(Os.prototype, "debugLayer", (0, Yz.f)("Scene", "debugLayer")), Object.getOwnPropertyDescriptor(Os.prototype, "gamepadManager") || Object.defineProperty(Os.prototype, "gamepadManager", (0, Yz.f)("Scene", "gamepadManager")), Object.getOwnPropertyDescriptor(Os.prototype, "simplificationQueue") || Object.defineProperty(Os.prototype, "simplificationQueue", (0, Yz.f)("Scene", "simplificationQueue")), Object.getOwnPropertyDescriptor(Os.prototype, "onBeforePhysicsObservable") || Object.defineProperty(Os.prototype, "onBeforePhysicsObservable", (0, Yz.f)("Scene", "onBeforePhysicsObservable")), Object.getOwnPropertyDescriptor(Os.prototype, "onAfterPhysicsObservable") || Object.defineProperty(Os.prototype, "onAfterPhysicsObservable", (0, Yz.f)("Scene", "onAfterPhysicsObservable")), Object.getOwnPropertyDescriptor(Os.prototype, "reflectionProbes") || Object.defineProperty(Os.prototype, "reflectionProbes", (0, Yz.f)("Scene", "reflectionProbes")), Object.getOwnPropertyDescriptor(Os.prototype, "forceShowBoundingBoxes") || Object.defineProperty(Os.prototype, "forceShowBoundingBoxes", (0, Yz.f)("Scene", "forceShowBoundingBoxes")), Object.getOwnPropertyDescriptor(Os.prototype, "depthPeelingRenderer") || Object.defineProperty(Os.prototype, "depthPeelingRenderer", (0, Yz.f)("Scene", "depthPeelingRenderer")), Object.getOwnPropertyDescriptor(Os.prototype, "useOrderIndependentTransparency") || Object.defineProperty(Os.prototype, "useOrderIndependentTransparency", (0, Yz.f)("Scene", "useOrderIndependentTransparency")), Object.getOwnPropertyDescriptor(Os.prototype, "fluidRenderer") || Object.defineProperty(Os.prototype, "fluidRenderer", (0, Yz.f)("Scene", "fluidRenderer")), Object.getOwnPropertyDescriptor(Os.prototype, "geometryBufferRenderer") || Object.defineProperty(Os.prototype, "geometryBufferRenderer", (0, Yz.f)("Scene", "geometryBufferRenderer")), Object.getOwnPropertyDescriptor(Os.prototype, "iblCdfGenerator") || Object.defineProperty(Os.prototype, "iblCdfGenerator", (0, Yz.f)("Scene", "iblCdfGenerator")), Object.getOwnPropertyDescriptor(Os.prototype, "prePassRenderer") || Object.defineProperty(Os.prototype, "prePassRenderer", (0, Yz.f)("Scene", "prePassRenderer")), Object.getOwnPropertyDescriptor(Os.prototype, "subSurfaceConfiguration") || Object.defineProperty(Os.prototype, "subSurfaceConfiguration", (0, Yz.f)("Scene", "subSurfaceConfiguration")), Object.getOwnPropertyDescriptor(Os.prototype, "spriteManagers") || Object.defineProperty(Os.prototype, "spriteManagers", (0, Yz.f)("Scene", "spriteManagers")), Object.getOwnPropertyDescriptor(Os.prototype, "onBeforeSpritesRenderingObservable") || Object.defineProperty(Os.prototype, "onBeforeSpritesRenderingObservable", (0, Yz.f)("Scene", "onBeforeSpritesRenderingObservable")), Object.getOwnPropertyDescriptor(Os.prototype, "onAfterSpritesRenderingObservable") || Object.defineProperty(Os.prototype, "onAfterSpritesRenderingObservable", (0, Yz.f)("Scene", "onAfterSpritesRenderingObservable"))
  },
  39319: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Fz,
      g: () => Wz
    });
    class Fz {}
    Fz.NAME_EFFECTLAYER = "EffectLayer", Fz.NAME_LAYER = "Layer", Fz.NAME_LENSFLARESYSTEM = "LensFlareSystem", Fz.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", Fz.NAME_PARTICLESYSTEM = "ParticleSystem", Fz.NAME_GAMEPAD = "Gamepad", Fz.NAME_SIMPLIFICATIONQUEUE = "SimplificationQueue", Fz.NAME_GEOMETRYBUFFERRENDERER = "GeometryBufferRenderer", Fz.NAME_PREPASSRENDERER = "PrePassRenderer", Fz.NAME_DEPTHRENDERER = "DepthRenderer", Fz.NAME_DEPTHPEELINGRENDERER = "DepthPeelingRenderer", Fz.NAME_POSTPROCESSRENDERPIPELINEMANAGER = "PostProcessRenderPipelineManager", Fz.NAME_SPRITE = "Sprite", Fz.NAME_SUBSURFACE = "SubSurface", Fz.NAME_OUTLINERENDERER = "Outline", Fz.NAME_PROCEDURALTEXTURE = "ProceduralTexture", Fz.NAME_SHADOWGENERATOR = "ShadowGenerator", Fz.NAME_OCTREE = "Rsz", Fz.NAME_PHYSICSENGINE = "PhysicsEngine", Fz.NAME_AUDIO = "Audio", Fz.NAME_FLUIDRENDERER = "FluidRenderer", Fz.NAME_IBLCDFGENERATOR = "iblCDFGenerator", Fz.NAME_CLUSTEREDLIGHTING = "ClusteredLighting", Fz.STEP_ISREADYFORMESH_EFFECTLAYER = 0, Fz.STEP_ISREADYFORMESH_DEPTHRENDERER = 1, Fz.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER = 0, Fz.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER = 0, Fz.STEP_PREACTIVEMESH_BOUNDINGBOXRENDERER = 0, Fz.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER = 1, Fz.STEP_BEFORECAMERADRAW_PREPASS = 0, Fz.STEP_BEFORECAMERADRAW_EFFECTLAYER = 1, Fz.STEP_BEFORECAMERADRAW_LAYER = 2, Fz.STEP_BEFORERENDERTARGETDRAW_PREPASS = 0, Fz.STEP_BEFORERENDERTARGETDRAW_LAYER = 1, Fz.STEP_BEFORERENDERINGMESH_PREPASS = 0, Fz.STEP_BEFORERENDERINGMESH_OUTLINE = 1, Fz.STEP_AFTERRENDERINGMESH_PREPASS = 0, Fz.STEP_AFTERRENDERINGMESH_OUTLINE = 1, Fz.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW = 0, Fz.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER = 1, Fz.STEP_BEFORECAMERAUPDATE_SIMPLIFICATIONQUEUE = 0, Fz.STEP_BEFORECLEAR_PROCEDURALTEXTURE = 0, Fz.STEP_BEFORECLEAR_PREPASS = 1, Fz.STEP_BEFORERENDERTARGETCLEAR_PREPASS = 0, Fz.STEP_AFTERRENDERTARGETDRAW_PREPASS = 0, Fz.STEP_AFTERRENDERTARGETDRAW_LAYER = 1, Fz.STEP_AFTERCAMERADRAW_PREPASS = 0, Fz.STEP_AFTERCAMERADRAW_EFFECTLAYER = 1, Fz.STEP_AFTERCAMERADRAW_LENSFLARESYSTEM = 2, Fz.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW = 3, Fz.STEP_AFTERCAMERADRAW_LAYER = 4, Fz.STEP_AFTERCAMERADRAW_FLUIDRENDERER = 5, Fz.STEP_AFTERCAMERAPOSTPROCESS_LAYER = 0, Fz.STEP_AFTERRENDERTARGETPOSTPROCESS_LAYER = 0, Fz.STEP_AFTERRENDER_AUDIO = 0, Fz.STEP_GATHERRENDERTARGETS_DEPTHRENDERER = 0, Fz.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER = 1, Fz.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR = 2, Fz.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER = 3, Fz.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER = 0, Fz.STEP_GATHERACTIVECAMERARENDERTARGETS_FLUIDRENDERER = 1, Fz.STEP_GATHERACTIVECAMERARENDERTARGETS_CLUSTEREDLIGHTING = 2, Fz.STEP_POINTERMOVE_SPRITE = 0, Fz.STEP_POINTERDOWN_SPRITE = 0, Fz.STEP_POINTERUP_SPRITE = 0;
    class Wz extends Array {
      constructor(zz) {
        super(...zz)
      }
      static Create() {
        return Object.create(Wz.prototype)
      }
      registerStep(zz, tz, sz) {
        let Fz, Wz = 0;
        for (; Wz < this.length; Wz++) {
          if (Fz = this[Wz].index, zz < Fz) break
        }
        this.splice(Wz, 0, {
          index: zz,
          component: tz,
          action: sz.bind(tz)
        })
      }
      clear() {
        this.length = 0
      }
    }
  },
  39167: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Oz,
      g: () => oz,
      h: () => Fz,
      k: () => Wz,
      n: () => Xz
    });

    function Fz(zz, tz, sz, Fz, Wz, Xz) {
      function Oz(zz) {
        if (void 0 !== zz && "function" !== typeof zz) throw new TypeError("Function expected");
        return zz
      }
      for (var oz, vz = Fz.kind, Uz = "getter" === vz ? "get" : "setter" === vz ? "set" : "value", Kz = !tz && zz ? Fz.static ? zz : zz.prototype : null, uz = tz || (Kz ? Object.getOwnPropertyDescriptor(Kz, Fz.name) : {}), Nz = !1, bz = sz.length - 1; bz >= 0; bz--) {
        var wz = {};
        for (var Dz in Fz) wz[Dz] = "access" === Dz ? {} : Fz[Dz];
        for (var Dz in Fz.access) wz.access[Dz] = Fz.access[Dz];
        wz.addInitializer = function(zz) {
          if (Nz) throw new TypeError("Cannot add initializers after decoration has completed");
          Xz.push(Oz(zz || null))
        };
        var gz = (0, sz[bz])("accessor" === vz ? {
          get: uz.get,
          set: uz.set
        } : uz[Uz], wz);
        if ("accessor" === vz) {
          if (void 0 === gz) continue;
          if (null === gz || "object" !== typeof gz) throw new TypeError("Object expected");
          (oz = Oz(gz.get)) && (uz.get = oz), (oz = Oz(gz.set)) && (uz.set = oz), (oz = Oz(gz.init)) && Wz.unshift(oz)
        } else(oz = Oz(gz)) && ("field" === vz ? Wz.unshift(oz) : uz[Uz] = oz)
      }
      Kz && Object.defineProperty(Kz, Fz.name, uz), Nz = !0
    }

    function Wz(zz, tz, sz) {
      for (var Fz = arguments.length > 2, Wz = 0; Wz < tz.length; Wz++) sz = Fz ? tz[Wz].call(zz, sz) : tz[Wz].call(zz);
      return Fz ? sz : void 0
    }

    function Xz(zz, tz, sz) {
      return "symbol" === typeof tz && (tz = tz.description ? "[".concat(tz.description, "]") : ""), Object.defineProperty(zz, "name", {
        configurable: !0,
        value: sz ? "".concat(sz, " ", tz) : tz
      })
    }
    Object.create;
    Object.create;

    function Oz(zz, tz, sz, Fz) {
      if ("a" === sz && !Fz) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof tz ? zz !== tz || !Fz : !tz.has(zz)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === sz ? Fz : "a" === sz ? Fz.call(zz) : Fz ? Fz.value : tz.get(zz)
    }

    function oz(zz, tz, sz, Fz, Wz) {
      if ("m" === Fz) throw new TypeError("Private method is not writable");
      if ("a" === Fz && !Wz) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof tz ? zz !== tz || !Wz : !tz.has(zz)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === Fz ? Wz.call(zz, sz) : Wz ? Wz.value = sz : tz.set(zz, sz), sz
    }
    "function" === typeof SuppressedError && SuppressedError
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);